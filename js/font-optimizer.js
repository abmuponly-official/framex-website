/**
 * FrameX Font Optimization Module
 * Optimizes web font loading for better performance
 * Version: 2.0.0
 */

(function() {
  'use strict';

  // Font configuration
  const fontConfig = {
    fonts: [
      {
        family: 'Inter',
        weights: ['300', '400', '500', '600', '700'],
        styles: ['normal'],
        display: 'swap',
        preload: ['400', '600', '700'], // Preload critical weights
        subset: 'latin-ext' // Can be 'latin', 'latin-ext', 'vietnamese'
      }
    ],
    strategy: 'preload', // 'preload', 'prefetch', or 'lazy'
    timeout: 3000, // Fallback timeout
    sessionStorageKey: 'framex-fonts-loaded',
    cssClass: 'fonts-loaded'
  };

  // Check if fonts are already cached
  const fontsLoaded = () => {
    try {
      return sessionStorage.getItem(fontConfig.sessionStorageKey) === 'true';
    } catch (e) {
      return false;
    }
  };

  // Mark fonts as loaded
  const markFontsLoaded = () => {
    document.documentElement.classList.add(fontConfig.cssClass);
    try {
      sessionStorage.setItem(fontConfig.sessionStorageKey, 'true');
    } catch (e) {
      // SessionStorage not available
    }
  };

  // Generate Google Fonts URL with optimization
  const generateFontUrl = (font) => {
    const baseUrl = 'https://fonts.googleapis.com/css2';
    const families = [];
    
    // Build family string with weights
    const familyString = `family=${font.family}:wght@${font.weights.join(';')}`;
    families.push(familyString);
    
    // Build final URL with display parameter
    const params = [
      families.join('&'),
      `display=${font.display}`,
      font.subset ? `subset=${font.subset}` : ''
    ].filter(Boolean).join('&');
    
    return `${baseUrl}?${params}`;
  };

  // Preload critical font files
  const preloadFonts = () => {
    fontConfig.fonts.forEach(font => {
      if (font.preload && font.preload.length > 0) {
        // Generate and preload Google Fonts CSS
        const fontUrl = generateFontUrl({
          ...font,
          weights: font.preload // Only preload critical weights
        });
        
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = fontUrl;
        link.onload = function() {
          this.rel = 'stylesheet';
          markFontsLoaded();
        };
        
        document.head.appendChild(link);
        
        // Also add resource hints for font files
        const preconnect = document.createElement('link');
        preconnect.rel = 'preconnect';
        preconnect.href = 'https://fonts.gstatic.com';
        preconnect.crossOrigin = 'anonymous';
        document.head.appendChild(preconnect);
      }
    });
  };

  // Load fonts with CSS Font Loading API
  const loadFontsWithAPI = async () => {
    if (!('fonts' in document)) {
      return false;
    }

    try {
      const fontPromises = [];
      
      fontConfig.fonts.forEach(font => {
        font.weights.forEach(weight => {
          font.styles.forEach(style => {
            const fontFace = new FontFace(
              font.family,
              `url(https://fonts.gstatic.com/s/inter/v12/UcC73FwL.woff2) format('woff2')`,
              {
                weight: weight,
                style: style,
                display: font.display
              }
            );
            
            document.fonts.add(fontFace);
            fontPromises.push(fontFace.load());
          });
        });
      });
      
      await Promise.all(fontPromises);
      markFontsLoaded();
      return true;
    } catch (error) {
      console.error('Font loading failed:', error);
      return false;
    }
  };

  // Lazy load non-critical fonts
  const lazyLoadFonts = () => {
    // Use Intersection Observer to load fonts when needed
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const fontWeight = window.getComputedStyle(element).fontWeight;
          
          // Load specific font weight if not already loaded
          if (!document.fonts.check(`${fontWeight} 1em Inter`)) {
            loadFontWeight('Inter', fontWeight);
          }
          
          observer.unobserve(element);
        }
      });
    }, {
      rootMargin: '50px'
    });
    
    // Observe elements with specific font weights
    const elements = document.querySelectorAll('[class*="font-"], h1, h2, h3, h4, h5, h6, .bold, .light');
    elements.forEach(el => observer.observe(el));
  };

  // Load specific font weight
  const loadFontWeight = async (family, weight) => {
    if (!('fonts' in document)) return;
    
    try {
      const fontFace = new FontFace(
        family,
        `url(https://fonts.gstatic.com/s/inter/v12/UcC73FwL.woff2) format('woff2')`,
        {
          weight: weight,
          style: 'normal',
          display: 'swap'
        }
      );
      
      document.fonts.add(fontFace);
      await fontFace.load();
    } catch (error) {
      console.error(`Failed to load font ${family} ${weight}:`, error);
    }
  };

  // Optimize font rendering with CSS
  const injectFontCSS = () => {
    const style = document.createElement('style');
    style.textContent = `
      /* Font optimization CSS */
      html {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        font-feature-settings: "kern" 1, "liga" 1;
      }
      
      /* Prevent FOUT (Flash of Unstyled Text) */
      body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-display: swap;
      }
      
      /* Font loading states */
      html:not(.fonts-loaded) body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      
      /* Optimize font weights */
      .font-light { font-weight: 300; }
      .font-normal { font-weight: 400; }
      .font-medium { font-weight: 500; }
      .font-semibold { font-weight: 600; }
      .font-bold { font-weight: 700; }
      
      /* Prevent layout shift from font loading */
      h1, h2, h3, h4, h5, h6 {
        font-synthesis: none;
        line-height: 1.2;
      }
      
      /* Subset font for better performance */
      @font-face {
        font-family: 'Inter Subset';
        src: local('Inter'), local('Inter-Regular');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
    `;
    
    document.head.appendChild(style);
  };

  // Handle font loading timeout
  const handleTimeout = () => {
    setTimeout(() => {
      if (!document.documentElement.classList.contains(fontConfig.cssClass)) {
        console.warn('Font loading timeout - using fallback fonts');
        markFontsLoaded(); // Mark as loaded anyway to show content
      }
    }, fontConfig.timeout);
  };

  // Resource hints for faster font loading
  const addResourceHints = () => {
    // DNS prefetch for font domains
    const dnsPrefetch = document.createElement('link');
    dnsPrefetch.rel = 'dns-prefetch';
    dnsPrefetch.href = 'https://fonts.googleapis.com';
    document.head.appendChild(dnsPrefetch);
    
    // Preconnect to font domains
    const preconnect1 = document.createElement('link');
    preconnect1.rel = 'preconnect';
    preconnect1.href = 'https://fonts.googleapis.com';
    document.head.appendChild(preconnect1);
    
    const preconnect2 = document.createElement('link');
    preconnect2.rel = 'preconnect';
    preconnect2.href = 'https://fonts.gstatic.com';
    preconnect2.crossOrigin = 'anonymous';
    document.head.appendChild(preconnect2);
  };

  // Initialize font optimization
  const init = () => {
    // Add resource hints immediately
    addResourceHints();
    
    // Inject optimization CSS
    injectFontCSS();
    
    // Check if fonts are already cached
    if (fontsLoaded()) {
      markFontsLoaded();
      return;
    }
    
    // Choose loading strategy
    switch (fontConfig.strategy) {
      case 'preload':
        preloadFonts();
        break;
      case 'lazy':
        lazyLoadFonts();
        break;
      default:
        // Use Font Loading API if available
        if ('fonts' in document) {
          loadFontsWithAPI();
        } else {
          preloadFonts();
        }
    }
    
    // Set timeout fallback
    handleTimeout();
  };

  // Public API
  window.FontOptimizer = {
    init: init,
    load: loadFontsWithAPI,
    preload: preloadFonts,
    lazyLoad: lazyLoadFonts,
    isLoaded: fontsLoaded
  };

  // Auto-initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Also initialize on window load as fallback
  window.addEventListener('load', () => {
    if (!fontsLoaded()) {
      init();
    }
  });

})();