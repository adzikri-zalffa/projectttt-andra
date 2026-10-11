# 💕 Adzikri & Zalffa — Our Love Story

Website spesial untuk **Adzikri Andra Pohan** & **Zalffa Zascia Indra**  
Jadian sejak **5 Oktober 2026**

Tema pink romantis dengan floating hearts, galeri foto, dan pesan cinta.

---

## Cara Deploy di Vercel

### Opsi 1: Drag & Drop (Paling Mudah)
1. Buka [vercel.com](https://vercel.com) dan login (bisa pakai GitHub/Google)
2. Klik **"Add New..." → Project**
3. Drag folder `love-website` ini ke area upload
4. Klik **Deploy**
5. Selesai! Link website langsung tersedia

### Opsi 2: Via GitHub
1. Buat repository baru di GitHub
2. Upload semua file di folder ini
3. Di Vercel → **Import Project** → pilih repository tersebut
4. Deploy

---

## Cara Ganti Foto

Buka file `index.html`, cari bagian:

```html
<div class="photo-placeholder">
  <span class="placeholder-icon">📷</span>
  <p>Foto 1</p>
  <small>Ganti dengan fotomu</small>
</div>
```

Ganti menjadi:

```html
<img src="nama-foto-kamu.jpg" alt="Momen indah" style="width:100%; height:100%; object-fit:cover; border-radius:10px;" />
```

Simpan fotonya di folder yang sama (atau buat folder `images/`), lalu sesuaikan path `src`.

---

## Struktur File

```
love-website/
├── index.html      ← Halaman utama
├── styles.css      ← Semua styling (pink theme + animasi)
├── script.js       ← Floating hearts + smooth scroll
└── README.md       ← Panduan ini
```

---

Dibuat dengan 💖 khusus untuk kalian berdua.
