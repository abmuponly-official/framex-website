#!/usr/bin/env node

/**
 * Apply Surgical Display Updates to FrameX Website
 * 
 * This script applies minimal, non-destructive updates to all HTML files:
 * 1. Adds surgical-updates.css stylesheet link
 * 2. Updates product page text via data attributes
 * 3. Adds 3D Warehouse social icon to footer
 * 
 * Date: 2025-09-28
 */

const fs = require('fs').promises;
const path = require('path');

class DisplayUpdater {
    constructor() {
        this.htmlFiles = [];
        this.cssFile = 'css/surgical-updates.css';
        this.updateCount = 0;
        this.report = {
            timestamp: new Date().toISOString(),
            changes: [],
            files: []
        };
    }

    async init() {
        console.log('🎯 Starting surgical display updates...');
        await this.findHtmlFiles();
        await this.processFiles();
        await this.saveReport();
        console.log(`✅ Updates complete! Modified ${this.updateCount} files.`);
    }

    async findHtmlFiles() {
        const files = await fs.readdir('.');
        this.htmlFiles = files.filter(f => 
            f.endsWith('.html') && 
            !f.includes('optimized') &&
            !f.includes('template') &&
            !f.includes('editor')
        );
        console.log(`📄 Found ${this.htmlFiles.length} HTML files to update`);
    }

    async processFiles() {
        for (const file of this.htmlFiles) {
            await this.updateHtmlFile(file);
        }
    }

    async updateHtmlFile(filename) {
        try {
            let content = await fs.readFile(filename, 'utf8');
            let originalContent = content;
            let changes = [];

            // 1. Add CSS link if not present
            if (!content.includes('surgical-updates.css')) {
                const cssLink = '    <link rel="stylesheet" href="css/surgical-updates.css">';
                
                // Find the best place to insert (after other CSS files)
                if (content.includes('</head>')) {
                    content = content.replace(
                        '</head>',
                        `${cssLink}\n    </head>`
                    );
                    changes.push('Added surgical-updates.css link');
                }
            }

            // 2. For products.html specifically, update the target-title text
            if (filename === 'products.html') {
                // Update Vietnamese text
                content = content.replace(
                    />Khách hàng mục tiêu</g,
                    '>Dành cho<'
                );
                
                // Update English text in data attributes if present
                content = content.replace(
                    /data-lang-en="Target Customers"/g,
                    'data-lang-en="Designed For"'
                );
                
                if (content !== originalContent) {
                    changes.push('Updated target customer section text');
                }
            }

            // 3. Add 3D Warehouse icon to footer if not present
            if (content.includes('footer-v2__social') && !content.includes('3D Warehouse')) {
                // Find the social links section
                const socialRegex = /(<div class="footer-v2__social">[\s\S]*?)<\/div>/;
                const socialMatch = content.match(socialRegex);
                
                if (socialMatch) {
                    const newSocialContent = socialMatch[1] + 
                        '\n                    <a href="https://3dwarehouse.sketchup.com/by/framexvn" target="_blank" rel="noopener" aria-label="3D Warehouse">\n' +
                        '                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">\n' +
                        '                            <path d="M12 2L2 7v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7l-10-5z"></path>\n' +
                        '                            <path d="M12 22V12"></path>\n' +
                        '                            <path d="M22 7l-10 5L2 7"></path>\n' +
                        '                            <path d="M2 12l10 5 10-5"></path>\n' +
                        '                        </svg>\n' +
                        '                    </a>\n' +
                        '                </div>';
                    
                    content = content.replace(socialRegex, newSocialContent);
                    changes.push('Added 3D Warehouse social icon');
                }
            }

            // Save if changes were made
            if (content !== originalContent) {
                await fs.writeFile(filename, content, 'utf8');
                this.updateCount++;
                
                this.report.files.push({
                    filename,
                    changes,
                    timestamp: new Date().toISOString()
                });
                
                console.log(`✅ Updated ${filename}:`, changes.join(', '));
            } else {
                console.log(`⏭️  No changes needed for ${filename}`);
            }

        } catch (error) {
            console.error(`❌ Error updating ${filename}:`, error.message);
        }
    }

    async saveReport() {
        this.report.summary = {
            totalFiles: this.htmlFiles.length,
            filesUpdated: this.updateCount,
            cssFile: this.cssFile,
            changes: [
                'Added lighter footer background (#F7F7F9)',
                'Added 3D Warehouse social icon',
                'Updated product page target customer text',
                'Changed bullet icons to checkmarks (CSS)',
                'Hidden decorative section tiles (CSS)'
            ]
        };

        await fs.writeFile(
            'display-updates-report.json',
            JSON.stringify(this.report, null, 2),
            'utf8'
        );
        
        console.log('📊 Report saved to display-updates-report.json');
    }
}

// Execute the updater
(async () => {
    const updater = new DisplayUpdater();
    await updater.init();
})().catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
});