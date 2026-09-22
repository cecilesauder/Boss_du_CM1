const fs = require('fs');
const vm = require('vm');
const path = require('path');
const root = path.resolve(__dirname, '..');
const context = { console, DICTEE_WEEKS: [], window: {} };
vm.createContext(context);
function load(file) { vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, {filename:file}); }
load('js/data/lessons.js');
load('js/data/orthographe.js');
load('js/data/orthographe-questions.js');
load('js/data/lessons-questions.js');
load('js/fractions.js');
load('js/geometry.js');
vm.runInContext('this.__ORTHO = ORTHO_EXERCISES; this.__LESSONS = FRENCH_LESSONS; this.__FRACS = FRAC_POOL; this.__GEOMETRY = GEOMETRY_QUESTIONS;', context);
const ortho = context.__ORTHO;
const lessons = Object.values(context.__LESSONS).flat();
const fractions = context.__FRACS;
const geometry = context.__GEOMETRY;
const out = [];
const esc = value => String(value ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
const answerLine = (q) => q.options.map((option, i) => option === q.answer ? `**${i+1}. ${esc(option)} ✅**` : `${i+1}. ${esc(option)}`).join('<br>');
out.push('# Validation des corrigés des exercices');
out.push('');
out.push('Ce document recense les corrigés actuellement présents dans l’application. **Aucune réponse n’a été modifiée par ce rapport.** Les questions générées automatiquement à partir d’un même modèle sont regroupées sous la notion concernée.');
out.push('');
out.push('## Comment valider');
out.push('');
out.push('Pour chaque ligne, vérifier la phrase, les choix et la réponse en gras. Vous pouvez répondre avec les numéros des questions à corriger, par exemple `O4-2 : réponse ss, puis s, puis s, puis ss`. Pour les questions correctes, vous pouvez simplement indiquer « validé ».');
out.push('');
out.push('## Proposition de remplacement pour O4 — Écrire « s » ou « ss »');
out.push('');
out.push('La fiche photographiée comporte six mots au niveau 1 et cinq phrases au niveau 2. Les réponses proposées ci-dessous respectent la fiche et conservent **bison** et **passage**, comme demandé.');
out.push('');
out.push('| ID | Énoncé | Réponse attendue |');
out.push('|---|---|---|');
const o4 = [
  ['O4-1','un ...ifflet','s → sifflet'],
  ['O4-2','des chau...ettes','ss → chaussettes'],
  ['O4-3','une bro...e','ss → brosse'],
  ['O4-4','une ca...quette','s → casquette'],
  ['O4-5','un cactu...','s → cactus'],
  ['O4-6','la ...auci...e','s puis ss → saucisse'],
  ['O4-7','Le bi...on est peint sur la paroi de Lascaux.','s → bison'],
  ['O4-8','Les pa...ages racontent une scène de chasse.','ss → passages'],
  ['O4-9','Estelle chau...e ses ba...kets et sort faire ses cour...es en vite...e.','ss, s, s, ss → chausse, baskets, courses, vitesse'],
  ['O4-10','Ga...pard pa...e ...on temps à de...iner, c’est un arti...te !','s, ss, s, ss, s → Gaspard, passe, son, dessiner, artiste'],
  ['O4-11','Je ...uis dé...espéré par la quantité de vai...elle qui re...te.','s, s, ss, s → suis, désespéré, vaisselle, reste'],
  ['O4-12','Une per...onne ble...ée demande a...i...tance.','ss, ss, ss, s → personne, blessée, assistance'],
  ['O4-13','Cette pou...ette ne pa...e pas dans l’e...calier.','ss, ss, s → poussette, passe, escalier']
];
o4.forEach(row => out.push(`| ${row[0]} | ${row[1]} | **${row[2]}** |`));
out.push('');
out.push('## A. Orthographe — corrigés actuellement enregistrés');
out.push('');
for (const [id, ex] of Object.entries(ortho)) {
  out.push(`### ${id} — ${ex.title}`);
  out.push('');
  out.push(`**Règle actuellement affichée :** ${esc(ex.rule || ex.explanation || '')}`);
  out.push('');
  out.push('| N° | Phrase / consigne | Options | Réponse enregistrée |');
  out.push('|---:|---|---|---|');
  (ex.questions || []).forEach((q, i) => out.push(`| ${i+1} | ${esc(q.sentence || q.prompt)} | ${answerLine(q)} | **${esc(q.answer)}** |`));
  out.push('');
}
out.push('## B. Grammaire, conjugaison et lexique — corrigés actuellement enregistrés');
out.push('');
for (const lesson of lessons) {
  out.push(`### ${lesson.id} — ${lesson.title}`);
  out.push('');
  out.push('| N° | Question | Options | Réponse enregistrée |');
  out.push('|---:|---|---|---|');
  (lesson.questions || []).forEach((q, i) => out.push(`| ${i+1} | ${esc(q.prompt)} | ${answerLine(q)} | **${esc(q.answer)}** |`));
  out.push('');
}
out.push('## C. Fractions, géométrie, multiplications et poésie');
out.push('');
out.push('### Fractions');
out.push('');
out.push('Le jeu des fractions génère une forme parmi cercle, carré et rectangle. La réponse attendue est toujours la fraction `n/d` de la ligne correspondante. Les trois autres propositions sont tirées aléatoirement du même inventaire.');
out.push('');
out.push('| N° | Fraction représentée | Réponse attendue |');
out.push('|---:|---:|---:|');
fractions.forEach((f, i) => out.push(`| ${i+1} | ${f.n}/${f.d} parts colorées sur ${f.d} | **${f.n}/${f.d}** |`));
out.push('');
out.push('### Géométrie');
out.push('');
out.push('| N° | Question | Options | Réponse enregistrée |');
out.push('|---:|---|---|---|');
geometry.forEach((q, i) => out.push(`| ${i+1} | ${esc(q.q)} | ${q.options.map((o, j) => o === q.answer ? `**${j+1}. ${esc(o)} ✅**` : `${j+1}. ${esc(o)}`).join('<br>')} | **${esc(q.answer)}** |`));
out.push('');
out.push('### Multiplications');
out.push('');
out.push('Les réponses sont calculées par le jeu avec `table × facteur`, pour les tables de 1 à 10 et les facteurs de 1 à 10. Le corrigé mathématique est déterministe. Les choix incorrects sont générés automatiquement à partir de la table en cours.');
out.push('');
out.push('### Poésie — questions de compréhension');
out.push('');
const poetryQuiz = [
  ['Quel instrument est cité dans la première strophe ?',['Une guitare','Un violon','Un tambour'],'Une guitare'],
  ['Que peut remplacer un poème ?',['Quelques larmes','Les devoirs','Un arc-en-ciel'],'Quelques larmes'],
  ['Le poème est décrit comme un voyage…',['extérieur','intérieur','spatial'],'intérieur'],
  ['À quoi sert aussi un poème à la fin ?',['À dire « Je t’aime »','À dormir','À courir'],'À dire « Je t’aime »'],
  ['Avec quoi la vie est-elle comparée ?',['Un tour de magicien','Une montagne','Un château'],'Un tour de magicien']
];
out.push('| N° | Question | Options | Réponse enregistrée |');
out.push('|---:|---|---|---|');
poetryQuiz.forEach((q, i) => out.push(`| ${i+1} | ${esc(q[0])} | ${q[1].map((o, j) => o === q[2] ? `**${j+1}. ${esc(o)} ✅**` : `${j+1}. ${esc(o)}`).join('<br>')} | **${esc(q[2])}** |`));
out.push('');
out.push('## D. Points de vigilance déjà repérés');
out.push('');
out.push('- **O4 actuel** : plusieurs questions utilisent des mots ou des réponses qui ne correspondent pas à la règle « s / ss ». La série de remplacement proposée en tête du document corrige ce point.');
out.push('- **O9, question 4** : « gran__e » doit donner « grande », mais les options actuelles ne proposent pas la lettre `d`.');
out.push('- **O8, questions 2 à 4** : les phrases « bou__er », « li__e » et « na__t » relèvent respectivement de `g`, `gn` et `î`, et ne peuvent pas être corrigées avec les options actuellement proposées.');
out.push('- **L3, question 3** : dans « art, artiste, artisan », l’ordre alphabétique attendu est à vérifier, car « artisan » et « artiste » sont inversés dans la réponse actuelle.');
out.push('- **L4, question 2** : « terrien » et « terrassement » peuvent tous les deux être considérés comme appartenant à la famille de « terre » ; la question doit être reformulée pour n’avoir qu’une seule réponse.');
out.push('');
out.push('## Validation attendue');
out.push('');
out.push('Merci de valider la série O4 proposée et de signaler les lignes à corriger dans les autres notions. Une fois cette validation reçue, les banques seront modifiées puis retestées dans l’application.');
out.push('');
out.push('## Origine du relevé');
out.push('');
out.push('Le relevé est généré directement à partir des fichiers de données de l’application. La série O4 proposée reprend le contenu lisible sur la photographie fournie dans la demande.');
fs.writeFileSync(path.join(root, 'VALIDATION_CORRIGES_EXERCICES.md'), out.join('\n') + '\n');
console.log(`Generated ${Object.values(ortho).reduce((n,e)=>n+(e.questions||[]).length,0)} orthography rows and ${lessons.reduce((n,e)=>n+(e.questions||[]).length,0)} lesson rows.`);
console.log('Output: VALIDATION_CORRIGES_EXERCICES.md');
