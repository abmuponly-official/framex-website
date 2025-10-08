# 🎨 FrameX Modern Product Comparison Design

## 🎯 DESIGN CONCEPT: CARD-BASED RESPONSIVE LAYOUT

**Replacing**: Traditional table format with poor mobile experience  
**With**: Modern card-based comparison system that adapts to all screen sizes  
**Maintains**: FrameX brand aesthetic, colors, typography, spacing  

---

## 🔍 CURRENT ISSUES ANALYSIS

### **❌ Problems with Existing Table:**
1. **Mobile Disaster**: Requires horizontal scrolling on phones  
2. **Visual Hierarchy**: No clear differentiation between tiers
3. **Accessibility**: Poor screen reader support
4. **Styling Conflicts**: 3 different CSS files override each other
5. **Content Inconsistency**: Vietnamese-only, no English version
6. **Technical Debt**: `all: revert` CSS causing layout issues

### **📱 Responsive Failures:**
- **iPhone 14 (390px)**: Table breaks, unreadable
- **iPad (768px)**: Cramped, poor touch targets  
- **Desktop (1280px)**: Excessive whitespace, poor proportion

---

## 🎨 NEW DESIGN SPECIFICATIONS

### **Visual Identity Alignment:**
- **Colors**: Primary Orange (#FF6B35), Black text, Light grays
- **Typography**: Inter font family, existing size scale
- **Spacing**: Consistent with site's spacing tokens  
- **Shadows**: Subtle elevation following site patterns
- **Animations**: Smooth micro-interactions on hover

### **Layout Strategy:**
```
Mobile (390px):   [Card 1]
                  [Card 2]  
                  [Card 3]

Tablet (768px):   [Card 1] [Card 2]
                  [Card 3] [Compare]

Desktop (1280px): [Card 1] [Card 2] [Card 3]
                  [      Compare All      ]
```

---

## 📋 COMPLETE NEW HTML STRUCTURE

```html
<!-- 🗑️ REMOVE ENTIRE OLD TABLE SECTION -->
<!-- DELETE: lines 250-325 in products.html -->

<!-- ✨ NEW MODERN COMPARISON SECTION -->
<section class="product-compare-section">
    <div class="container">
        <!-- Section Header -->
        <div class="compare-header">
            <h2 class="section-title" data-lang="compare-title">Product Comparison</h2>
            <p class="section-subtitle" data-lang="compare-subtitle">
                Choose the perfect FrameX solution for your project
            </p>
        </div>

        <!-- Comparison Mode Toggle -->
        <div class="compare-mode-toggle">
            <button class="mode-btn active" data-mode="cards" data-lang="view-cards">
                <i class="fas fa-th-large"></i>
                <span>Card View</span>
            </button>
            <button class="mode-btn" data-mode="table" data-lang="view-table">
                <i class="fas fa-table"></i>
                <span>Table View</span>
            </button>
        </div>

        <!-- Card-Based Comparison (Default View) -->
        <div class="compare-cards-container active" id="cards-view">
            <div class="product-compare-cards">
                
                <!-- STARTER Card -->
                <div class="compare-card" data-product="starter">
                    <div class="card-header">
                        <div class="product-badge badge-value" data-lang="starter-badge">Best Value</div>
                        <div class="product-icon">
                            <i class="fas fa-home"></i>
                        </div>
                        <h3 class="product-name">FrameX STARTER</h3>
                        <p class="product-tagline" data-lang="starter-tagline">Smart Beginning</p>
                        <div class="price-range">
                            <span class="price-label" data-lang="price-from">From</span>
                            <span class="price-value" data-lang="starter-price">Contact for Quote</span>
                        </div>
                    </div>
                    
                    <div class="card-content">
                        <div class="feature-group">
                            <h4 data-lang="suitable-area">Suitable Area</h4>
                            <p data-lang="starter-area">< 150 m² (single floor) or 50 m²/floor (2-3 floors)</p>
                        </div>
                        
                        <div class="feature-group">
                            <h4 data-lang="steel-structure">Steel Structure</h4>
                            <p data-lang="starter-structure">Standard</p>
                        </div>
                        
                        <div class="feature-group">
                            <h4 data-lang="waterproofing">Waterproofing</h4>
                            <p data-lang="starter-waterproof">Basic</p>
                        </div>
                        
                        <div class="feature-group">
                            <h4 data-lang="insulation">Thermal Insulation</h4>
                            <p data-lang="starter-insulation">Basic</p>
                        </div>
                        
                        <div class="feature-group">
                            <h4 data-lang="smart-home">Smart Home</h4>
                            <div class="feature-unavailable">
                                <i class="fas fa-times"></i>
                                <span data-lang="not-included">Not included</span>
                            </div>
                        </div>
                        
                        <div class="feature-group">
                            <h4 data-lang="fire-protection">Fire Protection</h4>
                            <div class="feature-unavailable">
                                <i class="fas fa-times"></i>
                                <span data-lang="not-included">Not included</span>
                            </div>
                        </div>
                        
                        <div class="feature-group">
                            <h4 data-lang="artistic-steel">Artistic Steel Details</h4>
                            <p data-lang="starter-artistic">Simple staircase</p>
                        </div>
                        
                        <div class="feature-group">
                            <h4 data-lang="warranty">Warranty</h4>
                            <p data-lang="starter-warranty">15 years</p>
                        </div>
                    </div>
                    
                    <div class="card-footer">
                        <a href="contact.html?product=starter" class="cta-button cta-primary">
                            <span data-lang="get-quote">Get Quote</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                        <a href="#" class="cta-button cta-secondary">
                            <i class="fas fa-download"></i>
                            <span data-lang="download-specs">Download Specs</span>
                        </a>
                    </div>
                </div>

                <!-- SMART Card (Featured) -->
                <div class="compare-card featured" data-product="smart">
                    <div class="card-header">
                        <div class="product-badge badge-popular" data-lang="smart-badge">Most Popular</div>
                        <div class="product-icon">
                            <i class="fas fa-house-user"></i>
                        </div>
                        <h3 class="product-name">FrameX SMART</h3>
                        <p class="product-tagline" data-lang="smart-tagline">Smart Sustainable Living</p>
                        <div class="price-range">
                            <span class="price-label" data-lang="price-from">From</span>
                            <span class="price-value" data-lang="smart-price">Contact for Quote</span>
                        </div>
                    </div>
                    
                    <div class="card-content">
                        <div class="feature-group">
                            <h4 data-lang="suitable-area">Suitable Area</h4>
                            <p data-lang="smart-area">< 225 m² (single floor) or 75 m²/floor (2-3 floors)</p>
                        </div>
                        
                        <div class="feature-group">
                            <h4 data-lang="steel-structure">Steel Structure</h4>
                            <p data-lang="smart-structure">Advanced, customizable on request</p>
                        </div>
                        
                        <div class="feature-group">
                            <h4 data-lang="waterproofing">Waterproofing</h4>
                            <p data-lang="smart-waterproof">Basic</p>
                        </div>
                        
                        <div class="feature-group">
                            <h4 data-lang="insulation">Thermal Insulation</h4>
                            <p data-lang="smart-insulation">Basic</p>
                        </div>
                        
                        <div class="feature-group">
                            <h4 data-lang="smart-home">Smart Home</h4>
                            <div class="feature-available">
                                <i class="fas fa-check"></i>
                                <div>
                                    <p data-lang="smart-features">Basic</p>
                                    <small data-lang="smart-details">Security, fire alarm, cameras, internet</small>
                                </div>
                            </div>
                        </div>
                        
                        <div class="feature-group">
                            <h4 data-lang="fire-protection">Fire Protection</h4>
                            <div class="feature-unavailable">
                                <i class="fas fa-times"></i>
                                <span data-lang="not-included">Not included</span>
                            </div>
                        </div>
                        
                        <div class="feature-group">
                            <h4 data-lang="artistic-steel">Artistic Steel Details</h4>
                            <p data-lang="smart-artistic">Simple staircase</p>
                        </div>
                        
                        <div class="feature-group">
                            <h4 data-lang="warranty">Warranty</h4>
                            <p data-lang="smart-warranty">15 years</p>
                        </div>
                    </div>
                    
                    <div class="card-footer">
                        <a href="contact.html?product=smart" class="cta-button cta-primary">
                            <span data-lang="get-quote">Get Quote</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                        <a href="#" class="cta-button cta-secondary">
                            <i class="fas fa-download"></i>
                            <span data-lang="download-specs">Download Specs</span>
                        </a>
                    </div>
                </div>

                <!-- PREMIUM Card -->
                <div class="compare-card" data-product="premium">
                    <div class="card-header">
                        <div class="product-badge badge-premium" data-lang="premium-badge">Premium Class</div>
                        <div class="product-icon">
                            <i class="fas fa-building"></i>
                        </div>
                        <h3 class="product-name">FrameX PREMIUM</h3>
                        <p class="product-tagline" data-lang="premium-tagline">Premium Architecture</p>
                        <div class="price-range">
                            <span class="price-label" data-lang="price-from">From</span>
                            <span class="price-value" data-lang="premium-price">Contact for Quote</span>
                        </div>
                    </div>
                    
                    <div class="card-content">
                        <div class="feature-group">
                            <h4 data-lang="suitable-area">Suitable Area</h4>
                            <p data-lang="premium-area">> 300 m² floor or > 150 m²/floor (2 floors)</p>
                        </div>
                        
                        <div class="feature-group">
                            <h4 data-lang="steel-structure">Steel Structure</h4>
                            <p data-lang="premium-structure">Premium, fully custom design</p>
                        </div>
                        
                        <div class="feature-group">
                            <h4 data-lang="waterproofing">Waterproofing</h4>
                            <p data-lang="premium-waterproof">Advanced</p>
                        </div>
                        
                        <div class="feature-group">
                            <h4 data-lang="insulation">Thermal Insulation</h4>
                            <p data-lang="premium-insulation">Advanced</p>
                        </div>
                        
                        <div class="feature-group">
                            <h4 data-lang="smart-home">Smart Home</h4>
                            <div class="feature-available">
                                <i class="fas fa-check"></i>
                                <div>
                                    <p data-lang="premium-smart">Advanced</p>
                                    <small data-lang="premium-smart-details">Custom requirements</small>
                                </div>
                            </div>
                        </div>
                        
                        <div class="feature-group">
                            <h4 data-lang="fire-protection">Fire Protection</h4>
                            <div class="feature-available">
                                <i class="fas fa-check"></i>
                                <p data-lang="premium-fire">Complete structural fire protection</p>
                            </div>
                        </div>
                        
                        <div class="feature-group">
                            <h4 data-lang="artistic-steel">Artistic Steel Details</h4>
                            <p data-lang="premium-artistic">Staircase + railings + special details</p>
                        </div>
                        
                        <div class="feature-group">
                            <h4 data-lang="warranty">Warranty</h4>
                            <p data-lang="premium-warranty">20 years</p>
                        </div>
                    </div>
                    
                    <div class="card-footer">
                        <a href="contact.html?product=premium" class="cta-button cta-primary">
                            <span data-lang="get-quote">Get Quote</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                        <a href="#" class="cta-button cta-secondary">
                            <i class="fas fa-download"></i>
                            <span data-lang="download-specs">Download Specs</span>
                        </a>
                    </div>
                </div>
                
            </div>
        </div>

        <!-- Traditional Table View (Alternative) -->
        <div class="compare-table-container" id="table-view">
            <div class="table-wrapper">
                <table class="modern-comparison-table" role="table" aria-label="Product comparison table">
                    <thead>
                        <tr>
                            <th scope="col" class="feature-col" data-lang="feature">Features</th>
                            <th scope="col" class="product-col" data-lang="starter-name">FrameX STARTER</th>
                            <th scope="col" class="product-col featured-col" data-lang="smart-name">FrameX SMART</th>
                            <th scope="col" class="product-col" data-lang="premium-name">FrameX PREMIUM</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" data-lang="suitable-area">Suitable Area</th>
                            <td data-lang="starter-area">< 150 m² (single floor)<br>or 50 m²/floor (2-3 floors)</td>
                            <td class="featured-col" data-lang="smart-area">< 225 m² (single floor)<br>or 75 m²/floor (2-3 floors)</td>
                            <td data-lang="premium-area">> 300 m² floor<br>or > 150 m²/floor (2 floors)</td>
                        </tr>
                        <tr>
                            <th scope="row" data-lang="steel-structure">Steel Structure</th>
                            <td data-lang="starter-structure">Standard</td>
                            <td class="featured-col" data-lang="smart-structure">Advanced, customizable on request</td>
                            <td data-lang="premium-structure">Premium, fully custom design</td>
                        </tr>
                        <tr>
                            <th scope="row" data-lang="smart-home">Smart Home Systems</th>
                            <td><span class="unavailable" data-lang="not-available">–</span></td>
                            <td class="featured-col" data-lang="smart-features">Basic<br><small data-lang="smart-details">(security, fire alarm, cameras, internet)</small></td>
                            <td data-lang="premium-smart">Advanced<br><small data-lang="premium-smart-details">custom requirements</small></td>
                        </tr>
                        <tr>
                            <th scope="row" data-lang="warranty">Warranty</th>
                            <td data-lang="starter-warranty">15 years</td>
                            <td class="featured-col" data-lang="smart-warranty">15 years</td>
                            <td data-lang="premium-warranty">20 years</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Comparison Summary -->
        <div class="comparison-summary">
            <div class="summary-card">
                <h3 data-lang="need-help">Need Help Choosing?</h3>
                <p data-lang="consult-text">Our experts can help you select the perfect FrameX solution for your specific requirements.</p>
                <a href="contact.html?intent=consultation" class="cta-button cta-primary">
                    <i class="fas fa-comments"></i>
                    <span data-lang="get-consultation">Get Free Consultation</span>
                </a>
            </div>
        </div>
    </div>
</section>
```

---

## 🎨 COMPLETE NEW CSS SYSTEM

**File**: `css/modern-product-comparison.css` (NEW FILE)

```css
/**
 * FrameX Modern Product Comparison System
 * Card-based responsive design aligned with brand aesthetic
 */

/* ========================================
   DESIGN TOKENS
   ======================================== */
:root {
    /* Product Comparison Colors */
    --compare-primary: #FF6B35;
    --compare-text: #111827;
    --compare-text-muted: #6B7280;
    --compare-surface: #FFFFFF;
    --compare-surface-alt: #F8FAFC;
    --compare-border: #E5E7EB;
    --compare-border-hover: #FF6B35;
    
    /* Badge Colors */
    --badge-value: #10B981;
    --badge-popular: #FF6B35;
    --badge-premium: #8B5CF6;
    
    /* Spacing */
    --compare-spacing-xs: 0.5rem;
    --compare-spacing-sm: 1rem;
    --compare-spacing-md: 1.5rem;
    --compare-spacing-lg: 2rem;
    --compare-spacing-xl: 3rem;
    
    /* Effects */
    --compare-radius: 12px;
    --compare-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --compare-shadow-hover: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
    --compare-transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ========================================
   SECTION LAYOUT
   ======================================== */
.product-compare-section {
    padding: var(--compare-spacing-xl) 0;
    background: linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%);
}

.compare-header {
    text-align: center;
    margin-bottom: var(--compare-spacing-xl);
}

.compare-header .section-title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    color: var(--compare-text);
    margin-bottom: var(--compare-spacing-sm);
    background: linear-gradient(135deg, var(--compare-text) 0%, var(--compare-primary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.compare-header .section-subtitle {
    font-size: 1.125rem;
    color: var(--compare-text-muted);
    max-width: 600px;
    margin: 0 auto;
}

/* ========================================
   MODE TOGGLE
   ======================================== */
.compare-mode-toggle {
    display: flex;
    justify-content: center;
    margin-bottom: var(--compare-spacing-lg);
    background: var(--compare-surface);
    border-radius: var(--compare-radius);
    padding: 4px;
    box-shadow: var(--compare-shadow);
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
}

.mode-btn {
    display: flex;
    align-items: center;
    gap: var(--compare-spacing-xs);
    padding: var(--compare-spacing-sm) var(--compare-spacing-md);
    border: none;
    background: transparent;
    border-radius: calc(var(--compare-radius) - 4px);
    cursor: pointer;
    transition: var(--compare-transition);
    font-weight: 500;
    color: var(--compare-text-muted);
}

.mode-btn.active {
    background: var(--compare-primary);
    color: white;
    transform: translateY(-1px);
}

.mode-btn:hover:not(.active) {
    background: var(--compare-surface-alt);
    color: var(--compare-text);
}

/* ========================================
   CARD-BASED LAYOUT
   ======================================== */
.compare-cards-container {
    opacity: 0;
    transform: translateY(20px);
    transition: var(--compare-transition);
}

.compare-cards-container.active {
    opacity: 1;
    transform: translateY(0);
}

.product-compare-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: var(--compare-spacing-lg);
    margin-bottom: var(--compare-spacing-xl);
}

/* ========================================
   COMPARISON CARDS
   ======================================== */
.compare-card {
    background: var(--compare-surface);
    border-radius: var(--compare-radius);
    box-shadow: var(--compare-shadow);
    overflow: hidden;
    transition: var(--compare-transition);
    border: 2px solid transparent;
    position: relative;
}

.compare-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--compare-shadow-hover);
    border-color: var(--compare-border-hover);
}

.compare-card.featured {
    border-color: var(--compare-primary);
    transform: scale(1.05);
}

.compare-card.featured:hover {
    transform: scale(1.05) translateY(-8px);
}

/* Card Header */
.card-header {
    padding: var(--compare-spacing-lg);
    text-align: center;
    background: linear-gradient(135deg, var(--compare-surface-alt) 0%, var(--compare-surface) 100%);
    position: relative;
}

.product-badge {
    position: absolute;
    top: var(--compare-spacing-sm);
    right: var(--compare-spacing-sm);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.badge-value {
    background: var(--badge-value);
    color: white;
}

.badge-popular {
    background: var(--badge-popular);
    color: white;
}

.badge-premium {
    background: var(--badge-premium);
    color: white;
}

.product-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--compare-primary), #E55A2B);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto var(--compare-spacing-sm);
    color: white;
    font-size: 1.5rem;
}

.product-name {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--compare-text);
    margin-bottom: var(--compare-spacing-xs);
}

.product-tagline {
    color: var(--compare-text-muted);
    margin-bottom: var(--compare-spacing-md);
    font-style: italic;
}

.price-range {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--compare-spacing-xs);
}

.price-label {
    font-size: 0.875rem;
    color: var(--compare-text-muted);
}

.price-value {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--compare-primary);
}

/* Card Content */
.card-content {
    padding: 0 var(--compare-spacing-lg) var(--compare-spacing-lg);
}

.feature-group {
    margin-bottom: var(--compare-spacing-md);
    padding-bottom: var(--compare-spacing-md);
    border-bottom: 1px solid var(--compare-border);
}

.feature-group:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
}

.feature-group h4 {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--compare-text);
    margin-bottom: var(--compare-spacing-xs);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.feature-group p {
    color: var(--compare-text-muted);
    margin: 0;
    line-height: 1.5;
}

.feature-available,
.feature-unavailable {
    display: flex;
    align-items: flex-start;
    gap: var(--compare-spacing-xs);
}

.feature-available i {
    color: var(--badge-value);
    margin-top: 2px;
}

.feature-unavailable i {
    color: #EF4444;
    margin-top: 2px;
}

.feature-available small,
.feature-unavailable small {
    display: block;
    color: var(--compare-text-muted);
    font-size: 0.75rem;
    margin-top: 2px;
}

/* Card Footer */
.card-footer {
    padding: var(--compare-spacing-lg);
    background: var(--compare-surface-alt);
    display: flex;
    flex-direction: column;
    gap: var(--compare-spacing-sm);
}

/* ========================================
   TABLE VIEW (Alternative)
   ======================================== */
.compare-table-container {
    opacity: 0;
    transform: translateY(20px);
    transition: var(--compare-transition);
    display: none;
}

.compare-table-container.active {
    opacity: 1;
    transform: translateY(0);
    display: block;
}

.table-wrapper {
    background: var(--compare-surface);
    border-radius: var(--compare-radius);
    box-shadow: var(--compare-shadow);
    overflow: hidden;
    overflow-x: auto;
}

.modern-comparison-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    font-size: 0.875rem;
}

.modern-comparison-table th,
.modern-comparison-table td {
    padding: var(--compare-spacing-md);
    text-align: left;
    border-bottom: 1px solid var(--compare-border);
}

.modern-comparison-table th {
    background: var(--compare-surface-alt);
    font-weight: 600;
    color: var(--compare-text);
}

.modern-comparison-table .featured-col {
    background: linear-gradient(135deg, rgba(255, 107, 53, 0.05), rgba(255, 107, 53, 0.1));
    position: relative;
}

.modern-comparison-table .featured-col::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--compare-primary);
}

/* ========================================
   COMPARISON SUMMARY
   ======================================== */
.comparison-summary {
    margin-top: var(--compare-spacing-xl);
}

.summary-card {
    background: var(--compare-surface);
    border-radius: var(--compare-radius);
    box-shadow: var(--compare-shadow);
    padding: var(--compare-spacing-xl);
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
}

.summary-card h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--compare-text);
    margin-bottom: var(--compare-spacing-sm);
}

.summary-card p {
    color: var(--compare-text-muted);
    margin-bottom: var(--compare-spacing-lg);
    line-height: 1.6;
}

/* ========================================
   RESPONSIVE DESIGN
   ======================================== */

/* Mobile (390px) */
@media screen and (max-width: 390px) {
    .product-compare-cards {
        grid-template-columns: 1fr;
        gap: var(--compare-spacing-md);
    }
    
    .compare-card.featured {
        transform: none;
    }
    
    .compare-card.featured:hover {
        transform: translateY(-4px);
    }
    
    .card-header {
        padding: var(--compare-spacing-md);
    }
    
    .card-content,
    .card-footer {
        padding: var(--compare-spacing-md);
    }
    
    .card-footer {
        gap: var(--compare-spacing-xs);
    }
    
    .mode-btn {
        padding: var(--compare-spacing-xs) var(--compare-spacing-sm);
        font-size: 0.875rem;
    }
    
    .modern-comparison-table {
        font-size: 0.75rem;
    }
    
    .modern-comparison-table th,
    .modern-comparison-table td {
        padding: var(--compare-spacing-sm);
    }
}

/* Tablet (768px) */
@media screen and (min-width: 391px) and (max-width: 768px) {
    .product-compare-cards {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .compare-card.featured {
        grid-column: 1 / -1;
        max-width: 400px;
        margin: 0 auto;
    }
}

/* iPad Pro (912px) */
@media screen and (min-width: 769px) and (max-width: 912px) {
    .product-compare-cards {
        grid-template-columns: repeat(3, 1fr);
    }
    
    .compare-card.featured {
        transform: scale(1.02);
    }
}

/* Desktop (1280px+) */
@media screen and (min-width: 1281px) {
    .product-compare-cards {
        grid-template-columns: repeat(3, 1fr);
        max-width: 1200px;
        margin: 0 auto;
    }
}

/* ========================================
   ACCESSIBILITY
   ======================================== */
@media (prefers-reduced-motion: reduce) {
    .compare-card,
    .compare-cards-container,
    .compare-table-container,
    .mode-btn {
        transition: none;
    }
    
    .compare-card:hover,
    .compare-card.featured:hover {
        transform: none;
    }
}

@media (prefers-contrast: high) {
    .compare-card {
        border: 2px solid var(--compare-text);
    }
    
    .product-badge {
        border: 1px solid;
    }
}

/* Focus management for keyboard users */
.compare-card:focus-within,
.mode-btn:focus-visible {
    outline: 2px solid var(--compare-primary);
    outline-offset: 2px;
}

/* ========================================
   PRINT STYLES
   ======================================== */
@media print {
    .product-compare-section {
        background: white;
        box-shadow: none;
    }
    
    .compare-mode-toggle,
    .card-footer {
        display: none;
    }
    
    .compare-card {
        break-inside: avoid;
        box-shadow: none;
        border: 1px solid #ccc;
    }
}
```

---

## 🔧 JAVASCRIPT FUNCTIONALITY

**File**: `js/modern-comparison.js` (NEW FILE)

```javascript
/**
 * Modern Product Comparison Functionality
 * Handles view switching and interactions
 */

'use strict';

class ProductComparison {
    constructor() {
        this.currentMode = 'cards';
        this.init();
    }

    init() {
        this.bindEvents();
        this.setInitialView();
    }

    bindEvents() {
        // Mode toggle buttons
        const modeButtons = document.querySelectorAll('.mode-btn');
        modeButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchMode(e.target.closest('.mode-btn').dataset.mode);
            });
        });

        // Card hover effects
        const compareCards = document.querySelectorAll('.compare-card');
        compareCards.forEach(card => {
            card.addEventListener('mouseenter', this.handleCardHover);
            card.addEventListener('mouseleave', this.handleCardLeave);
        });

        // Keyboard navigation
        document.addEventListener('keydown', this.handleKeyboard.bind(this));
    }

    switchMode(mode) {
        if (mode === this.currentMode) return;

        this.currentMode = mode;
        
        // Update button states
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === mode);
        });

        // Switch views
        const cardsView = document.getElementById('cards-view');
        const tableView = document.getElementById('table-view');

        if (mode === 'cards') {
            cardsView.classList.add('active');
            tableView.classList.remove('active');
        } else {
            tableView.classList.add('active');
            cardsView.classList.remove('active');
        }

        // Track analytics
        this.trackModeSwitch(mode);
    }

    setInitialView() {
        // Default to cards view
        document.getElementById('cards-view').classList.add('active');
        
        // Check for saved preference
        const savedMode = localStorage.getItem('framex-compare-mode');
        if (savedMode && savedMode !== 'cards') {
            this.switchMode(savedMode);
        }
    }

    handleCardHover(e) {
        const card = e.currentTarget;
        const productName = card.dataset.product;
        
        // Subtle highlight effect for related elements
        document.querySelectorAll(`[data-product="${productName}"]`).forEach(el => {
            el.classList.add('highlight');
        });
    }

    handleCardLeave(e) {
        // Remove all highlights
        document.querySelectorAll('.highlight').forEach(el => {
            el.classList.remove('highlight');
        });
    }

    handleKeyboard(e) {
        // Toggle view with 'T' key
        if (e.key.toLowerCase() === 't' && !e.ctrlKey && !e.metaKey) {
            const newMode = this.currentMode === 'cards' ? 'table' : 'cards';
            this.switchMode(newMode);
        }
    }

    trackModeSwitch(mode) {
        // Save preference
        localStorage.setItem('framex-compare-mode', mode);
        
        // Google Analytics (if available)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'comparison_view_change', {
                'view_type': mode,
                'page_title': document.title
            });
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ProductComparison();
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ProductComparison;
}
```

---

## 🌐 UPDATED TRANSLATIONS

**Add to `js/main.js` translations object:**

```javascript
// English translations (add to existing en object)
'compare-title': 'Product Comparison',
'compare-subtitle': 'Choose the perfect FrameX solution for your project',
'view-cards': 'Card View',
'view-table': 'Table View',
'starter-badge': 'Best Value',
'smart-badge': 'Most Popular',
'premium-badge': 'Premium Class',
'price-from': 'From',
'suitable-area': 'Suitable Area',
'steel-structure': 'Steel Structure',
'waterproofing': 'Waterproofing',
'insulation': 'Thermal Insulation',
'smart-home': 'Smart Home Systems',
'fire-protection': 'Fire Protection',
'artistic-steel': 'Artistic Steel Details',
'warranty': 'Warranty',
'not-included': 'Not included',
'not-available': '–',
'need-help': 'Need Help Choosing?',
'consult-text': 'Our experts can help you select the perfect FrameX solution for your specific requirements.',
'get-consultation': 'Get Free Consultation',

// Vietnamese translations (add to existing vi object)  
'compare-title': 'So Sánh Sản Phẩm',
'compare-subtitle': 'Chọn giải pháp FrameX hoàn hảo cho dự án của bạn',
'view-cards': 'Xem Thẻ',
'view-table': 'Xem Bảng',
'starter-badge': 'Giá Tốt Nhất',
'smart-badge': 'Phổ Biến Nhất',
'premium-badge': 'Hạng Premium',
'price-from': 'Từ',
'suitable-area': 'Diện Tích Phù Hợp',
'steel-structure': 'Kết Cấu Thép',
'waterproofing': 'Chống Thấm',
'insulation': 'Cách Nhiệt',
'smart-home': 'Hệ Thống Nhà Thông Minh',
'fire-protection': 'Chống Cháy',
'artistic-steel': 'Chi Tiết Thép Nghệ Thuật',
'warranty': 'Bảo Hành',
'not-included': 'Không có',
'not-available': '–',
'need-help': 'Cần Hỗ Trợ Lựa Chọn?',
'consult-text': 'Chuyên gia của chúng tôi có thể giúp bạn lựa chọn giải pháp FrameX hoàn hảo cho yêu cầu cụ thể của bạn.',
'get-consultation': 'Nhận Tư Vấn Miễn Phí'
```

---

## ✅ IMPLEMENTATION CHECKLIST

### **Phase 1: Remove Old System**
- [ ] **Delete lines 250-325** in `products.html` (old table)
- [ ] **Remove CSS files**: `comparison-table-redesign.css`, `vi-table-refinements.css`  
- [ ] **Clean up** old table references

### **Phase 2: Implement New Design**
- [ ] **Add new HTML** section to `products.html`
- [ ] **Create** `css/modern-product-comparison.css`
- [ ] **Create** `js/modern-comparison.js`
- [ ] **Update** translations in `js/main.js`

### **Phase 3: Integration**  
- [ ] **Link CSS** file in all HTML pages
- [ ] **Link JavaScript** file in `products.html`
- [ ] **Test** responsive behavior on all target viewports
- [ ] **Verify** accessibility compliance

### **Phase 4: Testing**
- [ ] **Visual regression** test across browsers
- [ ] **Keyboard navigation** testing
- [ ] **Screen reader** compatibility
- [ ] **Performance** impact assessment

**🎯 Result**: Modern, responsive, accessible product comparison that enhances user experience while maintaining FrameX brand consistency!**