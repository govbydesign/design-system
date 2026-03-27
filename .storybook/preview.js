/** @type { import('@storybook/html-vite').Preview } */

// Theme Styles
import '../src/css/styles.css';

const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;
