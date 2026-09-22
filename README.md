# Boss du CM1

Jeu web de révision pour les élèves de CM1 : tables de multiplication, fractions, dictées et lecture fluence.

> 🎮 **[Accéder directement au jeu →](https://cecilesauder.github.io/Boss_du_CM1/)**

## Jouer

Le jeu est publié sur [GitHub Pages](https://cecilesauder.github.io/Boss_du_CM1/).

## Organisation des fichiers

| Emplacement | Rôle |
|---|---|
| `index.html` | Structure de l'interface et chargement des modules. |
| `assets/styles.css` | Styles spécifiques au jeu, animations et carte de mémorisation. |
| `js/data/dictees.js` | 26 thèmes de dictées et leur vocabulaire enrichi. |
| `js/data/orthographe.js` + `js/data/orthographe-questions.js` | 26 exercices d’orthographe contextualisés, avec 30 questions par thème. |
| `js/data/fluence.js` | 26 textes de fluence ; modifier le champ `text` de `FLUENCE_WEEKS` pour remplacer manuellement un texte. |
| `js/data/poesies.js` + `js/poesie.js` | Poésies à apprendre : puzzle de vers, texte à trous, karaoké pas-à-pas et questions de compréhension. |
| `js/data/lessons.js` + `js/data/lessons-questions.js` | Leçons de grammaire, conjugaison et lexique avec 10 questions par notion. |
| `js/multiplication.js` | Quiz des tables, sélection de plusieurs tables, progression et réactions spéciales 6 × 7. |
| `assets/gifs/table-6-7.gif` | GIF de récompense affiché après une bonne réponse rapide à 6 × 7 ou 7 × 6. |
| `js/avatar.js` | Avatar non genré, personnalisation, garde-robe et achats avec les points. |
| `js/*.js` | Logique distincte pour la navigation, les profils, fractions, dictées, fluence, badges et audio. |

Les progrès sont enregistrés localement dans le navigateur de chaque élève.

La rubrique **Poésies** contient pour le moment la poésie 1, « À quoi ça sert, un poème ? » d’Henriette Major, à apprendre pour le jeudi 24 septembre. Son enregistrement audio est stocké dans `assets/audio/Poésie1.mp3`. Les prochaines poésies pourront être ajoutées dans le tableau `POESIES` du fichier `js/data/poesies.js`.

Les 26 fiches de fluence officielles de [Stylo Plume Blog](https://www.styloplumeblog.fr/dictees-histoire-arts-cm-genially/) sont maintenant accessibles depuis chaque thème via un lien « Fiche officielle ». Les textes affichés dans l’application restent des textes de révision originaux afin de ne pas recopier une ressource éditoriale protégée.

La page **Leçons** propose quinze activités originales de niveau CM1, réparties entre grammaire, conjugaison et lexique. Chaque notion propose désormais une série de dix questions et situations. Les scores sont conservés par profil et peuvent être copiés ou partagés depuis la galerie des badges.

La rubrique Maths comprend également un module original de **géométrie** avec des exercices sur les périmètres, les angles, les figures, la symétrie et les aires. La galerie de progression conserve un historique quotidien sur sept jours, avec le temps réellement passé dans les jeux et le détail des activités réalisées.

La galerie des badges n’affiche pas de classement entre élèves. Les statistiques des sept derniers jours sont repliées par défaut et apparaissent seulement lorsque l’élève les demande.

La rubrique **Mon avatar** propose une silhouette non genrée de type **R6 bloc par bloc** : tête carrée, torse, deux bras et deux jambes. Elle permet de modifier la taille, la largeur, la couleur de peau, les expressions, les cheveux, le tee-shirt, le bas, les chaussures et les accessoires. Les éléments de base sont disponibles gratuitement, tandis que les expressions, coiffures et vêtements supplémentaires sont organisés par catégories et peuvent être débloqués avec les points gagnés dans les activités. Les achats et la garde-robe sont enregistrés localement dans le profil de l’élève.

Le profil possède également un sélecteur d’icône. L’élève peut choisir une icône parmi les emojis proposés ou afficher l’option **Tête de mon avatar** à côté de son nom. L’espace **Créer tes propres habits** est visible mais verrouillé pour le moment. Il renvoie aux [patrons officiels Roblox pour les hauts et les bas](https://create.roblox.com/docs/avatar/classic-clothing) et à leur [archive de téléchargement](https://prod.docsiteassets.roblox.com/assets/accessories/classic-clothing/Classic-Clothing-Templates.zip), afin de préparer une future fonctionnalité de création.

Les prix de la boutique vont actuellement de 60 à 100 points pour les petits accessoires, expressions et styles, avec quelques éléments intermédiaires à 70–100 points. Cette échelle a été choisie pour qu’une séance d’environ dix minutes d’exercices scolaires permette normalement de débloquer au moins un nouvel élément. Les récompenses sont reliées aux activités de maths, fractions, dictées, orthographe, fluence, leçons, géométrie et poésie ; les achats ne donnent pas de points et ne peuvent jamais faire passer le solde sous zéro.

Le module de multiplication permet de **sélectionner plusieurs tables**, de tout sélectionner ou de tout désélectionner. Chaque calcul validé trois fois en moins de deux secondes est considéré comme acquis et ne revient plus dans les questions de la sélection en cours.

Les calculs **6 × 7** et **7 × 6** déclenchent une très courte secousse visuelle qui ne bloque pas les clics. Une bonne réponse donnée dans le temps affiche brièvement le GIF associé sans masquer la zone de jeu. Lorsque les tables de 6 et de 7 sont toutes les deux maîtrisées, le badge spécial **Duo 6 × 7** est débloqué avec ce GIF comme visuel.

Le fichier [`VALIDATION_CORRIGES_EXERCICES.md`](VALIDATION_CORRIGES_EXERCICES.md) recense les 780 questions d’orthographe et les 150 questions de grammaire, conjugaison et lexique avec leurs options et leurs réponses actuellement enregistrées. Il contient également une proposition de remplacement pour O4, construite à partir de la fiche photographiée. Ce relevé doit être validé avant toute modification des banques d’exercices.

## Source des mots de dictée

Les listes de mots ont été remplacées par les listes officielles publiées par l’[École de Meyssiez](https://ecole-meyssiez.web.ac-grenoble.fr/vie-de-la-classe-ce2-cm1-cm2/mots-apprendre-pour-les-dictees-en-lien-avec-lhistoire-de-lart). Les catégories sont conservées : noms, verbes, adjectifs/participes passés et mots invariables.

### Modifier les textes de fluence

Ouvrir `js/data/fluence.js` puis rechercher `const FLUENCE_WEEKS`. Chaque texte se trouve dans le champ `text` de son objet, par exemple `id:"f1"` pour la Tour Eiffel. Remplacer uniquement le contenu de `text` permet de conserver le reste de l’activité. Le comptage des mots est calculé automatiquement par le jeu.
