// Projects page specific functionality

// Add translations for projects page
if (typeof translations !== 'undefined') {
    // English translations
    translations.en = {
        ...translations.en,
        'projects-title': 'Our Projects',
        'projects-subtitle': 'Showcasing excellence in smart steel construction across Vietnam',
        
        // Stats
        'stat-completed': 'Completed Projects',
        'stat-cities': 'Cities Covered',
        'stat-satisfaction': 'Client Satisfaction',
        'stat-sqm': 'Square Meters Built',
        
        // Filters
        'filter-all': 'All Projects',
        'filter-residential': 'Residential',
        'filter-commercial': 'Commercial',
        'filter-industrial': 'Industrial',
        
        // Featured section
        'featured-title': 'Featured Projects',
        
        // Project details labels
        'detail-product': 'Product:',
        'detail-area': 'Area:',
        'detail-units': 'Units:',
        'detail-floors': 'Floors:',
        'detail-height': 'Height:',
        'detail-duration': 'Duration:',
        
        // Project descriptions
        'project1-desc': 'A sustainable residential complex featuring 12 FrameX Family units with integrated solar panels, rainwater harvesting, and smart home systems. Completed in just 4 months.',
        'project2-desc': 'Modern 5-story office building using FrameX PRO system, featuring open-plan workspaces, IoT-enabled meeting rooms, and energy-efficient climate control systems.',
        'project3-desc': 'Large-scale distribution center with automated storage systems, climate-controlled zones, and advanced security features. Built using FrameX PRO industrial framework.',
        'project4-desc': 'Luxury beachfront resort featuring 20 FrameX Custom bungalows with ocean views, sustainable design, and integrated smart hospitality systems.',
        
        // CTA
        'cta-title': 'Ready to Start Your Project?',
        'cta-subtitle': "Let's build something extraordinary together",
        'start-project': 'Start Your Project',
        'view-products': 'View Products',
        'view-details': 'View Details'
    };
    
    // Vietnamese translations
    translations.vi = {
        ...translations.vi,
        'projects-title': 'Dự Án Của Chúng Tôi',
        'projects-subtitle': 'Trưng bày sự xuất sắc trong xây dựng thép thông minh trên khắp Việt Nam',
        
        // Stats
        'stat-completed': 'Dự Án Hoàn Thành',
        'stat-cities': 'Thành Phố',
        'stat-satisfaction': 'Sự Hài Lòng',
        'stat-sqm': 'Mét Vuông Xây Dựng',
        
        // Filters
        'filter-all': 'Tất Cả Dự Án',
        'filter-residential': 'Nhà Ở',
        'filter-commercial': 'Thương Mại',
        'filter-industrial': 'Công Nghiệp',
        
        // Featured section
        'featured-title': 'Dự Án Nổi Bật',
        
        // Project details labels
        'detail-product': 'Sản phẩm:',
        'detail-area': 'Diện tích:',
        'detail-units': 'Đơn vị:',
        'detail-floors': 'Tầng:',
        'detail-height': 'Chiều cao:',
        'detail-duration': 'Thời gian:',
        
        // Project descriptions
        'project1-desc': 'Khu phức hợp nhà ở bền vững với 12 căn FrameX Family tích hợp pin mặt trời, hệ thống thu nước mưa và nhà thông minh. Hoàn thành chỉ trong 4 tháng.',
        'project2-desc': 'Tòa nhà văn phòng 5 tầng hiện đại sử dụng hệ thống FrameX PRO, với không gian làm việc mở, phòng họp IoT và hệ thống điều hòa tiết kiệm năng lượng.',
        'project3-desc': 'Trung tâm phân phối quy mô lớn với hệ thống lưu trữ tự động, khu vực kiểm soát khí hậu và tính năng bảo mật tiên tiến. Xây dựng bằng khung công nghiệp FrameX PRO.',
        'project4-desc': 'Khu nghỉ dưỡng ven biển sang trọng với 20 căn bungalow FrameX Custom view biển, thiết kế bền vững và hệ thống khách sạn thông minh tích hợp.',
        
        // CTA
        'cta-title': 'Sẵn Sàng Bắt Đầu Dự Án?',
        'cta-subtitle': 'Hãy cùng xây dựng điều phi thường',
        'start-project': 'Bắt Đầu Dự Án',
        'view-products': 'Xem Sản Phẩm',
        'view-details': 'Xem Chi Tiết'
    };
}

// Project filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            const filter = this.dataset.filter;
            
            projectCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'flex';
                    // Fade in animation
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.transition = 'opacity 0.3s ease';
                        card.style.opacity = '1';
                    }, 10);
                } else {
                    const category = card.dataset.category;
                    if (category && category.includes(filter)) {
                        card.style.display = 'flex';
                        // Fade in animation
                        card.style.opacity = '0';
                        setTimeout(() => {
                            card.style.transition = 'opacity 0.3s ease';
                            card.style.opacity = '1';
                        }, 10);
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
            
            // Update grid layout for featured items
            updateGridLayout();
        });
    });
    
    // Function to update grid layout based on visible items
    function updateGridLayout() {
        const visibleCards = Array.from(projectCards).filter(card => 
            card.style.display !== 'none'
        );
        
        // Reset featured class for proper grid spanning
        visibleCards.forEach((card, index) => {
            if (card.classList.contains('featured')) {
                // Only span 2 columns if there are multiple visible cards
                if (visibleCards.length > 1) {
                    card.style.gridColumn = 'span 2';
                } else {
                    card.style.gridColumn = 'span 1';
                }
            }
        });
    }
    
    // View Details button functionality
    const viewDetailsButtons = document.querySelectorAll('.btn-view-details');
    
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get project title
            const projectCard = this.closest('.project-card');
            const projectTitle = projectCard.querySelector('.project-title').textContent;
            
            // Show alert for demo (in production, this would navigate to a detail page)
            alert(`Project Details: ${projectTitle}\n\nIn a production environment, this would navigate to a detailed project page with more photos, technical specifications, and client testimonials.`);
        });
    });
    
    // Animate stats on scroll
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const statsSection = document.querySelector('.project-stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
    
    function animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const finalValue = stat.textContent;
            const hasPlus = finalValue.includes('+');
            const hasPercent = finalValue.includes('%');
            const hasSuffix = finalValue.includes('M');
            
            let numericValue = parseFloat(finalValue.replace(/[^0-9.]/g, ''));
            let currentValue = 0;
            const increment = numericValue / 50; // Animation steps
            
            const timer = setInterval(() => {
                currentValue += increment;
                
                if (currentValue >= numericValue) {
                    currentValue = numericValue;
                    
                    // Format the final value
                    let displayValue = currentValue;
                    if (hasSuffix) displayValue = currentValue + 'M';
                    if (hasPercent) displayValue = currentValue + '%';
                    if (hasPlus) displayValue = Math.floor(currentValue) + '+';
                    
                    stat.textContent = displayValue;
                    clearInterval(timer);
                } else {
                    // Format the current value
                    let displayValue = Math.floor(currentValue);
                    if (hasSuffix) displayValue = currentValue.toFixed(1) + 'M';
                    if (hasPercent) displayValue = Math.floor(currentValue) + '%';
                    if (hasPlus && currentValue > 0) displayValue = Math.floor(currentValue) + '+';
                    
                    stat.textContent = displayValue;
                }
            }, 30);
        });
    }
    
    // Initialize language if updateLanguage function exists
    if (typeof updateLanguage === 'function') {
        updateLanguage();
    }
});