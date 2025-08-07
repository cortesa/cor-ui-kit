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
			4: styles.gap4,
			8: styles.gap8,
			12: styles.gap12,
			16: styles.gap16,
			20: styles.gap20,
			24: styles.gap24,
			28: styles.gap28,
			32: styles.gap32,
			36: styles.gap36,
			40: styles.gap40,
			44: styles.gap44,
			48: styles.gap48,
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
				gap: typeof gap === "string" ? undefined : gap,
				wrap,
				truncate,
				className
			})}
			style={{ 
				gap: typeof gap === "string" ? gap : undefined,
				...style
			}}
			{...props}>
			{children}
		</Text>
	)
})
