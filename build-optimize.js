#!/usr/bin/env node

/**
 * FrameX Build & Optimization Script
 * Minifies CSS/JS, optimizes images, and generates critical CSS
 * Run: node build-optimize.js
 */

const fs = require('fs').promises;
const path = require('path');
const crypto = require('crypto');

// Simple CSS minifier
async function minifyCSS(content) {
  return content
    // Remove comments
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // Remove unnecessary whitespace
    .replace(/\s+/g, ' ')
    // Remove whitespace around selectors
    .replace(/\s*([{}:;,>+~])\s*/g, '$1')
    // Remove trailing semicolons before closing braces
    .replace(/;}/g, '}')
    // Remove quotes from URLs when possible
    .replace(/url\(["']([^"')]+)["']\)/g, 'url($1)')
    // Remove unnecessary zeros
    .replace(/(:|\s)0px/g, '$10')
    .replace(/(:|\s)0em/g, '$10')
    .replace(/(:|\s)0rem/g, '$10')
    // Shorten hex colors
    .replace(/#([0-9a-f])\1([0-9a-f])\2([0-9a-f])\3/gi, '#$1$2$3')
    .trim();
}

// Simple JS minifier
async function minifyJS(content) {
  // Basic minification - for production use a proper minifier like Terser
  return content
    // Remove single-line comments (but not URLs)
    .replace(/(?<!:)\/\/(?![\s]*['"]).*/g, '')
    // Remove multi-line comments
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // Remove unnecessary whitespace
    .replace(/\s+/g, ' ')
    // Remove whitespace around operators
    .replace(/\s*([=+\-*/%<>!&|^~?:,;{}()\[\]])\s*/g, '$1')
    // Remove whitespace at line start/end
    .replace(/^\s+|\s+$/gm, '')
    // Remove empty lines
    .replace(/\n+/g, '\n')
    .trim();
}

// Extract critical CSS for above-the-fold content
async function extractCriticalCSS() {
  const criticalCSS = `
/* FrameX Critical CSS - Inline in <head> */
*{margin:0;padding:0;box-sizing:border-box}
html{font-size:16px;line-height:1.6;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
body{font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#0a0a0a;background:#fff;min-height:100vh}
.container{width:100%;max-width:1200px;margin:0 auto;padding:0 20px}
header{position:fixed;top:0;left:0;right:0;background:#fff;z-index:1000;box-shadow:0 2px 10px rgba(0,0,0,0.1)}
nav{display:flex;justify-content:space-between;align-items:center;padding:1rem 0}
.logo{font-size:1.5rem;font-weight:700;color:#000;text-decoration:none}
.nav-menu{display:flex;list-style:none;gap:2rem}
.nav-link{color:#0a0a0a;text-decoration:none;transition:color 0.3s}
.nav-link:hover{color:#ff6b35}
.hero{min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:5rem 0}
h1{font-size:clamp(2rem,5vw,3.5rem);font-weight:700;line-height:1.2;margin-bottom:1rem}
.btn{display:inline-block;padding:0.75rem 2rem;background:#ff6b35;color:#fff;text-decoration:none;border-radius:4px;transition:transform 0.3s,box-shadow 0.3s}
.btn:hover{transform:translateY(-2px);box-shadow:0 10px 20px rgba(255,107,53,0.3)}
.loading{opacity:0;transition:opacity 0.3s}
.loaded{opacity:1}
@media(max-width:768px){.nav-menu{position:fixed;left:-100%;top:70px;flex-direction:column;background:#fff;width:100%;text-align:center;transition:0.3s;box-shadow:0 10px 27px rgba(0,0,0,0.05);padding:2rem 0}.nav-menu.active{left:0}}
`;
  
  return minifyCSS(criticalCSS);
}

// Generate file hash for cache busting
function generateHash(content) {
  return crypto.createHash('md5').update(content).digest('hex').substring(0, 8);
}

// Process CSS files
async function processCSSFiles() {
  const cssDir = path.join(__dirname, 'css');
  const files = await fs.readdir(cssDir);
  
  console.log('📦 Processing CSS files...');
  
  for (const file of files) {
    if (file.endsWith('.css') && !file.includes('.min.')) {
      const filePath = path.join(cssDir, file);
      const content = await fs.readFile(filePath, 'utf8');
      const minified = await minifyCSS(content);
      
      // Save minified version
      const minFileName = file.replace('.css', '.min.css');
      const minFilePath = path.join(cssDir, minFileName);
      await fs.writeFile(minFilePath, minified);
      
      const originalSize = Buffer.byteLength(content, 'utf8');
      const minifiedSize = Buffer.byteLength(minified, 'utf8');
      const reduction = ((1 - minifiedSize / originalSize) * 100).toFixed(1);
      
      console.log(`  ✅ ${file}: ${originalSize}B → ${minifiedSize}B (-${reduction}%)`);
    }
  }
}

// Process JS files
async function processJSFiles() {
  const jsDir = path.join(__dirname, 'js');
  const files = await fs.readdir(jsDir);
  
  console.log('\n📦 Processing JS files...');
  
  for (const file of files) {
    if (file.endsWith('.js') && !file.includes('.min.') && file !== 'build-optimize.js') {
      const filePath = path.join(jsDir, file);
      const content = await fs.readFile(filePath, 'utf8');
      const minified = await minifyJS(content);
      
      // Save minified version
      const minFileName = file.replace('.js', '.min.js');
      const minFilePath = path.join(jsDir, minFileName);
      await fs.writeFile(minFilePath, minified);
      
      const originalSize = Buffer.byteLength(content, 'utf8');
      const minifiedSize = Buffer.byteLength(minified, 'utf8');
      const reduction = ((1 - minifiedSize / originalSize) * 100).toFixed(1);
      
      console.log(`  ✅ ${file}: ${originalSize}B → ${minifiedSize}B (-${reduction}%)`);
    }
  }
}

// Create optimized HTML files
async function optimizeHTML() {
  const files = await fs.readdir(__dirname);
  const htmlFiles = files.filter(f => f.endsWith('.html'));
  
  console.log('\n📄 Optimizing HTML files...');
  
  for (const file of htmlFiles) {
    const filePath = path.join(__dirname, file);
    let content = await fs.readFile(filePath, 'utf8');
    
    // Replace .css with .min.css
    content = content.replace(/href="css\/([^"]+)\.css"/g, 'href="css/$1.min.css"');
    
    // Replace .js with .min.js
    content = content.replace(/src="js\/([^"]+)\.js"/g, 'src="js/$1.min.js"');
    
    // Add preload for critical resources
    if (!content.includes('rel="preload"')) {
      const preloads = `
    <!-- Preload critical resources -->
    <link rel="preload" href="css/style.min.css" as="style">
    <link rel="preload" href="js/main.min.js" as="script">
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" as="style">`;
      
      content = content.replace('</head>', preloads + '\n</head>');
    }
    
    // Add service worker registration
    if (!content.includes('service-worker')) {
      const swScript = `
    <!-- Service Worker Registration -->
    <script>
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/service-worker.js')
            .then(reg => console.log('Service Worker registered'))
            .catch(err => console.log('Service Worker registration failed'));
        });
      }
    </script>`;
      
      content = content.replace('</body>', swScript + '\n</body>');
    }
    
    // Save optimized version
    const optimizedFileName = file.replace('.html', '.optimized.html');
    await fs.writeFile(path.join(__dirname, optimizedFileName), content);
    
    console.log(`  ✅ ${file} → ${optimizedFileName}`);
  }
}

// Generate manifest.json for PWA
async function generateManifest() {
  const manifest = {
    "name": "FrameX - Smart Prefabricated Steel Construction",
    "short_name": "FrameX",
    "description": "Shaping Tomorrow's Living with Smart Steel Construction",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#ffffff",
    "theme_color": "#ff6b35",
    "orientation": "portrait-primary",
    "icons": [
      {
        "src": "/assets/img/icon-192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "any maskable"
      },
      {
        "src": "/assets/img/icon-512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "any maskable"
      }
    ],
    "categories": ["business", "construction", "technology"],
    "lang": "vi-VN",
    "dir": "ltr"
  };
  
  await fs.writeFile(
    path.join(__dirname, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  
  console.log('\n📱 Generated manifest.json for PWA');
}

// Generate sitemap.xml
async function generateSitemap() {
  const baseUrl = 'https://framex.vn';
  const pages = [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/products.html', priority: 0.9, changefreq: 'weekly' },
    { url: '/services.html', priority: 0.8, changefreq: 'weekly' },
    { url: '/projects.html', priority: 0.8, changefreq: 'weekly' },
    { url: '/blog.html', priority: 0.7, changefreq: 'daily' },
    { url: '/about.html', priority: 0.6, changefreq: 'monthly' },
    { url: '/contact.html', priority: 0.9, changefreq: 'monthly' },
    { url: '/investor-relations.html', priority: 0.7, changefreq: 'weekly' }
  ];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  
  await fs.writeFile(path.join(__dirname, 'sitemap.xml'), sitemap);
  console.log('🗺️  Generated sitemap.xml');
}

// Main optimization function
async function optimize() {
  console.log('🚀 FrameX Performance Optimization Build\n');
  console.log('================================\n');
  
  try {
    // Extract and save critical CSS
    const criticalCSS = await extractCriticalCSS();
    await fs.writeFile(path.join(__dirname, 'css', 'critical.min.css'), criticalCSS);
    console.log('✨ Extracted critical CSS');
    
    // Process CSS files
    await processCSSFiles();
    
    // Process JS files
    await processJSFiles();
    
    // Optimize HTML files
    await optimizeHTML();
    
    // Generate PWA manifest
    await generateManifest();
    
    // Generate sitemap
    await generateSitemap();
    
    console.log('\n================================');
    console.log('✅ Optimization complete!');
    console.log('\nNext steps:');
    console.log('1. Test the .optimized.html files');
    console.log('2. Replace original files with optimized versions');
    console.log('3. Deploy to production');
    console.log('4. Run Lighthouse audit to verify improvements');
    
  } catch (error) {
    console.error('❌ Error during optimization:', error);
    process.exit(1);
  }
}

// Run optimization
optimize();