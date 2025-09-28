#!/usr/bin/env node

/**
 * FrameX Homepage Updates Implementation
 * Applies surgical changes to homepage without altering structure
 */

const fs = require('fs').promises;
const path = require('path');

const UPDATES = {
    homepage: 'index.html',
    cssFile: 'css/homepage-updates.css',
    backupDir: 'backups/homepage-update-' + new Date().toISOString().replace(/[:.]/g, '-')
};

async function createBackup() {
    console.log('📁 Creating backup...');
    await fs.mkdir(UPDATES.backupDir, { recursive: true });
    await fs.copyFile(UPDATES.homepage, path.join(UPDATES.backupDir, 'index.html'));
    console.log('✅ Backup created at:', UPDATES.backupDir);
}

async function removePointingEmoji() {
    console.log('\n🎯 Task 1: Removing pointing emoji from services section...');
    
    let content = await fs.readFile(UPDATES.homepage, 'utf8');
    
    // Find and remove the pointing emoji
    const originalLine = '<span style="margin-right: 8px;">👉</span>';
    const updatedContent = content.replace(originalLine, '');
    
    if (content !== updatedContent) {
        await fs.writeFile(UPDATES.homepage, updatedContent);
        console.log('✅ Pointing emoji removed from services section');
        return true;
    } else {
        console.log('⚠️ Pointing emoji not found or already removed');
        return false;
    }
}

async function updateFooterLogo() {
    console.log('\n🎯 Task 2: Updating footer logo implementation...');
    
    let content = await fs.readFile(UPDATES.homepage, 'utf8');
    
    // Update footer logo to use the same logo as navigation
    const oldLogoPath = 'src="assets/images/framex-logo-footer.png"';
    const newLogoPath = 'src="https://page.gensparksite.com/v1/base64_upload/c648078921c4cc3d26de6fb9d1e94e5b"';
    
    const updatedContent = content.replace(oldLogoPath, newLogoPath);
    
    if (content !== updatedContent) {
        await fs.writeFile(UPDATES.homepage, updatedContent);
        console.log('✅ Footer logo updated to use working asset');
        return true;
    } else {
        console.log('⚠️ Footer logo already updated or not found');
        return false;
    }
}

async function addCSSOverrides() {
    console.log('\n🎯 Task 3: Adding CSS override link to homepage...');
    
    let content = await fs.readFile(UPDATES.homepage, 'utf8');
    
    // Check if CSS is already linked
    if (content.includes('homepage-updates.css')) {
        console.log('⚠️ CSS overrides already linked');
        return false;
    }
    
    // Add CSS link before closing </head>
    const cssLink = '    <link rel="stylesheet" href="css/homepage-updates.css">\n';
    const updatedContent = content.replace('</head>', cssLink + '</head>');
    
    await fs.writeFile(UPDATES.homepage, updatedContent);
    console.log('✅ CSS override link added to homepage');
    return true;
}

async function normalizeServiceIcons() {
    console.log('\n🎯 Task 4: Checking service icons consistency...');
    
    let content = await fs.readFile(UPDATES.homepage, 'utf8');
    
    // Service icons to check
    const iconClasses = [
        'fa-drafting-compass',
        'fa-industry', 
        'fa-tools',
        'fa-microchip'
    ];
    
    // Verify all icons are using 'fas' (solid) prefix for consistency
    let changesNeeded = false;
    
    for (const icon of iconClasses) {
        // Check if any are using 'far' (regular/outline) instead of 'fas' (solid)
        const regularPattern = new RegExp(`class="far ${icon}"`, 'g');
        if (regularPattern.test(content)) {
            content = content.replace(regularPattern, `class="fas ${icon}"`);
            changesNeeded = true;
            console.log(`  ✏️ Updated ${icon} from outline to solid style`);
        }
    }
    
    if (changesNeeded) {
        await fs.writeFile(UPDATES.homepage, content);
        console.log('✅ Service icons normalized to consistent style');
        return true;
    } else {
        console.log('✅ Service icons already consistent (all using solid style)');
        return false;
    }
}

async function generateReport(changes) {
    console.log('\n📊 Update Summary Report');
    console.log('========================');
    
    const report = {
        timestamp: new Date().toISOString(),
        updates: {
            emojiRemoved: changes.emoji,
            footerLogoFixed: changes.footer,
            cssOverridesAdded: changes.css,
            iconsNormalized: changes.icons
        },
        files: {
            modified: ['index.html'],
            added: ['css/homepage-updates.css'],
            backup: UPDATES.backupDir
        },
        recommendations: [
            'Test all changes in different browsers',
            'Verify mobile responsiveness',
            'Check icon rendering on retina displays',
            'Validate footer logo visibility',
            'Run Lighthouse audit to ensure no CLS issues'
        ]
    };
    
    await fs.writeFile('homepage-update-report.json', JSON.stringify(report, null, 2));
    
    console.log('\n✅ Changes Applied:');
    console.log(`  • Emoji removed: ${changes.emoji ? '✓' : '○'}`);
    console.log(`  • Footer logo fixed: ${changes.footer ? '✓' : '○'}`);
    console.log(`  • CSS overrides added: ${changes.css ? '✓' : '○'}`);
    console.log(`  • Icons normalized: ${changes.icons ? '✓' : '○'}`);
    
    console.log('\n📋 Recommendations:');
    report.recommendations.forEach(rec => console.log(`  • ${rec}`));
    
    return report;
}

async function main() {
    console.log('🚀 FrameX Homepage Updates Starting...\n');
    
    try {
        // Create backup first
        await createBackup();
        
        // Apply updates
        const changes = {
            emoji: await removePointingEmoji(),
            footer: await updateFooterLogo(),
            css: await addCSSOverrides(),
            icons: await normalizeServiceIcons()
        };
        
        // Generate report
        await generateReport(changes);
        
        console.log('\n✨ Homepage updates complete!');
        console.log('📂 Backup saved at:', UPDATES.backupDir);
        console.log('📄 Report saved at: homepage-update-report.json');
        console.log('\n🔍 Next steps:');
        console.log('  1. Review changes in browser');
        console.log('  2. Test responsiveness');
        console.log('  3. Validate with Lighthouse');
        console.log('  4. Deploy if satisfied');
        
    } catch (error) {
        console.error('❌ Update failed:', error);
        console.log('💡 Restore from backup at:', UPDATES.backupDir);
        process.exit(1);
    }
}

// Run if called directly
if (require.main === module) {
    main();
}

module.exports = { removePointingEmoji, updateFooterLogo, normalizeServiceIcons };