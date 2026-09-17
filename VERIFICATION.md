# Vérification de la mise à jour

La version modulaire a été ouverte dans un navigateur depuis le serveur local le 17 septembre 2026. L'accueil, les 26 thèmes et la navigation s'affichent correctement.

Le mode **Toutes les tables** est opérationnel : il active le titre « Toutes les tables 🎲 », affiche une grille de maîtrise globale composée de dix cartes et propose une question mélangée. Les données de dictée contiennent 26 thèmes, avec 21 mots pour les semaines 2 à 26 et 22 mots pour la première semaine. Les 26 textes de fluence sont présents, sans emplacement vide, et leurs décomptes automatiques vont de 83 à 93 mots. Le premier texte de fluence affiche 86 mots et 556 caractères de texte lisible.

Les fichiers JavaScript ont tous passé `node --check`. Aucun texte de remplacement de fluence (`[ Texte à compléter ]`) ni aucun `wordCount:0` ne subsiste dans le projet.

Une vérification visuelle du mode mélangé confirme que le bouton « Toutes les tables », les dix boutons individuels, la question mélangée, les quatre réponses et la grille de maîtrise globale sont visibles sur mobile. Le seul message d'erreur relevé dans la console correspond à une commande de test saisie avec une syntaxe invalide ; l'exécution correcte qui a suivi a confirmé l'affichage de ce mode, sans erreur applicative.

Un essai de bonne réponse dans le mode mélangé a fait passer la maîtrise du calcul `7 × 2` de `0` à `1` et a attribué les 15 points prévus pour une réponse rapide.

## Mise à jour suivante

Les 26 listes de mots officielles de l’École de Meyssiez ont été récupérées et importées. Elles comprennent 1 036 mots classés par nature grammaticale. Le jeu affiche désormais une couleur simultanément avec chaque mot : nom bleu foncé, verbe rouge, adjectif bleu clair et mot invariable rose.

Les 26 leçons d’orthographe disposent chacune d’un exercice interactif à choix multiples. La fluence se déroule maintenant phrase par phrase : un clic ou la touche Entrée/Espace affiche la phrase suivante, tandis que le chronomètre continue de mesurer la lecture complète.

Le serveur local de vérification qui avait été laissé en arrière-plan a été arrêté à la demande de la propriétaire du projet ; il ne servait qu’aux tests de la version précédente.

## Ressources et suivi ajoutés

Les 26 fiches de fluence officielles de Stylo Plume Blog sont accessibles depuis les 26 thèmes de l’application par un lien externe dédié. Les textes affichés dans le jeu restent des textes originaux de révision.

Une nouvelle vue « Leçons » propose 5 notions de grammaire, 5 notions de conjugaison et 5 notions de lexique, chacune avec une règle CM1 et un exercice interactif. Le score de chaque notion est enregistré dans le profil.

La galerie des badges affiche désormais un résumé partageable : points, badges, mots de dictée maîtrisés, leçons réussies et nombre de lectures. Le test navigateur a confirmé qu’une réponse correcte sur la leçon « Le groupe nominal » est bien conservée dans le score du profil et apparaît dans le bilan.

## Classement de classe

Un classement local a été ajouté à la galerie des badges. Le test navigateur a publié le pseudo « Camille » et a confirmé l’affichage d’une ligne classée, la conservation dans `localStorage` et le calcul des points, badges, leçons, mots maîtrisés et lectures. Les actions Exporter et Importer utilisent un fichier JSON afin que l’enseignant puisse faire circuler un classement sans serveur ni collecte automatique de données.

## Correctifs du rapport de test

Le chrono global ne démarre plus au chargement ou pendant la navigation : il démarre uniquement lorsqu’une activité est ouverte et s’arrête au retour à l’accueil ou à la fin de l’activité. L’accueil propose désormais six raccourcis cohérents : tables, fractions, dictées, fluence, leçons et progression.

Les mots de dictée sont mélangés à chaque session et les mots déjà maîtrisés trois fois sont écartés tant qu’il reste des mots à travailler. La barre de progression est calculée depuis les scores du profil. Une réponse finalement correcte fait maintenant progresser le mot, même si une première tentative était erronée, avec une récompense réduite.

Les exercices d’orthographe, de grammaire, de conjugaison, de lexique et de géométrie ont été retestés par clic navigateur ; un feedback visuel est affiché et les points sont enregistrés. La géométrie comprend huit questions originales couvrant périmètre, angles, figures, symétrie et aire.

La galerie de progression contient maintenant un relevé détaillé des sept derniers jours : durée réellement passée dans les activités, points, maths, fractions, dictées, orthographe, leçons et fluence. Le bilan du jour peut être copié pour être montré à la famille ou à l’enseignant.

Les badges de durée sont explicitement définis comme des objectifs **dans une même session d’activité**, et quatre badges supplémentaires récompensent les progrès en géométrie et en français. Le nombre de badges passe de 47 à 51.

Les textes des fiches officielles de fluence n’ont pas été recopiés dans le dépôt : ils restent accessibles par leurs liens officiels dans l’application. Cela évite de redistribuer une ressource éditoriale protégée sans autorisation de reproduction.

## Accès officiel renforcé

Chaque thème de fluence affiche maintenant le lien « Fiche officielle » dans la liste et un grand bouton « Ouvrir la fiche officielle » dans l’écran de préparation. Le test navigateur a confirmé la présence des 26 liens et, pour le thème « La Tour Eiffel », la sélection dynamique de `https://www.styloplumeblog.fr/la-tour-eiffel-2/`. Le jeu conserve le texte original, le découpage phrase par phrase, le chronomètre, les mots par minute, le graphe et l’historique.
