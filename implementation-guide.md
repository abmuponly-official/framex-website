
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
1. Restore from backup: backups/surgical-update-2025-09-28T17-48-23-777Z
2. Remove CSS link from <head>
3. Delete homepage-surgical-updates.css
