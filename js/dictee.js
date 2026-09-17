let curWeek=null, wordIdx=0, mistakes=0;

function renderDicteeList() {
  let c = document.getElementById('dictee-weeks-list');
  c.innerHTML = '';
  let p = getProfile();
  DICTEE_WEEKS.forEach(w => {
    let learned = w.words.filter(wd=>(p.dicteeStats[wd.word]||0)>=3).length;
    let pct     = Math.round(learned/w.words.length*100);
    let done    = learned === w.words.length;
    let d = document.createElement('div');
    d.className = "bg-white p-4 rounded-2xl border border-slate-200 shadow-sm";
    d.innerHTML = `
      <div class="flex items-center justify-between gap-3">
        <div class="flex items-center gap-3 flex-1 min-w-0">
          <div class="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-xl ${done?'bg-emerald-100':'bg-indigo-50'}">${w.icon}</div>
          <div class="flex-1 min-w-0">
            <div class="font-bold text-slate-800 text-sm font-heading">${w.title}</div>
            <div class="text-[10px] text-amber-600 font-bold">${w.orthoLecon}</div>
            <div class="text-[10px] text-slate-400 truncate">${w.description}</div>
          </div>
        </div>
        <button onclick="startDictee('${w.id}')"
                class="${done?'bg-emerald-500 hover:bg-emerald-600':'bg-indigo-600 hover:bg-indigo-700'} text-white font-bold py-2 px-4 rounded-xl text-sm shadow flex-shrink-0 transition active:scale-95">
          ${done?'✅':'▶'}
        </button>
      </div>
      <div class="mt-2 flex justify-between text-[10px] font-bold">
        <span class="${pct===100?'text-emerald-600':'text-indigo-600'}">${learned}/${w.words.length} mots maîtrisés</span>
        <span class="text-slate-400">${pct}%</span>
      </div>
      <div class="w-full bg-slate-200 h-1.5 rounded-full mt-1">
        <div class="bg-indigo-500 h-full rounded-full transition-all" style="width:${pct}%"></div>
      </div>`;
    c.appendChild(d);
  });
}

function startDictee(weekId) {
  curWeek   = DICTEE_WEEKS.find(w=>w.id===weekId);
  wordIdx   = 0;
  document.getElementById('dictee-weeks-list').classList.add('hidden');
  document.getElementById('dictee-game-container').classList.remove('hidden');
  document.getElementById('dictee-lecon-badge').textContent = `📚 ${curWeek.orthoLecon}`;
  launchWordCycle();
}

function exitDicteeGame() {
  document.getElementById('dictee-game-container').classList.add('hidden');
  document.getElementById('dictee-weeks-list').classList.remove('hidden');
  renderDicteeList();
}

function launchWordCycle() {
  mistakes = 0;
  let wo   = curWeek.words[wordIdx];
  document.getElementById('dictee-word-progress').textContent = `Mot ${wordIdx+1}/${curWeek.words.length}`;
  document.getElementById('card-word-text').textContent = wo.word;

  // Réinitialisation des étapes
  document.getElementById('dictee-step-memo').classList.remove('hidden');
  document.getElementById('dictee-step-input').classList.add('hidden');
  document.getElementById('dictee-step-nature').classList.add('hidden');
  document.getElementById('dictee-card').classList.remove('flipped');

  // Barre de mémorisation (2 secondes)
  let bar = document.getElementById('dictee-timer-bar');
  bar.style.transition = 'none'; bar.style.width = '100%';
  void bar.offsetWidth;
  bar.style.transition = 'width 2s linear'; bar.style.width = '0%';

  setTimeout(() => {
    document.getElementById('dictee-card').classList.add('flipped');
    setTimeout(showInputPhase, 500);
  }, 2000);
}

function speakWord() {
  if ('speechSynthesis' in window) {
    let u = new SpeechSynthesisUtterance(curWeek.words[wordIdx].word);
    u.lang = 'fr-FR';
    speechSynthesis.speak(u);
  }
}

function showInputPhase() {
  document.getElementById('dictee-step-memo').classList.add('hidden');
  document.getElementById('dictee-step-input').classList.remove('hidden');

  let word = curWeek.words[wordIdx].word;
  let clue = document.getElementById('dictee-clue-display');
  clue.innerHTML = '';

  for (let i=0; i<word.length; i++) {
    let ch   = word[i];
    let span = document.createElement('span');
    if (i === 0) {
      // Première lettre visible
      span.textContent = ch;
      span.className   = 'text-indigo-600 font-bold';
    } else if (ch === ' ') {
      span.innerHTML = '&nbsp;&nbsp;';
    } else if ("'-'".includes(ch)) {
      span.textContent = ch; span.className = 'text-slate-400 font-bold';
    } else {
      // Lettre masquée : on montre un underscore
      span.textContent = '_'; span.className = 'text-slate-300 font-bold';
    }
    clue.appendChild(span);
  }
  let inp = document.getElementById('dictee-input');
  inp.value = ''; inp.className = "w-full py-3 px-4 rounded-xl border-2 border-slate-300 text-center font-bold text-xl outline-none focus:border-indigo-500 transition";
  inp.focus();
}

function validateWordInput(e) {
  e.preventDefault();
  let inp    = document.getElementById('dictee-input');
  let target = curWeek.words[wordIdx].word.toLowerCase().replace(/['']/g,"'");
  let typed  = inp.value.trim().toLowerCase().replace(/['']/g,"'");
  if (typed === target) {
    playTone(523, .15);
    document.getElementById('dictee-step-input').classList.add('hidden');
    document.getElementById('dictee-step-nature').classList.remove('hidden');
  } else {
    mistakes++;
    playTone(200, .2);
    inp.classList.add('border-rose-500','animate-shake');
    setTimeout(()=>{ inp.classList.remove('border-rose-500','animate-shake'); inp.value=''; }, 500);
  }
}

function checkGrammarNature(selected) {
  let target = curWeek.words[wordIdx].nature;
  let p = getProfile();
  if (selected === target) {
    playTone(659, .15);
    let mot = curWeek.words[wordIdx].word;
    if (!p.dicteeStats[mot]) p.dicteeStats[mot] = 0;
    if (mistakes === 0) { p.dicteeStats[mot] = Math.min(3, p.dicteeStats[mot]+1); p.points += 10; }
    saveData();
    wordIdx++;
    if (wordIdx < curWeek.words.length) {
      launchWordCycle();
    } else {
      // Fin de la série
      let allDone = curWeek.words.every(w=>(p.dicteeStats[w.word]||0)>=3);
      if (allDone) {
        awardBadge(`week_${curWeek.id}`, `Expert : ${curWeek.title} ${curWeek.icon}`,
          `Tous les mots de « ${curWeek.title} » sont maîtrisés !`, 'dictee');
      } else {
        showCelebration('✍️', 'Série terminée !',
          "Bien joué ! Continue de t'entraîner pour maîtriser tous les mots.", null);
      }
      exitDicteeGame();
    }
  } else {
    // Mauvaise nature — petite animation sans bloquer
    playTone(200, .2);
    document.querySelectorAll('.grammar-btn').forEach(b=>{
      b.classList.add('animate-shake');
      setTimeout(()=>b.classList.remove('animate-shake'), 400);
    });
  }
}

// ═══════════════════════════════════════════════════════════════
//  ████ FLUENCE ████
// ═══════════════════════════════════════════════════════════════

