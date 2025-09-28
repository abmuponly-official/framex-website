#!/usr/bin/env node

/**
 * Update Service Icons - Rounded Square Style
 * For "Dịch vụ trọn gói hoàn hảo" section
 */

const fs = require('fs').promises;
const path = require('path');

const CONFIG = {
    homepage: 'index.html',
    cssFile: 'css/service-icons-update.css',
    backupDir: 'backups/service-icons-' + new Date().toISOString().replace(/[:.]/g, '-')
};

async function createBackup() {
    console.log('📁 Creating backup...');
    await fs.mkdir(CONFIG.backupDir, { recursive: true });
    await fs.copyFile(CONFIG.homepage, path.join(CONFIG.backupDir, 'index.html'));
    
    // Backup existing CSS if it exists
    try {
        await fs.copyFile('css/homepage-updates.css', path.join(CONFIG.backupDir, 'homepage-updates.css'));
    } catch (e) {
        // File might not exist
    }
    
    console.log('✅ Backup created at:', CONFIG.backupDir);
}

async function addCSSLink() {
    console.log('\n🎨 Adding CSS for new service icons...');
    
    let content = await fs.readFile(CONFIG.homepage, 'utf8');
    
    // Check if CSS is already linked
    if (content.includes('service-icons-update.css')) {
        console.log('⚠️ CSS already linked');
        return false;
    }
    
    // Add CSS link before closing </head>
    const cssLink = '    <link rel="stylesheet" href="css/service-icons-update.css">\n';
    content = content.replace('</head>', cssLink + '</head>');
    
    await fs.writeFile(CONFIG.homepage, content);
    console.log('✅ CSS link added to homepage');
    return true;
}

async function generateReport() {
    console.log('\n📊 Generating implementation report...');
    
    const report = {
        timestamp: new Date().toISOString(),
        section: 'Dịch vụ trọn gói hoàn hảo',
        changes: {
            iconStyle: 'Rounded square with white glyphs on orange background',
            services: [
                {
                    name: 'Design & Planning',
                    oldIcon: 'fa-drafting-compass',
                    newIcon: 'Pencil/Ruler crossed',
                    file: 'icon-service-design.svg'
                },
                {
                    name: 'Manufacturing',
                    oldIcon: 'fa-industry',
                    newIcon: 'Gear/Cog',
                    file: 'icon-service-manufacturing.svg'
                },
                {
                    name: 'Installation',
                    oldIcon: 'fa-tools',
                    newIcon: 'Wrench',
                    file: 'icon-service-installation.svg'
                },
                {
                    name: 'Smart Integration',
                    oldIcon: 'fa-microchip',
                    newIcon: 'CPU/Chip',
                    file: 'icon-service-smart.svg'
                }
            ],
            cssImplementation: 'CSS pseudo-elements with data URIs',
            svgAssets: '4 SVG files created in assets/icons/'
        },
        specs: {
            size: '48x48px (desktop), 40x40px (mobile)',
            borderRadius: '10px (~20% of size)',
            background: '#ff6b35 (brand orange)',
            glyphColor: '#ffffff',
            glyphSize: '~60% of container',
            hover: 'Elevation + slight darken'
        }
    };
    
    await fs.writeFile('service-icons-report.json', JSON.stringify(report, null, 2));
    console.log('✅ Report saved to service-icons-report.json');
    return report;
}

async function main() {
    console.log('🚀 Service Icons Update Starting...\n');
    
    try {
        // Create backup
        await createBackup();
        
        // Add CSS link
        const cssAdded = await addCSSLink();
        
        // Generate report
        const report = await generateReport();
        
        console.log('\n✨ Service icons update complete!');
        console.log('\n📋 Summary:');
        console.log('  • Icon style: Rounded square with white glyphs');
        console.log('  • Services updated: 4');
        console.log('  • Implementation: CSS-only with inline SVG data URIs');
        console.log('  • SVG assets: Created in /assets/icons/');
        console.log('  • CSS added:', cssAdded ? 'Yes' : 'Already present');
        
        console.log('\n🎯 Implementation Options:');
        console.log('\n  Option 1: CSS-only (Current - Fastest)');
        console.log('  - Icons load via CSS pseudo-elements');
        console.log('  - No HTML changes needed');
        console.log('  - Best performance (inline data URIs)');
        
        console.log('\n  Option 2: Image tags (Alternative)');
        console.log('  - Replace <i> tags with <img src="/assets/icons/icon-service-*.svg">');
        console.log('  - Requires HTML changes');
        console.log('  - Better for CMS integration');
        
        console.log('\n  Option 3: Inline SVG (Most flexible)');
        console.log('  - Replace <i> tags with actual <svg> elements');
        console.log('  - Most control over styling');
        console.log('  - Larger HTML size');
        
        console.log('\n📝 Next Steps:');
        console.log('  1. Review in browser');
        console.log('  2. Test hover states');
        console.log('  3. Check mobile responsiveness');
        console.log('  4. Verify color consistency');
        
    } catch (error) {
        console.error('❌ Update failed:', error);
        console.log('💡 Restore from:', CONFIG.backupDir);
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}

module.exports = { addCSSLink, createBackup };