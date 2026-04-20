/** @type { import('@storybook/html-vite').Preview } */

import '../src/styles/index.css';

const applyGlobals = (globals) => {
  document.documentElement.dataset.theme = globals.mode;
  document.documentElement.dataset.brand = globals.theme;
  document.body.dataset.theme = globals.mode;
  document.body.dataset.brand = globals.theme;
};

const preview = {
  globalTypes: {
    mode: {
      name: 'Mode',
      description: 'Color mode',
      defaultValue: 'light',
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
      },
    },
    theme: {
      name: 'Theme',
      description: 'Website theme',
      defaultValue: 'evergreen',
      toolbar: {
        icon: 'brush',
        items: [
          { value: 'evergreen', title: 'Evergreen' },
          { value: 'judiciary', title: 'Judiciary' },
          { value: 'civic-theme', title: 'Civic Theme' },
        ],
      },
    },
  },
  parameters: {
    options: {
      storySort: {
        order: ['Foundations', 'Components', 'Examples'],
        includeName: true,
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
  decorators: [
    (Story, context) => {
      applyGlobals(context.globals);
      return Story();
    },
  ],
};

export default preview;
