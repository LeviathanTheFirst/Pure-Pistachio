# CoverFlowCarousel Theme Spec: Dark Charcoal Immersive Variant

## Design Rationale

**Variant Choice: Dark Charcoal Immersive**

The carousel renders inside a cream Section on the products page. A dark charcoal immersive treatment creates dramatic visual contrast that:
1. Puts focus squarely on food imagery with the dark backdrop making photos "pop"
2. Creates a premium, gallery-like presentation for product showcase
3. Provides clear visual separation from the cream section header above
4. Leverages the brand's established dark section pattern (data-dark)
5. Allows the pistachio green accent to shine vibrantly against charcoal

The charcoal surface (#1c1e1b) is the brand's official dark tone, used throughout the site for contrast sections. Using this instead of the current #0c0a09 aligns with the brand system.

---

## Complete Element Mapping

### 1. Section Container
```
CURRENT:  backgroundColor: "#0c0a09"
PROPOSED: backgroundColor: "#1c1e1b" + data-dark attribute
RATIONALE: Brand charcoal; enables cream focus rings per brand spec

CURRENT:  color: "#ffffff"
PROPOSED: color: "#ffffff" (keep)
RATIONALE: White text on dark surface for contrast

CURRENT:  fontFamily: "system-ui, -apple-system, sans-serif"
PROPOSED: fontFamily: "var(--font-sans)" (Inter)
RATIONALE: Brand body font; headings inside cards will use --font-display
```

### 2. Background Ambience Layer
```
CURRENT:  filter: "brightness(0.22) blur(32px)"
PROPOSED: filter: "brightness(0.18) blur(32px)"
RATIONALE: Slightly darker to reduce visual noise against charcoal

CURRENT:  background: "radial-gradient(circle at center, rgba(12,10,9,0.3) 0%, rgba(12,10,9,0.92) 100%)"
PROPOSED: background: "radial-gradient(circle at center, rgba(28,30,27,0.25) 0%, rgba(28,30,27,0.95) 100%)"
RATIONALE: Use brand charcoal rgb values for gradient stops
```

### 3. Eyebrow Section
```
CURRENT:  letter-spacing: "0.3em"
PROPOSED: letter-spacing: "var(--tracking-eyebrow)" (0.16em)
RATIONALE: Brand eyebrow tracking spec

CURRENT:  color: "#c5a880" (divider gradient)
PROPOSED: background: "linear-gradient(90deg, transparent, #d7a323)"
RATIONALE: Brand gold accent

CURRENT:  color: "#c5a880" (text)
PROPOSED: color: "#d7a323"
RATIONALE: Brand gold accent
```

### 4. Card Container
```
CURRENT:  borderRadius: "18px"
PROPOSED: borderRadius: "6px" (rounded-sm)
RATIONALE: Brand uses rounded-sm, not pill/rounded-lg

CURRENT:  backgroundColor: "#171311"
PROPOSED: backgroundColor: "#1c1e1b"
RATIONALE: Brand charcoal

CURRENT:  border: "1px solid rgba(255, 255, 255, 0.12)"
PROPOSED: border: "1px solid rgba(255, 255, 255, 0.08)"
RATIONALE: Subtler border, let shadows define edges

CURRENT:  boxShadow (center): "0 25px 60px rgba(0,0,0,0.9), 0 0 35px rgba(197,168,128,0.25)"
PROPOSED: boxShadow: "0 25px 60px rgba(0,0,0,0.9), 0 0 40px rgba(90,138,74,0.3)"
RATIONALE: Green glow instead of champagne gold

CURRENT:  boxShadow (non-center): "0 15px 35px rgba(0,0,0,0.5)"
PROPOSED: boxShadow: "0 15px 35px rgba(0,0,0,0.6)"
RATIONALE: Slightly deeper for depth
```

### 5. Card Content Overlay
```
CURRENT:  background: "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.68) 60%, rgba(0,0,0,0.96) 100%)"
PROPOSED: background: "linear-gradient(180deg, rgba(28,30,27,0.35) 0%, rgba(28,30,27,0.08) 25%, rgba(28,30,27,0.72) 60%, rgba(28,30,27,0.98) 100%)"
RATIONALE: Use charcoal-tinted gradients for cohesion
```

### 6. Card Title Typography
```
CURRENT:  fontSize: "1.65rem"
PROPOSED: fontSize: "1.65rem" (keep)
RATIONALE: Appropriate size for card context

CURRENT:  fontFamily: (inherited system-ui)
PROPOSED: fontFamily: "var(--font-display)" (Barlow Condensed)
RATIONALE: Brand display font for headings; uppercase condensed geometric

CURRENT:  letterSpacing: "0.04em"
PROPOSED: letterSpacing: "0.06em"
RATIONALE: Slightly more open for condensed font readability
```

### 7. Secondary Title Line
```
CURRENT:  color: "#f3f0ea"
PROPOSED: color: "var(--color-white-80)"
RATIONALE: Brand white-80 opacity variant
```

### 8. Decorative Divider Line
```
CURRENT:  backgroundColor: "#c5a880"
PROPOSED: backgroundColor: "#d7a323"
RATIONALE: Brand gold accent

CURRENT:  boxShadow: "0 0 8px rgba(197,168,128,0.7)"
PROPOSED: boxShadow: "0 0 10px rgba(215,163,35,0.6)"
RATIONALE: Brand gold glow
```

### 9. CTA Button
```
CURRENT:  borderRadius: "9999px" (pill)
PROPOSED: borderRadius: "6px" (rounded-sm)
RATIONALE: Brand convention; no pill buttons

CURRENT:  background: "linear-gradient(135deg, #c5a880 0%, #a48256 100%)"
PROPOSED: background: "#5a8a4a" (solid primary green)
RATIONALE: Primary brand color; solid is cleaner than gradient

CURRENT:  color: "#110d0c"
PROPOSED: color: "#ffffff"
RATIONALE: White text on green for contrast

CURRENT:  fontSize: "0.72rem"
PROPOSED: fontSize: "0.75rem"
RATIONALE: Slightly larger for readability

CURRENT:  letterSpacing: "0.14em"
PROPOSED: letterSpacing: "0.12em"
RATIONALE: Align with eyebrow tracking style

CURRENT:  boxShadow: "0 4px 14px rgba(0,0,0,0.4), 0 0 15px rgba(197,168,128,0.3)"
PROPOSED: boxShadow: "0 4px 14px rgba(0,0,0,0.4)"
RATIONALE: Remove gold glow; clean shadow

HOVER STATE (to add):
  transform: translateY(-1px)
  boxShadow: "0 6px 20px rgba(0,0,0,0.5), 0 0 20px rgba(90,138,74,0.4)"
  backgroundColor: "#6b9e5a" (primary-light)
```

### 10. Navigation Arrows
```
CURRENT:  borderRadius: "50%"
PROPOSED: borderRadius: "6px" (rounded-sm)
RATIONALE: Brand uses sharp/rounded-sm, not round

CURRENT:  backgroundColor: "rgba(0,0,0,0.55)"
PROPOSED: backgroundColor: "rgba(28,30,27,0.7)"
RATIONALE: Brand charcoal with opacity

CURRENT:  border: "1px solid rgba(255,255,255,0.2)"
PROPOSED: border: "1px solid rgba(255,255,255,0.12)"
RATIONALE: Subtler border

HOVER STATE (to add):
  backgroundColor: "rgba(90,138,74,0.8)" (primary with opacity)
  borderColor: "rgba(90,138,74,0.9)"
```

### 11. Pagination Dots
```
ACTIVE DOT:
  CURRENT:  backgroundColor: "#c5a880"
  PROPOSED: backgroundColor: "#d7a323"
  RATIONALE: Brand gold accent

  CURRENT:  boxShadow: "0 0 10px rgba(197,168,128,0.7)"
  PROPOSED: boxShadow: "0 0 8px rgba(215,163,35,0.5)"
  RATIONALE: Brand gold glow, slightly reduced intensity

INACTIVE DOT:
  CURRENT:  backgroundColor: "rgba(255,255,255,0.25)"
  PROPOSED: backgroundColor: "rgba(255,255,255,0.2)"
  RATIONALE: Slightly more subtle

DOT SHAPE:
  CURRENT:  borderRadius: "9999px" (pill)
  PROPOSED: borderRadius: "6px" (rounded-sm)
  RATIONALE: Brand convention
```

### 12. Focus Ring Styles
```
ON DARK SECTION (carousel):
  outline: 2px solid var(--color-cream)
  outline-offset: 3px
  border-radius: 2px
  RATIONALE: Brand spec for dark sections; cream ring on charcoal

This aligns with globals.css [data-dark] :focus-visible rule
```

### 13. Tag Badge
```
CURRENT:  color: "rgba(255,255,255,0.9)"
PROPOSED: color: "var(--color-white-80)"
RATIONALE: Brand opacity token

CURRENT:  textShadow: "0 2px 6px rgba(0,0,0,0.8)"
PROPOSED: textShadow: "0 2px 8px rgba(28,30,27,0.9)"
RATIONALE: Charcoal-tinted shadow
```

### 14. Description Text
```
CURRENT:  color: "rgba(255,255,255,0.9)"
PROPOSED: color: "var(--color-white-80)"
RATIONALE: Brand opacity token

CURRENT:  textShadow: "0 2px 8px rgba(0,0,0,0.9)"
PROPOSED: textShadow: "0 2px 8px rgba(28,30,27,0.9)"
RATIONALE: Charcoal-tinted shadow
```

---

## CSS Variable Reference (from globals.css)

### Available Colors
- --color-primary: #5a8a4a (pistachio green)
- --color-primary-light: #6b9e5a (hover/secondary green)
- --color-cream: #f5f1e8 (warm cream)
- --color-charcoal: #1c1e1b (dark sections/text)
- --color-charcoal-80: rgb(28 30 27 / 0.8)
- --color-charcoal-70: rgb(28 30 27 / 0.72)
- --color-stone: #d9d5cb (dividers)
- --color-gold: #d7a323 (accent)
- --color-white: #ffffff
- --color-white-80: rgb(255 255 255 / 0.8)
- --color-white-70: rgb(255 255 255 / 0.72)
- --color-white-25: rgb(255 255 255 / 0.25)
- --color-cream-90: rgb(245 241 232 / 0.9)
- --color-cream-80: rgb(245 241 232 / 0.8)

### Available Fonts
- --font-sans: var(--font-inter) — body text
- --font-display: var(--font-barlow-condensed) — headings, uppercase

### Available Spacing
- --tracking-eyebrow: 0.16em

### Border Radius Convention
- Use rounded-sm (6px) for cards, buttons, dots
- NEVER use pill (9999px) or rounded-lg

---

## Summary of Brand Alignment

| Element | Current (Non-Brand) | Proposed (On-Brand) |
|---------|--------------------|--------------------|
| Section BG | #0c0a09 | #1c1e1b + data-dark |
| Font | system-ui | --font-sans / --font-display |
| Accent | #c5a880 (champagne) | #d7a323 (gold) / #5a8a4a (green) |
| Card BG | #171311 | #1c1e1b |
| Card Radius | 18px | 6px (rounded-sm) |
| CTA Shape | Pill (9999px) | Rounded-sm (6px) |
| CTA Color | Champagne gradient | Pistachio green solid |
| Arrow Shape | Round (50%) | Rounded-sm (6px) |
| Dots Active | Champagne | Gold |
| Eyebrow Tracking | 0.3em | 0.16em |
| Focus Rings | None specified | Cream on dark |

---

## Implementation Notes

1. Add `data-dark` attribute to the section element to enable brand focus ring behavior
2. All inline styles should reference CSS variables where possible for maintainability
3. Consider extracting repeated values (charcoal, gold, green) into const variables at top of file
4. Hover states should use transition: all 200ms ease for consistency
5. Maintain all existing 3D transforms, z-index layering, and animation timing unchanged
