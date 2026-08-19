/* =========================================================================
   MOTOR APLIKACIJE — ovde ništa ne treba da menjaš.
   Sav tekst i podešavanja se učitavaju iz js/config.js (window.CESTITKA).
   ========================================================================= */
(function(){
  var C = window.CESTITKA || {};

  // ---------- 1) Popuni sav tekst iz config.js ----------
  document.title = C.naslovStranice || document.title;

  function setText(sel, val){
    if(val == null) return;
    var el = document.querySelector(sel);
    if(el) el.textContent = val;
  }
  function setHTML(sel, val){
    if(val == null) return;
    var el = document.querySelector(sel);
    if(el) el.innerHTML = val;
  }

  setText('#screen-start h1', C.pocetakNaslov);
  setText('#screen-start .tap-hint', C.pocetakHint);

  setText('#screen-quiz .eyebrow', C.trenutnoSvira);
  setHTML('#quiz-q', C.kvizPitanje);
  setText('#btn-yes', C.dugmeDA);
  setText('#btn-no', C.dugmeNE);

  setText('#screen-loc .eyebrow', C.lokacijaEyebrow);
  setText('#screen-loc h2', C.lokacijaNaslov);
  setText('#screen-loc .big', C.lokacijaNaziv);
  setText('#link-maps', C.mapsLinkTekst);

  setText('#screen-time .eyebrow', C.vremeEyebrow);
  setText('#screen-time h2', C.vremeNaslov);
  setText('#screen-time .big', C.vremeDetalji);

  setText('#screen-final h1', C.finalNaslov);
  setText('#screen-final .sub', C.finalPoruka);
  setText('#link-maps-2', C.finalMapsLinkTekst);
  setText('#btn-to-happy', C.dugmeDaljeNaHappy);

  setText('#happy-q', C.happyPitanje);
  setText('#btn-sad', C.dugmeNe2);
  setText('#btn-happy', C.dugmeDaLjubav);
  setText('.happy-final h1', C.finalGrandNaslov);

  var MAPS_URL = C.mapsUrl || '#';
  var linkMaps1 = document.getElementById('link-maps');
  var linkMaps2 = document.getElementById('link-maps-2');
  if(linkMaps1) linkMaps1.href = MAPS_URL;
  if(linkMaps2) linkMaps2.href = MAPS_URL;

  // ---------- 2) Navigacija između ekrana ----------
  function show(id){
    document.querySelectorAll('.screen').forEach(function(s){ s.classList.remove('active'); });
    document.getElementById(id).classList.add('active');
  }

  // ---------- 3) Ambijentalne konfete koje padaju u pozadini ----------
  var colors = ['#FF2E93','#FFC93C','#2CE8C6','#FFF6E9'];
  var layer = document.getElementById('confetti-layer');
  for(var i=0;i<18;i++){
    var d = document.createElement('div');
    d.className = 'confetti-bit';
    d.style.left = (Math.random()*100)+'%';
    d.style.background = colors[i % colors.length];
    d.style.animationDuration = (6+Math.random()*6)+'s';
    d.style.animationDelay = (Math.random()*8)+'s';
    layer.appendChild(d);
  }

  // ---------- 4) Muzika ----------
  var song = document.getElementById('song');
  song.src = C.audioFajl || 'audio/conga.mp3';
  song.load();
  song.loop = true;
  song.volume = (typeof C.audioVolume === 'number') ? C.audioVolume : 0.9;

 song.addEventListener('error', function(){
    console.error('AUDIO GREŠKA — fajl se ne može učitati/dekodirati:', song.error);
  });

   var musicStarted = false;
   
  function startMusic(){
    var p = song.play();
    if(p && p.catch){
      p.catch(function(err){ console.warn('Audio play blokiran, pokušaću ponovo na sledeći tap:', err); });
    }
  }

  document.getElementById('screen-start').addEventListener('click', function(){
    startMusic();
    show('screen-quiz');
  });

  // na SVAKI tap na stranici, ako muzika nije krenula ili je pauzirana, pokušaj ponovo
  document.addEventListener('click', function(){
    if(song.paused){ startMusic(); }
  });

  // ako se muzika neočekivano pauzira, nastavi na sledeći tap
  document.addEventListener('click', function(){
    if(musicStarted && song.paused){ song.play().catch(function(){}); }
  });

  // ---------- 5) KVIZ 1 logika (DA/NE) ----------
  var noClicks = 0;
  var GATE_CLICKS = (typeof C.gateClicks === 'number') ? C.gateClicks : 3;
  var yesBtn = document.getElementById('btn-yes');
  var noBtn = document.getElementById('btn-no');
  var quizScreen = document.getElementById('screen-quiz');
  var nudge = document.getElementById('nudge');
  var nudges = C.nudges || [];
  var gateOpen = false;

  noBtn.addEventListener('click', function(){
    if(noClicks >= GATE_CLICKS + 3) return; // hard cap
    noClicks++;
    var shrink = Math.max(0.38, 1 - noClicks*0.15);
    var grow = 1 + noClicks*0.24;
    noBtn.style.transform = 'scale(' + shrink + ')';
    noBtn.style.opacity = String(Math.max(0.2, 1 - noClicks*0.16));
    yesBtn.style.transform = 'scale(' + grow + ')';
    if(nudges.length) nudge.textContent = nudges[Math.min(noClicks-1, nudges.length-1)];

    var dx = (Math.random()*40-20);
    noBtn.style.marginLeft = dx + 'px';

    if(noClicks >= GATE_CLICKS){ gateOpen = true; }
    if(noClicks >= GATE_CLICKS + 3){
      noBtn.style.pointerEvents = 'none';
      setTimeout(function(){ quizScreen.classList.add('takeover'); }, 200);
    }
  });

  yesBtn.addEventListener('click', function(){
    if(!gateOpen){
      var current = yesBtn.style.transform || 'scale(1)';
      yesBtn.style.transform = 'scale(1.06)';
      setTimeout(function(){ yesBtn.style.transform = current; }, 140);
      nudge.textContent = C.nudgeKadaNijeSpremno || '';
      return;
    }
    quizScreen.classList.add('takeover');
    setTimeout(function(){ show('screen-loc'); }, 550);
  });

  document.getElementById('btn-loc').addEventListener('click', function(){ show('screen-time'); });
  document.getElementById('btn-time').addEventListener('click', function(){ show('screen-final'); });
  document.getElementById('btn-to-happy').addEventListener('click', function(){ show('screen-happy'); });

  // ---------- 6) FINALNI KVIZ SREĆE ----------
  var happyScreen = document.getElementById('screen-happy');
  var btnHappy = document.getElementById('btn-happy');
  var btnSad = document.getElementById('btn-sad');
  var happyClicks = 0;
  var EXPLODE_AT = (typeof C.explodeAt === 'number') ? C.explodeAt : 5;

  var sadLines = C.sadLines || [];
  var sadIdx = 0;
  btnSad.addEventListener('click', function(){
    btnSad.classList.remove('shake');
    void btnSad.offsetWidth;
    btnSad.classList.add('shake');
    if(sadLines.length){
      btnSad.textContent = sadLines[sadIdx % sadLines.length];
      sadIdx++;
    }
  });

  btnHappy.addEventListener('click', function(){
    happyClicks++;
    var scale = 1 + happyClicks*0.16;
    var glow = 0.4 + happyClicks*0.12;
    btnHappy.style.transform = 'scale(' + scale + ')';
    btnHappy.style.boxShadow = '0 10px 26px rgba(255,46,147,' + Math.min(glow,0.9) + ')';

    if(happyClicks >= EXPLODE_AT){
      btnHappy.style.transition = 'transform .35s cubic-bezier(.34,1.56,.64,1), opacity .35s ease';
      btnHappy.style.transform = 'scale(1.9)';
      setTimeout(function(){
        happyScreen.classList.add('exploded');
        fireConfetti();
        floatHearts();
      }, 220);
    }
  });

  function fireConfetti(){
    if(typeof confetti !== 'function') return;
    var duration = 2600;
    var end = Date.now() + duration;
    (function frame(){
      confetti({ particleCount: 5, angle: 60, spread: 65, origin: { x: 0 }, colors: colors });
      confetti({ particleCount: 5, angle: 120, spread: 65, origin: { x: 1 }, colors: colors });
      if(Date.now() < end) requestAnimationFrame(frame);
    })();
    confetti({ particleCount: 140, spread: 110, origin: { y: 0.45 }, colors: colors });
  }

  function floatHearts(){
    var hearts = ['❤️','💛','✨','💫'];
    for(var i=0;i<18;i++){
      (function(i){
        setTimeout(function(){
          var h = document.createElement('div');
          h.className = 'heart-float';
          h.textContent = hearts[i % hearts.length];
          h.style.left = (5 + Math.random()*90) + '%';
          h.style.setProperty('--dx', (Math.random()*60-30)+'px');
          h.style.animationDuration = (4+Math.random()*3)+'s';
          document.getElementById('stage').appendChild(h);
          setTimeout(function(){ h.remove(); }, 8000);
        }, i*200);
      })(i);
    }
    setInterval(function(){
      if(!happyScreen.classList.contains('exploded')) return;
      var h = document.createElement('div');
      h.className = 'heart-float';
      h.textContent = ['❤️','💛'][Math.floor(Math.random()*2)];
      h.style.left = (5 + Math.random()*90) + '%';
      h.style.setProperty('--dx', (Math.random()*60-30)+'px');
      h.style.animationDuration = (5+Math.random()*3)+'s';
      document.getElementById('stage').appendChild(h);
      setTimeout(function(){ h.remove(); }, 9000);
    }, 900);
  }
})();

