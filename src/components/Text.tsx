import { forwardRef, type JSX } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import styles from "./Text.module.css"

const text = cva("", {
	variants: {
		padding: {
			4: styles["padding-4"],
			8: styles["padding-8"],
			12: styles["padding-12"],
			16: styles["padding-16"],
			20: styles["padding-20"],
			24: styles["padding-24"],
			28: styles["padding-28"],
			32: styles["padding-32"],
			36: styles["padding-36"],
			40: styles["padding-40"],
			44: styles["padding-44"],
			48: styles["padding-48"],
		},
		fontSize: {
			tinier: styles["font-size-tinier"],
			smaller: styles["font-size-smaller"],
			bigger: styles["font-size-bigger"],
			larger: styles["font-size-larger"],
			xxs: styles["font-size-xxs"],
			xs: styles["font-size-xs"],
			s: styles["font-size-s"],
			ms: styles["font-size-ms"],
			m: styles["font-size-m"],
			ml: styles["font-size-ml"],
			l: styles["font-size-l"],
			xl: styles["font-size-xl"],
			xxl: styles["font-size-xxl"],
		},
		textAlign: {
			left: styles["text-align-left"],
			center: styles["text-align-center"],
			right: styles["text-align-right"]
		},
		fontWeight: {
			normal: styles["font-weight-normal"],
			bold: styles["font-weight-bold"],
			light: styles["font-weight-light"]
		},
		whiteSpace: {
			normal: styles["white-space-normal"],
			nowrap: styles["white-space-nowrap"]
		},
		textOverflow: {
			normal: styles["text-overflow-normal"],
			ellipsis: styles["text-overflow-ellipsis"]
		},
		textTransform: {
			uppercase: styles["text-transform-uppercase"],
			capitalize: styles["text-transform-capitalize"],
			lowercase: styles["text-transform-lowercase"]
		},
		textDecoration: {
			none: styles["text-decoration-none"],
			underline: styles["text-decoration-underline"]
		},
		fontStyle: {
			normal: styles["font-style-normal"],
			italic: styles["font-style-italic"]
		},
		truncate: {
			s: styles["truncate-breakpoint-s"],
			m: styles["truncate-breakpoint-m"],
			l: styles["truncate-breakpoint-l"]
		},
		inline: {
			true: styles.inline
		}
	}
})

export type TextProps = JSX.IntrinsicElements["div"] &
	VariantProps<typeof text> & {
		width?: string 
		height?: string
		color?: string
		letterSpacing?: string
		lineHeight?: string
		flexGrow?: number
		flexShrink?: number
	}

export const Text = forwardRef<HTMLDivElement, TextProps>(({
	width,
	height,
	padding,
	fontSize,
	textAlign,
	fontWeight,
	whiteSpace,
	textOverflow,
	textTransform,
	textDecoration,
	fontStyle,
	truncate,
	inline,
	color,
	letterSpacing,
	lineHeight,
	flexGrow,
	flexShrink,
	children,
	className,
	style,
	...props
}: TextProps) => {
	return (
		<div
			className={text({
				padding: typeof padding === "number" ? padding : undefined,
				fontSize,
				textAlign,
				fontWeight,
				whiteSpace,
				textOverflow,
				textTransform,
				textDecoration,
				fontStyle,
				truncate,
				inline: inline ? true : undefined,
				className
			})}
			style={{
				width,
				height,
				padding: typeof padding === "number" ? undefined : (padding ?? undefined),
				letterSpacing,
				lineHeight,
				flexGrow,
				flexShrink,
				color,
				...style
			}}
			{...props}>
			{children}
		</div>
	)
}
)