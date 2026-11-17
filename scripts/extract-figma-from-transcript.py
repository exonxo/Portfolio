"""
Extract Figma screenshots from the Claude Code session JSONL transcript and save
them as PNG files in public/case-studies/ginesys-pos/.

The Figma MCP returns screenshots as base64-encoded image content blocks. Claude
Code stores those blocks verbatim in the session transcript, so we can recover
the raw bytes without re-calling the MCP.
"""

import base64
import json
import os
import sys

TRANSCRIPT = r"C:/Users/CN/.claude/projects/C--Users-CN-Documents-Stock-Audit/906531fb-d5b0-43ba-8d20-ae427833b18a.jsonl"
OUT_DIR = r"C:/Users/CN/Documents/portfolio/public/case-studies/ginesys-pos"

# nodeId -> output filename
NODE_TO_FILE = {
    "66526:48618": "login.png",
    "66526:56951": "home-blank.png",
    "66526:52465": "scanner.png",
    "66526:53606": "item-details.png",
    "66526:57283": "search-customer.png",
    "66526:49261": "payment.png",
    "66526:48695": "device-limit.png",
    "66526:48773": "active-session.png",
    "66526:48734": "connection-failed.png",
    "66526:67680": "update-quantity.png",
    "66526:53692": "bill-summary.png",
    "66526:57902": "tagged-customer.png",
}

os.makedirs(OUT_DIR, exist_ok=True)


def find_images(node, found):
    """Recursively walk a JSON tree, returning all base64 image data strings."""
    if isinstance(node, dict):
        if (
            node.get("type") == "image"
            and isinstance(node.get("source"), dict)
            and node["source"].get("type") == "base64"
            and isinstance(node["source"].get("data"), str)
        ):
            found.append(node["source"]["data"])
        for v in node.values():
            find_images(v, found)
    elif isinstance(node, list):
        for v in node:
            find_images(v, found)


# Pass 1: build tool_use_id -> nodeId map
tool_use_to_node = {}
with open(TRANSCRIPT, "r", encoding="utf-8") as f:
    for line in f:
        try:
            obj = json.loads(line)
        except json.JSONDecodeError:
            continue
        msg = obj.get("message") or {}
        if not isinstance(msg, dict):
            continue
        content = msg.get("content")
        if not isinstance(content, list):
            continue
        for block in content:
            if not isinstance(block, dict):
                continue
            if block.get("type") == "tool_use" and "screenshot" in str(
                block.get("name", "")
            ):
                node_id = (block.get("input") or {}).get("nodeId")
                if node_id:
                    tool_use_to_node[block.get("id")] = node_id

print(f"Found {len(tool_use_to_node)} screenshot tool calls in transcript")

# Pass 2: walk tool_results, link via tool_use_id, extract base64, write file
saved = set()
with open(TRANSCRIPT, "r", encoding="utf-8") as f:
    for line in f:
        try:
            obj = json.loads(line)
        except json.JSONDecodeError:
            continue
        msg = obj.get("message") or {}
        if not isinstance(msg, dict):
            continue
        content = msg.get("content")
        if not isinstance(content, list):
            continue
        for block in content:
            if not isinstance(block, dict):
                continue
            if block.get("type") != "tool_result":
                continue
            tu_id = block.get("tool_use_id")
            node_id = tool_use_to_node.get(tu_id)
            if not node_id or node_id not in NODE_TO_FILE:
                continue
            images = []
            find_images(block.get("content"), images)
            if not images:
                continue
            # Use the last (largest / most recent) image for this node
            b64 = max(images, key=len)
            out_path = os.path.join(OUT_DIR, NODE_TO_FILE[node_id])
            with open(out_path, "wb") as outf:
                outf.write(base64.b64decode(b64))
            saved.add(node_id)
            print(f"  saved {NODE_TO_FILE[node_id]} ({len(b64)//1024} KB b64)")

print(f"\nSaved {len(saved)}/{len(NODE_TO_FILE)} screenshots")
missing = set(NODE_TO_FILE) - saved
if missing:
    print("Missing:", missing)
    sys.exit(1)
