let curWeek=null, sessionWords=[], wordIdx=0, mistakes=0;
let motusWeek=null, motusPool=[], motusTarget=null, motusAttempts=0, motusFinished=false, motusCurrentGuess='';
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
          <button onclick="startMotus('${w.id}')"
                  class="bg-rose-100 text-rose-700 font-bold py-2 px-3 rounded-xl text-xs border border-rose-200 transition active:scale-95">
            🎯 Motus
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
  document.getElementById('motus-game-container')?.classList.add('hidden');
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
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  document.getElementById('dictee-game-container').classList.add('hidden');
  document.getElementById('motus-game-container')?.classList.add('hidden');
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
  document.getElementById('motus-game-container')?.classList.add('hidden');
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
  const current = sessionWords[wordIdx];
  if (!current || !('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) return;
  const synth = window.speechSynthesis;
  synth.cancel();
  const utterance = new SpeechSynthesisUtterance(current.word);
  utterance.lang = 'fr-FR';
  utterance.rate = 0.9;
  const frenchVoice = synth.getVoices().find(voice => voice.lang?.toLowerCase().startsWith('fr'));
  if (frenchVoice) utterance.voice = frenchVoice;
  synth.resume();
  synth.speak(utterance);
}

function showInputPhase() {
  document.getElementById('dictee-step-memo').classList.add('hidden');
  document.getElementById('dictee-step-input').classList.remove('hidden');
  document.getElementById('dictee-session-progress').classList.add('hidden');

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
  document.getElementById('dictee-session-progress').classList.remove('hidden');
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


// ═══════════════════════════════════════════════════════════════
//  ████ MOTUS DES MOTS DE DICTÉE ████
// ═══════════════════════════════════════════════════════════════

function motusNormalize(value) {
  return String(value || '').trim().toLocaleLowerCase('fr-FR').replace(/[’]/g, "'").replace(/^(l'|le |la |les |un |une |des |du |de |d')/i, '').replace(/[^a-zà-ÿ]/gi, '');
}

function motusEscape(value) {
  return String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[character]));
}

/* Compare les lettres comme dans Motus : vert = bien placé, jaune = présent ailleurs. */
function evaluateMotusGuess(guess, target) {
  const result = Array.from(guess, (character, index) => ({ character, status: 'wrong', index }));
  const remaining = {};
  const isLetter = character => /[a-zà-ÿ]/i.test(character);
  Array.from(target).forEach((character, index) => {
    if (isLetter(character) && character !== ' ') remaining[character] = (remaining[character] || 0) + 1;
    if (!isLetter(character) && guess[index] === character) result[index].status = 'fixed';
  });
  result.forEach((cell, index) => {
    if (cell.status === 'fixed') return;
    const expected = target[index];
    if (cell.character === expected && isLetter(cell.character)) {
      cell.status = 'correct';
      remaining[cell.character] = Math.max(0, (remaining[cell.character] || 0) - 1);
    }
  });
  result.forEach(cell => {
    if (cell.status !== 'wrong' || !isLetter(cell.character)) return;
    if ((remaining[cell.character] || 0) > 0) {
      cell.status = 'present';
      remaining[cell.character]--;
    }
  });
  return result;
}

function startMotus(weekId) {
  const week = DICTEE_WEEKS.find(item => item.id === weekId);
  if (!week) return;
  setGameActive('dictees');
  motusWeek = week;
  motusPool = [...week.words].sort(() => Math.random() - 0.5);
  document.getElementById('dictee-weeks-list').classList.add('hidden');
  document.getElementById('dictee-game-container').classList.add('hidden');
  hideOrthoExercise();
  const box = document.getElementById('motus-game-container');
  box.classList.remove('hidden');
  motusNextWord();
  box.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function motusNextWord() {
  if (!motusPool.length) return finishMotus();
  motusTarget = motusPool.shift();
  motusAttempts = 0;
  motusFinished = false;
  renderMotus();
}

function renderMotus() {
  const box = document.getElementById('motus-game-container');
  const target = motusNormalize(motusTarget.word);
  const firstLetter = Array.from(target)[0] || '';
  motusCurrentGuess = firstLetter;
  box.innerHTML = `
    <div class="flex justify-between items-center gap-3">
      <button type="button" onclick="exitMotusGame()" class="text-slate-400 hover:text-slate-700 text-xl font-bold" aria-label="Fermer Motus">✕</button>
      <span class="text-xs font-bold bg-rose-100 text-rose-700 px-3 py-1.5 rounded-full">🎯 Motus</span>
    </div>
    <div class="text-center">
      <div class="text-xs font-bold text-rose-600">${motusWeek.icon} ${motusWeek.title}</div>
      <h3 class="text-2xl font-bold text-slate-800 font-heading mt-1">Trouve le mot !</h3>
      <p class="text-sm text-slate-500 mt-1">Mot ${motusWeek.words.length - motusPool.length}/${motusWeek.words.length} · ${target.length} lettres · 6 essais maximum</p>
    </div>
    <div class="bg-rose-50 border border-rose-200 rounded-2xl p-3 text-sm text-rose-900">
      La première lettre est donnée. <strong class="text-lg">${motusEscape(firstLetter.toLocaleUpperCase('fr-FR'))}</strong>
      <div class="flex flex-wrap gap-2 justify-center mt-2 text-xs font-bold"><span class="motus-legend motus-correct">Bien placée</span><span class="motus-legend motus-present">Présente mais mal placée</span></div>
    </div>
    <div id="motus-history" class="space-y-2 min-h-16" aria-live="polite"></div>
    <form onsubmit="submitMotusGuess(event)" class="space-y-2">
      <label for="motus-input" class="sr-only">Écris ta proposition</label>
      <div id="motus-input-grid" class="motus-input-grid" role="group" aria-label="Proposition lettre par lettre"></div>
      <input id="motus-input" type="text" autocomplete="off" spellcheck="false" maxlength="${target.length}" class="sr-only" aria-hidden="true">
      <button id="motus-submit" type="submit" class="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 rounded-xl">Proposer</button>
    </form>
    <div id="motus-feedback" class="min-h-8 text-sm font-bold" aria-live="polite"></div>
    <button id="motus-next" type="button" onclick="motusNextWord()" class="hidden w-full bg-indigo-600 text-white font-bold py-3 rounded-xl">Mot suivant ➡️</button>`;
  document.getElementById('motus-input').addEventListener('input', updateMotusInput);
  renderMotusInputGrid();
}

function renderMotusInputGrid() {
  const grid = document.getElementById('motus-input-grid');
  if (!grid) return;
  grid.innerHTML = '';
  Array.from(motusNormalize(motusTarget.word)).forEach((character, index) => {
    const cell = document.createElement('button');
    cell.type = 'button';
    cell.className = `motus-input-cell ${index === 0 ? 'motus-input-fixed' : ''}`;
    cell.textContent = motusCurrentGuess[index]?.toLocaleUpperCase('fr-FR') || '';
    cell.disabled = index === 0;
    cell.onclick = () => focusMotusKeyboard();
    grid.appendChild(cell);
  });
  const input = document.getElementById('motus-input');
  input.value = motusCurrentGuess;
  focusMotusKeyboard();
}

function focusMotusKeyboard() {
  document.getElementById('motus-input')?.focus();
}

function updateMotusInput(event) {
  const target = motusNormalize(motusTarget.word);
  const typed = motusNormalize(event.target.value).slice(1, target.length);
  motusCurrentGuess = (Array.from(target)[0] || '') + typed;
  event.target.value = motusCurrentGuess;
  renderMotusInputGrid();
}

function renderMotusRow(guess, evaluation) {
  const row = document.createElement('div');
  row.className = 'motus-row';
  Array.from(guess).forEach((character, index) => {
    const cell = document.createElement('span');
    cell.className = `motus-cell motus-${evaluation[index]?.status || 'wrong'}`;
    cell.textContent = character === ' ' ? '·' : character.toLocaleUpperCase('fr-FR');
    cell.setAttribute('aria-label', evaluation[index]?.status || 'absente');
    row.appendChild(cell);
  });
  document.getElementById('motus-history').appendChild(row);
}

function submitMotusGuess(event) {
  event.preventDefault();
  if (motusFinished) return;
  const input = document.getElementById('motus-input');
  const guess = motusNormalize(input.value);
  const target = motusNormalize(motusTarget.word);
  const feedback = document.getElementById('motus-feedback');
  if (!guess) return;
  if (Array.from(guess).length !== Array.from(target).length) {
    feedback.className = 'min-h-8 text-sm font-bold text-amber-600';
    feedback.textContent = `Ton essai doit comporter ${Array.from(target).length} caractères, espaces compris.`;
    return;
  }
  motusAttempts++;
  const evaluation = evaluateMotusGuess(guess, target);
  renderMotusRow(guess, evaluation);
  input.value = '';
  motusCurrentGuess = Array.from(target)[0] || '';
  renderMotusInputGrid();
  if (guess === target) {
    motusFinished = true;
    const profile = getProfile();
    const earned = motusAttempts === 1 ? 20 : motusAttempts <= 3 ? 15 : 10;
    profile.points += earned;
    dailyRecord('dictees', earned);
    saveData();
    feedback.className = 'min-h-8 text-sm font-bold text-emerald-600';
    feedback.textContent = `🎉 Bravo ! Mot trouvé en ${motusAttempts} essai${motusAttempts > 1 ? 's' : ''} (+${earned} points).`;
    document.getElementById('motus-submit').disabled = true;
    document.getElementById('motus-next').classList.remove('hidden');
  } else if (motusAttempts >= 6) {
    motusFinished = true;
    feedback.className = 'min-h-8 text-sm font-bold text-rose-600';
    feedback.textContent = `Le mot était « ${motusTarget.word} ». On continue avec un autre mot !`;
    document.getElementById('motus-submit').disabled = true;
    document.getElementById('motus-next').classList.remove('hidden');
  } else {
    feedback.className = 'min-h-8 text-sm font-bold text-slate-500';
    feedback.textContent = `Encore ${6 - motusAttempts} essai${6 - motusAttempts > 1 ? 's' : ''}.`;
    input.focus();
  }
}

function finishMotus() {
  const feedback = document.getElementById('motus-feedback');
  if (feedback) feedback.textContent = '🌟 Tous les mots de cette dictée ont été proposés !';
  const next = document.getElementById('motus-next');
  if (next) next.classList.add('hidden');
  showCelebration('🎯', 'Partie de Motus terminée !', `Tu as joué avec les ${motusWeek.words.length} mots de « ${motusWeek.title} ».`, null);
}

function exitMotusGame() {
  setGameActive(null);
  document.getElementById('motus-game-container').classList.add('hidden');
  document.getElementById('dictee-weeks-list').classList.remove('hidden');
  renderDicteeList();
}
