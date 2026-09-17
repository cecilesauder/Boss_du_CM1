function showCelebration(icon, title, desc, badgeTitle) {
  document.getElementById('cel-icon').textContent  = icon;
  document.getElementById('cel-title').textContent = title;
  document.getElementById('cel-desc').textContent  = desc;
  let box = document.getElementById('cel-badge-box');
  if (badgeTitle) {
    document.getElementById('cel-badge-title').textContent = badgeTitle;
    box.classList.remove('hidden');
  } else { box.classList.add('hidden'); }
  document.getElementById('celebration-modal').classList.remove('hidden');
}
function closeCelebrationModal() { document.getElementById('celebration-modal').classList.add('hidden'); }

// ═══════════════════════════════════════════════════════════════
//  ████ PROFILS ████
// ═══════════════════════════════════════════════════════════════
function openProfileModal()  { document.getElementById('profile-modal').classList.remove('hidden'); renderProfilesList(); }
function closeProfileModal() { document.getElementById('profile-modal').classList.add('hidden'); }

function renderProfilesList() {
  let c = document.getElementById('profiles-list');
  c.innerHTML = '';
  appData.profiles.forEach(p => {
    let cur = p.id === appData.activeProfileId;
    let btn = document.createElement('button');
    btn.className = `w-full p-2.5 rounded-xl border flex items-center justify-between text-sm font-bold ${cur?'bg-indigo-50 border-indigo-500 text-indigo-700':'bg-slate-50 border-slate-200 text-slate-600'}`;
    btn.onclick   = () => selectProfile(p.id);
    btn.innerHTML = `
      <span>${p.avatar} ${p.name}</span>
      <div class="flex gap-1.5 text-xs">
        <span class="bg-white px-2 py-0.5 rounded-md border">${Math.floor(p.totalSeconds/60)} min</span>
        <span class="bg-yellow-100 px-2 py-0.5 rounded-md text-yellow-800">${p.points} pts</span>
      </div>`;
    c.appendChild(btn);
  });
}

function selectProfile(id) { appData.activeProfileId=id; saveData(); closeProfileModal(); switchTab('home'); }

function createNewProfile() {
  let inp = document.getElementById('new-profile-name'), name = inp.value.trim();
  if (!name) return;
  let id = 'p_'+Date.now();
  appData.profiles.push({
    id, name, avatar:AVATARS[Math.floor(Math.random()*AVATARS.length)],
    totalSeconds:0, points:0, streak:0, lastVisitDate:null,
    mathStats:{}, dicteeStats:{}, fluenceStats:{},
    fractionStats:{correct:0,wrong:0,series:0,bestSeries:0},
    badges:[]
  });
  appData.activeProfileId = id;
  inp.value = '';
  saveData(); closeProfileModal(); switchTab('home');
}


