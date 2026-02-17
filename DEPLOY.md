# Panduan Deployment GitHub Pages

## ✅ Status: Code sudah di-push ke GitHub
Repository: https://github.com/krsdntr/palemmerah

---

## 🚀 Langkah Setup GitHub Pages

### 1. **Buka GitHub Repository Settings**
   - Kunjungi: https://github.com/krsdntr/palemmerah/settings/pages

### 2. **Konfigurasi GitHub Pages**
   - **Build and deployment:**
     - Source: Pilih **"Deploy from a branch"**
   
   - **Branch:**
     - Branch: Pilih **"main"**
     - Folder: Pilih **"/ (root)"**
   
   - Klik **"Save"**

### 3. **Tunggu Deployment**
   - GitHub akan otomatis build dan deploy website Anda
   - Proses biasanya memakan waktu 1-3 menit
   - Refresh halaman untuk melihat status deployment

### 4. **Akses Website**
   Setelah deployment selesai, website Anda akan tersedia di:
   
   **🌐 https://krsdntr.github.io/palemmerah/**

---

## 📝 Update Website di Masa Depan

Jika Anda ingin update website, ikuti langkah berikut:

```bash
# 1. Masuk ke folder project
cd "d:\project Landing Page\Palem merah"

# 2. Tambahkan perubahan
git add .

# 3. Commit dengan pesan
git commit -m "Update: deskripsi perubahan"

# 4. Push ke GitHub
git push origin main
```

GitHub Pages akan otomatis deploy perubahan Anda dalam beberapa menit.

---

## 🔧 Troubleshooting

### Website tidak muncul setelah 5 menit?
1. Cek tab "Actions" di GitHub: https://github.com/krsdntr/palemmerah/actions
2. Pastikan tidak ada error di workflow deployment
3. Coba hard refresh browser (Ctrl + Shift + R)

### Ingin gunakan custom domain?
1. Beli domain (misal: palemmerah.com)
2. Tambahkan CNAME record di DNS provider
3. Setting custom domain di GitHub Pages settings

---

## 📱 Share Website

Setelah live, Anda bisa share URL berikut:
- **Landing Page:** https://krsdntr.github.io/palemmerah/
- **Menu Page:** https://krsdntr.github.io/palemmerah/menu.html

---

**Selamat! Website Palem Merah siap online! 🎉**
