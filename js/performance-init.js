/**
 * FrameX Performance Initialization
 * Loads and initializes all performance optimization modules
 * Version: 2.0.0
 */

(function() {
  'use strict';

  // Performance configuration
  const config = {
    enableServiceWorker: true,
    enableLazyLoading: true,
    enableFontOptimization: true,
    enableWebVitals: true,
    enableMonitoring: true,
    debug: false // Set to true for development
  };

  // Load performance modules in order of priority
  const modules = [
    { name: 'Critical CSS', inline: true },
    { name: 'Font Optimizer', path: '/js/font-optimizer.min.js', critical: true },
    { name: 'Core Web Vitals', path: '/js/core-web-vitals.min.js', critical: true },
    { name: 'Image Optimization', path: '/js/image-optimization.min.js', defer: true },
    { name: 'Performance Monitor', path: '/js/performance-monitor.min.js', defer: true }
  ];

  // Inject critical CSS immediately
  const injectCriticalCSS = () => {
    const style = document.createElement('style');
    style.textContent = `
      /* Critical inline styles for immediate rendering */
      body { opacity: 0; transition: opacity 0.3s; }
      body.fonts-loaded { opacity: 1; }
      .img-placeholder { background: #f0f0f0; position: relative; overflow: hidden; }
      .img-placeholder::before { 
        content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
        animation: shimmer 1.5s infinite;
      }
      @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
    `;
    document.head.insertBefore(style, document.head.firstChild);
  };

  // Load module dynamically
  const loadModule = (module) => {
    return new Promise((resolve, reject) => {
      if (module.inline) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = module.path;
      
      if (module.defer) {
        script.defer = true;
      } else if (module.async) {
        script.async = true;
      }
      
      script.onload = () => {
        if (config.debug) {
          console.log(`✅ Loaded: ${module.name}`);
        }
        resolve();
      };
      
      script.onerror = () => {
        console.error(`❌ Failed to load: ${module.name}`);
        reject(new Error(`Failed to load ${module.name}`));
      };
      
      document.head.appendChild(script);
    });
  };

  // Register Service Worker
  const registerServiceWorker = async () => {
    if (!config.enableServiceWorker || !('serviceWorker' in navigator)) {
      return;
    }

    try {
      const registration = await navigator.serviceWorker.register('/service-worker.js', {
        scope: '/'
      });

      if (config.debug) {
        console.log('✅ Service Worker registered:', registration);
      }

      // Check for updates periodically
      setInterval(() => {
        registration.update();
      }, 60000); // Check every minute

      // Handle updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'activated') {
            // New service worker activated, show update notification
            if (window.confirm('New version available! Reload to update?')) {
              window.location.reload();
            }
          }
        });
      });

    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  };

  // Initialize all performance optimizations
  const initialize = async () => {
    // Mark initialization start
    if (window.performance && window.performance.mark) {
      window.performance.mark('performance-init-start');
    }

    // Inject critical CSS immediately
    injectCriticalCSS();

    // Load critical modules first
    const criticalModules = modules.filter(m => m.critical);
    const deferredModules = modules.filter(m => m.defer);

    try {
      // Load critical modules in parallel
      await Promise.all(criticalModules.map(loadModule));

      // Initialize loaded modules
      if (config.enableFontOptimization && window.FontOptimizer) {
        window.FontOptimizer.init();
      }

      if (config.enableWebVitals && window.CoreWebVitals) {
        window.CoreWebVitals.init();
      }

      // Load deferred modules after critical ones
      Promise.all(deferredModules.map(loadModule)).then(() => {
        // Initialize deferred modules
        if (config.enableLazyLoading && window.ImageOptimization) {
          window.ImageOptimization.init();
        }

        if (config.enableMonitoring && window.PerformanceMonitor) {
          window.PerformanceMonitor.init();
        }
      });

      // Register Service Worker
      registerServiceWorker();

      // Mark initialization complete
      if (window.performance && window.performance.mark) {
        window.performance.mark('performance-init-end');
        window.performance.measure('performance-init', 'performance-init-start', 'performance-init-end');
        
        if (config.debug) {
          const measure = window.performance.getEntriesByName('performance-init')[0];
          console.log(`⚡ Performance modules initialized in ${measure.duration.toFixed(2)}ms`);
        }
      }

    } catch (error) {
      console.error('Performance initialization failed:', error);
      // Continue with page load even if optimization fails
      document.body.classList.add('fonts-loaded');
    }
  };

  // Prefetch resources for next navigation
  const prefetchResources = () => {
    // Get all internal links
    const links = document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"]');
    
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        const href = link.getAttribute('href');
        if (href && !document.querySelector(`link[rel="prefetch"][href="${href}"]`)) {
          const prefetch = document.createElement('link');
          prefetch.rel = 'prefetch';
          prefetch.href = href;
          document.head.appendChild(prefetch);
        }
      }, { once: true, passive: true });
    });
  };

  // Adaptive loading based on connection
  const adaptiveLoading = () => {
    if (!('connection' in navigator)) return;

    const connection = navigator.connection;
    const effectiveType = connection.effectiveType;

    // Adjust loading strategy based on connection
    if (effectiveType === 'slow-2g' || effectiveType === '2g') {
      // Reduce quality for slow connections
      config.enableLazyLoading = true;
      config.enableMonitoring = false; // Disable monitoring to save bandwidth
      
      // Add class for CSS adjustments
      document.documentElement.classList.add('slow-connection');
    } else if (effectiveType === '3g') {
      // Standard quality for 3G
      document.documentElement.classList.add('medium-connection');
    } else {
      // High quality for 4G and above
      document.documentElement.classList.add('fast-connection');
      
      // Prefetch resources on fast connections
      if (document.readyState === 'complete') {
        prefetchResources();
      } else {
        window.addEventListener('load', prefetchResources);
      }
    }

    // Listen for connection changes
    connection.addEventListener('change', adaptiveLoading);
  };

  // Handle back/forward cache (bfcache)
  const handleBFCache = () => {
    // When page is restored from bfcache
    window.addEventListener('pageshow', (event) => {
      if (event.persisted) {
        // Page was restored from bfcache
        if (config.debug) {
          console.log('Page restored from bfcache');
        }
        
        // Refresh any time-sensitive data
        if (window.PerformanceMonitor) {
          window.PerformanceMonitor.mark('bfcache-restore');
        }
      }
    });

    // When page is about to be cached
    window.addEventListener('pagehide', (event) => {
      if (event.persisted) {
        // Page is being cached
        if (config.debug) {
          console.log('Page being cached to bfcache');
        }
      }
    });
  };

  // Error boundary for performance code
  const safeExecute = (fn, fallback) => {
    try {
      return fn();
    } catch (error) {
      console.error('Performance optimization error:', error);
      if (fallback) fallback();
    }
  };

  // Main initialization
  safeExecute(() => {
    // Set up adaptive loading
    adaptiveLoading();
    
    // Handle back/forward cache
    handleBFCache();
    
    // Initialize performance optimizations
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initialize);
    } else {
      initialize();
    }
    
    // Final cleanup and optimization on full load
    window.addEventListener('load', () => {
      // Clean up performance marks after reporting
      setTimeout(() => {
        if (window.performance && window.performance.clearMarks) {
          window.performance.clearMarks();
          window.performance.clearMeasures();
        }
      }, 5000);
    });
  }, () => {
    // Fallback: ensure page is visible even if optimizations fail
    document.body.style.opacity = '1';
  });

  // Expose configuration for debugging
  if (config.debug) {
    window.FrameXPerformance = {
      config,
      modules,
      reinitialize: initialize
    };
  }

})();