# 🧹 Code Cleanup Master Plan - FrameX Website
Date: 2024-10-08
Mentor: Code Cleanup Expert

## 📊 Current Situation Analysis

### File Count (Before Cleanup)
- **HTML files:** 35 (TOO MANY!)
- **CSS files:** 27 (needs review)
- **JS files:** 15 (needs review)

### 🚨 Major Issues Found
1. **Duplicate HTML Files:**
   - 10 `*-old.html` files (old backups)
   - 10 `*.optimized.html` files (build outputs)
   - Template files (footer-template.html, optimized-template.html)
   
2. **Why These Can Be Removed:**
   - `-old.html` = Old backups, not needed in source control
   - `.optimized.html` = Build outputs, should be generated not stored
   - `template.html` = Templates for copying, not actual pages

## 🎯 Cleanup Strategy (Safe & Systematic)

### Phase 1: Remove Obvious Duplicates ✅
**Safe to remove because:**
- Old files are backups (Git already tracks history)
- Optimized files are outputs (can be regenerated)
- Templates are for development only

**Files to remove:**
- All `*-old.html` (10 files)
- All `*.optimized.html` (10 files)
- Template files (2 files)

### Phase 2: Analyze CSS Usage 🎨
**Check which CSS files are actually used:**
- Compare with framex.vn live site
- Remove unused CSS files
- Consolidate duplicate styles

### Phase 3: Clean JavaScript 📜
**Review JS files for:**
- Unused scripts
- Duplicate functionality
- Test/development files

### Phase 4: Verify Against Live Site 🔍
**Ensure zero visual changes:**
- Test each page after cleanup
- Compare with framex.vn
- No functionality lost

## 📚 Learning Notes for Beginners

### Why Remove These Files?

1. **Old Backup Files (`*-old.html`)**
   - Git already tracks all history
   - Having backups in the repo creates confusion
   - Makes it hard to know which file to edit

2. **Optimized Files (`*.optimized.html`)**
   - These are BUILD OUTPUTS not source files
   - Like keeping .exe files in source code
   - Should be generated during deployment

3. **Template Files**
   - Used during development for copying
   - Not actual pages users visit
   - Clutters the codebase

## 🛡️ Safety Measures
1. Created backup branch before starting
2. Test after each removal
3. Can rollback anytime if issues
4. Small commits for easy reversal