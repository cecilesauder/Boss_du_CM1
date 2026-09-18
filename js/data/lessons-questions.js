const LESSON_EXTRA_QUESTIONS = {
 g1:[['Dans « une grande statue », quel est le déterminant ?',['une','grande','statue'],'une'],['Dans « les vieux palais », quel est l’adjectif ?',['les','vieux','palais'],'vieux'],['Dans « un tableau célèbre », quel est le nom ?',['un','tableau','célèbre'],'tableau']],
 g2:[['Dans « Les visiteurs admirent la toile », quel est le verbe ?',['visiteurs','admirent','toile'],'admirent'],['Dans « Le peintre observe », qui est le sujet ?',['Le peintre','observe','aucun'],'Le peintre'],['Dans « Les statues brillent », quel est le sujet ?',['Les','statues','brillent'],'statues']],
 g3:[['Dans « Monet peint des nénuphars », quel est le complément ?',['Monet','peint','des nénuphars'],'des nénuphars'],['Dans « Le guide raconte une histoire », que raconte-t-il ?',['Le guide','raconte','une histoire'],'une histoire'],['Dans « Les élèves regardent le tableau », quel groupe complète le verbe ?',['Les élèves','regardent','le tableau'],'le tableau']],
 g4:[['Dans « Demain, nous visiterons le musée », quel complément indique le temps ?',['Demain','nous','le musée'],'Demain'],['Dans « Les élèves travaillent dans la classe », quel complément indique le lieu ?',['Les élèves','travaillent','dans la classe'],'dans la classe'],['Dans « Elle avance rapidement », quel complément indique la manière ?',['Elle','avance','rapidement'],'rapidement']],
 g5:[['« Quand il pleut, nous lisons » contient combien de verbes conjugués ?',['1','2','3'],'2'],['Dans « Je regarde et je dessine », combien y a-t-il de propositions ?',['1','2','3'],'2'],['Quelle phrase est complexe ?',['Le tableau brille.','Le tableau brille et les visiteurs observent.','Silence !'],'Le tableau brille et les visiteurs observent.']],
 c1:[['Je ___ une statue.',['observe','observes','observent'],'observe'],['Vous ___ les couleurs.',['regardez','regardons','regardent'],'regardez'],['Ils ___ le musée.',['visitent','visite','visitez'],'visitent']],
 c2:[['Je ___ une photo.',['fais','fait','font'],'fais'],['Nous ___ devant le tableau.',['sommes','êtes','sont'],'sommes'],['Ils ___ un guide.',['ont','a','avez'],'ont']],
 c3:[['Hier, nous ___ au musée.',['allions','allons','irons'],'allions'],['Quand elle était petite, elle ___ beaucoup.',['lisait','lira','lit'],'lisait'],['Les visiteurs ___ calmement.',['attendaient','attendent','attendront'],'attendaient']],
 c4:[['Demain, tu ___ la cathédrale.',['visiteras','visitais','visites'],'visiteras'],['Nous ___ les œuvres.',['admirerons','admirions','admirons'],'admirerons'],['Ils ___ un compte rendu.',['écriront','écrivaient','écrivent'],'écriront']],
 c5:[['La classe ___ commencé la lecture.',['a','est','ont'],'a'],['Les élèves ___ entrés dans la salle.',['sont','ont','avez'],'sont'],['Nous ___ observé les détails.',['avons','sommes','ont'],'avons']],
 l1:[['Quel mot vient en premier ?',['aquarium','artiste','atelier'],'aquarium'],['Quel mot vient en dernier ?',['barque','ballet','bateau'],'bateau'],['Dans quel ordre sont ces mots ?',['art, artiste, artisan','artisan, art, artiste','artiste, artisan, art'],'art, artiste, artisan']],
 l2:[['Quel est le synonyme de « immense » ?',['énorme','minuscule','étroit'],'énorme'],['Quel est le synonyme de « observer » ?',['regarder','cacher','oublier'],'regarder'],['Quel mot veut dire presque comme « joyeux » ?',['heureux','triste','fâché'],'heureux']],
 l3:[['Quel est l’antonyme de « sombre » ?',['lumineux','obscur','noir'],'lumineux'],['Quel est l’opposé de « ancien » ?',['moderne','vieux','passé'],'moderne'],['Quel est l’antonyme de « monter » ?',['descendre','grimper','lever'],'descendre']],
 l4:[['Quel mot appartient à la famille de « mer » ?',['marin','mère','marbre'],'marin'],['Quel mot appartient à la famille de « terre » ?',['terrien','terrassement','terreur'],'terrien'],['Quel mot appartient à la famille de « chant » ?',['chanteur','château','chance'],'chanteur']],
 l5:[['Dans « dévorer un livre », le mot dévorer est au sens…',['propre','figuré','contraire'],'figuré'],['Dans « une montagne de travail », le sens est…',['propre','figuré','inconnu'],'figuré'],['Dans « une feuille tombe de l’arbre », le sens de feuille est…',['propre','figuré','opposé'],'propre']]
};
for (const [id, rows] of Object.entries(LESSON_EXTRA_QUESTIONS)) {
  const lesson = Object.values(FRENCH_LESSONS).flat().find(item => item.id === id);
  if (lesson) lesson.questions = [{prompt:lesson.prompt, options:lesson.options, answer:lesson.answer}, ...rows.map(([prompt, options, answer]) => ({prompt, options, answer}))];
}


const LESSON_CONTEXTS = ['Dans une œuvre du musée, ', 'Pendant la visite, ', 'Dans ton cahier, ', 'En racontant cette histoire, ', 'Pour décrire le monument, ', 'Dans une phrase sur l’artiste, '];
for (const lesson of Object.values(FRENCH_LESSONS).flat()) {
  const base = lesson.questions || [];
  let index = 0;
  while (lesson.questions.length < 10) {
    const source = base[index % base.length];
    lesson.questions.push({prompt:`${LESSON_CONTEXTS[index % LESSON_CONTEXTS.length]}${source.prompt.charAt(0).toLowerCase()}${source.prompt.slice(1)}`, options:[...source.options], answer:source.answer});
    index++;
  }
}
