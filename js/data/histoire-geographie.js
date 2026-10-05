/*
 * Données Histoire-Géographie CM1 — rentrée 2026-2027.
 * Référence officielle : BO n°22 du 28 mai 2026, annexe 4.
 * Les formulations sont adaptées à un jeu pour enfants ; elles ne remplacent
 * pas le cours de la classe.
 */

const HG_PERIODS = [
  { id:'prehistoire', label:'Préhistoire', dates:'des premiers humains à -3500', start:-3500, end:-1000000, color:'#f59e0b', note:'Elle sera surtout étudiée en 6e, mais elle aide à comprendre la longue histoire humaine.' },
  { id:'antiquite', label:'Antiquité', dates:'-3500 à 476', start:476, end:-3500, color:'#ef4444', note:'Elle sera approfondie en 6e.' },
  { id:'moyen-age', label:'Moyen Âge', dates:'476 à 1492', start:1492, end:476, color:'#8b5cf6', note:'Au CM1, on étudie surtout la vie quotidienne du XIe au XIIIe siècle.' },
  { id:'temps-modernes', label:'Temps modernes', dates:'1492 à 1789', start:1789, end:1492, color:'#0ea5e9', note:'Au CM1, on étudie la monarchie, les explorations et les conquêtes européennes.' },
  { id:'contemporaine', label:'Époque contemporaine', dates:'1789 à aujourd’hui', start:2026, end:1789, color:'#10b981', note:'Au CM1, le repère central est l’année révolutionnaire 1789.' }
];

const HG_HISTORY_TOPICS = [
  { id:'moyen-age', icon:'🏰', title:'La vie quotidienne au Moyen Âge', period:'XIe-XIIIe siècles', color:'violet', summary:'Seigneurie, château, village, ville, Église et vie des enfants.', keywords:['seigneurie','seigneur','paysanne et paysan','corvée','dîme','paroisse','clergé','abbaye','cathédrale'] },
  { id:'monarchie', icon:'👑', title:'La monarchie en France', period:'XVIe-XVIIe siècles', color:'amber', summary:'François Ier, Henri IV, Louis XIV et la société d’ordres.', keywords:['mécène','Renaissance','édit de Nantes','monarchie absolue','noblesse','clergé','tiers état'] },
  { id:'explorations', icon:'🧭', title:'Explorations et conquêtes', period:'XVe-XVIIe siècles', color:'sky', summary:'Navigation, empires coloniaux, traite, esclavage et conséquences pour les peuples.', keywords:['boussole','caravelle','empire colonial','plantation','traite','esclavage'] },
  { id:'1789', icon:'🗝️', title:'1789, une année révolutionnaire', period:'année 1789', color:'rose', summary:'États généraux, Bastille, abolition des privilèges et droits de l’Homme.', keywords:['Ancien Régime','États généraux','14 juillet','4 août','26 août','liberté','égalité'] }
];

const HG_ROLE_CARDS = [
  { id:'enfant-paysan', icon:'🧒', title:'Enfant d’une famille paysanne', description:'Tu aides ta famille selon ton âge et les saisons. L’école n’est pas accessible comme aujourd’hui à tous les enfants.', question:'Au Moyen Âge, les enfants ont-ils les mêmes droits et la même vie qu’aujourd’hui ?', options:['Oui, exactement les mêmes','Non : les droits de l’enfant ne sont pas encore reconnus comme aujourd’hui','Les enfants n’existent pas'], answer:1, explanation:'Les enfants du Moyen Âge vivent dans une société très différente. Les droits de l’enfant seront reconnus beaucoup plus tard. Cela permet de comparer le passé avec les droits actuels, sans dire que le passé était « normal » pour nous.' },
  { id:'seigneur', icon:'🛡️', title:'Seigneur ou dame du château', description:'Tu protèges et diriges une seigneurie. Le château sert à vivre, se défendre et montrer le pouvoir.', question:'Quelle est une fonction importante du château ?', options:['Protéger les habitants et le seigneur','Fabriquer des ordinateurs','Être uniquement une école'], answer:0, explanation:'Un château est un lieu de protection, de vie et un symbole de la puissance du seigneur.' },
  { id:'artisan', icon:'🧵', title:'Artisane ou artisan en ville', description:'Tu travailles dans un atelier et tu peux vendre ta production au marché ou à la foire.', question:'Où un artisan peut-il vendre ses objets ?', options:['Au marché ou à la foire','Dans un satellite','Uniquement au château du roi'], answer:0, explanation:'Les villes médiévales accueillent des marchés, des foires et de nombreux ateliers.' },
  { id:'clerc', icon:'📜', title:'Membre du clergé', description:'Tu vis dans une paroisse, une abbaye ou une cathédrale. L’Église encadre la vie de la population.', question:'Quel rôle social l’Église peut-elle jouer ?', options:['Aider les pauvres et les malades','Construire des avions','Interdire tous les marchés'], answer:0, explanation:'Le programme rappelle notamment le rôle d’assistance et d’enseignement de l’Église.' }
];

const HG_CASTLE_ZONES = [
  { id:'donjon', label:'Donjon', description:'Grande tour fortifiée, souvent utilisée pour se défendre et parfois pour loger le seigneur.' },
  { id:'herse', label:'Herse', description:'Grille qui se baisse pour fermer l’entrée.' },
  { id:'pont-levis', label:'Pont-levis', description:'Pont mobile qui permet de franchir le fossé.' },
  { id:'fosses', label:'Fossés', description:'Creux autour des murailles, parfois rempli d’eau.' },
  { id:'chemin-de-ronde', label:'Chemin de ronde', description:'Passage en haut des murailles pour surveiller et défendre le château.' },
  { id:'murailles', label:'Murailles', description:'Murs épais qui entourent et protègent le château.' }
];

const HG_GEOGRAPHY_TOPICS = [
  { icon:'🌾', title:'Se nourrir', text:'Comparer les façons de produire, transporter et consommer les aliments dans différents espaces du monde.' },
  { icon:'⚖️', title:'Les inégalités dans le monde', text:'Observer les différences de richesse, d’accès aux soins, à l’eau, à l’école et aux ressources.' },
  { icon:'🚌', title:'Se déplacer', text:'Comprendre pourquoi les personnes se déplacent et comment les transports organisent les territoires.' },
  { icon:'🌐', title:'Communiquer avec Internet', text:'Repérer les réseaux, les usages d’Internet et les inégalités d’accès.' }
];
