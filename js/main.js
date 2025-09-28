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
        'hero-subtitle': 'Revolutionary smart prefabricated steel structures for modern construction',
        'explore-products': 'Explore Products',
        'get-quote': 'Get Quote',
        
        // Value Proposition
        'why-framex': 'Why FrameX?',
        'value-1-title': 'Fast Construction',
        'value-1-desc': '70% faster than traditional methods with prefabricated components',
        'value-2-title': 'Smart Integration',
        'value-2-desc': 'IoT-ready structures with built-in smart home capabilities',
        'value-3-title': 'Sustainable',
        'value-3-desc': 'Eco-friendly materials with 95% recyclability rate',
        'value-4-title': 'Durable & Safe',
        'value-4-desc': 'Earthquake resistant with 50+ years lifespan guarantee',
        
        // Product Range
        'product-range': 'Product Range',
        'starter-desc': 'Perfect for small homes and studios',
        'family-desc': 'Ideal for family residences',
        'custom-desc': 'Tailored solutions for unique projects',
        'learn-more': 'Learn More →',
        
        // Services
        'services-title': 'Our Services',
        'services-subtitle': 'We provide end-to-end solutions for smart prefabricated steel construction.',
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
        'tech-title': 'Advanced Technology',
        'tech-desc': 'Our structures incorporate the latest in construction technology, featuring BIM integration, modular design, and smart home readiness.',
        'feature-1': 'BIM-compatible design process',
        'feature-2': 'Modular expansion capabilities',
        'feature-3': 'Pre-installed smart home wiring',
        'feature-4': 'Climate-adaptive materials',
        
        // CTA
        'cta-title': 'Ready to Build Your Future?',
        'cta-subtitle': 'Join hundreds of satisfied customers who chose FrameX',
        'start-project': 'Start Your Project',
        
        // Footer
        'footer-products': 'Products',
        'footer-company': 'Company',
        'footer-contact': 'Contact',
        'company-name': 'ABM Architectural Material Co., Ltd',
        'footer-copyright': '© 2024 FrameX. All rights reserved.',
        
        // About Page
        'about-title': 'About FrameX',
        'about-subtitle': 'We are pioneering modern steel construction through innovative prefabrication technology, bringing sustainable and smart living spaces to everyone.',
        'about-who-we-are': 'Who We Are',
        'about-company-intro': 'FrameX is part of ABM Architectural Material Co., Ltd - the leading smart prefabricated steel construction company in Vietnam. We combine modern technology with 10+ years of experience to create unique FrameX solutions.',
        'about-for-buyers': 'For Home Buyers',
        'about-buyers-content': 'You will own a home built 70% faster, cost-effective, pre-integrated with smart technology, and guaranteed for 50+ years lifespan. From compact studios to luxury villas - we have solutions for every need and budget.',
        'about-for-developers': 'For Project Developers',
        'about-developers-content': 'Trusted partner for large-scale projects with rapid deployment capability, strict quality control, and comprehensive technical support. Our asset-light model keeps us agile, cost-effective, and responsive to the most demanding project schedules.',
        'about-vision': '"Shaping tomorrow\'s living with smart prefabricated steel structures"',
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
        'hero-title': 'Định hình không gian sống tương lai',
        'hero-subtitle': 'Kết cấu thép tiền chế thông minh cách mạng cho xây dựng hiện đại',
        'explore-products': 'Khám phá sản phẩm',
        'get-quote': 'Nhận báo giá',
        
        // Value Proposition
        'why-framex': 'Tại sao chọn FrameX?',
        'value-1-title': 'Thi công nhanh',
        'value-1-desc': 'Nhanh hơn 70% so với phương pháp truyền thống với cấu kiện tiền chế',
        'value-2-title': 'Tích hợp thông minh',
        'value-2-desc': 'Kết cấu sẵn sàng IoT với khả năng nhà thông minh tích hợp',
        'value-3-title': 'Bền vững',
        'value-3-desc': 'Vật liệu thân thiện môi trường với tỷ lệ tái chế 95%',
        'value-4-title': 'Bền vững và an toàn',
        'value-4-desc': 'Chống động đất với bảo hành tuổi thọ trên 50 năm',
        
        // Product Range
        'product-range': 'Dòng sản phẩm',
        'starter-desc': 'Hoàn hảo cho nhà nhỏ và studio',
        'family-desc': 'Lý tưởng cho nhà gia đình',
        'custom-desc': 'Giải pháp tùy chỉnh cho dự án độc đáo',
        'learn-more': 'Tìm hiểu thêm →',
        
        // Features
        'tech-title': 'Công nghệ tiên tiến',
        'tech-desc': 'Kết cấu của chúng tôi tích hợp công nghệ xây dựng mới nhất, bao gồm tích hợp BIM, thiết kế module và sẵn sàng cho nhà thông minh.',
        'feature-1': 'Quy trình thiết kế tương thích BIM',
        'feature-2': 'Khả năng mở rộng theo module',
        'feature-3': 'Hệ thống dây điện nhà thông minh lắp sẵn',
        'feature-4': 'Vật liệu thích ứng khí hậu',
        
        // CTA
        'cta-title': 'Sẵn sàng xây dựng tương lai của bạn?',
        'cta-subtitle': 'Tham gia cùng hàng trăm khách hàng đã chọn FrameX',
        'start-project': 'Bắt đầu dự án',
        
        // Services
        'services-title': 'Dịch Vụ Của Chúng Tôi',
        'services-subtitle': 'Chúng tôi cung cấp giải pháp toàn diện cho xây dựng thép tiền chế thông minh.',
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
        'about-subtitle': 'Chúng tôi đang dẫn đầu trong xây dựng thép hiện đại thông qua công nghệ tiền chế đổi mới, mang đến không gian sống bền vững và thông minh cho mọi người.',
        'about-who-we-are': 'Chúng Tôi Là Ai',
        'about-company-intro': 'FrameX thuộc ABM Architectural Material Co., Ltd - đơn vị tiên phong trong lĩnh vực kết cấu thép tiền chế thông minh tại Việt Nam. Chúng tôi kết hợp công nghệ hiện đại với kinh nghiệm 10+ năm để tạo ra những giải pháp FrameX độc đáo.',
        'about-for-buyers': 'Dành Cho Người Mua Nhà',
        'about-buyers-content': 'Bạn sẽ sở hữu ngôi nhà xây nhanh hơn 70%, tiết kiệm chi phí, tích hợp sẵn công nghệ thông minh và đảm bảo tuổi thọ 50+ năm. Từ studio nhỏ gọn đến biệt thự cao cấp - chúng tôi có giải pháp phù hợp với mọi nhu cầu và ngân sách.',
        'about-for-developers': 'Dành Cho Nhà Phát Triển Dự Án',
        'about-developers-content': 'Đối tác tin cậy cho các dự án quy mô lớn với khả năng triển khai nhanh chóng, kiểm soát chất lượng nghiêm ngặt và hỗ trợ kỹ thuật toàn diện. Mô hình asset-light giúp chúng tôi linh hoạt, hiệu quả chi phí và đáp ứng tiến độ dự án khắt khe nhất.',
        'about-vision': '"Định hình không gian sống tương lai với kết cấu thép tiền chế thông minh"',
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