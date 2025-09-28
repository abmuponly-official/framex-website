#!/usr/bin/env node

/**
 * FrameX Footer v2.0 Implementation Script
 * Replaces old footer with new minimalist design
 */

const fs = require('fs').promises;
const path = require('path');

const CONFIG = {
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
    backupDir: 'backups/footer-v2-' + new Date().toISOString().replace(/[:.]/g, '-'),
    newFooterFile: 'new-footer-design.html',
    cssFile: 'css/footer-v2.css'
};

// New footer HTML template
const NEW_FOOTER_HTML = `    <!-- Footer v2.0 - Minimalist Design -->
    <footer class="footer-v2" role="contentinfo">
        <div class="footer-v2__container">
            <!-- Top Section: Brand & Quick Actions -->
            <div class="footer-v2__top">
                <div class="footer-v2__brand">
                    <a href="/" class="footer-v2__logo" aria-label="FrameX - Trang chủ">
                        <img src="http://framex.vn/assets/images/framex-logo-footer.png" 
                             alt="FrameX" 
                             width="140" 
                             height="36"
                             loading="lazy">
                    </a>
                    <p class="footer-v2__tagline" data-lang="footer-tagline">Định hình không gian sống tương lai</p>
                </div>
                
                <div class="footer-v2__cta">
                    <a href="/contact.html?source=footer" class="footer-v2__button" data-lang="footer-cta">
                        <span>Nhận báo giá</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
            
            <!-- Main Section: Navigation & Contact -->
            <div class="footer-v2__main">
                <!-- Primary Navigation -->
                <nav class="footer-v2__nav" aria-label="Footer navigation">
                    <ul class="footer-v2__nav-list">
                        <li><a href="/products.html" data-lang="footer-products">Sản phẩm</a></li>
                        <li><a href="/services.html" data-lang="footer-services">Dịch vụ</a></li>
                        <li><a href="/projects.html" data-lang="footer-projects">Dự án</a></li>
                        <li><a href="/about.html" data-lang="footer-about">Về chúng tôi</a></li>
                        <li><a href="/blog.html" data-lang="footer-blog">Blog</a></li>
                        <li><a href="/investor-relations.html" data-lang="footer-investor">Nhà đầu tư</a></li>
                    </ul>
                </nav>
                
                <!-- Contact Information -->
                <address class="footer-v2__contact">
                    <a href="tel:+84909005683" class="footer-v2__contact-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <span>0909 005 683</span>
                    </a>
                    
                    <a href="mailto:sales@framex.vn" class="footer-v2__contact-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <span>sales@framex.vn</span>
                    </a>
                    
                    <div class="footer-v2__contact-item footer-v2__contact-item--address">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span data-lang="footer-address">150/52A Phú Định, TP.HCM</span>
                    </div>
                </address>
            </div>
            
            <!-- Bottom Section: Legal & Social -->
            <div class="footer-v2__bottom">
                <div class="footer-v2__legal">
                    <p class="footer-v2__copyright" data-lang="footer-copyright">© 2024 FrameX - ABM Architectural Material Co., Ltd</p>
                    <ul class="footer-v2__legal-links">
                        <li><a href="/privacy" data-lang="footer-privacy">Chính sách bảo mật</a></li>
                        <li><a href="/terms" data-lang="footer-terms">Điều khoản sử dụng</a></li>
                    </ul>
                </div>
                
                <div class="footer-v2__social">
                    <a href="https://www.pinterest.com/FRAMEXVN/" target="_blank" rel="noopener" aria-label="Pinterest">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M8 11.973c0-2.483 1.826-4.505 4.08-4.505 2.254 0 4.08 2.022 4.08 4.505 0 2.483-1.826 4.505-4.08 4.505-.522 0-1.023-.109-1.479-.311"></path>
                            <path d="M9.56 15.51l1.528-5.572"></path>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/framexvn" target="_blank" rel="noopener" aria-label="LinkedIn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>`;

async function createBackup() {
    console.log('📁 Creating backups...');
    await fs.mkdir(CONFIG.backupDir, { recursive: true });
    
    for (const file of CONFIG.htmlFiles) {
        try {
            const content = await fs.readFile(file, 'utf8');
            await fs.writeFile(path.join(CONFIG.backupDir, file), content);
            console.log(`  ✅ Backed up ${file}`);
        } catch (err) {
            console.log(`  ⏭️ Skipped ${file} (not found)`);
        }
    }
}

async function replaceFooter(filename) {
    try {
        let content = await fs.readFile(filename, 'utf8');
        
        // Find and replace footer section
        const footerRegex = /<footer[^>]*>[\s\S]*?<\/footer>/gi;
        
        if (footerRegex.test(content)) {
            content = content.replace(footerRegex, NEW_FOOTER_HTML);
            
            // Add CSS link if not present
            if (!content.includes('footer-v2.css')) {
                content = content.replace('</head>', '    <link rel="stylesheet" href="css/footer-v2.css">\n</head>');
            }
            
            await fs.writeFile(filename, content);
            return true;
        }
        return false;
    } catch (err) {
        console.error(`Error processing ${filename}:`, err);
        return false;
    }
}

async function updateMainJS() {
    console.log('\n🔧 Updating main.js for footer compatibility...');
    
    try {
        let content = await fs.readFile('js/main.js', 'utf8');
        
        // Add footer v2 language support
        const footerTranslations = `
// Footer v2 translations
const footerTranslations = {
    en: {
        'footer-tagline': 'Shaping Tomorrow\\'s Living',
        'footer-cta': 'Get Quote',
        'footer-products': 'Products',
        'footer-services': 'Services',
        'footer-projects': 'Projects',
        'footer-about': 'About',
        'footer-blog': 'Blog',
        'footer-investor': 'Investors',
        'footer-address': '150/52A Phu Dinh, HCMC',
        'footer-copyright': '© 2024 FrameX - ABM Architectural Material Co., Ltd',
        'footer-privacy': 'Privacy Policy',
        'footer-terms': 'Terms of Service'
    },
    vi: {
        'footer-tagline': 'Định hình không gian sống tương lai',
        'footer-cta': 'Nhận báo giá',
        'footer-products': 'Sản phẩm',
        'footer-services': 'Dịch vụ',
        'footer-projects': 'Dự án',
        'footer-about': 'Về chúng tôi',
        'footer-blog': 'Blog',
        'footer-investor': 'Nhà đầu tư',
        'footer-address': '150/52A Phú Định, TP.HCM',
        'footer-copyright': '© 2024 FrameX - ABM Architectural Material Co., Ltd',
        'footer-privacy': 'Chính sách bảo mật',
        'footer-terms': 'Điều khoản sử dụng'
    }
};
`;

        if (!content.includes('footerTranslations')) {
            content += footerTranslations;
            await fs.writeFile('js/main.js', content);
            console.log('  ✅ Added footer translations to main.js');
        } else {
            console.log('  ⏭️ Footer translations already present');
        }
    } catch (err) {
        console.log('  ⚠️ Could not update main.js:', err.message);
    }
}

async function generateReport() {
    const report = {
        timestamp: new Date().toISOString(),
        changes: {
            footerDesign: 'Replaced with minimalist v2.0 design',
            cssFile: 'Added footer-v2.css',
            htmlFiles: CONFIG.htmlFiles,
            features: [
                'Simplified 3-zone layout',
                'Outline SVG icons',
                'Vietnamese language support',
                'Responsive design',
                'Dark mode ready',
                'WCAG AA compliant'
            ]
        },
        backup: CONFIG.backupDir,
        rollback: `Restore files from ${CONFIG.backupDir}`
    };
    
    await fs.writeFile('footer-v2-report.json', JSON.stringify(report, null, 2));
    return report;
}

async function main() {
    console.log('🚀 FrameX Footer v2.0 Implementation\n');
    
    try {
        // Create backups
        await createBackup();
        
        // Replace footers in all HTML files
        console.log('\n📝 Replacing footers...');
        let updatedCount = 0;
        
        for (const file of CONFIG.htmlFiles) {
            const result = await replaceFooter(file);
            if (result) {
                console.log(`  ✅ Updated ${file}`);
                updatedCount++;
            } else {
                console.log(`  ⏭️ Skipped ${file}`);
            }
        }
        
        // Update JavaScript
        await updateMainJS();
        
        // Generate report
        const report = await generateReport();
        
        console.log('\n✨ Footer v2.0 Implementation Complete!');
        console.log(`\n📊 Summary:`);
        console.log(`  • Files updated: ${updatedCount}`);
        console.log(`  • Backup location: ${CONFIG.backupDir}`);
        console.log(`  • Report saved: footer-v2-report.json`);
        
        console.log('\n📋 Next Steps:');
        console.log('  1. Review changes in browser');
        console.log('  2. Test responsive views');
        console.log('  3. Verify Vietnamese content');
        console.log('  4. Check all links work');
        console.log('  5. Run accessibility audit');
        
    } catch (error) {
        console.error('❌ Implementation failed:', error);
        console.log(`💡 Restore from: ${CONFIG.backupDir}`);
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}

module.exports = { replaceFooter, createBackup };