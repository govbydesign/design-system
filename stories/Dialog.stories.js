const renderDialog = () => {
  const dialog = document.createElement('section');
  dialog.className = 'dialog';
  dialog.innerHTML = `
    <div class="dialog__surface">
      <span class="u-text-brand" style="font: var(--text-label); text-transform: uppercase; letter-spacing: var(--letter-spacing-wide);">Dialog</span>
      <h2>Publish changes?</h2>
      <p>This modal shell demonstrates overlay, raised surface, border, radius, and action tokens.</p>
      <div class="l-cluster">
        <button class="button button--medium" data-variant="secondary" type="button">Cancel</button>
        <button class="button button--medium" data-variant="primary" type="button">Publish</button>
      </div>
    </div>
  `;
  return dialog;
};

export default {
  title: 'Components/Dialog',
  tags: ['autodocs'],
  render: renderDialog,
};

export const Default = {};
