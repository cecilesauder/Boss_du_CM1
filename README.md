# Boss du CM1

Jeu web de révision pour les élèves de CM1 : tables de multiplication, fractions, dictées et lecture fluence.

## Jouer

Le jeu est publié sur [GitHub Pages](https://cecilesauder.github.io/Boss_du_CM1/).

## Organisation des fichiers

| Emplacement | Rôle |
|---|---|
| `index.html` | Structure de l'interface et chargement des modules. |
| `assets/styles.css` | Styles spécifiques au jeu, animations et carte de mémorisation. |
| `js/data/dictees.js` | 26 thèmes de dictées et leur vocabulaire enrichi. |
| `js/data/orthographe.js` | Un exercice interactif pour chacune des 26 leçons d’orthographe. |
| `js/data/fluence.js` | 26 textes originaux de fluence ; le nombre de mots est calculé automatiquement. |
| `js/data/lessons.js` | Leçons originales de grammaire, conjugaison et lexique avec exercices interactifs. |
| `js/multiplication.js` | Quiz des tables, mode « Toutes les tables » et progression. |
| `js/*.js` | Logique distincte pour la navigation, les profils, fractions, dictées, fluence, badges et audio. |

Les progrès sont enregistrés localement dans le navigateur de chaque élève.

Les 26 fiches de fluence officielles de [Stylo Plume Blog](https://www.styloplumeblog.fr/dictees-histoire-arts-cm-genially/) sont maintenant accessibles depuis chaque thème via un lien « Fiche officielle ». Les textes affichés dans l’application restent des textes de révision originaux afin de ne pas recopier une ressource éditoriale protégée.

La page **Leçons** propose quinze activités originales de niveau CM1, réparties entre grammaire, conjugaison et lexique. Les scores sont conservés par profil et peuvent être copiés ou partagés depuis la galerie des badges.

## Source des mots de dictée

Les listes de mots ont été remplacées par les listes officielles publiées par l’[École de Meyssiez](https://ecole-meyssiez.web.ac-grenoble.fr/vie-de-la-classe-ce2-cm1-cm2/mots-apprendre-pour-les-dictees-en-lien-avec-lhistoire-de-lart). Les catégories sont conservées : noms, verbes, adjectifs/participes passés et mots invariables.
