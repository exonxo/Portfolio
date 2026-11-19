"use client"

import * as React from "react"
import { Archivo_Black } from "next/font/google"

// The poster headline needs a heavy grotesk. Loaded here so only this
// component pays for it.
const archivo = Archivo_Black({ weight: "400", subsets: ["latin"], variable: "--font-archivo-black" })

/* ------------------------------------------------------------------ types */

export type MascotPortfolioHeroProps = {
  /**
   * Height of the hero. Must be a definite length — the poster is fitted to
   * this box, so a percentage collapses to 0px unless every ancestor up to
   * `<html>` has a real height. Never pass `"100%"`.
   */
  height?: string
  /** Floor for the height, so the headline stays legible. */
  minHeight?: string

  /* ---- top rule ---- */
  index?: string
  discipline?: string
  tagline?: string
  collection?: [string, string]
  reel?: [string, string]

  /* ---- headline ---- */
  year?: string
  initials?: string
  badge?: string
  line2?: string
  /** Its last letter gets the looping swash. */
  line3?: string
  word?: string
  verticalTag?: string
  bracketed?: string

  /* ---- pill and services ---- */
  seekingLabel?: string
  seeking?: string
  href?: string
  services?: string[]

  /* ---- the character ---- */
  greetings?: string[]
  skin?: string
  hair?: string
  /** Blazer colour. */
  shirt?: string
  /** Frame colour of the glasses. */
  glasses?: string

  /* ---- palette (any CSS colour, including var(--token)) ---- */
  accent?: string
  /** Text set on the accent. */
  accentInk?: string
  paper?: string
  ink?: string
  /** Fill for the pill, speech bubble and flower. */
  card?: string
  className?: string
}

const SANS_STACK = 'var(--font-geist-sans),"Inter","Helvetica Neue",Helvetica,Arial,system-ui,sans-serif'
const DISPLAY_STACK =
  'var(--font-archivo-black),"Archivo Black","Arial Black","Helvetica Neue",Helvetica,Arial,system-ui,sans-serif'

/* The character's sheet. Every coordinate in the figure lives in this box. */
const CW = 600
const CH = 720

/* --------------------------------------------------------------- the gaze
   The figure is flat SVG. What sells it as a head turning is parallax: the
   features ride on top of the skull and move further than it does, the nose
   sits proud of the face and moves further still, and the ears go the other
   way and foreshorten. */

/** Pointer direction relative to the head, soft-saturated into (-1, 1). */
export function aim(px: number, py: number, cx: number, cy: number, rx: number, ry: number) {
  const sat = (v: number) => v / Math.sqrt(1 + v * v)
  return [sat((px - cx) / rx), sat((py - cy) / ry)]
}

/** Frame-rate-independent easing of `cur` towards `target`. */
export function approach(cur: number, target: number, dt: number, rate: number) {
  return target + (cur - target) * Math.exp(-rate * dt)
}

/** How far each layer moves for a gaze of (x, y); `near` widens the eyes. */
export function pose(x: number, y: number, near: number) {
  return {
    body: { dx: x * 4, dy: 0 },
    head: { dx: x * 10, dy: y * 7, rot: x * 4 },
    ears: { dx: -x * 7, dy: -y * 3, lead: 1 + x * 0.16, trail: 1 - x * 0.16 },
    hair: { dx: x * 13, dy: y * 4 },
    beard: { dx: x * 14, dy: y * 6 },
    blush: { dx: x * 20, dy: y * 14 },
    face: { dx: x * 28, dy: y * (y < 0 ? 11 : 20) },
    nose: { dx: x * 10, dy: y * 7 },
    eyes: { dx: x * 4, dy: y * 4, scale: 1 + near * 0.14 },
    brows: { dx: x * 3, dy: y * 2 + Math.min(0, y) * 3 - near * 9 },
  }
}

/** Blink envelope: 1 is open, dips towards 0.08 across a 150ms blink. */
export function blink(since: number) {
  const d = 0.15
  if (since < 0 || since > d) return 1
  return 1 - Math.sin((Math.PI * since) / d) * 0.92
}

/* ------------------------------------------------------------- the room */

type Seg = [number, number, number, number]

/** A one-point-perspective room in a 1000x1000 box stretched to fill the hero. */
function room(): { back: Seg[]; rays: Seg[]; depth: string[] } {
  const x0 = 95
  const x1 = 905
  const y0 = 85
  const y1 = 865
  const vx = (x0 + x1) / 2
  const vy = (y0 + y1) / 2
  const cols = 14
  const rows = 11
  const back: Seg[] = []
  const rays: Seg[] = []
  const out = (x: number, y: number): Seg => {
    const dx = x - vx
    const dy = y - vy
    const tx = dx > 0 ? (1000 - x) / dx : dx < 0 ? -x / dx : Infinity
    const ty = dy > 0 ? (1000 - y) / dy : dy < 0 ? -y / dy : Infinity
    const t = Math.min(tx, ty)
    return [x, y, x + dx * t, y + dy * t]
  }
  for (let i = 0; i <= cols; i++) {
    const x = x0 + ((x1 - x0) * i) / cols
    back.push([x, y0, x, y1])
    rays.push(out(x, y0), out(x, y1))
  }
  for (let j = 0; j <= rows; j++) {
    const y = y0 + ((y1 - y0) * j) / rows
    back.push([x0, y, x1, y])
    rays.push(out(x0, y), out(x1, y))
  }
  const depth = [1.07, 1.16, 1.28, 1.45, 1.7].map((s) => {
    const l = vx + (x0 - vx) * s
    const r = vx + (x1 - vx) * s
    const t = vy + (y0 - vy) * s
    const b = vy + (y1 - vy) * s
    return "M" + l + " " + t + "H" + r + "V" + b + "H" + l + "Z"
  })
  return { back, rays, depth }
}

const ROOM = room()

/** Five irregular petals as one closed outline. */
function flowerPath() {
  const n = 180
  const lens = [1, 0.84, 0.95, 0.78, 0.9]
  let d = ""
  for (let i = 0; i <= n; i++) {
    const a = (i / n) * Math.PI * 2
    const k = Math.floor(((a + Math.PI / 5) / (Math.PI * 2)) * 5) % 5
    const lobe = Math.pow(Math.abs(Math.cos((a * 5) / 2)), 0.9)
    const r = 50 * (0.3 + 0.7 * lobe * lens[k])
    const x = 60 + Math.cos(a - Math.PI / 2) * r
    const y = 60 + Math.sin(a - Math.PI / 2) * r
    d += (i ? "L" : "M") + x.toFixed(1) + " " + y.toFixed(1)
  }
  return d + "Z"
}

const FLOWER = flowerPath()

/* ----------------------------------------------------------------- styles */

const CSS = `
.mph-root{position:relative;width:100%;overflow:hidden;isolation:isolate;background:var(--mph-paper);color:var(--mph-ink);container:mph / size;font-family:var(--mph-sans);-webkit-font-smoothing:antialiased;}
.mph-room{position:absolute;inset:0;width:100%;height:100%;display:block;color:var(--mph-ink);pointer-events:none;}
.mph-room line,.mph-room path{vector-effect:non-scaling-stroke;}
.mph-stage{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:min(100cqw,177.78cqh);aspect-ratio:16/9;container:mphs / inline-size;}

.mph-top{position:absolute;left:4.6%;right:4.6%;top:4.4%;display:grid;grid-template-columns:auto auto 1fr auto auto;align-items:center;column-gap:2.4cqw;font-size:1.05cqw;font-weight:800;line-height:1.1;text-transform:uppercase;letter-spacing:.02em;}
.mph-index{display:inline-flex;align-items:center;gap:.9em;border:.12cqw solid var(--mph-ink);border-radius:999px;padding:.12em .9em .12em .12em;font-size:.72em;}
.mph-index b{background:var(--mph-accent);color:var(--mph-accent-ink);border-radius:999px;padding:.3em 1.2em;font-weight:800;}
.mph-tagline{font-size:1.18em;font-weight:900;margin-left:1cqw;}
.mph-brace{grid-column:4;font-size:1.3em;font-weight:700;letter-spacing:.04em;margin-right:2.6cqw;}
.mph-reel{grid-column:5;display:flex;align-items:center;gap:.8em;font-size:.8em;text-align:right;}
.mph-reel i{display:block;width:1.9em;height:1.9em;border-radius:50%;background:var(--mph-accent);border:.12cqw solid var(--mph-ink);flex:none;}

.mph-h1{position:absolute;left:8.8%;top:17.5%;margin:0;font-family:var(--mph-display);font-weight:400;font-size:6.5cqw;line-height:.93;letter-spacing:-.045em;text-transform:uppercase;color:var(--mph-ink);}
.mph-line{display:block;width:max-content;white-space:nowrap;position:relative;}
.mph-ch{display:inline-block;transition:transform .35s cubic-bezier(.3,1.6,.5,1),color .2s;}
.mph-ch:hover{transform:translateY(-.08em) rotate(-4deg);color:var(--mph-accent);}
.mph-arrow{display:inline-block;width:.6em;height:.6em;margin:0 .06em 0 .1em;vertical-align:-.02em;}
.mph-arrow path{stroke:currentColor;stroke-width:15;fill:none;stroke-linecap:square;}
.mph-badge{position:absolute;top:-.02em;left:calc(100% + .55em);font-family:var(--mph-sans);font-size:.2em;font-weight:800;letter-spacing:0;line-height:1;text-transform:none;border:.13cqw solid var(--mph-ink);border-radius:50%;padding:.75em 1.15em;transform:rotate(-9deg);transition:background .25s,color .25s,transform .4s cubic-bezier(.3,1.6,.5,1);cursor:default;}
.mph-badge sup{font-size:.7em;margin-left:.1em;}
.mph-badge:hover{background:var(--mph-accent);color:var(--mph-accent-ink);transform:rotate(6deg) scale(1.08);}
.mph-swash{position:relative;display:inline-block;}
.mph-swash svg{position:absolute;left:-.95em;top:.3em;width:2.55em;height:.72em;overflow:visible;pointer-events:none;}
.mph-swash path{fill:none;stroke:var(--mph-ink);stroke-width:.2cqw;stroke-linecap:round;stroke-dasharray:1;stroke-dashoffset:0;animation:mph-draw 1.6s .5s cubic-bezier(.6,0,.2,1) both;}
.mph-h1:hover .mph-swash path{animation:mph-draw 1.1s cubic-bezier(.6,0,.2,1) both;}
.mph-l4{font-size:1.2em;letter-spacing:-.02em;margin-top:.04em;}
.mph-vtag{display:inline-flex;flex-direction:column;align-items:stretch;vertical-align:-.02em;margin:0 .1em 0 .06em;width:.2em;}
.mph-vtag span{display:block;background:var(--mph-ink);color:var(--mph-paper);writing-mode:vertical-rl;font-family:var(--mph-sans);font-size:.105em;font-weight:800;letter-spacing:.12em;padding:.55em 0;text-align:center;}
.mph-vtag i{display:block;height:.34em;background:repeating-linear-gradient(to bottom,var(--mph-ink) 0 .02em,transparent .02em .045em);}
.mph-bracket{position:relative;display:inline-block;padding:0 .08em;}
.mph-bracket svg{position:absolute;left:-.02em;right:-.02em;top:-.1em;bottom:-.12em;width:calc(100% + .04em);height:calc(100% + .22em);overflow:visible;}
.mph-bracket path{fill:none;stroke:var(--mph-ink);stroke-width:.62cqw;stroke-linecap:butt;transition:transform .45s cubic-bezier(.3,1.6,.5,1);}
.mph-bracket:hover .mph-arc-t{transform:translateY(-10px);}
.mph-bracket:hover .mph-arc-b{transform:translateY(10px);}
.mph-star{display:inline-block;font-size:.66em;vertical-align:.5em;margin-left:.02em;color:var(--mph-accent);transition:transform .6s cubic-bezier(.3,1.6,.5,1);}
.mph-l4:hover .mph-star{transform:rotate(180deg) scale(1.2);}

.mph-pill{position:absolute;left:8.8%;top:72.8%;display:flex;align-items:stretch;font-size:1.72cqw;font-weight:800;line-height:1;}
.mph-pill-a{position:relative;z-index:1;background:var(--mph-card);color:var(--mph-ink);border:.16cqw solid var(--mph-ink);border-radius:999px;padding:.72em 1.25em;}
.mph-pill-b{display:inline-flex;align-items:center;gap:.5em;margin-left:-1.4em;padding:.72em 3.4em .72em 3.1em;background:var(--mph-accent);color:var(--mph-accent-ink);border:.16cqw solid var(--mph-ink);border-radius:0 999px 999px 0;text-decoration:none;transition:background .25s,color .25s,padding .35s cubic-bezier(.3,1.4,.5,1);}
.mph-pill-b em{font-style:normal;display:inline-block;width:0;overflow:hidden;opacity:0;transition:width .35s,opacity .25s;}
.mph-pill-b:hover,.mph-pill-b:focus-visible{background:var(--mph-ink);color:var(--mph-paper);padding-right:2.4em;outline:none;}
.mph-pill-b:hover em,.mph-pill-b:focus-visible em{width:1em;opacity:1;}

.mph-flower{position:absolute;left:35.4%;top:64%;width:7.4%;aspect-ratio:1;animation:mph-spin 22s linear infinite;cursor:grab;}
.mph-flower svg{display:block;width:100%;height:100%;overflow:visible;transition:transform .5s cubic-bezier(.3,1.8,.5,1);}
.mph-flower:hover svg{transform:scale(1.18) rotate(40deg);}
.mph-flower path{fill:var(--mph-card);stroke:var(--mph-ink);stroke-width:2.6;stroke-linejoin:round;}
.mph-flower circle{stroke:var(--mph-ink);}
.mph-curl{position:absolute;left:43.2%;top:52.5%;width:5.6%;aspect-ratio:1;overflow:visible;pointer-events:none;}
.mph-curl path{fill:none;stroke:var(--mph-ink);stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1;animation:mph-draw 1.4s 1s cubic-bezier(.6,0,.2,1) both;}

.mph-services{position:absolute;left:4.6%;bottom:4.6%;display:flex;gap:4cqw;margin:0;padding:0;list-style:none;font-size:1.3cqw;font-weight:800;}
.mph-services li{position:relative;cursor:default;padding-bottom:.25em;}
.mph-services li::after{content:"";position:absolute;left:0;right:0;bottom:0;height:.18em;background:var(--mph-accent);transform:scaleX(0);transform-origin:left;transition:transform .35s cubic-bezier(.6,0,.2,1);}
.mph-services li:hover::after{transform:scaleX(1);}

.mph-rule{position:absolute;width:0;border-left:.1cqw solid var(--mph-ink);}
.mph-rule::after{content:"";position:absolute;bottom:0;left:-.1cqw;width:1.1cqw;border-top:.1cqw solid var(--mph-ink);transform:rotate(28deg);transform-origin:left;}
.mph-rule-l{left:3.7%;top:23%;height:13%;}
.mph-rule-r{left:94.8%;top:66%;height:13%;}

.mph-char{position:absolute;left:55.5%;bottom:-1.2%;width:40.5%;aspect-ratio:600/720;padding:0;margin:0;border:0;background:none;cursor:pointer;-webkit-tap-highlight-color:transparent;border-radius:40% 40% 8% 8%;}
.mph-char:focus-visible{outline:.2cqw dashed var(--mph-ink);outline-offset:.4cqw;}
.mph-char svg{display:block;width:100%;height:100%;overflow:visible;}
.mph-bubble{position:absolute;left:-4%;top:6%;max-width:46%;background:var(--mph-card);color:var(--mph-ink);border:.16cqw solid var(--mph-ink);border-radius:1.4em 1.4em 1.4em .2em;padding:.8em 1.1em;font-size:1.3cqw;font-weight:800;line-height:1.2;text-align:left;box-shadow:.35cqw .35cqw 0 var(--mph-accent);transform-origin:0 100%;transform:scale(0) rotate(-8deg);opacity:0;transition:transform .45s cubic-bezier(.3,1.6,.5,1),opacity .2s;pointer-events:none;}
.mph-bubble[data-on="true"]{transform:scale(1) rotate(-4deg);opacity:1;}

@keyframes mph-draw{from{stroke-dashoffset:1;}to{stroke-dashoffset:0;}}
@keyframes mph-spin{to{transform:rotate(360deg);}}

@container mph (orientation: portrait){
.mph-stage{top:0;transform:translateX(-50%);width:min(100cqw,56.25cqh);height:100cqh;aspect-ratio:auto;}
.mph-top{top:5cqw;left:6%;right:6%;grid-template-columns:auto 1fr auto;font-size:2.5cqw;}
.mph-tagline,.mph-brace{display:none;}
.mph-reel{grid-column:3;}
.mph-h1{left:7%;top:17cqw;font-size:11.4cqw;}
.mph-badge{left:calc(100% + .35em);top:.1em;font-size:.22em;}
.mph-pill{left:7%;top:70cqw;font-size:3.5cqw;}
.mph-flower{left:auto;right:6%;top:66cqw;width:13%;}
.mph-curl{left:auto;right:4%;top:44cqw;width:11%;}
.mph-services{left:7%;right:7%;bottom:auto;top:84cqw;flex-wrap:wrap;gap:1.6cqw 5cqw;font-size:3cqw;}
.mph-rule-l{left:3%;top:22cqw;height:12cqw;}
.mph-rule-r{left:95%;top:auto;bottom:40cqw;height:12cqw;}
.mph-char{left:12%;width:76%;bottom:-.6%;}
.mph-bubble{font-size:3cqw;left:-8%;top:2%;max-width:52%;}
}

@media (prefers-reduced-motion: reduce){
.mph-root *,.mph-root *::after{animation:none!important;transition:none!important;}
}
`

/* ------------------------------------------------------------- component */

type Layers = Partial<
  Record<
    "body" | "head" | "earL" | "earR" | "hair" | "beard" | "blush" | "face" | "nose" | "eyes" | "brows",
    SVGGElement | null
  >
>

const DEFAULT_SERVICES = ["Brand design", "Logo design", "Interface design", "IP character design"]
const DEFAULT_GREETINGS = ["Hi there!", "Let's make something bold.", "Psst — I'm open to work.", "Okay, you can stop poking me :)"]

export default function MascotPortfolioHero({
  height = "100svh",
  minHeight = "440px",
  index = "08/01",
  discipline = "Visual design",
  tagline = "Make it helpful",
  collection = ["Selected", "Works"],
  reel = ["Sample reels @ 2026", "Visual design"],
  year = "2026",
  initials = "UI",
  badge = "Hire me",
  line2 = "Portfolio",
  line3 = "Design",
  word = "Work",
  verticalTag = "Visual",
  bracketed = "S",
  seekingLabel = "Seeking*",
  seeking = "UI / Graphic",
  href,
  services = DEFAULT_SERVICES,
  greetings = DEFAULT_GREETINGS,
  skin = "#c68863",
  hair = "#1b1411",
  shirt = "#161618",
  glasses = "#efe6dc",
  accent = "#5fb57a",
  accentInk = "#111111",
  paper = "#ebebea",
  ink = "#111111",
  card = "#ffffff",
  className,
}: MascotPortfolioHeroProps) {
  // Gradient and filter ids are global; keep them unique per mount.
  const uid = React.useId().replace(/:/g, "")
  const id = (n: string) => n + uid
  const u = (n: string) => "url(#" + id(n) + ")"

  const rootRef = React.useRef<HTMLDivElement>(null)
  const charRef = React.useRef<HTMLButtonElement>(null)

  const [happy, setHappy] = React.useState(false)
  const [said, setSaid] = React.useState(-1)
  const happyTimer = React.useRef<number | undefined>(undefined)

  const poke = () => {
    setSaid((n) => (n + 1) % Math.max(1, greetings.length))
    setHappy(true)
    window.clearTimeout(happyTimer.current)
    happyTimer.current = window.setTimeout(() => setHappy(false), 2200)
  }
  React.useEffect(() => () => window.clearTimeout(happyTimer.current), [])

  /* The loop writes straight to the SVG; React state at 60fps would re-render
     the whole poster. */
  React.useEffect(() => {
    const root = rootRef.current
    const char = charRef.current
    if (!root || !char) return

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    let still = mq.matches
    const onMq = () => (still = mq.matches)
    mq.addEventListener("change", onMq)

    let px = 0
    let py = 0
    let lastMove = -1e9
    let gx = 0
    let gy = 0
    let near = 0
    // The clock starts on the first frame.
    let prev = -1
    let nextBlink = 0
    let blinkAt = -1e9
    let raf = 0
    let visible = true

    const onMove = (e: PointerEvent) => {
      px = e.clientX
      py = e.clientY
      lastMove = performance.now()
    }
    const onLeave = () => (lastMove = -1e9)
    window.addEventListener("pointermove", onMove, { passive: true })
    window.addEventListener("pointerdown", onMove, { passive: true })
    document.documentElement.addEventListener("pointerleave", onLeave)
    window.addEventListener("blur", onLeave)

    const tr = (dx: number, dy: number) => "translate(" + dx.toFixed(2) + " " + dy.toFixed(2) + ")"
    // Each animated layer is tagged with data-l in the SVG below.
    const L: Layers = {}
    for (const k of ["body", "head", "earL", "earR", "hair", "beard", "blush", "face", "nose", "eyes", "brows"] as const) {
      L[k] = char.querySelector<SVGGElement>('[data-l="' + k + '"]')
    }

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame)
      if (prev < 0) {
        prev = now
        nextBlink = now + 1800
      }
      if (!visible) return
      const dt = Math.min(0.05, (now - prev) / 1000)
      prev = now

      const r = char.getBoundingClientRect()
      const cx = r.left + r.width * 0.5
      const cy = r.top + r.height * 0.48
      let tx = 0
      let ty = 0
      let tn = 0
      const idle = now - lastMove > 3500
      if (!idle) {
        const reach = Math.max(innerWidth, innerHeight)
        ;[tx, ty] = aim(px, py, cx, cy, reach * 0.3, reach * 0.26)
        const dist = Math.hypot(px - cx, py - cy)
        tn = Math.max(0, 1 - dist / (r.width * 0.45))
      } else if (!still) {
        const t = now / 1000
        tx = Math.sin(t * 0.45) * 0.55 + Math.sin(t * 1.1) * 0.1
        ty = Math.sin(t * 0.31 + 1) * 0.25
      }

      const rate = still ? 30 : 7
      gx = approach(gx, tx, dt, rate)
      gy = approach(gy, ty, dt, rate)
      near = approach(near, tn, dt, 8)
      const p = pose(gx, gy, near)
      const breathe = still ? 0 : Math.sin(now / 620) * 1.6

      if (!still && now > nextBlink) {
        blinkAt = now
        nextBlink = now + (Math.random() < 0.2 ? 260 : 2200 + Math.random() * 3200)
      }
      const open = still ? 1 : blink((now - blinkAt) / 1000)

      L.body?.setAttribute("transform", tr(p.body.dx, p.body.dy + breathe * 0.4))
      L.head?.setAttribute(
        "transform",
        tr(p.head.dx, p.head.dy + breathe) + " rotate(" + p.head.rot.toFixed(2) + " 300 560)",
      )
      L.earL?.setAttribute("transform", tr(p.ears.dx, p.ears.dy) + " translate(138 380) scale(" + p.ears.lead.toFixed(3) + " 1) translate(-138 -380)")
      L.earR?.setAttribute("transform", tr(p.ears.dx, p.ears.dy) + " translate(462 380) scale(" + p.ears.trail.toFixed(3) + " 1) translate(-462 -380)")
      L.hair?.setAttribute("transform", tr(p.hair.dx, p.hair.dy))
      L.beard?.setAttribute("transform", tr(p.beard.dx, p.beard.dy))
      L.blush?.setAttribute("transform", tr(p.blush.dx, p.blush.dy))
      L.face?.setAttribute("transform", tr(p.face.dx, p.face.dy))
      L.nose?.setAttribute("transform", tr(p.nose.dx, p.nose.dy))
      L.brows?.setAttribute("transform", tr(p.brows.dx, p.brows.dy))
      L.eyes?.setAttribute(
        "transform",
        tr(p.eyes.dx, p.eyes.dy) +
          " translate(300 350) scale(" + p.eyes.scale.toFixed(3) + " " + (p.eyes.scale * open).toFixed(3) + ") translate(-300 -350)",
      )
    }
    raf = requestAnimationFrame(frame)

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
      prev = -1
    })
    io.observe(root)

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      mq.removeEventListener("change", onMq)
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerdown", onMove)
      document.documentElement.removeEventListener("pointerleave", onLeave)
      window.removeEventListener("blur", onLeave)
    }
  }, [])

  const chars = (s: string) =>
    Array.from(s).map((c, i) => (
      <span key={i} className="mph-ch">
        {c === " " ? " " : c}
      </span>
    ))

  const l3 = Array.from(line3)
  const l3Head = l3.slice(0, -1).join("")
  const l3Tail = l3[l3.length - 1] ?? ""
  const greeting = said >= 0 ? greetings[said % greetings.length] : greetings[0]

  const vars = {
    "--mph-accent": accent,
    "--mph-accent-ink": accentInk,
    "--mph-paper": paper,
    "--mph-ink": ink,
    "--mph-card": card,
    "--mph-sans": SANS_STACK,
    "--mph-display": DISPLAY_STACK,
    height,
    minHeight,
  } as React.CSSProperties

  const pillInner = (
    <>
      {seeking}
      <em aria-hidden="true">→</em>
    </>
  )

  // Face paths shared between fill and outline.
  const SKULL = "M300 150 C402 150 470 226 470 348 C470 472 396 562 300 562 C204 562 130 472 130 348 C130 226 198 150 300 150 Z"
  const BLAZER = "M28 730 C40 646 104 604 206 588 L394 588 C496 604 560 646 572 730 Z"
  const BEARD =
    "M134 364 C130 462 170 552 236 588 C270 606 330 606 364 588 C430 552 470 462 466 364 " +
    "C452 402 434 426 404 438 C376 448 346 450 300 452 C254 450 224 448 196 438 C166 426 148 402 134 364 Z"
  const HAIR =
    "M134 336 C118 252 134 188 180 146 C224 108 290 92 350 98 C420 106 470 152 478 226 C482 264 476 300 468 336 " +
    "L452 330 C450 294 442 268 422 254 C388 236 336 240 300 252 C262 240 214 242 184 258 C164 272 152 298 150 330 Z"
  const QUIFF =
    "M162 186 C166 118 232 66 318 60 C400 56 462 96 478 170 C452 142 408 126 358 126 C294 122 226 140 162 186 Z"

  return (
    <div ref={rootRef} className={"mph-root " + archivo.variable + (className ? " " + className : "")} style={vars}>
      <style>{CSS}</style>

      <svg className="mph-room" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true">
        <g stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.13">
          {ROOM.back.map((s, i) => (
            <line key={"b" + i} x1={s[0]} y1={s[1]} x2={s[2]} y2={s[3]} />
          ))}
          {ROOM.rays.map((s, i) => (
            <line key={"r" + i} x1={s[0]} y1={s[1]} x2={s[2]} y2={s[3]} />
          ))}
          {ROOM.depth.map((d, i) => (
            <path key={"d" + i} d={d} />
          ))}
        </g>
      </svg>

      <div className="mph-stage">
        <header className="mph-top">
          <span className="mph-index">
            <b>{index}</b>
            {discipline}
          </span>
          <span className="mph-tagline">{tagline}</span>
          <span className="mph-brace">
            {"{"}
            {collection[0]}/{collection[1]}
            {"}"}
          </span>
          <span className="mph-reel">
            <i aria-hidden="true" />
            <span>
              {reel[0]}
              <br />
              {reel[1]}
            </span>
          </span>
        </header>

        <span className="mph-rule mph-rule-l" aria-hidden="true" />
        <span className="mph-rule mph-rule-r" aria-hidden="true" />

        <h1 className="mph-h1" aria-label={[year, initials, line2, line3, word + bracketed].join(" ")}>
          <span className="mph-line" aria-hidden="true">
            {chars(year)}
            <svg className="mph-arrow" viewBox="0 0 100 100">
              <path d="M14 14 L84 84 M84 30 V84 H30" />
            </svg>
            {chars(initials)}
            <span className="mph-badge">
              {badge}
              <sup>@</sup>
            </span>
          </span>
          <span className="mph-line" aria-hidden="true">
            {chars(line2)}
          </span>
          <span className="mph-line" aria-hidden="true">
            {chars(l3Head)}
            <span className="mph-swash">
              <span className="mph-ch">{l3Tail}</span>
              <svg viewBox="0 0 255 72" preserveAspectRatio="none">
                <path pathLength={1} d="M6 44 C40 18 150 4 222 14 C262 20 258 48 214 58 C150 72 60 70 30 60 C10 53 20 40 60 34" />
              </svg>
            </span>
          </span>
          <span className="mph-line mph-l4" aria-hidden="true">
            {chars(word)}
            <span className="mph-vtag">
              <span>{verticalTag}</span>
              <i />
            </span>
            <span className="mph-bracket">
              <svg viewBox="0 0 100 120" preserveAspectRatio="none">
                <path className="mph-arc-t" vectorEffect="non-scaling-stroke" d="M4 16 Q50 -8 96 16" />
                <path className="mph-arc-b" vectorEffect="non-scaling-stroke" d="M4 104 Q50 128 96 104" />
              </svg>
              {bracketed}
            </span>
            <span className="mph-star">*</span>
          </span>
        </h1>

        <svg className="mph-curl" viewBox="0 0 100 100" aria-hidden="true">
          <path pathLength={1} d="M92 8 C70 6 52 22 58 40 C63 56 84 52 80 36 C76 22 50 30 40 48 C32 62 26 74 16 84 M14 66 L14 86 L34 86" />
        </svg>

        <div className="mph-pill">
          <span className="mph-pill-a">{seekingLabel}</span>
          {href ? (
            <a className="mph-pill-b" href={href}>
              {pillInner}
            </a>
          ) : (
            <span className="mph-pill-b" tabIndex={0}>
              {pillInner}
            </span>
          )}
        </div>

        <div className="mph-flower" aria-hidden="true">
          <svg viewBox="0 0 120 120">
            <path d={FLOWER} />
            <circle cx="60" cy="60" r="4" fill="none" strokeWidth="2" />
          </svg>
        </div>

        <ul className="mph-services">
          {services.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <button
          ref={charRef}
          type="button"
          className="mph-char"
          onClick={poke}
          aria-label="Say hi to Proloy"
        >
          <svg viewBox={"0 0 " + CW + " " + CH} aria-hidden="true">
            <defs>
              <radialGradient id={id("shade")} cx="46%" cy="40%" r="62%">
                <stop offset="0.55" stopColor="#4a1d0c" stopOpacity="0" />
                <stop offset="1" stopColor="#4a1d0c" stopOpacity="0.32" />
              </radialGradient>
              <radialGradient id={id("hi")} cx="36%" cy="30%" r="42%">
                <stop offset="0" stopColor="#fff" stopOpacity="0.4" />
                <stop offset="1" stopColor="#fff" stopOpacity="0" />
              </radialGradient>
              <radialGradient id={id("blush")}>
                <stop offset="0" stopColor="#b5452f" stopOpacity="0.32" />
                <stop offset="1" stopColor="#b5452f" stopOpacity="0" />
              </radialGradient>
              <radialGradient id={id("sheen")} cx="40%" cy="20%" r="80%">
                <stop offset="0" stopColor="#fff" stopOpacity="0.16" />
                <stop offset="0.55" stopColor="#fff" stopOpacity="0" />
                <stop offset="1" stopColor="#000" stopOpacity="0.3" />
              </radialGradient>
              <radialGradient id={id("eye")} cx="40%" cy="35%" r="70%">
                <stop offset="0" stopColor="#3b2a22" />
                <stop offset="1" stopColor="#070505" />
              </radialGradient>
              <radialGradient id={id("nose")} cx="42%" cy="36%" r="66%">
                <stop offset="0" stopColor="#e09a78" stopOpacity="0.18" />
                <stop offset="1" stopColor="#7d3a22" stopOpacity="0.4" />
              </radialGradient>
              <linearGradient id={id("neck")} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#3f170a" stopOpacity="0.5" />
                <stop offset="0.6" stopColor="#3f170a" stopOpacity="0.08" />
              </linearGradient>
              <linearGradient id={id("cloth")} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#fff" stopOpacity="0.1" />
                <stop offset="1" stopColor="#000" stopOpacity="0.3" />
              </linearGradient>
              {/* Roughs the beard and moustache edges so they read as hair. */}
              <filter id={id("fuzz")} x="-5%" y="-5%" width="110%" height="110%">
                <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="4" result="n" />
                <feDisplacementMap in="SourceGraphic" in2="n" scale="5" xChannelSelector="R" yChannelSelector="G" />
              </filter>
              <clipPath id={id("mouth")}>
                <path d="M244 456 Q300 472 356 456 Q350 512 300 516 Q250 512 244 456 Z" />
              </clipPath>
            </defs>

            <ellipse cx="300" cy="712" rx="250" ry="16" fill="#000" opacity="0.08" />

            {/* Black blazer over a black V-neck. */}
            <g data-l="body">
              <path d={BLAZER} fill={shirt} />
              <path d={BLAZER} fill={u("cloth")} />
              <path d="M226 590 L374 590 L360 730 L240 730 Z" fill="#0a0a0b" />
              <path d="M246 500 L354 500 L360 600 Q300 624 240 600 Z" fill={skin} />
              <path d="M246 500 L354 500 L360 600 Q300 624 240 600 Z" fill={u("neck")} />
              <path d="M242 586 L358 586 L300 664 Z" fill={skin} />
              <path d="M242 586 L358 586 L300 664 Z" fill={u("neck")} />
              <path d="M238 584 L300 668 L362 584" fill="none" stroke="#000" strokeOpacity="0.6" strokeWidth="8" strokeLinejoin="round" />
              <path d="M198 590 L246 592 L300 712 L278 730 L236 730 L222 664 L184 652 L204 626 Z" fill={shirt} stroke="#000" strokeOpacity="0.55" strokeWidth="2" />
              <path d="M402 590 L354 592 L300 712 L322 730 L364 730 L378 664 L416 652 L396 626 Z" fill={shirt} stroke="#000" strokeOpacity="0.55" strokeWidth="2" />
              <path d="M246 592 L300 712 M354 592 L300 712" stroke="#fff" strokeOpacity="0.12" strokeWidth="3" fill="none" />
            </g>

            <g data-l="head">
              <g data-l="earL">
                <ellipse cx="138" cy="380" rx="44" ry="58" fill={skin} />
                <ellipse cx="138" cy="380" rx="44" ry="58" fill={u("shade")} />
                <path d="M150 348 Q120 360 126 392 Q132 414 150 412" fill="none" stroke="#5e2a17" strokeOpacity="0.35" strokeWidth="7" strokeLinecap="round" />
              </g>
              <g data-l="earR">
                <ellipse cx="462" cy="380" rx="44" ry="58" fill={skin} />
                <ellipse cx="462" cy="380" rx="44" ry="58" fill={u("shade")} />
                <path d="M450 348 Q480 360 474 392 Q468 414 450 412" fill="none" stroke="#5e2a17" strokeOpacity="0.35" strokeWidth="7" strokeLinecap="round" />
              </g>

              <path d={SKULL} fill={skin} />
              <path d={SKULL} fill={u("shade")} />
              <path d={SKULL} fill={u("hi")} />

              {/* Short faded sides. */}
              <ellipse cx="152" cy="300" rx="26" ry="54" fill={hair} opacity="0.45" />
              <ellipse cx="448" cy="300" rx="26" ry="54" fill={hair} opacity="0.45" />

              <g data-l="blush">
                <ellipse cx="196" cy="404" rx={happy ? 42 : 36} ry={happy ? 26 : 22} fill={u("blush")} />
                <ellipse cx="404" cy="404" rx={happy ? 42 : 36} ry={happy ? 26 : 22} fill={u("blush")} />
              </g>

              {/* Full, trimmed beard along the jaw and chin. */}
              <g data-l="beard">
                <g filter={u("fuzz")}>
                  <path d={BEARD} fill={hair} />
                  <path d={BEARD} fill={u("sheen")} />
                </g>
              </g>

              <g data-l="face">
                <g data-l="eyes">
                  {happy ? (
                    <>
                      <path d="M216 356 Q240 328 264 356" fill="none" stroke="#111" strokeWidth="12" strokeLinecap="round" />
                      <path d="M336 356 Q360 328 384 356" fill="none" stroke="#111" strokeWidth="12" strokeLinecap="round" />
                    </>
                  ) : (
                    <>
                      <ellipse cx="240" cy="352" rx="22" ry="26" fill={u("eye")} />
                      <circle cx="232" cy="340" r="7.5" fill="#fff" />
                      <circle cx="249" cy="361" r="3" fill="#fff" opacity="0.8" />
                      <ellipse cx="360" cy="352" rx="22" ry="26" fill={u("eye")} />
                      <circle cx="352" cy="340" r="7.5" fill="#fff" />
                      <circle cx="369" cy="361" r="3" fill="#fff" opacity="0.8" />
                    </>
                  )}
                </g>

                {/* Clear rectangular frames. */}
                <g fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="182" y="310" width="112" height="84" rx="20" fill="#fff" fillOpacity="0.1" stroke={glasses} strokeWidth="10" strokeOpacity="0.92" />
                  <rect x="306" y="310" width="112" height="84" rx="20" fill="#fff" fillOpacity="0.1" stroke={glasses} strokeWidth="10" strokeOpacity="0.92" />
                  <rect x="182" y="310" width="112" height="84" rx="20" stroke="#5b4636" strokeOpacity="0.45" strokeWidth="2" />
                  <rect x="306" y="310" width="112" height="84" rx="20" stroke="#5b4636" strokeOpacity="0.45" strokeWidth="2" />
                  <path d="M294 342 Q300 334 306 342" stroke={glasses} strokeWidth="9" />
                  <path d="M182 334 L142 328 M418 334 L458 328" stroke={glasses} strokeWidth="8" />
                  <path d="M200 380 L236 322 M218 384 L248 334 M324 380 L360 322" stroke="#fff" strokeOpacity="0.28" strokeWidth="4" />
                </g>

                <g data-l="brows">
                  <path d={happy ? "M196 292 Q232 272 270 286" : "M196 300 Q232 286 270 296"} fill="none" stroke="#150e0a" strokeWidth="24" strokeLinecap="round" />
                  <path d={happy ? "M330 286 Q368 272 404 292" : "M330 296 Q368 286 404 300"} fill="none" stroke="#150e0a" strokeWidth="24" strokeLinecap="round" />
                </g>

                {/* Mouth: a calm closed smile, or a grin when poked. */}
                {happy ? (
                  <g>
                    <path d="M244 456 Q300 472 356 456 Q350 512 300 516 Q250 512 244 456 Z" fill="#3d0f0f" />
                    <g clipPath={u("mouth")}>
                      <ellipse cx="300" cy="516" rx="36" ry="16" fill="#c9504d" />
                      <path d="M236 452 Q300 470 364 452 L364 482 Q300 494 236 482 Z" fill="#fff" />
                    </g>
                  </g>
                ) : (
                  <g>
                    <path d="M264 466 Q300 480 336 466 Q330 490 300 492 Q270 490 264 466 Z" fill="#8a4434" />
                    <path d="M280 478 Q300 484 320 478" fill="none" stroke="#fff" strokeOpacity="0.22" strokeWidth="3" strokeLinecap="round" />
                  </g>
                )}

                {/* Moustache, joined to the beard at the corners. */}
                <g filter={u("fuzz")}>
                  <path d="M228 462 C244 432 280 426 300 438 C320 426 356 432 372 462 C352 452 328 450 300 456 C272 450 248 452 228 462 Z" fill={hair} />
                </g>

                <g data-l="nose">
                  <ellipse cx="300" cy="414" rx="28" ry="12" fill="#3f170a" opacity="0.16" />
                  <ellipse cx="300" cy="398" rx="30" ry="27" fill={skin} />
                  <ellipse cx="300" cy="398" rx="30" ry="27" fill={u("nose")} />
                  <ellipse cx="291" cy="387" rx="9" ry="7" fill="#fff" opacity="0.32" />
                </g>
              </g>

              {/* Swept-back hair with a high quiff. */}
              <g data-l="hair">
                <path d={HAIR} fill={hair} />
                <path d={QUIFF} fill={hair} />
                <path d={HAIR} fill={u("sheen")} />
                <path d={QUIFF} fill={u("sheen")} />
                <path
                  d="M188 168 C236 112 316 92 410 112 M206 196 C256 146 330 130 432 150 M236 226 C282 190 340 180 446 196"
                  fill="none"
                  stroke="#fff"
                  strokeOpacity="0.13"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </g>
            </g>
          </svg>
          <span className="mph-bubble" data-on={happy ? "true" : "false"} aria-live="polite">
            {greeting}
          </span>
        </button>
      </div>
    </div>
  )
}
