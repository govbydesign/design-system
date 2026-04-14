import './foundations.css';
import { formatHex, parse } from 'culori';
import { paletteFamilies } from './foundationPalette.js';

const semanticTokens = [
  ['Page Surface', '--color-surface-page'],
  ['Raised Surface', '--color-surface-raised'],
  ['Brand Surface', '--color-surface-brand'],
  ['Primary Text', '--color-text-primary'],
  ['Secondary Text', '--color-text-secondary'],
  ['Brand Text', '--color-text-brand'],
  ['Default Border', '--color-border-default'],
  ['Focus Ring', '--color-focus-ring'],
  ['Success', '--color-success'],
  ['Danger', '--color-danger'],
];

const typeTokens = [
  ['Display', '--text-display', 'Modern systems benefit from a distinct display voice for hero surfaces and campaign moments.'],
  ['Heading XL', '--text-heading-1', 'Use the large heading token for page titles, dashboards, and high-attention modules.'],
  ['Heading L', '--text-heading-2', 'This token anchors section titles and larger content groupings.'],
  ['Heading M', '--text-heading-3', 'Use medium headings inside cards, settings panes, and story sections.'],
  ['Body', '--text-body-md', 'Default reading size for most interface copy.'],
  ['Label', '--text-label', 'Dense, high-contrast text for controls and metadata.'],
  ['Code', '--text-code', 'Monospace token for developer-facing values and diagnostics.'],
];

const spaceTokens = [
  ['2', '--space-2'],
  ['4', '--space-4'],
  ['6', '--space-6'],
  ['8', '--space-8'],
  ['10', '--space-10'],
  ['12', '--space-12'],
];

const brands = [
  ['Brand Default', 'var(--color-indigo-500)', 'var(--color-cyan-400)'],
  ['Brand A', 'var(--color-rose-500)', 'var(--color-amber-400)'],
  ['Brand B', 'var(--color-emerald-500)', 'var(--color-cyan-400)'],
];

const createElementFromHTML = (html) => {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
};

const normalizeFamilyName = (familyName) =>
  familyName
    .toLowerCase()
    .replace(/\s*\(.*?\)\s*/g, '')
    .trim()
    .replace(/[^a-z0-9]+/g, '-');

const colorToHex = (colorValue) => {
  const parsed = parse(colorValue);
  return parsed ? formatHex(parsed).toLowerCase() : '';
};

const renderOverview = () => {
  const root = document.createElement('section');
  root.className = 'foundations-page';

  root.appendChild(
    createElementFromHTML(`
      <section class="foundations-hero">
        <div class="foundation-stack">
          <span class="foundations-eyebrow">Design Foundations</span>
          <h1>Tokenized for a multi-brand platform.</h1>
          <p>
            The system is organized in three layers:
            primitive palettes as <code>--color-family-step</code>,
            semantic interface tokens as <code>--color-role</code>,
            and theme or brand overrides that remap semantics without changing component code.
          </p>
        </div>
        <div class="foundations-hero-grid">
          <article class="foundation-card foundation-stack">
            <h3>Color Naming</h3>
            <p>Reference colors stay stable while semantic tokens map them into surfaces, borders, text, feedback, and actions.</p>
            <span class="foundation-token-value">--color-indigo-500 -> --color-brand-strong -> --color-text-brand</span>
          </article>
          <article class="foundation-card foundation-stack">
            <h3>Type Naming</h3>
            <p>Families, sizes, weights, and composed text recipes are split so theme and product work can evolve independently.</p>
            <span class="foundation-token-value">--font-family-display + --font-size-3xl + --text-heading-1</span>
          </article>
          <article class="foundation-card foundation-stack">
            <h3>Layout Naming</h3>
            <p>Spacing, gutters, containers, grid gaps, radius, shadow, and motion all live in consistent system tokens.</p>
            <span class="foundation-token-value">--space-6 • --container-md • --radius-xl • --shadow-md</span>
          </article>
        </div>
      </section>
    `)
  );

  const tokenSection = document.createElement('section');
  tokenSection.className = 'foundations-token-grid';

  semanticTokens.forEach(([label, variable]) => {
    const card = createElementFromHTML(`
      <article class="foundation-card foundation-stack">
        <div class="foundation-theme-chip" style="background: var(${variable}); color: ${label.includes('Surface') ? 'var(--color-text-primary)' : 'white'};">
          ${label}
        </div>
        <span class="foundation-token-value">${variable}</span>
      </article>
    `);
    tokenSection.appendChild(card);
  });

  root.appendChild(tokenSection);
  return root;
};

const renderThemes = () => {
  const root = document.createElement('section');
  root.className = 'foundations-page';
  root.appendChild(createElementFromHTML(`<section class="foundation-card foundation-stack"><h2>Mode And Brand Variants</h2><p>Light and dark modes shift the foundational surfaces and contrast model. Brands change brand-facing semantic tokens like action, link, focus, and branded surfaces.</p></section>`));

  const grid = document.createElement('section');
  grid.className = 'foundations-theme-grid';

  brands.forEach(([name, brand, accent]) => {
    grid.appendChild(
      createElementFromHTML(`
        <article class="foundation-card foundation-stack">
          <h3>${name}</h3>
          <div class="foundation-theme-sample" style="background: linear-gradient(135deg, ${brand}, ${accent}); color: white;">
            <strong>Primary CTA</strong>
            <span>Semantic action tokens remapped by brand</span>
          </div>
          <div class="foundation-theme-sample" style="background: color-mix(in oklch, ${brand} 12%, white 88%); color: var(--color-text-primary);">
            <strong>Subtle surface</strong>
            <span>Useful for cards, tags, banners, and filters.</span>
          </div>
        </article>
      `)
    );
  });

  root.appendChild(grid);
  return root;
};

const renderTypography = () => {
  const root = document.createElement('section');
  root.className = 'foundations-page';

  const grid = document.createElement('section');
  grid.className = 'foundations-type-grid';

  typeTokens.forEach(([label, variable, description]) => {
    grid.appendChild(
      createElementFromHTML(`
        <article class="foundation-card foundation-type-sample">
          <span class="foundation-token-value">${variable}</span>
          <div style="font: var(${variable}); letter-spacing: var(--letter-spacing-slight);">The quick brown fox jumps over the lazy dog.</div>
          <p>${description}</p>
        </article>
      `)
    );
  });

  root.appendChild(grid);
  return root;
};

const renderSpacing = () => {
  const root = document.createElement('section');
  root.className = 'foundations-page';

  root.appendChild(createElementFromHTML(`<section class="foundation-card foundation-stack"><h2>Spacing, Layout, and Shape</h2><p>The spacing system is deliberately compact at the small end and roomy at the large end so cards, dashboards, and marketing surfaces can share the same scale.</p></section>`));

  const grid = document.createElement('section');
  grid.className = 'foundations-space-grid';

  spaceTokens.forEach(([step, variable]) => {
    grid.appendChild(
      createElementFromHTML(`
        <article class="foundation-card foundation-space-item">
          <span class="foundation-token-value">${variable}</span>
          <div class="foundation-space-bar" style="width: var(${variable});"></div>
          <p>Step ${step}</p>
        </article>
      `)
    );
  });

  grid.appendChild(
    createElementFromHTML(`
      <article class="foundation-card foundation-space-item">
        <span class="foundation-token-value">--container-md</span>
        <p>82rem content container</p>
        <span class="foundation-token-value">--page-gutter</span>
        <p>Responsive outer padding</p>
      </article>
    `)
  );

  grid.appendChild(
    createElementFromHTML(`
      <article class="foundation-card foundation-space-item">
        <span class="foundation-token-value">--radius-xl</span>
        <div style="height: 6rem; border-radius: var(--radius-xl); background: var(--color-action-primary-bg);"></div>
        <span class="foundation-token-value">--shadow-md</span>
      </article>
    `)
  );

  root.appendChild(grid);
  return root;
};

const renderFullPalette = () => {
  const root = document.createElement('section');
  root.className = 'foundations-page';

  const intro = createElementFromHTML(`
    <section class="foundation-card foundation-stack">
      <h2>Colors Palette Library</h2>
      <p>These are the colors palette families available to map into theme ramps. This layer stays raw and unopinionated so themes can shift without renaming semantic tokens.</p>
    </section>
  `);
  root.appendChild(intro);

  const palette = document.createElement('section');
  palette.className = 'palette-story';

  paletteFamilies.forEach((family) => {
    const section = document.createElement('section');
    section.className = 'family foundation-card';
    section.innerHTML = `<h2>${family.name}</h2>`;
    const swatches = document.createElement('div');
    swatches.className = 'swatches';

    family.swatches.forEach((swatch) => {
      const tokenName = `--color-${normalizeFamilyName(family.name)}-${swatch.shade}`;
      const hexValue = colorToHex(swatch.background);
      swatches.appendChild(
        createElementFromHTML(`
          <div class="swatch">
            <div class="swatch-color" style="background:${swatch.background};">
              <span class="swatch-shade" style="color:${swatch.foreground};">${swatch.shade}</span>
            </div>
            <div class="swatch-name">${tokenName}</div>
            <div class="swatch-hex">${hexValue}</div>
            <div class="swatch-value">${swatch.value}</div>
          </div>
        `)
      );
    });

    section.appendChild(swatches);
    palette.appendChild(section);
  });

  root.appendChild(palette);
  return root;
};

export default {
  title: 'Foundations/System',
  tags: ['autodocs'],
};

export const Overview = {
  render: renderOverview,
};

export const Themes = {
  render: renderThemes,
};

export const Typography = {
  render: renderTypography,
};

export const SpacingAndLayout = {
  render: renderSpacing,
};

export const ColorPalettes = {
  render: renderFullPalette,
};
