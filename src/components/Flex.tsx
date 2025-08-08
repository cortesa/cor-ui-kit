import { forwardRef, type JSX } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { Text, type TextProps } from "./Text"
import styles from "./Flex.module.css"

const flex = cva(styles.flex, {
	variants: {
		direction: {
			row: styles.row,
			"row-reverse": styles["row-reverse"],
			column: styles.column,
			"column-reverse": styles["column-reverse"],
		},
		justify: {
			center: styles["justify-center"],
			stretch: styles["justify-stretch"],
			start: styles["justify-start"],
			end: styles["justify-end"],
			between: styles["justify-between"],
			around: styles["justify-around"],
			evenly: styles["justify-evenly"],
		},
		align: {
			start: styles["align-start"],
			end: styles["align-end"],
			center: styles["align-center"],
			stretch: styles["align-stretch"],
		},
		wrap: {
			true: styles.wrap,
			false: styles.nowrap,
		},
		gap: {
			xxs: styles["gap-xxs"],
			xs: styles["gap-xs"],
			s: styles["gap-s"],
			ms: styles["gap-ms"],
			m: styles["gap-m"],
			ml: styles["gap-ml"],
			l: styles["gap-l"],
			xl: styles["gap-xl"],
			xxl: styles["gap-xxl"],
			0: styles["gap-0"],
			4: styles["gap-4"],
			8: styles["gap-8"],
			12: styles["gap-12"],
			16: styles["gap-16"],
			20: styles["gap-20"],
			24: styles["gap-24"],
			28: styles["gap-28"],
			32: styles["gap-32"],
			36: styles["gap-36"],
			40: styles["gap-40"],
			44: styles["gap-44"],
			48: styles["gap-48"],
		},
		truncate: {
			s: styles.truncateS,
			m: styles.truncateM,
			l: styles.truncateL,
		},
		centered: {
			true: styles.centered,
			false: "",
		}
	},
	defaultVariants: {
		direction: "row",
		align: "start",
	}
})

export type FlexProps = JSX.IntrinsicElements[ "div" ]
	& TextProps 
	& Omit<VariantProps<typeof flex>, "gap">
	& {
		gap?: VariantProps<typeof flex>["gap"] | string
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
	children,
	style,
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
				gap: typeof gap === "string" && ![
					"xxs", "xs", "s", "ms", "m", "ml", "l", "xl", "xxl"
				].includes(gap)
					? undefined
					: gap as VariantProps<typeof flex>["gap"],
				wrap,
				truncate,
				className
			})}
			style={{ 
				gap: typeof gap === "string" && [
					"xxs", "xs", "s", "ms", "m", "ml", "l", "xl", "xxl"
				].includes(gap)
					? undefined
					: typeof gap === "string"
						? gap
						: undefined,
				...style
			}}
			{...props}>
			{children}
		</Text>
	)
})
