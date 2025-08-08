# COR-UI-KIT

Version: 0.0.3

## 🎨 Theming

You can customize the appearance of this library by overriding the following CSS variables in your app’s `:root` scope. This allows you to adapt the UI to your design system or brand without modifying the library's source code.

Make sure your custom overrides are loaded **after** the default variable import:

```ts
// main.ts
import './your-custom-theme.css'


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