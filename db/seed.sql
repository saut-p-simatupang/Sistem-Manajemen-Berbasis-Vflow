<<<<<<< HEAD
-- 1. Insert Data Pelanggan
-- Menyediakan 1 akun reguler dan 1 akun member untuk testing Rule Pack (Diskon)
INSERT INTO pelanggan (nama, tipe_pelanggan, no_whatsapp, alamat) VALUES
('Budi Santoso', 'reguler', '081234567890', 'Jl. Merpati No. 12, Desa Karya Mulya'),
('Siti Aminah', 'member', '089876543210', 'Jl. Anggrek No. 45, Desa Karya Mulya');

-- 2. Insert Data Produk
-- Menyediakan 3 sampel produk UMKM dengan stok dan harga
INSERT INTO produk (nama_produk, harga, stok, deskripsi) VALUES
('Keripik Pisang Kepok Manis', 15000.00, 50, 'Keripik pisang asli produksi Ibu Sari'),
('Kopi Bubuk Robusta Lokal', 35000.00, 30, 'Kopi sangrai 200gr dari kebun warga Karya Mulya'),
('Tas Anyaman Bambu Eksklusif', 75000.00, 15, 'Tas handmade pengrajin lokal, cocok untuk suvenir');

-- Catatan: Tabel pesanan, detail_pesanan, dan audit_log dibiarkan kosong 
=======
-- 1. Insert Data Pelanggan
-- Menyediakan 1 akun reguler dan 1 akun member untuk testing Rule Pack (Diskon)
INSERT INTO pelanggan (nama, tipe_pelanggan, no_whatsapp, alamat) VALUES
('Budi Santoso', 'reguler', '081234567890', 'Jl. Merpati No. 12, Desa Karya Mulya'),
('Siti Aminah', 'member', '089876543210', 'Jl. Anggrek No. 45, Desa Karya Mulya');

-- 2. Insert Data Produk
-- Menyediakan 3 sampel produk UMKM dengan stok dan harga
INSERT INTO produk (nama_produk, harga, stok, deskripsi) VALUES
('Keripik Pisang Kepok Manis', 15000.00, 50, 'Keripik pisang asli produksi Ibu Sari'),
('Kopi Bubuk Robusta Lokal', 35000.00, 30, 'Kopi sangrai 200gr dari kebun warga Karya Mulya'),
('Tas Anyaman Bambu Eksklusif', 75000.00, 15, 'Tas handmade pengrajin lokal, cocok untuk suvenir');

-- Catatan: Tabel pesanan, detail_pesanan, dan audit_log dibiarkan kosong 
>>>>>>> 32db6d164bb00fd3bf79f89469cd533a9191b245
-- karena tabel tersebut baru akan terisi otomatis saat Workflow VFlow berjalan.