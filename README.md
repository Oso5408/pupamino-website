# Pupamino Website

A modern, responsive pet care product website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

![Pupamino Website](public/assets/pupamino-logo-primary-lockup-1.png)

## Features

- **Modern Tech Stack**: Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices
- **Smooth Animations**: Implemented with Framer Motion for engaging user experience
- **State Management**: Zustand for cart and language state management
- **Optimized Performance**: Next.js Image optimization and static generation
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels

## Project Structure

```
pupamino-website/
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx            # Root layout with fonts and metadata
│   └── page.tsx              # Homepage
├── components/
│   ├── Header.tsx            # Navigation header with mobile menu
│   ├── Footer.tsx            # Footer with newsletter signup
│   ├── sections/
│   │   ├── HeroSection.tsx         # Hero banner
│   │   ├── PromiseSection.tsx      # 4 feature cards
│   │   ├── ProductsSection.tsx     # Product showcase
│   │   ├── BlueprintSection.tsx    # About/science section
│   │   └── TestimonialsSection.tsx # Customer reviews
│   └── ui/
│       └── Button.tsx        # Reusable button component
├── lib/
│   ├── constants/
│   │   └── images.ts         # Image path constants
│   └── store/
│       └── useStore.ts       # Zustand store
├── public/
│   └── assets/               # All images and SVGs
└── scripts/
    └── download-assets.js    # Asset download script
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher (project uses Node 18.20.8)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd pupamino-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Design System

### Colors

- **Primary Background**: `#fcebe3` (Soft peach)
- **Primary Text**: `#883d13` (Brown)
- **Primary CTA**: `#f26b2b` (Orange)
- **Secondary**: `#607c49` (Green)
- **Accent**: `#ffd6bb` (Light peach)
- **Gray**: `#dfdfdf`
- **Dark Brown**: `#3d1806`

### Typography

- **Headings**: Lexend (400, 500, 600, 700)
- **Body**: DM Sans (400, 500, 700)

## Sections Overview

### 1. Hero Section
- Full-width hero with background image
- Responsive text sizing
- Smooth scroll-to navigation
- Framer Motion entrance animations

### 2. Promise Section
- 4 feature cards highlighting product benefits:
  - Natural Ingredients
  - Kind to Skin
  - Thoughtful Formulations
  - Superior Performance
- Scroll-triggered animations
- Responsive grid layout

### 3. Products Section
- Product cards with images, descriptions, and pricing
- "Shop Now" CTA button
- Hover effects and animations

### 4. Blueprint Section
- Image + text layout showcasing scientific approach
- "The Pupamino Blueprint" messaging
- Responsive two-column design

### 5. Testimonials Section
- Customer review cards with star ratings
- Avatar images with circular borders
- Navigation arrows
- Social proof section

### 6. Footer
- Newsletter signup form
- Multi-column navigation links (Shop, Learn, Business)
- Social media integration
- Copyright information

### 7. Header
- Fixed navigation bar
- Responsive mobile menu with slide-in animation
- Shopping cart integration with item count
- Language switcher (English/中文)
- Smooth scroll navigation

## State Management

The application uses Zustand for managing:
- **Shopping cart**: items, quantities, add/remove/update operations
- **Language preference**: English/Chinese toggle
- **Mobile menu**: open/close state

Access the store:
```typescript
import { useStore } from '@/lib/store/useStore';

// In your component
const { cart, addToCart, language, setLanguage } = useStore();
```

## Performance Optimizations

- ✅ Next.js Image component for automatic image optimization
- ✅ Static page generation for fast loading
- ✅ Font optimization with next/font
- ✅ Lazy loading for images
- ✅ Minimal JavaScript bundle size (169 KB First Load JS)
- ✅ Turbopack for faster development builds

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Shopping cart page with checkout flow
- [ ] Product detail pages
- [ ] Blog section
- [ ] Multi-language content (full i18n)
- [ ] Working testimonials carousel
- [ ] Product filtering and search
- [ ] User authentication
- [ ] Order management system
- [ ] Payment integration

## Tech Stack

- **Framework**: Next.js 15.5.9
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Fonts**: Google Fonts (Lexend, DM Sans)
- **Image Optimization**: Next.js Image
- **Build Tool**: Turbopack

## Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `node scripts/download-assets.js` - Download Figma assets

## License

Copyright © 2025 Pupamino. All rights reserved.

## Contact

For business inquiries: admin@pupamino.com

---

This project was built following the design from Figma and implements modern React best practices with TypeScript, responsive design, and smooth animations.
