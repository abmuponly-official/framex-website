#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// HTML pages to update
const htmlPages = [
    'index.html',
    'products.html',
    'about.html',
    'projects.html',
    'blog.html',
    'contact.html',
    'investor-relations.html'
];

// Standard footer HTML
const standardFooter = `    <!-- Enhanced Footer with Logo -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <!-- About FrameX Column -->
                <div class="footer-column footer-about">
                    <div class="footer-logo">
                        <img src="assets/images/framex-logo-footer.png" alt="FrameX - Shaping Tomorrow's Living" width="180" height="auto">
                    </div>
                    <p class="footer-description" data-lang="footer-about-desc">
                        FrameX pioneers modern steel construction through innovative prefabrication technology, delivering sustainable and smart living spaces with integrated solutions.
                    </p>
                    <div class="footer-social">
                        <a href="https://www.pinterest.com/FRAMEXVN/" target="_blank" rel="noopener" aria-label="Pinterest">
                            <i class="fab fa-pinterest"></i>
                        </a>
                        <a href="https://3dwarehouse.sketchup.com/by/Framexvn" target="_blank" rel="noopener" aria-label="3D Warehouse">
                            <i class="fas fa-cube"></i>
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="#" aria-label="Facebook">
                            <i class="fab fa-facebook"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Quick Links Column -->
                <div class="footer-column footer-links">
                    <h3 class="footer-title" data-lang="footer-quick-links">Quick Links</h3>
                    <ul class="footer-list">
                        <li><a href="index.html" data-lang="footer-link-home">Home</a></li>
                        <li><a href="products.html" data-lang="footer-link-products">Products</a></li>
                        <li><a href="about.html" data-lang="footer-link-about">About</a></li>
                        <li><a href="projects.html" data-lang="footer-link-projects">Projects</a></li>
                        <li><a href="blog.html" data-lang="footer-link-blog">Blog</a></li>
                        <li><a href="contact.html" data-lang="footer-link-contact">Contact</a></li>
                        <li><a href="investor-relations.html" data-lang="footer-link-investor">Investor Relations</a></li>
                    </ul>
                </div>
                
                <!-- Services Column -->
                <div class="footer-column">
                    <h3 class="footer-title" data-lang="footer-services-title">Services</h3>
                    <ul class="footer-list">
                        <li><a href="products.html#starter" data-lang="footer-service-1">FrameX STARTER</a></li>
                        <li><a href="products.html#smart" data-lang="footer-service-2">FrameX SMART</a></li>
                        <li><a href="products.html#premium" data-lang="footer-service-3">FrameX PREMIUM</a></li>
                        <li><a href="contact.html" data-lang="footer-service-consulting">Consulting Services</a></li>
                        <li><a href="contact.html" data-lang="footer-service-support">Technical Support</a></li>
                    </ul>
                </div>
                
                <!-- Contact Column -->
                <div class="footer-column footer-contact">
                    <h3 class="footer-title" data-lang="footer-contact-title">Contact</h3>
                    <ul class="footer-contact-list">
                        <li>
                            <i class="fas fa-map-marker-alt"></i>
                            <span data-lang="footer-address">150/52A Phú Định, TP. Hồ Chí Minh, Vietnam</span>
                        </li>
                        <li>
                            <i class="fas fa-envelope"></i>
                            <a href="mailto:sales@framex.vn">sales@framex.vn</a>
                        </li>
                        <li>
                            <i class="fas fa-phone"></i>
                            <a href="tel:+84909005683">+84 909 005 683</a>
                        </li>
                        <li>
                            <i class="fas fa-building"></i>
                            <span data-lang="footer-company-name">ABM Architectural Material Co., Ltd</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <!-- Footer Bottom -->
            <div class="footer-bottom">
                <div class="footer-bottom-content">
                    <p class="footer-copyright" data-lang="footer-copyright">
                        © 2024 FrameX. All rights reserved.
                    </p>
                    <p class="footer-tagline" data-lang="footer-tagline">
                        Shaping Tomorrow's Living
                    </p>
                </div>
            </div>
        </div>
    </footer>`;

// Function to add unified CSS link if not present
function addUnifiedCSS(content) {
    const unifiedCSSLink = '    <link rel="stylesheet" href="css/unified-design.css">';
    
    // Check if unified-design.css is already linked
    if (!content.includes('unified-design.css')) {
        // Find the last CSS link in the head section
        const lastCSSPattern = /<link[^>]*rel="stylesheet"[^>]*>/g;
        const matches = [...content.matchAll(lastCSSPattern)];
        
        if (matches.length > 0) {
            const lastMatch = matches[matches.length - 1];
            const insertPosition = content.indexOf(lastMatch[0]) + lastMatch[0].length;
            content = content.slice(0, insertPosition) + '\n' + unifiedCSSLink + content.slice(insertPosition);
        } else {
            // If no CSS links found, add before </head>
            content = content.replace('</head>', unifiedCSSLink + '\n</head>');
        }
    }
    
    return content;
}

// Function to replace footer
function replaceFooter(content) {
    // Find and replace existing footer
    const footerStartPattern = /\s*<!-- Enhanced Footer with Logo -->|\s*<footer[^>]*>/;
    const footerEndPattern = /<\/footer>/;
    
    const startMatch = content.match(footerStartPattern);
    if (startMatch) {
        const startIndex = content.indexOf(startMatch[0]);
        const endMatch = content.indexOf('</footer>', startIndex);
        
        if (endMatch !== -1) {
            const endIndex = endMatch + '</footer>'.length;
            content = content.slice(0, startIndex) + standardFooter + content.slice(endIndex);
        }
    }
    
    return content;
}

// Process each HTML file
htmlPages.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    
    if (fs.existsSync(filePath)) {
        console.log(`Processing ${file}...`);
        
        let content = fs.readFileSync(filePath, 'utf-8');
        
        // Add unified CSS
        content = addUnifiedCSS(content);
        
        // Replace footer
        content = replaceFooter(content);
        
        // Write back the file
        fs.writeFileSync(filePath, content, 'utf-8');
        
        console.log(`✅ Updated ${file}`);
    } else {
        console.log(`⚠️ ${file} not found`);
    }
});

console.log('\n✨ All pages updated with unified design system!');