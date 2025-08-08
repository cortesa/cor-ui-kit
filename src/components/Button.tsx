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
    disabled: {
      true: styles.disabled,
      false: "",
    },
    size: {
      xxs: styles.sizeXxs,
      xs: styles.sizeXs,
      s: styles.sizeS,
      ms: styles.sizeMs,
      m: styles.sizeM,
      ml: styles.sizeMl,
      l: styles.sizeL,
      xl: styles.sizeXl,
      xxl: styles.sizeXxl,
  },
  defaultVariants: {
    size: "s",
    variant: "default",
    iconLayout: false,
  },
}})

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
	variant,
  size,
	icon,
  disabled,
	className,
  onClick,
	children,
  style,
	...props
}: ButtonProps) {
  return (
    <Flex
      centered
      role="button"
      className={button({
        variant,
        size,
        iconLayout: !!icon,
				rounded: !children,
        disabled,
        className
      })}
      style={{ ...style }}
      onClick={disabled ? undefined : onClick}
      {...props}
			{...props}>
        {icon?.position === "left" && <div>{icon.children}</div>}
			{children}
        {icon?.position === "right" && <div>{icon.children}</div>}
		</Flex>
	)
}
