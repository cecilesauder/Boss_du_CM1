/*
 * Avatar non genré façon R6 et boutique organisée.
 * Les formes sont volontairement géométriques pour rappeler les avatars bloc-
 * par-bloc des jeux de personnalisation, sans utiliser d'images externes.
 * Toute la garde-robe reste stockée localement dans le profil.
 */

const AVATAR_DEFAULTS = {
  skin: '#F2C6A0', height: 100, width: 100, face: 'smile',
  hair: 'short', hairColor: '#3B2416', top: 'tshirt', topColor: '#60A5FA',
  bottom: 'shorts', bottomColor: '#34D399', shoes: 'sneakers', shoesColor: '#334155',
  hat: 'none', owned: ['face-smile','hair-short','hair-bob','top-tshirt','bottom-shorts','shoes-sneakers','hat-none']
};

// Les prix restent accessibles : même une séance scolaire de 10 minutes
// rapporte normalement assez de points pour débloquer un élément.
const AVATAR_SHOP = [
  {id:'face-smile',type:'face',label:'Sourire',icon:'🙂',price:0},
  {id:'face-wink',type:'face',label:'Clin d’œil',icon:'😉',price:60},
  {id:'face-surprise',type:'face',label:'Surprise',icon:'😮',price:80},
  {id:'face-cool',type:'face',label:'Cool',icon:'😎',price:100},
  {id:'hair-short',type:'hair',label:'Cheveux courts',icon:'💇',price:0},
  {id:'hair-bob',type:'hair',label:'Carré',icon:'🧑',price:0},
  {id:'hair-curly',type:'hair',label:'Boucles',icon:'🌀',price:70},
  {id:'hair-spiky',type:'hair',label:'Ébouriffés',icon:'⚡',price:80},
  {id:'hair-colorful',type:'hair',label:'Mèche colorée',icon:'🌈',price:90},
  {id:'top-tshirt',type:'top',label:'Tee-shirt',icon:'👕',price:0},
  {id:'top-hoodie',type:'top',label:'Sweat',icon:'🧥',price:90},
  {id:'top-stripes',type:'top',label:'Rayures',icon:'🎽',price:70},
  {id:'top-star',type:'top',label:'Étoile',icon:'⭐',price:100},
  {id:'bottom-shorts',type:'bottom',label:'Short',icon:'🩳',price:0},
  {id:'bottom-joggers',type:'bottom',label:'Jogging',icon:'👖',price:80},
  {id:'bottom-cargo',type:'bottom',label:'Cargo',icon:'🩲',price:100},
  {id:'shoes-sneakers',type:'shoes',label:'Baskets',icon:'👟',price:0},
  {id:'shoes-boots',type:'shoes',label:'Bottines',icon:'🥾',price:70},
  {id:'shoes-high',type:'shoes',label:'Montantes',icon:'👞',price:90},
  {id:'hat-none',type:'hat',label:'Sans couvre-chef',icon:'—',price:0},
  {id:'hat-cap',type:'hat',label:'Casquette',icon:'🧢',price:60},
  {id:'hat-beanie',type:'hat',label:'Bonnet',icon:'🧶',price:70},
  {id:'hat-crown',type:'hat',label:'Couronne',icon:'👑',price:100}
];

const AVATAR_CATEGORIES = [
  {id:'all',label:'Tout',icon:'✨'}, {id:'face',label:'Visages',icon:'🙂'},
  {id:'hair',label:'Cheveux',icon:'💇'}, {id:'top',label:'Hauts',icon:'👕'},
  {id:'bottom',label:'Bas',icon:'🩳'}, {id:'shoes',label:'Chaussures',icon:'👟'},
  {id:'hat',label:'Accessoires',icon:'🧢'}
];
let avatarShopCategory = 'all';

function ensureAvatarData(profile = getProfile()) {
  profile.avatarData = {...AVATAR_DEFAULTS, ...(profile.avatarData || {})};
  profile.avatarData.owned = Array.from(new Set([...AVATAR_DEFAULTS.owned, ...(profile.avatarData.owned || [])]));
  return profile.avatarData;
}
function avatarItem(id) { return AVATAR_SHOP.find(item => item.id === id); }
function avatarOwned(id) { return ensureAvatarData().owned.includes(id); }

function renderAvatar() {
  const data = ensureAvatarData();
  const preview = document.getElementById('avatar-preview');
  if (!preview) return;
  preview.innerHTML = `<div class="avatar-stage r6-stage" style="--skin:${data.skin};--hair:${data.hairColor};--top:${data.topColor};--bottom:${data.bottomColor};--shoes:${data.shoesColor};--avatar-w:${data.width/100};--avatar-h:${data.height/100}">
    <div class="avatar-figure r6-figure">
      <div class="avatar-hat ${data.hat !== 'none' ? `is-${data.hat}` : ''}"></div>
      <div class="avatar-head r6-head"><div class="avatar-hair avatar-hair-${data.hair}"></div><div class="avatar-face avatar-face-${data.face}"><span class="avatar-eye left"></span><span class="avatar-eye right"></span><span class="avatar-mouth"></span></div></div>
      <div class="avatar-arm avatar-arm-left"></div><div class="avatar-arm avatar-arm-right"></div>
      <div class="avatar-torso"><div class="avatar-top avatar-top-${data.top}"></div></div>
      <div class="avatar-leg avatar-leg-left"><div class="avatar-bottom avatar-bottom-${data.bottom}"></div><span class="avatar-shoe"></span></div><div class="avatar-leg avatar-leg-right"><div class="avatar-bottom avatar-bottom-${data.bottom}"></div><span class="avatar-shoe"></span></div>
    </div></div>`;
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
  const choices = (type) => AVATAR_SHOP.filter(item => item.type === type && avatarOwned(item.id)).map(item => `<button type="button" class="avatar-choice ${data[type] === item.id.replace(`${type}-`, '') ? 'selected' : ''}" onclick="equipAvatar('${item.id}')">${item.icon}<span>${item.label}</span></button>`).join('');
  controls.innerHTML = `<div class="avatar-control-group"><h3>🙂 Visage</h3><div class="avatar-choice-grid">${choices('face')}</div></div>
    <div class="avatar-control-group"><h3>💇 Cheveux</h3><div class="avatar-choice-grid">${choices('hair')}</div><label>Couleur <input type="color" value="${data.hairColor}" onchange="updateAvatarColor('hairColor',this.value)"></label></div>
    <div class="avatar-control-group"><h3>👕 Haut</h3><div class="avatar-choice-grid">${choices('top')}</div><label>Couleur <input type="color" value="${data.topColor}" onchange="updateAvatarColor('topColor',this.value)"></label></div>
    <div class="avatar-control-group"><h3>🩳 Bas</h3><div class="avatar-choice-grid">${choices('bottom')}</div><label>Couleur <input type="color" value="${data.bottomColor}" onchange="updateAvatarColor('bottomColor',this.value)"></label></div>
    <div class="avatar-control-group"><h3>👟 Chaussures</h3><div class="avatar-choice-grid">${choices('shoes')}</div><label>Couleur <input type="color" value="${data.shoesColor}" onchange="updateAvatarColor('shoesColor',this.value)"></label></div>
    <div class="avatar-control-group"><h3>🧢 Casquette et accessoires</h3><div class="avatar-choice-grid">${choices('hat')}</div></div>`;
}

function renderAvatarShop() {
  const tabs = document.getElementById('avatar-shop-tabs');
  const shop = document.getElementById('avatar-shop');
  if (!tabs || !shop) return;
  tabs.innerHTML = AVATAR_CATEGORIES.map(category => `<button type="button" class="avatar-shop-tab ${avatarShopCategory === category.id ? 'active' : ''}" onclick="setAvatarShopCategory('${category.id}')">${category.icon} ${category.label}</button>`).join('');
  const items = AVATAR_SHOP.filter(item => item.price > 0 && (avatarShopCategory === 'all' || item.type === avatarShopCategory));
  shop.innerHTML = items.map(item => {
    const owned = avatarOwned(item.id);
    return `<div class="avatar-shop-item ${owned ? 'owned' : ''}"><span class="text-2xl">${item.icon}</span><div class="flex-1 text-left"><strong>${item.label}</strong><small>${owned ? 'Débloqué' : `${item.price} points`}</small></div>${owned ? '<span class="text-emerald-600 font-bold">✓</span>' : `<button type="button" onclick="buyAvatar('${item.id}')" class="avatar-buy">Acheter</button>`}</div>`;
  }).join('') || '<p class="text-sm text-slate-400 text-center py-3">Aucun élément dans cette catégorie pour le moment.</p>';
}
function setAvatarShopCategory(category) { avatarShopCategory = category; renderAvatarShop(); }
function updateAvatarColor(field, value) { ensureAvatarData()[field] = value; saveData(); renderAvatar(); }
function updateAvatarSize(field, value) { ensureAvatarData()[field] = Number(value); saveData(); renderAvatar(); }
function equipAvatar(id) { const item = avatarItem(id); if (!item || !avatarOwned(id)) return; ensureAvatarData()[item.type] = id.replace(`${item.type}-`, ''); saveData(); renderAvatar(); }

function buyAvatar(id) {
  const item = avatarItem(id), profile = getProfile(), data = ensureAvatarData(profile);
  if (!item || data.owned.includes(id)) return equipAvatar(id);
  if (profile.points < item.price) { showCelebration('🪙','Pas encore assez de points',`Il te manque ${item.price-profile.points} point${item.price-profile.points > 1 ? 's' : ''} pour débloquer ${item.label}.`,null); return; }
  profile.points -= item.price;
  data.owned.push(id); data[item.type] = id.replace(`${item.type}-`, '');
  saveData(); renderAvatar();
  showCelebration('🎁','Nouvel élément débloqué !',`${item.label} est maintenant disponible pour ton avatar.`,null);
}
function openAvatar() { switchTab('avatar'); }
