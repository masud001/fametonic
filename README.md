# Fametonic - Social Media Career Platform

A modern, performance-optimized landing page for Fametonic, a platform that helps aspiring influencers turn their social media presence into a profitable career.

## 🚀 Live Demo

- [Live Demo](https://fametonic-live-demo.netlify.app/)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development](#development)
- [Testing](#testing)
- [Deployment](#deployment)
- [Performance](#performance)

## ✨ Features

- **Responsive Design**: Mobile-first approach with desktop optimization
- **Performance Optimized**: WebP images, lazy loading, and optimized assets
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation
- **Modern UI**: Dark theme with neon accents and custom typography
- **Content Management**: JSON-based content for easy updates
- **SEO Optimized**: Proper meta tags and semantic structure

## 🛠️ Tech Stack

- **Framework**: [SvelteKit 2.22.0](https://kit.svelte.dev/)
- **UI Library**: [Svelte 5.0.0](https://svelte.dev/)
- **Styling**: [Tailwind CSS 4.0.0](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 7.0.4](https://vitejs.dev/)
- **Testing**: [Vitest](https://vitest.dev/) + [Playwright](https://playwright.dev/)
- **Deployment**: [Netlify](https://netlify.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/masud001/fametonic.git
   cd fametonic
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
fametonic/
├── src/
│   ├── lib/
│   │   ├── components/          # Reusable Svelte components
│   │   │   ├── AnnouncementBar.svelte
│   │   │   ├── Contents.svelte
│   │   │   ├── Footer.svelte
│   │   │   ├── Header.svelte
│   │   │   ├── KeyFeatures.svelte
│   │   │   ├── MobileBackdrop.svelte      # Mobile navigation backdrop
│   │   │   ├── MobileMenuButton.svelte    # Hamburger menu button
│   │   │   ├── MobileNavigation.svelte    # Mobile navigation drawer
│   │   │   └── MobileNavigationDemo.svelte # Example implementation
│   │   ├── stores/              # Svelte stores for state management
│   │   │   └── mobileNavigation.ts        # Mobile navigation state
│   │   ├── types.ts             # TypeScript type definitions
│   │   └── index.ts             # Component exports
│   ├── routes/                  # SvelteKit routes
│   │   ├── +layout.svelte       # Root layout
│   │   └── +page.svelte         # Home page
│   └── app.css                  # Global styles and Tailwind config
├── static/
│   ├── images/                  # Optimized images (WebP format)
│   └── fonts/                   # Custom font files
├── e2e/                         # End-to-end tests
└── package.json                 # Dependencies and scripts
```

## 💻 Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run check` | Type check with SvelteKit |
| `npm run lint` | Run ESLint and Prettier |
| `npm run format` | Format code with Prettier |

### Component Usage

All components are available through centralized imports:

```svelte
<script>
// Import multiple components at once
import { Header, Footer, Contents, AnnouncementBar, KeyFeatures } from '$lib';

// Import mobile navigation components
import { MobileMenuButton, MobileBackdrop, MobileNavigation } from '$lib';

// Import mobile navigation store and actions
import { mobileNavigationStore, mobileNavigationActions } from '$lib';
</script>
```

### Code Quality

The project uses:
- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety
- **SvelteKit sync** for framework validation

## 🧪 Testing

### Unit Tests
```bash
npm run test:unit
```

### End-to-End Tests
```bash
npm run test:e2e
```

### Run All Tests
```bash
npm run test
```

## 🚀 Deployment

The project is configured for Netlify deployment:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `build`

## 📊 Performance

The project is optimized for performance with:

- **WebP images** for faster loading
- **Lazy loading** for images
- **Optimized fonts** with variable font support
- **Minified CSS and JS** in production
- **CDN-ready** static assets

### Lighthouse Scores

- ### Desktop Report
  ![Screenshot for desktop.](/static/screenshots/screenshot-desktop.png)
- ### Mobile Report
  ![Screenshot for mobile.](/static/screenshots/screenshot-mobile.png)

## 🎨 Design System

### Colors
- **Primary**: `#00E7F9` (Neon Blue)
- **Secondary**: `#FC004E` (Neon Pink)
- **Background**: `#010101` (Dark)
- **Text**: `#FFFFFF` (White)

### Typography
- **Primary Font**: Figtree (Variable font)
- **Display Font**: Urbanist (Variable font)

### Components
- **AnnouncementBar**: Promotional messages
- **Header**: Navigation with responsive logo and mobile menu button
- **Contents**: Hero section with value proposition
- **KeyFeatures**: Platform benefits list
- **Footer**: Additional information

### Mobile Navigation Components
- **MobileMenuButton**: Animated hamburger menu button with toggle functionality
- **MobileBackdrop**: Clickable backdrop overlay for mobile navigation
- **MobileNavigation**: Sliding navigation drawer with navigation links
- **MobileNavigationDemo**: Example implementation showing all components together

## 📱 Mobile Navigation

The project includes a complete mobile navigation system with centralized state management:

### 🏗️ Architecture
- **Centralized State**: Uses Svelte stores for single source of truth
- **Reusable Components**: Modular components that can be used anywhere
- **Accessibility**: Full ARIA support and keyboard navigation
- **Responsive Design**: Mobile-first approach with smooth animations

### 🔧 Components
- **MobileMenuButton**: Currently active - hamburger menu button visible on mobile
- **MobileBackdrop**: Temporarily hidden - backdrop overlay for mobile navigation
- **MobileNavigation**: Temporarily hidden - sliding navigation drawer

### 📍 Current Status
- ✅ **MobileMenuButton**: Active and functional
- ⏸️ **MobileBackdrop**: Temporarily commented out in Header component
- ⏸️ **MobileNavigation**: Temporarily commented out in Header component

### 🚀 To Re-enable Full Mobile Navigation
Uncomment these lines in `src/lib/components/Header.svelte`:
```svelte
<!-- Mobile Navigation Components - Temporarily Hidden -->
<MobileBackdrop />
<MobileNavigation />
```

### 🎯 State Management
The mobile navigation uses a centralized store (`src/lib/stores/mobileNavigation.ts`) that provides:
- **mobileNavigationStore**: Reactive state for navigation open/close
- **mobileNavigationActions**: Methods to toggle, open, and close navigation

## 🖼️ Content Images

- I used WEBP image format for page speed optimization. this image is little fade from original png image. PNG image size is much bigger than WEBP image.

- I use separate image for content and logo Desktop and mobile both.


## 📄 License

This project is private and proprietary.

## 🔗 Related links

- [GitHub Repository](https://github.com/masud001/fametonic).
- [Live Demo](https://fametonic-live-demo.netlify.app/).

---

Built with ❤️ using SvelteKit and Tailwind CSS
