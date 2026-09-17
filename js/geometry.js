const GEOMETRY_QUESTIONS = [
  {q:'Un rectangle mesure 6 cm de longueur et 3 cm de largeur. Quel est son périmètre ?', options:['9 cm','18 cm','36 cm','12 cm'], answer:'18 cm'},
  {q:'Combien de côtés possède un hexagone ?', options:['4','5','6','8'], answer:'6'},
  {q:'Un angle droit mesure…', options:['45°','90°','120°','180°'], answer:'90°'},
  {q:'Quel instrument utilise-t-on pour mesurer un angle ?', options:['Une règle','Un compas','Un rapporteur','Une équerre seule'], answer:'Un rapporteur'},
  {q:'Quel quadrilatère possède quatre côtés égaux et quatre angles droits ?', options:['Un triangle','Un carré','Un trapèze','Un losange quelconque'], answer:'Un carré'},
  {q:'Le symétrique d’un point situé à 4 cm d’un axe est situé à…', options:['2 cm de l’axe','4 cm de l’axe','8 cm de l’axe','À côté de l’axe'], answer:'4 cm de l’axe'},
  {q:'Un carré a un côté de 5 cm. Quelle est son aire ?', options:['10 cm²','20 cm²','25 cm²','30 cm²'], answer:'25 cm²'},
  {q:'Combien de sommets possède un pavé droit ?', options:['4','6','8','12'], answer:'8'}
];
let geometryIndex = 0;
let geometryAnswered = false;

function initGeometry() {
  geometryIndex = 0;
  setGameActive('maths');
  renderGeometryQuestion();
}
function renderGeometryQuestion() {
  const question = GEOMETRY_QUESTIONS[geometryIndex % GEOMETRY_QUESTIONS.length];
  geometryAnswered = false;
  document.getElementById('geometry-progress').textContent = `Question ${(geometryIndex % GEOMETRY_QUESTIONS.length) + 1}/${GEOMETRY_QUESTIONS.length}`;
  document.getElementById('geometry-question').textContent = question.q;
  document.getElementById('geometry-feedback').textContent = '';
  document.getElementById('geometry-next').classList.add('hidden');
  const options = document.getElementById('geometry-options');
  options.innerHTML = question.options.map(option => `<button type="button" class="geometry-option bg-slate-50 border-2 border-slate-200 rounded-xl p-3 font-bold text-slate-700" data-answer="${option}">${option}</button>`).join('');
  options.querySelectorAll('button').forEach(button => button.addEventListener('click', () => answerGeometry(button, button.dataset.answer)));
}
function answerGeometry(button, answer) {
  if (geometryAnswered) return;
  geometryAnswered = true;
  const question = GEOMETRY_QUESTIONS[geometryIndex % GEOMETRY_QUESTIONS.length];
  document.querySelectorAll('.geometry-option').forEach(option => option.disabled = true);
  const feedback = document.getElementById('geometry-feedback');
  if (answer === question.answer) {
    button.classList.add('border-emerald-500','bg-emerald-50','text-emerald-700');
    feedback.className = 'min-h-[2rem] text-sm font-bold text-emerald-600';
    feedback.textContent = '✅ Bravo !';
    getProfile().points += 10;
    const profile = getProfile();
    profile.geometryStats.correct++;
    dailyRecord('maths', 10);
    if (profile.geometryStats.correct >= 5) awardBadge('geo_5', 'Géomètre en herbe 📐', '5 réponses de géométrie réussies !', 'maths');
    if (profile.geometryStats.correct >= 20) awardBadge('geo_20', 'Géomètre expert 📏', '20 réponses de géométrie réussies !', 'maths');
    saveData();
  } else {
    getProfile().geometryStats.wrong++;
    button.classList.add('border-rose-500','bg-rose-50','text-rose-700');
    const correct = [...document.querySelectorAll('.geometry-option')].find(option => option.dataset.answer === question.answer);
    if (correct) correct.classList.add('border-emerald-500','bg-emerald-50','text-emerald-700');
    feedback.className = 'min-h-[2rem] text-sm font-bold text-rose-600';
    feedback.textContent = `❌ La bonne réponse était « ${question.answer} ».`;
  }
  document.getElementById('geometry-next').classList.remove('hidden');
}
function nextGeometryQuestion() { geometryIndex++; renderGeometryQuestion(); }
