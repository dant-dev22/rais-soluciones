# RAIS Studio — Color System (Earthy & Luminous)

**RAIS como raíz, origen y crecimiento.** Paleta terrosa y luminosa, identidad conectada con lo natural.

Fondos claros (Sage Light, Warm Beige), texto profundo (Deep Soil), acentos orgánicos (Clay Orange, Forest Green, Soft Sand) y estados en gama natural. Calma visual, legibilidad y coherencia.

---

## 1. Palette Overview

### Base (backgrounds & text)

| Token | Hex | Tailwind | Role |
|-------|-----|----------|------|
| **Sage Light** | `#EEF2EC` | `rais-black` | Primary background |
| **Warm Beige** | `#F3EFE7` | `rais-charcoal` | Secondary sections, cards, forms |
| **Deep Soil** | `#1F2A22` | `rais-offwhite` | Primary text |
| **On accent** | `#FDFCFA` | `rais-on-accent` | Text on CTAs / colored bg |

### Brand & accents

| Token | Hex | Tailwind | Role |
|-------|-----|----------|------|
| **Clay Orange** | `#B85E3C` | `rais-terracotta` | Primary CTA, brand accent |
| **Forest Green** | `#3E5F4B` | `rais-oxide-red` | Structural emphasis |
| **Soft Sand** | `#D8C9A8` | `rais-soft-gold` | Details, separators, badges |

### UI states (natural range)

| Token | Hex | Tailwind | Role |
|-------|-----|----------|------|
| **Success Moss** | `#4F7A5A` | `rais-success` | Success, confirmations |
| **Warning Ochre** | `#C8A24D` | `rais-warning` | Warnings, caution |
| **Error Earth Red** | `#9E3A2F` | `rais-error` | Errors, destructive |
| **Info River Slate** | `#5A7D7C` | `rais-info` | Info, neutral UI |

---

## 2. Usage Rules

### 2.1 Primary backgrounds

- **Sage Light** `#EEF2EC`: Main page background, hero, quote, portfolio.
- **Warm Beige** `#F3EFE7`: Secondary sections (Services, Contact), cards, forms, prolonged reading.
- **Rule:** Sage Light = base; Warm Beige = surfaces on top.

### 2.2 Secondary surfaces

- **Warm Beige** (solid): Cards, form containers, nav.
- **Warm Beige / 50%** or **Soft Sand / 40%**: Borders, dividers. Prefer **Soft Sand** for separators.
- **Rule:** Avoid pure black. Use Deep Soil for dark elements on light bg.

### 2.3 Text

| Level | Color | Tailwind | Use case |
|-------|--------|----------|----------|
| **Primary** | Deep Soil | `text-rais-offwhite` | Headings, body |
| **Secondary** | Deep Soil 80% | `text-rais-offwhite/80` | Descriptions, captions |
| **Muted** | Deep Soil 60% | `text-rais-offwhite/60` | Meta, footnotes |
| **Placeholder** | Deep Soil 40% | `placeholder:text-rais-offwhite/40` | Input placeholders |
| **On accent** | On accent | `text-rais-on-accent` | CTAs, logos on colored bg |

### 2.4 CTAs & interactive elements

- **Primary CTA:** Clay Orange. Buttons: "Comenzar", "Contactar", "WhatsApp".
  - Background: `bg-rais-terracotta`
  - Text: `text-rais-on-accent`
- **Hover:** `bg-rais-terracotta-hover` or `hover:bg-rais-terracotta/90`
- **Active:** `bg-rais-terracotta-active`
- **Focus:** `focus:ring-2 focus:ring-rais-terracotta`

### 2.5 Decorative / accent usage

- **Clay Orange:** Logo, CTAs, link hovers, key highlights.
- **Forest Green:** Structural emphasis, headings, icons (e.g. dev/web).
- **Soft Sand:** Details, separators, badges, subtle borders.
- **Rule:** One secondary accent per block. Prefer Soft Sand for borders/dividers.

---

## 3. Contrast & Accessibility

| Foreground | Background | Ratio (approx.) | Use |
|------------|------------|------------------|-----|
| Deep Soil `#1F2A22` | Sage Light `#EEF2EC` | **≥ 10:1** | Body, headings (AAA) |
| Deep Soil | Warm Beige `#F3EFE7` | **≥ 9:1** | Body on cards (AAA) |
| Deep Soil 80% | Sage Light | **≥ 7:1** | Secondary text (AAA) |
| Deep Soil 60% | Sage Light | **≥ 4.5:1** | Muted (AA) |
| On accent | Clay Orange | **≥ 4.5:1** | CTA label (AA) |
| On accent | Success Moss | **≥ 4.5:1** | Success button (AA) |
| Success / Error / Warning | Sage Light or Warm Beige | **≥ 4.5:1** | Status text (AA) |

- **Target:** WCAG 2.1 AA (4.5:1 normal, 3:1 large). AAA for primary text on light bg.
- **Note:** All state colors sit in a natural, cohesive range.

---

## 4. Gradients

Use sparingly. When used:

| Gradient | Direction | Opacity | Use |
|----------|-----------|---------|-----|
| Sage Light → Warm Beige | `180deg` | 100% | Page/section bg |
| Warm Beige → Sage Light | `0deg` | 100% | Section transitions |
| Clay Orange → Soft Sand | `135deg` | 80% → 60% | Hero accent, blobs |
| Forest Green → River Slate | `90deg` | 15% → 10% | Subtle card highlight |
| Deep Soil → transparent | `180deg` | 5% → 0% | Overlay on light bg |

**Tailwind examples:**

```
bg-gradient-to-b from-rais-black to-rais-charcoal
bg-gradient-to-br from-rais-terracotta/80 to-rais-soft-gold/60
bg-gradient-to-r from-rais-oxide-red/15 to-rais-info/10
```

---

## 5. Interactive States

### 5.1 Buttons (Clay Orange CTA)

| State | Background | Text |
|-------|------------|------|
| **Default** | `#B85E3C` | On accent |
| **Hover** | `#C46A45` or `/90` | On accent |
| **Active** | `#A35435` | On accent |
| **Disabled** | `rais-charcoal/40` | `rais-offwhite/50` |
| **Focus** | Same as default | `ring-2 ring-rais-terracotta ring-offset-2 ring-offset-rais-black` |

### 5.2 Links / nav

| State | Color |
|-------|--------|
| Default | `text-rais-offwhite/80` |
| Hover | `text-rais-terracotta` |
| Focus | `ring-2 ring-rais-terracotta` |

### 5.3 Form inputs

| State | Border |
|-------|--------|
| Default | `border-rais-charcoal/50` or `border-rais-soft-gold/40` |
| Focus | `border-rais-terracotta` `ring-2 ring-rais-terracotta/30` |
| Error | `border-rais-error` |
| Disabled | `border-rais-charcoal/30` `bg-rais-charcoal/20` |

### 5.4 Cards / surfaces

| State | Border | Shadow |
|-------|--------|--------|
| Default | `border-rais-soft-gold/40` or `border-rais-charcoal/50` | — |
| Hover | `border-rais-terracotta/30` | `shadow-lg shadow-rais-terracotta/10` |

---

## 6. Colors to NEVER Use Together

- **Forest Green + Soft Sand** at full saturation in the same small block (too busy).
- **Clay Orange + Error Earth Red** on the same CTA or primary action.
- **Pure black `#000000`** as background; use Deep Soil for dark on light.
- **Neon / electric** hues outside the palette; keep natural, calm range.

---

## 7. Tailwind Token Naming

| Token | Maps to | Use |
|-------|---------|-----|
| `rais-black` | Sage Light | Main bg |
| `rais-charcoal` | Warm Beige | Cards, sections |
| `rais-offwhite` | Deep Soil | Primary text |
| `rais-on-accent` | On accent | Text on CTAs |
| `rais-terracotta` | Clay Orange | CTAs, links |
| `rais-oxide-red` | Forest Green | Structure, icons |
| `rais-soft-gold` | Soft Sand | Details, separators, badges |

**Extended:** `rais-terracotta-hover`, `rais-terracotta-active` in Tailwind/CSS.

---

## 8. Design Philosophy

- **Light base:** Sage Light + Warm Beige replace dark bases for a calm, readable canvas.
- **Deep Soil:** Primary text for max legibility on light backgrounds.
- **Clay Orange:** Organic, human accent; replaces cooler tech accents.
- **Forest Green & Soft Sand:** Natural secondary accents for structure and detail.
- **States:** Moss, Ochre, Earth Red, River Slate keep a coherent, natural feel.

**Result:** A terrosa, luminosa UI that supports **raíz, origen y crecimiento** with clarity, calm, and a strong link to the natural world.

---

## 9. Summary

- **Backgrounds:** Sage Light (primary), Warm Beige (secondary).
- **Text:** Deep Soil (primary), On accent (on CTAs).
- **CTA / brand:** Clay Orange only for primary actions.
- **Accents:** Forest Green (structure), Soft Sand (details, separators).
- **States:** Natural range (Moss, Ochre, Earth Red, River Slate).
- **Contrast:** AA/AAA on light bg; avoid forbidden pairs (§6).
