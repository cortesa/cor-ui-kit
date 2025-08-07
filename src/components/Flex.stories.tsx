import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flex } from '@/components/Flex';

const meta = {
  title: 'Components/Flex',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    outline: {
      show: true
    }
  },
  component: Flex,
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      description: 'Flex direction',
    },
    justify: {
      control: { type: 'select' },
      options: ['center', 'stretch', 'start', 'end', 'between', 'around', 'evenly'],
      description: 'Justify content',
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'end', 'center', 'stretch'],
      description: 'Align items',
    },
    wrap: {
      control: { type: 'boolean' },
      description: 'Enable wrapping of flex items',
    },
    gap: {
      control: { type: 'select' },
      options: [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, "20px", "1rem"],
      description: 'Gap between flex items, can also use custom values like "20px" or "1rem"',
    },
    truncate: {
      control: { type: 'select' },
      options: ['s', 'm', 'l'],
      description: 'Truncate text in flex items',
    },
    centered: {
      control: { type: 'boolean' },
      description: 'Center flex items both vertically and horizontally',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional class names for the text',
    },
    style: {
      control: { type: 'object' },
      description: 'Inline styles for the text',
    }
  },
  args: {
    fontSize: 'm',
    textAlign: 'center',
    fontWeight: 'normal',
    whiteSpace: 'normal',
    textOverflow: 'normal',
    textTransform: null,
    textDecoration: 'none',
    fontStyle: 'normal',
    inline: false,
    color: '#000',
  },
} satisfies Meta<typeof Flex>;
 
export default meta;
type Story = StoryObj<typeof meta>;
 
export const Default: Story = {
  args: {
    children: [
      <p>1</p>,
      <p>2</p>,
      <p>3</p>,
    ],
  },
};