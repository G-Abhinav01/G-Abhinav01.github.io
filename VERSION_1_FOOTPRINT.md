# Version 1 Footprint & State Memory

**Snapshot Date:** October 11, 2026  
**Git Branch/Commit:** `v1-baseline` (`4ff17a8be0de711cad48fbc0fd9bbe09f5778aa9`)  
**Physical Backup Directory:** `versions/v1_backup/`

---

## 1. Overview of Version 1
Version 1 was the initial React 19 + Vite migration from the legacy 2018 Bootstrap 4 site.
It implemented a classic cyber/dark tech theme:
- Deep cosmos background (`#030611`) with ambient radial cyan/purple glows and 50px grid lines.
- Basic Three.js hero canvas with an icosahedron wireframe mesh and rotating particle cloud.
- Lenis momentum smooth scrolling.
- Reusable 3D tilt cards (`TiltCard.jsx`) with mouse-tracking specular radial glare.
- Custom cursor with a cyan center dot and lagging magnetic ring.
- Sections:
  - `Navbar.jsx`: Floating rounded pill bar with scroll spy.
  - `Hero.jsx`: Role text cycler, profile image with conic-gradient ring, stats cards.
  - `About.jsx`: Code window (`developer_profile.ts`), 4 pillars, personal interests chips.
  - `ExperienceEducation.jsx`: Dual-track timeline with Force Intellect, Techonet, SSTC, and KV.
  - `Skills.jsx`: Tabbed cards with percentage gauges.
  - `Projects.jsx`: India24x7.live (flagship client project), YumCha.ai, Aether Notes, O-Siyar.ai.
  - `InteractiveTerminal.jsx`: Terminal emulator with commands (`help`, `skills`, `projects`, `resume`, `contact`, `confetti`, `clear`).
  - `Contact.jsx`: Email copy with canvas-confetti and transmission form.
  - `Footer.jsx`: Cyber footer with social icons and back-to-top button.

---

## 2. Why We Are Moving to Version 2
User critique:
- *"Looks pretty much like generic AI-slop website"*
- Flow is decent, but lacks unique art direction and personality.
- Clichéd tropes: standard dark blue cards with cyan borders, spinning wireframe geometry, percentage skill meters, generic terminal aesthetics.
- Restriction of "only darker shades" lifted by the user to allow a bolder, state-of-the-art, creative developer aesthetic.

---

## 3. How to Revert to Version 1 (Instant Rollback)
If you want to rollback to this exact state at any time:
```powershell
# Option A: From Git
git checkout v1-baseline

# Option B: From physical backup
Copy-Item -Path "versions/v1_backup/*" -Destination "." -Recurse -Force
```
