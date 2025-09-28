// Performance optimization utilities
(function() {
    'use strict';
    
    // Lazy load Font Awesome when needed
    function loadFontAwesome() {
        if (!document.querySelector('link[href*="fontawesome"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css';
            document.head.appendChild(link);
        }
    }
    
    // Lazy load images
    function lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // Preload critical resources
    function preloadCritical() {
        // Preload next likely page
        const links = document.querySelectorAll('a[href$=".html"]');
        links.forEach(link => {
            link.addEventListener('mouseenter', function() {
                const href = this.getAttribute('href');
                if (href && !document.querySelector(`link[rel="prefetch"][href="${href}"]`)) {
                    const prefetch = document.createElement('link');
                    prefetch.rel = 'prefetch';
                    prefetch.href = href;
                    document.head.appendChild(prefetch);
                }
            }, { once: true });
        });
    }
    
    // Optimize CSS delivery
    function optimizeCSSDelivery() {
        const cssLinks = document.querySelectorAll('link[rel="preload"][as="style"]');
        cssLinks.forEach(link => {
            link.addEventListener('load', function() {
                this.rel = 'stylesheet';
            });
        });
    }
    
    // Initialize performance optimizations
    function init() {
        // Load Font Awesome after page load
        window.addEventListener('load', loadFontAwesome);
        
        // Initialize lazy loading
        if ('IntersectionObserver' in window) {
            lazyLoadImages();
        }
        
        // Preload resources on hover
        preloadCritical();
        
        // Optimize CSS
        optimizeCSSDelivery();
    }
    
    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();