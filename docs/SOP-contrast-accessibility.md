# SOP: Website Contrast & Accessibility Standards

## Purpose
Ensure all LDASD website pages maintain WCAG AA accessibility compliance with clear, readable text and proper visual hierarchy.

---

## 1. Contrast Standards

### 1.1 Text on Light Backgrounds (bg-background, bg-white, bg-sky, bg-tan, bg-sand, bg-sage)

| Element | Class | Minimum Opacity |
|---------|-------|-----------------|
| Primary text | `text-foreground` | 100% |
| Secondary text | `text-foreground/80` | 80% |
| Tertiary/muted | `text-foreground/70` | AVOID - use /80 minimum |

**Rule:** Never use opacity below `/80` on light backgrounds.

### 1.2 Text on Dark Backgrounds (bg-primary, bg-primary-dark, gradients)

| Element | Class | Minimum Opacity |
|---------|-------|-----------------|
| Primary text | `text-white` | 100% |
| Secondary text | `text-white/90` | 90% |
| Tertiary/muted | `text-white/80` | 80% (minimum) |

**Rule:** Never use opacity below `/80` on dark backgrounds. Prefer `/90` for body text.

---

## 2. Hero Section Requirements

### 2.1 Hero Images with Text Overlay

When placing text over hero images, always include a gradient overlay for readability:

```tsx
<section className="relative">
  <div className="absolute inset-0">
    <Image
      src="/images/hero/image.jpg"
      alt="Descriptive alt text"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-primary-light/80" />
  </div>
  <div className="relative">
    {/* Text content here - will be readable over the overlay */}
  </div>
</section>
```

### 2.2 Approved Gradient Overlays

| Use Case | Gradient |
|----------|----------|
| Standard hero | `from-primary/80 via-primary/70 to-primary-light/80` |
| Contact page | `from-primary/60 via-primary/50 to-primary-dark/60` |
| CTA sections | `from-primary to-primary-light` (solid gradient) |

---

## 3. Image Requirements

### 3.1 Alt Text
- All images MUST have descriptive alt text
- Alt text should describe the image content and context
- Include location references where applicable (e.g., "Family walking on Coronado Beach, San Diego")

### 3.2 Performance Attributes
- Hero images: Use `priority` attribute for above-the-fold images
- Background images: Use `fill` with `object-cover`
- Carousel images: Add `sizes` attribute for responsive loading

```tsx
<Image
  src="/images/hero/image.jpg"
  alt="Descriptive alt text including location"
  fill
  className="object-cover"
  priority  // for above-the-fold images
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
/>
```

---

## 4. Color Palette Reference

### Primary Colors
| Name | Variable | Hex | Use |
|------|----------|-----|-----|
| Primary (Sage) | `primary` | #52796F | Headers, dark backgrounds |
| Primary Light | `primary-light` | #6B9080 | Gradient endpoints |
| Primary Dark | `primary-dark` | #3A5A50 | Darker sections |

### Secondary Colors
| Name | Variable | Hex | Use |
|------|----------|-----|-----|
| Secondary (Gold) | `secondary` | #D4A574 | CTAs, highlights, accents |
| Accent | `accent` | #C8915A | Hover states |

### Background Colors
| Name | Variable | Hex | Use |
|------|----------|-----|-----|
| Background | `background` | #FDFBF7 | Default page background |
| Sky | `sky` | #E6F3F3 | Light blue sections |
| Tan | `tan` | #F5EDE4 | Warm neutral sections |
| Sand | `sand` | #FAF6F1 | Very light warm sections |
| Sage | `sage` | #E8EDEB | Light sage sections |

---

## 5. Mobile Responsiveness

### 5.1 Breakpoints
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

### 5.2 Mobile-First Rules
- Default styles are for mobile
- Add breakpoint prefixes for larger screens
- Ensure touch targets are minimum 44x44px
- Stack columns on mobile, grid on desktop

```tsx
// Good: Mobile-first
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

// Good: Responsive text sizing
<h1 className="text-4xl sm:text-5xl lg:text-6xl">

// Good: Responsive padding
<section className="py-16 sm:py-24 lg:py-32">
```

---

## 6. Testing Checklist

Before deploying any page, verify:

- [ ] All text passes WCAG AA contrast (4.5:1 for normal text, 3:1 for large text)
- [ ] No text uses opacity below `/80` on light backgrounds
- [ ] No text uses opacity below `/80` on dark backgrounds (prefer `/90`)
- [ ] All images have descriptive alt text
- [ ] Hero images have gradient overlays
- [ ] Page is readable on mobile devices
- [ ] Touch targets are at least 44x44px
- [ ] Build completes without errors

---

## 7. Common Issues & Fixes

### Issue: Text hard to read on hero image
**Fix:** Add or increase gradient overlay opacity
```tsx
// Increase from /70 to /80
<div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/80 to-primary-light/80" />
```

### Issue: Secondary text too faint
**Fix:** Increase opacity from /70 to /80
```tsx
// Before
<p className="text-foreground/70">

// After
<p className="text-foreground/80">
```

### Issue: Text disappears on mobile
**Fix:** Ensure gradient overlay covers full image on all screen sizes
```tsx
<div className="absolute inset-0"> {/* Not just inset-x-0 */}
```

---

## 8. Tools & Resources

### Contrast Checkers
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- Colour Contrast Analyzer: https://developer.paciellogroup.com/resources/contrastanalyser/

### WCAG Guidelines
- WCAG 2.1 AA requires:
  - 4.5:1 contrast ratio for normal text
  - 3:1 contrast ratio for large text (18pt+ or 14pt+ bold)
  - 3:1 contrast ratio for UI components

---

## Document History

| Date | Version | Changes |
|------|---------|---------|
| 2024-12-24 | 1.0 | Initial SOP created - documented all contrast and accessibility standards |
