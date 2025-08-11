import { cva, type VariantProps } from 'class-variance-authority'

import { Text, type TextProps } from './Text'
import styles from './Grid.module.css'

const grid = cva(styles.grid, {
  variants: {
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
		centered: {
      true: "centered",
      false: ''
    },
    truncate: {
      s: styles.truncateS,
      m: styles.truncateM,
      l: styles.truncateL
    },
		defaultVariants: {
  	  direction: 'row',
  	  align: 'start'
  	}
  }
})

export type GridProps = React.HTMLAttributes<HTMLDivElement>
& TextProps
& Omit<VariantProps<typeof grid>, 'gap'>
& {
  columns?: string
  rows?: string
  gap?: VariantProps<typeof grid>['gap'] | string
}

export function Grid ({
  columns,
  rows,
  justify,
  align,
  gap,
  truncate,
	centered,
  className,
  style,
  children,
  ...props
}: GridProps) {
  return (
    <Text
      className={grid({
			  justify,
			  align,
				centered,
			  gap: typeof gap === 'string' && ![
							'xxs', 'xs', 's', 'ms', 'm', 'ml', 'l', 'xl', 'xxl'
				].includes(gap)
					? undefined
					: gap as VariantProps<typeof grid>['gap'],
			  truncate,
			  className
			})}
      style={{
			  gridTemplateColumns: columns,
			  gridTemplateRows: rows,
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
}

Grid.styles = styles
