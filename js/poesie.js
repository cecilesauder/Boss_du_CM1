let currentPoesie = null;
let poetryMode = 'menu';
let poetryPuzzle = [];
let poetryFillLevel = 1;
let poetryKaraokeIndex = -1;
let poetryQuizIndex = 0;
let poetryQuizScore = 0;

function poetryStart(id='poesie1') {
  currentPoesie = POESIES.find(p => p.id === id) || POESIES[0];
  document.getElementById('poesie-list').classList.add('hidden');
  document.getElementById('poesie-workspace').classList.remove('hidden');
  renderPoetryMenu();
}
function poetryClose() {
  document.getElementById('poesie-workspace').classList.add('hidden');
  document.getElementById('poesie-list').classList.remove('hidden');
  document.getElementById('poesie-stage').innerHTML = '';
  document.getElementById('poesie-menu').classList.remove('hidden');
  if (poetryAudio()) poetryAudio().pause();
  setGameActive(null);
}
function poetryAudio() { return document.getElementById('poesie-audio'); }
function renderPoetryMenu() {
  document.getElementById('poesie-menu').classList.remove('hidden');
  document.getElementById('poesie-stage').innerHTML = '';
  document.getElementById('poesie-title').textContent = currentPoesie.title;
  document.getElementById('poesie-author').textContent = currentPoesie.author;
}
function startPoetryMode(mode) {
  poetryMode = mode;
  document.getElementById('poesie-menu').classList.add('hidden');
  setGameActive('poesie');
  if (mode === 'puzzle') renderPoetryPuzzle();
  if (mode === 'fill') { poetryFillLevel = 1; renderPoetryFill(); }
  if (mode === 'karaoke') { poetryKaraokeIndex = -1; renderPoetryKaraoke(); }
  if (mode === 'quiz') { poetryQuizIndex = 0; poetryQuizScore = 0; renderPoetryQuiz(); }
}
function poetryBackMenu() { if (poetryAudio()) poetryAudio().pause(); renderPoetryMenu(); }
function poetryLineHtml(line, i, cls='') { return `<div class="poetry-line ${cls}" data-line="${i}">${line}</div>`; }

function renderPoetryPuzzle() {
  const lines = currentPoesie.lines.slice(0,-1);
  poetryPuzzle = lines.map((line,i)=>({line,i})).sort(()=>Math.random()-.5);
  document.getElementById('poesie-stage').innerHTML = `<div class="bg-amber-50 border border-amber-200 rounded-2xl p-3 text-sm text-amber-900">Glisse chaque vers dans le bon ordre. Sur tablette, tu peux aussi toucher un vers puis sa place.</div><div id="poetry-puzzle-bank" class="space-y-2 mt-3"></div><div id="poetry-puzzle-answer" class="space-y-2 mt-3 min-h-20 p-3 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200"></div><div id="poetry-puzzle-feedback" class="min-h-8 mt-3 text-center font-bold"></div><button class="poetry-secondary" onclick="poetryBackMenu()">✕ Quitter l’activité</button>`;
  const bank=document.getElementById('poetry-puzzle-bank'), answer=document.getElementById('poetry-puzzle-answer');
  poetryPuzzle.forEach(item=>{ const b=document.createElement('button'); b.className='poetry-card'; b.textContent=item.line; b.draggable=true; b.dataset.id=item.i; b.onclick=()=>poetryPlacePuzzle(item.i); b.ondragstart=e=>e.dataTransfer.setData('text/plain',item.i); bank.appendChild(b); });
  answer.ondragover=e=>e.preventDefault(); answer.ondrop=e=>poetryPlacePuzzle(Number(e.dataTransfer.getData('text/plain')));
}
function poetryPlacePuzzle(id) { const bank=document.getElementById('poetry-puzzle-bank'), answer=document.getElementById('poetry-puzzle-answer'), card=[...bank.children].find(x=>Number(x.dataset.id)===id); if(!card)return; answer.appendChild(card); const expected=[...answer.children].every((x,i)=>Number(x.dataset.id)===i); if(answer.children.length===currentPoesie.lines.length-1){const f=document.getElementById('poetry-puzzle-feedback');f.textContent=expected?'🎉 Bravo, la poésie est dans le bon ordre !':'Presque ! Replace certains vers puis réessaie.';f.className=`min-h-8 mt-3 text-center font-bold ${expected?'text-emerald-600':'text-rose-600'}`; if(expected){getProfile().points+=20;dailyRecord('poesie',20);saveData();playFanfare();}} }

function renderPoetryFill() {
  const lines=currentPoesie.lines.slice(0,-1); const hide=i=>poetryFillLevel===1?(i%4===3||i===4||i===7):poetryFillLevel===2?(i%2===0):true;
  document.getElementById('poesie-stage').innerHTML=`<div class="bg-violet-50 border border-violet-200 rounded-2xl p-3 text-sm text-violet-900">Niveau ${poetryFillLevel}/3 : complète les mots cachés, puis passe au niveau suivant.</div><div id="poetry-fill-lines" class="poetry-reading-card mt-3"></div><div id="poetry-fill-feedback" class="min-h-8 mt-3 text-center font-bold"></div><button id="poetry-fill-next" class="poetry-primary" onclick="nextPoetryFill()">Vérifier et passer au niveau suivant ➡️</button><button class="poetry-secondary" onclick="poetryBackMenu()">✕ Quitter l’activité</button>`;
  const box=document.getElementById('poetry-fill-lines'); lines.forEach((line,i)=>{const words=line.split(/(\s+)/); const html=words.map((w,j)=>{if(!hide(i)||!w.trim())return w; const clean=w.replace(/[.,!?;:«»]/g,''); return `<input class="poetry-blank" data-answer="${clean}" aria-label="Mot à compléter">`;}).join('');box.insertAdjacentHTML('beforeend',`<div class="poetry-fill-line">${html}</div>`);});
}
function nextPoetryFill(){const inputs=[...document.querySelectorAll('.poetry-blank')],bad=inputs.filter(i=>i.value.trim().toLowerCase().replace(/[’']/g,"'")!==i.dataset.answer.toLowerCase().replace(/[’']/g,"'"));const f=document.getElementById('poetry-fill-feedback');if(bad.length){bad.forEach(i=>i.classList.add('border-rose-500'));f.textContent=`Encore un effort : ${bad.length} mot${bad.length>1?'s':''} à retrouver.`;f.className='min-h-8 mt-3 text-center font-bold text-rose-600';return;}if(poetryFillLevel<3){poetryFillLevel++;renderPoetryFill();}else{f.textContent='🌟 Niveau 3 terminé, tu connais très bien le texte !';f.className='min-h-8 mt-3 text-center font-bold text-emerald-600';getProfile().points+=20;dailyRecord('poesie',20);saveData();playFanfare();}}

function renderPoetryKaraoke(){document.getElementById('poesie-stage').innerHTML=`<div class="bg-rose-50 border border-rose-200 rounded-2xl p-3 text-sm text-rose-900">Écoute l’enregistrement et clique sur un vers pour le mettre en évidence et le relire.</div><audio id="poesie-audio" controls class="w-full mt-3" src="${currentPoesie.audio}"></audio><div id="poetry-karaoke-lines" class="poetry-reading-card mt-3"></div><button class="poetry-secondary" onclick="poetryBackMenu()">✕ Quitter l’activité</button>`;const box=document.getElementById('poetry-karaoke-lines');currentPoesie.lines.forEach((line,i)=>{const b=document.createElement('button');b.className='poetry-line poetry-click-line';b.textContent=line;b.onclick=()=>{poetryKaraokeIndex=i;document.querySelectorAll('.poetry-click-line').forEach(x=>x.classList.remove('active'));b.classList.add('active');const a=poetryAudio();a.currentTime=0;a.play().catch(()=>{});};box.appendChild(b);});}
function renderPoetryQuiz(){const q=[['Quel instrument est cité dans la première strophe ?',['Une guitare','Un violon','Un tambour'],'Une guitare'],['Que peut remplacer un poème ?',['Quelques larmes','Les devoirs','Un arc-en-ciel'],'Quelques larmes'],['Le poème est décrit comme un voyage…',['extérieur','intérieur','spatial'],'intérieur'],['À quoi sert aussi un poème à la fin ?',['À dire « Je t’aime »','À dormir','À courir'],'À dire « Je t’aime »'],['Avec quoi la vie est-elle comparée ?',['Un tour de magicien','Une montagne','Un château'],'Un tour de magicien']];const [question,options,answer]=q[poetryQuizIndex];document.getElementById('poesie-stage').innerHTML=`<div class="bg-sky-50 border border-sky-200 rounded-2xl p-3 text-sm text-sky-900">Question ${poetryQuizIndex+1}/${q.length} · ${poetryQuizScore} bonne${poetryQuizScore>1?'s':''} réponse${poetryQuizScore>1?'s':''}</div><p class="text-lg font-bold text-slate-800 mt-4">${question}</p><div class="grid gap-2 mt-3">${options.map(o=>`<button class="poetry-option" onclick="answerPoetryQuiz(this,'${o.replaceAll("'","\\'")}','${answer.replaceAll("'","\\'")}')">${o}</button>`).join('')}</div><div id="poetry-quiz-feedback" class="min-h-8 mt-3 text-center font-bold"></div><button class="poetry-secondary" onclick="poetryBackMenu()">✕ Quitter l’activité</button>`;}
function answerPoetryQuiz(button,answer,expected){if([...document.querySelectorAll('.poetry-option')].some(b=>b.disabled))return;document.querySelectorAll('.poetry-option').forEach(b=>b.disabled=true);const f=document.getElementById('poetry-quiz-feedback');if(answer===expected){poetryQuizScore++;button.classList.add('correct');f.textContent='✅ Bravo !';f.className='min-h-8 mt-3 text-center font-bold text-emerald-600';}else{button.classList.add('wrong');f.textContent=`❌ La réponse était : ${expected}`;f.className='min-h-8 mt-3 text-center font-bold text-rose-600';}if(poetryQuizIndex<4){setTimeout(()=>{poetryQuizIndex++;renderPoetryQuiz();},700);}else{setTimeout(()=>{f.textContent=`🎉 Série terminée : ${poetryQuizScore}/5`;},700);getProfile().points+=poetryQuizScore*5;dailyRecord('poesie',poetryQuizScore*5);saveData();}}
