

# Button Component

The `Button` component is a flexible and themeable UI element designed for different use cases such as primary actions, secondary actions, and icon buttons. It supports multiple variants, sizes, and customizable styles via CSS variables.

## 📦 Import

```tsx
import { Button } from "@/components/Button"
```

## ⚙️ Props

| Prop         | Type                                                                                      | Default     | Description |
|--------------|-------------------------------------------------------------------------------------------|-------------|-------------|
| `variant`    | `"default" \| "primary" \| "secondary" \| "accent" \| "bordered" \| "text"`               | `"default"` | Defines the button style variant |
| `size`       | `"xxs" \| "xs" \| "s" \| "ms" \| "m" \| "ml" \| "l" \| "xl" \| "xxl"`                      | `"s"`       | Controls button font size and padding |
| `icon`       | `{ position: "left" \| "right"; children: JSX.Element }`                                  | `undefined` | Optional icon and its position |
| `rounded`    | `boolean`                                                                                 | `false`     | If `true`, applies fully rounded corners |
| `disabled`   | `boolean`                                                                                 | `false`     | Disables interactions and applies disabled styles |
| `iconLayout` | `boolean`                                                                                 | `false`     | Forces icon-only layout styles |
| `className`  | `string`                                                                                  | —           | Custom CSS class name |
| `style`      | `React.CSSProperties`                                                                     | —           | Inline styles |
| `onClick`    | `(event: React.MouseEvent) => void`                                                       | —           | Click event handler |
| `children`   | `React.ReactNode`                                                                         | —           | Button content (label, text, or other elements) |

> This component also inherits props from the `Flex` component, enabling advanced layout control.

## 🎨 Theming

The `Button` component is fully customizable through CSS variables defined in `variables.css`.  
You can override these in your application's root stylesheet to match your brand colors.

See the [Button Theme Variables](../../README.md#-button-theme-variables) section for the full list.

Example:

```css
:root {
  --cor-color-button-primary: #0055ff;
  --cor-color-button-primary-hover: #0044cc;
}
```

## 📏 Sizes

The `size` prop corresponds to the global font scale:

| Size   | Variable                  | Example Font Size |
|--------|---------------------------|-------------------|
| `xxs`  | `--cor-font-size-xxs`      | 10px              |
| `xs`   | `--cor-font-size-xs`       | 12px              |
| `s`    | `--cor-font-size-s`        | 14px              |
| `ms`   | `--cor-font-size-ms`       | 16px              |
| `m`    | `--cor-font-size-m`        | 18px              |
| `ml`   | `--cor-font-size-ml`       | 20px              |
| `l`    | `--cor-font-size-l`        | 24px              |
| `xl`   | `--cor-font-size-xl`       | 32px              |
| `xxl`  | `--cor-font-size-xxl`      | 40px              |

## 💡 Usage Examples

### Basic
```tsx
<Button>Default Button</Button>
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="accent">Accent</Button>
```

### With Icon
```tsx
import { FiPlus } from "react-icons/fi"

<Button
  variant="primary"
  icon={{ position: "left", children: <FiPlus /> }}
>
  Add Item
</Button>
```

### Disabled
```tsx
<Button variant="primary" disabled>
  Disabled
</Button>
```

---

**Related:**  
- [Flex Component](./Flex.md) — Used internally for layout
