# 📊 FRAMEX WEBSITE ANALYSIS & NEW PRODUCT STRATEGY IMPLEMENTATION

## 🔍 PHẦN 1: PHÂN TÍCH WEBSITE HIỆN TẠI

### A. CẤU TRÚC HIỆN TẠI

#### 1. Navigation Structure
- **Main Menu**: Home | Products | Services | Projects | Blog | About | Contact
- **Language Switch**: EN/VN
- **Mobile**: Responsive với hamburger menu

#### 2. Content Sections Hiện Tại
1. **Hero Section**
   - Title: "Shaping Tomorrow's Living"
   - Subtitle: Nhấn mạnh công nghệ tiền chế thông minh
   - CTA: "Explore Products" & "Get Quote"

2. **Value Propositions** (4 điểm mạnh)
   - Fast Construction (50% faster)
   - Smart Integration
   - Sustainable
   - Durable & Safe

3. **Product Range** (Cũ - Cần thay đổi hoàn toàn)
   - FrameX Starter (800M - 1.2B VND)
   - FrameX Family (1.5B - 2.5B VND)
   - FrameX Custom (3B+ VND)

4. **Services Section**
   - Design & Planning
   - Manufacturing
   - Installation
   - Smart Integration

5. **Technology Section**
   - Features list
   - Smart home capabilities

6. **CTA Section**
   - Generic messaging
   - Single CTA button

### B. ĐÁNH GIÁ UX/UI HIỆN TẠI

#### Điểm Mạnh ✅
- Clean, minimalist design
- Good typography hierarchy
- Responsive layout
- Fast loading (đã tối ưu)
- PWA ready

#### Điểm Yếu ❌
- Product differentiation không rõ ràng
- Thiếu comparison table
- No clear customer journey
- Generic messaging cho tất cả segments
- Weak conversion funnel
- No social proof/testimonials
- Missing pricing calculator

## 🎯 PHẦN 2: GAP ANALYSIS - CHIẾN LƯỢC MỚI VS HIỆN TẠI

### GAPS CẦN GIẢI QUYẾT

| Aspect | Hiện Tại | Cần Có (Chiến Lược Mới) | Gap |
|--------|---------|-------------------------|-----|
| **Product Lines** | 3 lines không rõ ràng | 3 lines với positioning rõ ràng: STARTER, SMART, PREMIUM | Cần redefine hoàn toàn |
| **Target Segments** | Generic cho tất cả | Specific cho từng segment | Thiếu customer personas |
| **Messaging** | Một message chung | Message riêng cho từng dòng | Cần 3 value props riêng |
| **Pricing Strategy** | Range pricing | Fixed m² (STARTER), Package (SMART), Custom (PREMIUM) | Cần pricing calculator |
| **Smart Features** | Vague "IoT-ready" | Clear differentiation: None/Basic/Advanced | Cần feature matrix |
| **Customer Journey** | Single path | 3 distinct paths | Thiếu journey mapping |
| **Visual Hierarchy** | Equal weight | Progressive complexity | Cần redesign layout |
| **Social Proof** | Missing | Case studies per segment | Cần thêm testimonials |

## 🚀 PHẦN 3: ĐỀ XUẤT CẬP NHẬT WEBSITE

### A. NEW HERO SECTION

```html
<!-- Hero Section Mới -->
<section class="hero-new">
  <div class="hero-content">
    <h1>Định Hình Không Gian Sống <span class="highlight">Trong 30-90 Ngày</span></h1>
    <p class="hero-subtitle">
      3 Giải pháp nhà thép tiền chế - Từ cơ bản đến cao cấp
      <br>Phù hợp mọi ngân sách, mọi phong cách sống
    </p>
    
    <!-- 3 Quick CTAs -->
    <div class="hero-cta-grid">
      <button class="cta-starter">
        <span class="price">Từ 8tr/m²</span>
        <span class="label">Nhà trong 30 ngày</span>
      </button>
      <button class="cta-smart">
        <span class="price">Từ 12tr/m²</span>
        <span class="label">Nhà thông minh</span>
      </button>
      <button class="cta-premium">
        <span class="price">Theo yêu cầu</span>
        <span class="label">Kiến trúc độc quyền</span>
      </button>
    </div>
    
    <!-- Trust Indicators -->
    <div class="hero-trust">
      <span>✓ 100+ dự án hoàn thành</span>
      <span>✓ Bảo hành 50 năm</span>
      <span>✓ Thi công toàn quốc</span>
    </div>
  </div>
</section>
```

### B. NEW PRODUCT SECTION - 3 DÒNG SẢN PHẨM

```html
<!-- New Product Lines Section -->
<section class="products-new">
  <div class="container">
    <h2 class="section-title">Chọn Giải Pháp Phù Hợp Với Bạn</h2>
    
    <!-- Product Cards -->
    <div class="product-grid">
      
      <!-- STARTER -->
      <div class="product-card starter">
        <div class="badge">Phổ biến nhất</div>
        <h3>FrameX STARTER</h3>
        <p class="tagline">"Khởi đầu thông minh"</p>
        
        <div class="price">
          <span class="from">Từ</span>
          <span class="amount">8tr</span>
          <span class="unit">/m²</span>
        </div>
        
        <ul class="features">
          <li>✓ Nhà <150m² (1 tầng) hoặc 50m²/tầng (2-3 tầng)</li>
          <li>✓ Kết cấu thép tiêu chuẩn hóa</li>
          <li>✓ Cách nhiệt & chống thấm cơ bản</li>
          <li>✓ Hoàn thiện trong 30 ngày</li>
          <li>✓ 90% vật liệu tái chế</li>
          <li class="not-included">✗ Không có smart features</li>
        </ul>
        
        <div class="ideal-for">
          <strong>Lý tưởng cho:</strong>
          <p>Nhà phố nhỏ, nhà cho thuê, văn phòng</p>
        </div>
        
        <button class="btn btn-starter">
          Xem Mẫu Nhà & Báo Giá
        </button>
      </div>
      
      <!-- SMART -->
      <div class="product-card smart featured">
        <div class="badge">Giá trị tốt nhất</div>
        <h3>FrameX SMART</h3>
        <p class="tagline">"Sống thông minh bền vững"</p>
        
        <div class="price">
          <span class="from">Từ</span>
          <span class="amount">12tr</span>
          <span class="unit">/m²</span>
        </div>
        
        <ul class="features">
          <li>✓ Nhà <225m² (1 tầng) hoặc 75m²/tầng (2-3 tầng)</li>
          <li>✓ Toàn bộ tính năng STARTER</li>
          <li>✓ Thiết kế tùy biến linh hoạt</li>
          <li>✓ Smart Security: Camera, báo động, báo cháy</li>
          <li>✓ Internet & Smart home ready</li>
          <li>✓ Hoàn thiện trong 45-60 ngày</li>
        </ul>
        
        <div class="ideal-for">
          <strong>Lý tưởng cho:</strong>
          <p>Villa gia đình, nhà ở hiện đại</p>
        </div>
        
        <button class="btn btn-smart">
          Tư Vấn Thiết Kế Miễn Phí
        </button>
      </div>
      
      <!-- PREMIUM -->
      <div class="product-card premium">
        <div class="badge">Cao cấp</div>
        <h3>FrameX PREMIUM</h3>
        <p class="tagline">"Kiến trúc đẳng cấp"</p>
        
        <div class="price">
          <span class="from">Giá</span>
          <span class="amount">Theo dự án</span>
        </div>
        
        <ul class="features">
          <li>✓ Nhà >300m² sàn, >150m²/tầng</li>
          <li>✓ Toàn bộ tính năng SMART nâng cao</li>
          <li>✓ Thiết kế độc quyền bởi kiến trúc sư</li>
          <li>✓ Thép nghệ thuật & chống cháy</li>
          <li>✓ Smart home tùy biến không giới hạn</li>
          <li>✓ White-glove service</li>
        </ul>
        
        <div class="ideal-for">
          <strong>Lý tưởng cho:</strong>
          <p>Biệt thự cao cấp, công trình nghệ thuật</p>
        </div>
        
        <button class="btn btn-premium">
          Đặt Lịch Tư Vấn VIP
        </button>
      </div>
    </div>
  </div>
</section>
```

### C. COMPARISON TABLE

```html
<section class="comparison">
  <div class="container">
    <h2>So Sánh Chi Tiết 3 Dòng Sản Phẩm</h2>
    
    <table class="comparison-table">
      <thead>
        <tr>
          <th>Tính năng</th>
          <th class="starter">STARTER</th>
          <th class="smart featured">SMART</th>
          <th class="premium">PREMIUM</th>
        </tr>
      </thead>
      <tbody>
        <tr class="category">
          <td colspan="4">THÔNG SỐ CƠ BẢN</td>
        </tr>
        <tr>
          <td>Diện tích tối đa</td>
          <td><150m²</td>
          <td><225m²</td>
          <td>Không giới hạn</td>
        </tr>
        <tr>
          <td>Thời gian thi công</td>
          <td>30 ngày</td>
          <td>45-60 ngày</td>
          <td>60-90 ngày</td>
        </tr>
        <tr>
          <td>Giá/m²</td>
          <td>8-10 triệu</td>
          <td>12-15 triệu</td>
          <td>Theo dự án</td>
        </tr>
        
        <tr class="category">
          <td colspan="4">KẾT CẤU & VẬT LIỆU</td>
        </tr>
        <tr>
          <td>Kết cấu thép</td>
          <td>✓ Tiêu chuẩn</td>
          <td>✓ Tùy biến</td>
          <td>✓ Độc quyền</td>
        </tr>
        <tr>
          <td>Cách nhiệt</td>
          <td>✓ Cơ bản</td>
          <td>✓ Nâng cao</td>
          <td>✓ Premium</td>
        </tr>
        <tr>
          <td>Chống thấm</td>
          <td>✓ Cơ bản</td>
          <td>✓ Nâng cao</td>
          <td>✓ Tuyệt đối</td>
        </tr>
        <tr>
          <td>Chống cháy kết cấu</td>
          <td>✗</td>
          <td>✗</td>
          <td>✓</td>
        </tr>
        
        <tr class="category">
          <td colspan="4">SMART FEATURES</td>
        </tr>
        <tr>
          <td>Camera an ninh</td>
          <td>✗</td>
          <td>✓ 4-8 cameras</td>
          <td>✓ Unlimited</td>
        </tr>
        <tr>
          <td>Báo động & báo cháy</td>
          <td>✗</td>
          <td>✓</td>
          <td>✓ Advanced</td>
        </tr>
        <tr>
          <td>Smart home ready</td>
          <td>✗</td>
          <td>✓ Basic</td>
          <td>✓ Full custom</td>
        </tr>
        <tr>
          <td>Internet infrastructure</td>
          <td>✗</td>
          <td>✓</td>
          <td>✓ Enterprise</td>
        </tr>
        
        <tr class="category">
          <td colspan="4">DỊCH VỤ</td>
        </tr>
        <tr>
          <td>Thiết kế</td>
          <td>Mẫu có sẵn</td>
          <td>Tùy biến từ mẫu</td>
          <td>Độc quyền 100%</td>
        </tr>
        <tr>
          <td>Bảo hành</td>
          <td>10 năm</td>
          <td>15 năm</td>
          <td>20 năm</td>
        </tr>
        <tr>
          <td>Hỗ trợ sau bán</td>
          <td>Standard</td>
          <td>Priority</td>
          <td>VIP 24/7</td>
        </tr>
      </tbody>
    </table>
    
    <div class="table-cta">
      <button class="btn btn-primary">Tải Bảng So Sánh PDF</button>
      <button class="btn btn-outline">Tư Vấn Chọn Gói Phù Hợp</button>
    </div>
  </div>
</section>
```

### D. CUSTOMER JOURNEY SECTION

```html
<section class="customer-journey">
  <div class="container">
    <h2>Hành Trình Xây Nhà Cùng FrameX</h2>
    
    <!-- Journey Tabs -->
    <div class="journey-tabs">
      <button class="tab active" data-journey="starter">
        <span class="icon">🏠</span>
        Journey STARTER
      </button>
      <button class="tab" data-journey="smart">
        <span class="icon">🏡</span>
        Journey SMART
      </button>
      <button class="tab" data-journey="premium">
        <span class="icon">🏰</span>
        Journey PREMIUM
      </button>
    </div>
    
    <!-- Journey Content -->
    <div class="journey-content">
      
      <!-- STARTER Journey -->
      <div class="journey-path active" id="journey-starter">
        <div class="timeline">
          <div class="step">
            <span class="day">Ngày 1</span>
            <h4>Chọn Mẫu Nhà</h4>
            <p>Chọn từ 10+ mẫu thiết kế chuẩn</p>
          </div>
          <div class="step">
            <span class="day">Ngày 2-3</span>
            <h4>Ký Hợp Đồng</h4>
            <p>Giá cố định theo m², thanh toán 3 đợt</p>
          </div>
          <div class="step">
            <span class="day">Ngày 4-10</span>
            <h4>Sản Xuất</h4>
            <p>Chế tạo cấu kiện tại nhà máy</p>
          </div>
          <div class="step">
            <span class="day">Ngày 11-25</span>
            <h4>Lắp Dựng</h4>
            <p>Lắp ráp nhanh tại công trường</p>
          </div>
          <div class="step">
            <span class="day">Ngày 26-30</span>
            <h4>Hoàn Thiện</h4>
            <p>Nghiệm thu và bàn giao</p>
          </div>
        </div>
        <div class="journey-cta">
          <button class="btn">Bắt Đầu Với STARTER</button>
        </div>
      </div>
      
      <!-- SMART Journey -->
      <div class="journey-path" id="journey-smart">
        <div class="timeline">
          <div class="step">
            <span class="day">Tuần 1</span>
            <h4>Tư Vấn & Thiết Kế</h4>
            <p>Gặp kiến trúc sư, tùy biến thiết kế</p>
          </div>
          <div class="step">
            <span class="day">Tuần 2</span>
            <h4>Finalize & Ký HĐ</h4>
            <p>Xác nhận thiết kế, chọn gói smart</p>
          </div>
          <div class="step">
            <span class="day">Tuần 3-4</span>
            <h4>Sản Xuất Custom</h4>
            <p>Chế tạo theo thiết kế riêng</p>
          </div>
          <div class="step">
            <span class="day">Tuần 5-7</span>
            <h4>Lắp Dựng & Smart</h4>
            <p>Lắp ráp + cài đặt hệ thống thông minh</p>
          </div>
          <div class="step">
            <span class="day">Tuần 8</span>
            <h4>Testing & Bàn Giao</h4>
            <p>Test smart systems, training, handover</p>
          </div>
        </div>
        <div class="journey-cta">
          <button class="btn">Tư Vấn SMART Miễn Phí</button>
        </div>
      </div>
      
      <!-- PREMIUM Journey -->
      <div class="journey-path" id="journey-premium">
        <div class="timeline">
          <div class="step">
            <span class="day">Tháng 1</span>
            <h4>Concept Development</h4>
            <p>Brainstorm với đội ngũ kiến trúc sư hàng đầu</p>
          </div>
          <div class="step">
            <span class="day">Tháng 2</span>
            <h4>Design Refinement</h4>
            <p>3D visualization, VR walkthrough</p>
          </div>
          <div class="step">
            <span class="day">Tháng 3</span>
            <h4>Premium Manufacturing</h4>
            <p>Chế tạo với vật liệu cao cấp nhất</p>
          </div>
          <div class="step">
            <span class="day">Tháng 4-5</span>
            <h4>Precision Assembly</h4>
            <p>Lắp ráp tỉ mỉ từng chi tiết</p>
          </div>
          <div class="step">
            <span class="day">Tháng 6</span>
            <h4>White Glove Handover</h4>
            <p>Bàn giao với dịch vụ VIP aftercare</p>
          </div>
        </div>
        <div class="journey-cta">
          <button class="btn">Đặt Lịch Tư Vấn VIP</button>
        </div>
      </div>
    </div>
  </div>
</section>
```

### E. CONVERSION OPTIMIZATION

#### 1. Floating Price Calculator
```html
<div class="floating-calculator">
  <button class="calc-toggle">
    <span class="icon">🧮</span>
    <span class="text">Tính giá nhanh</span>
  </button>
  
  <div class="calc-panel">
    <h3>Ước Tính Chi Phí</h3>
    <form>
      <select name="product-line">
        <option>Chọn dòng sản phẩm</option>
        <option value="starter">STARTER (8-10tr/m²)</option>
        <option value="smart">SMART (12-15tr/m²)</option>
        <option value="premium">PREMIUM (Báo giá riêng)</option>
      </select>
      
      <input type="number" placeholder="Diện tích (m²)" min="50" max="500">
      
      <select name="floors">
        <option>Số tầng</option>
        <option>1 tầng</option>
        <option>2 tầng</option>
        <option>3 tầng</option>
      </select>
      
      <div class="calc-result">
        <span class="label">Ước tính:</span>
        <span class="amount">---</span>
      </div>
      
      <button type="submit" class="btn">Nhận Báo Giá Chi Tiết</button>
    </form>
  </div>
</div>
```

#### 2. Exit Intent Popup
```html
<div class="exit-popup" id="exitPopup">
  <div class="popup-content">
    <button class="close">×</button>
    <h2>Đừng Bỏ Lỡ!</h2>
    <p>Nhận ngay catalogue và bảng giá mới nhất</p>
    
    <div class="product-selector">
      <label>
        <input type="checkbox" value="starter"> STARTER Catalogue
      </label>
      <label>
        <input type="checkbox" value="smart"> SMART Catalogue
      </label>
      <label>
        <input type="checkbox" value="premium"> PREMIUM Portfolio
      </label>
    </div>
    
    <form>
      <input type="email" placeholder="Email của bạn" required>
      <input type="tel" placeholder="Số điện thoại" required>
      <button type="submit" class="btn">Nhận Ngay</button>
    </form>
  </div>
</div>
```

### F. MOBILE OPTIMIZATION

```css
/* Mobile-First Approach cho Product Cards */
@media (max-width: 768px) {
  .product-grid {
    display: block;
  }
  
  .product-card {
    margin-bottom: 2rem;
    position: relative;
  }
  
  /* Sticky CTAs on Mobile */
  .product-card .btn {
    position: sticky;
    bottom: 0;
    width: 100%;
    z-index: 10;
  }
  
  /* Swipeable Product Comparison */
  .comparison-table {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  
  /* Collapsible Journey Steps */
  .journey-path .timeline {
    display: block;
  }
  
  .journey-path .step {
    margin-bottom: 1rem;
    padding: 1rem;
    border-left: 3px solid var(--orange);
  }
}

/* Progressive Disclosure Pattern */
.product-card .features {
  max-height: 200px;
  overflow: hidden;
  position: relative;
}

.product-card .features.expanded {
  max-height: none;
}

.product-card .show-more {
  background: linear-gradient(transparent, white);
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 2rem 0 0.5rem;
}
```

## 🎨 PHẦN 4: VISUAL DESIGN RECOMMENDATIONS

### A. COLOR CODING CHO 3 DÒNG SẢN PHẨM
```css
:root {
  /* STARTER - Xanh dương (Trust, Stability) */
  --starter-primary: #2563eb;
  --starter-light: #dbeafe;
  --starter-dark: #1e40af;
  
  /* SMART - Xanh lá (Growth, Innovation) */
  --smart-primary: #16a34a;
  --smart-light: #dcfce7;
  --smart-dark: #15803d;
  
  /* PREMIUM - Vàng đồng (Luxury, Exclusivity) */
  --premium-primary: #d97706;
  --premium-light: #fef3c7;
  --premium-dark: #92400e;
}
```

### B. TYPOGRAPHY HIERARCHY
```css
/* Product Line Specific Typography */
.starter h3 { 
  font-weight: 500; 
  letter-spacing: 0;
}

.smart h3 { 
  font-weight: 600; 
  letter-spacing: -0.5px;
}

.premium h3 { 
  font-weight: 700; 
  letter-spacing: 1px;
  text-transform: uppercase;
}
```

## 📊 PHẦN 5: SEO & PERFORMANCE OPTIMIZATION

### A. SEO RECOMMENDATIONS

#### 1. URL Structure
```
/nha-thep-tien-che-starter/     → STARTER landing
/nha-thong-minh-smart/          → SMART landing  
/biet-thu-cao-cap-premium/      → PREMIUM landing
/so-sanh-dong-san-pham/         → Comparison page
/tinh-gia-nhanh/                → Calculator page
```

#### 2. Meta Tags Per Product Line
```html
<!-- STARTER -->
<meta name="description" content="Nhà thép tiền chế FrameX STARTER - Chỉ từ 8tr/m², hoàn thiện trong 30 ngày. Giải pháp nhà ở giá rẻ, chất lượng cao.">

<!-- SMART -->
<meta name="description" content="FrameX SMART - Nhà thông minh tiền chế từ 12tr/m². Camera, báo động, smart home tích hợp. Hoàn thiện 45-60 ngày.">

<!-- PREMIUM -->
<meta name="description" content="FrameX PREMIUM - Biệt thự thép cao cấp thiết kế độc quyền. Kiến trúc đẳng cấp với dịch vụ white-glove.">
```

#### 3. Schema Markup
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "FrameX STARTER",
  "description": "Nhà thép tiền chế cơ bản",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "VND",
    "lowPrice": "8000000",
    "highPrice": "10000000",
    "priceValidUntil": "2025-12-31",
    "availability": "https://schema.org/InStock"
  }
}
```

### B. PERFORMANCE OPTIMIZATIONS

#### 1. Critical CSS per Product
```javascript
// Load product-specific CSS based on user intent
if (userIntent === 'budget') {
  loadCSS('/css/starter-critical.css');
} else if (userIntent === 'smart') {
  loadCSS('/css/smart-critical.css');
} else if (userIntent === 'premium') {
  loadCSS('/css/premium-critical.css');
}
```

#### 2. Progressive Enhancement
```javascript
// Basic functionality first
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('click', showDetails);
});

// Enhanced features for capable browsers
if ('IntersectionObserver' in window) {
  // Lazy load images
  // Animate on scroll
  // Progressive disclosure
}
```

## 📋 PHẦN 6: IMPLEMENTATION CHECKLIST

### Phase 1: Foundation (Week 1)
- [ ] Update hero section với 3 CTAs
- [ ] Create 3 product card designs
- [ ] Implement comparison table
- [ ] Add pricing calculator

### Phase 2: Conversion (Week 2)
- [ ] Customer journey mapping
- [ ] Exit intent popup
- [ ] Floating calculator
- [ ] Lead capture forms per product

### Phase 3: Content (Week 3)
- [ ] Product-specific landing pages
- [ ] Case studies per segment
- [ ] Testimonials categorized
- [ ] Blog posts targeting keywords

### Phase 4: Optimization (Week 4)
- [ ] A/B testing setup
- [ ] Analytics implementation
- [ ] Performance monitoring
- [ ] SEO fine-tuning

## 🎯 KPIs TO TRACK

1. **Conversion Rate per Product Line**
   - STARTER: Target 5% (volume play)
   - SMART: Target 3% (balanced)
   - PREMIUM: Target 1% (high value)

2. **Lead Quality Score**
   - Budget (<1B): Route to STARTER
   - Mid (1-3B): Route to SMART
   - High (>3B): Route to PREMIUM

3. **Time on Site by Segment**
   - STARTER visitors: 2-3 minutes
   - SMART visitors: 5-7 minutes  
   - PREMIUM visitors: 10+ minutes

4. **Mobile Conversion**
   - Target: 60% of leads from mobile
   - Optimize for mobile-first experience

## 🚀 NEXT STEPS

1. **Immediate Actions**
   - Update hero messaging
   - Create product comparison table
   - Implement basic calculator

2. **Short-term (2 weeks)**
   - Build landing pages
   - Set up lead routing
   - Launch A/B tests

3. **Long-term (1 month)**
   - Gather data and optimize
   - Refine messaging
   - Scale successful elements

---

**Prepared by**: FrameX Digital Strategy Team
**Date**: September 2025
**Version**: 1.0