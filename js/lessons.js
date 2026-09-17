let currentLessonCategory = 'grammaire';
let currentLesson = null;

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
    return `<div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex items-center justify-between gap-3">
      <div class="min-w-0"><div class="font-bold text-slate-800 text-sm font-heading">${lesson.title}</div><div class="text-[10px] text-slate-500 mt-1">${lesson.rule}</div><div class="text-[10px] text-indigo-600 font-bold mt-1">${score.correct} réussite${score.correct>1?'s':''} · ${score.attempts} tentative${score.attempts>1?'s':''}</div></div>
      <button onclick="openLesson('${lesson.id}')" class="bg-indigo-600 text-white font-bold py-2 px-3 rounded-xl text-xs flex-shrink-0">S’entraîner</button>
    </div>`;
  }).join('');
}

function openLesson(lessonId) {
  const lesson = Object.values(FRENCH_LESSONS).flat().find(item => item.id === lessonId);
  if (!lesson) return;
  currentLesson = lesson;
  const box = document.getElementById('lesson-exercise');
  box.classList.remove('hidden');
  box.innerHTML = `<div class="flex justify-between items-start gap-3"><div><div class="text-xs text-indigo-600 font-bold">Leçon de français</div><h3 class="text-xl font-bold text-slate-800 font-heading">${lesson.title}</h3></div><button onclick="closeLesson()" class="text-slate-400 text-xl">✕</button></div><p class="mt-3 bg-indigo-50 border border-indigo-100 rounded-2xl p-3 text-sm text-indigo-900"><strong>À retenir :</strong> ${lesson.rule}</p><p class="mt-4 text-sm font-bold text-slate-700">${lesson.prompt}</p><div class="grid gap-2 mt-3">${lesson.options.map(option => `<button class="lesson-option bg-slate-50 border-2 border-slate-200 rounded-xl p-3 font-bold text-slate-700" onclick="answerLesson(this, ${JSON.stringify(option)})">${option}</button>`).join('')}</div><div id="lesson-feedback" class="mt-3 min-h-[2.5rem] text-sm font-bold"></div>`;
  box.scrollIntoView({behavior:'smooth', block:'start'});
}

function answerLesson(button, answer) {
  if (!currentLesson) return;
  const p = getProfile();
  if (!p.lessonStats) p.lessonStats = {};
  if (!p.lessonStats[currentLesson.id]) p.lessonStats[currentLesson.id] = {correct:0, attempts:0};
  p.lessonStats[currentLesson.id].attempts++;
  document.querySelectorAll('.lesson-option').forEach(option => option.disabled = true);
  const feedback = document.getElementById('lesson-feedback');
  if (answer === currentLesson.answer) {
    p.lessonStats[currentLesson.id].correct++;
    p.points += 10;
    button.classList.add('border-emerald-500','bg-emerald-50','text-emerald-700');
    feedback.className = 'mt-3 min-h-[2.5rem] text-sm font-bold text-emerald-600';
    feedback.textContent = '✅ Bravo, notion maîtrisée pour cette fois !';
  } else {
    button.classList.add('border-rose-500','bg-rose-50','text-rose-700');
    const good = [...document.querySelectorAll('.lesson-option')].find(option => option.textContent === currentLesson.answer);
    if (good) good.classList.add('border-emerald-500','bg-emerald-50','text-emerald-700');
    feedback.className = 'mt-3 min-h-[2.5rem] text-sm font-bold text-rose-600';
    feedback.textContent = `❌ La bonne réponse était « ${currentLesson.answer} ». Relis la règle puis recommence.`;
  }
  saveData();
  renderLessons();
}

function closeLesson() {
  document.getElementById('lesson-exercise')?.classList.add('hidden');
}
