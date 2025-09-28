// FrameX - Main JavaScript
'use strict';

// Language translations
const translations = {
    en: {
        // Navigation
        'home': 'Home',
        'products': 'Products',
        'services': 'Services',
        'about': 'About',
        'projects': 'Projects',
        'blog': 'Blog',
        'investor': 'Investor Relations',
        'contact': 'Contact',
        
        // Hero
        'hero-title': 'Shaping Tomorrow\'s Living',
        'hero-subtitle': 'Pioneering modern steel construction through innovative prefabrication technology. We integrate steel structures with thermal insulation, waterproofing, and smart home solutions - delivering high-quality, rapid, and cost-optimized construction for homeowners and developers.',
        'explore-products': 'Explore Products',
        'get-quote': 'Get Quote',
        
        // Value Proposition
        'why-framex': 'Why FrameX',
        
        // Modular Design
        'modular-title': 'Modular Design',
        'modular-1': 'High standardization, optimized production',
        'modular-2': 'Flexible adjustment to customer needs',
        'modular-3': 'Strong load-bearing, tropical weather resistant',
        'modular-4': 'Easy future expansion',
        
        // Smart Integration
        'smart-title': 'Smart Integration',
        'smart-1': 'IoT integration from design phase',
        'smart-2': 'Smart energy management',
        'smart-3': 'Remote security and monitoring',
        'smart-4': 'Automated system controls',
        
        // Turnkey Services
        'turnkey-title': 'Turnkey Services',
        'turnkey-1': 'Customized design consultation',
        'turnkey-2': 'Production through trusted partners',
        'turnkey-3': 'Professional installation',
        'turnkey-4': 'Warranty and technical support',
        
        // Key Advantages
        'advantages-title': 'Key Advantages',
        'advantage-1': 'reduction in construction time compared to traditional methods',
        'advantage-2': 'savings in total lifecycle costs',
        'advantage-3': 'High customization to fit all needs and budgets',
        
        // Product Range
        'product-range': 'Product Range',
        'starter-tagline': 'Smart Beginning',
        'starter-desc': 'Standard prefabricated steel solution with basic waterproofing and insulation systems. Optimized design for small townhouses, fast construction, reasonable costs.',
        'starter-feat-1': 'International standard prefab steel',
        'starter-feat-2': '50% faster construction',
        'starter-feat-3': 'Optimized cost, 15-year warranty',
        'smart-tagline': 'Smart Sustainable Living',
        'smart-desc': 'Comprehensive upgrade with customizable design, basic SmartHome integration. Perfect for small villas with high utility and personalization requirements.',
        'smart-feat-1': 'Customizable structural design',
        'smart-feat-2': 'SmartHome: Camera, fire alarm, anti-theft',
        'smart-feat-3': 'Villa <225m² or 75m²/floor',
        'premium-tagline': 'Premium Architecture',
        'premium-desc': 'Premium solution with exclusive architectural design, artistic steel, advanced SmartHome. For large villas and special projects.',
        'premium-feat-1': 'Exclusive architectural design',
        'premium-feat-2': 'Artistic steel & fire protection',
        'premium-feat-3': 'Large villa >300m² floor area',
        'learn-more': 'Learn More →',
        
        // Services
        'services-title': 'Our Services',
        'services-subtitle': 'Complete solutions from design to delivery for homeowners and developers seeking quality, speed, and innovation.',
        'service1-title': 'Design & Planning',
        'service1-desc': 'Complete architectural design and BIM modeling with structural engineering expertise',
        'service2-title': 'Manufacturing',
        'service2-desc': 'Precision steel fabrication with quality control and just-in-time delivery',
        'service3-title': 'Installation',
        'service3-desc': 'Professional assembly by certified teams with safety compliance and rapid deployment',
        'service4-title': 'Smart Integration',
        'service4-desc': 'IoT systems setup, home automation, and digital monitoring solutions',
        'view-all-services': 'View All Services',
        
        // Features
        'tech-title': 'Integrated Construction Innovation',
        'tech-desc': 'FrameX pioneers modern steel construction by seamlessly integrating prefabricated steel structures with thermal insulation, waterproofing, and smart home solutions. This innovative approach delivers high-quality constructions rapidly and cost-effectively for both individual homeowners and large-scale developers.',
        'feature-1': 'Integrated steel structure with insulation systems',
        'feature-2': 'Advanced waterproofing and weatherproofing',
        'feature-3': 'Built-in smart home infrastructure',
        'feature-4': 'Sustainable and eco-friendly materials',
        
        // CTA
        'cta-title': 'Ready to Shape Your Tomorrow?',
        'cta-subtitle': 'Join homeowners and developers who choose integrated prefabricated innovation with FrameX',
        'start-project': 'Start Your Project',
        
        // Footer
        'footer-products': 'Products',
        'footer-company': 'Company',
        'footer-contact': 'Contact',
        'company-name': 'ABM Architectural Material Co., Ltd',
        'footer-copyright': '© 2024 FrameX. All rights reserved.',
        
        // About Page
        'about-title': 'About FrameX',
        'about-subtitle': 'FrameX pioneers modern steel construction through innovative prefabrication technology, bringing sustainable and smart living spaces to everyone. We integrate prefabricated steel structures with thermal insulation, waterproofing, and smart home solutions, creating high-quality, rapid, and cost-optimized constructions.',
        'about-who-we-are': 'About FrameX',
        'about-company-intro': 'Part of ABM Architectural Material Co., Ltd, FrameX is Vietnam\'s leading integrated prefabricated steel construction solutions provider. With 10+ years of experience, we offer not just steel frames but a complete ecosystem including thermal insulation, waterproofing, and smart home systems.',
        'about-for-buyers': 'For Home Buyers',
        'about-buyers-content': 'Own a complete home with solid steel frame, effective thermal insulation, absolute waterproofing, and pre-installed smart home technology. 50% faster construction time, optimized costs while maintaining premium quality and 50+ years durability. From studio apartments to villas - comprehensive solutions for every need.',
        'about-for-developers': 'For Project Developers',
        'about-developers-content': 'Total solutions from design to handover: prefabricated steel + insulation + waterproofing + smart systems. Save 40-60% construction time, ensure consistent quality, and reduce project risks. Trusted partner for projects from social housing to premium developments.',
        'about-vision': '"Steel Structure + Insulation + Waterproofing + Smart Home = Perfect Solution"',
        'stat-experience': 'Years Experience',
        'stat-projects': 'Projects Completed',
        'stat-faster': 'Faster Construction',
        'stat-satisfaction': 'Customer Satisfaction',
        
        // Investor Relations Page
        'investor-title': 'Investor & Partner Relations',
        'investor-subtitle': 'Join us in revolutionizing the steel construction industry',
        'investor-opportunity': 'Investment Opportunity',
        'investor-opportunity-desc': 'FrameX offers unique investment opportunities in the rapidly growing smart construction market.',
        'investor-why': 'Why Invest in FrameX',
        'investor-market': 'Market Growth',
        'investor-market-desc': '35% annual growth in prefab construction',
        'investor-tech': 'Technology Leadership',
        'investor-tech-desc': 'Proprietary IoT integration and BIM systems',
        'investor-model': 'Asset-Light Model',
        'investor-model-desc': 'High ROI with minimal capital requirements',
        'investor-team': 'Expert Team',
        'investor-team-desc': '10+ years experience in steel construction',
        'investor-contact-cta': 'Contact our investor relations team for more information',
        'investor-contact-btn': 'Get Investment Deck',
        'investor-growth-title': 'Growth Potential',
        'investor-growth-desc': '200% YoY growth trajectory in smart construction sector',
        'investor-position-title': 'Market Position',
        'investor-position-desc': 'First-mover advantage in Vietnam\'s smart steel construction',
        'investor-innovation-title': 'Innovation',
        'investor-innovation-desc': 'Proprietary technology and strategic partnerships',
        'investor-stat-growth': 'Annual Market Growth',
        'investor-stat-market': 'Vietnam Market Size',
        'investor-stat-yoy': 'YoY Growth Rate',
        'investor-stat-partners': 'Strategic Partners',
        'investor-cta-title': 'Ready to Invest?',
        'investor-schedule': 'Schedule Meeting'
    },
    
    vi: {
        // Navigation
        'home': 'Trang chủ',
        'products': 'Sản phẩm',
        'services': 'Dịch vụ',
        'about': 'Giới thiệu',
        'projects': 'Dự án',
        'blog': 'Tin tức',
        'investor': 'Quan hệ đầu tư',
        'contact': 'Liên hệ',
        
        // Hero
        'hero-title': 'Định Hình Không Gian Sống Tương Lai',
        'hero-subtitle': 'Tiên phong xây dựng thép hiện đại với công nghệ tiền chế đổi mới. Chúng tôi tích hợp kết cấu thép với cách nhiệt, chống thấm và nhà thông minh - mang đến giải pháp chất lượng cao, nhanh chóng và tối ưu chi phí cho người mua nhà và nhà phát triển.',
        'explore-products': 'Khám phá sản phẩm',
        'get-quote': 'Nhận báo giá',
        
        // Value Proposition
        'why-framex': 'Tại Sao Chọn FrameX',
        
        // Modular Design
        'modular-title': 'Thiết Kế Module',
        'modular-1': 'Tiêu chuẩn hóa cao, tối ưu sản xuất',
        'modular-2': 'Linh hoạt điều chỉnh theo nhu cầu khách hàng',
        'modular-3': 'Chịu tải mạnh, chống thời tiết nhiệt đới',
        'modular-4': 'Dễ dàng mở rộng trong tương lai',
        
        // Smart Integration
        'smart-title': 'Tích Hợp Thông Minh',
        'smart-1': 'Tích hợp IoT từ giai đoạn thiết kế',
        'smart-2': 'Quản lý năng lượng thông minh',
        'smart-3': 'Giám sát an ninh từ xa',
        'smart-4': 'Điều khiển hệ thống tự động',
        
        // Turnkey Services
        'turnkey-title': 'Dịch Vụ Trọn Gói',
        'turnkey-1': 'Tư vấn thiết kế tùy chỉnh',
        'turnkey-2': 'Sản xuất thông qua đối tác uy tín',
        'turnkey-3': 'Lắp đặt chuyên nghiệp',
        'turnkey-4': 'Bảo hành và hỗ trợ kỹ thuật',
        
        // Key Advantages
        'advantages-title': 'Ưu Điểm Chính',
        'advantage-1': 'giảm thời gian xây dựng so với phương pháp truyền thống',
        'advantage-2': 'tiết kiệm tổng chi phí vòng đời',
        'advantage-3': 'Tùy chỉnh cao phù hợp mọi nhu cầu và ngân sách',
        
        // Product Range
        'product-range': 'Dòng Sản Phẩm',
        'starter-tagline': 'Khởi Đầu Thông Minh',
        'starter-desc': 'Giải pháp nhà thép tiền chế tiêu chuẩn với hệ thống chống thấm, cách nhiệt cơ bản. Thiết kế tối ưu cho nhà phố nhỏ, xây dựng nhanh, chi phí hợp lý.',
        'starter-feat-1': 'Nhà thép tiền chế chuẩn quốc tế',
        'starter-feat-2': 'Xây dựng nhanh hơn 50%',
        'starter-feat-3': 'Chi phí tối ưu, bảo hành 15 năm',
        'smart-tagline': 'Sống Thông Minh Bền Vững',
        'smart-desc': 'Nâng cấp toàn diện với thiết kế tùy biến, tích hợp SmartHome cơ bản. Hoàn hảo cho villa nhỏ với yêu cầu tiện ích và cá nhân hóa cao.',
        'smart-feat-1': 'Thiết kế tùy biến kết cấu',
        'smart-feat-2': 'SmartHome: Camera, báo cháy, chống trộm',
        'smart-feat-3': 'Villa <225m² hoặc 75m²/tầng',
        'premium-tagline': 'Kiến Trúc Đẳng Cấp',
        'premium-desc': 'Giải pháp cao cấp với thiết kế kiến trúc độc quyền, thép nghệ thuật, SmartHome nâng cao. Dành cho biệt thự lớn và công trình đặc biệt.',
        'premium-feat-1': 'Thiết kế kiến trúc độc quyền',
        'premium-feat-2': 'Thép nghệ thuật & chống cháy',
        'premium-feat-3': 'Biệt thự lớn >300m² sàn',
        'learn-more': 'Tìm hiểu thêm →',
        
        // Features
        'tech-title': 'Đổi Mới Xây Dựng Tích Hợp',
        'tech-desc': 'FrameX tiên phong xây dựng thép hiện đại bằng việc tích hợp liền mạch kết cấu thép tiền chế với cách nhiệt, chống thấm và giải pháp nhà thông minh. Phương pháp đổi mới này mang đến công trình chất lượng cao một cách nhanh chóng và hiệu quả chi phí cho cả khách hàng cá nhân và nhà phát triển quy mô lớn.',
        'feature-1': 'Kết cấu thép tích hợp với hệ thống cách nhiệt',
        'feature-2': 'Giải pháp chống thấm và chống thời tiết tiên tiến',
        'feature-3': 'Hạ tầng nhà thông minh tích hợp sẵn',
        'feature-4': 'Vật liệu bền vững và thân thiện môi trường',
        
        // CTA
        'cta-title': 'Sẵn Sàng Định Hình Tương Lai Của Bạn?',
        'cta-subtitle': 'Cùng người mua nhà và nhà phát triển chọn đổi mới tiền chế tích hợp với FrameX',
        'start-project': 'Bắt đầu dự án',
        
        // Services
        'services-title': 'Dịch Vụ Của Chúng Tôi',
        'services-subtitle': 'Giải pháp trọn gói từ thiết kế đến bàn giao cho người mua nhà và nhà phát triển tìm kiếm chất lượng, tốc độ và đổi mới.',
        'service1-title': 'Thiết Kế & Quy Hoạch',
        'service1-desc': 'Thiết kế kiến trúc hoàn chỉnh và mô hình BIM với chuyên môn kỹ thuật kết cấu',
        'service2-title': 'Sản Xuất',
        'service2-desc': 'Chế tạo thép chính xác với kiểm soát chất lượng và giao hàng kịp thời',
        'service3-title': 'Lắp Đặt',
        'service3-desc': 'Lắp ráp chuyên nghiệp bởi đội ngũ có chứng chỉ với tuân thủ an toàn',
        'service4-title': 'Tích Hợp Thông Minh',
        'service4-desc': 'Thiết lập hệ thống IoT, tự động hóa nhà ở và giải pháp giám sát số',
        'view-all-services': 'Xem Tất Cả Dịch Vụ',
        
        // Footer
        'footer-products': 'Sản phẩm',
        'footer-company': 'Công ty',
        'footer-contact': 'Liên hệ',
        'company-name': 'Công ty TNHH Vật liệu kiến trúc ABM',
        'footer-copyright': '© 2024 FrameX. Tất cả quyền được bảo vệ.',
        
        // About Page
        'about-title': 'Giới Thiệu FrameX',
        'about-subtitle': 'FrameX tiên phong xây dựng thép hiện đại thông qua công nghệ tiền chế đổi mới, mang đến không gian sống bền vững và thông minh cho mọi người. Chúng tôi tích hợp kết cấu thép tiền chế với các giải pháp cách nhiệt, chống thấm và nhà thông minh, tạo ra công trình chất lượng cao, nhanh chóng và tối ưu chi phí.',
        'about-who-we-are': 'Về FrameX',
        'about-company-intro': 'Thuộc ABM Architectural Material Co., Ltd, FrameX là đơn vị hàng đầu Việt Nam chuyên về giải pháp kết cấu thép tiền chế tích hợp. Với 10+ năm kinh nghiệm, chúng tôi không chỉ cung cấp khung thép mà còn là hệ sinh thái hoàn chỉnh bao gồm cách nhiệt, chống thấm và hệ thống nhà thông minh.',
        'about-for-buyers': 'Dành Cho Người Mua Nhà',
        'about-buyers-content': 'Sở hữu ngôi nhà hoàn thiện với khung thép chắc chắn, hệ thống cách nhiệt hiệu quả, chống thấm tuyệt đối và công nghệ nhà thông minh sẵn có. Thời gian xây dựng nhanh hơn 50%, chi phí tối ưu nhưng chất lượng cao cấp và bền vững 50+ năm. Từ căn hộ studio đến biệt thự - giải pháp toàn diện cho mọi nhu cầu.',
        'about-for-developers': 'Dành Cho Nhà Phát Triển Dự Án',
        'about-developers-content': 'Giải pháp tổng thể từ thiết kế đến bàn giao: kết cấu thép tiền chế + cách nhiệt + chống thấm + hệ thống thông minh. Tiết kiệm 40-60% thời gian thi công, đảm bảo chất lượng đồng nhất và giảm thiểu rủi ro dự án. Đối tác đáng tin cậy cho các dự án từ nhà ở xã hội đến cao cấp.',
        'about-vision': '"Kết cấu thép + Cách nhiệt + Chống thấm + Nhà thông minh = Giải pháp hoàn hảo"',
        'stat-experience': 'Năm Kinh Nghiệm',
        'stat-projects': 'Dự Án Hoàn Thành',
        'stat-faster': 'Thi Công Nhanh Hơn',
        'stat-satisfaction': 'Sự Hài Lòng Khách Hàng',
        
        // Investor Relations Page
        'investor-title': 'Quan Hệ Đầu Tư & Đối Tác',
        'investor-subtitle': 'Cùng chúng tôi cách mạng hóa ngành xây dựng thép',
        'investor-opportunity': 'Cơ Hội Đầu Tư',
        'investor-opportunity-desc': 'FrameX mang đến cơ hội đầu tư độc đáo trong thị trường xây dựng thông minh đang phát triển nhanh chóng.',
        'investor-why': 'Tại Sao Đầu Tư Vào FrameX',
        'investor-market': 'Tăng Trưởng Thị Trường',
        'investor-market-desc': 'Tăng trưởng 35% hàng năm trong xây dựng tiền chế',
        'investor-tech': 'Dẫn Đầu Công Nghệ',
        'investor-tech-desc': 'Hệ thống tích hợp IoT và BIM độc quyền',
        'investor-model': 'Mô Hình Vốn Nhẹ',
        'investor-model-desc': 'ROI cao với yêu cầu vốn tối thiểu',
        'investor-team': 'Đội Ngũ Chuyên Gia',
        'investor-team-desc': 'Hơn 10 năm kinh nghiệm trong xây dựng thép',
        'investor-contact-cta': 'Liên hệ đội quan hệ nhà đầu tư để biết thêm thông tin',
        'investor-contact-btn': 'Nhận Tài Liệu Đầu Tư',
        'investor-growth-title': 'Tiềm Năng Tăng Trưởng',
        'investor-growth-desc': 'Tăng trưởng 200% hàng năm trong lĩnh vực xây dựng thông minh',
        'investor-position-title': 'Vị Thế Thị Trường',
        'investor-position-desc': 'Lợi thế tiên phong trong xây dựng thép thông minh Việt Nam',
        'investor-innovation-title': 'Đổi Mới Sáng Tạo',
        'investor-innovation-desc': 'Công nghệ độc quyền và đối tác chiến lược',
        'investor-stat-growth': 'Tăng Trưởng Thị Trường Hàng Năm',
        'investor-stat-market': 'Quy Mô Thị Trường Việt Nam',
        'investor-stat-yoy': 'Tốc Độ Tăng Trưởng Hàng Năm',
        'investor-stat-partners': 'Đối Tác Chiến Lược',
        'investor-cta-title': 'Sẵn Sàng Đầu Tư?',
        'investor-schedule': 'Đặt Lịch Hẹn'
    }
};

// Current language state
let currentLang = localStorage.getItem('framex-language') || 'en';

// Toggle language function
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'vi' : 'en';
    localStorage.setItem('framex-language', currentLang);
    updateLanguage();
}

// Update language throughout the page
function updateLanguage() {
    // Update language button
    const langButton = document.querySelector('.lang-text');
    if (langButton) {
        langButton.textContent = currentLang === 'en' ? 'VN' : 'EN';
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLang;
    
    // Update all elements with data-lang attribute
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[currentLang][key]) {
            // Check if element contains HTML (like icons)
            if (element.querySelector('i')) {
                const icon = element.querySelector('i');
                element.innerHTML = `${icon.outerHTML} ${translations[currentLang][key]}`;
            } else {
                element.textContent = translations[currentLang][key];
            }
        }
    });
}

// Toggle mobile menu
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const mobileToggle = document.querySelector('.mobile-toggle');
    
    navMenu.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = mobileToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
    } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    }
}

// Smooth scroll for anchor links
function smoothScroll(e) {
    const href = e.currentTarget.getAttribute('href');
    if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.offsetTop - 72; // Navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
}

// Active navigation highlighting
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language
    updateLanguage();
    
    // Add smooth scroll to anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
    
    // Update active nav on scroll
    window.addEventListener('scroll', updateActiveNav);
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        const navMenu = document.querySelector('.nav-menu');
        const mobileToggle = document.querySelector('.mobile-toggle');
        
        if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
            if (navMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        }
    });
    
    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });
});

// Utility function for form validation (will be used in other pages)
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
        
        // Email validation
        if (input.type === 'email' && input.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                input.classList.add('error');
                isValid = false;
            }
        }
        
        // Phone validation
        if (input.type === 'tel' && input.value) {
            const phoneRegex = /^[\d\s\+\-\(\)]+$/;
            if (!phoneRegex.test(input.value)) {
                input.classList.add('error');
                isValid = false;
            }
        }
    });
    
    return isValid;
}

// Export functions for use in other pages
window.FrameX = {
    toggleLanguage,
    updateLanguage,
    toggleMobileMenu,
    validateForm,
    translations,
    currentLang: () => currentLang
};