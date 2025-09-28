#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Applying optimizations to all HTML files...\n');

// List of HTML files to optimize
const htmlFiles = [
    'index.html',
    'products.html', 
    'services.html',
    'projects.html',
    'blog.html',
    'contact.html',
    'about.html',
    'investor-relations.html'
];

// Optimizations to apply
const optimizations = {
    // 1. Add skip to content link
    skipToContent: `    <!-- Skip to main content for accessibility -->
    <a href="#main" style="position:absolute;top:-40px;left:0;background:#000;color:#fff;padding:8px;z-index:10000;text-decoration:none;" onfocus="this.style.top='0'" onblur="this.style.top='-40px'">Skip to main content</a>`,

    // 2. Add ARIA labels
    ariaLabels: {
        nav: 'role="navigation" aria-label="Main navigation"',
        main: 'role="main"',
        footer: 'role="contentinfo" aria-label="Footer"',
        form: 'role="form" aria-label="Contact form"',
        button: 'aria-label="Submit"'
    },

    // 3. Add structured data
    structuredData: `
    <!-- Structured Data for SEO -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "{pageName}",
        "description": "{pageDescription}",
        "url": "{pageUrl}",
        "inLanguage": ["en", "vi"],
        "publisher": {
            "@type": "Organization",
            "name": "FrameX",
            "legalName": "ABM Architectural Material Co., Ltd"
        }
    }
    </script>`,

    // 4. Add meta tags
    metaTags: {
        openGraph: `    <!-- Open Graph Meta Tags -->
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="FrameX">
    <meta property="og:title" content="{title}">
    <meta property="og:description" content="{description}">
    <meta property="og:url" content="{url}">
    <meta property="og:image" content="https://framex.vn/assets/images/og-image.jpg">`,
        
        twitter: `    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{title}">
    <meta name="twitter:description" content="{description}">
    <meta name="twitter:image" content="https://framex.vn/assets/images/twitter-card.jpg">`
    },

    // 5. Performance improvements
    performance: {
        lazyLoading: 'loading="lazy"',
        async: 'async',
        defer: 'defer',
        decoding: 'decoding="async"'
    }
};

// Function to optimize images
function optimizeImages(content) {
    // Add lazy loading to images
    content = content.replace(/<img(?![^>]*loading=)([^>]*?)>/gi, '<img$1 loading="lazy" decoding="async">');
    
    // Add width and height where missing
    content = content.replace(/<img([^>]*?)src="assets\/images\/framex-logo.svg"([^>]*?)>/gi, 
        '<img$1src="assets/images/framex-logo.svg"$2 width="120" height="40">');
    
    return content;
}

// Function to add ARIA labels
function addAriaLabels(content) {
    // Add to nav
    content = content.replace(/<nav([^>]*?)(?!role=)([^>]*?)>/gi, '<nav$1 role="navigation" aria-label="Main navigation"$2>');
    
    // Add to main sections
    content = content.replace(/<main([^>]*?)(?!role=)([^>]*?)>/gi, '<main$1 role="main"$2>');
    
    // Add to footer
    content = content.replace(/<footer([^>]*?)(?!role=)([^>]*?)>/gi, '<footer$1 role="contentinfo" aria-label="Footer"$2>');
    
    // Add to buttons
    content = content.replace(/<button([^>]*?)(?!aria-label=)([^>]*?)>/gi, (match, p1, p2) => {
        if (match.includes('menu') || match.includes('toggle')) {
            return `<button${p1} aria-label="Toggle navigation menu" aria-expanded="false"${p2}>`;
        }
        return match;
    });
    
    return content;
}

// Function to add skip to content link
function addSkipToContent(content) {
    if (!content.includes('skip-to-content')) {
        const bodyIndex = content.indexOf('<body');
        const bodyEndIndex = content.indexOf('>', bodyIndex) + 1;
        content = content.slice(0, bodyEndIndex) + '\n' + optimizations.skipToContent + content.slice(bodyEndIndex);
    }
    return content;
}

// Function to wrap main content
function wrapMainContent(content) {
    if (!content.includes('<main')) {
        // Find where to insert main tag (after nav, before footer)
        const navEnd = content.lastIndexOf('</nav>');
        const footerStart = content.indexOf('<footer');
        
        if (navEnd > -1 && footerStart > -1) {
            const beforeMain = content.slice(0, navEnd + 6);
            const mainContent = content.slice(navEnd + 6, footerStart);
            const afterMain = content.slice(footerStart);
            
            content = beforeMain + '\n\n    <main id="main" role="main">\n' + mainContent + '\n    </main>\n\n' + afterMain;
        }
    }
    return content;
}

// Function to add meta tags
function addMetaTags(content, fileName) {
    const pageInfo = {
        'index.html': {
            title: 'FrameX - Shaping Tomorrow\'s Living | Smart Prefabricated Steel Structures',
            description: 'FrameX pioneers modern steel construction with smart prefabricated structures. Complete integrated solutions for homeowners and developers.'
        },
        'products.html': {
            title: 'Products | FrameX - Smart Steel Construction Solutions',
            description: 'Explore FrameX product range: Starter, Family, Custom, and PRO steel construction solutions for every need and budget.'
        },
        'services.html': {
            title: 'Services | FrameX - Design, Manufacturing, Installation',
            description: 'Complete steel construction services from design to installation. BIM modeling, smart home integration, and professional assembly.'
        },
        'projects.html': {
            title: 'Projects | FrameX - Portfolio & Case Studies',
            description: 'View our portfolio of completed steel construction projects. From luxury villas to commercial complexes.'
        },
        'blog.html': {
            title: 'Blog | FrameX - Industry Insights & Updates',
            description: 'Latest news and insights on steel construction, smart homes, and sustainable building practices.'
        },
        'contact.html': {
            title: 'Contact | FrameX - Get Your Project Started',
            description: 'Contact FrameX for your steel construction project. Get a quote, schedule consultation, or become a partner.'
        },
        'about.html': {
            title: 'About | FrameX - Pioneering Steel Construction',
            description: 'Learn about FrameX, Vietnam\'s leading integrated prefabricated steel construction solutions provider.'
        }
    };

    const info = pageInfo[fileName] || pageInfo['index.html'];
    
    // Add Open Graph tags if not present
    if (!content.includes('property="og:')) {
        const headEnd = content.indexOf('</head>');
        const ogTags = optimizations.metaTags.openGraph
            .replace(/{title}/g, info.title)
            .replace(/{description}/g, info.description)
            .replace(/{url}/g, `https://framex.vn/${fileName}`);
        
        const twitterTags = optimizations.metaTags.twitter
            .replace(/{title}/g, info.title)
            .replace(/{description}/g, info.description);
        
        content = content.slice(0, headEnd) + '\n' + ogTags + '\n' + twitterTags + '\n' + content.slice(headEnd);
    }
    
    return content;
}

// Process each HTML file
let optimizedCount = 0;

htmlFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf-8');
        const originalContent = content;
        
        // Apply optimizations
        content = optimizeImages(content);
        content = addAriaLabels(content);
        content = addSkipToContent(content);
        content = wrapMainContent(content);
        content = addMetaTags(content, file);
        
        // Only write if changes were made
        if (content !== originalContent) {
            fs.writeFileSync(filePath, content);
            console.log(`✅ Optimized: ${file}`);
            optimizedCount++;
        } else {
            console.log(`⏭️  Already optimized: ${file}`);
        }
    } else {
        console.log(`❌ Not found: ${file}`);
    }
});

console.log(`\n🎉 Optimization complete! ${optimizedCount} files updated.`);

// Create improved robots.txt
const robotsTxt = `# Robots.txt for FrameX
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/
Disallow: /*.json$
Disallow: /*.xml$

# Crawl-delay for polite crawling
Crawl-delay: 1

# Sitemap location
Sitemap: https://framex.vn/sitemap.xml`;

fs.writeFileSync('robots.txt', robotsTxt);
console.log('✅ Created optimized robots.txt');

// Update sitemap.xml with all pages
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://framex.vn/</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://framex.vn/products.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>https://framex.vn/services.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://framex.vn/projects.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>https://framex.vn/blog.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.6</priority>
    </url>
    <url>
        <loc>https://framex.vn/about.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>https://framex.vn/contact.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>yearly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://framex.vn/investor-relations.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
    </url>
</urlset>`;

fs.writeFileSync('sitemap.xml', sitemapXml);
console.log('✅ Updated sitemap.xml with all pages');

console.log('\n📊 Optimization Summary:');
console.log('- Added accessibility features (ARIA labels, skip links)');
console.log('- Implemented lazy loading for images');
console.log('- Added Open Graph and Twitter meta tags');
console.log('- Created/updated robots.txt and sitemap.xml');
console.log('- Wrapped content in semantic HTML5 tags');
console.log('\n✨ All optimizations applied successfully!');