# Project Specification: Horizon AI Glasses

## 1. Business Context
- **Industry**: Luxury AI-powered smart glasses
- **Target Audience**: Affluent, tech-savvy consumers (Design + Innovation)
- **Brand Personality**: Refined, intelligent, sophisticated
- **Key Goal**: Pre-orders / Early Access Signup

## 2. Aesthetic & Design (Frontend Agent Rules)
- **Visual Style**: Ultra-premium, Editorial (Meta/Apple hardware style)
- **Spacing**: Generous, luxurious white space
- **Animations**:
  - Smooth scroll (fade-ins, gentle parallax)
  - **Review**: MUST respect `rules/animations.md` (Reduced motion support + Framer Motion for complex parts)
- **Typography**: Modern elegant sans-serif (Headings), Minimal sans-serif (Body)
- **Imagery**: Cinematic studio lighting, dark backgrounds, metallic/glass reflections

## 3. Color Palette (Tailwind Tokens)
- **Primary**: Deep Graphic Black `#0F0F0F`
- **Secondary**: Metallic Silver `#C8C8C8`
- **Accent**: Electric Blue `#1B4DFF`
- **Text**: Off-white `#F9F9F9` (Dark bg) / Graphite `#1A1A1A` (Light bg)
- **Background**: Near-black `#0F0F0F` (Hero) / Soft Gray `#F4F4F4` (Alternating)

## 4. Section Breakdown
### 1. Hero
- **Content**: "Meet the Future of Vision", Scroll indicator
- **Visual**: Full viewport, Animated product video placeholder

### 2. Brand Story
- **Goal**: Heritage & Engineering
- **Visual**: Single elegant frame detail image

### 3. Features/Pillars
- **Elements**:
  1. Private In-Lens Display
  2. AI Voice Assistant
  3. All-Day Performance
- **Style**: Horizontal layout, minimal icons

### 4. Product Showcase
- **Grid**: 3-4 Cards
- **Products**: "Horizon Black", "Titanium Silver", "Carbon Edge"
- **Interaction**: Hover effects (Zoom/Elevation)

### 5. Call to Action
- **Heading**: "Stay Ahead"
- **Interaction**: Email Input + Electric Blue Button

### 6. Footer
- **Content**: Logo, Links, Socials, Copyright 2026

## 5. Technical Requirements
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS v4 + Shadcn/UI
- **Animation**: Framer Motion (Complex) + Tailwind (Simple)
- **Responsiveness**: Mobile-first
