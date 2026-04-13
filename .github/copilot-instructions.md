# Copilot Instructions for Design System Repository

## Overview
This is a Storybook-based design system project (Node.js v24.14.1+) providing reusable UI components and design foundations across multiple themes (Atlas, Evergreen, Pulse) with light and dark color modes.

## Build, Test & Development

### Local Development
```bash
npm install                 # Install dependencies
npm run storybook          # Start dev server (http://localhost:6006)
npm run build-storybook    # Build static Storybook output (storybook-static/)
```

### Testing
- **Note**: `npm test` currently has no tests configured; this should be addressed when adding test coverage
- Vitest and Playwright are available as dev dependencies but not yet integrated into the build pipeline

## Architecture

### Project Structure
```
stories/          # Storybook components & stories
  ├── Button.js, Header.js, Page.js      # Component implementations
  ├── *.stories.js                        # Storybook story definitions
  ├── foundations.css / button.css / ...  # Component styles
  └── foundationPalette.js                # Design token definitions

src/
  └── css/              # Core design system styles
      ├── styles.css    # Main entry point (imports all)
      ├── base/         # Reset, forms, base HTML styling
      ├── brand/        # Theme-specific: colors.css, typography.css
      └── utilities/    # Reusable: space, radius, shadow, z-index, layout, motion
```

### Design System Layers
1. **Base** (`src/css/base/`) - HTML element resets and defaults
2. **Brand** (`src/css/brand/`) - Theme-specific design tokens (colors, typography)
3. **Utilities** (`src/css/utilities/`) - Helper classes and CSS variables
4. **Components** (`stories/`) - Reusable UI components (Button, Header, Page, etc.)

### Multi-Theme Architecture
- Three themes available: `atlas`, `evergreen`, `pulse`
- Two color modes: `light`, `dark`
- Theme/mode applied via `data-theme` and `data-colorMode` attributes on `<html>` and `<body>`
- Storybook toolbar (paintbrush icon) allows switching themes; mirror icon for light/dark mode
- `.storybook/preview.js` manages global theme application to decorators

## Key Conventions

### Component Implementation
- Components are plain JavaScript functions that create and return DOM elements
- Naming: `create{ComponentName}()` function pattern (e.g., `createButton()`, `createHeader()`)
- Components accept a props object and support event handlers via `addEventListener`
- CSS classes use BEM-like convention: `storybook-{component}--{modifier}`

### Stories Definition
- Use Storybook 10.x format with `render()`, `argTypes`, and `args`
- Include `tags: ['autodocs']` for automatic documentation generation
- Use `fn()` from `'storybook/test'` for click handlers: `args: { onClick: fn() }`
- Define variants as separate story exports (Primary, Secondary, Ghost, etc.)
- Use inline-radio/select controls in `argTypes` for categorical props

### CSS Organization
- CSS custom properties (CSS variables) for theming
- Imports use relative paths and follow dependency order:
  1. Base styles
  2. Theme/brand styles
  3. Utilities
  4. Component-specific styles
- Each component's styles live alongside its story file in `stories/`
- Global styles imported in `.storybook/preview.js`

### Color & Typography
- Define in `src/css/brand/` (colors.css, typography.css)
- Used by all components; theme switching applies these globally
- Palette inspection available in Storybook via foundationPalette.js

## Development Notes
- Project uses ES modules (`"type": "module"` in package.json)
- Storybook HTML + Vite stack (not React/Vue)
- Chromatic integration configured for visual regression testing (optional)
- A11y addon enabled with test mode set to 'todo' (violations shown but don't fail CI)
