# Next.js 3D Interactive Portfolio

Welcome to the repository for my personal portfolio! This website is a modern, highly interactive, and visually striking web application built to showcase my skills, projects, and coding profiles. It heavily utilizes 3D elements, smooth animations, and a responsive glassmorphism design.

## 🚀 Live Demo
(https://portfoliohimanshugupta.netlify.app/)

---

## 🛠️ Tech Stack

This portfolio is built using cutting-edge web technologies to ensure high performance and premium aesthetics:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/), [@react-three/drei](https://github.com/pmndrs/drei)
- **Forms/Emails**: [EmailJS](https://www.emailjs.com/)
- **Data Fetching**: Custom API integrations (e.g., `leetcode-query` for live competitive programming stats)
- **Deployment**: Vercel / Netlify

---

## 📂 Website Structure & Workflow

The portfolio is designed as a single-page scrolling experience, with distinct sections that seamlessly blend together.

### 1. Global UI Elements
- **Navbar (`src/component/Nav.tsx`)**: A fixed, glassy navigation bar with smooth scrolling links. It features a fully responsive hamburger menu for mobile users.
- **Animated Background (`src/component/AnimatedBackground.tsx`)**: A persistent dark-themed background with a subtle grid pattern and glowing radial gradients (cyan and magenta) that provides depth to the entire application.

### 2. Hero Section (`src/component/Hero.tsx`)
- The landing view featuring a profile image, dynamic typography, and quick call-to-action buttons (Resume, Contact).
- Designed with a clean, centered mobile layout and a split-pane desktop layout.

### 3. About Section (`src/app/about/page.tsx`)
- Contains a personal biography and animated horizontal skill bars.
- Features dynamic counting numbers for achievements (DSA problems, Projects, Hackathons).
- Integrates a responsive, embedded 3D Gaming Setup model (via Sketchfab) cropped cleanly to hide external UI controls.

### 4. Skills Section (`src/app/skills/page.tsx`)
- **Left/Top Pane**: A custom-built 3D rotating sphere (`TechStackSphere.tsx`) rendering various technology logos floating in 3D space.
- **Right/Bottom Pane**: Categorized skill chips (Frontend, Backend, Databases, etc.) with hover glow effects.

### 5. Coding Profiles (`src/component/CodingProfileSection.tsx`)
- A grid layout displaying live, dynamic statistics from platforms like LeetCode, CodeChef, and GeeksforGeeks.
- Uses server-side or static data fetching to pull recent problem-solving counts.

### 6. Projects Section (`src/app/projects/page.tsx`)
- A vertical timeline layout showcasing featured projects.
- Alternating left/right layout on desktop, condensing to a vertical stack on mobile.
- Each project card includes an image with a dark overlay, tech stack tags, and links to the live site and source code.

### 7. Contact Section (`src/app/contact/page.tsx`)
- A functional contact form powered by **EmailJS**, allowing users to send emails directly from the browser without a backend.
- Features an interactive **3D Fox Model** (`src/models/Fox.tsx`) that reacts to user interactions (e.g., walking when typing or sending, showing a hit animation on error).
- Includes an animated, user-friendly alert banner for success/error states.

---

## ⚙️ Local Development

To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env.local` file in the root directory and add your EmailJS credentials to enable the contact form:
```env
NEXT_PUBLIC_EMAIL_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAIL_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAIL_PUBLIC_KEY=your_public_key
```

### 4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📱 Mobile Responsiveness

The entire application is built with a "mobile-first" approach using Tailwind's utility classes. Specific optimizations include:
- A collapsed hamburger menu on small screens.
- Stacked grid layouts (switching from `grid-cols-2` or `grid-cols-3` to `grid-cols-1`).
- Constrained heights for 3D canvases to prevent vertical stretching and ensure content remains visible without overlapping.

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/my-portfolio/issues).
