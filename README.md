# Zee Collection — Luxury Modest Fashion (Client Demo)

An interactive, responsive, high-fidelity client demo website for **Zee Collection**, a luxury women's modest fashion brand specializing in handcrafted abayas, fluid pure silk kaftans, royal northern doguwar riga, and bespoke modest couture.

---

## ✦ Brand & Aesthetic Design
- **Brand Identity**: Zee Collection · Haute Couture Atelier
- **Vibe**: Elegant, premium, feminine, luxurious, minimalist
- **Color Palette**:
  - Charcoal / Obsidian Black (`#111111`)
  - Warm Ivory Canvas (`#F8F4EC`)
  - Antique Metallic Gold (`#D4AF37`)
  - Muted Rose & Blush Dust (`#C9A7A0`)
- **Typography**:
  - Headings: *Cormorant Garamond* (Editorial Luxury Serif)
  - Body & UI: *Montserrat* (Crisp, modern, high legibility)
- **Visuals**:
  - Generous whitespace, thin gold dividers, soft multi-layer box shadows
  - Floating ambient gradient orbs with Gaussian blur
  - 60fps smooth scrolling, glassmorphism navigation, and responsive touch gestures

---

## ✦ Tech Stack & File Architecture
- **HTML5**: Semantic, accessible markup with ARIA landmarks and dialog states.
- **CSS3 (`styles.css`)**: Vanilla CSS3 custom properties, CSS Grid, Flexbox, backdrop-filter glassmorphism, responsive breakpoints, and `@media (prefers-reduced-motion)` compliance.
- **TypeScript (`main.ts`)**: Vanilla TypeScript (ES2017+, DOM, strict mode), zero third-party UI framework dependencies.
- **Compiled Output (`main.js`)**: Compiled directly with TypeScript (`tsc`), loaded by `index.html`.
- **Target Files**:
  - `index.html` — Semantic single-page layout, accessible dialogs, and slide-in drawers
  - `styles.css` — High-end luxury stylesheet with gold glassmorphism and animations
  - `main.ts` — Reactive client-side application logic and complete mock data catalog
  - `main.js` — Compiled JavaScript bundle
  - `tsconfig.json` — Strict compiler options targeting ES2017 & DOM
  - `README.md` — Project documentation and compilation guide

---

## ✦ Client Demo Features & Mock Data

### 1. Catalog & Shop
- **12+ Curated Creations**:
  - *Classic Abaya* (₦45,000, Japanese Nidha)
  - *Embroidered Abaya* (₦78,000, Antique Gold Bullion)
  - *Royal Doguwar Riga* (₦65,000, Northern Royal Brocade)
  - *Pure Silk Kaftan* (₦85,000, 100% Mulberry Silk)
  - *Moroccan Sfifa Jalabiya* (₦55,000)
  - *Luxury Silk Hijab Set 3-Pack* (₦18,000 with magnetic gold pins)
  - *Two-Piece Kimono & Slip Set* (₦62,000)
  - *Midnight Occasion Abaya* (₦110,000 with Swarovski crystals)
  - *French Chantilly Lace Abaya* (₦72,000)
  - *Minimalist Crepe Abaya* (₦52,000 with deep pockets)
  - *Heavy Hammered Satin Kaftan* (₦68,000)
  - *Wide-Leg Palazzo Two-Piece Set* (₦58,000)
- **Filtering & Search**:
  - Instant live keyword search (name, fabric, description)
  - Category selector buttons (Abayas, Kaftans, Occasionwear, Sets, Hijabs)
  - Size filter (52, 54, 56, 58, 60, S, M, L, XL)
  - Price range selector (Under ₦60k, ₦60k–₦80k, Above ₦80k)
  - Sorting (Featured, Price: Low to High, Price: High to Low, Highest Rated, Name A-Z)

### 2. Interactive Modals & Drawers
- **Slide-in Cart Drawer**:
  - Persistent shopping bag in `localStorage`
  - Quantity controls (`+` / `−`), item removal
  - Promo code input (Enter **`ZEE10`** to test the 10% discount calculation)
  - Live bag counter badges in the navbar
- **Checkout via WhatsApp (Demo)**:
  - Compiles all selected items, sizes, quantities, and discount totals into a formatted WhatsApp concierge message.
- **Standard Demo Checkout**:
  - Simulates the complete order completion journey and generates a mock confirmation receipt (e.g., `#ZEE-4819`).
- **Wishlist Drawer**:
  - Save items to favorites with heart toggle, persist in `localStorage`, and move to cart with one click.
- **Product Quick View Modal**:
  - Detailed product overview, size buttons, color swatches, quantity stepper, and client reviews.
- **Editorial Lookbook Lightbox**:
  - High-resolution modal lightbox with caption and collection notes.
- **Atelier Size Guide Modal**:
  - Comprehensive measurements table (Lengths 52 to 62 in inches and cm, bust, height, and sleeve measurements).
- **FAQ Accordion**:
  - Smooth animated accordion addressing sizing, fabric care, international delivery, and bespoke orders.
- **Contact & Atelier Form**:
  - Demo form with immediate toast notification feedback.

---

## ✦ How to Compile TypeScript

To compile `main.ts` into `main.js`:

```bash
# 1. Compile once using TypeScript compiler
npx tsc

# 2. Or run continuous watch mode during development
npx tsc --watch
```

`tsconfig.json` targets `ES2017` with standard DOM libraries and strict type safety enabled.

---

---

## ✦ Deploying to Vercel

The project includes pre-configured **`vercel.json`** for zero-config one-click deployment.

### Deploy with Vercel CLI:
```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Deploy directly from repository root
vercel
```

### Deploy via GitHub on Vercel Dashboard:
1. Push your repository to GitHub.
2. In the Vercel dashboard, click **"Add New Project"** and import the repository.
3. Vercel automatically detects the Vite configuration:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build` (runs `tsc && vite build`)
   - **Output Directory**: `dist`
4. Click **Deploy**. All assets in `public/images` are automatically bundled and served via Vercel's global CDN.

---

## ✦ Client Demo Notice
> **Important Note for Reviewers & Stakeholders**:
> This website is a **demonstration prototype** created for client review and interaction testing. All catalog items, prices in Nigerian Naira (₦), client testimonials, order confirmation receipts, and WhatsApp message previews are **simulated mock data**. No financial transactions, debit card charges, or actual logistics shipments occur on this demo site.
