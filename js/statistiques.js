function renderDailyStats() {
  const box = document.getElementById('daily-stats-box');
  if (!box) return;
  const p = getProfile();
  const rows = [];
  for (let offset = 0; offset < 7; offset++) {
    const date = new Date();
    date.setDate(date.getDate() - offset);
    const key = date.toISOString().slice(0,10);
    const stat = p.dailyStats?.[key] || {seconds:0, points:0, maths:0, fractions:0, dictees:0, fluence:0, lessons:0, orthographe:0};
    rows.push({key, label: offset === 0 ? "Aujourd’hui" : date.toLocaleDateString('fr-FR',{weekday:'short', day:'numeric', month:'short'}), stat});
  }
  const maxSeconds = Math.max(1, ...rows.map(row => row.stat.seconds));
  box.innerHTML = `<div class="grid grid-cols-7 gap-1 items-end h-28">${rows.slice().reverse().map(row => `<div class="flex flex-col items-center gap-1 h-full justify-end"><div class="text-[9px] text-indigo-600 font-bold">${row.stat.seconds ? Math.max(1, Math.round(row.stat.seconds / 60))+'m' : ''}</div><div class="w-full bg-indigo-400 rounded-t-md" style="height:${Math.max(row.stat.seconds ? 8 : 2, row.stat.seconds / maxSeconds * 70)}px"></div><div class="text-[9px] text-slate-500 truncate w-full text-center">${row.label}</div></div>`).join('')}</div><div class="mt-3 space-y-2">${rows.map(row => `<div class="bg-slate-50 border border-slate-100 rounded-xl p-2"><div class="flex justify-between text-xs font-bold"><span>${row.label}</span><span class="text-indigo-600">${row.stat.points} pts · ${Math.floor(row.stat.seconds/60)} min</span></div><div class="text-[10px] text-slate-500 mt-1">✖️ ${row.stat.maths} · 🍕 ${row.stat.fractions} · ✍️ ${row.stat.dictees} · 📝 ${row.stat.orthographe} · 📚 ${row.stat.lessons} · 📖 ${row.stat.fluence}</div></div>`).join('')}</div>`;
}

function dailyStatsText() {
  const p = getProfile();
  const key = todayKey();
  const stat = p.dailyStats?.[key] || {};
  return `Bilan du ${new Date().toLocaleDateString('fr-FR')} pour ${p.name}\n${Math.floor((stat.seconds||0)/60)} min · ${stat.points||0} points\nMaths : ${stat.maths||0} · Dictée : ${stat.dictees||0} · Orthographe : ${stat.orthographe||0} · Leçons : ${stat.lessons||0} · Fluence : ${stat.fluence||0}`;
}
function copyDailyStats() {
  navigator.clipboard?.writeText(dailyStatsText()).then(() => showCelebration('📊','Bilan copié !','Tu peux le montrer à ta famille ou à ta maîtresse.',null));
}
