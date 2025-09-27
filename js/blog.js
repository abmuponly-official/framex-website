// Blog page specific functionality

// Add translations for blog page
if (typeof translations !== 'undefined') {
    // English translations
    translations.en = {
        ...translations.en,
        'blog-title': 'FrameX Blog',
        'blog-subtitle': 'Insights on smart construction, sustainable building, and innovation',
        
        // Categories
        'cat-all': 'All Articles',
        'cat-technology': 'Technology',
        'cat-sustainability': 'Sustainability',
        'cat-industry': 'Industry News',
        'cat-guides': 'Guides',
        
        // Article 1 - Featured
        'article1-date': 'December 15, 2024',
        'article1-title': 'The Future of Smart Steel Construction: How IoT and AI are Revolutionizing Building',
        'article1-excerpt': 'Discover how cutting-edge IoT sensors and AI algorithms are transforming steel construction, from predictive maintenance to real-time structural monitoring. Learn about the latest innovations that are making buildings smarter, safer, and more sustainable than ever before.',
        'author1-title': 'Chief Technology Officer',
        'read-time-8': '8 min read',
        
        // Article 2 - Sustainability
        'article2-date': 'December 10, 2024',
        'article2-title': 'Green Building Revolution: How Steel Structures Lead in Sustainability',
        'article2-excerpt': 'Explore how modern steel construction reduces carbon footprint by 40% compared to traditional methods. Learn about recyclable materials, energy efficiency, and sustainable building practices.',
        'read-time-5': '5 min read',
        
        // Article 3 - Industry News
        'article3-date': 'December 5, 2024',
        'article3-title': "Vietnam's Construction Market Set for 35% Growth by 2025",
        'article3-excerpt': "Analysis of Vietnam's booming construction sector, government infrastructure investments, and how prefabricated steel structures are capturing market share in urban development projects.",
        'read-time-6': '6 min read',
        
        // Article 4 - Guide
        'article4-date': 'November 28, 2024',
        'article4-title': 'Complete Guide: From Vision to Reality with Prefab Steel Construction',
        'article4-excerpt': 'Step-by-step guide covering planning permissions, design considerations, construction timeline, and cost optimization for your steel structure project. Includes checklists and expert tips.',
        'read-time-10': '10 min read',
        
        // Common elements
        'read-more': 'Read More',
        'load-more': 'Load More Articles',
        
        // Newsletter
        'newsletter-title': 'Stay Updated with FrameX Insights',
        'newsletter-subtitle': 'Get the latest articles on smart construction delivered to your inbox',
        'email-placeholder': 'Enter your email',
        'subscribe': 'Subscribe',
        
        // Resources
        'resources-title': 'Related Resources',
        'resource1-title': 'Technical Specifications',
        'resource1-desc': 'Download detailed specs for all FrameX products',
        'resource2-title': 'Video Tutorials',
        'resource2-desc': 'Watch installation guides and project showcases',
        'resource3-title': 'Cost Calculator',
        'resource3-desc': 'Estimate your project budget instantly',
        'download': 'Download',
        'watch-videos': 'Watch Videos',
        'calculate': 'Calculate'
    };
    
    // Vietnamese translations
    translations.vi = {
        ...translations.vi,
        'blog-title': 'Blog FrameX',
        'blog-subtitle': 'Thông tin về xây dựng thông minh, xây dựng bền vững và đổi mới',
        
        // Categories
        'cat-all': 'Tất Cả Bài Viết',
        'cat-technology': 'Công Nghệ',
        'cat-sustainability': 'Bền Vững',
        'cat-industry': 'Tin Ngành',
        'cat-guides': 'Hướng Dẫn',
        
        // Article 1 - Featured
        'article1-date': '15 Tháng 12, 2024',
        'article1-title': 'Tương Lai Của Xây Dựng Thép Thông Minh: IoT và AI Đang Cách Mạng Hóa Ngành Xây Dựng',
        'article1-excerpt': 'Khám phá cách cảm biến IoT và thuật toán AI tiên tiến đang biến đổi ngành xây dựng thép, từ bảo trì dự đoán đến giám sát kết cấu thời gian thực. Tìm hiểu về những đổi mới mới nhất giúp tòa nhà thông minh hơn, an toàn hơn và bền vững hơn.',
        'author1-title': 'Giám Đốc Công Nghệ',
        'read-time-8': '8 phút đọc',
        
        // Article 2 - Sustainability
        'article2-date': '10 Tháng 12, 2024',
        'article2-title': 'Cách Mạng Xanh: Kết Cấu Thép Dẫn Đầu Về Tính Bền Vững',
        'article2-excerpt': 'Khám phá cách xây dựng thép hiện đại giảm 40% lượng khí thải carbon so với phương pháp truyền thống. Tìm hiểu về vật liệu tái chế, hiệu quả năng lượng và thực hành xây dựng bền vững.',
        'read-time-5': '5 phút đọc',
        
        // Article 3 - Industry News
        'article3-date': '5 Tháng 12, 2024',
        'article3-title': 'Thị Trường Xây Dựng Việt Nam Dự Kiến Tăng 35% Vào 2025',
        'article3-excerpt': 'Phân tích ngành xây dựng đang bùng nổ của Việt Nam, đầu tư cơ sở hạ tầng của chính phủ và cách kết cấu thép tiền chế đang chiếm thị phần trong các dự án phát triển đô thị.',
        'read-time-6': '6 phút đọc',
        
        // Article 4 - Guide
        'article4-date': '28 Tháng 11, 2024',
        'article4-title': 'Hướng Dẫn Hoàn Chỉnh: Từ Ý Tưởng Đến Hiện Thực Với Xây Dựng Thép Tiền Chế',
        'article4-excerpt': 'Hướng dẫn từng bước về giấy phép quy hoạch, cân nhắc thiết kế, tiến độ xây dựng và tối ưu chi phí cho dự án kết cấu thép của bạn. Bao gồm danh sách kiểm tra và mẹo chuyên gia.',
        'read-time-10': '10 phút đọc',
        
        // Common elements
        'read-more': 'Đọc Thêm',
        'load-more': 'Tải Thêm Bài Viết',
        
        // Newsletter
        'newsletter-title': 'Cập Nhật Tin Tức FrameX',
        'newsletter-subtitle': 'Nhận bài viết mới nhất về xây dựng thông minh',
        'email-placeholder': 'Nhập email của bạn',
        'subscribe': 'Đăng Ký',
        
        // Resources
        'resources-title': 'Tài Nguyên Liên Quan',
        'resource1-title': 'Thông Số Kỹ Thuật',
        'resource1-desc': 'Tải xuống thông số chi tiết cho tất cả sản phẩm FrameX',
        'resource2-title': 'Video Hướng Dẫn',
        'resource2-desc': 'Xem hướng dẫn lắp đặt và giới thiệu dự án',
        'resource3-title': 'Công Cụ Tính Chi Phí',
        'resource3-desc': 'Ước tính ngân sách dự án ngay lập tức',
        'download': 'Tải Xuống',
        'watch-videos': 'Xem Video',
        'calculate': 'Tính Toán'
    };
}

// Blog filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    // Category filtering
    const categoryPills = document.querySelectorAll('.pill');
    const blogCards = document.querySelectorAll('.blog-card');
    const featuredArticle = document.querySelector('.featured-article');
    
    categoryPills.forEach(pill => {
        pill.addEventListener('click', function() {
            // Update active pill
            categoryPills.forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            
            const selectedCategory = this.dataset.category;
            
            // Filter articles
            filterArticles(selectedCategory);
        });
    });
    
    function filterArticles(category) {
        // Filter featured article
        if (featuredArticle) {
            const featuredCategory = featuredArticle.dataset.category;
            if (category === 'all' || featuredCategory === category) {
                featuredArticle.parentElement.parentElement.style.display = 'block';
                // Fade in animation
                featuredArticle.style.opacity = '0';
                setTimeout(() => {
                    featuredArticle.style.transition = 'opacity 0.3s ease';
                    featuredArticle.style.opacity = '1';
                }, 10);
            } else {
                featuredArticle.parentElement.parentElement.style.display = 'none';
            }
        }
        
        // Filter blog cards
        blogCards.forEach(card => {
            const cardCategory = card.dataset.category;
            if (category === 'all' || cardCategory === category) {
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
        });
    }
    
    // Read more functionality
    const readMoreButtons = document.querySelectorAll('.read-more-btn, .card-link');
    
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get article title
            const articleElement = this.closest('.featured-article, .blog-card');
            let articleTitle = '';
            
            if (articleElement.classList.contains('featured-article')) {
                articleTitle = articleElement.querySelector('.article-title a').textContent;
            } else {
                articleTitle = articleElement.querySelector('.card-title a').textContent;
            }
            
            // Show alert for demo
            alert(`Article: ${articleTitle}\n\nIn a production environment, this would navigate to the full article page with detailed content, related articles, and comment section.`);
        });
    });
    
    // Load more articles
    const loadMoreBtn = document.querySelector('.load-more-btn');
    let articlesLoaded = 0;
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // Simulate loading more articles
            articlesLoaded++;
            
            if (articlesLoaded >= 2) {
                this.textContent = 'No More Articles';
                this.disabled = true;
                this.style.opacity = '0.5';
                this.style.cursor = 'not-allowed';
            } else {
                // Show loading state
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
                
                // Simulate API call
                setTimeout(() => {
                    this.innerHTML = originalText;
                    
                    // Show success message
                    const message = document.createElement('div');
                    message.textContent = '3 more articles loaded!';
                    message.style.cssText = `
                        position: fixed;
                        bottom: 20px;
                        right: 20px;
                        background: var(--black);
                        color: var(--white);
                        padding: var(--space-md);
                        border-radius: 4px;
                        z-index: 1000;
                        animation: slideIn 0.3s ease;
                    `;
                    document.body.appendChild(message);
                    
                    setTimeout(() => {
                        message.remove();
                    }, 3000);
                }, 1000);
            }
        });
    }
    
    // Newsletter form handling
    window.handleNewsletterSubmit = function(event) {
        event.preventDefault();
        
        const form = event.target;
        const emailInput = form.querySelector('input[type="email"]');
        const submitBtn = form.querySelector('button[type="submit"]');
        const email = emailInput.value;
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing...';
        
        // Simulate API call
        setTimeout(() => {
            // Reset form
            form.reset();
            submitBtn.disabled = false;
            
            // Update button text based on current language
            const currentLang = localStorage.getItem('framex-language') || 'en';
            submitBtn.textContent = translations[currentLang]['subscribe'] || 'Subscribe';
            
            // Show success message
            alert(`Thank you for subscribing!\n\nEmail: ${email}\n\nYou will receive our latest articles and updates.`);
        }, 1500);
    };
    
    // Resource links
    const resourceLinks = document.querySelectorAll('.resource-link');
    
    resourceLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const resourceTitle = this.parentElement.querySelector('h3').textContent;
            
            if (this.textContent.includes('Download')) {
                alert(`Downloading: ${resourceTitle}\n\nIn production, this would download a PDF file with technical specifications.`);
            } else if (this.textContent.includes('Video')) {
                alert(`Opening Video Library: ${resourceTitle}\n\nIn production, this would open a video gallery with tutorials and showcases.`);
            } else if (this.textContent.includes('Calculate')) {
                alert(`Opening Calculator: ${resourceTitle}\n\nIn production, this would open an interactive cost calculator tool.`);
            }
        });
    });
    
    // Add smooth scroll animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Initialize language if updateLanguage function exists
    if (typeof updateLanguage === 'function') {
        updateLanguage();
    }
});