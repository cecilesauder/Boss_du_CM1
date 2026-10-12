/*
 * Module Histoire-Géographie inspiré du fichier HistoriKids fourni.
 *
 * Les quatre mini-jeux sont conservés dans l'application principale :
 * 1. frise chronologique ;
 * 2. association mots-clés / définitions ;
 * 3. loterie des statuts et rôles historiques ;
 * 4. quiz de validation.
 *
 * Les points et les badges passent par le système global de Boss du CM1.
 * Aucun score n'est envoyé en ligne : tout reste enregistré dans le profil local.
 */

let hgCurrentThemeId = 1;
let hgCurrentGame = null;
let hgTimelineItems = [];
let hgSelectedWordId = null;
let hgSelectedDefId = null;
let hgMatchedPairs = 0;
let hgQuizIndex = 0;
let hgQuizScore = 0;
let hgGameRewarded = {};

const HG_GAME_LABELS = {
  timeline: 'Frise chronologique',
  keywords: 'Match des mots-clés',
  simulator: 'Loterie des statuts',
  quiz: 'Grand quiz de l’historien'
};

function initHistoireGeographie() {
  renderHGHome();
  renderHGThemeHub();
  document.getElementById('hg-screen-home')?.classList.remove('hidden');
  document.getElementById('hg-screen-theme')?.classList.add('hidden');
  document.getElementById('hg-screen-game')?.classList.add('hidden');
}

function hgTheme(themeId) {
  hgCurrentThemeId = Number(themeId);
  renderHGThemeHub();
  document.getElementById('hg-screen-home')?.classList.add('hidden');
  document.getElementById('hg-screen-theme')?.classList.remove('hidden');
  document.getElementById('hg-screen-game')?.classList.add('hidden');
}

function hgBackHome() {
  document.getElementById('hg-screen-home')?.classList.remove('hidden');
  document.getElementById('hg-screen-theme')?.classList.add('hidden');
  document.getElementById('hg-screen-game')?.classList.add('hidden');
  renderHGHome();
}

function hgBackTheme() {
  renderHGThemeHub();
  document.getElementById('hg-screen-theme')?.classList.remove('hidden');
  document.getElementById('hg-screen-game')?.classList.add('hidden');
}

function renderHGHome() {
  const box = document.getElementById('hg-theme-cards');
  if (!box || typeof HG_HISTORIKIDS_THEMES === 'undefined') return;
  box.innerHTML = Object.values(HG_HISTORIKIDS_THEMES).map(theme => `
    <button type="button" onclick="hgTheme(${theme.id})" class="hg-theme-card hg-${theme.color}">
      <span class="hg-theme-icon">${theme.icon}</span>
      <span class="hg-theme-kicker">Thème ${theme.id} · ${theme.title.match(/\(([^)]+)\)/)?.[1] || ''}</span>
      <strong>${theme.title.replace(/ \([^)]*\)/, '')}</strong>
      <span class="hg-theme-description">${theme.question}</span>
      <span class="hg-theme-footer">4 activités <span>→</span></span>
    </button>`).join('');
}

function renderHGThemeHub() {
  const theme = HG_HISTORIKIDS_THEMES[hgCurrentThemeId];
  if (!theme) return;
  const title = document.getElementById('hg-theme-title');
  const question = document.getElementById('hg-theme-question');
  const icon = document.getElementById('hg-theme-icon');
  const progress = document.getElementById('hg-theme-progress');
  if (title) title.textContent = theme.title;
  if (question) question.textContent = `« ${theme.question} »`;
  if (icon) icon.textContent = theme.icon;
  const completed = getHGCompleted(theme.id);
  if (progress) progress.textContent = `${completed.length}/4 activités terminées`;
  document.querySelectorAll('.hg-game-card').forEach(card => {
    const done = completed.includes(card.dataset.hgGame);
    card.classList.toggle('done', done);
    const status = card.querySelector('.hg-game-status');
    if (status) status.textContent = done ? '✅ Terminé' : 'Lancer le jeu →';
  });
}

function getHGCompleted(themeId) {
  const p = getProfile();
  const values = p.hgStats?.completed?.[themeId];
  return Array.isArray(values) ? values : [];
}

function startHGGame(game) {
  const theme = HG_HISTORIKIDS_THEMES[hgCurrentThemeId];
  if (!theme) return;
  hgCurrentGame = game;
  document.getElementById('hg-screen-theme')?.classList.add('hidden');
  document.getElementById('hg-screen-game')?.classList.remove('hidden');
  document.getElementById('hg-game-title').textContent = HG_GAME_LABELS[game] || 'Activité';
  document.getElementById('hg-game-subtitle').textContent = theme.title;
  const score = document.getElementById('hg-game-score');
  if (score) score.textContent = `${getProfile().points} pts`;
  const playground = document.getElementById('hg-playground');
  if (game === 'timeline') renderHGTimeline(theme, playground);
  if (game === 'keywords') renderHGKeywords(theme, playground);
  if (game === 'simulator') renderHGSimulator(theme, playground);
  if (game === 'quiz') renderHGQuiz(theme, playground);
}

function renderHGTimeline(theme, container) {
  hgTimelineItems = [...theme.timeline].sort(() => Math.random() - 0.5);
  container.innerHTML = `<div class="hg-play-inner"><div class="hg-game-intro"><span class="hg-big-icon">⏳</span><h3>Remets les repères dans l’ordre</h3><p>Utilise les flèches pour classer les événements du plus ancien au plus récent.</p></div><div id="hg-timeline-list" class="hg-timeline-list">${renderHGTimelineRows()}</div><div id="hg-timeline-feedback" class="hg-feedback"></div><button type="button" class="hg-primary-button" onclick="checkHGTimeline()">Vérifier ma frise</button></div>`;
}

function renderHGTimelineRows() {
  return hgTimelineItems.map((item, index) => `<div class="hg-timeline-row"><div><span class="hg-order-number">${index + 1}</span><strong>${item.text}</strong><small>${item.year}</small></div><span class="hg-row-arrows"><button type="button" ${index === 0 ? 'disabled' : ''} onclick="moveHGTimeline(${index},-1)">⬆️</button><button type="button" ${index === hgTimelineItems.length - 1 ? 'disabled' : ''} onclick="moveHGTimeline(${index},1)">⬇️</button></span></div>`).join('');
}

function moveHGTimeline(index, direction) {
  const target = index + direction;
  if (target < 0 || target >= hgTimelineItems.length) return;
  [hgTimelineItems[index], hgTimelineItems[target]] = [hgTimelineItems[target], hgTimelineItems[index]];
  document.getElementById('hg-timeline-list').innerHTML = renderHGTimelineRows();
}

function checkHGTimeline() {
  const good = hgTimelineItems.every((item, index) => item.order === index + 1);
  const feedback = document.getElementById('hg-timeline-feedback');
  if (good) {
    feedback.className = 'hg-feedback success';
    feedback.textContent = '🎉 Bravo ! Frise reconstituée. +15 points';
    rewardHGGame('timeline', 15);
  } else {
    feedback.className = 'hg-feedback error';
    feedback.textContent = '❌ L’ordre n’est pas encore correct. Observe bien les dates et réessaie.';
  }
}

function renderHGKeywords(theme, container) {
  hgSelectedWordId = null; hgSelectedDefId = null; hgMatchedPairs = 0;
  const words = [...theme.keywords].sort(() => Math.random() - 0.5);
  const defs = [...theme.keywords].sort(() => Math.random() - 0.5);
  container.innerHTML = `<div class="hg-play-inner"><div class="hg-game-intro"><span class="hg-big-icon">🧩</span><h3>Associe chaque mot à sa définition</h3><p>Touche un mot-clé puis la définition correspondante.</p></div><div class="hg-keywords-grid"><div><h4>Mots-clés</h4><div id="hg-words-col">${words.map(item => `<button type="button" class="hg-match-card" id="hg-word-${item.id}" onclick="selectHGWord('${item.id}')">${item.word}</button>`).join('')}</div></div><div><h4>Définitions</h4><div id="hg-defs-col">${defs.map(item => `<button type="button" class="hg-match-card definition" id="hg-def-${item.id}" onclick="selectHGDefinition('${item.id}')">${item.def}</button>`).join('')}</div></div></div><div id="hg-keyword-feedback" class="hg-feedback"></div></div>`;
}

function selectHGWord(id) { hgSelectedWordId = id; document.querySelectorAll('#hg-words-col .hg-match-card').forEach(el => el.classList.toggle('selected', el.id === `hg-word-${id}`)); checkHGPair(); }
function selectHGDefinition(id) { hgSelectedDefId = id; document.querySelectorAll('#hg-defs-col .hg-match-card').forEach(el => el.classList.toggle('selected', el.id === `hg-def-${id}`)); checkHGPair(); }

function checkHGPair() {
  if (!hgSelectedWordId || !hgSelectedDefId) return;
  const word = document.getElementById(`hg-word-${hgSelectedWordId}`);
  const def = document.getElementById(`hg-def-${hgSelectedDefId}`);
  if (hgSelectedWordId === hgSelectedDefId) {
    word.classList.add('matched'); def.classList.add('matched'); word.disabled = true; def.disabled = true; hgMatchedPairs++;
    hgSelectedWordId = null; hgSelectedDefId = null;
    if (hgMatchedPairs === HG_HISTORIKIDS_THEMES[hgCurrentThemeId].keywords.length) {
      document.getElementById('hg-keyword-feedback').className = 'hg-feedback success';
      document.getElementById('hg-keyword-feedback').textContent = '🏆 Toutes les associations sont justes. +15 points';
      rewardHGGame('keywords', 15);
    }
  } else {
    word.classList.add('wrong'); def.classList.add('wrong');
    setTimeout(() => { word.classList.remove('selected','wrong'); def.classList.remove('selected','wrong'); }, 500);
    hgSelectedWordId = null; hgSelectedDefId = null;
  }
}

function renderHGSimulator(theme, container) {
  container.innerHTML = `<div class="hg-play-inner hg-simulator"><span class="hg-big-icon">🎲</span><h3>La loterie des statuts</h3><p>Découvre au hasard la vie d’une personne de cette époque : son rôle, ses obligations et ses possibilités.</p><button type="button" class="hg-primary-button" onclick="runHGSimulator()">Lancer la loterie</button><div id="hg-simulator-result" class="hg-simulator-result"></div></div>`;
}

function runHGSimulator() {
  const theme = HG_HISTORIKIDS_THEMES[hgCurrentThemeId];
  const roles = theme.roles || [];
  const role = roles[Math.floor(Math.random() * roles.length)];
  document.getElementById('hg-simulator-result').innerHTML = `<div class="hg-role-result"><span class="hg-role-icon">${role.icon}</span><h4>${role.title}</h4><dl><dt>Genre et statut</dt><dd>${role.gender}</dd><dt>Impôts / obligations</dt><dd>${role.taxes}</dd><dt>Droits / pouvoir</dt><dd>${role.power}</dd></dl><p><strong>Ta vie quotidienne :</strong> ${role.story}</p></div>`;
  rewardHGGame('simulator', 5);
}

function renderHGQuiz(theme, container) {
  hgQuizIndex = 0; hgQuizScore = 0; showHGQuizQuestion(theme, container);
}

function showHGQuizQuestion(theme, container) {
  const question = theme.quiz[hgQuizIndex];
  container.innerHTML = `<div class="hg-play-inner"><div class="hg-quiz-top"><span>Question ${hgQuizIndex + 1}/${theme.quiz.length}</span><strong>Score : ${hgQuizScore}</strong></div><div class="hg-progress-track"><span style="width:${(hgQuizIndex / theme.quiz.length) * 100}%"></span></div><h3 class="hg-quiz-question">${question.q}</h3><div id="hg-quiz-options" class="hg-quiz-options">${question.options.map((option, index) => `<button type="button" onclick="submitHGQuiz(${index})">${option}<span>›</span></button>`).join('')}</div><div id="hg-quiz-feedback" class="hg-feedback"></div></div>`;
}

function submitHGQuiz(index) {
  const theme = HG_HISTORIKIDS_THEMES[hgCurrentThemeId];
  const question = theme.quiz[hgQuizIndex];
  const options = document.querySelectorAll('#hg-quiz-options button');
  options.forEach(button => button.disabled = true);
  const feedback = document.getElementById('hg-quiz-feedback');
  if (index === question.correct) { hgQuizScore += 10; feedback.className = 'hg-feedback success'; feedback.innerHTML = `✅ Bonne réponse ! +10 points<br><small>${question.expl}</small>`; }
  else { feedback.className = 'hg-feedback error'; feedback.innerHTML = `❌ Pas encore. La bonne idée était : <small>${question.expl}</small>`; }
  feedback.innerHTML += `<button type="button" class="hg-next-button" onclick="nextHGQuiz()">${hgQuizIndex + 1 < theme.quiz.length ? 'Question suivante →' : 'Voir mon résultat'}</button>`;
}

function nextHGQuiz() {
  const theme = HG_HISTORIKIDS_THEMES[hgCurrentThemeId];
  hgQuizIndex++;
  if (hgQuizIndex < theme.quiz.length) showHGQuizQuestion(theme, document.getElementById('hg-playground'));
  else finishHGQuiz(theme);
}

function finishHGQuiz(theme) {
  rewardHGGame('quiz', hgQuizScore);
  const feedback = document.getElementById('hg-playground');
  feedback.innerHTML = `<div class="hg-play-inner hg-finished"><span class="hg-big-icon">🏆</span><h3>Félicitations, historien !</h3><p>Tu as terminé le quiz sur « ${theme.title} ».</p><strong>Score gagné : ${hgQuizScore} points</strong><p class="hg-badge-line">🏅 Badge du thème débloqué si ce n’était pas déjà fait.</p><button type="button" class="hg-primary-button" onclick="hgBackTheme()">Retour aux activités</button></div>`;
}

function rewardHGGame(game, points) {
  const p = getProfile();
  if (!p.hgStats) p.hgStats = { points:0, completed:{}, games:{} };
  if (!p.hgStats.completed) p.hgStats.completed = {};
  if (!p.hgStats.games) p.hgStats.games = {};
  if (!Array.isArray(p.hgStats.completed[hgCurrentThemeId])) p.hgStats.completed[hgCurrentThemeId] = [];
  const key = `${hgCurrentThemeId}:${game}`;
  if (hgGameRewarded[key]) return;
  hgGameRewarded[key] = true;
  if (!p.hgStats.completed[hgCurrentThemeId].includes(game)) p.hgStats.completed[hgCurrentThemeId].push(game);
  p.hgStats.games[key] = (p.hgStats.games[key] || 0) + 1;
  p.hgStats.points = (p.hgStats.points || 0) + Number(points || 0);
  p.points += Number(points || 0);
  if (typeof dailyRecord === 'function') dailyRecord('histoire', Number(points || 0));
  saveData();
  if (game === 'quiz' && typeof awardBadge === 'function') {
    const theme = HG_HISTORIKIDS_THEMES[hgCurrentThemeId];
    awardBadge(`history_${hgCurrentThemeId}`, theme.badgeName, `Quiz du thème « ${theme.title} » terminé`, 'histoire');
  }
  const score = document.getElementById('hg-game-score');
  if (score) score.textContent = `${p.points} pts`;
}

function openMedievalRoleLink() {
  window.open('https://www.cite-sciences.fr/juniors/moyen-age/index.html', '_blank', 'noopener');
}
