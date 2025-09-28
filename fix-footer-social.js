#!/usr/bin/env node

/**
 * Fix Footer Social Links and Icons
 * Updates social media links with proper icons and attributes
 * Date: 2025-09-28
 */

const fs = require('fs').promises;

class FooterFixer {
    constructor() {
        // Updated social links HTML
        this.socialLinksHTML = `                <div class="footer-v2__social">
                    <a href="https://3dwarehouse.sketchup.com/by/framexvn" target="_blank" rel="noopener noreferrer" aria-label="3D Warehouse">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 2L2 7v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7l-10-5z"></path>
                            <path d="M12 22V12"></path>
                            <path d="M22 7l-10 5L2 7"></path>
                            <path d="M2 12l10 5 10-5"></path>
                        </svg>
                    </a>
                    <a href="https://www.pinterest.com/FRAMEXVN/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M8 11.973c0-2.483 1.826-4.505 4.08-4.505 2.254 0 4.08 2.022 4.08 4.505 0 2.483-1.826 4.505-4.08 4.505-.522 0-1.023-.109-1.479-.311"></path>
                            <path d="M9.56 15.51l1.528-5.572"></path>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/framexvn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>
                </div>`;
        
        this.htmlFiles = [
            'index.html',
            'products.html',
            'about.html',
            'projects.html',
            'blog.html',
            'contact.html',
            'services.html',
            'investor-relations.html'
        ];
        
        this.updateCount = 0;
    }

    async updateFiles() {
        console.log('🔧 Fixing footer social links...');
        
        for (const file of this.htmlFiles) {
            try {
                let content = await fs.readFile(file, 'utf8');
                let originalContent = content;
                
                // Find and replace the social links section
                const socialStart = content.indexOf('<div class="footer-v2__social">');
                if (socialStart !== -1) {
                    const socialEnd = content.indexOf('</div>', socialStart) + 6;
                    content = content.substring(0, socialStart) + this.socialLinksHTML + content.substring(socialEnd);
                }
                
                // Add CSS link if not present
                if (!content.includes('footer-fixes.css')) {
                    if (content.includes('footer-white-override.css')) {
                        // Add after footer-white-override.css
                        content = content.replace(
                            'footer-white-override.css">',
                            'footer-white-override.css">\n    <link rel="stylesheet" href="css/footer-fixes.css">'
                        );
                    } else if (content.includes('</head>')) {
                        // Add before closing head tag
                        content = content.replace(
                            '</head>',
                            '    <link rel="stylesheet" href="css/footer-fixes.css">\n    </head>'
                        );
                    }
                }
                
                // Ensure all social links have rel="noopener noreferrer"
                content = content.replace(
                    /rel="noopener"/g,
                    'rel="noopener noreferrer"'
                );
                
                if (content !== originalContent) {
                    await fs.writeFile(file, content, 'utf8');
                    this.updateCount++;
                    console.log(`✅ Fixed ${file}`);
                } else {
                    console.log(`⏭️  ${file} already up to date`);
                }
                
            } catch (error) {
                console.error(`❌ Error updating ${file}:`, error.message);
            }
        }
        
        console.log(`\n✅ Complete! Fixed ${this.updateCount} files.`);
    }

    async run() {
        await this.updateFiles();
        await this.createReport();
    }

    async createReport() {
        const report = {
            timestamp: new Date().toISOString(),
            filesUpdated: this.updateCount,
            changes: [
                'Fixed social media link order: 3D Warehouse, Pinterest, LinkedIn',
                'Added rel="noopener noreferrer" to all external links',
                'Normalized SVG icon sizes to 24x24',
                'Added proper aria-labels for accessibility',
                'Applied consistent stroke-based icon style',
                'Added footer-fixes.css for styling improvements'
            ],
            socialLinks: {
                '3D Warehouse': 'https://3dwarehouse.sketchup.com/by/framexvn',
                'Pinterest': 'https://www.pinterest.com/FRAMEXVN/',
                'LinkedIn': 'https://www.linkedin.com/company/framexvn'
            },
            cssUpdates: [
                'Social icon hover states with brand color',
                'CTA button with black background and hover effects',
                'Focus states for keyboard navigation',
                'Dark mode adjustments',
                'Reduced motion preferences'
            ]
        };
        
        await fs.writeFile(
            'footer-fixes-report.json',
            JSON.stringify(report, null, 2),
            'utf8'
        );
        
        console.log('📊 Report saved to footer-fixes-report.json');
    }
}

// Execute
new FooterFixer().run().catch(console.error);