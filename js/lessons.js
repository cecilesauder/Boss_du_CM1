let currentLessonCategory = 'grammaire';
let currentLesson = null;
let currentLessonQuestionIndex = 0;
let currentLessonQuestionAnswered = false;

function switchLessonCategory(category) {
  currentLessonCategory = category;
  ['grammaire','conjugaison','lexique'].forEach(name => {
    const button = document.getElementById(`lesson-tab-${name}`);
    if (!button) return;
    button.className = name === category ? 'flex-1 py-2 rounded-xl bg-indigo-500 text-white font-bold text-xs' : 'flex-1 py-2 rounded-xl text-slate-500 font-bold text-xs';
  });
  document.getElementById('lesson-exercise').classList.add('hidden');
  renderLessons();
}

function renderLessons() {
  const list = document.getElementById('lessons-list');
  if (!list) return;
  const p = getProfile();
  list.innerHTML = (FRENCH_LESSONS[currentLessonCategory] || []).map(lesson => {
    const score = p.lessonStats?.[lesson.id] || { correct:0, attempts:0 };
    const count = lesson.questions?.length || 1;
    return `<div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex items-center justify-between gap-3">
      <div class="min-w-0"><div class="font-bold text-slate-800 text-sm font-heading">${lesson.title}</div><div class="text-[10px] text-slate-500 mt-1">${lesson.rule}</div><div class="text-[10px] text-indigo-600 font-bold mt-1">${count} questions · ${score.correct} réussite${score.correct>1?'s':''} · ${score.attempts} tentative${score.attempts>1?'s':''}</div></div>
      <button onclick="openLesson('${lesson.id}')" class="bg-indigo-600 text-white font-bold py-2 px-3 rounded-xl text-xs flex-shrink-0">S’entraîner</button>
    </div>`;
  }).join('');
}

function openLesson(lessonId) {
  const lesson = Object.values(FRENCH_LESSONS).flat().find(item => item.id === lessonId);
  if (!lesson) return;
  setGameActive('lessons');
  currentLesson = lesson;
  currentLessonQuestionIndex = 0;
  const box = document.getElementById('lesson-exercise');
  box.classList.remove('hidden');
  box.innerHTML = `<div class="flex justify-between items-start gap-3"><div><div class="text-xs text-indigo-600 font-bold">Leçon de français</div><h3 class="text-xl font-bold text-slate-800 font-heading">${lesson.title}</h3></div><button type="button" onclick="closeLesson()" class="text-slate-400 hover:text-slate-700 text-xl" aria-label="Fermer">✕</button></div><p class="mt-3 bg-indigo-50 border border-indigo-100 rounded-2xl p-3 text-sm text-indigo-900"><strong>À retenir :</strong> ${lesson.rule}</p><div id="lesson-question-area"></div><div id="lesson-progress" class="mt-3 text-xs font-bold text-indigo-600"></div>`;
  renderLessonQuestion();
  box.scrollIntoView({behavior:'smooth', block:'start'});
}

function renderLessonQuestion() {
  const questions = currentLesson.questions || [{prompt:currentLesson.prompt, options:currentLesson.options, answer:currentLesson.answer}];
  const q = questions[currentLessonQuestionIndex];
  const area = document.getElementById('lesson-question-area');
  if (!q || !area) return;
  currentLessonQuestionAnswered = false;
  area.innerHTML = `<p class="mt-4 text-sm font-bold text-slate-700">${q.prompt}</p><div class="grid gap-2 mt-3">${q.options.map(option => `<button type="button" class="lesson-option bg-slate-50 border-2 border-slate-200 rounded-xl p-3 font-bold text-slate-700" data-answer="${encodeURIComponent(option)}" onclick="answerLesson(this, decodeURIComponent(this.dataset.answer))">${option}</button>`).join('')}</div><div id="lesson-feedback" class="mt-3 min-h-[2.5rem] text-sm font-bold"></div><button id="lesson-next-button" type="button" onclick="nextLessonQuestion()" class="hidden w-full bg-indigo-600 text-white font-bold py-3 rounded-xl">Question suivante ➡️</button>`;
  document.getElementById('lesson-progress').textContent = `Question ${currentLessonQuestionIndex + 1}/${questions.length}`;
}

function answerLesson(button, answer) {
  if (!currentLesson || currentLessonQuestionAnswered) return;
  const questions = currentLesson.questions || [{prompt:currentLesson.prompt, options:currentLesson.options, answer:currentLesson.answer}];
  const q = questions[currentLessonQuestionIndex];
  const p = getProfile();
  if (!p.lessonStats) p.lessonStats = {};
  if (!p.lessonStats[currentLesson.id]) p.lessonStats[currentLesson.id] = { correct:0, attempts:0 };
  p.lessonStats[currentLesson.id].attempts++;
  currentLessonQuestionAnswered = true;
  document.querySelectorAll('.lesson-option').forEach(option => option.disabled = true);
  const feedback = document.getElementById('lesson-feedback');
  if (answer === q.answer) {
    p.lessonStats[currentLesson.id].correct++;
    p.points += 10;
    dailyRecord('lessons', 10);
    button.classList.add('border-emerald-500','bg-emerald-50','text-emerald-700');
    feedback.className = 'mt-3 min-h-[2.5rem] text-sm font-bold text-emerald-600';
    feedback.textContent = '✅ Bravo, bonne réponse !';
  } else {
    button.classList.add('border-rose-500','bg-rose-50','text-rose-700');
    const good = [...document.querySelectorAll('.lesson-option')].find(option => option.textContent === q.answer);
    if (good) good.classList.add('border-emerald-500','bg-emerald-50','text-emerald-700');
    feedback.className = 'mt-3 min-h-[2.5rem] text-sm font-bold text-rose-600';
    feedback.textContent = `❌ La bonne réponse était « ${q.answer} ». Relis la règle puis continue.`;
  }
  document.getElementById('lesson-next-button')?.classList.remove('hidden');
  saveData();
  renderLessons();
}

function nextLessonQuestion() {
  if (!currentLessonQuestionAnswered) return;
  const total = (currentLesson.questions || []).length;
  if (currentLessonQuestionIndex < total - 1) {
    currentLessonQuestionIndex++;
    renderLessonQuestion();
  } else {
    const feedback = document.getElementById('lesson-feedback');
    if (feedback) feedback.textContent = '🎉 Série terminée ! Tu peux recommencer pour consolider la notion.';
    document.getElementById('lesson-next-button')?.classList.add('hidden');
  }
}

function closeLesson() {
  setGameActive(null);
  document.getElementById('lesson-exercise')?.classList.add('hidden');
}
