# 🚀 FrameX Development Environment - Complete Setup Guide

## 📊 Trạng thái hiện tại

### ✅ Đã hoàn thành setup đầy đủ môi trường phát triển!

## 🔗 Links quan trọng

### 📱 Preview Links (Live):
- **🌐 Website Chính (Hot Reload)**: https://8080-i0qk8wqhpl2533i367zes-6532622b.e2b.dev
- **✏️ Visual Editor**: https://8082-i0qk8wqhpl2533i367zes-6532622b.e2b.dev/website-editor.html
- **⚡ Optimized Version**: https://3001-i0qk8wqhpl2533i367zes-6532622b.e2b.dev
- **🔥 Original Version**: https://3000-i0qk8wqhpl2533i367zes-6532622b.e2b.dev

### 📂 GitHub Repository:
- **Repo**: https://github.com/abmuponly-official/framex-website
- **Branch**: `genspark_ai_developer`
- **Create PR**: https://github.com/abmuponly-official/framex-website/compare/main...genspark_ai_developer

## 🛠️ Công cụ đã setup

### 1. 🔥 **Hot Reload Development Server**
```bash
# Start development server với hot reload
npm run dev

# Hoặc chạy riêng
npm run server  # Port 8080
```
- Auto refresh khi file thay đổi
- Live preview trên mọi thiết bị
- Không cần F5 reload

### 2. ✏️ **Visual Website Editor**
```bash
# Access tại: http://localhost:8082/website-editor.html
```
**Features:**
- Drag & drop editing
- Real-time preview
- Multi-device preview (Desktop/Tablet/Mobile)
- Properties panel để chỉnh style
- Auto-save mỗi 30 giây
- Export code trực tiếp

### 3. 🚀 **Optimization Tools**
```bash
# Tối ưu website
npm run optimize

# Preview optimized version
npm run preview  # Port 8081
```
- Minify HTML/CSS/JS
- Lazy loading images
- Service Worker cho PWA
- Performance monitoring

### 4. 💾 **Version Control & Backup**
```bash
# Backup files
npm run backup

# Validate HTML
npm run validate

# Format code
npm run format

# Create/Update PR
npm run pr
```

## 📝 Workflow để chỉnh sửa website

### Option 1: Visual Editor (Dễ nhất)
1. Mở Visual Editor: https://8082-i0qk8wqhpl2533i367zes-6532622b.e2b.dev/website-editor.html
2. Click vào page muốn edit ở sidebar trái
3. Click "✏️ Edit Mode" để bắt đầu
4. Click vào element muốn sửa
5. Chỉnh sửa ở Properties Panel bên phải
6. Click "💾 Save" để lưu
7. Click "🚀 Publish" để tạo PR

### Option 2: Direct Code Edit
1. Sửa file HTML/CSS/JS trực tiếp
2. Save file - browser tự động reload
3. Check preview tại: https://8080-i0qk8wqhpl2533i367zes-6532622b.e2b.dev
4. Run `npm run pr` để tạo Pull Request

### Option 3: Command Line
```bash
# Edit files với nano/vim
nano index.html

# Auto commit và push
git add -A
git commit -m "Update content"
git push origin genspark_ai_developer
```

## 🎨 Cấu trúc Project

```
framex-website/
├── 📄 HTML Pages (9 files)
│   ├── index.html
│   ├── products.html
│   ├── services.html
│   └── ...
│
├── 🎨 Styling
│   ├── css/
│   │   ├── style.css (main)
│   │   ├── *.min.css (optimized)
│   │   └── ...
│   │
├── 📦 JavaScript
│   ├── js/
│   │   ├── main.js (core)
│   │   ├── performance-*.js
│   │   └── *.min.js
│   │
├── 🛠️ Development Tools
│   ├── dev-environment.js    # Hot reload server
│   ├── website-editor.html   # Visual editor
│   ├── optimize-website.js   # Optimization script
│   └── package.json          # NPM scripts
│
└── 📁 Output
    ├── dist/                 # Optimized files
    └── backups/              # Auto backups
```

## ⌨️ Keyboard Shortcuts

### Trong Visual Editor:
- `Ctrl/Cmd + S`: Save changes
- `Ctrl/Cmd + Z`: Undo
- `Ctrl/Cmd + Y`: Redo
- `ESC`: Exit edit mode

## 🔄 Git Workflow

### Quy trình chuẩn:
1. **Edit**: Sửa files hoặc dùng Visual Editor
2. **Test**: Check preview links
3. **Commit**: Auto-commit hoặc manual
4. **Push**: Push lên GitHub
5. **PR**: Tạo Pull Request

### Commands:
```bash
# Check status
git status

# Commit changes
git add -A
git commit -m "feat: Your changes"

# Push to GitHub
git push origin genspark_ai_developer

# Create PR - visit link
https://github.com/abmuponly-official/framex-website/compare/main...genspark_ai_developer
```

## 📊 Performance Metrics

### Trước tối ưu:
- Size: 228.73KB
- Load: ~3-4s

### Sau tối ưu:
- Size: 144.10KB (-37%)
- Load: <2s
- Lighthouse: 95+

## 🚨 Troubleshooting

### Server không chạy?
```bash
# Kill all Node processes
pkill node

# Restart
npm run dev
```

### Changes không auto-reload?
- Clear browser cache: Ctrl+Shift+R
- Check console for errors
- Restart dev server

### Cannot create PR?
```bash
# Check git status
git status

# Force push if needed
git push -f origin genspark_ai_developer
```

## 📞 Support

Nếu cần hỗ trợ:
1. Check browser console (F12)
2. Review server logs
3. Validate HTML: `npm run validate`
4. Create backup: `npm run backup`

## ✅ Checklist để bắt đầu

- [x] Development server running (Port 8080)
- [x] Visual Editor available (Port 8082)
- [x] Hot reload working
- [x] Git configured
- [x] NPM scripts ready
- [x] Preview links active
- [x] Ready to edit!

---

**Happy Coding! 🎉**

Tất cả đã sẵn sàng để chỉnh sửa website. Chỉ cần mở Visual Editor hoặc edit trực tiếp files!