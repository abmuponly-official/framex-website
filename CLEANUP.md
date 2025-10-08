# Deletion and Cleanup Tasks

## 🗑️ FILES TO DELETE

### CSS Files - Redundant/Conflicting Styles
```bash
# Remove old responsive files (replaced by unified system)
rm css/responsive-enhanced.css
rm css/responsive.css

# Remove redundant component files
rm css/homepage-updates.css
rm css/homepage-surgical-updates.css
rm css/surgical-updates.css

# Remove old service-related styles
rm css/services.css
rm css/service-icons-update.css

# Remove temporary/experimental files
rm css/vi-table-refinements.css
rm css/comparison-table-redesign.css
```

### Backup Files - Development Artifacts
```bash
# Remove backup directories (keep one recent backup)
rm -rf backups/footer-v2-2025-09-28T17-55-42-267Z/
rm -rf backups/homepage-update-2025-09-28T17-38-23-344Z/
rm -rf backups/service-icons-2025-09-28T18-00-54-185Z/
rm -rf backups/surgical-update-2025-09-28T17-48-23-777Z/

# Keep only the most recent backup directory for safety
```

### Development/Documentation Files
```bash
# Remove development tools and reports
rm dev-tools.sh
rm *.json # All report JSON files
rm *-report.json
rm *-update-report.json
rm comparison-table-*.json
rm vi-*.json
rm table-*.json
rm optimization-report.json
rm performance-manifest.json

# Remove documentation files (if not needed in production)
rm CHECKLIST.md
rm CLEANUP_*.md
rm CSS_CLEANUP_PLAN.md
rm DESIGN-SYSTEM.md
rm DEVELOPMENT.md
rm DEVELOPMENT_SETUP.md
rm HUONG_DAN_GITHUB.md
rm MIGRATION-GUIDE.md
rm OPTIMIZATION_GUIDE.md
rm PAGE_UPDATE_PLAN.md
rm PHASE*.md
rm PR_SUMMARY.md
rm PULL_REQUEST_*.md
rm README_GITHUB.md
rm SITE_COMPARISON.md
rm SURGICAL_UPDATES_GUIDE.md
rm UPDATE_SUMMARY.md
rm WEBSITE_ANALYSIS_AND_STRATEGY.md
rm implementation-guide.md
rm performance-optimization.md
rm footer-implementation-guide.md

# Remove template files
rm new-footer-design.html
rm new-homepage-structure.html
rm website-editor.html
rm performance-dashboard.html
rm comparison-table-en.html
rm comparison-table-vi.html
```

### Unused JavaScript Files
```bash
# Check and potentially remove unused JS
# (Verify these are not referenced before deleting)
# rm js/comparison-table-i18n.js  # If not using comparison table
```

## 🔍 SERVICE REFERENCE CLEANUP VERIFICATION

### Search and Remove Commands

#### 1. Find All Service References
```bash
# Search for any remaining service references
grep -r "service" --include="*.html" --include="*.css" --include="*.js" .

# Search for services.html links
grep -r "services\.html" --include="*.html" .

# Search in navigation menus
grep -r "nav.*service\|service.*nav" --include="*.html" .
```

#### 2. Clean Navigation Links
```bash
# Remove service links from all HTML files
sed -i '/<li><a href="\/services\.html"/d' *.html

# Alternative: Manual cleanup of each file
# about.html - Remove line with services.html link
# blog.html - Remove line with services.html link  
# contact.html - Remove line with services.html link
# index.html - Remove line with services.html link
# investor-relations.html - Remove line with services.html link
# products.html - Remove line with services.html link
# projects.html - Remove line with services.html link
```

#### 3. Update Sitemap
```bash
# Remove service page from sitemap.xml
sed -i '/<url>.*services\.html.*<\/url>/,+4d' sitemap.xml

# Manual verification needed for XML structure
```

#### 4. Update Robots.txt
```bash
# Add disallow rule for services page
echo "" >> robots.txt
echo "# Removed service page" >> robots.txt  
echo "Disallow: /services.html" >> robots.txt
```

## 🧹 CSS CLEANUP TASKS

### 1. Remove Unused CSS Rules

#### Analyze Usage
```bash
# Create a list of all CSS selectors
grep -o "\.[a-zA-Z0-9_-]*\|#[a-zA-Z0-9_-]*" css/*.css | sort | uniq > all-selectors.txt

# Check HTML files for selector usage
for selector in $(cat all-selectors.txt); do
    if ! grep -q "$selector" *.html; then
        echo "Unused selector: $selector"
    fi
done
```

#### Remove Specific Unused Classes
```bash
# Common unused classes to remove from CSS files:
# .service-card (if services removed)
# .service-grid
# .service-icon
# .pathway-btn (if contact pathways removed)
# Old button variants: .btn-link, .btn-ghost
# Unused responsive classes
```

### 2. Consolidate Duplicate Rules

#### Merge Similar Selectors
```bash
# In css/style.css, look for duplicate definitions of:
# - .btn classes (replace with unified system)
# - .container definitions
# - Color variable redefinitions
# - Typography rules

# Example cleanup:
sed -i '/\.btn {/,/}/d' css/style.css  # Remove old button rules
sed -i '/\.btn-primary {/,/}/d' css/style.css
sed -i '/\.btn-outline {/,/}/d' css/style.css
```

## 🗂️ FILE ORGANIZATION

### 1. Rename Files for Clarity
```bash
# Rename remaining files with descriptive names
mv css/unified-design.css css/legacy-unified-design.css  # Mark as legacy
mv css/components.css css/legacy-components.css          # Mark as legacy

# New file structure:
# css/
# ├── unified-cta-system.css      (NEW - primary buttons)
# ├── responsive-unified.css       (NEW - responsive system)  
# ├── style.css                   (KEEP - base styles)
# ├── design-system.css           (KEEP - design tokens)
# ├── footer-unified.css          (KEEP - footer styles)
# └── critical.css                (UPDATE - critical path)
```

### 2. Update CSS Imports

#### In HTML Files - Remove Old CSS Links
```html
<!-- REMOVE these lines from all HTML files: -->
<link rel="stylesheet" href="css/responsive.css">
<link rel="stylesheet" href="css/responsive-enhanced.css">
<link rel="stylesheet" href="css/components.css">
<link rel="stylesheet" href="css/unified-design.css">
<link rel="stylesheet" href="css/homepage-updates.css">
<link rel="stylesheet" href="css/surgical-updates.css">

<!-- KEEP only essential CSS: -->
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/design-system.css">
<link rel="stylesheet" href="css/footer-unified.css">
<!-- Plus new unified files -->
```

## 📊 BEFORE/AFTER VERIFICATION

### File Count Comparison
```bash
# Before cleanup
echo "Files before cleanup:"
find . -type f -name "*.css" | wc -l
find . -type f -name "*.js" | wc -l  
find . -type f -name "*.html" | wc -l
find . -type f -name "*.md" | wc -l
find . -type f -name "*.json" | wc -l

# After cleanup
echo "Files after cleanup:"
# Run same commands after cleanup
```

### Size Reduction
```bash
# Calculate total file size before/after
du -sh css/ js/ *.html *.md *.json 2>/dev/null | tail -1

# Target reduction: 
# - CSS: ~40% reduction (300KB → 180KB)
# - Files: ~60% reduction (80+ files → 30-35 files)
# - Documentation: ~90% reduction (keep only essential)
```

## ✅ CLEANUP VERIFICATION CHECKLIST

### Functional Testing
- [ ] All pages load without CSS errors
- [ ] No 404 errors for removed files
- [ ] Navigation menus work correctly  
- [ ] CTA buttons display consistently
- [ ] Responsive design functions on all target viewports
- [ ] No console errors in browser developer tools

### SEO Testing  
- [ ] No broken internal links
- [ ] Sitemap.xml is valid
- [ ] Robots.txt includes service page disallow
- [ ] No references to deleted files in sitemap

### Performance Testing
- [ ] Lighthouse score improvement
- [ ] Page load speed improvement
- [ ] CSS file size reduction verified
- [ ] No unused CSS warnings

### Code Quality
- [ ] No duplicate CSS rules
- [ ] Consistent naming conventions
- [ ] Clean file structure
- [ ] All development artifacts removed

## 🚀 POST-CLEANUP OPTIMIZATION

### 1. CSS Minification
```bash
# After cleanup, minify remaining CSS files for production
# Use online tools or build process to minify:
# - css/style.css
# - css/unified-cta-system.css  
# - css/responsive-unified.css
# - css/design-system.css
# - css/footer-unified.css
```

### 2. Final File Structure
```
framex-website/
├── index.html
├── about.html  
├── blog.html
├── contact.html
├── products.html
├── projects.html
├── investor-relations.html
├── services.html (redirect page)
├── 404.html
├── sitemap.xml
├── robots.txt
├── manifest.json
├── service-worker.js
├── assets/
│   ├── images/
│   └── icons/
├── css/
│   ├── critical.css
│   ├── style.css
│   ├── design-system.css
│   ├── unified-cta-system.css
│   ├── responsive-unified.css
│   └── footer-unified.css
└── js/
    ├── main.js
    ├── contact.js
    ├── products.js
    ├── projects.js
    └── blog.js
```

### 3. Archive Deleted Files
```bash
# Before final deletion, create archive of removed files
mkdir cleanup-archive-$(date +%Y%m%d)
mv backups/ cleanup-archive-$(date +%Y%m%d)/
cp *.md cleanup-archive-$(date +%Y%m%d)/ 2>/dev/null || true
cp *.json cleanup-archive-$(date +%Y%m%d)/ 2>/dev/null || true

# Compress archive
tar -czf cleanup-archive-$(date +%Y%m%d).tar.gz cleanup-archive-$(date +%Y%m%d)/
rm -rf cleanup-archive-$(date +%Y%m%d)/

echo "Cleanup complete! Archive saved as cleanup-archive-$(date +%Y%m%d).tar.gz"
```