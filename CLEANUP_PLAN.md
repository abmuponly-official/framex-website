# Code Cleanup Plan V2 - Safe & Systematic
Date: 2024-10-08

## Current State Analysis
- **35 HTML files** (includes -old, .optimized, templates, tests)  
- **27 CSS files** (multiple versions for same features)
- **Live site works:** https://8000-i0qk8wqhpl2533i367zes-6532622b.e2b.dev/

## Files to Remove

### HTML Files to Delete:
1. **Old backups** (*-old.html)
   - index-old.html
   - about-old.html
   - blog-old.html
   - contact-old.html
   - products-old.html
   - projects-old.html
   
2. **Optimized versions** (*.optimized.html)
   - All .optimized.html files
   
3. **Test/Template files**
   - comparison-table-en.html
   - comparison-table-vi.html
   - footer-template.html
   
4. **Unused pages**
   - services.html (if exists)

### CSS Files to Check:
- Duplicate comparison-table CSS
- Multiple footer CSS versions
- Unused surgical/update CSS

## Safety Process
1. Create file list before deletion
2. Test after each deletion batch
3. Commit frequently
4. Keep backup branch