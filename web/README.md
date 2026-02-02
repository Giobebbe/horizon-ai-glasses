# Horizon AI Glasses Website

This is the official website for Horizon AI Glasses, a luxury AI-powered smart eyewear product. The project is built with Next.js, follows a premium design aesthetic, and integrates advanced animations.

## Project Overview

- **Product**: Horizon AI Glasses - "The Future of Vision"
- **Target Audience**: Affluent, tech-savvy consumers.
- **Design Style**: Ultra-premium, cinematic, dark mode, high-end editorial feel.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) + [Shadcn/UI](https://ui.shadcn.com)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (complex) + Tailwind (simple)
- **Language**: TypeScript

## Directory Structure

- `src/app`: Next.js App Router pages and layouts.
- `src/components/sections`: Major page sections (Hero, Features, etc.) designed as self-contained blocks.
- `src/components/ui`: Reusable UI atoms (Buttons, Inputs, etc.) mostly from Shadcn.
- `src/components/layout`: Global layout components like Navbar and Footer.
- `public/`: Static assets including the hero video sequence.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Documentation

- **Project Spec**: See `../.docs/current_spec.md` for detailed requirements and design rules.
- **Agent Rules**: See `../AGENTS.md` for the operational architecture (RBI).

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).
