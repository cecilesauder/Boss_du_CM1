/*
 * Données HistoriKids intégrées au jeu Boss du CM1.
 * Les quatre thèmes et leurs activités proviennent du fichier fourni par la famille.
 * Les données restent locales et sont utilisées par js/histoire-geographie.js.
 */
const HG_HISTORIKIDS_THEMES = {
            1: {
                id: 1,
                title: "La vie quotidienne au Moyen Âge (XIe - XIIIe siècles)",
                question: "Comment les femmes et les hommes vivaient-ils au Moyen Âge ?",
                icon: "🏰",
                color: "purple",
                badgeName: "Maître du Moyen Âge",
                timeline: [
                    { id: 1, year: "476", text: "Chute de l'Empire romain (Début du Moyen Âge)", order: 1 },
                    { id: 2, year: "XIe - XIIIe s.", text: "Développement des seigneuries, abbayes (Cluny) et cathédrales", order: 2 },
                    { id: 3, year: "1492", text: "Christophe Colomb débarque en Amérique (Fin du Moyen Âge)", order: 3 }
                ],
                keywords: [
                    { id: 'k1', word: "Seigneurie", def: "Territoire dominé par un seigneur qui exerce son pouvoir sur les terres et les habitants." },
                    { id: 'k2', word: "Paroisse", def: "Territoire d'un village encadré par l'Église et dirigé par un prêtre." },
                    { id: 'k3', word: "Corvée", def: "Travail gratuit et obligatoire effectué par les paysans pour le seigneur." },
                    { id: 'k4', word: "Dîme", def: "Impôt en récoltes payé par les habitants pour financer l'Église." },
                    { id: 'k5', word: "Art Roman", def: "Style d'églises aux murs épais, arcs en plein cintre et petites fenêtres." },
                    { id: 'k6', word: "Art Gothique", def: "Style de cathédrales très hautes (ex: Notre-Dame de Paris) avec arcs brisés et grands vitraux." }
                ],
                roles: [
                    { title: "Seigneur du Château", icon: "🏰", gender: "Homme • Noblesse", taxes: "Reçoit la taille et exige des corvées", power: "Commandement et justice sur le domaine", story: "Tu vis dans le château fort qui sert de protection au village, de lieu de résidence et de symbole de ta puissance." },
                    { title: "Paysanne du Domaine", icon: "🌾", gender: "Femme • Tiers État", taxes: "Paye la dîme à l'Église et la taille au seigneur", power: "Aucun pouvoir politique", story: "Tu suis le calendrier annuel des travaux des champs (semailles, moissons, fanaison) et tu t'occupes de la ferme tout en payant de lourdes redevances." },
                    { title: "Châtelaine / Dame Noble", icon: "👑", gender: "Femme • Noblesse", taxes: "Exemptée d'impôts", power: "Gère le château en l'absence du seigneur", story: "Tu diriges les serviteurs du château, organises les banquets et supervises la gestion du domaine seigneurial." },
                    { title: "Moine / Moniale d'une Abbaye", icon: "⛪", gender: "Femme ou Homme • Clergé (Abbaye de Cluny)", taxes: "Perçoit les dons et la dîme", power: "Enseignement et soin des pauvres", story: "Tu vis dans l'abbaye, pures et rédiges des manuscrits à la main. Tu offres l'assistance aux malades et aux voyageurs." },
                    { title: "Artisane de la Ville", icon: "🛠️", gender: "Femme • Habitant des villes", taxes: "Paye les taxes de marché et de foire", power: "Membre de corporation", story: "Tu fabriques des tissus ou des pains dans ton atelier en ville et tu vendras tes produits sur la place du marché et lors des foires." },
                    { title: "Serf (Paysan rattaché à la terre)", icon: "⛓️", gender: "Homme • Paysannerie", taxes: "Corvées obligatoires et redevances", power: "Ne peut pas quitter la seigneurie", story: "Tu appartiens à la terre du seigneur. Tu travailles la réserve seigneuriale gratuitement plusieurs jours par semaine." }
                ],
                quiz: [
                    {
                        q: "Quelles sont les trois fonctions principales du château fort au Moyen Âge ?",
                        options: ["Lieu de protection, lieu de vie du seigneur et symbole de sa puissance", "Lieu de marché, tribunal royal et prison pour les moines", "École publique, hôpital et caserne militaire"],
                        correct: 0,
                        expl: "Le château protège la population lors des attaques, héberge la famille seigneuriale et manifeste concrètement la domination du seigneur sur son territoire."
                    },
                    {
                        q: "Qu'est-ce qu'une 'seigneurie' au Moyen Âge ?",
                        options: ["Le territoire contrôlé par un seigneur et les habitants qui y vivent", "Uniquement l'église principale du village", "Une grande foire marchande qui dure toute l'année"],
                        correct: 0,
                        expl: "La seigneurie regroupe la réserve du seigneur, les tenures louées aux paysans, le château et tous ses habitants."
                    },
                    {
                        q: "Comment s'appelle l'impôt en récoltes que les paysans devaient verser à l'Église ?",
                        options: ["La Dîme", "La Corvée", "La Gabelle"],
                        correct: 0,
                        expl: "La dîme représentait environ un dixième des récoltes et servait à financer l'Église, les prêtres et l'aide aux pauvres."
                    },
                    {
                        q: "Qu'est-ce que la 'corvée' exigée par le seigneur ?",
                        options: ["Un travail gratuit et obligatoire dû par le paysan au seigneur", "Une fête donnée chaque année au château", "Un voyage obligatoire à Rome"],
                        correct: 0,
                        expl: "Les paysans devaient accomplir des corvées (entretenir les fossés, réparer les remparts, cultiver les terres du seigneur)."
                    },
                    {
                        q: "Quel était le rôle social fondamental de l'Église au Moyen Âge ?",
                        options: ["Accompagner la vie (de la naissance à la mort), soigner les malades et enseigner", "Organiser les guerres et fabriquer les écus de monnaie", "Uniquement percevoir de l'argent sans s'occuper des habitants"],
                        correct: 0,
                        expl: "L'Église encadrait la vie à travers les paroisses, gérait l'assistance aux pauvres et aux malades dans les hôpitaux et assurait l'enseignement."
                    },
                    {
                        q: "Quelles sont les caractéristiques clés de l'art GOTHIQUE (comme à Notre-Dame de Paris) ?",
                        options: ["Des édifices très hauts, avec des arcs brisés, croisées d'ogives et de grands vitraux lumineux", "Des murs très épais avec de toutes petites ouvertures et des arcs ronds", "Des bâtiments construits uniquement en bois sans vitraux"],
                        correct: 0,
                        expl: "L'art gothique (apparaissant au XIIe siècle) recherche la hauteur et la lumière grâce à la voûte sur croisée d'ogives et aux vitraux."
                    },
                    {
                        q: "Qu'est-ce qu'une 'paroisse' ?",
                        options: ["Le territoire d'un village encadré par une église et un prêtre", "Le nom du château du roi", "Une grande navire de commerce"],
                        correct: 0,
                        expl: "La paroisse rassemble les habitants d'une communauté sous la direction spirituelle du prêtre de l'église locale."
                    },
                    {
                        q: "Quelles activités se développaient principalement dans les villes au Moyen Âge ?",
                        options: ["L'artisanat, les marchés et les foires", "La chasse à la cour et la culture du blé", "L'exploration des océans distant"],
                        correct: 0,
                        expl: "Les villes médiévales devenaient de grands centres économiques grâce aux artisans organisés en métiers et aux foires d'échanges."
                    }
                ]
            },
            2: {
                id: 2,
                title: "La monarchie en France (XVIe – XVIIe siècles)",
                question: "Comment le roi incarne-t-il le pouvoir aux XVIe et XVIIe siècles ?",
                icon: "👑",
                color: "amber",
                badgeName: "Courtisan de Versailles",
                timeline: [
                    { id: 1, year: "1515 - 1519", text: "François Ier invite Léonard de Vinci en France (Renaissance)", order: 1 },
                    { id: 2, year: "1598", text: "Henri IV signe l'Édit de Nantes (Pacification des guerres de religion)", order: 2 },
                    { id: 3, year: "1643 - 1715", text: "Règne de Louis XIV et construction du château de Versailles", order: 3 }
                ],
                keywords: [
                    { id: 'k1', word: "Mécène", def: "Souverain ou riche personne qui protège et finance les artistes (comme François Ier)." },
                    { id: 'k2', word: "Guerres de religion", def: "Conflits armés sanglants entre catholiques et protestants au XVIe siècle." },
                    { id: 'k3', word: "Monarchie absolue", def: "Régime politique où le roi détient tous les pouvoirs (comme Louis XIV)." },
                    { id: 'k4', word: "Société d'ordres", def: "Société de l'Ancien Régime divisée en 3 ordres : Clergé, Noblesse et Tiers État." },
                    { id: 'k5', word: "Noblesse", def: "Ordre privilégié qui se consacre aux armes et à la vie de Cour auprès du roi." },
                    { id: 'k6', word: "Protestant", def: "Chrétien ayant adopté les idées de la Réforme (en opposition aux catholiques)." }
                ],
                roles: [
                    { title: "François Ier (Roi Mécène)", icon: "🎨", gender: "Homme • Roi de France", taxes: "Perçoit les impôts du royaume", power: "Pouvoir royal et diffusion des arts", story: "Tu commandes de grands châteaux (Chambord) et tu amènes Léonard de Vinci en France pour faire rayonner la Renaissance." },
                    { title: "Dame de la Cour à Versailles", icon: "👑", gender: "Femme • Noblesse", taxes: "Exemptée d'impôts direct", power: "Influence politique et culturelle", story: "Tu vis au château de Versailles auprès de Louis XIV. Tu participes aux cérémonies et fêtes de Cour tout en respectant une étiquette très stricte." },
                    { title: "Henri IV (Roi Pacificateur)", icon: "🕊️", gender: "Homme • Roi de France", taxes: "Restaure les finances du royaume", power: "Signe l'Édit de Nantes en 1598", story: "Après de sanglantes guerres de religion entre catholiques et protestants, tu ramènes la paix dans le royaume de France." },
                    { title: "Paysanne du Tiers État", icon: "🧺", gender: "Femme • Tiers État (80% du peuple)", taxes: "Écrasée par la Taille, la Gabelle et la Dîme", power: "Aucun droit politique", story: "Tu travailles dur la terre. La majorité de la population française est constituée de paysans qui financent la vie des deux ordres privilégiés." },
                    { title: "Artiste / Peintre de la Renaissance", icon: "🖌️", gender: "Homme ou Femme • Protegé", taxes: "Pensionné par le Roi Mécène", power: "Création artistique", story: "Grâce aux commandes royales de François Ier, tu réalises des fresques, des tableaux et des inventions architecturales inspirées de l'Italie." },
                    { title: "Louis XIV (Le Roi-Soleil)", icon: "☀️", gender: "Homme • Monarchie Absolue", taxes: "Décide des impôts sans contrôle", power: "Pouvoir absolu de droit divin", story: "Tu rassembles la Noblesse à Versailles pour mieux la surveiller. Tu incarnes à toi seul l'État et l'autorité absolue." }
                ],
                quiz: [
                    {
                        q: "Comment François Ier a-t-il contribué à diffuser la Renaissance en France ?",
                        options: ["En devenant le patron et mécène d'artistes majeurs comme Léonard de Vinci", "En interdisant la peinture et l'architecture italienne", "En fermant tous les châteaux du royaume"],
                        correct: 0,
                        expl: "François Ier aimait les arts italiens. Il a invité Léonard de Vinci au Clos Lucé (Amboise) et financé de superbes châteaux."
                    },
                    {
                        q: "Quel rôle important Henri IV a-t-il joué pour la France en 1598 ?",
                        options: ["Il a signé l'Édit de Nantes pour mettre fin aux guerres de religion entre catholiques et protestants", "Il a fait construire la tour Eiffel", "Il a aboli la monarchie"],
                        correct: 0,
                        expl: "L'Édit de Nantes (1598) accorde la liberté de culte aux protestants et rétablit la paix dans le royaume."
                    },
                    {
                        q: "Comment le château de Versailles exprime-t-il le pouvoir absolu de Louis XIV ?",
                        options: ["C'est un palais gigantesque où le roi rassemble et contrôle la Noblesse autour de sa personne", "C'est un simple fort militaire pour garder la frontière espagnole", "C'est une prison réservée aux marchands de Paris"],
                        correct: 0,
                        expl: "Versailles impressionne par son architecture majestueuse, ses jardins et réunit les nobles sous le contrôle direct du Roi-Soleil."
                    },
                    {
                        q: "Comment la société d'Ancien Régime est-elle divisée ?",
                        options: ["En trois ordres : Le Clergé, la Noblesse et le Tiers État", "En deux catégories : Les parisiens et les provinciaux", "En quatre groupes : Les rois, les présidents, les maires et les citoyens"],
                        correct: 0,
                        expl: "La société d'Ancien Régime est une société d'ordres inégale : le Clergé (prie), la Noblesse (combat) et le Tiers État (travaille)."
                    },
                    {
                        q: "Quel ordre constituait l'immense majorité de la population sous l'Ancien Régime ?",
                        options: ["Le Tiers État (composé principalement de paysans)", "La Noblesse", "Le Clergé"],
                        correct: 0,
                        expl: "Plus de 90% des Français appartenaient au Tiers État, majoritairement composé de paysannes et de paysans."
                    },
                    {
                        q: "Quel est le rôle des femmes nobles à la Cour de Versailles sous Louis XIV ?",
                        options: ["Elles participent à la vie culturelle, à la diplomatie et au prestige du roi selon l'étiquette", "Elles n'avaient pas le droit de vivre dans le château", "Elles travaillaient dans les champs aux alentours"],
                        correct: 0,
                        expl: "À la Cour, les femmes de la haute noblesse jouent un rôle central dans l'étiquette, la mode, le mécénat et la vie sociale du palais."
                    },
                    {
                        q: "Qu'est-ce qu'un 'mécène' au XVIe siècle ?",
                        options: ["Une personne riche qui soutient financièrement les artistes et les scientifiques", "Un soldat de la garde royale", "Un impôt sur le sel"],
                        correct: 0,
                        expl: "François Ier est le modèle du roi mécène : il offre des pensions et des logements aux artistes pour encourager les arts."
                    },
                    {
                        q: "Qu'appelle-t-on la 'monarchie absolue' ?",
                        options: ["Un régime politique où le roi détient tous les pouvoirs sans contrôle ni partage", "Une démocratie où les citoyens votent toutes les lois", "Un gouvernement dirigé par les paysans"],
                        correct: 0,
                        expl: "Louis XIV a affirmé que son pouvoir venait directement de Dieu ('droit divin') et qu'il ne devait de comptes à personne."
                    }
                ]
            },
            3: {
                id: 3,
                title: "Explorations et conquêtes (XVe - XVIIe siècles)",
                question: "Pourquoi les Européens explorent-ils le monde et comment cela mène-t-il à la colonisation ?",
                icon: "⛵",
                color: "emerald",
                badgeName: "Capitaine des Océans",
                timeline: [
                    { id: 1, year: "1492", text: "Christophe Colomb débarque en Amérique", order: 1 },
                    { id: 2, year: "1519 - 1522", text: "Expédition de Magellan : Premier tour du monde à la voile", order: 2 },
                    { id: 3, year: "1685", text: "Édit royal de Louis XIV dit le 'Code noir'", order: 3 }
                ],
                keywords: [
                    { id: 'k1', word: "Caravelle", def: "Navire plus rapide et résistant permettant de naviguer en haute mer." },
                    { id: 'k2', word: "Boussole", def: "Instrument de navigation qui indique le Nord magnétique." },
                    { id: 'k3', word: "Empire colonial", def: "Ensemble de territoires conquis et dominés par une puissance européenne." },
                    { id: 'k4', word: "Commerce triangulaire", def: "Échanges commerciaux entre l'Europe, l'Afrique et les colonies d'Amérique." },
                    { id: 'k5', word: "Traite des esclaves", def: "Captivité, déportation et vente forcée d'Africains vers l'Amérique." },
                    { id: 'k6', word: "Plantation", def: "Grande exploitation agricole (sucre, cacao) exploitant le travail des esclaves." }
                ],
                roles: [
                    { title: "Capitaine de Caravelle", icon: "⛵", gender: "Homme • Navigateur", taxes: "Financé par le souverain", power: "Commandement du navire de découverte", story: "Grâce à la boussole, à l'astrolabe et aux cartes marines, tu te lances sur l'Océan Atlantique vers des territoires inconnus des Européens." },
                    { title: "Femme Amérindienne (Taïnos)", icon: "🏹", gender: "Femme • Pop. Autochtone", taxes: "Soumise au travail forcé", power: "Dépossédée de ses terres", story: "Tu vis en Amérique avant l'arrivée des Européens. Les conquêtes détruisent ton mode de vie et réduisent la population par le travail forcé et les maladies." },
                    { title: "Personne asservie (Esclave)", icon: "🔗", gender: "Femme ou Homme • Déporté(e)", taxes: "Considéré(e) comme un bien (Code Noir)", power: "Privé de toute liberté", story: "Capturé(e) en Afrique lors de la traite, tu es transporté(e) dans les cales des navires puis forcé(e) de travailler sans répit dans les plantations de canne à sucre." },
                    { title: "Planteur dans les Antilles", icon: "📜", gender: "Homme • Colon Européen", taxes: "Paye des taxes de commerce au roi", power: "Propriétaire d'esclaves et de terres", story: "Tu possèdes une plantation de sucre et de cacao. Tu enrichis ton domaine en exploitant la main-d'œuvre servile et en exportant vers l'Europe." },
                    { title: "Marchand du Commerce Triangulaire", icon: "⚖️", gender: "Homme • Négociant", taxes: "Paye les droits de douane au port", power: "Grandes finances portuaires", story: "Tu pars d'Europe avec des armes et tissus pour l'Afrique, tu y achètes des captifs africains pour les revendre en Amérique, puis tu rentres chargé de sucre et de tabac." }
                ],
                quiz: [
                    {
                        q: "Quelles inventions techniques ont permis aux navigateurs européens de s'aventurer sur les océans ?",
                        options: ["La caravelle, la boussole, l'astrolabe et les cartes marines (portulans)", "La machine à vapeur et l'avion", "L'invention du gouvernail en plastique"],
                        correct: 0,
                        expl: "La caravelle (navire stable), la boussole (direction) et l'astrolabe (latitude) ont rendu la navigation au grand large possible."
                    },
                    {
                        q: "Que s'est-il passé en 1492 ?",
                        options: ["Christophe Colomb débarque sur le continent américain", "Magellan termine le tour du monde", "Louis XIV promulgue le Code Noir"],
                        correct: 0,
                        expl: "Cherchant une route vers l'Asie par l'Ouest, Colomb débarque aux Caraïbes en 1492, marquant le début des grands empires coloniaux."
                    },
                    {
                        q: "Quelle grande expédition s'est déroulée de 1519 à 1522 ?",
                        options: ["Le premier tour du monde à la voile initié par Magellan", "La construction du château de Versailles", "La traversée de la Méditerranée par François Ier"],
                        correct: 0,
                        expl: "L'expédition de Magellan a prouvé la possibilité de faire le tour complet de la Terre par les océans."
                    },
                    {
                        q: "Quelles furent les conséquences des conquêtes européennes sur les populations amérindiennes ?",
                        options: ["Une chute dramatique de la population due aux épidémies, aux massacres et au travail forcé", "Un développement pacifique et partagé de l'agriculture", "La création d'un royaume indépendant amérindien"],
                        correct: 0,
                        expl: "Les guerres de conquête, l'asservissement et les maladies importées d'Europe ont décimé la majeure partie des peuples autochtones."
                    },
                    {
                        q: "Qu'est-ce que le 'commerce triangulaire' ?",
                        options: ["Un commerce d'échanges entre trois continents : Europe, Afrique et Amérique", "Un échange de légumes entre trois villages voisins", "Un marché qui se tenait trois fois par an à Paris"],
                        correct: 0,
                        expl: "L'Europe exportait des marchandises vers l'Afrique, déportait des esclaves vers l'Amérique, et rapportait des produits coloniaux en Europe."
                    },
                    {
                        q: "Qu'est-ce que l'Édit royal de 1685 appelé le 'Code noir' ?",
                        options: ["Un texte de loi qui réglementait les conditions et le statut des esclaves dans les colonies", "Une loi interdisant la navigation de nuit", "Un traité de paix signé entre la France et l'Espagne"],
                        correct: 0,
                        expl: "Préparé sous Louis XIV, le Code noir définissait les règles d'exploitation des esclaves considérés juridiquement comme des biens meubles."
                    },
                    {
                        q: "Quelles denrées alimentaires inconnues en Europe sont arrivées d'Amérique suite à ces voyages ?",
                        options: ["La tomate, le chocolat/cacao, la pomme de terre, le haricot et le sucre de canne", "Le blé, la vigne et l'huile d'olive", "Le riz, le thé et le poivre noir"],
                        correct: 0,
                        expl: "La pomme de terre, la tomate, le maïs et le chocolat étaient cultivés par les Amérindiens avant d'être apportés en Europe."
                    },
                    {
                        q: "Comment vivaient les personnes asservies dans une plantation coloniale ?",
                        options: ["Elles accomplissaient des travaux très durs sous la menace de punitions et privées de droits", "Elles étaient rémunérées par un salaire mensuel fixe", "Elles choisissaient librement leurs horaires de travail"],
                        correct: 0,
                        expl: "Dans les plantations de sucre ou de café, les esclaves subissaient une exploitation totale et des conditions de vie inhumaines."
                    }
                ]
            },
            4: {
                id: 4,
                title: "1789, une année révolutionnaire en France",
                question: "Comment l'année 1789 met-elle fin à la monarchie absolue et à la société d'ordres ?",
                icon: "🏛️",
                color: "rose",
                badgeName: "Citoyen de la République",
                timeline: [
                    { id: 1, year: "Printemps 1789", text: "Rédaction des cahiers de doléances & réunion des États Généraux", order: 1 },
                    { id: 2, year: "14 Juillet 1789", text: "Prise de la Bastille par le peuple parisien", order: 2 },
                    { id: 3, year: "Nuit du 4 août 1789", text: "Abolition des privilèges de la noblesse et du clergé", order: 3 },
                    { id: 4, year: "26 Août 1789", text: "Adoption de la Déclaration des Droits de l'Homme et du Citoyen", order: 4 },
                    { id: 5, year: "5-6 Octobre 1789", text: "Marche des femmes à Versailles ramenant le roi à Paris", order: 5 }
                ],
                keywords: [
                    { id: 'k1', word: "Les Lumières", def: "Mouvement de philosophes (Voltaire, Rousseau) proposant la liberté et la raison contre l'absolutisme." },
                    { id: 'k2', word: "Cahiers de doléances", def: "Cahiers rédigés au printemps 1789 dans lesquels les Français écrivaient leurs plaintes et demandes." },
                    { id: 'k3', word: "Privilèges", def: "Avantages réservés à la noblesse et au clergé (exemption d'impôts, droits seigneuriaux)." },
                    { id: 'k4', word: "DDHC", def: "Texte fondamental du 26 août 1789 affirmant que les hommes naissent libres et égaux en droits." },
                    { id: 'k5', word: "Citoyenneté", def: "Statut d'un membre d'une société ayant des droits politiques et civils égaux." },
                    { id: 'k6', word: "Souveraineté nationale", def: "Principe selon lequel le pouvoir appartient au peuple et à la Nation." }
                ],
                roles: [
                    { title: "Femme du Peuple (Marche des Femmes)", icon: "🥖", gender: "Femme • Citoyenne active", taxes: "Paye les taxes sur le pain", power: "Force le roi à quitter Versailles", story: "Les 5 et 6 octobre 1789, avec des milliers de femmes, tu marches vers Versailles pour réclamer du pain et obliger Louis XVI à s'installer à Paris." },
                    { title: "Député du Tiers État", icon: "📜", gender: "Homme • Représentant de la Nation", taxes: "Rédacteur des doléances", power: "Vote les nouvelles lois", story: "Tu représentes les 98% de Français non privilégiés. Tu jures de donner une Constitution à la France et de supprimer la monarchie absolue." },
                    { title: "Olympe de Gouges (Écrivaine engagée)", icon: "✒️", gender: "Femme • Philosophe des Lumières", taxes: "Citoyenne engagée", power: "Rédige la Déclaration des Droits de la Femme", story: "Tu défends l'égalité absolue entre les hommes et les femmes en déclarant : 'La femme a le droit de monter sur l'échafaud ; elle doit avoir également celui de monter à la Tribune'." },
                    { title: "Artisan Sans-Culotte", icon: "🧱", gender: "Homme • Peuple de Paris", taxes: "Suppression des impôts injustes", power: "Participation aux journées révolutionnaires", story: "Le 14 juillet 1789, tu t'empares de la forteresse de la Bastille, symbole de la tyrannie du roi, pour récupérer des armes." },
                    { title: "Noble de l'Ancien Régime", icon: "🏰", gender: "Homme ou Femme • Noblesse", taxes: "Perd ses privilèges le 4 août", power: "Perte des droits seigneuriaux", story: "Pendant la Nuit du 4 août 1789, l'Assemblée décide de détruire entièrement le système féodal et les privilèges de ta naissance." }
                ],
                quiz: [
                    {
                        q: "Quel était le contexte de la France juste avant l'année 1789 ?",
                        options: ["Une crise financière grave, de mauvaises récoltes et des inégalités entre les ordress", "Une période de richesse immense partagée par tous", "Une guerre navale victorieuse contre toute l'Europe"],
                        correct: 0,
                        expl: "Le royaume était très endetté, le prix du pain augmentait et le Tiers État supportait presque tous les impôts."
                    },
                    {
                        q: "Que demandaient les Français dans les 'Cahiers de doléances' rédigés au printemps 1789 ?",
                        options: ["L'égalité devant l'impôt, la fin des abus seigneuriaux et plus de libertés", "La construction de nouveaux palais pour la noblesse", "L'augmentation des impôts sur le pain"],
                        correct: 0,
                        expl: "Tous les villages et paroisses ont consigné leurs demandes, exigeant une réforme de la fiscalité et la fin des privilèges."
                    },
                    {
                        q: "Pourquoi le peuple parisien a-t-il pris la forteresse de la Bastille le 14 juillet 1789 ?",
                        options: ["Pour chercher de la poudre et des armes et s'attaquer au symbole de l'absolutisme royal", "Pour y organiser une grande fête de la musique", "Pour inviter le roi à y déménager"],
                        correct: 0,
                        expl: "La Bastille était une prison royale incarnant l'arbitraire du roi. Sa prise par la foule est le symbole du début de la Révolution."
                    },
                    {
                        q: "Que s'est-il passé au cours de la célèbre 'Nuit du 4 août 1789' ?",
                        options: ["L'Assemblée a voté l'abolition des privilèges de la noblesse et du clergé", "Le roi a signé un traité d'alliance avec l'Angleterre", "Paris a été illuminé par des feux d'artifice"],
                        correct: 0,
                        expl: "Pour calmer les révoltes paysannes dans les campagnes, les députés ont aboli les droits féodaux, mettant fin à la société d'ordres."
                    },
                    {
                        q: "Quel est le principe majeur affirmé dès l'Article 1er de la Déclaration des Droits de l'Homme (26 août 1789) ?",
                        options: ["'Les hommes naissent et demeurent libres et égaux en droits'", "'Seul le roi peut décider de la loi'", "'La noblesse conserve ses impôts obligatoires'"],
                        correct: 0,
                        expl: "La DDHC du 26 août 1789 fonde la citoyenneté moderne sur la liberté et l'égalité en droits de chaque individu."
                    },
                    {
                        q: "Quel rôle décisif les femmes ont-elles joué les 5 et 6 octobre 1789 ?",
                        options: ["Elles ont marché de Paris à Versailles pour réclamer du pain et ramener la famille royale à Paris", "Elles ont rédigé la Constitution seules à la campagne", "Elles ont défendu la Bastille avec les soldats du roi"],
                        correct: 0,
                        expl: "Parties des halles de Paris, les femmes ont marché sur Versailles et ont forcé Louis XVI à s'installer aux Tuileries à Paris."
                    },
                    {
                        q: "Qui était Olympe de Gouges ?",
                        options: ["Une femme de lettres ayant rédigé la Déclaration des Droits de la Femme et de la Citoyenne", "La reine de France épouse de Louis XIV", "Une artisane ayant fabriqué la boussole de Colomb"],
                        correct: 0,
                        expl: "Olympe de Gouges est une figure majeure des Lumières ayant lutté pour l'égalité des droits des femmes et l'abolition de l'esclavage."
                    },
                    {
                        q: "Qu'appelle-t-on les 'Lumières' au XVIIIe siècle ?",
                        options: ["Un courant de pensée mené par des philosophes défendant la liberté, la raison et l'égalité", "L'invention des premières ampoules électriques dans les villes", "Le nom donné au château de Versailles illuminé la nuit"],
                        correct: 0,
                        expl: "Des philosophes comme Voltaire et Rousseau ont critiqué l'absolutisme et inspiré les principes révolutionnaires de 1789."
                    }
                ]
            }
        };
