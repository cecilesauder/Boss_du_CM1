/*
 * Module Histoire-Géographie CM1.
 * Tout est local : progression, réponses et points restent dans le profil.
 * Les interactions sont volontairement simples et utilisables au doigt :
 * on choisit une étiquette puis on touche la zone du château.
 */

let hgRoleIndex = 0;
let hgCastleState = {};
let hgTimelineSelection = 'moyen-age';

function initHistoireGeographie() {
  renderHGTimeline();
  renderHGTopics();
  renderHGRoles();
  renderHGCastle();
  renderHGGeography();
}

function switchHGView(view) {
  ['timeline','roles','castle','geography'].forEach(id => document.getElementById(`hg-panel-${id}`)?.classList.add('hidden'));
  document.getElementById(`hg-panel-${view}`)?.classList.remove('hidden');
  document.querySelectorAll('.hg-tab').forEach(btn => btn.classList.toggle('active', btn.dataset.hgView === view));
  if (view === 'timeline') renderHGTimeline();
  if (view === 'roles') renderHGRoles();
  if (view === 'castle') renderHGCastle();
}

function renderHGTimeline() {
  const line = document.getElementById('hg-timeline');
  const detail = document.getElementById('hg-period-detail');
  if (!line || !detail) return;
  line.innerHTML = HG_PERIODS.map(period => `<button type="button" class="hg-period ${period.id === hgTimelineSelection ? 'selected' : ''}" style="--period-color:${period.color}" onclick="selectHGPeriod('${period.id}')"><strong>${period.label}</strong><span>${period.dates}</span></button>`).join('');
  const selected = HG_PERIODS.find(period => period.id === hgTimelineSelection) || HG_PERIODS[2];
  detail.innerHTML = `<div class="flex items-start gap-3"><div class="text-3xl">${selected.id === 'moyen-age' ? '🏰' : selected.id === 'temps-modernes' ? '👑' : selected.id === 'contemporaine' ? '🗝️' : '🪨'}</div><div><h3 class="font-bold text-slate-800">${selected.label}</h3><p class="text-sm text-slate-600 mt-1">${selected.note}</p></div></div>`;
}

function selectHGPeriod(id) { hgTimelineSelection = id; renderHGTimeline(); }

function renderHGTopics() {
  const box = document.getElementById('hg-history-topics');
  if (!box) return;
  box.innerHTML = HG_HISTORY_TOPICS.map(topic => `<article class="hg-topic-card"><div class="text-3xl">${topic.icon}</div><div><h3 class="font-bold text-slate-800">${topic.title}</h3><p class="text-xs font-bold text-indigo-600">${topic.period}</p><p class="text-sm text-slate-600 mt-1">${topic.summary}</p><div class="flex flex-wrap gap-1 mt-2">${topic.keywords.map(word => `<span class="hg-keyword">${word}</span>`).join('')}</div></div></article>`).join('');
}

function renderHGRoles() {
  const role = HG_ROLE_CARDS[hgRoleIndex];
  const box = document.getElementById('hg-role-card');
  if (!box) return;
  box.innerHTML = `<div class="flex items-center justify-between"><span class="text-xs font-bold text-violet-600">Rôle ${hgRoleIndex + 1}/${HG_ROLE_CARDS.length}</span><span class="text-3xl">${role.icon}</span></div><h3 class="text-xl font-bold text-slate-800 mt-2">${role.title}</h3><p class="text-sm text-slate-600 mt-1">${role.description}</p><div class="mt-4 bg-violet-50 border border-violet-200 rounded-2xl p-4"><p class="font-bold text-slate-800">${role.question}</p><div class="grid gap-2 mt-3">${role.options.map((option, index) => `<button type="button" class="hg-role-option" onclick="answerHGRole(${index})">${option}</button>`).join('')}</div><div id="hg-role-feedback" class="min-h-12 mt-3 text-sm font-bold"></div></div>`;
}

function answerHGRole(index) {
  const role = HG_ROLE_CARDS[hgRoleIndex];
  const feedback = document.getElementById('hg-role-feedback');
  const options = document.querySelectorAll('.hg-role-option');
  options.forEach(button => button.disabled = true);
  if (index === role.answer) {
    feedback.className = 'min-h-12 mt-3 text-sm font-bold text-emerald-600';
    feedback.innerHTML = `✅ Bonne réponse.<br><span class="font-normal text-slate-600">${role.explanation}</span><button type="button" class="hg-next-button" onclick="nextHGRole()">Rôle suivant ➡️</button>`;
    recordHGPoint('roles');
  } else {
    feedback.className = 'min-h-12 mt-3 text-sm font-bold text-rose-600';
    feedback.innerHTML = `❌ Ce n’est pas la meilleure réponse. Relis la question et réessaie.`;
    options.forEach((button, buttonIndex) => { if (buttonIndex !== index) button.disabled = false; });
  }
}

function nextHGRole() { hgRoleIndex = (hgRoleIndex + 1) % HG_ROLE_CARDS.length; renderHGRoles(); }

function renderHGCastle() {
  const labels = document.getElementById('hg-castle-labels');
  const zones = document.getElementById('hg-castle-zones');
  if (!labels || !zones) return;
  labels.innerHTML = HG_CASTLE_ZONES.map(zone => `<button type="button" class="hg-label ${hgCastleState[zone.id] === 'placed' ? 'placed' : ''}" onclick="selectHGCastleLabel('${zone.id}')" data-castle-label="${zone.id}">${zone.label}</button>`).join('');
  zones.innerHTML = HG_CASTLE_ZONES.map(zone => `<button type="button" class="hg-castle-zone ${hgCastleState[zone.id] === 'correct' ? 'correct' : ''}" onclick="placeHGCastleLabel('${zone.id}')"><span>${hgCastleState[zone.id] === 'correct' ? '✅ ' : '⬜ '}${zone.label}</span><small>${hgCastleState[zone.id] === 'correct' ? zone.description : 'Choisis une étiquette puis touche cette zone.'}</small></button>`).join('');
  const mastered = HG_CASTLE_ZONES.filter(zone => hgCastleState[zone.id] === 'correct').length;
  document.getElementById('hg-castle-progress').textContent = `${mastered}/${HG_CASTLE_ZONES.length} éléments correctement replacés`;
  if (mastered === HG_CASTLE_ZONES.length) document.getElementById('hg-castle-feedback').innerHTML = '🎉 Bravo, tu connais le vocabulaire du château fort !';
}

function selectHGCastleLabel(id) {
  if (hgCastleState[id] === 'correct') return;
  document.querySelectorAll('.hg-label').forEach(label => label.classList.remove('selected'));
  document.querySelector(`[data-castle-label="${id}"]`)?.classList.add('selected');
  hgCastleState.selected = id;
}

function placeHGCastleLabel(zoneId) {
  const selected = hgCastleState.selected;
  if (!selected || hgCastleState[zoneId] === 'correct') return;
  const feedback = document.getElementById('hg-castle-feedback');
  if (selected === zoneId) {
    hgCastleState[zoneId] = 'correct';
    delete hgCastleState.selected;
    recordHGPoint('castle');
    feedback.className = 'min-h-8 text-sm font-bold text-emerald-600';
    feedback.textContent = '✅ Bien placé !';
  } else {
    feedback.className = 'min-h-8 text-sm font-bold text-rose-600';
    feedback.textContent = '❌ Cette étiquette ne correspond pas à cette zone. Essaie encore.';
  }
  renderHGCastle();
}

function resetHGCastle() { hgCastleState = {}; renderHGCastle(); document.getElementById('hg-castle-feedback').textContent = ''; }

function renderHGGeography() {
  const box = document.getElementById('hg-geography-topics');
  if (!box) return;
  box.innerHTML = HG_GEOGRAPHY_TOPICS.map(topic => `<article class="hg-geo-card"><span class="text-3xl">${topic.icon}</span><div><h3 class="font-bold text-slate-800">${topic.title}</h3><p class="text-sm text-slate-600 mt-1">${topic.text}</p></div></article>`).join('');
}

function recordHGPoint(activity) {
  const p = getProfile();
  if (!p.hgStats) p.hgStats = { points:0, roles:0, castle:0 };
  p.hgStats.points++;
  p.hgStats[activity] = (p.hgStats[activity] || 0) + 1;
  p.points += 5;
  if (typeof dailyRecord === 'function') dailyRecord('histoire', 5);
  saveData();
}
