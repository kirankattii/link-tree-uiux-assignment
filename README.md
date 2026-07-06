# UI/UX Assignment

Welcome to my assignment built using the Next.js App Router and TypeScript.

---

## 🛠️ Tech Stack & Configurations

- **Frontend Framework:** Next.js (App Router) & TypeScript

- **Styling:** Tailwind CSS (v4) & Custom CSS variables

- **Animations:** Framer Motion for smooth transitions, parallax scrolls, and micro-interactions

- **Fonts:** Custom Google Fonts loaded via `next/font`:
  - **Headings:** [Orbitron](https://fonts.google.com/specimen/Orbitron) (`var(--font-orbitron)`) — for a modern, sleek, high-tech automotive look.
  - **Body:** [PT Sans](https://fonts.google.com/specimen/PT+Sans) (`var(--font-pt-sans)`) — for clean, readable content.
- **Color Palette:**
  - 🔴 **Brand Red:** `#db0204` (Primary Accent)
  - ⚪ **White:** `#ffffff`
  - ⚫ **Black:** `#000000`
  - 🔘 **Dark Neutral:** `#1a1a1a` & `#121212` (Cards & Footer)
  - ⚙️ **Muted Gray:** `#6b7280` (Body description & secondary texts)

---

## 📂 Project Architecture & Codebase

Here is an overview of the key directories and files:

### 1. Configurations & Core Logic

- **`lib/`**
  - `fonts.ts`: Configures the custom Google Fonts (`Orbitron` & `PT Sans`) using `next/font/google` and exposes them as Tailwind CSS variables.

  - `animation.ts`: Holds shared animation presets for Framer Motion, including custom transitions for the hero car, fade-in-up sequences, marquee speed controls, and spring parameters.

- **`constants/data.ts`**
  - The central source of truth containing static JSON data for brands, services, testimonials, blogs, and features. Keep this file updated to reflect updates on the homepage.

### 2. UI Components

- **`components/layout/`**
  - `Header.tsx`: Responsive navigation header featuring standard scrolling hooks, sticky behaviors, and a slide-out mobile menu.
  - `Footer.tsx`: Clean, minimal copyright section styled in the dark neutral brand theme.

- **`components/sections/`**
  - `Hero.tsx`: Engaging introductory banner showcasing high-end animations.
  - `FeaturesBar.tsx`: Rapid key highlights section (experience, personalized services, quality).
  - `AboutSection.tsx`: Narrative on the history, value proposition, and legacy of Car Decor.
  - `ServicesSection.tsx`: Categories detailing Interior, Exterior, Electronics, and Performance options.
  - `BrandMarquee.tsx`: Autoplay infinite marquee loop displaying supported automotive logos (Tata, Hyundai, Audi, Honda, etc.).
  - `WhyDeserves.tsx`: Core advantages, warranties, and premium product justifications.
  - `Testimonials.tsx`: Customer reviews and success stories.
  - `Blog.tsx`: Latest updates, decoration ideas, and alloy wheel trends.
  - `Contact.tsx`: Built-in lead capturing and inquiry form.

### 3. App Routes & Shell Layouts

- **`app/`**
  - `layout.tsx`: Configures standard metadata, injects fonts, and serves as the layout root.
  - `page.tsx`: Main page assembling all reusable home components.
  - `globals.css`: Integrates Tailwind v4 and imports variables and typography layers.
  - `loading.tsx`: A global loader skeleton with a custom spinning indicator in brand colors.
  - `error.tsx`: Catch-all error boundaries featuring self-recovery reset action styling.
  - `not-found.tsx`: Custom 404 page matching the dark theme layout.

### 4. Assets

- **`public/`**
  - Stores static files such as images (`/logo.png`, `/colon.png`), mock car renders, and other local resources.

---

## 🚀 Getting Started

To run the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/kirankattii/link-tree-uiux-assignment
   cd ui-ux
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

4. **Production Build:**
   ```bash
   npm run build
   npm run start
   ```
