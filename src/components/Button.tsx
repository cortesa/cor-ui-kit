import { type JSX } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import styles from "./Button.module.css"
import { Flex, type FlexProps } from "./Flex"

const button = cva(styles.button, {
  variants: {
    variant: {
      default: styles.default,
      primary: styles.primary,
      secondary: styles.secondary,
      accent: styles.accent,
      bordered: styles.bordered,
      text: styles.text,
    },
    iconLayout: {
      true: styles.icon,
      false: "",
    },
    rounded: {
      true: styles.rounded,
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    iconLayout: false,
  },
})

export type ButtonProps = JSX.IntrinsicElements[ "button" ]
  & FlexProps
  & VariantProps<typeof button>
	& {
		icon?: {
      position: "left" | "right",
      children: JSX.Element},
    disabled?: boolean
	}
export function Button({
	variant = "default",
	icon,
	className,
	children,
  style,
	...props
}: ButtonProps) {
  return (
    <Flex
      centered
      type="button"
      className={button({
        variant,
        iconLayout: !!icon,
				rounded: !children,
        className
      })}
      style={{ ...style }}
			{...props}>
        {icon?.position === "left" && <div>{icon.children}</div>}
			{children}
        {icon?.position === "right" && <div>{icon.children}</div>}
		</Flex>
	)
}
