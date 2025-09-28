/**
 * FrameX Core Web Vitals Optimization
 * Monitors and optimizes LCP, FID, CLS, FCP, TTFB
 * Version: 2.0.0
 */

(function() {
  'use strict';

  // Core Web Vitals thresholds
  const thresholds = {
    LCP: { good: 2500, poor: 4000 }, // Largest Contentful Paint (ms)
    FID: { good: 100, poor: 300 },   // First Input Delay (ms)
    CLS: { good: 0.1, poor: 0.25 },  // Cumulative Layout Shift
    FCP: { good: 1800, poor: 3000 }, // First Contentful Paint (ms)
    TTFB: { good: 800, poor: 1800 }  // Time to First Byte (ms)
  };

  // Metrics storage
  const metrics = {
    LCP: null,
    FID: null,
    CLS: null,
    FCP: null,
    TTFB: null,
    INP: null, // Interaction to Next Paint
    navigationTiming: {}
  };

  // Performance optimization utilities
  const optimizations = {
    
    // Optimize Largest Contentful Paint (LCP)
    optimizeLCP() {
      // Preload hero image or largest content
      const heroImage = document.querySelector('.hero img, .hero-section img, [data-hero]');
      if (heroImage && heroImage.src) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = heroImage.src;
        link.fetchPriority = 'high';
        document.head.appendChild(link);
      }

      // Preload critical CSS
      const criticalStyles = document.querySelector('link[href*="critical"]');
      if (criticalStyles) {
        criticalStyles.rel = 'preload';
        criticalStyles.as = 'style';
        criticalStyles.onload = function() { this.rel = 'stylesheet'; };
      }

      // Remove render-blocking resources
      document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
        if (!link.href.includes('critical')) {
          link.media = 'print';
          link.onload = function() { this.media = 'all'; };
        }
      });

      // Optimize video elements
      document.querySelectorAll('video').forEach(video => {
        video.preload = 'metadata';
        if (!video.hasAttribute('playsinline')) {
          video.setAttribute('playsinline', '');
        }
      });
    },

    // Optimize First Input Delay (FID) and Interaction to Next Paint (INP)
    optimizeFID() {
      // Break up long tasks
      const yieldToMain = () => {
        return new Promise(resolve => {
          setTimeout(resolve, 0);
        });
      };

      // Defer non-critical JavaScript
      document.querySelectorAll('script:not([async]):not([defer])').forEach(script => {
        if (!script.src.includes('critical') && !script.src.includes('main')) {
          script.defer = true;
        }
      });

      // Use passive event listeners for scroll and touch
      const passiveEvents = ['touchstart', 'touchmove', 'wheel', 'scroll'];
      passiveEvents.forEach(eventType => {
        window.addEventListener(eventType, () => {}, { passive: true });
      });

      // Implement input delay optimization
      let inputTimer;
      const optimizeInput = (callback, delay = 50) => {
        clearTimeout(inputTimer);
        inputTimer = setTimeout(callback, delay);
      };

      // Apply to all input elements
      document.querySelectorAll('input, textarea, select').forEach(element => {
        element.addEventListener('input', (e) => {
          optimizeInput(() => {
            // Process input after delay
            element.dispatchEvent(new CustomEvent('optimizedInput', {
              detail: { value: e.target.value }
            }));
          });
        });
      });

      // Use Web Workers for heavy computations
      if (window.Worker) {
        window.runInWorker = (fn, args) => {
          return new Promise((resolve, reject) => {
            const blob = new Blob([`
              self.onmessage = function(e) {
                const fn = ${fn.toString()};
                const result = fn(...e.data);
                self.postMessage(result);
              }
            `], { type: 'application/javascript' });
            
            const worker = new Worker(URL.createObjectURL(blob));
            worker.onmessage = (e) => {
              resolve(e.data);
              worker.terminate();
            };
            worker.onerror = reject;
            worker.postMessage(args);
          });
        };
      }
    },

    // Optimize Cumulative Layout Shift (CLS)
    optimizeCLS() {
      // Set explicit dimensions for images
      document.querySelectorAll('img:not([width])').forEach(img => {
        if (img.naturalWidth && img.naturalHeight) {
          img.width = img.naturalWidth;
          img.height = img.naturalHeight;
        }
      });

      // Add aspect-ratio to prevent layout shifts
      document.querySelectorAll('img, video, iframe').forEach(element => {
        const width = element.getAttribute('width');
        const height = element.getAttribute('height');
        
        if (width && height && !element.style.aspectRatio) {
          element.style.aspectRatio = `${width} / ${height}`;
        }
      });

      // Reserve space for dynamic content
      const reserveSpace = (selector, minHeight) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          if (!el.style.minHeight) {
            el.style.minHeight = minHeight + 'px';
          }
        });
      };

      // Common dynamic content areas
      reserveSpace('.ad-container', 250);
      reserveSpace('.social-embed', 350);
      reserveSpace('.dynamic-content', 200);

      // Prevent font-related layout shifts
      document.documentElement.style.fontDisplay = 'optional';

      // Stabilize animations
      const animations = document.querySelectorAll('[data-animate], .animate');
      animations.forEach(element => {
        element.style.willChange = 'transform';
        element.style.transform = 'translateZ(0)';
      });

      // Prevent layout shifts from late-loading content
      const observer = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
          if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(node => {
              if (node.nodeType === 1) { // Element node
                // Set dimensions if it's an image
                if (node.tagName === 'IMG') {
                  node.loading = 'lazy';
                  node.decoding = 'async';
                }
                // Add contain property for layout stability
                if (node.classList && node.classList.contains('container')) {
                  node.style.contain = 'layout';
                }
              }
            });
          }
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    },

    // Optimize Time to First Byte (TTFB)
    optimizeTTFB() {
      // Implement resource hints
      const addResourceHint = (rel, href) => {
        const link = document.createElement('link');
        link.rel = rel;
        link.href = href;
        if (rel === 'preconnect') {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      };

      // DNS prefetch for third-party domains
      const thirdPartyDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.google-analytics.com',
        'https://www.googletagmanager.com'
      ];

      thirdPartyDomains.forEach(domain => {
        addResourceHint('dns-prefetch', domain);
        addResourceHint('preconnect', domain);
      });

      // Implement early hints
      if ('connection' in navigator) {
        const connection = navigator.connection;
        
        // Adapt loading strategy based on connection
        if (connection.effectiveType === '4g') {
          // Preload more resources on fast connections
          document.querySelectorAll('link[data-preload-4g]').forEach(link => {
            link.rel = 'preload';
          });
        } else if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
          // Reduce resource loading on slow connections
          document.querySelectorAll('img[data-optional]').forEach(img => {
            img.loading = 'lazy';
            img.decoding = 'async';
          });
        }
      }
    },

    // Priority hints for resource loading
    applyPriorityHints() {
      // High priority for critical resources
      document.querySelectorAll('[data-priority="high"]').forEach(element => {
        element.fetchPriority = 'high';
      });

      // Low priority for below-the-fold content
      document.querySelectorAll('[data-priority="low"]').forEach(element => {
        element.fetchPriority = 'low';
      });

      // Auto priority for images based on viewport position
      const viewportHeight = window.innerHeight;
      document.querySelectorAll('img').forEach(img => {
        const rect = img.getBoundingClientRect();
        if (rect.top < viewportHeight) {
          img.fetchPriority = 'high';
        } else if (rect.top < viewportHeight * 2) {
          img.fetchPriority = 'auto';
        } else {
          img.fetchPriority = 'low';
        }
      });
    }
  };

  // Measure Core Web Vitals
  const measureVitals = () => {
    // Measure LCP
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          metrics.LCP = lastEntry.renderTime || lastEntry.loadTime;
          reportMetric('LCP', metrics.LCP);
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      } catch (e) {
        console.error('LCP measurement failed:', e);
      }

      // Measure FID
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (!metrics.FID) {
              metrics.FID = entry.processingStart - entry.startTime;
              reportMetric('FID', metrics.FID);
            }
          });
        });
        fidObserver.observe({ type: 'first-input', buffered: true });
      } catch (e) {
        console.error('FID measurement failed:', e);
      }

      // Measure CLS
      let clsValue = 0;
      let clsEntries = [];
      try {
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              const firstSessionEntry = clsEntries[0];
              const lastSessionEntry = clsEntries[clsEntries.length - 1];
              
              if (entry.startTime - lastSessionEntry.startTime < 1000 &&
                  entry.startTime - firstSessionEntry.startTime < 5000) {
                clsEntries.push(entry);
                clsValue += entry.value;
              } else {
                clsEntries = [entry];
                clsValue = entry.value;
              }
              
              metrics.CLS = clsValue;
              reportMetric('CLS', metrics.CLS);
            }
          }
        });
        clsObserver.observe({ type: 'layout-shift', buffered: true });
      } catch (e) {
        console.error('CLS measurement failed:', e);
      }
    }

    // Measure FCP and TTFB using Navigation Timing API
    if ('performance' in window && 'getEntriesByType' in performance) {
      const navigationEntry = performance.getEntriesByType('navigation')[0];
      if (navigationEntry) {
        metrics.TTFB = navigationEntry.responseStart - navigationEntry.fetchStart;
        reportMetric('TTFB', metrics.TTFB);
      }

      const paintEntries = performance.getEntriesByType('paint');
      paintEntries.forEach(entry => {
        if (entry.name === 'first-contentful-paint') {
          metrics.FCP = entry.startTime;
          reportMetric('FCP', metrics.FCP);
        }
      });
    }
  };

  // Report metrics
  const reportMetric = (name, value) => {
    const rating = getMetricRating(name, value);
    
    console.log(`[Web Vitals] ${name}: ${value.toFixed(2)}ms (${rating})`);
    
    // Send to analytics if available
    if (window.gtag) {
      gtag('event', 'web_vitals', {
        event_category: 'Web Vitals',
        event_label: name,
        value: Math.round(value),
        metric_rating: rating,
        non_interaction: true
      });
    }
    
    // Custom event for metric tracking
    window.dispatchEvent(new CustomEvent('web-vital-measured', {
      detail: { metric: name, value, rating }
    }));
  };

  // Get metric rating
  const getMetricRating = (name, value) => {
    const threshold = thresholds[name];
    if (!threshold) return 'unknown';
    
    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  };

  // Initialize optimizations
  const init = () => {
    // Apply optimizations
    optimizations.optimizeLCP();
    optimizations.optimizeFID();
    optimizations.optimizeCLS();
    optimizations.optimizeTTFB();
    optimizations.applyPriorityHints();
    
    // Start measuring
    measureVitals();
    
    // Re-apply optimizations after page load
    window.addEventListener('load', () => {
      setTimeout(() => {
        optimizations.applyPriorityHints();
      }, 1000);
    });
  };

  // Public API
  window.CoreWebVitals = {
    init,
    metrics,
    thresholds,
    optimize: optimizations,
    measure: measureVitals,
    getMetricRating
  };

  // Auto-initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();