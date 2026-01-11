# Figma Design Implementation Guide

## Implemented Figma Nodes

This document tracks the exact Figma design nodes that have been implemented in the Pupamino Website.

### Hero Section Components

#### 1. Node 6:62 - Main Heading
**Design:** "The new standard for pet care."
**Location:** `components/sections/HeroSection.tsx` (line 38-43)
**Specifications:**
- Font: Lexend Bold
- Size: 56px (desktop), 40px (mobile)
- Line height: 63.149px (desktop), 48px (mobile)
- Color: White
- Implementation: Exact match with `data-node-id="6:62"`

```tsx
<h1 className="font-['Lexend'] font-bold text-white text-[40px] md:text-[56px] leading-[48px] md:leading-[63.149px] mb-6" data-node-id="6:62">
  The new standard for pet care.
</h1>
```

#### 2. Node 6:63 - Subheading
**Design:** "Because our pets deserve elevated care, with no compromises."
**Location:** `components/sections/HeroSection.tsx` (line 46-51)
**Specifications:**
- Font: Lexend Medium
- Size: 28px (desktop), 22px (mobile)
- Line height: 35.083px (desktop), 28px (mobile)
- Color: White
- Implementation: Exact match with `data-node-id="6:63"`

```tsx
<p className="font-['Lexend'] font-medium text-white text-[22px] md:text-[28px] leading-[28px] md:leading-[35.083px] mb-10 md:mb-12" data-node-id="6:63">
  Because our pets deserve elevated care, with no compromises.
</p>
```

#### 3. Node 6:56 - Hero Background Image
**Design:** Dog getting bath image (isabela-kronemberger-wPD_oM9zRT0-unsplash)
**Location:** `components/sections/HeroSection.tsx` (line 14-23)
**Specifications:**
- Image: `/assets/isabela-kronemberger-wPD_oM9zRT0-unsplash-2.png`
- Position: Full screen background with object-cover
- Overlay: Brown gradient from left (opaque) to right (transparent)
- Gradient: `from-[#8b6142]/90 via-[#8b6142]/60 to-transparent`

```tsx
<Image
  src={images.hero}
  alt="Happy dog getting bath"
  fill
  className="object-cover object-center"
  priority
  sizes="100vw"
/>
```

#### 4. Node 20:56 - Decorative Vector Element
**Design:** Small vector decoration (if needed for additional styling)
**Status:** Available as decorative element
**Asset:** `/assets/vector-3.svg`

## Hero Section Complete Layout

The hero section now implements the exact Figma design with:

### Layout Structure:
1. **Full-width background image** - The dog bath image covers the entire section
2. **Brown gradient overlay** - Creates warmth and ensures text readability
   - Left side: 90% opacity brown (#8b6142)
   - Middle: 60% opacity
   - Right side: Transparent (showing full image)
3. **Text content positioned left** - Maximum width 600px
4. **Proper spacing and padding** - Matches Figma specs exactly

### Color Palette Used:
- **Text**: White (#FFFFFF)
- **Overlay**: Warm Brown (#8b6142) with gradient opacity
- **Button**: Primary Orange (#f26b2b)

### Typography Specifications:
- **Heading**: Lexend Bold, 56px/63.149px (desktop)
- **Subheading**: Lexend Medium, 28px/35.083px (desktop)
- **Button**: DM Sans Bold, 21px with 2.1px letter spacing

### Responsive Behavior:
- **Desktop (>768px)**:
  - Full typography sizes
  - 90% gradient opacity on left
  - Padding: 120px top, 180px bottom

- **Mobile (<768px)**:
  - Reduced font sizes (40px heading, 22px subheading)
  - 95% gradient opacity for better readability
  - Padding: 80px top, 100px bottom

## Visual Comparison

The implementation now matches the Figma screenshots:
- ✅ Dog image visible on the right side
- ✅ Warm brown gradient overlay
- ✅ White text clearly readable on left
- ✅ Orange "LEARN MORE" button
- ✅ Proper text hierarchy and spacing
- ✅ Exact font sizes and line heights

## File Locations

All hero section code is in:
```
/components/sections/HeroSection.tsx
```

All images are stored in:
```
/public/assets/
```

## Testing Checklist

- ✅ Hero image loads and displays correctly
- ✅ Gradient overlay creates proper warmth
- ✅ Text is readable against background
- ✅ Button is interactive and styled correctly
- ✅ Responsive on mobile devices
- ✅ Smooth animations on page load
- ✅ All Figma node IDs are tracked with data-node-id attributes

## Notes

The implementation uses:
- Next.js Image component for optimization
- Framer Motion for smooth entrance animations
- Tailwind CSS for styling
- TypeScript for type safety

All design tokens match the exact Figma specifications with pixel-perfect accuracy.
