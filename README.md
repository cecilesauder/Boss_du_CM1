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
| `js/data/fluence.js` | 26 textes originaux de fluence ; le nombre de mots est calculé automatiquement. |
| `js/multiplication.js` | Quiz des tables, mode « Toutes les tables » et progression. |
| `js/*.js` | Logique distincte pour la navigation, les profils, fractions, dictées, fluence, badges et audio. |

Les progrès sont enregistrés localement dans le navigateur de chaque élève.
