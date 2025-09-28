// Products Page JavaScript
'use strict';

// Additional translations for products page
const productTranslations = {
    en: {
        'products-title': 'Our Products',
        'products-subtitle': 'Smart prefabricated steel structures for every need',
        'cat-all': 'All Products',
        'cat-residential': 'Residential',
        'cat-commercial': 'Commercial',
        'cat-enterprise': 'Enterprise',
        
        // Taglines
        'starter-tagline': 'Smart Beginning',
        'smart-tagline': 'Smart Sustainable Living',
        'premium-tagline': 'Premium Architecture',
        
        // Common
        'specs-title': 'Product Features',
        'features-title': 'Features',
        'benefits-title': 'Key Benefits',
        'target-title': 'Target Customers',
        'get-quote': 'Get Quote',
        'download-specs': 'Download Specs',
        'contact-sales': 'Contact Sales',
        'request-consultation': 'Request Consultation',
        'price-contact': 'Contact for pricing',
        
        // Starter
        'starter-main-desc': 'Standard prefabricated steel solution with basic waterproofing and insulation systems. Optimized design for small townhouses, fast construction, reasonable costs.',
        'starter-spec-1': 'Prefabricated steel with integrated basic waterproofing & insulation systems',
        'starter-spec-2': 'Simple indoor steel staircase',
        'starter-spec-3': 'International standard structure, 15-year warranty',
        'starter-spec-4': '90% recycled materials, energy-saving',
        'starter-benefit-1': '50% faster construction',
        'starter-benefit-2': 'Lower cost through standardized solutions and materials',
        'starter-target-1': 'Small townhouses <150m² (1 floor) or 50m²/floor (2-3 floors)',
        'starter-target-2': 'Standard projects, not complex in architecture/structure',
        'starter-target-3': 'No smart home requirements',
        
        // Smart
        'smart-main-desc': 'Comprehensive upgrade with customizable design, basic SmartHome integration. Perfect for small villas with high utility and personalization requirements.',
        'smart-spec-1': 'Includes all Starter solutions',
        'smart-spec-2': 'Advanced design, customizable structure',
        'smart-spec-3': 'Basic SmartHome integration: anti-theft, fire alarm, security cameras, internet',
        'smart-target-1': 'Small villas <225m² (1 floor) or 75m²/floor (2-3 floors)',
        'smart-target-2': 'Customers needing utility upgrades & design personalization',
        
        // Premium
        'premium-main-desc': 'Premium solution with exclusive architectural design, artistic steel, advanced SmartHome. For large villas and special projects.',
        'premium-spec-1': 'Includes all Smart solutions at higher level',
        'premium-spec-2': 'Custom architectural design',
        'premium-spec-3': 'Advanced waterproofing and insulation',
        'premium-spec-4': 'Fire-resistant structure',
        'premium-spec-5': 'Artistic steel: staircases, railings, special details',
        'premium-spec-6': 'Advanced SmartHome integration (as required)',
        'premium-target-1': 'Large villas >300m² floor area (or >150m²/floor for 2-story houses)',
        'premium-target-2': 'Commercial housing, artistic projects, special design requirements',
        
        // PRO specs
        'pro-spec-1': 'Area: 500+ m²',
        'pro-spec-2': 'Type: Warehouse/Office',
        'pro-spec-3': 'Build time: Custom timeline',
        'pro-spec-4': 'Scale: Unlimited',
        
        // PRO features
        'pro-feat-1': 'Industrial grade',
        'pro-feat-2': 'Fire safety systems',
        'pro-feat-3': 'Loading docks',
        'pro-feat-4': 'HVAC systems',
        'pro-feat-5': 'Access control',
        'pro-feat-6': '25 year warranty',
        
        // Comparison
        'compare-title': 'Compare Products',
        'compare-feature': 'Feature',
        'compare-area': 'Area',
        'compare-structure': 'Steel Structure',
        'compare-waterproof': 'Waterproofing',
        'compare-insulation': 'Insulation',
        'compare-smart': 'Smart Home',
        'compare-fireproof': 'Fire Protection',
        'compare-artistic': 'Artistic Steel',
        'compare-warranty': 'Warranty',
        'compare-target': 'Target Customer',
        'compare-basic': 'Basic',
        'compare-moderate': 'Moderate',
        'compare-full': 'Full',
        
        // Work Process
        'process-title': 'Work Process',
        'step1-title': 'Consultation & Design',
        'step1-duration': '3-5 days',
        'step1-desc': 'Survey requirements, provide suitable solutions and detailed design according to customer needs.',
        'step2-title': 'Prefab Steel Production',
        'step2-duration': '10-15 days',
        'step2-desc': 'Manufacture prefabricated steel components in factory with modern technology, ensuring quality.',
        'step3-title': 'Construction & Installation',
        'step3-duration': '15-20 days',
        'step3-desc': 'Assemble steel structure on site, quick construction with professional team.',
        'step4-title': 'Finishing & Handover',
        'step4-duration': '3-5 days',
        'step4-desc': 'Quality inspection, finish details and hand over the project to customer.'
    },
    
    vi: {
        'products-title': 'Sản phẩm của chúng tôi',
        'products-subtitle': 'Kết cấu thép tiền chế thông minh cho mọi nhu cầu',
        'cat-all': 'Tất cả sản phẩm',
        'cat-residential': 'Nhà ở',
        'cat-commercial': 'Thương mại',
        'cat-enterprise': 'Doanh nghiệp',
        
        // Taglines
        'starter-tagline': 'Không gian sống nhỏ gọn được định nghĩa lại',
        'family-tagline': 'Không gian sống gia đình hoàn hảo',
        'custom-tagline': 'Thiết kế theo tầm nhìn của bạn',
        'pro-tagline': 'Xuất sắc cho công nghiệp và thương mại',
        
        // Common
        'specs-title': 'Thông số kỹ thuật',
        'features-title': 'Tính năng',
        'get-quote': 'Nhận báo giá',
        'download-specs': 'Tải thông số',
        'contact-sales': 'Liên hệ bán hàng',
        'request-consultation': 'Yêu cầu tư vấn',
        'price-contact': 'Liên hệ để biết giá',
        
        // Starter specs
        'starter-spec-1': 'Diện tích: 50-80 m²',
        'starter-spec-2': 'Phòng ngủ: 1-2',
        'starter-spec-3': 'Thời gian xây: 30-45 ngày',
        'starter-spec-4': 'Tầng: 1-2',
        
        // Starter features
        'starter-feat-1': 'Sẵn sàng nhà thông minh',
        'starter-feat-2': 'Thiết kế tiết kiệm năng lượng',
        'starter-feat-3': 'Mở rộng theo module',
        'starter-feat-4': 'Kiểm soát khí hậu',
        'starter-feat-5': 'Hệ thống an ninh',
        'starter-feat-6': 'Bảo hành 10 năm',
        
        // Family specs
        'family-spec-1': 'Diện tích: 100-150 m²',
        'family-spec-2': 'Phòng ngủ: 3-4',
        'family-spec-3': 'Thời gian xây: 45-60 ngày',
        'family-spec-4': 'Tầng: 2-3',
        
        // Family features
        'family-feat-1': 'Hệ thống nhà thông minh đầy đủ',
        'family-feat-2': 'Sẵn sàng lắp pin năng lượng mặt trời',
        'family-feat-3': 'Cách nhiệt cao cấp',
        'family-feat-4': 'Tích hợp sân vườn',
        'family-feat-5': 'Bao gồm nhà xe',
        'family-feat-6': 'Bảo hành 15 năm',
        
        // Premium
        'premium-main-desc': 'Giải pháp cao cấp với thiết kế kiến trúc độc quyền, thép nghệ thuật, SmartHome nâng cao. Dành cho biệt thự lớn và công trình đặc biệt.',
        'premium-spec-1': 'Bao gồm toàn bộ giải pháp Smart ở mức cao hơn',
        'premium-spec-2': 'Thiết kế kiến trúc theo nhu cầu',
        'premium-spec-3': 'Chống thấm, cách nhiệt nâng cao',
        'premium-spec-4': 'Chống cháy kết cấu',
        'premium-spec-5': 'Thép nghệ thuật: cầu thang, lan can, chi tiết đặc biệt',
        'premium-spec-6': 'Tích hợp SmartHome nâng cao (theo nhu cầu)',
        'premium-target-1': 'Biệt thự lớn >300m² sàn (hoặc >150m²/tầng cho nhà 2 tầng)',
        'premium-target-2': 'Nhà ở thương mại, công trình nghệ thuật, yêu cầu thiết kế đặc biệt',
        
        // Comparison
        'compare-title': 'So Sánh Sản Phẩm',
        'compare-feature': 'Đặc điểm',
        'compare-area': 'Diện tích',
        'compare-structure': 'Kết cấu thép',
        'compare-waterproof': 'Chống thấm',
        'compare-insulation': 'Cách nhiệt',
        'compare-smart': 'Smart Home',
        'compare-fireproof': 'Chống cháy',
        'compare-artistic': 'Thép nghệ thuật',
        'compare-warranty': 'Bảo hành',
        'compare-target': 'Khách hàng mục tiêu',
        'compare-basic': 'Cơ bản',
        'compare-moderate': 'Trung bình',
        'compare-full': 'Đầy đủ',
        
        // Work Process
        'process-title': 'Quy Trình Làm Việc',
        'step1-title': 'Tư vấn & Thiết kế',
        'step1-duration': '3-5 ngày',
        'step1-desc': 'Khảo sát nhu cầu, tư vấn giải pháp phù hợp và thiết kế chi tiết theo yêu cầu khách hàng.',
        'step2-title': 'Sản xuất thép tiền chế',
        'step2-duration': '10-15 ngày',
        'step2-desc': 'Sản xuất các cấu kiện thép tiền chế tại nhà máy với công nghệ hiện đại, đảm bảo chất lượng.',
        'step3-title': 'Thi công lắp đặt',
        'step3-duration': '15-20 ngày',
        'step3-desc': 'Lắp ráp kết cấu thép tại công trình, thi công nhanh chóng với đội ngũ chuyên nghiệp.',
        'step4-title': 'Hoàn thiện & Bàn giao',
        'step4-duration': '3-5 ngày',
        'step4-desc': 'Kiểm tra chất lượng, hoàn thiện chi tiết và bàn giao công trình cho khách hàng.'
    }
};

// Merge translations
Object.keys(productTranslations).forEach(lang => {
    Object.assign(window.FrameX.translations[lang], productTranslations[lang]);
});

// Category filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const categoryBtns = document.querySelectorAll('.tab-btn');
    const productCards = document.querySelectorAll('.product-detail-card');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products
            productCards.forEach(card => {
                if (category === 'all') {
                    card.style.display = 'block';
                } else {
                    const cardCategories = card.getAttribute('data-category');
                    if (cardCategories && cardCategories.includes(category)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
    
    // Update language on page load
    window.FrameX.updateLanguage();
    
    // Smooth scroll to product if hash in URL
    if (window.location.hash) {
        setTimeout(() => {
            const target = document.querySelector(window.location.hash);
            if (target) {
                const offsetTop = target.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }, 100);
    }
});