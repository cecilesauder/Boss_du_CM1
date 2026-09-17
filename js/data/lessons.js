const FRENCH_LESSONS = {
  grammaire: [
    {id:'g1', title:'Le groupe nominal', rule:'Un groupe nominal contient un déterminant, un nom et parfois un adjectif.', prompt:'Dans « les grands jardins », quel est le nom ?', options:['les','grands','jardins'], answer:'jardins'},
    {id:'g2', title:'Le sujet et le verbe', rule:'Le sujet commande le verbe : on peut poser la question « qui est-ce qui ? ».', prompt:'Quel est le sujet dans « Les élèves observent le tableau » ?', options:['Les élèves','observent','le tableau'], answer:'Les élèves'},
    {id:'g3', title:'Les compléments du verbe', rule:'Le complément du verbe précise l’action et répond souvent à « quoi ? » ou « qui ? ».', prompt:'Quel est le complément dans « Léonard peint un portrait » ?', options:['Léonard','peint','un portrait'], answer:'un portrait'},
    {id:'g4', title:'Les compléments de phrase', rule:'Un complément de phrase indique le temps, le lieu ou la manière ; on peut souvent le déplacer.', prompt:'Quel complément indique le lieu ?', options:['Hier','Dans le musée','Rapidement'], answer:'Dans le musée'},
    {id:'g5', title:'La phrase complexe', rule:'Une phrase complexe contient plusieurs verbes conjugués.', prompt:'Combien de verbes conjugués dans « Je lis et je comprends » ?', options:['1','2','3'], answer:'2'}
  ],
  conjugaison: [
    {id:'c1', title:'Le présent des verbes en -er', rule:'Au présent : je -e, tu -es, il -e, nous -ons, vous -ez, ils -ent.', prompt:'Nous ___ une œuvre.', options:['observons','observez','observent'], answer:'observons'},
    {id:'c2', title:'Le présent des verbes fréquents', rule:'Être, avoir, aller et faire sont des verbes très fréquents à mémoriser.', prompt:'Vous ___ une belle affiche.', options:['avez','a','ont'], answer:'avez'},
    {id:'c3', title:'L’imparfait', rule:'À l’imparfait, les terminaisons sont -ais, -ais, -ait, -ions, -iez, -aient.', prompt:'Quand j’étais petit, je ___ souvent au musée.', options:['allais','irai','vais'], answer:'allais'},
    {id:'c4', title:'Le futur simple', rule:'Le futur se forme avec l’infinitif et les terminaisons -ai, -as, -a, -ons, -ez, -ont.', prompt:'Demain, nous ___ le texte.', options:['lirons','lisions','lisons'], answer:'lirons'},
    {id:'c5', title:'Le passé composé', rule:'Le passé composé se forme avec avoir ou être au présent et un participe passé.', prompt:'Les élèves ___ terminé leur exercice.', options:['ont','sont','avaient'], answer:'ont'}
  ],
  lexique: [
    {id:'l1', title:'Le dictionnaire', rule:'Dans le dictionnaire, les mots sont classés dans l’ordre alphabétique.', prompt:'Quel mot vient en premier ?', options:['artiste','arène','ardoise'], answer:'ardoise'},
    {id:'l2', title:'Les synonymes', rule:'Des synonymes ont un sens proche : joyeux et heureux.', prompt:'Quel est le synonyme de « célèbre » ?', options:['connu','caché','minuscule'], answer:'connu'},
    {id:'l3', title:'Les antonymes', rule:'Des antonymes ont des sens opposés : grand et petit.', prompt:'Quel est l’antonyme de « ancien » ?', options:['vieux','moderne','passé'], answer:'moderne'},
    {id:'l4', title:'Les familles de mots', rule:'Les mots d’une même famille partagent un radical et un sens commun.', prompt:'Quel mot appartient à la famille de « peinture » ?', options:['peindre','pierre','paysage'], answer:'peindre'},
    {id:'l5', title:'Le sens propre et le sens figuré', rule:'Le sens figuré utilise une image : « dévorer un livre » signifie le lire avec passion.', prompt:'Dans « une mer de nuages », mer est employé au sens…', options:['propre','figuré','contraire'], answer:'figuré'}
  ]
};
