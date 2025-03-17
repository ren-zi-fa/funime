# FunimeDesu

FunimeDesu adalah platform untuk streaming dan mengunduh anime dengan berbagai fitur unggulan, seperti download batch, download single episode, dan streaming anime tanpa iklan. Data diambil dari **Otakudesu**, sehingga pengguna dapat menikmati anime favorit mereka dengan lebih mudah dan nyaman.

## ✨ Fitur Utama
- **Streaming Anime**: Tonton anime langsung tanpa perlu mengunduh.
- **Download Single Episode**: Unduh episode tertentu dari anime pilihanmu.
- **Download Batch**: Unduh semua episode dalam satu paket untuk kemudahan.
- **Tanpa Iklan**: Nikmati pengalaman tanpa gangguan iklan yang mengganggu.

## 📦 Teknologi & Dependensi
Proyek ini menggunakan berbagai library dan framework untuk meningkatkan performa serta pengalaman pengguna:

### 🔹 **Frontend & UI**
- `next` (15.2.2) - Framework React untuk SSR dan SSG
- `react` (19.0.0) - Library UI utama

### 🔹 **State Management**
- `zustand` (5.0.3) - State management ringan dan mudah digunakan

### 🔹 **API & Data Fetching**
- `axios` (1.8.3) - HTTP client untuk melakukan request ke API
- `cheerio` (1.0.0) - Web scraping dari Otakudesu
- `hono` (4.7.4) - Framework backend ringan berbasis Edge Runtime

### 🔹 **Validasi & Utility**
- `zod` (3.24.2) - Validasi data yang kuat

## 🚀 Cara Menjalankan Proyek
1. **Clone repositori ini**
   ```sh
   git clone https://github.com/username/funimedesu.git
   cd funimedesu
   ```

2. **Install dependensi**
   ```sh
   bun install  # atau npm install / yarn install
   ```

3. **Jalankan server lokal**
   ```sh
   bun run dev  # atau npm run dev / yarn dev
   ```

4. **Akses aplikasi**
   Buka `http://localhost:3000` di browser.

## 📜 Lisensi
FunimeDesu dikembangkan untuk keperluan edukasi dan tidak memiliki afiliasi resmi dengan Otakudesu.

---
Dikembangkan dengan ❤️ oleh **Renzi Febriandika**

