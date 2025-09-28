#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🎨 Updating footer with new logo and improved design...\n');

// List of HTML files to update
const htmlFiles = [
    'index.html',
    'products.html',
    'about.html', 
    'projects.html',
    'blog.html',
    'contact.html',
    'investor-relations.html'
];

// Enhanced footer HTML with proper logo
const enhancedFooterHTML = `    <!-- Enhanced Footer with Logo -->
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

// Enhanced footer CSS with better typography and spacing
const enhancedFooterCSS = `
        /* Enhanced Footer Styles with Improved Typography */
        .footer {
            background: #1a1a1a;
            color: #e0e0e0;
            padding: 70px 0 0;
            margin-top: 100px;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: 1.5fr 1fr 1fr;
            gap: 60px;
            margin-bottom: 50px;
        }
        
        /* About Column with Logo */
        .footer-about .footer-logo {
            margin-bottom: 25px;
        }
        
        .footer-about .footer-logo img {
            max-width: 180px;
            height: auto;
            display: block;
        }
        
        .footer-description {
            line-height: 1.7;
            color: #b0b0b0;
            margin-bottom: 30px;
            font-size: 0.95rem;
            letter-spacing: 0.3px;
        }
        
        .footer-social {
            display: flex;
            gap: 14px;
        }
        
        .footer-social a {
            width: 42px;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            color: #e0e0e0;
            transition: all 0.3s ease;
            text-decoration: none;
            font-size: 1.1rem;
        }
        
        .footer-social a:hover {
            background: #ff6b35;
            border-color: #ff6b35;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(255, 107, 53, 0.3);
        }
        
        /* Footer Columns Typography */
        .footer-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 25px;
            color: #ffffff;
            letter-spacing: 0.5px;
        }
        
        .footer-list,
        .footer-contact-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        .footer-list li,
        .footer-contact-list li {
            margin-bottom: 14px;
        }
        
        .footer-list a {
            color: #b0b0b0;
            text-decoration: none;
            transition: all 0.3s ease;
            font-size: 0.95rem;
            letter-spacing: 0.3px;
            position: relative;
        }
        
        .footer-list a:hover {
            color: #ff6b35;
            padding-left: 5px;
        }
        
        /* Contact List with Icons */
        .footer-contact-list li {
            display: flex;
            align-items: flex-start;
            gap: 14px;
            color: #b0b0b0;
            font-size: 0.95rem;
            letter-spacing: 0.3px;
        }
        
        .footer-contact-list i {
            color: #ff6b35;
            margin-top: 3px;
            width: 18px;
            font-size: 0.9rem;
        }
        
        .footer-contact-list a {
            color: #b0b0b0;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        
        .footer-contact-list a:hover {
            color: #ff6b35;
        }
        
        /* Footer Bottom */
        .footer-bottom {
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            padding: 30px 0;
            background: rgba(0, 0, 0, 0.2);
        }
        
        .footer-bottom-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .footer-copyright,
        .footer-tagline {
            margin: 0;
            color: #808080;
            font-size: 0.9rem;
            letter-spacing: 0.3px;
        }
        
        .footer-tagline {
            font-style: italic;
            color: #999;
        }
        
        /* Responsive Design */
        @media (max-width: 1024px) {
            .footer-content {
                grid-template-columns: 1fr 1fr;
                gap: 50px;
            }
            
            .footer-about {
                grid-column: span 2;
            }
            
            .footer-about .footer-logo img {
                max-width: 160px;
            }
        }
        
        @media (max-width: 768px) {
            .footer {
                padding: 50px 0 0;
                margin-top: 60px;
            }
            
            .footer-content {
                grid-template-columns: 1fr;
                gap: 40px;
            }
            
            .footer-about {
                grid-column: span 1;
                text-align: center;
            }
            
            .footer-about .footer-logo {
                display: flex;
                justify-content: center;
            }
            
            .footer-about .footer-logo img {
                max-width: 150px;
            }
            
            .footer-social {
                justify-content: center;
            }
            
            .footer-links,
            .footer-contact {
                text-align: center;
            }
            
            .footer-list a:hover {
                padding-left: 0;
            }
            
            .footer-contact-list li {
                justify-content: center;
            }
            
            .footer-bottom-content {
                flex-direction: column;
                text-align: center;
                gap: 12px;
            }
        }
        
        @media (max-width: 480px) {
            .footer-title {
                font-size: 1.15rem;
            }
            
            .footer-description,
            .footer-list a,
            .footer-contact-list li {
                font-size: 0.9rem;
            }
            
            .footer-social a {
                width: 38px;
                height: 38px;
                font-size: 1rem;
            }
            
            .footer-about .footer-logo img {
                max-width: 140px;
            }
        }`;

// Function to update footer in a file
function updateFooter(filePath) {
    if (!fs.existsSync(filePath)) {
        console.log(`❌ File not found: ${filePath}`);
        return false;
    }
    
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Find and replace footer section
    const footerStart = content.indexOf('<footer');
    const footerEnd = content.indexOf('</footer>') + 9;
    
    if (footerStart > -1 && footerEnd > 8) {
        // Replace old footer with new one
        content = content.substring(0, footerStart) + enhancedFooterHTML + content.substring(footerEnd);
        
        // Update or add footer CSS
        // First, try to find existing footer styles
        const footerStyleStart = content.indexOf('/* Enhanced Footer Styles');
        if (footerStyleStart > -1) {
            // Find the end of footer styles (look for next major comment or closing style tag)
            let footerStyleEnd = content.indexOf('/* ', footerStyleStart + 10);
            if (footerStyleEnd === -1 || footerStyleEnd > content.indexOf('</style>', footerStyleStart)) {
                footerStyleEnd = content.indexOf('</style>', footerStyleStart);
            }
            
            // Replace existing footer styles
            content = content.substring(0, footerStyleStart) + 
                     enhancedFooterCSS.trim() + '\n        ' +
                     content.substring(footerStyleEnd);
        } else if (content.includes('</style>')) {
            // Add new footer styles before closing style tag
            content = content.replace('</style>', enhancedFooterCSS + '\n    </style>');
        }
        
        fs.writeFileSync(filePath, content);
        console.log(`✅ Updated footer in: ${path.basename(filePath)}`);
        return true;
    } else {
        console.log(`⚠️  No footer found in: ${path.basename(filePath)}`);
        return false;
    }
}

// Update all HTML files
let updateCount = 0;
htmlFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (updateFooter(filePath)) {
        updateCount++;
    }
});

console.log(`\n✨ Footer update complete! ${updateCount} files updated.`);
console.log('📸 Logo integrated successfully with improved typography and spacing!');