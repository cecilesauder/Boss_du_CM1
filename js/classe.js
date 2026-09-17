const CLASS_BOARD_KEY = 'cm1ClassBoardV1';
let classBoard = JSON.parse(localStorage.getItem(CLASS_BOARD_KEY) || '[]');

function saveClassBoard() {
  localStorage.setItem(CLASS_BOARD_KEY, JSON.stringify(classBoard));
}

function currentLeaderboardScore(profile) {
  const lessons = Object.values(profile.lessonStats || {}).reduce((sum, score) => sum + (score.correct || 0), 0);
  const dictWords = Object.values(profile.dicteeStats || {}).filter(score => score >= 3).length;
  const readings = Object.values(profile.fluenceStats || {}).reduce((sum, sessions) => sum + sessions.length, 0);
  return { points: profile.points || 0, badges: (profile.badges || []).length, lessons, dictWords, readings };
}

function renderClassBoard() {
  const board = document.getElementById('class-board-list');
  if (!board) return;
  const sorted = [...classBoard].sort((a, b) => b.points - a.points || b.lessons - a.lessons || b.dictWords - a.dictWords);
  board.innerHTML = sorted.length ? sorted.map((entry, index) => `
    <div class="class-rank-row ${index === 0 ? 'class-rank-first' : ''}">
      <div class="class-rank-number">${index + 1}</div>
      <div class="flex-1 min-w-0"><div class="font-bold text-slate-800 truncate">${escapeBoardText(entry.name)}</div><div class="text-[10px] text-slate-500">${entry.lessons} leçons · ${entry.dictWords} mots · ${entry.readings} lectures</div></div>
      <div class="text-right"><div class="font-extrabold text-indigo-700">${entry.points} pts</div><div class="text-[10px] text-amber-600">${entry.badges} badges</div></div>
    </div>`).join('') : '<p class="text-center text-sm text-slate-400 py-6">Le classement est vide. Ajoute un premier score !</p>';
  const profile = getProfile();
  const score = currentLeaderboardScore(profile);
  const preview = document.getElementById('class-current-score');
  if (preview) preview.textContent = `${profile.name} · ${score.points} points · ${score.lessons} leçons réussies · ${score.dictWords} mots maîtrisés`;
}

function escapeBoardText(value) {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));
}

function publishCurrentScore() {
  const profile = getProfile();
  const nameInput = document.getElementById('class-pseudo');
  const name = (nameInput?.value.trim() || profile.name || 'Élève').slice(0, 24);
  const score = currentLeaderboardScore(profile);
  const existing = classBoard.find(entry => entry.id === profile.id);
  const entry = { id: profile.id, name, ...score, updatedAt: new Date().toLocaleDateString('fr-FR') };
  if (existing) Object.assign(existing, entry); else classBoard.push(entry);
  saveClassBoard();
  renderClassBoard();
  showCelebration('🏆', 'Score publié !', 'Ton pseudo et ton score apparaissent dans le classement de cet appareil.', null);
}

function exportClassBoard() {
  const payload = { app: 'Mon Espace CM1', version: 1, exportedAt: new Date().toISOString(), entries: classBoard };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {type:'application/json'});
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'classement-cm1.json';
  link.click();
  URL.revokeObjectURL(link.href);
}

function importClassBoard(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(reader.result);
      const entries = Array.isArray(imported) ? imported : imported.entries;
      if (!Array.isArray(entries)) throw new Error('format');
      entries.filter(entry => entry && entry.name && Number.isFinite(Number(entry.points))).forEach(entry => {
        const safe = { id: String(entry.id || `import-${Date.now()}-${Math.random()}`), name: String(entry.name).slice(0,24), points:Number(entry.points)||0, badges:Number(entry.badges)||0, lessons:Number(entry.lessons)||0, dictWords:Number(entry.dictWords)||0, readings:Number(entry.readings)||0, updatedAt:entry.updatedAt || '' };
        const existing = classBoard.find(item => item.id === safe.id);
        if (existing) Object.assign(existing, safe); else classBoard.push(safe);
      });
      saveClassBoard(); renderClassBoard();
    } catch { showCelebration('⚠️', 'Fichier non reconnu', 'Utilise un export classement-cm1.json.', null); }
    event.target.value = '';
  };
  reader.readAsText(file);
}

function clearClassBoard() {
  if (!classBoard.length || !confirm('Effacer le classement enregistré sur cet appareil ?')) return;
  classBoard = [];
  saveClassBoard();
  renderClassBoard();
}
