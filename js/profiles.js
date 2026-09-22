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
const PROFILE_ICONS = [...AVATARS, '🧑'];

function renderProfilesList() {
  let c = document.getElementById('profiles-list');
  c.innerHTML = '';
  appData.profiles.forEach(p => {
    let cur = p.id === appData.activeProfileId;
    let btn = document.createElement('div');
    btn.setAttribute('role', 'button');
    btn.tabIndex = 0;
    btn.className = `w-full p-2.5 rounded-xl border flex items-center justify-between text-sm font-bold ${cur?'bg-indigo-50 border-indigo-500 text-indigo-700':'bg-slate-50 border-slate-200 text-slate-600'}`;
    btn.onclick   = () => selectProfile(p.id);
    btn.onkeydown = (event) => { if (event.key === 'Enter' || event.key === ' ') selectProfile(p.id); };
    btn.innerHTML = `
      <span class="flex items-center gap-2"><select class="profile-icon-select bg-white border rounded-lg px-1 py-0.5 text-lg" aria-label="Choisir l’icône de ${p.name}">${PROFILE_ICONS.map(icon => `<option value="${icon}" ${p.avatar === icon ? 'selected' : ''}>${icon === '🧑' ? '🧑 Tête de mon avatar' : icon}</option>`).join('')}</select><span>${p.name}</span></span>
      <div class="flex gap-1.5 text-xs">
        <span class="bg-white px-2 py-0.5 rounded-md border">${Math.floor(p.totalSeconds/60)} min</span>
        <span class="bg-yellow-100 px-2 py-0.5 rounded-md text-yellow-800">${p.points} pts</span>
        <button type="button" class="profile-delete bg-rose-100 text-rose-600 px-2 py-0.5 rounded-md" aria-label="Supprimer ${p.name}">✕</button>
      </div>`;
    btn.querySelector('.profile-delete').onclick = (event) => {
      event.stopPropagation();
      deleteProfile(p.id);
    };
    btn.querySelector('.profile-icon-select').onchange = (event) => {
      event.stopPropagation();
      setProfileIcon(p.id, event.target.value);
    };
    btn.querySelector('.profile-icon-select').onclick = event => event.stopPropagation();
    c.appendChild(btn);
  });
}

function selectProfile(id) { appData.activeProfileId=id; saveData(); closeProfileModal(); switchTab('home'); }

function setProfileIcon(id, icon) {
  const profile = appData.profiles.find(item => item.id === id);
  if (!profile) return;
  profile.avatar = icon;
  saveData();
  renderProfilesList();
}

function deleteProfile(id) {
  if (appData.profiles.length <= 1) {
    showCelebration('👤', 'Profil conservé', 'Il faut garder au moins un profil dans l’application.', null);
    return;
  }
  const profile = appData.profiles.find(item => item.id === id);
  if (!profile) return;
  if (!window.confirm(`Supprimer le profil « ${profile.name} » et toute sa progression sur cet appareil ?`)) return;
  appData.profiles = appData.profiles.filter(item => item.id !== id);
  if (appData.activeProfileId === id) appData.activeProfileId = appData.profiles[0].id;
  saveData();
  renderProfilesList();
}

function createNewProfile() {
  let inp = document.getElementById('new-profile-name'), name = inp.value.trim();
  if (!name) return;
  let id = 'p_'+Date.now();
  appData.profiles.push({
    id, name, avatar:AVATARS[Math.floor(Math.random()*AVATARS.length)],
    avatarData:{skin:'#F2C6A0',height:100,width:100,face:'smile',hair:'short',hairColor:'#3B2416',top:'tshirt',topColor:'#60A5FA',bottom:'shorts',bottomColor:'#34D399',shoes:'sneakers',shoesColor:'#334155',hat:'none',owned:['face-smile','hair-short','hair-bob','top-tshirt','bottom-shorts','shoes-sneakers','hat-none']},
    totalSeconds:0, points:0, streak:0, lastVisitDate:null,
    mathStats:{}, dicteeStats:{}, fluenceStats:{}, poetryStats:{completed:[], points:0},
    fractionStats:{correct:0,wrong:0,series:0,bestSeries:0},
    badges:[]
  });
  appData.activeProfileId = id;
  inp.value = '';
  saveData(); closeProfileModal(); switchTab('home');
}
