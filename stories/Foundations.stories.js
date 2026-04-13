import './foundations.css';
import { paletteFamilies } from './foundationPalette.js';

const semanticTokens = [
  ['Canvas', '--sys-color-surface-canvas'],
  ['Raised', '--sys-color-surface-raised'],
  ['Brand Surface', '--sys-color-surface-brand'],
  ['Primary Text', '--sys-color-text-primary'],
  ['Secondary Text', '--sys-color-text-secondary'],
  ['Brand Text', '--sys-color-text-brand'],
  ['Default Border', '--sys-color-border-default'],
  ['Focus Ring', '--sys-color-focus-ring'],
  ['Success', '--sys-color-success'],
  ['Danger', '--sys-color-danger'],
];

const typeTokens = [
  ['Display', '--text-title-display', 'Modern systems benefit from a distinct display voice for hero surfaces and campaign moments.'],
  ['Heading XL', '--text-title-h1', 'Use the large heading token for page titles, dashboards, and high-attention modules.'],
  ['Heading L', '--text-title-h2', 'This token anchors section titles and larger content groupings.'],
  ['Heading M', '--text-title-h3', 'Use medium headings inside cards, settings panes, and story sections.'],
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

const themes = [
  ['Atlas', 'var(--ref-color-blue-500)', 'var(--ref-color-cyan-400)'],
  ['Evergreen', 'var(--ref-color-emerald-500)', 'var(--ref-color-cyan-400)'],
  ['Pulse', 'var(--ref-color-rose-500)', 'var(--ref-color-indigo-400)'],
];

const createElementFromHTML = (html) => {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
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
            reference palettes as <code>--ref-color-family-step</code>,
            theme brand ramps as <code>--brand-core-step</code>,
            and semantic UI tokens as <code>--sys-color-role</code>.
          </p>
        </div>
        <div class="foundations-hero-grid">
          <article class="foundation-card foundation-stack">
            <h3>Color Naming</h3>
            <p>Reference colors stay stable while semantic tokens map them into surfaces, borders, text, feedback, and actions.</p>
            <span class="foundation-token-value">--ref-color-indigo-500 -> --brand-core-500 -> --sys-color-text-brand</span>
          </article>
          <article class="foundation-card foundation-stack">
            <h3>Type Naming</h3>
            <p>Families, sizes, weights, and composed text recipes are split so theme and product work can evolve independently.</p>
            <span class="foundation-token-value">--font-family-display + --font-size-3xl + --text-title-h1</span>
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
        <div class="foundation-theme-chip" style="background: var(${variable}); color: ${label.includes('Canvas') || label.includes('Raised') ? 'var(--sys-color-text-primary)' : 'white'};">
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
  root.appendChild(createElementFromHTML(`<section class="foundation-card foundation-stack"><h2>Theme Variants</h2><p>Each brand changes its core ramp while the semantic token names stay fixed. Light and dark modes both inherit from the same semantic layer.</p></section>`));

  const grid = document.createElement('section');
  grid.className = 'foundations-theme-grid';

  themes.forEach(([name, brand, accent]) => {
    grid.appendChild(
      createElementFromHTML(`
        <article class="foundation-card foundation-stack">
          <h3>${name}</h3>
          <div class="foundation-theme-sample" style="background: linear-gradient(135deg, ${brand}, ${accent}); color: white;">
            <strong>Primary CTA</strong>
            <span>Brand ramp + accent ramp</span>
          </div>
          <div class="foundation-theme-sample" style="background: color-mix(in oklch, ${brand} 12%, white 88%); color: var(--sys-color-text-primary);">
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
        <div style="height: 6rem; border-radius: var(--radius-xl); background: var(--sys-color-action-primary-bg);"></div>
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
      <h2>Reference Palette Library</h2>
      <p>These are the reference palette families available to map into theme ramps. This layer stays raw and unopinionated so themes can shift without renaming semantic tokens.</p>
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
      swatches.appendChild(
        createElementFromHTML(`
          <div class="swatch">
            <div class="swatch-color" style="background:${swatch.background};">
              <span class="swatch-shade" style="color:${swatch.foreground};">${swatch.shade}</span>
            </div>
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

export const ReferencePalettes = {
  render: renderFullPalette,
};
