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
