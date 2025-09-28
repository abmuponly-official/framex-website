#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔄 Updating footer across all pages...\n');

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

// New footer HTML
const newFooterHTML = `    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <!-- About FrameX Column -->
                <div class="footer-column footer-about">
                    <div class="footer-logo">
                        <img src="assets/images/framex-logo.svg" alt="FrameX Logo" width="120" height="40">
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

// New footer CSS
const newFooterCSS = `
        /* Enhanced Footer Styles */
        .footer {
            background: #000;
            color: #fff;
            padding: 60px 0 0;
            margin-top: 80px;
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: 1.5fr 1fr 1fr;
            gap: 50px;
            margin-bottom: 40px;
        }
        
        /* About Column */
        .footer-about .footer-logo {
            margin-bottom: 20px;
        }
        
        .footer-about .footer-logo img {
            filter: brightness(0) invert(1);
            height: 40px;
        }
        
        .footer-description {
            line-height: 1.6;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 25px;
            font-size: 0.95rem;
        }
        
        .footer-social {
            display: flex;
            gap: 12px;
        }
        
        .footer-social a {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            color: #fff;
            transition: all 0.3s ease;
            text-decoration: none;
        }
        
        .footer-social a:hover {
            background: #ff6b35;
            transform: translateY(-3px);
        }
        
        /* Footer Columns */
        .footer-title {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 20px;
            color: #fff;
        }
        
        .footer-list,
        .footer-contact-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        .footer-list li,
        .footer-contact-list li {
            margin-bottom: 12px;
        }
        
        .footer-list a {
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
            transition: color 0.3s ease;
            font-size: 0.95rem;
        }
        
        .footer-list a:hover {
            color: #ff6b35;
        }
        
        /* Contact List */
        .footer-contact-list li {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.95rem;
        }
        
        .footer-contact-list i {
            color: #ff6b35;
            margin-top: 3px;
            width: 16px;
        }
        
        .footer-contact-list a {
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
            transition: color 0.3s ease;
        }
        
        .footer-contact-list a:hover {
            color: #ff6b35;
        }
        
        /* Footer Bottom */
        .footer-bottom {
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding: 25px 0;
        }
        
        .footer-bottom-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .footer-copyright,
        .footer-tagline {
            margin: 0;
            color: rgba(255, 255, 255, 0.6);
            font-size: 0.9rem;
        }
        
        .footer-tagline {
            font-style: italic;
        }
        
        /* Responsive Footer */
        @media (max-width: 1024px) {
            .footer-content {
                grid-template-columns: 1fr 1fr;
                gap: 40px;
            }
            
            .footer-about {
                grid-column: span 2;
            }
        }
        
        @media (max-width: 768px) {
            .footer {
                padding: 40px 0 0;
            }
            
            .footer-content {
                grid-template-columns: 1fr;
                gap: 30px;
            }
            
            .footer-about {
                grid-column: span 1;
            }
            
            .footer-bottom-content {
                flex-direction: column;
                text-align: center;
                gap: 10px;
            }
            
            .footer-social {
                justify-content: center;
            }
        }`;

// Function to update footer in file
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
        content = content.substring(0, footerStart) + newFooterHTML + content.substring(footerEnd);
        
        // Add or update footer CSS if in style tag
        if (content.includes('<style>') && !content.includes('/* Enhanced Footer Styles */')) {
            content = content.replace('</style>', newFooterCSS + '\n    </style>');
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
console.log('\n📝 Remember to update translations in main.js for the new footer content!');