let curWeek=null, sessionWords=[], wordIdx=0, mistakes=0;
let orthoCurrent = null;
let orthoQuestionIndex = 0, orthoQuestions = [], orthoCorrect = 0, orthoAnswered = false;

const WORD_NATURE_LABELS = {
  noms: 'Nom',
  verbes: 'Verbe',
  adjectifs: 'Adjectif',
  invariables: 'Mot invariable'
};

function natureClass(nature) {
  return `word-${nature === 'noms' ? 'nom' : nature === 'verbes' ? 'verbe' : nature === 'adjectifs' ? 'adjectif' : 'invariable'}`;
}

function hideOrthoExercise() {
  const box = document.getElementById('ortho-exercise-container');
  if (box) box.classList.add('hidden');
}

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
        <div class="flex gap-2 flex-shrink-0">
          <button onclick="startOrthoExercise('${w.id}')"
                  class="bg-amber-100 text-amber-800 font-bold py-2 px-3 rounded-xl text-xs border border-amber-200 transition active:scale-95">
            📝 Exercice
          </button>
          <button onclick="startDictee('${w.id}')"
                  class="${done?'bg-emerald-500 hover:bg-emerald-600':'bg-indigo-600 hover:bg-indigo-700'} text-white font-bold py-2 px-3 rounded-xl text-sm shadow transition active:scale-95">
            ${done?'✅':'▶'}
          </button>
        </div>
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
  setGameActive('dictees');
  hideOrthoExercise();
  curWeek   = DICTEE_WEEKS.find(w=>w.id===weekId);
  const p = getProfile();
  sessionWords = curWeek.words.filter(word => (p.dicteeStats[word.word] || 0) < 3).sort(() => Math.random() - 0.5);
  if (!sessionWords.length) sessionWords = [...curWeek.words].sort(() => Math.random() - 0.5);
  wordIdx   = 0;
  document.getElementById('dictee-weeks-list').classList.add('hidden');
  document.getElementById('dictee-game-container').classList.remove('hidden');
  document.getElementById('dictee-lecon-badge').textContent = `${curWeek.icon} ${curWeek.title}`;
  launchWordCycle();
}

function exitDicteeGame() {
  setGameActive(null);
  document.getElementById('dictee-game-container').classList.add('hidden');
  document.getElementById('dictee-weeks-list').classList.remove('hidden');
  renderDicteeList();
}

function startOrthoExercise(weekId) {
  const exercise = ORTHO_EXERCISES[weekId];
  if (!exercise) return;
  setGameActive('orthographe');
  orthoCurrent = exercise;
  orthoQuestions = exercise.questions || [{sentence:exercise.sentence, options:exercise.options, answer:exercise.answer, explanation:exercise.explanation}];
  orthoQuestionIndex = 0;
  orthoCorrect = 0;
  orthoAnswered = false;
  const week = DICTEE_WEEKS.find(item => item.id === weekId);
  const box = document.getElementById('ortho-exercise-container');
  document.getElementById('dictee-weeks-list').classList.add('hidden');
  document.getElementById('dictee-game-container').classList.add('hidden');
  box.classList.remove('hidden');
  box.innerHTML = `
    <div class="flex items-center justify-between gap-3">
      <div class="text-left"><div class="text-xs font-bold text-amber-600">${week?.icon || '📝'} ${week?.title || ''}</div><h3 class="text-xl font-bold text-slate-800 font-heading">${exercise.title}</h3></div>
      <button onclick="closeOrthoExercise()" class="text-slate-400 text-xl" aria-label="Fermer">✕</button>
    </div>
    <div id="ortho-question-progress" class="text-xs font-bold text-indigo-600"></div>
    <p class="text-sm text-slate-500">${exercise.instruction}</p>
    <div id="ortho-question-box"></div>
    <div class="bg-indigo-50 border border-indigo-100 rounded-2xl p-3 text-left text-sm text-indigo-900"><strong>📚 À retenir :</strong> ${exercise.rule || ''}</div>
    <div id="ortho-notion-progress" class="text-xs text-slate-500"></div>`;
  renderOrthoQuestion();
  box.scrollIntoView({ behavior:'smooth', block:'start' });
}

function renderOrthoQuestion() {
  const q = orthoQuestions[orthoQuestionIndex];
  const box = document.getElementById('ortho-question-box');
  if (!q || !box) return;
  orthoAnswered = false;
  document.getElementById('ortho-question-progress').textContent = `Question ${orthoQuestionIndex + 1}/${orthoQuestions.length} · ${orthoCorrect} bonnes réponses`;
  box.innerHTML = `<p class="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-lg font-bold text-slate-800">${q.sentence}</p><div class="grid gap-2 mt-3" id="ortho-options">${q.options.map(option => `<button type="button" class="ortho-option w-full bg-slate-50 border-2 border-slate-200 rounded-xl p-3 font-bold text-slate-700 transition active:scale-95" data-answer="${encodeURIComponent(option)}" onclick="answerOrthoExercise(this, decodeURIComponent(this.dataset.answer))">${option}</button>`).join('')}</div><div id="ortho-feedback" class="min-h-[2.5rem] text-sm font-bold"></div><button id="ortho-next-button" type="button" onclick="nextOrthoQuestion()" class="hidden w-full bg-indigo-600 text-white font-bold py-3 rounded-xl">Question suivante ➡️</button>`;
  updateOrthoNotionProgress();
}

function updateOrthoNotionProgress() {
  const el = document.getElementById('ortho-notion-progress');
  if (el && orthoCurrent) el.textContent = `Progression sur cette notion : ${orthoCorrect}/${Math.max(1, orthoQuestionIndex + (orthoAnswered ? 1 : 0))} bonnes réponses dans cette série`;
}

function nextOrthoQuestion() {
  if (!orthoAnswered) return;
  if (orthoQuestionIndex < orthoQuestions.length - 1) { orthoQuestionIndex++; renderOrthoQuestion(); }
  else {
    const feedback = document.getElementById('ortho-feedback');
    if (feedback) feedback.textContent = `🎉 Série terminée : ${orthoCorrect}/${orthoQuestions.length} bonnes réponses.`;
    document.getElementById('ortho-next-button')?.classList.add('hidden');
    updateOrthoNotionProgress();
  }
}

function answerOrthoExercise(button, answer) {
  const feedback = document.getElementById('ortho-feedback');
  const q = orthoQuestions[orthoQuestionIndex];
  if (!feedback || !q || orthoAnswered) return;
  orthoAnswered = true;
  document.querySelectorAll('.ortho-option').forEach(option => option.disabled = true);
  if (answer === q.answer) {
    orthoCorrect++;
    button.classList.add('border-emerald-500', 'bg-emerald-50', 'text-emerald-700');
    feedback.className = 'min-h-[2.5rem] text-sm font-bold text-emerald-600';
    feedback.textContent = `✅ Bravo ! ${q.explanation}`;
    getProfile().points += 10;
    dailyRecord('orthographe', 10);
    saveData();
  } else {
    button.classList.add('border-rose-500', 'bg-rose-50', 'text-rose-700');
    feedback.className = 'min-h-[2.5rem] text-sm font-bold text-rose-600';
    feedback.textContent = `❌ Pas encore. La bonne réponse était « ${q.answer} ». ${q.explanation}`;
    const correct = [...document.querySelectorAll('.ortho-option')].find(option => option.textContent === q.answer);
    if (correct) correct.classList.add('border-emerald-500', 'bg-emerald-50', 'text-emerald-700');
  }
  document.getElementById('ortho-next-button')?.classList.remove('hidden');
  updateOrthoNotionProgress();
}

function closeOrthoExercise() {
  setGameActive(null);
  const box = document.getElementById('ortho-exercise-container');
  if (box) box.classList.add('hidden');
  document.getElementById('dictee-weeks-list').classList.remove('hidden');
  renderDicteeList();
}

function launchWordCycle() {
  mistakes = 0;
  let wo   = sessionWords[wordIdx];
  const mastered = curWeek.words.filter(w => (getProfile().dicteeStats[w.word] || 0) >= 3).length;
  document.getElementById('dictee-word-progress').textContent = `Mot ${wordIdx+1}/${sessionWords.length} · ${mastered}/${curWeek.words.length} maîtrisés`;
  const wordCard = document.getElementById('card-word-text');
  wordCard.textContent = wo.word;
  wordCard.className = `font-extrabold text-2xl ${natureClass(wo.nature)}`;
  const natureBadge = document.getElementById('card-word-nature');
  natureBadge.textContent = WORD_NATURE_LABELS[wo.nature] || wo.nature;
  natureBadge.className = `word-legend ${natureClass(wo.nature)}`;

  // Réinitialisation des étapes
  document.getElementById('dictee-step-memo').classList.remove('hidden');
  document.getElementById('dictee-step-input').classList.add('hidden');
  document.getElementById('dictee-step-nature').classList.add('hidden');
  document.getElementById('dictee-input-feedback').textContent = '';
  document.getElementById('dictee-nature-feedback').textContent = '';
  document.getElementById('dictee-to-nature').classList.add('hidden');
  document.getElementById('dictee-next-word').classList.add('hidden');
  document.querySelector('#dictee-step-input form button[type="submit"]').disabled = false;
  document.querySelectorAll('.grammar-btn').forEach(button => button.disabled = false);
  document.getElementById('dictee-card').classList.remove('flipped');
  renderDictationProgress();

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
    let u = new SpeechSynthesisUtterance(sessionWords[wordIdx].word);
    u.lang = 'fr-FR';
    speechSynthesis.speak(u);
  }
}

function showInputPhase() {
  document.getElementById('dictee-step-memo').classList.add('hidden');
  document.getElementById('dictee-step-input').classList.remove('hidden');

  let word = sessionWords[wordIdx].word;
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

function showNaturePhase() {
  document.getElementById('dictee-step-input').classList.add('hidden');
  document.getElementById('dictee-step-nature').classList.remove('hidden');
  document.getElementById('dictee-nature-feedback').textContent = '';
}

function validateWordInput(e) {
  e.preventDefault();
  let inp    = document.getElementById('dictee-input');
  let target = sessionWords[wordIdx].word.toLowerCase().replace(/['']/g,"'");
  let typed  = inp.value.trim().toLowerCase().replace(/['']/g,"'");
  if (typed === target) {
    playTone(523, .15);
    const profile = getProfile();
    profile.dicteeWritten[target] = (profile.dicteeWritten[target] || 0) + 1;
    saveData();
    document.getElementById('dictee-input-feedback').className = 'min-h-[2rem] text-sm font-bold text-emerald-600';
    document.getElementById('dictee-input-feedback').textContent = '✅ Bonne réponse ! Le mot est correctement écrit.';
    document.getElementById('dictee-to-nature').classList.remove('hidden');
    document.querySelector('#dictee-step-input form button[type="submit"]').disabled = true;
  } else {
    mistakes++;
    playTone(200, .2);
    inp.classList.add('border-rose-500','animate-shake');
    document.getElementById('dictee-input-feedback').className = 'min-h-[2rem] text-sm font-bold text-rose-600';
    document.getElementById('dictee-input-feedback').textContent = '❌ Ce n’est pas encore le bon mot. Réessaie !';
    setTimeout(()=>{ inp.classList.remove('border-rose-500','animate-shake'); inp.value=''; }, 500);
  }
}

function checkGrammarNature(selected) {
  let target = sessionWords[wordIdx].nature;
  let p = getProfile();
  if (selected === target) {
    playTone(659, .15);
    let mot = sessionWords[wordIdx].word;
    if (!p.dicteeStats[mot]) p.dicteeStats[mot] = 0;
    p.dicteeStats[mot] = Math.min(3, p.dicteeStats[mot] + 1);
    const earned = mistakes === 0 ? 10 : 5;
    p.points += earned;
    dailyRecord('dictees', earned);
    saveData();
    document.getElementById('dictee-nature-feedback').className = 'min-h-[2rem] text-sm font-bold text-emerald-600';
    document.getElementById('dictee-nature-feedback').textContent = '✅ Bonne réponse ! Mot mémorisé.';
    renderDictationProgress();
    document.querySelectorAll('.grammar-btn').forEach(button => button.disabled = true);
    document.getElementById('dictee-next-word').classList.remove('hidden');
  } else {
    // Mauvaise nature — petite animation sans bloquer
    playTone(200, .2);
    document.querySelectorAll('.grammar-btn').forEach(b=>{
      b.classList.add('animate-shake');
      setTimeout(()=>b.classList.remove('animate-shake'), 400);
    });
    document.getElementById('dictee-nature-feedback').className = 'min-h-[2rem] text-sm font-bold text-rose-600';
    document.getElementById('dictee-nature-feedback').textContent = '❌ Ce n’est pas la bonne nature. Réessaie !';
  }
}

function renderDictationProgress() {
  const box = document.getElementById('dictee-session-progress');
  if (!box || !curWeek) return;
  const p = getProfile();
  const learned = curWeek.words.filter(word => (p.dicteeStats[word.word] || 0) >= 3);
  const learning = curWeek.words.filter(word => { const score = p.dicteeStats[word.word] || 0; return (score > 0 && score < 3) || (!score && p.dicteeWritten[word.word]); });
  const fresh = curWeek.words.filter(word => !(p.dicteeStats[word.word] || 0) && !p.dicteeWritten[word.word]);
  const chips = (words, cls) => words.map(word => `<span class="${cls} inline-flex items-center rounded-full px-2 py-1 text-[11px] font-bold">${word.word}</span>`).join('') || '<span class="text-xs text-slate-400">Aucun mot dans cette catégorie</span>';
  box.innerHTML = `<div class="flex items-center justify-between mb-3"><h3 class="font-bold text-slate-700">📊 Où j’en suis</h3><span class="text-xs font-bold text-indigo-600">${learned.length}/${curWeek.words.length} maîtrisés</span></div><div class="space-y-3"><div><p class="text-[11px] font-bold text-emerald-600 mb-1">✅ Acquis (${learned.length})</p><div class="flex flex-wrap gap-1">${chips(learned,'bg-emerald-100 text-emerald-800')}</div></div><div><p class="text-[11px] font-bold text-amber-600 mb-1">⏳ En cours (${learning.length})</p><div class="flex flex-wrap gap-1">${chips(learning,'bg-amber-100 text-amber-800')}</div></div><div><p class="text-[11px] font-bold text-slate-500 mb-1">🆕 À découvrir (${fresh.length})</p><div class="flex flex-wrap gap-1">${chips(fresh,'bg-slate-100 text-slate-600')}</div></div></div>`;
}

function advanceToNextWord() {
  wordIdx++;
  if (wordIdx < sessionWords.length) return launchWordCycle();
  const p = getProfile();
  const allDone = curWeek.words.every(w => (p.dicteeStats[w.word] || 0) >= 3);
  if (allDone) awardBadge(`week_${curWeek.id}`, `Expert : ${curWeek.title} ${curWeek.icon}`, `Tous les mots de « ${curWeek.title} » sont maîtrisés !`, 'dictee');
  else showCelebration('✍️', 'Série terminée !', 'Bien joué ! Continue de t’entraîner pour maîtriser tous les mots.', null);
  exitDicteeGame();
}

// ═══════════════════════════════════════════════════════════════
//  ████ FLUENCE ████
// ═══════════════════════════════════════════════════════════════
