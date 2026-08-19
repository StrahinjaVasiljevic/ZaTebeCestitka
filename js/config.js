/* =========================================================================
   🎉 PERSONALIZACIJA — ovo je JEDINI fajl koji treba da menjaš!
   Ne diraj js/script.js niti index.html — sve što se menja od poklona
   do poklona nalazi se ovde.
   ========================================================================= */

window.CESTITKA = {

  // Naslov taba u browseru
  naslovStranice: "Godišnjica 💛 Teodora-Nastasija",

  // ---------- EKRAN 1: POČETAK ----------
  pocetakNaslov: "Za moju Teodoru-Nastasiju 💛",
  pocetakHint: "dodirni ekran",

  // ---------- EKRAN 2: KVIZ (DA/NE pitanje) ----------
  trenutnoSvira: "Trenutno svira: Conga",
  // koristi <span class="name">...</span> da istakneš deo teksta zlatnom bojom
  kvizPitanje: 'Da li bi <span class="name">izašla na dejt</span> sa mnom?',
  dugmeDA: "DA 💛",
  dugmeNE: "NE! Nema šanse!",
  // rečenice koje se smenjuju dok neko kuka na dugme NE
  nudges: [
    "Hmm, sigurna si?",
    "Razmisli malo bolje 👀",
    "Ljigavac je tužan sad 🥺",
    "Dobro dobro, shvatam poentu 😏"
  ],
  nudgeKadaNijeSpremno: "Prvo probaj dugme NE 😏",

  // ---------- EKRAN 3: LOKACIJA ----------
  lokacijaEyebrow: "Pitanje 2 od 3",
  lokacijaNaslov: "Lokacija?",
  lokacijaNaziv: "Znak pitanja (Upitnik), Kralja Petra 6",
  // Google Maps link (Podeli → Kopiraj link na mestu na mapi)
  mapsUrl: "https://maps.app.goo.gl/fyQp67gRPXjk7KAP6",
  mapsLinkTekst: "Otvori u mapama ↗",

  // ---------- EKRAN 4: VREME ----------
  vremeEyebrow: "Pitanje 3 od 3",
  vremeNaslov: "Vreme?",
  vremeDetalji: "Danas posle posla, 18.08. u 19h",

  // ---------- EKRAN 5: FINALNA PORUKA ----------
  finalNaslov: "Vidimo se! 💛",
  finalPoruka: "Doći ću po tebe benzom 🚗",
  finalMapsLinkTekst: "Kafana Upitnik na mapi ↗",
  dugmeDaljeNaHappy: "Još samo jedno pitanje →",

  // ---------- EKRAN 6: FINALNI KVIZ SREĆE ----------
  happyPitanje: "Da li si srećna ovim malim znakom pažnje?",
  dugmeNe2: "Ne!",
  dugmeDaLjubav: "Stvarno, ti me činiš najsrećnijom devojkom u univerzumu univerzuma!!!❤️",
  // rečenice koje se smenjuju na dugmetu "Ne!"
  sadLines: [
    "Ne? Ma hajde... 😏",
    "Pokušaj ponovo 😅",
    "To dugme ne radi baš 😌"
  ],
  finalGrandNaslov: "Srećna godišnjica, volim te.",

  // ---------- MUZIKA ----------
  audioFajl: "audio/conga.mp3",
  audioVolume: 0.9,

  // ---------- PONAŠANJE (opciono podešavanje) ----------
  gateClicks: 3,      // koliko puta mora da klikne NE pre nego DA postane aktivno
  explodeAt: 5         // koliko klikova na "srećno" dugme pre nego konfete eksplodiraju
};
