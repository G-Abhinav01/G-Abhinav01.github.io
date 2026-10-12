# Version 2 Footprint & State Memory

**Snapshot Date:** October 12, 2026  
**Git Branch:** `v2-kinetic` / `v2-baseline`  
**Physical Backup Directory:** `versions/v2_backup/`

---

## 1. Overview of Version 2 (Kinetic Editorial & Liquid Titanium)
Version 2 is the studio-grade, creative developer redesign built to completely replace the generic "AI-slop" dark blue aesthetic with high-impact editorial direction:

- **Art Direction & Palette:**
  - Obsidian Carbon base (`#08090d`) with Titanium elevation (`#10121a`).
  - High-voltage accents: **Acid Lime (`#c6ff00`)**, **Electric Indigo (`#818cf8`)**, and **Liquid Platinum (`#f4f4f5`)**.
  - Procedural **SVG noise grain texture layer** for tactile depth.
  - Monumental grotesque typography with outlined display headings (`text-outline`).
  - Marquee velocity ribbon with infinite kinetic scrolling.

- **Interactive 3D Experience (`FluidCoreCanvas.jsx`):**
  - Custom Three.js liquid chrome metallic sphere with real-time simplex vertex noise wave displacement.
  - Multi-point studio lighting with iridescent reflections reacting smoothly to cursor movement and inertia.

- **Audio Synthesizer Engine (`sound.js`):**
  - Native browser Web Audio API synthesizer generating tactile micro-clicks and blips on user interactions.
  - Includes a mute/unmute toggle in the navbar (`FX ON` / `FX OFF`).

- **Kinetic Action Lens Cursor (`CustomCursor.jsx`):**
  - Precision center dot + lagging lens with spring physics that dynamically morphs and displays action text (`[VISIT]`, `[INSPECT]`, `[CODE]`, `[GO]`).

- **Flagship Project: India24x7.live Architecture Case Study (`Projects.jsx`):**
  - Interactive multi-tab inspection stage:
    - `[7 CMS Engines]` - Articles CRUD, Homepage Slots, Breaking News, Video Rails, Ads, Live Ticker, Site Settings.
    - `[RLS & Security]` - PostgreSQL Row Level Security, role-based authorization (`app_metadata.role = 'admin'`), DOMPurify HTML sanitization, Server Actions mutation boundaries.
    - `[Netlify & DNS]` - Netlify Edge deployment, GoDaddy DNS cutover (`india24x7.live`), 23 compiled routes.
  - Direct live platform launch buttons and repository links.
  - Secondary projects: *YumCha.ai*, *Aether Notes*, *O-Siyar.ai* with editorial index numbering (`02`, `03`, `04`).

- **Architecture & Principles Showcase (`About.jsx`):**
  - Three core engineering principles: *Client-Facing Pragmatism*, *Zero-Trust Data Boundaries*, *High-Velocity Full-Stack Delivery*.
  - Interactive syntax inspector toggling between Next.js 16 Server Actions, SQL Server stored procedures, and UAT delivery flows.

- **Experience & Education (`ExperienceEducation.jsx`):**
  - *Technical Solutions & Client-Facing Implementation* at **STPI Bhilai, Chhattisgarh** (removed Force Intellect per preference).
  - Highlights: Microsoft SQL Server, SSMS, stored procedures, SSRS, IIS server setup, UAT, Pilot Runs, and Go-Live cutovers.
  - Top-most hero section badge cleaned to `[FULL-STACK // 2026]` (removed STPI Bhilai from hero).
  - Academic background: B.Tech in Computer Science (AI & ML) @ SSTC, Senior Secondary @ KV Bhilai.
  - Verified certifications: HP Life, Techonet Pvt. Ltd.

- **Capability Arsenal (`Skills.jsx`):**
  - Replaced generic percentage bars with domain cards: Full-Stack Web, SQL & Databases, Security & Cloud Infra, Client Delivery & Methodology.

- **Direct Channels & Console:**
  - Direct contact card with one-click email copy, phone call action, and message transmission.
  - Interactive CLI terminal with real reactive commands.

---

## 2. Instant Rollback Instructions

### To Restore Version 1 (Dark Tech Baseline):
```powershell
# From Git:
git checkout v1-baseline

# OR from physical backup:
Copy-Item -Path "versions/v1_backup/*" -Destination "." -Recurse -Force
```

### To Restore Version 2 (Current Kinetic Editorial):
```powershell
# From Git:
git checkout v2-kinetic

# OR from physical backup:
Copy-Item -Path "versions/v2_backup/*" -Destination "." -Recurse -Force
```
