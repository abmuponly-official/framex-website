/**
 * FrameX Performance Monitoring & Reporting
 * Real-time performance tracking and optimization
 * Version: 2.0.0
 */

(function() {
  'use strict';

  // Performance monitoring configuration
  const config = {
    enableLogging: true,
    enableReporting: true,
    reportingEndpoint: '/api/performance', // Change to your endpoint
    reportingInterval: 30000, // Report every 30 seconds
    sampleRate: 1.0, // Sample 100% of users (adjust for production)
    storageKey: 'framex-performance-data',
    maxStoredMetrics: 100
  };

  // Performance data storage
  const performanceData = {
    pageLoadTime: 0,
    domReadyTime: 0,
    windowLoadTime: 0,
    resources: [],
    userTimings: {},
    errors: [],
    vitals: {},
    memory: {},
    connection: {},
    device: {}
  };

  // Collect navigation timing data
  const collectNavigationTiming = () => {
    if (!('performance' in window) || !('timing' in performance)) return;

    const timing = performance.timing;
    const navigation = performance.navigation;

    performanceData.pageLoadTime = timing.loadEventEnd - timing.navigationStart;
    performanceData.domReadyTime = timing.domContentLoadedEventEnd - timing.navigationStart;
    performanceData.windowLoadTime = timing.loadEventEnd - timing.navigationStart;

    return {
      // Network timings
      dns: timing.domainLookupEnd - timing.domainLookupStart,
      tcp: timing.connectEnd - timing.connectStart,
      ssl: timing.connectEnd - timing.secureConnectionStart,
      ttfb: timing.responseStart - timing.navigationStart,
      download: timing.responseEnd - timing.responseStart,
      
      // Processing timings
      domParsing: timing.domInteractive - timing.domLoading,
      domContentLoaded: timing.domContentLoadedEventEnd - timing.domContentLoadedEventStart,
      domComplete: timing.domComplete - timing.domInteractive,
      loadEvent: timing.loadEventEnd - timing.loadEventStart,
      
      // Total times
      totalTime: timing.loadEventEnd - timing.navigationStart,
      
      // Navigation info
      redirectCount: navigation.redirectCount,
      navigationType: navigation.type // 0: navigate, 1: reload, 2: back/forward
    };
  };

  // Collect resource timing data
  const collectResourceTiming = () => {
    if (!('performance' in window) || !('getEntriesByType' in performance)) return [];

    const resources = performance.getEntriesByType('resource');
    const resourceData = [];

    resources.forEach(resource => {
      const data = {
        name: resource.name,
        type: resource.initiatorType,
        duration: resource.duration,
        size: resource.transferSize || 0,
        protocol: resource.nextHopProtocol,
        
        // Timing breakdown
        dns: resource.domainLookupEnd - resource.domainLookupStart,
        tcp: resource.connectEnd - resource.connectStart,
        ssl: resource.secureConnectionStart > 0 ? resource.connectEnd - resource.secureConnectionStart : 0,
        ttfb: resource.responseStart - resource.startTime,
        download: resource.responseEnd - resource.responseStart,
        
        // Cache info
        cached: resource.transferSize === 0 && resource.decodedBodySize > 0,
        
        // Compression info
        compressed: resource.encodedBodySize > 0 && resource.encodedBodySize < resource.decodedBodySize,
        compressionRatio: resource.decodedBodySize > 0 ? 
          (1 - resource.encodedBodySize / resource.decodedBodySize) * 100 : 0
      };

      // Categorize resource
      if (resource.name.includes('.js')) data.category = 'javascript';
      else if (resource.name.includes('.css')) data.category = 'stylesheet';
      else if (resource.name.match(/\.(jpg|jpeg|png|gif|webp|svg)/)) data.category = 'image';
      else if (resource.name.match(/\.(woff|woff2|ttf|otf)/)) data.category = 'font';
      else data.category = 'other';

      resourceData.push(data);
    });

    // Sort by duration (slowest first)
    resourceData.sort((a, b) => b.duration - a.duration);

    return resourceData;
  };

  // Collect memory usage (Chrome only)
  const collectMemoryUsage = () => {
    if (!('memory' in performance)) return null;

    return {
      usedJSHeapSize: Math.round(performance.memory.usedJSHeapSize / 1048576), // MB
      totalJSHeapSize: Math.round(performance.memory.totalJSHeapSize / 1048576), // MB
      jsHeapSizeLimit: Math.round(performance.memory.jsHeapSizeLimit / 1048576), // MB
      usage: ((performance.memory.usedJSHeapSize / performance.memory.jsHeapSizeLimit) * 100).toFixed(2)
    };
  };

  // Collect connection information
  const collectConnectionInfo = () => {
    if (!('connection' in navigator)) return null;

    const connection = navigator.connection;
    return {
      effectiveType: connection.effectiveType, // 4g, 3g, 2g, slow-2g
      downlink: connection.downlink, // Mbps
      rtt: connection.rtt, // Round trip time in ms
      saveData: connection.saveData || false
    };
  };

  // Collect device information
  const collectDeviceInfo = () => {
    return {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      screenResolution: `${screen.width}x${screen.height}`,
      viewportSize: `${window.innerWidth}x${window.innerHeight}`,
      pixelRatio: window.devicePixelRatio || 1,
      colorDepth: screen.colorDepth,
      touchSupport: 'ontouchstart' in window,
      cookieEnabled: navigator.cookieEnabled,
      onLine: navigator.onLine,
      doNotTrack: navigator.doNotTrack === '1'
    };
  };

  // Monitor JavaScript errors
  const monitorErrors = () => {
    window.addEventListener('error', (event) => {
      const errorData = {
        message: event.message,
        source: event.filename,
        line: event.lineno,
        column: event.colno,
        stack: event.error ? event.error.stack : '',
        timestamp: Date.now(),
        userAgent: navigator.userAgent
      };

      performanceData.errors.push(errorData);

      // Limit stored errors
      if (performanceData.errors.length > 50) {
        performanceData.errors = performanceData.errors.slice(-50);
      }

      // Log error if enabled
      if (config.enableLogging) {
        console.error('[Performance Monitor] JavaScript Error:', errorData);
      }
    });

    // Monitor promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      const errorData = {
        type: 'unhandledRejection',
        reason: event.reason,
        promise: event.promise,
        timestamp: Date.now()
      };

      performanceData.errors.push(errorData);

      if (config.enableLogging) {
        console.error('[Performance Monitor] Unhandled Promise Rejection:', errorData);
      }
    });
  };

  // Custom performance marks
  const mark = (name) => {
    if ('performance' in window && 'mark' in performance) {
      performance.mark(name);
      performanceData.userTimings[name] = performance.now();
    }
  };

  // Custom performance measures
  const measure = (name, startMark, endMark) => {
    if ('performance' in window && 'measure' in performance) {
      try {
        performance.measure(name, startMark, endMark);
        const measures = performance.getEntriesByName(name, 'measure');
        if (measures.length > 0) {
          performanceData.userTimings[name] = measures[0].duration;
        }
      } catch (e) {
        console.error('Performance measure failed:', e);
      }
    }
  };

  // Generate performance report
  const generateReport = () => {
    const navigationTiming = collectNavigationTiming();
    const resources = collectResourceTiming();
    const memory = collectMemoryUsage();
    const connection = collectConnectionInfo();
    const device = collectDeviceInfo();

    const report = {
      timestamp: Date.now(),
      url: window.location.href,
      
      // Page timing
      timing: navigationTiming,
      
      // Resource breakdown
      resources: {
        total: resources.length,
        byType: {},
        slowest: resources.slice(0, 10), // Top 10 slowest
        totalSize: resources.reduce((sum, r) => sum + (r.size || 0), 0),
        cachedCount: resources.filter(r => r.cached).length,
        compressedCount: resources.filter(r => r.compressed).length
      },
      
      // Core Web Vitals (if available)
      vitals: performanceData.vitals,
      
      // System info
      memory: memory,
      connection: connection,
      device: device,
      
      // Custom timings
      customTimings: performanceData.userTimings,
      
      // Errors
      errors: performanceData.errors.slice(-10) // Last 10 errors
    };

    // Group resources by type
    resources.forEach(resource => {
      if (!report.resources.byType[resource.category]) {
        report.resources.byType[resource.category] = {
          count: 0,
          totalDuration: 0,
          totalSize: 0
        };
      }
      report.resources.byType[resource.category].count++;
      report.resources.byType[resource.category].totalDuration += resource.duration;
      report.resources.byType[resource.category].totalSize += resource.size || 0;
    });

    return report;
  };

  // Display performance metrics in console
  const displayMetrics = () => {
    const report = generateReport();
    
    console.group('🚀 FrameX Performance Report');
    
    // Page Load Performance
    console.group('📊 Page Load Timing');
    console.table({
      'DNS Lookup': `${report.timing.dns}ms`,
      'TCP Connection': `${report.timing.tcp}ms`,
      'SSL Negotiation': `${report.timing.ssl}ms`,
      'Time to First Byte': `${report.timing.ttfb}ms`,
      'Content Download': `${report.timing.download}ms`,
      'DOM Ready': `${performanceData.domReadyTime}ms`,
      'Page Load Complete': `${performanceData.pageLoadTime}ms`
    });
    console.groupEnd();

    // Resource Performance
    console.group('📦 Resource Loading');
    console.table(report.resources.byType);
    console.log('Slowest Resources:', report.resources.slowest.slice(0, 5));
    console.log(`Cache Hit Rate: ${((report.resources.cachedCount / report.resources.total) * 100).toFixed(1)}%`);
    console.groupEnd();

    // Core Web Vitals
    if (Object.keys(report.vitals).length > 0) {
      console.group('🎯 Core Web Vitals');
      console.table(report.vitals);
      console.groupEnd();
    }

    // Memory Usage
    if (report.memory) {
      console.group('💾 Memory Usage');
      console.log(`Used: ${report.memory.usedJSHeapSize}MB / ${report.memory.jsHeapSizeLimit}MB (${report.memory.usage}%)`);
      console.groupEnd();
    }

    // Network Info
    if (report.connection) {
      console.group('🌐 Network Information');
      console.table(report.connection);
      console.groupEnd();
    }

    // Errors
    if (report.errors.length > 0) {
      console.group('❌ Recent Errors');
      console.table(report.errors);
      console.groupEnd();
    }

    console.groupEnd();
  };

  // Send report to server
  const sendReport = async (report) => {
    if (!config.enableReporting) return;

    // Apply sampling rate
    if (Math.random() > config.sampleRate) return;

    try {
      // Use Beacon API if available for better reliability
      if ('sendBeacon' in navigator) {
        const blob = new Blob([JSON.stringify(report)], { type: 'application/json' });
        navigator.sendBeacon(config.reportingEndpoint, blob);
      } else {
        // Fallback to fetch
        await fetch(config.reportingEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(report)
        });
      }
    } catch (error) {
      console.error('Failed to send performance report:', error);
    }
  };

  // Store metrics locally
  const storeMetricsLocally = (report) => {
    try {
      let storedMetrics = JSON.parse(localStorage.getItem(config.storageKey) || '[]');
      storedMetrics.push(report);
      
      // Limit stored metrics
      if (storedMetrics.length > config.maxStoredMetrics) {
        storedMetrics = storedMetrics.slice(-config.maxStoredMetrics);
      }
      
      localStorage.setItem(config.storageKey, JSON.stringify(storedMetrics));
    } catch (error) {
      console.error('Failed to store metrics locally:', error);
    }
  };

  // Get stored metrics
  const getStoredMetrics = () => {
    try {
      return JSON.parse(localStorage.getItem(config.storageKey) || '[]');
    } catch (error) {
      console.error('Failed to retrieve stored metrics:', error);
      return [];
    }
  };

  // Initialize performance monitoring
  const init = () => {
    // Start monitoring errors immediately
    monitorErrors();

    // Mark navigation start
    mark('navigationStart');

    // Wait for page load to collect all metrics
    window.addEventListener('load', () => {
      // Wait a bit for all resources to settle
      setTimeout(() => {
        // Collect all metrics
        const report = generateReport();
        
        // Store locally
        storeMetricsLocally(report);
        
        // Display in console if enabled
        if (config.enableLogging) {
          displayMetrics();
        }
        
        // Send to server
        sendReport(report);
        
        // Set up periodic reporting if configured
        if (config.reportingInterval > 0) {
          setInterval(() => {
            const periodicReport = generateReport();
            sendReport(periodicReport);
          }, config.reportingInterval);
        }
      }, 1000);
    });

    // Monitor visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        // Page is being hidden, send final report
        const finalReport = generateReport();
        sendReport(finalReport);
      }
    });

    // Listen for Core Web Vitals from other module
    window.addEventListener('web-vital-measured', (event) => {
      const { metric, value, rating } = event.detail;
      performanceData.vitals[metric] = {
        value: value,
        rating: rating
      };
    });
  };

  // Public API
  window.PerformanceMonitor = {
    init,
    mark,
    measure,
    generateReport,
    displayMetrics,
    getStoredMetrics,
    config,
    data: performanceData
  };

  // Auto-initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();