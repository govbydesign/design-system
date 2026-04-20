import './themes.css';
import { themeArtifacts } from './themeArtifacts.js';

const createElementFromHTML = (html) => {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
};

const applyThemeVariables = (element, colors) => {
  Object.entries(colors).forEach(([name, value]) => {
    element.style.setProperty(`--theme-color-${name}`, value);
  });

  element.style.setProperty('--theme-shadow', colors.shadow);
  element.style.setProperty('--theme-hero-start', colors.heroStart);
  element.style.setProperty('--theme-hero-end', colors.heroEnd);
  element.style.setProperty('--theme-color-glow', colors.glow);
};

const renderThemeArtifact = (theme) => {
  const page = document.createElement('main');
  page.className = 'theme-artifact-page';
  applyThemeVariables(page, theme.colors);

  const wrap = document.createElement('section');
  wrap.className = 'theme-artifact-wrap';

  if (theme.sectionTitle) {
    wrap.appendChild(
      createElementFromHTML(`<p class="theme-artifact-section-title">${theme.sectionTitle}</p>`)
    );
  }

  const hero = createElementFromHTML(`
    <section class="theme-artifact-hero ${theme.heroClassName || ''}">
      <div class="theme-artifact-copy">
        <p class="theme-artifact-eyebrow" style="color: ${theme.eyebrowColor};">${theme.eyebrow}</p>
        <h1>${theme.title}</h1>
        <p>${theme.description}</p>
      </div>
      <div class="theme-artifact-preview ${theme.previewClassName || ''}">
        <div class="theme-artifact-card">
          <span class="theme-artifact-chip" style="background: ${theme.accentChip.background}; color: ${theme.accentChip.color};">${theme.accentChip.label}</span>
          <div>
            <h2>${theme.previewTitle}</h2>
            <p>${theme.previewDescription}</p>
          </div>
          <div class="theme-artifact-actions"></div>
        </div>
      </div>
    </section>
  `);

  const actions = hero.querySelector('.theme-artifact-actions');
  theme.actions.forEach((action) => {
    actions.appendChild(
      createElementFromHTML(
        `<button type="button" class="theme-artifact-button ${action.className}"${action.style ? ` style="${action.style}"` : ''}>${action.label}</button>`
      )
    );
  });
  wrap.appendChild(hero);

  const palette = document.createElement('section');
  palette.className = 'theme-artifact-palette';
  theme.swatches.forEach((swatch) => {
    palette.appendChild(
      createElementFromHTML(`
        <article class="theme-artifact-swatch">
          <div class="theme-artifact-swatch-color" style="background: ${swatch.color};"></div>
          <div class="theme-artifact-swatch-meta">
            <p class="theme-artifact-swatch-name">${swatch.name}</p>
            <p class="theme-artifact-swatch-role">${swatch.role}</p>
            <p class="theme-artifact-swatch-code">${swatch.hex}</p>
            <p class="theme-artifact-swatch-code">${swatch.oklch}</p>
          </div>
        </article>
      `)
    );
  });
  wrap.appendChild(palette);

  const usage = document.createElement('section');
  usage.className = 'theme-artifact-usage';
  usage.appendChild(createElementFromHTML(`<h2>${theme.usageHeading}</h2>`));

  const usageGrid = document.createElement('div');
  usageGrid.className = 'theme-artifact-usage-grid';
  theme.usageItems.forEach(([label, copy]) => {
    usageGrid.appendChild(
      createElementFromHTML(`
        <div class="theme-artifact-usage-item">
          <strong>${label}</strong>
          <span>${copy}</span>
        </div>
      `)
    );
  });
  usage.appendChild(usageGrid);
  wrap.appendChild(usage);

  page.appendChild(wrap);
  return page;
};

const defaultParameters = {
  layout: 'fullscreen',
  backgrounds: { disable: true },
};

export default {
  title: 'Foundations/Themes',
  parameters: defaultParameters,
};

export const Evergreen = {
  name: themeArtifacts[0].storyName,
  render: () => renderThemeArtifact(themeArtifacts[0]),
};

export const Judiciary = {
  name: themeArtifacts[1].storyName,
  render: () => renderThemeArtifact(themeArtifacts[1]),
};

export const CivicTheme = {
  name: themeArtifacts[2].storyName,
  render: () => renderThemeArtifact(themeArtifacts[2]),
};
