const renderCard = () => {
  const card = document.createElement('article');
  card.className = 'card l-stack';
  card.innerHTML = `
    <span class="u-text-brand" style="font: var(--text-label); text-transform: uppercase; letter-spacing: var(--letter-spacing-wide);">Insight</span>
    <h3>Cards consume semantic tokens only.</h3>
    <p>This component uses surface, border, text, spacing, and radius semantics without reaching into raw palette tokens.</p>
  `;
  return card;
};

export default {
  title: 'Components/Card',
  tags: ['autodocs'],
  render: renderCard,
};

export const Default = {};
