# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the landing page for **Stupido Hackettino #9**, a weekend hackathon event focused on creating wonderfully useless but wildly creative projects. The website is built using Astro with TypeScript and Tailwind CSS.

## Common Commands

All commands use `bun` as the package manager:

```bash
# Install dependencies
bun install

# Start development server (localhost:4321)
bun dev

# Build for production
bun build

# Preview production build
bun preview

# Run Astro CLI commands
bun astro [command]
```

## Architecture & Tech Stack

- **Framework**: Astro 5.7.10 with TypeScript
- **Styling**: Tailwind CSS v4.1.10 via Vite plugin
- **Package Manager**: pnpm (via packageManager field)
- **Base URL**: `/9/` (configured in astro.config.mjs)
- **TypeScript**: Strict mode enabled via astro/tsconfigs/strict

## Project Structure

```
src/
├── components/        # Astro components for each page section
│   ├── HeroSection.astro
│   ├── QuickOverview.astro
│   ├── AboutSection.astro
│   ├── EventSection.astro
│   └── Header.astro
├── layouts/
│   └── Layout.astro   # Main layout with global styles
├── pages/
│   └── index.astro    # Single-page application
├── data/
│   └── sponsors.ts    # Sponsor data with TypeScript interfaces
├── assets/           # Static assets (images, SVGs)
└── styles/
    └── global.css    # Global styles
```

## Key Architecture Patterns

### Component-Based Structure
Each major section of the landing page is a separate Astro component imported into `index.astro`. This modular approach makes it easy to maintain and update individual sections.

### Data Management
Sponsor information is centralized in `src/data/sponsors.ts` with TypeScript interfaces:
- `Sponsor` interface with tier system (tier3, tier2, tier1, individual)
- `getSponsorsByTier()` utility function
- Thai language tier names in `tierNames` object

### Styling Approach
- Global dark theme (black background, white text) set in Layout.astro
- Tailwind CSS for component-specific styling
- Custom animations defined in component `<style>` blocks
- Asset imports using Astro's `?url` syntax for optimized loading

### Content Strategy
The `WEBSITE_DRAFT.md` file contains comprehensive content specifications that should be referenced when updating page content. It includes detailed sections for event information, sponsorship tiers, and guidelines.

## Development Notes

- The site uses a single-page application structure with all content on the index page
- Images are stored in `src/assets/` and imported with `?url` for optimization
- The base URL is configured for deployment to `/9/` subdirectory
- All sponsor data includes placeholder entries for future sponsors
- Thai language content is used throughout for local audience

## Content Management

When updating content:
1. Sponsor information should be updated in `src/data/sponsors.ts`
2. Major content changes should reference `WEBSITE_DRAFT.md` for specifications
3. Asset files should be placed in `src/assets/` and imported properly
4. Component updates should maintain the existing section-based structure