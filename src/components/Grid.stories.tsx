import type { Meta, StoryObj } from '@storybook/react-vite'
import { Grid } from '@/components/Grid'
import { Flex } from './Flex'

const meta = {
  title: 'Components/Layout/Grid',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    outline: {
      show: true
    }
  },
  component: Grid,
  argTypes: {
    columns: {
      control: { type: 'text' },
      description: 'CSS grid template columns, e.g. "repeat(3, 1fr)"'
    },
    rows: {
      control: { type: 'text' },
      description: 'CSS grid template rows, e.g. "repeat(2, auto)"'
    },
    justify: {
      control: { type: 'select' },
      options: ['center', 'stretch', 'start', 'end', 'between', 'around', 'evenly'],
      description: 'Justify content'
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'end', 'center', 'stretch'],
      description: 'Align items'
    },
    gap: {
      control: { type: 'select' },
      options: [
        'xxs', 'xs', 's', 'ms', 'm', 'ml', 'l', 'xl', 'xxl',
        0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48,
        '20px', '1rem'
      ],
      description: 'Gap between flex items, can also use custom values like "20px" or "1rem"'
    },
    truncate: {
      control: { type: 'select' },
      options: ['s', 'm', 'l'],
      description: 'Truncate text in flex items'
    },
    centered: {
      control: { type: 'boolean' },
      description: 'Center flex items both vertically and horizontally'
    },
    className: {
      control: { type: 'text' },
      description: 'Additional class names for the text'
    },
    style: {
      control: { type: 'object' },
      description: 'Inline styles for the text'
    }
  },
  args: {
    columns: '1fr 1fr 1fr',
    rows: 'repear(3, 1fr)',
    centered: false,
  }
} satisfies Meta<typeof Grid>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <Flex centered height='50px' style={{ background: 'var(--cor-color-neutral)', borderRadius: 'var(--cor-border-radius)' }}>1</Flex>,
      <Flex centered height='50px' style={{ background: 'var(--cor-color-neutral)', borderRadius: 'var(--cor-border-radius)' }}>2</Flex>,
      <Flex centered height='50px' style={{ background: 'var(--cor-color-neutral)', borderRadius: 'var(--cor-border-radius)' }}>3</Flex>,
      <Flex centered height='50px' style={{ background: 'var(--cor-color-neutral)', borderRadius: 'var(--cor-border-radius)' }}>4</Flex>,
      <Flex centered height='50px' style={{ background: 'var(--cor-color-neutral)', borderRadius: 'var(--cor-border-radius)' }}>5</Flex>,
      <Flex centered height='50px' style={{ background: 'var(--cor-color-neutral)', borderRadius: 'var(--cor-border-radius)' }}>6</Flex>
    ]
  }
}
