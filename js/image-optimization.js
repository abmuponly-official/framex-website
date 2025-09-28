/**
 * FrameX Image Optimization Module
 * Implements lazy loading, WebP support, and responsive images
 * Version: 2.0.0
 */

(function() {
  'use strict';

  // Configuration
  const config = {
    rootMargin: '50px 0px', // Start loading 50px before viewport
    threshold: 0.01,
    fadeInDuration: 300,
    placeholderClass: 'img-placeholder',
    loadedClass: 'img-loaded',
    errorClass: 'img-error',
    webpSupport: false
  };

  // Check WebP support
  const checkWebPSupport = () => {
    return new Promise((resolve) => {
      const webP = new Image();
      webP.onload = webP.onerror = () => {
        config.webpSupport = webP.height === 2;
        resolve(config.webpSupport);
      };
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    });
  };

  // Create placeholder with blur effect
  const createPlaceholder = (img) => {
    const placeholder = document.createElement('div');
    placeholder.className = config.placeholderClass;
    
    // Set dimensions if available
    const width = img.getAttribute('width');
    const height = img.getAttribute('height');
    
    if (width && height) {
      placeholder.style.paddingBottom = `${(height / width) * 100}%`;
    } else {
      placeholder.style.paddingBottom = '56.25%'; // Default 16:9 aspect ratio
    }
    
    // Add blur placeholder if data-placeholder exists
    const placeholderSrc = img.getAttribute('data-placeholder');
    if (placeholderSrc) {
      placeholder.style.backgroundImage = `url(${placeholderSrc})`;
      placeholder.style.backgroundSize = 'cover';
      placeholder.style.filter = 'blur(5px)';
    } else {
      placeholder.style.backgroundColor = '#f0f0f0';
    }
    
    return placeholder;
  };

  // Load image with fade-in effect
  const loadImage = (img) => {
    const src = img.getAttribute('data-src');
    const srcset = img.getAttribute('data-srcset');
    const sizes = img.getAttribute('data-sizes');
    
    if (!src && !srcset) return;

    // Create new image element for preloading
    const tempImg = new Image();
    
    // Handle successful load
    tempImg.onload = () => {
      // Set actual sources
      if (src) img.src = src;
      if (srcset) img.srcset = srcset;
      if (sizes) img.sizes = sizes;
      
      // Remove data attributes
      img.removeAttribute('data-src');
      img.removeAttribute('data-srcset');
      img.removeAttribute('data-sizes');
      
      // Add loaded class with fade-in effect
      requestAnimationFrame(() => {
        img.classList.add(config.loadedClass);
        
        // Remove placeholder after transition
        const placeholder = img.previousElementSibling;
        if (placeholder && placeholder.classList.contains(config.placeholderClass)) {
          setTimeout(() => {
            placeholder.remove();
          }, config.fadeInDuration);
        }
      });
      
      // Trigger custom event
      img.dispatchEvent(new CustomEvent('lazyloaded', {
        detail: { src: src || srcset }
      }));
    };
    
    // Handle loading error
    tempImg.onerror = () => {
      img.classList.add(config.errorClass);
      
      // Try fallback image if available
      const fallback = img.getAttribute('data-fallback');
      if (fallback && fallback !== src) {
        img.src = fallback;
      }
      
      // Trigger error event
      img.dispatchEvent(new CustomEvent('lazyerror', {
        detail: { src: src || srcset }
      }));
    };
    
    // Start loading
    if (srcset) tempImg.srcset = srcset;
    tempImg.src = src || img.getAttribute('data-src');
  };

  // Intersection Observer for lazy loading
  let imageObserver;
  
  const createObserver = () => {
    if (!('IntersectionObserver' in window)) {
      // Fallback for browsers without IntersectionObserver
      loadAllImages();
      return;
    }

    imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          loadImage(img);
          imageObserver.unobserve(img);
        }
      });
    }, {
      rootMargin: config.rootMargin,
      threshold: config.threshold
    });
  };

  // Process all lazy images
  const processImages = () => {
    const lazyImages = document.querySelectorAll('img[data-src], img[data-srcset]');
    
    lazyImages.forEach(img => {
      // Add loading attribute for native lazy loading support
      if ('loading' in HTMLImageElement.prototype) {
        img.loading = 'lazy';
      }
      
      // Add decoding attribute for performance
      img.decoding = 'async';
      
      // Create and insert placeholder
      const wrapper = img.parentElement;
      if (!wrapper.querySelector('.' + config.placeholderClass)) {
        const placeholder = createPlaceholder(img);
        img.parentElement.insertBefore(placeholder, img);
      }
      
      // Start observing
      if (imageObserver) {
        imageObserver.observe(img);
      }
    });
  };

  // Fallback: Load all images immediately
  const loadAllImages = () => {
    const lazyImages = document.querySelectorAll('img[data-src], img[data-srcset]');
    lazyImages.forEach(loadImage);
  };

  // Convert image sources to WebP if supported
  const convertToWebP = () => {
    if (!config.webpSupport) return;
    
    const images = document.querySelectorAll('img[data-src], img[src]');
    images.forEach(img => {
      const src = img.getAttribute('data-src') || img.src;
      
      // Skip if already WebP or external URL
      if (src.includes('.webp') || src.startsWith('http://') || src.startsWith('https://')) {
        return;
      }
      
      // Convert to WebP
      const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      
      if (img.getAttribute('data-src')) {
        img.setAttribute('data-src', webpSrc);
        img.setAttribute('data-fallback', src); // Keep original as fallback
      } else {
        img.src = webpSrc;
      }
    });
  };

  // Preload critical images
  const preloadCriticalImages = () => {
    const criticalImages = document.querySelectorAll('img[data-critical]');
    
    criticalImages.forEach(img => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = img.getAttribute('data-src') || img.src;
      
      // Add responsive preload if srcset exists
      const srcset = img.getAttribute('data-srcset');
      if (srcset) {
        link.imageSrcset = srcset;
        const sizes = img.getAttribute('data-sizes');
        if (sizes) {
          link.imageSizes = sizes;
        }
      }
      
      document.head.appendChild(link);
      
      // Load critical images immediately
      loadImage(img);
      if (imageObserver) {
        imageObserver.unobserve(img);
      }
    });
  };

  // Progressive image loading for large images
  const setupProgressiveLoading = () => {
    const progressiveImages = document.querySelectorAll('img[data-progressive]');
    
    progressiveImages.forEach(img => {
      const lowQuality = img.getAttribute('data-progressive');
      const highQuality = img.getAttribute('data-src');
      
      if (lowQuality && highQuality) {
        // Load low quality immediately
        img.src = lowQuality;
        img.style.filter = 'blur(5px)';
        img.style.transition = 'filter 0.3s';
        
        // Load high quality
        const tempImg = new Image();
        tempImg.onload = () => {
          img.src = highQuality;
          img.style.filter = 'none';
          img.removeAttribute('data-progressive');
        };
        tempImg.src = highQuality;
      }
    });
  };

  // Public API
  window.ImageOptimization = {
    init: async function() {
      // Check WebP support
      await checkWebPSupport();
      
      // Convert images to WebP if supported
      convertToWebP();
      
      // Create observer
      createObserver();
      
      // Preload critical images
      preloadCriticalImages();
      
      // Setup progressive loading
      setupProgressiveLoading();
      
      // Process all images
      processImages();
      
      // Handle dynamically added images
      if (window.MutationObserver) {
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
              mutation.addedNodes.forEach((node) => {
                if (node.tagName === 'IMG' && (node.getAttribute('data-src') || node.getAttribute('data-srcset'))) {
                  processImages();
                }
              });
            }
          });
        });
        
        observer.observe(document.body, {
          childList: true,
          subtree: true
        });
      }
    },
    
    // Manually load specific image
    load: function(img) {
      if (typeof img === 'string') {
        img = document.querySelector(img);
      }
      if (img) {
        loadImage(img);
      }
    },
    
    // Load all images in container
    loadAll: function(container) {
      if (typeof container === 'string') {
        container = document.querySelector(container);
      }
      const images = container ? container.querySelectorAll('img[data-src], img[data-srcset]') : [];
      images.forEach(loadImage);
    },
    
    // Update configuration
    updateConfig: function(newConfig) {
      Object.assign(config, newConfig);
    }
  };

  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.ImageOptimization.init();
    });
  } else {
    window.ImageOptimization.init();
  }

})();