import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { Text, type TextProps } from './Text'
import styles from './Flex.module.css'

const flex = cva(styles.flex, {
  variants: {
    direction: {
      row: styles.row,
      'row-reverse': styles['row-reverse'],
      column: styles.column,
      'column-reverse': styles['column-reverse']
    },
    justify: {
      center: 'justify-center',
      stretch: 'justify-stretch',
      start: 'justify-start',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly'
    },
    align: {
      start: 'align-start',
      end: 'align-end',
      center: 'align-center',
      stretch: 'align-stretch'
    },
    gap: {
      xxs: 'gap-xxs',
      xs: 'gap-xs',
      s: 'gap-s',
      ms: 'gap-ms',
      m: 'gap-m',
      ml: 'gap-ml',
      l: 'gap-l',
      xl: 'gap-xl',
      xxl: 'gap-xxl',
      0: 'gap-0',
      4: 'gap-4',
      8: 'gap-8',
      12: 'gap-12',
      16: 'gap-16',
      20: 'gap-20',
      24: 'gap-24',
      28: 'gap-28',
      32: 'gap-32',
      36: 'gap-36',
      40: 'gap-40',
      44: 'gap-44',
      48: 'gap-48'
    },
    truncate: {
      s: styles.truncateS,
      m: styles.truncateM,
      l: styles.truncateL
    },
		wrap: {
      true: styles.wrap,
      false: styles.nowrap
    },
    centered: {
      true: "centered",
      false: ''
    }
  },
  defaultVariants: {
    direction: 'row',
    align: 'start'
  }
})
export type FlexProps = HTMLAttributes<HTMLDivElement>
& TextProps
& Omit<VariantProps<typeof flex>, 'gap'>
& {
  gap?: VariantProps<typeof flex>['gap'] | string
  children?: ReactNode
}

export const Flex = forwardRef<HTMLDivElement, FlexProps>(({
  direction,
  justify,
  align,
  centered,
  wrap,
  gap,
  truncate,
  className,
  style,
  children,
  ...props
}, ref) => {
  return (
    <Text
      ref={ref}
      className={flex({
			  direction,
			  justify,
			  align,
			  centered,
			  gap: typeof gap === 'string' && ![
			    'xxs', 'xs', 's', 'ms', 'm', 'ml', 'l', 'xl', 'xxl'
			  ].includes(gap)
			    ? undefined
			    : gap as VariantProps<typeof flex>['gap'],
			  wrap,
			  truncate,
			  className
      })}
      style={{
			  gap: typeof gap === 'string' && [
			    'xxs', 'xs', 's', 'ms', 'm', 'ml', 'l', 'xl', 'xxl'
			  ].includes(gap)
			    ? undefined
			    : typeof gap === 'string'
			      ? gap
			      : undefined,
			  ...style
      }}
      {...props}
    >
      {children}
    </Text>
  )
})
