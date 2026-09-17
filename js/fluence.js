let curFluence=null, fluTimer=null, fluSec=0;

function renderFluenceList() {
  let c = document.getElementById('fluence-weeks-list');
  c.innerHTML = '';
  let p = getProfile();
  FLUENCE_WEEKS.forEach((fw,i) => {
    let sessions = p.fluenceStats[fw.id]||[];
    let last     = sessions.length ? sessions[sessions.length-1] : null;
    let d = document.createElement('div');
    d.className = "bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between";
    d.innerHTML = `
      <div class="flex items-center gap-3 flex-1 min-w-0">
        <div class="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-xl bg-rose-50">${fw.icon}</div>
        <div class="flex-1 min-w-0">
          <div class="font-bold text-slate-800 text-sm font-heading truncate">${fw.title}</div>
          <div class="text-[10px] text-slate-400">${sessions.length} lecture${sessions.length>1?'s':''} enregistrée${sessions.length>1?'s':''}</div>
          ${last ? `<div class="text-[10px] text-rose-600 font-bold">Dernier : ${fmtTime(last.seconds)}${last.wpm?' · '+last.wpm+' m/min':''}</div>` : ''}
        </div>
      </div>
      <button onclick="openFluence('${fw.id}')"
              class="ml-2 bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded-xl text-sm shadow flex-shrink-0 transition active:scale-95">
        📖
      </button>`;
    c.appendChild(d);
  });
}

function openFluence(fid) {
  curFluence = FLUENCE_WEEKS.find(f=>f.id===fid);
  fluSec     = 0;
  document.getElementById('fluence-weeks-list').classList.add('hidden');
  document.getElementById('fluence-game-container').classList.remove('hidden');
  document.getElementById('fluence-theme-badge').textContent     = `Thème ${FLUENCE_WEEKS.indexOf(curFluence)+1}`;
  document.getElementById('fluence-icon-big').textContent        = curFluence.icon;
  document.getElementById('fluence-title-display').textContent   = curFluence.title;
  document.getElementById('fluence-word-count').textContent      = curFluence.wordCount || '?';
  showFluenceState('ready');
  renderFluenceHistory();
}

function showFluenceState(s) {
  ['ready','reading','result'].forEach(n =>
    document.getElementById(`fluence-state-${n}`).classList[n===s?'remove':'add']('hidden')
  );
}

function startFluenceTimer() {
  fluSec = 0;
  // Affichage du texte (grand et lisible)
  let textBox = document.getElementById('fluence-text-display');
  let hasText = curFluence.wordCount > 0 && curFluence.text && !curFluence.text.startsWith('[');
  textBox.innerHTML = hasText
    ? `<p class="text-lg leading-loose">${curFluence.text.replace(/\n/g,'<br>')}</p>`
    : `<p class="text-slate-400 italic text-sm text-center py-8">${curFluence.text}</p><p class="text-center text-xs text-slate-300 mt-2">Ajouter le texte dans le tableau FLUENCE_WEEKS</p>`;
  showFluenceState('reading');
  document.getElementById('fluence-timer-display').textContent = '0:00';
  if (fluTimer) clearInterval(fluTimer);
  fluTimer = setInterval(() => {
    fluSec++;
    let m=Math.floor(fluSec/60), s=fluSec%60;
    document.getElementById('fluence-timer-display').textContent = `${m}:${s.toString().padStart(2,'0')}`;
  }, 1000);
}

function stopFluenceTimer() {
  if (fluTimer) { clearInterval(fluTimer); fluTimer=null; }
  let p   = getProfile();
  let wc  = curFluence.wordCount || 0;
  let wpm = (wc>0 && fluSec>0) ? Math.round(wc/fluSec*60) : 0;

  if (!p.fluenceStats[curFluence.id]) p.fluenceStats[curFluence.id] = [];
  p.fluenceStats[curFluence.id].push({ date:new Date().toLocaleDateString('fr-FR'), seconds:fluSec, wpm });
  if (p.fluenceStats[curFluence.id].length > 10) p.fluenceStats[curFluence.id].shift();
  p.points += 20;
  saveData();

  // Badges fluence
  let total = Object.values(p.fluenceStats).reduce((s,a)=>s+a.length, 0);
  if (total === 1)  awardBadge('flu_1',  'Premier texte lu ! 📖', 'Première lecture fluence réalisée !', 'fluence');
  if (total === 10) awardBadge('flu_10', '10 lectures ! 🔖',       '10 sessions de fluence enregistrées !', 'fluence');
  let allRead = FLUENCE_WEEKS.every(fw=>(p.fluenceStats[fw.id]||[]).length >= 1);
  if (allRead) awardBadge('flu_all', 'Tous les textes lus 📚', 'Les 26 textes fluence ont été lus au moins une fois !', 'fluence');

  document.getElementById('fluence-result-time').textContent = fmtTime(fluSec);
  document.getElementById('fluence-result-wpm').textContent  = wpm > 0 ? `${wpm} mots/min` : '— (texte à renseigner)';
  showFluenceState('result');
  renderProgressChart();
}

function renderFluenceHistory() {
  let p = getProfile(), sessions = p.fluenceStats[curFluence.id]||[];
  let box = document.getElementById('fluence-history-box');
  if (!sessions.length) {
    box.innerHTML = '<p class="text-xs text-slate-400 text-center py-2">Pas encore de lecture pour ce texte.</p>';
    return;
  }
  box.innerHTML = `
    <div class="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-1.5">
      <div class="text-xs font-bold text-slate-400 mb-1">📊 Tes dernières lectures</div>
      ${sessions.slice(-5).reverse().map(s=>`
        <div class="flex justify-between text-xs">
          <span class="text-slate-400">${s.date}</span>
          <span class="font-bold text-slate-700">${fmtTime(s.seconds)}</span>
          <span class="font-bold text-rose-600">${s.wpm>0?s.wpm+' m/min':'—'}</span>
        </div>`).join('')}
    </div>`;
}

function renderProgressChart() {
  let p = getProfile(), sessions = (p.fluenceStats[curFluence.id]||[]).slice(-6);
  let bars = document.getElementById('fluence-chart-bars');
  let labs = document.getElementById('fluence-chart-labels');
  bars.innerHTML = ''; labs.innerHTML = '';
  if (sessions.length < 2) {
    bars.innerHTML = '<p class="text-[10px] text-slate-400 text-center w-full">Lis plusieurs fois pour voir ta progression !</p>';
    return;
  }
  let maxSec = Math.max(...sessions.map(s=>s.seconds));
  sessions.forEach((s,i) => {
    let h   = maxSec > 0 ? Math.round(s.seconds/maxSec*100) : 50;
    let best= s.seconds === Math.min(...sessions.map(x=>x.seconds));
    let bar = document.createElement('div');
    bar.className       = `${best?'bg-emerald-400':i===sessions.length-1?'bg-rose-400':'bg-slate-300'} rounded-t-lg flex-1 transition-all`;
    bar.style.height    = `${h}%`;
    bar.title           = fmtTime(s.seconds);
    bars.appendChild(bar);
    let lbl = document.createElement('span');
    lbl.className       = 'text-[9px] text-slate-400 font-bold flex-1 text-center';
    lbl.textContent     = `L${i+1}`;
    labs.appendChild(lbl);
  });
}

function exitFluenceGame() {
  if (fluTimer) { clearInterval(fluTimer); fluTimer=null; }
  document.getElementById('fluence-game-container').classList.add('hidden');
  document.getElementById('fluence-weeks-list').classList.remove('hidden');
  renderFluenceList();
}

// ═══════════════════════════════════════════════════════════════
//  ████ BADGES & TROPHÉES ████
// ═══════════════════════════════════════════════════════════════

