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
| `js/data/lessons.js` + `js/data/lessons-questions.js` | Leçons de grammaire, conjugaison et lexique avec 10 questions par notion. |
| `js/multiplication.js` | Quiz des tables, mode « Toutes les tables » et progression. |
| `js/*.js` | Logique distincte pour la navigation, les profils, fractions, dictées, fluence, badges et audio. |

Les progrès sont enregistrés localement dans le navigateur de chaque élève.

Les 26 fiches de fluence officielles de [Stylo Plume Blog](https://www.styloplumeblog.fr/dictees-histoire-arts-cm-genially/) sont maintenant accessibles depuis chaque thème via un lien « Fiche officielle ». Les textes affichés dans l’application restent des textes de révision originaux afin de ne pas recopier une ressource éditoriale protégée.

La page **Leçons** propose quinze activités originales de niveau CM1, réparties entre grammaire, conjugaison et lexique. Chaque notion propose désormais une série de dix questions et situations. Les scores sont conservés par profil et peuvent être copiés ou partagés depuis la galerie des badges.

La rubrique Maths comprend également un module original de **géométrie** avec des exercices sur les périmètres, les angles, les figures, la symétrie et les aires. La galerie de progression conserve un historique quotidien sur sept jours, avec le temps réellement passé dans les jeux et le détail des activités réalisées.

La galerie des badges n’affiche pas de classement entre élèves. Les statistiques des sept derniers jours sont repliées par défaut et apparaissent seulement lorsque l’élève les demande.

## Source des mots de dictée

Les listes de mots ont été remplacées par les listes officielles publiées par l’[École de Meyssiez](https://ecole-meyssiez.web.ac-grenoble.fr/vie-de-la-classe-ce2-cm1-cm2/mots-apprendre-pour-les-dictees-en-lien-avec-lhistoire-de-lart). Les catégories sont conservées : noms, verbes, adjectifs/participes passés et mots invariables.

### Modifier les textes de fluence

Ouvrir `js/data/fluence.js` puis rechercher `const FLUENCE_WEEKS`. Chaque texte se trouve dans le champ `text` de son objet, par exemple `id:"f1"` pour la Tour Eiffel. Remplacer uniquement le contenu de `text` permet de conserver le reste de l’activité. Le comptage des mots est calculé automatiquement par le jeu.
