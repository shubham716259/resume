# Shubham Thakur — 3D Interactive Developer Portfolio

An award-winning, production-quality 3D developer portfolio built with **React**, **Three.js / React Three Fiber**, **Drei**, **Framer Motion**, and a custom cybernetic design system.

---

## 🚀 Live Demo & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```

---

## 🎨 Visual Design & Architecture

- **Visual Theme:** Deep charcoal backgrounds (`#07080c`), frosted glass (`backdrop-filter: blur(16px)`), electric cyan (`#00f0ff`) and violet (`#a855f7`) neon lighting, cybernetic grid lines, and editorial typography (*Space Grotesk*, *Plus Jakarta Sans*, *JetBrains Mono*).
- **Hero 3D Core:** Built with `@react-three/fiber` and `@react-three/drei`. Features a floating gyroscopic core with an inner dodecahedron, outer holographic wireframe icosahedron, point lattice, orbital rings, and smooth mouse-driven parallax lerping. Includes an automated CSS/SVG fallback if WebGL is unavailable.
- **Custom Cursor:** Smooth spring-interpolated cursor with a trailing ring, glowing precision dot, dynamic hover expansion, and interactive badges (*Explore*, *Rotate 3D*). Gracefully disables on touch devices and respects `prefers-reduced-motion`.
- **Identity & About:** Floating 3D identity card with perspective tilt, verified Chitkara University student badge, interactive photo replacement slot, and visual pillars for Code, Creativity, and Problem Solving.
- **Interactive Skill Universe:** Categorized toolkit covering Programming (Java, C, JavaScript, SQL), Frontend (HTML5, CSS3, React), Databases (MySQL), Core Concepts (DSA, OOP, Problem Solving, Responsive Web Design), and Tools (Git, GitHub, VS Code), coupled with a live capability inspector.
- **Featured Projects:**
  1. **Eco-Recycler** — Household waste pickup & recycling concept.
  2. **CookFusion** — Recipe discovery & culinary meal planner.
  3. **Weather Horizon** — Real-time meteorological intelligence UI.
  4. **Smart Record Manager** — Java Swing desktop record & inventory system.
  5. **E-Commerce & Media SQL Analytics** — Relational database queries & cohort insights.
  6. **DevUtilities Suite** — Task matrix & precision mathematical calculator.
  *Includes high-fidelity vector UI mockups and a comprehensive Project Details Modal.*
- **Learning Progression Timeline:** Interactive connected timeline tracking milestones from academic foundation to modern full-stack web applications.
- **"How I Build" Philosophy:** Interactive mini-visualizations demonstrating requirement decomposition, unit test validation, and the learning flywheel.
- **Interactive Contact & Resume:** Validated contact form with celebratory confetti, one-click email copying, and a printable in-browser developer CV modal.

---

## 🛠️ Personalization Guide

All data is decoupled into clean, typed configurations for effortless updates:
- **Projects:** [`src/data/projectsData.js`](src/data/projectsData.js) — update descriptions, GitHub repositories, and live URLs.
- **Skills:** [`src/data/skillsData.js`](src/data/skillsData.js) — add new technologies and certifications as you learn.
- **Milestones:** [`src/data/timelineData.js`](src/data/timelineData.js) — record new internships, projects, and coursework.
- **Identity & Contact:** [`src/components/sections/AboutSection.jsx`](src/components/sections/AboutSection.jsx) and [`src/components/sections/ContactSection.jsx`](src/components/sections/ContactSection.jsx).
