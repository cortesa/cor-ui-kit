## 🔧 Flex

`Flex` is a utility container based on `display: flex` with declarative variants for direction, alignment, justification, wrapping, spacing (`gap`), truncation, and quick centering. Internally it renders the `Text` component, so it also inherits its typography props.

### Import

```tsx
import { Flex } from "@your-package/ui"
```

### Basic usage

```tsx
<Flex gap="m">
  <div>Item 1</div>
  <div>Item 2</div>
</Flex>
```

---

### Props

| Prop        | Type                                                                 | Values / Format                                                                                                   | Default |
|-------------|----------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|---------|
| `direction` | `"row" \| "row-reverse" \| "column" \| "column-reverse"`             | Main axis direction                                                                                                | `"row"` |
| `justify`   | `"start" \| "center" \| "end" \| "between" \| "around" \| "evenly" \| "stretch"` | Distribution along the main axis                                                                                   | —       |
| `align`     | `"start" \| "center" \| "end" \| "stretch"`                           | Alignment along the cross axis                                                                                     | `"start"` |
| `wrap`      | `true \| false`                                                       | Controls line wrapping (wrap/nowrap)                                                                               | —       |
| `centered`  | `true \| false`                                                       | Shortcut for centering on **both axes**                                                                            | `false` |
| `gap`       | Tokens or string                                                      | Tokens: `"xxs" \| "xs" \| "s" \| "ms" \| "m" \| "ml" \| "l" \| "xl" \| "xxl"` **or** CSS string (`"12px"`, `"1rem"`, etc.) | —       |
| `truncate`  | `"s" \| "m" \| "l"`                                                   | Applies predefined truncation/line-clamp styles (as defined in `Flex.module.css`)                                 | —       |
| `className` | `string`                                                              | Additional CSS classes                                                                                              | —       |
| `style`     | `React.CSSProperties`                                                 | Inline styles                                                                                                       | —       |
| _(rest)_    | Native `div` attributes + **`TextProps`**                              | Passed through to the root element (`Text`)                                                                         | —       |

> **Note on `gap`:**  
> - If you pass a **token** (`"m"`, `"xl"`, …) the mapped CSS class from `Flex.module.css` (`gap-m`, `gap-xl`, …) is applied.  
> - If you pass a **CSS string** (`"12px"`, `"1rem"`, `"2cqw"`), it is set via inline style and **no** token class is applied.

---

### Gap tokens

Available tokens: `xxs`, `xs`, `s`, `ms`, `m`, `ml`, `l`, `xl`, `xxl`.  
These are typically mapped to your spacing/typography scale variables (e.g., `--cor-gap-m`), keeping spacing harmonious with your type scale.

Example:

```tsx
<Flex gap="xl">
  <Card />
  <Card />
  <Card />
</Flex>
```

Or free gap value:

```tsx
<Flex gap="12px">
  <Tag />
  <Tag />
</Flex>
```

---

### Composition examples

**Direction and alignment**
```tsx
<Flex direction="column" justify="between" align="stretch" gap="s">
  <Header />
  <Content />
  <Footer />
</Flex>
```

**Quick centering (both axes)**
```tsx
<Flex centered gap="m" style={{ minHeight: "240px" }}>
  <Spinner />
</Flex>
```

**With `wrap`**
```tsx
<Flex wrap gap="ms">
  {items.map(i => <Chip key={i.id}>{i.label}</Chip>)}
</Flex>
```

**Truncation**
```tsx
<Flex truncate="m" style={{ maxWidth: 360 }}>
  <span>Very long title that should be truncated…</span>
</Flex>
```

---

### TypeScript definition

```ts
type FlexProps =
  React.JSX.IntrinsicElements["div"]
  & TextProps
  & Omit<VariantProps<typeof flex>, "gap">
  & { gap?: VariantProps<typeof flex>["gap"] | string }
```

---

### Defaults

- `direction`: `"row"`
- `align`: `"start"`

---

### Best practices

- Use **gap tokens** to keep consistency with your design system.  
- Use a **free gap value (string)** only for specific, exceptional cases.  
- For vertical stacks, prefer `direction="column"` + `gap="m"`.  
- `centered` is the most readable shortcut for combining `justify` and `align` centering.
