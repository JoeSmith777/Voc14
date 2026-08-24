// ===== POOL: DRAG & DROP AUFGABEN Version 2.2 =====
// ===== DRAG & DROP bis dd03_17 =====
// ===== Lückenfüller bis lu03_11 =====

const DRAGDROP_POOL = [
  {
    id: 'dd01_01',
    typ: 'dragdrop',
    aufgabe: 'Sie hat gekämpft',
    richtigeAntwort: 'pugnavit',
    optionen: [
      'pugnaverit',
      'pugnavit',
      'pugnabat'
    ]
  },
  {
    id: 'dd01_02',
    typ: 'dragdrop',
    aufgabe: 'Te floralibus interesse oportet',
    richtigeAntwort: 'Du musst bei den Floralien anwesend sein.',
    optionen: [
      'Die Anwesenheit bei den Blumenfestspielen ist notwendig.',
      'Du musst bei den Floralien anwesend sein.',
      'Bei den Floralien bietet sich dir eine gute Gelegenheit.',
      'Die Floralien erfordern unsere Anwesenheit.'
    ]
  },
  {
    id: 'dd01_03',
    typ: 'dragdrop',
    aufgabe: 'Er hat gesiegt',
    richtigeAntwort: 'vicit',
    optionen: ['vicit', 'vincit', 'vincet']
  },
  {
    id: 'dd01_04',
    typ: 'dragdrop',
    aufgabe: 'Wir hatten geliebt',
    richtigeAntwort: 'amaveramus',
    optionen: [
      'amaveramus',
      'amavimus',
      'amabamus',
      'amaveritis'
    ]
  },
  {
    id: 'dd01_05',
    typ: 'dragdrop',
    aufgabe: 'Hilf mir, bitte',
    richtigeAntwort: 'iuva me, quaeso.',
    optionen: [
      'Auxilium me da, quaeso.',
      'iuva me, quaeso.',
      'Adiuva te, quaeso.',
      'iuva mihi, quaeso.'
    ]
  },
  {
    id: 'dd01_06',
    typ: 'dragdrop',
    aufgabe: 'Chrysippo calamitas accidit: Tectum ruit',
    richtigeAntwort: 'Chrysippos widerfuhr ein Unglück: Das Dach stürzte ein.',
    optionen: [
      'Chrysippos widerfuhr ein Unglück: Das Dach stürzte ein.',
      'Chrysippos hat einen Schaden verursacht: Das Dach stürzte ein.',
      'Chrysippos ist ein Unglückrabe: Das Dach stürzte auf ihn ein.',
      'Chrysippos hat sich totgelacht: Ein Esel aß Feigen',
    ]
  },
  {
    id: 'dd01_07',
    typ: 'dragdrop',
    aufgabe: 'Er hatte gesagt',
    richtigeAntwort: 'dixerat',
    optionen: ['dixerat', 'dicit', 'dixit', 'diceret']
  },
  {
    id: 'dd01_08',
    typ: 'dragdrop',
    aufgabe: 'Cum amicis ambulate',
    richtigeAntwort: 'Geht mit den Freunden spazieren',
    optionen: [
      'Geht mit den Freunden spazieren',
      'Geht mit den Freunden nach Hause',
      'Mit den Freunden umherspazieren',
      'Mit den Freunden zu gehen ist notwendig'
    ]
  },
  {
    id: 'dd01_09',
    typ: 'dragdrop',
    aufgabe: 'In villa manere debemus',
    richtigeAntwort: 'Wir müssen im Haus bleiben.',
    optionen: [
      'Wir müssen im Haus bleiben.',
      'Wir bleiben im Haus.',
      'Es ist notwendig, im Haus zu bleiben.',
      'Das Haus erfordert unseren Aufenthalt.'
    ]
  },
  {
    id: 'dd01_10',
    typ: 'dragdrop',
    aufgabe: 'Er sagte, dass du fleißig bist.',
    richtigeAntwort: 'Dicebat te diligentem esse.',
    optionen: [
      'Dicit te diligentem fuisse.',
      'Dicebat te diligens esse.',
      'Dicebat te diligentem fuisse.',
      'Dicebat te diligentem eris.'
    ]
  },
  {
    id: 'dd01_11',
    typ: 'dragdrop',
    aufgabe: 'Wir glauben, dass er die Wahrheit sagt.',
    richtigeAntwort: 'Credimus eum veritatem dicere.',
    optionen: [
      'Credimus eum veritatem dicere.',
      'Credimus eum veritatem dixisse.',
      'Credimus eum veritatem dicet.',
      'Credimus eum veritatem dicere non potest.'
    ]
  },
  {
    id: 'dd01_12',
    typ: 'dragdrop',
    aufgabe: 'Ich sehe, dass die Kinder spielen.',
    richtigeAntwort: 'Video pueros ludere.',
    optionen: [
      'Video pueros ludere.',
      'Video pueri ludere.',
      'Video pueros lusisse.',
      'Video pueros ludent.'
    ]
  },
  {
    id: 'dd01_13',
    typ: 'dragdrop',
    aufgabe: 'Er behauptet, dass sie den Brief geschrieben hat.',
    richtigeAntwort: 'affirmat eam epistulam scripsisse.',
    optionen: [
      'affirmat eam epistulam scripsisse.',
      'affirmat eam epistulam scribere.',
      'affirmat eam epistulam scribet.',
      'affirmat eam epistulam scribere debet.'
    ]
  },
  {
    id: 'dd01_14',
    typ: 'dragdrop',
    aufgabe: 'Wir hörten, dass du gesungen hast.',
    richtigeAntwort: 'Audivimus te cantavisse.',
    optionen: [
      'Audibamus te cantavit.',
      'Audivimus te cantavisse.',
      'Audibamus te cantabas.',
      'Audivimus te cantare potes.'
    ]
  },
  {
    id: 'dd01_15',
    typ: 'dragdrop',
    aufgabe: 'Er denkt, dass wir glücklich sind.',
    richtigeAntwort: 'Putat nos felices esse.',
    optionen: [
      'Putat nos felices esse.',
      'Putat nos felices fuisse.',
      'Putat nos felices erimus.',
      'Putat nos felices simus.'
    ]
  },
  {
    id: 'dd01_16',
    typ: 'dragdrop',
    aufgabe: 'Ich habe dir viele Briefe geschrieben.',
    richtigeAntwort: 'Tibi multas epistulas misi.',
    optionen: [
      'Tibi multas epistulas misi.',
      'Multas epistulas misi a te.',
      'Tibi multas epistulas mitto.',
      'Tecum multas epistulas miseram.'
    ]
  },
  {
    id: 'dd01_17',
    typ: 'dragdrop',
    aufgabe: 'Ich weiß, dass ihr fleißig gearbeitet habt.',
    richtigeAntwort: 'Scio vos diligenter laboravisse.',
    optionen: [
      'Scio vos diligenter laboravisse.',
      'Scio vos diligenter laborare.',
      'Scio vos diligenter laborabitis.',
      'Scio vos diligenter laborare debetis.'
    ]
  },
  {
    id: 'dd01_18',
    typ: 'dragdrop',
    aufgabe: 'Er hofft, dass wir siegen. (sperare = hoffen)',
    richtigeAntwort: 'Sperat nos vincere.',
    optionen: [
      'Sperat nos vincere esse.',
      'Sperat nos vicisse.',
      'Sperat nos vincimus.',
      'Sperat nos vincere.'
    ]
  },
  {
    id: 'dd01_19',
    typ: 'dragdrop',
    aufgabe: 'Sie sehen, dass der Lehrer kommt.',
    richtigeAntwort: 'Vident magistrum venire.',
    optionen: [
      'vident magistrum venire.',
      'vident magistrum venisse.',
      'vident magistrum veniet.',
      'vident magistrum venit.'
    ]
  },
  {
    id: 'dd01_20',
    typ: 'dragdrop',
    aufgabe: 'Er wurde zum König ernannt. <br>(creare = erschaffen, gebären; creatus = PPP = hier im Kontext: ernannt)',
    richtigeAntwort: 'Rex creatus est.',
    optionen: [
      'rex creatus est.',
      'rex creavit est.',
      'rex creat.',
      'rex creavit.'
    ]
  },
  {
    id: 'dd02_01',
    typ: 'dragdrop',
    aufgabe: 'Sie wurde zur Königin gekrönt. <br>(facere = machen, tun; facta = PPP = gemacht)',
    richtigeAntwort: 'Regina facta est.',
    optionen: [
      'regina facta est.',
      'regina facit est.',
      'regina fiet.',
      'regina faciet.'
    ]
  },
  {
    id: 'dd02_02',
    typ: 'dragdrop',
    aufgabe: 'Tibi non credo. Ea verba incredibilis sunt',
    richtigeAntwort: 'Ich glaube dir nicht. Diese Worte sind unglaublich.',
    optionen: [
      'Ich glaube dir nicht. Diese Worte sind unglaublich.',
      'Ich misstraue Dir. Deine Worte sind unglaublich.',
      'Ich glaube dir nicht. Deine Worte sind unglaublich.',
      'Ich glaube ihr nicht. Jene Worte sind unglaublich.',
    ]
  },
  {
    id: 'dd02_03',
    typ: 'dragdrop',
    aufgabe: 'Fortis dicta est. <br>(dicere = sagen, bezeichnen; dicta = PPP = bezeichnet)',
    richtigeAntwort: 'Sie wurde als mutig bezeichnet.',
    optionen: [
      'Sie wurde als mutig bezeichnet.',
      'Er wurde mutig bezeichnet.',
      'Es wurde als mutig bezeichnet.',
      'Sie wurden als mutig bezeichnet.'
    ]
  },
  {
    id: 'dd02_04',
    typ: 'dragdrop',
    aufgabe: 'Er wurde zum Konsul ernannt. <br>(creare = erschaffen, gebären; creatus = PPP = hier im Kontext: ernannt)',
    richtigeAntwort: 'Consul creatus est.',
    optionen: [
      'consul creatus est.',
      'consul creavit est.',
      'consul creabitur.',
      'consul creavit.'
    ]
  },
  {
    id: 'dd02_05',
    typ: 'dragdrop',
    aufgabe: 'Liberi liberos libros legunt.',
    richtigeAntwort: 'Die Kinder lesen freie Bücher.',
    optionen: [
      'Die freien Kinder lesen Bücher.',
      'Die Kinder lesen freie Bücher.',
      'Die Kinder der Freigelassenen lesen Bücher.',
      'Die Kinder lesen Bücher der Kinder.',
    ]
  },
  {
    id: 'dd02_06',
    typ: 'dragdrop',
    aufgabe: 'liberi',
    richtigeAntwort: 'die Kinder, die Freien, des Buches',
    optionen: [
      'der Kinder, frei (Adjektiv), die Bücher',
      'die Kinder, die Freien, des Buches',
      'des Kindes, frei (Adjektiv), des Buches',
    ]
  },
  {
    id: 'dd02_07',
    typ: 'dragdrop',
    aufgabe: 'Ego moderator dico: plures lacrimas!',
    richtigeAntwort: 'Ich als Regisseur sage: mehr Tränen!',
    optionen: [
      'Ich als Regisseur sage: mehr Tränen!',
      'Der Regisseur sagt mir: Tränen sind mehr!',
      'Ich als Regisseur sage: zu viele Gedichte!',
    ]
  },
  {
    id: 'dd02_08',
    typ: 'dragdrop',
    aufgabe: 'Servi Chrysippum secum trahunt',
    richtigeAntwort: 'Die Sklaven schleppen Chrysippus mit sich.',
    optionen: [
      'Die Sklaven schleppen Chrysippus mit sich.',
      'Die Sklaven wurden durch Chrysippus mitgezogen.',
      'Die Sklaven schleppen Chrysipp ihnen nach.',
      'Der Sklave Chrysippus wird von ihnen mitgezogen.',
    ]
  },
  {
    id: 'dd02_09',
    typ: 'dragdrop',
    aufgabe: 'Avi nostri maiores nostri sunt',
    richtigeAntwort: 'Unsere Großväter sind unsere Vorfahren.',
    optionen: [
      'Unsere Großväter sind größer als wir.',
      'Unsere Großväter waren unsere Vorfahren.',
      'Unsere Großväter sind unsere Vorfahren.',
      'Die Vorfahren des Großvaters sind (auch) unsere (Vorfahren).'
    ]
  },
  {
    id: 'dd02_10',
    typ: 'dragdrop',
    aufgabe: 'Er befiehlt den Soldaten, die Stadt zu verteidigen.',
    richtigeAntwort: 'iubet milites civitatem defendere',
    optionen: [
      'iubet milites civitatem defendere',
      'iubet milites civitatem defendunt',
      'iubet milites civitatem defendi',
      'iubet milites civitatem defensum'
    ]
  },
  {
    id: 'dd02_11',
    typ: 'dragdrop',
    aufgabe: 'Es ist notwendig, die Freiheit zu bewahren.',
    richtigeAntwort: 'necessest libertatem servare',
    optionen: [
      'necessest libertatem servare',
      'necessest libertati servare',
      'necessest libertatem servari',
      'necessest libertas servat'
    ]
  },
  {
    id: 'dd02_12',
    typ: 'dragdrop',
    aufgabe: 'Wir sehen die Männer fliehen.',
    richtigeAntwort: 'videmus viros fugere',
    optionen: [
      'videmus viros fugere',
      'videmus viros fugient',
      'videmus viros fugit'
    ]
  },
  {
    id: 'dd02_13',
    typ: 'dragdrop',
    aufgabe: 'Er glaubt, dass die Bürger tapfer sind.',
    richtigeAntwort: 'credit civis duros esse',
    optionen: [
      'credit civis duros esse',
      'credit civis duri sunt',
      'credit civis duros fuisse',
      'credit civis duri essent'
    ]
  },
  {
    id: 'dd02_14',
    typ: 'dragdrop',
    aufgabe: 'Es ist bekannt, dass der Konsul die Rede hält.',
    richtigeAntwort: 'constat consulem orationem agere',
    optionen: [
      'constat consulem orationem agere',
      'constat consul orationem agit',
      'constat consulem orationem agunt',
      'constat consulem orationem actum'
    ]
  },
  {
    id: 'dd02_15',
    typ: 'dragdrop',
    aufgabe: 'Pomponia verbis non placidis, sed iratis certat',
    richtigeAntwort: 'Pomponia streitet mit nicht friedlichen, sondern zornigen Worten.',
    optionen: [
      'Pomponia kämpfte mit nicht friedlichen, sondern zornigen Worten.',
      'Pomponia streitet nicht wegen der Worte, sondern weil sie zornig ist.',
      'Pomponia streitet mit Worten, die Dir nicht gefallen sondern Dich zürnen.',
      'Pomponia streitet mit nicht friedlichen, sondern zornigen Worten.'
    ]
  },
  {
    id: 'dd02_16',
    typ: 'dragdrop',
    aufgabe: 'Er bittet uns, den Brief zu schreiben.',
    richtigeAntwort: 'rogat nos epistulam scribere',
    optionen: [
      'rogat nos epistulam scribere',
      'rogat nos epistulam scribimus',
      'rogat nos epistulam scribereunt',
      'rogat nos epistulam scriptum'
    ]
  },
  {
    id: 'dd02_17',
    typ: 'dragdrop',
    aufgabe: 'Die Stadt bleibt ruhig.',
    richtigeAntwort: 'civitas placida manet',
    optionen: [
      'civitas placida manet',
      'civitas placida manere',
      'civitas placida mansit',
      'civitas placida manebit'
    ]
  },
  {
    id: 'dd02_18',
    typ: 'dragdrop',
    aufgabe: 'Femina bona et egregia magna fecit.',
    richtigeAntwort: 'Die gute und ausgezeichnete Frau hat große Dinge getan.',
    optionen: [
      'Die Frau macht gute und herausgehobene Dinge.',
      'Die gute und ausgezeichnete Frau hat große Dinge getan.',
      'Die gute und ausgezeichnete Frau vollbringt große Taten.',
      'Die gute und fromme Frau hat großes getan.'
    ]
  },
  {
    id: 'dd02_19',
    typ: 'dragdrop',
    aufgabe: 'Omnia paravi, nihil restat',
    richtigeAntwort: 'Ich habe alles vorbereitet, nichts bleibt übrig.',
    optionen: [
      'Ich habe alles vorbereitet, nichts bleibt übrig.',
      'Ich habe alle vorbereitet, nichts bleibt übrig.',
      'Ich bereite alles vor, nichts bleibt übrig.',
      'Ich habe alles bereitgestellt, so dass nicht übrig ist.'
    ]
  },
  {
    id: 'dd02_20',
    typ: 'dragdrop',
    aufgabe: 'Er sieht, dass die Frau den Brief schreibt.',
    richtigeAntwort: 'videt mulierem epistulam scribere',
    optionen: [
      'videt mulierem epistulam scribere',
      'videt mulierem epistulam scripsisse',
      'videt mulierem epistulam scripturam'
    ]
  },
  {
    id: 'dd03_01',
    typ: 'dragdrop',
    aufgabe: 'Es ist bekannt, dass der Ehemann Frieden stiftet.',
    richtigeAntwort: 'constat maritum pacem facere',
    optionen: [
      'constat maritum pacem fecit',
      'constat maritum pacem factum esse',
      'constat maritum pacem facere',
      'constat maritus pacem facit'
    ]
  },
  {
    id: 'dd03_02',
    typ: 'dragdrop',
    aufgabe: 'Wir wissen, dass die Bürger den Konsul gut kennen.',
    richtigeAntwort: 'scimus cives consulem bene cognoscere',
    optionen: [
      'scimus cives consulem bene cognovisse',
      'scimus cives consulem bonum cognoscunt',
      'scimus cives consulem bene cognoscere',
      'scimus cives consulem bonum cognoscere'
    ]
  },
  {
    id: 'dd03_03',
    typ: 'dragdrop',
    aufgabe: 'Er behauptet, dass die wenigen Männer tapfer kämpfen.',
    richtigeAntwort: 'dicit paucōs viros fortiter certāre',
    optionen: [
      'dicit paucōs viros fortiter certāre',
      'dicit paucī viri fortiter certant',
      'dicit paucōs viros fortiter certavisse'
    ]
  },
  {
    id: 'dd03_04',
    typ: 'dragdrop',
    aufgabe: 'Die Frau bleibt traurig.',
    richtigeAntwort: 'mulier trīstis manet',
    optionen: [
      'mulier trīstis manet',
      'mulier trīstis monere',
      'mulier trīstem manet'
    ]
  },
  {
    id: 'dd03_05',
    typ: 'dragdrop',
    aufgabe: 'Der Ehemann will eine berühmte Frau einladen.',
    richtigeAntwort: 'marītus mulierem celebrem invītāre vult',
    optionen: [
      'marītus mulierem celebrem invītāre vult',
      'marītus mulier celebrem invītāre vult',
      'marītus mulierem celebrem invītāvit',
      'marītus mulierem celebrem invītābit'
    ]
  },
  {
    id: 'dd03_06',
    typ: 'dragdrop',
    aufgabe: 'Er will nicht, dass die Gäste streiten.',
    richtigeAntwort: 'nōn vult hospites certāre',
    optionen: [
      'nōn vult hospites certāre',
      'nōn vult hospites certant',
      'nōn vult hospites certavisse',
      'nōn vult hospites certaturōs'
    ]
  },
  {
    id: 'dd03_07',
    typ: 'dragdrop',
    aufgabe: 'Die Ehefrau schmückt das Haus mit Blumen.',
    richtigeAntwort: 'coniūnx domum floribus ōrnat',
    optionen: [
      'coniūnx domum floribus ōrnat',
      'coniūnx domi floribus ōrnāvit',
      'coniūnx domo floribus ōrnat',
      'coniūnx domis floribus ōrnābat'
    ]
  },
  {
    id: 'dd03_08',
    typ: 'dragdrop',
    aufgabe: 'Die Frau, die den Frieden stiftet, ist berühmt.',
    richtigeAntwort: 'mulier, quae pacem facit, celeber est',
    optionen: [
      'mulier, quae pacem facit, celeber est',
      'mulier, qui pacem facit, celeber est',
      'mulier, quam pacem facit, celeber est',
      'mulier, quae pacem facere, celeber est'
    ]
  },
  {
    id: 'dd03_09',
    typ: 'dragdrop',
    aufgabe: 'Der Ehemann, dessen Frau traurig ist, bleibt ruhig.',
    richtigeAntwort: 'marītus, cuius coniūnx trīstis est, placidus manet',
    optionen: [
      'marītus, cuius coniūnx trīstis est, placidus manet',
      'marītus, cui coniūnx trīstis est, placidus manet',
      'marītus, cuius coniūnx trīstis est, placida manet',
      'marītus, cui coniūnx trīstis est, placida manet'
    ]
  },
  {
    id: 'dd03_10',
    typ: 'dragdrop',
    aufgabe: 'Die Stadt, in der wir leben, ist friedlich.',
    richtigeAntwort: 'civitas, in quā habitāmus, placida est',
    optionen: [
      'civitas, in quā habitāmus, placida est',
      'civitas, in qua habitāmus, placidus est',
      'civitas, in quō habitāmus, placida est',
      'civitas, in quā habitāmus, placidum est'
    ]
  },
  {
    id: 'dd03_11',
    typ: 'dragdrop',
    aufgabe: 'Er schmückt sein Haus mit Blumen.',
    richtigeAntwort: 'suam domum floribus ōrnat',
    optionen: [
      'suam domum floribus ōrnat',
      'suum domum floribus ōrnat',
      'sua domum floribus ōrnat',
      'suō domum floribus ōrnat'
    ]
  },
  {
    id: 'dd03_12',
    typ: 'dragdrop',
    aufgabe: 'Die Frau schmückt ihren Ehemann mit einem Kranz.',
    richtigeAntwort: 'mulier marītum suum coronā ōrnat',
    optionen: [
      'mulier marītum suum coronā ōrnat',
      'mulier marītus suus coronā ōrnat',
      'mulier marītum suum coronā ōrnāre',
      'mulier marītum suum coronā ōrnāvit'
    ]
  },
  {
    id: 'dd03_13',
    typ: 'dragdrop',
    aufgabe: 'Unser Freund will die berühmte Stadt besuchen.',
    richtigeAntwort: 'amīcus noster urbem celebrem visitāre vult',
    optionen: [
      'amīcus noster urbem celebrem visitāre vult',
      'amīcus nostrum urbem celebrem visitāre vult',
      'amīcus noster urbem celebrem visitāre volt',
    ]
  },
  {
    id: 'dd03_14',
    typ: 'dragdrop',
    aufgabe: 'Sie schmückt sich selbst mit einem schönen Kleid.',
    richtigeAntwort: 'se ipsa pulchrā veste ōrnat',
    optionen: [
      'se ipsa pulchrā veste ōrnat',
      'se ipsum pulchrā veste ōrnat',
      'sē pulchrā veste ōrnat',
      'se ipsam pulchrā veste ōrnāre'
    ]
  },
  {
    id: 'dd03_15',
    typ: 'dragdrop',
    aufgabe: 'Er will nicht kämpfen.',
    richtigeAntwort: 'nōn vult certāre',
    optionen: [
      'nōn vult certāre',
      'nōn volt certāre',
      'nōn vult certāvit',
      'nōn volt certāvit'
    ]
  },
  {
    id: 'dd03_16',
    typ: 'dragdrop',
    aufgabe: 'Die wenigen Männer, die tapfer sind, bleiben standhaft.',
    richtigeAntwort: 'paucī virī, quī fortēs sunt, constantēs manent',
    optionen: [
      'paucī virī, quī fortēs sunt, constantēs manent',
      'paucī virī, quae fortēs sunt, constantēs manent',
      'paucī virī, quōs fortēs sunt, constantēs manent',
      'paucī virī, quī fortēs sunt, constantēs manet'
    ]
  },
  {
    id: 'dd03_17',
    typ: 'dragdrop',
    aufgabe: 'Dein Haus ist schöner als meins.',
    richtigeAntwort: 'tua domus meā pulchrior est',
    optionen: [
      'tua domus meā pulchrior est',
      'tuam domum meā pulchrior est',
      'tua domus mea pulchrior est',
      'tuam domum mea pulchrior est'
    ]
  }
];

// ===== POOL: LÜCKENÜBUNG AUFGABEN =====
const LUECKENUBUNG_POOL = [
  {
    id: 'lu01_01',
    typ: 'lueckenubung',
    satz: 'Servus _____ dominum.',
    verb: 'gehorsam sein (Präsens, 3. Person Singular)',
    loesungen: ['obedit'],
    erklaerung: 'Der Sklave gehorcht dem Herrn.'
  },
  {
    id: 'lu01_02',
    typ: 'lueckenubung',
    satz: 'Puer _____ in horto.',
    verb: 'spielen (Imperfekt, 3. Person Singular)',
    loesungen: ['ludebat'],
    erklaerung: 'Der Junge spielte im Garten.'
  },
  {
    id: 'lu01_03',
    typ: 'lueckenubung',
    satz: 'Ego _____ librum.',
    verb: 'legere (Präsens, 1. Person Singular)',
    loesungen: ['lego'],
    erklaerung: 'Ich lese ein Buch.'
  },
  {
    id: 'lu01_04',
    typ: 'lueckenubung',
    satz: 'Tu _____ epistolam.',
    verb: 'scribere (Imperfekt, 2. Person Singular)',
    loesungen: ['scribebas'],
    erklaerung: 'Du schriebst einen Brief.'
  },
  {
    id: 'lu01_05',
    typ: 'lueckenubung',
    satz: 'Pueri _____ in villam.',
    verb: 'venire (Perfekt, 3. Person Plural)',
    loesungen: ['venerunt'],
    erklaerung: 'Die Jungen kamen ins Haus.'
  },
  {
    id: 'lu01_06',
    typ: 'lueckenubung',
    satz: 'Nos _____ librum.',
    verb: 'legere (Plusquamperfekt, 1. Person Plural)',
    loesungen: ['legeramus'],
    erklaerung: 'Wir hatten ein Buch gelesen.'
  },
  {
    id: 'lu01_07',
    typ: 'lueckenubung',
    satz: 'Vos _____ amicos.',
    verb: 'videre (Präsens, 2. Person Plural)',
    loesungen: ['videtis'],
    erklaerung: 'Ihr seht die Freunde.'
  },
  {
    id: 'lu01_08',
    typ: 'lueckenubung',
    satz: 'Magister _____ discipulum.',
    verb: 'rufen (Präsens, 3. Person Singular)',
    loesungen: ['vocat'],
    erklaerung: 'Der Lehrer ruft den Schüler.'
  },
  {
    id: 'lu01_09',
    typ: 'lueckenubung',
    satz: 'Ego _____ epistolam.',
    verb: 'schreiben (Perfekt, 1. Person Singular)',
    loesungen: ['scripsi'],
    erklaerung: 'Ich schrieb einen Brief.'
  },
  {
    id: 'lu01_10',
    typ: 'lueckenubung',
    satz: 'Puellae _____ rosam.',
    verb: 'amare (Imperfekt, 3. Person Plural)',
    loesungen: ['amabant'],
    erklaerung: 'Die Mädchen liebten die Rose.'
  },
  {
    id: 'lu01_11',
    typ: 'lueckenubung',
    satz: 'Dominus _____ servum.',
    verb: 'loben (Perfekt, 3. Person Singular)',
    loesungen: ['laudavit'],
    erklaerung: 'Der Herr hat den Sklaven gelobt.'
  },
  {
    id: 'lu01_12',
    typ: 'lueckenubung',
    satz: 'Magister discipulos librum legere _____.',
    verb: 'dicere (Präsens, 3. Person Singular, ACI)',
    loesungen: ['dicit'],
    erklaerung: 'Der Lehrer sagt, dass die Schüler das Buch lesen.'
  },
  {
    id: 'lu01_13',
    typ: 'lueckenubung',
    satz: 'Ego _____ librum.',
    verb: 'lesen (Präsens, 1. Person Singular)',
    loesungen: ['lego'],
    erklaerung: 'Ich lese ein Buch.'
  },
  {
    id: 'lu01_14',
    typ: 'lueckenubung',
    satz: 'Tu _____ epistolam.',
    verb: 'schreiben (Imperfekt, 2. Person Singular)',
    loesungen: ['scribebas'],
    erklaerung: 'Du schriebst einen Brief.'
  },
  {
    id: 'lu01_15',
    typ: 'lueckenubung',
    satz: 'Pueri _____ in villam.',
    verb: 'kommen (Perfekt, 3. Person Plural)',
    loesungen: ['venerunt'],
    erklaerung: 'Die Jungen kamen ins Haus.'
  },
  {
    id: 'lu01_16',
    typ: 'lueckenubung',
    satz: 'Nos _____ librum.',
    verb: 'lesen (Plusquamperfekt, 1. Person Plural)',
    loesungen: ['legeramus'],
    erklaerung: 'Wir hatten ein Buch gelesen.'
  },
  {
    id: 'lu01_17',
    typ: 'lueckenubung',
    satz: 'Magister _____ discipulum.',
    verb: 'rufen (Präsens, 3. Person Singular)',
    loesungen: ['vocat'],
    erklaerung: 'Der Lehrer ruft den Schüler.'
  },
  {
    id: 'lu01_18',
    typ: 'lueckenubung',
    satz: 'Ego _____ epistolam.',
    verb: 'schreiben (Perfekt, 1. Person Singular)',
    loesungen: ['scripsi'],
    erklaerung: 'Ich schrieb einen Brief.'
  },
  {
    id: 'lu01_19',
    typ: 'lueckenubung',
    satz: 'Puellae _____ rosam.',
    verb: 'lieben (Imperfekt, 3. Person Plural)',
    loesungen: ['amabant'],
    erklaerung: 'Die Mädchen liebten die Rose.'
  },
  {
    id: 'lu01_20',
    typ: 'lueckenubung',
    satz: 'Dominus _____ servum.',
    verb: 'loben (Plusquamperfekt, 3. Person Singular)',
    loesungen: ['laudaverat'],
    erklaerung: 'Der Herr hatte den Sklaven gelobt.'
  },
  {
    id: 'lu02_01',
    typ: 'lueckenubung',
    satz: 'Vos _____ amicos.',
    verb: 'sehen (Präsens, 2. Person Plural)',
    loesungen: ['videtis'],
    erklaerung: 'Ihr seht die Freunde.'
  },
  {
    id: 'lu02_02',
    typ: 'lueckenubung',
    satz: 'Miles _____ gladio.',
    verb: 'kämpfen (Perfekt, 3. Person Singular)',
    loesungen: ['pugnavit'],
    erklaerung: 'Der Soldat kämpfte mit dem Schwert.'
  },
  {
    id: 'lu02_03',
    typ: 'lueckenubung',
    satz: 'Magister discipulos librum legere _____.',
    verb: 'sagen (Präsens, 3. Person Singular)',
    loesungen: ['dicit'],
    erklaerung: 'Der Lehrer sagt, dass die Schüler das Buch lesen.'
  },
  {
    id: 'lu02_04',
    typ: 'lueckenubung',
    satz: 'Magister discipulos librum legere _____.',
    verb: 'sagen (Imperfekt, 3. Person Singular)',
    loesungen: ['dicebat'],
    erklaerung: 'Der Lehrer sagte, dass die Schüler das Buch lasen.'
  },
  {
    id: 'lu02_05',
    typ: 'lueckenubung',
    satz: 'Magister discipulos librum legere _____.',
    verb: 'sagen (Perfekt, 3. Person Singular)',
    loesungen: ['dixit'],
    erklaerung: 'Der Lehrer sagte, dass die Schüler das Buch gelesen haben.'
  },
  {
    id: 'lu02_06',
    typ: 'lueckenubung',
    satz: 'Magister discipulos librum legere _____.',
    verb: 'sagen (Plusquamperfekt, 3. Person Singular)',
    loesungen: ['dixerat'],
    erklaerung: 'Der Lehrer hatte gesagt, dass die Schüler das Buch gelesen hatten.'
  },
  {
    id: 'lu02_07',
    typ: 'lueckenubung',
    satz: 'Magister eum librum legere _____.',
    verb: 'sagen (Präsens)',
    loesungen: ['dicit'],
    erklaerung: 'Der Lehrer sagt, dass er das Buch liest.'
  },
  {
    id: 'lu02_08',
    typ: 'lueckenubung',
    satz: 'Magistri eam rosam amare _____.',
    verb: 'glauben (Imperfekt)',
    loesungen: ['putabant'],
    erklaerung: 'Die Lehrerinnen glaubten, dass sie die Rose liebte.'
  },
  {
    id: 'lu02_09',
    typ: 'lueckenubung',
    satz: 'Magister se etiam ipsum discipulum esse _____.',
    verb: 'wissen (Perfekt, 3. Person Singular)',
    loesungen: ['scivit'],
    erklaerung: 'Der Lehrer wusste, dass er ein Schüler war.'
  },
  {
    id: 'lu02_10',
    typ: 'lueckenubung',
    satz: 'Magister nos venire _____.',
    verb: 'befehlen = iubere, iubeo, iussi <br>(Plusquamperfekt, 3. Person Singular)',
    loesungen: ['iusserat'],
    erklaerung: 'Der Lehrer hatte uns befohlen zu kommen.'
  },
  {
    id: 'lu02_11',
    typ: 'lueckenubung',
    satz: 'Magister vos pugnare _____.',
    verb: 'bitten (Präsens, 3. Person Singular)',
    loesungen: ['rogat'],
    erklaerung: 'Der Lehrer bittet euch zu kämpfen.'
  },
  {
    id: 'lu02_12',
    typ: 'lueckenubung',
    satz: 'Magister pueros in villam venire _____.',
    verb: 'befehlen (Imperfekt, 3. Person Singular)',
    loesungen: ['iubebat'],
    erklaerung: 'Der Lehrer befahl den Jungen, ins Haus zu kommen.'
  },
  {
    id: 'lu02_13',
    typ: 'lueckenubung',
    satz: 'Consul milites hostes _____ pugnavisse.',
    verb: 'glauben (Präsens)',
    loesungen: ['credit'],
    erklaerung: 'Der Konsul glaubt, dass die Soldaten gegen die Feinde gekämpft haben.'
  },
  {
    id: 'lu02_14',
    typ: 'lueckenubung',
    satz: 'Magister pueros librum _____ scripsisse.',
    verb: 'wissen (Präsens, 3. Person Singular)',
    loesungen: ['scit'],
    erklaerung: 'Der Lehrer weiß, dass die Jungen das Buch geschrieben haben.'
  },
  {
    id: 'lu02_15',
    typ: 'lueckenubung',
    satz: 'Patres legatum hostes _____ vicisse.',
    verb: 'hören (Präsens, 3. Person)',
    loesungen: ['audiunt'],
    erklaerung: 'Die Väter hören, dass der Gesandte die Feinde besiegt hat.'
  },
  {
    id: 'lu02_16',
    typ: 'lueckenubung',
    satz: 'Imperator milites urbem _____ defendisse.',
    verb: 'behaupten (Präsens, 3. Person Singular)',
    loesungen: ['dicit'],
    erklaerung: 'Der Feldherr behauptet, dass die Soldaten die Stadt verteidigt haben.'
  },
  {
    id: 'lu02_17',
    typ: 'lueckenubung',
    satz: 'Civitas consulem hostes _____ pellisse.',
    verb: 'erfahren = cognoscere (Präsens, 3. Person Singular)',
    loesungen: ['cognoscit'],
    erklaerung: 'Die Bürgerschaft erkennt, dass der Konsul die Feinde vertrieben hat.'
  },
  {
    id: 'lu02_18',
    typ: 'lueckenubung',
    satz: 'Miles, _____ virtūs magna est, hostes terret.',
    verb: 'Relativpronomen',
    loesungen: ['cuius'],
    erklaerung: 'Der Soldat, dessen Tapferkeit groß ist, erschreckt die Feinde.'
  },
  {
    id: 'lu02_19',
    typ: 'lueckenubung',
    satz: 'Liber, _____ oratio clara est, omnibus placet.',
    verb: 'Relativpronomen',
    loesungen: ['cuius'],
    erklaerung: 'Das Buch, dessen Sprache klar ist, gefällt allen.'
  },
  {
    id: 'lu02_20',
    typ: 'lueckenubung',
    satz: 'Magister pueros in villam _____.',
    verb: 'schicken (Präsens, 3. Person Singular)',
    loesungen: ['mittit'],
    erklaerung: 'Der Lehrer schickt die Jungen ins Haus.'
  },
  {
    id: 'lu03_01',
    typ: 'lueckenubung',
    satz: 'Consul civitati _____ imperavit.',
    verb: 'dienen',
    loesungen: ['servire'],
    erklaerung: 'Der Konsul befahl der Bürgerschaft zu dienen.'
  },
  {
    id: 'lu03_02',
    typ: 'lueckenubung',
    satz: 'Milites hostes pugnare _____ nolebant. (cogere = zwingen)',
    verb: 'zwingen (Imperfekt, 3. Person Plural)',
    loesungen: ['cogere'],
    erklaerung: 'Die Soldaten wollten die Feinde nicht zwingen zu kämpfen.'
  },
  {
    id: 'lu03_03',
    typ: 'lueckenubung',
    satz: 'Mulier, _____ pacem facit, celeber est.',
    verb: 'Relativpronomen (Nominativ Singular)',
    loesungen: ['quae'],
    erklaerung: 'Die Frau, die den Frieden stiftet, ist berühmt.'
  },
  {
    id: 'lu03_04',
    typ: 'lueckenubung',
    satz: 'Marītī, _____ coniūgēs trīstēs sunt, manent.',
    verb: 'Relativpronomen (Genitiv Plural)',
    loesungen: ['quorum'],
    erklaerung: 'Die Ehemänner, deren Ehefrauen traurig sind, bleiben.'
  },
  {
    id: 'lu03_05',
    typ: 'lueckenubung',
    satz: 'Mulierēs, _____ virī grātiās agunt, placidae sunt.',
    verb: 'Relativpronomen (Dativ Plural)',
    loesungen: ['quibus'],
    erklaerung: 'Die Frauen, denen die Männer danken, sind friedlich.'
  },
  {
    id: 'lu03_06',
    typ: 'lueckenubung',
    satz: 'Puerī _____ libris gaudent.',
    verb: 'Possessivpronomen (gaudere verlangt Ablativ)',
    loesungen: ['suis'],
    erklaerung: 'Die Jungen freuen sich über ihre Bücher.'
  },
  {
    id: 'lu03_07',
    typ: 'lueckenubung',
    satz: 'Mulier cum _____ marītō ambulat.',
    verb: 'Possessivpronomen (ihrem)',
    loesungen: ['suo'],
    erklaerung: 'Die Frau geht mit ihrem Ehemann spazieren.'
  },
  {
    id: 'lu03_08',
    typ: 'lueckenubung',
    satz: 'Magister _____ discipulum laudat.',
    verb: 'Possessivpronomen (Akkusativ Singular)',
    loesungen: ['suum'],
    erklaerung: 'Der Lehrer lobt seinen Schüler.'
  },
  {
    id: 'lu03_09',
    typ: 'lueckenubung',
    satz: 'Marītus domum _____.',
    verb: 'ornare (3. Person Singular, Präsens)',
    loesungen: ['ornat'],
    erklaerung: 'Der Ehemann schmückt das Haus.'
  },
  {
    id: 'lu03_10',
    typ: 'lueckenubung',
    satz: 'Paucī virī _____.',
    verb: 'certare (3. Person Plural, Präsens)',
    loesungen: ['certant'],
    erklaerung: 'Die wenigen Männer kämpfen.'
  },
  {
    id: 'lu03_11',
    typ: 'lueckenubung',
    satz: 'Mihi _____ domus est.',
    verb: 'schönes (Haus) – Dativ des Besitzes',
    loesungen: ['pulchra'],
    erklaerung: 'Mir gehört ein schönes Haus.'
  }
];
