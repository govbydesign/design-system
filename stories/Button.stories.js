import { fn } from 'storybook/test';

import { createButton } from './Button';

export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: ({ label, ...args }) => {
    return createButton({ label, ...args });
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    variant: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    variant: 'primary',
    label: 'Launch workspace',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    label: 'Save draft',
  },
};

export const Ghost = {
  args: {
    variant: 'ghost',
    label: 'Learn more',
  },
};

export const Large = {
  args: {
    size: 'large',
    variant: 'primary',
    label: 'Create account',
  },
};

export const Small = {
  args: {
    size: 'small',
    variant: 'secondary',
    label: 'Filter',
  },
};
