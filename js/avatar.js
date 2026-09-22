/*
 * Avatar non genré et boutique.
 * Tout est dessiné avec des formes CSS : aucun fichier image ni service externe
 * n'est nécessaire, et la personnalisation reste enregistrée localement.
 */

const AVATAR_DEFAULTS = {
  skin: '#F2C6A0', height: 100, width: 100, face: 'smile',
  hair: 'short', hairColor: '#3B2416', top: 'tshirt', topColor: '#60A5FA',
  bottom: 'shorts', bottomColor: '#34D399', shoes: 'sneakers', shoesColor: '#334155',
  hat: 'none', owned: ['face-smile', 'hair-short', 'hair-bob', 'top-tshirt', 'bottom-shorts', 'shoes-sneakers', 'hat-none']
};

const AVATAR_SHOP = [
  {id:'face-smile', type:'face', label:'Sourire', icon:'🙂', price:0},
  {id:'face-wink', type:'face', label:'Clin d’œil', icon:'😉', price:120},
  {id:'face-surprise', type:'face', label:'Surprise', icon:'😮', price:150},
  {id:'hair-short', type:'hair', label:'Cheveux courts', icon:'💇', price:0},
  {id:'hair-bob', type:'hair', label:'Carré', icon:'🧑', price:0},
  {id:'hair-curly', type:'hair', label:'Boucles', icon:'🌀', price:180},
  {id:'hair-spiky', type:'hair', label:'Ébouriffés', icon:'⚡', price:200},
  {id:'top-tshirt', type:'top', label:'Tee-shirt', icon:'👕', price:0},
  {id:'top-hoodie', type:'top', label:'Sweat', icon:'🧥', price:250},
  {id:'bottom-shorts', type:'bottom', label:'Short', icon:'🩳', price:0},
  {id:'bottom-joggers', type:'bottom', label:'Jogging', icon:'👖', price:220},
  {id:'shoes-sneakers', type:'shoes', label:'Baskets', icon:'👟', price:0},
  {id:'shoes-boots', type:'shoes', label:'Bottines', icon:'🥾', price:180},
  {id:'hat-none', type:'hat', label:'Sans casquette', icon:'—', price:0},
  {id:'hat-cap', type:'hat', label:'Casquette', icon:'🧢', price:160}
];

function ensureAvatarData(profile = getProfile()) {
  profile.avatarData = {...AVATAR_DEFAULTS, ...(profile.avatarData || {})};
  profile.avatarData.owned = Array.from(new Set([
    ...AVATAR_DEFAULTS.owned,
    ...(profile.avatarData.owned || [])
  ]));
  return profile.avatarData;
}

function avatarItem(id) { return AVATAR_SHOP.find(item => item.id === id); }
function avatarOwned(id) { return ensureAvatarData().owned.includes(id); }
function avatarEquipped(item) {
  const data = ensureAvatarData();
  return data[item.type] === item.id.replace(`${item.type}-`, '') || data[item.type] === item.id;
}

function renderAvatar() {
  const data = ensureAvatarData();
  const preview = document.getElementById('avatar-preview');
  if (!preview) return;
  preview.innerHTML = `
    <div class="avatar-stage" style="--skin:${data.skin};--hair:${data.hairColor};--top:${data.topColor};--bottom:${data.bottomColor};--shoes:${data.shoesColor};--avatar-w:${data.width/100};--avatar-h:${data.height/100}">
      <div class="avatar-figure">
        <div class="avatar-hat ${data.hat === 'cap' ? 'is-cap' : ''}"></div>
        <div class="avatar-head"><div class="avatar-hair avatar-hair-${data.hair}"></div><div class="avatar-face avatar-face-${data.face}"><span class="avatar-eye left"></span><span class="avatar-eye right"></span><span class="avatar-mouth"></span></div></div>
        <div class="avatar-body"><div class="avatar-top avatar-top-${data.top}"></div><div class="avatar-bottom avatar-bottom-${data.bottom}"></div></div>
        <div class="avatar-shoes"><span></span><span></span></div>
      </div>
    </div>`;
  document.getElementById('avatar-points').textContent = `${getProfile().points} points disponibles`;
  document.getElementById('avatar-height').value = data.height;
  document.getElementById('avatar-width').value = data.width;
  document.getElementById('avatar-height-value').textContent = `${data.height}%`;
  document.getElementById('avatar-width-value').textContent = `${data.width}%`;
  document.getElementById('avatar-skin').value = data.skin;
  renderAvatarControls(data);
  renderAvatarShop();
}

function renderAvatarControls(data) {
  const controls = document.getElementById('avatar-controls');
  if (!controls) return;
  const faces = AVATAR_SHOP.filter(item => item.type === 'face' && avatarOwned(item.id));
  const hairs = AVATAR_SHOP.filter(item => item.type === 'hair' && avatarOwned(item.id));
  const tops = AVATAR_SHOP.filter(item => item.type === 'top' && avatarOwned(item.id));
  const bottoms = AVATAR_SHOP.filter(item => item.type === 'bottom' && avatarOwned(item.id));
  const shoes = AVATAR_SHOP.filter(item => item.type === 'shoes' && avatarOwned(item.id));
  const hats = AVATAR_SHOP.filter(item => item.type === 'hat' && avatarOwned(item.id));
  const choices = (items, type) => items.map(item => `<button type="button" class="avatar-choice ${data[type] === item.id.replace(`${type}-`, '') ? 'selected' : ''}" onclick="equipAvatar('${item.id}')">${item.icon}<span>${item.label}</span></button>`).join('');
  controls.innerHTML = `
    <div class="avatar-control-group"><h3>🙂 Visage</h3><div class="avatar-choice-grid">${choices(faces,'face')}</div></div>
    <div class="avatar-control-group"><h3>💇 Cheveux</h3><div class="avatar-choice-grid">${choices(hairs,'hair')}</div><label>Couleur <input type="color" value="${data.hairColor}" onchange="updateAvatarColor('hairColor',this.value)"></label></div>
    <div class="avatar-control-group"><h3>👕 Haut</h3><div class="avatar-choice-grid">${choices(tops,'top')}</div><label>Couleur <input type="color" value="${data.topColor}" onchange="updateAvatarColor('topColor',this.value)"></label></div>
    <div class="avatar-control-group"><h3>🩳 Bas</h3><div class="avatar-choice-grid">${choices(bottoms,'bottom')}</div><label>Couleur <input type="color" value="${data.bottomColor}" onchange="updateAvatarColor('bottomColor',this.value)"></label></div>
    <div class="avatar-control-group"><h3>👟 Chaussures</h3><div class="avatar-choice-grid">${choices(shoes,'shoes')}</div><label>Couleur <input type="color" value="${data.shoesColor}" onchange="updateAvatarColor('shoesColor',this.value)"></label></div>
    <div class="avatar-control-group"><h3>🧢 Casquette</h3><div class="avatar-choice-grid">${choices(hats,'hat')}</div></div>`;
}

function renderAvatarShop() {
  const shop = document.getElementById('avatar-shop');
  if (!shop) return;
  shop.innerHTML = AVATAR_SHOP.filter(item => item.price > 0).map(item => {
    const owned = avatarOwned(item.id);
    return `<div class="avatar-shop-item ${owned ? 'owned' : ''}"><span class="text-2xl">${item.icon}</span><div class="flex-1 text-left"><strong>${item.label}</strong><small>${owned ? 'Débloqué' : `${item.price} points`}</small></div>${owned ? '<span class="text-emerald-600 font-bold">✓</span>' : `<button type="button" onclick="buyAvatar('${item.id}')" class="avatar-buy">Acheter</button>`}</div>`;
  }).join('');
}

function updateAvatarColor(field, value) {
  const data = ensureAvatarData();
  data[field] = value;
  saveData();
  renderAvatar();
}

function updateAvatarSize(field, value) {
  const data = ensureAvatarData();
  data[field] = Number(value);
  document.getElementById(`avatar-${field}-value`).textContent = `${data[field]}%`;
  saveData();
  renderAvatar();
}

function equipAvatar(id) {
  const item = avatarItem(id);
  if (!item || !avatarOwned(id)) return;
  const data = ensureAvatarData();
  data[item.type] = id.replace(`${item.type}-`, '');
  saveData();
  renderAvatar();
}

function buyAvatar(id) {
  const item = avatarItem(id);
  const profile = getProfile();
  const data = ensureAvatarData(profile);
  if (!item || data.owned.includes(id)) return equipAvatar(id);
  if (profile.points < item.price) {
    showCelebration('🪙', 'Pas encore assez de points', `Il te manque ${item.price - profile.points} point${item.price - profile.points > 1 ? 's' : ''} pour débloquer ${item.label}.`, null);
    return;
  }
  profile.points -= item.price;
  data.owned.push(id);
  data[item.type] = id.replace(`${item.type}-`, '');
  dailyRecord('avatar', 0);
  saveData();
  renderAvatar();
  showCelebration('🎁', 'Nouvel élément débloqué !', `${item.label} est maintenant disponible pour ton avatar.`, null);
}

function openAvatar() {
  switchTab('avatar');
}
