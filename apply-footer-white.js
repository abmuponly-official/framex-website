#!/usr/bin/env node

/**
 * Apply White Footer Background Override
 * Adds the footer-white-override.css to all HTML pages
 * Date: 2025-09-28
 */

const fs = require('fs').promises;

async function applyWhiteFooter() {
    console.log('🎨 Applying white footer override...');
    
    const htmlFiles = [
        'index.html',
        'products.html', 
        'about.html',
        'projects.html',
        'blog.html',
        'contact.html',
        'services.html',
        'investor-relations.html'
    ];
    
    let updatedCount = 0;
    
    for (const file of htmlFiles) {
        try {
            let content = await fs.readFile(file, 'utf8');
            
            // Check if already included
            if (content.includes('footer-white-override.css')) {
                console.log(`⏭️  ${file} already has white footer CSS`);
                continue;
            }
            
            // Add after surgical-updates.css to ensure proper cascade
            if (content.includes('surgical-updates.css')) {
                content = content.replace(
                    '<link rel="stylesheet" href="css/surgical-updates.css">',
                    '<link rel="stylesheet" href="css/surgical-updates.css">\n    <link rel="stylesheet" href="css/footer-white-override.css">'
                );
            } else if (content.includes('</head>')) {
                // Add before closing head tag as fallback
                content = content.replace(
                    '</head>',
                    '    <link rel="stylesheet" href="css/footer-white-override.css">\n    </head>'
                );
            }
            
            await fs.writeFile(file, content, 'utf8');
            updatedCount++;
            console.log(`✅ Updated ${file}`);
            
        } catch (error) {
            console.error(`❌ Error updating ${file}:`, error.message);
        }
    }
    
    console.log(`\n✅ Complete! Updated ${updatedCount} files.`);
}

applyWhiteFooter().catch(console.error);