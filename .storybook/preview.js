/** @type { import('@storybook/html-vite').Preview } */

import '../src/styles/index.css';

const applyGlobals = (globals) => {
  document.documentElement.dataset.theme = globals.theme;
  document.documentElement.dataset.brand = globals.brand;
  document.body.dataset.theme = globals.theme;
  document.body.dataset.brand = globals.brand;
};

const preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
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
    brand: {
      name: 'Brand',
      description: 'Brand flavor',
      defaultValue: 'brand-default',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'brand-default', title: 'Default' },
          { value: 'brand-a', title: 'Brand A' },
          { value: 'brand-b', title: 'Brand B' },
        ],
      },
    },
  },
  parameters: {
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
