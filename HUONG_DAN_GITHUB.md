# 📖 HƯỚNG DẪN UPLOAD WEBSITE LÊN GITHUB (CHO NGƯỜI MỚI)

## 📌 Phần 1: TẠO TÀI KHOẢN GITHUB (Nếu chưa có)

1. Vào trang https://github.com
2. Click nút **"Sign up"** (góc trên bên phải)
3. Điền thông tin:
   - Username (tên người dùng)
   - Email
   - Password (mật khẩu)
4. Xác nhận email của bạn

## 📌 Phần 2: TẠO REPOSITORY MỚI TRÊN GITHUB

1. **Đăng nhập GitHub**
2. Click dấu **"+"** góc trên bên phải → Chọn **"New repository"**
3. Điền thông tin:
   - **Repository name:** `framex-website`
   - **Description:** `Website for FrameX - Smart Prefabricated Steel Construction`
   - Chọn **Public** (công khai) 
   - ✅ Tick vào **"Add a README file"**
4. Click **"Create repository"**

## 📌 Phần 3: UPLOAD FILES LÊN GITHUB

### Cách 1: Upload trực tiếp trên GitHub (Đơn giản nhất) ⭐

1. **Vào repository vừa tạo:** `https://github.com/[username-của-bạn]/framex-website`

2. **Click nút "Add file"** → Chọn **"Upload files"**

3. **Kéo thả hoặc chọn files:**
   - Giải nén file `framex-website.zip` 
   - Chọn TẤT CẢ files và folders trong thư mục webapp
   - Kéo thả vào khung upload

4. **Viết commit message:**
   ```
   Add FrameX website with new product lines and optimized UI
   ```

5. **Click "Commit changes"** (nút xanh)

### Cách 2: Dùng GitHub Desktop (Có giao diện) 🖥️

1. **Tải GitHub Desktop:** https://desktop.github.com/
2. **Cài đặt và đăng nhập**
3. **Clone repository:**
   - Click "Clone a repository from the Internet"
   - Chọn `framex-website`
4. **Copy files vào:**
   - Mở thư mục repository trên máy
   - Copy tất cả files từ webapp vào
5. **Commit và Push:**
   - Mở GitHub Desktop
   - Viết message và click "Commit"
   - Click "Push origin"

## 📌 Phần 4: BẬT GITHUB PAGES (ĐỂ XEM WEBSITE)

1. **Vào repository** trên GitHub
2. Click **"Settings"** (bánh răng)
3. Scroll xuống tìm **"Pages"** (menu bên trái)
4. Tại **"Source"**, chọn:
   - **Deploy from a branch**
   - **Branch:** main
   - **Folder:** / (root)
5. Click **"Save"**
6. Đợi 2-5 phút, website sẽ có tại:
   ```
   https://[username-của-bạn].github.io/framex-website/
   ```

## 📌 Phần 5: CHỈNH SỬA WEBSITE

### Cách edit trực tiếp trên GitHub:

1. **Vào repository** trên GitHub
2. **Click vào file muốn sửa** (ví dụ: `index.html`)
3. Click **icon bút chì** (Edit this file)
4. **Sửa nội dung**
5. Scroll xuống, viết message và click **"Commit changes"**

### Cách edit offline rồi upload:

1. **Download repository:**
   - Click nút **"Code"** (xanh)
   - Chọn **"Download ZIP"**
2. **Giải nén và sửa files**
3. **Upload lại theo Phần 3**

## 📝 CÁC FILE QUAN TRỌNG CẦN BIẾT

### 1. **index.html** - Trang chủ
- Chứa hero section
- Product Range (3 sản phẩm)
- Why FrameX section

### 2. **products.html** - Trang sản phẩm
- Chi tiết 3 dòng sản phẩm
- Bảng so sánh
- Quy trình làm việc

### 3. **css/style.css** - Thiết kế chính
- Màu sắc, font chữ
- Layout chung

### 4. **js/main.js** - JavaScript chính
- Chuyển đổi ngôn ngữ VN/EN
- Các chức năng chung

## 🎨 THAY ĐỔI NỘI DUNG CƠ BẢN

### Đổi text/chữ:
1. Mở file HTML tương ứng
2. Tìm đoạn text cần đổi
3. Thay thế và save

### Đổi màu sắc:
1. Mở `css/style.css`
2. Tìm phần `:root`
3. Thay đổi màu:
   ```css
   --orange: #ff6b35;  /* Màu cam chính */
   --black: #000000;   /* Màu đen */
   --white: #ffffff;   /* Màu trắng */
   ```

### Đổi thông tin liên hệ:
1. Mở file HTML
2. Tìm footer (cuối trang)
3. Sửa email, phone, địa chỉ

## ⚠️ LƯU Ý QUAN TRỌNG

1. **Backup trước khi sửa:** Download một bản copy về máy
2. **Test trên local:** Mở file HTML trực tiếp để xem trước
3. **Commit thường xuyên:** Lưu lại mỗi thay đổi quan trọng
4. **Kiểm tra responsive:** Xem trên mobile/tablet
5. **Browser cache:** Nhấn Ctrl+F5 để refresh cache

## 🆘 KHI GẶP LỖI

### Website không hiển thị:
- Kiểm tra GitHub Pages đã bật chưa
- Đợi 5-10 phút sau khi push
- Check tên file `index.html` (chữ thường)

### Layout bị vỡ:
- Kiểm tra đường dẫn CSS: `css/style.css`
- Đảm bảo không xóa nhầm thẻ HTML

### JavaScript không chạy:
- Kiểm tra Console (F12)
- Check đường dẫn: `js/main.js`

## 📞 THÔNG TIN HỖ TRỢ

- **GitHub Docs:** https://docs.github.com
- **YouTube tutorials:** Search "GitHub Pages tutorial"
- **W3Schools:** https://www.w3schools.com (học HTML/CSS)

---

## ✅ CHECKLIST UPLOAD

- [ ] Tạo tài khoản GitHub
- [ ] Tạo repository mới tên `framex-website`
- [ ] Upload tất cả files từ thư mục webapp
- [ ] Commit với message rõ ràng
- [ ] Bật GitHub Pages
- [ ] Test website online
- [ ] Chia sẻ link với team

---

**Chúc bạn thành công! 🚀**

*Nếu cần hỗ trợ, hãy tạo Issue trong repository hoặc hỏi cộng đồng GitHub.*