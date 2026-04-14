# Project Recommendations by AI (Codex)

As of April 13, 2026, the structure I’d recommend for a modern Drupal theme is:

Drupal core Single Directory Components for reusable UI components
a custom theme in themes/custom
Vite for local dev and production builds
Storybook with the Vite builder for isolated component development
mostly native CSS and ES modules, with preprocessors only if the team has a real need
Drupal’s current docs support components/ with *.component.yml + *.twig, optional colocated CSS/JS/assets, and recommend schemas; Storybook’s Vite builder is designed to reuse your Vite config; Vite is the current fast default build tool for modern frontend work. Sources: Drupal SDC docs, Drupal theme structure docs, Storybook Vite builder docs, Vite guide.

Recommended theme structure

web/themes/custom/my_theme/
├── my_theme.info.yml
├── my_theme.libraries.yml
├── my_theme.breakpoints.yml
├── my_theme.theme
├── package.json
├── package-lock.json
├── vite.config.ts
├── postcss.config.js
├── .nvmrc
├── .storybook/
│   ├── main.ts
│   ├── preview.ts
│   └── manager.ts
├── components/
│   ├── atoms/
│   │   └── button/
│   │       ├── button.component.yml
│   │       ├── button.twig
│   │       ├── button.css
│   │       ├── button.ts
│   │       ├── button.stories.ts
│   │       └── README.md
│   ├── molecules/
│   ├── organisms/
│   ├── templates/
│   └── pages/
├── src/
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── base.css
│   │   ├── utilities.css
│   │   └── app.css
│   ├── scripts/
│   │   ├── app.ts
│   │   └── behaviors/
│   └── icons/
├── templates/
│   ├── content/
│   ├── field/
│   ├── form/
│   ├── layout/
│   ├── navigation/
│   └── views/
├── dist/
├── images/
├── logo.svg
└── screenshot.png

## How I’d divide responsibilities

components/: reusable UI, organized by atomic design, using Drupal SDC.
templates/: Drupal-specific wrappers and overrides for nodes, fields, views, pages, forms.
src/styles/: global CSS layers only.
src/scripts/: global behaviors and lightweight shared utilities.
dist/: compiled assets only, never hand-edited.
.storybook/: isolated component development and docs.
Component pattern

Each reusable component should usually contain:

components/molecules/card/
├── card.component.yml
├── card.twig
├── card.css
├── card.ts
├── card.stories.ts
└── README.md
That is the best fit for Drupal now because SDC expects components in components/, requires *.component.yml and *.twig, and auto-loads component CSS/JS when named after the component. Source: Drupal SDC docs.

Recommended frontend standards

### CSS

Prefer native CSS first: custom properties, cascade layers, nesting if your browser target allows it, logical properties, container queries.
Keep design tokens in one place, e.g. tokens.css.
Use utility classes sparingly for layout primitives only.
Co-locate component CSS with the component.
Use PostCSS for autoprefixing and small transforms, not as an excuse for complexity.

### HTML/Twig

Semantic HTML first

ARIA only when native HTML is insufficient.
Keep components API-driven through props/slots, not ad hoc context leakage.
Use SDC schema aggressively; I recommend enforce_prop_schemas: true in the theme as a team standard. That’s an inference-based recommendation, but it aligns with Drupal’s guidance that schemas are highly recommended and unlock better validation and overrides. Source: Drupal SDC docs.

## JS

ES modules only.
No jQuery by default.
Progressive enhancement, not JS-required rendering.
Keep most JS component-scoped.
Use TypeScript if the team is comfortable with it; Vite supports typed configs and modern TS workflows cleanly. Source: Vite guide, Storybook Vite docs.
Build workflow I’d use

vite for dev
vite build for production
storybook dev for component work
storybook build for static artifact publishing
ESLint + Stylelint + Prettier
optionally Playwright or Storybook interaction/visual tests
Vite’s value here is fast HMR, optimized production output, strong plugin/config story, and multi-entry support. Storybook’s Vite builder is a good fit because it can reuse the project’s Vite configuration. Sources: Vite guide, Storybook Vite builder docs.

Practical rules that foster reuse

Put reusable UI in components/, not in Drupal override templates.
Keep Drupal data-mapping in preprocess/theme hooks or wrapper templates.
Keep components presentation-focused and CMS-agnostic where possible.
Use template overrides only to bridge Drupal render arrays to components.
Avoid giant global.css; most CSS should belong to a component.
Avoid dumping all JS into one app file.
What I would avoid now

Starting from a legacy base-theme-first architecture.
Heavy Sass architecture unless the team already depends on it.
Webpack for a new build unless there is a hard requirement.
jQuery-dependent behaviors.
Reusable markup living only in templates/ instead of SDC components.
Overusing Twig logic instead of preprocess + schema-driven component APIs.
Short recommendation

If I were starting a Drupal 10/11 theme today, I would build it as:

custom theme in themes/custom
Drupal SDC in components/
Vite for build/dev
Storybook with Vite builder
native CSS + PostCSS
ES modules / optional TypeScript
thin Drupal templates that compose reusable components
If you want, I can turn this into a concrete starter theme blueprint for your repo, including exact file names, scripts, and config files.
