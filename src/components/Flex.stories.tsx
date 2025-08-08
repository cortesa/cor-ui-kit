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
      options: [
        "xxs", "xs", "s", "ms", "m", "ml", "l", "xl", "xxl",
        0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48,
        "20px", "1rem"
      ],
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
    direction: 'row',
    centered: false,
  },
} satisfies Meta<typeof Flex>;
 
export default meta;
type Story = StoryObj<typeof meta>;
 
export const Default: Story = {
  args: {
    children: [
      <Flex centered width='50px' height="50px" style={{background: "var(--cor-color-neutral)", borderRadius: "var(--cor-border-radius)"}}>1</Flex>,
      <Flex centered width='50px' height="50px" style={{background: "var(--cor-color-neutral)", borderRadius: "var(--cor-border-radius)"}}>2</Flex>,
      <Flex centered width='50px' height="50px" style={{background: "var(--cor-color-neutral)", borderRadius: "var(--cor-border-radius)"}}>3</Flex>,
    ],
  },
};