/**
 * Downloads Ginesys POS screenshots from Figma and saves them to public/case-studies/ginesys-pos/
 *
 * Usage:
 *   node scripts/download-figma-screens.mjs <FIGMA_PERSONAL_ACCESS_TOKEN>
 *
 * Get your token at: https://www.figma.com/settings → Personal access tokens
 */

import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const TOKEN = process.argv[2];
if (!TOKEN) {
  console.error("Usage: node scripts/download-figma-screens.mjs <FIGMA_TOKEN>");
  process.exit(1);
}

const FILE_KEY = "gPsFbGlrqq2w1fCMikARVk";

const SCREENS = [
  { id: "66526:48618", file: "login.png" },
  { id: "66526:56951", file: "home-blank.png" },
  { id: "66526:52465", file: "scanner.png" },
  { id: "66526:53606", file: "item-details.png" },
  { id: "66526:57283", file: "search-customer.png" },
  { id: "66526:49261", file: "payment.png" },
  { id: "66526:48695", file: "device-limit.png" },
  { id: "66526:48773", file: "active-session.png" },
  { id: "66526:48734", file: "connection-failed.png" },
  { id: "66526:67680", file: "update-quantity.png" },
  { id: "66526:53692", file: "bill-summary.png" },
  { id: "66526:57902", file: "tagged-customer.png" },
];

const OUT_DIR = join(
  dirname(fileURLToPath(import.meta.url)),
  "../public/case-studies/ginesys-pos"
);

mkdirSync(OUT_DIR, { recursive: true });

const ids = SCREENS.map((s) => s.id).join(",");

console.log("Requesting export URLs from Figma API…");

const res = await fetch(
  `https://api.figma.com/v1/images/${FILE_KEY}?ids=${encodeURIComponent(ids)}&format=png&scale=2`,
  { headers: { "X-Figma-Token": TOKEN } }
);

if (!res.ok) {
  const text = await res.text();
  console.error("Figma API error:", res.status, text);
  process.exit(1);
}

const { images, err } = await res.json();
if (err) {
  console.error("Figma returned error:", err);
  process.exit(1);
}

console.log(`Got ${Object.keys(images).length} image URLs. Downloading…\n`);

for (const screen of SCREENS) {
  // Figma returns IDs with hyphens instead of colons in the response
  const key = screen.id.replace(":", "-");
  const url = images[screen.id] ?? images[key];
  if (!url) {
    console.warn(`  ⚠ No URL for ${screen.id} (${screen.file})`);
    continue;
  }

  const imgRes = await fetch(url);
  if (!imgRes.ok) {
    console.warn(`  ✗ Download failed for ${screen.file}: ${imgRes.status}`);
    continue;
  }

  const buf = Buffer.from(await imgRes.arrayBuffer());
  writeFileSync(join(OUT_DIR, screen.file), buf);
  console.log(`  ✓ ${screen.file}`);
}

console.log("\nDone! Images saved to public/case-studies/ginesys-pos/");
