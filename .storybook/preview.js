/** @type { import('@storybook/html-vite').Preview } */

import '../src/css/styles.css';

const applyGlobals = (globals) => {
  document.documentElement.dataset.theme = globals.theme;
  document.documentElement.dataset.colorMode = globals.colorMode;
  document.body.dataset.theme = globals.theme;
  document.body.dataset.colorMode = globals.colorMode;
};

const preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Platform brand theme',
      defaultValue: 'atlas',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'atlas', title: 'Atlas' },
          { value: 'evergreen', title: 'Evergreen' },
          { value: 'pulse', title: 'Pulse' },
        ],
      },
    },
    colorMode: {
      name: 'Mode',
      description: 'Light and dark color modes',
      defaultValue: 'light',
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
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
