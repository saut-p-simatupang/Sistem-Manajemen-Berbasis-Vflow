# Panduan Setup dan Menjalankan Backend Gateway (Node.js)

Repositori ini berisi **Backend Gateway** berbasis Node.js/Express yang bertindak sebagai gerbang API (API Gateway) ke server **VFlow Engine**. Gateway ini menyaring request dengan autentikasi API Key, validasi skema Joi, dan limitasi rate request, kemudian meneruskannya ke Workflow VFlow yang sesuai.

---

## 🛠️ Prasyarat (Prerequisites)

Pastikan sistem Anda sudah terinstal:
- **Node.js** (Versi 18 ke atas direkomendasikan, cek dengan `node -v`)
- **npm** (Bawaan Node.js, cek dengan `npm -v`)

---

## 🚀 Langkah Setup Awal (Installation)

### 1. Salin Berkas Environment Config (`.env`)
Salin template berkas `.env.example` menjadi `.env` di root direktori proyek Anda:

* **Di Windows PowerShell:**
  ```powershell
  Copy-Item .env.example .env
  ```
* **Di Windows CMD / Linux / macOS:**
  ```bash
  cp .env.example .env
  ```

### 2. Konfigurasi Variabel Environment (`.env`)
Buka berkas `.env` yang baru dibuat, lalu isi variabel berikut sesuai kebutuhan Anda:

```env
PORT=3000
VFLOW_HOST=http://3.84.212.7:7799
API_KEY=Kelompok3_SecureApiKey2026
```

> [!NOTE]
> - `PORT`: Port lokal tempat server Express Anda berjalan (default `3000`).
> - `VFLOW_HOST`: URL Server VFlow Engine Anda. (Contoh untuk Kelompok 3: `http://3.84.212.7:7799`).
> - `API_KEY`: Kunci rahasia yang wajib dikirimkan oleh klien pada request header `X-API-Key` agar lolos autentikasi gateway.

### 3. Instal Dependensi Node.js
Jalankan perintah berikut untuk menginstal semua package/library yang dibutuhkan:

```bash
npm install
```

---

## ⚙️ Cara Menjalankan Server (Running the App)

### Menjalankan Server secara Lokal
Untuk memulai server backend Express, jalankan perintah berikut:

```bash
npm start
```

Jika berhasil, Anda akan melihat log seperti berikut di terminal:
```text
=== DEBUG PESANAN ===
auth: function
validate: function
=====================
=== DEBUG SERVER ===
rateLimitMiddleware: function
errorHandler: function
healthRoute: function
pesananRoute: function
====================
Backend Kelompok 3 berjalan di Port 3000
```

---

## 🧪 Verifikasi & Uji Coba API (Testing)

### 1. Cek Health Route (Tanpa Autentikasi)
Anda dapat memanggil endpoint `/health` untuk memverifikasi koneksi Gateway ke server VFlow:

```bash
curl -i http://localhost:3000/health
```

**Respon Sukses:**
```json
{
  "status": "OK",
  "vflow_connection": "connected"
}
```

### 2. Memanggil Endpoint API Pesanan (Dengan Autentikasi `X-API-Key`)
Semua rute di bawah `/api/pesanan/*` diproteksi oleh middleware `auth` dan skema validasi data.

Contoh pemanggilan API **Buka Keranjang**:
```bash
curl -i -X POST http://localhost:3000/api/pesanan/buka-keranjang \
  -H "Content-Type: application/json" \
  -H "X-API-Key: Kelompok3_SecureApiKey2026" \
  -d '{"pelanggan_id": 123}'
```

*(Catatan: Pastikan isi body JSON sesuai dengan kriteria schema Joi di `src/middleware/validate.js`)*.
