const POESIES = [{
  id:'poesie1', title:'À quoi ça sert, un poème ?', author:'Henriette Major', dueDate:'Jeudi 24 septembre', audio:'assets/audio/Poésie1.mp3',
  lines:[
    'À quoi ça sert, un poème ?', 'A quoi ça sert, un poème ?', 'Ça sert à jouer des mots', 'comme on joue de la guitare,', 'de la flûte ou du piano.', 'Ça sert à faire savoir', 'qu’on est gai ou qu’on est triste,', 'ou bien d’humeur fantaisiste.',
    'Ça remplace quelques larmes,', 'ça fait rire ou ça désarme.', 'Ça sert à parler de soi,', 'ou bien de n’importe quoi.', 'C’est un voyage intérieur,', 'un moyen d’ouvrir son cœur.',
    'À quoi ça sert, un poème ?', 'Au fond, ça ne sert à rien,', 'mais ça rend la vie plus belle,', 'comme un tour de magicien,', 'un sourire, un arc-en-ciel.',
    'À quoi ça sert, un poème ?', 'Ça sert à dire « Je t’aime ».', 'Henriette Major'
  ],
  // Début de chaque vers en secondes, puis début du nom de l’autrice.
  // Les repères donnés après écoute sont conservés explicitement pour faciliter les futurs ajustements.
  timings:[2.5,4.5,6.5,8.5,10.5,12.5,14.5,17.5,19.8,22.2,24.5,26.7,29.0,31.3,33.5,35.2,37.0,39.6,42.5,44.6,47.8],
  stanzas:[
    ['A quoi ça sert, un poème ?','Ça sert à jouer des mots','comme on joue de la guitare,','de la flûte ou du piano.','Ça sert à faire savoir','qu’on est gai ou qu’on est triste,','ou bien d’humeur fantaisiste.'],
    ['Ça remplace quelques larmes,','ça fait rire ou ça désarme.','Ça sert à parler de soi,','ou bien de n’importe quoi.','C’est un voyage intérieur,','un moyen d’ouvrir son cœur.'],
    ['À quoi ça sert, un poème ?','Au fond, ça ne sert à rien,','mais ça rend la vie plus belle,','comme un tour de magicien,','un sourire, un arc-en-ciel.'],
    ['À quoi ça sert, un poème ?','Ça sert à dire « Je t’aime ».']
  ]
}];
