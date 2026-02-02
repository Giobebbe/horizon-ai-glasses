# Components Documentation

This directory contains all the React components for the Horizon AI Glasses website.

## Structure

### `sections/`
Contains high-level components that represent entire sections of a page (e.g., `Hero.tsx`, `Features.tsx`). These are typically composed of smaller UI components and contain section-specific logic and animations.

- **Hero**: The main landing section with the scroll-triggered canvas animation.

### `ui/`
Contains base UI components (atoms) that are reused across the application. These are often built on top of Radix UI primitives and styled with Tailwind CSS (via Shadcn/UI).

- **Button**: Standard button component with variants.

### `layout/`
Contains global layout components that appear on multiple pages.

- **Navbar**: The top navigation bar.
- **Footer**: The page footer.
