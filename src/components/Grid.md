

# Grid

Componente de **layout en cuadrícula** basado en `CSS Grid`. Ofrece una API concisa para definir columnas/filas y controlar alineaciones y separación (`gap`), manteniendo compatibilidad con las props de `Text`.

> **Idea clave**: usa `columns`/`rows` para la plantilla de grid, `justify`/`align` para alineaciones, y `gap` con **tokens** o **valor libre**.

---

## Importación

```tsx
// comments in English only
import { Grid } from "./Grid"
```

---

## API

```tsx
<Grid
  columns={string}
  rows={string}
  justify={"center" | "stretch" | "start" | "end" | "between" | "around" | "evenly"}
  align={"start" | "end" | "center" | "stretch"}
  centered={true | false}
  gap={
    | "xxs" | "xs" | "s" | "ms" | "m" | "ml" | "l" | "xl" | "xxl"
    | 0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48
    | string // valores libres: '6px', '1rem', '8px 12px', etc.
  }
  truncate={"s" | "m" | "l"}
  className={string}
  style={React.CSSProperties}
  {...TextProps}
>
  {children}
</Grid>
```

> `Grid` extiende `TextProps`, por lo que acepta todas las props del componente `Text` (tipografía, color, etc.).

---

## Props y comportamiento

### `columns` y `rows`
Se aplican como `gridTemplateColumns` y `gridTemplateRows` (inline style). Aceptan cualquier sintaxis válida de CSS Grid.

```tsx
// comments in English
<Grid columns="repeat(3, 1fr)" rows="auto auto">…</Grid>
<Grid columns="200px 1fr" rows="min-content">…</Grid>
<Grid columns="[l] 1fr [c] 2fr [r] 1fr">…</Grid>
```

### `justify`
Distribución horizontal del **contenido del grid**:
- `center` · `stretch` · `start` · `end` · `between` · `around` · `evenly`

```tsx
<Grid columns="repeat(4, 1fr)" justify="between">…</Grid>
```

### `align`
Alineación vertical del **contenido del grid**:
- `start` · `end` · `center` · `stretch`

```tsx
<Grid rows="repeat(2, minmax(0, auto))" align="center">…</Grid>
```

### `centered`
Atajo booleano que aplica la clase `centered` del módulo CSS.

```tsx
<Grid centered columns="1fr 1fr">…</Grid>
```

### `gap`
- **Tokens nominales**: `"xxs" | "xs" | "s" | "ms" | "m" | "ml" | "l" | "xl" | "xxl"` → clases `gap-*`.
- **Tokens numéricos**: `0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48` → clases `gap-*`.
- **Valor libre (`string`)**: si no coincide con tokens nominales, se aplica inline en `style.gap`.

```tsx
<Grid gap="m">…</Grid>          
<Grid gap={16}>…</Grid>           
<Grid gap="12px 24px">…</Grid>  
```

### `truncate`
Activa utilidades de truncado (`styles.truncateS/M/L`).

```tsx
<Grid truncate="m">…</Grid>
```

### `className` y `style`
- `className` permite añadir clases externas.
- `style` se fusiona con los estilos calculados. `gap` inline **solo** cuando el `gap` es `string` no tokenizado.

---

## Ejemplos rápidos

### 1) Grid básico 3 columnas
```tsx
// comments in English
export const EjemploBasico = () => (
  <Grid columns="repeat(3, 1fr)" gap="m">
    <div>Uno</div>
    <div>Dos</div>
    <div>Tres</div>
  </Grid>
)
```

### 2) Alineación + separación numérica
```tsx
export const EjemploAlineacion = () => (
  <Grid columns="repeat(4, 1fr)" justify="between" align="center" gap={24}>
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
  </Grid>
)
```

### 3) `gap` libre (shorthand)
```tsx
export const EjemploGapLibre = () => (
  <Grid columns="1fr 2fr" gap="8px 16px">
    <div>Col 1</div>
    <div>Col 2</div>
  </Grid>
)
```

### 4) Plantilla con header/aside/main/footer
```tsx
export const EjemploAreas = () => (
  <Grid
    columns="200px 1fr"
    rows="auto 1fr auto"
    gap="s"
    align="stretch"
  >
    <header>Header</header>
    <aside>Aside</aside>
    <main>Main</main>
    <footer>Footer</footer>
  </Grid>
)
```

---

## Personalización

### 1) Por clase externa
```tsx
<Grid className="mi-grid" columns="repeat(2, 1fr)">…</Grid>
```

### 2) Acceso a tokens del CSS Module
```tsx
// comments in English
import { Grid } from "./Grid"

const claseTruncadoM = Grid.styles.truncateM

export const Demo = () => (
  <Grid className={claseTruncadoM} columns="1fr 1fr">…</Grid>
)
```

### 3) Extender la escala de `gap`
Añade clases nuevas en `Grid.module.css` y referencia el token en la variante `gap` del CVA.

```css
/* Grid.module.css */
.gap-56 { gap: 56px; }
```
```ts
// comments in English
const grid = cva(styles.grid, {
  variants: {
    // …
    gap: {
      // existentes
      56: 'gap-56'
    }
  }
})
```

---

## Observaciones de implementación (revisión)
- `defaultVariants` está **anidado** dentro de `variants`. En CVA debe ir **al mismo nivel** que `variants`.
- `defaultVariants` define `direction: 'row'`, pero **no existe** la variante `direction`. O elimínalo o crea la variante.
- En la llamada `grid({ …, className })`, CVA espera la clave `class`, no `className`. Recomendado: `grid({ …, class: className })`.

Estas tres notas no afectan al uso documentado, pero conviene corregirlas para un comportamiento coherente.

---

## Buenas prácticas
- Prioriza tokens de `gap` para consistencia.
- Usa valores libres (`'px'`, `'rem'`) solo cuando la escala no cubra el caso.
- Combina `columns/rows` con utilidades responsivas o media queries en el CSS del proyecto.
- Separa responsabilidades: usa `Grid` para layout; estilos tipográficos/vinculados al contenido, en `Text` o estilos propios.
