# CHAKRAVYUH 2.0 — Design Tokens & Design System Specification

Extracted directly from Stitch Project `18417079394346181284` (`Chakravyuh 2.0 — Landing Page` & Design System Canvas).

---

## 1. Color Palette

### Celestial & Atmosphere (Kurukshetra Golden Hour Sky)
| Token Name | Hex Code | Role |
| :--- | :--- | :--- |
| `sky-light` | `#BFD6EC` | Upper atmosphere, subtle cold counterpoint |
| `sky-deep` | `#8FB4DC` | Atmospheric depth |
| `sunburst-radial` | `#FFF6E3` to `#8FB4DC` | Hero & registration sunburst background |

### Sacred & Noble Foundations
| Token Name | Hex Code | Role |
| :--- | :--- | :--- |
| `cream-parchment` | `#FFF6E3` | Primary body background, canvas paper, card body |
| `light-surface-container-lowest` | `#FFFDF8` | Card elevated surface |
| `light-surface-container-low` | `#FCF0D6` | Subtle highlight sections |
| `light-surface-container` | `#F6E5C3` | Badges, tags, pill backdrops |
| `light-surface-container-high` | `#EAD5AC` | Borders and muted dividers |

### Gold & Solar Splendor
| Token Name | Hex Code | Role |
| :--- | :--- | :--- |
| `gold-highlight` | `#F2B84B` | Glowing borders, active badges, headline highlights, countdown numerals |
| `gold-rich` | `#D9961F` | Ornate frames, button borders, SVG chakras, accent lines |

### Battlefield & Earth Accents
| Token Name | Hex Code | Role |
| :--- | :--- | :--- |
| `saffron` | `#E8761E` | Primary warrior accent, CTA highlights, gate markers |
| `burnt-orange` | `#B8521A` | Secondary warm accent |
| `bronze-brown` | `#6B3A1E` | Section headers, card borders, secondary buttons, subheadings |
| `dark-chocolate` | `#3A1D0E` | High-contrast contrast bands, hero plaque plates, footer, primary buttons |

### Devotional Accents & High-Contrast Ink
| Token Name | Hex Code | Role |
| :--- | :--- | :--- |
| `krishna-blue` | `#4F74BE` | Krishna banner, secondary tracks, collegiate accents |
| `peacock-green` | `#3E8E5A` | Success states, checkpoint badges |
| `navy-ink` | `#1B2A41` | High-readability primary body text |

---

## 2. Typography

### Font Families
- **Display**: `'Cinzel Decorative', Georgia, serif` (Headline centerpiece, logo title)
- **Headlines / Titles**: `'Cinzel', Georgia, serif` (Section headings, gate titles, plaques)
- **Body / Labels**: `'Lato', -apple-system, BlinkMacSystemFont, sans-serif` (Crisp readability for body copy, timings, chips)
- **Accompanying Classical Body**: `'Cormorant Garamond', Georgia, serif` (Editorial quotes, narrative story text)

### Type Scale & Hierarchy
| Token | Font Size | Line Height | Letter Spacing | Weight | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `display-lg` | `56px` | `64px` | `1.5px` | 700 | Main Hero Title ("BREAK THE CHAKRAVYUH") |
| `display-lg-mobile`| `32px` | `38px` | `1.0px` | 700 | Mobile Hero Title |
| `display-md` | `42px` | `50px` | `1.0px` | 700 | Section Titles |
| `display-md-mobile`| `28px` | `34px` | `0.75px` | 700 | Mobile Section Titles |
| `headline-lg`| `32px` | `40px` | `0.75px` | 700 | Subsection Headings, Stats |
| `headline-md`| `24px` | `32px` | `0.5px` | 700 | Card Headings |
| `title-lg` | `20px` | `28px` | `0.4px` | 600 | Card Titles, Timeline Titles |
| `body-lg` | `18px` | `28px` | `0.1px` | 400/700 | Lead Paragraphs |
| `body-md` | `16px` | `24px` | `0.1px` | 400 | Standard Body Text |
| `label-lg` | `14px` | `20px` | `1.5px` | 700 | Large Button Text |
| `label-sm` | `12px` | `16px` | `1.8px` | 700 | Eyebrows, Badges, Chips |

---

## 3. Shape, Ornament & Component Tokens

### Button & Pill Geometry
- **Ribbon Pill with Diamond Ends**:
  - `clip-path: polygon(14px 0%, calc(100% - 14px) 0%, 100% 50%, calc(100% - 14px) 100%, 14px 100%, 0% 50%)`
  - Applied to primary CTA buttons, gate badges, header registration button.
- **Border Radii**:
  - `none`: `0px`
  - `sm`: `4px` (Tags, chips)
  - `DEFAULT`: `6px` (Standard cards)
  - `md`: `10px` (Info tiles)
  - `lg`: `16px` (Modal / Panels)
  - `arched`: `rounded-t-full` (Arched portrait cards & Arjuna hero frame)
  - `full`: `9999px` (Badges & circular icons)

### Shadows & Glows
- **Epic Text Shadow**:
  - `text-shadow: 0 2px 0 rgba(58, 29, 14, 0.85), 0 6px 24px rgba(242, 184, 75, 0.45)`
- **Stage Plaque Shadow**:
  - `box-shadow: 0 12px 32px rgba(26, 12, 5, 0.55), inset 0 0 0 1px rgba(242, 184, 75, 0.25)`
- **Stage Plaque Active Glow**:
  - `box-shadow: 0 14px 38px rgba(242, 184, 75, 0.24), inset 0 0 0 1px rgba(242, 184, 75, 0.45)`
- **Card Hover Lift**:
  - `transform: translateY(-4px)`, transition duration `280ms cubic-bezier(0.2, 0, 0, 1)`

### Motion & Transitions
- **Chakra Rotation**: `55s linear infinite` (`chakraSpin`)
- **State Change Duration**: `180ms ease-out`
- **Card Lift**: `280ms cubic-bezier(0.2, 0, 0, 1)`
- **Scroll Reveal**: `500ms ease-out` translateY(18px -> 0px)
- **Reduced Motion Support**:
  - `@media (prefers-reduced-motion: reduce)`: pauses all rotation, removes transforms, provides instantaneous fades.
