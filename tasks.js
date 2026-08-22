// ===== POOL: DRAG & DROP AUFGABEN =====
const DRAGDROP_POOL = [{
id: 'dd1',
typ: 'dragdrop',
aufgabe: 'Sie hat gekämpft',
richtigeAntwort: 'pugnavit',
optionen: ['pugnaverit', 'pugnavit', 'pugnabat', 'pugnavuit']
},
{
id: 'dd2',
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
id: 'dd3',
typ: 'dragdrop',
aufgabe: 'Er hat gesiegt',
richtigeAntwort: 'vicit',
optionen: ['vicit', 'vincit', 'vincet', 'vicitur']
},
{
id: 'dd4',
typ: 'dragdrop',
aufgabe: 'Wir hatten geliebt',
richtigeAntwort: 'amaveramus',
optionen: ['amaveramus', 'amavimus', 'amabamus', 'amaveritis']
},
{
id: 'dd5',
typ: 'dragdrop',
aufgabe: 'Hilf mir, bitte',
richtigeAntwort: 'laudabis',
optionen: ['Auxilium me da, quaeso', 'iuva me, quaeso', 'Adiuva te, quaeso.', 'iuva mihi, quaeso']
},
{
id: 'dd6',
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
id: 'dd7',
typ: 'dragdrop',
aufgabe: 'Er hatte gesagt',
richtigeAntwort: 'dixerat',
optionen: ['dixerat', 'dicit', 'dixit', 'diceret']
},
{
id: 'dd8',
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
id: 'dd9',
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
id: 'dd10',
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
id: 'dd11',
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
id: 'dd12',
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
id: 'dd13',
typ: 'dragdrop',
aufgabe: 'Er behauptet, dass sie den Brief geschrieben hat.',
richtigeAntwort: 'Affirmat eam epistulam scripsisse.',
optionen: [
'Affirmat eam epistulam scripsisse.',
'Affirmat eam epistulam scribere.',
'Affirmat eam epistulam scribet.',
'Affirmat eam epistulam scribere debet.'
]
},
{
id: 'dd14',
typ: 'dragdrop',
aufgabe: 'Wir hörten, dass du gesungen hast.',
richtigeAntwort: 'Audimus te cantare.',
optionen: [
'Audibamus te cantavit.',
'Audibamus te cantavisse.',
'Audibamus te cantabas.',
'Audibamus te cantare potes.'
]
},
{
id: 'dd15',
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
id: 'dd16',
typ: 'dragdrop',
aufgabe: 'Ich habe dir viele Briefe geschrieben.',
richtigeAntwort: 'Tibi multas epistulas misi.',
optionen: [
'Tibi multas epistulas misi.',
'multas epistulas misi a te.',
'Tibi multas epistulas mitto.',
'Tecum multas epistulas miseram.',
},
{
id: 'dd17',
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
id: 'dd18',
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
id: 'dd19',
typ: 'dragdrop',
aufgabe: 'Sie sehen, dass der Lehrer kommt.',
richtigeAntwort: 'Vident magistrum venire.',
optionen: [
'Vident magistrum venire.',
'Vident magistrum venisse.',
'Vident magistrum veniet.',
'Vident magistrum venit.'
]
},
{
id: 'dd20',
typ: 'dragdrop',
aufgabe: 'Er wurde zum König ernannt. <br>(creare = erschaffen, gebären; creatus = PPP = hier im Kontext: ernannt)',
richtigeAntwort: 'Rex creatus est.',
optionen: [
'Rex creatus est.',
'Rex creavit est.',
'Rex creat.',
'Rex creavit.'
]
},
{
id: 'dd21',
typ: 'dragdrop',
aufgabe: 'Sie wurde zur Königin gekrönt. <br>(facere = machen, tun; facta = PPP = gemacht)',
richtigeAntwort: 'Regina facta est.',
optionen: [
'Regina facta est.',
'Regina facit est.',
'Regina fiet.',
'Regina faciet.'
]
},
{
id: 'dd22',
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
id: 'dd23',
typ: 'dragdrop',
aufgabe: ''Fortis dicta est. <br>(dicere = sagen, bezeichnen; dicta = PPP = bezeichnet)'',
richtigeAntwort: 'Fortis dicta est.',
optionen: [
'Sie wurde als mutig bezeichnet.',
'Er wurde mutig bezeichnet.',
'Es wurde als mutig bezeichnet.',
'Sie wurde als mutig bezeichnet.',
]
},
{
id: 'dd24',
typ: 'dragdrop',
aufgabe: 'Er wurde zum Konsul ernannt. <br>(creare = erschaffen, gebären; creatus = PPP = hier im Kontext: ernannt)',
richtigeAntwort: 'Consul creatus est.',
optionen: [
'Consul creatus est.',
'Consul creavit est.',
'Consul creabitur.',
'Consul creavit.'
]
},
{
id: 'dd25',
typ: 'dragdrop',
aufgabe: 'Liberi liberos libros legunt.',
richtigeAntwort: 'Die freien Kinder lesen Bücher.',
optionen: [
'Die freien Kinder lesen Bücher.',
'Die Kinder lesen freie Bücher.',
'Die Kinder der Freigelassenen lesen Bücher.',
'Die Kinder lesen Bücher der Kinder.',
]
},
{
id: 'dd26',
typ: 'dragdrop',
aufgabe: 'liberi',
richtigeAntwort: 'die Kinder, die Freien, des Buches',
optionen: [
'der Kinder, frei (Adjektiv), die Bücher',
'die Kinder, die Freien, des Buches',
'der Kinder, der Freien, der Bücher',
'des Kindes, frei (Adjektiv), des Buches',
]
},
{
id: 'dd27',
typ: 'dragdrop',
aufgabe: 'Ego moderator dico: plures lacrimas!',
richtigeAntwort: 'Ich als Regisseur sage: mehr Tränen!',
optionen: [
'Ich als Regisseur sage: mehr Tränen!',
'Der Regisseur sagt mir: Tränen sind mehr!',
'Ich als Regisseur sage: zu viele Gedichte!',
'Ich als Regie führender sage: mehr Lieder!',
]
},
{
id: 'dd28',
typ: 'dragdrop',
aufgabe: 'Servi Chrysippum secum trahunt',
richtigeAntwort: 'Die Sklaven schleppen Chrysippus mit sich. ',
optionen: [
'Die Sklaven schleppen Chrysippus mit sich. '
'Die Sklaven wurden durch Chrysippus mitgezogen.',
'Die Sklaven schleppen Chrysipp ihnen nach.',
Der Sklave Chrysippus wird von ihnen mitgezogen.',
]
},
{
id: 'dd29',
typ: 'dragdrop',
aufgabe: 'Avi nostri maiores nostri sunt',
richtigeAntwort: 'Unsere Großväter sind unsere Vorfahren.',
optionen: [
'Unsere Großväter sind größer als wir.',
'Unsere Großväter waren unsere Vorfahren.',
'Unsere Großväter sind unsere Vorfahren.',
' Die Vorfahren des Großvaters sind (auch) unsere (Vorfahren).'
]
},
{
id: 'dd30',
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
id: 'dd31',
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
id: 'dd32',
typ: 'dragdrop',
aufgabe: 'Wir sehen die Männer fliehen.',
richtigeAntwort: 'videmus viros fugere',
optionen: [
'videmus viros fugere',
'videmus viros fugient',
'videmus viros fugereunt',
'videmus viros fugit'
]
},
{
id: 'dd33',
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
id: 'dd34',
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
id: 'dd35',
typ: 'dragdrop',
aufgabe: 'Pomponia verbis non placidis, sed iratis certat',
richtigeAntwort: 'Pomponia kämpfte mit nicht friedlichen, sondern zornigen Worten.',
optionen: [
'Pomponia kämpfte mit nicht friedlichen, sondern zornigen Worten.',
'Pomponia streitet nicht wegen der Worte, sondern weil sie zornig ist.',
'Pomponia streitet mit Worten, die Dir nicht gefallen sondern Dich zürnen.',
'Pomponia streitet mit nicht friedlichen, sondern zornigen Worten.'
]
},
{
id: 'dd36',
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
id: 'dd37',
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
id: 'dd38',
typ: 'dragdrop',
aufgabe: 'Femina bona et egregia magna fecit.',
richtigeAntwort: 'Die gute und ausgezeichnete Frau hat große Dinge getan.',
optionen: [
'Die Frau macht gute und herausgehobene Dinge.',
'Die gute und ausgezeichnete Frau hat große Dinge getan.',
'Die gute und ausgezeichnete Frau vollbringt große Taten.',
'Die gute und fromme Frau hat großes getan.',
]
},
{
id: 'dd39',
typ: 'dragdrop',
aufgabe: 'Omnia paravi, nihil restat',
richtigeAntwort: 'Ich habe alles vorbereitet, nichts bleibt übrig.',
optionen: [
'Ich habe alles vorbereitet, nichts bleibt übrig.',
'Ich habe alle vorbereitet, nichts bleibt übrig.',
'Ich bereite alles vor, nichts bleibt übrig.',
'Ich habe alles bereitgestellt, so dass nicht übrig ist.',
]
}
];

// ===== POOL: LÜCKENÜBUNG AUFGABEN =====
const LUECKENUBUNG_POOL = [{
id: 'lu1',
typ: 'lueckenubung',
satz: 'Servus _____ dominum.',
verb: 'gehorsam sein (Präsens, 3. Person Singular)',
loesungen: ['obedit'],
erklaerung: 'Der Sklave gehorcht dem Herrn.'
},
{
id: 'lu2',
typ: 'lueckenubung',
satz: 'Puer _____ in horto.',
verb: 'spielen (Imperfekt, 3. Person Singular)',
loesungen: ['ludebat'],
erklaerung: 'Der Junge spielte im Garten.'
},
{
id: 'lu3',
typ: 'lueckenubung',
satz: 'Ego _____ librum.',
verb: 'legere (Präsens, 1. Person Singular)',
loesungen: ['lego'],
erklaerung: 'Ich lese ein Buch.'
},
{
id: 'lu4',
typ: 'lueckenubung',
satz: 'Tu _____ epistolam.',
verb: 'scribere (Imperfekt, 2. Person Singular)',
loesungen: ['scribebas'],
erklaerung: 'Du schriebst einen Brief.'
},
{
id: 'lu5',
typ: 'lueckenubung',
satz: 'Pueri _____ in villam.',
verb: 'venire (Perfekt, 3. Person Plural)',
loesungen: ['venerunt'],
erklaerung: 'Die Jungen kamen ins Haus.'
},
{
id: 'lu6',
typ: 'lueckenubung',
satz: 'Nos _____ librum.',
verb: 'legere (Plusquamperfekt, 1. Person Plural)',
loesungen: ['legeramus'],
erklaerung: 'Wir hatten ein Buch gelesen.'
},
{
id: 'lu7',
typ: 'lueckenubung',
satz: 'Vos _____ amicos.',
verb: 'videre (Präsens, 2. Person Plural)',
loesungen: ['videtis'],
erklaerung: 'Ihr werdet die Freunde sehen.'
},
{
id: 'lu8',
typ: 'lueckenubung',
satz: 'Magister _____ discipulum.',
verb: 'rufen (Präsens, 3. Person Singular)',
loesungen: ['vocat'],
erklaerung: 'Der Lehrer ruft den Schüler.'
},
{
id: 'lu9',
typ: 'lueckenubung',
satz: 'Ego _____ epistolam.',
verb: 'schreiben (Perfekt, 1. Person Singular)',
loesungen: ['scripsi'],
erklaerung: 'Ich schrieb einen Brief.'
},
{
id: 'lu10',
typ: 'lueckenubung',
satz: 'Puellae _____ rosam.',
verb: 'amare (Imperfekt, 3. Person Plural)',
loesungen: ['amabant'],
erklaerung: 'Die Mädchen liebten die Rose.'
},
{
id: 'lu11',
typ: 'lueckenubung',
satz: 'Dominus _____ servum.',
verb: 'loben (Perfekt, 3. Person Singular)',
loesungen: ['laudavit'],
erklaerung: 'Der Herr hat den Sklaven gelobt.'
},
{
id: 'lu12',
typ: 'lueckenubung',
satz: 'Magister discipulos librum legere _____.',
verb: 'dicere (Präsens, 3. Person Singular, ACI)',
loesungen: ['dicit'],
erklaerung: 'Der Lehrer sagt, dass die Schüler das Buch lesen.'
},
{
id: 'lu13',
typ: 'lueckenubung',
satz: 'Ego _____ librum.',
verb: 'lesen (Präsens, 1. Person Singular)',
loesungen: ['lego'],
erklaerung: 'Ich lese ein Buch.'
},
{
id: 'lu14',
typ: 'lueckenubung',
satz: 'Tu _____ epistolam.',
verb: 'schreiben (Imperfekt, 2. Person Singular)',
loesungen: ['scribebas'],
erklaerung: 'Du schriebst einen Brief.'
},
{
id: 'lu15',
typ: 'lueckenubung',
satz: 'Pueri _____ in villam.',
verb: 'kommen (Perfekt, 3. Person Plural)',
loesungen: ['venerunt'],
erklaerung: 'Die Jungen kamen ins Haus.'
},
{
id: 'lu16',
typ: 'lueckenubung',
satz: 'Nos _____ librum.',
verb: 'lesen (Plusquamperfekt, 1. Person Plural)',
loesungen: ['legeramus'],
erklaerung: 'Wir hatten ein Buch gelesen.'
},
{
id: 'lu17',
typ: 'lueckenubung',
satz: 'Magister _____ discipulum.',
verb: 'rufen (Präsens, 3. Person Singular)',
loesungen: ['vocat'],
erklaerung: 'Der Lehrer ruft den Schüler.'
},
{
id: 'lu18',
typ: 'lueckenubung',
satz: 'Ego _____ epistolam.',
verb: 'schreiben (Perfekt, 1. Person Singular)',
loesungen: ['scripsi'],
erklaerung: 'Ich schrieb einen Brief.'
},
{
id: 'lu19',
typ: 'lueckenubung',
satz: 'Puellae _____ rosam.',
verb: 'lieben (Imperfekt, 3. Person Plural)',
loesungen: ['amabant'],
erklaerung: 'Die Mädchen liebten die Rose.'
},
{
id: 'lu20',
typ: 'lueckenubung',
satz: 'Dominus _____ servum.',
verb: 'loben (Plusquamperfekt, 3. Person Singular)',
loesungen: ['laudaverat'],
erklaerung: 'Der Herr hatte den Sklaven gelobt.'
},
{
id: 'lu21',
typ: 'lueckenubung',
satz: 'Vos _____ amicos.',
verb: 'sehen (Präsens, 2. Person Plural)',
loesungen: ['videtis'],
erklaerung: 'Ihr seht die Freunde.'
},
{
id: 'lu22',
typ: 'lueckenubung',
satz: 'Miles _____ gladio.',
verb: 'kämpfen (Perfekt, 3. Person Singular)',
loesungen: ['pugnavit'],
erklaerung: 'Der Soldat kämpfte mit dem Schwert.'
},
{
id: 'lu23',
typ: 'lueckenubung',
satz: 'Magister discipulos librum legere _____.',
verb: 'sagen (Präsens, 3. Person Singular)',
loesungen: ['dicit'],
erklaerung: 'Der Lehrer sagt, dass die Schüler das Buch lesen.'
},
{
id: 'lu24',
typ: 'lueckenubung',
satz: 'Magister discipulos librum legere _____.',
verb: 'sagen (Imperfekt, 3. Person Singular)',
loesungen: ['dicebat'],
erklaerung: 'Der Lehrer sagte, dass die Schüler das Buch lasen.'
},
{
id: 'lu25',
typ: 'lueckenubung',
satz: 'Magister discipulos librum legere _____.',
verb: 'sagen (Perfekt, 3. Person Singular)',
loesungen: ['dixit'],
erklaerung: 'Der Lehrer sagte, dass die Schüler das Buch gelesen haben.'
},
{
id: 'lu26',
typ: 'lueckenubung',
satz: 'Magister discipulos librum legere _____.',
verb: 'sagen (Plusquamperfekt, 3. Person Singular)',
loesungen: ['dixerat'],
erklaerung: 'Der Lehrer hatte gesagt, dass die Schüler das Buch gelesen hatten.'
},
{
id: 'lu27',
typ: 'lueckenubung',
satz: 'Magister eum librum legere _____.',
verb: 'sagen (Präsens)',
loesungen: ['dicit'],
erklaerung: 'Der Lehrer sagt, dass er das Buch liest.'
},
{
id: 'lu28',
typ: 'lueckenubung',
satz: 'Magistri eam rosam amare _____.',
verb: 'glauben (Imperfekt)',
loesungen: ['putabant'],
erklaerung: 'Die Lehrerinnen glaubten, dass sie die Rose liebte.'
},
{
id: 'lu29',
typ: 'lueckenubung',
satz: 'Magister se etiam ipsum discipulum esse _____.',
verb: 'wissen (Perfekt, 3. Person Singular)',
loesungen: ['scivit'],
erklaerung: 'Der Lehrer wusste, dass er ein Schüler war.'
},
{
id: 'lu30',
typ: 'lueckenubung',
satz: 'Magister nos venire _____.',
verb: 'befehlen = iubere, ibeo, iussi (Plusquamperfekt, 3. Person Singular)',
loesungen: ['iusserat'],
erklaerung: 'Der Lehrer hatte uns befohlen zu kommen.'
},
{
id: 'lu31',
typ: 'lueckenubung',
satz: 'Magister vos pugnare _____.',
verb: 'bitten (Präsens, 3. Person Singular)',
loesungen: ['rogat'],
erklaerung: 'Der Lehrer bittet euch zu kämpfen.'
},
{
id: 'lu32',
typ: 'lueckenubung',
satz: 'Magister pueros in villam venire _____.',
verb: 'befehlen (Imperfekt, 3. Person Singular)',
loesungen: ['iubebat'],
erklaerung: 'Der Lehrer befahl den Jungen, ins Haus zu kommen.'
},
{
id: 'lu33',
typ: 'lueckenubung',
satz: 'Consul milites hostes _____ pugnavisse.',
verb: 'glauben (Präsens)',
loesungen: ['credit'],
erklaerung: 'Der Konsul glaubt, dass die Soldaten gegen die Feinde gekämpft haben.'
},
{
id: 'lu34',
typ: 'lueckenubung',
satz: 'Magister pueros librum _____ scripsisse.',
verb: 'wissen (Präsens, 3. Person Singular)',
loesungen: ['scit'],
erklaerung: 'Der Lehrer weiß, dass die Jungen das Buch geschrieben haben.'
},
{
id: 'lu35',
typ: 'lueckenubung',
satz: 'Patres legatum hostes _____ vicisse.',
verb: 'hören (Präsens, 3. Person)',
loesungen: ['audiunt'],
erklaerung: 'Die Väter hören, dass der Gesandte die Feinde besiegt hat.'
},
{
id: 'lu36',
typ: 'lueckenubung',
satz: 'Imperator milites urbem _____ defendisse.',
verb: 'behaupten (Präsens, 3. Person Singular)',
loesungen: ['dicit'],
erklaerung: 'Der Feldherr behauptet, dass die Soldaten die Stadt verteidigt haben.'
},
{
id: 'lu37',
typ: 'lueckenubung',
satz: 'Civitas consulem hostes _____ pellisse.',
verb: 'erfahren = cognoscere (Präsens, 3. Person Singular)',
loesungen: ['cognoscit'],
erklaerung: 'Die Bürgerschaft erkennt, dass der Konsul die Feinde vertrieben hat.'
},
{
id: 'lu38',
typ: 'lueckenubung',
satz: 'Miles, _____ virtūs magna est, hostes terret.',
verb: 'Relativpronomen',
loesungen: ['cuius'],
erklaerung: 'Der Soldat, dessen Tapferkeit groß ist, erschreckt die Feinde.'
},
{
id: 'lu39',
typ: 'lueckenubung',
satz: 'Liber, _____ oratio clara est, omnibus placet.',
verb: 'Relativpronomen',
loesungen: ['cuius'],
erklaerung: 'Das Buch, dessen Sprache klar ist, gefällt allen.'
},
{
id: 'lu40',
typ: 'lueckenubung',
satz: 'Magister pueros in villam _____.',
verb: 'schicken (Präsens, 3. Person Singular)',
loesungen: ['mittit'],
erklaerung: 'Der Lehrer schickt die Jungen ins Haus.'
},
{
id: 'lu41',
typ: 'lueckenubung',
satz: 'Consul civitati _____ imperavit.',
verb: 'dienen',
loesungen: ['servire'],
erklaerung: 'Der Konsul befahl der Bürgerschaft zu dienen.'
},
{
id: 'lu42',
typ: 'lueckenubung',
satz: 'Milites hostes _____ pugnare nolebant.',
verb: 'zwingen (Imperfekt, 3. Person Plural)',
loesungen: ['cogebant'],
erklaerung: 'Die Soldaten wollten die Feinde nicht zwingen zu kämpfen.'
}
];
