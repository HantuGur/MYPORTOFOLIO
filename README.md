# 🖤 @cincau_item1 — Portfolio Website

> Personal portfolio untuk Web Designer & Developer spesialis landing page bisnis lokal Indonesia.

---

## 🔗 Live Demo

[hantugur.github.io/portfolio](https://hantugur.github.io/MYPORTOFOLIO/) *(update sesuai link deploy kamu)*

---

## 📁 Struktur File

```
portfolio/
├── index.html      → Struktur & konten halaman
├── style.css       → Semua styling & animasi
├── script.js       → Interaksi, cursor, scroll reveal
├── photo.jpg       → Foto profil kamu
└── README.md       → File ini
```

---

## 🚀 Cara Deploy ke GitHub Pages

1. Buat repository baru di GitHub (misal: `portfolio`)
2. Upload semua file di atas ke repository tersebut
3. Masuk ke **Settings → Pages**
4. Set source ke **Deploy from a branch → main → / (root)**
5. Tunggu beberapa menit → live di `https://username.github.io/portfolio`

---

## ✏️ Cara Edit Konten

### Ganti Foto Profil
Ganti file `photo.jpg` dengan foto kamu yang baru (nama file harus sama persis).

### Ganti Nama / Handle
Cari dan ganti `cincau_item1` di `index.html` dengan nama/handle kamu.

### Tambah Project Baru
Di `index.html`, cari section `<!-- Project 7 -->` dan duplikasi blok `<article class="pj">` di bawahnya:

```html
<article class="pj" data-index="08">
  <a href="LINK_WEBSITE_KAMU" target="_blank" class="pj-link">
    <div class="pj-thumb">
      <iframe src="LINK_WEBSITE_KAMU" loading="lazy" title="NAMA PROJECT" scrolling="no"></iframe>
      <div class="pj-overlay">
        <span class="pj-visit">Lihat Website ↗</span>
      </div>
    </div>
    <div class="pj-info">
      <div class="pj-top">
        <span class="pj-num mono">08</span>
        <div class="pj-tags">
          <span>KATEGORI</span>
          <span>Landing Page</span>
        </div>
      </div>
      <h3 class="pj-title">NAMA PROJECT</h3>
      <p class="pj-desc">Deskripsi singkat project kamu.</p>
      <div class="pj-stack">
        <span>HTML</span><span>CSS</span><span>JS</span>
      </div>
    </div>
  </a>
</article>
```

### Ganti Nomor WhatsApp
Cari `6282113478296` di `index.html` dan ganti dengan nomor kamu (format: `62` + nomor tanpa `0` di depan).

### Ganti Username Instagram
Cari `cincau_item1` di `index.html` dan ganti dengan username kamu.

---

## 🎨 Warna & Font

| Elemen | Nilai |
|---|---|
| Background | `#0A0A0A` (hitam) |
| Accent | `#C8F04A` (hijau lime) |
| Text | `#F0EDE8` (off-white) |
| Font Display | Syne |
| Font Serif | Instrument Serif |
| Font Mono | Geist Mono |

Untuk ganti accent color, buka `style.css` dan edit:
```css
--accent:  #C8F04A;
--accent2: #A8D030;
```

---

## 📦 Projects yang Ditampilkan

| # | Nama | Kategori | Link |
|---|---|---|---|
| 01 | Dian Bangsa School | Education | [↗](https://hantugur.github.io/dianbangsa/) |
| 02 | C-Code Coffee | Cafe | [↗](https://hantugur.github.io/c-code-coffe/) |
| 03 | Lucky Cat Coffee | Cafe | [↗](https://hantugur.github.io/lucky-cat-coffe/) |
| 04 | Scarlet Cake | Bakery | [↗](https://hantugur.github.io/scarlet-cake/) |
| 05 | Jonkira Ramen | Restaurant | [↗](https://hantugur.github.io/JonkiraRamen/) |
| 06 | SDS | Business | [↗](https://hantugur.github.io/sds/) |
| 07 | 62 Coffee Shop | Cafe | [↗](https://hantugur.github.io/62--coffe-shop/) |

---

## 📬 Kontak

- **WhatsApp:** [082113478296](https://wa.me/6282113478296)
- **Instagram:** [@cincau_item1](https://instagram.com/cincau_item1)

---

*Built with HTML · CSS · JS — no framework, no template, 100% custom.*
