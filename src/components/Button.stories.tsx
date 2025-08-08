// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import type { Meta, StoryObj } from '@storybook/react-vite';
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
      options: ['default','primary','secondary','accent','bordered','text' ],
      control: { type: 'select' },
    },
    size: {
      options: ['xxs', 'xs', 's', 'ms', 'm', 'ml', 'l', 'xl', 'xxl'],
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  args: {
    disabled: false,
    variant: 'primary',
    onClick: () => alert('Button clicked!'),
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
    color: 'red',
    children: 'Button',
  },
};