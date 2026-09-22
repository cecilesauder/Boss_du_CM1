const AVATARS         = ["🦊","🦁","🐼","🦄","🤖","🚀","🐱","🐶","🐸","🐨","🦋","🐯"];
const SPEED_MS        = 2000; // seuil de vitesse pour valider une multiplication (2 secondes)
const STORAGE_KEY     = "cm1AppDataV3"; // clé localStorage (V3 pour éviter conflits avec l'ancien code)

// ═══════════════════════════════════════════════════════════════
//  ████ PROFILS & STOCKAGE LOCAL ████
// ═══════════════════════════════════════════════════════════════
let appData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
  activeProfileId: "p1",
  profiles: [{
    id: "p1", name: "Élève CM1", avatar: "🦊",
    avatarData: {skin:'#F2C6A0',height:100,width:100,face:'smile',hair:'short',hairColor:'#3B2416',top:'tshirt',topColor:'#60A5FA',bottom:'shorts',bottomColor:'#34D399',shoes:'sneakers',shoesColor:'#334155',hat:'none',owned:['face-smile','hair-short','hair-bob','top-tshirt','bottom-shorts','shoes-sneakers','hat-none']},
    totalSeconds: 0, points: 0,
    streak: 0, lastVisitDate: null,
    mathStats:     {},  // { "7x8": { fastCount, totalCorrect, bestTime, times[] } }
    dicteeStats:   {},  // { "le mot": 0|1|2|3 }
    dicteeWritten: {},  // { "le mot": number of correctly written attempts }
    fluenceStats:  {},  // { "f1": [ { date, seconds, wpm } ] }
    poetryStats:   { completed: [], points: 0 },
    lessonStats:   {},  // { "g1": { correct, attempts } }
    geometryStats: {correct:0, wrong:0},
    dailyStats:    {},  // { "YYYY-MM-DD": { seconds, points, ... } }
    fractionStats: { correct:0, wrong:0, series:0, bestSeries:0 },
    badges: []
  }]
};

function getProfile() {
  let p = appData.profiles.find(x => x.id === appData.activeProfileId) || appData.profiles[0];
  appData.activeProfileId = p.id;
  // Rétrocompatibilité : initialiser les champs manquants
  if (!p.streak)         p.streak = 0;
  if (!p.lastVisitDate)  p.lastVisitDate = null;
  if (!p.fluenceStats)   p.fluenceStats = {};
  if (!p.poetryStats)    p.poetryStats = { completed: [], points: 0 };
  if (!Array.isArray(p.poetryStats.completed)) p.poetryStats.completed = [];
  if (!p.lessonStats)    p.lessonStats = {};
  if (!p.geometryStats)  p.geometryStats = {correct:0, wrong:0};
  if (!p.dailyStats)     p.dailyStats = {};
  if (!p.dicteeWritten)  p.dicteeWritten = {};
  if (!p.fractionStats)  p.fractionStats = { correct:0, wrong:0, series:0, bestSeries:0 };
  if (!p.avatarData) p.avatarData = {skin:'#F2C6A0',height:100,width:100,face:'smile',hair:'short',hairColor:'#3B2416',top:'tshirt',topColor:'#60A5FA',bottom:'shorts',bottomColor:'#34D399',shoes:'sneakers',shoesColor:'#334155',hat:'none',owned:['face-smile','hair-short','hair-bob','top-tshirt','bottom-shorts','shoes-sneakers','hat-none']};
  if (!Array.isArray(p.avatarData.owned)) p.avatarData.owned = ['face-smile','hair-short','hair-bob','top-tshirt','bottom-shorts','shoes-sneakers','hat-none'];
  return p;
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
  updateHeader();
}

// ═══════════════════════════════════════════════════════════════
//  ████ MINUTEUR & STREAK ████
// ═══════════════════════════════════════════════════════════════
let timerInterval = null;
let activeGameType = null;
let currentSessionSeconds = 0;

function todayKey() { return new Date().toISOString().slice(0,10); }

function dailyRecord(type, points=0) {
  const p = getProfile();
  const key = todayKey();
  if (!p.dailyStats[key]) p.dailyStats[key] = {seconds:0, points:0, maths:0, fractions:0, dictees:0, fluence:0, lessons:0, orthographe:0, poesie:0};
  if (!Object.prototype.hasOwnProperty.call(p.dailyStats[key], 'poesie')) p.dailyStats[key].poesie = 0;
  if (type && Object.prototype.hasOwnProperty.call(p.dailyStats[key], type)) p.dailyStats[key][type]++;
  p.dailyStats[key].points += points;
  return p.dailyStats[key];
}

function setGameActive(type) {
  if (activeGameType) stopWorkTimer();
  activeGameType = type || null;
  currentSessionSeconds = 0;
  if (activeGameType) startWorkTimer();
}

function stopWorkTimer() {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
  if (currentSessionSeconds > 0) saveData();
}

function startWorkTimer() {
  checkStreak();
  stopWorkTimer();
  timerInterval = setInterval(() => {
    let p = getProfile();
    p.totalSeconds++;
    currentSessionSeconds++;
    dailyRecord(null).seconds++;
    document.getElementById('work-timer').textContent = fmtTime(p.totalSeconds);
    // Badges de temps vérifiés toutes les 60 s
    if (currentSessionSeconds % 60 === 0) { saveData(); checkTimeBadges(); }
  }, 1000);
}

function checkStreak() {
  let p = getProfile();
  const today = new Date().toDateString();
  if (p.lastVisitDate === today) return;
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  p.streak = (p.lastVisitDate === yesterday) ? (p.streak || 0) + 1 : 1;
  p.lastVisitDate = today;
  saveData();
}

function fmtTime(sec) {
  return `${Math.floor(sec/60).toString().padStart(2,'0')}:${(sec%60).toString().padStart(2,'0')}`;
}

// ═══════════════════════════════════════════════════════════════
//  ████ MISE À JOUR DU HEADER ████
// ═══════════════════════════════════════════════════════════════
function updateHeader() {
  let p = getProfile();
  document.getElementById('header-avatar').textContent = p.avatar;
  document.getElementById('header-name').textContent   = p.name;
  document.getElementById('header-score').textContent  = `${p.points} pts`;
  // Streak (affiché si ≥ 2 jours)
  let streakEl = document.getElementById('header-streak');
  if (p.streak >= 2) { streakEl.textContent = `🔥${p.streak}`; streakEl.classList.remove('hidden'); }
  else streakEl.classList.add('hidden');
  // Stats accueil
  el('stat-total-time',   `${Math.floor(p.totalSeconds/60)} min`);
  el('stat-total-badges', p.badges.length);
  el('stat-total-points', p.points);
  el('home-streak', p.streak >= 1 ? `${p.streak} jour${p.streak>1?'s':''} de suite !` : 'Bienvenue !');
}
// Petit helper pour éviter les nullchecks répétés
function el(id, val) { let e=document.getElementById(id); if(e) e.textContent=val; }

// ═══════════════════════════════════════════════════════════════
//  ████ NAVIGATION ████
// ═══════════════════════════════════════════════════════════════
