# Animation Standards

## Core Principles
1. **Respect User Preferences**: All animations MUST respect `prefers-reduced-motion`.
2. **Performance First**: Use CSS transforms (translate, scale, rotate) and opacity over layout-triggering properties (width, height, top, left).

## Tooling
- **Complex Animations**: Use `framer-motion` for complex sequences, layout transitions, and gestures.
- **Simple Transitions**: Use Tailwind CSS utility classes (e.g., `transition-all`, `duration-200`) for simple hover/focus states.

## Accessibility Requirements (Reduced Motion)
When `prefers-reduced-motion: reduce` is active:
- **Disable** auto-playing animations (background videos, carousels).
- **Replace** movement-based transitions with simple opacity fades.
- **Speed up** or remove duration for strictly necessary transitions.

### Framer Motion Pattern
```tsx
import { motion, useReducedMotion } from "framer-motion"

const MyComponent = () => {
  const shouldReduceMotion = useReducedMotion()

  const variants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -20 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      Content
    </motion.div>
  )
}
```
