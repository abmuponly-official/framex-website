# 📋 HƯỚNG DẪN TẠO PULL REQUEST TRÊN GITHUB

## ✅ Branch đã được push thành công!

Branch `update-framex-content` đã sẵn sàng trên GitHub. Bây giờ bạn cần tạo Pull Request.

## 🚀 CÁCH TẠO PULL REQUEST (Rất đơn giản!)

### Bước 1: Truy cập link này
👉 **[Click vào đây để tạo Pull Request](https://github.com/abmuponly-official/framex-website/pull/new/update-framex-content)**

### Bước 2: Điền thông tin Pull Request

**Title (Tiêu đề):**
```
feat: Complete FrameX website update with new product lines and optimized UI
```

**Description (Mô tả):**
```markdown
## 📋 Tổng quan cập nhật

Cập nhật toàn diện website FrameX với 3 dòng sản phẩm mới và giao diện được tối ưu.

## ✨ Thay đổi chính

### 🎯 Sản phẩm mới
- **FrameX STARTER** - Khởi Đầu Thông Minh (Nhà phố nhỏ <150m²)
- **FrameX SMART** - Sống Thông Minh Bền Vững (Villa nhỏ <225m²)  
- **FrameX PREMIUM** - Kiến Trúc Đẳng Cấp (Biệt thự lớn >300m²)

### 🎨 Cải tiến giao diện
- Trang chủ: Grid layout 3 cột cho Product Range
- Why FrameX section với 3 khối chính (Modular Design, Smart Integration, Turnkey Services)
- Trang Products: Thêm quy trình làm việc 4 bước
- Responsive hoàn hảo cho mọi thiết bị

### 🌐 Tính năng
- Hỗ trợ song ngữ Anh/Việt đầy đủ
- Typography và spacing được tối ưu
- SEO optimized
- Performance improvements

## 📝 Files thay đổi
- `index.html` - Cập nhật trang chủ
- `products.html` - Cập nhật trang sản phẩm
- `css/style.css` - Tối ưu styles
- `css/products.css` - Thêm process timeline
- `js/main.js` - Cập nhật translations
- `js/products.js` - Thêm translations sản phẩm

## ✅ Checklist
- [x] Code đã test trên local
- [x] Responsive design hoạt động tốt
- [x] Không có console errors
- [x] Bilingual support hoạt động
- [x] Documentation đầy đủ

## 📸 Preview
Website demo: https://8080-irkays1qhg265z3ynd50m-6532622b.e2b.dev
```

### Bước 3: Click "Create pull request"

Nhấn nút xanh **"Create pull request"** để tạo PR.

## 🔀 SAU KHI TẠO PULL REQUEST

### Merge Pull Request (Hợp nhất code)

1. Sau khi tạo PR, bạn sẽ thấy nút **"Merge pull request"** (màu xanh)
2. Click vào nút đó
3. Click **"Confirm merge"**
4. Done! Code đã được cập nhật vào main branch

### Xóa branch cũ (Tùy chọn)

Sau khi merge, GitHub sẽ hỏi bạn có muốn xóa branch `update-framex-content` không.
- Click **"Delete branch"** để xóa

## 📌 LỆNH GIT CHO LẦN SAU (Nếu cần)

Nếu bạn muốn pull code mới nhất về máy local:

```bash
# 1. Chuyển về main branch
git checkout main

# 2. Pull code mới nhất
git pull origin main

# 3. Tạo branch mới cho edit tiếp theo
git checkout -b feature/new-update

# 4. Edit files...

# 5. Add và commit
git add .
git commit -m "Your message"

# 6. Push lên GitHub
git push origin feature/new-update

# 7. Tạo Pull Request trên GitHub
```

## ⚡ CÁCH NHANH NHẤT

1. **Click link:** https://github.com/abmuponly-official/framex-website/pull/new/update-framex-content
2. **Copy paste** title và description ở trên
3. **Click** "Create pull request"
4. **Click** "Merge pull request"
5. **Done!** ✅

---

## 🆘 NẾU GẶP VẤN ĐỀ

### "This branch has conflicts"
- Click "Resolve conflicts"
- Sửa conflicts trong editor
- Click "Mark as resolved"
- Click "Commit merge"

### "Checks have failed"
- Kiểm tra tab "Checks" xem lỗi gì
- Thường là do syntax error trong code
- Sửa và push lại

### Không thấy nút "Merge"
- Kiểm tra bạn đã đăng nhập đúng tài khoản
- Kiểm tra bạn có quyền write trong repository

---

**Chúc mừng! Website FrameX của bạn sắp được cập nhật! 🎉**