<<<<<<< HEAD
-- Menghapus tabel jika sudah ada (berguna jika kamu perlu me-reset database)
DROP TABLE IF EXISTS detail_pesanan CASCADE;
DROP TABLE IF EXISTS pesanan CASCADE;
DROP TABLE IF EXISTS produk CASCADE;
DROP TABLE IF EXISTS pelanggan CASCADE;
DROP TABLE IF EXISTS audit_log CASCADE;

-- 1. Tabel Pelanggan
-- Menyimpan data pelanggan UMKM beserta tipenya (penting untuk rule diskon member nanti)
CREATE TABLE pelanggan (
    id SERIAL PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    tipe_pelanggan VARCHAR(20) NOT NULL DEFAULT 'reguler', -- 'reguler' atau 'member'
    no_whatsapp VARCHAR(20),
    alamat TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Tabel Produk
-- Menyimpan katalog barang jualan UMKM beserta stoknya
CREATE TABLE produk (
    id SERIAL PRIMARY KEY,
    nama_produk VARCHAR(100) NOT NULL,
    harga DECIMAL(12,2) NOT NULL,
    stok INT NOT NULL DEFAULT 0,
    deskripsi TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Tabel Pesanan
-- Menyimpan header pesanan (transaksi)
CREATE TABLE pesanan (
    id SERIAL PRIMARY KEY,
    id_pelanggan INT REFERENCES pelanggan(id) ON DELETE CASCADE,
    tanggal_pesanan TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    subtotal DECIMAL(12,2) DEFAULT 0,
    total_harga DECIMAL(12,2) DEFAULT 0,
    status VARCHAR(50) NOT NULL DEFAULT 'pending', -- 'pending', 'dibayar', 'selesai', 'batal'
    metode_pembayaran VARCHAR(50),
    metode_pengambilan VARCHAR(50),
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Tabel Detail Pesanan
-- Menyimpan item-item produk di dalam satu pesanan (keranjang)
CREATE TABLE detail_pesanan (
    id SERIAL PRIMARY KEY,
    id_pesanan INT REFERENCES pesanan(id) ON DELETE CASCADE,
    id_produk INT REFERENCES produk(id) ON DELETE CASCADE,
    kuantitas INT NOT NULL DEFAULT 1,
    harga_satuan DECIMAL(12,2) NOT NULL,
    subtotal DECIMAL(12,2) NOT NULL
);

-- 5. Tabel Audit Log
-- Sebagai "sink" untuk menangkap data dari Workflow 6 (Detached Edge)
CREATE TABLE audit_log (
    id SERIAL PRIMARY KEY,
    event_type VARCHAR(100) NOT NULL, -- Contoh: 'PESANAN_DIBUAT', 'STOK_DIPERBARUI'
    workflow_id VARCHAR(100),
    status VARCHAR(50),
    payload JSONB, -- Menggunakan JSONB agar fleksibel menampung data log dari VFlow
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
=======
-- Menghapus tabel jika sudah ada (berguna jika kamu perlu me-reset database)
DROP TABLE IF EXISTS detail_pesanan CASCADE;
DROP TABLE IF EXISTS pesanan CASCADE;
DROP TABLE IF EXISTS produk CASCADE;
DROP TABLE IF EXISTS pelanggan CASCADE;
DROP TABLE IF EXISTS audit_log CASCADE;

-- 1. Tabel Pelanggan
-- Menyimpan data pelanggan UMKM beserta tipenya (penting untuk rule diskon member nanti)
CREATE TABLE pelanggan (
    id SERIAL PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    tipe_pelanggan VARCHAR(20) NOT NULL DEFAULT 'reguler', -- 'reguler' atau 'member'
    no_whatsapp VARCHAR(20),
    alamat TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Tabel Produk
-- Menyimpan katalog barang jualan UMKM beserta stoknya
CREATE TABLE produk (
    id SERIAL PRIMARY KEY,
    nama_produk VARCHAR(100) NOT NULL,
    harga DECIMAL(12,2) NOT NULL,
    stok INT NOT NULL DEFAULT 0,
    deskripsi TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Tabel Pesanan
-- Menyimpan header pesanan (transaksi)
CREATE TABLE pesanan (
    id SERIAL PRIMARY KEY,
    id_pelanggan INT REFERENCES pelanggan(id) ON DELETE CASCADE,
    tanggal_pesanan TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    subtotal DECIMAL(12,2) DEFAULT 0,
    total_harga DECIMAL(12,2) DEFAULT 0,
    status VARCHAR(50) NOT NULL DEFAULT 'pending', -- 'pending', 'dibayar', 'selesai', 'batal'
    metode_pembayaran VARCHAR(50),
    metode_pengambilan VARCHAR(50),
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Tabel Detail Pesanan
-- Menyimpan item-item produk di dalam satu pesanan (keranjang)
CREATE TABLE detail_pesanan (
    id SERIAL PRIMARY KEY,
    id_pesanan INT REFERENCES pesanan(id) ON DELETE CASCADE,
    id_produk INT REFERENCES produk(id) ON DELETE CASCADE,
    kuantitas INT NOT NULL DEFAULT 1,
    harga_satuan DECIMAL(12,2) NOT NULL,
    subtotal DECIMAL(12,2) NOT NULL
);

-- 5. Tabel Audit Log
-- Sebagai "sink" untuk menangkap data dari Workflow 6 (Detached Edge)
CREATE TABLE audit_log (
    id SERIAL PRIMARY KEY,
    event_type VARCHAR(100) NOT NULL, -- Contoh: 'PESANAN_DIBUAT', 'STOK_DIPERBARUI'
    workflow_id VARCHAR(100),
    status VARCHAR(50),
    payload JSONB, -- Menggunakan JSONB agar fleksibel menampung data log dari VFlow
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
>>>>>>> 32db6d164bb00fd3bf79f89469cd533a9191b245
);