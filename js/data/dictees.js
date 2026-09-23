// Source officielle : Ecole de Meyssiez, « Mots à apprendre pour les dictées (en lien avec l'histoire de l'art) ».
// https://ecole-meyssiez.web.ac-grenoble.fr/vie-de-la-classe-ce2-cm1-cm2/mots-apprendre-pour-les-dictees-en-lien-avec-lhistoire-de-lart
// Les mots sont conservés dans leur catégorie grammaticale d'origine.
const DICTEE_WEEKS = [
  {
    "id": "semaine1",
    "title": "La tour Eiffel",
    "icon": "🗼",
    "orthoLecon": "O1 · Le pluriel des noms",
    "description": "Le monument parisien et ses chiffres impressionnants",
    "words": [
      {
        "word": "la construction",
        "nature": "noms"
      },
      {
        "word": "la tour",
        "nature": "noms"
      },
      {
        "word": "un an",
        "nature": "noms"
      },
      {
        "word": "le fer",
        "nature": "noms"
      },
      {
        "word": "la tonne",
        "nature": "noms"
      },
      {
        "word": "la peinture",
        "nature": "noms"
      },
      {
        "word": "la dizaine",
        "nature": "noms"
      },
      {
        "word": "la centaine",
        "nature": "noms"
      },
      {
        "word": "le millier",
        "nature": "noms"
      },
      {
        "word": "le million",
        "nature": "noms"
      },
      {
        "word": "le début",
        "nature": "noms"
      },
      {
        "word": "le monument",
        "nature": "noms"
      },
      {
        "word": "l'ampoule",
        "nature": "noms"
      },
      {
        "word": "le sommet",
        "nature": "noms"
      },
      {
        "word": "le ciel",
        "nature": "noms"
      },
      {
        "word": "l'heure",
        "nature": "noms"
      },
      {
        "word": "la nuit",
        "nature": "noms"
      },
      {
        "word": "le pays",
        "nature": "noms"
      },
      {
        "word": "le mètre",
        "nature": "noms"
      },
      {
        "word": "se terminer",
        "nature": "verbes"
      },
      {
        "word": "nécessiter",
        "nature": "verbes"
      },
      {
        "word": "rayonner",
        "nature": "verbes"
      },
      {
        "word": "briller",
        "nature": "verbes"
      },
      {
        "word": "célèbre",
        "nature": "adjectifs"
      },
      {
        "word": "plusieurs",
        "nature": "invariables"
      },
      {
        "word": "au-dessus",
        "nature": "invariables"
      },
      {
        "word": "ainsi",
        "nature": "invariables"
      },
      {
        "word": "même",
        "nature": "invariables"
      },
      {
        "word": "plus",
        "nature": "invariables"
      },
      {
        "word": "avec",
        "nature": "invariables"
      },
      {
        "word": "chaque",
        "nature": "invariables"
      },
      {
        "word": "dans",
        "nature": "invariables"
      }
    ]
  },
  {
    "id": "semaine2",
    "title": "L'amphithéâtre de Nîmes",
    "icon": "🏛️",
    "orthoLecon": "O2 · Écrire « a » ou « à »",
    "description": "Les vestiges romains et les combats de gladiateurs",
    "words": [
      {
        "word": "le siècle",
        "nature": "noms"
      },
      {
        "word": "une époque",
        "nature": "noms"
      },
      {
        "word": "la Gaule",
        "nature": "noms"
      },
      {
        "word": "le mètre",
        "nature": "noms"
      },
      {
        "word": "l'étage",
        "nature": "noms"
      },
      {
        "word": "la hauteur",
        "nature": "noms"
      },
      {
        "word": "le spectateur",
        "nature": "noms"
      },
      {
        "word": "le Gallo-Romain",
        "nature": "noms"
      },
      {
        "word": "le combat",
        "nature": "noms"
      },
      {
        "word": "la bataille",
        "nature": "noms"
      },
      {
        "word": "le gladiateur",
        "nature": "noms"
      },
      {
        "word": "l'animal/les animaux",
        "nature": "noms"
      },
      {
        "word": "l'eau",
        "nature": "noms"
      },
      {
        "word": "l'arène",
        "nature": "noms"
      },
      {
        "word": "le gradin",
        "nature": "noms"
      },
      {
        "word": "la galerie",
        "nature": "noms"
      },
      {
        "word": "l'intérieur",
        "nature": "noms"
      },
      {
        "word": "un riche",
        "nature": "noms"
      },
      {
        "word": "un pauvre",
        "nature": "noms"
      },
      {
        "word": "compter",
        "nature": "verbes"
      },
      {
        "word": "accueillir",
        "nature": "verbes"
      },
      {
        "word": "assister",
        "nature": "verbes"
      },
      {
        "word": "accéder",
        "nature": "verbes"
      },
      {
        "word": "s'installer",
        "nature": "verbes"
      },
      {
        "word": "Ier (premier",
        "nature": "adjectifs"
      },
      {
        "word": "construit",
        "nature": "adjectifs"
      },
      {
        "word": "romain",
        "nature": "adjectifs"
      },
      {
        "word": "violent",
        "nature": "adjectifs"
      },
      {
        "word": "plein",
        "nature": "adjectifs"
      },
      {
        "word": "jusqu'à",
        "nature": "invariables"
      },
      {
        "word": "même",
        "nature": "invariables"
      },
      {
        "word": "grâce",
        "nature": "invariables"
      },
      {
        "word": "en bas",
        "nature": "invariables"
      },
      {
        "word": "en haut",
        "nature": "invariables"
      },
      {
        "word": "peut-être",
        "nature": "invariables"
      }
    ]
  },
  {
    "id": "semaine3",
    "title": "La cathédrale de Reims",
    "icon": "⛪",
    "orthoLecon": "O3 · Écrire « et » ou « est »",
    "description": "L'art gothique et les couronnements des rois de France",
    "words": [
      {
        "word": "la cathédrale",
        "nature": "noms"
      },
      {
        "word": "le lieu",
        "nature": "noms"
      },
      {
        "word": "la France",
        "nature": "noms"
      },
      {
        "word": "la démonstration",
        "nature": "noms"
      },
      {
        "word": "un édifice",
        "nature": "noms"
      },
      {
        "word": "le ciel",
        "nature": "noms"
      },
      {
        "word": "la lumière",
        "nature": "noms"
      },
      {
        "word": "l'art",
        "nature": "noms"
      },
      {
        "word": "le soir",
        "nature": "noms"
      },
      {
        "word": "la Révolution",
        "nature": "noms"
      },
      {
        "word": "un vitrail/des vitraux",
        "nature": "noms"
      },
      {
        "word": "le Moyen Âge",
        "nature": "noms"
      },
      {
        "word": "être",
        "nature": "verbes"
      },
      {
        "word": "élever",
        "nature": "verbes"
      },
      {
        "word": "faire",
        "nature": "verbes"
      },
      {
        "word": "entrer",
        "nature": "verbes"
      },
      {
        "word": "voir",
        "nature": "verbes"
      },
      {
        "word": "connu",
        "nature": "adjectifs"
      },
      {
        "word": "gothique",
        "nature": "adjectifs"
      },
      {
        "word": "certain",
        "nature": "adjectifs"
      },
      {
        "word": "français",
        "nature": "adjectifs"
      },
      {
        "word": "bombardé",
        "nature": "adjectifs"
      },
      {
        "word": "restauré",
        "nature": "adjectifs"
      },
      {
        "word": "ancien",
        "nature": "adjectifs"
      },
      {
        "word": "peint",
        "nature": "adjectifs"
      },
      {
        "word": "moderne",
        "nature": "adjectifs"
      },
      {
        "word": "illuminé",
        "nature": "adjectifs"
      },
      {
        "word": "aussi",
        "nature": "invariables"
      },
      {
        "word": "comme",
        "nature": "invariables"
      },
      {
        "word": "vers",
        "nature": "invariables"
      },
      {
        "word": "toujours",
        "nature": "invariables"
      },
      {
        "word": "plus",
        "nature": "invariables"
      },
      {
        "word": "pendant",
        "nature": "invariables"
      },
      {
        "word": "lors",
        "nature": "invariables"
      },
      {
        "word": "mais",
        "nature": "invariables"
      },
      {
        "word": "ensuite",
        "nature": "invariables"
      },
      {
        "word": "aujourd'hui",
        "nature": "invariables"
      },
      {
        "word": "chaque",
        "nature": "invariables"
      },
      {
        "word": "afin",
        "nature": "invariables"
      },
      {
        "word": "chacun",
        "nature": "invariables"
      },
      {
        "word": "entièrement",
        "nature": "invariables"
      }
    ]
  },
  {
    "id": "semaine4",
    "title": "La grotte de Lascaux",
    "icon": "🦬",
    "orthoLecon": "O4 · Écrire « s » ou « ss »",
    "description": "Les peintures préhistoriques et les premiers artistes",
    "words": [
      {
        "word": "un an",
        "nature": "noms"
      },
      {
        "word": "la peinture",
        "nature": "noms"
      },
      {
        "word": "l'artiste",
        "nature": "noms"
      },
      {
        "word": "la grotte",
        "nature": "noms"
      },
      {
        "word": "un animal/des animaux",
        "nature": "noms"
      },
      {
        "word": "le signe",
        "nature": "noms"
      },
      {
        "word": "un être",
        "nature": "noms"
      },
      {
        "word": "la Préhistoire",
        "nature": "noms"
      },
      {
        "word": "la main",
        "nature": "noms"
      },
      {
        "word": "le personnage",
        "nature": "noms"
      },
      {
        "word": "la scène",
        "nature": "noms"
      },
      {
        "word": "le combat",
        "nature": "noms"
      },
      {
        "word": "le chasseur",
        "nature": "noms"
      },
      {
        "word": "un bison",
        "nature": "noms"
      },
      {
        "word": "le spécialiste",
        "nature": "noms"
      },
      {
        "word": "l'homme",
        "nature": "noms"
      },
      {
        "word": "réaliser",
        "nature": "verbes"
      },
      {
        "word": "voir",
        "nature": "verbes"
      },
      {
        "word": "raconter",
        "nature": "verbes"
      },
      {
        "word": "étonner",
        "nature": "verbes"
      },
      {
        "word": "pariétal",
        "nature": "adjectifs"
      },
      {
        "word": "impressionnant",
        "nature": "adjectifs"
      },
      {
        "word": "nombreux",
        "nature": "adjectifs"
      },
      {
        "word": "mystérieux",
        "nature": "adjectifs"
      },
      {
        "word": "humain",
        "nature": "adjectifs"
      },
      {
        "word": "entier",
        "nature": "adjectifs"
      },
      {
        "word": "blessé",
        "nature": "adjectifs"
      },
      {
        "word": "dessiné",
        "nature": "adjectifs"
      },
      {
        "word": "jadis",
        "nature": "invariables"
      },
      {
        "word": "il y a",
        "nature": "invariables"
      },
      {
        "word": "aussi",
        "nature": "invariables"
      },
      {
        "word": "mais",
        "nature": "invariables"
      },
      {
        "word": "plus",
        "nature": "invariables"
      },
      {
        "word": "souvent",
        "nature": "invariables"
      },
      {
        "word": "pendant",
        "nature": "invariables"
      },
      {
        "word": "très",
        "nature": "invariables"
      },
      {
        "word": "peu",
        "nature": "invariables"
      },
      {
        "word": "entre",
        "nature": "invariables"
      },
      {
        "word": "beaucoup",
        "nature": "invariables"
      },
      {
        "word": "précisément",
        "nature": "invariables"
      },
      {
        "word": "au fond",
        "nature": "invariables"
      }
    ]
  },
  {
    "id": "semaine5",
    "title": "Les Quatre Saisons",
    "icon": "🍂",
    "orthoLecon": "O5 · Les accords dans le groupe nominal",
    "description": "Vivaldi et les paysages changeants tout au long de l'année",
    "words": [
      {
        "word": "la musique",
        "nature": "noms"
      },
      {
        "word": "l'Europe",
        "nature": "noms"
      },
      {
        "word": "un instrument",
        "nature": "noms"
      },
      {
        "word": "la mélodie",
        "nature": "noms"
      },
      {
        "word": "le violon",
        "nature": "noms"
      },
      {
        "word": "l'arrivée",
        "nature": "noms"
      },
      {
        "word": "le printemps",
        "nature": "noms"
      },
      {
        "word": "l'été",
        "nature": "noms"
      },
      {
        "word": "l'hiver",
        "nature": "noms"
      },
      {
        "word": "l'orage",
        "nature": "noms"
      },
      {
        "word": "la pluie",
        "nature": "noms"
      },
      {
        "word": "un oiseau/ des oiseaux",
        "nature": "noms"
      },
      {
        "word": "l'automne",
        "nature": "noms"
      },
      {
        "word": "le chasseur",
        "nature": "noms"
      },
      {
        "word": "le chien",
        "nature": "noms"
      },
      {
        "word": "le froid",
        "nature": "noms"
      },
      {
        "word": "la neige",
        "nature": "noms"
      },
      {
        "word": "un insecte",
        "nature": "noms"
      },
      {
        "word": "jouer",
        "nature": "verbes"
      },
      {
        "word": "composer",
        "nature": "verbes"
      },
      {
        "word": "décrire",
        "nature": "verbes"
      },
      {
        "word": "se coucher",
        "nature": "verbes"
      },
      {
        "word": "partir",
        "nature": "verbes"
      },
      {
        "word": "raconter",
        "nature": "verbes"
      },
      {
        "word": "classique",
        "nature": "adjectifs"
      },
      {
        "word": "différent",
        "nature": "adjectifs"
      },
      {
        "word": "premier/première",
        "nature": "adjectifs"
      },
      {
        "word": "deuxième",
        "nature": "adjectifs"
      },
      {
        "word": "troisième",
        "nature": "adjectifs"
      },
      {
        "word": "fidèle",
        "nature": "adjectifs"
      },
      {
        "word": "dernier",
        "nature": "adjectifs"
      },
      {
        "word": "long/longue",
        "nature": "adjectifs"
      },
      {
        "word": "chanteur",
        "nature": "adjectifs"
      },
      {
        "word": "fleuri",
        "nature": "adjectifs"
      },
      {
        "word": "affolé",
        "nature": "adjectifs"
      },
      {
        "word": "petit",
        "nature": "adjectifs"
      },
      {
        "word": "fort",
        "nature": "adjectifs"
      },
      {
        "word": "chaque",
        "nature": "invariables"
      },
      {
        "word": "d'abord",
        "nature": "invariables"
      },
      {
        "word": "ensemble",
        "nature": "invariables"
      },
      {
        "word": "ensuite",
        "nature": "invariables"
      },
      {
        "word": "enfin",
        "nature": "invariables"
      },
      {
        "word": "avec",
        "nature": "invariables"
      },
      {
        "word": "sous",
        "nature": "invariables"
      },
      {
        "word": "dans",
        "nature": "invariables"
      }
    ]
  },
  {
    "id": "semaine6",
    "title": "La Trahison des images",
    "icon": "🎨",
    "orthoLecon": "O6 · Les marques du pluriel",
    "description": "Magritte et le tableau qui dit « Ceci n'est pas une pipe »",
    "words": [
      {
        "word": "la fête",
        "nature": "noms"
      },
      {
        "word": "une année",
        "nature": "noms"
      },
      {
        "word": "un artiste",
        "nature": "noms"
      },
      {
        "word": "la femme",
        "nature": "noms"
      },
      {
        "word": "le modèle",
        "nature": "noms"
      },
      {
        "word": "un peintre",
        "nature": "noms"
      },
      {
        "word": "le mot",
        "nature": "noms"
      },
      {
        "word": "la publicité",
        "nature": "noms"
      },
      {
        "word": "France",
        "nature": "noms"
      },
      {
        "word": "Paris",
        "nature": "noms"
      },
      {
        "word": "un époux",
        "nature": "noms"
      },
      {
        "word": "le poète",
        "nature": "noms"
      },
      {
        "word": "l'écrivain",
        "nature": "noms"
      },
      {
        "word": "le musicien",
        "nature": "noms"
      },
      {
        "word": "le rêve",
        "nature": "noms"
      },
      {
        "word": "l'imagination",
        "nature": "noms"
      },
      {
        "word": "le hasard",
        "nature": "noms"
      },
      {
        "word": "l'image",
        "nature": "noms"
      },
      {
        "word": "une affiche",
        "nature": "noms"
      },
      {
        "word": "rencontrer",
        "nature": "verbes"
      },
      {
        "word": "rêver",
        "nature": "verbes"
      },
      {
        "word": "devenir",
        "nature": "verbes"
      },
      {
        "word": "déménager",
        "nature": "verbes"
      },
      {
        "word": "gagner",
        "nature": "verbes"
      },
      {
        "word": "dessiner",
        "nature": "verbes"
      },
      {
        "word": "s'installer",
        "nature": "verbes"
      },
      {
        "word": "s'intéresser",
        "nature": "verbes"
      },
      {
        "word": "jouer",
        "nature": "verbes"
      },
      {
        "word": "belge",
        "nature": "adjectifs"
      },
      {
        "word": "forain",
        "nature": "adjectifs"
      },
      {
        "word": "étrange",
        "nature": "adjectifs"
      },
      {
        "word": "entier",
        "nature": "adjectifs"
      },
      {
        "word": "quand",
        "nature": "invariables"
      },
      {
        "word": "plusieurs",
        "nature": "invariables"
      },
      {
        "word": "plus",
        "nature": "invariables"
      },
      {
        "word": "tard",
        "nature": "invariables"
      },
      {
        "word": "d'abord",
        "nature": "invariables"
      },
      {
        "word": "ensuite",
        "nature": "invariables"
      },
      {
        "word": "près",
        "nature": "invariables"
      },
      {
        "word": "là",
        "nature": "invariables"
      },
      {
        "word": "comme",
        "nature": "invariables"
      },
      {
        "word": "avec",
        "nature": "invariables"
      }
    ]
  },
  {
    "id": "semaine7",
    "title": "Persée et Méduse",
    "icon": "⚔️",
    "orthoLecon": "O7 · Écrire « ou » ou « où »",
    "description": "La mythologie grecque et les héros légendaires",
    "words": [
      {
        "word": "une tête",
        "nature": "noms"
      },
      {
        "word": "la mère",
        "nature": "noms"
      },
      {
        "word": "une créature",
        "nature": "noms"
      },
      {
        "word": "le cheveu/les cheveux",
        "nature": "noms"
      },
      {
        "word": "le serpent",
        "nature": "noms"
      },
      {
        "word": "la pierre",
        "nature": "noms"
      },
      {
        "word": "un dieu/des dieux",
        "nature": "noms"
      },
      {
        "word": "un conseil",
        "nature": "noms"
      },
      {
        "word": "un objet",
        "nature": "noms"
      },
      {
        "word": "une sandale",
        "nature": "noms"
      },
      {
        "word": "la montagne",
        "nature": "noms"
      },
      {
        "word": "le casque",
        "nature": "noms"
      },
      {
        "word": "un bouclier",
        "nature": "noms"
      },
      {
        "word": "le reflet",
        "nature": "noms"
      },
      {
        "word": "apporter",
        "nature": "verbes"
      },
      {
        "word": "épouser",
        "nature": "verbes"
      },
      {
        "word": "regarder",
        "nature": "verbes"
      },
      {
        "word": "devoir",
        "nature": "verbes"
      },
      {
        "word": "donner",
        "nature": "verbes"
      },
      {
        "word": "rejoindre",
        "nature": "verbes"
      },
      {
        "word": "se coiffer",
        "nature": "verbes"
      },
      {
        "word": "habiter",
        "nature": "verbes"
      },
      {
        "word": "risquer",
        "nature": "verbes"
      },
      {
        "word": "bondir",
        "nature": "verbes"
      },
      {
        "word": "être",
        "nature": "verbes"
      },
      {
        "word": "pouvoir",
        "nature": "verbes"
      },
      {
        "word": "monstrueux/monstrueuse",
        "nature": "adjectifs"
      },
      {
        "word": "vivant",
        "nature": "adjectifs"
      },
      {
        "word": "magique",
        "nature": "adjectifs"
      },
      {
        "word": "ailé",
        "nature": "adjectifs"
      },
      {
        "word": "invisible",
        "nature": "adjectifs"
      },
      {
        "word": "terrible",
        "nature": "adjectifs"
      },
      {
        "word": "pétrifié",
        "nature": "adjectifs"
      },
      {
        "word": "celui-ci",
        "nature": "invariables"
      },
      {
        "word": "dont",
        "nature": "invariables"
      },
      {
        "word": "aussitôt",
        "nature": "invariables"
      },
      {
        "word": "avec",
        "nature": "invariables"
      },
      {
        "word": "puis",
        "nature": "invariables"
      },
      {
        "word": "afin de",
        "nature": "invariables"
      },
      {
        "word": "dans",
        "nature": "invariables"
      },
      {
        "word": "sans",
        "nature": "invariables"
      },
      {
        "word": "sur",
        "nature": "invariables"
      },
      {
        "word": "soudain",
        "nature": "invariables"
      }
    ]
  },
  {
    "id": "semaine8",
    "title": "La Naissance de Vénus",
    "icon": "🌊",
    "orthoLecon": "O8 · Écrire « g » ou « gu »",
    "description": "Botticelli et la déesse de la beauté surgissant des flots",
    "words": [
      {
        "word": "le tableau",
        "nature": "noms"
      },
      {
        "word": "la scène",
        "nature": "noms"
      },
      {
        "word": "la naissance",
        "nature": "noms"
      },
      {
        "word": "le dieu/la déesse",
        "nature": "noms"
      },
      {
        "word": "la beauté",
        "nature": "noms"
      },
      {
        "word": "le coquillage",
        "nature": "noms"
      },
      {
        "word": "le rivage",
        "nature": "noms"
      },
      {
        "word": "le vent",
        "nature": "noms"
      },
      {
        "word": "la gauche",
        "nature": "noms"
      },
      {
        "word": "la fleur",
        "nature": "noms"
      },
      {
        "word": "la droite",
        "nature": "noms"
      },
      {
        "word": "la femme",
        "nature": "noms"
      },
      {
        "word": "l'œuvre",
        "nature": "noms"
      },
      {
        "word": "le printemps",
        "nature": "noms"
      },
      {
        "word": "l'arrivée",
        "nature": "noms"
      },
      {
        "word": "la chevelure",
        "nature": "noms"
      },
      {
        "word": "représenter",
        "nature": "verbes"
      },
      {
        "word": "naviguer",
        "nature": "verbes"
      },
      {
        "word": "distinguer",
        "nature": "verbes"
      },
      {
        "word": "souffler",
        "nature": "verbes"
      },
      {
        "word": "guetter",
        "nature": "verbes"
      },
      {
        "word": "recouvrir",
        "nature": "verbes"
      },
      {
        "word": "inspiré",
        "nature": "adjectifs"
      },
      {
        "word": "gigantesque",
        "nature": "adjectifs"
      },
      {
        "word": "guidé",
        "nature": "adjectifs"
      },
      {
        "word": "habillé",
        "nature": "adjectifs"
      },
      {
        "word": "long",
        "nature": "adjectifs"
      },
      {
        "word": "grand",
        "nature": "adjectifs"
      },
      {
        "word": "fleuri",
        "nature": "adjectifs"
      },
      {
        "word": "celui-ci",
        "nature": "invariables"
      },
      {
        "word": "sur",
        "nature": "invariables"
      },
      {
        "word": "vers",
        "nature": "invariables"
      },
      {
        "word": "à côté",
        "nature": "invariables"
      },
      {
        "word": "autour",
        "nature": "invariables"
      },
      {
        "word": "seulement",
        "nature": "invariables"
      },
      {
        "word": "également",
        "nature": "invariables"
      }
    ]
  },
  {
    "id": "semaine9",
    "title": "Le château de Bonaguil",
    "icon": "🏰",
    "orthoLecon": "O9 · Écrire « g » ou « ge »",
    "description": "La dernière forteresse médiévale du Lot-et-Garonne",
    "words": [
      {
        "word": "Moyen Âge",
        "nature": "noms"
      },
      {
        "word": "le château/les châteaux",
        "nature": "noms"
      },
      {
        "word": "un habitant",
        "nature": "noms"
      },
      {
        "word": "la hauteur",
        "nature": "noms"
      },
      {
        "word": "la vue",
        "nature": "noms"
      },
      {
        "word": "la tour",
        "nature": "noms"
      },
      {
        "word": "la région",
        "nature": "noms"
      },
      {
        "word": "un rempart",
        "nature": "noms"
      },
      {
        "word": "un ennemi",
        "nature": "noms"
      },
      {
        "word": "le donjon",
        "nature": "noms"
      },
      {
        "word": "un seigneur",
        "nature": "noms"
      },
      {
        "word": "le cas",
        "nature": "noms"
      },
      {
        "word": "la famille",
        "nature": "noms"
      },
      {
        "word": "le villageois",
        "nature": "noms"
      },
      {
        "word": "le danger",
        "nature": "noms"
      },
      {
        "word": "la puissance",
        "nature": "noms"
      },
      {
        "word": "l'argent",
        "nature": "noms"
      },
      {
        "word": "le travail/ les travaux",
        "nature": "noms"
      },
      {
        "word": "protéger",
        "nature": "verbes"
      },
      {
        "word": "être",
        "nature": "verbes"
      },
      {
        "word": "permettre",
        "nature": "verbes"
      },
      {
        "word": "voir",
        "nature": "verbes"
      },
      {
        "word": "surgir",
        "nature": "verbes"
      },
      {
        "word": "loger",
        "nature": "verbes"
      },
      {
        "word": "se réfugier",
        "nature": "verbes"
      },
      {
        "word": "fort",
        "nature": "adjectifs"
      },
      {
        "word": "construit",
        "nature": "adjectifs"
      },
      {
        "word": "plongeant",
        "nature": "adjectifs"
      },
      {
        "word": "large",
        "nature": "adjectifs"
      },
      {
        "word": "haut",
        "nature": "adjectifs"
      },
      {
        "word": "grand",
        "nature": "adjectifs"
      },
      {
        "word": "prestigieux",
        "nature": "adjectifs"
      },
      {
        "word": "ainsi",
        "nature": "invariables"
      },
      {
        "word": "plusieurs",
        "nature": "invariables"
      },
      {
        "word": "sans",
        "nature": "invariables"
      },
      {
        "word": "lorsque",
        "nature": "invariables"
      },
      {
        "word": "quelquefois",
        "nature": "invariables"
      },
      {
        "word": "souvent",
        "nature": "invariables"
      },
      {
        "word": "aussi",
        "nature": "invariables"
      },
      {
        "word": "parfois",
        "nature": "invariables"
      },
      {
        "word": "plus",
        "nature": "invariables"
      }
    ]
  },
  {
    "id": "semaine10",
    "title": "Jaune-rouge-bleu",
    "icon": "🔵",
    "orthoLecon": "O10 · Écrire « son » ou « sont »",
    "description": "Kandinsky et l'abstraction avec les couleurs primaires",
    "words": [
      {
        "word": "un jour",
        "nature": "noms"
      },
      {
        "word": "un atelier",
        "nature": "noms"
      },
      {
        "word": "le tableau",
        "nature": "noms"
      },
      {
        "word": "l'envers",
        "nature": "noms"
      },
      {
        "word": "un sens",
        "nature": "noms"
      },
      {
        "word": "la réalité",
        "nature": "noms"
      },
      {
        "word": "une émotion",
        "nature": "noms"
      },
      {
        "word": "la couleur",
        "nature": "noms"
      },
      {
        "word": "la composition",
        "nature": "noms"
      },
      {
        "word": "la ligne",
        "nature": "noms"
      },
      {
        "word": "un rectangle",
        "nature": "noms"
      },
      {
        "word": "la croix",
        "nature": "noms"
      },
      {
        "word": "le cercle",
        "nature": "noms"
      },
      {
        "word": "le cœur",
        "nature": "noms"
      },
      {
        "word": "une image",
        "nature": "noms"
      },
      {
        "word": "une imagination",
        "nature": "noms"
      },
      {
        "word": "la droite",
        "nature": "noms"
      },
      {
        "word": "la gauche",
        "nature": "noms"
      },
      {
        "word": "raconter",
        "nature": "verbes"
      },
      {
        "word": "chercher",
        "nature": "verbes"
      },
      {
        "word": "représenter",
        "nature": "verbes"
      },
      {
        "word": "pouvoir",
        "nature": "verbes"
      },
      {
        "word": "traduire",
        "nature": "verbes"
      },
      {
        "word": "voir",
        "nature": "verbes"
      },
      {
        "word": "subjugué",
        "nature": "adjectifs"
      },
      {
        "word": "intéressant",
        "nature": "adjectifs"
      },
      {
        "word": "débarrassé",
        "nature": "adjectifs"
      },
      {
        "word": "géométrique",
        "nature": "adjectifs"
      },
      {
        "word": "organisé",
        "nature": "adjectifs"
      },
      {
        "word": "utilisé",
        "nature": "adjectifs"
      },
      {
        "word": "brisé",
        "nature": "adjectifs"
      },
      {
        "word": "chaud",
        "nature": "adjectifs"
      },
      {
        "word": "froid",
        "nature": "adjectifs"
      },
      {
        "word": "jaune",
        "nature": "adjectifs"
      },
      {
        "word": "rouge",
        "nature": "adjectifs"
      },
      {
        "word": "bleu",
        "nature": "adjectifs"
      },
      {
        "word": "plus",
        "nature": "invariables"
      },
      {
        "word": "dans",
        "nature": "invariables"
      },
      {
        "word": "pour",
        "nature": "invariables"
      },
      {
        "word": "mais",
        "nature": "invariables"
      },
      {
        "word": "selon",
        "nature": "invariables"
      }
    ]
  },
  {
    "id": "semaine11",
    "title": "Summertime",
    "icon": "🎵",
    "orthoLecon": "O11 · Écrire « on » ou « ont »",
    "description": "Gershwin et le jazz américain qui enchante le monde",
    "words": [
      {
        "word": "le début",
        "nature": "noms"
      },
      {
        "word": "le siècle",
        "nature": "noms"
      },
      {
        "word": "le jazz",
        "nature": "noms"
      },
      {
        "word": "le chant",
        "nature": "noms"
      },
      {
        "word": "le champ",
        "nature": "noms"
      },
      {
        "word": "l'Amérique",
        "nature": "noms"
      },
      {
        "word": "un esclave",
        "nature": "noms"
      },
      {
        "word": "l'Afrique",
        "nature": "noms"
      },
      {
        "word": "un artiste",
        "nature": "noms"
      },
      {
        "word": "la force",
        "nature": "noms"
      },
      {
        "word": "un instrument",
        "nature": "noms"
      },
      {
        "word": "la guitare",
        "nature": "noms"
      },
      {
        "word": "le piano",
        "nature": "noms"
      },
      {
        "word": "le rôle",
        "nature": "noms"
      },
      {
        "word": "la trompette",
        "nature": "noms"
      },
      {
        "word": "la musique",
        "nature": "noms"
      },
      {
        "word": "la batterie",
        "nature": "noms"
      },
      {
        "word": "la possibilité",
        "nature": "noms"
      },
      {
        "word": "inventer",
        "nature": "verbes"
      },
      {
        "word": "travailler",
        "nature": "verbes"
      },
      {
        "word": "écouter",
        "nature": "verbes"
      },
      {
        "word": "entendre",
        "nature": "verbes"
      },
      {
        "word": "exister",
        "nature": "verbes"
      },
      {
        "word": "improviser",
        "nature": "verbes"
      },
      {
        "word": "jouer",
        "nature": "verbes"
      },
      {
        "word": "noir",
        "nature": "adjectifs"
      },
      {
        "word": "inspiré",
        "nature": "adjectifs"
      },
      {
        "word": "important",
        "nature": "adjectifs"
      },
      {
        "word": "certain",
        "nature": "adjectifs"
      },
      {
        "word": "qui",
        "nature": "invariables"
      },
      {
        "word": "dans",
        "nature": "invariables"
      },
      {
        "word": "pour",
        "nature": "invariables"
      },
      {
        "word": "quand",
        "nature": "invariables"
      },
      {
        "word": "surtout",
        "nature": "invariables"
      },
      {
        "word": "comme",
        "nature": "invariables"
      },
      {
        "word": "encore",
        "nature": "invariables"
      },
      {
        "word": "très",
        "nature": "invariables"
      },
      {
        "word": "aujourd'hui",
        "nature": "invariables"
      },
      {
        "word": "quelquefois",
        "nature": "invariables"
      },
      {
        "word": "sans",
        "nature": "invariables"
      },
      {
        "word": "au fur et à mesure",
        "nature": "invariables"
      }
    ]
  },
  {
    "id": "semaine12",
    "title": "Le château de Chambord",
    "icon": "🏯",
    "orthoLecon": "O12 · Écrire « c » ou « ç »",
    "description": "Le plus grand château de la Loire, joyau de la Renaissance",
    "words": [
      {
        "word": "le temps",
        "nature": "noms"
      },
      {
        "word": "la paix",
        "nature": "noms"
      },
      {
        "word": "une citadelle",
        "nature": "noms"
      },
      {
        "word": "un palais",
        "nature": "noms"
      },
      {
        "word": "un château",
        "nature": "noms"
      },
      {
        "word": "l'art",
        "nature": "noms"
      },
      {
        "word": "un aperçu",
        "nature": "noms"
      },
      {
        "word": "la Renaissance",
        "nature": "noms"
      },
      {
        "word": "la façade",
        "nature": "noms"
      },
      {
        "word": "la fenêtre",
        "nature": "noms"
      },
      {
        "word": "la meurtrière",
        "nature": "noms"
      },
      {
        "word": "la tour",
        "nature": "noms"
      },
      {
        "word": "le fossé",
        "nature": "noms"
      },
      {
        "word": "la pièce",
        "nature": "noms"
      },
      {
        "word": "l'invité",
        "nature": "noms"
      },
      {
        "word": "l'escalier",
        "nature": "noms"
      },
      {
        "word": "une hélice",
        "nature": "noms"
      },
      {
        "word": "la façon",
        "nature": "noms"
      },
      {
        "word": "la personne",
        "nature": "noms"
      },
      {
        "word": "l'inventeur",
        "nature": "noms"
      },
      {
        "word": "s'installer",
        "nature": "verbes"
      },
      {
        "word": "donner",
        "nature": "verbes"
      },
      {
        "word": "défendre",
        "nature": "verbes"
      },
      {
        "word": "recevoir",
        "nature": "verbes"
      },
      {
        "word": "penser",
        "nature": "verbes"
      },
      {
        "word": "descendre",
        "nature": "verbes"
      },
      {
        "word": "remplacer/remplaçant",
        "nature": "verbes"
      },
      {
        "word": "moderne",
        "nature": "adjectifs"
      },
      {
        "word": "abandonné",
        "nature": "adjectifs"
      },
      {
        "word": "luxueux",
        "nature": "adjectifs"
      },
      {
        "word": "percé",
        "nature": "adjectifs"
      },
      {
        "word": "nombreux",
        "nature": "adjectifs"
      },
      {
        "word": "central",
        "nature": "adjectifs"
      },
      {
        "word": "français",
        "nature": "adjectifs"
      },
      {
        "word": "étranger",
        "nature": "adjectifs"
      },
      {
        "word": "conçu",
        "nature": "adjectifs"
      },
      {
        "word": "pour",
        "nature": "invariables"
      },
      {
        "word": "ailleurs",
        "nature": "invariables"
      },
      {
        "word": "mais",
        "nature": "invariables"
      },
      {
        "word": "lors",
        "nature": "invariables"
      }
    ]
  },
  {
    "id": "semaine13",
    "title": "Les Très Riches Heures du duc de Berry",
    "icon": "📜",
    "orthoLecon": "O13 · Le pluriel des noms (2)",
    "description": "Le plus beau manuscrit enluminé du Moyen Âge",
    "words": [
      {
        "word": "l'invention",
        "nature": "noms"
      },
      {
        "word": "l'imprimerie",
        "nature": "noms"
      },
      {
        "word": "la peau",
        "nature": "noms"
      },
      {
        "word": "le mois",
        "nature": "noms"
      },
      {
        "word": "la main",
        "nature": "noms"
      },
      {
        "word": "une année",
        "nature": "noms"
      },
      {
        "word": "le travail",
        "nature": "noms"
      },
      {
        "word": "le minéral",
        "nature": "noms"
      },
      {
        "word": "le végétal",
        "nature": "noms"
      },
      {
        "word": "la couleur",
        "nature": "noms"
      },
      {
        "word": "un joyau",
        "nature": "noms"
      },
      {
        "word": "un animal",
        "nature": "noms"
      },
      {
        "word": "l'époque",
        "nature": "noms"
      },
      {
        "word": "août",
        "nature": "noms"
      },
      {
        "word": "une proie",
        "nature": "noms"
      },
      {
        "word": "le calendrier",
        "nature": "noms"
      },
      {
        "word": "le seigneur",
        "nature": "noms"
      },
      {
        "word": "le cheval",
        "nature": "noms"
      },
      {
        "word": "le plan",
        "nature": "noms"
      },
      {
        "word": "un oiseau",
        "nature": "noms"
      },
      {
        "word": "le ruisseau",
        "nature": "noms"
      },
      {
        "word": "les gens",
        "nature": "noms"
      },
      {
        "word": "le paysan",
        "nature": "noms"
      },
      {
        "word": "le paysage",
        "nature": "noms"
      },
      {
        "word": "le champ",
        "nature": "noms"
      },
      {
        "word": "fabriquer",
        "nature": "verbes"
      },
      {
        "word": "demander",
        "nature": "verbes"
      },
      {
        "word": "représenter",
        "nature": "verbes"
      },
      {
        "word": "rapporter",
        "nature": "verbes"
      },
      {
        "word": "se baigner",
        "nature": "verbes"
      },
      {
        "word": "travailler",
        "nature": "verbes"
      },
      {
        "word": "médiéval",
        "nature": "adjectifs"
      },
      {
        "word": "copié",
        "nature": "adjectifs"
      },
      {
        "word": "dressé",
        "nature": "adjectifs"
      },
      {
        "word": "accompagné",
        "nature": "adjectifs"
      },
      {
        "word": "dernier",
        "nature": "adjectifs"
      },
      {
        "word": "magnifique",
        "nature": "adjectifs"
      },
      {
        "word": "avant",
        "nature": "invariables"
      },
      {
        "word": "parfois",
        "nature": "invariables"
      },
      {
        "word": "voici",
        "nature": "invariables"
      },
      {
        "word": "plusieurs",
        "nature": "invariables"
      },
      {
        "word": "sur",
        "nature": "invariables"
      },
      {
        "word": "pour",
        "nature": "invariables"
      },
      {
        "word": "dont",
        "nature": "invariables"
      }
    ]
  },
  {
    "id": "semaine14",
    "title": "Les mégalithes de Carnac",
    "icon": "🪨",
    "orthoLecon": "O14 · Le pluriel des noms (3)",
    "description": "Les mystérieuses pierres levées de Bretagne",
    "words": [
      {
        "word": "un homme",
        "nature": "noms"
      },
      {
        "word": "le monument",
        "nature": "noms"
      },
      {
        "word": "le trou",
        "nature": "noms"
      },
      {
        "word": "la pierre",
        "nature": "noms"
      },
      {
        "word": "le ciel/les ciels/ les cieux",
        "nature": "noms"
      },
      {
        "word": "un caillou",
        "nature": "noms"
      },
      {
        "word": "la réalité",
        "nature": "noms"
      },
      {
        "word": "la hauteur",
        "nature": "noms"
      },
      {
        "word": "le mètre",
        "nature": "noms"
      },
      {
        "word": "la Préhistoire",
        "nature": "noms"
      },
      {
        "word": "le dieu",
        "nature": "noms"
      },
      {
        "word": "l'Antiquité",
        "nature": "noms"
      },
      {
        "word": "un auteur",
        "nature": "noms"
      },
      {
        "word": "la bande dessinée",
        "nature": "noms"
      },
      {
        "word": "le soleil",
        "nature": "noms"
      },
      {
        "word": "le lieu",
        "nature": "noms"
      },
      {
        "word": "le feu",
        "nature": "noms"
      },
      {
        "word": "élever",
        "nature": "verbes"
      },
      {
        "word": "mesurer",
        "nature": "verbes"
      },
      {
        "word": "prier",
        "nature": "verbes"
      },
      {
        "word": "porter",
        "nature": "verbes"
      },
      {
        "word": "servir",
        "nature": "verbes"
      },
      {
        "word": "énorme",
        "nature": "adjectifs"
      },
      {
        "word": "planté",
        "nature": "adjectifs"
      },
      {
        "word": "dressé",
        "nature": "adjectifs"
      },
      {
        "word": "gros",
        "nature": "adjectifs"
      },
      {
        "word": "aligné",
        "nature": "adjectifs"
      },
      {
        "word": "orienté",
        "nature": "adjectifs"
      },
      {
        "word": "sacré",
        "nature": "adjectifs"
      },
      {
        "word": "longtemps",
        "nature": "invariables"
      },
      {
        "word": "c'est-à-dire",
        "nature": "invariables"
      },
      {
        "word": "sans",
        "nature": "invariables"
      },
      {
        "word": "vers",
        "nature": "invariables"
      },
      {
        "word": "et puis",
        "nature": "invariables"
      },
      {
        "word": "non",
        "nature": "invariables"
      },
      {
        "word": "alors",
        "nature": "invariables"
      },
      {
        "word": "comme",
        "nature": "invariables"
      },
      {
        "word": "jusqu'à",
        "nature": "invariables"
      },
      {
        "word": "peut-être",
        "nature": "invariables"
      },
      {
        "word": "régulièrement",
        "nature": "invariables"
      },
      {
        "word": "il y a",
        "nature": "invariables"
      },
      {
        "word": "très",
        "nature": "invariables"
      },
      {
        "word": "autrefois",
        "nature": "invariables"
      }
    ]
  },
  {
    "id": "semaine15",
    "title": "Le Lac des cygnes",
    "icon": "🦢",
    "orthoLecon": "O15 · Le féminin des noms",
    "description": "Tchaïkovski et le ballet le plus célèbre du monde",
    "words": [
      {
        "word": "le roi/la reine",
        "nature": "noms"
      },
      {
        "word": "le fils/la fille",
        "nature": "noms"
      },
      {
        "word": "un homme/une femme",
        "nature": "noms"
      },
      {
        "word": "le prince/ la princesse",
        "nature": "noms"
      },
      {
        "word": "le lac",
        "nature": "noms"
      },
      {
        "word": "le cygne",
        "nature": "noms"
      },
      {
        "word": "le magicien/la magicienne",
        "nature": "noms"
      },
      {
        "word": "le prisonnier/la prisonnière",
        "nature": "noms"
      },
      {
        "word": "le soleil",
        "nature": "noms"
      },
      {
        "word": "le bal",
        "nature": "noms"
      },
      {
        "word": "un sortilège",
        "nature": "noms"
      },
      {
        "word": "le sorcier/ la sorcière",
        "nature": "noms"
      },
      {
        "word": "une victime",
        "nature": "noms"
      },
      {
        "word": "la colère",
        "nature": "noms"
      },
      {
        "word": "l'apparence",
        "nature": "noms"
      },
      {
        "word": "le séducteur/ la séductrice",
        "nature": "noms"
      },
      {
        "word": "l'ensorceleur/l'ensorceleuse",
        "nature": "noms"
      },
      {
        "word": "l'étranger/l'étrangère",
        "nature": "noms"
      },
      {
        "word": "demander",
        "nature": "verbes"
      },
      {
        "word": "se promener",
        "nature": "verbes"
      },
      {
        "word": "se présenter",
        "nature": "verbes"
      },
      {
        "word": "accepter",
        "nature": "verbes"
      },
      {
        "word": "comprendre",
        "nature": "verbes"
      },
      {
        "word": "délivrer",
        "nature": "verbes"
      },
      {
        "word": "épouser",
        "nature": "verbes"
      },
      {
        "word": "désespéré",
        "nature": "adjectifs"
      },
      {
        "word": "jeune",
        "nature": "adjectifs"
      },
      {
        "word": "terrible",
        "nature": "adjectifs"
      },
      {
        "word": "transformé",
        "nature": "adjectifs"
      },
      {
        "word": "accompagné",
        "nature": "adjectifs"
      },
      {
        "word": "victime",
        "nature": "adjectifs"
      },
      {
        "word": "au-dessus",
        "nature": "invariables"
      },
      {
        "word": "en fait",
        "nature": "invariables"
      },
      {
        "word": "lors",
        "nature": "invariables"
      },
      {
        "word": "quand",
        "nature": "invariables"
      }
    ]
  },
  {
    "id": "semaine16",
    "title": "Le château de Versailles",
    "icon": "👑",
    "orthoLecon": "O16 · Le pluriel des adjectifs",
    "description": "La magnificence du Roi-Soleil et ses jardins à la française",
    "words": [
      {
        "word": "le château",
        "nature": "noms"
      },
      {
        "word": "le trésor",
        "nature": "noms"
      },
      {
        "word": "le palais",
        "nature": "noms"
      },
      {
        "word": "la puissance",
        "nature": "noms"
      },
      {
        "word": "le soleil",
        "nature": "noms"
      },
      {
        "word": "le jardin",
        "nature": "noms"
      },
      {
        "word": "l'ensemble",
        "nature": "noms"
      },
      {
        "word": "le parc",
        "nature": "noms"
      },
      {
        "word": "le domaine",
        "nature": "noms"
      },
      {
        "word": "un appartement",
        "nature": "noms"
      },
      {
        "word": "la glace",
        "nature": "noms"
      },
      {
        "word": "la fête",
        "nature": "noms"
      },
      {
        "word": "la galerie",
        "nature": "noms"
      },
      {
        "word": "le miroir",
        "nature": "noms"
      },
      {
        "word": "un arbuste",
        "nature": "noms"
      },
      {
        "word": "la fontaine",
        "nature": "noms"
      },
      {
        "word": "une allée",
        "nature": "noms"
      },
      {
        "word": "la pelouse",
        "nature": "noms"
      },
      {
        "word": "devenir",
        "nature": "verbes"
      },
      {
        "word": "montrer",
        "nature": "verbes"
      },
      {
        "word": "se composer",
        "nature": "verbes"
      },
      {
        "word": "admirer",
        "nature": "verbes"
      },
      {
        "word": "organiser",
        "nature": "verbes"
      },
      {
        "word": "principal",
        "nature": "adjectifs"
      },
      {
        "word": "national",
        "nature": "adjectifs"
      },
      {
        "word": "transformé",
        "nature": "adjectifs"
      },
      {
        "word": "beau",
        "nature": "adjectifs"
      },
      {
        "word": "royal",
        "nature": "adjectifs"
      },
      {
        "word": "magnifique",
        "nature": "adjectifs"
      },
      {
        "word": "taillé",
        "nature": "adjectifs"
      },
      {
        "word": "français",
        "nature": "adjectifs"
      },
      {
        "word": "flamboyant",
        "nature": "adjectifs"
      },
      {
        "word": "nombreux",
        "nature": "adjectifs"
      },
      {
        "word": "original",
        "nature": "adjectifs"
      },
      {
        "word": "géométrique",
        "nature": "adjectifs"
      },
      {
        "word": "somptueux",
        "nature": "adjectifs"
      },
      {
        "word": "pour",
        "nature": "invariables"
      },
      {
        "word": "plus",
        "nature": "invariables"
      },
      {
        "word": "près de",
        "nature": "invariables"
      },
      {
        "word": "avec",
        "nature": "invariables"
      },
      {
        "word": "parmi",
        "nature": "invariables"
      },
      {
        "word": "y",
        "nature": "invariables"
      }
    ]
  },
  {
    "id": "semaine17",
    "title": "La Dame à la licorne",
    "icon": "🦄",
    "orthoLecon": "O17 · Le féminin des adjectifs",
    "description": "La mystérieuse tapisserie médiévale des cinq sens",
    "words": [
      {
        "word": "le siècle",
        "nature": "noms"
      },
      {
        "word": "la tapisserie",
        "nature": "noms"
      },
      {
        "word": "la demeure",
        "nature": "noms"
      },
      {
        "word": "le mur",
        "nature": "noms"
      },
      {
        "word": "le froid",
        "nature": "noms"
      },
      {
        "word": "une série",
        "nature": "noms"
      },
      {
        "word": "la dame",
        "nature": "noms"
      },
      {
        "word": "la licorne",
        "nature": "noms"
      },
      {
        "word": "un panneau",
        "nature": "noms"
      },
      {
        "word": "le fond",
        "nature": "noms"
      },
      {
        "word": "la scène",
        "nature": "noms"
      },
      {
        "word": "un animal",
        "nature": "noms"
      },
      {
        "word": "la créature",
        "nature": "noms"
      },
      {
        "word": "la servante",
        "nature": "noms"
      },
      {
        "word": "un film",
        "nature": "noms"
      },
      {
        "word": "un roman",
        "nature": "noms"
      },
      {
        "word": "un élève",
        "nature": "noms"
      },
      {
        "word": "une île",
        "nature": "noms"
      },
      {
        "word": "la salle",
        "nature": "noms"
      },
      {
        "word": "accrocher",
        "nature": "verbes"
      },
      {
        "word": "protéger",
        "nature": "verbes"
      },
      {
        "word": "comporter",
        "nature": "verbes"
      },
      {
        "word": "représenter",
        "nature": "verbes"
      },
      {
        "word": "décorer",
        "nature": "verbes"
      },
      {
        "word": "précieux",
        "nature": "adjectifs"
      },
      {
        "word": "décoratif",
        "nature": "adjectifs"
      },
      {
        "word": "médiéval",
        "nature": "adjectifs"
      },
      {
        "word": "grand",
        "nature": "adjectifs"
      },
      {
        "word": "central",
        "nature": "adjectifs"
      },
      {
        "word": "fleuri",
        "nature": "adjectifs"
      },
      {
        "word": "autre",
        "nature": "adjectifs"
      },
      {
        "word": "rouge",
        "nature": "adjectifs"
      },
      {
        "word": "bleu",
        "nature": "adjectifs"
      },
      {
        "word": "printanier",
        "nature": "adjectifs"
      },
      {
        "word": "fabuleux",
        "nature": "adjectifs"
      },
      {
        "word": "accompagné",
        "nature": "adjectifs"
      },
      {
        "word": "ancien",
        "nature": "adjectifs"
      },
      {
        "word": "fameux",
        "nature": "adjectifs"
      },
      {
        "word": "gracieux",
        "nature": "adjectifs"
      },
      {
        "word": "vers",
        "nature": "invariables"
      },
      {
        "word": "aussi",
        "nature": "invariables"
      },
      {
        "word": "devant",
        "nature": "invariables"
      },
      {
        "word": "derrière",
        "nature": "invariables"
      },
      {
        "word": "parfois",
        "nature": "invariables"
      },
      {
        "word": "encore",
        "nature": "invariables"
      },
      {
        "word": "aujourd'hui",
        "nature": "invariables"
      },
      {
        "word": "ainsi",
        "nature": "invariables"
      }
    ]
  },
  {
    "id": "semaine18",
    "title": "La Liberté guidant le peuple",
    "icon": "🗽",
    "orthoLecon": "O18 · Les lettres finales muettes",
    "description": "Delacroix et la Révolution de juillet 1830",
    "words": [
      {
        "word": "le milieu",
        "nature": "noms"
      },
      {
        "word": "le tableau",
        "nature": "noms"
      },
      {
        "word": "la femme",
        "nature": "noms"
      },
      {
        "word": "le drapeau",
        "nature": "noms"
      },
      {
        "word": "la liberté",
        "nature": "noms"
      },
      {
        "word": "le peuple",
        "nature": "noms"
      },
      {
        "word": "la main",
        "nature": "noms"
      },
      {
        "word": "la liberté",
        "nature": "noms"
      },
      {
        "word": "un personnage",
        "nature": "noms"
      },
      {
        "word": "un révolutionnaire",
        "nature": "noms"
      },
      {
        "word": "un corps",
        "nature": "noms"
      },
      {
        "word": "un soldat",
        "nature": "noms"
      },
      {
        "word": "le paysan",
        "nature": "noms"
      },
      {
        "word": "le foulard",
        "nature": "noms"
      },
      {
        "word": "la rue",
        "nature": "noms"
      },
      {
        "word": "la tête",
        "nature": "noms"
      },
      {
        "word": "le pied",
        "nature": "noms"
      },
      {
        "word": "un ouvrier",
        "nature": "noms"
      },
      {
        "word": "le côté",
        "nature": "noms"
      },
      {
        "word": "le bourgeois",
        "nature": "noms"
      },
      {
        "word": "le chapeau",
        "nature": "noms"
      },
      {
        "word": "le garçon",
        "nature": "noms"
      },
      {
        "word": "le pistolet",
        "nature": "noms"
      },
      {
        "word": "le nuage",
        "nature": "noms"
      },
      {
        "word": "la fumée",
        "nature": "noms"
      },
      {
        "word": "brandir",
        "nature": "verbes"
      },
      {
        "word": "appeler",
        "nature": "verbes"
      },
      {
        "word": "se révolter",
        "nature": "verbes"
      },
      {
        "word": "franchir",
        "nature": "verbes"
      },
      {
        "word": "émerger",
        "nature": "verbes"
      },
      {
        "word": "apercevoir",
        "nature": "verbes"
      },
      {
        "word": "bleu",
        "nature": "adjectifs"
      },
      {
        "word": "blanc",
        "nature": "adjectifs"
      },
      {
        "word": "rouge",
        "nature": "adjectifs"
      },
      {
        "word": "autre",
        "nature": "adjectifs"
      },
      {
        "word": "français",
        "nature": "adjectifs"
      },
      {
        "word": "appelé",
        "nature": "adjectifs"
      },
      {
        "word": "petit",
        "nature": "adjectifs"
      },
      {
        "word": "mort",
        "nature": "adjectifs"
      },
      {
        "word": "coiffé",
        "nature": "adjectifs"
      },
      {
        "word": "épais",
        "nature": "adjectifs"
      },
      {
        "word": "noir",
        "nature": "adjectifs"
      },
      {
        "word": "parmi",
        "nature": "invariables"
      },
      {
        "word": "plusieurs",
        "nature": "invariables"
      },
      {
        "word": "avec",
        "nature": "invariables"
      },
      {
        "word": "dans",
        "nature": "invariables"
      },
      {
        "word": "enfin",
        "nature": "invariables"
      },
      {
        "word": "loin",
        "nature": "invariables"
      },
      {
        "word": "derrière",
        "nature": "invariables"
      },
      {
        "word": "aussi",
        "nature": "invariables"
      }
    ]
  },
  {
    "id": "semaine19",
    "title": "La pyramide de Kheops",
    "icon": "🔺",
    "orthoLecon": "O19 · Les mots en -ail, -eil, -euil, -ouil",
    "description": "La grande pyramide, l'une des Sept Merveilles du monde",
    "words": [
      {
        "word": "la pyramide",
        "nature": "noms"
      },
      {
        "word": "la merveille",
        "nature": "noms"
      },
      {
        "word": "un historien",
        "nature": "noms"
      },
      {
        "word": "une époque",
        "nature": "noms"
      },
      {
        "word": "l'année",
        "nature": "noms"
      },
      {
        "word": "la construction",
        "nature": "noms"
      },
      {
        "word": "un homme",
        "nature": "noms"
      },
      {
        "word": "la pierre",
        "nature": "noms"
      },
      {
        "word": "le rayon",
        "nature": "noms"
      },
      {
        "word": "le soleil",
        "nature": "noms"
      },
      {
        "word": "une feuille",
        "nature": "noms"
      },
      {
        "word": "le papier",
        "nature": "noms"
      },
      {
        "word": "le seuil",
        "nature": "noms"
      },
      {
        "word": "un couloir",
        "nature": "noms"
      },
      {
        "word": "la chambre",
        "nature": "noms"
      },
      {
        "word": "le tombeau",
        "nature": "noms"
      },
      {
        "word": "le sommeil",
        "nature": "noms"
      },
      {
        "word": "se situer",
        "nature": "verbes"
      },
      {
        "word": "exiger",
        "nature": "verbes"
      },
      {
        "word": "refléter",
        "nature": "verbes"
      },
      {
        "word": "glisser",
        "nature": "verbes"
      },
      {
        "word": "accueillir",
        "nature": "verbes"
      },
      {
        "word": "protéger",
        "nature": "verbes"
      },
      {
        "word": "recouvert",
        "nature": "adjectifs"
      },
      {
        "word": "ajusté",
        "nature": "adjectifs"
      },
      {
        "word": "impossible",
        "nature": "adjectifs"
      },
      {
        "word": "dernier",
        "nature": "adjectifs"
      },
      {
        "word": "clair",
        "nature": "adjectifs"
      },
      {
        "word": "près",
        "nature": "invariables"
      },
      {
        "word": "selon",
        "nature": "invariables"
      },
      {
        "word": "pendant",
        "nature": "invariables"
      },
      {
        "word": "autrefois",
        "nature": "invariables"
      },
      {
        "word": "bien",
        "nature": "invariables"
      },
      {
        "word": "entre",
        "nature": "invariables"
      },
      {
        "word": "depuis",
        "nature": "invariables"
      },
      {
        "word": "plusieurs",
        "nature": "invariables"
      }
    ]
  },
  {
    "id": "semaine20",
    "title": "Le Dictateur",
    "icon": "🎬",
    "orthoLecon": "O20 · Écrire « se » ou « ce »",
    "description": "Chaplin satirise Hitler dans ce film courageux de 1940",
    "words": [
      {
        "word": "une action",
        "nature": "noms"
      },
      {
        "word": "un pays",
        "nature": "noms"
      },
      {
        "word": "un quartier",
        "nature": "noms"
      },
      {
        "word": "le dictateur",
        "nature": "noms"
      },
      {
        "word": "un Juif",
        "nature": "noms"
      },
      {
        "word": "le temps",
        "nature": "noms"
      },
      {
        "word": "un barbier",
        "nature": "noms"
      },
      {
        "word": "le dernier",
        "nature": "noms"
      },
      {
        "word": "un trait",
        "nature": "noms"
      },
      {
        "word": "un millier",
        "nature": "noms"
      },
      {
        "word": "une personne",
        "nature": "noms"
      },
      {
        "word": "le discours",
        "nature": "noms"
      },
      {
        "word": "la situation",
        "nature": "noms"
      },
      {
        "word": "l'Europe",
        "nature": "noms"
      },
      {
        "word": "une guerre",
        "nature": "noms"
      },
      {
        "word": "un film",
        "nature": "noms"
      },
      {
        "word": "un portrait",
        "nature": "noms"
      },
      {
        "word": "se situer",
        "nature": "verbes"
      },
      {
        "word": "rêver",
        "nature": "verbes"
      },
      {
        "word": "persécuter",
        "nature": "verbes"
      },
      {
        "word": "se ressembler",
        "nature": "verbes"
      },
      {
        "word": "arrêter",
        "nature": "verbes"
      },
      {
        "word": "s'inspirer",
        "nature": "verbes"
      },
      {
        "word": "imaginaire",
        "nature": "adjectifs"
      },
      {
        "word": "contrôlé",
        "nature": "adjectifs"
      },
      {
        "word": "juif/juive",
        "nature": "adjectifs"
      },
      {
        "word": "doux/douce",
        "nature": "adjectifs"
      },
      {
        "word": "amoureux/amoureuse",
        "nature": "adjectifs"
      },
      {
        "word": "confondu",
        "nature": "adjectifs"
      },
      {
        "word": "pacifiste",
        "nature": "adjectifs"
      },
      {
        "word": "politique",
        "nature": "adjectifs"
      },
      {
        "word": "second",
        "nature": "adjectifs"
      },
      {
        "word": "mondial",
        "nature": "adjectifs"
      },
      {
        "word": "ridicule",
        "nature": "adjectifs"
      },
      {
        "word": "pendant",
        "nature": "invariables"
      },
      {
        "word": "ainsi",
        "nature": "invariables"
      },
      {
        "word": "devant",
        "nature": "invariables"
      },
      {
        "word": "avec",
        "nature": "invariables"
      },
      {
        "word": "avant",
        "nature": "invariables"
      },
      {
        "word": "juste",
        "nature": "invariables"
      },
      {
        "word": "pour",
        "nature": "invariables"
      },
      {
        "word": "par",
        "nature": "invariables"
      }
    ]
  },
  {
    "id": "semaine21",
    "title": "La Vague",
    "icon": "🌊",
    "orthoLecon": "O21 · Les accents : é, è, ê",
    "description": "Hokusai et la force de la mer dans l'art japonais",
    "words": [
      {
        "word": "la vague",
        "nature": "noms"
      },
      {
        "word": "un arc",
        "nature": "noms"
      },
      {
        "word": "le cercle",
        "nature": "noms"
      },
      {
        "word": "la gauche",
        "nature": "noms"
      },
      {
        "word": "une écume",
        "nature": "noms"
      },
      {
        "word": "le bateau",
        "nature": "noms"
      },
      {
        "word": "la griffe",
        "nature": "noms"
      },
      {
        "word": "la moitié",
        "nature": "noms"
      },
      {
        "word": "la pêche",
        "nature": "noms"
      },
      {
        "word": "la mer",
        "nature": "noms"
      },
      {
        "word": "la colère",
        "nature": "noms"
      },
      {
        "word": "le mont",
        "nature": "noms"
      },
      {
        "word": "un emblème",
        "nature": "noms"
      },
      {
        "word": "la tempête",
        "nature": "noms"
      },
      {
        "word": "le volcan",
        "nature": "noms"
      },
      {
        "word": "le Japon",
        "nature": "noms"
      },
      {
        "word": "le mètre",
        "nature": "noms"
      },
      {
        "word": "la planète",
        "nature": "noms"
      },
      {
        "word": "le ciel",
        "nature": "noms"
      },
      {
        "word": "le rôle",
        "nature": "noms"
      },
      {
        "word": "s'élever",
        "nature": "verbes"
      },
      {
        "word": "rappeler",
        "nature": "verbes"
      },
      {
        "word": "dévorer",
        "nature": "verbes"
      },
      {
        "word": "sembler",
        "nature": "verbes"
      },
      {
        "word": "céder",
        "nature": "verbes"
      },
      {
        "word": "éclater",
        "nature": "verbes"
      },
      {
        "word": "engloutir",
        "nature": "verbes"
      },
      {
        "word": "bleu",
        "nature": "adjectifs"
      },
      {
        "word": "célèbre",
        "nature": "adjectifs"
      },
      {
        "word": "considéré",
        "nature": "adjectifs"
      },
      {
        "word": "sacré",
        "nature": "adjectifs"
      },
      {
        "word": "fragile",
        "nature": "adjectifs"
      },
      {
        "word": "premier",
        "nature": "adjectifs"
      },
      {
        "word": "dangereusement",
        "nature": "invariables"
      },
      {
        "word": "plus",
        "nature": "invariables"
      },
      {
        "word": "qui",
        "nature": "invariables"
      },
      {
        "word": "derrière",
        "nature": "invariables"
      },
      {
        "word": "comme",
        "nature": "invariables"
      },
      {
        "word": "malgré",
        "nature": "invariables"
      },
      {
        "word": "à côté de",
        "nature": "invariables"
      },
      {
        "word": "même",
        "nature": "invariables"
      },
      {
        "word": "bientôt",
        "nature": "invariables"
      }
    ]
  },
  {
    "id": "semaine22",
    "title": "La légende arthurienne",
    "icon": "🗡️",
    "orthoLecon": "O22 · Les accents (2) : accentuer le « e »",
    "description": "Le roi Arthur, Merlin et la quête du Graal",
    "words": [
      {
        "word": "le Moyen Âge",
        "nature": "noms"
      },
      {
        "word": "un auteur",
        "nature": "noms"
      },
      {
        "word": "un récit",
        "nature": "noms"
      },
      {
        "word": "une aventure",
        "nature": "noms"
      },
      {
        "word": "le chevalier",
        "nature": "noms"
      },
      {
        "word": "la légende",
        "nature": "noms"
      },
      {
        "word": "la paix",
        "nature": "noms"
      },
      {
        "word": "la justice",
        "nature": "noms"
      },
      {
        "word": "un exploit",
        "nature": "noms"
      },
      {
        "word": "un objectif",
        "nature": "noms"
      },
      {
        "word": "un lieu",
        "nature": "noms"
      },
      {
        "word": "un ennemi",
        "nature": "noms"
      },
      {
        "word": "une épreuve",
        "nature": "noms"
      },
      {
        "word": "un objet",
        "nature": "noms"
      },
      {
        "word": "la fée",
        "nature": "noms"
      },
      {
        "word": "le personnage",
        "nature": "noms"
      },
      {
        "word": "l'enchanteur",
        "nature": "noms"
      },
      {
        "word": "servir",
        "nature": "verbes"
      },
      {
        "word": "combattre",
        "nature": "verbes"
      },
      {
        "word": "relever",
        "nature": "verbes"
      },
      {
        "word": "imaginaire",
        "nature": "adjectifs"
      },
      {
        "word": "réuni",
        "nature": "adjectifs"
      },
      {
        "word": "différent",
        "nature": "adjectifs"
      },
      {
        "word": "principal",
        "nature": "adjectifs"
      },
      {
        "word": "cruel",
        "nature": "adjectifs"
      },
      {
        "word": "terrible",
        "nature": "adjectifs"
      },
      {
        "word": "aidé",
        "nature": "adjectifs"
      },
      {
        "word": "merveilleux",
        "nature": "adjectifs"
      },
      {
        "word": "généreux",
        "nature": "adjectifs"
      },
      {
        "word": "célèbre",
        "nature": "adjectifs"
      },
      {
        "word": "enchanté",
        "nature": "adjectifs"
      },
      {
        "word": "autour",
        "nature": "invariables"
      },
      {
        "word": "grâce",
        "nature": "invariables"
      },
      {
        "word": "pourquoi",
        "nature": "invariables"
      },
      {
        "word": "parfois",
        "nature": "invariables"
      },
      {
        "word": "comme",
        "nature": "invariables"
      }
    ]
  },
  {
    "id": "semaine23",
    "title": "La Joconde",
    "icon": "🖼️",
    "orthoLecon": "O23 · Écrire -é ou -er",
    "description": "Léonard de Vinci et le sourire mystérieux de Mona Lisa",
    "words": [
      {
        "word": "un âge",
        "nature": "noms"
      },
      {
        "word": "un maître",
        "nature": "noms"
      },
      {
        "word": "la peinture",
        "nature": "noms"
      },
      {
        "word": "une époque",
        "nature": "noms"
      },
      {
        "word": "une œuvre",
        "nature": "noms"
      },
      {
        "word": "le portrait",
        "nature": "noms"
      },
      {
        "word": "le sourire",
        "nature": "noms"
      },
      {
        "word": "Paris",
        "nature": "noms"
      },
      {
        "word": "la France",
        "nature": "noms"
      },
      {
        "word": "un touriste",
        "nature": "noms"
      },
      {
        "word": "le musée",
        "nature": "noms"
      },
      {
        "word": "dessiner",
        "nature": "verbes"
      },
      {
        "word": "sculpter",
        "nature": "verbes"
      },
      {
        "word": "éduquer",
        "nature": "verbes"
      },
      {
        "word": "influencer",
        "nature": "verbes"
      },
      {
        "word": "s'installer",
        "nature": "verbes"
      },
      {
        "word": "apporter",
        "nature": "verbes"
      },
      {
        "word": "venir",
        "nature": "verbes"
      },
      {
        "word": "jeune",
        "nature": "adjectifs"
      },
      {
        "word": "talentueux",
        "nature": "adjectifs"
      },
      {
        "word": "célèbre",
        "nature": "adjectifs"
      },
      {
        "word": "mystérieux",
        "nature": "adjectifs"
      },
      {
        "word": "entier",
        "nature": "adjectifs"
      },
      {
        "word": "protégé",
        "nature": "adjectifs"
      },
      {
        "word": "depuis",
        "nature": "invariables"
      },
      {
        "word": "toujours",
        "nature": "invariables"
      },
      {
        "word": "plusieurs",
        "nature": "invariables"
      },
      {
        "word": "parmi",
        "nature": "invariables"
      },
      {
        "word": "peut-être",
        "nature": "invariables"
      },
      {
        "word": "grâce",
        "nature": "invariables"
      },
      {
        "word": "aussi",
        "nature": "invariables"
      },
      {
        "word": "car",
        "nature": "invariables"
      },
      {
        "word": "déjà",
        "nature": "invariables"
      },
      {
        "word": "avec",
        "nature": "invariables"
      }
    ]
  },
  {
    "id": "semaine24",
    "title": "La Victoire de Samothrace",
    "icon": "🏺",
    "orthoLecon": "O24 · L'accord du participe passé",
    "description": "La déesse ailée de la victoire, sculpture grecque antique",
    "words": [
      {
        "word": "le monument",
        "nature": "noms"
      },
      {
        "word": "la victoire",
        "nature": "noms"
      },
      {
        "word": "une statue",
        "nature": "noms"
      },
      {
        "word": "un dieu",
        "nature": "noms"
      },
      {
        "word": "une déesse",
        "nature": "noms"
      },
      {
        "word": "la proue",
        "nature": "noms"
      },
      {
        "word": "un bateau",
        "nature": "noms"
      },
      {
        "word": "une œuvre",
        "nature": "noms"
      },
      {
        "word": "la bataille",
        "nature": "noms"
      },
      {
        "word": "un vol",
        "nature": "noms"
      },
      {
        "word": "la guerre",
        "nature": "noms"
      },
      {
        "word": "la divinité",
        "nature": "noms"
      },
      {
        "word": "un tissu",
        "nature": "noms"
      },
      {
        "word": "un manteau",
        "nature": "noms"
      },
      {
        "word": "le corps",
        "nature": "noms"
      },
      {
        "word": "le vent",
        "nature": "noms"
      },
      {
        "word": "composer",
        "nature": "verbes"
      },
      {
        "word": "ailer",
        "nature": "verbes"
      },
      {
        "word": "tailler",
        "nature": "verbes"
      },
      {
        "word": "commander",
        "nature": "verbes"
      },
      {
        "word": "représenter",
        "nature": "verbes"
      },
      {
        "word": "déployer",
        "nature": "verbes"
      },
      {
        "word": "habiller",
        "nature": "verbes"
      },
      {
        "word": "blanc",
        "nature": "adjectifs"
      },
      {
        "word": "gris",
        "nature": "adjectifs"
      },
      {
        "word": "fin",
        "nature": "adjectifs"
      },
      {
        "word": "alors",
        "nature": "invariables"
      },
      {
        "word": "sûrement",
        "nature": "invariables"
      },
      {
        "word": "très",
        "nature": "invariables"
      },
      {
        "word": "en train de",
        "nature": "invariables"
      }
    ]
  },
  {
    "id": "semaine25",
    "title": "Le Bassin aux nymphéas",
    "icon": "🌸",
    "orthoLecon": "O25 · Les noms en -tion et en -ssion",
    "description": "Monet et ses célèbres nénuphars à Giverny",
    "words": [
      {
        "word": "le soleil",
        "nature": "noms"
      },
      {
        "word": "une impression",
        "nature": "noms"
      },
      {
        "word": "le peintre",
        "nature": "noms"
      },
      {
        "word": "le mouvement",
        "nature": "noms"
      },
      {
        "word": "la réalité",
        "nature": "noms"
      },
      {
        "word": "le nom",
        "nature": "noms"
      },
      {
        "word": "un impressionniste",
        "nature": "noms"
      },
      {
        "word": "la perception",
        "nature": "noms"
      },
      {
        "word": "la précision",
        "nature": "noms"
      },
      {
        "word": "la peinture",
        "nature": "noms"
      },
      {
        "word": "l'eau",
        "nature": "noms"
      },
      {
        "word": "l'apparition",
        "nature": "noms"
      },
      {
        "word": "le ciel",
        "nature": "noms"
      },
      {
        "word": "l'invention",
        "nature": "noms"
      },
      {
        "word": "un atelier",
        "nature": "noms"
      },
      {
        "word": "la mission",
        "nature": "noms"
      },
      {
        "word": "la profession",
        "nature": "noms"
      },
      {
        "word": "la lumière",
        "nature": "noms"
      },
      {
        "word": "le style",
        "nature": "noms"
      },
      {
        "word": "la variation",
        "nature": "noms"
      },
      {
        "word": "l'exposition",
        "nature": "noms"
      },
      {
        "word": "la passion",
        "nature": "noms"
      },
      {
        "word": "représenter",
        "nature": "verbes"
      },
      {
        "word": "exprimer",
        "nature": "verbes"
      },
      {
        "word": "quitter",
        "nature": "verbes"
      },
      {
        "word": "s'exercer",
        "nature": "verbes"
      },
      {
        "word": "saisir",
        "nature": "verbes"
      },
      {
        "word": "choquer",
        "nature": "verbes"
      },
      {
        "word": "penser",
        "nature": "verbes"
      },
      {
        "word": "exclure",
        "nature": "verbes"
      },
      {
        "word": "avec",
        "nature": "invariables"
      },
      {
        "word": "mais",
        "nature": "invariables"
      },
      {
        "word": "depuis",
        "nature": "invariables"
      },
      {
        "word": "en effet",
        "nature": "invariables"
      },
      {
        "word": "dehors",
        "nature": "invariables"
      },
      {
        "word": "tellement",
        "nature": "invariables"
      },
      {
        "word": "bien",
        "nature": "invariables"
      },
      {
        "word": "tard",
        "nature": "invariables"
      },
      {
        "word": "plus",
        "nature": "invariables"
      }
    ]
  },
  {
    "id": "semaine26",
    "title": "Nanas : Les Trois Grâces",
    "icon": "💃",
    "orthoLecon": "O26 · L'accord du verbe : cas particuliers",
    "description": "Canova et la beauté en mouvement dans la sculpture néoclassique",
    "words": [
      {
        "word": "la sculpture",
        "nature": "noms"
      },
      {
        "word": "la femme",
        "nature": "noms"
      },
      {
        "word": "le cœur",
        "nature": "noms"
      },
      {
        "word": "le travail",
        "nature": "noms"
      },
      {
        "word": "une apparence",
        "nature": "noms"
      },
      {
        "word": "un homme",
        "nature": "noms"
      },
      {
        "word": "la taille",
        "nature": "noms"
      },
      {
        "word": "un géant",
        "nature": "noms"
      },
      {
        "word": "l'extérieur",
        "nature": "noms"
      },
      {
        "word": "une place",
        "nature": "noms"
      },
      {
        "word": "la société",
        "nature": "noms"
      },
      {
        "word": "un art",
        "nature": "noms"
      },
      {
        "word": "la domination",
        "nature": "noms"
      },
      {
        "word": "la crainte",
        "nature": "noms"
      },
      {
        "word": "la ville",
        "nature": "noms"
      },
      {
        "word": "le critique",
        "nature": "noms"
      },
      {
        "word": "le ventre",
        "nature": "noms"
      },
      {
        "word": "l'armée",
        "nature": "noms"
      },
      {
        "word": "représenter",
        "nature": "verbes"
      },
      {
        "word": "rendre",
        "nature": "verbes"
      },
      {
        "word": "installer",
        "nature": "verbes"
      },
      {
        "word": "résister",
        "nature": "verbes"
      },
      {
        "word": "inspirer",
        "nature": "verbes"
      },
      {
        "word": "piétiner",
        "nature": "verbes"
      },
      {
        "word": "danser",
        "nature": "verbes"
      },
      {
        "word": "féminin",
        "nature": "adjectifs"
      },
      {
        "word": "joyeux/joyeuse",
        "nature": "adjectifs"
      },
      {
        "word": "léger/légère",
        "nature": "adjectifs"
      },
      {
        "word": "menaçant",
        "nature": "adjectifs"
      },
      {
        "word": "important",
        "nature": "adjectifs"
      },
      {
        "word": "aussi",
        "nature": "invariables"
      },
      {
        "word": "sous",
        "nature": "invariables"
      },
      {
        "word": "mais",
        "nature": "invariables"
      },
      {
        "word": "souvent",
        "nature": "invariables"
      },
      {
        "word": "comme",
        "nature": "invariables"
      },
      {
        "word": "pour",
        "nature": "invariables"
      },
      {
        "word": "dans",
        "nature": "invariables"
      },
      {
        "word": "même",
        "nature": "invariables"
      }
    ]
  }
];
