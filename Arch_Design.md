# GKS Consultancy — Web Design & Architecture Specification (`DESIGN_SPEC.md`)

## 0. Technical Stack & Architecture Constraints
* **Framework:** React 18+ with Vite and TypeScript (`react-ts`).
* **Architecture:** 100% Static Frontend (SPA). **Do NOT create a backend server, database, or API routes.**
* **Data Separation:** Centralize all static text, Vision/Mission statements, the 8 Signature Programmes, 15 Standard Programmes, 6 L&D Consulting services, 7 Methodology steps, 21 Client names, and Contact details inside `src/data/gksContent.ts`[cite: 1, 2, 4, 5, 6]. Components must import and map over this data cleanly.
* **Styling:** Tailwind CSS + `lucide-react` for iconography.
* **Logo Asset Path:** Place the client logo at `/assets/gks-logo.jpg` and apply `mix-blend-multiply` on a white navbar/card surface[cite: 3].
* **Contact Form Handling:** Build a clean client-side controlled form in the footer that supports both direct `mailto:info@gksconsultancy.com` / WhatsApp pre-filled redirection (`+91 97043 23804`) and is ready for a drop-in Formspree/Web3Forms endpoint[cite: 1].

## 1. Project Overview & Brand Positioning
* **Client:** GKS Consultancy (also referenced in updated vision docs as *GKS Learning Solutions*)[cite: 1, 2, 3]
* **Established:** 1998 (25+ years of corporate training & L&D consulting legacy)[cite: 1, 2]
* **Headquarters:** Visakhapatnam, India (Serving clients across India & Overseas)[cite: 1, 5]
* **Design Objective:** Translate 25+ years of behavioral training wisdom and tier-1 enterprise trust (Reliance, ITC, Coca-Cola, GSK, Natco, etc.) into a clean, modern, executive-grade B2B web experience[cite: 1, 2, 6]. Avoid dated brochure aesthetics (no lined-paper textures, polka dots, or harsh 3D gradients)[cite: 1, 3, 4, 5, 6].

---

## 2. Design System & UI Tokens

### 2.1 Color Palette (Tailwind CSS & Hex Equivalents)
Extract and modernize colors from the original GKS logo (Royal Blue, Momentum Orange, Growth Emerald, Slate Grey):

| Token Role | Color Name | Hex Code | Tailwind Class | Usage Rules |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Brand** | Deep Royal Navy | `#0F2942` | `bg-slate-900` / `bg-[#0F2942]` | Hero backgrounds, KPI trust bar, primary headings, Vision card, Footer. |
| **Primary Accent** | Momentum Orange | `#EA580C` | `bg-orange-600` / `text-orange-600` | Primary CTAs, active tab indicators, timeline connectors, subtle highlights (nods to logo arrow)[cite: 3]. |
| **Secondary Accent** | Growth Emerald | `#16A34A` | `bg-green-600` / `text-green-600` | Secondary badges, L&D consulting icons, success states (nods to green figure in logo)[cite: 3, 4]. |
| **Surface Light** | Alabaster Slate | `#F8FAFC` | `bg-slate-50` | Alternating section backgrounds for visual separation. |
| **Surface Pure** | Pure White | `#FFFFFF` | `bg-white` | Sticky Navbar (to seamlessly host the white-background logo), cards, modals[cite: 3]. |
| **Text Primary** | Dark Charcoal | `#0F172A` | `text-slate-900` | Headings and high-emphasis copy. |
| **Text Secondary** | Muted Slate | `#475569` | `text-slate-600` | Body text, program descriptions, sub-captions. |
| **Border Subtle** | Cool Grey | `#E2E8F0` | `border-slate-200` | Card borders, dividers, navbar bottom border. |

### 2.2 Typography System
Load via Google Fonts:
* **Heading Font (`font-display`):** `Plus Jakarta Sans` (Weights: `600 SemiBold`, `700 Bold`, `800 ExtraBold`) — Geometric, authoritative, pairs with the wide-tracked sans-serif "CONSULTANCY" in the logo[cite: 3].
* **Body & UI Font (`font-sans`):** `Inter` or `DM Sans` (Weights: `400 Regular`, `500 Medium`, `600 SemiBold`) — Clean legibility for program matrices and methodology flows.
* **Editorial / Quote Font (`font-serif`):** `Playfair Display` or `Merriweather` (Weight: `400 Italic`, `600 SemiBold Italic`) — Exclusively for executive quotes (Jack Welch) and the core Philosophy callout[cite: 1, 2].

### 2.3 Component Styling Rules
* **Cards:** `rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300`
* **Section Padding:** `py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto`
* **Buttons (Primary):** `bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-xl shadow-sm transition-all`
* **Buttons (Secondary):** `border border-slate-300 hover:border-slate-900 text-slate-800 font-semibold px-6 py-3 rounded-xl transition-all`

---

## 3. Page Architecture & Section-by-Section Content Spec

Build as a **high-converting, single-page narrative layout** with smooth scroll navigation and interactive tabs/modals for program exploration.

### Section 0: Sticky Navigation Bar
* **Background:** Solid white (`bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50`). *Crucial: White background ensures `GKS LOGO 1 ver8.jpg` blends seamlessly on the left[cite: 3].*
* **Left:** GKS Consultancy Logo (`h-12 w-auto object-contain`)[cite: 3].
* **Center Links:** `About & Philosophy` (`#about`) | `Programmes` (`#programmes`) | `L&D Consulting` (`#consulting`) | `Methodology` (`#methodology`) | `Clientele` (`#clients`)[cite: 1, 4, 5, 6]
* **Right CTA:** **"Partner With Us"** (Scrolls to `#contact`).

---

### Section 1: Hero Section (Above the Fold)
* **Layout:** 12-column asymmetric split (7 cols left copy, 5 cols right visual/quote card).
* **Eyebrow Badge:** `Transforming Organizations Since 1998`[cite: 1]
* **H1 Headline:** `Unleashing Human Potential Through Transformative Behavioral Learning.`[cite: 1, 2]
* **Subheadline:** `Through customized behavioral learning and strategic L&D consulting, we enable professionals to build winning attitudes—driving sustained career growth and organizational excellence.`[cite: 1, 2, 4]
* **CTAs:**
  * Primary: `Explore Training Programmes` (`#programmes`)[cite: 1, 4]
  * Secondary: `L&D Consulting Services` (`#consulting`)[cite: 1]
* **Right Column Visual Feature:**
  * Clean executive card featuring a corporate workshop aesthetic overlaid with the signature quote in `font-serif italic`:
  * > *"An Organization’s ability to LEARN and transform that learning into ACTION rapidly is the ultimate Competitive Advantage."* — **Jack Welch**[cite: 1]

---

### Section 2: Enterprise Trust & Impact Bar (KPIs + Client Marquee)
* **Part A — Impact Counter Strip (`bg-[#0F2942] text-white py-12`):**
  Convert the "Performance Glimpse" hexagons into a 4-column metric grid[cite: 5]:
  1. **25+ Years** — `Proven Legacy (Est. 1998)`[cite: 1, 2, 5]
  2. **50,000+** — `Participants Trained`[cite: 5]
  3. **5,000+** — `Standing Manhours Delivered`[cite: 5]
  4. **35+ Clients** — `Corporates & Institutes (India & Overseas)`[cite: 5]
  * *Supporting Badges:* `OBTs & In-House Programs` | `Consistent High Feedback` | `Results-Proven Delivery`[cite: 5]
* **Part B — Quick Client Marquee (`bg-slate-50 py-6 border-b border-slate-200`):**
  Subtle horizontal ticker displaying top names: *Reliance Industries, ITC Limited, Coca-Cola, GSK, Natco Pharma, Adani Wilmar, UltraTech Cement, MRF, Qatar Petroleum, Amara Raja*[cite: 1, 6].

---

### Section 3: About, Core Philosophy, Vision, Mission & Values (`#about`)
* **Layout:** 3-part structured narrative.

#### Part 3.1: The GKS Story & Philosophy Banner
* **Headline:** `Born as a Chooser: The GKS Philosophy`[cite: 1]
* **Core Pull-Quote (Highlighted in an accent callout box with `font-serif`):**
  > *"Neither are we born as a Winner nor as a Loser—we are born as a Chooser. The greatest discovery of any generation is that a human being can transform their life by transforming their Attitude."*[cite: 1, 2]
* **Narrative Copy:**
  `Founded in 1998 by experienced training practitioners, GKS Consultancy was built to bridge a critical gap in the corporate world: professionals constantly seek clear pathways to grow in their careers, while managements strive to elevate employee performance and achieve organizational growth. Through deep behavioral interventions, we align individual attitude with organizational purpose—unlocking the best hidden within every professional.`[cite: 1, 2]

#### Part 3.2: Vision & Mission (2-Column Executive Cards)
* **Vision Card (Dark Navy `#0F2942`, White Text):**
  * **Label:** `OUR VISION`[cite: 1, 2]
  * **Copy:** `To inspire individuals through transformative learning experiences to unleash their hidden potential, expand their capabilities, and become the best version of themselves.`[cite: 2]
* **Mission Card (White Surface, Top Border `border-t-4 border-orange-600`):**
  * **Label:** `OUR MISSION`[cite: 1, 2]
  * **Copy:** `Through transformative behavioural learning and development, we enable people to build the right attitudes towards life, work, and organization—leading to sustained career growth and organizational excellence.`[cite: 1, 2]

#### Part 3.3: Core Values (5-Column Icon Grid)
Render 5 clean cards with Lucide icons[cite: 1, 2]:
1. **Integrity:** `We act with honesty, ethics, and professionalism in everything we do.`[cite: 2]
2. **Customer Focus:** `We are committed to understanding and exceeding the needs of our clients and learners.`[cite: 2]
3. **Continuous Learning:** `We believe learning is a lifelong journey and the foundation of sustained growth.`[cite: 2]
4. **Empowerment:** `We enable individuals to discover their strengths and realize their full potential.`[cite: 2]
5. **Excellence:** `We strive for the highest standards in our programs, delivery, and measurable impact.`[cite: 2]

---

### Section 4: GKS Training Programmes (`#programmes`)
* **Section Header:** `Customised Behavioral Training Programmes`[cite: 1, 4]
* **Section Subtext:** `We Design, Develop, and Deliver customized behavioral training programs based on your Training Needs, Business Context, and Organization Culture.`[cite: 1, 4]
* **UI Pattern:** Interactive Tab Switcher or Dual-Showcase between **Signature Programmes** (Flagship) and **Standard Programmes** (Categorized Modules)[cite: 1, 4].

#### Tab 1: Signature Programmes (8 Flagship Cards — "Performance Acceleration")[cite: 1, 4]
Display as a 4x2 grid of featured cards with an orange/emerald accent badge:
1. **Winning Attitude** — *Cultivating mindset shifts for peak workplace ownership.*[cite: 1, 4]
2. **21st Century Managers** *(Fixed typo from brochure)* — *Equipping modern leaders for agile, high-performing teams.*[cite: 1, 4]
3. **Live Like A Champion** — *High-energy behavioral mastery for personal and professional excellence.*[cite: 1, 4]
4. **Collaborating for Success** — *Breaking silos and building cross-functional synergy.*[cite: 1, 4]
5. **The Power of Empathy** — *Human-centric leadership and emotional connection at work.*[cite: 1, 4]
6. **Quality of Work Life** — *Harmonizing productivity, engagement, and personal well-being.*[cite: 1, 4]
7. **Train the Trainer** — *Building internal L&D capability and facilitation excellence.*[cite: 1, 4]
8. **Out Bound Programs (OBTs)** — *Experiential outdoor learning for team bonding and leadership breakthrough.*[cite: 1, 4]

#### Tab 2: Standard Behavioural Programmes (15 Core Modules Grouped into 3 Pillars)[cite: 1, 4]
Instead of a flat 15-item bullet list, render as 3 clean category columns (5 items each):
* **Column A: Leadership & Management**
  * Leadership Skills[cite: 1, 4]
  * Managerial Skills[cite: 1, 4]
  * Strategic Management[cite: 1, 4]
  * Emotional Intelligence[cite: 1, 4]
  * Negotiation Skills[cite: 1, 4]
* **Column B: Communication & Team Synergy**
  * Communication Skills[cite: 1, 4]
  * Presentation Skills[cite: 1, 4]
  * The Art of Listening[cite: 1, 4]
  * Teamwork[cite: 1, 4]
  * Customer Focus[cite: 1, 4]
* **Column C: Personal Effectiveness & Mastery**
  * Being an Effective Employee[cite: 1, 4]
  * Personal Effectiveness[cite: 1, 4]
  * Goal Setting[cite: 1, 4]
  * Time Management[cite: 1, 4]
  * Stress Management[cite: 1, 4]

---

### Section 5: Strategic L&D Consulting (`#consulting`)
* **Positioning:** High-level advisory section targeted at CHROs, HR Heads, and Enterprise Management.
* **Background:** Contrasting dark slate/navy container (`bg-[#0F2942] text-white`) or bordered enterprise bento grid.
* **Section Title:** `End-to-End L&D Consulting & Architecture`[cite: 1]
* **Subtitle:** `Beyond classroom delivery, we partner with management to build scalable Learning & Development ecosystems.`[cite: 1]
* **6 Consulting Pillars (3x2 Grid):**
  1. **Role Specification Development** — *Defining clear accountabilities and role expectations across hierarchies.*[cite: 1]
  2. **Competency Mapping** — *Identifying critical behavioral and functional competencies for key roles.*[cite: 1]
  3. **Skill Process & Skill Assessment** — *Evaluating current workforce capabilities and diagnosing skill gaps.*[cite: 1]
  4. **L&D Procedure Development** — *Establishing standardized SOPs and governance for organizational training.*[cite: 1]
  5. **L&D Metrics & L&D Audits** — *Measuring training ROI, learning effectiveness, and system compliance.*[cite: 1]
  6. **Leader Behaviors Framework** — *Architecting custom leadership models aligned with company culture.*[cite: 1]

---

### Section 6: Our 7-Step Approach & Methodology (`#methodology`)
* **Section Title:** `Our Approach & Methodology`[cite: 1, 5]
* **Tagline:** `"We strive to create better and better positive experiences for both the Audience and the Management."`[cite: 1]
* **Visual Component:** Interactive Horizontal Stepper (Desktop) / Vertical Connected Timeline (Mobile) representing the 7-stage process from `image_e6ee62.jpg`[cite: 5]:
  * **Step 01:** `Understand Organization & Business`[cite: 5]
  * **Step 02:** `Training Need Analysis (TNA)`[cite: 5]
  * **Step 03:** `Define Training Objectives`[cite: 5]
  * **Step 04:** `Design the Outline`[cite: 5]
  * **Step 05:** `Develop the Content`[cite: 5]
  * **Step 06:** `Deliver the Programme`[cite: 5]
  * **Step 07:** `Measure Learning Effectiveness & Provide Management Recommendations`[cite: 5]

---

### Section 7: Esteemed Clientele Wall (`#clients`)
* **Header:** `Our Esteemed Clientele`[cite: 1, 6]
* **Subheader:** `Increasing our clients year on year... By Committing to Excellence.`[cite: 1, 6]
* **UI Treatment:** Clean 4-to-6 column responsive logo grid (`bg-white p-6 rounded-xl border border-slate-100 flex items-center justify-center h-28 grayscale hover:grayscale-0 transition-all`).
* **Complete Client Roster (21 Organizations from Brochure):**
  * **Pharma & Lifesciences:** Natco Pharma Limited, GlaxoSmithKline (GSK), Eisai, Suven Life Sciences, Krebs Biochemicals[cite: 1, 6]
  * **FMCG & Conglomerates:** ITC Limited, Coca-Cola, Adani Wilmar, Hershey's, Nutrine, Parrys (EID Parry)[cite: 1, 6]
  * **Industrial, Cement & Manufacturing:** Reliance Industries Limited, MRF, Amara Raja, Aditya Birla UltraTech Cement, The India Cements Ltd, Ramco SuperGrade, KCP Cement, International Paper, Nava Bharat[cite: 6]
  * **International & Infrastructure:** Qatar Petroleum, ETA (No.1 MEP Contractor / ETA Star / ETA Ascon / ETA Logistics)[cite: 6]

---

### Section 8: Contact & Footer (`#contact`)
* **Layout:** 2-Column Split (Left: Direct Contact & Office Details; Right: Corporate Inquiry Form "Request a Training Proposal").
* **Official Contact Data:**
  * **Company Name:** GKS Consultancy[cite: 1, 3]
  * **Address:** Flat No. 1108, 11th Floor, Vaisakhi Skyline Towers, Yendada, Visakhapatnam - 530048, Andhra Pradesh, India[cite: 1]
  * **Phone Numbers:** `+91 97043 23804` | `+91 96183 25208` | `+91 99851 42999` (Render as clickable `tel:` links)[cite: 1]
  * **Primary Email:** `info@gksconsultancy.com` *(Note: Omit the secondary gmail address from the primary UI to maintain enterprise polish, or keep only as a fallback)*[cite: 1]
  * **Website:** `www.gksconsultancy.com`[cite: 1]

---

## 4. Copy Hygiene & Guardrails for the Coding Agent
1. **Spelling Corrections Applied:**
   * Always use **"Loser"** (never *"Looser"* from the brochure scan)[cite: 1].
   * Always use **"21st Century Managers"** (never *"21st Century Mangers"*)[cite: 1, 4].
   * Always use **"based on"** (never *"basing on"*)[cite: 1, 4].
2. **Logo Handling:**
   * Place `GKS LOGO 1 ver8.jpg` on a pure `#FFFFFF` surface (`mix-blend-multiply` can be applied in CSS so any off-white JPEG compression artifacts disappear seamlessly into light backgrounds)[cite: 3].
3. **Responsive Behavior:**
   * Ensure the 15 Standard Programmes and 8 Signature Programmes collapse into clean accordion drawers or swipeable cards on mobile viewports (`< 768px`) so mobile users don't face endless vertical scrolling[cite: 1, 4].