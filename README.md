# 🛡️ IntelliKey

> **A hyper-premium, zero-knowledge password generator built with modern web technologies, focused on absolute privacy and a flawless user experience.**

IntelliKey (formerly known as Vaultr) is a client-side password management tool designed for the modern web. Built by **Priyansh Bhatt**, it prioritizes a sleek, minimalist "Bento-box" aesthetic, lightning-fast animations, and robust client-side security. 

Unlike traditional password managers, IntelliKey generates passwords directly in your browser. No databases. No accounts. No server-side logs. Just pure, unadulterated entropy.

---

## ⚡ Tech Stack & Architecture

This project was engineered from the ground up to be lightweight, incredibly fast, and visually striking.

- **Framework:** [React 19](https://react.dev/) initialized via [Vite](https://vitejs.dev/) for instantaneous HMR and optimized production builds.
- **Language:** TypeScript for strict type-safety and robust component interfaces.
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) utilizing a custom design token system (featuring our signature `brand-green-slider` hex `#7ED957`).
- **Animations:** [Framer Motion](https://www.framer.com/motion/) powering the high-stiffness spring entrance animations, paired with custom mathematical easing curves (`easeOutQuart`) for native scroll behaviors.
- **Routing:** [React Router DOM](https://reactrouter.com/) for seamless Single Page Application (SPA) navigation.
- **Icons:** [Lucide-React](https://lucide.dev/) for crisp, scalable, consistent vector iconography.

---

## 🧩 Core Components & Feature Breakdown

### 1. The Core Engine (`HeroLeft.tsx`)
This is the heart of IntelliKey. 
- **Client-Side Entropy:** Passwords are mathematically generated locally on the user's machine. 
- **Dynamic Controls:** Features a custom-styled range slider to dictate password length (up to 32 characters) and custom interactive checkboxes for granular control over character sets (Uppercase, Lowercase, Numbers, Symbols).
- **Technical Trust Signals:** Prominently displays "Zero-Knowledge" and "Crypto API" badges to assure technical users of the underlying security architecture.

### 2. Ambient Aesthetic (`HeroRight.tsx` & Backgrounds)
- **Glassmorphism & Glows:** The application relies heavily on translucent backgrounds (`backdrop-blur-2xl`) and carefully positioned, highly blurred gradient orbs to create an ambient, glowing "premium SaaS" environment.
- **Dark Mode Integration:** The entire UI is built with a first-class dark mode (`dark:bg-[#0A0A0A]`) that smoothly transitions colors over a 500ms duration.

### 3. Intelligent Navigation (`Navbar.tsx`)
- **Floating Pill Design:** A sticky, translucent navigation bar constrained to a `max-w-4xl` pill shape.
- **Custom Smooth Scroll:** Instead of relying on native browser CSS which can feel clunky, the Navbar implements a highly optimized, `requestAnimationFrame`-based scroll function utilizing an `easeOutQuart` mathematical curve. This allows for a lightning-fast, zero-wobble swipe down to the features section.
- **Context-Aware Routing:** The logo and "Home" links intelligently detect the user's current route. If on the homepage, they act as smooth scroll-to-top triggers. If on the About page, they act as standard React Router navigation links.

### 4. Bento-Box About Page (`pages/About.tsx`)
- **Creator Profile:** A dedicated route (`/about`) styled in a modern "Bento-box" layout featuring a high-resolution portrait of the founder, Priyansh Bhatt.
- **Direct Integrations:** Features a "View Portfolio" button securely opening `https://priyansh.framer.ai` (`target="_blank" rel="noopener noreferrer"`) and a "Get in Touch" button utilizing the native `mailto:priyanshbhatt.dev@gmail.com` protocol.

### 5. Feature Grid (`Features.tsx`)
- A visually striking 4-column grid outlining the core tenets of IntelliKey: 
  - **100% Free**
  - **No Sign Up**
  - **Use Anywhere**
  - **Zero Storage**
- Features subtle hover micro-interactions (`hover:-translate-y-1`) and custom glowing drop-shadows.

---

## 🚀 Getting Started

To run IntelliKey locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/thepriyanshbhatt/Password-Generator.git
   cd Password-Generator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🎨 Design Philosophy

IntelliKey was designed under the philosophy that security tools do not need to be boring. 
By dropping generic "social proof" (like fake star reviews) and replacing them with confident, technical architectural badges, the UI commands trust. The aggressive use of the `brand-green-slider` against deep, inky blacks (`#0A0A0A`) creates a stark, highly legible contrast that feels immediately modern, premium, and inherently secure.

---

<div align="center">
  <p>Made with <span style="color: #ef4444;">❤</span> by <b>Priyansh Bhatt</b></p>
  <a href="https://priyansh.framer.ai">View Portfolio</a> | <a href="mailto:priyanshbhatt.dev@gmail.com">Get in Touch</a>
</div>
