/** Retourne la liste complète de tous les badges possibles */
function allBadges() {
  return [
    // Temps & régularité
    {id:'time_10',   title:'10 min en une session ⏱️', desc:'A joué 10 minutes sans quitter une activité', cat:'time'},
    {id:'time_30',   title:'30 min en une session 🧠', desc:'A joué 30 minutes sans quitter une activité', cat:'time'},
    {id:'time_60',   title:'1 h en une session 👑',    desc:'A joué 1 heure sans quitter une activité', cat:'time'},
    {id:'streak_3',  title:'3 jours de suite 🔥',     desc:'3 jours consécutifs !',        cat:'time'},
    {id:'streak_7',  title:'1 semaine entière 🏅',    desc:'7 jours de suite !',           cat:'time'},
    // Tables de multiplication (une par table)
    ...[1,2,3,4,5,6,7,8,9,10].map(n=>({id:`table_${n}`, title:`Maître du ${n} ⚡`, desc:`Table de ${n} validée en <2s !`, cat:'maths'})),
    {id:'tables_all', title:'Super maître des tables 🎲', desc:'Toutes les tables de 1 à 10 validées', cat:'maths'},
    // Dictées (un par thème)
    ...DICTEE_WEEKS.map(w=>({id:`week_${w.id}`, title:`Expert : ${w.title} ${w.icon}`, desc:`Tous les mots de « ${w.title} » maîtrisés`, cat:'dictee'})),
    // Fluence
    {id:'flu_1',   title:'Premier texte lu 📖',     desc:'1ère session de fluence',        cat:'fluence'},
    {id:'flu_10',  title:'10 lectures 🔖',           desc:'10 sessions de fluence',        cat:'fluence'},
    {id:'flu_all', title:'Tous les textes lus 📚',  desc:'Les 26 textes lus 1 fois',      cat:'fluence'},
    // Fractions
    {id:'frac_5',  title:'Série de 5 fractions 🍕', desc:'5 bonnes réponses d\'affilée', cat:'fractions'},
    {id:'frac_10', title:'Champion fractions 🏆', desc:'10 bonnes réponses de suite', cat:'fractions'},
    // Géométrie et français
    {id:'geo_5', title:'Géomètre en herbe 📐', desc:'5 réponses de géométrie', cat:'maths'},
    {id:'geo_20', title:'Géomètre expert 📏', desc:'20 réponses de géométrie', cat:'maths'},
    {id:'lessons_5', title:'Curieux du français 📚', desc:'5 notions de français réussies', cat:'time'},
    {id:'lessons_15', title:'Expert du français 🎓', desc:'Les 15 notions de français réussies', cat:'time'}
  ];
}

let badgeCat = 'all';
function filterBadges(cat, btn) {
  badgeCat = cat;
  document.querySelectorAll('.badge-filter').forEach(b => {
    b.classList.remove('bg-indigo-600','text-white');
    b.classList.add('bg-slate-100','text-slate-500');
  });
  if (btn) { btn.classList.add('bg-indigo-600','text-white'); btn.classList.remove('bg-slate-100','text-slate-500'); }
  renderBadgesGrid();
}

function renderBadgesGrid() {
  let c  = document.getElementById('badges-grid');
  c.innerHTML = '';
  let p  = getProfile();
  let all = allBadges();
  let filtered = badgeCat==='all' ? all : all.filter(b=>b.cat===badgeCat);
  document.getElementById('trophy-summary').textContent = `${p.badges.length} / ${all.length} badges débloqués`;
  const lessonStats = Object.values(p.lessonStats || {});
  const lessonsDone = lessonStats.filter(score => score.correct > 0).length;
  const progress = `⭐ ${p.points} points · 🎖️ ${p.badges.length} badges · ✍️ ${Object.values(p.dicteeStats || {}).filter(score => score >= 3).length} mots maîtrisés · 📚 ${lessonsDone}/15 leçons réussies · 📖 ${Object.values(p.fluenceStats || {}).reduce((total, sessions) => total + sessions.length, 0)} lectures`;
  const progressBox = document.getElementById('progress-summary');
  if (progressBox) progressBox.textContent = progress;
  window.currentProgressSummary = `Progression de ${p.name}\n${progress}\nJeu CM1 : https://cecilesauder.github.io/Boss_du_CM1/`;
  if (typeof renderDailyStats === 'function') renderDailyStats();

  filtered.forEach(b => {
    let unlocked = p.badges.some(x=>x.id===b.id);
    let date     = unlocked ? (p.badges.find(x=>x.id===b.id)||{}).date||'' : '';
    let div = document.createElement('div');
    div.className = `p-4 rounded-2xl border flex flex-col items-center text-center gap-1 ${unlocked?'bg-amber-50 border-amber-300':'bg-slate-100 border-slate-200 opacity-50'}`;
    div.innerHTML = `
      <div class="text-3xl">${unlocked?'🎖️':'🔒'}</div>
      <div class="font-bold text-xs font-heading ${unlocked?'text-amber-800':'text-slate-400'}">${b.title}</div>
      <div class="text-[10px] ${unlocked?'text-amber-600':'text-slate-400'}">${b.desc}</div>
      ${date?`<div class="text-[9px] text-amber-300">${date}</div>`:''}`;
    c.appendChild(div);
  });
}

function copyProgressSummary() {
  const text = window.currentProgressSummary || 'Ma progression CM1';
  navigator.clipboard?.writeText(text).then(() => showCelebration('📋', 'Bilan copié !', 'Tu peux maintenant le coller dans un message.', null));
}

function shareProgressSummary() {
  const text = window.currentProgressSummary || 'Ma progression CM1';
  if (navigator.share) navigator.share({ title:'Ma progression CM1', text }).catch(() => {});
  else copyProgressSummary();
}

function awardBadge(id, title, desc, cat) {
  let p = getProfile();
  if (p.badges.some(b=>b.id===id)) return; // Déjà obtenu
  p.badges.push({ id, title, desc, date:new Date().toLocaleDateString('fr-FR') });
  saveData();
  playFanfare();
  showCelebration('🎖️', 'Nouveau badge !', desc, title);
}

function checkTimeBadges() {
  let p = getProfile(), m = Math.floor(currentSessionSeconds/60);
  if (m>=10) awardBadge('time_10','10 min en une session ⏱️','A joué 10 minutes sans quitter une activité !','time');
  if (m>=30) awardBadge('time_30','30 min en une session 🧠','A joué 30 minutes sans quitter une activité !','time');
  if (m>=60) awardBadge('time_60','1 h en une session 👑','A joué une heure sans quitter une activité !','time');
  if ((p.streak||0)>=3) awardBadge('streak_3','3 jours de suite 🔥','3 jours de travail consécutifs !','time');
  if ((p.streak||0)>=7) awardBadge('streak_7','1 semaine entière 🏅','7 jours de suite !','time');
}

// ═══════════════════════════════════════════════════════════════
//  ████ MODAL CÉLÉBRATION ████
// ═══════════════════════════════════════════════════════════════
