const FRAC_POOL = [
  {n:1,d:2},{n:1,d:3},{n:2,d:3},{n:1,d:4},{n:3,d:4},
  {n:1,d:6},{n:5,d:6},{n:2,d:6},{n:4,d:6},
  {n:3,d:8},{n:5,d:8},{n:1,d:8}
];
const SHAPES = ['circle','square','rectangle'];
let fracCurrent = null, fracAnswered = false;

/** Génère le SVG d'une fraction selon la forme */
function fracSVG(shape, n, d) {
  const FILL = '#6366f1', EMPTY = '#e2e8f0', S = '#fff', SW = 3;
  if (shape === 'circle') {
    let paths = '', cx=75, cy=75, r=64;
    for (let i=0; i<d; i++) {
      let a1=(i/d)*Math.PI*2 - Math.PI/2, a2=((i+1)/d)*Math.PI*2 - Math.PI/2;
      let x1=cx+r*Math.cos(a1), y1=cy+r*Math.sin(a1);
      let x2=cx+r*Math.cos(a2), y2=cy+r*Math.sin(a2);
      let large = (a2-a1 > Math.PI) ? 1 : 0;
      paths += `<path d="M${cx} ${cy} L${x1.toFixed(1)} ${y1.toFixed(1)} A${r} ${r} 0 ${large} 1 ${x2.toFixed(1)} ${y2.toFixed(1)}Z" fill="${i<n?FILL:EMPTY}" stroke="${S}" stroke-width="${SW}"/>`;
    }
    return `<svg viewBox="0 0 150 150" width="140" height="140">${paths}</svg>`;
  }
  if (shape === 'square') {
    let rects='', cols=d<=3?1:d<=6?2:d<=8?4:3, rows=Math.ceil(d/cols);
    let pw=(140-10)/cols, ph=(140-10)/rows, ox=5, oy=5;
    for(let i=0;i<d;i++){
      let c=i%cols, row=Math.floor(i/cols);
      rects+=`<rect x="${(ox+c*pw).toFixed(1)}" y="${(oy+row*ph).toFixed(1)}" width="${pw.toFixed(1)}" height="${ph.toFixed(1)}" fill="${i<n?FILL:EMPTY}" stroke="${S}" stroke-width="${SW}" rx="4"/>`;
    }
    return `<svg viewBox="0 0 150 150" width="140" height="140">${rects}</svg>`;
  }
  // Rectangle : bandes horizontales
  let strips='', ph2=(140-10)/d;
  for(let i=0;i<d;i++)
    strips+=`<rect x="5" y="${(5+i*ph2).toFixed(1)}" width="140" height="${ph2.toFixed(1)}" fill="${i<n?FILL:EMPTY}" stroke="${S}" stroke-width="${SW}" rx="4"/>`;
  return `<svg viewBox="0 0 150 150" width="140" height="140">${strips}</svg>`;
}

/** Affiche une fraction comme fraction typographique */
function fmtFrac(n,d){ return `<span class="flex flex-col items-center leading-none gap-0.5"><span class="text-lg font-extrabold border-b-2 border-current">${n}</span><span class="text-lg font-extrabold">${d}</span></span>`; }

function initFractionScore(){
  let p=getProfile(), fs=p.fractionStats||{correct:0,wrong:0,series:0};
  document.getElementById('frac-correct').textContent = fs.correct;
  document.getElementById('frac-wrong').textContent   = fs.wrong;
  document.getElementById('frac-series').textContent  = fs.series;
}

function generateFractionQuestion() {
  fracAnswered = false;
  document.getElementById('btn-next-fraction').classList.add('hidden');
  document.getElementById('fraction-feedback').textContent = '';
  document.getElementById('fraction-feedback').className   = 'min-h-[2rem] text-sm font-bold flex items-center justify-center text-slate-400';

  let correct = FRAC_POOL[Math.floor(Math.random()*FRAC_POOL.length)];
  let shape   = SHAPES[Math.floor(Math.random()*SHAPES.length)];
  fracCurrent = { correct, shape };

  document.getElementById('fraction-shape-container').innerHTML = fracSVG(shape, correct.n, correct.d);

  // 4 choix (1 correct + 3 distracteurs)
  let pool = [...FRAC_POOL].filter(f=>!(f.n===correct.n && f.d===correct.d));
  pool.sort(()=>Math.random()-.5);
  let choices = [{...correct}, ...pool.slice(0,3)];
  choices.sort(()=>Math.random()-.5);

  let cc = document.getElementById('fraction-choices');
  cc.innerHTML = '';
  choices.forEach(ch => {
    let btn = document.createElement('button');
    btn.className = "fraction-btn bg-slate-100 hover:bg-indigo-50 border-2 border-slate-200 hover:border-indigo-400 font-bold rounded-2xl text-slate-800 transition active:scale-95 flex items-center justify-center";
    btn.innerHTML = fmtFrac(ch.n, ch.d);
    btn.onclick   = () => handleFracAnswer(ch, btn);
    cc.appendChild(btn);
  });
}

function handleFracAnswer(chosen, clickedBtn) {
  if (fracAnswered) return;
  fracAnswered = true;
  document.querySelectorAll('#fraction-choices button').forEach(b=>b.disabled=true);

  let p = getProfile(), c = fracCurrent.correct;
  let ok = chosen.n===c.n && chosen.d===c.d;

  if (ok) {
    clickedBtn.className = "fraction-btn bg-emerald-100 border-2 border-emerald-500 font-bold rounded-2xl text-emerald-800 flex items-center justify-center";
    document.getElementById('fraction-feedback').innerHTML  = '🎉 Bravo, c\'est la bonne fraction !';
    document.getElementById('fraction-feedback').className  = 'min-h-[2rem] text-sm font-bold text-emerald-600 flex items-center justify-center';
    playTone(660, .15);
    p.fractionStats.correct++;
    p.fractionStats.series++;
    if (p.fractionStats.series > (p.fractionStats.bestSeries||0)) p.fractionStats.bestSeries = p.fractionStats.series;
    p.points += 10;
    if (p.fractionStats.series === 5)  awardBadge('frac_5',  'Série de 5 fractions 🍕',  '5 bonnes réponses d\'affilée !', 'fractions');
    if (p.fractionStats.series === 10) awardBadge('frac_10', 'Champion fractions 🏆', '10 bonnes réponses consécutives !', 'fractions');
  } else {
    clickedBtn.className = "fraction-btn bg-rose-100 border-2 border-rose-500 font-bold rounded-2xl text-rose-800 flex items-center justify-center";
    document.getElementById('fraction-feedback').innerHTML  = `❌ Oups ! C'était ${fmtFrac(c.n,c.d)}`;
    document.getElementById('fraction-feedback').className  = 'min-h-[2rem] text-sm font-bold text-rose-500 flex items-center justify-center';
    playTone(200, .2);
    p.fractionStats.wrong++;
    p.fractionStats.series = 0;
  }
  saveData(); initFractionScore();
  document.getElementById('btn-next-fraction').classList.remove('hidden');
}

// ═══════════════════════════════════════════════════════════════
//  ████ DICTÉES ████
// ═══════════════════════════════════════════════════════════════

