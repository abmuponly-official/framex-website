#!/usr/bin/env node

/**
 * FrameX Homepage Surgical Updates Implementation
 * Service icons and footer logo updates only
 */

const fs = require('fs').promises;
const path = require('path');

const CONFIG = {
    homepage: 'index.html',
    cssFile: 'homepage-surgical-updates.css',
    backupDir: 'backups/surgical-update-' + new Date().toISOString().replace(/[:.]/g, '-'),
    footerLogoUrl: 'http://framex.vn/assets/images/framex-logo-footer.png'
};

async function createBackup() {
    console.log('📁 Creating backup...');
    await fs.mkdir(CONFIG.backupDir, { recursive: true });
    await fs.copyFile(CONFIG.homepage, path.join(CONFIG.backupDir, 'index.html'));
    console.log('✅ Backup created at:', CONFIG.backupDir);
}

async function updateFooterLogo() {
    console.log('\n🎯 Task 1: Updating footer logo to match Contact page...');
    
    let content = await fs.readFile(CONFIG.homepage, 'utf8');
    let changes = 0;
    
    // Find and replace the footer logo URL
    const oldPattern = /<img src="https:\/\/page\.gensparksite\.com\/[^"]*"/g;
    const footerLogoPattern = /(<div class="footer-logo">\s*<img )(src="[^"]*")([^>]*>)/;
    
    // Replace within footer context only
    content = content.replace(footerLogoPattern, (match, prefix, src, suffix) => {
        if (match.includes('footer-logo')) {
            changes++;
            return `${prefix}src="${CONFIG.footerLogoUrl}"${suffix}`;
        }
        return match;
    });
    
    if (changes > 0) {
        await fs.writeFile(CONFIG.homepage, content);
        console.log(`✅ Footer logo updated to: ${CONFIG.footerLogoUrl}`);
        return true;
    } else {
        console.log('⚠️ Footer logo not found or already updated');
        return false;
    }
}

async function addCSSOverrides() {
    console.log('\n🎯 Task 2: Adding CSS override for service icons and footer...');
    
    let content = await fs.readFile(CONFIG.homepage, 'utf8');
    
    // Check if CSS is already linked
    if (content.includes('homepage-surgical-updates.css')) {
        console.log('⚠️ CSS overrides already linked');
        return false;
    }
    
    // Add CSS link before closing </head>
    const cssLink = '    <link rel="stylesheet" href="homepage-surgical-updates.css">\n';
    const updatedContent = content.replace('</head>', cssLink + '</head>');
    
    await fs.writeFile(CONFIG.homepage, updatedContent);
    console.log('✅ CSS override link added');
    return true;
}

async function generateImplementationGuide() {
    console.log('\n📝 Generating implementation guide...');
    
    const guide = `
# FrameX Homepage Surgical Updates - Implementation Guide

## Changes Applied:

### 1. Service Icons Replacement
- **Old**: Font Awesome solid icons (fas fa-*)
- **New**: Inline SVG outline icons with 1.5px stroke
- **Method**: CSS pseudo-elements with data URIs
- **Icons**:
  - Design & Planning: Compass outline (48x48)
  - Manufacturing: Factory outline (48x48)
  - Installation: Wrench outline (48x48)
  - Smart Integration: Chip outline (48x48)

### 2. Footer Logo Update
- **Old**: gensparksite.com base64 URL
- **New**: http://framex.vn/assets/images/framex-logo-footer.png
- **Size**: 180x48px (max)
- **Matches**: Contact page footer implementation

## File Changes:
- index.html: Footer logo URL updated, CSS link added
- homepage-surgical-updates.css: New file with icon and footer overrides

## Testing Required:
1. Clear browser cache and reload
2. Check all 4 service icons display correctly
3. Verify footer logo loads
4. Test hover states on service cards
5. Validate responsive breakpoints
6. Check print styles

## Rollback Instructions:
1. Restore from backup: ${CONFIG.backupDir}
2. Remove CSS link from <head>
3. Delete homepage-surgical-updates.css
`;

    await fs.writeFile('implementation-guide.md', guide);
    console.log('✅ Implementation guide saved');
    return guide;
}

async function main() {
    console.log('🚀 FrameX Homepage Surgical Updates Starting...\n');
    
    try {
        // Create backup
        await createBackup();
        
        // Apply updates
        const footerUpdated = await updateFooterLogo();
        const cssAdded = await addCSSOverrides();
        
        // Generate guide
        await generateImplementationGuide();
        
        // Report
        console.log('\n✨ Surgical updates complete!');
        console.log('\n📊 Summary:');
        console.log(`  • Footer logo updated: ${footerUpdated ? '✓' : '○'}`);
        console.log(`  • CSS overrides added: ${cssAdded ? '✓' : '○'}`);
        console.log(`  • Service icons: Will update via CSS`);
        
        console.log('\n📋 Next Steps:');
        console.log('  1. Review changes in browser');
        console.log('  2. Verify icons render correctly');
        console.log('  3. Check footer logo loads');
        console.log('  4. Test responsive views');
        console.log('  5. Validate hover states');
        
    } catch (error) {
        console.error('❌ Update failed:', error);
        console.log('💡 Restore from:', CONFIG.backupDir);
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}

module.exports = { updateFooterLogo, addCSSOverrides };