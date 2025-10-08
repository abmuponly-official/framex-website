# 🎨 CSS Cleanup Plan - Phase 2

## Current Situation
- **Total CSS files:** 28
- **Duplicate comparison-table CSS:** 5 files (only 1 used!)
- **Footer CSS:** 3 files (all used)

## 🗑️ Files to Remove

### Unused Comparison Table CSS (4 files)
These can be safely removed because only `comparison-table-redesign.css` is used:
- `comparison-table-clean.css` ❌ Not used
- `comparison-table-i18n.css` ❌ Not used  
- `comparison-table-light-theme.css` ❌ Not used
- `comparison-table-white-bg.css` ❌ Not used

### Why Safe to Remove?
- Only ONE is referenced in HTML files
- All created on same date (testing different designs)
- The "redesign" version was the final choice
- Keeping unused CSS causes confusion

## ✅ Files to Keep

### Keep These (Currently Used)
- `comparison-table-redesign.css` ✅ (actively used)
- All 3 footer CSS files ✅ (all used in HTML)

## 🔄 Potential Optimization

### Footer CSS Consolidation
Currently using 3 footer CSS files:
1. `footer-v2.css` - Main footer styles
2. `footer-fixes.css` - Bug fixes
3. `footer-white-override.css` - Color override

**Could merge into one:** `footer-unified.css`
- Reduces HTTP requests
- Easier maintenance
- But need careful testing

## 📚 Learning Notes

### CSS Organization Best Practices
1. **One CSS per component** - Not 5 versions!
2. **Name clearly** - "redesign" vs "clean" vs "light" is confusing
3. **Delete old versions** - Don't accumulate test files
4. **Use version control** - Git tracks old versions, no need to keep them