import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";

import styles from './Button.module.css';

const button = cva(styles.base, {
  variants: {
    variant: {
      primary: styles.primary,
      secondary: styles.secondary,
    },
    size: {
      small: styles.small,
      medium: styles.medium,
    },
    disabled: {
      false: styles.enabled,
      true: styles.disabled,
    },
  },
  compoundVariants: [
    { variant: "primary", size: "medium", className: styles.primaryMedium },
  ],
  defaultVariants: {
    variant: "primary",
    size: "medium",
    disabled: false,
  },
});

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof button> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, disabled, children, ...props }: ButtonProps) => {
		return (
			<button 
				type="button"
				className={button({ variant, size, disabled, className })} 
				disabled={disabled || undefined}
				{...props}>
				{children}
			</button>
		);
	}
)