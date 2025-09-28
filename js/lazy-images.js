// Optimized lazy loading for images
(function() {
    'use strict';

    // Tiny 1x1 transparent gif placeholder
    const PLACEHOLDER = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    
    // WebP support detection
    let supportsWebP = false;
    const webpTest = new Image();
    webpTest.onload = webpTest.onerror = function () {
        supportsWebP = (webpTest.height === 2);
    };
    webpTest.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';

    // Intersection Observer for lazy loading
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '50px 0px', // Load images 50px before they become visible
        threshold: 0.01
    });

    function loadImage(img) {
        // Get the best source
        const src = getBestImageSrc(img);
        
        // Create a new image to preload
        const imageLoader = new Image();
        
        imageLoader.onload = function() {
            // Set the source and remove lazy class
            img.src = this.src;
            img.classList.remove('lazy');
            img.classList.add('loaded');
        };
        
        imageLoader.onerror = function() {
            // Fallback to original src if optimized version fails
            if (img.dataset.src !== img.dataset.fallback) {
                imageLoader.src = img.dataset.fallback || img.dataset.src;
            } else {
                img.classList.add('error');
            }
        };
        
        imageLoader.src = src;
    }

    function getBestImageSrc(img) {
        const dataSrc = img.dataset.src;
        const dataWebp = img.dataset.webp;
        
        // Return WebP version if supported and available
        if (supportsWebP && dataWebp) {
            return dataWebp;
        }
        
        return dataSrc;
    }

    function processImages() {
        // Find all images with data-src attribute
        const lazyImages = document.querySelectorAll('img[data-src]:not(.processed)');
        
        lazyImages.forEach(img => {
            // Mark as processed
            img.classList.add('processed', 'lazy');
            
            // Set placeholder
            if (!img.src) {
                img.src = PLACEHOLDER;
            }
            
            // Add loading styles
            img.style.transition = 'opacity 0.3s ease-in-out';
            img.style.opacity = '0.5';
            
            // Start observing
            if ('IntersectionObserver' in window) {
                imageObserver.observe(img);
            } else {
                // Fallback for older browsers
                loadImage(img);
            }
        });
    }

    // CSS for smooth transitions
    function addLazyStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .lazy {
                opacity: 0.5;
                transition: opacity 0.3s ease-in-out;
            }
            .lazy.loaded {
                opacity: 1;
            }
            .lazy.error {
                opacity: 0.3;
                background: #f0f0f0;
            }
        `;
        document.head.appendChild(style);
    }

    // Initialize
    function init() {
        addLazyStyles();
        processImages();
        
        // Re-process images if new ones are added dynamically
        const observer = new MutationObserver(() => {
            processImages();
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();