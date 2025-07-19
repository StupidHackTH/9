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
Website content follows a structured approach with modular sections. Component order and layout can be found in `src/pages/index.astro`.

## Development Notes

- The site uses a single-page application structure with all content on the index page
- Images are stored in `src/assets/` and imported with `?url` for optimization
- The base URL is configured for deployment to `/9/` subdirectory
- All sponsor data includes placeholder entries for future sponsors
- English content with Thai playful elements and local cultural references

## Design Philosophy & Visual Elements

### Iconify Integration
- Uses `iconify-icon` web component loaded from CDN in Layout.astro
- Material Design icons (mdi:*) are preferred for consistency
- Icons use brand color `#19806f` for visual cohesion

### Typography Hierarchy
- **Headlines**: `font-display` class - Righteous font with LINE Seed Sans TH fallback
  - Always use with `font-weight: normal` (Righteous appears bold at normal weight)
  - For Thai text, automatically falls back to LINE Seed Sans TH Display (weight-mapped for visual consistency)
- **Sub-headings**: `font-subhead` class - K2D font for readability (Thai-optimized)
- **Body text**: System fonts (default) for optimal performance
- **Font sizes**: 4xl/7xl for headers, lg for body text
- **Color scheme**: White text on black background, with `#19806f` accent color

### Font Technical Details
- **LINE Seed Sans TH Display**: Special weight-mapped version where bold file (700) is mapped to normal weight (400) to match Righteous's visual weight
- **Font fallback strategy**: Righteous → LINE Seed Sans TH Display → cursive (for headlines)
- **K2D usage**: Sub-headings, day labels, and secondary typography elements

### Layout Patterns
- **Grid-based layouts**: 3-column grids for feature sections
- **Responsive design**: `md:` and `lg:` breakpoints for mobile-first approach
- **Card components**: Gray-900 backgrounds with rounded corners and hover effects
- **Aspect ratios**: 4:3 for images to maintain visual consistency

### Interactive Elements
- **Hover states**: Opacity changes, color transitions, border color changes
- **Link styling**: Underlines for text links, hover color changes
- **Button design**: Rounded corners, icon + text combinations
- **Transitions**: Smooth color and opacity transitions throughout

### Content Strategy Insights
- **Readability first**: Break long paragraphs into digestible chunks with visual elements
- **Visual hierarchy**: Use icons, boxes, and spacing to make content scannable
- **Mixed language**: Content is primarily in English with Thai elements for local flavor
- **Playful tone**: Maintains fun, irreverent personality while being informative

## Event Context

### Stupid Hackathon Philosophy
- Focus on "wonderfully useless" projects that nobody needs
- Emphasis on creativity over business viability
- Weekend-long event encouraging experimentation
- Community-driven with no judgment or competition pressure
- Thai name includes playful elements like "อยากใส่ใจ คือไรอ่ะ 👀"

### Venue Partnership
- **Game Dev Hub Bangkok**: First coworking space for game developers in Thailand
- Special arrangement allowing overnight stays during hackathon
- Located at BB Building, 16th floor, near Terminal 21/Asoke
- 500 sqm space with professional tools (3D printing, podcast studios)
- Strong community of indie developers, artists, and industry veterans

## Content Management

When updating content:
1. Sponsor information should be updated in `src/data/sponsors.ts`
2. Component order and page structure can be found in `src/pages/index.astro`
3. Asset files should be placed in `src/assets/` and imported properly
4. Component updates should maintain the existing section-based structure
5. **Maintain design consistency**: Use established color scheme, typography, and layout patterns
6. **Preserve accessibility**: Ensure proper alt text, semantic HTML, and keyboard navigation
7. **Preserve language mix**: Maintain English content with Thai playful elements
8. **Test responsiveness**: Verify layouts work on mobile, tablet, and desktop