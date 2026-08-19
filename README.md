ZaTebeCestitka 💛
Mini interaktivna web-čestitka za godišnjicu/iznenađenje — Ljigavac koji pleše,
DA/NE kviz, lokacija, vreme i finalna poruka sa konfetama.
📁 Struktura
```
ZaTebeCestitka/
├── index.html          ← struktura stranice (ne mora se dirati)
├── css/
│   └── style.css        ← izgled/boje/animacije (ne mora se dirati)
├── js/
│   ├── config.js        ← ★ JEDINI fajl koji menjaš za personalizaciju
│   └── script.js         ← logika aplikacije (ne mora se dirati)
├── audio/
│   └── conga.mp3         ← pesma koja svira (zameni svojom ako želiš)
└── images/                ← rezervisano za buduće slike (trenutno prazno)
```
✏️ Kako personalizovati (za svaku novu čestitku)
Otvori `js/config.js`.
Izmeni tekstove (ime, pitanje, lokaciju, vreme, poruku...) — svako polje ima
komentar šta predstavlja.
Za lokaciju: otvori Google Maps → pronađi mesto → Podeli → Kopiraj link →
nalepi u `mapsUrl`.
Ako menjaš pesmu: zameni fajl `audio/conga.mp3` svojim MP3-om (zadrži isto ime
fajla, ili promeni `audioFajl` u `config.js`).
Boje cele aplikacije menjaju se na vrhu `css/style.css`, u `:root{ ... }` bloku
(`--pink`, `--gold`, `--teal`...) — ako želiš drugu paletu za drugog klijenta.
Ništa drugo ne treba da diraš — `index.html` i `js/script.js` su isti za sve
verzije čestitke.
🚀 Postavljanje na GitHub Pages (besplatan hosting)
Napravi novi repozitorijum na GitHub-u i nazovi ga npr. `ZaTebeCestitka`
(ili posebno ime za svakog klijenta, npr. `cestitka-ana-marko`).
Ubaci sve fajlove iz ovog foldera u repozitorijum (drag & drop na GitHub
sajtu radi, ne treba komandna linija).
Idi u Settings → Pages → pod "Branch" izaberi `main` i `/ (root)` → Save.
Za par minuta stranica će biti dostupna na:
`https://<tvoje-korisničko-ime>.github.io/<naziv-repozitorijuma>/`
Taj link nalepi u bilo koji QR generator (npr. qr-code-generator.com) da
dobiješ QR kod za štampu.
🔁 Za svaku novu porudžbinu (novi par)
Najlakše je napraviti novi repozitorijum od ovog kao template:
Na GitHub-u otvori ovaj repo → Use this template → Create a new repository.
U novom repou izmeni samo `js/config.js` (i eventualno `audio/conga.mp3`).
Uključi GitHub Pages za taj novi repo → dobijaš nov, poseban link/QR za tog
klijenta, bez mešanja sa ostalim porudžbinama.
