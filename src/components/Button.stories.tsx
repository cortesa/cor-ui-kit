// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  args: {
    disabled: false,
    variant: 'primary',
  },
} satisfies Meta<typeof Button>;
 
export default meta;
type Story = StoryObj<typeof meta>;
 
export const Default: Story = {
  args: {
    children: 'Button',
  },
};
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};