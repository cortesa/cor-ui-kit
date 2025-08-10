

# Text

`Text` is a low-level, typography-first component that renders a semantic `div` with a rich set of visual variants. It centralizes common text concerns (font size, alignment, truncation, transform, weight, decoration, etc.) so you can compose consistent UI without scattering utility classes. Internally it uses **CSS Modules** and **class-variance-authority (CVA)** for predictable, type-safe variants.

> Note: `Text` focuses on presentation. If you need an actual HTML heading or paragraph, you can still wrap/compose those tags or pass `role`/ARIA attributes as needed.

---

## 📦 Import

```tsx
import { Text } from "@/components/Text"
```

---

## ⚙️ Props

`Text` accepts native `div` attributes plus the variants below. Some props also support raw CSS via the `style` prop.

| Prop            | Type                                                                                                       | Default | Description                                                                                                   |
|-----------------|------------------------------------------------------------------------------------------------------------|---------|---------------------------------------------------------------------------------------------------------------|
| `padding`       | Token: `4 \| 8 \| 12 \| 16 \| 20 \| 24 \| 28 \| 32 \| 36 \| 40 \| 44 \| 48` **or** `string`               | —       | Spacing inside the container. Tokens map to CSS classes; a string (e.g. `"12px"`/`"1rem"`) sets inline style. |
| `fontSize`      | `"xxs" \| "xs" \| "s" \| "ms" \| "m" \| "ml" \| "l" \| "xl" \| "xxl" \| "smallest" \| "smaller" \| "current" \| "larger" \| "largest"` | —       | Absolute (`rem`) and relative (`em`) sizes aligned with your design scale.                                    |
| `textAlign`     | `"left" \| "center" \| "right"`                                                                            | —       | Horizontal text alignment.                                                                                    |
| `fontWeight`    | Numeric: `100 \| 400 \| 700 \| 900` or keywords: `"lighter" \| "light" \| "normal" \| "bold" \| "bolder"`  | —       | Font weight shortcut tokens.                                                                                  |
| `whiteSpace`    | `"normal" \| "nowrap"`                                                                                     | —       | Whitespace handling.                                                                                          |
| `textOverflow`  | `"normal" \| "ellipsis"`                                                                                   | —       | Overflow behavior for single-line truncation.                                                                 |
| `textTransform` | `"uppercase" \| "capitalize" \| "lowercase"`                                                               | —       | Text transform helpers.                                                                                       |
| `textDecoration`| `"none" \| "underline"`                                                                                    | —       | Decoration helpers.                                                                                           |
| `fontStyle`     | `"normal" \| "italic"`                                                                                     | —       | Italic toggle.                                                                                                |
| `truncate`      | `"s" \| "m" \| "l"`                                                                                        | —       | Multi-breakpoint truncation presets (see below).                                                              |
| `inline`        | `boolean`                                                                                                  | `false` | Renders with inline layout rules (does not force block-level behavior).                                       |
| `noSelect`      | `true \| false`                                                                                             | —       | If `true`, disables text selection (`user-select: none`).                                                     |
| `width`         | `string`                                                                                                   | —       | Shorthand to set `style.width`.                                                                               |
| `height`        | `string`                                                                                                   | —       | Shorthand to set `style.height`.                                                                              |
| `color`         | `string`                                                                                                   | —       | Shorthand to set `style.color`.                                                                               |
| `letterSpacing` | `string`                                                                                                   | —       | Shorthand to set `style.letterSpacing`.                                                                       |
| `lineHeight`    | `string`                                                                                                   | —       | Shorthand to set `style.lineHeight`.                                                                          |
| `flexGrow`      | `number`                                                                                                   | —       | Shorthand to set `style.flexGrow`.                                                                            |
| `flexShrink`    | `number`                                                                                                   | —       | Shorthand to set `style.flexShrink`.                                                                           |
| `className`     | `string`                                                                                                   | —       | Extra CSS class names.                                                                                        |
| `style`         | `React.CSSProperties`                                                                                      | —       | Inline styles merged last.                                                                                    |

> **Note on `padding`:** When you pass a **string**, the component applies it via inline style and **does not** apply any padding token class.

---

## 🅰️ Font sizes

`Text` exposes absolute and relative sizes aligned with your design scale:

- **Absolute (`rem`)**: `xxs`, `xs`, `s`, `ms`, `m`, `ml`, `l`, `xl`, `xxl`  
  Mapped to variables like `--cor-font-size-m` (e.g., 1.8rem = 18px if your base is 10px).
- **Relative (`em`)**: `smallest`, `smaller`, `current`, `larger`, `largest`  
  These scale off the **parent’s** font size to keep local hierarchy coherent.

Example:

```tsx
<Text fontSize="m">Base section</Text>
<Text fontSize="smaller">Secondary hint</Text>
<Text fontSize="largest">Hero emphasis</Text>
```

---

## ✂️ Truncation

Use `truncate` for predefined single/multi-line clamp utilities (as defined in `Text.module.css`):

```tsx
<Text truncate="m" style={{ maxWidth: 360 }}>
  A very long sentence that should be truncated with an ellipsis when it overflows the container width…
</Text>
```

- `textOverflow="ellipsis"` targets single-line overflow.
- `truncate="s" | "m" | "l"` applies multi-line clamping at different breakpoints (implementation defined in CSS).

---

## 🧭 Alignment & transforms

```tsx
<Text textAlign="center" textTransform="uppercase" letterSpacing="0.05em">
  Section title
</Text>

<Text fontWeight="700" textDecoration="underline">
  Strong emphasis with underline
</Text>
```

---

## 🧰 Inline vs Block

```tsx
<Text inline>Inline label</Text>
<Text>Block content (default)</Text>
```

`inline` is handy for in-flow labels or mixing text inside other components without forcing a new block.

---

## 🙅 No selection / Protected hints

```tsx
<Text noSelect>Read-only label (cannot be selected)</Text>
```

> If you need to visually obfuscate text (e.g., password-like dots), use your own CSS (e.g., `-webkit-text-security`) on top. `noSelect` prevents selection/copy but **does not** hide DOM content.

---

## 📓 Usage examples

```tsx
// Basic
<Text fontSize="m">Body text</Text>

// With padding token
<Text padding={16} fontSize="s">Padded text</Text>

// With raw padding string
<Text padding="12px 16px" fontSize="ms">Custom padding</Text>

// Single-line ellipsis
<Text textOverflow="ellipsis" whiteSpace="nowrap" style={{ maxWidth: 280 }}>
  This is a long, single-line text that will be truncated…
</Text>

// Multi-line truncate preset + custom color
<Text truncate="l" color="var(--cor-color-text)">
  Multi-line paragraph that will be clamped according to the `l` preset…
</Text>
```

---

## ✅ Best practices

- Prefer **absolute font sizes** for global rhythm; use **relative sizes** to fine-tune hierarchies inside a section.
- Keep truncation predictable by setting an explicit width/`max-width`.
- Use `noSelect` for non-interactive labels that should not be copied; pair with ARIA where appropriate.
- Compose `Text` inside layout primitives (e.g., `Flex`) to manage spacing via `gap` rather than manual margins.

---

## 🔗 Related

- [Flex](../Flex/Flex.md) — layout and spacing primitives often used with `Text`.
- Theming tokens: see your global `--cor-font-size-*` and related variables in the main README.