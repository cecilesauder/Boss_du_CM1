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
    totalSeconds: 0, points: 0,
    streak: 0, lastVisitDate: null,
    mathStats:     {},  // { "7x8": { fastCount, totalCorrect, bestTime, times[] } }
    dicteeStats:   {},  // { "le mot": 0|1|2|3 }
    fluenceStats:  {},  // { "f1": [ { date, seconds, wpm } ] }
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
  if (!p.fractionStats)  p.fractionStats = { correct:0, wrong:0, series:0, bestSeries:0 };
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

function startWorkTimer() {
  checkStreak();
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    let p = getProfile();
    p.totalSeconds++;
    document.getElementById('work-timer').textContent = fmtTime(p.totalSeconds);
    // Badges de temps vérifiés toutes les 60 s
    if (p.totalSeconds % 60 === 0) { saveData(); checkTimeBadges(); }
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

