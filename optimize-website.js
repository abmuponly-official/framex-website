#!/usr/bin/env node

/**
 * FrameX Website Optimization Script
 * Comprehensive optimization for production deployment
 */

const fs = require('fs').promises;
const path = require('path');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

// Configuration
const CONFIG = {
    srcDir: __dirname,
    distDir: path.join(__dirname, 'dist'),
    htmlFiles: [
        'index.html',
        'products.html', 
        'services.html',
        'projects.html',
        'blog.html',
        'contact.html',
        'about.html',
        'investor-relations.html',
        '404.html'
    ],
    cssDir: 'css',
    jsDir: 'js',
    assetsDir: 'assets',
    performanceTargets: {
        maxFileSize: 50000, // 50KB max per file
        maxTotalSize: 500000, // 500KB max total
        targetLCP: 2500, // 2.5s
        targetFID: 100, // 100ms
        targetCLS: 0.1 // 0.1
    }
};

// Utility functions
const ensureDir = async (dir) => {
    try {
        await fs.access(dir);
    } catch {
        await fs.mkdir(dir, { recursive: true });
    }
};

const copyDir = async (src, dest) => {
    await ensureDir(dest);
    const entries = await fs.readdir(src, { withFileTypes: true });
    
    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        
        if (entry.isDirectory()) {
            await copyDir(srcPath, destPath);
        } else {
            await fs.copyFile(srcPath, destPath);
        }
    }
};

// 1. HTML Optimization
const optimizeHTML = async (file) => {
    console.log(`📄 Optimizing ${file}...`);
    const filePath = path.join(CONFIG.srcDir, file);
    const content = await fs.readFile(filePath, 'utf8');
    
    let optimized = content
        // Remove comments
        .replace(/<!--[\s\S]*?-->/g, '')
        // Remove whitespace between tags
        .replace(/>\s+</g, '><')
        // Minify inline CSS
        .replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (match, css) => {
            const minified = css
                .replace(/\/\*[\s\S]*?\*\//g, '')
                .replace(/\s+/g, ' ')
                .replace(/:\s+/g, ':')
                .replace(/;\s+/g, ';')
                .replace(/\{\s+/g, '{')
                .replace(/\}\s+/g, '}')
                .trim();
            return `<style>${minified}</style>`;
        })
        // Minify inline JavaScript
        .replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, (match, js) => {
            if (js.trim()) {
                const minified = js
                    .replace(/\/\/.*$/gm, '')
                    .replace(/\/\*[\s\S]*?\*\//g, '')
                    .replace(/\s+/g, ' ')
                    .replace(/;\s*}/g, '}')
                    .trim();
                return `<script>${minified}</script>`;
            }
            return match;
        })
        // Add preload for critical resources
        .replace('</head>', `
    <!-- Preload critical resources -->
    <link rel="preload" href="/css/style.min.css" as="style">
    <link rel="preload" href="/js/main.min.js" as="script">
    <link rel="dns-prefetch" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    </head>`)
        // Add lazy loading to images
        .replace(/<img([^>]*)src="([^"]*)"([^>]*)>/gi, (match, before, src, after) => {
            if (!match.includes('loading=')) {
                return `<img${before}src="${src}"${after} loading="lazy" decoding="async">`;
            }
            return match;
        });
    
    const destPath = path.join(CONFIG.distDir, file);
    await fs.writeFile(destPath, optimized);
    
    const stats = await fs.stat(destPath);
    console.log(`  ✅ Size: ${(stats.size / 1024).toFixed(2)}KB`);
};

// 2. CSS Optimization
const optimizeCSS = async () => {
    console.log('\n🎨 Optimizing CSS files...');
    const cssDir = path.join(CONFIG.srcDir, CONFIG.cssDir);
    const files = await fs.readdir(cssDir);
    
    for (const file of files) {
        if (file.endsWith('.css') && !file.includes('.min.')) {
            const srcPath = path.join(cssDir, file);
            const content = await fs.readFile(srcPath, 'utf8');
            
            const minified = content
                // Remove comments
                .replace(/\/\*[\s\S]*?\*\//g, '')
                // Remove unnecessary whitespace
                .replace(/\s+/g, ' ')
                // Remove space around selectors
                .replace(/\s*([{}:;,])\s*/g, '$1')
                // Remove trailing semicolon before }
                .replace(/;}/g, '}')
                // Remove quotes from URLs when possible
                .replace(/url\(["']([^"']+)["']\)/g, 'url($1)')
                .trim();
            
            const minFile = file.replace('.css', '.min.css');
            const destPath = path.join(CONFIG.distDir, CONFIG.cssDir, minFile);
            await ensureDir(path.dirname(destPath));
            await fs.writeFile(destPath, minified);
            
            const originalSize = Buffer.byteLength(content);
            const minifiedSize = Buffer.byteLength(minified);
            const reduction = ((1 - minifiedSize / originalSize) * 100).toFixed(1);
            
            console.log(`  ✅ ${file} → ${minFile} (${reduction}% smaller)`);
        }
    }
};

// 3. JavaScript Optimization
const optimizeJS = async () => {
    console.log('\n📦 Optimizing JavaScript files...');
    const jsDir = path.join(CONFIG.srcDir, CONFIG.jsDir);
    const files = await fs.readdir(jsDir);
    
    for (const file of files) {
        if (file.endsWith('.js') && !file.includes('.min.')) {
            const srcPath = path.join(jsDir, file);
            const content = await fs.readFile(srcPath, 'utf8');
            
            const minified = content
                // Remove single-line comments
                .replace(/\/\/.*$/gm, '')
                // Remove multi-line comments
                .replace(/\/\*[\s\S]*?\*\//g, '')
                // Remove console.log statements
                .replace(/console\.(log|debug|info|warn|error)\([^)]*\);?/g, '')
                // Remove excessive whitespace
                .replace(/\s+/g, ' ')
                // Remove space around operators
                .replace(/\s*([=+\-*/!<>])\s*/g, '$1')
                // Remove space around brackets
                .replace(/\s*([{}[\]()])\s*/g, '$1')
                .trim();
            
            const minFile = file.replace('.js', '.min.js');
            const destPath = path.join(CONFIG.distDir, CONFIG.jsDir, minFile);
            await ensureDir(path.dirname(destPath));
            await fs.writeFile(destPath, minified);
            
            const originalSize = Buffer.byteLength(content);
            const minifiedSize = Buffer.byteLength(minified);
            const reduction = ((1 - minifiedSize / originalSize) * 100).toFixed(1);
            
            console.log(`  ✅ ${file} → ${minFile} (${reduction}% smaller)`);
        }
    }
};

// 4. Create Service Worker for PWA
const createServiceWorker = async () => {
    console.log('\n🔧 Creating optimized Service Worker...');
    
    const swContent = `
// FrameX Service Worker - Optimized Version
const CACHE_NAME = 'framex-v${Date.now()}';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/style.min.css',
    '/js/main.min.js',
    '/manifest.json'
];

// Install event - cache resources
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
            .then(() => self.skipWaiting())
    );
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request).then(response => {
                    // Cache successful responses
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, responseToCache);
                    });
                    return response;
                });
            })
            .catch(() => {
                // Offline fallback
                if (event.request.destination === 'document') {
                    return caches.match('/offline.html');
                }
            })
    );
});
`.trim();
    
    await fs.writeFile(path.join(CONFIG.distDir, 'service-worker.js'), swContent);
    console.log('  ✅ Service Worker created');
};

// 5. Create Performance Monitoring Script
const createPerformanceMonitor = async () => {
    console.log('\n📊 Creating Performance Monitor...');
    
    const perfScript = `
// FrameX Performance Monitor
(function() {
    'use strict';
    
    // Web Vitals monitoring
    const vitals = {
        FCP: 0,
        LCP: 0,
        FID: 0,
        CLS: 0,
        TTFB: 0
    };
    
    // Observe LCP
    new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        vitals.LCP = lastEntry.renderTime || lastEntry.loadTime;
    }).observe({type: 'largest-contentful-paint', buffered: true});
    
    // Observe FID
    new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
            if (entry.name === 'first-input') {
                vitals.FID = entry.processingStart - entry.startTime;
            }
        });
    }).observe({type: 'first-input', buffered: true});
    
    // Observe CLS
    let clsScore = 0;
    new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
                clsScore += entry.value;
                vitals.CLS = clsScore;
            }
        }
    }).observe({type: 'layout-shift', buffered: true});
    
    // Send metrics to console after load
    window.addEventListener('load', () => {
        setTimeout(() => {
            const navigation = performance.getEntriesByType('navigation')[0];
            vitals.TTFB = navigation.responseStart - navigation.requestStart;
            vitals.FCP = navigation.loadEventEnd - navigation.fetchStart;
            
            console.log('🚀 FrameX Performance Metrics:', vitals);
            
            // Send to analytics if available
            if (typeof gtag !== 'undefined') {
                gtag('event', 'web_vitals', {
                    'event_category': 'Performance',
                    'lcp': vitals.LCP,
                    'fid': vitals.FID,
                    'cls': vitals.CLS
                });
            }
        }, 3000);
    });
})();
`.trim();
    
    await fs.writeFile(path.join(CONFIG.distDir, CONFIG.jsDir, 'performance-monitor.min.js'), perfScript);
    console.log('  ✅ Performance Monitor created');
};

// 6. Generate Reports
const generateReport = async () => {
    console.log('\n📈 Generating optimization report...');
    
    const report = {
        timestamp: new Date().toISOString(),
        files: {},
        totalSizeBefore: 0,
        totalSizeAfter: 0,
        recommendations: []
    };
    
    // Analyze optimized files
    for (const file of CONFIG.htmlFiles) {
        const srcPath = path.join(CONFIG.srcDir, file);
        const distPath = path.join(CONFIG.distDir, file);
        
        try {
            const srcStats = await fs.stat(srcPath);
            const distStats = await fs.stat(distPath);
            
            report.files[file] = {
                originalSize: srcStats.size,
                optimizedSize: distStats.size,
                reduction: ((1 - distStats.size / srcStats.size) * 100).toFixed(1) + '%'
            };
            
            report.totalSizeBefore += srcStats.size;
            report.totalSizeAfter += distStats.size;
        } catch (e) {
            // File might not exist
        }
    }
    
    // Add recommendations
    if (report.totalSizeAfter > CONFIG.performanceTargets.maxTotalSize) {
        report.recommendations.push('⚠️ Total size exceeds target. Consider code splitting.');
    }
    
    report.recommendations.push('✅ Enable Gzip/Brotli compression on server');
    report.recommendations.push('✅ Set up CDN for static assets');
    report.recommendations.push('✅ Implement HTTP/2 Server Push');
    
    await fs.writeFile(
        path.join(CONFIG.distDir, 'optimization-report.json'),
        JSON.stringify(report, null, 2)
    );
    
    console.log('\n📊 Optimization Summary:');
    console.log(`  Original Size: ${(report.totalSizeBefore / 1024).toFixed(2)}KB`);
    console.log(`  Optimized Size: ${(report.totalSizeAfter / 1024).toFixed(2)}KB`);
    console.log(`  Total Reduction: ${((1 - report.totalSizeAfter / report.totalSizeBefore) * 100).toFixed(1)}%`);
    
    if (report.recommendations.length > 0) {
        console.log('\n💡 Recommendations:');
        report.recommendations.forEach(rec => console.log(`  ${rec}`));
    }
    
    return report;
};

// Main execution
const main = async () => {
    console.log('🚀 FrameX Website Optimization Starting...\n');
    
    try {
        // Create dist directory
        await ensureDir(CONFIG.distDir);
        
        // Copy assets
        console.log('📁 Copying assets...');
        await copyDir(path.join(CONFIG.srcDir, CONFIG.assetsDir), path.join(CONFIG.distDir, CONFIG.assetsDir));
        
        // Run optimizations
        await Promise.all(CONFIG.htmlFiles.map(optimizeHTML));
        await optimizeCSS();
        await optimizeJS();
        await createServiceWorker();
        await createPerformanceMonitor();
        
        // Copy other necessary files
        const filesToCopy = ['manifest.json', 'robots.txt', 'sitemap.xml', 'CNAME', '.htaccess'];
        for (const file of filesToCopy) {
            try {
                await fs.copyFile(
                    path.join(CONFIG.srcDir, file),
                    path.join(CONFIG.distDir, file)
                );
            } catch (e) {
                // File might not exist
            }
        }
        
        // Generate report
        const report = await generateReport();
        
        console.log('\n✨ Optimization Complete!');
        console.log(`📂 Optimized files saved to: ${CONFIG.distDir}`);
        console.log('\n🚀 Next steps:');
        console.log('  1. Test the optimized site: cd dist && python3 -m http.server');
        console.log('  2. Run Lighthouse audit for verification');
        console.log('  3. Deploy to production');
        
    } catch (error) {
        console.error('❌ Optimization failed:', error);
        process.exit(1);
    }
};

// Run if called directly
if (require.main === module) {
    main();
}

module.exports = { optimizeHTML, optimizeCSS, optimizeJS };