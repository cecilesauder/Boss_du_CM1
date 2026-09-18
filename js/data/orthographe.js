// Une activité courte par leçon d'orthographe associée aux 26 thèmes.
// Chaque activité vise une seule notion pour rester rapide et adaptée au CM1.
const ORTHO_EXERCISES = {
  semaine1: { title:'Le pluriel des noms', instruction:'Choisis le pluriel correct.', sentence:'Les ___ brillent dans le ciel.', options:['ampoules','ampoulent','ampoule'], answer:'ampoules', explanation:'Le nom « ampoule » prend un -s au pluriel.' },
  semaine2: { title:'Écrire « a » ou « à »', instruction:'Choisis le bon mot.', sentence:'Le public ___ accès ___ l’arène.', options:['a / à','à / a','a / a'], answer:'a / à', explanation:'« a » est le verbe avoir ; « à » est une préposition.' },
  semaine3: { title:'Écrire « et » ou « est »', instruction:'Choisis la bonne paire.', sentence:'La cathédrale ___ grande ___ lumineuse.', options:['est / et','et / est','est / est'], answer:'est / et', explanation:'On peut remplacer « est » par « était » ; « et » relie deux mots.' },
  semaine4: { title:'Écrire « s » ou « ss »', instruction:'Complète le mot.', sentence:'Le bi__on est peint sur la paroi.', options:['s','ss','ç'], answer:'s', explanation:'Entre une voyelle et une consonne, un seul s suffit ici.' },
  semaine5: { title:'Les accords dans le groupe nominal', instruction:'Choisis le groupe correctement accordé.', sentence:'Les ___ feuilles tombent.', options:['petites','petite','petits'], answer:'petites', explanation:'« feuilles » est féminin pluriel : l’adjectif s’accorde en genre et en nombre.' },
  semaine6: { title:'Les marques du pluriel', instruction:'Choisis la bonne terminaison.', sentence:'Les tableau__ sont célèbres.', options:['x','s',''], answer:'x', explanation:'« tableau » fait son pluriel en -x : des tableaux.' },
  semaine7: { title:'Écrire « ou » ou « où »', instruction:'Choisis le bon mot.', sentence:'Le héros ne sait pas ___ aller ni ___ trouver Méduse.', options:['où / où','ou / où','où / ou'], answer:'ou / où', explanation:'« ou » propose un choix ; « où » indique un lieu.' },
  semaine8: { title:'Écrire « g » ou « gu »', instruction:'Choisis la bonne écriture.', sentence:'La déesse observe une grande va__e.', options:['g','gu','j'], answer:'gu', explanation:'Devant e, le groupe « gu » garde le son [g] dans « vague ».' },
  semaine9: { title:'Écrire « g » ou « ge »', instruction:'Complète le mot.', sentence:'Le seigneur protège le villa__e.', options:['g','ge','gu'], answer:'ge', explanation:'Devant a, le groupe « ge » garde le son [ʒ] dans « village ».' },
  semaine10: { title:'Écrire « son » ou « sont »', instruction:'Choisis le bon homophone.', sentence:'Les couleurs ___ vives dans ___ tableau.', options:['sont / son','son / sont','sont / sont'], answer:'sont / son', explanation:'« sont » peut être remplacé par « étaient » ; « son » indique la possession.' },
  semaine11: { title:'Écrire « on » ou « ont »', instruction:'Choisis la bonne forme.', sentence:'Les musiciens ___ compris qu’___ peut improviser.', options:['ont / on','on / ont','ont / ont'], answer:'ont / on', explanation:'« ont » est le verbe avoir ; « on » est un pronom.' },
  semaine12: { title:'Écrire « c » ou « ç »', instruction:'Choisis la bonne lettre.', sentence:'Le Fran__ois admire la fa__ade.', options:['ç / c','c / ç','ç / ç'], answer:'ç / ç', explanation:'La cédille permet de garder le son [s] devant a et o.' },
  semaine13: { title:'Le pluriel des noms (2)', instruction:'Choisis le pluriel correct.', sentence:'Les ___ racontent les saisons.', options:['paysans','paysanx','paysant'], answer:'paysans', explanation:'Les noms terminés par -an prennent généralement un -s au pluriel.' },
  semaine14: { title:'Le pluriel des noms (3)', instruction:'Choisis le bon pluriel.', sentence:'Les ___ sont alignés dans le champ.', options:['menhirs','menhirses','menhir'], answer:'menhirs', explanation:'« menhir » prend un -s au pluriel.' },
  semaine15: { title:'Le féminin des noms', instruction:'Choisis le féminin correct.', sentence:'Le prince rencontre la ___.', options:['princesse','princent','prinçesse'], answer:'princesse', explanation:'Le féminin de « prince » est « princesse ».' },
  semaine16: { title:'Le pluriel des adjectifs', instruction:'Accorde l’adjectif.', sentence:'Les jardins sont ___.', options:['magnifiques','magnifiquess','magnifique'], answer:'magnifiques', explanation:'L’adjectif « magnifique » prend un -s au pluriel.' },
  semaine17: { title:'Le féminin des adjectifs', instruction:'Accorde l’adjectif.', sentence:'La tapisserie est ___.', options:['précieuse','précieux','précieusse'], answer:'précieuse', explanation:'« précieux » devient « précieuse » au féminin.' },
  semaine18: { title:'Les lettres finales muettes', instruction:'Choisis la lettre finale.', sentence:'Le drapeau est blan__.', options:['c','d','t'], answer:'c', explanation:'On entend le c de « blanc » dans « blanche ».' },
  semaine19: { title:'Les mots en -ail, -eil, -euil, -ouil', instruction:'Choisis la bonne terminaison.', sentence:'Le sole__ éclaire le désert.', options:['il','eil','euil'], answer:'eil', explanation:'Le mot s’écrit « soleil » avec -eil.' },
  semaine20: { title:'Écrire « se » ou « ce »', instruction:'Choisis le bon mot.', sentence:'___ film raconte comment ___ raser un barbier.', options:['Ce / se','Se / ce','Ce / ce'], answer:'Ce / se', explanation:'« ce » accompagne un nom ; « se » accompagne un verbe pronominal.' },
  semaine21: { title:'Les accents : é, è, ê', instruction:'Choisis la bonne écriture.', sentence:'La temp__te soulève la m__r.', options:['ê / e','è / e','ê / è'], answer:'ê / e', explanation:'On écrit « tempête » avec ê et « mer » sans accent.' },
  semaine22: { title:'Les accents (2) : accentuer le « e »', instruction:'Choisis la bonne forme.', sentence:'Le chevalier cherche une ___.', options:['épée','épee','èpée'], answer:'épée', explanation:'Le mot « épée » prend deux accents aigus.' },
  semaine23: { title:'Écrire -é ou -er', instruction:'Choisis la terminaison.', sentence:'Léonard aime dessin__ et observ__ les tableaux.', options:['er / er','é / er','er / é'], answer:'er / er', explanation:'Après « aime », on utilise l’infinitif : dessiner, observer.' },
  semaine24: { title:'L’accord du participe passé', instruction:'Choisis l’accord correct.', sentence:'La statue est ___ dans le musée.', options:['placée','placé','placer'], answer:'placée', explanation:'Avec « être », le participe passé s’accorde avec le sujet féminin singulier.' },
  semaine25: { title:'Les noms en -tion et en -ssion', instruction:'Choisis la bonne terminaison.', sentence:'La ___ du peintre est très précise.', options:['passion','pacion','passionne'], answer:'passion', explanation:'Le nom « passion » s’écrit avec -ssion.' },
  semaine26: { title:'L’accord du verbe : cas particuliers', instruction:'Choisis la bonne forme du verbe.', sentence:'Les Trois Grâces ___ dans la sculpture.', options:['dansent','danse','danses'], answer:'dansent', explanation:'Le sujet « Les Trois Grâces » est au pluriel : le verbe prend -ent.' }
};


ORTHO_EXERCISES.semaine1.questions = [
  {sentence:'Les ___ brillent dans le ciel.', options:['ampoules','ampoulent','ampoule'], answer:'ampoules', explanation:'Un nom prend généralement -s au pluriel.'},
  {sentence:'Les ___ sont accrochées au plafond.', options:['lampe','lampes','lampent'], answer:'lampes', explanation:'« lampe » prend un -s au pluriel.'},
  {sentence:'Les ___ traversent la rivière.', options:['chevaux','chevals','cheval'], answer:'chevaux', explanation:'Les noms en -al font souvent leur pluriel en -aux.'},
  {sentence:'Les ___ courent dans le pré.', options:['animal','animaux','animals'], answer:'animaux', explanation:'« animal » devient « animaux ».'},
  {sentence:'Les ___ sont rangés dans la classe.', options:['journal','journaux','journals'], answer:'journaux', explanation:'« journal » devient « journaux ».'},
  {sentence:'Les ___ poussent dans le jardin.', options:['choux','chous','chou'], answer:'choux', explanation:'« chou » prend -x au pluriel.'},
  {sentence:'Les ___ sont délicieux.', options:['gâteaux','gâteaus','gâteau'], answer:'gâteaux', explanation:'Les noms en -eau prennent généralement -x.'},
  {sentence:'Les ___ sont posés sur la table.', options:['bateaux','bateaus','bateau'], answer:'bateaux', explanation:'« bateau » devient « bateaux ».'},
  {sentence:'Les ___ sont ouverts ce matin.', options:['magasins','magazin','magasine'], answer:'magasins', explanation:'« magasin » prend -s.'},
  {sentence:'Les ___ décorent la maison.', options:['vitraux','vitrails','vitrail'], answer:'vitraux', explanation:'« vitrail » devient « vitraux ».'},
  {sentence:'Les ___ sont nombreux dans le musée.', options:['travails','travaux','travail'], answer:'travaux', explanation:'« travail » devient « travaux ».'},
  {sentence:'Les ___ sont posés près de la porte.', options:['tapis','tapi','tapiss'], answer:'tapis', explanation:'« tapis » garde la même forme au pluriel.'},
  {sentence:'Les ___ sont très beaux.', options:['prix','prixes','pri'], answer:'prix', explanation:'« prix » garde la même forme au pluriel.'},
  {sentence:'Les ___ sont alignés dans la cour.', options:['nez','nes','nezs'], answer:'nez', explanation:'« nez » garde la même forme au pluriel.'},
  {sentence:'Les ___ visitent le château.', options:['touristes','touriste','touristent'], answer:'touristes', explanation:'« touriste » prend -s.'},
  {sentence:'Les ___ sont suspendus au plafond.', options:['lustres','lustre','lustrent'], answer:'lustres', explanation:'« lustre » prend -s.'},
  {sentence:'Les ___ sont plantés dans le parc.', options:['arbres','arbre','arbrent'], answer:'arbres', explanation:'« arbre » prend -s.'},
  {sentence:'Les ___ de Paris sont célèbres.', options:['monument','monuments','monumentes'], answer:'monuments', explanation:'« monument » prend -s.'},
  {sentence:'Les ___ sont accrochées aux fenêtres.', options:['rideaux','rideaus','rideau'], answer:'rideaux', explanation:'« rideau » devient « rideaux ».'},
  {sentence:'Les ___ sont rangés dans les classeurs.', options:['documents','document','documentent'], answer:'documents', explanation:'« document » prend -s.'},
  {sentence:'Les ___ sont dessinés dans le cahier.', options:['animaux','animalx','animales'], answer:'animaux', explanation:'« animal » devient « animaux ».'},
  {sentence:'Les ___ sont accrochés au portail.', options:['chevaux','chevals','chevalx'], answer:'chevaux', explanation:'« cheval » devient « chevaux ».'},
  {sentence:'Les ___ sont posés dans les vitrines.', options:['bijoux','bijous','bijou'], answer:'bijoux', explanation:'« bijou » prend -x.'},
  {sentence:'Les ___ sont accrochés aux murs.', options:['tableaux','tableaus','tableau'], answer:'tableaux', explanation:'« tableau » devient « tableaux ».'},
  {sentence:'Les ___ sont organisés pendant la fête.', options:['bal','bals','baux'], answer:'bals', explanation:'« bal » prend généralement -s.'},
  {sentence:'Les ___ sont installés dans la salle.', options:['chaises','chaise','chaisent'], answer:'chaises', explanation:'« chaise » prend -s.'},
  {sentence:'Les ___ éclairent la rue.', options:['panneaux','panneaus','panneau'], answer:'panneaux', explanation:'« panneau » devient « panneaux ».'},
  {sentence:'Les ___ sont rangés dans le cartable.', options:['cahiers','cahier','cahies'], answer:'cahiers', explanation:'« cahier » prend -s.'},
  {sentence:'Les ___ ont de grandes oreilles.', options:['souris','souries','sourit'], answer:'souris', explanation:'« souris » garde la même forme au pluriel.'},
  {sentence:'Les ___ nagent dans l’aquarium.', options:['poissons','poison','poisson'], answer:'poissons', explanation:'« poisson » prend -s.'}
];
ORTHO_EXERCISES.semaine1.rule = 'Pour former le pluriel, on ajoute souvent -s. Certains noms prennent -x, deviennent -aux ou gardent la même forme : des chevaux, des journaux, des tapis, des prix.';
Object.values(ORTHO_EXERCISES).forEach(exercise => {
  if (!exercise.questions) exercise.questions = [{sentence:exercise.sentence, options:exercise.options, answer:exercise.answer, explanation:exercise.explanation}];
});
