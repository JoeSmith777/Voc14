// ===== POOL: DRAG & DROP AUFGABEN Version 2.3 =====
// ===== DRAG & DROP bis dd03_17 =====
// ===== Lückenfüller bis lu03_17 =====

const DRAGDROP_POOL = [{
        id: 'dd01_11',
        typ: 'dragdrop',
        aufgabe: 'Wir glauben, dass er die Wahrheit sagt.',
        richtigeAntwort: 'credimus eum veritatem dicere.',
        optionen: [
            'credimus eum veritatem dicere.',
            'credimus eum veritatem dixisse.',
            'credimus eum veritatem dicet.',
            'credimus eum veritatem dicere non potest.'
        ],
        tipp: 'AcI: credere + Akkusativ + Infinitiv'
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
        ],
        tipp: 'AcI: videre + Akkusativ + Infinitiv'
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
        ],
        tipp: 'AcI: affirmare + Akkusativ + Infinitiv Perfekt'
    },
    {
        id: 'dd01_14',
        typ: 'dragdrop',
        aufgabe: 'Wir hörten, dass du gesungen hattest.',
        richtigeAntwort: 'Audivimus te cantavisse.',
        optionen: [
            'Audibamus te cantavit.',
            'Audivimus te cantavisse.',
            'Audibamus te cantabas.',
            'Audivimus te cantare potes.'
        ],
        tipp: 'AcI: audire + Akkusativ + Infinitiv Perfekt'
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
        ],
        tipp: 'AcI: putare + Akkusativ + Infinitiv'
    },
    {
        id: 'dd01_16',
        typ: 'dragdrop',
        aufgabe: 'Ich habe dir viele Briefe geschrieben.',
        richtigeAntwort: 'tibi multas epistulas misi.',
        optionen: [
            'tibi multas epistulas misi.',
            'multas epistulas misi a te.',
            'tibi multas epistulas mitto.',
            'tecum multas epistulas miseram.'
        ],
        tipp: 'tibi = Dativ (wem?), tecum = Ablativ (mit Dir), a te = Ablativ (von Dir)'
    },
    {
        id: 'dd01_17',
        typ: 'dragdrop',
        aufgabe: 'Ich weiß, dass ihr fleißig gearbeitet habt.',
        richtigeAntwort: 'scio vos diligenter laboravisse.',
        optionen: [
            'scio vos diligenter laboravisse.',
            'scio vos diligenter laborare.',
            'scio vos diligenter laborabitis.',
            'scio vos diligenter laborare debetis.'
        ],
        tipp: 'AcI: scire + Akkusativ + Infinitiv Perfekt'
    },
    {
        id: 'dd01_18',
        typ: 'dragdrop',
        aufgabe: 'Er hofft, dass wir siegen. (sperare = hoffen)',
        richtigeAntwort: 'sperat nos vincere.',
        optionen: [
            'sperat nos vincere esse.',
            'sperat nos vicisse.',
            'sperat nos vincimus.',
            'sperat nos vincere.'
        ],
        tipp: 'AcI: sperare + Akkusativ + Infinitiv'
    },
    {
        id: 'dd01_19',
        typ: 'dragdrop',
        aufgabe: 'Sie sehen, dass der Lehrer kommt.',
        richtigeAntwort: 'vident magistrum venire.',
        optionen: [
            'vident magistrum venire.',
            'vident magistrum venisse.',
            'vident magistrum veniet.',
            'vident magistrum venit.'
        ],
        tipp: 'AcI: videre + Akkusativ + Infinitiv'
    },
    {
        id: 'dd01_20',
        typ: 'dragdrop',
        aufgabe: 'Er wurde zum König ernannt. <br>(creare = erschaffen, gebären; creatus = PPP = hier im Kontext: ernannt)',
        richtigeAntwort: 'rex creatus est.',
        optionen: [
            'rex creatus est.',
            'rex creavit est.',
            'rex creat.',
            'rex creavit.'
        ],
        tipp: 'Passiv: PPP + esse (hier: creatus est)'
    },
    {
        id: 'dd02_01',
        typ: 'dragdrop',
        aufgabe: 'Sie wurde zur Königin gekrönt. <br>(facere = machen, tun; facta = PPP = gemacht)',
        richtigeAntwort: 'regina facta est.',
        optionen: [
            'regina facta est.',
            'regina facit est.',
            'regina fiet.',
            'regina faciet.'
        ],
        tipp: 'Passiv: PPP + esse (hier: facta est)'
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
            'Ich glaube ihr nicht. Jene Worte sind unglaublich.'
        ],
        tipp: 'Tibi = Personalpronomen, Dativ Singular (dir), ea = Demonstrativpronomen, Nominativ Plural (diese)'
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
        ],
        tipp: 'Passiv: PPP + esse (hier: dicta est)'
    },
    {
        id: 'dd02_04',
        typ: 'dragdrop',
        aufgabe: 'Er wurde zum Konsul ernannt. <br>(creare = erschaffen, gebären; creatus = PPP = hier im Kontext: ernannt)',
        richtigeAntwort: 'consul creatus est.',
        optionen: [
            'consul creatus est.',
            'consul creavit est.',
            'consul creabitur.',
            'consul creavit.'
        ],
        tipp: 'Passiv: PPP + esse (hier: creatus est)'
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
            'Die Kinder lesen Bücher der Kinder.'
        ],
        tipp: 'liberi: Nominativ Plural (die Kinder)'
    },
    {
        id: 'dd02_06',
        typ: 'dragdrop',
        aufgabe: 'liberi',
        richtigeAntwort: 'die Kinder, die Freien, des Buches',
        optionen: [
            'der Kinder, frei (Adjektiv), die Bücher',
            'die Kinder, die Freien, des Buches',
            'des Kindes, frei (Adjektiv), des Buches'
        ],
        tipp: 'liberi kann Substantiv (die Kinder/ die Freien) oder Adjektiv (frei) sein'
    },
    {
        id: 'dd02_07',
        typ: 'dragdrop',
        aufgabe: 'Ego moderator dico: plures lacrimas!',
        richtigeAntwort: 'Ich als Regisseur sage: mehr Tränen!',
        optionen: [
            'Ich als Regisseur sage: mehr Tränen!',
            'Der Regisseur sagt mir: Tränen sind mehr!',
            'Ich als Regisseur sage: zu viele Gedichte!'
        ],
        tipp: 'moderator = Regisseur, plures = mehr (Komparativ von multus)'
    },
    {
        id: 'dd02_08',
        typ: 'dragdrop',
        aufgabe: 'Servi Chrysippum secum trahunt',
        richtigeAntwort: 'Die Sklaven schleppen Chrysippos mit sich.',
        optionen: [
            'Die Sklaven schleppen Chrysippos mit sich.',
            'Die Sklaven wurden durch Chrysippos mitgezogen.',
            'Die Sklaven schleppen Chrysipp nach.',
            'Der Sklave Chrysippos wird von ihnen mitgezogen.'
        ],
        tipp: 'Chrysippum = Akkusativ Singular (wen?)'
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
        ],
        tipp: 'avi nostri = Nominativ Plural (unsere Großväter)'
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
        ],
        tipp: 'AcI: iubere + Akkusativ + Infinitiv'
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
        ],
        tipp: 'necessest + Akkusativ + Infinitiv'
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
        ],
        tipp: 'AcI: videre + Akkusativ + Infinitiv'
    },
    {
        id: 'dd02_13',
        typ: 'dragdrop',
        aufgabe: 'Er glaubt, dass die Bürger tapfer sind.',
        richtigeAntwort: 'credit cives duros esse',
        optionen: [
            'credit cives duros esse',
            'credit cives duri sunt',
            'credit civis duros fuisse',
            'credit civis duri esse'
        ],
        tipp: 'AcI: credere + Akkusativ + Infinitiv (esse)'
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
        ],
        tipp: 'AcI: constare + Akkusativ + Infinitiv'
    },
    {
        id: 'dd02_15',
        typ: 'dragdrop',
        aufgabe: 'Pomponia verbis non placidis, sed iratis disputat',
        richtigeAntwort: 'Pomponia streitet mit nicht friedlichen, sondern zornigen Worten.',
        optionen: [
            'Pomponia streitet nicht wegen der Worte, sondern weil sie zornig ist.',
            'Pomponia streitet mit Worten, die Dir nicht gefallen sondern Dich zürnen.',
            'Pomponia streitet mit nicht friedlichen, sondern zornigen Worten.'
        ],
        tipp: 'verbis: Ablativ Plural (mit was?), placidis/iratis: Ablativ Plural (Adjektive)'
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
        ],
        tipp: 'AcI: rogare + Akkusativ + Infinitiv'
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
        ],
        tipp: 'placidus, placida, placidum: ruhig)'
    },
    {
        id: 'dd02_18',
        typ: 'dragdrop',
        aufgabe: 'Femina bona et egregia magna fecit.',
        richtigeAntwort: 'Die gute und ausgezeichnete Frau hat große Dinge getan.',
        optionen: [
            'Die Frau macht gute und ausgezeichnete Dinge.',
            'Die gute und ausgezeichnete Frau hat große Dinge getan.',
            'Die gute und ausgezeichnete Frau vollbringt große Taten.',
            'Die gute und fromme Frau hat Großes getan.'
        ],
        tipp: 'bona et egregia: Nominativ Singular Femininum (Adjektive)'
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
        ],
        tipp: 'paravi = Perfekt (ich habe vorbereitet), restat = Präsens (bleibt übrig)'
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
        ],
        tipp: 'AcI: videre + Akkusativ + Infinitiv'
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
        ],
        tipp: 'AcI: constare + Akkusativ + Infinitiv'
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
        ],
        tipp: 'AcI: scire + Akkusativ + Infinitiv'
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
        ],
        tipp: 'AcI: dicere + Akkusativ + Infinitiv'
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
        ],
        tipp: 'tristis: Nominativ Singular Femininum'
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
        ],
        tipp: 'maritus = Nominativ Singular, mulierem = Akkusativ Singular (wen?), celebrem = Akkusativ Singular Femininum'
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
        ],
        tipp: 'AcI: velle + Akkusativ + Infinitiv'
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
        ],
        tipp: 'domum = Akkusativ Singular (was?), floribus = Ablativ Plural (womit?)'
    },
    {
        id: 'dd03_08',
        typ: 'dragdrop',
        aufgabe: 'Die Frau, die den Frieden stiftet, ist berühmt.',
        richtigeAntwort: 'mulier, quae pacem facit, celebris est',
        optionen: [
            'mulier, quae pacem facit, celebris est',
            'mulier, qui pacem facit, celebris est',
            'mulier, quam pacem facit, celebris est',
            'mulier, quae pacem facere, celebris est'
        ],
        tipp: 'Relativpronomen: qui, quae, quod'
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
        ],
        tipp: 'Relativpronomen: cuius (Genitiv Singular, dessen)'
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
        ],
        tipp: 'Relativpronomen: qua (Ablativ Singular Femininum, in + Ablativ)'
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
        ],
        tipp: '<b>Nom.</b> suus sua suum <br><b>Gen.</b> suī suae suī <br><b>Dat.</b> suō suae suō <br><b>Akk.</b>suum suam suum <br><b>Abl.</b> suō suā suō <br><br><b>Nom.b/b> suī suae sua <br><b>Gen.</b> suōrum suārum suōrum <br><b>Dat.</b> suīs suīs suīs <br><b>Akk.</b> suōs suās sua <br><b>Abl.<b/> suīs suīs suīs<br><br>Achtung: domus = fem.'
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
        ],
        tipp: 'maritum suum = Akkusativ Singular Maskulinum (ihren Ehemann)'
    },
    {
        id: 'dd03_13',
        typ: 'dragdrop',
        aufgabe: 'Unser Freund will die berühmte Stadt besuchen.',
        richtigeAntwort: 'amīcus noster urbem celebrem visitāre vult',
        optionen: [
            'amīcus noster urbem celebrem visitāre vult',
            'amīcus nostrum urbem celebrem visitāre vult',
            'amīcus nostri urbem celebrem visitāre vult'
        ],
        tipp: 'amicus noster = Nominativ Singular Maskulinum (unser Freund), urbem = Akkusativ Singular Femininum (die Stadt)'
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
        ],
        tipp: 'se ipsa = Nom. Singular Femininum (sich selbst)'
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
        ],
        tipp: 'velle – Präs.: volo, vis, vult, volumus, vultis, volunt<br>Perf.: volui, voluisti, voluit, volumus, voluistis, voluerunt'
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
        ],
        tipp: 'Relativpronomen: qui (Nominativ Plural Maskulinum, Subjekt des Relativsatzes)'
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
        ],
        tipp: 'pulchrior = Komparativ (schöner), mea = Ablativ Singular Femininum (als meins)'
    }
];

// ===== POOL: LÜCKENÜBUNG AUFGABEN =====
const LUECKENUBUNG_POOL = [
    // ===== SERIE 1: PRÄSENS, IMPERFEKT, PERFEKT, PLUSQUAMPERFEKT =====
    {
        id: "lu01_01",
        typ: "lueckenubung",
        satz: "Servus _____ dominum.",
        verb: "gehorsam sein (Präsens, 3. Person Singular)",
        optionen: ["obedi", "obediunt", "obedit", "obeditis"],
        loesungen: ["obedit"],
        erklaerung: "Servus obedit dominum.<br><br>Der Sklave gehorcht dem Herrn.<br><br>obedire = gehorchen (Präsens, 3. Person Singular)"
    },
    {
        id: "lu01_02",
        typ: "lueckenubung",
        satz: "Puer _____ in horto.",
        verb: "spielen (Imperfekt, 3. Person Singular)",
        optionen: ["ludebant", "ludit", "ludebat", "ludet"],
        loesungen: ["ludebat"],
        erklaerung: "Puer ludebat in horto.<br><br>Der Junge spielte im Garten.<br><br>ludere = spielen (Imperfekt, 3. Person Singular)"
    },
    {
        id: "lu01_03",
        typ: "lueckenubung",
        satz: "Ego _____ librum.",
        verb: "lesen (Präsens, 1. Person Singular)",
        optionen: ["lego", "legis", "legerem", "legit"],
        loesungen: ["lego"],
        erklaerung: "Ego lego librum.<br><br>Ich lese ein Buch.<br><br>legere = lesen (Präsens, 1. Person Singular)"
    },
    {
        id: "lu01_04",
        typ: "lueckenubung",
        satz: "Tu _____ epistolam.",
        verb: "schreiben (Imperfekt, 2. Person Singular)",
        optionen: ["scribebas", "scribes", "scribebat", "scribis"],
        loesungen: ["scribebas"],
        erklaerung: "Tu scribebas epistolam.<br><br>Du schriebst einen Brief.<br><br>scribere = schreiben (Imperfekt, 2. Person Singular)"
    },
    {
        id: "lu01_05",
        typ: "lueckenubung",
        satz: "Pueri _____ in villam.",
        verb: "kommen (Perfekt, 3. Person Plural)",
        optionen: ["venerunt", "veniunt", "venerat", "venient"],
        loesungen: ["venerunt"],
        erklaerung: "Pueri venerunt in villam.<br><br>Die Jungen kamen ins Haus.<br><br>venire = kommen (Perfekt, 3. Person Plural)"
    },
    {
        id: "lu01_06",
        typ: "lueckenubung",
        satz: "Nos _____ librum.",
        verb: "lesen (Plusquamperfekt, 1. Person Plural)",
        optionen: ["legeramus", "legemus", "legebamus", "legimus"],
        loesungen: ["legeramus"],
        erklaerung: "Nos legeramus librum.<br><br>Wir hatten ein Buch gelesen.<br><br>legere = lesen (Plusquamperfekt, 1. Person Plural)"
    },
    {
        id: "lu01_07",
        typ: "lueckenubung",
        satz: "Vos _____ amicos.",
        verb: "sehen (Präsens, 2. Person Plural)",
        optionen: ["videtis", "videt", "vident", "videbamus"],
        loesungen: ["videtis"],
        erklaerung: "Vos videtis amicos.<br><br>Ihr seht die Freunde.<br><br>videre = sehen (Präsens, 2. Person Plural)"
    },
    {
        id: "lu01_08",
        typ: "lueckenubung",
        satz: "Magister _____ discipulum.",
        verb: "rufen (Präsens, 3. Person Singular)",
        optionen: ["vocat", "vocabat", "vocabit", "vocavit"],
        loesungen: ["vocat"],
        erklaerung: "Magister vocat discipulum.<br><br>Der Lehrer ruft den Schüler.<br><br>vocare = rufen (Präsens, 3. Person Singular)"
    },
    {
        id: "lu01_09",
        typ: "lueckenubung",
        satz: "Ego _____ epistolam.",
        verb: "schreiben (Perfekt, 1. Person Singular)",
        optionen: ["scripsi", "scribo", "scribam", "scribebam"],
        loesungen: ["scripsi"],
        erklaerung: "Ego scripsi epistolam.<br><br>Ich schrieb einen Brief.<br><br>scribere = schreiben (Perfekt, 1. Person Singular)"
    },
    {
        id: "lu01_10",
        typ: "lueckenubung",
        satz: "Puellae _____ rosam.",
        verb: "lieben (Imperfekt, 3. Person Plural)",
        optionen: ["amabant", "amant", "amabunt", "amaverunt"],
        loesungen: ["amabant"],
        erklaerung: "Puellae amabant rosam.<br><br>Die Mädchen liebten die Rose.<br><br>amare = lieben (Imperfekt, 3. Person Plural)"
    },
    {
        id: "lu01_11",
        typ: "lueckenubung",
        satz: "Dominus _____ servum.",
        verb: "loben (Perfekt, 3. Person Singular)",
        optionen: ["laudavit", "laudat", "laudabit", "laudabat"],
        loesungen: ["laudavit"],
        erklaerung: "Dominus laudavit servum.<br><br>Der Herr hat den Sklaven gelobt.<br><br>laudare = loben (Perfekt, 3. Person Singular)"
    },
    {
        id: "lu01_12",
        typ: "lueckenubung",
        satz: "Magister discipulos librum legere _____.",
        verb: "sagen (Präsens, 3. Person Singular, AcI)",
        optionen: ["dicit", "dicebat", "dixit", "dicet"],
        loesungen: ["dicit"],
        erklaerung: "Magister discipulos librum legere dicit.<br><br>Der Lehrer sagt, dass die Schüler das Buch lesen.<br><br>AcI: dicere + Akkusativ + Infinitiv (Präsens)"
    },
    {
        id: "lu01_13",
        typ: "lueckenubung",
        satz: "Ego _____ librum.",
        verb: "lesen (Präsens, 1. Person Singular)",
        optionen: ["lego", "legis", "legit", "legerem"],
        loesungen: ["lego"],
        erklaerung: "Ego lego librum.<br><br>Ich lese ein Buch.<br><br>legere = lesen (Präsens, 1. Person Singular)"
    },
    {
        id: "lu01_14",
        typ: "lueckenubung",
        satz: "Tu _____ epistolam.",
        verb: "schreiben (Imperfekt, 2. Person Singular)",
        optionen: ["scribebas", "scribebat", "scribis", "scribes"],
        loesungen: ["scribebas"],
        erklaerung: "Tu scribebas epistolam.<br><br>Du schriebst einen Brief.<br><br>scribere = schreiben (Imperfekt, 2. Person Singular)"
    },
    {
        id: "lu01_15",
        typ: "lueckenubung",
        satz: "Pueri _____ in villam.",
        verb: "kommen (Perfekt, 3. Person Plural)",
        optionen: ["venerunt", "venerat", "veniunt", "venient"],
        loesungen: ["venerunt"],
        erklaerung: "Pueri venerunt in villam.<br><br>Die Jungen kamen ins Haus.<br><br>venire = kommen (Perfekt, 3. Person Plural)"
    },
    {
        id: "lu01_16",
        typ: "lueckenubung",
        satz: "Nos _____ librum.",
        verb: "lesen (Plusquamperfekt, 1. Person Plural)",
        optionen: ["legeramus", "legebamus", "legemus", "legimus"],
        loesungen: ["legeramus"],
        erklaerung: "Nos legeramus librum.<br><br>Wir hatten ein Buch gelesen.<br><br>legere = lesen (Plusquamperfekt, 1. Person Plural)"
    },
    {
        id: "lu01_17",
        typ: "lueckenubung",
        satz: "Magister _____ discipulum.",
        verb: "rufen (Präsens, 3. Person Singular)",
        optionen: ["vocat", "vocabat", "vocavit", "vocabit"],
        loesungen: ["vocat"],
        erklaerung: "Magister vocat discipulum.<br><br>Der Lehrer ruft den Schüler.<br><br>vocare = rufen (Präsens, 3. Person Singular)"
    },
    {
        id: "lu01_18",
        typ: "lueckenubung",
        satz: "Ego _____ epistolam.",
        verb: "schreiben (Perfekt, 1. Person Singular)",
        optionen: ["scripsi", "scribam", "scribo", "scribebam"],
        loesungen: ["scripsi"],
        erklaerung: "Ego scripsi epistolam.<br><br>Ich schrieb einen Brief.<br><br>scribere = schreiben (Perfekt, 1. Person Singular)"
    },
    {
        id: "lu01_19",
        typ: "lueckenubung",
        satz: "Puellae _____ rosam.",
        verb: "lieben (Imperfekt, 3. Person Plural)",
        optionen: ["amabant", "amaverunt", "amant", "amabunt"],
        loesungen: ["amabant"],
        erklaerung: "Puellae amabant rosam.<br><br>Die Mädchen liebten die Rose.<br><br>amare = lieben (Imperfekt, 3. Person Plural)"
    },
    {
        id: "lu01_20",
        typ: "lueckenubung",
        satz: "Dominus _____ servum.",
        verb: "loben (Plusquamperfekt, 3. Person Singular)",
        optionen: ["laudaverat", "laudat", "laudabit", "laudavit"],
        loesungen: ["laudaverat"],
        erklaerung: "Dominus laudaverat servum.<br><br>Der Herr hatte den Sklaven gelobt.<br><br>laudare = loben (Plusquamperfekt, 3. Person Singular)"
    },

    // ===== SERIE 2: AcI =====
    {
        id: "lu02_01",
        typ: "lueckenubung",
        satz: "Vos _____ amicos.",
        verb: "sehen (Präsens, 2. Person Plural)",
        optionen: ["videtis", "vident", "videt", "videbamus"],
        loesungen: ["videtis"],
        erklaerung: "Vos videtis amicos.<br><br>Ihr seht die Freunde.<br><br>videre = sehen (Präsens, 2. Person Plural)"
    },
    {
        id: "lu02_02",
        typ: "lueckenubung",
        satz: "Miles _____ gladio.",
        verb: "kämpfen (Perfekt, 3. Person Singular)",
        optionen: ["pugnavit", "pugnat", "pugnabat", "pugnabit"],
        loesungen: ["pugnavit"],
        erklaerung: "Miles pugnavit gladio.<br><br>Der Soldat kämpfte mit dem Schwert.<br><br>pugnare = kämpfen (Perfekt, 3. Person Singular)"
    },
    {
        id: "lu02_03",
        typ: "lueckenubung",
        satz: "Magister discipulos librum legere _____.",
        verb: "sagen (Präsens, 3. Person Singular)",
        optionen: ["dicit", "dixit", "dicet", "dicebat"],
        loesungen: ["dicit"],
        erklaerung: "Magister discipulos librum legere dicit.<br><br>Der Lehrer sagt, dass die Schüler das Buch lesen.<br><br>AcI: dicere + Akkusativ + Infinitiv (Präsens)"
    },
    {
        id: "lu02_04",
        typ: "lueckenubung",
        satz: "Magister discipulos librum legere _____.",
        verb: "sagen (Imperfekt, 3. Person Singular)",
        optionen: ["dicebat", "dicit", "dixit", "dicet"],
        loesungen: ["dicebat"],
        erklaerung: "Magister discipulos librum legere dicebat.<br><br>Der Lehrer sagte, dass die Schüler das Buch lasen.<br><br>AcI: dicere + Akkusativ + Infinitiv (Imperfekt)"
    },
    {
        id: "lu02_05",
        typ: "lueckenubung",
        satz: "Magister discipulos librum legere _____.",
        verb: "sagen (Perfekt, 3. Person Singular)",
        optionen: ["dixit", "dicit", "dicebat", "dicet"],
        loesungen: ["dixit"],
        erklaerung: "Magister discipulos librum legere dixit.<br><br>Der Lehrer sagte, dass die Schüler das Buch lasen.<br><br>AcI: dicere + Akkusativ + Infinitiv (Perfekt, keine Vorzeitigkeit)"
    },
    {
        id: "lu02_06",
        typ: "lueckenubung",
        satz: "Magister discipulos librum legere _____.",
        verb: "sagen (Plusquamperfekt, 3. Person Singular)",
        optionen: ["dixerat", "dicit", "dicebat", "dixit"],
        loesungen: ["dixerat"],
        erklaerung: "Magister discipulos librum legere dixerat.<br><br>Der Lehrer hatte gesagt, dass die Schüler das Buch lesen.<br><br>AcI: dicere + Akkusativ + Infinitiv (Plusquamperfekt)"
    },
    {
        id: "lu02_07",
        typ: "lueckenubung",
        satz: "Magister eum librum legere _____.",
        verb: "sagen (Präsens)",
        optionen: ["dicit", "dixit", "dicebat", "dixerat"],
        loesungen: ["dicit"],
        erklaerung: "Magister eum librum legere dicit.<br><br>Der Lehrer sagt, dass er das Buch liest.<br><br>AcI: dicere + Akkusativ + Infinitiv (Präsens)"
    },
    {
        id: "lu02_08",
        typ: "lueckenubung",
        satz: "Magistrae eam rosam amare _____.",
        verb: "glauben (Imperfekt)",
        optionen: ["putabant", "putant", "putaverunt", "putabunt"],
        loesungen: ["putabant"],
        erklaerung: "Magistrae eam rosam amare putabant.<br><br>Die Lehrerinnen glaubten, dass sie die Rose liebte.<br><br>AcI: putare + Akkusativ + Infinitiv (Imperfekt)"
    },
    {
        id: "lu02_09",
        typ: "lueckenubung",
        satz: "Magister se etiam ipsum discipulum esse _____.",
        verb: "wissen (Perfekt, 3. Person Singular)",
        optionen: ["scivit", "scit", "sciet", "sciebat"],
        loesungen: ["scivit"],
        erklaerung: "Magister se etiam ipsum discipulum esse scivit.<br><br>Der Lehrer wusste, dass er ein Schüler war.<br><br>AcI: scire + Akkusativ + Infinitiv (esse, Perfekt)"
    },
    {
        id: "lu02_10",
        typ: "lueckenubung",
        satz: "Magister nos venire _____.",
        verb: "befehlen = iubere, iubeo, iussi (Plusquamperfekt, 3. Person Singular)",
        optionen: ["iusserat", "iubet", "iussit", "iubebat"],
        loesungen: ["iusserat"],
        erklaerung: "Magister nos venire iusserat.<br><br>Der Lehrer hatte uns befohlen zu kommen.<br><br>iubere = befehlen (Plusquamperfekt, 3. Person Singular)"
    },
    {
        id: "lu02_11",
        typ: "lueckenubung",
        satz: "Magister vos pugnare _____.",
        verb: "bitten (Präsens, 3. Person Singular)",
        optionen: ["rogat", "rogabat", "rogavit", "rogabit"],
        loesungen: ["rogat"],
        erklaerung: "Magister vos pugnare rogat.<br><br>Der Lehrer bittet euch zu kämpfen.<br><br>rogare = bitten (Präsens, 3. Person Singular)"
    },
    {
        id: "lu02_12",
        typ: "lueckenubung",
        satz: "Magister pueros in villam venire _____.",
        verb: "befehlen (Imperfekt, 3. Person Singular)",
        optionen: ["iubebat", "iubet", "iussit", "iusserat"],
        loesungen: ["iubebat"],
        erklaerung: "Magister pueros in villam venire iubebat.<br><br>Der Lehrer befahl den Jungen, ins Haus zu kommen.<br><br>iubere = befehlen (Imperfekt, 3. Person Singular)"
    },
    {
        id: "lu02_13",
        typ: "lueckenubung",
        satz: "Consul milites contra hostes _____ pugnavisse.",
        verb: "glauben (Präsens)",
        optionen: ["credit", "credidit", "crediderunt", "credebant"],
        loesungen: ["credit"],
        erklaerung: "Consul milites contra hostes pugnavisse credit.<br><br>Der Konsul glaubt, dass die Soldaten gegen die Feinde gekämpft haben.<br><br>AcI: credere + Akkusativ + Infinitiv Perfekt (pugnavisse)"
    },
    {
        id: "lu02_14",
        typ: "lueckenubung",
        satz: "Magister pueros epistolam _____ scripsisse.",
        verb: "wissen (Präsens, 3. Person Singular)",
        optionen: ["scit", "sciebat", "scivit", "sciet"],
        loesungen: ["scit"],
        erklaerung: "Magister pueros epistolam scripsisse scit.<br><br>Der Lehrer weiß, dass die Jungen den Brief geschrieben haben.<br><br>AcI: scire + Akkusativ + Infinitiv Perfekt (scripsisse)"
    },
    {
        id: "lu02_15",
        typ: "lueckenubung",
        satz: "Patres _____ legatum hostes vicisse.",
        verb: "hören (Präsens, 3. Person)",
        optionen: ["audiunt", "audient", "audiverunt", "audiebant"],
        loesungen: ["audiunt"],
        erklaerung: "Patres audiunt legatum hostes vicisse.<br><br>Die Väter hören, dass der Gesandte die Feinde besiegt hat.<br><br>AcI: audire + Akkusativ + Infinitiv Perfekt (vicisse)"
    },
    {
        id: "lu02_16",
        typ: "lueckenubung",
        satz: "Imperator milites urbem _____ defendisse.",
        verb: "behaupten (Präsens, 3. Person Singular)",
        optionen: ["dicit", "dixerat", "dicebat", "dixit"],
        loesungen: ["dicit"],
        erklaerung: "Imperator milites urbem defendisse dicit.<br><br>Der Feldherr behauptet, dass die Soldaten die Stadt verteidigt haben.<br><br>AcI: dicere + Akkusativ + Infinitiv Perfekt (defendisse)"
    },
    {
        id: "lu02_17",
        typ: "lueckenubung",
        satz: "Civitas consulem hostes _____ pellisse.",
        verb: "erfahren = cognoscere (Präsens, 3. Person Singular)",
        optionen: ["cognoscit", "cognoscet", "cognovit", "cognoscebat"],
        loesungen: ["cognoscit"],
        erklaerung: "Civitas consulem hostes pellisse cognoscit.<br><br>Die Bürgerschaft erkennt, dass der Konsul die Feinde vertrieben hat.<br><br>AcI: cognoscere + Akkusativ + Infinitiv Perfekt (pellisse)"
    },
    {
        id: "lu02_18",
        typ: "lueckenubung",
        satz: "Miles, _____ virtūs magna est, hostes terret.",
        verb: "Relativpronomen",
        optionen: ["cuius", "qua", "cui", "quem"],
        loesungen: ["cuius"],
        erklaerung: "Miles, cuius virtus magna est, hostes terret.<br><br>Der Soldat, dessen Tapferkeit groß ist, erschreckt die Feinde.<br><br>Relativpronomen: cuius (Genitiv Singular, wessen?)"
    },
    {
        id: "lu02_19",
        typ: "lueckenubung",
        satz: "Liber, _____ oratio clara est, omnibus placet.",
        verb: "Relativpronomen",
        optionen: ["cuius", "quae", "cui", "quem"],
        loesungen: ["cuius"],
        erklaerung: "Liber, cuius oratio clara est, omnibus placet.<br><br>Das Buch, dessen Sprache klar ist, gefällt allen.<br><br>Relativpronomen: cuius (Genitiv Singular, wessen?)"
    },
    {
        id: "lu02_20",
        typ: "lueckenubung",
        satz: "Magister pueros in villam _____.",
        verb: "schicken (Präsens, 3. Person Singular)",
        optionen: ["mittit", "mittebat", "misit", "mittet"],
        loesungen: ["mittit"],
        erklaerung: "Magister pueros in villam mittit.<br><br>Der Lehrer schickt die Jungen ins Haus.<br><br>mittere = schicken (Präsens, 3. Person Singular)"
    },

    // ===== SERIE 3: POSSESSIV- UND RELATIVPRONOMEN =====
    {
        id: "lu03_01",
        typ: "lueckenubung",
        satz: "Consul civitati _____ imperavit.",
        verb: "dienen",
        optionen: ["servire", "serviunt", "serviverunt", "servare"],
        loesungen: ["servire"],
        erklaerung: "Consul civitati servire imperavit.<br><br>Der Konsul befahl der Bürgerschaft zu dienen.<br><br>imperare + Dativ + Infinitiv"
    },
    {
        id: "lu03_02",
        typ: "lueckenubung",
        satz: "Milites nolebant hostes _____.",
        verb: "kämpfen (Gleichzeitigkeit im AcI)",
        optionen: ["pugnare", "pugnaverunt", "pugnant", "pugnaturi"],
        loesungen: ["pugnare"],
        erklaerung: "Milites nolebant hostes pugnare.<br><br>Die Soldaten wollten nicht, dass die Feinde kämpfen.<br><br>AcI: nolle + Akkusativ + Infinitiv (Gleichzeitigkeit)"
    },
    {
        id: "lu03_03",
        typ: "lueckenubung",
        satz: "mulier, _____ pacem facit, celebris est.",
        verb: "Relativpronomen",
        optionen: ["quae", "qui", "quod", "quam"],
        loesungen: ["quae"],
        erklaerung: "mulier, quae pacem facit, celebris est.<br><br>Die Frau, die den Frieden stiftet, ist berühmt.<br><br>Relativpronomen: quae (Nominativ Singular Femininum, Subjekt des Relativsatzes)"
    },
    {
        id: "lu03_04",
        typ: "lueckenubung",
        satz: "Marītī, _____ coniūgēs trīstēs sunt, manent.",
        verb: "Relativpronomen (Genitiv Plural)",
        optionen: ["quorum", "quas", "quos", "quarum"],
        loesungen: ["quorum"],
        erklaerung: "Mariti, quorum coniuges tristes sunt, manent.<br><br>Die Ehemänner, deren Ehefrauen traurig sind, bleiben.<br><br>Relativpronomen: quorum (Genitiv Plural Maskulinum, wessen?)"
    },
    {
        id: "lu03_05",
        typ: "lueckenubung",
        satz: "Mulierēs, _____ virī grātiās agunt, placidae sunt.",
        verb: "Relativpronomen (Dativ Plural)",
        optionen: ["quibus", "quas", "quae", "quorum"],
        loesungen: ["quibus"],
        erklaerung: "Mulieres, quibus viri gratias agunt, placidae sunt.<br><br>Die Frauen, denen die Männer danken, sind friedlich.<br><br>Relativpronomen: quibus (Dativ Plural, wem?)"
    },
    {
        id: "lu03_06",
        typ: "lueckenubung",
        satz: "Puerī _____ libris gaudent.",
        verb: "Possessivpronomen (gaudere -> verlangt Ablativ)",
        optionen: ["suis", "suos", "suum", "suae"],
        loesungen: ["suis"],
        erklaerung: "Pueri suis libris gaudent.<br><br>Die Jungen freuen sich über ihre Bücher.<br><br>Possessivpronomen: suis (Ablativ Plural, ihre)"
    },
    {
        id: "lu03_07",
        typ: "lueckenubung",
        satz: "Mulier cum _____ marītō ambulat.",
        verb: "Possessivpronomen (ihrem)",
        optionen: ["suo", "suum", "suam", "suus"],
        loesungen: ["suo"],
        erklaerung: "Mulier cum suo marito ambulat.<br><br>Die Frau geht mit ihrem Ehemann spazieren.<br><br>Possessivpronomen: suo (Ablativ Singular Maskulinum, mit ihrem)"
    },
    {
        id: "lu03_08",
        typ: "lueckenubung",
        satz: "Magister _____ discipulum laudat.",
        verb: "Possessivpronomen (Akkusativ Singular)",
        optionen: ["suum", "suam", "suis", "suus"],
        loesungen: ["suum"],
        erklaerung: "Magister suum discipulum laudat.<br><br>Der Lehrer lobt seinen Schüler.<br><br>Possessivpronomen: suum (Akkusativ Singular Maskulinum, seinen)"
    },
    {
        id: "lu03_09",
        typ: "lueckenubung",
        satz: "Marītus domum _____.",
        verb: "ornare (3. Person Singular, Präsens)",
        optionen: ["ornat", "ornabit", "ornavit", "ornatis"],
        loesungen: ["ornat"],
        erklaerung: "Maritus domum ornat.<br><br>Der Ehemann schmückt das Haus.<br><br>ornare = schmücken (Präsens, 3. Person Singular)"
    },
    {
        id: "lu03_10",
        typ: "lueckenubung",
        satz: "Paucī virī _____.",
        verb: "certare",
        optionen: ["certant", "certabunt", "certantur", "certaverunt"],
        loesungen: ["certant"],
        erklaerung: "Paucī virī certant.<br><br>Die wenigen Männer kämpfen.<br><br>certare = kämpfen (Präsens, 3. Person Plural)"
    },
    {
        id: "lu03_11",
        typ: "lueckenubung",
        satz: "Mihi _____ domus est.",
        verb: "schönes (Haus) – Dativ des Besitzes",
        optionen: ["pulchra", "pulchrum", "pulcher", "pulchris"],
        loesungen: ["pulchra"],
        erklaerung: "Mihi pulchra domus est.<br><br>Mir gehört ein schönes Haus.<br><br>Dativ des Besitzes: mihi = mir, pulchra domus = Nominativ Singular Femininum"
    },
    {
        id: "lu03_12",
        typ: "lueckenubung",
        satz: "mihi _____ novus liber dē arte oratoria.",
        verb: "Dativ des Besitzes (mit 'esse')",
        optionen: ["est", "sunt", "erat", "erant"],
        loesungen: ["est"],
        erklaerung: "Mihi est novus liber de arte oratoria.<br><br>Ich habe ein neues Buch über die Kunst der Rhetorik.<br><br>Dativ des Besitzes: mihi = mir, est = ist (Singular, da liber = Buch)"
    },
    {
        id: "lu03_13",
        typ: "lueckenubung",
        satz: "arbor prope flūmen magnitūdinem _____.",
        verb: "habere (Präsens)",
        optionen: ["habet", "habebat", "habent", "habuit"],
        loesungen: ["habet"],
        erklaerung: "Arbor prope flumen magnitudinem habet.<br><br>Der Baum am Fluss hat eine beträchtliche Größe.<br><br>habere = haben (Präsens, 3. Person Singular)"
    },
    {
        id: "lu03_14",
        typ: "lueckenubung",
        satz: "Paucīs _____ familiāribus senex fābulam dē bellō narrat.",
        verb: "dein - Possessivpronomen (Dativ Plural)",
        optionen: ["tuis", "tuorum", "tui", "tuos"],
        loesungen: ["tuis"],
        erklaerung: "Paucis tuis familiaribus senex fabulam de bello narrat.<br><br>Der alte Mann erzählt wenigen deiner Freunde eine Geschichte über den Krieg.<br><br>Possessivpronomen: tuis (Dativ Plural, deinen)"
    },
    {
        id: "lu03_15",
        typ: "lueckenubung",
        satz: "Mīlitēs cum _____ sociīs ad lītus trahuntur.",
        verb: "ihren - Possessivpronomen (Ablativ Plural)",
        optionen: ["suis", "suum", "sibi", "suos"],
        loesungen: ["suis"],
        erklaerung: "Milites cum suis sociis ad litus trahuntur.<br><br>Die Soldaten werden mit ihren Gefährten zum Strand gezogen.<br><br>Possessivpronomen: suis (Ablativ Plural, mit ihren)"
    },
    {
        id: "lu03_16",
        typ: "lueckenubung",
        satz: "Mīlitēs, _____ imperātor pācem negāre nōn vult, ad flūmen currunt.",
        verb: "Relativpronomen",
        optionen: ["quibus", "qui", "quas", "quorum"],
        loesungen: ["quibus"],
        erklaerung: "Milites, quibus imperator pacem negare non vult, ad flumen currunt.<br><br>Die Soldaten, denen der Feldherr den Frieden nicht verweigern will, laufen zum Fluss.<br><br>Relativpronomen: quibus (Dativ Plural, denen)"
    },
    {
        id: "lu03_17",
        typ: "lueckenubung",
        satz: "Gentēs, _____ mores barbarī sunt, multōs hostēs habent.",
        verb: "Relativpronomen",
        optionen: ["quarum", "quorum", "quas", "quibus"],
        loesungen: ["quarum"],
        erklaerung: "Gentes, quarum mores barbari sunt, multos hostes habent.<br><br>Die Völker, deren Sitten barbarisch sind, haben viele Feinde.<br><br>Relativpronomen: quarum (Genitiv Plural Femininum, deren)"
    }
];
