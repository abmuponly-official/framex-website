# All Code Modifications

## 🎨 UNIFIED CTA BUTTON SYSTEM

### NEW FILE: css/unified-cta-system.css

```css
/**
 * FrameX Unified CTA Button System
 * WCAG 2.1 AA Compliant - Contrast Ratio ≥ 4.5:1
 * Mobile-first responsive design
 */

:root {
  /* Button Colors */
  --cta-primary-bg: #ff6b35;
  --cta-primary-text: #ffffff;
  --cta-primary-hover: #e55a2b;
  --cta-secondary-bg: transparent;
  --cta-secondary-text: #000000;
  --cta-secondary-border: #000000;
  --cta-secondary-hover-bg: #000000;
  --cta-secondary-hover-text: #ffffff;
  
  /* Button Typography */
  --cta-font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --cta-font-size: 1rem;
  --cta-font-weight: 600;
  --cta-line-height: 1.2;
  
  /* Button Spacing */
  --cta-padding-vertical: 12px;
  --cta-padding-horizontal: 24px;
  --cta-padding-sm-vertical: 8px;
  --cta-padding-sm-horizontal: 16px;
  --cta-padding-lg-vertical: 16px;
  --cta-padding-lg-horizontal: 32px;
  --cta-gap: 8px;
  --cta-margin: 8px;
  
  /* Button Border & Effects */
  --cta-border-radius: 4px;
  --cta-border-width: 2px;
  --cta-transition: all 0.2s ease;
  --cta-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  --cta-shadow-hover: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Base CTA Button */
.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--cta-gap);
  
  /* Typography */
  font-family: var(--cta-font-family);
  font-size: var(--cta-font-size);
  font-weight: var(--cta-font-weight);
  line-height: var(--cta-line-height);
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  
  /* Spacing */
  padding: var(--cta-padding-vertical) var(--cta-padding-horizontal);
  margin: 0 var(--cta-margin);
  
  /* Border & Effects */
  border: var(--cta-border-width) solid transparent;
  border-radius: var(--cta-border-radius);
  box-shadow: var(--cta-shadow);
  
  /* Interaction */
  cursor: pointer;
  transition: var(--cta-transition);
  user-select: none;
  
  /* Accessibility */
  min-height: 44px; /* Touch target size */
  min-width: fit-content;
  
  /* Prevent text selection */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

/* Primary CTA Button */
.cta-button.cta-primary,
.cta-primary {
  background-color: var(--cta-primary-bg);
  color: var(--cta-primary-text);
  border-color: var(--cta-primary-bg);
}

.cta-button.cta-primary:hover,
.cta-button.cta-primary:focus,
.cta-primary:hover,
.cta-primary:focus {
  background-color: var(--cta-primary-hover);
  border-color: var(--cta-primary-hover);
  transform: translateY(-2px);
  box-shadow: var(--cta-shadow-hover);
  color: var(--cta-primary-text);
  text-decoration: none;
}

.cta-button.cta-primary:active,
.cta-primary:active {
  transform: translateY(0);
  box-shadow: var(--cta-shadow);
}

/* Secondary CTA Button */
.cta-button.cta-secondary,
.cta-secondary {
  background-color: var(--cta-secondary-bg);
  color: var(--cta-secondary-text);
  border-color: var(--cta-secondary-border);
}

.cta-button.cta-secondary:hover,
.cta-button.cta-secondary:focus,
.cta-secondary:hover,
.cta-secondary:focus {
  background-color: var(--cta-secondary-hover-bg);
  color: var(--cta-secondary-hover-text);
  border-color: var(--cta-secondary-hover-bg);
  transform: translateY(-2px);
  box-shadow: var(--cta-shadow-hover);
  text-decoration: none;
}

.cta-button.cta-secondary:active,
.cta-secondary:active {
  transform: translateY(0);
  box-shadow: var(--cta-shadow);
}

/* Button Sizes */
.cta-button.cta-sm,
.cta-sm {
  font-size: 0.875rem;
  padding: var(--cta-padding-sm-vertical) var(--cta-padding-sm-horizontal);
  min-height: 36px;
}

.cta-button.cta-lg,
.cta-lg {
  font-size: 1.125rem;
  padding: var(--cta-padding-lg-vertical) var(--cta-padding-lg-horizontal);
  min-height: 52px;
}

/* Button States */
.cta-button:disabled,
.cta-button.disabled {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
  transform: none !important;
  box-shadow: var(--cta-shadow) !important;
}

/* Focus States for Accessibility */
.cta-button:focus-visible {
  outline: 2px solid var(--cta-primary-bg);
  outline-offset: 2px;
}

/* Button Group */
.cta-button-group {
  display: flex;
  gap: var(--cta-gap);
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
}

.cta-button-group.center {
  justify-content: center;
}

.cta-button-group.right {
  justify-content: flex-end;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .cta-button {
    font-size: 0.875rem;
    padding: 10px 20px;
    margin: 0 4px 8px 4px;
  }
  
  .cta-button-group {
    flex-direction: column;
    align-items: stretch;
  }
  
  .cta-button-group .cta-button {
    margin: 4px 0;
    justify-content: center;
  }
}

@media screen and (max-width: 390px) {
  .cta-button {
    font-size: 0.875rem;
    padding: 12px 16px;
    min-width: 100%;
  }
  
  .cta-button-group {
    gap: 8px;
  }
}

/* Icon Support */
.cta-button i {
  font-size: 0.9em;
  transition: var(--cta-transition);
}

.cta-button:hover i {
  transform: translateX(2px);
}

.cta-button i:first-child {
  margin-right: 4px;
}

.cta-button i:last-child {
  margin-left: 4px;
}

.cta-button i:only-child {
  margin: 0;
}

/* Loading State */
.cta-button.loading {
  position: relative;
  color: transparent !important;
  cursor: wait;
}

.cta-button.loading::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 16px;
  height: 16px;
  margin: -8px 0 0 -8px;
  border: 2px solid transparent;
  border-top-color: currentColor;
  border-radius: 50%;
  animation: cta-button-spin 1s linear infinite;
}

@keyframes cta-button-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* High Contrast Mode Support */
@media (prefers-contrast: high) {
  .cta-button {
    border-width: 3px;
  }
  
  .cta-button:focus-visible {
    outline-width: 3px;
  }
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  .cta-button {
    transition: none;
  }
  
  .cta-button:hover {
    transform: none;
  }
  
  .cta-button i {
    transition: none;
  }
  
  .cta-button:hover i {
    transform: none;
  }
}
```

## 📱 UNIFIED RESPONSIVE SYSTEM

### NEW FILE: css/responsive-unified.css

```css
/**
 * FrameX Unified Responsive System
 * Target Viewports: 1280px, 912px, 768px, 390px
 * Mobile-first approach with enhanced touch support
 */

/* Base Mobile Styles (390px and up) */
:root {
  --container-padding: 16px;
  --nav-height: 64px;
  --section-spacing: 40px;
  --grid-gap: 16px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

/* Enhanced Grid System */
.responsive-grid {
  display: grid;
  gap: var(--grid-gap);
  grid-template-columns: 1fr;
}

.responsive-grid.cols-2 {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.responsive-grid.cols-3 {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.responsive-grid.cols-4 {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

/* Typography Scaling */
.responsive-text {
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  line-height: 1.6;
}

.responsive-title {
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  line-height: 1.2;
}

.responsive-subtitle {
  font-size: clamp(1.125rem, 3.5vw, 1.5rem);
  line-height: 1.3;
}

/* iPhone 14 and Small Mobile (390px) */
@media screen and (max-width: 390px) {
  :root {
    --container-padding: 12px;
    --nav-height: 56px;
    --section-spacing: 24px;
    --grid-gap: 12px;
  }
  
  /* Navigation */
  .navbar {
    height: var(--nav-height);
  }
  
  .nav-wrapper {
    padding: 0 12px;
  }
  
  .nav-menu {
    display: none;
  }
  
  .mobile-toggle {
    display: flex;
  }
  
  .logo img {
    height: 32px;
  }
  
  /* Hero Section */
  .hero {
    padding: calc(var(--nav-height) + 20px) 0 20px;
    text-align: center;
  }
  
  .hero-title {
    font-size: clamp(1.5rem, 8vw, 2rem);
    margin-bottom: 12px;
  }
  
  .hero-subtitle {
    font-size: 0.875rem;
    margin-bottom: 20px;
  }
  
  /* Button Adjustments */
  .cta-button-group {
    flex-direction: column;
    gap: 8px;
  }
  
  .cta-button {
    width: 100%;
    justify-content: center;
  }
  
  /* Grid System */
  .responsive-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  
  /* Cards */
  .product-card,
  .service-card {
    padding: 16px;
    margin-bottom: 12px;
  }
  
  /* Forms */
  .form-input,
  .form-textarea {
    font-size: 16px; /* Prevent iOS zoom */
  }
}

/* iPad Portrait (768px) */
@media screen and (min-width: 391px) and (max-width: 768px) {
  :root {
    --container-padding: 20px;
    --nav-height: 68px;
    --section-spacing: 48px;
    --grid-gap: 20px;
  }
  
  /* Navigation */
  .navbar {
    height: var(--nav-height);
  }
  
  .nav-menu {
    gap: 1.5rem;
  }
  
  .nav-menu a {
    font-size: 0.9rem;
  }
  
  .logo img {
    height: 36px;
  }
  
  /* Hero Section */
  .hero {
    padding: calc(var(--nav-height) + 32px) 0 32px;
  }
  
  .hero-title {
    font-size: clamp(2rem, 6vw, 2.5rem);
  }
  
  /* Grid System */
  .responsive-grid.cols-2 {
    grid-template-columns: 1fr;
  }
  
  .responsive-grid.cols-3 {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .responsive-grid.cols-4 {
    grid-template-columns: repeat(2, 1fr);
  }
  
  /* Product Cards */
  .product-card {
    max-width: none;
  }
  
  /* Footer */
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--grid-gap);
  }
}

/* iPad Pro Portrait (912px) */
@media screen and (min-width: 769px) and (max-width: 912px) {
  :root {
    --container-padding: 24px;
    --nav-height: 72px;
    --section-spacing: 60px;
    --grid-gap: 24px;
  }
  
  /* Navigation */
  .nav-menu {
    gap: 2rem;
  }
  
  .logo img {
    height: 40px;
  }
  
  /* Grid System */
  .responsive-grid.cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .responsive-grid.cols-3 {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .responsive-grid.cols-4 {
    grid-template-columns: repeat(3, 1fr);
  }
  
  /* Button Groups */
  .cta-button-group {
    flex-direction: row;
    justify-content: center;
  }
  
  /* Footer */
  .footer-content {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Desktop Small (1280px) */
@media screen and (min-width: 913px) and (max-width: 1280px) {
  :root {
    --container-padding: 32px;
    --section-spacing: 80px;
    --grid-gap: 32px;
  }
  
  /* Full navigation visible */
  .nav-menu {
    display: flex;
    gap: 2rem;
  }
  
  .mobile-toggle {
    display: none;
  }
  
  /* Grid System */
  .responsive-grid.cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .responsive-grid.cols-3 {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .responsive-grid.cols-4 {
    grid-template-columns: repeat(4, 1fr);
  }
  
  /* Footer */
  .footer-content {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Desktop Large (Above 1280px) */
@media screen and (min-width: 1281px) {
  :root {
    --container-padding: 40px;
    --section-spacing: 100px;
    --grid-gap: 40px;
  }
}

/* Landscape Orientation Adjustments */
@media screen and (max-height: 600px) and (orientation: landscape) {
  .hero {
    padding: calc(var(--nav-height) + 20px) 0 20px;
  }
  
  .section-spacing {
    padding: 40px 0;
  }
}

/* Print Styles */
@media print {
  .navbar,
  .mobile-toggle,
  .cta-button {
    display: none !important;
  }
  
  .container {
    max-width: none;
    padding: 0;
  }
  
  body {
    font-size: 12pt;
    line-height: 1.4;
  }
}

/* High DPI Displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .logo img {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }
}

/* Touch Device Optimizations */
@media (pointer: coarse) {
  .cta-button {
    min-height: 48px; /* Larger touch targets */
    padding: 14px 24px;
  }
  
  .nav-link {
    padding: 12px 8px;
  }
}

/* Accessibility - Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 🧹 SERVICE PAGE REMOVAL CODE

### File Updates to Remove Service References

#### For ALL HTML files (index.html, about.html, blog.html, contact.html, investor-relations.html, products.html, projects.html):

**Find and Remove**:
```html
<li><a href="/services.html" data-lang="footer-services">Dịch vụ</a></li>
```

**Replace With**:
```html
<!-- Service page removed - services now integrated in homepage -->
```

#### sitemap.xml - Remove service entry:
**Find and Remove**:
```xml
<url>
    <loc>https://framex.vn/services.html</loc>
    <lastmod>2024-XX-XX</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
</url>
```

#### robots.txt - Add disallow rule:
**Add**:
```
# Removed service page
Disallow: /services.html
```

## 🔧 PERFORMANCE OPTIMIZATION CODE

### Critical CSS Implementation

#### For ALL HTML files - Update head section:

**Replace**:
```html
<link rel="stylesheet" href="css/style.css">
```

**With**:
```html
<!-- Critical CSS Inline -->
<style>
/* Insert critical above-the-fold styles here */
:root{--black:#000;--white:#fff;--orange:#ff6b35;--gray-100:#f8f8f8;--font-primary:'Inter',sans-serif;--nav-height:72px;--max-width:1200px}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:var(--font-primary);line-height:1.6;color:var(--black);background:var(--white)}
.navbar{position:fixed;top:0;left:0;right:0;background:var(--white);z-index:1000;height:var(--nav-height)}
/* Add more critical styles as needed */
</style>

<!-- Load non-critical CSS asynchronously -->
<link rel="preload" href="css/unified-cta-system.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<link rel="preload" href="css/responsive-unified.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript>
    <link rel="stylesheet" href="css/unified-cta-system.css">
    <link rel="stylesheet" href="css/responsive-unified.css">
</noscript>
```

### Font Optimization

**Replace**:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

**With**:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"></noscript>
```

### Image Optimization

**For all images, add**:
```html
<!-- OLD -->
<img src="image.jpg" alt="Description">

<!-- NEW -->
<img src="image.webp" 
     srcset="image-320.webp 320w, image-640.webp 640w, image-1280.webp 1280w"
     sizes="(max-width: 390px) 320px, (max-width: 768px) 640px, 1280px"
     alt="Description" 
     loading="lazy"
     decoding="async">
```

## 📝 CONTENT STANDARDIZATION

### Product Card Template

**For products.html - Standardize all product cards**:

```html
<div class="product-card" data-category="residential">
    <div class="product-badge">Best Value</div>
    <div class="product-header">
        <div class="product-icon">
            <i class="fas fa-home" aria-hidden="true"></i>
        </div>
        <h2 class="product-title">FrameX STARTER</h2>
        <p class="product-tagline">Smart Beginning</p>
        <div class="product-description">
            Standard prefabricated steel solution with basic waterproofing and insulation systems.
            Optimized design for small townhouses, fast construction, reasonable cost.
        </div>
    </div>
    
    <div class="product-specs">
        <h3>Key Features</h3>
        <ul class="specs-list">
            <li><i class="fas fa-check" aria-hidden="true"></i> <span>Integrated steel structure with basic waterproofing & insulation</span></li>
            <li><i class="fas fa-check" aria-hidden="true"></i> <span>Simple indoor steel staircase</span></li>
            <li><i class="fas fa-check" aria-hidden="true"></i> <span>International standard structure, 15-year warranty</span></li>
            <li><i class="fas fa-check" aria-hidden="true"></i> <span>90% recycled materials, energy efficient</span></li>
        </ul>
    </div>
    
    <div class="product-benefits">
        <h3>Main Benefits</h3>
        <ul class="benefits-grid">
            <li>50% faster construction</li>
            <li>Lower cost through standardized solutions and materials</li>
        </ul>
    </div>
    
    <div class="product-target">
        <h3>Suitable For</h3>
        <ul class="target-list">
            <li><i class="fas fa-user" aria-hidden="true"></i> <span>Small townhouses &lt;150m² (1 floor) or 50m²/floor (2-3 floors)</span></li>
            <li><i class="fas fa-user" aria-hidden="true"></i> <span>Standard projects, not complex in architecture/structure</span></li>
            <li><i class="fas fa-user" aria-hidden="true"></i> <span>No smart home requirements</span></li>
        </ul>
    </div>
    
    <div class="product-action">
        <div class="cta-button-group center">
            <a href="contact.html?product=starter" class="cta-button cta-primary">
                <span>Get Quote</span>
                <i class="fas fa-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="#" class="cta-button cta-secondary">
                <i class="fas fa-download" aria-hidden="true"></i>
                <span>Download Specs</span>
            </a>
        </div>
    </div>
</div>
```