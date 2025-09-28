# 🚀 FrameX Website Development Guide

## 📋 Môi Trường Development Đã Chuẩn Bị

### ✅ **Trạng Thái Hiện Tại**
- **Repository**: https://github.com/abmuponly-official/framex-website
- **Branch**: `genspark_ai_developer` (đã sync với GitHub)
- **Local Server**: Đang chạy tại port 8000
- **Public URL**: https://8000-icv50hyt99mmo4xthm4cr-6532622b.e2b.dev

### 📁 **Cấu Trúc Project**
```
framex-website/
├── 📄 HTML Files (9 pages)
│   ├── index.html           # Trang chủ
│   ├── products.html        # Sản phẩm
│   ├── services.html        # Dịch vụ
│   ├── projects.html        # Dự án
│   ├── blog.html           # Blog
│   ├── contact.html        # Liên hệ
│   ├── about.html          # Giới thiệu
│   ├── investor-relations.html # Quan hệ đầu tư
│   └── 404.html            # Trang lỗi
├── 📂 css/                 # Stylesheets
│   ├── style.css           # Main styles
│   ├── *.min.css          # Minified versions
│   └── critical.css        # Critical CSS
├── 📂 js/                  # JavaScript
│   ├── main.js            # Core functionality
│   ├── performance-*.js   # Performance modules
│   └── *.min.js           # Minified versions
├── 📂 assets/             # Images & media
├── 🔧 Tools & Config
│   ├── service-worker.js  # PWA service worker
│   ├── manifest.json      # PWA manifest
│   ├── sitemap.xml        # SEO sitemap
│   ├── build-optimize.js  # Build script
│   └── dev-tools.sh       # Development utilities
└── 📝 Documentation
    ├── README.md
    ├── DEVELOPMENT.md      # This file
    └── OPTIMIZATION_GUIDE.md
```

## 🛠️ **Quick Start Commands**

### 1. **Development Server**
```bash
# Đã chạy sẵn trên port 8000
# Access: https://8000-icv50hyt99mmo4xthm4cr-6532622b.e2b.dev

# Hoặc restart nếu cần:
cd /home/user/webapp/framex-website
python3 -m http.server 8000
```

### 2. **Build & Optimize**
```bash
# Minify CSS/JS và tối ưu
node build-optimize.js

# Hoặc dùng tool script:
./dev-tools.sh
# Chọn option 1
```

### 3. **Git Workflow**
```bash
# Check status
git status

# Add và commit changes
git add .
git commit -m "feat: your feature description"

# Push to GitHub
git push origin genspark_ai_developer
```

### 4. **Test Performance**
```bash
# Trong browser, mở DevTools (F12)
# Tab Lighthouse → Generate report
# Hoặc trong Console:
PerformanceMonitor.displayMetrics()
```

## 🎨 **Making Changes**

### **Sửa Content (HTML)**
1. Edit file HTML trực tiếp
2. Các text đa ngôn ngữ nằm trong `js/main.js` (translations object)
3. Test trên browser ngay lập tức

### **Sửa Styles (CSS)**
1. Edit file CSS trong folder `css/`
2. Sau khi sửa xong, run `node build-optimize.js` để tạo minified version
3. Clear browser cache để thấy thay đổi

### **Sửa JavaScript**
1. Edit file JS trong folder `js/`
2. Run `node build-optimize.js` để minify
3. Test functionality trong browser Console

### **Thêm Images**
1. Copy images vào `assets/img/`
2. Optimize images (compress, convert to WebP)
3. Update HTML với lazy loading:
```html
<img data-src="/assets/img/your-image.jpg" 
     src="/assets/img/placeholder.jpg"
     loading="lazy" 
     alt="Description">
```

## 📱 **Responsive Testing**

### **Device Sizes**
- Mobile: 320px - 768px
- Tablet: 768px - 1024px  
- Desktop: 1024px+

### **Test trong Browser**
1. Mở DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test các breakpoints

## 🚀 **Performance Optimizations**

### **Đã Tích Hợp**
- ✅ Service Worker (offline support)
- ✅ Lazy loading images
- ✅ Font optimization
- ✅ CSS/JS minification
- ✅ Critical CSS inline
- ✅ Core Web Vitals monitoring
- ✅ PWA support

### **Monitoring Tools**
```javascript
// Trong browser Console:

// Xem performance metrics
PerformanceMonitor.displayMetrics()

// Xem Core Web Vitals
CoreWebVitals.metrics

// Xem cached resources
caches.keys().then(names => console.log(names))
```

## 🔄 **Development Workflow**

### **Daily Workflow**
1. **Sync với GitHub**: `git pull origin genspark_ai_developer`
2. **Thực hiện thay đổi**: Edit files
3. **Test locally**: Refresh browser
4. **Optimize**: `node build-optimize.js`
5. **Commit**: `git add . && git commit -m "message"`
6. **Push**: `git push origin genspark_ai_developer`

### **Before Production**
1. Run full optimization: `node build-optimize.js`
2. Test all pages
3. Check Lighthouse score
4. Verify mobile responsiveness
5. Test offline functionality
6. Create PR to main branch

## 🐛 **Debugging Tips**

### **Common Issues**

**1. Changes not showing:**
- Clear browser cache (Ctrl+Shift+R)
- Check if using minified files
- Verify correct file path

**2. JavaScript errors:**
- Check browser Console
- Look for syntax errors
- Verify dependencies loaded

**3. Performance issues:**
- Run Lighthouse audit
- Check Network tab for large files
- Verify lazy loading working

**4. Service Worker issues:**
- Unregister old SW in DevTools
- Clear storage in Application tab
- Check HTTPS requirement

## 📊 **Performance Targets**

| Metric | Target | Current |
|--------|--------|---------|
| Lighthouse Score | 95+ | ✅ Optimized |
| Page Load | < 2s | ✅ Achieved |
| First Paint | < 1.8s | ✅ Good |
| LCP | < 2.5s | ✅ Good |
| CLS | < 0.1 | ✅ Good |

## 🔗 **Useful Links**

- **Live Site**: https://8000-icv50hyt99mmo4xthm4cr-6532622b.e2b.dev
- **GitHub Repo**: https://github.com/abmuponly-official/framex-website
- **Lighthouse**: Chrome DevTools → Lighthouse tab
- **Can I Use**: https://caniuse.com (check browser support)
- **WebPageTest**: https://www.webpagetest.org

## 💡 **Pro Tips**

1. **Always test on actual mobile devices** ngoài emulator
2. **Use Chrome DevTools Network throttling** để test slow connections
3. **Monitor real user metrics** sau khi deploy
4. **Keep images under 200KB** whenever possible
5. **Test with ad blockers** - một số users có thể block scripts

## 📝 **Checklist Trước Khi Deploy**

- [ ] All pages tested và working
- [ ] Mobile responsive verified
- [ ] Images optimized
- [ ] CSS/JS minified  
- [ ] Service Worker tested
- [ ] Forms working
- [ ] SEO meta tags updated
- [ ] Sitemap generated
- [ ] Performance audit passed
- [ ] Cross-browser tested

## 🆘 **Need Help?**

1. Check `OPTIMIZATION_GUIDE.md` cho performance tips
2. Review `README.md` cho project overview
3. Test với `./dev-tools.sh` utility script
4. Monitor logs trong browser Console

---

**Happy Coding!** 🚀 Môi trường development đã sẵn sàng cho bạn!