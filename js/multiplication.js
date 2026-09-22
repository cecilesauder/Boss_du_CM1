// ═══════════════════════════════════════════════════════════════
//  ████ MATHS — MULTIPLICATIONS ████
// ═══════════════════════════════════════════════════════════════
let curTable = 7, curFact = null, qStart = 0, isMixedMode = false, mathAnswered = false;
let selectedTables = new Set([7]);

// Clin d’œil « six seven » : l’animation reste très courte et ne capture
// aucun clic grâce à pointer-events:none dans la feuille de styles.
function triggerSixSevenShake() {
  const quiz = document.getElementById('math-quiz-container');
  if (!quiz) return;
  quiz.classList.remove('math-shake');
  void quiz.offsetWidth;
  quiz.classList.add('math-shake');
  window.setTimeout(() => quiz.classList.remove('math-shake'), 280);
}

function showMathRewardGif() {
  const reward = document.getElementById('math-reward-gif');
  if (reward) {
    reward.classList.remove('hidden');
    window.clearTimeout(window.mathRewardTimer);
    window.mathRewardTimer = window.setTimeout(() => reward.classList.add('hidden'), 1150);
  }
}

function isFactMastered(table, factor) {
  let p = getProfile();
  return (p.mathStats[`${table}x${factor}`] || {fastCount:0}).fastCount >= 3;
}

function allTablesProgress() {
  let p = getProfile(), total = 0;
  for (let table = 1; table <= 10; table++) {
    for (let factor = 1; factor <= 10; factor++) {
      total += Math.min(3, (p.mathStats[`${table}x${factor}`] || {fastCount:0}).fastCount);
    }
  }
  return Math.round(total / 300 * 100);
}

function areAllTablesMastered() {
  for (let table = 1; table <= 10; table++) if (!isTableMastered(table)) return false;
  return true;
}

function generateMathTableButtons() {
  const c = document.getElementById('math-table-selector');
  if (!c) return;
  c.innerHTML = '';

  const controls = document.createElement('div');
  controls.className = 'col-span-5 flex items-center justify-between gap-2 bg-indigo-50 border border-indigo-200 rounded-2xl p-3';
  controls.innerHTML = `<div class="text-left"><span class="block text-base font-heading text-indigo-800">🎲 Choisis tes tables</span><span class="block text-[10px] text-indigo-600">${selectedTables.size}/10 sélectionnées</span></div><div class="flex gap-2"><button type="button" class="math-select-all bg-white border border-indigo-300 text-indigo-700 rounded-xl px-2 py-1 text-[11px] font-bold">Tout sélectionner</button><button type="button" class="math-select-none bg-white border border-indigo-300 text-indigo-700 rounded-xl px-2 py-1 text-[11px] font-bold">Tout désélectionner</button></div>`;
  controls.querySelector('.math-select-all').onclick = () => { selectedTables = new Set(Array.from({length:10}, (_,i)=>i+1)); generateMathTableButtons(); };
  controls.querySelector('.math-select-none').onclick = () => { selectedTables.clear(); generateMathTableButtons(); };
  c.appendChild(controls);

  for (let i = 1; i <= 10; i++) {
    let mastered = isTableMastered(i);
    let pct = tableProgress(i);
    let b = document.createElement('button');
    const checked = selectedTables.has(i);
    b.className = `p-2 rounded-2xl font-bold flex flex-col items-center justify-center gap-0.5 transition active:scale-95 border-2 ${checked ? 'bg-indigo-50 border-indigo-400 text-indigo-700' : mastered ? 'bg-emerald-50 border-emerald-400 text-emerald-700' : 'bg-white border-slate-200 text-slate-700 hover:border-indigo-300'}`;
    b.setAttribute('aria-pressed', checked ? 'true' : 'false');
    b.onclick = () => toggleTableSelection(i);
    b.innerHTML = `<span class="text-[9px] text-slate-400">${checked ? '✓ Choisie' : 'Table'}</span><span class="text-xl font-heading font-extrabold">${i}</span><span class="text-[9px]">${mastered ? '⚡ OK' : pct + '%'}</span>`;
    c.appendChild(b);
  }

  const launch = document.createElement('button');
  launch.type = 'button';
  launch.className = 'col-span-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-2xl transition active:scale-95 disabled:bg-slate-300 disabled:cursor-not-allowed';
  launch.disabled = selectedTables.size === 0;
  launch.textContent = selectedTables.size ? `🚀 Commencer avec ${selectedTables.size} table${selectedTables.size > 1 ? 's' : ''}` : 'Choisis au moins une table';
  launch.onclick = openSelectedTablesQuiz;
  c.appendChild(launch);
}

function tableProgress(t) {
  let p = getProfile(), total = 0;
  for (let factor = 1; factor <= 10; factor++) total += Math.min(3, (p.mathStats[`${t}x${factor}`] || {fastCount:0}).fastCount);
  return Math.round(total / 30 * 100);
}

function isTableMastered(t) {
  let p = getProfile();
  for (let factor = 1; factor <= 10; factor++) if ((p.mathStats[`${t}x${factor}`] || {fastCount:0}).fastCount < 3) return false;
  return true;
}

function openMathQuiz() {
  setGameActive('maths');
  document.getElementById('math-quiz-container').classList.remove('hidden');
  renderMasteryGrid();
  nextQuestion();
}

function selectTable(t) {
  selectedTables = new Set([t]);
  openSelectedTablesQuiz();
}

function selectAllTables() {
  selectedTables = new Set(Array.from({length:10}, (_,i)=>i+1));
  openSelectedTablesQuiz();
}

function toggleTableSelection(table) {
  if (selectedTables.has(table)) selectedTables.delete(table);
  else selectedTables.add(table);
  generateMathTableButtons();
}

function openSelectedTablesQuiz() {
  if (!selectedTables.size) return;
  isMixedMode = selectedTables.size > 1;
  curTable = [...selectedTables][0];
  document.getElementById('mastery-table-num').textContent = selectedTables.size > 1 ? 'sélectionnées' : `de ${curTable}`;
  generateMathTableButtons();
  openMathQuiz();
}

function closeMathQuiz() {
  setGameActive(null);
  mathAnswered = true;
  document.getElementById('math-quiz-container').classList.add('hidden');
}

function chooseFact() {
  const needsPractice = [];
  const tables = selectedTables.size ? [...selectedTables] : [curTable];
  for (const a of tables) {
    for (let b = 1; b <= 10; b++) if (!isFactMastered(a, b)) needsPractice.push({a, b});
  }
  if (needsPractice.length) return needsPractice[Math.floor(Math.random() * needsPractice.length)];
  return null;
}

function nextQuestion() {
  if (document.getElementById('math-quiz-container').classList.contains('hidden')) return;
  mathAnswered = false;
  const fact = chooseFact();
  if (!fact) {
    curFact = null;
    mathAnswered = true;
    document.getElementById('math-question').textContent = '🎉 Toutes les multiplications choisies sont acquises !';
    document.getElementById('math-options').innerHTML = '';
    document.getElementById('speed-feedback').textContent = 'Choisis d’autres tables pour continuer à t’entraîner.';
    document.getElementById('speed-feedback').className = 'text-sm font-bold text-emerald-600 min-h-[1.5rem]';
    return;
  }
  const {a, b} = fact;
  const ans = a * b;
  curFact = { a, b, ans, key:`${a}x${b}` };
  document.getElementById('quiz-table-title').textContent = isMixedMode ? 'Tables sélectionnées 🎲' : `Table de ${a}`;
  document.getElementById('math-question').textContent = `${a} × ${b} = ?`;
  if ((a === 6 && b === 7) || (a === 7 && b === 6)) triggerSixSevenShake();
  document.getElementById('speed-feedback').textContent = isMixedMode ? 'Un calcul parmi tes tables : à toi de jouer ! ⚡' : 'Réponds vite ! ⚡';
  document.getElementById('speed-feedback').className = 'text-sm font-bold text-slate-400 min-h-[1.5rem]';

  let p = getProfile(), stat = p.mathStats[curFact.key] || {fastCount:0,bestTime:null};
  document.getElementById('fact-status').textContent = `${stat.fastCount}/3 en <${SPEED_MS/1000}s`;
  document.getElementById('fact-progress-bar').style.width = `${Math.min(100, stat.fastCount / 3 * 100)}%`;
  document.getElementById('best-time-display').textContent = stat.bestTime ? `🏆 ${(stat.bestTime/1000).toFixed(2)}s` : '';

  let choices = [ans];
  for (let tries = 0; choices.length < 4 && tries < 60; tries++) {
    let fake = ans + (Math.floor(Math.random() * 5) - 2) * a;
    if (fake > 0 && !choices.includes(fake)) choices.push(fake);
  }
  while (choices.length < 4) choices.push(ans + choices.length * a);
  choices.sort(() => Math.random() - .5);

  let oc = document.getElementById('math-options');
  oc.innerHTML = '';
  choices.forEach(value => {
    let btn = document.createElement('button');
    btn.className = 'bg-slate-100 hover:bg-indigo-50 border-2 border-slate-200 hover:border-indigo-400 font-extrabold text-3xl py-3 rounded-2xl text-slate-800 transition active:scale-95 font-heading';
    btn.textContent = value;
    btn.onclick = () => handleMathAnswer(value);
    oc.appendChild(btn);
  });
  qStart = performance.now();
}

function handleMathAnswer(value) {
  if (mathAnswered || !curFact) return;
  mathAnswered = true;
  const elapsed = performance.now() - qStart;
  let p = getProfile(), key = curFact.key;
  if (!p.mathStats[key]) p.mathStats[key] = {fastCount:0, totalCorrect:0, bestTime:null, times:[]};
  let stat = p.mathStats[key];
  document.querySelectorAll('#math-options button').forEach(button => button.disabled = true);

  if (value === curFact.ans) {
    playTone(600, .12);
    const isSixSeven = (curFact.a === 6 && curFact.b === 7) || (curFact.a === 7 && curFact.b === 6);
    if (isSixSeven && elapsed <= SPEED_MS) showMathRewardGif();
    stat.totalCorrect++;
    stat.times.push(Math.round(elapsed));
    if (stat.times.length > 10) stat.times.shift();
    if (!stat.bestTime || elapsed < stat.bestTime) stat.bestTime = Math.round(elapsed);

    if (elapsed <= SPEED_MS) {
      stat.fastCount = Math.min(3, stat.fastCount + 1);
      p.points += 15;
      dailyRecord('maths', 15);
      document.getElementById('speed-feedback').textContent = `⚡ SUPER RAPIDE ! (${(elapsed/1000).toFixed(2)}s) +15 pts`;
      document.getElementById('speed-feedback').className = 'text-sm font-extrabold text-emerald-500 animate-pulse-fast min-h-[1.5rem]';
    } else {
      p.points += 5;
      dailyRecord('maths', 5);
      document.getElementById('speed-feedback').textContent = `✅ Correct ! Plus vite la prochaine fois (${(elapsed/1000).toFixed(2)}s)`;
      document.getElementById('speed-feedback').className = 'text-sm font-bold text-amber-500 min-h-[1.5rem]';
    }

    saveData();
    renderMasteryGrid();
    generateMathTableButtons();
    if (!isMixedMode && isTableMastered(curTable)) {
      awardBadge(`table_${curTable}`, `Maître du ${curTable} ⚡`, `Table de ${curTable} validée en moins de ${SPEED_MS/1000}s !`, 'maths');
    }
    if (isTableMastered(6) && isTableMastered(7)) {
      awardBadge('tables_6_7', 'Duo 6 × 7 🤖', 'Les tables de 6 et de 7 sont toutes les deux maîtrisées !', 'maths');
    }
    if (isMixedMode && areAllTablesMastered()) {
      awardBadge('tables_all', 'Super maître des tables 🎲', 'Toutes les tables de 1 à 10 sont validées !', 'maths');
    }
    setTimeout(nextQuestion, 1200);
  } else {
    playTone(200, .2);
    document.getElementById('speed-feedback').textContent = `❌ Erreur ! La réponse était ${curFact.ans}`;
    document.getElementById('speed-feedback').className = 'text-sm font-bold text-rose-500 animate-shake min-h-[1.5rem]';
    saveData();
    setTimeout(nextQuestion, 1600);
  }
}

function renderMasteryGrid() {
  const c = document.getElementById('mastery-items');
  if (!c) return;
  c.innerHTML = '';
  let p = getProfile();

  if (isMixedMode) {
    for (let table = 1; table <= 10; table++) {
      const pct = tableProgress(table);
      const mastered = isTableMastered(table);
      const d = document.createElement('div');
      d.className = `p-2 rounded-xl border ${mastered ? 'bg-emerald-50 border-emerald-300' : 'bg-slate-50 border-slate-200'}`;
      d.innerHTML = `<div class="flex justify-between items-center"><span class="font-bold text-xs ${mastered ? 'text-emerald-800' : 'text-slate-600'}">Table de ${table}</span><span class="font-bold text-xs ${mastered ? 'text-emerald-600' : 'text-indigo-500'}">${mastered ? '⚡ OK' : pct + '%'}</span></div><div class="w-full h-1.5 bg-slate-200 rounded-full mt-1.5 overflow-hidden"><div class="h-full rounded-full ${mastered ? 'bg-emerald-500' : 'bg-indigo-400'}" style="width:${pct}%"></div></div>`;
      c.appendChild(d);
    }
    return;
  }

  for (let factor = 1; factor <= 10; factor++) {
    let key = `${curTable}x${factor}`, stat = p.mathStats[key] || {fastCount:0,bestTime:null};
    let done = stat.fastCount >= 3;
    let d = document.createElement('div');
    d.className = `p-2 rounded-xl border flex justify-between items-center ${done ? 'bg-emerald-50 border-emerald-300' : 'bg-slate-50 border-slate-200'}`;
    d.innerHTML = `<span class="font-bold text-xs ${done ? 'text-emerald-800' : 'text-slate-500'}">${curTable} × ${factor} = <b>${curTable * factor}</b></span><div class="text-right"><div class="font-bold text-xs ${done ? 'text-emerald-600' : 'text-slate-400'}">${done ? '⚡ 3/3' : stat.fastCount + '/3'}</div><div class="text-[9px] text-slate-300">${stat.bestTime ? (stat.bestTime/1000).toFixed(1) + 's' : '—'}</div></div>`;
    c.appendChild(d);
  }
}
