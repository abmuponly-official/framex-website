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
        
        // Benefits headers
        'starter-benefits-header': 'Key Benefits',
        'smart-benefits-header': 'Key Benefits',
        'premium-benefits-header': 'Key Benefits',
        
        // Target headers  
        'starter-target-header': 'Target Customers',
        'smart-target-header': 'Target Customers',
        'premium-target-header': 'Target Customers',
        
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
        'starter-tagline': 'Khởi đầu thông minh',
        'smart-tagline': 'Sống bền vững thông minh',
        'premium-tagline': 'Kiến trúc cao cấp',
        
        // Common
        'specs-title': 'Đặc điểm sản phẩm',
        'features-title': 'Tính năng',
        'benefits-title': 'Lợi ích chính',
        'target-title': 'Khách hàng mục tiêu',
        'get-quote': 'Nhận báo giá',
        'download-specs': 'Tải thông số',
        'contact-sales': 'Liên hệ bán hàng',
        'request-consultation': 'Yêu cầu tư vấn',
        'price-contact': 'Liên hệ để biết giá',
        
        // Starter
        'starter-main-desc': 'Giải pháp thép tiền chế chuẩn với hệ thống chống thấm và cách nhiệt cơ bản. Thiết kế tối ưu cho nhà phố nhỏ, thi công nhanh, chi phí hợp lý.',
        'starter-spec-1': 'Thép tiền chế với hệ thống chống thấm & cách nhiệt cơ bản tích hợp',
        'starter-spec-2': 'Cầu thang thép trong nhà đơn giản',
        'starter-spec-3': 'Kết cấu tiêu chuẩn quốc tế, bảo hành 15 năm',
        'starter-spec-4': '90% vật liệu tái chế, tiết kiệm năng lượng',
        'starter-benefit-1': 'Thi công nhanh hơn 50%',
        'starter-benefit-2': 'Chi phí thấp hơn nhờ giải pháp và vật liệu chuẩn hóa',
        'starter-target-1': 'Nhà phố nhỏ <150m² (1 tầng) hoặc 50m²/tầng (2-3 tầng)',
        'starter-target-2': 'Công trình chuẩn, không phức tạp về kiến trúc/kết cấu',
        'starter-target-3': 'Không yêu cầu smart home',
        
        // Smart
        'smart-main-desc': 'Nâng cấp toàn diện với thiết kế tùy biến, tích hợp SmartHome cơ bản. Hoàn hảo cho biệt thự nhỏ với yêu cầu tiện ích và cá nhân hóa cao.',
        'smart-spec-1': 'Bao gồm toàn bộ giải pháp Starter',
        'smart-spec-2': 'Thiết kế nâng cao, kết cấu tùy biến',
        'smart-spec-3': 'Tích hợp SmartHome cơ bản: chống trộm, báo cháy, camera an ninh, internet',
        'smart-benefit-1': 'Nâng cao tiện nghi và an ninh',
        'smart-benefit-2': 'Hiệu quả năng lượng nhờ hệ thống thông minh',
        'smart-target-1': 'Biệt thự nhỏ <225m² (1 tầng) hoặc 75m²/tầng (2-3 tầng)',
        'smart-target-2': 'Khách hàng cần nâng cấp tiện ích & cá nhân hóa thiết kế',
        
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