# FrameX Design System Documentation

## 🎨 **Design System Overview**

This document outlines the comprehensive design system for FrameX website, establishing a unified visual language and consistent user experience across all pages and components.

---

## 📋 **Table of Contents**

1. [Design Tokens](#design-tokens)
2. [Color Palette](#color-palette)  
3. [Typography Scale](#typography-scale)
4. [Spacing System](#spacing-system)
5. [Component Library](#component-library)
6. [Grid System](#grid-system)
7. [Responsive Breakpoints](#responsive-breakpoints)
8. [Implementation Guidelines](#implementation-guidelines)

---

## 🎯 **Design Tokens**

### Core Philosophy
- **Mobile-First**: All components are designed starting from mobile and scaled up
- **Accessibility-First**: WCAG 2.1 AA compliance built into every component
- **Performance-First**: Optimized CSS with minimal runtime overhead
- **Consistency**: Single source of truth for all design decisions

### CSS Custom Properties Architecture
```css
:root {
  /* Design tokens are organized hierarchically */
  --color-primary: #ff6b35;        /* Brand orange */
  --color-text-primary: #111827;   /* High contrast text */
  --font-size-base: 1rem;          /* 16px baseline */
  --space-4: 1rem;                 /* 16px spacing unit */
}
```

---

## 🎨 **Color Palette**

### Primary Colors
| Color | Hex | Usage | Accessibility |
|-------|-----|-------|---------------|
| **FrameX Orange** | `#ff6b35` | CTAs, accents, hover states | AA compliant on white |
| **Orange Light** | `#ff8a5b` | Hover states, backgrounds | AA compliant on dark |
| **Orange Dark** | `#e55a2b` | Active states, borders | AAA compliant on white |

### Neutral Scale (Systematic Grayscale)
| Name | Hex | Usage | Contrast Ratio |
|------|-----|-------|----------------|
| `gray-50` | `#f9fafb` | Page backgrounds | - |
| `gray-100` | `#f3f4f6` | Card backgrounds | - |
| `gray-200` | `#e5e7eb` | Borders, dividers | - |
| `gray-300` | `#d1d5db` | Disabled states | - |
| `gray-400` | `#9ca3af` | Placeholder text | - |
| `gray-500` | `#6b7280` | Secondary text | 7.1:1 (AAA) |
| `gray-600` | `#4b5563` | Body text | 9.2:1 (AAA) |
| `gray-700` | `#374151` | Headings | 12.6:1 (AAA) |
| `gray-800` | `#1f2937` | Navigation | 15.8:1 (AAA) |
| `gray-900` | `#111827` | Primary text | 18.7:1 (AAA) |

### Semantic Colors
| Purpose | Color | Hex | Usage |
|---------|-------|-----|-------|
| **Success** | Green | `#10b981` | Confirmations, positive states |
| **Warning** | Amber | `#f59e0b` | Cautions, important notices |
| **Error** | Red | `#ef4444` | Errors, destructive actions |
| **Info** | Blue | `#3b82f6` | Information, neutral notices |

### Color Usage Guidelines

#### ✅ **DO**
- Use primary orange for CTAs and key interactive elements
- Maintain 4.5:1 contrast ratio minimum for text
- Use semantic colors consistently across components
- Test colors in dark mode and high contrast environments

#### ❌ **DON'T**
- Use orange for warning states (use amber instead)
- Place light gray text on white backgrounds
- Mix warm and cool grays in the same interface
- Override semantic color meanings

---

## 📝 **Typography Scale**

### Font Stack
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
--font-mono: 'Fira Code', 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
```

### Type Scale (Major Third - 1.25 ratio)
| Size Name | rem | px | Usage | Line Height |
|-----------|-----|----|----- |-------------|
| `xs` | 0.75rem | 12px | Fine print, captions | 1.25 |
| `sm` | 0.875rem | 14px | Small text, labels | 1.375 |
| `base` | 1rem | 16px | Body text, buttons | 1.5 |
| `lg` | 1.125rem | 18px | Large body text | 1.5 |
| `xl` | 1.25rem | 20px | Small headings | 1.375 |
| `2xl` | 1.5rem | 24px | Section headings | 1.25 |
| `3xl` | 1.875rem | 30px | Page headings | 1.25 |
| `4xl` | 2.25rem | 36px | Large headings | 1.125 |
| `5xl` | 3rem | 48px | Hero titles | 1 |
| `6xl` | 3.75rem | 60px | Display text | 1 |

### Font Weights
| Name | Value | Usage |
|------|-------|-------|
| `light` | 300 | Decorative text |
| `regular` | 400 | Body text, default |
| `medium` | 500 | Emphasis, labels |
| `semibold` | 600 | Headings, buttons |
| `bold` | 700 | Strong emphasis |
| `extrabold` | 800 | Hero titles |

### Typography Guidelines

#### ✅ **DO**
- Use consistent line heights (1.5 for body, 1.25 for headings)
- Implement proper text hierarchy with size and weight
- Ensure adequate contrast ratios
- Use system fonts as fallbacks

#### ❌ **DON'T**
- Mix more than 3 font weights per page
- Use decorative fonts for body text
- Set line height below 1.2 for readability
- Use font sizes below 14px for body text

---

## 📏 **Spacing System**

### Base Unit: 4px Grid
All spacing values are multiples of 4px for visual consistency and easier mathematical calculations.

| Name | rem | px | Usage |
|------|-----|----|----- |
| `0` | 0 | 0px | No spacing |
| `px` | - | 1px | Borders, dividers |
| `0.5` | 0.125rem | 2px | Fine adjustments |
| `1` | 0.25rem | 4px | Tight spacing |
| `2` | 0.5rem | 8px | Component padding |
| `3` | 0.75rem | 12px | Small gaps |
| `4` | 1rem | 16px | Base unit |
| `5` | 1.25rem | 20px | Medium spacing |
| `6` | 1.5rem | 24px | Large spacing |
| `8` | 2rem | 32px | Section padding |
| `10` | 2.5rem | 40px | Large gaps |
| `12` | 3rem | 48px | Component spacing |
| `16` | 4rem | 64px | Section spacing |
| `20` | 5rem | 80px | Large sections |
| `24` | 6rem | 96px | Hero spacing |

### Spacing Guidelines

#### ✅ **DO**
- Use multiples of 4px for all spacing
- Maintain consistent spacing patterns
- Use larger spacing for section breaks
- Apply spacing tokens through CSS variables

#### ❌ **DON'T**
- Use arbitrary spacing values
- Create cramped interfaces with insufficient spacing
- Mix spacing systems within components

---

## 🧩 **Component Library**

### Button System

#### Primary Button
```css
.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  font-weight: var(--font-weight-medium);
  /* Accessible 44px minimum touch target */
  min-height: 44px;
}
```

#### Button Variants
| Variant | Usage | Visual Style |
|---------|-------|-------------|
| `primary` | Main CTAs | Orange background, white text |
| `secondary` | Secondary actions | White background, gray border |
| `outline` | Tertiary actions | Transparent background, orange border |
| `ghost` | Subtle actions | Transparent background, no border |
| `link` | Text links | No background, underlined |

#### Button Sizes
| Size | Padding | Min Height | Font Size |
|------|---------|-----------|-----------|
| `sm` | 8px 12px | 36px | 14px |
| `md` | 10px 16px | 44px | 16px |
| `lg` | 12px 24px | 52px | 18px |

### Form Elements

#### Input Fields
```css
.form-input {
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  /* Focus ring for accessibility */
  focus: {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px var(--color-primary-alpha);
  }
}
```

### Card Components

#### Base Card
```css
.card {
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
  transition: var(--transition-base);
}
```

#### Card Variants
- **Standard**: Basic card with subtle shadow
- **Elevated**: Increased shadow for emphasis
- **Featured**: Orange border with enhanced styling
- **Interactive**: Hover effects and transitions

---

## 📐 **Grid System**

### CSS Grid Architecture
The FrameX grid system uses modern CSS Grid for flexible, responsive layouts.

#### Base Grid Container
```css
.grid {
  display: grid;
  gap: var(--space-6);
  grid-template-columns: 1fr; /* Mobile first */
}
```

#### Responsive Grid Classes
| Breakpoint | Classes | Columns |
|------------|---------|---------|
| Mobile | `grid-1` | 1 column |
| Small | `sm:grid-2` | 2 columns |
| Medium | `md:grid-3` | 3 columns |
| Large | `lg:grid-4` | 4 columns |
| Extra Large | `xl:grid-6` | 6 columns |

#### Common Grid Patterns

##### Product Grid
- Mobile: 1 column
- Tablet: 2 columns  
- Desktop: 3-4 columns
- Large screens: 4 columns

##### Services Grid  
- Mobile: 1 column
- Tablet+: 2x2 grid

##### Article Grid
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

---

## 📱 **Responsive Breakpoints**

### Mobile-First Approach
All styles are written mobile-first, with progressive enhancement for larger screens.

| Name | Min Width | Target Devices | Container Width |
|------|-----------|----------------|----------------|
| `xs` | 0px | Mobile portrait | 100% |
| `sm` | 640px | Mobile landscape | 640px |
| `md` | 768px | Tablet portrait | 768px |
| `lg` | 1024px | Tablet landscape/Desktop | 1024px |
| `xl` | 1280px | Desktop | 1200px |
| `2xl` | 1536px | Large desktop | 1400px |

### Responsive Design Guidelines

#### ✅ **DO**
- Design for mobile first, enhance for desktop
- Test on real devices, not just browser resizing
- Use relative units (rem, %, vh/vw) appropriately
- Maintain readable text sizes across all breakpoints

#### ❌ **DON'T**
- Design desktop-first then try to fit mobile
- Use fixed pixel widths for responsive elements
- Ignore touch targets on mobile (44px minimum)
- Assume desktop patterns work on mobile

---

## 🛠 **Implementation Guidelines**

### CSS Architecture

#### File Organization
```
css/
├── design-system.css      # Design tokens & utilities
├── components.css         # Reusable components  
├── responsive-grid.css    # Grid system & responsive utilities
├── table-system.css       # Table components
└── pages/                 # Page-specific styles
    ├── home.css
    ├── products.css
    └── contact.css
```

#### CSS Naming Convention (BEM-inspired)
```css
/* Block */
.card { }

/* Block with modifier */  
.card-featured { }

/* Utility classes */
.text-center { }
.mb-4 { }
.grid-3 { }
```

### Performance Guidelines

#### ✅ **DO**
- Use CSS custom properties for dynamic values
- Minimize specificity conflicts
- Leverage utility classes for spacing/layout
- Use system fonts when possible

#### ❌ **DON'T**
- Use !important unless absolutely necessary
- Create deep nesting (max 3 levels)
- Load unused CSS frameworks
- Inline styles in HTML

### Accessibility Requirements

#### Color Contrast
- **Normal text**: 4.5:1 minimum ratio (AA)
- **Large text**: 3:1 minimum ratio (AA)  
- **Interactive elements**: 3:1 minimum ratio

#### Focus Management
```css
.btn:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

#### Screen Reader Support
- Use semantic HTML elements
- Provide alternative text for images
- Implement proper heading hierarchy
- Include skip navigation links

---

## 📊 **Component Usage Examples**

### Hero Section
```html
<section class="hero">
  <div class="container">
    <div class="hero-grid">
      <div class="hero-text">
        <h1 class="hero-title">Shaping Tomorrow's Living</h1>
        <p class="hero-subtitle">Smart prefabricated steel structures with IoT integration</p>
        <div class="hero-actions">
          <a href="#" class="btn btn-primary btn-lg">Explore Products</a>
          <a href="#" class="btn btn-outline btn-lg">Learn More</a>
        </div>
      </div>
      <div class="hero-visual">
        <img src="hero.jpg" alt="FrameX steel structure" class="hero-image">
      </div>
    </div>
  </div>
</section>
```

### Product Grid
```html
<section class="section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Our Products</h2>
      <p class="section-subtitle">Choose the perfect steel structure solution</p>
    </div>
    <div class="products-grid">
      <div class="product-card">
        <div class="product-header">
          <h3 class="product-title">FrameX Starter</h3>
          <div class="product-price">800M - 1.2B VND</div>
        </div>
        <ul class="product-features">
          <li>Standard steel structure</li>
          <li>Basic waterproofing</li>
          <li>15-year warranty</li>
        </ul>
        <div class="product-cta">
          <a href="#" class="btn btn-primary w-full">Learn More</a>
        </div>
      </div>
      <!-- More product cards... -->
    </div>
  </div>
</section>
```

### Comparison Table
```html
<div class="comparison-table-wrapper">
  <div class="fx-table-container">
    <table class="fx-table comparison-table">
      <thead>
        <tr>
          <th scope="col">Feature</th>
          <th scope="col">Starter</th>
          <th scope="col" class="featured-col">Smart</th>
          <th scope="col">Premium</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Area</th>
          <td>&lt;150m²</td>
          <td class="featured-col">&lt;225m²</td>
          <td>&gt;300m²</td>
        </tr>
        <!-- More rows... -->
      </tbody>
    </table>
  </div>
</div>
```

---

## 🔄 **Design System Evolution**

### Version Control
- **v2.0.0**: Complete redesign with unified architecture
- **v1.x**: Legacy system (deprecated)

### Future Enhancements
- Dark mode support
- Advanced animation system  
- Component state management
- Design token theming
- Enhanced accessibility features

### Maintenance Guidelines
- Review and update quarterly
- Validate accessibility compliance
- Monitor performance impact  
- Gather user feedback
- Document all changes

---

## 📞 **Support & Resources**

### Documentation Updates
This design system documentation should be updated whenever:
- New components are added
- Existing components are modified  
- Design tokens are changed
- New patterns are established

### Getting Help
- Review component examples in this document
- Check browser developer tools for implementation
- Test responsive behavior across devices
- Validate accessibility with screen readers

---

**Last Updated**: October 2025  
**Version**: 2.0.0  
**Maintainer**: FrameX Development Team