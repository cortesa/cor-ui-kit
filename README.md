# COR-UI-KIT

![NPM Version](https://img.shields.io/npm/v/cor-ui-kit)


## 🎨 Theming

You can customize the appearance of this library by overriding the following CSS variables in your app’s `:root` scope. This allows you to adapt the UI to your design system or brand without modifying the library's source code.

Make sure your custom overrides are loaded **after** the default variable import:

```ts
// main.ts

import './your-custom-theme.css'
```


### 🧾 Button Theme Variables

These are the CSS variables you can override to customize button styles:

```css
:root {
	--button-text-hover: #ff4081;

	--cor-color-button-default: var(--cor-color-neutral);
	--cor-color-button-default-hover: oklch(from var(--cor-color-neutral) calc(l - 0.3) c h);
	--cor-color-button-default-text: var(--cor-color-text);
	--cor-color-button-default-text-hover: var(--cor-color-text-primary);

	--cor-color-button-primary: var(--cor-color-primary);
	--cor-color-button-primary-hover: oklch(from var(--cor-color-primary) calc(l - 0.3) c h);
	--cor-color-button-primary-text: var(--cor-color-text-primary);
	--cor-color-button-primary-text-hover: var(--cor-color-text-primary);

	--cor-color-button-secondary: var(--cor-color-secondary);
	--cor-color-button-secondary-hover: oklch(from var(--cor-color-secondary) calc(l - 0.3) c h);
	--cor-color-button-secondary-text: var(--cor-color-text-secondary);
	--cor-color-button-secondary-text-hover: var(--cor-color-text-primary);

	--cor-color-button-accent: var(--cor-color-accent);
	--cor-color-button-accent-hover: oklch(from var(--cor-color-accent) calc(l - 0.3) c h);
	--cor-color-button-accent-text: var(--cor-color-text-accent);
	--cor-color-button-accent-text-hover: var(--cor-color-text-primary);
}
```

### 📋 Button Variable Reference

| Variable                                  | Default value                                       | Description                                                        |
|-------------------------------------------|-----------------------------------------------------|--------------------------------------------------------------------|
| `--button-text-hover`                     | `--cor-color-primary`                               | Text color for text-only buttons on hover                          |
| `--cor-color-button-default`              | `--cor-color-neutral`                               | Background for the `default` button                                |
| `--cor-color-button-default-hover`        | `oklch(from var(--cor-color-neutral) l-0.3 c h)`    | Hover background for the `default` button                          |
| `--cor-color-button-default-text`         | `--cor-color-text`                                  | Text color for the `default` button                                |
| `--cor-color-button-default-text-hover`   | `--cor-color-text-primary`                          | Hover text color for the `default` button                          |
| `--cor-color-button-primary`              | `--cor-color-primary`                               | Background for the `primary` button                                |
| `--cor-color-button-primary-hover`        | `oklch(from var(--cor-color-primary) l-0.3 c h)`    | Hover background for the `primary` button                          |
| `--cor-color-button-primary-text`         | `--cor-color-text-primary`                          | Text color for the `primary` button                                |
| `--cor-color-button-primary-text-hover`   | `--cor-color-text-primary`                          | Hover text color for the `primary` button                          |
| `--cor-color-button-secondary`            | `--cor-color-secondary`                             | Background for the `secondary` button                              |
| `--cor-color-button-secondary-hover`      | `oklch(from var(--cor-color-secondary) l-0.3 c h)`  | Hover background for the `secondary` button                        |
| `--cor-color-button-secondary-text`       | `--cor-color-text-secondary`                        | Text color for the `secondary` button                              |
| `--cor-color-button-secondary-text-hover` | `--cor-color-text-primary`                          | Hover text color for the `secondary` button                        |
| `--cor-color-button-accent`               | `--cor-color-accent`                                | Background for the `accent` button                                 |
| `--cor-color-button-accent-hover`         | `oklch(from var(--cor-color-accent) l-0.3 c h)`     | Hover background for the `accent` button                           |
| `--cor-color-button-accent-text`          | `--cor-color-text-accent`                           | Text color for the `accent` button                                 |
| `--cor-color-button-accent-text-hover`    | `--cor-color-text-primary`                          | Hover text color for the `accent` button                           |

## 🧾 Font Size Variables
This font size scale is designed to provide a consistent and flexible typographic system across your project. The first group of variables, defined in `rem` units, establishes an absolute, global font size scale that remains consistent regardless of the context. The second group, defined in `em` units, offers a relative scale that adapts to the font size of the parent element, allowing for local adjustments and responsive design. By using this combination, you can maintain uniform typography throughout your application while still having the flexibility to fine-tune sizes in specific components. Use the absolute `rem` variables for global text sizing and the relative `em` variables when you need font sizes to scale dynamically within nested elements.


| Variable                    | Value   | Description                              |
|-----------------------------|---------|------------------------------------------|
| `--cor-font-size-xxs`       | 1.0rem  | Extra-extra-small (10px)                 |
| `--cor-font-size-xs`        | 1.2rem  | Extra-small (12px)                       |
| `--cor-font-size-s`         | 1.4rem  | Small (14px)                             |
| `--cor-font-size-ms`        | 1.6rem  | Medium-small (16px)                      |
| `--cor-font-size-m`         | 1.8rem  | Medium / base (18px)                     |
| `--cor-font-size-ml`        | 2.0rem  | Medium-large (20px)                      |
| `--cor-font-size-l`         | 2.4rem  | Large (24px)                             |
| `--cor-font-size-xl`        | 3.2rem  | Extra-large (32px)                       |
| `--cor-font-size-xxl`       | 4.0rem  | Extra-extra-large (40px)                 |
| **Relative scale (em)**     |         |                                          |
| `--cor-font-size-smallest`  | 0.7em   | Significantly smaller than parent        |
| `--cor-font-size-smaller`   | 0.85em  | Slightly smaller than parent             |
| `--cor-font-size-current`   | 1em     | Current / inherit from parent            |
| `--cor-font-size-larger`    | 1.25em  | Slightly larger than parent              |

## 📂 Components Documentation

Each component's documentation is stored in a `.md` file alongside its implementation in `src/components/`.

Current components:

- [Button](./src/components/Button.md)  
  Customizable, theme-aware button component with multiple variants and sizes.
- [Flex](./src/components/Flex.md)  
  Layout utility component that simplifies working with CSS flexbox.
- [Text](./src/components/Text.md)  
  Typographic component for consistent text styling, sizing, and behavior.