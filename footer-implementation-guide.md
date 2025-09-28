# FrameX Footer v2.0 - Implementation Guide

## 1. Assumptions/Questions
Based on analysis of the existing site:
- Using Inter font family (confirmed)
- Color palette: black, white, orange (#ff6b35), grays
- Outline icons with 1.5px stroke (matching site style)
- Vietnamese language support required

## 2. Information Architecture (Final)

### Content Hierarchy:
```
Footer
├── Top Section
│   ├── Brand (Logo + Tagline)
│   └── CTA Button (Nhận báo giá)
├── Main Section
│   ├── Navigation (6 primary links)
│   └── Contact (Phone, Email, Address)
└── Bottom Section
    ├── Legal (Copyright + 2 links)
    └── Social (2 icons)
```

### Vietnamese Copy:
- **Tagline**: "Định hình không gian sống tương lai"
- **CTA**: "Nhận báo giá"
- **Nav**: Sản phẩm, Dịch vụ, Dự án, Về chúng tôi, Blog, Nhà đầu tư
- **Legal**: Chính sách bảo mật, Điều khoản sử dụng

## 3. Visual Specification

### Typography Scale:
```css
/* Aligned with existing site tokens */
--footer-text-base: 0.875rem (14px)
--footer-text-small: 0.75rem (12px)
--footer-heading: 1rem (16px)
--footer-line-height: 1.6
--footer-font-weight-regular: 400
--footer-font-weight-medium: 500
```

### Color Tokens:
```css
/* Light mode (default) */
--footer-bg: #ffffff
--footer-border: #e8e8e8
--footer-text: #2a2a2a
--footer-text-muted: #4a4a4a
--footer-link: #000000
--footer-link-hover: #ff6b35

/* Dark mode ready */
--footer-bg-dark: #0a0a0a
--footer-text-dark: #d4d4d4
```

### Spacing System:
```css
--footer-spacing-unit: 1rem (16px)
--footer-padding-y: 3rem (48px)
--footer-section-gap: 2rem (32px)
--footer-item-gap: 1.5rem (24px)
```

### Grid Layout:
- **Desktop (≥1024px)**: 3-zone layout (top, main 2-col, bottom)
- **Tablet (768-1023px)**: Stacked with centered alignment
- **Mobile (<768px)**: Single column, centered

## 4. HTML Markup (Production-Ready)

```html
<!-- Replace existing <footer> with this markup -->
<footer class="footer-v2" role="contentinfo">
    <div class="footer-v2__container">
        <!-- See new-footer-design.html for complete markup -->
    </div>
</footer>
```

## 5. CSS/SCSS (Responsive, Commented)

See `css/footer-v2.css` for complete styles.

Key features:
- BEM methodology for maintainability
- CSS custom properties for theming
- Responsive breakpoints: 1024px, 768px, 400px
- Dark mode support via media query
- Accessibility: focus states, ARIA labels, semantic HTML

## 6. Assets & Content Model

### SVG Assets Required:
| Asset | Size | File | Notes |
|-------|------|------|-------|
| Logo | 140×36 | framex-logo-footer.png | Existing asset |
| Arrow Icon | 16×16 | Inline SVG | In button |
| Phone Icon | 20×20 | Inline SVG | Outline style |
| Email Icon | 20×20 | Inline SVG | Outline style |
| Location Icon | 20×20 | Inline SVG | Outline style |
| Pinterest Icon | 20×20 | Inline SVG | Outline style |
| LinkedIn Icon | 20×20 | Inline SVG | Outline style |

### CMS Content Model:
```javascript
{
  "footer": {
    "brand": {
      "logo": { 
        "url": "string", 
        "alt": "string",
        "required": true 
      },
      "tagline": { 
        "text": "string", 
        "required": false 
      }
    },
    "navigation": {
      "links": [
        { 
          "label": "string", 
          "url": "string", 
          "required": true 
        }
      ],
      "maxItems": 8
    },
    "contact": {
      "phone": { 
        "number": "string", 
        "display": "string",
        "required": true 
      },
      "email": { 
        "address": "string",
        "required": true 
      },
      "address": { 
        "text": "string",
        "required": false 
      }
    },
    "legal": {
      "copyright": { 
        "text": "string",
        "year": "number",
        "required": true 
      },
      "links": [
        { 
          "label": "string", 
          "url": "string" 
        }
      ]
    },
    "social": {
      "links": [
        { 
          "platform": "string",
          "url": "string",
          "icon": "string" 
        }
      ]
    }
  }
}
```

## 7. Integration & Migration Steps

### Step 1: Backup Current Footer
```bash
# Create backup
cp index.html index.html.backup
cp css/style.css css/style.css.backup
```

### Step 2: Remove Old Footer CSS
```css
/* Remove or comment out in style.css */
.footer { /* ... */ }
.footer-content { /* ... */ }
.footer-column { /* ... */ }
/* etc. */
```

### Step 3: Add New Footer CSS
```html
<!-- Add to <head> before closing -->
<link rel="stylesheet" href="css/footer-v2.css">
```

### Step 4: Replace Footer HTML
```javascript
// Find all instances of <footer> and replace with new markup
const oldFooter = document.querySelector('footer');
oldFooter.outerHTML = newFooterMarkup; // Use markup from new-footer-design.html
```

### Step 5: Update All Pages
```bash
# Apply to all HTML files
for file in *.html; do
  # Replace footer section
  # Update CSS link
done
```

### Step 6: Test & Validate
- Run accessibility audit
- Test responsive views
- Validate Vietnamese content
- Check all links

### Step 7: Clean Up
```bash
# Remove old footer-related files
rm css/footer-old.css
rm js/footer-old.js
```

## 8. QA & Accessibility Checklist

### Visual QA:
- [ ] Logo displays correctly (140×36px)
- [ ] Icons render at 20×20px
- [ ] Hover states work on all links
- [ ] Vietnamese diacritics render properly
- [ ] Spacing consistent across breakpoints

### Responsive Testing:
- [ ] Desktop (1200px): 3-zone layout
- [ ] Desktop (1024px): Grid maintains
- [ ] Tablet (768px): Stacked layout
- [ ] Mobile (375px): Single column
- [ ] Small (320px): Content fits

### Accessibility (WCAG AA):
- [ ] Color contrast ≥4.5:1 for text
- [ ] Color contrast ≥3:1 for icons
- [ ] Focus indicators visible
- [ ] Keyboard navigation works
- [ ] Screen reader announces properly
- [ ] Touch targets ≥44×44px
- [ ] Semantic HTML structure
- [ ] ARIA labels on icons

### Performance:
- [ ] CSS file <11KB
- [ ] No layout shift (CLS = 0)
- [ ] Icons inline (no extra requests)
- [ ] Font loading optimized

### Cross-browser:
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari
- [ ] Samsung Internet

### Dark Mode:
- [ ] Colors invert properly
- [ ] Contrast maintained
- [ ] Logo visibility

### Localization:
- [ ] Vietnamese text fits
- [ ] No text truncation
- [ ] RTL ready (future)

## Implementation Notes

### For Developers:
1. The footer is self-contained - no dependencies on external libraries
2. Uses CSS custom properties for easy theming
3. BEM naming for maintainability
4. Inline SVGs for performance (no icon font needed)

### For Content Editors:
1. All text is translatable via data-lang attributes
2. Links can be updated without CSS changes
3. Social links are optional (can be hidden)

### For Designers:
1. Spacing uses 8px grid system
2. Colors map to existing brand tokens
3. Icons are outline style, 1.5px stroke
4. Typography uses Inter font family

## Variants

### Full Footer (Default)
- All sections visible
- Used on main content pages

### Compact Footer
- Single row layout
- Logo, copyright, 3 links
- Used on landing pages, campaigns

Usage:
```html
<!-- Compact variant -->
<footer class="footer-v2 footer-v2--compact">
  <!-- Compact markup -->
</footer>
```

## Support & Maintenance

- CSS is modular - easy to update sections independently
- No JavaScript required (pure CSS)
- Progressive enhancement ready
- Future-proof with CSS Grid support

---

**Version**: 2.0.0
**Last Updated**: December 2024
**Author**: FrameX Development Team