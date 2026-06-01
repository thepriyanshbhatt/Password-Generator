<div align="center">

<img src="./public/intellikey-logo.png" alt="IntelliKey Logo" width="100"/>

# 🛡️ IntelliKey

**Advanced, Client-Side Password Management for the Modern Web**

[![Live Demo](https://img.shields.io/badge/Live_Demo-7ED957?style=for-the-badge&logo=vercel&logoColor=black)](https://intellikey.vercel.app/)

[View Demo](https://intellikey.vercel.app/) · [Report Bug](https://github.com/thepriyanshbhatt/Password-Generator/issues) · [Request Feature](https://github.com/thepriyanshbhatt/Password-Generator/issues)

<br/>

<a href="https://react.dev/"><img src="https://skillicons.dev/icons?i=react" alt="React" /></a>
<a href="https://www.typescriptlang.org/"><img src="https://skillicons.dev/icons?i=ts" alt="TypeScript" /></a>
<a href="https://tailwindcss.com/"><img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS" /></a>
<a href="https://vitejs.dev/"><img src="https://skillicons.dev/icons?i=vite" alt="Vite" /></a>
<a href="https://vercel.com/"><img src="https://skillicons.dev/icons?i=vercel" alt="Vercel" /></a>

</div>

<br/>

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

### 1. The Core Engine
This is the heart of IntelliKey. 
- **Client-Side Entropy:** Passwords are mathematically generated locally on the user's machine. 
- **Dynamic Controls:** Features a custom-styled range slider to dictate password length (up to 32 characters) and custom interactive checkboxes for granular control over character sets.
- **Technical Trust Signals:** Prominently displays "Zero-Knowledge" and "Crypto API" badges to assure technical users of the underlying security architecture.

### 2. Ambient Aesthetic
- **Glassmorphism & Glows:** The application relies heavily on translucent backgrounds (`backdrop-blur-2xl`) and carefully positioned, highly blurred gradient orbs to create an ambient, glowing "premium SaaS" environment.
- **Dark Mode Integration:** The entire UI is built with a first-class dark mode (`dark:bg-[#0A0A0A]`) that smoothly transitions colors.

### 3. Intelligent Navigation
- **Floating Pill Design:** A sticky, translucent navigation bar constrained to a `max-w-4xl` pill shape.
- **Custom Smooth Scroll:** The Navbar implements a highly optimized, `requestAnimationFrame`-based scroll function utilizing an `easeOutQuart` mathematical curve.
- **Context-Aware Routing:** The logo and "Home" links intelligently detect the user's current route to perform smooth scrolling or standard routing.

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

---

## 🎨 Design Philosophy

IntelliKey was designed under the philosophy that security tools do not need to be boring. By focusing on technical transparency and highly optimized modern design patterns, the UI inherently commands trust. The aggressive use of the signature green against deep, inky blacks creates a stark, highly legible contrast that feels immediately modern, premium, and secure.

---

<div align="center">

## 📇 Connect with Me

I'd love to hear your feedback or discuss potential collaborations!

<a href="https://github.com/thepriyanshbhatt"><img src="https://skillicons.dev/icons?i=github" alt="GitHub" /></a>
<a href="https://linkedin.com/in/thepriyanshbhatt"><img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" /></a>
<a href="https://twitter.com/itspriyanshdev"><img src="https://skillicons.dev/icons?i=twitter" alt="Twitter" /></a>
<a href="mailto:priyanshbhatt.dev@gmail.com"><img src="https://skillicons.dev/icons?i=gmail" alt="Gmail" /></a>

<br/>
<br/>
<a href="https://priyansh.framer.ai">View Portfolio</a>
<br/>
<hr/>
<br/>

Built with <span style="color: #ef4444;">❤</span> by <b>Priyansh Bhatt</b>

</div>
