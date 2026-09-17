const DICTEE_WEEKS = [
  {
    id:"semaine1", title:"La Tour Eiffel", icon:"🗼",
    orthoLecon:"O1 · Le pluriel des noms",
    description:"Le monument parisien et ses chiffres impressionnants",
    words:[
      {word:"la construction",nature:"noms"},{word:"la tour",nature:"noms"},
      {word:"le fer",nature:"noms"},{word:"la tonne",nature:"noms"},
      {word:"la peinture",nature:"noms"},{word:"le sommet",nature:"noms"},
      {word:"le monument",nature:"noms"},{word:"le pays",nature:"noms"},
      {word:"nécessiter",nature:"verbes"},{word:"briller",nature:"verbes"},
      {word:"célèbre",nature:"adjectifs"},
      {word:"plusieurs",nature:"invariables"},{word:"au-dessus",nature:"invariables"},{word:"ainsi",nature:"invariables"}
    ]
  },
  {
    id:"semaine2", title:"L'amphithéâtre de Nîmes", icon:"🏛️",
    orthoLecon:"O2 · Écrire « a » ou « à »",
    description:"Les vestiges romains et les combats de gladiateurs",
    words:[
      {word:"le siècle",nature:"noms"},{word:"une époque",nature:"noms"},
      {word:"la Gaule",nature:"noms"},{word:"le spectateur",nature:"noms"},
      {word:"le gladiateur",nature:"noms"},{word:"le combat",nature:"noms"},
      {word:"accueillir",nature:"verbes"},{word:"assister",nature:"verbes"},
      {word:"violent",nature:"adjectifs"},{word:"romain",nature:"adjectifs"},
      {word:"jusqu'à",nature:"invariables"},{word:"grâce à",nature:"invariables"},{word:"autour",nature:"invariables"}
    ]
  },
  {
    id:"semaine3", title:"La cathédrale de Reims", icon:"⛪",
    orthoLecon:"O3 · Écrire « et » ou « est »",
    description:"L'art gothique et les couronnements des rois de France",
    words:[
      {word:"la cathédrale",nature:"noms"},{word:"le vitrail",nature:"noms"},
      {word:"la façade",nature:"noms"},{word:"le portail",nature:"noms"},
      {word:"le couronnement",nature:"noms"},{word:"la lumière",nature:"noms"},
      {word:"construire",nature:"verbes"},{word:"sculpter",nature:"verbes"},
      {word:"gothique",nature:"adjectifs"},{word:"magnifique",nature:"adjectifs"},
      {word:"là",nature:"invariables"},{word:"partout",nature:"invariables"},{word:"aussi",nature:"invariables"}
    ]
  },
  {
    id:"semaine4", title:"La grotte de Lascaux", icon:"🦬",
    orthoLecon:"O4 · Écrire « s » ou « ss »",
    description:"Les peintures préhistoriques et les premiers artistes",
    words:[
      {word:"la grotte",nature:"noms"},{word:"le bison",nature:"noms"},
      {word:"la paroi",nature:"noms"},{word:"le chasseur",nature:"noms"},
      {word:"le dessin",nature:"noms"},{word:"la découverte",nature:"noms"},
      {word:"découvrir",nature:"verbes"},{word:"tracer",nature:"verbes"},
      {word:"préhistorique",nature:"adjectifs"},{word:"ancien",nature:"adjectifs"},
      {word:"aussi",nature:"invariables"},{word:"autrefois",nature:"invariables"},{word:"encore",nature:"invariables"}
    ]
  },
  {
    id:"semaine5", title:"Les Quatre Saisons", icon:"🍂",
    orthoLecon:"O5 · Les accords dans le groupe nominal",
    description:"Vivaldi et les paysages changeants tout au long de l'année",
    words:[
      {word:"la saison",nature:"noms"},{word:"le printemps",nature:"noms"},
      {word:"la nature",nature:"noms"},{word:"le paysage",nature:"noms"},
      {word:"la feuille",nature:"noms"},{word:"l'hiver",nature:"noms"},
      {word:"changer",nature:"verbes"},{word:"fleurir",nature:"verbes"},
      {word:"coloré",nature:"adjectifs"},{word:"beau",nature:"adjectifs"},
      {word:"dehors",nature:"invariables"},{word:"souvent",nature:"invariables"},{word:"partout",nature:"invariables"}
    ]
  },
  {
    id:"semaine6", title:"La Trahison des images", icon:"🎨",
    orthoLecon:"O6 · Les marques du pluriel",
    description:"Magritte et le tableau qui dit « Ceci n'est pas une pipe »",
    words:[
      {word:"la pipe",nature:"noms"},{word:"l'image",nature:"noms"},
      {word:"le tableau",nature:"noms"},{word:"le mot",nature:"noms"},
      {word:"l'artiste",nature:"noms"},{word:"le peintre",nature:"noms"},
      {word:"peindre",nature:"verbes"},{word:"représenter",nature:"verbes"},
      {word:"célèbre",nature:"adjectifs"},{word:"faux",nature:"adjectifs"},
      {word:"voilà",nature:"invariables"},{word:"jamais",nature:"invariables"},{word:"vraiment",nature:"invariables"}
    ]
  },
  {
    id:"semaine7", title:"Persée et Méduse", icon:"⚔️",
    orthoLecon:"O7 · Écrire « ou » ou « où »",
    description:"La mythologie grecque et les héros légendaires",
    words:[
      {word:"le héros",nature:"noms"},{word:"le serpent",nature:"noms"},
      {word:"le bouclier",nature:"noms"},{word:"la victoire",nature:"noms"},
      {word:"le regard",nature:"noms"},{word:"le miroir",nature:"noms"},
      {word:"combattre",nature:"verbes"},{word:"vaincre",nature:"verbes"},
      {word:"courageux",nature:"adjectifs"},{word:"terrible",nature:"adjectifs"},
      {word:"loin",nature:"invariables"},{word:"où",nature:"invariables"},{word:"enfin",nature:"invariables"}
    ]
  },
  {
    id:"semaine8", title:"La naissance de Vénus", icon:"🌊",
    orthoLecon:"O8 · Écrire « g » ou « gu »",
    description:"Botticelli et la déesse de la beauté surgissant des flots",
    words:[
      {word:"la déesse",nature:"noms"},{word:"la vague",nature:"noms"},
      {word:"le coquillage",nature:"noms"},{word:"la beauté",nature:"noms"},
      {word:"le rivage",nature:"noms"},{word:"le peintre",nature:"noms"},
      {word:"naître",nature:"verbes"},{word:"flotter",nature:"verbes"},
      {word:"élégant",nature:"adjectifs"},{word:"magnifique",nature:"adjectifs"},
      {word:"déjà",nature:"invariables"},{word:"longtemps",nature:"invariables"},{word:"ainsi",nature:"invariables"}
    ]
  },
  {
    id:"semaine9", title:"Le château de Bonaguil", icon:"🏰",
    orthoLecon:"O9 · Écrire « g » ou « ge »",
    description:"La dernière forteresse médiévale du Lot-et-Garonne",
    words:[
      {word:"le château",nature:"noms"},{word:"le donjon",nature:"noms"},
      {word:"le fossé",nature:"noms"},{word:"le seigneur",nature:"noms"},
      {word:"la forteresse",nature:"noms"},{word:"le passage",nature:"noms"},
      {word:"protéger",nature:"verbes"},{word:"défendre",nature:"verbes"},
      {word:"solide",nature:"adjectifs"},{word:"puissant",nature:"adjectifs"},
      {word:"partout",nature:"invariables"},{word:"autour",nature:"invariables"},{word:"dedans",nature:"invariables"}
    ]
  },
  {
    id:"semaine10", title:"Jaune-rouge-bleu", icon:"🔵",
    orthoLecon:"O10 · Écrire « son » ou « sont »",
    description:"Kandinsky et l'abstraction avec les couleurs primaires",
    words:[
      {word:"la couleur",nature:"noms"},{word:"la toile",nature:"noms"},
      {word:"le mélange",nature:"noms"},{word:"la forme",nature:"noms"},
      {word:"le pinceau",nature:"noms"},{word:"le cercle",nature:"noms"},
      {word:"mélanger",nature:"verbes"},{word:"créer",nature:"verbes"},
      {word:"vif",nature:"adjectifs"},{word:"primaire",nature:"adjectifs"},
      {word:"souvent",nature:"invariables"},{word:"ensemble",nature:"invariables"},{word:"partout",nature:"invariables"}
    ]
  },
  {
    id:"semaine11", title:"Summertime", icon:"🎵",
    orthoLecon:"O11 · Écrire « on » ou « ont »",
    description:"Gershwin et le jazz américain qui enchante le monde",
    words:[
      {word:"le jazz",nature:"noms"},{word:"la mélodie",nature:"noms"},
      {word:"la chanson",nature:"noms"},{word:"le musicien",nature:"noms"},
      {word:"la scène",nature:"noms"},{word:"le rythme",nature:"noms"},
      {word:"chanter",nature:"verbes"},{word:"jouer",nature:"verbes"},
      {word:"doux",nature:"adjectifs"},{word:"triste",nature:"adjectifs"},
      {word:"parfois",nature:"invariables"},{word:"souvent",nature:"invariables"},{word:"ensemble",nature:"invariables"}
    ]
  },
  {
    id:"semaine12", title:"Le château de Chambord", icon:"🏯",
    orthoLecon:"O12 · Écrire « c » ou « ç »",
    description:"Le plus grand château de la Loire, joyau de la Renaissance",
    words:[
      {word:"le roi",nature:"noms"},{word:"la Renaissance",nature:"noms"},
      {word:"l'escalier",nature:"noms"},{word:"la terrasse",nature:"noms"},
      {word:"la façade",nature:"noms"},{word:"la forêt",nature:"noms"},
      {word:"visiter",nature:"verbes"},{word:"construire",nature:"verbes"},
      {word:"royal",nature:"adjectifs"},{word:"somptueux",nature:"adjectifs"},
      {word:"jamais",nature:"invariables"},{word:"ici",nature:"invariables"},{word:"longtemps",nature:"invariables"}
    ]
  },
  {
    id:"semaine13", title:"Les très riches heures du duc de Berry", icon:"📜",
    orthoLecon:"O13 · Le pluriel des noms (2)",
    description:"Le plus beau manuscrit enluminé du Moyen Âge",
    words:[
      {word:"le manuscrit",nature:"noms"},{word:"le mois",nature:"noms"},
      {word:"la miniature",nature:"noms"},{word:"le calendrier",nature:"noms"},
      {word:"le château",nature:"noms"},{word:"le paysan",nature:"noms"},
      {word:"illustrer",nature:"verbes"},{word:"enluminer",nature:"verbes"},
      {word:"précieux",nature:"adjectifs"},{word:"luxueux",nature:"adjectifs"},
      {word:"toujours",nature:"invariables"},{word:"jadis",nature:"invariables"},{word:"autrefois",nature:"invariables"}
    ]
  },
  {
    id:"semaine14", title:"Les mégalithes de Carnac", icon:"🪨",
    orthoLecon:"O14 · Le pluriel des noms (3)",
    description:"Les mystérieuses pierres levées de Bretagne",
    words:[
      {word:"le menhir",nature:"noms"},{word:"le dolmen",nature:"noms"},
      {word:"la pierre",nature:"noms"},{word:"l'alignement",nature:"noms"},
      {word:"le mystère",nature:"noms"},{word:"le cheval",nature:"noms"},
      {word:"dresser",nature:"verbes"},{word:"aligner",nature:"verbes"},
      {word:"énorme",nature:"adjectifs"},{word:"mystérieux",nature:"adjectifs"},
      {word:"autrefois",nature:"invariables"},{word:"encore",nature:"invariables"},{word:"partout",nature:"invariables"}
    ]
  },
  {
    id:"semaine15", title:"Le lac des cygnes", icon:"🦢",
    orthoLecon:"O15 · Le féminin des noms",
    description:"Tchaïkovski et le ballet le plus célèbre du monde",
    words:[
      {word:"le ballet",nature:"noms"},{word:"la danseuse",nature:"noms"},
      {word:"le cygne",nature:"noms"},{word:"la musique",nature:"noms"},
      {word:"le prince",nature:"noms"},{word:"la princesse",nature:"noms"},
      {word:"danser",nature:"verbes"},{word:"tourner",nature:"verbes"},
      {word:"gracieux",nature:"adjectifs"},{word:"léger",nature:"adjectifs"},
      {word:"ensemble",nature:"invariables"},{word:"doucement",nature:"invariables"},{word:"souvent",nature:"invariables"}
    ]
  },
  {
    id:"semaine16", title:"Le château de Versailles", icon:"👑",
    orthoLecon:"O16 · Le pluriel des adjectifs",
    description:"La magnificence du Roi-Soleil et ses jardins à la française",
    words:[
      {word:"le palais",nature:"noms"},{word:"le jardin",nature:"noms"},
      {word:"la fontaine",nature:"noms"},{word:"la galerie",nature:"noms"},
      {word:"le miroir",nature:"noms"},{word:"le courtisan",nature:"noms"},
      {word:"visiter",nature:"verbes"},{word:"admirer",nature:"verbes"},
      {word:"royal",nature:"adjectifs"},{word:"immense",nature:"adjectifs"},
      {word:"ici",nature:"invariables"},{word:"partout",nature:"invariables"},{word:"toujours",nature:"invariables"}
    ]
  },
  {
    id:"semaine17", title:"La dame à la licorne", icon:"🦄",
    orthoLecon:"O17 · Le féminin des adjectifs",
    description:"La mystérieuse tapisserie médiévale des cinq sens",
    words:[
      {word:"la tapisserie",nature:"noms"},{word:"la licorne",nature:"noms"},
      {word:"la dame",nature:"noms"},{word:"le sens",nature:"noms"},
      {word:"le toucher",nature:"noms"},{word:"l'ouïe",nature:"noms"},
      {word:"tisser",nature:"verbes"},{word:"représenter",nature:"verbes"},
      {word:"délicat",nature:"adjectifs"},{word:"précieux",nature:"adjectifs"},
      {word:"vers",nature:"invariables"},{word:"selon",nature:"invariables"},{word:"ensemble",nature:"invariables"}
    ]
  },
  {
    id:"semaine18", title:"La liberté guidant le peuple", icon:"🗽",
    orthoLecon:"O18 · Les lettres finales muettes",
    description:"Delacroix et la Révolution de juillet 1830",
    words:[
      {word:"la liberté",nature:"noms"},{word:"le peuple",nature:"noms"},
      {word:"le drapeau",nature:"noms"},{word:"le combat",nature:"noms"},
      {word:"la révolution",nature:"noms"},{word:"la victoire",nature:"noms"},
      {word:"guider",nature:"verbes"},{word:"porter",nature:"verbes"},
      {word:"debout",nature:"adjectifs"},{word:"tricolore",nature:"adjectifs"},
      {word:"vers",nature:"invariables"},{word:"ensemble",nature:"invariables"},{word:"toujours",nature:"invariables"}
    ]
  },
  {
    id:"semaine19", title:"La pyramide de Keops", icon:"🔺",
    orthoLecon:"O19 · Les mots en -ail, -eil, -euil, -ouil",
    description:"La grande pyramide, l'une des Sept Merveilles du monde",
    words:[
      {word:"la pyramide",nature:"noms"},{word:"le pharaon",nature:"noms"},
      {word:"le désert",nature:"noms"},{word:"le tombeau",nature:"noms"},
      {word:"le sarcophage",nature:"noms"},{word:"le travail",nature:"noms"},
      {word:"construire",nature:"verbes"},{word:"mesurer",nature:"verbes"},
      {word:"antique",nature:"adjectifs"},{word:"immense",nature:"adjectifs"},
      {word:"là-bas",nature:"invariables"},{word:"autrefois",nature:"invariables"},{word:"loin",nature:"invariables"}
    ]
  },
  {
    id:"semaine20", title:"Le dictateur", icon:"🎬",
    orthoLecon:"O20 · Écrire « se » ou « ce »",
    description:"Chaplin satirise Hitler dans ce film courageux de 1940",
    words:[
      {word:"le film",nature:"noms"},{word:"le discours",nature:"noms"},
      {word:"le pouvoir",nature:"noms"},{word:"la satire",nature:"noms"},
      {word:"le personnage",nature:"noms"},{word:"le cinéma",nature:"noms"},
      {word:"critiquer",nature:"verbes"},{word:"dénoncer",nature:"verbes"},
      {word:"comique",nature:"adjectifs"},{word:"politique",nature:"adjectifs"},
      {word:"enfin",nature:"invariables"},{word:"parfois",nature:"invariables"},{word:"souvent",nature:"invariables"}
    ]
  },
  {
    id:"semaine21", title:"La vague", icon:"🌊",
    orthoLecon:"O21 · Les accents : é, è, ê",
    description:"Hokusai et la force de la mer dans l'art japonais",
    words:[
      {word:"la mer",nature:"noms"},{word:"le bateau",nature:"noms"},
      {word:"la tempête",nature:"noms"},{word:"l'écume",nature:"noms"},
      {word:"le pêcheur",nature:"noms"},{word:"le sommet",nature:"noms"},
      {word:"rouler",nature:"verbes"},{word:"écraser",nature:"verbes"},
      {word:"puissant",nature:"adjectifs"},{word:"immense",nature:"adjectifs"},
      {word:"près",nature:"invariables"},{word:"très",nature:"invariables"},{word:"déjà",nature:"invariables"}
    ]
  },
  {
    id:"semaine22", title:"La légende arthurienne", icon:"🗡️",
    orthoLecon:"O22 · Les accents (2) : accentuer le « e »",
    description:"Le roi Arthur, Merlin et la quête du Graal",
    words:[
      {word:"la légende",nature:"noms"},{word:"l'épée",nature:"noms"},
      {word:"le chevalier",nature:"noms"},{word:"le royaume",nature:"noms"},
      {word:"le roi",nature:"noms"},{word:"la magie",nature:"noms"},
      {word:"régner",nature:"verbes"},{word:"combattre",nature:"verbes"},
      {word:"noble",nature:"adjectifs"},{word:"courageux",nature:"adjectifs"},
      {word:"peut-être",nature:"invariables"},{word:"jadis",nature:"invariables"},{word:"toujours",nature:"invariables"}
    ]
  },
  {
    id:"semaine23", title:"La Joconde", icon:"🖼️",
    orthoLecon:"O23 · Écrire -é ou -er",
    description:"Léonard de Vinci et le sourire mystérieux de Mona Lisa",
    words:[
      {word:"le portrait",nature:"noms"},{word:"le sourire",nature:"noms"},
      {word:"le musée",nature:"noms"},{word:"le peintre",nature:"noms"},
      {word:"le tableau",nature:"noms"},{word:"le regard",nature:"noms"},
      {word:"peindre",nature:"verbes"},{word:"observer",nature:"verbes"},
      {word:"mystérieux",nature:"adjectifs"},{word:"célèbre",nature:"adjectifs"},
      {word:"depuis",nature:"invariables"},{word:"toujours",nature:"invariables"},{word:"là",nature:"invariables"}
    ]
  },
  {
    id:"semaine24", title:"La victoire de Samothrace", icon:"🏺",
    orthoLecon:"O24 · L'accord du participe passé",
    description:"La déesse ailée de la victoire, sculpture grecque antique",
    words:[
      {word:"la sculpture",nature:"noms"},{word:"l'aile",nature:"noms"},
      {word:"le marbre",nature:"noms"},{word:"la déesse",nature:"noms"},
      {word:"le musée",nature:"noms"},{word:"la proue",nature:"noms"},
      {word:"sculpter",nature:"verbes"},{word:"trouver",nature:"verbes"},
      {word:"antique",nature:"adjectifs"},{word:"magnifique",nature:"adjectifs"},
      {word:"jadis",nature:"invariables"},{word:"autrefois",nature:"invariables"},{word:"là",nature:"invariables"}
    ]
  },
  {
    id:"semaine25", title:"Le bassin aux nymphéas", icon:"🌸",
    orthoLecon:"O25 · Les noms en -tion et en -ssion",
    description:"Monet et ses célèbres nénuphars à Giverny",
    words:[
      {word:"le bassin",nature:"noms"},{word:"le reflet",nature:"noms"},
      {word:"la lumière",nature:"noms"},{word:"la végétation",nature:"noms"},
      {word:"l'impression",nature:"noms"},{word:"la passion",nature:"noms"},
      {word:"peindre",nature:"verbes"},{word:"observer",nature:"verbes"},
      {word:"coloré",nature:"adjectifs"},{word:"délicat",nature:"adjectifs"},
      {word:"toujours",nature:"invariables"},{word:"près",nature:"invariables"},{word:"souvent",nature:"invariables"}
    ]
  },
  {
    id:"semaine26", title:"Les trois Grâces", icon:"💃",
    orthoLecon:"O26 · L'accord du verbe : cas particuliers",
    description:"Canova et la beauté en mouvement dans la sculpture néoclassique",
    words:[
      {word:"la grâce",nature:"noms"},{word:"la beauté",nature:"noms"},
      {word:"la sculpture",nature:"noms"},{word:"la mythologie",nature:"noms"},
      {word:"le corps",nature:"noms"},{word:"l'harmonie",nature:"noms"},
      {word:"représenter",nature:"verbes"},{word:"danser",nature:"verbes"},
      {word:"élégant",nature:"adjectifs"},{word:"harmonieux",nature:"adjectifs"},
      {word:"ensemble",nature:"invariables"},{word:"toujours",nature:"invariables"},{word:"partout",nature:"invariables"}
    ]
  }
];

const DICTEE_EXTRAS = {
  semaine1: [
    {word:"l'ascenseur",nature:"noms"},{word:"la poutre",nature:"noms"},{word:"le rivet",nature:"noms"},{word:"métallique",nature:"adjectifs"},{word:"immense",nature:"adjectifs"},{word:"admirer",nature:"verbes"},{word:"exactement",nature:"invariables"},{word:"bientôt",nature:"invariables"}
  ],
  semaine2: [
    {word:"l'arène",nature:"noms"},{word:"l'empereur",nature:"noms"},{word:"les gradins",nature:"noms"},{word:"antique",nature:"adjectifs"},{word:"immense",nature:"adjectifs"},{word:"applaudir",nature:"verbes"},{word:"autrefois",nature:"invariables"},{word:"devant",nature:"invariables"}
  ],
  semaine3: [
    {word:"la rosace",nature:"noms"},{word:"la statue",nature:"noms"},{word:"le sacre",nature:"noms"},{word:"lumineux",nature:"adjectifs"},{word:"gigantesque",nature:"adjectifs"},{word:"célébrer",nature:"verbes"},{word:"ensuite",nature:"invariables"},{word:"pourtant",nature:"invariables"}
  ],
  semaine4: [
    {word:"le pigment",nature:"noms"},{word:"la torche",nature:"noms"},{word:"l'animal",nature:"noms"},{word:"souterrain",nature:"adjectifs"},{word:"sombre",nature:"adjectifs"},{word:"dessiner",nature:"verbes"},{word:"longtemps",nature:"invariables"},{word:"parfois",nature:"invariables"}
  ],
  semaine5: [
    {word:"l'été",nature:"noms"},{word:"l'automne",nature:"noms"},{word:"la neige",nature:"noms"},{word:"printanier",nature:"adjectifs"},{word:"froid",nature:"adjectifs"},{word:"tomber",nature:"verbes"},{word:"pendant",nature:"invariables"},{word:"bientôt",nature:"invariables"}
  ],
  semaine6: [
    {word:"l'illusion",nature:"noms"},{word:"la représentation",nature:"noms"},{word:"le surréalisme",nature:"noms"},{word:"surréaliste",nature:"adjectifs"},{word:"étrange",nature:"adjectifs"},{word:"imaginer",nature:"verbes"},{word:"pourtant",nature:"invariables"},{word:"seulement",nature:"invariables"}
  ],
  semaine7: [
    {word:"Athéna",nature:"noms"},{word:"le casque",nature:"noms"},{word:"le monstre",nature:"noms"},{word:"rusé",nature:"adjectifs"},{word:"dangereux",nature:"adjectifs"},{word:"traverser",nature:"verbes"},{word:"ailleurs",nature:"invariables"},{word:"soudain",nature:"invariables"}
  ],
  semaine8: [
    {word:"l'écume",nature:"noms"},{word:"le vent",nature:"noms"},{word:"le rivage",nature:"noms"},{word:"marin",nature:"adjectifs"},{word:"radieux",nature:"adjectifs"},{word:"souffler",nature:"verbes"},{word:"apparaître",nature:"verbes"},{word:"doucement",nature:"invariables"}
  ],
  semaine9: [
    {word:"la muraille",nature:"noms"},{word:"l'archer",nature:"noms"},{word:"la herse",nature:"noms"},{word:"médiéval",nature:"adjectifs"},{word:"étroit",nature:"adjectifs"},{word:"surveiller",nature:"verbes"},{word:"autrefois",nature:"invariables"},{word:"dehors",nature:"invariables"}
  ],
  semaine10: [
    {word:"le jaune",nature:"noms"},{word:"le rouge",nature:"noms"},{word:"le bleu",nature:"noms"},{word:"abstrait",nature:"adjectifs"},{word:"géométrique",nature:"adjectifs"},{word:"choisir",nature:"verbes"},{word:"opposer",nature:"verbes"},{word:"bientôt",nature:"invariables"}
  ],
  semaine11: [
    {word:"l'orchestre",nature:"noms"},{word:"le piano",nature:"noms"},{word:"le compositeur",nature:"noms"},{word:"américain",nature:"adjectifs"},{word:"entraînant",nature:"adjectifs"},{word:"écouter",nature:"verbes"},{word:"improviser",nature:"verbes"},{word:"encore",nature:"invariables"}
  ],
  semaine12: [
    {word:"la Loire",nature:"noms"},{word:"le domaine",nature:"noms"},{word:"la terrasse",nature:"noms"},{word:"double",nature:"adjectifs"},{word:"spectaculaire",nature:"adjectifs"},{word:"héberger",nature:"verbes"},{word:"gravir",nature:"verbes"},{word:"aujourd'hui",nature:"invariables"}
  ],
  semaine13: [
    {word:"le parchemin",nature:"noms"},{word:"le duc",nature:"noms"},{word:"l'enluminure",nature:"noms"},{word:"médiéval",nature:"adjectifs"},{word:"minutieux",nature:"adjectifs"},{word:"feuilleter",nature:"verbes"},{word:"raconter",nature:"verbes"},{word:"déjà",nature:"invariables"}
  ],
  semaine14: [
    {word:"l'archéologue",nature:"noms"},{word:"la Bretagne",nature:"noms"},{word:"le tumulus",nature:"noms"},{word:"gigantesque",nature:"adjectifs"},{word:"millénaire",nature:"adjectifs"},{word:"transporter",nature:"verbes"},{word:"imaginer",nature:"verbes"},{word:"loin",nature:"invariables"}
  ],
  semaine15: [
    {word:"le théâtre",nature:"noms"},{word:"l'orchestre",nature:"noms"},{word:"le lac",nature:"noms"},{word:"blanc",nature:"adjectifs"},{word:"noir",nature:"adjectifs"},{word:"accompagner",nature:"verbes"},{word:"rêver",nature:"verbes"},{word:"soudain",nature:"invariables"}
  ],
  semaine16: [
    {word:"la chambre",nature:"noms"},{word:"l'orangerie",nature:"noms"},{word:"la dorure",nature:"noms"},{word:"brillant",nature:"adjectifs"},{word:"majestueux",nature:"adjectifs"},{word:"organiser",nature:"verbes"},{word:"se promener",nature:"verbes"},{word:"autrefois",nature:"invariables"}
  ],
  semaine17: [
    {word:"la tenture",nature:"noms"},{word:"la soie",nature:"noms"},{word:"le lion",nature:"noms"},{word:"coloré",nature:"adjectifs"},{word:"mystérieuse",nature:"adjectifs"},{word:"observer",nature:"verbes"},{word:"protéger",nature:"verbes"},{word:"doucement",nature:"invariables"}
  ],
  semaine18: [
    {word:"la barricade",nature:"noms"},{word:"l'artiste",nature:"noms"},{word:"la révolution",nature:"noms"},{word:"révolutionnaire",nature:"adjectifs"},{word:"courageux",nature:"adjectifs"},{word:"lutter",nature:"verbes"},{word:"brandir",nature:"verbes"},{word:"derrière",nature:"invariables"}
  ],
  semaine19: [
    {word:"le sable",nature:"noms"},{word:"le couloir",nature:"noms"},{word:"le soleil",nature:"noms"},{word:"royal",nature:"adjectifs"},{word:"secret",nature:"adjectifs"},{word:"empiler",nature:"verbes"},{word:"explorer",nature:"verbes"},{word:"dedans",nature:"invariables"}
  ],
  semaine20: [
    {word:"Chaplin",nature:"noms"},{word:"l'acteur",nature:"noms"},{word:"la moustache",nature:"noms"},{word:"muet",nature:"adjectifs"},{word:"célèbre",nature:"adjectifs"},{word:"imiter",nature:"verbes"},{word:"résister",nature:"verbes"},{word:"pourtant",nature:"invariables"}
  ],
  semaine21: [
    {word:"le Japon",nature:"noms"},{word:"la montagne",nature:"noms"},{word:"la barque",nature:"noms"},{word:"écumant",nature:"adjectifs"},{word:"déchaîné",nature:"adjectifs"},{word:"surgir",nature:"verbes"},{word:"menacer",nature:"verbes"},{word:"soudain",nature:"invariables"}
  ],
  semaine22: [
    {word:"le Graal",nature:"noms"},{word:"la forêt",nature:"noms"},{word:"la quête",nature:"noms"},{word:"magique",nature:"adjectifs"},{word:"fidèle",nature:"adjectifs"},{word:"chercher",nature:"verbes"},{word:"promettre",nature:"verbes"},{word:"jamais",nature:"invariables"}
  ],
  semaine23: [
    {word:"Léonard",nature:"noms"},{word:"le Louvre",nature:"noms"},{word:"l'énigme",nature:"noms"},{word:"italien",nature:"adjectifs"},{word:"célèbre",nature:"adjectifs"},{word:"réaliser",nature:"verbes"},{word:"exposer",nature:"verbes"},{word:"aujourd'hui",nature:"invariables"}
  ],
  semaine24: [
    {word:"l'île",nature:"noms"},{word:"l'escalier",nature:"noms"},{word:"la victoire",nature:"noms"},{word:"ailé",nature:"adjectifs"},{word:"brisé",nature:"adjectifs"},{word:"découvrir",nature:"verbes"},{word:"placer",nature:"verbes"},{word:"longtemps",nature:"invariables"}
  ],
  semaine25: [
    {word:"Giverny",nature:"noms"},{word:"le jardinier",nature:"noms"},{word:"le nénuphar",nature:"noms"},{word:"fragile",nature:"adjectifs"},{word:"lumineux",nature:"adjectifs"},{word:"cultiver",nature:"verbes"},{word:"refléter",nature:"verbes"},{word:"autour",nature:"invariables"}
  ],
  semaine26: [
    {word:"Canova",nature:"noms"},{word:"la statue",nature:"noms"},{word:"le marbre",nature:"noms"},{word:"harmonieux",nature:"adjectifs"},{word:"nu",nature:"adjectifs"},{word:"modeler",nature:"verbes"},{word:"célébrer",nature:"verbes"},{word:"ensemble",nature:"invariables"}
  ]
};

DICTEE_WEEKS.forEach(week => {
  week.words = [...week.words, ...(DICTEE_EXTRAS[week.id] || [])];
});

