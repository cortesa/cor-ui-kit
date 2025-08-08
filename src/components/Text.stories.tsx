import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from '@/components/Text';

const meta = {
  title: 'Components/Text',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    outline: {
      show: true
    }
  },
  component: Text,
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'Text content',
    },
    width: {
      control: { type: 'text' },
    },
    height: {
      control: { type: 'text' },
    },
    padding: {
      control: { type: 'select' },
      options: [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, "20px", "1rem"],
      description: 'Also can use custom values like "20px" or "1rem"',
    },
    fontSize: {
      control: { type: 'select' },
      options: [
        'xxs', 'xs', 's', 'ms', 'm', 'ml', 'l', 'xl', 'xxl',
        'smallest', 'smaller', 'current', 'larger', 'largest'
      ],
    },
    textAlign: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
    fontWeight: {
      control: { type: 'select' },
      options: [100, 400, 700, 900, 'lighter', 'light', 'normal', 'bold', 'bolder']
    },
    whiteSpace: {
      control: { type: 'select' },
      options: ['normal', 'nowrap'],
    },
    textOverflow: {
      control: { type: 'select' },
      options: ['normal', 'ellipsis'],
    },
    textTransform: {
      control: { type: 'select' },
      options: ['none', 'uppercase', 'lowercase', 'capitalize'],
    },
    textDecoration: {
      control: { type: 'select' },
      options: ['none', 'underline', 'line-through'],
    },
    fontStyle: {
      control: { type: 'select' },
      options: ['normal', 'italic'],
    },
    truncate: {
      control: { type: 'select' },
      options: ["s", "m", "l"],
      description: 'If true, text will be truncated with ellipsis if it overflows',
    },
    inline: {
      control: { type: 'boolean' },
      description: 'If true, text will be displayed as inline element',
    }, 
    color: {
      control: { type: 'color' },
      description: 'Text color',
    },
    letterSpacing: {
      control: { type: 'text' },
      description: 'Letter spacing for the text',
    },
    lineHeight: {
      control: { type: 'text' },
      description: 'Line height for the text',
    },
    flexGrow: {
      control: { type: 'number' },
      description: 'Flex grow property for the text',
    },
    flexShrink: {
      control: { type: 'number' },
      description: 'Flex shrink property for the text',
    },
    noSelect: {
      control: { type: 'boolean' },
      description: 'If true, text will not be selectable',
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
    padding: undefined,
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
    noSelect: false,
  },
} satisfies Meta<typeof Text>;
 
export default meta;
type Story = StoryObj<typeof meta>;
 
export const Default: Story = {
  args: {
    children: 'Text Example',
  },
};