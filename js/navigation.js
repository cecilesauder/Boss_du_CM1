const ALL_TABS = ['home','maths','dictee','fluence','lessons','poesie','trophies','avatar'];

function switchTab(tabId) {
  if (typeof setGameActive === 'function') setGameActive(null);
  ALL_TABS.forEach(id => {
    document.getElementById(`view-${id}`).classList.add('hidden');
    let btn = document.getElementById(`nav-${id}`);
    if (btn) { btn.classList.remove('text-indigo-600'); btn.classList.add('text-slate-400'); }
  });
  document.getElementById(`view-${tabId}`).classList.remove('hidden');
  let active = document.getElementById(`nav-${tabId}`);
  if (active) { active.classList.add('text-indigo-600'); active.classList.remove('text-slate-400'); }

  if (tabId === 'home')     { updateHeader(); renderRoadmap(); }
  if (tabId === 'maths')    generateMathTableButtons();
  if (tabId === 'dictee')   renderDicteeList();
  if (tabId === 'fluence')  renderFluenceList();
  if (tabId === 'lessons')  { switchLessonCategory(currentLessonCategory || 'grammaire'); }
  if (tabId === 'poesie')   { document.getElementById('poesie-list')?.classList.remove('hidden'); }
  if (tabId === 'trophies') renderBadgesGrid();
  if (tabId === 'avatar')    renderAvatar();
}

// ═══════════════════════════════════════════════════════════════
//  ████ ACCUEIL — ROADMAP 26 SEMAINES ████
// ═══════════════════════════════════════════════════════════════
function renderRoadmap() {
  const c = document.getElementById('weekly-roadmap');
  c.innerHTML = '';
  let p = getProfile();
  DICTEE_WEEKS.forEach(w => {
    let learned = w.words.filter(wd => (p.dicteeStats[wd.word]||0) >= 3).length;
    let pct     = Math.round(learned / w.words.length * 100);
    let done    = learned === w.words.length;
    let d       = document.createElement('div');
    d.className = `bg-white p-3 rounded-2xl border shadow-sm flex items-center justify-between ${done?'border-emerald-300 bg-emerald-50':'border-slate-200'}`;
    d.innerHTML = `
      <div class="flex items-center gap-3 flex-1 min-w-0">
        <div class="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-lg ${done?'bg-emerald-100':'bg-indigo-50'}">${w.icon}</div>
        <div class="flex-1 min-w-0">
          <div class="font-bold text-slate-800 text-sm font-heading truncate">${w.title}</div>
          <div class="text-[10px] text-slate-400">${w.orthoLecon}</div>
          <div class="w-full bg-slate-200 h-1 rounded-full mt-1">
            <div class="bg-indigo-400 h-full rounded-full" style="width:${pct}%"></div>
          </div>
        </div>
      </div>
      <button onclick="switchTab('dictee')" class="ml-2 text-xs bg-indigo-600 text-white font-bold px-3 py-1.5 rounded-xl flex-shrink-0 ${done?'!bg-emerald-500':''}">
        ${done?'✅':'→'}
      </button>`;
    c.appendChild(d);
  });
}

// ═══════════════════════════════════════════════════════════════
//  ████ MATHS — SOUS-VUES (MULTIPLICATIONS / FRACTIONS) ████
// ═══════════════════════════════════════════════════════════════
function switchMathsSubView(view) {
  document.getElementById('maths-multiplications').classList.add('hidden');
  document.getElementById('maths-fractions').classList.add('hidden');
  document.getElementById('maths-geometry').classList.add('hidden');
  ['tab-mult','tab-frac','tab-geo'].forEach(id =>
    document.getElementById(id).className = 'flex-1 py-2 rounded-xl font-bold text-sm text-slate-500 hover:bg-slate-50 transition'
  );
  if (view === 'multiplications') {
    document.getElementById('maths-multiplications').classList.remove('hidden');
    document.getElementById('tab-mult').className = 'flex-1 py-2 rounded-xl font-bold text-sm bg-emerald-500 text-white transition';
    generateMathTableButtons();
  } else if (view === 'fractions') {
    document.getElementById('maths-fractions').classList.remove('hidden');
    document.getElementById('tab-frac').className = 'flex-1 py-2 rounded-xl font-bold text-sm bg-amber-500 text-white transition';
    initFractionScore();
    generateFractionQuestion();
  } else {
    document.getElementById('maths-geometry').classList.remove('hidden');
    document.getElementById('tab-geo').className = 'flex-1 py-2 rounded-xl font-bold text-sm bg-indigo-500 text-white transition';
    initGeometry();
  }
}

// ═══════════════════════════════════════════════════════════════
//  ████ MATHS — MULTIPLICATIONS ████
// ═══════════════════════════════════════════════════════════════
