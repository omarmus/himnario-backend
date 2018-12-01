'use strict';

let items = [
  {
    'id_hymn': 1,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Santo, Santo, Santo;\nDios Omnipotente;\ncanto de mañana\ntu excelsa majestad;\nSanto, Santo, Santo,\nfuerte y clemente,\nDios sobre todo,\nRey de eternidad.'
  },
  {
    'id_hymn': 1,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Santo, Santo, Santo;\nángeles te adoran;\nechan sus coronas\ndel trono en derredor;\nmiles y millones\nante ti se postran;\ntú que eras, y eres,\ny has de ser, Señor.'
  },
  {
    'id_hymn': 1,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Santo, Santo, Santo;\naunque estés velado;\naunque el ojo humano\ntu faz no pueda ver;\nsólo tu eres Santo,\ncomo tú no hay otro;\npuro es tu amor,\nperfecto es tu poder.'
  },
  {
    'id_hymn': 2,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Mirando al cielo\ncuajado de estrellas\nse turba el alma con su esplendor.\nSu voz solemne el\nmisterio impone\ny siente a Dios el corazón.\nLa nube lenta que cruza el espacio,\ny el mar que eleva su clamor,\nla flor y el agua y el monte soberbio\nle cantan himnos a su Dios\nle cantan himnos a su Dios.'
  },
  {
    'id_hymn': 3,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Señor, mi Dios,\nal contemplar los cielos\ny astros mil\ngirando en derredor,\ny al oírte en\nretumbantes truenos,\ny al contemplar el sol\nen su esplendor.'
  },
  {
    'id_hymn': 3,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Te amo y proclamo por\ntu gran poder.\n¡Cuán grande eres,\noh, Jehová!\nTe exalto a ti\ncon toda mi alma y ser:\n¡Grande eres tú!\n¡Grande eres tú!.'
  },
  {
    'id_hymn': 3,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Al contemplar\narroyos y florestas,\nlos pajarillos\noigo en su cantar,\ny alrededor percibo\nmil bellezas,\ny brisa suave\nviene a refrescar.'
  },
  {
    'id_hymn': 3,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Y cuando pienso en ti,\nSeñor querido,\nquien por mis culpas\nen penosa cruz\ndolor sufriste que hombre\nno ha sufrido,\n¡Cuánto te quiero,\namado y buen Jesús!'
  },
  {
    'id_hymn': 3,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Y cuando vengas\nen brillante gloria\nme llevarás\ncon gozo a mi hogar.\nTe alabaré\npor darme la victoria;\ntu gran poder\ny gloria he de cantar.'
  },
  {
    'id_hymn': 4,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Mi Creador, mi Rey\nte debo lo que soy;\nde amor la fuente es tu ley\ny en ti contento estoy;\nde amor la fuente es tu ley\ny en ti contento estoy.'
  },
  {
    'id_hymn': 4,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Tu criatura soy,\nmi vida está en ti;\nel don que me entregas hoy\nmás vale que el rubí;\nel don que me entregas hoy\nmás vale que el rubí.'
  },
  {
    'id_hymn': 4,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Inspira mi alma, oh Dios,\ncon celo y virtud,\ny alzaré a ti mi voz\nen santa gratitud;\ny alzaré a ti mi voz\nen santa gratitud.'
  },
  {
    'id_hymn': 5,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Los cielos proclaman\nla gloria de Dios,\nel vasto firmamento\nsu majestad revela;\nlos astros que giran\nen perfecto orbe,\npor siglos de siglos\ncantan tu loor.\nSin fatigar su luz el sol\nconfirma el poder de Dios;\na todo ser da su calor,\ny magnifica al Creador.'
  },
  {
    'id_hymn': 5,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Al descender\nla sombra de la noche,\nla luna refleja\nde Dios el esplendor.\nY luego el alba,\nbella claridad,\nde Dios denuncia\neterna majestad.\nLa silenciosa inmensidad\nla huella es de la Deidad;\nla magnitud de la creación\nalaba a Dios con profusión.'
  },
  {
    'id_hymn': 5,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cuán grande es tu nombre,\nJehová Omnipotente,\nque todo lo formaste\npara nuestro bien,\ny desde heladas\ncumbres de montañas\nhasta abismal silencio\ndel profundo mar,\nlas maravillas del Creador\neternamente nos dirán:\n“¡La mano del supremo ser,\nque nos formó, divina es!”.'
  },
  {
    'id_hymn': 6,
    'order': 1,
    'type': 'STROPHE',
    'content': 'A Dios loores entonad\nen su sitial de honor,\nque abre hoy su Empíreo\ny al Hijo nos envió,\ny al Hijo nos envió.'
  },
  {
    'id_hymn': 6,
    'order': 2,
    'type': 'STROPHE',
    'content': 'De su poder se despojó,\nes pobre e inferior;\nde un siervo toma el hábito\ndel mundo es el Creador\ndel mundo es el Creador.'
  },
  {
    'id_hymn': 6,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Un siervo Él y yo señor,\n¡vaya transformación!\n¿Podría ser más simpático,\nJesús al corazón\nJesús al corazón?.'
  },
  {
    'id_hymn': 7,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Se oye un canto en alta esfera:\n“En los cielos gloria a Dios;\nal mortal paz en la tierra”,\ncanta la celeste voz.\nCon los cielos alabemos\nal eterno Rey, cantemos\na Jesús, a nuestro bien,\ncon el coro de Belén.'
  },
  {
    'id_hymn': 7,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Canta la celeste voz:\n“¡En los cielos gloria a Dios!”.'
  },
  {
    'id_hymn': 7,
    'order': 2,
    'type': 'STROPHE',
    'content': 'El Señor de los señores,\nel Ungido celestial,\na salvar los pecadores\nvino al seno virginal.\n¡Gloria al Verbo encarnado,\nen humanidad velado!\n¡Gloria al Santo de Israel,\ncuyo nombre es Emanuel!'
  },
  {
    'id_hymn': 7,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Príncipe de paz eterna,\n¡Gloria a ti, Señor Jesús!\nEntregando el alma tierna\ntú nos traes vida y luz.\nHas tu majestad dejado,\ny a buscarnos te has dignado;\npara darnos el vivir\na la muerte quieres ir.'
  },
  {
    'id_hymn': 8,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Noche de paz, noche de amor.\nTodo duerme en derredor.\nEntre los astros que esparcen su luz,\nbella, anunciando al niñito Jesús,\nbrilla la estrella de paz\nbrilla la estrella de paz.'
  },
  {
    'id_hymn': 8,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Noche de paz, noche de amor.\nOye humilde, fiel pastor:\ncoros celestes proclaman salud,\ngracias y glorias en gran plenitud,\npor nuestro buen Redentor\npor nuestro buen Redentor.'
  },
  {
    'id_hymn': 8,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Noche de paz, noche de amor.\nVed qué bello resplandor\nluce en el rostro del niño Jesús,\nen el pesebre, del mundo la Luz;\nastro de eterno fulgor\nastro de eterno fulgor .'
  },
  {
    'id_hymn': 9,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡En dulce júbilo cantad,\nhoy cristianos alabad!\n¡Escuchad con atención\npues Cristo ha nacido hoy!\nEntre humildes Él está\ny un pesebre es su hogar.\n¡Ha nacido hoy\nCristo el Salvador!'
  },
  {
    'id_hymn': 9,
    'order': 2,
    'type': 'STROPHE',
    'content': '¡En dulce júbilo cantad,\nhoy cristianos alabad!\n¡Bendecid por el gran don\npues Cristo es el don de Dios!\nAl nacer como mortal\nÉl abre el reino celestial.\n¡Ha nacido hoy\nCristo el Salvador!'
  },
  {
    'id_hymn': 9,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡En dulce júbilo cantad,\nhoy cristianos alabad!\nYa la muerte no es más\npues Él nos libra del pecar.\n¡Pronto, todos acudid,\na obtener perdón sin fin!\n¡Ha nacido hoy\nCristo el Salvador!'
  },
  {
    'id_hymn': 10,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Venid, fieles, todos\na Belén marchemos\nde gozo triunfantes,\nhenchidos de amor;\ny al Rey de los cielos\nhumilde le veremos'
  },
  {
    'id_hymn': 10,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Venid, adoremos,\nvenid, adoremos.\nVenid, adoremos a\nCristo el Señor.'
  },
  {
    'id_hymn': 10,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cantad, jubilosas,\ncélicas criaturas;\nresuenen los cielos\ncon vuestra canción:\n¡Al Dios bondadoso\ndad gloria en las alturas!'
  },
  {
    'id_hymn': 10,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Jesús, celebramos\ntu bendito nombre\ncon himnos solemnes\nde grato loor;\npor siglos eternos\nadórete el hombre.'
  },
  {
    'id_hymn': 11,
    'order': 1,
    'type': 'STROPHE',
    'content': 'A medianoche resonó\nglorioso y sin igual\nun canto angélico de amor,\nsublime y divinal;\nbrillante luz resplandeció\nen densa oscuridad,\ny a los pastores anunció\nla voz angelical.'
  },
  {
    'id_hymn': 11,
    'order': 2,
    'type': 'STROPHE',
    'content': '“Alzad la vista sin temor,\nmortales por doquier;\nmensaje de gran gozo os doy,\nque es para todo ser:\nos ha nacido hoy en Belén,\nel pueblo de David,\nun Salvador y Redentor\nque es Cristo el adalid”.'
  },
  {
    'id_hymn': 11,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Mensaje grato proclamó\nceleste multitud,\nque por los campos resonó\ncon gozo y gran virtud:\n“¡En las alturas gloria a Dios\ny al mundo salvación,\nal hombre buena voluntad,\npaz, gozo y bendición!”.'
  },
  {
    'id_hymn': 12,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Siempre tan floreciente\ncual hermoso rosal,\nla Estrella del oriente\nsu amor brinda a raudal.\n¿oíste ya su voz?\nDe Isaí su linaje,\nÉl, Hijo es de Dios.'
  },
  {
    'id_hymn': 12,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Medianoche pasada\nSe oyó ya la canción,\ndel Niño y su llegada;\nRosa es de Sarón.\nNaciste en Belén;\nEstrella matutina,\na iluminarnos ven.'
  },
  {
    'id_hymn': 12,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Dios mío! ¿hasta cuándo\nlas lágrimas serán?\nLlévanos donde hay canto,\nPaz y tranquilidad.\nEn tu gloria y amor,\nte pido en oración:\nven, y llévanos hoy.'
  },
  {
    'id_hymn': 13,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Siente el alma puros goces,\nal oír, repetir,\ncelestiales voces:\n¡La salud os ha venido!\nOíd cantar, entonar:\n¡Cristo os ha nacido!'
  },
  {
    'id_hymn': 13,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Oíd la voz del tierno Niño\ncelestial, al mortal,\ndice con cariño:\n“¡Los dolores deja, hermano,\na mí ven, que tu bien\ntodo está en mi mano!”.'
  },
  {
    'id_hymn': 13,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Vamos llenos de contento,\nsin tardar, a admirar\nel sin par portento!\nA Él amemos, que nos ama;\nY su amor, el fulgor\nDe su estrella aclama.'
  },
  {
    'id_hymn': 14,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Del alto cielo, al descender,\nfelices nuevas a traer,\nmaravilloso es lo que sé\ny en mi cantar os lo diré:'
  },
  {
    'id_hymn': 14,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Un niño os ha nacido hoy,\nde virgen que Dios eligió;\ntan dulce es su parecer\nque vuestro gozo ha de ser.'
  },
  {
    'id_hymn': 14,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Es Jesucristo, el Señor,\nde todo mal el vencedor;\nnos libra de todo temor\ny nos rodea con su amor.'
  },
  {
    'id_hymn': 15,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Alzaos ya, portales de Sión,\nJesús gran Rey desea pasar;\na Él cantad con devoción\npues victorioso ha de entrar.'
  },
  {
    'id_hymn': 15,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Al Rey unidos proclamad,\nlos suyos viene a rescatar;\ndormidos ellos en verdad\npor Cristo han de despertar.'
  },
  {
    'id_hymn': 15,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Amante y Santo nuestro Dios,\nÉl, del caído, es Redentor;\nbondad y gracia da a nos,\nel manso y santo Salvador.'
  },
  {
    'id_hymn': 15,
    'order': 4,
    'type': 'STROPHE',
    'content': 'El corazón a Cristo abrid\nque entre en él para habitar\ny cuando Él llame acudid;\nservidle en todo vuestro actuar.'
  },
  {
    'id_hymn': 15,
    'order': 5,
    'type': 'STROPHE',
    'content': 'Ven pronto a mí, buen Salvador,\nentrego a ti mi existir;\nque pueda yo mostrar tu amor,\ny tu poder, en mí sentir.'
  },
  {
    'id_hymn': 16,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Oh ven, oh ven Emanuel,\nacude pronto a liberar,\nrescata a tu pueblo Israel;\nno le vayas a olvidar.'
  },
  {
    'id_hymn': 16,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Gozaos, gozaos.\nEmanuel vendrá a ti,\noh Israel.'
  },
  {
    'id_hymn': 16,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Ordéname Señor Jesús,\ncon gozo te obedeceré;\nalúmbreme tu clara luz\ny todo pronto entenderé.'
  },
  {
    'id_hymn': 16,
    'order': 3,
    'type': 'STROPHE',
    'content': 'El Deseado eres tú\nque unes cada corazón;\ncon el poder de tu virtud\nlevantar puedes tu nación.'
  },
  {
    'id_hymn': 17,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Un día que el cielo sus glorias cantaba,\nun día que el mal imperaba más cruel,\nJesús descendió\ny al nacer de una virgen\nnos dio por su vida un ejemplo tan fiel.'
  },
  {
    'id_hymn': 17,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Vivo, me amaba; muerto, salvóme;\ny en el sepulcro mi mal enterró;\nresucitado, Él es mi justicia;\nun día Él viene, pues lo prometió.'
  },
  {
    'id_hymn': 17,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Un día lleváronle al monte calvario,\nun día enclaváronle sobre una cruz;\nsufriendo dolores y pena de muerte,\nexpiando el pecado, salvóme Jesús.'
  },
  {
    'id_hymn': 17,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Un día dejaron su cuerpo en el huerto,\ntres días en paz reposó de dolor;\nvelaban los ángeles sobre el sepulcro\nde mi única eterna esperanza, el Señor.'
  },
  {
    'id_hymn': 17,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Un día la tumba ocultarle no pudo,\nun día el ángel la piedra quitó;\nhabiendo Jesús ya a la muerte vencido,\na estar con su Padre,\nen su trono, ascendió.'
  },
  {
    'id_hymn': 18,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Oh rostro ensangrentado,\nimagen del dolor,\nque sufres resignado\nla burla y el furor!\nSoportas la tortura,\nla saña, la maldad;\nen tan cruel amargura,\n¡qué grande es tu bondad!'
  },
  {
    'id_hymn': 18,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Señor, tú has soportado\nlo que yo merecí;\nla culpa que has cargado,\ncargarla yo debí.\nMas mírame: Confío\nen tu cruz y pasión.\nOtórgame, Dios mío,\nla gracia del perdón.'
  },
  {
    'id_hymn': 18,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Aunque tu vida acaba\nno dejaré tu cruz;\npues cuando errante andaba,\nen ti encontré la luz.\nMe apacentaste siempre,\npaciente cual pastor;\nme amaste tiernamente\ncon infinito amor.'
  },
  {
    'id_hymn': 19,
    'order': 1,
    'type': 'STROPHE',
    'content': 'En el monte Calvario estaba una cruz,\nemblema de afrenta y dolor,\ny yo amo esa cruz, do murió mi Jesús\npor salvar al más vil pecador.'
  },
  {
    'id_hymn': 19,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Oh!, yo siempre amaré a esa cruz,\nen sus triunfos mi gloria será;\ny algún día en vez de una cruz,\nmi corona Jesús me dará.'
  },
  {
    'id_hymn': 19,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Y aunque el mundo desprecie\nla cruz de Jesús,\npara mí tiene suma atracción,\npues en ella llevó el Cordero de Dios\nde mi alma la condenación.'
  },
  {
    'id_hymn': 19,
    'order': 3,
    'type': 'STROPHE',
    'content': 'En la cruz de Jesús,\ndo su sangre vertió,\nhermosura contemplo sin par;\npues en ella triunfante a\nla muerte venció,\ny mi ser puede santificar.'
  },
  {
    'id_hymn': 19,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Yo seré siempre fiel\na la cruz de Jesús,\nsu oprobio con Él llevaré,\ny algún día feliz con los santos en luz\npara siempre su gloria veré.'
  },
  {
    'id_hymn': 20,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Hubo Uno que quiso por mí padecer\ny morir, por mi alma salvar;\nel camino cruento a la cruz recorrer,\npara así mis pecados lavar.'
  },
  {
    'id_hymn': 20,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡En la cruz, en la cruz\nmis pecados clavó!\n¡cuánto quiso por mí padecer!\nCon angustia a la cruz\nfue el benigno Jesús,\ny en su cuerpo mis culpas llevó.'
  },
  {
    'id_hymn': 20,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Él es todo ternura y amor para mí,\nmi alma impura su sangre lavó;\nya no hay condenación,\nlibre soy, yo lo sé;\nmi pecado en la cruz Él clavó.'
  },
  {
    'id_hymn': 20,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Me atendré al Maestro, jamás dejaré\nel sendero que Él mismo trazó,\ny mis labios y mi alma\nalzarán su canción,\npues Él todas mis culpas quitó.'
  },
  {
    'id_hymn': 21,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Jesús amado, ¿cuál es tu delito,\nque pueda merecer tan duro juicio?\n¿De qué ruindad enorme,\nexecrable, eres culpable?'
  },
  {
    'id_hymn': 21,
    'order': 2,
    'type': 'STROPHE',
    'content': '¿Por qué tu alma, con dolor declina?\n¡Ay! Son mis culpas causa de tu ruina.\n¡Jesús amado, cómo tú expías\nlas faltas mías!'
  },
  {
    'id_hymn': 21,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Maravillosa es esta condena:\nSu vida da el Pastor por sus ovejas;\nlas deudas del pecado por sus siervos\npaga el Dios bueno.'
  },
  {
    'id_hymn': 22,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cristo fue inmolado\npor nuestra culpa impía;\nÉl ha resucitado para darnos vida.\nHémosla de disfrutar\nloar a Dios y gracias dar\ny cantar:¡Aleluya!, ¡Aleluya!.'
  },
  {
    'id_hymn': 22,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Nadie pudo dominar\nla muerte en este mundo;\nfue por nuestra culpa y mal,\ninocencia no hubo.\nPronto así pudo vencer\ny su imperio imponer;\ncautivos nos mantuvo. ¡Aleluya!.'
  },
  {
    'id_hymn': 22,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Esa fue una extraña lid\nde muerte contra vida;\ntriunfó la vida allí,\nla muerte fue abatida.\nFue una muerte, se anunció,\nque a la otra devoró,\nya ésta no es temida. ¡Aleluya!.'
  },
  {
    'id_hymn': 23,
    'order': 1,
    'type': 'STROPHE',
    'content': 'La tumba le encerró. ¡Cristo bendito!\nEl alba allí espero Cristo el Señor.'
  },
  {
    'id_hymn': 23,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Cristo la tumba venció\ny con gran poder resucitó;\nha vencido ya la muerte y el dolor;\nvive para siempre nuestro Salvador.\n¡Gloria a Dios! ¡Gloria a Dios!\n¡El Señor resucitó!'
  },
  {
    'id_hymn': 23,
    'order': 2,
    'type': 'STROPHE',
    'content': 'De guardas escapó. ¡Cristo bendito!\nEl sello destruyó Cristo el Señor.'
  },
  {
    'id_hymn': 23,
    'order': 3,
    'type': 'STROPHE',
    'content': 'La muerte dominó. ¡Cristo bendito!\ny su poder venció Cristo el Señor.'
  },
  {
    'id_hymn': 24,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cristo ha resucitado, ¡aleluya!;\nya la muerte ha vencido, ¡aleluya!\nCon poder y con virtud, ¡aleluya!,\ncautivó la esclavitud.\n¡Aleluya!.'
  },
  {
    'id_hymn': 24,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Hasta el polvo se humilló, ¡aleluya!;\nvencedor se levantó, ¡aleluya!\nHoy contamos en verdad, ¡aleluya!,\nsu gloriosa majestad.\nAleluya!.'
  },
  {
    'id_hymn': 24,
    'order': 3,
    'type': 'STROPHE',
    'content': 'A la muerte se entregó, ¡aleluya!\nel que así nos redimió, ¡aleluya!\nHoy en gloria celestial, ¡aleluya!,\nreina en vida triunfal.\n¡Aleluya!.'
  },
  {
    'id_hymn': 24,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Cristo, nuestro Salvador, ¡aleluya!,\nde la muerte vencedor, ¡aleluya!,\ntodos te hemos de cantar, ¡aleluya!\nAlabanzas sin cesar.\n¡Aleluya!.'
  },
  {
    'id_hymn': 25,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Grande es tu gloria,\nascendiste vencedor,\nobtuviste la victoria\npor tu gran amor;\nderrotaste al maligno\ny a la muerte cruel,\nnos libraste del peligro,\n¡honra a ti, Emanuel!'
  },
  {
    'id_hymn': 25,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Grande es tu gloria,\nascendiste vencedor,\nobtuviste la victoria\npor tu gran amor.'
  },
  {
    'id_hymn': 25,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Toda tu iglesia\nse conmueve de emoción\nadmirando tu renuncia\ny tu compasión.\nDescendiste desde el cielo\na la humanidad\npara darnos paz, consuelo,\nplena libertad.'
  },
  {
    'id_hymn': 25,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Hoy ya la muerte\nha perdido su aguijón,\nsus cadenas quebrantaste,\n¡oh que bendición!\nIntercedes en el cielo\ndándonos perdón,\ncolmas todo nuestro anhelo,\nnos das Salvación.'
  },
  {
    'id_hymn': 26,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Junto a la cruz do Jesús murió,\ndo por su gracia clamaba yo,\nmis manchas su sangre allí quitó.\n¡A su nombre gloria!'
  },
  {
    'id_hymn': 26,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡A su nombre gloria!\n¡A su nombre gloria!\nCristo Jesús es mi Salvador:\n¡A su nombre gloria!'
  },
  {
    'id_hymn': 26,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cuando por fe en la cruz lo vi,\nde mis pecados salvado fui;\nhoy Él me guarda y mora en mí:\n¡A su nombre gloria!'
  },
  {
    'id_hymn': 26,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Fuente preciosa de salvación,\ngozo Él da a mi corazón!\nSólo Jesús salva y da perdón:\n¡A su nombre gloria!'
  },
  {
    'id_hymn': 26,
    'order': 4,
    'type': 'STROPHE',
    'content': '¡Ven a esta fuente, oh, pecador!\nPonte a los pies de tu Salvador;\nTe colmará de su santo amor:\n¡A su nombre gloria!'
  },
  {
    'id_hymn': 27,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Animaos en su amor,\nÉl nos cuida bondadoso;\nsu presencia da valor,\nfe, confianza y mucho gozo.\nHemos de seguirle fiel;\na su gloria invita Él.'
  },
  {
    'id_hymn': 27,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Es Jesús supremo Rey,\nsu reinado es de confianza;\ninmutable es su Ley,\ntributémosle alabanza.\nDigno es de todo honor\nel Cordero vencedor.'
  },
  {
    'id_hymn': 27,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Cristo vive, yo también,\nhe de visitar la gloria;\nentraré en el Edén\ncon los santos de la historia.\nCara a cara le veré\ny a sus pies me postraré.'
  },
  {
    'id_hymn': 28,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Oh, qué Salvador\nes Jesús, el Señor!\n¡Bendito Señor para mí!\nÉl salva al más malo\nde su iniquidad\ny dale socorro aquí.'
  },
  {
    'id_hymn': 28,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Me escondo en la Roca\nque es Cristo, el Señor,\ny allí nada ya temeré;\nme escondo en la Roca\nque es mi Salvador,\ny en Él siempre confiaré,\ny siempre con Él viviré.'
  },
  {
    'id_hymn': 28,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Veré a los amados a quienes dejé;\ncon ellos por siempre estaré.\nMás quiero aún al amado Jesús:\nSus glorias yo entonaré'
  },
  {
    'id_hymn': 28,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Ycuando esta vida termine aquí,\nla lucha al fin dejaré;\nentonces a Cristo\npodré contemplar;\nloor a su nombre daré.'
  },
  {
    'id_hymn': 28,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Y cuando en las nubes\ndescienda Jesús,\nglorioso en el mundo a reinar,\nsu gran salvación y perfecto amor,\npor siglos yo he de cantar.'
  },
  {
    'id_hymn': 29,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Jesús, bendito Salvador,\nlos pueblos te verán;\ny por tu gloria y tu poder\nlos orbes temblarán,\nlos orbes temblarán.'
  },
  {
    'id_hymn': 29,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Miradle, cielos, bendecid\nla procesión triunfal;\nal Rey de gloria recibid\nque vuelve inmortal,\nque vuelve inmortal.'
  },
  {
    'id_hymn': 29,
    'order': 3,
    'type': 'STROPHE',
    'content': 'De horrible muerte es vencedor;\nregresa a su mansión;\nes nuestro Rey y el Santo Autor\nde nuestra salvación,\nde nuestra salvación.'
  },
  {
    'id_hymn': 29,
    'order': 4,
    'type': 'STROPHE',
    'content': 'El Hijo amado, su amor,\nmuriendo demostró;\ny Dios humano, vencedor\nal cielo ascendió, al cielo ascendió.'
  },
  {
    'id_hymn': 30,
    'order': 1,
    'type': 'STROPHE',
    'content': 'El profundo amor de Cristo\nes inmenso, sin igual;\ncual océano sus ondas\nen mí fluyen, gran caudal.\nMe rodea y protege\nla corriente de su amor,\nsiempre guiando,\nimpulsando hacia el celestial hogar.'
  },
  {
    'id_hymn': 30,
    'order': 2,
    'type': 'STROPHE',
    'content': 'El profundo amor de Cristo\ndigno es de loor y prez;\n¡cuánto ama, siempre ama,\nnunca cambia, puro es!\n¡cuánto ama a sus hijos,\npor salvarlos Él murió!\nIntercede en el cielo\npor aquellos que compró.'
  },
  {
    'id_hymn': 30,
    'order': 3,
    'type': 'STROPHE',
    'content': 'El profundo amor de Cristo\ngrande, sin comparación,\nes refugio de descanso,\nes mar de gran bendición.\nEl profundo amor de Cristo\nes un cielo para mí;\nme levanta hasta la gloria,\npues me atrae hacia allí.'
  },
  {
    'id_hymn': 31,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Canto el gran amor de Aquel\nque primero a mí me amó,\npues dejó la gloria allá\ny en el Gólgota murió.'
  },
  {
    'id_hymn': 31,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Tal amor ensalzaré,\nAlabando al que murió\ninmolado para que\nvida eterna tenga yo.'
  },
  {
    'id_hymn': 31,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Antes que llorara yo,\nya por mí lloraba Él;\ny antes que supiera orar,\nÉl por mí gusto la hiel.'
  },
  {
    'id_hymn': 31,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Este mundo nunca vió\ntan profundo y santo amor,\nque el pecado me quitó\naliviando mi dolor.'
  },
  {
    'id_hymn': 31,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Nada bueno se halla en mí.\n¿cómo puedes tanto amar?\nYo, Señor, me rindo a ti;\nhazme, pues, tu amor mostrar.'
  },
  {
    'id_hymn': 32,
    'order': 1,
    'type': 'STROPHE',
    'content': '¿Le importará, a Jesús que esté\ndoliente mi corazón?\nSi ando en senda oscura de aflicción,\n¿puede darme consolación?'
  },
  {
    'id_hymn': 32,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Le importa, sí; su corazón\ncomparte ya mi dolor.\nSí, mis días tristes, mis noches\nnegras le importan al Señor.'
  },
  {
    'id_hymn': 32,
    'order': 2,
    'type': 'STROPHE',
    'content': '¿Le importará que en oscuridad\ncamine con gran temor?\nAl anochecer, en la lobreguez,\n¿me acompañará el Salvador?'
  },
  {
    'id_hymn': 32,
    'order': 3,
    'type': 'STROPHE',
    'content': '¿Le importará si mi voluntad\nfaltare en la prueba atroz;\nsi he cedido al mal, a la tentación,\ny el llanto ahoga mi voz?'
  },
  {
    'id_hymn': 33,
    'order': 1,
    'type': 'STROPHE',
    'content': 'La tierna voz del Salvador\nnos habla conmovida.\nOíd al Médico de amor\nque da a los muertos vida.'
  },
  {
    'id_hymn': 33,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Nunca los hombres cantarán,\nnunca los ángeles en luz,\nnota más dulce entonarán\nque el nombre de Jesús.'
  },
  {
    'id_hymn': 33,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cordero manso ¡gloria a ti!,\npor Salvador te aclamo,\ntu dulce nombre es para mí\nla joya que más amo.'
  },
  {
    'id_hymn': 33,
    'order': 3,
    'type': 'STROPHE',
    'content': '“Borradas ya tus culpas son”,\nsu voz hoy te pregona;\nacepta, pues, la salvación\ny espera la corona.'
  },
  {
    'id_hymn': 33,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Y cuando al cielo del Señor\ncon Él nos elevemos,\narrebatados en su amor\nsu gloria cantaremos.'
  },
  {
    'id_hymn': 34,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cuando estés cansado y abatido,\ndilo a Cristo, dilo a Cristo;\nangustiado por el gozo huido,\ndilo a Cristo, el Señor.'
  },
  {
    'id_hymn': 34,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Dilo a Cristo, dilo a Cristo,\nÉl es tu amigo mejor;\notro no hay como Él,\namante hermano;\ndilo a Cristo, el Señor.'
  },
  {
    'id_hymn': 34,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Si derramas lágrimas amargas,\ndilo a Cristo, dilo a Cristo;\nsi en tu vida hay faltas ocultadas,\ndilo a Cristo, el Señor.'
  },
  {
    'id_hymn': 34,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Si el nublado de tristeza temes,\ndilo a Cristo, dilo a Cristo;\nsi saber de tu mañana quieres,\ndilo a Cristo, el Señor.'
  },
  {
    'id_hymn': 34,
    'order': 4,
    'type': 'STROPHE',
    'content': '¿Te perturba el contemplar la muerte?\ndilo a Cristo, dilo a Cristo;\n¿En el reino anhelas pronto verte?\ndilo a Cristo, el Señor.'
  },
  {
    'id_hymn': 35,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Un buen amigo tengo yo,\nsu amor salvó mi vida;\ny por su muerte gozo hoy\ntal gracia inmerecida.\nY con el lazo de este amor,\nque nunca se ha cortado,\nseguro puedo siempre andar,\na Él estoy ligado.'
  },
  {
    'id_hymn': 35,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Un buen Amigo tengo yo,\nel ser me dio al crearme,\ny a sí mismo se entregó\na fin de rescatarme.\nPues, cuanto tengo es todo de Él,\nÉl mismo me lo ha dado;\nmi vida, fuerza y corazón,\na Él le he entregado.'
  },
  {
    'id_hymn': 35,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Un buen Amigo tengo yo,\nel Todopoderoso,\nque quiere al fin llevarme a mí\na su hogar glorioso.\nPara animar mi vida aquí\nme deja ver su gloria,\ny con la ayuda que me da\nyo gano la victoria.'
  },
  {
    'id_hymn': 35,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Un buen amigo tengo yo,\ntan fiel y tan amante;\nmi sabio consejero es,\nmi protector constante.\nDe quien al mundo tanto amó,\njamás podrá apartarme\nni el mundo, ni la muerte, pues\nsoy suyo para siempre.'
  },
  {
    'id_hymn': 36,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Me dice el Salvador:\n“Es poco tu poder;\nhijo débil, halla en mí\ntodo cuanto, has menester”.'
  },
  {
    'id_hymn': 36,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Todo debo a Él, pues ya lo pagó;\nde las manchas del pecar\ncual nieve me lavó.'
  },
  {
    'id_hymn': 36,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Señor, hallado he\nque sólo tu poder\na mi duro corazón\nes capaz de enternecer.'
  },
  {
    'id_hymn': 36,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Nada bueno hay en mí;\ntu gracia buscaré,\ny en la sangre de Jesús\nmis pecados lavaré.'
  },
  {
    'id_hymn': 36,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Cuando ante el trono, allá,\ncompleto en Él esté,\na los pies de mi Jesús\nmis trofeos echaré.'
  },
  {
    'id_hymn': 37,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Que en lenguas mil tu gran bondad,\npodamos hoy cantar,\npodamos hoy cantar,\ny de tu gracia y majestad\nal mundo proclamar,\nal mundo proclamar,\nal mundo proclamar.'
  },
  {
    'id_hymn': 37,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Oír tu nombre santo y fiel,\nsalud y vida da, salud y vida da;\ntu gran amor, oh, Emanuel,\nimparte dulce paz,\nimparte dulce paz,\nimparte dulce paz.'
  },
  {
    'id_hymn': 37,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Oídle sordos de una vez,\nlos mudos canten ya,\nlos mudos canten ya;\nvosotros ciegos a su vez\na Cristo contemplad,\na Cristo contemplad,\na Cristo contemplad.'
  },
  {
    'id_hymn': 38,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Oh, si pudiera yo contar\nla gloria y el amor sin par\nde Cristo, mi Señor;\nvolar al cielo con Gabriel,\nmi voz unir con la de aquel\nseráfico cantor,\nseráfico cantor!'
  },
  {
    'id_hymn': 38,
    'order': 2,
    'type': 'STROPHE',
    'content': 'La sangre que en la cruz vertió,\nla cual a mi alma rescató\nde eterna perdición;\nsu fiel justicia y santo amor,\nlos que me visten de esplendor,\nserían mi canción,\nserían mi canción.'
  },
  {
    'id_hymn': 38,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Todo el carácter de mi Rey:\nsu multiforme amor, su ley,\nsu gracia , su poder,\nsu gloria y sempiterno honor,\nen altos himnos de loor\ndaría a conocer,\ndaría a conocer.'
  },
  {
    'id_hymn': 38,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Aquel dichoso día vendrá\ncuando Jesús me llevará\ny así su faz veré.\nSerá mi Amigo y Salvador\ncon quien, por gracia vencedor,\npor siempre viviré,\npor siempre viviré.'
  },
  {
    'id_hymn': 39,
    'order': 1,
    'type': 'STROPHE',
    'content': 'A Cristo coronad,\ndivino Salvador;\nsentado en alta majestad\nes digno de loor.\nAl Rey de gloria y paz\nloores tributad,\ny bendecid al inmortal\npor toda eternidad.'
  },
  {
    'id_hymn': 39,
    'order': 2,
    'type': 'STROPHE',
    'content': 'A Cristo coronad,\nSeñor de nuestro amor;\nal triunfante celebrad,\nglorioso vencedor.\nPotente Rey de paz,\nel triunfo consumó,\ny por su muerte en la cruz\nsu grande amor mostró.'
  },
  {
    'id_hymn': 39,
    'order': 3,
    'type': 'STROPHE',
    'content': 'A Cristo coronad,\nSeñor de vida y luz;\ncon alabanzas proclamad\nlos triunfos de la cruz.\nA Él, pues, adorad,\nSeñor de salvación;\nloor eterno tributad\nde todo corazón.'
  },
  {
    'id_hymn': 40,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Del santo amor de Cristo\nque no tendrá igual,\nde su divina gracia,\nsublime y eternal;\nde su misericordia,\ninmensa como el mar\ny cual los cielos alta,\ncon gozo he de cantar.'
  },
  {
    'id_hymn': 40,
    'order': 2,
    'type': 'CHORUS',
    'content': 'El amor de mi Señor\ngrande y dulce es, más y más;\nrico e inefable,\nnada es comparable\nal amor de mi Jesús.'
  },
  {
    'id_hymn': 40,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cuando Él vivió en el mundo\nla gente lo siguió,\ny todas sus angustias\nen Él depositó;\nentonces, bondadoso,\nsu amor brotó en raudal,\nincontenible, inmenso,\nsanando todo mal.'
  },
  {
    'id_hymn': 40,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Su amor, por las edades,\ndel mundo es el fanal,\nque marca esplendoroso\nla senda del ideal;\ny el paso de los años\nlo hará más dulce, y más\nprecioso al dar al alma\nsu incomparable paz.'
  },
  {
    'id_hymn': 41,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Grande es el amor divino,\nes más amplio que el mar.\n¡Qué bondad en su justicia!\nVino el mundo a libertar.'
  },
  {
    'id_hymn': 41,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En la sangre del Maestro\nhay poder de salvación,\nsanidad hay para el alma,\ny del mal hay protección.'
  },
  {
    'id_hymn': 41,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Mas, oh, cuánto limitamos\npor la débil comprensión,\nsu poder, su magna gracia,\ndespreciando su gran don.'
  },
  {
    'id_hymn': 41,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Respondamos prestamente\nal llamado de Jesús;\nredimiónos ampliamente\npor su muerte en la cruz.'
  },
  {
    'id_hymn': 42,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Oí la voz del Salvador\ndecir con tierno amor:\n“¡Oh, ven a mí, descansarás,\ncargado pecador!”.\nTal como estaba, a mi Jesús,\ncansado acudí,\ny luego dulce alivio y paz\npor fe de Él recibí.'
  },
  {
    'id_hymn': 42,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Oí la voz del Salvador\ndecir: “Venid, bebed;\nyo soy la fuente de salud\nque apaga toda sed”.\nCon sed de Dios, del vivo Dios,\nbusqué a Emanuel;\nlo hallé; mi sed Él apagó,\ny ahora vivo en Él.'
  },
  {
    'id_hymn': 42,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Oí su dulce voz decir:\n“Del mundo soy la luz;\nmiradme a mí y salvos sed;\nhay vida en mi cruz”.\nMirando a Cristo, por la fe,\nmi norte y sol hallé;\ny en esa luz de vida, en Él\npor siempre viviré.'
  },
  {
    'id_hymn': 43,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Alumbrante Espíritu\nbrilla tú en mi corazón;\nvuelve en día la oscuridad\nde mi noche de aflicción.'
  },
  {
    'id_hymn': 43,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Poderoso Espíritu,\nlimpia este corazón,\nporque sobre mi alma el mal\nejerció cruel opresión.'
  },
  {
    'id_hymn': 43,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Oh, divino Espíritu,\nmora tú en mi corazón;\nrompe todo ídolo,\nreina en plena posesión.'
  },
  {
    'id_hymn': 44,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Ven a nuestras almas,\nParacleto Santo,\ntráenos del cielo,\nde tu luz un rayo.'
  },
  {
    'id_hymn': 44,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Fuente de consuelo,\ndulce y soberano;\nhuésped de las almas;\ncelestial regalo.'
  },
  {
    'id_hymn': 44,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Ven divina llama,\nprende en el cristiano,\ny su pecho llena\ndel amor sagrado.'
  },
  {
    'id_hymn': 44,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Dales de tu gracia\ndel favor preclaro,\nla salud eterna\ngozo continuado.'
  },
  {
    'id_hymn': 45,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Dios nos ha dado promesa:\n“Lluvias de gracia enviaré,\ndones que os den fortaleza,\ngran bendición os daré”.'
  },
  {
    'id_hymn': 45,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Lluvias de gracia,\nlluvias pedimos, Señor;\nmándanos lluvias copiosas,\nlluvias del Consolador.'
  },
  {
    'id_hymn': 45,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cristo nos dio la promesa\ndel Santo Consolador;\npaz y perdón y pureza,\npara su gloria y honor.'
  },
  {
    'id_hymn': 45,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Dios nuestro, a todo creyente\nmuestra tu amor y poder;\ntú eres de gracia la fuente,\nllenas de paz nuestro ser.'
  },
  {
    'id_hymn': 45,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Obra en tus siervos piadosos\ncelo, virtud y valor;\ndel tentador victoriosos\nsalgan contigo, Señor.'
  },
  {
    'id_hymn': 46,
    'order': 1,
    'type': 'STROPHE',
    'content': 'De Dios Palabra Santa,\nla ciencia superior;\nverdad que nunca cambia,\nnos muestras al Creador.\nTu brillo es esplendente,\nde ti dimana luz;\nantorcha que al creyente\nlo guías a la cruz.'
  },
  {
    'id_hymn': 46,
    'order': 2,
    'type': 'STROPHE',
    'content': 'La iglesia ha recibido\nen ti divino don\ny ha de compartirlo\nque brille en profusión.\nCual cofre tú atesoras\nlas gemas de verdad\nque guían a las almas\na Cristo y su bondad.'
  },
  {
    'id_hymn': 46,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Tú flotas cual bandera,\ninsignia del amor,\nreluces cual lumbrera\nque esparce gran fulgor.\nCombates la ignorancia,\nla falsa religión;\nen ti está la ciencia\nde la revelación.'
  },
  {
    'id_hymn': 46,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Renueva hoy tu iglesia\nquerido Salvador\ny haz que brille regia\ncon grande resplandor.\nQue lleve a las naciones\nla luz de la verdad,\ncautive corazones,\nlos lleve a santidad.'
  },
  {
    'id_hymn': 47,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Dadme la Biblia, reluciente estrella,\nnorte del nauta en tormentoso mar;\nnunca el nublado esconderá su brillo,\npues las tinieblas puede disipar.'
  },
  {
    'id_hymn': 47,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Dadme la Biblia,\nsanta y clara nueva,\nluz del camino angosto y celestial;\nregla y promesa, ley y amor unidos\nhasta que rompa el alba eternal .'
  },
  {
    'id_hymn': 47,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Dadme la Biblia,\nen mi desaliento,\ncuando el pecado cáuseme temor;\ndadme los fieles dichos del Maestro;\nsiempre me encuentre\njunto al Salvador.'
  },
  {
    'id_hymn': 47,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Dadme la Biblia,\nantorcha a mis pisadas\nen la insegura senda terrenal;\núnica luz constante en las tinieblas;\nprenda de paz y amparo celestial.'
  },
  {
    'id_hymn': 47,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Dadme la Biblia,\nluz de vida eterna;\njunto al sepulcro su esplendor alzad;\nsobre el Jordán\ndestáquense las puertas\nfúlgidas de la célica ciudad.'
  },
  {
    'id_hymn': 48,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cantad alegres al Señor,\nmortales todos por doquier;\nservidle siempre con fervor,\nobedecedle con placer.'
  },
  {
    'id_hymn': 48,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Con gratitud canción alzad\nal Hacedor que el ser os dio;\nal Dios excelso venerad,\nque como Padre nos amó.'
  },
  {
    'id_hymn': 48,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Su pueblo somos, salvará\na los que busquen al Señor;\nninguno de ellos dejará;\nÉl los ampara con su amor.'
  },
  {
    'id_hymn': 49,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Tu Palabra vida es\ny también es salvaguardia,\nquiero oírla vez tras vez\npues mi ser entero irradia.\nTu Palabra purifica,\nnos instruye y santifica.'
  },
  {
    'id_hymn': 49,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Tu Palabra santa es,\nel sendero ilumina\ndirigiendo nuestros pies\ny nos libra de la ruina.\nTu enseñanza dulce, santa,\nen virtud nos encamina.'
  },
  {
    'id_hymn': 49,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Tu Palabra quiero oír,\ntoda ella es inspirada,\nque nos ha de corregir,\ny es por Cristo revelada.\nTu Palabra impartida,\nla gran ciencia escondida.'
  },
  {
    'id_hymn': 50,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Dios está presente!\nvamos a postrarnos\nante Él con reverencia;\nen silencio estemos\nfrente a su grandeza,\nimplorando su clemencia.\nQuien con Él quiera andar,\nsu mirada eleve; votos le renueve.'
  },
  {
    'id_hymn': 50,
    'order': 2,
    'type': 'STROPHE',
    'content': '¡Dios está presente! y los serafines\nLo adoran reverentes;\n“Santo, Santo, Santo”,\nen su honor le cantan\nlos ejércitos celestes.\n¡Oh, buen Dios!, nuestra voz\ncomo humilde ofrenda\na tu trono ascienda.'
  },
  {
    'id_hymn': 50,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Como el sol irradia sobre el tierno lirio\nque contento se doblega,\nDios Omnipresente, ilumina mi alma\ny feliz yo te obedezca;\nhaz que así, tú en mí,\nseas reflejado, y tu amor, probado.'
  },
  {
    'id_hymn': 51,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Dios os guarde en su divino amor,\nhasta el día en que lleguemos\na la patria do estaremos\npara siempre con el Salvador.'
  },
  {
    'id_hymn': 51,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Al venir Jesús nos veremos\na los pies de nuestro Rey;\nreunidos todos seremos,\nun redil habrá y sólo una grey.'
  },
  {
    'id_hymn': 51,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Dios os guarde en su divino amor,\nen la senda peligrosa\nde esta vida tormentosa\nos conserve en paz y sin temor.'
  },
  {
    'id_hymn': 51,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Dios os guarde en su divino amor,\nos conduzca su bandera,\ny os conceda en gran manera\nde su Espíritu Consolador.'
  },
  {
    'id_hymn': 51,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Dios os guarde en su divino amor,\ncon su gracia os sostenga\nhasta cuando Cristo venga\nen su reino con gran esplendor.'
  },
  {
    'id_hymn': 52,
    'order': 1,
    'type': 'STROPHE',
    'content': 'La gracia del Señor Jesucristo,\nel amor de Dios,\ny la comunión del Santo Espíritu\nsean con todos vosotros. Amén.'
  },
  {
    'id_hymn': 53,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Danos hoy tus bendiciones\nal cerrar la reunión,\ncolma nuestros corazones\nde paz, gozo y santa unción;\ncon corrientes de aguas vivas\nsatisfácenos Señor.'
  },
  {
    'id_hymn': 53,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Siempre en tu verdad, constantes,\ny en perfecta sumisión,\nque abundemos cada instante en\nfrutos de adoración;\ny que fieles, anhelantes,\nte rindamos devoción.'
  },
  {
    'id_hymn': 54,
    'order': 1,
    'type': 'STROPHE',
    'content': 'A Dios dad gracias, dad honor\ny gloria en las alturas,\npues sabio y grande Protector,\nbendice a sus criaturas;\ncon fuerte y buena voluntad\nremedia la necesidad\ny alivia sus tristuras.'
  },
  {
    'id_hymn': 54,
    'order': 2,
    'type': 'STROPHE',
    'content': ' ¡Oh, Jesucristo, Salvador\nde los que están perdidos!\n¡Del Padre eterno, resplandor,\nluz de los redimidos!\nCordero Santo, Don de Dios,\nen nuestra muerte ampáranos\ny salva a tus ungidos.'
  },
  {
    'id_hymn': 54,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Oh Santo Espíritu de Dios,\ncon tu eficaz consuelo\nen dura lid defiéndenos,\ncual padre al pequeñuelo.\nPor la pasión y amarga cruz\nde Cristo nuestro bien y luz,\nelévanos al cielo.'
  },
  {
    'id_hymn': 55,
    'order': 1,
    'type': 'STROPHE',
    'content': 'En Sión Jesús hoy reina,\nalégrate, mortal,\ny ve con devoción y fe al trono celestial.\nEn Sión Jesús hoy reina\nen gloria y majestad,\nvenid, oh nobles, con amor,\nsu gloria proclamad.'
  },
  {
    'id_hymn': 55,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En Sión Jesús hoy reina\ncual infinito ser;\nel cielo, tierra y el mar\ngobierna con poder.\n¡Oh, todo el universo alabe al Salvador!\nProclamen la fidelidad\ndel Santo Redentor.'
  },
  {
    'id_hymn': 55,
    'order': 3,
    'type': 'STROPHE',
    'content': 'En Sión Jesús hoy reina,\ndel orbe es regidor.\n¡Venid y adoradle fiel,\nservidle con fervor!\nY ante su grandeza\nvenid con santa unción;\nvenid y coronadle Rey\ncon toda devoción.'
  },
  {
    'id_hymn': 56,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Silencio! ¡Silencio!, en este lugar;\n¡Silencio! ¡Silencio!, habéis de guardar.'
  },
  {
    'id_hymn': 56,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Quedad en silencio en este lugar;\nsilencio, silencio guardad al orar.'
  },
  {
    'id_hymn': 56,
    'order': 2,
    'type': 'STROPHE',
    'content': '¡Silencio! ¡Silencio!. Es tiempo de orar,\nla gracia divina podréis disfrutar.'
  },
  {
    'id_hymn': 56,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Silencio! ¡Silencio!. Su amor recordad.\nA Dios, pues, postrados, honor tributad.'
  },
  {
    'id_hymn': 56,
    'order': 4,
    'type': 'STROPHE',
    'content': '¡Silencio! ¡Silencio!. Orad sin cesar,\n¡Silencio! ¡Silencio!.Él vida os dará.'
  },
  {
    'id_hymn': 57,
    'order': 1,
    'type': 'STROPHE',
    'content': '¿Cómo en su sangre pudo haber\ntanta ventura para mí?\n¿si yo sus penas agravé\ny de su muerte causa fui?\n¿Hay maravilla cual su amor?\n¡Morir por mí con tal dolor!'
  },
  {
    'id_hymn': 57,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Cuán grande amor por mí mostró;\nJesús, mi Dios, por mí murió!'
  },
  {
    'id_hymn': 57,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Nada retiene al descender\nsino su amor y caridad;\ntodo lo entrega: gloria, prez,\ncorona, trono y majestad.\nVer redimidos, es su afán,\nlos tristes hijos de Adán.'
  },
  {
    'id_hymn': 57,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Mi alma, atada en la prisión,\nanhela redención y paz.\nDe pronto vierte sobre mí\nla luz radiante de su faz.\nMe otorga su perdón, dulce paz;\nÉl llena mi alma de solaz.'
  },
  {
    'id_hymn': 58,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cristo divino, Hijo unigénito,\ngran Creador y fiel sostén;\nsiempre he de amarte, siempre servirte,\nmi gozo, mi corona y bien.'
  },
  {
    'id_hymn': 58,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Los campos bellos cubren el suelo\nde lozanía y floración;\nJesús, empero, siempre es más bello;\nhace cantar el corazón.'
  },
  {
    'id_hymn': 58,
    'order': 3,
    'type': 'STROPHE',
    'content': ' ¡Bello lucero!, ¡La argentina luna!\nTitilan las estrellas mil.\nJesús es bello, Jesús es puro\nque todo el reino celestial.'
  },
  {
    'id_hymn': 59,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cristo mi alegría\npan del alma mía,\nsiempre fiel a mí.\nCómo te he buscado,\ncuánto me he angustiado,\nsediento de ti.\nSiempre tuyo he de ser,\nnada anhelo en este mundo\nsino tu presencia.'
  },
  {
    'id_hymn': 59,
    'order': 2,
    'type': 'STROPHE',
    'content': 'A su amor me entrego,\ny a Satán no temo,\nno puede dañar.\nAunque el mundo tiemble,\nmi temor ardiente\nJesús calmará.\nEl dolor puede atacar\ny el pecado asaltarme.\nÉl no ha de fallarme.'
  },
  {
    'id_hymn': 59,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cuando la tristeza\nllame a mi puerta,\nCristo, alégrame.\nSi tú estás conmigo,\nmi aflicción olvido;\ntenme junto a ti.\nY aunque gima de dolor,\ncantará el alma mía.\nCristo mi alegría.'
  },
  {
    'id_hymn': 60,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Tu nombre es dulce, buen Jesús!\n¡Oh, cuánta paz, consuelo y luz\ndimana de tu santa cruz!,\nmi luz, mi esperanza.'
  },
  {
    'id_hymn': 60,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Dulce nombre: Emanuel!\n¡Dulce nombre, siempre fiel!\n¡Dulce nombre gloria a Él,\nlos santos todos canten!'
  },
  {
    'id_hymn': 60,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Tu nombre pláceme escuchar;\nlo siento a mi alma alentar.\nCual canto calma mi llorar,\nJesús, tu santo nombre.'
  },
  {
    'id_hymn': 60,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Jamás contó profano autor\ncuán dulce el nombre es del Señor;\nascienda siempre mi loor\na su glorioso nombre.'
  },
  {
    'id_hymn': 61,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Engrandecido sea Dios\nen esta ocasión, en esta ocasión.\nAlegres, juntos a una voz:'
  },
  {
    'id_hymn': 61,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Dad gloria, gloria, gloria, gloria;\ndad gloria al Dios eternal!'
  },
  {
    'id_hymn': 61,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Durante el tiempo que pasó,\nla mano del Señor, la mano del Señor,\nde muchos males nos salvó.'
  },
  {
    'id_hymn': 61,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Él hasta aquí nos ayudó\ny siempre proveerá, y siempre proveerá.\nCon gratitud, placer y amor:'
  },
  {
    'id_hymn': 61,
    'order': 4,
    'type': 'STROPHE',
    'content': 'A otras almas salva, ¡oh Dios!,\ndespiértalas, Señor, despiértalas Señor;\nescucha nuestra petición.'
  },
  {
    'id_hymn': 62,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Honrámoste oh Dios,\npor tu Hijo y su amor;\npor Jesús quien librónos\nde muerte y dolor.'
  },
  {
    'id_hymn': 62,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Hoy tu nombre adoramos,\nte honramos también;\ny ante ti nos humillamos.\n¡Aleluya! ¡Amén!'
  },
  {
    'id_hymn': 62,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Mil gracias, oh Dios,\npor tu Espíritu y luz\nque conducen los pasos\na Cristo Jesús.'
  },
  {
    'id_hymn': 62,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Por siempre jamás\ndamos gloria a Jesús\nquien tomó nuestras culpas\nmuriendo en la cruz.'
  },
  {
    'id_hymn': 62,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Revive a tu grey,\ndanos más de tu amor,\nque guardemos tu Ley\ncon gran gozo y fervor.'
  },
  {
    'id_hymn': 63,
    'order': 1,
    'type': 'STROPHE',
    'content': ' ¡Alabad al fiel Salvador compasivo!\n¡Canta, oh tierra, canta su magno amor!\n¡Saludadle, ángeles santos en gloria,\ntributad al nombre de Cristo honor!\nEn sus brazos Él llevará a sus hijos;\nguardarálos siempre cual fiel pastor.'
  },
  {
    'id_hymn': 63,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Entonad canción\na su excelsa grandeza;\nensalzadle en\nhimnos de santo amor!'
  },
  {
    'id_hymn': 63,
    'order': 2,
    'type': 'STROPHE',
    'content': '¡Alabad al fiel Salvador compasivo!,\nquien por nuestras faltas su vida dio.\n¡Roca eterna, nuestra inmortal Esperanza,\nRey del cielo que en Gólgota murió!\n¡Dadle gloria; nuestros pesares lleva!\n¡Alabad tan ancho y profundo amor!'
  },
  {
    'id_hymn': 63,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Alabad al fiel Salvador compasivo,\nquerubines que obedecéis su ley!\nCristo en gloria reina por siglos de siglos;\nnuestro Abogado, Profeta y Rey.\nCristo viene, grande en poder y gloria.\n¡Viene, sí, del mundo ya vencedor!'
  },
  {
    'id_hymn': 64,
    'order': 1,
    'type': 'STROPHE',
    'content': ' ¡En alto la bandera alzad,\na lo ancho, a lo alto, hacia el mar!\nVenid a Cristo y exaltad,\nsu nombre hacedlo resonar.'
  },
  {
    'id_hymn': 64,
    'order': 2,
    'type': 'STROPHE',
    'content': ' Hermanos, la bandera alzad,\nmostrad con gozo la señal;\nde Cristo hablad y pregonad\nsu gran amor por el mortal.'
  },
  {
    'id_hymn': 64,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Perecen almas sin la luz,\ndebéis pues la bandera alzad;\nmostrad que hay vida en Jesús,\nque todos puédanle amar.'
  },
  {
    'id_hymn': 64,
    'order': 4,
    'type': 'STROPHE',
    'content': ' ¡En alto la bandera alzad,\nJesús es nuestro General!\nSu símbolo hoy desplegad,\ncantad la dicha celestial.'
  },
  {
    'id_hymn': 65,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Santo Dios, te damos loor,\ndigno eres de alabanza;\nnos postramos con fervor,\neres nuestra esperanza.\nEl consuelo de la humanidad,\nDios del cielo y de bondad.'
  },
  {
    'id_hymn': 65,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Tu reinado eterno es.\nQuerubines, serafines\ncubren ante ti sus pies\nmientras cantan tus loores.\n“Santo, Santo, eternal”,\ncanta el coro celestial.'
  },
  {
    'id_hymn': 65,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Elevamos nuestra voz,\nPadre eterno y verdadero,\nInmutable y Santo Dios,\nvivas damos al Cordero.\nMajestuoso en tu piedad\nreinas por la eternidad.'
  },
  {
    'id_hymn': 66,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Alma, bendice al Señor,\nRey potente de gloria;\nde sus mercedes esté\nviva en ti la memoria.\n¡Oh, despertad,\narpa y salterio, entonad\nhimnos de honor y victoria!'
  },
  {
    'id_hymn': 66,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Alma, bendice al Señor\nque los orbes gobierna,\ny te conduce paciente\ncon mano paterna;\nte perdonó,\nde todo mal te libró,\nporque su gracia es eterna.'
  },
  {
    'id_hymn': 66,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Alma, bendice al Señor,\nde tu vida la fuente,\nque te creó y en salud\nte sostiene clemente;\ntu defensor\nen todo trance y dolor,\nsu diestra es omnipotente.'
  },
  {
    'id_hymn': 67,
    'order': 1,
    'type': 'STROPHE',
    'content': 'A ti, glorioso Dios,\ncantamos alabanzas;\nrendímoste honor\npor todas tus grandezas.\nNos das tu bendición\nen nuestra senda aquí;\nnos guiarás, Señor,\na tu mansión allí.'
  },
  {
    'id_hymn': 67,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Ven siempre, oh gran Dios,\nmuy cerca de nosotros;\ncon celo y con fervor\nqueremos ir a otros.\nTu brazo protector\ndel mal nos guardará;\nen lucha y aflicción\nconsuelo nos será.'
  },
  {
    'id_hymn': 67,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Oh Padre, eterno Dios,\ncantámoste loores,\ny al Hijo Redentor,\nSeñor de los señores,\ny al Santo Espíritu,\nel gran Consolador;\nal grande y santo Dios\ncantamos con fervor.'
  },
  {
    'id_hymn': 68,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Honor, loor y gloria\na ti, buen Salvador,\ncual niños que cantaron\nhosannas al Señor.\nY hebreos que con palmas\nte dieron recepción,\ntu pueblo te ofrece\nsincera aclamación'
  },
  {
    'id_hymn': 68,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Tú, de David el Hijo,\nde Israel el Rey,\nasí te recibimos\nlos miembros de tu grey;\ncomo antes de tu muerte,\nhonráronte también,\nacepta nuestras preces,\ncomo en Jerusalén.'
  },
  {
    'id_hymn': 68,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Recibes la alabanza\ny oyes la oración.\nLo bueno te deleita,\ntambién la adoración.\nHonor, loor y gloria\na ti, Rey, Redentor,\nnosotros ensalzamos\ntu nombre, oh Señor.'
  },
  {
    'id_hymn': 69,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cúan gloriosas las noticias\nque hablan de la bella Sión;\nsus palacios, sus delicias\ncausan plena admiración.\nSobre Roca está fundada,\nnada la conmoverá;\ncon murallas rodeada,\npor los siglos brillará.'
  },
  {
    'id_hymn': 69,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Ved el río de agua viva\nfluye del eterno amor,\nbrinda gozo y alegría\na los hijos del Señor.\nSiempre sacia con sus aguas,\ntodos gozan de salud;\nsin temores y amarguras\nen eterna juventud.'
  },
  {
    'id_hymn': 69,
    'order': 3,
    'type': 'STROPHE',
    'content': 'En ti moran los salvados\npor la sangre de Jesús,\na gran precio rescatados\nque pagó Él en la cruz.\nCon su luz los ilumina,\nsólo hay día y esplendor;\nsu presencia los anima,\nles infunde todo amor.'
  },
  {
    'id_hymn': 70,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Sagrado es el amor\nque nos ha unido aquí,\na los que oímos del Señor\nla voz que llama a sí.'
  },
  {
    'id_hymn': 70,
    'order': 2,
    'type': 'STROPHE',
    'content': 'A nuestro buen Jesús\nrogamos con fervor\nque alúmbrenos la misma luz,\nnos una el mismo amor.'
  },
  {
    'id_hymn': 70,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Nos vamos a ausentar\nmas nuestra firme unión\njamás podráse quebrantar\npor la separación.'
  },
  {
    'id_hymn': 70,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Nos hemos de encontrar\nen celestial reunión;\nque nadie haya de faltar\nen la eterna Sión.'
  },
  {
    'id_hymn': 71,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Soy peregrino aquí;\nno hallo do morar;\nen áurea playa está\nmi muy lejano hogar;\nyo soy embajador\ndel reino allende el mar:\nembajador soy de mi Rey'
  },
  {
    'id_hymn': 71,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Mensaje traigo que anunciar,\nque aún ángeles quisieran dar.\n“Reconciliaos hoy”,\nes la divina voz,\n“reconciliaos hoy con Dios”.'
  },
  {
    'id_hymn': 71,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Mi Rey implora a los\nde senda mundanal\nque se arrepientan del\npecado tan fatal;\nque presten atención\nal ruego celestial;\nembajador soy de mi Rey.'
  },
  {
    'id_hymn': 71,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Más bello es mi hogar\nque el valle de Sarón;\nhay plena paz y amor\nen toda su extensión;\ny porque allí tengáis\neterna posesión,\nembajador soy de mi Rey.'
  },
  {
    'id_hymn': 72,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Tu reino amo,¡oh Dios!,\ntu casa de oración,\ny al pueblo que en Jesús halló\ncompleta redención.'
  },
  {
    'id_hymn': 72,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Tu iglesia, mi Señor,\nsu templo, su ritual,\nla iglesia que guiando estás\ncon mano paternal.'
  },
  {
    'id_hymn': 72,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Por ella es mi oración,\nmis lágrimas, mi amor;\nsolicitud, cuidado, afán\npor ella son, Señor.'
  },
  {
    'id_hymn': 73,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Un día más por Cristo\ny menos por vivir;\nmas hoy el cielo, que tanto anhelo,\nmás cerca está que ayer.\nColmada mi alma está de luz y amor.'
  },
  {
    'id_hymn': 73,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Un día más por Cristo,\nun día más por Cristo,\nun día más por Cristo,\ny menos por vivir.'
  },
  {
    'id_hymn': 73,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Un día más por Cristo,\npor mi glorioso Rey;\npues mis deberes ya son placeres:\nsu amor proclamaré.\nJesús murió; mi vida así compró.'
  },
  {
    'id_hymn': 73,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Un día más por Cristo;\ncuán grato es para mí\ncontar la historia, mostrar la gloria\ndel que me salva aquí.\nMi corazón rebosa en bendición.'
  },
  {
    'id_hymn': 73,
    'order': 4,
    'type': 'STROPHE',
    'content': '¡Oh, cuán bendita obra\nde Cristo mi Señor!\nTras prueba dura, un alma pura\nme da su santo amor.\nY esto sé: con Cristo reinaré.'
  },
  {
    'id_hymn': 74,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Cuán firme es de tu iglesia\nla base, oh Dios de luz,\npues es tu amado Hijo,\nel Santo Rey Jesús!\nEl trono de los cielos\nde grado abandonó,\ny por su amada iglesia\nsu vida entregó.'
  },
  {
    'id_hymn': 74,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Es una la esperanza\ny una es nuestra fe,\ny uno es el bautismo\ndoquiera que se esté.\nDe todas las naciones,\nunidos, oh Señor,\ntus hijos hoy te buscan\ny cantan tu loor.'
  },
  {
    'id_hymn': 74,
    'order': 3,
    'type': 'STROPHE',
    'content': 'En medio de aflicciones\ny luchas por doquier\ntu iglesia alerta aguarda:\ntu gloria anhela ver;\ny cuando aparecieres\nen gloria y majestad,\ntu iglesia victoriosa\ntendrá la libertad.'
  },
  {
    'id_hymn': 75,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Siembra en la mañana,\nsiembra al mediodía,\nhazlo en la tarde con gran interés\nque el amor que siembras con sabiduría\nha de dar su fruto en preciosa mies.'
  },
  {
    'id_hymn': 75,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Siembra con amor,\nsiembra con bondad,\ntodo lo que siembres has de cosechar.\nMira al Salvador, siembra la verdad,\nÉl te da la orden:“Ve hoy a sembrar”.'
  },
  {
    'id_hymn': 75,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Aunque el sol agobie\no haya densa sombra\nsiembra sin temer el frío o el revés;\nla feliz cosecha premiará tu obra\ny tendrás gran gozo con la buena mies.'
  },
  {
    'id_hymn': 75,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Siembra para Cristo,\nsiembra aún con llanto,\nÉl con su palabra guiará tus pies;\ntornará tus luchas en hermoso canto\ncuando se recoja la dorada mies.'
  },
  {
    'id_hymn': 76,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Oh, ruégote, Señor Jesús,\nque tú me enseñes siempre a hablar\ncon eco vivo de tu voz\na los que vagan sin tu paz.'
  },
  {
    'id_hymn': 76,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Enséñame, Señor Jesús;\ny haz que pueda yo enseñar\npalabra tuya, pura luz,\nque al alma hambrienta vida da.'
  },
  {
    'id_hymn': 76,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Oh, lléname, Señor Jesús;\nde gracia y de tu gran poder;\ny así yo pueda alrededor\ntu santa influencia derramar.'
  },
  {
    'id_hymn': 77,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Ve, ve oh Sión!,\ntu gran destino cumple; que Dios es luz\nal mundo proclamad; que el Hacedor\nde las naciones quiere\nque nadie muera en densa oscuridad.'
  },
  {
    'id_hymn': 77,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Alegres nuevas al mundo dad,\nnuevas de redención,\nde amor y libertad.'
  },
  {
    'id_hymn': 77,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Ve cuántos miles yacen todavía\nen las oscuras cárceles del mal;\nno saben que de Cristo la agonía\nfue para darles vida celestial.'
  },
  {
    'id_hymn': 77,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Es tu deber que salves de la muerte\nlas almas por las cuales Él murió.\nSé fiel, si no culpable quieres verte\nde que se pierda lo que Dios compró.'
  },
  {
    'id_hymn': 77,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Tus hijos manda con el gran mensaje;\ncon tu caudal impulso a ellos da.\nEn oración sustenta, fiel, sus almas,\nque cuanto gastes Cristo pagará.'
  },
  {
    'id_hymn': 78,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Centinelas del Maestro,\npor doquiera pregonad\nde la cruz las buenas nuevas,\nde Jesús y su bondad.'
  },
  {
    'id_hymn': 78,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Centinelas del Maestro,\nla trompeta haced oír:\ny que el hombre que la escuche,\nvida pueda recibir.'
  },
  {
    'id_hymn': 78,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Por la cima de los montes,\nPor los valles, por el mar,\npor doquier el Evangelio\nhoy os toca proclamar.'
  },
  {
    'id_hymn': 78,
    'order': 3,
    'type': 'STROPHE',
    'content': 'A los antros del pecado\ndondequiera haya aflicción,\nid con las alegres nuevas\nde la plena redención.'
  },
  {
    'id_hymn': 78,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Proclamad a los cautivos:\nDía es de libertad.\nAl cansado y desvalido,\na su Salvador llamad.'
  },
  {
    'id_hymn': 79,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Escuchad, Jesús nos dice:\n“¿Quiénes van a trabajar?\nCampos blancos hoy aguardan\nque los vayan a segar”.\nÉl nos llama, cariñoso,\nnos constriñe con su amor.\n¿Quién responde a su llamada:\n“Heme aquí, voy yo, Señor”?'
  },
  {
    'id_hymn': 79,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Si por tierra o por mares\nno pudieres transitar,\npuedes encontrar hambrientos\nen tu puerta que auxiliar.\nSi careces de riquezas,\nlo que dio la viuda da;\npues si por Jesús lo dieres,\nÉl te recompensará.'
  },
  {
    'id_hymn': 79,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Si como elocuente apóstol\nno pudieres predicar,\npuedes de Jesús decirles\ncuánto al hombre supo amar.\nSi no logras que sus culpas\nreconozca el pecador,\nconducir los niños puedes\nal benigno Salvador.'
  },
  {
    'id_hymn': 80,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Pronto la noche viene,\ntiempo es de trabajar;\nlos que lucháis por Cristo,\nno hay que descansar,\ncuando la vida es sueño,\ngozo, vigor, salud,\ny es la mañana hermosa\nde la juventud'
  },
  {
    'id_hymn': 80,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Pronto la noche viene,\ntiempo es de trabajar;\npara salvar al mundo\nhay que batallar,\ncuando la vida alcanza\ntoda su esplendidez,\ncuando es el mediodía\nde la madurez.'
  },
  {
    'id_hymn': 80,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Pronto la noche viene,\ntiempo es de trabajar;\nsi el pecador perece,\nidlo a rescatar,\naun a la edad provecta,\ndébil y sin salud,\naun a la misma tarde\nde la senectud.'
  },
  {
    'id_hymn': 81,
    'order': 1,
    'type': 'STROPHE',
    'content': 'La historia de Cristo contemos,\nque dará al mundo la luz;\nla paz y el perdón anunciemos,\ncomprados en cruenta cruz,\ncomprados en cruenta cruz.'
  },
  {
    'id_hymn': 81,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Rescatónos de las tinieblas,\ndisipó nuestra oscuridad;\nÉl nos salvó; nuestra paz compró,\nnos dio luz y libertad.'
  },
  {
    'id_hymn': 81,
    'order': 2,
    'type': 'STROPHE',
    'content': 'La historia de Cristo daremos\nal mortal que ignora su amor;\nnos dio Dios al Hijo, diremos,\nhallamos en Él favor,\nhallamos en Él favor.'
  },
  {
    'id_hymn': 81,
    'order': 3,
    'type': 'STROPHE',
    'content': 'A Jesús todos confesaremos\ncon sincero y fiel corazón;\nsus méritos invocaremos\ny Dios nos dará el perdón,\ny Dios nos dará el perdón.'
  },
  {
    'id_hymn': 82,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Oigo la voz del Buen Pastor,\nen espantosa soledad;\nllama al cordero, que en temor,\nvaga en la densa oscuridad.'
  },
  {
    'id_hymn': 82,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Llama aún, con bondad,\nquiere darte libertad;\n“ven a mí”, con amor,\ndice Cristo el Salvador.'
  },
  {
    'id_hymn': 82,
    'order': 2,
    'type': 'STROPHE',
    'content': '¿Quién ayudar quiere a Jesús,\na los perdidos a buscar?\nDifunda por doquier la luz\ndel evangelio, al predicar.'
  },
  {
    'id_hymn': 82,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Triste y desierto el mundo es,\nrodeado de peligros mil;\n“ven”, dice Cristo, “a la mies,\ntrae mis ovejas al redil”.'
  },
  {
    'id_hymn': 83,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Tierno y amante,\nJesús nos invita;\nLlámate a ti, y a mí.\nMírale allá\nen la puerta esperando;\naguarda a ti y a mí.'
  },
  {
    'id_hymn': 83,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Venid, venid, tristes,\ncansados, venid!\nTierno y amante\nJesús nos invita:\n“¡Oh pecadores, venid!”.'
  },
  {
    'id_hymn': 83,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Sigue llamando;\n¿Por qué dilatamos?\nLlámate a ti, y a mí.\n¿Tantas mercedes\nen poco tendremos?\nÁmate a ti y a mí.'
  },
  {
    'id_hymn': 83,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Oh, maravilla\nde amor prometido\ntanto a ti como a mí!\nVen y recibe\nel perdón ofrecido,\ndado de gracia a ti.'
  },
  {
    'id_hymn': 84,
    'order': 1,
    'type': 'STROPHE',
    'content': 'En el mundo turbulento\nCristo llama con amor,\nsuplicando cada día:\n“Ven a mí, oh pecador”.'
  },
  {
    'id_hymn': 84,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Sea en gozo o en tristeza,\nalegría o aflicción,\nen deberes o placeres,\nÉl me ofrece protección.'
  },
  {
    'id_hymn': 84,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cristo siempre me protege\ndel maligno engañador,\ny me pide que le rinda\nfiel servicio de amor.'
  },
  {
    'id_hymn': 84,
    'order': 4,
    'type': 'STROPHE',
    'content': ' ¡Oh, Señor, ven a ayudarme!\nOigo tu invitación.\nHoy te entrego sin reserva\nmente, alma y corazón.'
  },
  {
    'id_hymn': 85,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Allá la puerta franca está,\nsu luz es refulgente.\nLa cruz se mira más allá,\nseñal de amor ferviente'
  },
  {
    'id_hymn': 85,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Oh, cuánto me ama Dios a mí!\nLa puerta franca está por mí,\npor mí, por mí. Sí, quiero entrar allí.'
  },
  {
    'id_hymn': 85,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Si tienes fe avanza tú,\nla puerta es franca ahora.\nSi quieres palma, ten la cruz,\nSeñal de eterna gloria.'
  },
  {
    'id_hymn': 85,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Pasando el río, más allá,\nen celestial pradera,\nel premio de la cruz está:\n¡Eterna primavera!'
  },
  {
    'id_hymn': 85,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Si tú le sigues, con fervor,\neterna paz recibes.\nAmor tendrás en el Señor,\ny compartirlo debes.'
  },
  {
    'id_hymn': 86,
    'order': 1,
    'type': 'STROPHE',
    'content': '¿Te sientes casi resuelto ya?\n¿Te falta poco para creer?\n¿Por qué, pues, dices tú a Cristo el Salvador:\n“Hoy no, mañana sí te seguiré”?'
  },
  {
    'id_hymn': 86,
    'order': 2,
    'type': 'STROPHE',
    'content': '¿Te sientes casi resuelto ya?\nPues vence el “casi”, a Cristo ven.\n¡Haz hoy tu decisión!, ¡No la postergues ya!\n“Mañana puede ser tarde tal vez”.'
  },
  {
    'id_hymn': 86,
    'order': 3,
    'type': 'STROPHE',
    'content': 'El “casi”, hermano, es sin valor\nfrente al gran juez que te juzgará.\n¡Ay del que muere aquí casi teniendo fe!\nCompletamente ya perdido está.'
  },
  {
    'id_hymn': 87,
    'order': 1,
    'type': 'STROPHE',
    'content': 'De esclavitud, de noche y pesar,\nvengo, Jesús, vengo, Jesús;\ntu libertad, tu luz a gozar,\nvengo, Jesús, a ti.\nDe mi pobreza a tu plenitud,\nde mis dolores a tu salud,\nde mis pecados a tu virtud,\nvengo, Jesús, a ti.'
  },
  {
    'id_hymn': 87,
    'order': 2,
    'type': 'STROPHE',
    'content': 'De mi vergüenza y falta de luz,\nvengo, Jesús, vengo, Jesús;\na tu justicia, al pie de la cruz,\nvengo, Jesús, a ti.\nDe mi tristeza a consolación,\nde la tormenta a tu bendición,\nde la miseria a grata canción,\nvengo, Jesús, a ti.'
  },
  {
    'id_hymn': 87,
    'order': 3,
    'type': 'STROPHE',
    'content': 'De mi soberbio y vano vivir,\nvengo, Jesús, vengo, Jesús;\nsiempre tu santa ley a cumplir,\nvengo, Jesús, a ti.\nPorque me quitas todo temor,\nporque me das tu gozo, Señor,\npor tu perdón, rendido a tu amor,\nvengo, Jesús, a ti.'
  },
  {
    'id_hymn': 87,
    'order': 4,
    'type': 'STROPHE',
    'content': 'De la espantosa muerte al huir,\nvengo, Jesús, vengo, Jesús;\na la alegría y luz del vivir,\nvengo, Jesús, a ti.\nTú de la ruina me llevarás\na tu redil, tu abrigo de paz,\nsiempre a mirar tu gloria y tu faz,\nvengo, Jesús, a ti.'
  },
  {
    'id_hymn': 88,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Tal como soy de pecador,\nsin otra fianza que tu amor,\na tu llamado vengo a ti,\nCordero de Dios heme aquí.'
  },
  {
    'id_hymn': 88,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Tal como soy, buscando paz,\nen mi desgracia y mal tenaz,\ncombate rudo siento en mí,\nCordero de Dios, heme aquí.'
  },
  {
    'id_hymn': 88,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Tal como soy, con mi maldad,\nmiseria, pena y ceguedad,\npues hay remedio pleno en ti,\nCordero de Dios, heme aquí.'
  },
  {
    'id_hymn': 88,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Tal como soy, me acogerás;\nperdón y alivio me darás,\npues tu promesa ya creí,\nCordero de Dios, heme aquí.'
  },
  {
    'id_hymn': 88,
    'order': 5,
    'type': 'STROPHE',
    'content': 'Tal como soy, tu compasión\nquitado ha toda oposición;\nyo pertenezco todo a ti,\nCordero de Dios, heme aquí.'
  },
  {
    'id_hymn': 89,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Sólo anhelo,\nCristo amado,\nen tus leyes caminar;\nsiempre hacer lo que es tu agrado,\ntus acciones imitar.\nMas soy débil y cargado\ncon mi mucha iniquidad,\npues, oh Dios, yo he faltado\na tu santa voluntad.'
  },
  {
    'id_hymn': 89,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Ten piedad,\noh Cristo amado,\nde este pobre pecador.\nLímpiame de mi pecado,\noh, bendito Salvador.\nNo permitas que me venza\notra vez el tentador.\n¡oh mi Dios!, con gran vergüenza\nte lo pido por tu amor.'
  },
  {
    'id_hymn': 89,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Al que pide,\nes tu promesa\ndarle lo que ha menester.\nYo anhelo tu pureza,\ntu limpieza, tuyo ser.\nY en tu reino, cuando vengas,\nten memoria aún de mí,\nque por hijo tú me tengas\ny me lleves junto a ti.'
  },
  {
    'id_hymn': 90,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Yo escucho, buen Jesús,\ntu dulce voz de amor,\nque, desde el árbol de la cruz,\ninvita al pecador.\nYo soy pecador,\nnada hay bueno en mí;\nser objeto de tu amor\ndeseo y vengo a ti.'
  },
  {
    'id_hymn': 90,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Tú ofreces el perdón\nde toda iniquidad,\nsi el llanto inunda el corazón\nque acude a tu piedad.\nYo soy pecador,\nten de mí piedad;\nve mi llanto de dolor\ny borra mi maldad.'
  },
  {
    'id_hymn': 90,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Prometes aumentar\nla fe del que creyó,\ny gracia sobre gracia dar\na quien en ti confió.\nCreo en ti, Señor,\nsólo fío en ti;\ndame tu infinito amor,\ny basta para mí.'
  },
  {
    'id_hymn': 90,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Yo quiero conocer\ntu amor y gran poder,\nde ti tu dulce voz oír\ny siempre obedecer.\nYo soy pecador,\nnada hay bueno en mí;\nser objeto de tu amor\ndeseo y vengo a ti.'
  },
  {
    'id_hymn': 91,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Bendiciones ricas, libres,\ncual copiosas lluvias das,\nrefrescando a los sedientos,\nCristo amante, ¡oh, dámelas!\nDámelas, dámelas;\nCristo amante ¡oh, dámelas!'
  },
  {
    'id_hymn': 91,
    'order': 2,
    'type': 'STROPHE',
    'content': 'No me pases, Padre amante,\naunque es vil mi corazón.\nVen, oh Dios, en este instante,\ndame aquí tu bendición.\nBendición, bendición,\ndame, oh Dios, tu bendición.'
  },
  {
    'id_hymn': 91,
    'order': 3,
    'type': 'STROPHE',
    'content': 'He dormido en el pecado,\ntu bondad no aprecié,\nen el mundo he confiado,\n¡Oh, perdona y sálvame!\nSálvame, sálvame,\n¡Oh, perdona y sálvame!'
  },
  {
    'id_hymn': 91,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Santo Espíritu divino,\ntú que vista al ciego das,\ndame el mérito de Cristo,\nhabla a mi alma dulce paz.\nDulce paz, dulce paz,\nhabla a mi alma dulce paz.'
  },
  {
    'id_hymn': 92,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cautívame Señor y libre en ti seré;\nque tornes mi odio en amor,\nvictoria así tendré.\nMi vida a ti la doy, en ti amparado estoy,\nasido de tu mano, hoy,\npues a la gloria voy.'
  },
  {
    'id_hymn': 92,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Debilitado estoy, mas fuerte en ti seré;\nen pos de ti camine hoy,\npor ti yo venceré.\nQue pueda en ti crecer,\nque logre el mal vencer,\nque sienta por mi hermano amor,\ncual sientes tú, Señor.'
  },
  {
    'id_hymn': 92,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Seré buen luchador, el yo podré vencer;\ntu gracia me darás, Señor,\nme has de socorrer.\nTendré feliz mansión, en la gloriosa Sión;\ny al terminar mi lucha aquí\ntendré corona allí.'
  },
  {
    'id_hymn': 93,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Comprado con sangre por Cristo,\ngozoso al cielo yo voy;\nlibrado por gracia infinita,\ncual hijo en su casa estoy.'
  },
  {
    'id_hymn': 93,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Por Él, por Él,\ncomprado con sangre yo soy;\ncon Él, con Él,\ncon Cristo al cielo yo voy.'
  },
  {
    'id_hymn': 93,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Soy libre de pena y culpa,\nsu gozo Él me hace sentir,\nÉl llena de gracia mi alma,\ncon Él es tan dulce vivir.'
  },
  {
    'id_hymn': 93,
    'order': 3,
    'type': 'STROPHE',
    'content': 'En Cristo Jesús yo medito\nen todo momento y lugar;\npor tantas mercedes de Cristo\nsu nombre me gozo en loar.'
  },
  {
    'id_hymn': 93,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Yo sé que me espera corona,\nla cual a los fieles dará;\nme entrego con fe al Maestro,\nsabiendo que me guardará.'
  },
  {
    'id_hymn': 94,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Mi Salvador en su bondad\nal mundo malo descendió;\ny de hondo abismo de maldad,\nÉl mi alma levantó.'
  },
  {
    'id_hymn': 94,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Seguridad me dio Jesús\ncuando su mano me tendió;\nestando en sombra a plena luz,\nen su bondad, me levantó.'
  },
  {
    'id_hymn': 94,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Su voz constante resistí\naunque Él amante me llamó,\nmas su palabra recibí\ny fiel me levantó.'
  },
  {
    'id_hymn': 94,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Tortura cruel sufrió por mí\ncuando la cruz Él escaló;\ntan sólo así salvado fuí,\ny así me levantó.'
  },
  {
    'id_hymn': 95,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Tú dejaste tu trono y corona por mí\nal venir a Belén a nacer;\nmas a ti no fue dado el entrar en mesón,\ny en pesebre te hicieron yacer.'
  },
  {
    'id_hymn': 95,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Ven a mi corazón, oh Cristo,\npues en él hay lugar para ti.\nVen a mi corazón, oh Cristo, ven,\nPues en él hay lugar para ti.'
  },
  {
    'id_hymn': 95,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En el cielo las huestes gloriosas te dan\nalabanza y seráfico honor,\nmas humilde viniste a la tierra a sufrir\npor salvar al más vil pecador.'
  },
  {
    'id_hymn': 95,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Tú viniste, Señor, con tu gran bendición,\npara dar libertad y salud;\nmas con saña furiosa te hicieron morir\naunque vieron tu amor y virtud.'
  },
  {
    'id_hymn': 95,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Alabanzas sublimes los cielos darán\ncuando vengas glorioso de allí,\ny tu voz entre nubes dirá : “ven a mí,\nque a mi lado hay lugar para ti”.'
  },
  {
    'id_hymn': 96,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Sublime gracia del Señor\nque a un infeliz salvó;\nfui ciego mas hoy miro yo,\nperdido y Él me halló.'
  },
  {
    'id_hymn': 96,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Su gracia me enseñó a temer;\nmis dudas ahuyentó;\n¡Oh, cuán precioso fue a mi ser\ncuando Él me transformó!'
  },
  {
    'id_hymn': 96,
    'order': 3,
    'type': 'STROPHE',
    'content': 'En los peligros o aflicción\nque yo he tenido aquí,\nsu gracia siempre me libró\ny me guiará feliz.'
  },
  {
    'id_hymn': 96,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Y cuando en Sión por siglos mil\nbrillando esté cual sol,\nyo cantaré por siempre allí\nsu amor que me salvó.'
  },
  {
    'id_hymn': 97,
    'order': 1,
    'type': 'STROPHE',
    'content': 'En cruz cruel mi Salvador\nsu sangre derramó\npor este pobre pecador\na quien así salvó.'
  },
  {
    'id_hymn': 97,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Fue primero en la cruz\ndonde yo vi la luz,\ny mi carga de pecado dejé;\nfue allí por fe do vi a Jesús,\ny siempre con Él feliz seré.'
  },
  {
    'id_hymn': 97,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Perdido fui a mi Jesús,\nÉl vio mi condición;\nen mi alma derramó su luz\nsu amor me dio perdón.'
  },
  {
    'id_hymn': 97,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Venció a la muerte con poder\ny el Padre le exaltó;\nconfiar en Él es mi placer,\nmorir no temo yo.'
  },
  {
    'id_hymn': 98,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Lejos de mi Padre Dios,\npor Jesús hallado,\npor su gracia y por su amor\nsólo fui salvado.'
  },
  {
    'id_hymn': 98,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Es Jesús mi Señor y mi gloria eterna;\nÉl me amó y me salvó\npor su gracia tierna.'
  },
  {
    'id_hymn': 98,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En Jesús, mi Salvador,\npongo mi confianza;\ntoda mi necesidad suple en abundancia.'
  },
  {
    'id_hymn': 98,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cerca de mi buen Pastor,\nvivo cada día;\ntoda gracia en mi Señor halla el alma mía.'
  },
  {
    'id_hymn': 98,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Guárdame, Señor Jesús,\npara que no caiga;\ncual sarmiento de la vid, vida de ti traiga.'
  },
  {
    'id_hymn': 99,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Fuente de la vida eterna\ny de toda bendición,\nensalzar tu gracia tierna\ndebe todo corazón.\nTu piedad inagotable\nse deleita en perdonar;\nsólo tú eres adorable;\ngloria a ti debemos dar.'
  },
  {
    'id_hymn': 99,
    'order': 2,
    'type': 'STROPHE',
    'content': 'De los cánticos celestes\nte quisiéramos cantar,\nentonados por las huestes\nque viniste a rescatar.\nDe los cielos descendiste\nporque nos tuviste amor;\ntierno te compadeciste\ny nos diste tu favor.'
  },
  {
    'id_hymn': 99,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Toma nuestros corazones,\nllénanos de tu verdad,\nde tu Espíritu los dones,\ny de toda santidad.\nGuíanos en la obediencia,\nhumildad, amor y fe;\nnos ampare tu clemencia;\nSalvador propicio sé.'
  },
  {
    'id_hymn': 100,
    'order': 1,
    'type': 'STROPHE',
    'content': 'En Jesucristo, mártir de paz,\nen horas negras y de tempestad,\nhallan las almas dulce solaz,\ngrato consuelo, felicidad.'
  },
  {
    'id_hymn': 100,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Gloria cantemos al Redentor\nque por nosotros quiso morir;\ny que la gracia del Salvador\nsiempre dirija nuestro vivir.'
  },
  {
    'id_hymn': 100,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En nuestras luchas, en el dolor,\nen tristes horas de gran tentación,\ncalma le infunde, santo vigor,\nnuevos alientos al corazón.'
  },
  {
    'id_hymn': 100,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cuando en la lucha falte la fe\ny esté el alma por desfallecer,\nCristo nos dice: “Siempre os daré\ngracia divina, santo poder”.'
  },
  {
    'id_hymn': 101,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Castillo fuerte es nuestro Dios,\ndefensa y buen escudo;\ncon su poder nos librará\nen este trance agudo.\nCon furia y con afán acósanos Satán,\npor armas deja ver astucia y gran poder;\ncual él no hay en la tierra.'
  },
  {
    'id_hymn': 101,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Luchar aquí sin el Señor,\ncuán vano hubiera sido;\nmas por nosotros pugnará\nde Dios el Escogido.\n¿Sabéis quién es? Jesús,\nel que venció en la cruz;\nSeñor de Sabaoth, Omnipotente Dios;\nÉl triunfa en la batalla.'
  },
  {
    'id_hymn': 101,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Aun cuando estén demonios mil\nprontos a devorarnos,\nno temeremos, porque Dios\nvendrá a defendernos.\nQue muestre su vigor Satán, y su furor;\ndañarnos no podrá pues derrotado está\npor la Palabra santa.'
  },
  {
    'id_hymn': 101,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Sin destruir la dejará,\naunque mal de su agrado:\nes la Palabra del Señor\nque lucha a nuestro lado.\nQue lleven con furor\nlos bienes, vida, honor,\nlos hijos, la mujer, todo ha de perecer;\nde Dios el reino queda.'
  },
  {
    'id_hymn': 102,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Roca de la eternidad'
  },
  {
    'id_hymn': 102,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Aunque fuese siempre fiel,\naunque llore sin cesar,\ndel pecado no podré\njustificación lograr;\nsólo en ti teniendo fe; deuda tal podré pagar.'
  },
  {
    'id_hymn': 102,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Mientras tenga que vivir\nen el mundo de maldad;\ncuando vaya a responder\nen tu augusto tribunal,\nsé mi escondedero fiel, Roca de la eternidad.'
  },
  {
    'id_hymn': 103,
    'order': 1,
    'type': 'STROPHE',
    'content': 'No sé por qué la gracia del Señor\na mí un día me alcanzó,\nni sé por qué obró la salvación\nen un indigno como yo.'
  },
  {
    'id_hymn': 103,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Mas yo sé en quién he creído,\ny es poderoso para guardarme\nseguro hasta el día\nen que venga Él por mí.'
  },
  {
    'id_hymn': 103,
    'order': 2,
    'type': 'STROPHE',
    'content': 'No sé por qué la gracia del Señor\nen mí Él quiso demostrar,\nni sé por qué cuando era pecador\npor mí su vida vino a dar.'
  },
  {
    'id_hymn': 103,
    'order': 3,
    'type': 'STROPHE',
    'content': 'No sé cómo es que su Espíritu\nconvence al hombre de su error,\nni cómo obra en el corazón\ncreando fe en el Señor.'
  },
  {
    'id_hymn': 103,
    'order': 4,
    'type': 'STROPHE',
    'content': 'No sé cuando el Señor regresará,\nde noche o al amanecer,\nni sé si por la muerte he de pasar\no vivo subiré con Él.'
  },
  {
    'id_hymn': 104,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Mi fe se afirma en Jesús\nno en una invención.\nConfío en quien murió en la cruz\npor darme salvación.'
  },
  {
    'id_hymn': 104,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Su sangre clama a mi favor\nbrindándome salud,\nquiere colmarme de su amor,\nllenarme de virtud.'
  },
  {
    'id_hymn': 104,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Mis dudas Él ya desterró,\nmi miedo terminó.\nAl pecador que mucho erró\nsu amor ya perdonó.'
  },
  {
    'id_hymn': 104,
    'order': 3,
    'type': 'STROPHE',
    'content': 'En su palabra hallo paz,\nconsuelo y bendición;\nsu salvación me da solaz,\nla gracia del perdón.'
  },
  {
    'id_hymn': 104,
    'order': 4,
    'type': 'STROPHE',
    'content': 'En Él hay grande sanidad,\nmi lepra Él curó;\ncompró en la cruz mi libertad,\nallí su vida dio.'
  },
  {
    'id_hymn': 105,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Los tesoros del mundo\nno deseo juntar.\nQuiero entrar en tu aprisco,\nen tu célico hogar.\nEn el libro del reino\nque en los cielos está,\ndime, Cristo benigno,\n¿se halla mi nombre allá?'
  },
  {
    'id_hymn': 105,
    'order': 2,
    'type': 'CHORUS',
    'content': '¿Se halla mi nombre allá?\n¿Se halla mi nombre allá?\nEn el libro del reino,\n¿se halla mi nombre allá?'
  },
  {
    'id_hymn': 105,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Mis pecados son muchos\ncual la arena del mar;\nmas, Jesús, en tu sangre,\nme los puedes lavar.\nHe aquí tus promesas,\nlas que escritas están:\n“Aunque rojos cual grana\ncomo nieve serán”.'
  },
  {
    'id_hymn': 105,
    'order': 3,
    'type': 'STROPHE',
    'content': 'En la bella ciudad con\nsus mansiones de luz,\ndo los santificados\nandarán con Jesús,\ndonde el mal no entra nunca,\ndonde el bien reinará,\ndime, Cristo benigno,\n¿se halla mi nombre allá?'
  },
  {
    'id_hymn': 106,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cristo, Salvador, sé mi guiador\nen la senda de esta vida\na la patria apetecida.\nNuestro galardón nos espera en Sión.'
  },
  {
    'id_hymn': 106,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En dura aflicción haz que el corazón\nnunca del sufrir se queje,\nmas a ti el remedio deje.\n¡Quien te quiere amar, aquí ha de penar!'
  },
  {
    'id_hymn': 106,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Lágrimas, dolor, quita ¡Oh, Salvador!\nEn tu dulce compañía\nguíanos día tras día.\n¡Ábrenos al fin del cielo el jardín!'
  },
  {
    'id_hymn': 107,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Lágrimas, dolor, quita ¡Oh, Salvador!\nEn tu dulce compañía\nguíanos día tras día.\n¡Ábrenos al fin del cielo el jardín!'
  },
  {
    'id_hymn': 107,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Allá no habrá tribulación,\nningún pesar, ningún dolor;\ny entonaré feliz canción\nde alabanza al Señor.'
  },
  {
    'id_hymn': 107,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Resulta triste estar aquí\nmuy lejos de mi Redentor,\nmás morarán con Él allí\nlos redimidos por su amor.'
  },
  {
    'id_hymn': 107,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Perfecto amor encontraré\nen la mansión do Cristo está;\nperfecta calma allí tendré,\ny mi alma al fin descansará.'
  },
  {
    'id_hymn': 107,
    'order': 4,
    'type': 'STROPHE',
    'content': 'En su presencia gozaré\nsu inmenso amor, su gran bondad;\nfeliz con Cristo reinaré\npor toda la eternidad.'
  },
  {
    'id_hymn': 108,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Bajo sus alas ¡seguro descanso!\nAunque anochece y amaga el turbión,\nen Él confío, su brazo me guarda;\nhijo soy de su eternal redención.'
  },
  {
    'id_hymn': 108,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Salvo en Jesús, salvo en Jesús,\n¿quién de Él podrá apartarme?\nBajo sus alas mi alma estará\nSalva y segura por siempre.'
  },
  {
    'id_hymn': 108,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Bajo sus alas ¡eterno refugio!,\ntanto lo anhela este fiel corazón.\nSi para mí no hay remedio en la tierra,\nCristo me sana y me da bendición.'
  },
  {
    'id_hymn': 108,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Bajo sus alas ¡placer indecible!,\nme escondo aquí mientras pase mi afán;\nfiel protección de mi fiero enemigo,\npaz y salud me proporcionarán.'
  },
  {
    'id_hymn': 109,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Omnipotente Padre Dios,\ndanos la fe del Salvador,\nque a nuestros padres fue sostén\nen los momentos de dolor.\n¡Hasta la muerte, en Cristo estén\nnuestra esperanza y nuestra fe!.'
  },
  {
    'id_hymn': 109,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Danos la fe que dio poder\na los soldados de la cruz,\nque en cumplimiento del deber\ndieron su vida por Jesús.\n¡Hasta la muerte, en Cristo estén\nnuestra esperanza y nuestra fe!.'
  },
  {
    'id_hymn': 109,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Danos la fe que dé valor\npara enfrentarnos con el mal,\ny por palabra y acción\nbuen testimonio siempre dar.\n¡Hasta la muerte, en Cristo estén\nnuestra esperanza y nuestra fe!.'
  },
  {
    'id_hymn': 110,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Si dejas tú que Dios te guié\ny fías solamente en Él,\nen tus angustias y conflictos\ntendrás su ayuda grande y fiel.\nEl invariable amor de Dios\nes roca firme y eternal.'
  },
  {
    'id_hymn': 110,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Espera en Dios confiadamente,\nlleno de gozo el corazón;\ncon gratitud acepta siempre\ndel cielo toda bendición;\nDios quiere siempre lo mejor\npara los hijos de su amor.'
  },
  {
    'id_hymn': 110,
    'order': 3,
    'type': 'STROPHE',
    'content': 'En la oración constante seas,\ny obediente a su ley;\nsu protección Jehová ofrece;\nen sus promesas pon tu fe.\nJehová no olvida nunca al fiel,\nni al justo que confía en Él.'
  },
  {
    'id_hymn': 111,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Eterna Roca es mi Jesús,\nrefugio en la tempestad;\nconfianza he puesto yo en Él,\nrefugio en la tempestad.'
  },
  {
    'id_hymn': 111,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Roca eterna, nuestra protección,\nnuestra fuerza, nuestro Salvador,\nnuestro auxilio en la tribulación,\nconsolación en el dolor.'
  },
  {
    'id_hymn': 111,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Es sombra en día de calor,\nrefugio en la tempestad;\ndefensa eterna es mi Señor,\nrefugio en la tempestad.'
  },
  {
    'id_hymn': 111,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Oh!, Roca eterna, mi Jesús,\nrefugio en la tempestad,\nsé tú mi guía, fuerza y luz,\nrefugio en la tempestad.'
  },
  {
    'id_hymn': 111,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Segura es la victoria en ti,\nrefugio en la tempestad;\neterna paz tendrás por fin,\nrefugio en la tempestad.'
  },
  {
    'id_hymn': 112,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Oh, cuán dulce es fiar en Cristo\ny entregarle todo a Él,\nesperar en sus promesas,\ny en sus sendas serle fiel!'
  },
  {
    'id_hymn': 112,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Cristo!, ¡Cristo!, ¡cuánto te amo!\nTu poder probaste en mí.\n¡Cristo!, ¡Cristo!, puro y santo,\nsiempre quiero fiar en ti.'
  },
  {
    'id_hymn': 112,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Es muy dulce fiar en Cristo\ny cumplir su voluntad,\nno dudando su palabra,\nsiempre andando en la verdad.'
  },
  {
    'id_hymn': 112,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cuánta paz se encuentra en Cristo\nen su amor hay libertad,\nperdonado del pecado,\n¡Oh, que gran felicidad!'
  },
  {
    'id_hymn': 112,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Siempre quiero fiar en Cristo,\nmi precioso Salvador,\nque en la vida y en la muerte\nme sostiene con su amor.'
  },
  {
    'id_hymn': 113,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Jesús es mi luz, jamás temeré;\nde día y de noche en luz andaré.\nEn horas de llanto, de luto y dolor,\nConsuelo y gozo me infunde el Señor.'
  },
  {
    'id_hymn': 113,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Jesús es mi luz, mi todo, mi bien;\nde día y de noche es mi sostén.\nJesús es mi luz, mi todo, mi bien;\nde día y de noche Él es mi sostén.'
  },
  {
    'id_hymn': 113,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Jesús es mi luz; si en males estoy,\nal Padre benigno seguro yo voy.\nAllí está Cristo, mi fiel Mediador,\nsus méritos siempre pondrá a mi favor.'
  },
  {
    'id_hymn': 113,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Jesús es mi luz, mi amparo y broquel;\nvictoria obtendré; me mantiene muy fiel.\nSi débil estoy en mi ayuda vendrá;\nsu brazo potente mi andar sostendrá.'
  },
  {
    'id_hymn': 114,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Oh!, tenga yo la ardiente fe\nque ante enemigos mil\nno temblará ni aún cuando esté,\nni aún cuando esté\nen la miseria vil, en la miseria vil.'
  },
  {
    'id_hymn': 114,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Tal fe, que no se quejará\nni bajo corrección;\nen hora amarga afirmará, afirmará\nen Dios el corazón, en Dios el corazón.'
  },
  {
    'id_hymn': 114,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Refulge más si hay tempestad\nrugiendo en derredor,\ny cruzará la oscuridad, la oscuridad,\nsin dudas ni temor, sin dudas ni temor.'
  },
  {
    'id_hymn': 114,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Oh, dame a mí Señor, tal fe,\ny, venga bien o mal,\nestando aquí gustar podré, gustar podré\nla dicha celestial, la dicha celestial.'
  },
  {
    'id_hymn': 115,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Con gozo canto al Señor\ndesde que salvo soy,\npues es mi Rey, mi Salvador,\ndesde que salvo soy'
  },
  {
    'id_hymn': 115,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Desde que salvo soy,\ndesde que salvo soy\nsólo en Él me gloriaré;\ndesde que salvo soy\nen mi Redentor me gloriaré.'
  },
  {
    'id_hymn': 115,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Yo amo Dios, y mi ansiedad,\ndesde que salvo soy,\nestá en cumplir su voluntad,\ndesde que salvo soy.'
  },
  {
    'id_hymn': 115,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Un gozo tengo que es sin par,\ndesde que salvo soy;\na Cristo alabo sin cesar,\ndesde que salvo soy.'
  },
  {
    'id_hymn': 115,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Tengo un hogar al cual iré,\ndesde que salvo soy;\ny allí seguro viviré,\ndesde que salvo soy.'
  },
  {
    'id_hymn': 116,
    'order': 1,
    'type': 'STROPHE',
    'content': 'De ti he menester mi buen Señor,\ntu voz me da placer, gran paz y amor.'
  },
  {
    'id_hymn': 116,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Tu ayuda necesito,\nsiempre, a cada instante;\nbendíceme, te pido,\naumenta mi fe.'
  },
  {
    'id_hymn': 116,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Socórreme vencer al tentador.\nConfiando en tu poder soy vencedor.'
  },
  {
    'id_hymn': 116,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Tu voluntad, mi Dios, me mostrarás;\npodré oír tu voz, me guiarás.'
  },
  {
    'id_hymn': 117,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Oh Dios, revélame tu voluntad;\nla senda hazme ver con claridad.\nPor dónde debo andar,\nqué pasos he de dar,\npara poder gozar tu voluntad.'
  },
  {
    'id_hymn': 117,
    'order': 2,
    'type': 'STROPHE',
    'content': 'He de aceptar, Señor, tu voluntad\nen tiempos de dolor y adversidad.\nEn medio de aflicción,\nen prueba y tentación,\nque sea mi porción tu voluntad.'
  },
  {
    'id_hymn': 117,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Quiero probar, Señor, tu voluntad,\ny el gran poder sentir de tu verdad.\nPor fe deseo andar,\ntu plenitud tomar,\ny en todo tiempo amar tu voluntad.'
  },
  {
    'id_hymn': 118,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Condúceme, Maestro, por tu bondad,\ny así jamás me falte seguridad;\nno puedo un solo paso sin ti andar;\noh, mi Jesús, sé siempre mi luminar.'
  },
  {
    'id_hymn': 118,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En tu amor envuelve mi corazón,\ny dale paz y calma en la aflicción;\nque halle en ti reposo allá en la cruz,\nque siempre me halle cerca de ti, Jesús.'
  },
  {
    'id_hymn': 118,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Y cuando fuerte azote la tempestad,\ny al alma desanime la adversidad,\ncondúceme, Maestro, por tu bondad,\ny así jamás me falte seguridad.'
  },
  {
    'id_hymn': 119,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Todas las promesas del Señor Jesús\nson apoyo poderoso de mi fe.\nMientras luche aquí\nbuscando yo su luz,\nsiempre en sus promesas confiaré.'
  },
  {
    'id_hymn': 119,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Grandes, fieles,\ntodas las promesas\nque el Señor ha dado;\ngrandes, fieles,\nen ellas yo por siempre confiaré.'
  },
  {
    'id_hymn': 119,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Todas sus promesas\npara el hombre fiel,\nel Señor, por su palabra, cumplirá;\ny confiado sé que para siempre en Él\npaz eterna mi alma gozará.'
  },
  {
    'id_hymn': 119,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Todas las promesas del Señor serán\ngozo y fuerza en nuestra vida terrenal;\nellas en la dura lid nos sostendrán,\ny triunfar podremos sobre el mal.'
  },
  {
    'id_hymn': 120,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Mi fe contempla a ti,\nCordero celestial, mi Salvador.\nOye mi petición, quita mi transgresión\nsea tu posesión desde hoy, Señor.'
  },
  {
    'id_hymn': 120,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Al débil corazón\ntu gracia un celo dé, inspirador.\nMoriste tú por mí, sea mi amor a ti\npuro y ferviente así, cual vivo ardor.'
  },
  {
    'id_hymn': 120,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Por senda oscura voy,\nno veo en derredor; más me guiarás.\nEnjuga mi llorar, mi noche haz brillar\ny así no pueda errar de ti jamás.'
  },
  {
    'id_hymn': 121,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Yo fui peregrino errabundo,\ny en las garras del mal me envolví,\nmás Cristo apartóme del mundo\ny por siempre mi alma le di.'
  },
  {
    'id_hymn': 121,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Ciertamente el bien\ny la compasión de Dios,\nhasta el fin, hasta el fin seguirán.'
  },
  {
    'id_hymn': 121,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Jesús mi alma triste conforta;\nnuevas fuerzas a diario tendré.\nSu fuente de paz no se agota,\ny en su hogar celestial moraré.'
  },
  {
    'id_hymn': 121,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Más si ando en el valle de sombra,\nva conmigo mi buen Salvador.\nSi tú quieres que Él te proteja,\nhoy recibe su gracia y amor.'
  },
  {
    'id_hymn': 121,
    'order': 3,
    'type': 3,
    'content': 'Y en la casa de Dios moraré\npor siempre; y comeré\na la mesa de Jehová.\nCiertamente el bien\ny la compasión de Dios,\n  hasta el fin, hasta el fin seguirán.'
  },
  {
    'id_hymn': 122,
    'order': 1,
    'type': 'STROPHE',
    'content': 'A ti Señor levantaré mi ser,\nconsérvame en tu fidelidad,\notórgame por fe te pueda ver\ny líbrame de la incredulidad.\nOh, dame paz, tu ayuda he de tener,\npara poder vivir en santidad.'
  },
  {
    'id_hymn': 122,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Reposo en paz, pues el Señor guiará;\nbatallas mil por su bondad vencí;\nconfiado estoy en quién no cambiará,\nquién me sostiene desde que nací;\naún la tormenta Él gobernará,\nme librará de cuánto yo temí.'
  },
  {
    'id_hymn': 122,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Comprada fue mi alma ya por ti;\nmi gozo está siempre en obedecer;\nmi corazón, mi entero ser te di,\nbuen Salvador, aumenta mi saber.\nAhonda en mí la fe que conocí;\nTu voluntad yo cumpla con placer.'
  },
  {
    'id_hymn': 123,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Hoy me llama el mundo en vano,\nquiero ser cual Cristo;\nya no sirvo a lo mundano,\nquiero ser cual Cristo.'
  },
  {
    'id_hymn': 123,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Ser como Él de corazón!,\nes mi sola aspiración;\nen cualquiera condición\nquiero ser cual Cristo.'
  },
  {
    'id_hymn': 123,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Mis cadenas Cristo ha roto,\nquiero ser cual Cristo,\nsu servicio haré, devoto,\nquiero ser cual Cristo.'
  },
  {
    'id_hymn': 123,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Ya que al cielo Él va a llevarme,\nquiero ser cual Cristo;\nque Él un premio pueda darme,\nquiero ser cual Cristo.'
  },
  {
    'id_hymn': 124,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Da lo mejor al Maestro;\ntu juventud, tu vigor;\ndale el ardor de tu alma,\nlucha del bien en favor.\nCristo nos dio el ejemplo,\nen todo Él fue lo mejor;\nséle devoto ferviente,\ndale de ti lo mejor.'
  },
  {
    'id_hymn': 124,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Da lo mejor al Maestro;\ntu juventud, tu vigor;\ndale el ardor de tu alma,\nde la verdad lucha en pro.'
  },
  {
    'id_hymn': 124,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Da lo mejor al Maestro;\ndale de tu alma el honor;\nque sea Él en tu vida\nel Santo Confortador.\nDale y te será dado\nel Hijo amado de Dios;\nsírvele día por día,\ndale de ti lo mejor.'
  },
  {
    'id_hymn': 124,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Da lo mejor al Maestro;\nnada supera su amor;\nse dio por ti a sí mismo\ndejando gloria y honor.\nNo murmuró al dar su vida\npues Él sufrió con valor;\námale más cada día\ndale de ti lo mejor.'
  },
  {
    'id_hymn': 125,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Salvador, a ti me rindo,\nobedezco sólo a ti.\nMi guiador, mi fortaleza,\ntodo encuentro, oh Cristo, en ti.'
  },
  {
    'id_hymn': 125,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Yo me rindo a ti, yo me rindo a ti;\nmi flaqueza, mis pecados\ntodo rindo a ti.'
  },
  {
    'id_hymn': 125,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Te confiesa su delito\nmi contrito corazón.\nOye, Cristo, mi plegaria;\nquiero en ti tener perdón.'
  },
  {
    'id_hymn': 125,
    'order': 3,
    'type': 'STROPHE',
    'content': 'A tus pies, Señor, entrego\nbienes, goces y placer.\nQue tu Espíritu me llene,\ny de ti sienta el poder.'
  },
  {
    'id_hymn': 125,
    'order': 4,
    'type': 'STROPHE',
    'content': '¡Oh, qué gozo encuentro en Cristo!\n¡Cuánta paz a mi alma da!\na su causa me consagro,\ny su amor mi amor será.'
  },
  {
    'id_hymn': 126,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cristo me ayuda por Él a vivir,\nCristo me ayuda por Él a morir.\nHasta que llegue su gloria a ver,\ncada momento le entrego mi ser.'
  },
  {
    'id_hymn': 126,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Cada momento la vida me da;\ncada momento conmigo Él está.\nHasta que llegue su gloria a ver,\ncada momento le entrego mi ser.'
  },
  {
    'id_hymn': 126,
    'order': 2,
    'type': 'STROPHE',
    'content': '¿Siento pesares? Muy cerca Él está.\n¿Siento dolores? Alivio me da.\n¿tengo aflicciones?\nMe muestra su amor;\ncada momento me guarda el Señor.'
  },
  {
    'id_hymn': 126,
    'order': 3,
    'type': 'STROPHE',
    'content': '¿Tengo amarguras?,\no, ¿Tengo temor?\n¿Tengo tristezas? Me inspira valor.\n¿Tengo conflictos o penas aquí?\nCada momento se acuerda de mí.'
  },
  {
    'id_hymn': 126,
    'order': 4,
    'type': 'STROPHE',
    'content': '¿Tengo flaquezas?, o, ¿débil estoy?\nCristo me dice: “Tu amparo yo soy”.\nCada momento, en sombra o en luz,\nsiempre anda junto conmigo Jesús.'
  },
  {
    'id_hymn': 127,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cúmplase, oh Cristo, tu voluntad.\nsólo tú puedes mi alma salvar.\nCual alfarero, para tu honor\nvasija útil hazme, Señor.'
  },
  {
    'id_hymn': 127,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cúmplase, oh Cristo, tu voluntad.\nQuita de mi alma toda maldad.\nCual blanca nieve hazla fulgir,\ny fiel y humilde hazme vivir.'
  },
  {
    'id_hymn': 127,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cúmplase, oh Cristo, tu voluntad.\ntoda dolencia puedes sanar;\ncuitas, pesares, con tu poder,\nquieres hacerlos desvanecer.'
  },
  {
    'id_hymn': 127,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Cúmplase, oh Cristo, tu voluntad.\nMora en mi alma, dale tu paz,\npara que el mundo vea tu amor,\ntu obra perfecta, oh buen Salvador.'
  },
  {
    'id_hymn': 128,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Padre, yo vengo a ti; sólo hay en ti poder.\nProtégeme, Señor, mi ayudador.\nSombras tan sólo aquí,\nmás densas hoy que ayer,\nme cercan, mas me harás un vencedor.'
  },
  {
    'id_hymn': 128,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Padre, yo vengo a ti, oye mi voz;\nconfío sólo en ti, dame tu amor.'
  },
  {
    'id_hymn': 128,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Ampárame, Señor; dame tu dulce amor.\nAleja el mal de mí, dame tu paz.\n¡Oh, Padre, líbrame de todo cruel dolor,\ny en el cielo al fin vea tu faz!'
  },
  {
    'id_hymn': 128,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Padre, yo vengo a ti; dame tu bendición.\nConfío en ti, Señor; sé mi sostén.\nTu gracia y tu poder llenen mi corazón.\nGuíame por tu amor al santo Edén.'
  },
  {
    'id_hymn': 129,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Yo te seguiré, ¡Oh Cristo!,\ndondequiera que estés;\ndonde tú me guíes sigo;\nsí, Señor, te seguiré.'
  },
  {
    'id_hymn': 129,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Yo te seguiré,¡oh Cristo!\ntú moriste, fue por mí.\nAunque todos te negaren,\nyo, Señor, te seguiré.'
  },
  {
    'id_hymn': 129,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Aunque duro el camino,\nsin jalones y sin luz,\nseguiré siempre confiado\nen las huellas de Jesús.'
  },
  {
    'id_hymn': 129,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Afligido, agotado,\ndébil, lleno de dolor,\nregocíjome pues ando\nen las huellas del Señor.'
  },
  {
    'id_hymn': 129,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Si me guías al gran río\ndel Jordán, no temeré;\nhas pasado tu su frío, y gozoso seguiré.'
  },
  {
    'id_hymn': 130,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Traían en silencio presentes al Señor;\nsu amor humilde y puro\nles daba gran valor;\npalabras de consuelo\ny hechos de bondad,\nJesús los recibía por su sinceridad.'
  },
  {
    'id_hymn': 130,
    'order': 2,
    'type': 'CHORUS',
    'content': '¿Quisieras dar a Cristo\nel más precioso don?\nDi: “Cristo, mi Maestro,\nTe doy mi corazón”.'
  },
  {
    'id_hymn': 130,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Aparte de los otros un pobre viador\nmiraba como daban tributos al Señor;\nél nada poseía, sentía gran amor,\n¡y cuánto anhelaba dar algo de valor!.'
  },
  {
    'id_hymn': 130,
    'order': 3,
    'type': 'STROPHE',
    'content': '“Señor” clamó el hombre\n“acepta tú mi don,\nacepta lo que tengo: mi triste corazón”.\nLe dijo el buen Maestro al pobre viador.\n“De todos los presentes es éste el mejor”.'
  },
  {
    'id_hymn': 131,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Mi amor y vida doy a ti,\nJesús, pues en la cruz por mí\nvertiste sangre carmesí,\nmi Dios, mi Salvador.'
  },
  {
    'id_hymn': 131,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Mi amor y vida doy a ti,\npues fuiste a la cruz por mí;\nmi ser entero, doylo a ti,\nmi Dios, mi Salvador.'
  },
  {
    'id_hymn': 131,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Que tú me salvas, bien lo sé;\nhe puesto en ti mi humilde fe;\nfeliz contigo viviré;\nmi Dios, mi Salvador.'
  },
  {
    'id_hymn': 131,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Tú que moriste en la cruz,\nconcédeme, Señor Jesús,\nque ande en tu brillante luz,\nmi Dios, mi Salvador.'
  },
  {
    'id_hymn': 132,
    'order': 1,
    'type': 'STROPHE',
    'content': 'No yo, sino Él, reciba amor y honra;\nno yo, sino Él, en mí ha de reinar;\nno yo, sino Él, en todo cuanto haga;\nno yo, sino Él, en todo mi pensar.'
  },
  {
    'id_hymn': 132,
    'order': 2,
    'type': 'STROPHE',
    'content': 'No yo, sino Él, a confortar mis penas;\nno yo, sino Él, mis llantos a enjugar;\nno yo, sino Él, a aligerar mis cargas,\nno yo, sino Él, mi duda a disipar.'
  },
  {
    'id_hymn': 132,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Jesús, no más diré palabra ociosa;\nJesús, no más quisiera yo pecar;\nJesús, no más me venza el orgullo;\nJesús, no más inspire el “yo” mi hablar.'
  },
  {
    'id_hymn': 132,
    'order': 4,
    'type': 'STROPHE',
    'content': 'No yo, sino Él, lo que me falta suple;\nno yo, sino Él, da fuerza y sanidad;\nJesús, a ti, mi espíritu, alma y cuerpo\nlos rindo hoy por la eternidad.'
  },
  {
    'id_hymn': 133,
    'order': 1,
    'type': 'STROPHE',
    'content': 'A cualquiera parte sin temor iré\nsi Jesús dirige mi inseguro pie.\nSin su compañía todo es pavor,\nmas si Él me guía no tendré temor.'
  },
  {
    'id_hymn': 133,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Con Jesús por doquier, sin temor iré;\nsi Jesús me guía, nada temeré.'
  },
  {
    'id_hymn': 133,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Con Jesús por guía adondequiera voy.\nCaminando en pos de Él seguro estoy.\nY aunque padre y madre puédenme faltar,\nJesucristo nunca me abandonará.'
  },
  {
    'id_hymn': 133,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Dondequiera afrontaré la noche atroz,\nporque siempre oigo su benigna voz.\nÉl de día y noche a mi lado está;\nY en plena gloria me despertará.'
  },
  {
    'id_hymn': 134,
    'order': 1,
    'type': 'STROPHE',
    'content': 'A solas al huerto yo voy,\ncuando duerme aún la floresta;\ny en quietud y paz con Jesús estoy\noyendo absorto allí su voz.'
  },
  {
    'id_hymn': 134,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Él conmigo está, puedo oír su voz,\ny que suyo, dice, seré;\ny el encanto que hallo en Él allí,\ncon nadie tener podré.'
  },
  {
    'id_hymn': 134,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Tan dulce es la voz del Señor,\nque las aves guardan silencio,\ny tan sólo se oye su voz de amor\nque inmensa paz al alma da.'
  },
  {
    'id_hymn': 134,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Con Él encantado yo estoy,\naunque en torno lleguen las sombras;\nmas me ordena ir, que a escuchar yo voy,\nsu voz doquier la pena esté.'
  },
  {
    'id_hymn': 135,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Contigo quiero andar, oh Dios,\ndel fiel Enoc siguiendo en pos.\nMi temblorosa mano ten;\ntu dulce voz calme el vaivén.\nLa senda oscura al transitar,\nJesús, contigo quiero andar.'
  },
  {
    'id_hymn': 135,
    'order': 2,
    'type': 'STROPHE',
    'content': 'No puedo solo andar, Señor\ntormentas rugen en redor,\nrodéanme engaños mil,\nme acosa el enemigo vil.\n¡oh, calma el borrascoso mar!\nJesús, contigo quiero andar.'
  },
  {
    'id_hymn': 135,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Mi mano ten, pues; de hoy en más,\ndel mundo el bien dejando atrás,\nvaliente seguiré tu luz,\ncon la bandera de la cruz.\nEspero en Sión poder entrar,\ndo yo contigo quiero andar.'
  },
  {
    'id_hymn': 136,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Tentado, no cedas; ceder es pecar;\nmás fácil sería luchando triunfar.\n¡Valor!, pues, resuelto, domina tu mal;\nDios puede librarte de asalto mortal.'
  },
  {
    'id_hymn': 137,
    'order': 2,
    'type': 'CHORUS',
    'content': 'En Jesús, pues, confía;\nen sus brazos tu alma\nhallará dulce calma;\nÉl te hará vencedor.'
  },
  {
    'id_hymn': 138,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Evita el pecado, procura agradar\na Dios, a quien debes\npor siempre ensalzar;\nno manche tus labios impúdica voz;\npreserva tu vida de ofensas a Dios.'
  },
  {
    'id_hymn': 139,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Amante, benigno y enérgico sé;\nen Cristo, tu amigo, pon toda tu fe;\nrinde a Dios tu vida, ríndele tu ser;\ncorona te espera y vas a vencer.'
  },
  {
    'id_hymn': 137,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Más cerca, oh Dios, de ti quiero morar;\naunque sobre una cruz me hayan de alzar.\nEntonaré allí este himno con fervor:\nMás cerca, oh Dios, de ti, más cerca, sí.'
  },
  {
    'id_hymn': 137,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Si cual viajero voy con ansiedad,\nmedroso al ver cerrar la oscuridad,\naún en mi soñar me harás sentir que estoy\nmás cerca, oh Dios, de ti, más cerca, sí.'
  },
  {
    'id_hymn': 137,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Después al despertar, a ti por fe\nde mi aflicción altar elevaré.\ny cuanto sufro aquí me hará sentir que estoy\nmás cerca , oh Dios, de ti, más cerca sí.'
  },
  {
    'id_hymn': 137,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Camino encuentro aquí que al cielo va,\npues sé que allí tu amor me sostendrá.\nCercano sentiré el ángel del Señor.\nmás cerca, oh Dios, de ti, más cerca, sí.'
  },
  {
    'id_hymn': 137,
    'order': 5,
    'type': 'STROPHE',
    'content': 'Y cuando a tu mansión me llevarás,\ny estrellas, luna y sol yo deje atrás,\ngozoso entonaré canción eterna allí:\nMás cerca, oh Dios, de ti, más cerca sí.'
  },
  {
    'id_hymn': 138,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Esparcid la luz de Cristo\nen la densa oscuridad.\nAlumbrad a quien no ha visto\nmás que el mundo de maldad.'
  },
  {
    'id_hymn': 138,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Esparcid la luz de Cristo,\ndad las nuevas de la cruz,\npues hay muchos que no han visto\ntodavía al buen Jesús.'
  },
  {
    'id_hymn': 138,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Alumbradles el sendero\nde la eterna salvación,\ny que acepten del Cordero\nla promesa de expiación.'
  },
  {
    'id_hymn': 138,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Como un barco zozobrante\nen las ondas de la mar,\nnuestro mundo tambaleante\nva muy pronto a naufragar.'
  },
  {
    'id_hymn': 139,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Oh Rey eterno, avanza!\nEs tiempo de marchar;\ncontigo en la contienda\nhabremos de triunfar;\nllevamos la coraza\nque has dado, buen Señor;\ncontigo avanzaremos,\noh gran conquistador.'
  },
  {
    'id_hymn': 139,
    'order': 2,
    'type': 'STROPHE',
    'content': '¡Oh Rey eterno, avanza!\nTú, capitán serás,\ny al fin entonaremos\nel himno de la paz.\nNo con humana fuerza,\nmás con su santo amor,\nse gana la victoria en\nla lucha del Señor.'
  },
  {
    'id_hymn': 139,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Oh Rey eterno, avanza!\nseguimos sin temor;\nse ven en lontananza\nlas luces del albor.\nSeguimos con firmeza\nla enseña de la cruz;\nmuy pronto aclamaremos\nal magno Rey, Jesús.'
  },
  {
    'id_hymn': 140,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Oh, buen Maestro, despierta!\n¡Ve, ruge la tempestad!\n¡La gran extensión de los cielos\nse llena de oscuridad!\n¿No ves que aquí perecemos?\n¿Puedes dormir así\ncuando el mar agitado nos abre\nprofundo sepulcro aquí?.'
  },
  {
    'id_hymn': 140,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Los vientos, las ondas oirán tu voz: \n“Haya paz”.\nCalmas las iras del negro mar;\nlas luchas del alma las haces cesar,\ny así la barquilla do va el Señor\nhundirse no puede en el mar traidor.\nDoquier se cumpla tu voluntad:\n“Haya paz, haya paz”.\nTu voz resuena en la inmensidad:\n“Paz, haya paz”.'
  },
  {
    'id_hymn': 140,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Despavorido, oh Maestro,\nte busco con ansiedad.\nMi alma angustiada se abate;\narrecia la tempestad.\nPasa el pecado a torrentes\nsobre mi frágil ser,\ny perezco, perezco, Maestro,\n¡oh, quiéreme socorrer!'
  },
  {
    'id_hymn': 140,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Vino la calma, Maestro,\nlos vientos no rugen ya;\ny sobre el cristal de las aguas\nel sol resplandecerá.\nCristo, prolonga esta calma;\nno me abandones más;\ncruzaré los abismos contigo\nal puerto de eterna paz.'
  },
  {
    'id_hymn': 141,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Más de Jesús deseo saber,\nmás de su gracia conocer,\nmás de su salvación gozar,\nmás de su dulce amor gustar.'
  },
  {
    'id_hymn': 141,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Más quiero amarle,\nmás quiero honrarle,\nmás de su salvación gozar,\nmás de su dulce amor gustar.'
  },
  {
    'id_hymn': 141,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Más de Jesús deseo oír,\nmás de su santa ley cumplir,\nmás de su voluntad saber,\nmás de su Espíritu tener.'
  },
  {
    'id_hymn': 141,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Más de Jesús, más oración,\nmás cerca estar en comunión,\nmás su palabra meditar,\nmás sus promesas alcanzar.'
  },
  {
    'id_hymn': 141,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Más de Jesús allá veré,\nmás semejante a Él seré,\nmás de su gloria he de gozar,\nmás su gran nombre he de alabar.'
  },
  {
    'id_hymn': 142,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cristo es mi amante Salvador,\nmi bien, mi paz, mi luz;\npues demostró su grande amor\nmuriendo allá en la cruz.\nCuando estoy triste encuentro en Él\nconsolador y amigo fiel;\nconsolador, amigo fiel es Jesús.'
  },
  {
    'id_hymn': 142,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cristo es mi amante Salvador,\nsu sangre me compró;\npor sus heridas y dolor\nperfecta paz me dio.\nDicha inmortal con Él tendré,\ny para siempre reinaré;\ndicha inmortal allí tendré con Jesús.'
  },
  {
    'id_hymn': 142,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cristo es mi amante Salvador,\nmi eterno Redentor.\n¡Jamás podré satisfacer\nla deuda de su amor!\nLe seguiré, pues en la luz,\nno temeré llevar mi cruz;\nno temeré llevar mi cruz por Jesús.'
  },
  {
    'id_hymn': 143,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Más cual mi Cristo quiero siempre ser,\nmás mansedumbre, más benignidad;\ncelo en servirle, fidelidad mostrar,\nmás consagrado a la obra que me da.'
  },
  {
    'id_hymn': 143,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Toma mi ser, tan sólo tuyo es;\ntoma mi ser, lo doy, Señor a ti;\nmi corazón, imploro limpies, sí,\ntenme, soy tuyo, por la eternidad.'
  },
  {
    'id_hymn': 143,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Más cual mi Cristo, es mi oración,\nmás fuerza tenga, más resignación;\nmás serio siempre, y más espiritual;\nal que vagaba traerlo al altar.'
  },
  {
    'id_hymn': 143,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Más cual mi Cristo, más profunda fe,\nde su cariño, grande compasión;\ncual Él paciente, humilde y veraz;\nes mi anhelo cual Cristo, aquí andar.'
  },
  {
    'id_hymn': 144,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Alza tu canto, ¡oh lengua mía!\nAlza tu canto, ¡oh corazón!\nLlénese el alma de alegría\nde gozo santo y devoción.'
  },
  {
    'id_hymn': 144,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Vuelen al cielo los ecos santos,\nque arranco alegre de mi laúd;\nvuelen al cielo mis dulces cantos,\nmis dulces cantos de gratitud.'
  },
  {
    'id_hymn': 144,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Padre, en tu regia, santa morada,\ndonde la dicha no tiene fin;\nallí mi patria miro esmaltada\nde bellas flores de tu jardín.'
  },
  {
    'id_hymn': 144,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Llévame, oh Padre, para consuelo;\nnada en la tierra yo espero ya;\nllévame al cielo, llévame al cielo\nque allí tan sólo mi dicha está.'
  },
  {
    'id_hymn': 145,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Quiero seguir el andar del Maestro,\nquiero ir en pos de mi Rey y Señor;\ny modelando por Él mi carácter,\ncanto con gozo a mi Redentor.'
  },
  {
    'id_hymn': 145,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Qué hermoso es\nseguir el andar del Maestro!\nSiempre en la luz, cerca de Jesús.\n¡Qué hermoso es\nseguir el andar del Maestro,\nen su santa luz!'
  },
  {
    'id_hymn': 145,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Ando más cerca de Él, pues me guía\ncuando el maligno me quiere tentar;\nsiempre confiado en Cristo, mi fuerte,\ndebo con gozo su nombre ensalzar.'
  },
  {
    'id_hymn': 145,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Sigo sus pasos de tierno cariño,\nMisericordia, amor y lealtad,\nViéndolo a Él por el don de la gracia,\nVoy al descanso, gloriosa ciudad.'
  },
  {
    'id_hymn': 145,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Quiero seguir el andar del Maestro,\nSiempre hacia arriba\ncon Él quiero andar.\nViendo a mi Rey en\ngloriosa hermosura\nCon Él en gloria podré descansar.'
  },
  {
    'id_hymn': 146,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Quiero, Jesús, contigo andar,\ny en tu servicio trabajar;\ndime el secreto de saber\nllevar mis cargas con placer.'
  },
  {
    'id_hymn': 146,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Haz que mi lengua sepa hablar\nsólo el lenguaje del amor,\ny al extraviado pueda guiar\nhasta el redil de mi Pastor.'
  },
  {
    'id_hymn': 146,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Tenme a tu lado, enséñame\na ser paciente, noble y fiel;\nque en tus pisadas pueda andar,\ny al abatido consolar.'
  },
  {
    'id_hymn': 146,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Dame del cielo aquella fe\nque en la tormenta ve la luz.\nColme mi alma tu bondad,\nY viva siempre con tu paz.'
  },
  {
    'id_hymn': 147,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cuán glorioso es el cambio\noperado en mi ser,\nviniendo a mi alma el Señor;\nhay en mi alma una paz\nque yo ansiaba tener,\nesa paz que me trajo su amor.'
  },
  {
    'id_hymn': 147,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Él vino a mi corazón,\nÉl vino a mi corazón;\nsoy feliz con la vida que Cristo me dio,\ncuando Él vino a mi corazón.'
  },
  {
    'id_hymn': 147,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Ya no voy por la senda\nque el mal me trazó,\ndo sólo encontré confusión;\nmis errores pasados\nJesús los borró,\ncuando Él vino a mi corazón.'
  },
  {
    'id_hymn': 147,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Ni una sombra de duda\nobscurece su amor,\namor que me trajo el perdón;\nla esperanza que aliento\nla debo al Señor,\ncuando Él vino a mi corazón.'
  },
  {
    'id_hymn': 148,
    'order': 1,
    'type': 'STROPHE',
    'content': '“¿Muy lejos el hogar está?”,\ncon ansia al guarda pregunté.\n“Muy pronto el día llegará\nde coronar al Rey”,\nme contestó; “no llores más,\ncercano está del viaje el fin;\nalegre entonces entrarás\nal celestial festín”.'
  },
  {
    'id_hymn': 148,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Señales muchas se ven ya\nen cielo, tierra y en el mar;\nla aurora luego rayará,\ndel anhelado hogar.\nConsuélate, no llores más;\nel Redentor enjugará\ndel siervo fiel las lágrimas;\ndescanso le dará.'
  },
  {
    'id_hymn': 148,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Jesús en breve volverá,\n¡qué pensamiento alentador!\nLa creación ansiosa está\nde ver al Creador.\nEntonces ya terminará\ntristeza, muerte y dolor;\nun paraíso se abrirá\nal pueblo del Señor.'
  },
  {
    'id_hymn': 149,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Ya las huestes se aprestan\npara la batalla,\nes Jesús el Capitán\nque a todos nos guiará;\ny con Él, a la cabeza, nada nos arredra;\nde seguro al triunfo nos llevará.'
  },
  {
    'id_hymn': 149,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Yo quiero estar con Cristo,\nen lo rudo de la lid.\nYo quiero siempre listo,\nvaliente combatir;\nhasta que en gloria alcance a verle,\ny cesando mi carrera,\nsiempre pueda con Él vivir.'
  },
  {
    'id_hymn': 149,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Las legiones de Jesús\nde triunfo en triunfo avanzan.\n¿No las ves con qué valor\ncombaten contra el mal?\n¿puedes tu quedar dormido\no indiferente\ncuando otros luchan sin descansar?.'
  },
  {
    'id_hymn': 149,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Date prisa, no vaciles,\nÉl te necesita,\nsi amas a Jesús\ntambién a otros amarás;\ny si andan en las sendas\ndel pecado avieso,\na los pies de Cristo los llevarás.'
  },
  {
    'id_hymn': 150,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cuando lleguen pruebas,Cristo, ven a mí.\nHaz que nunca ceda a la tentación\ny por sus halagos yo te deje a ti,\ny al abismo vaya de la perdición.'
  },
  {
    'id_hymn': 150,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Al cruzar el mundo, me fascinará\nsu riqueza vana o el falaz placer;\nmas entonces presto mi alma a ti vendrá\na buscar ayuda, gracia, luz, poder.'
  },
  {
    'id_hymn': 150,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Si la prueba enviares a mi vida aquí,\ncon dolor y pena, luto y aflicción,\nhaz que nunca dude que vendrás a mí\ny que tú lo cambias todo en bendición.'
  },
  {
    'id_hymn': 151,
    'order': 1,
    'type': 'STROPHE',
    'content': 'De su trono mi Jesús,\na morir aquí bajó,\nY clavado en la cruz,\nmis pecados Él expió.'
  },
  {
    'id_hymn': 151,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Sí, Cristo me ama;\nsí, Cristo me ama;\nsí, Cristo me ama,\nla Biblia dícelo.'
  },
  {
    'id_hymn': 151,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Bien me quiere el Salvador\nque sufrió por mi maldad.\n¡Te bendigo mi Señor,\nreconozco tu bondad!'
  },
  {
    'id_hymn': 151,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Guarda fiel mi corazón,\ntú, que velas sobre mí;\nY con toda devoción\nhaz que viva yo por ti.'
  },
  {
    'id_hymn': 152,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Divina luz, con tu esplendor benigno,\nguarda mi pie.\nDensa es la noche y áspero el camino;\nmi guía sé.\nAunque distante de mi meta estoy,\nal dulce hogar de las alturas voy.'
  },
  {
    'id_hymn': 152,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Amargos años hubo en que tu gracia\nno supliqué;\nde mi valor fiando en la eficacia,\nno tuve fe;\nmas hoy deploro aquella ceguedad;\npréstame, oh Luz,tu grata claridad.'
  },
  {
    'id_hymn': 152,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Al guiarme tú por noche esplendente,\nyo cruzaré\nel valle, el monte, el risco y el torrente,\ncon firme pie;\nhasta que empiece el día a despuntar,\ny entre yo en mi celeste hogar.'
  },
  {
    'id_hymn': 153,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Si en valles de peligros\nyo tengo que pasar,\no si por altas cumbres\nen paz me toque andar;\nya que seguro estoy\nsi en sol o sombra voy,\na cualquiera parte, iré con Jesús.'
  },
  {
    'id_hymn': 153,
    'order': 2,
    'type': 'CHORUS',
    'content': 'A cualquiera parte, iré con Jesús;\nDoquiera que esté,\ndel cielo tendré la santa luz.\nEs mi privilegio aquí llevar mi cruz;\niré, pues, a cualquiera parte con Jesús.'
  },
  {
    'id_hymn': 153,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Si el agua de la vida es mi deber llevar\nal pecador rendido\npor yermo al transitar;\nsi es que me toca a mí\nllevar su amor allí\ncon tal que Él me guíe, iré con Jesús.'
  },
  {
    'id_hymn': 153,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Más si es mi suerte en casa\nla santa cruz llevar,\ncuando otros la pregonan\nallende el ancho mar;\npor prueba de mi fe, su fallo aceptaré,\ny do Él me acompañe, iré con Jesús.'
  },
  {
    'id_hymn': 154,
    'order': 1,
    'type': 'STROPHE',
    'content': ' ¡Oh, quién pudiera andar con Dios!,\nsu dulce paz gozar,\nvolviendo a ver de nuevo el sol\nde santidad y amor.'
  },
  {
    'id_hymn': 154,
    'order': 2,
    'type': 'STROPHE',
    'content': '¡Oh tiempo aquel en que lo vi!\n¡Beatífica visión!\nSu fiel acento de amor\noyó mi corazón.'
  },
  {
    'id_hymn': 154,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Aquellas horas de solaz,\n¡cuán caras aún me son!\nDel mundo halagos no podrán\nsuplir su falta, no.'
  },
  {
    'id_hymn': 154,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Paloma santa, vuelve a mí.\n¡Oh, Paracleto, ven!\nPerdona el pecado vil\ncon que te contristé.'
  },
  {
    'id_hymn': 155,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Gran gozo hay en mi alma hoy\nJesús conmigo está;\ncontento con su amor estoy,\nsu dulce paz me da.'
  },
  {
    'id_hymn': 155,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Brilla el sol de Cristo en mi alma\ncada día voy feliz así.\nSu faz sonriente al contemplar,\n¡cuánto gozo siento en mí!'
  },
  {
    'id_hymn': 155,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En mi alma hay melodías hoy,\ncanciones a mi Rey.\nFeliz y libre en Cristo soy\ny salvo por la fe.'
  },
  {
    'id_hymn': 155,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Paz plena tengo en mi alma hoy,\npues Cristo me salvó.\nMis hierros rotos quedan ya\nJesús me libertó.'
  },
  {
    'id_hymn': 155,
    'order': 4,
    'type': 'STROPHE',
    'content': 'En mi alma hoy reina gratitud,\nloores a Jesús.\nEn su presencia hay virtud,\nhay gozo en su luz.'
  },
  {
    'id_hymn': 156,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Del Padre los bienes no tienen igual;\nde piedras preciosas enorme caudal;\ndiamantes y oro fortuna sin par,\nriquezas que nadie podrá computar.'
  },
  {
    'id_hymn': 156,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Soy un hijo del Rey, soy hijo del Rey;\npor Cristo el Maestro\nsoy un hijo del Rey.'
  },
  {
    'id_hymn': 156,
    'order': 2,
    'type': 'STROPHE',
    'content': 'El Hijo divino, del mundo sostén,\nsufrió en la tierra, del hombre el desdén;\nextraña le era la tumba cruel;\nfue pobre y humilde, fue manso y fiel.'
  },
  {
    'id_hymn': 156,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Y yo tan indigno, tan vil pecador,\n¿logré al que sufriera por mí tal dolor?\n¡Que herencia la mía: la nueva Sión,\nla vida eternal, y una alegre canción!.'
  },
  {
    'id_hymn': 157,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Dulce comunión la que gozo ya\nen los brazos de mi Salvador.\n¡Qué gran bendición en su paz me da!\n¡Oh!, yo siento en mí su tierno amor.'
  },
  {
    'id_hymn': 157,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Libre, salvo\nde cuitas, penas y dolor;\nlibre, salvo, en los brazos\nde mi Salvador.'
  },
  {
    'id_hymn': 157,
    'order': 2,
    'type': 'STROPHE',
    'content': '¡Cuán dulce es vivir, cuán dulce es gozar\nen los brazos de mi Salvador!\nQuiero estar con Él en su eterno hogar,\nSiendo objeto de su tierno amor.'
  },
  {
    'id_hymn': 157,
    'order': 3,
    'type': 'STROPHE',
    'content': 'No habré de temer ni aún desconfiar,\nen los brazos de mi Salvador.\nEn Él puedo yo bien seguro estar\nde los lazos del vil tentador.'
  },
  {
    'id_hymn': 158,
    'order': 1,
    'type': 'STROPHE',
    'content': 'De paz inundada mi senda ya esté\no cúbrala un mar de aflicción,\nmi suerte cualquiera que sea diré:\nAlcancé, alcancé salvación.'
  },
  {
    'id_hymn': 158,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Alcancé salvación;\nalcancé, alcancé salvación.'
  },
  {
    'id_hymn': 158,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Ya venga la prueba o me tiente Satán,\nno mengua mi fe ni mi amor;\npues Cristo comprende mis luchas, mi afán,\ny su sangre obrará en mi favor.'
  },
  {
    'id_hymn': 158,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Feliz yo me siento al saber que Jesús\nlibróme del yugo opresor,\nquitó mi pecado, clavólo en la cruz;\ngloria demos al buen Salvador.'
  },
  {
    'id_hymn': 158,
    'order': 4,
    'type': 'STROPHE',
    'content': 'La fe tornaráse en gran realidad\nal irse la niebla veloz;\ndesciende Jesús con su gran majestad,\n¡aleluya!, estoy bien con mi Dios.'
  },
  {
    'id_hymn': 159,
    'order': 1,
    'type': 'STROPHE',
    'content': 'En el seno de mi alma una dulce quietud,\nse difunde embargando mi ser,\nuna calma infinita que sólo podrán\nlos amados de Dios comprender.'
  },
  {
    'id_hymn': 159,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Paz, paz, cuan dulce paz\nla que da nuestro Padre eternal;\nle ruego que inunden\npor siempre mi ser\nsus ondas de amor celestial.'
  },
  {
    'id_hymn': 159,
    'order': 2,
    'type': 'STROPHE',
    'content': '¡Qué tesoro yo tengo en\nla paz que me dio!,\nen el fondo de mi alma ha de estar\ntan seguro que nadie quitarlo podrá,\nmientras vea los siglos pasar.'
  },
  {
    'id_hymn': 159,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Esta paz inefable consuelo me da,\npues descanso tan sólo en Jesús;\ny en peligro mi alma\nya nunca estará,\nporque estoy inundado en su luz.'
  },
  {
    'id_hymn': 159,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Alma triste, que en rudo,\nconflicto te ves,\nsola y débil, tu senda al seguir,\nhaz de Cristo tu amigo,\nque fiel siempre es,\ny su paz tú podrás recibir.'
  },
  {
    'id_hymn': 160,
    'order': 1,
    'type': 'STROPHE',
    'content': ' Andando en la luz de Dios\nencuentro plena paz;\nVoy adelante sin temor\ndejando el mundo atrás'
  },
  {
    'id_hymn': 160,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Gozo y luz hay en mi alma hoy,\ngozo y luz hay, ya que salvo soy;\ndesde que a Jesús vi, y a su lado fui,\nhe sentido el gozo de su amor en  mí.'
  },
  {
    'id_hymn': 160,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Vagaba en oscuridad\nsin ver al buen Jesús,\nmas por su amor y su verdad\nme iluminó la luz.'
  },
  {
    'id_hymn': 160,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Las nubes y la tempestad\nno encubren a Jesús,\ny en medio de la oscuridad\nme gozo en su luz.'
  },
  {
    'id_hymn': 161,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Salvo en los tiernos brazos\nde mi Jesús seré,\ny en su amoroso pecho\nsiempre reposaré.\nEste es sin duda el eco\nde celestial canción,\nque de inefable gozo\nllena mi corazón.'
  },
  {
    'id_hymn': 161,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Salvo en los tiernos brazos\nde mi Jesús seré,\ny en su amoroso pecho\nsiempre reposaré.'
  },
  {
    'id_hymn': 161,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En sus amantes brazos\nhallo solicitud;\nlibre soy de tristeza,\nlibre de inquietud.\nY si vinieren pruebas,\nfáciles pasarán;\nlágrimas si vertiere,\npronto se enjugarán.'
  },
  {
    'id_hymn': 161,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Y cruzaré la noche\nlóbrega, sin temor,\nhasta que venga el día\nde perennal fulgor.\n¡Cuán placentero entonces\ncon el será morar,\ny en la mansión de gloria\nsiempre con Él reinar!'
  },
  {
    'id_hymn': 162,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Con sin igual amor Cristo me ama,\nsu dulce paz en mi alma derrama,\ny por salvarme su vida dio;\nya pertenezco a él.'
  },
  {
    'id_hymn': 162,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Ya pertenezco a Cristo,\n¡Cuán pura es su amistad!\nPor las edades durará,\ny por la eternidad.'
  },
  {
    'id_hymn': 162,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Por mis pecados fui condenado,\nmas hoy por Cristo soy perdonado;\ndel hondo abismo me levantó;\nya pertenezco a Él.'
  },
  {
    'id_hymn': 162,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Mi corazón palpita de gozo,\nCristo es de Dios\nel don más precioso;\npor redimirme su sangre dio;\nya pertenezco a Él.'
  },
  {
    'id_hymn': 163,
    'order': 1,
    'type': 'STROPHE',
    'content': 'En brazos del Maestro,\nsegura y sin temor,\nreposa el alma mía\nen su eternal amor.\nQue rujan tempestades\ny recio vendaval,\n¡mi Dios está conmigo,\nno temeré el mal!'
  },
  {
    'id_hymn': 163,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Donde el Señor me guíe\ncontento siempre iré;\na mi Pastor amante,\nconfiado seguiré.\nSu voz me reconforta,\nsu faz es cual la luz;\nRecorro mi camino\nsiguiendo al buen Jesús.'
  },
  {
    'id_hymn': 163,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Veré las deleitosas\npraderas del Edén,\ny cielos tan azules\ncual nunca aquí se ven.\nMi alma lo desea;\nes grande el galardón;\nJesús, mi don preciado,\nme da su salvación.'
  },
  {
    'id_hymn': 164,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Confío en Jesucristo,\nquien en la cruz murió.\nPor esa muerte invicto\nal cielo marcho yo.\nCon sangre tan preciosa\nmis culpas lava Él:\nla derramó copiosa\npor mí ya Emanuel.'
  },
  {
    'id_hymn': 164,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Me cubre tu justicia\nde plena protección;\ntú eres mi delicia\nmi eterna salvación.\nJesús, en ti descanso;\nreposo tú me das;\ntranquilo, pues avanzo\nal cielo, donde estás.'
  },
  {
    'id_hymn': 164,
    'order': 3,
    'type': 'STROPHE',
    'content': 'A disfrutar invitas;\nacepto, mi Señor,\ndelicias infinitas\ny celestial amor.\nEspero al fin mirarte,\noír tu dulce voz;\nespero yo cantarte,\nmi Salvador, mi Dios.'
  },
  {
    'id_hymn': 165,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Jesús, yo he prometido\nservirte con amor;\nconcédeme tu gracia,\nmi amigo y Salvador.\nNo temeré la lucha\nsi a mi lado estás,\nNi perderé el camino\nsi tú alumbrando vas.'
  },
  {
    'id_hymn': 165,
    'order': 2,
    'type': 'STROPHE',
    'content': 'El mundo está acechando\ny abunda en tentación,\nsutil es el engaño\ny loca la pasión;\nAcércate, Maestro,\nrevela tu piedad\ny escuda, fiel, mi alma\nde toda iniquidad.'
  },
  {
    'id_hymn': 165,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Si ves mi mente errando\ndel necio mal en pos,\nconcédeme que escuche,\nSeñor tu clara voz.\nAliéntame en la lucha,\nmi espíritu sostén,\nconfórtame si temo,\nimpúlsame en el bien.'
  },
  {
    'id_hymn': 166,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Jesús me guía. ¡Cuánta paz\nhe hallado en dicho tan veraz!\nEn todo afán seguro estoy,\npues Dios me guarda; suyo soy.'
  },
  {
    'id_hymn': 166,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Jesús me guía, siempre, sí;\nSu propia mano me guiará.\nEn toda senda oscura aquí\nEl Salvador conmigo va.'
  },
  {
    'id_hymn': 166,
    'order': 2,
    'type': 'STROPHE',
    'content': ' Ayer tinieblas y vaivén;\nmañana un florido Edén.\nBonanza en torno o tempestad,\nme ampara siempre su bondad.'
  },
  {
    'id_hymn': 166,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Señor, la mano que me das,\ncontento tomo de hoy en más,\nAcepto alegre el porvenir,\npues Dios me quiere conducir.'
  },
  {
    'id_hymn': 166,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Y terminado mi quehacer,\nen mí probado tu poder,\nla muerte misma no huiré,\npues aun allí contigo iré.'
  },
  {
    'id_hymn': 167,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Guíame, ¡oh Salvador!,\npor la senda de salud.\nA tu lado no hay temor;\nsólo hay gozo, paz, quietud.'
  },
  {
    'id_hymn': 167,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Cristo! ¡Cristo!\n¡No me dejes, oh Señor!\nSiendo tú mi guía fiel,\nsaldré más que vencedor.'
  },
  {
    'id_hymn': 167,
    'order': 2,
    'type': 'STROPHE',
    'content': 'No me dejes, ¡oh Señor!,\nmientras en el mundo esté.\nHaz que arribe, sin temor,\ndonde en ti descansaré.'
  },
  {
    'id_hymn': 167,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Tú, de mi alma salvación\nen la ruda tempestad,\nal venir la tentación\n¡que me libre tu piedad!.'
  },
  {
    'id_hymn': 168,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cerca, más cerca, Cristo de ti,\nfiel Salvador y mi eterno solaz;\nguárdame junto a tu corazón;\nsiempre me abrigue ese Puerto de paz,\nsiempre me abrigue ese Puerto de paz.'
  },
  {
    'id_hymn': 168,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cerca, más cerca; nada traeré\nnada de mérito, al pie de tu cruz;\nsólo mi herido y vil corazón,\nporque en tu sangre lo limpies, Jesús,\nporque en tu sangre lo limpies, Jesús.'
  },
  {
    'id_hymn': 168,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cerca, más cerca: tuyo seré;\ndejo con gozo el pecado falaz,\ntodo su orgullo, pompa y placer;\nCristo inmolado es mi eterno solaz,\nCristo inmolado es mi eterno solaz.'
  },
  {
    'id_hymn': 168,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Cerca, más cerca hasta el fin,\nhasta que ancle en el Puerto de amor,\ndo por los siglos viva feliz;\ncerca, más cerca de mi Salvador,\ncerca más cerca de mí Salvador.'
  },
  {
    'id_hymn': 169,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Nunca desmayes, que en el afán\nDios cuidará de ti;\nsus fuertes alas te cubrirán;\nDios cuidará de ti.'
  },
  {
    'id_hymn': 169,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Dios cuidará de ti;\nvelando está su tierno amor;\nSí, cuidará de ti, Dios cuidará de ti.'
  },
  {
    'id_hymn': 169,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En duras pruebas y en aflicción,\nDios cuidará de ti;\nen tus conflictos y en tentación,\nDios cuidará de ti.'
  },
  {
    'id_hymn': 169,
    'order': 3,
    'type': 'STROPHE',
    'content': 'De sus riquezas te suplirá;\nDios cuidará de ti;\njamás sus bienes te negará;\nDios cuidará de ti.'
  },
  {
    'id_hymn': 170,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Oh, Cristo te adoro, te acepto por fe;\npor ti los caminos del mal ya dejé;\nde gracia salvaste mi alma, Señor;\npor esto de hinojos te rindo mi amor.'
  },
  {
    'id_hymn': 170,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Me viste perdido y en condenación,\ny desde el calvario me diste perdón;\nllevaste por mí las espinas, Señor;\npor esto de hinojos te rindo mi amor.'
  },
  {
    'id_hymn': 170,
    'order': 3,
    'type': 'STROPHE',
    'content': 'En todo momento, Jesús, te amaré;\ny mientras yo viva de ti cantaré.\nEn valle de muerte serás mi Pastor;\npor esto de hinojos te rindo mi amor.'
  },
  {
    'id_hymn': 170,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Después en mansiones de luz celestial,\nde gozo inefable, de gloria eternal,\ndarásme corona brillante, Señor;\npor esto de hinojos te rindo mi amor.'
  },
  {
    'id_hymn': 171,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cariñoso Salvador,\nhuyo de la tempestad\na tu seno protector,\nfiándome de tu bondad.\nSálvame Señor Jesús,\nde las olas, del turbión;\nhasta el puerto de salud\nguía tú mi embarcación.'
  },
  {
    'id_hymn': 171,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Otro asilo aquí no hay,\nindefenso acudo a ti;\nmi necesidad me trae,\nporque mi peligro vi.\nSolamente en ti Señor,\nhallo paz, consuelo y luz;\nvengo lleno de temor\na los pies de mi Jesús.'
  },
  {
    'id_hymn': 171,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cristo, encuentro en ti poder,\ny no necesito más;\nme levantas, al caer;\ndébil, ánimo me das.\nAl enfermo das salud,\nvista das al que no ve.\nCon amor y gratitud\ntu bondad ensalzaré.'
  },
  {
    'id_hymn': 172,
    'order': 1,
    'type': 'STROPHE',
    'content': 'No me pases, no me olvides,\ntierno Salvador;\nmuchos gozan tus mercedes,\noye mi clamor.'
  },
  {
    'id_hymn': 172,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Cristo, Cristo, oye tú mi voz;\nSalvador, tu gracia dame,\noye mi clamor.'
  },
  {
    'id_hymn': 172,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Ante el trono de tu gracia\nhallo dulce paz;\nnada aquí mi alma sacia,\ntú eres mi solaz.'
  },
  {
    'id_hymn': 172,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Sólo fío en tus bondades,\nguíame en tu luz,\ny mi alma no deseches,\nsálvame, Jesús.'
  },
  {
    'id_hymn': 172,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Fuente viva de consuelo\neres para mí;\nmi alma pone en ti su anhelo,\nsolamente en ti.'
  },
  {
    'id_hymn': 173,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Dulce oración, dulce oración,\nde toda influencia mundanal\nelevas tú mi corazón\nal tierno Padre celestial.\n¡Oh, cuántas veces tuve en ti\nauxilio en ruda tentación!\n¡Y cuántos bienes recibí\nmediante ti, dulce oración!.'
  },
  {
    'id_hymn': 173,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Dulce oración, dulce oración,\nal trono excelso de bondad\ntu llevarás mi petición,\na Dios, que escucha con piedad.\nCreyendo espero recibir\ndivina y plena bendición,\ny que me ayudes a vivir\njunto a mi Dios, dulce oración.'
  },
  {
    'id_hymn': 173,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Dulce oración, dulce oración,\naliento y gozo al alma das;\nen este valle de aflicción\nconsuelo siempre me serás.\nTan sólo el día cuando esté\ncon Cristo en la celeste Sión,\nentonces me despediré\nfeliz de ti, dulce oración.'
  },
  {
    'id_hymn': 174,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Sed puros y santos, mirad al Señor;\npermaneced fieles, orad sin cesar;\ny que la Palabra del buen Salvador\nos lleve en la vida a servir y amar.'
  },
  {
    'id_hymn': 174,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Sed puros y santos, Dios os juzgará;\norad en secreto respuesta vendrá.\nSu Espíritu Santo revela a Jesús,\ny su semejanza en vos Él pondrá.'
  },
  {
    'id_hymn': 174,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Sed puros y santos, Cristo os guiará;\nseguid su camino, en Él pues confiad;\nen paz o en zozobra, la calma dará\nquien os ha salvado de vuestra maldad.'
  },
  {
    'id_hymn': 175,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Oh, día delicioso\nde gozo, amor paz;\nde llantos y pesares el bálsamo eficaz!\nEn ti, postrados ante su trono celestial,\ncantamos: ‘‘¡Santo, santo!’’,\nloando al Eternal.'
  },
  {
    'id_hymn': 175,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Seguro puerto eres\nen toda tempestad,\njardín do corren ríos de luz y santidad.\nDivina fuente eres en yermo terrenal,\nen ti ya se divisa la patria celestial.'
  },
  {
    'id_hymn': 175,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Tus horas son sagradas,\nde santa reflexión,\nen que del mundo al cielo\nse eleva la afección;\nsacando gracias nuevas de ti al reposar,\ntu plenitud buscamos\nen nuestro eterno hogar.'
  },
  {
    'id_hymn': 176,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Oh, día del Señor, gratísimo solaz;\naliento bienhechor al fatigado das.\nDejando penas y aflicción\nanhelo hoy tu bendición,\nanhelo hoy tu bendición.'
  },
  {
    'id_hymn': 176,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Oh, Príncipe de paz,\ntú, fuente de bondad,\nal pecador le das perdón y libertad.\nEl día de hoy es la señal\nde Dios, el Padre celestial,\nde Dios, el Padre celestial.'
  },
  {
    'id_hymn': 176,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Se acerca el final en forma muy veloz,\ny al coro angelical pronto uniré mi voz.\nEl sábado prenuncio es\nde gozo y paz que habrá después,\nde gozo y paz que habrá después.'
  },
  {
    'id_hymn': 177,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Señor Jesús, el día ya se fue;\nla noche cierra, oh conmigo sé;\nal desvalido, por tu compasión,\ndale tu amparo y consolación.'
  },
  {
    'id_hymn': 177,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Veloz el día nuestro huyendo va,\nsu gloria, sus ensueños pasan ya;\nmudanza y muerte veo en redor;\nno mudas tú: conmigo sé, Señor.'
  },
  {
    'id_hymn': 177,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Tu gracia en todo el día he menester.\n¿Quién otro puede al tentador vencer?\n¿Qué otro amante guía encontraré?\nEn sombra o sol, Señor, conmigo sé.'
  },
  {
    'id_hymn': 177,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Que vea al fin en mi postrer visión\nde luz la senda que me lleve a Sión,\ndo alegre cantaré al triunfar la fe:\n“Jesús conmigo en vida y muerte fue”.'
  },
  {
    'id_hymn': 178,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Nuestro sol se pone ya,\ntodo en calma quedará;\nla plegaria levantad\nque bendiga la bondad\nde nuestro Dios.'
  },
  {
    'id_hymn': 178,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Santo, santo, santo,\nSeñor Jehová!\nCielo y tierra de tu amor\nllenos hoy están, Señor,\n¡loor a ti!.'
  },
  {
    'id_hymn': 178,
    'order': 2,
    'type': 'STROPHE',
    'content': ' ¡Oh Señor!, tu protección\ndale ahora al corazón;\ndale aquella dulce paz\nque a los tuyos siempre das\ncon plenitud.'
  },
  {
    'id_hymn': 178,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Oh Señor!, que al descansar\npueda en ti seguro estar,\ny mañana, mi deber\npueda alegre y fiel hacer\nen tu loor.'
  },
  {
    'id_hymn': 178,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Ya el día terminó,\nel descanso empezó;\ntú, Señor, vigilarás\nmi dormir, mi despertar,\ncon tierno amor.'
  },
  {
    'id_hymn': 179,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Dime de Cristo la historia\ngrábala en mi corazón,\nháblame más de su gloria,\ny de su amor y perdón.\nCuéntame del bello canto\nque se escuchó en Belén:\n“¡Gloria a Dios en lo alto,\npaz en la tierra también!”.'
  },
  {
    'id_hymn': 179,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Dime de Cristo la historia\ngrábala en mi corazón,\nháblame más de su gloria,\ny de su amor y perdón.'
  },
  {
    'id_hymn': 179,
    'order': 2,
    'type': 'STROPHE',
    'content': 'De su ayuno en desierto\nla tentación resistió;\ncomo venció cada intento\ncon que Satán lo asaltó.\nDime sus arduos trabajos,\nlas penas que padeció;\ntodo el desprecio y maltrato\nque injustamente sufrió.'
  },
  {
    'id_hymn': 179,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Háblame del cruel tormento\nque padeció en la cruz,\ncomo el sepulcro fue abierto\npor un gran ángel de luz.\nAmo esta tierna historia\nque muestra con claridad\ntodo el amor y la gracia\ndados con tanta bondad.'
  },
  {
    'id_hymn': 180,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Mi Dios me ama,\nÉl me ha salvado;\nmi Dios me ama, Él me ama a mí.'
  },
  {
    'id_hymn': 180,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Y lo repetiré: Mi Dios me ama,\nmi Dios me ama, Él me ama a mí.'
  },
  {
    'id_hymn': 180,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cautivo estuve\nen el pecado;\ncautivo estuve, sin Salvador.'
  },
  {
    'id_hymn': 180,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Envió a Cristo\npara librarme;\nenvió a Cristo, y me libró.'
  },
  {
    'id_hymn': 180,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Me ha invitado\npor su Palabra;\nme ha invitado con tierno amor.'
  },
  {
    'id_hymn': 181,
    'order': 1,
    'type': 'STROPHE',
    'content': ' ¡Cuánto me alegra que nuestro Señor\ndiera su vida por el pecador!\nHizo sin par maravillas aquí,\ny la más grande es que me ama a mí.'
  },
  {
    'id_hymn': 181,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Qué maravilla!\nMe ama Jesús,\nme ama Jesús, me ama Jesús.\n¡Qué maravilla!\nMe ama Jesús;\nsí, me ama aun a mí.'
  },
  {
    'id_hymn': 181,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Aunque vagaba olvidándome de Él,\nsiempre siguióme porque siempre es fiel;\npresto a sus brazos amantes volví\nal recordar que Jesús me ama a mí.'
  },
  {
    'id_hymn': 181,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cuando en el cielo ver pueda a Jesús,\nya revestido de gloriosa luz,\nentonaré mi himno eterno allí:\n“¡Que maravilla! ¡Jesús me ama a mí!”.'
  },
  {
    'id_hymn': 182,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cuando venga Jesucristo\nen busca de joyas,\ntodo niño redimido\nsu gema será.'
  },
  {
    'id_hymn': 182,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Como estrellas que brillan\nson los niños que le aman;\nson tesoros que adornan\nal Rey y Señor.'
  },
  {
    'id_hymn': 182,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Quiere Cristo en su corona\nbrillantes preseas;\ncada gema que le adorna\ncon sangre compró.'
  },
  {
    'id_hymn': 182,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Si los niños y las niñas\nacuden a Cristo,\nbellas joyas, escogidas,\nserán para Él.'
  },
  {
    'id_hymn': 183,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Corazones siempre alegres,\nrebosando gratitud,\nsomos los que a Dios amamos,\nredimida juventud.'
  },
  {
    'id_hymn': 183,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Siempre alegres vamos todos,\nllenos de felicidad;\nhermosísimo es el camino\nhacia la eternidad.'
  },
  {
    'id_hymn': 183,
    'order': 2,
    'type': 'STROPHE',
    'content': ' Dios nos guía de la mano;\nnos ampara su poder;\nes su brazo poderoso\ny nos quiere defender.'
  },
  {
    'id_hymn': 183,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Si en la lucha desmayamos\no nos sitia la maldad,\ncon su gracia nos anima,\nnos levanta su bondad.'
  },
  {
    'id_hymn': 184,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Es el amor divino\nmi gozo y mi placer,\nallana mi camino y\nme hace obedecer.'
  },
  {
    'id_hymn': 184,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Dios es amor, soy su pequeñuelo;\nquiero ser santo como es Él.\nEs el amor divino mi gozo y mi placer,\nallana mi camino y me hace obedecer.'
  },
  {
    'id_hymn': 184,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Del triste mundo lleno\nde muerte y dolor,\nquisiera yo llevar a Dios\nun pobre pecador.'
  },
  {
    'id_hymn': 184,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Y cuando vaya al cielo\ncon Cristo, mi Señor,\nallí por siempre cantaré\nde Dios y de su amor.'
  },
  {
    'id_hymn': 185,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Grato es contar la historia\nde celestial favor,\nde Cristo y de su gloria,\nde Cristo y de su amor.\nMe agrada referirla,\npues sé que es la verdad;\ny nada satisface\ncual ella mi ansiedad.'
  },
  {
    'id_hymn': 185,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Cuán bella es esta historia!\nMi tema allá en la gloria\nserá ensalzar la historia\nde Cristo y de su amor.'
  },
  {
    'id_hymn': 185,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Grato es contar la historia\nmás bella que escuché,\nmás áurea, más hermosa\nque cuanto yo soñé.\nContarla siempre anhelo,\npues hay quien nunca oyó\nque, para redimirle,\nel buen Jesús murió.'
  },
  {
    'id_hymn': 185,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Grato es contar la historia\nque placentera es\ny es más, al repetirla,\npreciosa cada vez.\nLa historia, pues, que canto,\noíd con atención,\npor que es mensaje santo\nde eterna salvación.'
  },
  {
    'id_hymn': 185,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Grato es contar la historia\nde todas la mejor,\nque cuanto más se escucha\ninfunde más amor.\nY cuando allá en la gloria\nentone mi cantar,\nserá la misma historia\nque tanto supe amar.'
  },
  {
    'id_hymn': 186,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Honra al hombre de valor\npronto a obedecer\nel mandato del Señor,\ntal cual lo fue Daniel.'
  },
  {
    'id_hymn': 186,
    'order': 2,
    'type': 'CHORUS',
    'content': 'A Daniel imita;\ndalo a conocer;\nmuéstrate resuelto y firme,\naunque solo estés.'
  },
  {
    'id_hymn': 186,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Muchos yacen sin valor,\nque pudieran ser\nnobles héroes del Señor,\ntal cual lo fue Daniel.'
  },
  {
    'id_hymn': 186,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Lucha en nombre del Señor\nsin desfallecer.\nSé en la lucha vencedor,\ntal cual lo fue Daniel.'
  },
  {
    'id_hymn': 187,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Pronto Jesús regresará\ncual majestuoso Rey,\ncon ansiedad lo esperan ya\nlos fieles de su grey,\nlos fieles de su grey;\nlos fieles, fieles de su grey.'
  },
  {
    'id_hymn': 187,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Sobre su trono reinará,\ncantemos su loor;\nla creación repite ya\nlos triunfos de su amor,\nlos triunfos de su amor;\nlos triunfos, triunfos de su amor.'
  },
  {
    'id_hymn': 187,
    'order': 3,
    'type': 'STROPHE',
    'content': ' Nuestro Señor gobernará\nen gloria y con bondad;\na todo ser impartirá\ntu gracia y santidad;\nsu gracia, gracia y santidad.'
  },
  {
    'id_hymn': 188,
    'order': 1,
    'type': 'STROPHE',
    'content': 'En presencia estar de Cristo,\nver su rostro, ¿qué será,\ncuando al fin en pleno gozo,\nmi alma le contemplará?.'
  },
  {
    'id_hymn': 188,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Cara a cara espero verle\ncuando venga en gloria luz;\ncara a cara allá en el cielo\nhe de ver a mi Jesús.'
  },
  {
    'id_hymn': 188,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Sólo tras oscuro velo\nhoy lo puedo aquí mirar,\npero pronto viene el día\nque su gloria ha de mostrar.'
  },
  {
    'id_hymn': 188,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Cuánto gozo habrá con Cristo\ncuando no haya más dolor,\ncuando cesen los peligros\nal abrigo de su amor!'
  },
  {
    'id_hymn': 188,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Cara a cara, ¡cuán glorioso\nha de ser así vivir,\nver el rostro de quien quiso\nnuestras almas redimir!'
  },
  {
    'id_hymn': 189,
    'order': 1,
    'type': 'STROPHE',
    'content': '¿Será al albor, cuando el día despierta\ny el sol cada sombra nocturna ahuyenta?\n¿Será al albor cuando en toda su gloria\nvolverá a la tierra Jesús?.'
  },
  {
    'id_hymn': 189,
    'order': 2,
    'type': 'CHORUS',
    'content': '¿Cuánto aún faltará, Señor,\nhasta que cante así:\n“Cristo vuelve, ¡aleluya!, aleluya!\nAmén.¡Aleluya! Amén”?'
  },
  {
    'id_hymn': 189,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Trompeta triunfal todos pronto oiremos;\nsu escolta de ángeles santos veremos;\nsu sien coronada de luz miraremos\ncuando venga en gloria Jesús.'
  },
  {
    'id_hymn': 189,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Qué gozo habrá cuando acabe la muerte!\nVivir sin dolor tocarános en suerte;\nlas penas y el mal quitará el Dios fuerte\ncuando venga en gloria Jesús.'
  },
  {
    'id_hymn': 190,
    'order': 1,
    'type': 'STROPHE',
    'content': 'El Rey que viene cerca está,\nel mismo que en la cruz murió;\nmas sólo viene esta vez\npor los que rescató.'
  },
  {
    'id_hymn': 190,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Cerca está, cerca está,\na las puertas mismas llega ya;\nviene presto, viene presto;\na las puertas llega ya.'
  },
  {
    'id_hymn': 190,
    'order': 2,
    'type': 'STROPHE',
    'content': 'De su venida vemos ya\nseñales muchas por doquier,\ny pronto el alba eternal\npodrán los pueblos ver.'
  },
  {
    'id_hymn': 190,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Pues no contéis con gozo y paz\naquí las luchas seguirán;\nmas cuando vuelva el Salvador,\neterno fin tendrán.'
  },
  {
    'id_hymn': 190,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Entonces nuestro hogar será\nla tierra nueva, eternal;\nla muerte nunca entrará,\npues todo es inmortal.'
  },
  {
    'id_hymn': 191,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cuando junte Jesús las naciones\nque ante Él han de comparecer;\n¡oh!, ¿cómo hemos de estar en el juicio,\nel fallo del Juez al saber?.'
  },
  {
    'id_hymn': 191,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Juntará todo el trigo en su troje,\nmas al viento el tamo esparcirá.\nPues, ¿cómo hemos\nde estar en el juicio\ndel gran día que pronto vendrá?.'
  },
  {
    'id_hymn': 191,
    'order': 2,
    'type': 'STROPHE',
    'content': '¿Del Señor las palabras oiremos;\n“Bien hecho, mi buen siervo fiel”?\n¿O temblando de espanto, seremos\nquitados del trono por Él?'
  },
  {
    'id_hymn': 191,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Mirará complacido a sus hijos,\nsu sello en sus frentes verá;\nmientras ellos de hinojos le adoren,\ncoronas de luz les pondrá.'
  },
  {
    'id_hymn': 191,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Esperemos, velemos, y hagamos\nlas lámparas todas brillar,\ny al venir el Esposo a las bodas,\ngozosos podremos entrar.'
  },
  {
    'id_hymn': 192,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Siervos de Dios, la trompeta tocad:\n¡Cristo muy pronto vendrá!\nA todo el mundo las nuevas llevad:\n¡Cristo muy pronto vendrá!.'
  },
  {
    'id_hymn': 192,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Pronto vendrá! ¡Pronto vendrá!\nCristo muy pronto vendrá!.'
  },
  {
    'id_hymn': 192,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Fieles de Cristo, doquier anunciad:\n¡Cristo muy pronto vendrá!\nSiempre alegres, contentos, cantad:\n¡Cristo muy pronto vendrá!.'
  },
  {
    'id_hymn': 192,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Montes y valles, canción entonad:\n¡Cristo muy pronto vendrá!\nOndas del mar vuestras voces alzad:\n¡Cristo muy pronto vendrá!.'
  },
  {
    'id_hymn': 192,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Naciones rugen, señal se os da:\n¡Cristo muy pronto vendrá!\nA todas partes id, y predicad:\n¡Cristo muy pronto vendrá!.'
  },
  {
    'id_hymn': 193,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Vendrá el Señor! Nadie sabe la hora;\ndel día anhelado se ve la aurora.\n¡Oh, siervos de Dios,\nanunciad sin demora\nque muy pronto vendrá!.'
  },
  {
    'id_hymn': 193,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Él vendrá! ¡Esperad y velad,\npues Él vendrá! ¡Aleluya! ¡Aleluya!\nEn las nubes vendrá\ncon sus huestes gloriosas;\nsí, muy pronto vendrá.'
  },
  {
    'id_hymn': 193,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En cielo y tierra se anuncia el portento\nde Cristo en su glorioso advenimiento.\n¡Oh, pueblo de Dios,\nes solemne el momento,\npues muy pronto vendrá!'
  },
  {
    'id_hymn': 193,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Velad y orad con la vista alzada;\nsalid y luchad con la Santa Espada;\noh, id trabajad\ncon la fe reanimada,\npues muy pronto vendrá.'
  },
  {
    'id_hymn': 194,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Hijo del reino, ¿por qué estas durmiendo,\ncuando a la vista se halla tu hogar?\nPresto levántate, ciñe tus armas;\nen el conflicto tendrás que luchar.'
  },
  {
    'id_hymn': 194,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Hijo del reino, ¿por qué tardas tanto,\ncuando delante el premio se ve?\nÁlzate, vístete, Cristo se acerca;\nsal a su encuentro, recibe a tu Rey.'
  },
  {
    'id_hymn': 194,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Grandes naciones en lucha furiosa,\ndespavoridas hundiendo se van;\nes el estruendo del carro triunfante,\ndel divinal, vencedor Capitán.'
  },
  {
    'id_hymn': 194,
    'order': 4,
    'type': 'STROPHE',
    'content': 'No sigas más tras placeres mundanos;\nves que su encanto pasando se va;\nrompe los lazos con que estás atado;\na Cristo acude, que te amparará.'
  },
  {
    'id_hymn': 194,
    'order': 5,
    'type': 'STROPHE',
    'content': 'Fija tu vista constante en el cielo;\npasa la noche de tribulación;\nsobre las cúspides ya rompe el alba;\n¡hijo del reino, prorrumpe en canción!'
  },
  {
    'id_hymn': 195,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Viene otra vez nuestro Salvador,\n¡oh, si ya fuera hoy!,\npara reinar con poder y amor,\n¡oh, si ya fuera hoy!\nSu fiel iglesia ataviada está\ncon vestiduras de esplendor,\ny en busca del Esposo va.\n¡Oh, si ya fuera hoy!.'
  },
  {
    'id_hymn': 195,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Gloria!, ¡gloria!Gozo sin fin traerá.\n¡Gloria!, ¡gloria! al coronarle Rey.\nGloria!, ¡gloria! La senda preparad.\n¡Gloria!, ¡gloria! Cristo viene otra vez.'
  },
  {
    'id_hymn': 195,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Acabará el poder de Satán,\n¡oh, si ya fuera hoy!\nNegras tristezas no se verán,\n¡oh, si ya fuera hoy!\nTodos los justos con Cristo irán,\narrebatados por su Señor.\n¿Cuándo estas glorias llegarán?\n¡Oh, si ya fuera hoy!.'
  },
  {
    'id_hymn': 195,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Fieles a Él nos debiera hallar\nsi regresara hoy;\ntodos velando, con gozo y paz,\nsi regresará hoy.\nMultiplicadas señales hay;\nen el oriente se ve el albor;\nya más cercano el tiempo está.\n¡Oh, si ya fuera hoy!.'
  },
  {
    'id_hymn': 196,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cuando mi lucha toque a su final\ny me halle salvo en la playa eternal,\njunto al que adoro, mi Rey celestial, \neterna gloria será para mí.'
  },
  {
    'id_hymn': 196,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Gloria sin fin eso será,\ngloria sin fin eso será.\nCuando por gracia su faz vea allí,\neterna gloria será para mí.'
  },
  {
    'id_hymn': 196,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cuando su gracia infinita me dé\nbella morada en la casa del Rey,\nyo, transportado, su cara veré,\ny eterna gloria será para mí.'
  },
  {
    'id_hymn': 196,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Encontraré a mis amados allá;\ngozo cual río en redor correrá;\ndulce sonrisa Jesús me dará;\neterna gloria será para mí.'
  },
  {
    'id_hymn': 197,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Hay un mundo feliz más allá,\ndonde cantan los santos en luz\ntributando eterno loor\nal invicto, glorioso Jesús.'
  },
  {
    'id_hymn': 197,
    'order': 2,
    'type': 'CHORUS',
    'content': 'En el mundo feliz\nreinaremos con nuestro Señor;\nen el mundo feliz\nreinaremos con nuestro Señor.'
  },
  {
    'id_hymn': 197,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cantaremos con gozo a Jesús,\nal Cordero que nos rescató,\nque con sangre vertida en la cruz\nlos pecados del mundo quitó.'
  },
  {
    'id_hymn': 197,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Para siempre en el mundo feliz\ncon los santos daremos honor,\nal invicto, glorioso Jesús,\na Jesús, nuestro Rey y Señor.'
  },
  {
    'id_hymn': 198,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cantaré, cantaré del glorioso país,\ncon su incomparable jardín;\nque ha de ser de los salvos la patria feliz\nmientras corran los siglos sin fin,\nmientras corran los siglos sin fin;\nque ha de ser de los salvos la patria feliz\nmientras corran los siglos sin fin.'
  },
  {
    'id_hymn': 198,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Es del alma el hogar; por visiones de fe\nsus muros de jaspe se ven,\ny parece que un velo delgado, no más,\nhoy me oculta ese reino del bien,\nhoy me oculta ese reino del bien;\ny parece que un velo delgado, no más,\nhoy me oculta ese reino del bien.'
  },
  {
    'id_hymn': 198,
    'order': 3,
    'type': 'STROPHE',
    'content': 'En el bello país, ¡oh, cuán dulce será!\nLibrados de pena y dolor,\ncongregados cantarle con arpa y con voz\nalabanzas a nuestro Señor,\nalabanzas a nuestro Señor,\ncongregados cantarle con arpa y con voz\nalabanzas a nuestro Señor.'
  },
  {
    'id_hymn': 199,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Estando a orillas del Jordán\nansioso miro allá,\na Canaán, la celestial,\ndo el justo morará.'
  },
  {
    'id_hymn': 199,
    'order': 2,
    'type': 'CHORUS',
    'content': 'A la tierra feliz y hermosa voy\nsus delicias sin fin a gozar,\nde Moisés y el Cordero\na entonar la canción\ny siempre con Cristo a morar.'
  },
  {
    'id_hymn': 199,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Sobre esos anchos llanos\nya refulge eterna luz,\nal fin la noche acabará,\npues es cual sol Jesús.'
  },
  {
    'id_hymn': 199,
    'order': 3,
    'type': 'STROPHE',
    'content': ' ¿Cuándo he de entrar en el país\nbendito y ver la faz\nde Aquel con quien iré a morar\nen sempiterna paz?'
  },
  {
    'id_hymn': 200,
    'order': 1,
    'type': 'STROPHE',
    'content': '¿Quieres ser salvo de toda maldad?\nTan sólo hay poder en mi Jesús.\n¿Quieres vivir y gozar santidad?\nTan sólo hay poder en Jesús.'
  },
  {
    'id_hymn': 200,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Hay poder, sí, sin igual poder\nen Jesús, quien murió;\nhay poder, sí, sin igual poder,\nen la sangre que Él vertió.'
  },
  {
    'id_hymn': 200,
    'order': 2,
    'type': 'STROPHE',
    'content': ' ¿Quieres ser libre de orgullo y pasión?\nTan sólo hay poder en mi Jesús.\n¿Quieres vencer toda cruel tentación?\nTan sólo hay poder en Jesús.'
  },
  {
    'id_hymn': 200,
    'order': 3,
    'type': 'STROPHE',
    'content': '¿Quieres servir a tu Rey y Señor?\nTan sólo hay poder en mi Jesús.\nVen, y ser salvo podrás en su amor.\nTan sólo hay poder en Jesús.'
  },
  {
    'id_hymn': 201,
    'order': 1,
    'type': 'STROPHE',
    'content': '¿Nos veremos junto al río\ncuyas aguas cual cristal,\nfluyen puras, argentinas,\ndesde el trono del buen Dios?'
  },
  {
    'id_hymn': 201,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Oh!, sí, nos congregaremos\nen la ribera hermosa del río\ncuyas aguas vivas dimanan\ndel trono de nuestro Dios.'
  },
  {
    'id_hymn': 201,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En las márgenes del río\ndo los serafines van,\ndonde hay bellos querubines,\nda la dicha eterna Dios.'
  },
  {
    'id_hymn': 201,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Antes de llegar al río,\nnuestras cargas al dejar,\nlibres todos quedaremos\npor la gracia del Señor.'
  },
  {
    'id_hymn': 201,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Pronto al río llegaremos;\nnuestra peregrinación\ncesará una vez entremos\na la célica mansión.'
  },
  {
    'id_hymn': 202,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Un día yo he de faltar\nde mi lugar en esta grey;\nmas ¡oh, que gozo al despertar\nal fiel llamado de mi Rey!'
  },
  {
    'id_hymn': 202,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Y cara a cara le veré,\ny viviré con Él allí,\ny para siempre cantaré:\n“Salvado por su gracia fui”.'
  },
  {
    'id_hymn': 202,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Un día a mí la muerte atroz\nvendrá, mas cuando, no lo sé;\nsólo esto sé, que con mi Dios\nun sitio yo feliz tendré.'
  },
  {
    'id_hymn': 202,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Un día yo, tal como el sol,\nmi ocaso y fin tendré también;\nmas cuando venga el Salvador,\nsu voz dirá: “Ven, hijo, ven”.'
  },
  {
    'id_hymn': 203,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Tú eres Autor y Dios de nuestra vida;\ntu gran amor nos llena de esperanza.\nTodos los dones que tu iglesia ansía,\ndas sin tardanza.'
  },
  {
    'id_hymn': 203,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cuando el escudo terrenal nos falla;\ncuando el mortal pecado nos asalta;\ncuando la voz del mundo nos acalla,\ntú no nos faltas.'
  },
  {
    'id_hymn': 203,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Danos vivir en paz y sin temores,\nlas guerras y discordias que se acaben,\nque no haya en nuestra vida sinsabores,\ntodos te alaben.'
  },
  {
    'id_hymn': 203,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Tu ayuda danos, danos la victoria\nsobre el orgullo, odio y rencores,\ny que al quedar cerrada nuestra historia\nsea sin temores.'
  },
  {
    'id_hymn': 204,
    'order': 1,
    'type': 'STROPHE',
    'content': ' ¡Oh amor de Dios!, tu inmensidad\nel hombre no podrá contar,\nni comprender la gran verdad\nQue Dios al hombre pudo amar.\nCuando el pecar entró al hogar\nde Adán y Eva en Edén,\nDios los sacó, mas prometió\nun Salvador también.'
  },
  {
    'id_hymn': 204,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Oh amor de Dios!, brotando estás,\ninmensurable, eternal;\npor las edades durarás,\ninagotable raudal.'
  },
  {
    'id_hymn': 204,
    'order': 2,
    'type': 'STROPHE',
    'content': ' Si fuera tinta todo el mar\ny todo el cielo un gran papel,\ny todo hombre un escritor\ny cada hoja un pincel,\npara escribir de su existir,\nno bastarían jamás.\nÉl me salvó y me lavó,\ny me da el cielo además.'
  },
  {
    'id_hymn': 204,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Y cuando el mundo pase ya,\ncon cada trama y plan carnal,\ny todo reino caiga ya,\ncon cada trono mundanal,\nel gran amor del Redentor,\npor siempre durará;\nla gran canción de salvación\nsu pueblo entonará.'
  },
  {
    'id_hymn': 205,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Load al Padre por su omnipotencia;\nload al Padre, proclamad su gracia.\nVoz de alabanza alce toda alma.\n¡Load al Padre!'
  },
  {
    'id_hymn': 205,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Gloria al Padre por su gran ternura;\ngloria al Padre, sea siempre el canto.\nPor su grandeza alabadle todos.\n¡Gloria al Padre!'
  },
  {
    'id_hymn': 205,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Honrad al Padre, el Señor benigno;\nhonrad al Padre, quien os da la vida,\n¡Huestes del cielo, pueblos de la tierra,\nhonrad al Padre!'
  },
  {
    'id_hymn': 206,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Estad en paz y conoced\nlas maravillas del Señor\ny sólo a Él reconoced\nque grande es en poder y amor.\nGuardad silencio y sabed\nmás de su don perdonador.'
  },
  {
    'id_hymn': 206,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Es nuestro Alfarero fiel\ny como quiera nos formará.\nSí, comulgemos hoy con Él\nque vaso útil nos hará.\nPremiado al fin será aquel\nque por el bien se inclinará.'
  },
  {
    'id_hymn': 206,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Estad en paz y conoced\nla gran salud de Jehová\nhumildemente obedeced,\nque el siervo fiel al cielo va.\nÉl os otorga su merced\ny sus promesas cumplirá.'
  },
  {
    'id_hymn': 206,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Velad en calma y orad\nque Dios está en este lugar.\nA Él temed, el mal dejad,\npoder en Él hay de salvar;\nsu mansedumbre imitad\nque listos hoy os pueda hallar.'
  },
  {
    'id_hymn': 207,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Dios de luz y gloria excelsa,\naunque débil nuestro amor,\nque tu Espíritu enternezca\ntodo corazón, Señor.'
  },
  {
    'id_hymn': 207,
    'order': 2,
    'type': 'STROPHE',
    'content': 'No te abarca el ancho cielo,\nde tu faz la tierra huirá;\ny aunque apénate el pecado,\ntu piedad perdonará.'
  },
  {
    'id_hymn': 207,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Gratitud dará mi lengua\nbajo gracia o corrección;\ntoma el don que humilde ofrezco:\nMente, fuerza y corazón.'
  },
  {
    'id_hymn': 207,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Al ganar la gran victoria,\nlibre de egoísmo aquí,\npuedo proclamar la gloria\nde quien se entregó por mí.'
  },
  {
    'id_hymn': 208,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Tu merced gratuita fluya en mi ser;\ntu bondad bendita hazme conocer.\nVea yo tu gloria, oye mi clamor;\nmía la victoria por tu eterno amor.'
  },
  {
    'id_hymn': 208,
    'order': 2,
    'type': 'STROPHE',
    'content': 'El sol del verano sobre tierra y mar\ndesde muy temprano viene a iluminar;\ntrae alegría, cantos de loor,\ndulce melodía para el Creador.'
  },
  {
    'id_hymn': 208,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Sana mi ceguera, vierte tu fulgor;\nhaz que sea sincera mi alma, ¡oh, Señor!\nQue los suaves rayos de luz celestial,\nquiten esas nubes de mi ser mortal.'
  },
  {
    'id_hymn': 208,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Siempre has mostrado tu eterno amor;\ntú nos has enviado al buen Salvador;\nvida, luz y cielo lleno de esplendor,\ny apartado el velo: ¡Gloria a ti, Señor!'
  },
  {
    'id_hymn': 209,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Oh Dios Invisible, Sapiente, Inmortal,\nen luz no accesible oculto estás!\nAnciano de días, glorioso, eternal;\nalaben tu nombre por siempre jamás.'
  },
  {
    'id_hymn': 209,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Sin pausa, sin prisa, constante a la vez,\ncual luz silenciosa gobiernas Señor.\nTu grande justicia cual los montes es,\ndo fluye la fuente de dicha y amor.'
  },
  {
    'id_hymn': 209,
    'order': 3,
    'type': 'STROPHE',
    'content': 'En todos habitas y enseñas verdad,\na chicos y a grandes la vida les das;\na cada momento nos das tu bondad,\nporque eres el mismo, no cambias jamás.'
  },
  {
    'id_hymn': 209,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Angélicos seres, velando su faz,\ncon gozo proclaman tu gran majestad.\nRogamos nos muestres, allá, donde estás,\nla luz que perdura por la eternidad.'
  },
  {
    'id_hymn': 210,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Al Dios de Abrahán rindámosle loor,\na quien los cantos subirán y es Dios de amor.\nJehová, el Gran Yo soy, merece adoración;\nen cielo y tierra muestra hoy su bendición.'
  },
  {
    'id_hymn': 210,
    'order': 2,
    'type': 'STROPHE',
    'content': 'A ti glorioso Dios, supremo en majestad,\nrogamos oigas nuestra voz en tu bondad.\nTu ciencia alta es,no hay comparación,\ny suplicamos que nos des tu protección.'
  },
  {
    'id_hymn': 210,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Los santos te darán por siempre adoración,\nen tus mansiones gozarán tu salvación.\nCon gozo me uniré al coro celestial\ny jubiloso cantaré al Inmortal.'
  },
  {
    'id_hymn': 211,
    'order': 1,
    'type': 'STROPHE',
    'content': ' ¡Señor yo te conozco!\nLa noche azul, serena,\nme dice desde lejos:\n“Tu Dios se esconde allí”.\nPero la noche oscura,\nla de nublados llena,\nme dice más pujante:\n“Tu Dios se acerca a ti”.'
  },
  {
    'id_hymn': 211,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Te acercas, sí; conozco\nlas orlas de tu manto\nen esa ardiente nube\ncon que ceñido estás;\nel resplandor conozco\nde tu semblante santo\ncuando al cruzar el éter,\nrelampagueando vas.'
  },
  {
    'id_hymn': 211,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Conozco de tus pasos\nlas invisibles huellas\ndel repentino trueno\nen el crujiente son;\nlas chispas de tu carro\nconozco en las centellas,\ntu aliento en el rugido\ndel rápido aquilón.'
  },
  {
    'id_hymn': 211,
    'order': 4,
    'type': 'STROPHE',
    'content': '¿Quién ante ti parece?\n¿Quién es en tu presencia\nmás que una arista seca\nque el aire va a romper?\nTus ojos son el día;\ntu soplo es la existencia;\ntu alfombra el firmamento;\nla eternidad tu ser.'
  },
  {
    'id_hymn': 211,
    'order': 5,
    'type': 'STROPHE',
    'content': '¡Señor!, yo te conozco;\nmi corazón te adora;\nmi espíritu de hinojos\nante tus pies está;\npero mi lengua calla,\nporque mi mente ignora\nlos cánticos que llegan\nal grande y buen Jehová.'
  },
  {
    'id_hymn': 212,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Al Rey adorad, grandioso Señor,\ny con gratitud cantad de su amor.\nAnciano de días, y gran defensor,\nde gloria vestido, te damos loor.'
  },
  {
    'id_hymn': 212,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Load su amor, su gracia cantad;\nvestido de luz y de majestad.\nSu carro de fuego en las nubes mirad,\nrefulgen sus huellas en la tempestad.'
  },
  {
    'id_hymn': 212,
    'order': 3,
    'type': 'STROPHE',
    'content': '¿Quién puede tu providencia contar?,\npues aire me das para respirar\nEn valles y montes alumbra tu luz,\ny con gran dulzura me cuidas, Jesús.'
  },
  {
    'id_hymn': 212,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Muy frágiles son los hombres aquí,\nmas por tu bondad confiamos en ti.\nTu misericordia aceptamos, Señor,\nCreador, nuestro Amigo y fiel Redentor.'
  },
  {
    'id_hymn': 213,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Eterno Dios de gran poder, sublime y sin fin.\nEs portentoso en saber, supremo, sin confín.\nEn Él no existe el allá, ni excusas ni temor,\ny cuanto quiere eso hará su amor perdonador.'
  },
  {
    'id_hymn': 213,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Dios es de ciencia y verdad, merece adoración.\nHonores a Él tributad, sincera devoción.\nCual Él más nadie existirá que libre de aflicción,\ny siempre nos protegerá del mal y tentación.'
  },
  {
    'id_hymn': 213,
    'order': 3,
    'type': 'STROPHE',
    'content': 'En santidad de corazón le debo de buscar;\nbrindarme quiere protección, me ha de libertar.\nNo quiere que haya en mí fealdad,\nni en mi corazón;\nque muestre siempre su bondad,\nen toda ocasión.'
  },
  {
    'id_hymn': 213,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Justicia dio a conocer por medio de Jesús;\nen Él pudimos renacer, gozar de plena luz.\nSu vida quiero yo vivir,será mi gran placer;\ntan sólo quiero a Él servir y darle yo mi ser.'
  },
  {
    'id_hymn': 214,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Yo canto el poder de Dios,\ndel Creador, Jesús;\nhabló con su potente voz\ny apareció la luz.\nYo canto el poder de Aquel\nque en alto puso el sol,\nen la pradera el clavel,\nen playa el caracol.'
  },
  {
    'id_hymn': 214,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Yo canto la bondad de quien\nlos árboles plantó,\nel mar mantiene en su nivel,\nlos pájaros creó.\nLa maravilla de su amor\nla observo por doquier,\nya mire al cielo en su esplendor\no al oscurecer.'
  },
  {
    'id_hymn': 214,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Tus glorias proclamadas son\npor cuanto aquí se ve:\nla flor, el viento y el gorrión,\nla risa del bebé.\nBien sé que en tu presencia estoy,\nque tú conmigo vas,\ny si al confín del mundo voy,\ntú, Dios, allí estás.'
  },
  {
    'id_hymn': 215,
    'order': 1,
    'type': 'STROPHE',
    'content': 'El mundo es de mi Dios;\nsu eterna posesión.\nEleva a Dios su dulce voz\nla entera creación.\nEl mundo es de mi Dios;\nconforta así pensar.\nÉl hizo el sol y el arrebol,\nla tierra, cielo y mar.'
  },
  {
    'id_hymn': 215,
    'order': 2,
    'type': 'STROPHE',
    'content': 'El mundo es de mi Dios;\nescucho alegre son\ndel ruiseñor, que al Creador\neleva su canción.\nEl mundo es de mi Dios;\ny en todo mi redor\nlas flores mil con voz sutil\ndeclaran fiel su amor.'
  },
  {
    'id_hymn': 215,
    'order': 3,
    'type': 'STROPHE',
    'content': 'El mundo es de mi Dios;\njamás lo olvidaré.\nY aunque infernal parezca el mal,\nmi Padre Dios es Rey.\nEl mundo es de mi Dios;\nal Salvador Jesús\nhará vencer, por su poder,\ncon la obra de la cruz.'
  },
  {
    'id_hymn': 216,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cielo y tierra ha creado, también la luz.\nJunto con su Hijo amado, Señor Jesús.\nInvisible como el viento,\nnos sostiene con su aliento\ny nos brinda el alimento, nos da la luz.'
  },
  {
    'id_hymn': 216,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En extremo poderoso y señorial;\ny también es muy celoso, Dios eternal.\nDueño es del cielo y tierra\ny perdona a aquel que yerra;\ntodos en su amor encierra, tan especial.'
  },
  {
    'id_hymn': 216,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Es magnánimo y paciente, perdonador;\nnos ampara tiernamente, es protector.\nInfinitos mundos tiene,\nsu deber Él les define,\ncomo Padre los sostiene el Gran Autor.'
  },
  {
    'id_hymn': 216,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Él nos da gratuitamente la salvación,\ny con Él eternamente vamos a Sión.\nPor los siglos honraremos\na quien tanto supo amarnos,\nen su reino gozaremos gran bendición.'
  },
  {
    'id_hymn': 217,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Señor Jehová, Omnipotente Dios,\ntú que los astros riges con poder,\noye clemente nuestra humilde voz,\nnuestra canción hoy dígnate atender.'
  },
  {
    'id_hymn': 217,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Eterno Padre, nuestro corazón\na ti profesa un inefable amor;\nentre nosotros tu presencia pon,\ntiéndenos, pues, tu brazo protector.'
  },
  {
    'id_hymn': 217,
    'order': 3,
    'type': 'STROPHE',
    'content': 'A nuestra iglesia da tu bendición,\nenséñanos tus leyes a guardar;\nalumbra la conciencia y la razón;\ndomina siempre tú en todo hogar.'
  },
  {
    'id_hymn': 217,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Defiéndenos del enemigo cruel;\nconcede a nuestras faltas corrección;\nnuestro servicio sea siempre fiel;\ny sénos tú la grande protección.'
  },
  {
    'id_hymn': 218,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Suenen dulces himnos gratos al Señor\ny óiganse en concierto universal!\nDesde el alto cielo baja el Salvador\npara beneficio del mortal.'
  },
  {
    'id_hymn': 218,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Gloria! ¡Gloria sea a nuestro Dios!\n¡Gloria!, sí, cantemos a una voz.\nY el cantar de gloria\nque se oyó en Belén,\nsea nuestro cántico también.'
  },
  {
    'id_hymn': 218,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Montes y collados fluyan leche y miel,\ny abundancia esparzan y solaz.\nGócense los pueblos, gócese Israel,\nque a la tierra viene ya la paz.'
  },
  {
    'id_hymn': 218,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Salte de alegría lleno el corazón,\nla abatida y pobre humanidad;\nDios se compadece viendo su aflicción\ny le muestra buena voluntad.'
  },
  {
    'id_hymn': 218,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Lata en nuestros pechos noble gratitud\nhacia quien nos brinda redención;\ny a Jesús el Cristo, que nos da salud,\ntributemos nuestra adoración.'
  },
  {
    'id_hymn': 219,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Como niño fue nacido en Belén,\nla esperanza Él nos ha dado;\nfue predicho ya allá en el Edén\nque del cielo fuese enviado.\nA Él honores den.'
  },
  {
    'id_hymn': 219,
    'order': 2,
    'type': 'STROPHE',
    'content': ' Poderoso Rey, su nombre será,\nPadre Eterno y Dios Fuerte;\ny en la tierra paz y gozo dará,\nsu poder será creciente.\nEn todo vencerá.'
  },
  {
    'id_hymn': 219,
    'order': 3,
    'type': 'STROPHE',
    'content': 'La justicia en su trono tendrá\ny su cetro es sempiterno.\nBendiciones siempre a todos dará\nque provienen del Eterno.\nSu gozo durará.'
  },
  {
    'id_hymn': 220,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Los heraldos celestiales\ncantan con sonora voz:\n¡Gloria al Rey recién nacido\nque del cielo descendió!\nPaz, misericordia plena,\nfranca reconciliación\nentre el Padre, agraviado,\ny el mortal, que le ofendió.'
  },
  {
    'id_hymn': 220,
    'order': 2,
    'type': 'STROPHE',
    'content': '¡Salve!, Príncipe glorioso\nde la paz y del perdón,\n¡Salve a ti!, que de justicia\neres el divino Sol.\nLuz y vida resplandecen\na tu grata aparición,\ny en tus blancas alas traes\nla salud al pecador.'
  },
  {
    'id_hymn': 220,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Nace manso, despojado\nde su gloria y esplendor,\nporque no muramos todos\nen fatal condenación.\nNace, sí, para que el hombre\ntenga plena redención;\nnace para que renazca\na la vida el pecador.'
  },
  {
    'id_hymn': 221,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Ángeles, alzad el canto,\nla noticia celebrad;\nproclamad al mundo entero\nnuevas de consuelo y paz.\nAdoremos, adoremos\nal recién nacido Rey.'
  },
  {
    'id_hymn': 221,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Oh, pastores que oísteis\nel gran coro celestial,\nel mensaje tan sublime\npor doquiera anunciad.\nAdoremos, adoremos\nal recién nacido Rey.'
  },
  {
    'id_hymn': 221,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Sabios, contemplad con gozo\nde la estrella el fulgor,\nese astro portentoso\nque os guía al Salvador.\nAdoremos, adoremos\nal recién nacido Rey.'
  },
  {
    'id_hymn': 221,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Fieles, todos adoradle\ncon humilde gratitud;\ntodo honor y homenaje\ntributad al Rey Jesús.\nAdoremos, adoremos\nal recién nacido Rey.'
  },
  {
    'id_hymn': 222,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Se oye un canto angelical\nen los llanos de Israel;\ntrae dicha sin igual\nla llegada de Emanuel.'
  },
  {
    'id_hymn': 222,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Gloria desde el alto cielo.\n¡Gloria!, ¡vino el consuelo!'
  },
  {
    'id_hymn': 222,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Regocijo hay en Belén,\nalegría y gran canción;\nya nació el Supremo Bien\nque nos trae redención.'
  },
  {
    'id_hymn': 222,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Al pesebre acudid\ny al Niño adorad;\ncon gran gozo hoy venid\nalabando su bondad.'
  },
  {
    'id_hymn': 222,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Ved la virgen cuanto amor\nle prodiga a Jesús,\nno hay riquezas en redor,\nmas hay gloria, mucha luz.'
  },
  {
    'id_hymn': 223,
    'order': 1,
    'type': 'STROPHE',
    'content': ' ¿Qué niño éste que al dormir\nen brazos de María\npastores velan, ángeles\nle cantan melodías?'
  },
  {
    'id_hymn': 223,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Él es el Cristo, el Rey; \npastores, ángeles cantad,\nvenid, venid a Él, al hijo de María.'
  },
  {
    'id_hymn': 223,
    'order': 2,
    'type': 'STROPHE',
    'content': '¿Por qué en humilde establo así\nel niño es hoy nacido?\nPor todo injusto pecador\nsu amor ha florecido.'
  },
  {
    'id_hymn': 223,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Traed ofrendas en su honor,\noh, pueblos y naciones;\nal Rey de reyes, Salvador,\nun trono levantemos.'
  },
  {
    'id_hymn': 224,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Muy, solitario,\njunto al sendero,\nun pobre ciego mendigaba pan;\niba sin rumbo a tientas, en tinieblas.\nLlegó Jesús, y al ciego vista dio.'
  },
  {
    'id_hymn': 224,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Llegó Jesús y huyó el enemigo;\nllegó Jesús el llanto a enjugar;\nse irán las sombras y entrará su gloria\nsi a Jesús entrada quieres dar.'
  },
  {
    'id_hymn': 224,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Atormentado\npor el enemigo,\nentre las tumbas iba un hombre vil;\nsu cuerpo, el templo era del demonio.\nLlegó Jesús, y al diablo derrotó.'
  },
  {
    'id_hymn': 224,
    'order': 3,
    'type': 'STROPHE',
    'content': '“Inmundo, Inmundo”,\nclamaba el leproso;\nel sordomudo ni podía hablar;\nla fiebre alzó la víctima en sus garras.\nLlegó Jesús, la raza a libertar.'
  },
  {
    'id_hymn': 224,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Así los hombres de hoy\nson incapaces\nde dominar sus vicios, su temor;\nel corazón lo tienen quebrantado.\nJesús les brinda el bálsamo de amor.'
  },
  {
    'id_hymn': 225,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Tierra bendita y divina\nes la de Palestina,\ndonde nació Jesús;\neres, de las naciones, cumbre\nbañada por la lumbre\nque derramó su luz.'
  },
  {
    'id_hymn': 225,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Eres la historia inolvidable,\nporque en tu seno se derramó\nla sangre, preciosa sangre,\ndel unigénito Hijo de Dios.'
  },
  {
    'id_hymn': 225,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cuenta la historia del pasado\nque en tu seno sagrado\nvivió el Salvador,\ny en tus hermosos olivares\nhabló a los millares\nla palabra de amor.'
  },
  {
    'id_hymn': 225,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Quedan en ti testigos mudos\nque son los viejos muros\nde la Jerusalén;\nviejas paredes destruidas\nque si tuvieran vida nos\nhablarían también.'
  },
  {
    'id_hymn': 226,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Desde el principio honrado ha sido el Hijo\na quien el cielo da adoración.\nFue en el principio cuando se predijo\nque por su medio habría redención.\nTambién es Él la puerta de esperanza\ny del pecado Él me librará;\nsólo en Jesús se halla mi confianza\ny por los siglos sin fin me rescatará.'
  },
  {
    'id_hymn': 226,
    'order': 2,
    'type': 'STROPHE',
    'content': 'No puedo entender el gran misterio\nde cómo vino aquí y se humanó.\nCual fiel Pastor cumplió su ministerio,\nsu vida por el hombre entregó.\nDe amor de Dios, la fuente inagotable,\nDivino Mediador y Redentor,\nCordero Santo, Bueno, Incomparable,\ny por la eternidad es nuestro Guiador.'
  },
  {
    'id_hymn': 226,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cuan inefable fue su sacrificio\nque embelleciera al mundo con su paz,\nal dar su vida santa en beneficio\ndel hombre envilecido y falaz.\nMas esto sé, que he de ver su gloria,\nque sus promesas siempre cumplirá\ny luego de ganada la victoria\neterno gozo en el cielo me dará.'
  },
  {
    'id_hymn': 226,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Su herencia terrenal ha rescatado\ny las naciones todas le honrarán.\nCon infinito amor nos ha librado;\nhumanas voces gloria cantarán.\nCosechará el fruto que ha sembrado,\nlos mundos todos nos contemplarán;\nel gran conflicto ya finalizado,\ny en tierra y cielos alabanzas se oirán.'
  },
  {
    'id_hymn': 227,
    'order': 1,
    'type': 'STROPHE',
    'content': '¿Qué significa ese rumor?\n¿Qué significa ese tropel?\n¿Quién puede un día y otro así\nla muchedumbre conmover?\nResponde el pueblo en alta voz:\n“Pasa Jesús de Nazaret”:\nresponde el pueblo en alta voz:\n“Pasa Jesús de Nazaret”.'
  },
  {
    'id_hymn': 227,
    'order': 2,
    'type': 'STROPHE',
    'content': '¿Quién es, decid, aquel Jesús\nque manifiesta tal poder?\n¿Por qué a su paso la ciudad\nse agolpa ansiosa en torno a Él?\nLo dice el pueblo, oíd su voz:\n“Pasa Jesús de Nazaret”.\nLo dice el pueblo, oíd su voz:\n“Pasa Jesús de Nazaret”.'
  },
  {
    'id_hymn': 227,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Jesús, quien vino acá a sufrir\nangustia, afán, cansancio y sed;\ny dio consuelo, paz, salud\na cuantos viera padecer.\nPor eso alegre el ciego oyó:\n“Pasa Jesús de Nazaret”.\nPor eso alegre el ciego oyó:\n“Pasa Jesús de Nazaret”.'
  },
  {
    'id_hymn': 227,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Aun hoy se acerca el buen Jesús,\ndispuesto a hacernos mucho bien,\ny amante llama a nuestro hogar\ny quiere en él permanecer.\nSe acerca, sí, ¿no oís su voz?\n“Pasa Jesús de Nazaret”.\nSe acerca, sí, ¿no oís su voz?\n“Pasa Jesús de Nazaret”.'
  },
  {
    'id_hymn': 228,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Con júbilo tocad\ntrompeta y anunciad\ndel mundo en derredor,\nque vino el Redentor\nQue el grato día ya llegó,\nel grato día del Señor.\n¡Volveos, pues, al Salvador!'
  },
  {
    'id_hymn': 228,
    'order': 2,
    'type': 'STROPHE',
    'content': 'El mediador Jesús\nsu vida dio en la cruz.\nCansados, descansad,\ny tristes, escuchad\nEl grato día ya llegó,\nel grato día del Señor.\n¡Volveos, pues, al Salvador!'
  },
  {
    'id_hymn': 228,
    'order': 3,
    'type': 'STROPHE',
    'content': 'La buena nueva oíd;\nconfiados acudid.\nCon infinito amor\nespera el Salvador.\nEl grato día ya llegó,\nel grato día del Señor.\n¡Volveos, pues, al Salvador!'
  },
  {
    'id_hymn': 229,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Abrigadas y salvas en el redil\nlas noventa y nueve están;\npero allá en el bosque perdida va\nuna pobre rendida de afán.\nPor el monte escabroso y aterrador,\nmuy lejos vagando del Pastor,\nmuy lejos vagando del Pastor.'
  },
  {
    'id_hymn': 229,
    'order': 2,
    'type': 'STROPHE',
    'content': '“¿Del rebaño no bastan,\ntierno Pastor,\nlas noventa y nueve aquí?”.\nMas responde el Pastor:\n“Una oveja hoy\ndescarriada va lejos de mí.\nY en la sierra escarpada\nya voy a entrar,\nmi pobre oveja a rescatar,\nmi pobre oveja a rescatar”.'
  },
  {
    'id_hymn': 229,
    'order': 3,
    'type': 'STROPHE',
    'content': 'No sabrá el mortal del río veloz\nque el Pastor tuvo que cruzar;\nni cuán negra la noche\nfue en que Él salió,\nsu oveja perdida a buscar.\nSus gemidos y quejas podía oír;\nenferma estaba y por morir,\nenferma estaba y por morir.'
  },
  {
    'id_hymn': 229,
    'order': 4,
    'type': 'STROPHE',
    'content': '“Estas huellas sangrientas,\n¿quién las dejó?\n¿No lo puedes decir, Señor?”.\n“Cuando fui a buscar\nla que se extravió,\nlas dejé, como amante Pastor”.\n“Y tus manos, Señor,\n¿quién las laceró?”.\n“El áspero bosque las hirió,\nel áspero bosque las hirió”.'
  },
  {
    'id_hymn': 229,
    'order': 5,
    'type': 'STROPHE',
    'content': 'Una grande algazara luego se oyó,\npor doquier retumbando fue;\na la célica puerta la voz llegó:\n“Alegraos, que mi oveja encontré”.\nY cantaban los ángeles en redor:\n“¡Lo suyo rescata el buen Pastor,\nlo suyo rescata el buen Pastor!”.'
  },
  {
    'id_hymn': 230,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Ven a Cristo, ven ahora,\nven así cual estás,\ny de Él sin demora\nel perdón obtendrás.'
  },
  {
    'id_hymn': 230,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Si confías que en su muerte\nel perdón tú tendrás,\ngozoso en tu senda\nsin temor andarás.'
  },
  {
    'id_hymn': 230,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Ven a Cristo sin recelo;\nes inmenso su amor,\nÉl nunca rechaza\nal más vil pecador.'
  },
  {
    'id_hymn': 230,
    'order': 4,
    'type': 'STROPHE',
    'content': ' ¡Cuánto anhela concederte\nsu divino perdón,\ny abrirte las puertas\nde su eterna mansión!.'
  },
  {
    'id_hymn': 231,
    'order': 1,
    'type': 'STROPHE',
    'content': ' ¡Qué bella historia!\nDe su excelsa gloria\nbajó el Salvador, Jesús, mi Redentor.\nNació en pesebre,\ndespreciado y pobre,\nVarón de lágrimas y de dolor.'
  },
  {
    'id_hymn': 231,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Oh cuánto le amo y fiel le adoro;\nÉl es mi vida, mi Redentor!,\nel Rey de gloria vino a salvarme,\ny a revelarme al Dios de amor.'
  },
  {
    'id_hymn': 231,
    'order': 2,
    'type': 'STROPHE',
    'content': '¡Que gran misterio,\ntan incomprensible!\nEl Verbo se encarnó\ny al mundo descendió.\nEl plan oculto revelóse al hombre,\ny por su tierno amor me levantó.'
  },
  {
    'id_hymn': 231,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Don admirable, tan incomparable,\nde plena salvación,\ny eterna redención!\nEl sol divino brilla en mi camino;\nsu luz alumbrará mi corazón.'
  },
  {
    'id_hymn': 232,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Oh amor, profundo,\ninmenso amor!\nDe gozo llena el corazón\nque el Dios eterno, en su bondad,\ntomara forma corporal.'
  },
  {
    'id_hymn': 232,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Fue por nosotros su oración,\nsu enseñanza y su labor.\nJamás buscó su propio bien;\nse hizo siervo, siendo Rey.'
  },
  {
    'id_hymn': 232,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Él por nosotros padeció\nblasfemias, burlas y dolor;\ny para darnos vida y luz\nhalló la muerte en una cruz.'
  },
  {
    'id_hymn': 232,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Mas en su triunfo el nuestro está\ny junto al Padre, nuestro hogar;\nnos da su Espíritu. y en Él\nhallamos gozo, paz, poder.'
  },
  {
    'id_hymn': 233,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Muy ancho y grande es tu amor,\nmás que los cielos alto es;\ncontigo no tendré temor,\nbien sé que guiarás mis pies.'
  },
  {
    'id_hymn': 233,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Viniste al mundo, oh Señor,\nsufriste afrenta y cruel dolor.\nMortal jamás fue vencedor\nde prueba tal del tentador.'
  },
  {
    'id_hymn': 233,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Por mí sufriste en la cruz\na causa de mi trasgresión;\nte adoro hoy, mi buen Jesús,\nte imploro me des bendición'
  },
  {
    'id_hymn': 233,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Impíos hombres sin temor\nmaltrato dieron a Jesús,\nsin entender que mi Señor,\nvenía a darles plena luz.'
  },
  {
    'id_hymn': 233,
    'order': 5,
    'type': 'STROPHE',
    'content': 'Alzado de la muerte cruel\nvolviste al cielo vencedor.\nY cual consuelo al hombre fiel\ntu Espíritu le das, Señor.'
  },
  {
    'id_hymn': 233,
    'order': 6,
    'type': 'STROPHE',
    'content': 'Tu eterno amor por siempre es\nla fuente de la salvación;\nhoy nos postramos a tus pies\na agradecer tu redención. Amén'
  },
  {
    'id_hymn': 234,
    'order': 1,
    'type': 'STROPHE',
    'content': '¿Viste tú cuando en la cruz murió?\n¿Viste tú cuando en la cruz murió?\n¡Oh! Hay veces que al pensarlo\ntiemblo, tiemblo, tiemblo.\n¿Viste tú cuando en la cruz murió?'
  },
  {
    'id_hymn': 234,
    'order': 2,
    'type': 'STROPHE',
    'content': '¿Viste tú cuando expiró allí?\n¿Viste tú cuando expiró allí?\n¡Oh! Hay veces que al pensarlo\ntiemblo, tiemblo, tiemblo.\n¿Viste tú cuando expiró allí?'
  },
  {
    'id_hymn': 234,
    'order': 3,
    'type': 'STROPHE',
    'content': '¿Viste tú cuando enterrado fue?\n¿Viste tú cuando enterrado fue?\n¡Oh! Hay veces que al pensarlo\ntiemblo, tiemblo, tiemblo.\n¿Viste tú cuando enterrado fue?'
  },
  {
    'id_hymn': 234,
    'order': 4,
    'type': 'STROPHE',
    'content': '¿Viste tú cuando Él resucitó?\n¿Viste tú cuando Él resucitó?\n¡Oh! Hay veces que al pensarlo\nTiemblo, tiemblo, tiemblo.\n¿Viste tú cuando Él resucitó?'
  },
  {
    'id_hymn': 235,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Alabado el gran manantial\nque de sangre Dios nos mostró!\n¡Alabado el Rey que murió;\nsu pasión nos libra del mal!\nLejos del redil de mi Dueño\nvime pecador, perdido y vil.\nEl cordero sangre vertió;\nme limpia sólo este raudal.'
  },
  {
    'id_hymn': 235,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Sé que sólo así, me emblanqueceré.\nLávame en tu sangre, Jesús;\ny nívea blancura tendré.'
  },
  {
    'id_hymn': 235,
    'order': 2,
    'type': 'STROPHE',
    'content': 'La punzante insignia llevó;\nen la cruz dejó de vivir;\ngrandes males quiso sufrir,\nno en vano Cristo sufrió.\nAl gran manantial conducido,\nque de mi maldad ha sido fin,\n“lávame”, le pude decir,\ny nívea blancura me dio.'
  },
  {
    'id_hymn': 235,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Padre, de ti lejos vagué;\nextravióse mi corazón.\nComo grana mis culpas son;\nno con agua limpio seré.\nA tu fuente magna acudí;\ntu promesa creo, oh Jesús.\nLa eficaz virtud de tu don,\nla nívea blancura me dé.'
  },
  {
    'id_hymn': 236,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Es medianoche y Jesús\nen el jardín se inclina a orar,\ny las estrellas con su luz\nquieren a Cristo consolar.'
  },
  {
    'id_hymn': 236,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Solo y transido el Salvador\nlucha en contra del temor;\nsin comprender su gran dolor\nduermen los suyos. ¡Qué pavor!.'
  },
  {
    'id_hymn': 236,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Bajo gran peso de aflicción\ngotas de sangre suda Él.\n¡Oh, cuán enorme decisión\nsobre los hombros de Emanuel!'
  },
  {
    'id_hymn': 236,
    'order': 4,
    'type': 'STROPHE',
    'content': 'En su agonía sin igual\nes confortado por Gabriel,\ny al ver la suerte del mortal\nCristo acepta el cáliz cruel.'
  },
  {
    'id_hymn': 237,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Hasta el huerto Jesús llegó,\nlleno de dolor;\nlas hojas grises contempló,\nmi amante Redentor.\nAun el olivo se conmovió,\nsus hojas lloraban también por Él\nal ver su lucha y cómo oró,\nllevando dolor tan cruel.'
  },
  {
    'id_hymn': 237,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Fuera del huerto se dirigió,\nfirme tras orar,\nsu Padre amante le confortó\nal verle así clamar.\nMuy decidido se levantó\nsabiendo que le iban a entregar,\ny a sus verdugos no resistió\nal verse en la cruz clavar.'
  },
  {
    'id_hymn': 238,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Afuera de la gran ciudad\nsu vida ofreció;\ncrucificado sin piedad\nla hiel Él apuró.'
  },
  {
    'id_hymn': 238,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Oh cuánto, cuánto nos amó!\nEn medio del dolor,\nallí su Espíritu entregó.\n¡Oh, qué asombroso amor!'
  },
  {
    'id_hymn': 238,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En su persona soportó\ncastigo y transgresión.\nJusticia nos atribuyó\ny dionos redención.'
  },
  {
    'id_hymn': 238,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Él, su bondad nos transmitió,\nnos otorgó el perdón.\nPecado Él no cometió,\nsufrió tribulación.'
  },
  {
    'id_hymn': 238,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Por rescatarnos Él pagó\ntal precio con poder,\ny los portales nos abrió,\nallí me quiero ver.'
  },
  {
    'id_hymn': 239,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Dulces momentos consoladores\nlos que me paso junto a la cruz!\nAllí sufriendo crueles dolores\nveo al Cordero, Cristo Jesús.'
  },
  {
    'id_hymn': 239,
    'order': 2,
    'type': 'STROPHE',
    'content': 'De sus heridas, la viva fuente\nde pura sangre veo manar,\nque, salpicando mi impura frente,\nla infame culpa logra borrar.'
  },
  {
    'id_hymn': 239,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Veo su angustia ya terminada,\nhecha la ofrenda de la expiación;\nsu noble frente, mustia, inclinada,\ny consumada mi redención.'
  },
  {
    'id_hymn': 239,
    'order': 4,
    'type': 'STROPHE',
    'content': '¡Dulces momentos, ricos en dones,\nde paz y gracia, de vida y luz!\nSólo hay consuelo y bendiciones,\ncerca de Cristo, junto a la cruz.'
  },
  {
    'id_hymn': 240,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Enclavado en cruenta cruz,\n¡Cuánta fue tu humillación!\nPadeciste aflicción\npara ofrendarnos luz.\n!Gloria a ti, Señor Jesús,\nque nos diste redención!'
  },
  {
    'id_hymn': 240,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Contra el mal luchaste allí\nya transido de dolor,\nmas venciste al tentador.\nPadeciste en cruz por mí,\n¿Y qué puedo hacer por ti,\namantísimo Pastor?.'
  },
  {
    'id_hymn': 240,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Unigénito de Dios,\nDios también y Redentor;\nte vio el cielo con horror\nporque uno sois los dos.\nHasta el Padre fue tu voz\ncon clamor desgarrador.'
  },
  {
    'id_hymn': 240,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Si me oprime el malhechor\no si en tentación estoy,\neres tú mi protector,\nmi Jesús perdonador.\nTú me cuidas con amor,\nsin amparo nunca estoy.'
  },
  {
    'id_hymn': 241,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Cordero es de Dios! ¡Helo aquí es Él!\nAtento está a mi voz, mi Amigo fiel.\nÉl desde el cielo descendió;\npor los impíos se ofreció. Su Hijo es Él.'
  },
  {
    'id_hymn': 241,
    'order': 2,
    'type': 'STROPHE',
    'content': '¡Cordero es de Dios!\n¡Muerto por ti y por mí!\n¡Cuán dulce es su voz, muy dulce, sí!\nNuestras batallas Él libró\ny con su sangre nos lavó. Salvado fui.'
  },
  {
    'id_hymn': 241,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Cordero es de Dios! Vives en mí por fe;\noigo doquier tu voz, te seguiré.\nObjeto somos de tu amor;\nal angustiado das valor. Conmigo sé.'
  },
  {
    'id_hymn': 241,
    'order': 4,
    'type': 'STROPHE',
    'content': '¡Cordero es de Dios! Bendito Salvador,\ndel Cielo Portavoz y Redentor.\nEres tan fiel Consolador,\nnuestro Abogado y nuestro Juez.\nVen otra vez.'
  },
  {
    'id_hymn': 242,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Jamás podrá alguien separarnos\nde Cristo nuestro Redentor,\nni cosa alguna arrebatarnos\nel gozo de su tierno amor\nni luchas, pruebas o dolores,\nni amenazas o aflicción;\nni aun este mundo y sus honores,\nsu pompa, gloria y tentación.'
  },
  {
    'id_hymn': 242,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Con furia loca lo azotaron,\ny así humillaron al Señor,\ny sin piedad atravesaron\nlas manos de mi Salvador.\nA esos pies que caminaron\npara sanar y bendecir,\nhorribles clavos traspasaron,\nla suerte humana al compartir.'
  },
  {
    'id_hymn': 242,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Qué horror que por mi vil pecado\nel Salvador así sufrió,\nque por mis culpas fue azotado\ny burlas crueles recibió.\n¿Ingratos hemos de alejarnos\nde Aquel que tanto nos amó,\ny con anhelo de salvarnos\nsu propia vida entregó?'
  },
  {
    'id_hymn': 243,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Rostro divino, ensangrentado,\ncuerpo llagado por nuestro bien;\ncalma, benigno, justos enojos,\nlloren los ojos que así te ven.'
  },
  {
    'id_hymn': 243,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Manos preciosas, tan laceradas,\npor mí clavadas en una cruz;\nen este valle sean mi guía,\nmi alegría, fiel norte y luz.'
  },
  {
    'id_hymn': 243,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Tus pies heridos, Cristo paciente,\nindiferente los taladré;\nmas penitente, hoy que te adoro,\ntu gracia imploro: Señor, pequé.'
  },
  {
    'id_hymn': 243,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Crucificado en un madero,\nmanso Cordero, mueres por mí;\npor eso el alma triste y llorosa\nsuspira ansiosa, Señor, por ti.'
  },
  {
    'id_hymn': 244,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Ved a Cristo, Rey de gloria;\nes del mundo el vencedor.\nDe la guerra vuelve invicto;\ntodos démosle loor.'
  },
  {
    'id_hymn': 244,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Coronadle, santos todos!\n¡Coronadle Rey de reyes!\n¡Coronadle, santos todos!\n¡Coronad al Salvador!.'
  },
  {
    'id_hymn': 244,
    'order': 2,
    'type': 'STROPHE',
    'content': '¡Exaltadlo, exaltadlo!\nRicos triunfos da Jesús.\nEntronadle allá en los cielos,\nen la refulgente luz.'
  },
  {
    'id_hymn': 244,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Si los malos se burlaron\ncoronando al Salvador,\nhoy los ángeles y santos\nlo proclaman su Señor.'
  },
  {
    'id_hymn': 244,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Escuchad las alabanzas\nque se elevan hacia Él.\nVictorioso reina Cristo;\nadorad a Emanuel.'
  },
  {
    'id_hymn': 245,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Jesús resucitado\nestá en el mundo hoy.\nLos hombres no lo creen,\nmas yo seguro estoy.\nSu tierna mano siento\ny puedo oír su voz,\ny encuentro dondequiera a\nmi Salvador.'
  },
  {
    'id_hymn': 245,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Jesús, Jesús mi Cristo vive hoy.\nHablándome, mirándome,\nconmigo va el Señor.\nJesús, Jesús imparte salvación.\nContento voy, pues suyo soy:\nganó mi corazón.'
  },
  {
    'id_hymn': 245,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Por dondequiera miro,\nlo puedo contemplar.\nY si la angustia llena\nmi alma de pesar,\nyo sé que Cristo vive\ny al fin me llevará\na la mansión del cielo,\ndonde Él está.'
  },
  {
    'id_hymn': 245,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Alégrate, cristiano!\nTu voz levanta ya\ny canta aleluya\nal Padre celestial.\nNos trajo esperanza\nde eterna salvación,\npues en su Hijo amado\nhay redención.'
  },
  {
    'id_hymn': 246,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Yo sé que Jesucristo vive\ny que en la tierra reinará.\nYo sé que Él siempre me recibe;\ncon gracia y fuerza me guiará.'
  },
  {
    'id_hymn': 246,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Yo sé, yo sé que Cristo vive\ny en la tierra reinará;\nyo sé, yo sé que Él me recibe\ny por su amor me salvará.'
  },
  {
    'id_hymn': 246,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Yo sé que Él cumple su promesa,\npues su Palabra es la verdad.\nSu muerte me causó honda pena,\npues Él me amó por su bondad.'
  },
  {
    'id_hymn': 246,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Yo sé que un palacio en gloria\nÉl me dará do he de morar.\nGrato es saber la bella historia\nde mi Jesús que sabe amar.'
  },
  {
    'id_hymn': 247,
    'order': 1,
    'type': 'STROPHE',
    'content': ' El Señor resucitó. ¡Aleluya!\nMuerte y tumba ya venció. ¡Aleluya!\nPor su fuerza y su virtud\ncautivó la esclavitud\ny nos dio su plenitud. ¡Aleluya!.'
  },
  {
    'id_hymn': 247,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Aleluya, salvo soy!\nRedimido soy por Él.\nSu poder y gran virtud\ncautivó la esclavitud;\nredimido soy por Él, ¡Aleluya!'
  },
  {
    'id_hymn': 247,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Hasta el polvo se humilló. ¡Aleluya!\nVencedor se levantó. ¡Aleluya!\nCante, pues, la cristiandad\nsu gloriosa majestad\ny proclame su bondad. ¡Aleluya!.'
  },
  {
    'id_hymn': 247,
    'order': 3,
    'type': 'STROPHE',
    'content': 'El que tanto así sufrió, ¡Aleluya!,\ny al sepulcro descendió, ¡Aleluya!,\nhoy en gloria celestial\nentre el coro angelical\nreina vivo e inmortal. ¡Aleluya!.'
  },
  {
    'id_hymn': 247,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Cristo, nuestro Salvador, ¡Aleluya!,\nde la muerte vencedor, ¡Aleluya!,\nen ti haznos esperar\ny contigo al fin morar\ndo cantemos sin cesar: ¡Aleluya!.'
  },
  {
    'id_hymn': 248,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Quiero cantar del buen Jesucristo,\nsu compasión y tierno amor,\nquien en la cruz sufriera el castigo\nque merecía, yo, transgresor.'
  },
  {
    'id_hymn': 248,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Quiero cantar y darle alabanza\na quien su sangre diera por mí;\nsólo en la cruz está mi confianza\npues Él pagó el precio allí.'
  },
  {
    'id_hymn': 248,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Oíd la historia de su dulzura,\ncómo del fango nos rescató,\nen su bondad, amor y ternura\nhasta lo sumo se humilló.'
  },
  {
    'id_hymn': 248,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Del Redentor deseo contaros\nquien por salvarnos su vida dio;\nvino del cielo para invitarnos\na ser con Él, los hijos de Dios.'
  },
  {
    'id_hymn': 249,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Ni en la tierra ni en el cielo\nnombre hay como el de Jesús;\nsobre el universo reina,\nÉl es Dios de eterna luz.'
  },
  {
    'id_hymn': 249,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Es Jesús mi gran riqueza,\nhallo en Él mi solo bien;\nvalen más que todo el oro\nlos tesoros de su Edén.'
  },
  {
    'id_hymn': 249,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Es Jesús mi gran sustento,\npan divino y celestial;\nde mis dichas y mi gozo\nes el rico manantial.'
  },
  {
    'id_hymn': 249,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Infinita es su ternura,\n¿Quién la puede sondear?\nCon los ángeles hoy quiero\nsu grandeza pregonar.'
  },
  {
    'id_hymn': 250,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Yo quisiera hablarte\ndel amor de Cristo,\npues en Él hallé un amigo\nfuerte y fiel.\nPor su gracia transformó\nmi vida entera;\nlo que en esta vida soy\nlo debo a Él.'
  },
  {
    'id_hymn': 250,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Nadie pudo amarme como Cristo,\nes incomparable su amistad;\nsólo Él pudo redimirme del pecado\npor su amor y su bondad.'
  },
  {
    'id_hymn': 250,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Mi alma estaba llena\nde ayes y tristezas,\nllena estaba de miserias y dolor;\ncon ternura Cristo\nme tendió la mano,\ny me guió por el sendero\ndel amor.'
  },
  {
    'id_hymn': 250,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cada día viene a darme\nnuevo aliento,\na mi corazón infunde dulce paz;\nno comprenderé por qué\nvino a salvarme,\nhasta que en el cielo\npueda ver su faz.'
  },
  {
    'id_hymn': 251,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Que Cristo me haya salvado,\ntan malo como yo fui,\nme deja maravillado,\npues Él se entregó por mí.'
  },
  {
    'id_hymn': 251,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Cuán grande amor!\n¡Tan grande amor!,\nel de Cristo para mí.\n¡Cuán grande amor!\n¡Tan grande amor!,\npues por Él salvado fui.'
  },
  {
    'id_hymn': 251,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Oró por mí en el huerto:\n“No se haga mi voluntad”.\nY todo aquel sufrimiento\ncausado fue por mi mal.'
  },
  {
    'id_hymn': 251,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Por mí se hizo pecado;\nmis culpas su amor llevó.\nEn cruenta cruz fue clavado,\nmas mi alma Él rescató.'
  },
  {
    'id_hymn': 251,
    'order': 4,
    'type': 'STROPHE',
    'content': 'En el cielo, con los santos,\nsu gloria contemplaré;\ncon gratitud y con cantos\npor siempre le alabaré.'
  },
  {
    'id_hymn': 252,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Dime la antigua historia\ndel celestial favor;\nde Cristo y de su gloria,\nde Cristo y de su amor.\nDímela con llaneza,\ncon toda candidez,\nporque es mi mente flaca\ny anhela sencillez.'
  },
  {
    'id_hymn': 252,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Dime la antigua historia,\ncántame la victoria,\nháblame de la gloria\nde Cristo y de su amor.'
  },
  {
    'id_hymn': 252,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Dime tan dulce historia\ncon tono claro y fiel:\n“Murió Jesús, y salvo\ntú puedes ser por Él”.\nDime la historia cuando\nme oprima la aflicción\ny quieras tú a mi alma\nbrindar consolación.'
  },
  {
    'id_hymn': 252,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Dime la misma historia\ncuando a tu parecer\nme cieguen de este mundo\nel brillo y el placer.\nY cuando ya vislumbre\nel final de mi cruz,\nrepíteme la historia:\n“Quien sálvate es Jesús”.'
  },
  {
    'id_hymn': 253,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Hay un canto nuevo en mi ser,\nes la voz de mi Jesús,\nque me dice: “Ven a descansar;\ntu paz conquisté en la cruz”.'
  },
  {
    'id_hymn': 253,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Cristo, Cristo, Cristo,\nnombre sin igual,\nllena siempre mi alma\nde esa nota celestial.'
  },
  {
    'id_hymn': 253,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Tengo de su gracia celestial,\ngozo en su santo amor;\ny riquezas fluyen a raudal\ndesde el trono del Señor.'
  },
  {
    'id_hymn': 253,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Por la aguas hondas me llevó;\npruebas en mi senda hallé;\ndo áspero sendero Él me guió,\nmas sus huellas seguiré.'
  },
  {
    'id_hymn': 253,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Cristo en las nubes volverá,\nbajo el bello cielo azul;\na su lado Él me llevará\na vivir en gloria y luz.'
  },
  {
    'id_hymn': 254,
    'order': 1,
    'type': 'STROPHE',
    'content': 'A Dios sea gloria, es el Creador,\ny amó tanto al mundo que a su Hijo dio,\nquien puso su vida muriendo en la cruz\ny abrió los portales de gloria y luz.'
  },
  {
    'id_hymn': 254,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Exaltad a Jesús! Es el Rey y Señor.\n¡Alabad a Jesús! Es el buen Salvador.\nLoad sobre todos su nombre inmortal.\nÉl salva a sus hijos del yugo del mal.'
  },
  {
    'id_hymn': 254,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cantad a su gloria, pues Hijo es de Dios.\nSu amor inefable a todos nos dio.\nContad hoy la historia de la redención;\nque todos los pueblos entonen canción.'
  },
  {
    'id_hymn': 254,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Ya sea en el canto o en dulce oración,\nload al sublime y fiel Redentor.\nQue joven y anciano proclamen su amor;\nque sordos y mudos le rindan loor.'
  },
  {
    'id_hymn': 255,
    'order': 1,
    'type': 'STROPHE',
    'content': 'El buen Pastor vino aquí para buscarnos\ny llevarnos con ternura a su redil;\nsu gran amor desplegó para encontrarnos\ny su vida la entregó por ti y por mí.'
  },
  {
    'id_hymn': 255,
    'order': 2,
    'type': 'CHORUS',
    'content': '¿Qué prueba más, qué prueba más\npuedo pedir, Señor,\npara caer postrado a tus pies?\nCon gratitud, con gratitud\nquiero aceptar tu amor\ny el perdón que me ofreces, buen Jesús.'
  },
  {
    'id_hymn': 255,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Al tropezar nuestros pies en el pecado\nla manada silenciosa se alejó.\nJesús nos vio sollozar desesperados,\nconmovido, trono y gloria Él dejó.'
  },
  {
    'id_hymn': 255,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Viniste aquí para amar a los perdidos.\nEn la noche o con sol abrasador,\nno te importó rastrear por los caminos,\nde tus hijos el quejido abrumador.'
  },
  {
    'id_hymn': 255,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Agradecer a Jesús por redimirnos\ndeseamos al cantar esta canción;\ny suplicar continúe a conducirnos\na los pastos abundantes de Sión.'
  },
  {
    'id_hymn': 256,
    'order': 1,
    'type': 'STROPHE',
    'content': '¿Hay aquí quién nos ayude,\nquién comprenda nuestro ser,\ncuando el alma está transida de dolor?\n¿Hay quién sienta simpatía,\nnuestra condición al ver,\ny nos de lo que deseamos con amor?.'
  },
  {
    'id_hymn': 256,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Uno hay, Uno hay,\nen Cristo el bendito, Uno hay.\nCuando viene aflicción\na nuestro corazón,\nun amigo hay en Cristo, Uno hay.'
  },
  {
    'id_hymn': 256,
    'order': 2,
    'type': 'STROPHE',
    'content': '¿Hay aquí quién nos ayude\nnuestros males a llevar,\npor pesada que esa carga pueda ser?\n¿Hay quién quiera con ternura\nal caído levantar\ny en sus brazos amorosos recoger?.'
  },
  {
    'id_hymn': 256,
    'order': 3,
    'type': 'STROPHE',
    'content': '¿Hay aquí quién nos ayude,\nquién nos dé tranquilidad\ncuando estamos bajo el peso del dolor?\n¿Quién al pecador ofrezca\nel perdón de su maldad\ny por él se sacrifique por amor?.'
  },
  {
    'id_hymn': 256,
    'order': 4,
    'type': 'STROPHE',
    'content': ' ¿Hay aquí quién nos ayude\ny nos libre del temor,\ndel Jordán las olas frías al pasar?\n¿Quién alumbre nuestra senda,\nde su luz con el fulgor,\ny nos dé sus bendiciones sin cesar?.'
  },
  {
    'id_hymn': 257,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Amor que no me dejarás,\ndescansa mi alma siempre en ti;\nes tuya, y tú la guardarás,\ny en tu regazo acogedor\nla paz encontrará.'
  },
  {
    'id_hymn': 257,
    'order': 2,
    'type': 'STROPHE',
    'content': '¡Oh Luz que en mi sendero vas!,\nmi antorcha débil rindo a ti,\nsu luz apaga el corazón,\nseguro de encontrar en ti\nmás bello resplandor.'
  },
  {
    'id_hymn': 257,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Oh tú, el Gozo!, que por mí\nsufriste aquí mortal dolor;\ntras la tormenta el arco vi,\ny la mañana, yo lo sé,\nsin lágrimas será.'
  },
  {
    'id_hymn': 257,
    'order': 4,
    'type': 'STROPHE',
    'content': ' ¡Oh Cruz que miro sin cesar!,\nmi orgullo, gloria y vanidad,\nal polvo dejo por hallar\nla vida que en su sangre dio\nJesús, mi Salvador.'
  },
  {
    'id_hymn': 258,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Tiene amor sublime mi Jesús por ti.\nEs constante y firme en llamarte, sí.\nÉl es muy amante y esperando está;\nsé perseverante, Él te premiará.'
  },
  {
    'id_hymn': 258,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Siempre en su mente te tendrá a ti,\ndulce y paciente sin cansarse, sí.\nNo tendrás temores, ni más ansiedad.\nPara tus dolores te da sanidad.'
  },
  {
    'id_hymn': 258,
    'order': 3,
    'type': 'STROPHE',
    'content': 'En su campo tiene mucho que hacer;\npronto Él ya viene, dale pues tu ser.\nPonte a su servicio, no suspires más,\no sino en el juicio, ¿Qué responderás?'
  },
  {
    'id_hymn': 258,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Él, hogar te ofrece; para ti hay lugar.\nTodo aquí fenece no hay por qué esperar.\nComo caminante tienes que llevar\nalto el estandarte de tan bello hogar.'
  },
  {
    'id_hymn': 259,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Amigo fiel es Cristo, alivio Él me da;\nme ama con un tierno amor\nque siempre durará.\nSin Él vivir no puedo ya;\ncercano siempre está.\nAsí moramos juntos, Jesús y yo.'
  },
  {
    'id_hymn': 259,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Mis faltas no ignora; mis males puede ver;\nanhela que me apoye en Él,\nme puede sostener.\nÉl guía mi alma a la luz,\nme indica mi deber.\nAsí andamos juntos, Jesús y yo.'
  },
  {
    'id_hymn': 259,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Confíole mis penas, le digo mi gozar.\nCon Él no siento ya temor,\ny alegre puedo andar.\nMe dice lo que debo hacer,\nme impulsa a progresar.\nAsí hablamos juntos, Jesús y yo.'
  },
  {
    'id_hymn': 259,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Él sabe cuanto anhelo salvar a un pecador;\nme ruega ir a pregonar\ncuán grande es su amor;\nque anuncie eterna redención\ncon fe y con fervor.\nAsí obramos juntos, Jesús y yo.'
  },
  {
    'id_hymn': 260,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cual ave escápate al monte,\ntriste de tanto pecar;\nbusca a Jesús viva fuente,\ntus manchas quiere lavar.\nVuela, evita al maligno,\nven a Jesús que es benigno;\nya que te sientes indigno,\n¡oh!, ven que perdón Él te da.\nSí, ven que perdón Él te da.'
  },
  {
    'id_hymn': 260,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Te ha de ayudar cada día,\nya no tendrás que llorar;\nsiempre te hará compañía,\nen Él tú puedes confiar.\nCorre, se acaba ya el tiempo,\nno te detenga el lamento;\nÉl quitará tu tormento,\ntus lágrimas enjugará.\nTus lágrimas Él limpiará.'
  },
  {
    'id_hymn': 261,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Ven, Espíritu eterno,\nmuéstranos la excelsitud\nde ese mérito vicario\nque nos trajo la salud.\nGrande fue el sacrificio\npara nuestra redención.\n¡Oh, renueva la memoria;\ndanos fe en el corazón!'
  },
  {
    'id_hymn': 261,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Ven, testigo de su muerte;\nven, divino Inspirador;\nque sintamos tu potencia\ny apreciemos tu valor.\nVen, aplícanos la sangre\ndel divino Redentor,\ny que Cristo en nosotros\nsea siempre morador.'
  },
  {
    'id_hymn': 261,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Que imitemos sus gemidos,\nsuspirando en oración,\ny apreciemos las heridas\nque recuerdan su aflicción.\nAl que hemos traspasado,\nque miremos con dolor,\ny la sangre asperjada\nrecibamos con amor.'
  },
  {
    'id_hymn': 262,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Padre, a tus pies me postro;\nrompe mis prisiones duras;\noh, responde mientras llamo;\npon tu Espíritu en mí.'
  },
  {
    'id_hymn': 262,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Pon tu Espíritu en mi alma;\nhazme lo que ser debiera;\nhazme puro en todo,\nlibre del pecado;\npon tu Espíritu en mí.'
  },
  {
    'id_hymn': 262,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Mientras Cristo intercede,\nmientras oro yo humilde,\nlo que necesito dame;\npon tu Espíritu en mí'
  },
  {
    'id_hymn': 262,
    'order': 3,
    'type': 'STROPHE',
    'content': 'No deseo ofenderte,\nviviré para agradarte\ny en el corazón guardarte;\npon tu Espíritu en mí'
  },
  {
    'id_hymn': 263,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Ven a mi alma, Espíritu de Dios,\nlo terrenal apártalo de mí;\nten compasión, atiende a mi voz\ny dame amor como lo hay en ti.'
  },
  {
    'id_hymn': 263,
    'order': 2,
    'type': 'STROPHE',
    'content': 'No ambiciono sueños o visión,\nni que el velo se haya de apartar;\nsoy tan indigno, anhelo tu perdón\ny que confortes mi peregrinar.'
  },
  {
    'id_hymn': 263,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Nos ordenaste a rendirte amor\ncon todo el ser, el alma y corazón.\nVeo tu cruz, tu afrenta y tu dolor;\ncuánto pagaste por mi salvación.'
  },
  {
    'id_hymn': 263,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Hazme entender cuán cerca estás de mí,\nque con paciencia cargue aquí mi cruz;\nque no haya duda en mi entrega a ti;\ndisfrute siempre tu gloriosa luz.'
  },
  {
    'id_hymn': 263,
    'order': 5,
    'type': 'STROPHE',
    'content': 'Padre, suplico hoy tu bendición,\nmi ser entero llénelo tu amor;\npueda servirte en plena devoción\ncual sacrificio en tu altar, Señor.'
  },
  {
    'id_hymn': 264,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Abre mis ojos a la luz;\ntu rostro quiero ver, Jesús,\nPon en mi corazón tu bondad,\ny dame paz y santidad.\nHumildemente acudo a ti,\nporque tu tierna voz oí.\nMi guía sé, Espíritu consolador.'
  },
  {
    'id_hymn': 264,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Abre mi oído a tu verdad;\nyo quiero oír con claridad\nbellas palabras de dulce amor,\n¡oh, mi bendito Salvador!\nConsagro a ti mi frágil ser;\ntu voluntad yo quiero hacer.\nLlena mi ser, Espíritu consolador.'
  },
  {
    'id_hymn': 264,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Abre mis labios para hablar\ny a todo el mundo proclamar\nque tú viniste a rescatar\nal más indigno pecador.\nLa mies es mucha, ¡oh, Señor!,\nobreros faltan de valor.\nHeme aquí, Espíritu consolador.'
  },
  {
    'id_hymn': 265,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Danos el fuego que ardió\nen hombres tales cual Daniel,\nque en rudas pruebas lo guardó\ny lo mantuvo siempre fiel.'
  },
  {
    'id_hymn': 265,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Danos la llama que animó\nla fe potente de Abrahán,\nque a Pablo un gran valor le dio,\ny amor profundo al joven Juan.'
  },
  {
    'id_hymn': 265,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Danos del cielo la virtud,\nla que a Elías dio poder.\nDanos tu divinal salud,\ntu fe y tu gracia a conocer.'
  },
  {
    'id_hymn': 265,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Pronto en las nubes volverás;\nnecesitamos más fervor;\ny te imploramos además:\nDanos tu Espíritu, Señor.'
  },
  {
    'id_hymn': 266,
    'order': 1,
    'type': 'STROPHE',
    'content': 'La nueva proclamad\ndoquier que el hombre esté,\ndoquier haya aflicción, miserias y dolor;\ncristianos, anunciad\nque el Padre nos envió el fiel Consolador.'
  },
  {
    'id_hymn': 266,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Al mundo vino ya el fiel Consolador\nque Dios nos prometió,\nla prenda de su amor;\ndoquier que el hombre esté,\ndecid que descendió el fiel Consolador.'
  },
  {
    'id_hymn': 266,
    'order': 2,
    'type': 'STROPHE',
    'content': 'La noche ya pasó; brillando está la luz\nque habrá de disipar\nlas sombras del terror;\nes para el pecador\nla aurora celestial, el fiel Consolador.'
  },
  {
    'id_hymn': 266,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Es Él quien da salud y plena libertad\na los que encadenó el fiero tentador;\nlos rotos hierros hoy\ndirán que vino ya el fiel Consolador.'
  },
  {
    'id_hymn': 266,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Mi lengua mueve tú, que sepa hablar aquí\ndel don que recibí,\noh grande Dios de amor,\nal renovar en mí la imagen celestial,\nel fiel Consolador.'
  },
  {
    'id_hymn': 267,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Imploramos tu presencia,\nSanto Espíritu de Dios;\nnos avive tu influencia,\nfe y amor auméntanos.'
  },
  {
    'id_hymn': 267,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Da a las mentes luz divina\ny tu gracia al corazón;\nnuestro pecho a Dios inclina\nen sincera devoción.'
  },
  {
    'id_hymn': 267,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Que del Dios bendito tenga\nnuestro culto aceptación,\ny que sobre todos venga\nen raudales bendición.'
  },
  {
    'id_hymn': 268,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Santo Espíritu de Cristo,\nmora en este corazón,\nlléname de tu presencia,\ncólmame de bendición.'
  },
  {
    'id_hymn': 268,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Cólmame! ¡Cólmame!\n¡Ven ahora y cólmame!\n¡Cólmame de tu presencia!\n¡Ven, oh ven y cólmame!'
  },
  {
    'id_hymn': 268,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Santo Espíritu, lo puedes,\naunque cómo, no lo sé;\nmas si tú mis ruegos oyes,\nsé que puro yo seré.'
  },
  {
    'id_hymn': 268,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Débil soy, flaqueza todo,\nmas me postro a tus pies,\npara que tu amor eterno, fuerte,\npuro y fiel me des.'
  },
  {
    'id_hymn': 268,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Lávame, bendice y salva\ncuerpo, alma, espíritu;\nya me salvas, me consuelas,\nde bondad me colmas tú.'
  },
  {
    'id_hymn': 269,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Oh, cantádmelas otra vez,\nbellas palabras de vida;\nhallo en ellas mi gozo y luz,\nbellas palabras de vida.\nSí, de luz y vida; son sostén y guía.'
  },
  {
    'id_hymn': 269,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Qué bellas son! ¡Qué bellas son!\nBellas palabras de vida.\n¡Qué bellas son! ¡Qué bellas son!\nBellas palabras de vida.'
  },
  {
    'id_hymn': 269,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Jesucristo a todos da\nbellas palabras de vida;\nhoy escúchalas, pecador,\nbellas palabras de vida.\nBondadoso te salva, y al cielo te llama.'
  },
  {
    'id_hymn': 269,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Grato el cántico sonará:\nbellas palabras de vida;\ntus pecados perdonará,\nbellas palabras de vida.\nSí, de luz y vida; son sostén y guía.'
  },
  {
    'id_hymn': 270,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Cuán firme cimiento ha puesto a la fe\nel Padre en su eterna Palabra de amor!\n¿Qué más a su pueblo pudiera añadir\nde lo que en su Libro ha dicho el Señor,\nde lo que en su Libro ha dicho el Señor?'
  },
  {
    'id_hymn': 270,
    'order': 2,
    'type': 'STROPHE',
    'content': '“No tengas temor, pues contigo yo estoy.\nSí, yo soy tu Dios, y te socorreré.\nApoyo, sostén, fortaleza y poder.\nCon mi diestra justa yo te salvaré,\ncon mi diestra justa yo te salvaré’’.'
  },
  {
    'id_hymn': 270,
    'order': 3,
    'type': 'STROPHE',
    'content': '“Las aguas profundas no te anegarán,\nni aun cuando cruzares el mar de aflicción;\npues siempre contigo en tu angustia andaré,\ntrocando tus penas en gran bendición,\ntrocando tus penas en gran bendición’’.'
  },
  {
    'id_hymn': 270,
    'order': 4,
    'type': 'STROPHE',
    'content': ' “Si te hallas probado en ardiente crisol\nmi gracia potente tu fe sostendrá;\ntan sólo la escoria deseo quemar,\ny el oro de tu alma más puro saldrá,\ny el oro de tu alma más puro saldrá”.'
  },
  {
    'id_hymn': 270,
    'order': 5,
    'type': 'STROPHE',
    'content': '“Al alma que busca reposo en Jesús,\njamás en sus luchas la abandonaré;\naun cuando Satán la quisiere prender,\nyo nunca, no, nunca la traicionaré,\nyo nunca, no, nunca la traicionaré”.'
  },
  {
    'id_hymn': 271,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Cuán firme cimiento ha puesto a la fe\nel Padre en su eterna Palabra de amor!\n¿Qué más a su pueblo pudiera añadir\nde lo que en su Libro ha dicho el Señor,\nde lo que en su Libro ha dicho el Señor?'
  },
  {
    'id_hymn': 271,
    'order': 2,
    'type': 'STROPHE',
    'content': '“No tengas temor, pues contigo yo estoy.\nSí, yo soy tu Dios, y te socorreré.\nApoyo, sostén, fortaleza y poder.\nCon mi diestra justa yo te salvaré,\ncon mi diestra justa yo te salvaré’’.'
  },
  {
    'id_hymn': 271,
    'order': 3,
    'type': 'STROPHE',
    'content': '“Las aguas profundas no te anegarán,\nni aun cuando cruzares el mar de aflicción;\npues siempre contigo en tu angustia andaré,\ntrocando tus penas en gran bendición,\ntrocando tus penas en gran bendición’’.'
  },
  {
    'id_hymn': 271,
    'order': 4,
    'type': 'STROPHE',
    'content': ' “Si te hallas probado en ardiente crisol\nmi gracia potente tu fe sostendrá;\ntan sólo la escoria deseo quemar,\ny el oro de tu alma más puro saldrá,\ny el oro de tu alma más puro saldrá”.'
  },
  {
    'id_hymn': 271,
    'order': 5,
    'type': 'STROPHE',
    'content': '“Al alma que busca reposo en Jesús,\njamás en sus luchas la abandonaré;\naun cuando Satán la quisiere prender,\nyo nunca, no, nunca la traicionaré,\nyo nunca, no, nunca la traicionaré”.'
  },
  {
    'id_hymn': 272,
    'order': 1,
    'type': 'STROPHE',
    'content': 'No eres pobre ni estás solo en este mundo;\njoyas tienes y son treinta y un mil;\ny un amigo que te ama y te comprende,\nque te habla, que te escribe y ve por ti.'
  },
  {
    'id_hymn': 272,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Es Jesús y su Palabra que te orienta,\nte enriquece y te ayuda a vivir.\nEs el norte, es la guía, es la ayuda\nquien te invita y te dice: “Ven a mí”'
  },
  {
    'id_hymn': 272,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Hay un fuego y un martillo que quebranta;\nuna luz en densa oscuridad;\nuna espada poderosa que defiende;\nun espejo para ver tu gran maldad.'
  },
  {
    'id_hymn': 272,
    'order': 3,
    'type': 'STROPHE',
    'content': ' Hay un faro en noche oscura de la vida;\nclaras huellas por donde caminar.\nEscudriña ya la carta que te envía,\nquien tu vida desde hoy desea cambiar.'
  },
  {
    'id_hymn': 273,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Santa Biblia!, para mí\neres un tesoro aquí.\nTú contienes con verdad\nla divina voluntad;\ntú me dices lo que soy,\nde quién vine y a quién voy.'
  },
  {
    'id_hymn': 273,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Tú reprendes mi dudar;\ntú me exhortas sin cesar.\nEres faro que a mi pie\nva guiando, por la fe,\na las fuentes del amor\ndel benigno Salvador.'
  },
  {
    'id_hymn': 273,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Eres la infalible voz\ndel Espíritu de Dios,\nque vigor al alma da\ncuando en aflicción está.\nTú me enseñas a triunfar\nde la muerte y el pecar.'
  },
  {
    'id_hymn': 273,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Por tu santa letra sé\nque con Cristo reinaré.\nYo, que tan indigno soy,\npor tu luz al cielo voy.\n¡Santa Biblia!, para mí\neres un tesoro aquí.'
  },
  {
    'id_hymn': 274,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Oh Pastor divino!, escucha a\nlos que en este buen lugar,\ncomo ovejas, congregados,\nte venimos a buscar.\nVen, oh Cristo; ven, oh Cristo,\ntu rebaño a apacentar.'
  },
  {
    'id_hymn': 274,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Al perdido en el pecado,\nsu peligro harás sentir;\nllama al pobre seducido,\ndéjale tu voz oír.\nAl enfermo, al enfermo,\npronto dígnate acudir.'
  },
  {
    'id_hymn': 274,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Guía al triste y fatigado\nal aprisco del Señor;\ncría al tierno corderito\na tu lado, buen Pastor,\ncon los pastos, con los pastos\nde celeste y dulce amor.'
  },
  {
    'id_hymn': 274,
    'order': 4,
    'type': 'STROPHE',
    'content': '¡Oh Jesús!, escucha el ruego\ny esta humilde petición\nVen a henchir a tu rebaño\nde sincera devoción.\nCantaremos, cantaremos\ntu benigna protección.'
  },
  {
    'id_hymn': 275,
    'order': 1,
    'type': 'STROPHE',
    'content': ' Oh, Padre de la humanidad,\nescucha nuestra voz;\nperdona todo nuestro errar,\nrenueva el ser, y hazle adorar\ncon reverencia, oh Dios.'
  },
  {
    'id_hymn': 275,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Con fe sencilla tu llamar\nqueremos percibir,\ny como aquellos junto al mar,\ntu voz de gracia al escuchar,\nen pos de ti seguir.'
  },
  {
    'id_hymn': 275,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Oh, danos tu perfecta paz,\nbendito Salvador;\noh, llénanos de tu solaz\ny de la calma que tú das,\nen prueba de tu amor.'
  },
  {
    'id_hymn': 275,
    'order': 4,
    'type': 'STROPHE',
    'content': ' Tu gracia en nuestras almas pon;\ny quita el mal pensar;\ndel alma quita la opresión,\nque nuestras vidas confesión\nasí hagan de tu paz.'
  },
  {
    'id_hymn': 276,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cristo, has prometido que tú has de estar\ndonde dos o tres se unan al orar.\nNos arrodillamos para suplicar\nque nos des tu gracia, paz y bienestar.'
  },
  {
    'id_hymn': 276,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Ven, Jesús amado, danos tu favor;\noye nuestros cantos dándote loor.'
  },
  {
    'id_hymn': 276,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Hoy tu compañía hemos menester,\noye nuestros ruegos, danos entender\nese amor eterno que no tiene igual;\nqueda con nosotros hasta el final.'
  },
  {
    'id_hymn': 276,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Danos armonía siempre al cantar,\nsea grata ofrenda sobre tu altar;\ny que las plegarias suban sin cesar,\ncomo expresiones de genuino amar.'
  },
  {
    'id_hymn': 277,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Del culto el tiempo llega,\ncomienza la oración,\nel alma a Dios se entrega,\n¡silencio y atención!\nSi al santo Dios la mente\nqueremos elevar,\nsilencio reverente\nhabremos de guardar.'
  },
  {
    'id_hymn': 277,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Mil coros celestiales\na Dios cantando están;\ncon ellos los mortales\nsus voces unirán.\nAlcemos pues el alma\nen santa devoción,\ngozando en dulce calma\nde Dios la comunión.'
  },
  {
    'id_hymn': 277,
    'order': 3,
    'type': 'STROPHE',
    'content': 'La Biblia bendecida,\nde Dios revelación,\na meditar convida\nen nuestra condición.\n¡Silencio!, que ha llegado\ndel culto la ocasión;\nDios se halla a nuestro lado,\n¡silencio y devoción!'
  },
  {
    'id_hymn': 278,
    'order': 1,
    'type': 4,
    'content': 'A Dios, el Padre celestial;\nal Hijo, nuestro Redentor;\nal eterno Consolador,\nunidos, todos alabad. Amén.'
  },
  {
    'id_hymn': 279,
    'order': 1,
    'type': 4,
    'content': 'Despídenos con tu bendición\nal retirarnos de este lugar;\nque la merced de la reunión\nen nuestras almas pueda quedar.\nAmén.'
  },
  {
    'id_hymn': 280,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Después, Señor, de haber tenido aquí\nde tu Palabra la bendita luz,\na nuestro hogar condúcenos y allí\nde todos cuida, buen Pastor, Jesús.'
  },
  {
    'id_hymn': 280,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En nuestras almas grabe con poder\ntu fiel Palabra cada exhortación;\ny que tu ley, pudiendo comprender,\ncontigo estemos en mayor unión.'
  },
  {
    'id_hymn': 280,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Al terminar, Señor, mi vida aquí,\nmis ojos pueda sin temor cerrar,\ny en mi glorioso despertar, que en ti\nde paz eterna pueda disfrutar.'
  },
  {
    'id_hymn': 281,
    'order': 1,
    'type': 'STROPHE',
    'content': 'La Escuela Sabática es mi gozo,\nme da alegría, sana alegría.\nPuesto que el estudio más valioso\nes la Palabra del Señor.\nOh, cuán preciosos los estudios\nque cada sábado se hacen aquí;\nlos bellos cantos, cual preludios\nde la Escuela Celestial.'
  },
  {
    'id_hymn': 281,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Aun desde el Edén fue instituida\ndonde el Señor ya era el Maestro,\ny en la nueva tierra prometida,\nJesús mismo me enseñará.\nOh, cuán preciosas las lecciones\nque cada sábado se harán allí;\nlos bellos himnos y canciones\nunidos al coro angelical.'
  },
  {
    'id_hymn': 282,
    'order': 1,
    'type': 'STROPHE',
    'content': 'En tu nombre comenzamos\nesta escuela, ¡oh, Señor!\nCon fervor te suplicamos\nseas nuestro Director.'
  },
  {
    'id_hymn': 282,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Cada sábado venimos\na tu escuela, ¡oh, Jesús!\nVen, Señor, a instruirnos\nen la ciencia de la cruz.'
  },
  {
    'id_hymn': 282,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Esta escuela nos enseña\ntu Palabra a obedecer,\ny tu ley en nuestra vida\nante el mundo a enaltecer.'
  },
  {
    'id_hymn': 282,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Ven, Señor, a enseñarnos\ntus preceptos a cumplir.\nYa reunidos, esperamos\ntu presencia aquí sentir.'
  },
  {
    'id_hymn': 283,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Fija tu vista desde el cielo\nen nuestra escuela, oh Señor.\nNuestra alabanza con gran celo\nhoy te rendimos con amor;\noye los cantos juveniles,\ntierno, amante y buen Pastor.'
  },
  {
    'id_hymn': 283,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Haz que servirte deseemos,\nfielmente y de corazón;\ny a la eternidad iremos\npara morar en tu mansión.\nBellas hosannas cantaremos\ntodos unidos ya en Sión.'
  },
  {
    'id_hymn': 283,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Déjanos ser tus corderitos,\ndóciles, tiernos, tú podrás.\nSomos tus débiles hijitos,\ntu bendición nos brindarás.\nTu santo nombre sea bendito,\nhoy y por la eternidad.'
  },
  {
    'id_hymn': 283,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Tú, el Pastor, Divino Guía,\nven a llevarnos a tu hogar;\nmira a tu grey que en ti confía,\nquiere tu gloria proclamar.\nHoy danos más sabiduría\npara este mundo iluminar.'
  },
  {
    'id_hymn': 284,
    'order': 1,
    'type': 'STROPHE',
    'content': ' ¡Oh, cuánto me eres cara,\nescuela del Señor!\nMi alma está ligada\na ti por el amor.\nEn esta escuela todos\nloamos a Jesús,\nquien nuestra deuda enorme\npagó allá en la cruz.'
  },
  {
    'id_hymn': 284,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Se estudia el Evangelio,\nde Dios la salvación;\nse adora al que nos brinda\ncompleta redención.\nPor ti, querida escuela,\ndoy gracias a mi Dios,\npues tú por vez primera\nme hiciste oír su voz.'
  },
  {
    'id_hymn': 285,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Suenen las palabras del buen Salvador:\n“¡Oh!, traedme el diezmo al granero”.\nAclamad a Cristo, Dueño y Creador,\ndadle lo mejor primero.'
  },
  {
    'id_hymn': 285,
    'order': 2,
    'type': 'CHORUS',
    'content': '“Oh, traedme el diezmo al granero,\nprobadme hoy”, dice Jehová;\nquien sobre tierras y dinero,\nbendiciones abundantes pondrá.'
  },
  {
    'id_hymn': 285,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cristo nuevamente vuelve a decir:\n“Con el diezmo y liberal ofrenda,\nalmas el mensaje hoy podrán oír\ny hallarán la santa senda”.'
  },
  {
    'id_hymn': 285,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Dad a Dios mejor y más completo don,\nvuestra vida entera y vuestra hacienda.\nEntregad a Cristo hoy el corazón,\nque es la más preciosa ofrenda.'
  },
  {
    'id_hymn': 286,
    'order': 1,
    'type': 'STROPHE',
    'content': ' Oigan las monedas, óiganlas caer,\ntodas para Cristo, Él lo va a saber.'
  },
  {
    'id_hymn': 286,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Caen, caen, caen, caen,\nóiganlas caer,\ntodas para Cristo, Él lo va a saber.'
  },
  {
    'id_hymn': 286,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Caigan las monedas, caigan con amor,\nésta es nuestra ofrenda para el Salvador.'
  },
  {
    'id_hymn': 286,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Nuestros corazones brillan cual la luz\nal dar nuestros dones para el buen Jesús.'
  },
  {
    'id_hymn': 286,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Él nuestras ofrendas hoy recibirá,\ny con su sonrisa nos bendecirá.'
  },
  {
    'id_hymn': 287,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Aquí reunidos en tu santo nombre\nrogamos nos des tu divino perdón.\nPerdido, afligido se siente el hombre,\nmas gracias, oh Jesús, por la salvación.'
  },
  {
    'id_hymn': 287,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Es Cristo Jesús nuestro eterno amparo;\nordena y mantiene su reino de amor;\nnos muestra el camino con célico faro,\nnos guarda y protege. ¡Gloria al Señor!.'
  },
  {
    'id_hymn': 287,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Con voces alegres te glorificamos\n¡Oh, Cristo, sé tú nuestro gran Protector!\nContigo en las luchas victorias ganamos.\n¡Tu nombre sea honrado, oh Salvador!'
  },
  {
    'id_hymn': 288,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Todos juntos tributemos\ngracias al buen Salvador;\ngrande ha sido su paciencia\ny precioso su amor.'
  },
  {
    'id_hymn': 288,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Aleluya! ¡Aleluya!\nProclamemos su loor.'
  },
  {
    'id_hymn': 288,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Nuestro Rey divino, eterno,\nnos rodea con favor;\nfortalece a los cansados\ny perdona al pecador.'
  },
  {
    'id_hymn': 288,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Mantengamos la confianza\nen el santo Redentor;\ny en la gloria, redimidos,\ncantaremos su amor.'
  },
  {
    'id_hymn': 289,
    'order': 1,
    'type': 'STROPHE',
    'content': 'A nuestro Padre Dios\nalcemos nuestra voz. ¡Gloria a Él!.\nTal fue su amor que dio al Hijo que murió,\nen quien confío yo. ¡Gloria a Él!.'
  },
  {
    'id_hymn': 289,
    'order': 2,
    'type': 'STROPHE',
    'content': 'A nuestro Salvador\ndemos con fe loor. ¡Gloria a Él!.\nSu sangre derramó; con ella me lavó;\ny el cielo me abrió. ¡Gloria a Él!.'
  },
  {
    'id_hymn': 289,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Espíritu de Dios,\nelevo a ti mi voz. ¡Gloria a ti!.\nCon celestial fulgor me muestras el amor\nde Cristo, mi Señor. ¡Gloria a ti!.'
  },
  {
    'id_hymn': 290,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cristo, si gozo al pecho da\nel sólo en ti pensar,\n¿Cuánto más ver tu faz dará,\ny en tu presencia estar?'
  },
  {
    'id_hymn': 290,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Mente no habrá que saque a luz,\nni ensalzará cantor\nnombre mayor que el de Jesús,\ndel hombre el Salvador.'
  },
  {
    'id_hymn': 290,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Luz del contrito corazón,\ngozo del manso aquí,\ntú al caído das perdón\ny nueva vida en ti.'
  },
  {
    'id_hymn': 291,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Oh Padre, eterno Dios,\nalzamos nuestra voz en gratitud\npor lo que tú nos das con sin igual amor,\ny hallamos dulce paz en ti, Señor.'
  },
  {
    'id_hymn': 291,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Bendito Salvador,\nte damos con amor el corazón;\nacepta, oh Señor, lo que en tu altar\nvenimos a ofrendar cual vivo don.'
  },
  {
    'id_hymn': 291,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Espíritu de Dios,\nescucha nuestra voz, y en tu bondad\nderrama en nuestro ser divina claridad,\ncopiosa bendición y santidad.'
  },
  {
    'id_hymn': 292,
    'order': 1,
    'type': 'STROPHE',
    'content': 'De Dios la gracia alabaré,\ninmensa como el mar;\nel dulce amor ensalzaré\nque me logró salvar.\nVivía yo en oscuridad,\nhasta que Cristo me salvó:\nLoor le rindo por la eternidad\nporque Él me levantó.'
  },
  {
    'id_hymn': 292,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Su amor me levantó,\nsu amor me levantó;\nsu amor me hizo fiel,\nsu amor salvó mi ser;\nsu amor, su amor me levantó.'
  },
  {
    'id_hymn': 292,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En el madero mi Jesús\nsu sangre derramó;\nmurió doliente en una cruz\npara probar su amor.\nMi ser sus alabanzas da\npues su promesa fiel cumplió:\nLoor le rindo por la eternidad\nporque Él me levantó.'
  },
  {
    'id_hymn': 292,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Bendita gracia sin igual,\nla de Jesús el Rey,\nque un alma pudo rescatar,\ncomo la mía fue.\nNingún mortal podrá expresar\nel gozo de la salvación,\nmas en la gloria fiel entonará\nJesús me levantó.'
  },
  {
    'id_hymn': 293,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Ni en la tierra ni en las mares\nhay un nombre cual Jesús;\nnunca otro en estos lares\nnos brindó perdón y luz.'
  },
  {
    'id_hymn': 293,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Nombre dulce y santo, tan amado y grato.\n¡Santo, santo, es el nombre de Emanuel!\n¡Admirable, Eterno, Consejero, Bueno,\nPan de vida, Don de Dios fiel!'
  },
  {
    'id_hymn': 293,
    'order': 2,
    'type': 'STROPHE',
    'content': 'A mi corazón imparte\nla más tierna bendición\ny esta ha de ser mi parte:\nDar a Él adoración.'
  },
  {
    'id_hymn': 293,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Rebosando está mi alma\ndel amor de mi Señor,\nÉl imparte dulce calma,\n¡gloria a Él, también honor!'
  },
  {
    'id_hymn': 294,
    'order': 1,
    'type': 'CHORUS',
    'content': '¡Santo! ¡Santo! ¡Santo!\nTu gloria llena cielo y tierra.\n¡Hosanna, hosanna,\ngloria a Dios!'
  },
  {
    'id_hymn': 294,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Te bendecimos, te adoramos,\nglorificamos tu nombre, oh Dios.\n¡Oh Rey del cielo, oye clemente\nnuestra ferviente y humilde voz!'
  },
  {
    'id_hymn': 294,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Perdona al hombre la falta impía;\nmira a tu Hijo, mi Redentor.\nFerviente entonces el alma mía\npueda alabarte con todo amor.'
  },
  {
    'id_hymn': 294,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Dignos seamos de bendecirte,\nlimpias las almas de todo mal.\nCielos y tierras cantan tu nombre,\n¡oh Dios, oh Padre, Rey celestial!'
  },
  {
    'id_hymn': 295,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Engrandeced conmigo a Dios,\nsus loores repetid;\nsu dulce nombre ensalzad\ny siempre bendecid.\nNos vio en gran suplicio,\nculpables yendo al juicio.\n¡Nos dio en sacrificio\nal Redentor!.'
  },
  {
    'id_hymn': 295,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Te alaben las naciones,\nte alaben con canciones,\npor grandes bendiciones,\npor los siglos de la eternidad,\nla eternidad sin fin.\nTe alaben tus criaturas\nen tierra y las honduras\ny en todas las alturas,\npor los siglos de la eternidad.'
  },
  {
    'id_hymn': 295,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Engrandeced al Salvador,\nAutor de la salud,\ny dadle gracias por su amor,\nsu paz y su virtud.\nCantad, cantad hosanna,\nsu ayuda está cercana.\n¡Al ser doliente sana\nel Redentor!.'
  },
  {
    'id_hymn': 295,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Engrandeced con libertad\nal gran Consolador,\nque guía al hombre a la verdad,\nle da perfecto amor.\nAlumbra al alma obscura,\nde paz le asegura.\n¡Revela la dulzura\ndel Redentor!.'
  },
  {
    'id_hymn': 296,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Alabad y exaltad\nal Señor por su bondad.'
  },
  {
    'id_hymn': 296,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Sus misericordias son\ngozo y paz del corazón.'
  },
  {
    'id_hymn': 296,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Todos débenle alabar\ncada día al despertar.'
  },
  {
    'id_hymn': 296,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Con poder llenó de luz\ntodo el mundo mi Jesús.'
  },
  {
    'id_hymn': 296,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Él nos suple con amor\ny nos libra de temor.'
  },
  {
    'id_hymn': 296,
    'order': 5,
    'type': 'STROPHE',
    'content': 'Alegría y devoción\nrinda la congregación.'
  },
  {
    'id_hymn': 297,
    'order': 1,
    'type': 'STROPHE',
    'content': 'La gloria de Cristo el Señor cantaré,\npues llena mi vida de gozo y de paz,\ncallar los favores que de Él alcancé,\nmi labio no puede jamás.'
  },
  {
    'id_hymn': 297,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Es todo bondad para mí,\ncon Él nada puedo desear,\npues todos mis altos deseos aquí,\ntan sólo Él los puede llenar.'
  },
  {
    'id_hymn': 297,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En horas de angustia conmigo Él está\ny puedo escuchar su dulcísima voz\nque me habla, y su paz inefable me da:\nla paz infinita de Dios.'
  },
  {
    'id_hymn': 297,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Si a rudos conflictos me mira que voy,\nme deja hasta el fin a mí solo luchar,\nmas pronto, si ve que cediendo ya estoy,\nsocorro me viene a prestar.'
  },
  {
    'id_hymn': 297,
    'order': 4,
    'type': 'STROPHE',
    'content': 'También cuando gozo lo miro llegar\ny entonces mi dicha la aumenta el Señor;\nya llena mi copa, la veo rebosar,\ncon todos sus dones de amor.'
  },
  {
    'id_hymn': 298,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Gozaos de corazón, dad gracias y cantad\na Aquel que es fuente de perdón;\na Cristo coronad.'
  },
  {
    'id_hymn': 298,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Gozaos de corazón, dad gracias y cantad\na Aquel que es fuente de perdón;\na Cristo coronad.'
  },
  {
    'id_hymn': 298,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Ascienda vuestra voz, potente, con fervor,\ncon salmos de alabanza a Dios\nen himnos de loor.'
  },
  {
    'id_hymn': 298,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Al coro celestial habéis de imitar\nsintiendo el mismo amor filial\nque Cristo os quiere dar.'
  },
  {
    'id_hymn': 298,
    'order': 4,
    'type': 'STROPHE',
    'content': 'En vuestra senda fiel cantad al caminar,\nseguid en pos de Emanuel\nen todo vuestro andar.'
  },
  {
    'id_hymn': 298,
    'order': 5,
    'type': 'STROPHE',
    'content': 'Al Padre adorad quien tanto al mundo amó,\nque envió a Cristo con bondad\ny así nos rescató.'
  },
  {
    'id_hymn': 299,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Con acentos de alegría\nhoy loamos al Señor,\nque en este grato día\nnos constriñe con su amor.\nAdoremos al que quiso\ncongregarnos otra vez\ncomo miembros de su iglesia,\ntodos de una misma fe.'
  },
  {
    'id_hymn': 299,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Con fervor, con fervor,\na nuestro Rey cantemos,\ny su amor, y su amor,\nnos guarde en santa unión.'
  },
  {
    'id_hymn': 299,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Gloria a nuestro Rey amante\nque nos da su santa paz,\nque en su gracia desbordante,\npara todos da solaz.\nLevantemos nuestras voces\ny digamos con fervor:\n¡Gloria al Hijo bondadoso!\n¡Gloria a nuestro Redentor!.'
  },
  {
    'id_hymn': 299,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Oh, Señor!, hoy te adoramos\ncon fervor y gratitud,\ny anhelosos te pedimos\nque nos brindes tu salud.\nQue unidos como hermanos\nte adoremos sin cesar,\ny en tu gracia bienhechora\nprocuremos siempre estar.'
  },
  {
    'id_hymn': 300,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Con cánticos, Señor,\nmi corazón y voz\nte adoran con fervor:\n¡Oh, Grande y Santo Dios!'
  },
  {
    'id_hymn': 300,
    'order': 2,
    'type': 'CHORUS',
    'content': 'En tu mansión yo te veré,\ny paz eterna gozaré.'
  },
  {
    'id_hymn': 300,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Tu mano paternal\ntrazó mi senda aquí;\nmis pasos, cada cual,\nvelados son por ti.'
  },
  {
    'id_hymn': 300,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Innumerables son\nlos bienes, y sin par,\nque por tu compasión\nrecibo sin cesar.'
  },
  {
    'id_hymn': 300,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Tú eres, ¡oh Señor!,\nmi sumo, todo bien;\nmil lenguas tu amor\ncantando siempre estén.'
  },
  {
    'id_hymn': 301,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Te reconozco Rey de la Creación\npor las montañas, por el mar;\npor las estrellas y por la canción\nde la llovizna al comenzar.'
  },
  {
    'id_hymn': 301,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Pero en el alma te reconozco\npor el latido de un nuevo corazón.\nBrindas la calma,\npaz, santo gozo:\nte rendiré sempiterna adoración.'
  },
  {
    'id_hymn': 301,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Te reconozco al despuntar el sol,\ny por las nubes y el calor;\npor el aroma de la humilde flor\ny por el místico arrebol.'
  },
  {
    'id_hymn': 301,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Mi ser te adora con exaltación\nporque por siempre vivirás;\ntu amor imparte franca bendición,\nmi recompensa tú serás.'
  },
  {
    'id_hymn': 302,
    'order': 1,
    'type': 'STROPHE',
    'content': 'De Jesús el nombre invoca,\nheredero del dolor,\ndulce hará tu amarga copa\ncon el néctar de su amor.'
  },
  {
    'id_hymn': 302,
    'order': 2,
    'type': 'CHORUS',
    'content': 'De Jesús el nombre invoca,\nheredero del dolor,\ndulce hará tu amarga copa\ncon el néctar de su amor.'
  },
  {
    'id_hymn': 302,
    'order': 2,
    'type': 'STROPHE',
    'content': 'De Jesús el nombre estima,\nque te sirva de broquel;\nalma débil, combatida,\nhallarás asilo en Él.'
  },
  {
    'id_hymn': 302,
    'order': 3,
    'type': 'STROPHE',
    'content': 'De Jesús el nombre ensalza,\ncuyo sin igual poder\ndel sepulcro nos levanta,\nrenovando nuestro ser.'
  },
  {
    'id_hymn': 303,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Gloria a Dios en las alturas,\nque mostró su gran amor,\ndando a humanas criaturas\nun potente Salvador.\nCon los himnos de los santos\nhagan coro nuestros cantos\nde alabanza y gratitud,\npor la divinal salud;\ny digamos a una voz:\n¡En los cielos gloria a Dios!'
  },
  {
    'id_hymn': 303,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Gloria a Dios la tierra cante\nal gozar de su bondad,\npues le brinda paz constante\nen su buena voluntad.\nToda tribu y lenguas todas\nal Excelso eleven odas,\npor el Rey Emanuel\nque les vino de Israel;\ny prorrumpan a una voz:\n¡En los cielos gloria a Dios!'
  },
  {
    'id_hymn': 303,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Gloria a Dios la Iglesia entona,\nrota al ver su esclavitud\npor Jesús, que es su corona,\nsu cabeza y plenitud.\nVigilante siempre vive\ny a la lucha se apercibe,\nmientras llega su solaz\nen la gloria y plena paz,\ndonde exclama a una voz:\n¡En los cielos gloria a Dios!'
  },
  {
    'id_hymn': 304,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Digno eres, oh Jesús,\nque moriste en la cruz\npara darnos vida y luz;\ndigno Jesús.'
  },
  {
    'id_hymn': 304,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Gloria, aleluya!\n¡Dadle alabanza!\n¡Gloria, aleluya!\n¡Digno Jesús!'
  },
  {
    'id_hymn': 304,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Venga en gloria celestial\ntu gran reino eternal\ncon el gozo angelical,\ndigno Jesús.'
  },
  {
    'id_hymn': 304,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Que te honremos, oh Señor,\ncon servicio y con valor;\nguárdanos por tu amor,\ndigno Jesús.'
  },
  {
    'id_hymn': 305,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Suprema es tu majestad\nglorioso Salvador,\nincomparable tu bondad\nes para el pecador.'
  },
  {
    'id_hymn': 305,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Alabanzas dad,\npor su gran bondad,\nque de muerte nos libertó.\nAlabanzas dad por la eternidad;\ncon su sangre nos redimió.'
  },
  {
    'id_hymn': 305,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Jesús es nuestro Amigo fiel\ny nuestro Redentor,\na rescatarnos vino Él\ncon infinito amor.'
  },
  {
    'id_hymn': 305,
    'order': 3,
    'type': 'STROPHE',
    'content': 'En su presencia hay virtud,\nnos colma de bondad;\nsu gozo imparte en plenitud,\nnos da la libertad.'
  },
  {
    'id_hymn': 305,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Es Poderoso Salvador\ny Príncipe de Paz;\ntambién es fiel Consolador\nque al alma da solaz.'
  },
  {
    'id_hymn': 306,
    'order': 1,
    'type': 'STROPHE',
    'content': 'A Cristo doy mi canto:\nÉl salva el alma mía,\nme libra del quebranto\ny con amor me guía.'
  },
  {
    'id_hymn': 306,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Ensalce pues mi canto\nsu sacrosanta historia.\nEs hoy mi anhelo santo\nmirar, Jesús, tu gloria.'
  },
  {
    'id_hymn': 306,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Jamás dolor ni agravios\nenlutarán mi mente;\nrefréscanse mis labios\ncon aguas de su fuente.'
  },
  {
    'id_hymn': 306,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Su amor me ha bendecido\ny alegra el alma mía;\nsu nombre es en mi oído\ndulcísima armonía.'
  },
  {
    'id_hymn': 306,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Me gozo en alabarle;\ny cuando deje el suelo,\npor siempre he de exaltarle\ncon ángeles del cielo.'
  },
  {
    'id_hymn': 307,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Con gran gozo te adoramos,\nmajestuoso y buen Señor,\nante ti nos inclinamos,\neres digno de loor.\nTú disipas toda duda,\nlas tinieblas, el temor\ny al que implora por tu ayuda\nle concedes tu favor.'
  },
  {
    'id_hymn': 307,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Son tus obras un portento\ny pregonan tu poder,\nellas nos enseñan tanto,\nmanifiestan tu saber.\nCielo, estrellas, mar y tierras\nson testigos de tu amor;\na ti Ser, que nunca yerras,\nhemos de rendir honor.'
  },
  {
    'id_hymn': 307,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Fuente de amor y vida,\nmanantial de bienestar,\ntú nos amas sin medida,\nlisto estás a perdonar.\nGuíanos en la obediencia,\nen la mutua comprensión;\ndanos más de tu paciencia,\ncólmanos de bendición.'
  },
  {
    'id_hymn': 308,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Alma, alaba al Rey del cielo\ny a sus pies tributo pon.\nLos dolientes de este suelo\nden a Él su corazón.\n¡Aleluya! ¡Aleluya!\nDel Eterno el vivo don.'
  },
  {
    'id_hymn': 308,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Sea su nombre alabado\ntoda la eternidad;\nhonra al Hijo tan amado\nque borró ya mi maldad.\n¡Aleluya! ¡Aleluya!\nGloria a su fidelidad.'
  },
  {
    'id_hymn': 308,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Mi alma débil fortalece\ny le importa mi dolor;\nme levanta y restablece,\na Él me acojo sin temor.\n¡Aleluya! ¡Aleluya!\nAdorad al Dios de amor.'
  },
  {
    'id_hymn': 308,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Mi alma débil fortalece\ny le importa mi dolor;\nme levanta y restablece,\na Él me acojo sin temor.\n¡Aleluya! ¡Aleluya!\nAdorad al Dios de amor.'
  },
  {
    'id_hymn': 308,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Él conoce mis errores\ny me ve desfallecer;\nquita todos mis temores,\nme da nuevo amanecer.\n¡Aleluya! ¡Aleluya!\nDebo a Él reconocer.'
  },
  {
    'id_hymn': 309,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Te quiero, te quiero, te quiero, Señor;\nte quiero, Dios mío, mi fiel Salvador:\na ti y a tu iglesia, tu casa, tu altar;\nmas cuanto, mis obras te lo han de mostrar.'
  },
  {
    'id_hymn': 309,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Placer indecible, profundo, eternal;\nme encuentro en la cumbre de gozo inmortal;\ncontemplo, arrobado,su gloria sin par,\ny anhelo a Cristo y al cielo volar.'
  },
  {
    'id_hymn': 309,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Concédeme, oh Cristo, tu fuerza y virtud,\ntu gozo, tu vida, reposo y salud.\nTu gracia, de mi alma es la inspiración;\ntu amor y tu nombre, mi santa canción.'
  },
  {
    'id_hymn': 309,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Oh Cristo, ¿a quién como tú puedo hallar?\nTu voz me consuela, me ayuda a cantar.\nTú ligas a mi alma con cuerdas de amor.\nTe cantan mis labios con todo fervor.'
  },
  {
    'id_hymn': 310,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Gracias dad a Jesucristo\npor su sempiterno amor;\nalabadle, santos todos,\nÉl es nuestro Salvador.\nQue sus siervos por doquiera\ncanten su benignidad;\nlos que temen a su nombre\nhablen de su libertad.'
  },
  {
    'id_hymn': 310,
    'order': 2,
    'type': 'STROPHE',
    'content': 'De cadenas de amargura\nle pedí liberación;\nescuchó mi voz, y mi alma\nla salvó de la prisión.\nSi me asalta el enemigo\nnada tengo que temer;\nen la lucha tenebrosa\ncon Jesús podré vencer.'
  },
  {
    'id_hymn': 310,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Quien confía en Jesucristo\nla victoria llevará,\nmas si espera en el hombre\nsiempre éste fallará.\nOh Señor, tu santo nombre\nalabamos sin cesar;\npor tu amor incomparable\ngracias te queremos dar.'
  },
  {
    'id_hymn': 311,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Amante, tierno y sabio Dios\ntuyo el honor, la adoración.\n¡Aleluya, aleluya!\nHoy entonemos con gran voz\ncantos de honra y oración.\n¡Aleluya, aleluya!\n¡Aleluya, aleluya, aleluya!'
  },
  {
    'id_hymn': 311,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Sol, luna, estrellas, alabad\nal que os creó con majestad.\n¡Aleluya, aleluya!\nY os ordena en su bondad\nque alumbréis con claridad.\n¡Aleluya, aleluya!\n¡Aleluya, aleluya, aleluya!'
  },
  {
    'id_hymn': 311,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Todas tus obras dan loor,\na ti se postran con fervor.\n¡Aleluya, aleluya!\nPues reconocen tu amor:\ntierno, sublime, arrobador.\n¡Aleluya, aleluya!\n¡Aleluya, aleluya, aleluya!'
  },
  {
    'id_hymn': 311,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Quienes perdonan te honrarán,\ntu tierno amor los ha de guiar.\n¡Aleluya, aleluya!\nEn tu hogar habitarán\nllenos de gozo y bienestar.\n¡Aleluya, aleluya!\n¡Aleluya, aleluya, aleluya!'
  },
  {
    'id_hymn': 312,
    'order': 1,
    'type': 'CHORUS',
    'content': 'Tan brillantes como el sol,\ntus obras ¡oh, Señor!\nBellas y grandiosas son,\nperfectas en fulgor.'
  },
  {
    'id_hymn': 312,
    'order': 1,
    'type': 'STROPHE',
    'content': 'La flor más pequeñita;\ndel ave su cantar,\nsus hábiles alitas\nnos hacen meditar.'
  },
  {
    'id_hymn': 312,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Preciosas maravillas\nnos dan gran bienestar;\nvariadas florecillas\nque lucen en tu altar.'
  },
  {
    'id_hymn': 312,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Montañas y llanuras\ncon su alegre verdor,\nson llenas de hermosura\ndispuestas del Creador.'
  },
  {
    'id_hymn': 312,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Declaran tu excelencia,\ntu amor y perfección.\nEn ti está la ciencia,\n¡te doy mi adoración!'
  },
  {
    'id_hymn': 313,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Da gloria al Señor, de rodillas adórale\nen la hermosura de su santidad,\ntu plena obediencia cual oro ofreciéndole\ncon el incienso de grata humildad.'
  },
  {
    'id_hymn': 313,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Echada a sus pies esa carga que oprímete,\nla llevará sobre su corazón;\ntus penas te quitará, limpiando tus lágrimas,\nguiando tus pies a mayor bendición.'
  },
  {
    'id_hymn': 313,
    'order': 3,
    'type': 'STROPHE',
    'content': 'En sus santos atrios a donde convídate,\naunque eres pobre no temas entrar;\nla firme, constante fe y el puro, sencillo amor:\ntales ofrendas pon sobre el altar.'
  },
  {
    'id_hymn': 313,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Y cuando tú vayas temblando a llevárselas,\npor su Hijo amado las aceptará;\ny tras noche lúgubre habrá aurora espléndida:\ngozo, alegría y paz te dará.'
  },
  {
    'id_hymn': 314,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Un himno a Cristo entonad,\ntan sólo Él digno es;\ncon gratitud a Él cantad\npostrados a sus pies.'
  },
  {
    'id_hymn': 314,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Aleluya, todos den\nal glorioso Rey de Paz y Luz!\n¡Aleluya, aleluya, aleluya. Amén!'
  },
  {
    'id_hymn': 314,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Loor y honra tributad\npues tiene gran poder;\nsu nombre todos exaltad,\nÉl os hará vencer.'
  },
  {
    'id_hymn': 314,
    'order': 3,
    'type': 'STROPHE',
    'content': 'El que por nos murió en la cruz\nde muerte nos libró;\npor rescatarnos, mi Jesús,\ncon sangre nos compró.'
  },
  {
    'id_hymn': 314,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Vosotros cielos, tierra y mar\nload al Creador;\nlos mundos todos anunciad\nsu eterno y grande amor.'
  },
  {
    'id_hymn': 315,
    'order': 1,
    'type': 'STROPHE',
    'content': 'No, no, yo no comprendo\nla inmensidad de tu amor.\nNo, no, yo no entiendo\ntu caminar sin rencor.'
  },
  {
    'id_hymn': 315,
    'order': 2,
    'type': 'STROPHE',
    'content': 'No, no, yo no concibo\ntu perdonar sin fingir.\nNo, no, yo no percibo\ntodo el amor que hay en ti.'
  },
  {
    'id_hymn': 315,
    'order': 3,
    'type': 'CHORUS',
    'content': 'Todo ese amor recibido\nme deja sin palabras,\nno capta mi sentido\ny al fin caigo rendido\npidiéndote perdón.'
  },
  {
    'id_hymn': 315,
    'order': 3,
    'type': 'STROPHE',
    'content': 'No, no, ¡oh, no he llegado\nni a vislumbrar tu estimar!,\ncuando por mi pecado\ntú te dejaste azotar.'
  },
  {
    'id_hymn': 315,
    'order': 4,
    'type': 'STROPHE',
    'content': 'No, no, yo no pensaba\nque te dejase la luz.\nNo, no, yo no esperaba\ntu humillación en la cruz.'
  },
  {
    'id_hymn': 315,
    'order': 5,
    'type': 'CHORUS',
    'content': 'Todo ese amor recibido\nme deja sin palabras,\nno capta mi sentido\ny al fin caigo rendido\npidiéndote perdón.'
  },
  {
    'id_hymn': 315,
    'order': 6,
    'type': 3,
    'content': 'Todo ese amor recibido\nme deja sin palabras,\nte ruego que me ayudes\na consagrar mi vida\npor siempre a ti Señor.'
  },
  {
    'id_hymn': 316,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Venid, cantad a nuestro Señor\nuniendo al angélico coro la voz.\nA Cristo, el Rey, rindamos honor:\n¡Digno eres tú, Cordero de Dios!.'
  },
  {
    'id_hymn': 316,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En el Calvario el buen Jesús\nsufrió por nosotros muerte atroz.\nNos gloriaremos en esa cruz:\n¡Digno eres tú, Cordero de Dios!.'
  },
  {
    'id_hymn': 316,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Victoria se pudo al fin proclamar,\ny huestes de Él ascienden en pos.\nSe escucha en todo el cielo el cantar:\n¡Digno eres tú, Cordero de Dios!.'
  },
  {
    'id_hymn': 316,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Por toda la eternidad\ny en esta existencia hoy tan veloz\nanunciaremos su majestad:\n¡Digno eres tú, Cordero de Dios!.'
  },
  {
    'id_hymn': 317,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Quiero el día empezarlo contigo,\nque las nubes se aparten de mí.\nTus pisadas Señor siempre sigo;\nalejarme no quiero de ti.'
  },
  {
    'id_hymn': 317,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Empezando el día contigo\nmuy feliz viviré, mi Jesús.\nNo me dejes, ven siempre conmigo,\nque mi senda ilumine tu luz.'
  },
  {
    'id_hymn': 317,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cuanto haga, en palabras, te pido;\no en acciones, doquiera que esté;\npor muy lejos que yo haya ido,\nJesús mío, contigo estaré.'
  },
  {
    'id_hymn': 317,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Y contigo empezar quiero el día,\ndisfrutando de eterno solaz.\nAlejado de ti no tendría\nni siquiera un minuto de paz.'
  },
  {
    'id_hymn': 317,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Todo el día pasarlo contigo,\neso quiero mi amado Jesús;\ny si al sueño me entrego, me digo:\nTú me haces liviana mi cruz.'
  },
  {
    'id_hymn': 318,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Dulce es la canción\nde la hora matinal:\nalivia cargas y aflicción;\nme trae paz divinal.'
  },
  {
    'id_hymn': 318,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Como la bella flor\nbusca del sol la luz,\nmi alma así con gran ardor\nte busca, oh buen Jesús.'
  },
  {
    'id_hymn': 318,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Horas de luz me son\ndadas, Señor, a mí,\ny es mi sincera aspiración\nusarlas para ti.'
  },
  {
    'id_hymn': 318,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Esta mañana, oh Dios,\noye mi petición:\nElevo a ti, Señor, mi voz\nen matinal canción.'
  },
  {
    'id_hymn': 319,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Por la mañana, ¡oh Señor!,\nelevo a ti mi voz;\na tu buen nombre doy loor\ncon gratitud, mi Dios.'
  },
  {
    'id_hymn': 319,
    'order': 2,
    'type': 'STROPHE',
    'content': 'El sol brillante ya salió,\ncamino en su luz;\ndel Salvador es símbolo,\ndel magno Rey, Jesús.'
  },
  {
    'id_hymn': 319,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Los cielos cuentan al que cree\nla gloria del Señor;\nla llama avivan de la fe\ny alientan el amor.'
  },
  {
    'id_hymn': 319,
    'order': 4,
    'type': 'STROPHE',
    'content': 'En la mañana eterna, pues,\ncontigo cuando esté,\nyo del Cordero y de Moisés\nel himno entonaré.'
  },
  {
    'id_hymn': 320,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Baja el sol tras las montañas\ny la tarde ya llegó;\ncalma y quieta cae la noche;\notro día terminó;\nya se fue con sus problemas,\nviene otro anochecer;\nmás cercano está el día\ncuando a Cristo he de ver.'
  },
  {
    'id_hymn': 320,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Más cerca estoy, más cerca estoy,\nde mi hogar, mi hogar celestial;\nmás cerca del Edén a donde pronto iré,\ndonde el gozo es eternal.'
  },
  {
    'id_hymn': 320,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Muy cansado el peregrino\nve el fin del día llegar,\nporque del trabajo arduo\notra vez va a descansar.\nTal la vida en este mundo\nque me toca afrontar;\ny las sombras de la noche\nsé que pronto he de probar.'
  },
  {
    'id_hymn': 320,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Otro día en el viaje\na mi hogar, el celestial;\nya más cerca está el río\nclaro como el cristal;\nya el cielo se aclara,\npuedo ver su áurea luz;\ncada día más me acerco\na la patria de Jesús.'
  },
  {
    'id_hymn': 321,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Guárdanos, oh Cristo,\nal anochecer\ncon tu dulce calma\nhasta amanecer.'
  },
  {
    'id_hymn': 321,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Brisas agradables\nvienen sobre nos\ncual amor sublime,\ndesde nuestro Dios.'
  },
  {
    'id_hymn': 321,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Vienen las tinieblas,\nviene oscuridad,\nmas hay luz perfecta\nen tu claridad.'
  },
  {
    'id_hymn': 322,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Protégeme te pido, dulcísimo Jesús,\nen esta noche ansío,\nme des más de tu luz.\nDe mí lo sabes todo y todo tú me das;\nvivir me harás de modo\nde reflejar tu paz.'
  },
  {
    'id_hymn': 322,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Tu sangre solamente\nmi ser ha de limpiar; del mal enteramente\nme quieres apartar.\nTú siempre me has cuidado,\nme llenas de solaz; en obra o en descanso\nmi anhelo es ver tu faz.'
  },
  {
    'id_hymn': 323,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Loor a ti, mi Dios, en esta noche,\npor todas tus bondades de este día;\n¡oh guárdame!, y que tus potentes alas\nsean por siempre la defensa mía.'
  },
  {
    'id_hymn': 323,
    'order': 2,
    'type': 'STROPHE',
    'content': 'De cuantas faltas hoy he cometido,\nperdóname, Señor, por tu Hijo amado;\ncontigo, con el prójimo y conmigo\nquede, antes de dormir, reconciliado.'
  },
  {
    'id_hymn': 323,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Enséñame a vivir, que no me espante\nla tumba más que el lecho de reposo;\nenséñame a morir para que pueda\nel día postrero despertar glorioso.'
  },
  {
    'id_hymn': 323,
    'order': 4,
    'type': 'STROPHE',
    'content': '¡Oh, logre reposar en ti mi alma!\nMis párpados los cierre en dulce sueño,\nsueño que pueda más vigor prestarme\npara servirte al despertar, mi Dueño.'
  },
  {
    'id_hymn': 324,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Señor, si hoy un alma lastimé;\nsi con mi ejemplo del bien la aparté;\nsi caprichosamente caminé,\nte imploro: ¡Perdón!.'
  },
  {
    'id_hymn': 324,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Si insensatamente conversé;\nsi del necesitado me alejé;\nsi tras placeres vanos me desvié,\nte imploro: ¡Perdón!.'
  },
  {
    'id_hymn': 324,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Si he sido malo o sin compasión;\nsi a otros me es difícil dar perdón;\nsi no he seguido fiel tu indicación,\nte imploro: ¡Perdón!.'
  },
  {
    'id_hymn': 324,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Perdona lo que aquí te confesé;\nseñálame las faltas que no sé,\ny en tu amor se afiance más mi fe,\npor siempre. Amén.'
  },
  {
    'id_hymn': 325,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Sol de mi ser, mi Salvador,\ncontigo vivo sin temor;\nno quieras esconder jamás\nde mí la gloria de tu faz.'
  },
  {
    'id_hymn': 325,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Al sueño blando al entregar\nmi cuerpo para descansar,\nen tu promesa confiaré:\n“Ven, hijo, te protegeré”.'
  },
  {
    'id_hymn': 325,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Dame, oh Señor, al despertar,\ngracia divina y bienestar,\ny al caminar a tu mansión,\ncólmame tú de bendición.'
  },
  {
    'id_hymn': 326,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Por este día que nos diste\nte damos gracias, oh, Señor;\ny por la noche que hiciste\ncon su descanso encantador.'
  },
  {
    'id_hymn': 326,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Por tu iglesia que no duerme\nen tanto el mundo va en redor;\nyo quiero en ella siempre verme;\nservirte quiero con fervor.'
  },
  {
    'id_hymn': 326,
    'order': 3,
    'type': 'STROPHE',
    'content': 'En cada isla o continente\nse ve un nuevo amanecer,\ny la natura reverente\nse inclina al anochecer.'
  },
  {
    'id_hymn': 326,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Tú, Poderoso Rey de reyes,\ntu trono nunca acabará.\nEl mundo gira en tus leyes\ny unidos todos te honrarán.'
  },
  {
    'id_hymn': 327,
    'order': 1,
    'type': 'STROPHE',
    'content': 'La iglesia sobre Roca está,\nno hay motivo de duda;\nlibrada de temor será,\nes siempre Dios quien la cuida.\nLas tempestades no podrán\nsu fortaleza quebrantar\nmientras sus hijos le adoran.'
  },
  {
    'id_hymn': 327,
    'order': 2,
    'type': 'STROPHE',
    'content': 'De nuestro cuerpo construyó\ntemplo en el cual Él habite;\nasí Él lo constituyó\naunque no lo necesite.\nEn lo alto está su habitación\nlibre de toda corrupción;\nde una sublime belleza.'
  },
  {
    'id_hymn': 327,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Piedras vivientes quiere Él\npara su propia morada;\nque le seamos siempre fiel\nen toda nuestra jornada.\nQue al congregarnos dos o tres\nnuestra oración al ascender\nsea de gratos loores.'
  },
  {
    'id_hymn': 327,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Y al reunirnos con el Rey\naun en humilde morada,\nÉl generoso a su grey\nsu bendición le depara.\nLa gracia que Jesús nos da\nsiempre nos acompañará\nhasta su pronta venida.'
  },
  {
    'id_hymn': 328,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cuán hermosa y tierna es\nla unidad con el Señor;\nadorarle vez tras vez,\nentregados a su amor.\nDulce paz hay en Jesús\ny en Él me ampararé\nporque gracias a su cruz\ngozo eterno obtendré.'
  },
  {
    'id_hymn': 328,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En su iglesia, en unidad,\nhemos de permanecer\nhasta que en la eternidad\na Jesús podamos ver.\nDémosle adoración\na quien demostró su amor,\npor su grande compasión,\npor ser nuestro Salvador.'
  },
  {
    'id_hymn': 328,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cristo es nuestro Amigo fiel,\npor salvarnos se humanó;\njunto al Padre estaba Aquel\nquien por nos se entregó.\nSalvos Él nos quiere ver,\nnuestra deuda ya pagó;\npor su gracia y poder\nvida eterna nos compró.'
  },
  {
    'id_hymn': 328,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Aleluya al Señor\ndémosle de corazón,\nnuestro eterno Salvador\ndigno es de adoración.\nDe su mano nos llevó\ncon cuidado Paternal;\nde la muerte nos libró\ndándonos paz eternal.'
  },
  {
    'id_hymn': 329,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Iglesia de Cristo, reanima tu amor\ny espera, velando, a tu augusto Señor.\nJesús, el Esposo, vestido de honor,\nviniendo se anuncia con fuerte clamor.'
  },
  {
    'id_hymn': 329,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Si falta en algunos el santo fervor,\nla fe sea en todos el despertador.\nVelad, compañeros, velad sin temor,\nque está con nosotros el Consolador.'
  },
  {
    'id_hymn': 329,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Quien sigue la senda del vil pecador,\nse entrega en los brazos de un sueño traidor.\nMas para los siervos del buen Salvador,\nvelar esperando es su anhelo mejor.'
  },
  {
    'id_hymn': 330,
    'order': 1,
    'type': 'STROPHE',
    'content': 'De regiones más allá,\ntras montañas y ancho mar,\nel llamado llega ya\nque vayamos a enseñar.'
  },
  {
    'id_hymn': 330,
    'order': 2,
    'type': 'CHORUS',
    'content': 'No podemos demorarnos,\nCristo nos ordena ir,\ny debemos apurarnos\nesa orden a cumplir.'
  },
  {
    'id_hymn': 330,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Del Señor oíd la voz\nque nos manda trabajar;\na su viña muy veloz\nhay que ir sin vacilar.'
  },
  {
    'id_hymn': 330,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Muchas almas con afán\ntienen sed de salvación;\nnecesitan hoy el Pan\nque da vida y redención.'
  },
  {
    'id_hymn': 330,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Que la sangre de Jesús\ntenga efecto en ultramar;\nhemos de llevar su luz,\ncolocarnos en su altar.'
  },
  {
    'id_hymn': 331,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Trabajad! ¡Trabajad! Somos siervos de Dios;\nseguiremos la senda que Cristo trazó.\nRenovando las fuerzas con bienes que da,\nel deber que nos toca cumplido será.'
  },
  {
    'id_hymn': 331,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Trabajad! ¡Trabajad! ¡Esperad y velad!\n¡Confiad! ¡Siempre orad!,\nque Cristo pronto volverá.'
  },
  {
    'id_hymn': 331,
    'order': 2,
    'type': 'STROPHE',
    'content': '¡Trabajad! ¡Trabajad!Hay que dar de comer\nal que pan de la vida quisiere tener.\nHay enfermos que irán a los pies del Señor\nal saber que de balde los sana su amor.'
  },
  {
    'id_hymn': 331,
    'order': 3,
    'type': 'STROPHE',
    'content': ' ¡Trabajad! ¡Trabajad! Fortaleza pedid;\nel reinado del mal con valor combatid;\nconducid sus cautivos al Libertador\ny decid que de balde redime su amor.'
  },
  {
    'id_hymn': 332,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Yo quiero trabajar por el Señor,\ncreyendo en su Palabra y en su amor;\nquiero, sí, cantar y orar,\ny ocupado siempre estar\nen la viña del Señor.'
  },
  {
    'id_hymn': 332,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Trabajar y orar\nen la viña, en la viña del Señor.\nSí, mi anhelo es orar,\ny ocupado siempre estar\nen la viña del Señor.'
  },
  {
    'id_hymn': 332,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Yo quiero cada día trabajar,\ny esclavos del pecado libertar;\nsí, llevarlos a Jesús,\nnuestro guía, nuestra luz,\nen la viña del Señor.'
  },
  {
    'id_hymn': 332,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Yo quiero ser obrero de valor,\nconfiando en el poder del Salvador.\nquien quiera trabajar\nhallará también lugar\nen la viña del Señor.'
  },
  {
    'id_hymn': 333,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Oigo del Señor la voz llamando:\n“¿Quién irá este día a trabajar?\n¿Quién me traerá a los perdidos?\n¿Quién la senda angosta mostrará?”'
  },
  {
    'id_hymn': 333,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Habla, oh Dios, háblame;\nhabla, y pronto te contestaré;\nhabla, oh Dios, háblame,\nhabla y yo respondo: “Heme aquí”.'
  },
  {
    'id_hymn': 333,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cuando el mismo Dios tocó al profeta,\ndándole un nuevo corazón,\ny éste oyó la voz que le llamaba:\n“Heme aquí”, él pronto contestó.'
  },
  {
    'id_hymn': 333,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Muchos miles y millones mueren,\nen la más completa oscuridad;\nanda pronto tú a rescatarlos;\ndi al Maestro: “Voy con voluntad”.'
  },
  {
    'id_hymn': 333,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Pronto ya no habrá misericordia\npara esta pobre humanidad,\ny entonces se oirá al Maestro\nque dirá: “Bien hecho, siervo fiel”.'
  },
  {
    'id_hymn': 334,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Oh!, cuánto necesita\nobreros el Señor,\nque vayan presurosos\nal campo de labor.\nAlegre yo le digo,\ncon todo mi valor:\nConmigo cuenta tú, Señor.'
  },
  {
    'id_hymn': 334,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Voy, Señor; voy, Señor,\na trabajar alegre y con fervor.\nSí, voy, Señor; voy Señor;\nconmigo cuenta tú, Señor.'
  },
  {
    'id_hymn': 334,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Ahora, en la batalla,\nven, cíñeme, Señor;\ntu célica armadura\ndé aliento, fe y valor.\nPara vencer las huestes\ndel fiero tentador,\nconmigo cuenta tú, Señor.'
  },
  {
    'id_hymn': 334,
    'order': 3,
    'type': 'STROPHE',
    'content': 'La carga que soporta\nla pobre humanidad,\ncon todos mis esfuerzos\nyo debo aliviar;\npara salvar las almas,\ndoquier me toque estar,\nconmigo cuenta tú, Señor.'
  },
  {
    'id_hymn': 335,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Jesús está buscando voluntarios hoy,\nque a la ruda lucha luego puedan ir;\n¿quién está dispuesto a escuchar su voz\nsiendo voluntario, listo a combatir?'
  },
  {
    'id_hymn': 335,
    'order': 2,
    'type': 'CHORUS',
    'content': 'De Cristo voluntario tú puedes ser;\notros ya se alistan, hazlo tú;\nCristo es nuestro jefe, no hay por qué temer.\n¿Quieres ser un voluntario de Jesús?'
  },
  {
    'id_hymn': 335,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Nos cercan las tinieblas densas del error,\nvamos sobre abismos hondos de maldad,\ny para destruirlas llama el Salvador\nmuchos voluntarios que amen la verdad.'
  },
  {
    'id_hymn': 335,
    'order': 3,
    'type': 'STROPHE',
    'content': 'La lucha es contra el vicio, la pereza, el mal,\ncontra la ignorancia de la ley de Dios;\nes una campaña que no tiene igual;\n¿quieres ir a ella, de Jesús en pos?'
  },
  {
    'id_hymn': 335,
    'order': 4,
    'type': 'STROPHE',
    'content': 'El triunfo significa que domine el bien,\nque los hombres se amen, y que la verdad\nreine en las conciencias, siendo su sostén,\ny ha de ser, si ayudas, una realidad.'
  },
  {
    'id_hymn': 336,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Levántate, cristiano,\nlevántate y trabaja;\nno dejes que tu vida\nse pase en la inacción.\nEl que en el ocio vive\na su Hacedor ultraja,\nno lleva sus deberes,\nni cumple su misión.'
  },
  {
    'id_hymn': 336,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Si quieres que la vida\nte ofrezca mil encantos,\nsi quieres que la dicha\nte inspire paz y amor,\ntrabaja con ahínco,\nsin miedo ni quebrantos;\ny un cielo de ventura\nverás en tu redor.'
  },
  {
    'id_hymn': 336,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Trabaja por el mundo,\ntrabaja por el cielo,\nsembrando buenas obras,\nsembrando bendición.\nVirtud es el trabajo,\nalivio y fiel consuelo;\ny sólo en él se encuentra\nla paz del corazón.'
  },
  {
    'id_hymn': 337,
    'order': 1,
    'type': 'STROPHE',
    'content': 'En la montaña podrá no ser,\nni sobre rugiente mar,\npodrá no ser en la ruda lid\ndo Cristo me quiere emplear.\nMas si Él me ordenare seguir aquí\nsenderos que yo ignoré,\nconfiando en Él, le diré: “¡Señor,\ndo tú quieras que vaya, iré!”.'
  },
  {
    'id_hymn': 337,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Do tú necesites que vaya iré,\na los valles, los montes o el mar.\n¡Decir lo que quieras, Señor, podré;\nlo que quieras que sea, seré!'
  },
  {
    'id_hymn': 337,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Quizá hay palabras de santo amor\nque Cristo me ordena hablar,\ny en los caminos do reina el mal\na algún pecador salvar.\nSeñor, si quisieres mi guía ser,\nmi oscura senda andaré;\ntu fiel mensaje podré anunciar\ny así lo que quieras diré.'
  },
  {
    'id_hymn': 337,
    'order': 3,
    'type': 'STROPHE',
    'content': 'El vasto mundo lugar tendrá\ndo pueda con noble ardor\ngastar la vida que Dios me da\npor Cristo mi Salvador.\nY siempre confiando en\ntu gran bondad\ntus dones todos tendré;\ny alegre haciendo tu voluntad,\nlo que quieras que sea, seré.'
  },
  {
    'id_hymn': 338,
    'order': 1,
    'type': 'STROPHE',
    'content': 'De heladas cordilleras,\nde playas de coral,\nde etiópicas riberas,\ndel mar meridional,\nnos llaman afligidas,\na darles libertad,\nnaciones sumergidas\nen densa oscuridad.'
  },
  {
    'id_hymn': 338,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Nosotros, alumbrados\nde celestial saber,\n¿a tantos desgraciados\nveremos perecer?\nA todos, pues, llevemos\ngratuita salvación;\nel Nombre proclamemos\nque brinda redención.'
  },
  {
    'id_hymn': 338,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Llevada por los vientos\nla historia de la cruz,\ndespierte sentimientos\nde amor al buen Jesús;\nprepare corazones,\nenseñe su verdad\nen todas las naciones,\nsegún su voluntad.'
  },
  {
    'id_hymn': 339,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Ve hoy a la viña, te aguarda el Señor,\nte espera el trabajo que harás con amor;\nsu voz pues escucha con toda atención;\nmaduro está el campo y es la ocasión.\nNo seas indolente, atiende a su voz,\nacude hoy mismo con paso veloz.\nLas huestes malignas no dejan de obrar,\nesfuérzate ahora por almas ganar.'
  },
  {
    'id_hymn': 339,
    'order': 2,
    'type': 'STROPHE',
    'content': '“Ve hoy a la viña pues yo te compré,\ncon mi sangre santa por ti ya pagué.\nEs mío tu tiempo y todo tu ser,\natiende mi orden y haz tu deber.\nPor ti voluntario la cruz padecí;\noprobios, insultos y heridas sufrí.\nMas todo lo hice por darte perdón;\nconsagra tu vida y tu corazón”.'
  },
  {
    'id_hymn': 339,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Aún es de día, a la viña ve,\nbaldía se halla, ¿no entiendes por qué?\nDemuéstrate listo, resuelto a luchar,\nel tiempo se acaba y habrás de triunfar.\nSi tú perseveras siguiéndole a Él,\noirás del Maestro: “Bien, buen siervo y fiel”.\nHiciste la obra con gozo y placer,\nel premio te espera, la gloria has de ver.'
  },
  {
    'id_hymn': 340,
    'order': 1,
    'type': 'STROPHE',
    'content': '¿El guarda de mi hermano soy?\n¿Qué puedo responder?\n¿Cumpliendo mi deber estoy\ny lo hago con placer?\nA Cristo he conocido\ny a Él he de llevar\nal débil y perdido\ny Él lo ha de salvar.'
  },
  {
    'id_hymn': 340,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Guarda soy de mi hermano,\ncuidarlo es mi deber;\nle tenderé mi mano,\nmi amor le haré saber.\nMi lámpara encendida\ntendré que mantener\ny amor en gran medida he de tener.'
  },
  {
    'id_hymn': 340,
    'order': 2,
    'type': 'STROPHE',
    'content': 'La envidia es un vicio ruin\nque daña a todo aquel;\npor ella asesinó Caín\na su hermano Abel.\nDistinto es quien comparte\ny muestra abnegación,\nrecibirá su parte\nde Cristo en la mansión.'
  },
  {
    'id_hymn': 340,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Endurecido el corazón\nya nunca más tendré;\nentonaré feliz canción\ny amor impartiré.\nSeñor, hazme hermanable,\nque sienta cual Jesús\nun gozo inefable\nal esparcir tu luz.'
  },
  {
    'id_hymn': 341,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Tocad trompeta ya,\nalegres en Sión;\nal mundo proclamad\nla eterna redención.'
  },
  {
    'id_hymn': 341,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Este es el año de bondad,\nvolved a vuestra libertad,\nvolved a vuestra libertad.'
  },
  {
    'id_hymn': 341,
    'order': 2,
    'type': 'STROPHE',
    'content': 'A Cristo predicad;\ndecid que ya murió\ny con su potestad\nla muerte destruyó.'
  },
  {
    'id_hymn': 341,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Vosotros que el favor\ndel cielo despreciáis,\nved que por el amor\nde Cristo lo alcanzáis.'
  },
  {
    'id_hymn': 341,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Llamadles con amor;\nid, ofrecedles paz.\nEs tarde, apresuraos;\nque vuelvan a su faz.'
  },
  {
    'id_hymn': 342,
    'order': 1,
    'type': 'STROPHE',
    'content': 'La obra es tuya, oh Jesús,\nno puede perecer;\nen ella haz brillar tu luz\ncual bello amanecer.\nEterna salvación será\na quien decida así creer,\nque por tu gracia vivirá\ncon plena fuerza y saber; derrotará\nal mal con gran poder.'
  },
  {
    'id_hymn': 342,
    'order': 2,
    'type': 'STROPHE',
    'content': 'De ti amado Redentor\ndeseo oír la voz.\nTú, nuestro eterno Salvador,\nrevelas al buen Dios.\nDe las naciones salvación,\ndel mundo entero bella luz.\nLas nuevas de la redención\nproclamas tú, mi Rey Jesús.\nPrecioso Don, te diste en cruenta cruz.'
  },
  {
    'id_hymn': 342,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Tu obra es y nos guiarás\npaciente y con poder,\ny la cizaña apartarás,\nno impida su crecer.\nTu obra es, Divino Ser;\ntu sello lleva y dignidad.\nPodamos sí permanecer\nasí por siempre en tu verdad\ny aprender por la eternidad.'
  },
  {
    'id_hymn': 343,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Id, proclamad a todas las razas\nque Jesús vendrá;\ndecidlo presto de casa en casa:\nPronto aparecerá.'
  },
  {
    'id_hymn': 343,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Contad la bella historia\ndel benigno Salvador;\nsu muerte y su victoria\nsobre el tentador.'
  },
  {
    'id_hymn': 343,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Grandes señales entre los cielos\nhablan sin cesar\nque el Rey de gloria viene con celo\nsu pueblo a libertar.'
  },
  {
    'id_hymn': 343,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Hijos de Dios, ya regocijaos,\nvuestra voz alzad,\npues viene Cristo, reconfortaos,\nsed fieles y velad.'
  },
  {
    'id_hymn': 344,
    'order': 1,
    'type': 'STROPHE',
    'content': '¿Os pusisteis a arar? Pues seguid, seguid\naunque duro el terreno encontréis.\nLuchad con tesón, firme el corazón,\ny al fin rico pago tendréis.\nLos campos fecundos reverdecerán\ny áurea gloria revestirán;\ncon gozo veréis cosechar la mies;\nentonad, pues, con brío el refrán:'
  },
  {
    'id_hymn': 344,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Seguid, seguid, hermanos, seguid;\ncansados, no vaciléis.\nVenciendo, al fin, alegre festín\ncon Cristo gozaréis.'
  },
  {
    'id_hymn': 344,
    'order': 2,
    'type': 'STROPHE',
    'content': '¿Os llamó Dios a su obra? seguid, seguid\naunque densa la oscuridad.\nDe Cristo Jesús vendrá clara luz,\nen su lumbre gloriosa andad.\nEn aquel fausto día de gozo y solaz,\nen la patria de luz y amor,\nceleste mansión, feliz galardón\nos dará bondadoso el Señor.'
  },
  {
    'id_hymn': 345,
    'order': 1,
    'type': 'STROPHE',
    'content': '¿Qué obra tienes para mí?,\nyo con gozo haré por ti.\nNo soy fuerte o capaz\nmas me haces eficaz;\nal confiar en tu poder\ntú me ayudas a vencer.\n¿Qué obra tienes para mí?,\nyo con gozo haré por ti.'
  },
  {
    'id_hymn': 345,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En temprana juventud\nque aprenda la virtud;\nde la Biblia la verdad\ny tu santa voluntad.\nQuiero obedecer tu ley,\ny servirte, mi gran Rey.\n¿Qué obra tienes para mí?,\nyo con gozo haré por ti.'
  },
  {
    'id_hymn': 345,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Que hoy pueda yo sembrar\nde tu amor y proclamar\nlo que has hecho tú por mí\ny vivir feliz aquí.\nHazme revelar tu luz\ny seguirte, mi Jesús.\n¿Qué obra tienes para mí?,\nyo con gozo haré por ti.'
  },
  {
    'id_hymn': 346,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Los cosechadores, ¡oh!, ¿dónde están?\nEl tiempo ha llegado de recoger;\nse pasan las horas, volando van,\ny así la cosecha se va a perder.'
  },
  {
    'id_hymn': 346,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Los segadores, ¿por dónde van?\n¿Por qué no acuden pronto a trabajar?\n¿A dónde han ido? ¡Oh!, ¿dónde están?\n¿Y quién las almas irá a buscar?'
  },
  {
    'id_hymn': 346,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Por valles y montes id y buscad,\nel trigo maduro podéis hallar;\nen calles perdidas id y llamad\na aquellos que Cristo ha de salvar.'
  },
  {
    'id_hymn': 346,
    'order': 3,
    'type': 'STROPHE',
    'content': 'El fruto en el campo maduro está,\npor todo lugar id a recoger;\nbuscad con ahínco aquí y allá,\nel gozo mostrad en obedecer.'
  },
  {
    'id_hymn': 346,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Y vuestras gavillas, venid, traed;\nla obra no es vuestra es del Señor.\nEl día ha llegado de recoger;\ncuan grato es sentir: ¡Hice mi labor!'
  },
  {
    'id_hymn': 347,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡El salvavidas de prisa lanzad!\n¡Echad la cuerda al bravísimo mar!\nAllá en las olas, en la oscuridad,\nnaufraga un hermano que habéis de salvar.'
  },
  {
    'id_hymn': 347,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Lanzad la cuerda del salvavidas!\n¡Ved, se lo lleva el mar!\n¡Lanzad la cuerda del salvavidas!\n¡Id al perdido a salvar!'
  },
  {
    'id_hymn': 347,
    'order': 2,
    'type': 'STROPHE',
    'content': '¡El salvavidas, con mano veloz!\n¿Por qué tardando tranquilos quedáis?\n¡Ved, ya se hunde en el vórtice atroz!\n¡Lanzad, pues, el bote! ¡Tardíos no seáis!'
  },
  {
    'id_hymn': 347,
    'order': 3,
    'type': 'STROPHE',
    'content': 'A los perdidos llevad salvación.\n¿No habéis sentido jamás tal pavor?\nLas ondas de ayes y de tentación\nvan pronto a llevarlos al negro terror.'
  },
  {
    'id_hymn': 347,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Es corto el tiempo en que se han de salvar;\npronto irán a la ruina eternal.\n¡Salid pues presto, y, sin vacilar,\nllevadles la cuerda de vida inmortal.'
  },
  {
    'id_hymn': 348,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Un llamado llega desde el turbio mar:\nDa la luz, da la luz;\nalmas hay quienes hay que rescatar;\nda la luz, da la luz.'
  },
  {
    'id_hymn': 348,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Da la luz del Evangelio fiel,\nhaz que brille por doquier;\nque la senda alumbre del infiel\ncon sus rayos de poder.'
  },
  {
    'id_hymn': 348,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Si este llamamiento quieres contestar,\nda la luz, da la luz.\nUna buena ofrenda debes tú de dar,\nda la luz, da la luz.'
  },
  {
    'id_hymn': 348,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Que la gracia abunde, pide en oración;\nda la luz, da la luz;\ny que Cristo reine en cada corazón,\nda la luz, da la luz.'
  },
  {
    'id_hymn': 348,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Nunca nos cansemos de esta gran labor;\nda la luz, da la luz.\nLlevaremos joyas para el Salvador,\nda la luz, da la luz.'
  },
  {
    'id_hymn': 349,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Marcharé en la divina luz,\nmarcharé, siempre marcharé;\nen las huellas del buen Jesús,\nsiempre marcharé.'
  },
  {
    'id_hymn': 349,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Vestido blanco yo tendré,\ncorona eterna ceñiré;\nfeliz allí podré gozar,\nen el Edén sin par.'
  },
  {
    'id_hymn': 349,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Marcharé con mi Guía fiel,\nmarcharé, siempre marcharé;\ntriunfaré por la fe en Él,\nsiempre marcharé.'
  },
  {
    'id_hymn': 349,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Marcharé almas a buscar,\nmarcharé, siempre marcharé;\nlos perdidos a rescatar,\nsiempre marcharé.'
  },
  {
    'id_hymn': 349,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Por Jesús, más que vencedor\nmarcharé, siempre marcharé;\nal hogar de mi Salvador,\nsiempre marcharé.'
  },
  {
    'id_hymn': 350,
    'order': 1,
    'type': 'STROPHE',
    'content': 'A los perdidos hay que buscarlos\ny a los errantes, llámalos ya;\nbusca a todos los extraviados,\nno esperes más, el tiempo se va.'
  },
  {
    'id_hymn': 350,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Pronto salid, sí, al perdido,\ny conducidlo con tierno amor.\nQue al redil, con fe arrepentido,\nentre siguiendo al amante Pastor.'
  },
  {
    'id_hymn': 350,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Maravilloso plan inefable\nhecho verdad por Cristo en la cruz;\nquien amoroso, tierno y amable\nsustituyónos mi buen Jesús.'
  },
  {
    'id_hymn': 350,
    'order': 3,
    'type': 'STROPHE',
    'content': 'A Cristo imita, es nuestro ejemplo,\nsigue sus pasos, lleva la luz;\npresenta a todos el Evangelio,\nla salvación obra en la cruz.'
  },
  {
    'id_hymn': 351,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cristo está buscando obreros hoy\nque quieran ir con él.\n¿Quién dirá: “Señor, contigo voy,\nyo quiero serte fiel”?'
  },
  {
    'id_hymn': 351,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Oh Señor!, es mucha tu labor,\ny obreros faltan ya;\ndanos luz, ardiente fe y valor,\ny obreros siempre habrá.'
  },
  {
    'id_hymn': 351,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cristo quiere mensajeros hoy\nque anuncien su verdad.\n¿Quién dirá: “Señor, yo listo estoy,\nharé tu voluntad”?'
  },
  {
    'id_hymn': 351,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Hay lugar si quieres trabajar\npor Cristo en su labor.\nPuedes de su gloria al mundo hablar,\nde su bondad y amor.'
  },
  {
    'id_hymn': 352,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Es el tiempo de la siega y tú sin vacilar,\ndeclarando con holgura\n“no hay que trabajar”,\nmientras tanto que el Maestro\nte vuelve a llamar:\n“¡Joven, joven, ven, trabaja ya!”'
  },
  {
    'id_hymn': 352,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Ven y ve los campos blancos, cómo están\naguardando manos que los segarán.\nJoven, ¡despierta!, hazlo pronto y alerta,\nsé el primero en decirle:“Heme aquí, Señor”\nPor doquier se inclina la madura mies,\nque las auras mueven, y ¡qué bella es!\nJoven, despierta!, hazlo pronto y alerta,\npocos días hay que restan para el segador.'
  },
  {
    'id_hymn': 352,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Las gavillas que recojas, joyas de esplendor,\nbrillarán en la corona que dará el Señor.\nBusca pronto eternas joyas,\nDios es premiador.\nJoven, joven, ven, trabaja ya.'
  },
  {
    'id_hymn': 352,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Va pasando la mañana, y nunca volverá,\npronto el tiempo de la siega aquí terminará,\nte hallarás al fin vacío ante tu Creador.\nJoven, joven, ven, trabaja ya.'
  },
  {
    'id_hymn': 353,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Oíd, oíd lo que nos manda el Salvador:\n“Marchad, marchad, y proclamad mi amor,\npues he aquí yo con vosotros estaré;\nlos días todos hasta el fin os guardaré”.'
  },
  {
    'id_hymn': 353,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Id, id por el mundo;\nid, id y predicar el evangelio;\nid, id, va adelante\nel Todopoderoso Salvador.\n¡Gloria, gloria, aleluya a Jesús!,\n¡gloria, gloria, aleluya a Jesús!,\nnuestras almas Él salvó,\nnuestras manchas Él lavó;\nproclamemos, pues, a todos su amor.'
  },
  {
    'id_hymn': 353,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Mirad, mirad la condición del pecador\n¡que triste es!, ¡que llena de dolor!\nSin luz, sin paz, camina a la eternidad,\ny no conoce el gran peligro en que está.'
  },
  {
    'id_hymn': 353,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Salid, salid, embajadores del Señor;\nbuscad, buscad al pobre pecador.\nAprovechad el tiempo que el Señor os da,\npues pronto el día de salud acabará.'
  },
  {
    'id_hymn': 353,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Pensad, pensad la hora presto llegará,\nJesús vendrá su reino a disfrutar.\nDe mar a mar habrá prosperidad y paz;\nsus alabanzas cantará la humanidad.'
  },
  {
    'id_hymn': 354,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Ama a tus prójimos, piensa en sus almas,\ndiles la historia de Cristo, el Señor;\ncuida del huérfano, hazte su amigo,\nCristo le es Padre y fiel Salvador.'
  },
  {
    'id_hymn': 354,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Salva al incrédulo, mira el peligro;\nDios le perdonará,Dios le amará.'
  },
  {
    'id_hymn': 354,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Aunque rechácenle, tiene paciencia\nhasta que puédales dar la salud.\nVenles los ángeles desde los cielos,\nvigilaránles con solicitud.'
  },
  {
    'id_hymn': 354,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Dentro del corazón, triste, abatido,\nobra el Espíritu transformador,\nque lo conducirá, arrepentido,\na Jesucristo su buen Redentor.'
  },
  {
    'id_hymn': 354,
    'order': 4,
    'type': 'STROPHE',
    'content': ' Salva a tus prójimos; Cristo te ayuda;\nfuerza de Dios será tuya en verdad.\nÉl te bendecirá en tus esfuerzos;\ncon Él disfrutarás la eternidad.'
  },
  {
    'id_hymn': 355,
    'order': 1,
    'type': 'STROPHE',
    'content': '¿Quién está por Cristo?\n¿Quién le servirá?\nA salvar a otros, ¿quién le ayudará?\n¿Quién, dejando el mundo, contra el error\nluchará por siempre al lado del Señor?'
  },
  {
    'id_hymn': 355,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Por su magna gracia,\nsu profundo amor,\nyo estoy por Cristo;\nes mi Rey, Señor.'
  },
  {
    'id_hymn': 355,
    'order': 2,
    'type': 'STROPHE',
    'content': 'No por la corona ni el galardón\nentro en esta lucha y alzo el pendón.\nPor los pecadores Cristo se entregó;\nen llevarlos a sus pies me gozo yo.'
  },
  {
    'id_hymn': 355,
    'order': 3,
    'type': 'STROPHE',
    'content': 'No con oro o plata Cristo nos compró,\nsino con la sangre que en la cruz vertió.\nLos que a Él acuden bendecidos son,\nlibertad reciben, limpio corazón.'
  },
  {
    'id_hymn': 355,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Rudo el conflicto sigue con Satán,\nmás lo venceremos: Cristo es capitán.\nSu verdad eterna es nuestro pabellón;\nsu presencia aviva todo corazón.'
  },
  {
    'id_hymn': 356,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Hay lugar en la amplia viña\npara todo labrador;\nven y ayuda en la campiña\ndel amante Salvador\nHoy esperan muchas almas\nla salud espiritual;\ndiles que Jesús las llama\na su reino celestial.'
  },
  {
    'id_hymn': 356,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Un lugar propicio quiero\ndonde pueda trabajar,\naunque humilde, yo prefiero\nir de Cristo a predicar;\ndar la luz de Cristo al mundo\nque se encuentra en perdición,\nha de ser celo profundo\nque domine el corazón.'
  },
  {
    'id_hymn': 356,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Quiero ser un buen maestro\ncomo fuera el Redentor;\ndar la Biblia al mundo entero,\ndonde encuentre salvación.\nA los que le han conocido\nJesucristo invita hoy\na salvar a los perdidos\npor los cuales Él murió.'
  },
  {
    'id_hymn': 356,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Con las huestes celestiales\nante el trono de Jesús\nhan de unirse los mortales\nredimidos por la cruz;\ny con gozo allá en la gloria\ncantaremos la canción\nde los triunfos y victorias\nque nos dieron redención.'
  },
  {
    'id_hymn': 357,
    'order': 1,
    'type': 'STROPHE',
    'content': ' ¡A los campos a segar,\nvedlos blancos, blancos ya!\n¡Idos allá! ¡Idos allá!\nTodo el día trabajad,\nsólo de Jesús hablad.\n¡Id a la mies, id, predicad!'
  },
  {
    'id_hymn': 357,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Id a la mies! ¡Id a la mies!\n¡Id a la mies! ¡Id a la mies!\nEl amor del Salvador\nos compele a la labor,\nsin demorar, id con valor.'
  },
  {
    'id_hymn': 357,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En el valle, monte o mar\nel Señor os manda ya\na cosechar. ¡Idos allá!\nLa cosecha almas son\nque Jesús quieres salvar.\nIdos allá, a cosechar.'
  },
  {
    'id_hymn': 357,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cantaremos con fervor\nel amor del Salvador;\nÉl nos mandó a su labor.\nPronto llegará el fin,\nsonará el gran clarín;\nÉl nos dará vida sin fin.'
  },
  {
    'id_hymn': 358,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Siembra temprano antes de amanecer;\nsiembra en el día a pesar del calor;\nsiembra en la tarde lo que ha de crecer,\naun en la noche persiste en amor.'
  },
  {
    'id_hymn': 358,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Siembra en la sombra y siembra\nen la luz,\ncon gran ahínco entre todo mortal,\nel resultado está con Jesús\ny su recompensa es vida eternal.'
  },
  {
    'id_hymn': 358,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Si la semilla entre piedras cayó\nel sol ardiente la marchitará;\no si el afán de este mundo privó,\nla mala hierba la ahogará.'
  },
  {
    'id_hymn': 358,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Mas la semilla que a tierra llegó\nbien abonada y con humedad,\nfruto abundantes a millares llevó,\ngran bendición a la humanidad.'
  },
  {
    'id_hymn': 358,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Aunque el dolor more en tu corazón,\nlágrimas cubran tus ojos de afán,\nsiembra confiado en que hay galardón;\ntodos los fieles corona tendrán.'
  },
  {
    'id_hymn': 359,
    'order': 1,
    'type': 'STROPHE',
    'content': 'No evadas tu deber si hay que trabajar;\ntrabajo hay por doquier\nJesús te quiere emplear.\nTe invita andar con Él y hacer su voluntad;\nsé obrero presto y fiel, trabaja con bondad.'
  },
  {
    'id_hymn': 359,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Ven, oh, ven; no te has de disculpar.\nVen, oh, ven; tú puedes trabajar.\nCon gozo y con placer las nuevas contarás;\nven listo a obedecer y luz recibirás.'
  },
  {
    'id_hymn': 359,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Jesús te llama hoy no le hagas esperar;\nresponde: “Listo estoy, iré sin vacilar.\nObrero quiero ser, tu viña he de labrar,\nentiendo mi deber, iré a predicar”.'
  },
  {
    'id_hymn': 359,
    'order': 3,
    'type': 'STROPHE',
    'content': 'No te disculpes, ven, reacio no has de estar,\nacude pronto, ven, lo puedes lamentar.\nLa gracia pasará, ¿por qué te has de perder?\nrenuncia al mundo ya y vida has de tener.'
  },
  {
    'id_hymn': 360,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Puedo oír tu voz llamando,\nsuavemente susurrando,\nque a mi alma está hablando:\n“Trae tu cruz y ven en pos de mí”.'
  },
  {
    'id_hymn': 360,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Seguiré do tú me guíes,\nseguiré do tú me guíes,\nseguiré do tú me guíes;\ndondequiera, fiel, te seguiré.'
  },
  {
    'id_hymn': 360,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Yo te seguiré en el huerto,\ny también por el desierto,\ny aun sediento y casi muerto\nsufriré contigo, mi Jesús.'
  },
  {
    'id_hymn': 360,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Sufriré por ti, Maestro.\nSi el camino es siniestro\ntú serás refugio nuestro;\nmoriré contigo, mi Jesús.'
  },
  {
    'id_hymn': 360,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Me darás la gracia y gloria\nde obtener la gran victoria,\ny contar la dulce historia;\nque por mí Jesús su vida dio.'
  },
  {
    'id_hymn': 361,
    'order': 1,
    'type': 'STROPHE',
    'content': 'A tu puerta Cristo está. Ábrele.\nSi le abres entrará. Ábrele.\nTu pecado quitará, luz y paz derramará,\nsu perdón te otorgará. Ábrele.'
  },
  {
    'id_hymn': 361,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Ábrele, oh pecador. Ábrele.\nAl amante Salvador, ábrele.\nHoy te ofrece salvación,\ndel pecado el perdón;\nsaciará tu corazón. Ábrele.'
  },
  {
    'id_hymn': 361,
    'order': 3,
    'type': 'STROPHE',
    'content': 'No le hagas esperar. Ábrele.\nNo le obligues a marchar. Ábrele.\n¡Qué dolor después tendrás,\ncuando en vano clamarás\ny perdido te hallarás! Ábrele.'
  },
  {
    'id_hymn': 362,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Con voz benigna te llama Jesús;\ninvitación de puro amor.\n¿por qué le dejas en vano llamar?\n¿sordo serás pecador?'
  },
  {
    'id_hymn': 362,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Llámate hoy, llámate hoy;\nhoy ven a Cristo y dile:\n“Mi alma te doy”.'
  },
  {
    'id_hymn': 362,
    'order': 2,
    'type': 'STROPHE',
    'content': 'A los cansados invita Jesús;\nÉl ve su afán, siente el dolor.\ntráele tu carga; te la quitará,\nte sostendrá tu Señor.'
  },
  {
    'id_hymn': 362,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Siempre aguardándote mira Jesús.\n¡Tanto esperar, con tanto amor!\n¡Ven, oh cargado, trayendo a sus pies\ntu tentación, tu dolor!'
  },
  {
    'id_hymn': 363,
    'order': 1,
    'type': 'STROPHE',
    'content': ' Hay vida en mirar a la santa cruz.\nDice Jesús: “Miradme a mí”.\nNada el mundo y sus glorias son;\ntesoros brillantes se ven allí.'
  },
  {
    'id_hymn': 363,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Oh mirad, pues hallaréis\nvida eterna allá en la cruz!\nSalvación recibiréis\nen el Redentor Jesús.'
  },
  {
    'id_hymn': 363,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Y cuando miré a mi Salvador,\ndulces sonrisas Él me dio;\nhoy del maligno soy vencedor,\nmirando a la cruz do Jesús murió.'
  },
  {
    'id_hymn': 363,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Mirando a la cruz, siempre confiaré\nen sus promesas y poder;\nnunca vencido del mal seré;\nel cielo me ayuda a obedecer.'
  },
  {
    'id_hymn': 364,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Tan triste y tan lejos de Dios me sentí\ny sin el perdón de Jesús;\nmas cuando su voz amorosa oí\ndiciendo: “Oh, ven a la luz”.'
  },
  {
    'id_hymn': 364,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Yo todo dejé para andar en la luz,\nno moro en tinieblas ya más;\nencuentro la paz en seguir a Jesús\ny vivo en la luz de su faz.'
  },
  {
    'id_hymn': 364,
    'order': 2,
    'type': 'STROPHE',
    'content': '¡Qué amigo tan dulce es el tierno Jesús!\n¡Tan lleno de paz y de amor!\nde todo este mundo es la fúlgida luz\nel nombre del buen Salvador.'
  },
  {
    'id_hymn': 364,
    'order': 3,
    'type': 'STROPHE',
    'content': 'De mi alma el anhelo por siempre será\nmás cerca vivir de la cruz,\ndo santo poder y pureza me da\nla sangre de Cristo Jesús.'
  },
  {
    'id_hymn': 364,
    'order': 4,
    'type': 'STROPHE',
    'content': '¡Oh!, ven a Jesús, infeliz pecador;\nno vagues a ciegas ya más.\nSí, ven a Jesús, tu benigno Señor,\nque en Él Salvación hallarás.'
  },
  {
    'id_hymn': 365,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Bienvenida da Jesús\nen los brazos de su amor\nal que en busca de la luz\nvague ciego y con temor.'
  },
  {
    'id_hymn': 365,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Volveremos a cantar:\n“Él recibe al pecador”.\nClaro hacedlo resonar:\n“Él recibe al pecador”.'
  },
  {
    'id_hymn': 365,
    'order': 2,
    'type': 'STROPHE',
    'content': 'A sus pies descansarás;\nejercita en Él tu fe;\nde tus males sanarás;\na Jesús, tu amigo, ve.'
  },
  {
    'id_hymn': 365,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Recibirte prometió,\ndate prisa en acudir;\nnecesitas como yo\nvida que Él te hará vivir.'
  },
  {
    'id_hymn': 366,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Ven, necesitado, débil,\npobre enfermo pecador.\nVen, Jesús salvarte quiere,\nlleno de piedad y amor.'
  },
  {
    'id_hymn': 366,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Busca tu salud en Cristo,\ncanta el nombre del Señor;\n¡salvación, honor y gloria\nreina Cristo, el Salvador!'
  },
  {
    'id_hymn': 366,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Todo pobre que ha venido\nglorifica su bondad,\nsi contrito y creyente\nbusca paz y santidad.'
  },
  {
    'id_hymn': 366,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Ven, cansado, agobiado,\nmalherido como estás;\nsi hasta ser perfecto tardas,\nnunca al Salvador irás.'
  },
  {
    'id_hymn': 367,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Preste oídos el humano\na la voz del Salvador,\nregocíjese el que siente\nel pecado abrumador.\nYa resuena el Evangelio\nde la tierra en la ancha faz\ny de gracia ofrece al hombre\nel perdón, consuelo y paz.'
  },
  {
    'id_hymn': 367,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Vengan cuantos se acongojan\npor lograr con qué vivir,\ny a su afán tan sólo rinden\nservidumbre hasta el morir.\nHay vestido más precioso,\nblanco, puro y eternal;\nes Jesús quien da a las almas\nese manto celestial.'
  },
  {
    'id_hymn': 367,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Vengan todos los que sufren,\nlos que sientan hambre y sed,\nlos que débiles se encuentran,\nde este mundo a la merced.\nEn Jesús hay pronto auxilio,\nhay hartura y bienestar;\nhay salud y fortaleza\ncual ninguno puede dar.'
  },
  {
    'id_hymn': 367,
    'order': 4,
    'type': 'STROPHE',
    'content': '¿Por qué en rumbo\nsiempre incierto\nvuestra vida recorréis?\nA Jesús venid, mortales,\nque muy cerca le tenéis.\nÉl es vida en cielo y tierra,\ny el exceso de su amor\nos mejora la presente\ny os reserva otra mejor.'
  },
  {
    'id_hymn': 368,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Un lugar Jesús te pide,\nábrele tu corazón;\nsé sincero, qué te impide;\nsolicita Él admisión.'
  },
  {
    'id_hymn': 368,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Es Jesús el Rey de gloria!\nOye pues su dulce voz.\nÉl te ofrece la victoria,\n¡es la misma voz de Dios!'
  },
  {
    'id_hymn': 368,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Los negocios y placeres\nsiempre hallan un lugar;\ntienes con Jesús deberes,\nhoy invítale a entrar.'
  },
  {
    'id_hymn': 368,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Un lugar Jesús te pide;\nle rechazas sin razón\ny si hoy tú le despides\n¿crees que tendrás perdón?'
  },
  {
    'id_hymn': 368,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Pronto el tiempo habrá pasado,\nda a Jesús hoy su lugar;\nque si frío has quedado,\nmucho habrás de lamentar.'
  },
  {
    'id_hymn': 369,
    'order': 1,
    'type': 'STROPHE',
    'content': '¿De Jesús no escuchas\ntierno llamamiento:\n“Ven a mí, pecador”?\nQuiere darte su perdón,\npaz y contento; ven a Él, pecador.'
  },
  {
    'id_hymn': 369,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Te llama con un tierno acento,\ntu vida quiere redimir; oye del Señor\nel tierno llamamiento:\n“Ven a mí, ven a mí”.'
  },
  {
    'id_hymn': 369,
    'order': 2,
    'type': 'STROPHE',
    'content': 'De tus penas pronto\npuedes olvidarte, ven a Él, ven a Él;\nporque de ellas Cristo\npuede alivio darte, ven a Él, ven a Él.'
  },
  {
    'id_hymn': 369,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Sólo Él puede pleno\ngozo concederte, ven a Él, ven a Él;\nen odiosa cruz por\nello vio la muerte, ven a Él, ven a Él.'
  },
  {
    'id_hymn': 369,
    'order': 4,
    'type': 'STROPHE',
    'content': 'No su voz de amor\nescuches con desprecio, ven a Él, ven a Él;\npor tu Salvación\npagó divino precio, ven a Él, ven a Él.'
  },
  {
    'id_hymn': 370,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Venid a mí los tristes,\ncansados de pecar;\nrefugio os ofrezco,\nvenid a descansar.'
  },
  {
    'id_hymn': 370,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Venid, venid a mí, cansados de pecar;\nvenid, venid a mí, venid a descansar.'
  },
  {
    'id_hymn': 370,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Venid a mí, cansados,\nmi voz hoy escuchad,\ny así seréis librados\nde toda iniquidad.'
  },
  {
    'id_hymn': 370,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Venid a mí, cansados,\nos dice el Salvador;\npor valles y montañas\nos busca el buen pastor.'
  },
  {
    'id_hymn': 370,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Venid a mí, cansados.\n¿Por qué queréis vagar?\nA vuestro Padre amante\nvenid sin esperar.'
  },
  {
    'id_hymn': 371,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Si feliz quieres ser, ven a Cristo.\nCuando tengas tristeza y dolor\nhallarás a Jesús siempre listo\npara darte consuelo y amor.'
  },
  {
    'id_hymn': 371,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Si feliz quieres ser, ven a Cristo\ny dichosa tu alma será;\nque siguiendo al valiente caudillo,\nsiempre, siempre del mal triunfarás.'
  },
  {
    'id_hymn': 371,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Si feliz quieres ser, ven a Cristo.\nNi la muerte que infunde terror\ncausará leve espanto a tu alma,\nsi ilumina tu senda el Señor.'
  },
  {
    'id_hymn': 371,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Si feliz quieres ser, ven a Cristo\ny reposo bendito hallarás;\n¡Oh!, cuán dulce es la voz que te llama:\nVen, si quieres la dicha gozar.'
  },
  {
    'id_hymn': 372,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Todos los que tengan sed\nbeberán, beberán.\nVengan cuantos pobres hay;\ncomerán, comerán.\nNo malgasten el haber;\ncompren verdadero pan.\nSi a Jesús acuden hoy,\ngozarán, gozarán.'
  },
  {
    'id_hymn': 372,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Si le prestan atención,\nles dará, les dará,\nparte en su pactado bien,\neternal, eternal,\ncon el místico David,\nRey, Maestro, capitán\nde las huestes que al Edén\nllevará, llevará.'
  },
  {
    'id_hymn': 372,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Como baja bienhechor,\nsin volver, sin volver,\nriego que las nubes dan,\nha de ser, ha de ser\nla Palabra del Señor,\nproductivo, pleno bien;\nvencedora al fin será\npor la fe, por la fe.'
  },
  {
    'id_hymn': 373,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cristo, el Pastor divino,\nllámate sin cesar:\n“Entra al redil seguro,\ndonde podrás reposar”.\nVen cuando tienes la fuerza,\nven en tu juventud;\nentra al seguro regazo,\ndonde hallarás la salud.'
  },
  {
    'id_hymn': 373,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Con tierno amor te invita el Señor:\n“Ven, peregrino, oh, ven sin temor”;\nven, que aguarda al más vil pecador\nCristo, el divino Pastor.'
  },
  {
    'id_hymn': 373,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cristo, el Pastor divino,\nquiso morir por ti.\nLlámate con ternura:\n“Ven, alma errante, a mí.\nVen, pues es grande el peligro,\nven”, dice el buen Pastor,\n“Ven al seguro regazo,\ndonde hallarás el amor”.'
  },
  {
    'id_hymn': 373,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Grande es el peligro,\npues cual león feroz\nbusca el enemigo\ndarte una muerte atroz.\nCristo, el divino Maestro,\nllámate sin cesar:\n“Entra al seguro regazo,\ndonde podrás reposar”.'
  },
  {
    'id_hymn': 374,
    'order': 1,
    'type': 'STROPHE',
    'content': 'En extraña tierra, pecador infiel,\nvoz de amor te llama: ¡Ven, hijo, ven!'
  },
  {
    'id_hymn': 374,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Bienvenido vuelve, vuelve al hogar;\nbasta, oh pródigo, de errar;\n¡ven, hijo, ven!'
  },
  {
    'id_hymn': 374,
    'order': 2,
    'type': 'STROPHE',
    'content': 'De la estéril tierra llena de pavor,\na mi amor paterno ¡ven, hijo, ven!'
  },
  {
    'id_hymn': 374,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Ve la puerta abierta. Eres mi hijo aún.\nCon amor te miro. ¡Ven, hijo, ven!'
  },
  {
    'id_hymn': 374,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Has errado lejos. ¿Quieres persistir?\nTodo te perdono. ¡Ven, hijo, ven!'
  },
  {
    'id_hymn': 375,
    'order': 1,
    'type': 'STROPHE',
    'content': 'A aquel que quiera llama al Señor;\nsu voz hoy le invita con tan tierno amor.\nTriste caminante, ven hoy a su hogar,\nno le hagas esperar.'
  },
  {
    'id_hymn': 375,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Todo aquel que cree puede ya venir,\nsu llamado amoroso puede oír.\nOye, Él te invita con gran emoción,\nven y préstale atención.'
  },
  {
    'id_hymn': 375,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Hoy te es preciso oír su voz,\nno demores, ven, que es la voz de Dios.\nSigue el camino: Cristo el Buen Jesús;\nToma en pos de Él tu cruz.'
  },
  {
    'id_hymn': 375,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Todo aquel que escuche puede anunciar,\ncada día y noche y sin descansar,\nlas alegres nuevas de su gran bondad;\nde su amor y santidad.'
  },
  {
    'id_hymn': 376,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Por mí intercede Jesús en los cielos,\nJesús, el amante y benigno Señor;\ny vela mis pasos con tierno cuidado;\n¿no quieres tu vida rendir a su amor?'
  },
  {
    'id_hymn': 376,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Oramos por ti, sí, oramos por ti;\nhoy por ti suplicamos, oramos por ti.'
  },
  {
    'id_hymn': 376,
    'order': 2,
    'type': 'STROPHE',
    'content': 'El Padre en los cielos daráme morada;\ndaráme la vida sin fin, eternal.\n¿aceptas su amante y tierno llamado?\n¿No quieres gozar de su amor paternal?'
  },
  {
    'id_hymn': 376,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Ropaje lavado en la sangre de Cristo\nhabré de vestir en aquel bello hogar;\npodrás tú tenerlo, brillante y glorioso,\nsi hoy en la fuente te quieres lavar.'
  },
  {
    'id_hymn': 376,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Paz tengo cual río que corre tranquilo,\nla paz que este mundo no puede quitar;\nJesús la concede y a ti te la ofrece.\nSu gracia divina, ¿querrás aceptar?'
  },
  {
    'id_hymn': 377,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Oh alma transida y cargada,\nSi oscura tu senda se ve,\nhay luz al fijar tu mirada\nen quien te imparte la fe.'
  },
  {
    'id_hymn': 377,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Pon tus ojos en Cristo,\nContempla su rostro de amor,\ny en tu corazón brillará el fulgor\nde la gloria del Buen Redentor.'
  },
  {
    'id_hymn': 377,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Te libra del yugo del vicio,\nte da el poder de vencer;\npor ti intercede en el juicio\nsalvándote de perecer.'
  },
  {
    'id_hymn': 377,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Ten fe en su santa promesa:\n“Contigo yo siempre estaré”;\ndelante del mundo confiesa:\n“En Cristo la paz encontré”.'
  },
  {
    'id_hymn': 378,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Si tú cansado ya estás de pecar,\nacepta el perdón de Jesús;\nsi vida nueva quisieres hallar,\nacepta el perdón de Jesús.'
  },
  {
    'id_hymn': 378,
    'order': 2,
    'type': 'CHORUS',
    'content': 'No más pecar, ven a Él,\nsu amor te muestra en la cruz;\nes tiempo, no seas infiel,\nacepta el perdón de Jesús.'
  },
  {
    'id_hymn': 378,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Si vida pura tú quieres tener,\nacepta el perdón de Jesús;\nÉl es la fuente que limpia tu ser,\nacepta el perdón de Jesús.'
  },
  {
    'id_hymn': 378,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Si tú no puedes tus luchas calmar,\nacepta el perdón de Jesús;\nsi tus anhelos no puedes colmar,\nacepta el perdón de Jesús.'
  },
  {
    'id_hymn': 378,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Si con los santos te quieren unir,\nacepta el perdón de Jesús;\ny si a los cielos aspiras a ir,\nacepta el perdón de Jesús.'
  },
  {
    'id_hymn': 379,
    'order': 1,
    'type': 'STROPHE',
    'content': '“Dame tu corazón”, dice el Señor.\nDon tan precioso será para Él.\nOye, te dice con su gran amor:\n“Donde te encuentres presérvate fiel”.'
  },
  {
    'id_hymn': 379,
    'order': 2,
    'type': 'CHORUS',
    'content': '“Dame tu amor, dame tu amor”,\nmuy quedamente te pide el Señor.\n“Ven sin tardar, oh, ven tú como estás”,\nte llama, ¿lo oyes? Pues, no tardes más.'
  },
  {
    'id_hymn': 379,
    'order': 2,
    'type': 'STROPHE',
    'content': 'El Santo Espíritu con gran clamor\nruega le entregues hoy tu corazón.\nRinde tu alma, sí, dale al Señor,\ngracia te ofrece también el perdón.'
  },
  {
    'id_hymn': 379,
    'order': 3,
    'type': 'STROPHE',
    'content': '“Tu corazón dame, dámelo hoy”,\nmuy tiernamente te pide el Señor.\n¿No le respondes: “Señor, aquí estoy,\nte pertenezco mi buen Salvador”?'
  },
  {
    'id_hymn': 380,
    'order': 1,
    'type': 'STROPHE',
    'content': 'A Jesucristo ven sin tardar,\nque entre nosotros hoy Él está;\ny te convida con dulce afán,\ntierno diciendo: “Ven”.'
  },
  {
    'id_hymn': 380,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Oh, cuán grata nuestra reunión,\ncuando allá, Señor en tu mansión,\ncontigo estemos en comunión\ngozando eterno bien!'
  },
  {
    'id_hymn': 380,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Piensa que Él sólo puede colmar\ntu triste pecho de gozo y paz;\ny porque anhela tu bienestar,\nvuelve a decirte: “Ven”.'
  },
  {
    'id_hymn': 380,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Su voz escucha sin vacilar,\ny grato acepta lo que hoy te da.\nTal vez mañana no habrá lugar.\nNo te detengas; ven.'
  },
  {
    'id_hymn': 381,
    'order': 1,
    'type': 'STROPHE',
    'content': '¿Temes que en la lucha no podrás vencer?,\n¿Qué con las tinieblas has de contender?\nAbre pues la puerta de tu corazón\ndeja al Salvador entrar.'
  },
  {
    'id_hymn': 381,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Deja al Salvador entrar,\ndeja al Salvador entrar;\nabre pues la puerta de tu corazón\ny entrará el Salvador.'
  },
  {
    'id_hymn': 381,
    'order': 2,
    'type': 'STROPHE',
    'content': '¿Es tu fe muy débil en la oscuridad?\n¿Son tus fuerzas pocas contra la maldad?\nAbre pues la puerta de tu corazón,\ndeja al Salvador entrar.'
  },
  {
    'id_hymn': 381,
    'order': 3,
    'type': 'STROPHE',
    'content': '¿Quieres ir gozándote en la senda aquí?\n¿Quieres que el Señor te utilice a ti?\nAbre pues la puerta de tu corazón,\ndeja al Salvador entrar.'
  },
  {
    'id_hymn': 382,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Francas las puertas encontrarán,\nunos sí, otros no;\nde alguien las glorias sin fin serán.\n¿Y tú?, ¿y yo? ¿Y tú?, ¿y yo?\nCalles de oro, mar de cristal,\npleno reposo, perfecto amor.\nUnos tendrán celestial hogar:\n¿Y tú?, ¿y yo? ¿Y tú?, ¿y yo?'
  },
  {
    'id_hymn': 382,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Fieles discípulos de Jesús,\nunos sí, otros no,\nlogran corona en vez de cruz.\n¿Y tú?, ¿y yo? ¿Y tú?, ¿y yo?\nMora el rey en gloriosa luz,\ncon Él no puede haber dolor,\nde alguien es esta beatitud:\n¿Y tú?, ¿y yo? ¿Y tú?, ¿y yo?'
  },
  {
    'id_hymn': 382,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Llegan a tiempo pasando bien,\nunos sí, otros no;\néstos las puertas cerradas ven.\n¿Y tú?, ¿y yo? ¿Y tú?, ¿y yo?\nCiegos y sordos hoy nada creen,\ntarde sabrán de su grande error,\nel que desdeñan será su juez:\n¿Y tú?, ¿y yo? ¿Y tú?, ¿y yo?'
  },
  {
    'id_hymn': 382,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Son herederos del porvenir,\nunos sí, otros no;\nlos que procuran por Dios vivir.\n¿Y tú?, ¿y yo? ¿Y tú?, ¿y yo?\nCuando concluya la dura lid,\nEn compañía del Salvador\nAlguien será sin cesar feliz:\n¿Y tú?, ¿y yo? ¿Y tú?, ¿y yo?'
  },
  {
    'id_hymn': 383,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Dios al pródigo llama que venga sin tardar;\noye pues su voz que hoy te llama a ti.\nAunque lejos vagabas del paternal hogar,\namoroso llámate aún.'
  },
  {
    'id_hymn': 383,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Llámate hoy a ti, cansado pródigo, ven;\nllámate hoy a ti, cansado pródigo, ven.'
  },
  {
    'id_hymn': 383,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Tierno, amante, paciente\ntu Padre implora aún;\noye pues su voz que hoy te llama a ti.\nVuelve mientras abogue por ti el Espíritu;\namoroso llámate aún.'
  },
  {
    'id_hymn': 383,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Ven, recibe el abrazo del Padre celestial;\noye pues su vozque hoy te llama a ti.\nEntra alegre al banquete que brinda sin igual;\namoroso llámate aún.'
  },
  {
    'id_hymn': 384,
    'order': 1,
    'type': 'STROPHE',
    'content': 'A tu puerta Cristo está y le podrás oír decir:\n“Hijo, ábreme, te quiero conducir”.\nNo le dejes que se marche,\nluego te arrepentirás,\npuede no volver a hablarte nunca más.'
  },
  {
    'id_hymn': 384,
    'order': 2,
    'type': 'CHORUS',
    'content': '¿Le abrirás? ¿Le abrirás?\nNo le dejes que se marche, ¿le abrirás?\nEs el dulce caminante\nque te ofrece Salvación,\nno rechaces ni un instante su perdón.'
  },
  {
    'id_hymn': 384,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Oh, bendita comunión\nque junto a Dios me hace sentir;\na Él di mi corazón y mi existir.\nÉl me dio perdón y me aceptó\nasí tal como soy,\ndesde entonces junto a Él muy cerca estoy.'
  },
  {
    'id_hymn': 384,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Alma, es el huésped más\namado, ábrele no más.\nNo rechaces su llamado. No podrás.\nCon amor la paz te ofrece,\nnunca te arrepentirás.\nOye alma: Obedece ¿le abrirás?'
  },
  {
    'id_hymn': 384,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Despedirte has del mundo\nhoy, con todo tu valor,\nCristo a cambio sus riquezas te dará.\nLe dirás: “Te pertenezco\ny te amo con fervor”,\ny tu alma, con su paz, inundará.'
  },
  {
    'id_hymn': 385,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cuando llegue el momento de tu decisión\nno lo dejes por alto pasar;\nsi lo haces, estás en peligro mortal.\n¿Has pensado lo que puede costar?'
  },
  {
    'id_hymn': 385,
    'order': 2,
    'type': 'CHORUS',
    'content': 'El pecado te hace tu alma perder.\nAunque el mundo se postre a tus pies,\npuede ser que la puerta cerrándose esté.\n¿Has pensado lo que puede costar?'
  },
  {
    'id_hymn': 385,
    'order': 2,
    'type': 'STROPHE',
    'content': 'La inmortal dicha tú puedes sacrificar\npor andar en la senda del mal;\nsi al Espíritu ahogas, te puedes perder\n¿Has pensado lo que te ha de costar?'
  },
  {
    'id_hymn': 385,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Él te llama aún en su grande amor,\ntodavía te invita a entrar.\n¿No te dejas salvar? ¿No le dices: ya voy?\n¿Has contado lo que puede costar”?'
  },
  {
    'id_hymn': 386,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Llama hoy a mi corazón\nCristo mi Señor,\n¿y le rechazaré sin razón?\n¡Oh, no! ¡No, por favor!\nHay dolor en mi corazón;\nen mí sólo hay oscuridad,\npero Él me ofrece perdón,\nme da seguridad.'
  },
  {
    'id_hymn': 386,
    'order': 2,
    'type': 'STROPHE',
    'content': '¿Le responderé con amor?\n¿Dejaréle entrar?\n¿Aceptaré de Él su favor?\n¿Me dejaré enseñar?\nSu infinito amor me da,\nme regala también perdón\ny de Él nunca me apartará;\nes de Él mi corazón.'
  },
  {
    'id_hymn': 386,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Ya está abierto mi corazón,\nentra, mi Señor.\nEres de mi vida la razón,\nbendito Salvador.\nBienvenida yo te daré\namantísimo Rey y Señor;\nnunca más rechazarte podré,\nEterno Redentor.'
  },
  {
    'id_hymn': 387,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Busca a Dios, está presente,\nora a Él, cercano está.\nVen a Él cual penitente,\ntus caminos cambiará.\nÉl se apiada del indigno,\nal contrito sanará;\nsi regresas, Él benigno,\ntus maldades limpiará.'
  },
  {
    'id_hymn': 387,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Como el cielo es más alto\nque la tierra y el mar,\nes también el pensamiento\ndel Señor y su actuar.\nCual la lluvia que del cielo\ncae y obra su labor,\nsu palabra es consuelo,\nnos anima y da valor.'
  },
  {
    'id_hymn': 387,
    'order': 3,
    'type': 'STROPHE',
    'content': '“La palabra que os envío\ncon su fruto volverá;\nno caerá en el vacío,\ngozo y paz impartirá”.\nIsaías, cuán cercano\nse encontraba del Señor,\npor Jesús fue inspirado\na mostrar: “Dios es amor”.'
  },
  {
    'id_hymn': 388,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Ven a la fuente de vida,\nven al amante Jesús;\npaz y perdón te ofrece.\nVen, pues, al pie de la cruz.'
  },
  {
    'id_hymn': 388,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Ven a Jesús, ven a Jesús,\nven a los pies de la cruz sin tardar;\npaz y perdón te ofrece.\nVen, no le dejes pasar.'
  },
  {
    'id_hymn': 388,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Ven al Señor, ven ahora,\nconsuelo y paz hallarás;\nvida de gozo y de calma\nen tu Maestro tendrás.'
  },
  {
    'id_hymn': 388,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Tal como estás, ven ahora,\ntráele tu carga a Él;\noye su voz que te implora;\nCristo Jesús siempre es fiel.'
  },
  {
    'id_hymn': 388,
    'order': 4,
    'type': 'STROPHE',
    'content': ' ¡Oh, cuán preciosa promesa\nte hace tu buen Salvador!\nVida tendrás para siempre\njunto a tu Dios y Señor.'
  },
  {
    'id_hymn': 389,
    'order': 1,
    'type': 'STROPHE',
    'content': 'A tu puerta Cristo vela, ¿no le abrirás?\nÉl paciente te espera, ¡ábrele no más\nCuántas veces Él te llama:\n“Abre pronto, ya!”.\nTe dirá Él que te ama; Tú, ¿qué le dirás?'
  },
  {
    'id_hymn': 389,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Es tu amigo fiel y amante, siente tu dolor;\nno te deja ni un instante, Él te brinda amor.\nIrte puedes de momento,\nponte en paz con Él.\nNo prolongues tu tormento,\npuedes serle fiel.'
  },
  {
    'id_hymn': 389,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Vanidad, rencor, pecado\ndeja ahora atrás;\ncuando el tiempo habrá acabado,\nmuy feliz serás.\nHaz de ser llamado a juicio,\n¿qué responderás?\n¿“Encontré perdón en Cristo”?\nÉl te salvará.'
  },
  {
    'id_hymn': 390,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Del trono celestial\nal mundo descendí,\nsed y hambre padecí\ncual mísero mortal.\nY todo fue por ti, por ti.\n¿Qué has hecho tú por mí?\nY todo fue por ti, por ti.\n¿Qué has hecho tú por mí?'
  },
  {
    'id_hymn': 390,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Por darte la salud\nsufrí, callé, morí;\ntu sustituto fui\nen dura esclavitud.\nY todo fue por ti, por ti.\n¿Qué has hecho tú por mí?\nY todo fue por ti, por ti.\n¿Qué has hecho tú por mí?'
  },
  {
    'id_hymn': 390,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Del Padre celestial,\ncompleta bendición;\neterna salvación,\ndelicia perennal\nte doy de gracia a ti, a ti.\n¿Y huyes tú de mí?\nTe doy de gracia a ti, a ti.\n¿Y huyes tú de mí?'
  },
  {
    'id_hymn': 391,
    'order': 1,
    'type': 'STROPHE',
    'content': '“Yo estoy a la puerta y llamo,\nábreme, quiero entrar.\nQuiero darte bendiciones,\ny contigo allí cenar”.'
  },
  {
    'id_hymn': 391,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Te llama hoy el buen Jesús!\n¿Escuchas su dulce voz?\nÁbrele hoy tu corazón,\nÉl te dará paz y perdón.'
  },
  {
    'id_hymn': 391,
    'order': 2,
    'type': 'STROPHE',
    'content': 'No vaciles, la vida pasa\ncomo nubes que se van.\nComo flor que se marchita,\nes tu vida de afán.'
  },
  {
    'id_hymn': 391,
    'order': 3,
    'type': 'STROPHE',
    'content': '“Pecador, ¿Por qué tardas tanto\nen abrir tu corazón?\n¿Por qué quieres tú perderte\ny desprecias mi perdón?”.'
  },
  {
    'id_hymn': 391,
    'order': 4,
    'type': 'STROPHE',
    'content': '“Ven a mí, hoy te recibo,\ncomo hijo, en verdad.\nCon mi sangre serás limpio,\nperdonada tu maldad’’.'
  },
  {
    'id_hymn': 392,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Mi mano ten, Señor;\nme siento débil:\nsin ti no puedo riesgos afrontar;\ntenla Señor; mi vida el gozo llene\nde verme libre así de todo azar.'
  },
  {
    'id_hymn': 392,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Mi mano ten;\npermite que me animen\nmi regocijo, mi esperanza en ti;\ntenla Señor, y compasivo impide\nque caiga en mal cual una vez caí.'
  },
  {
    'id_hymn': 392,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Mi mano ten; mi senda es tenebrosa\nsi no la alumbra tu radiante faz;\npor fe si alcanzo a percibir tu gloria,\n¡cuán grande gozo!,\n¡cuán profunda paz!'
  },
  {
    'id_hymn': 393,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Hay una fuente sin igual,\nla sangre de Emanuel,\nen donde lava cada cual\nlas manchas que hay en él,\nlas manchas que hay en él,\nlas manchas que hay en él;\nen donde lava cada cual\nlas manchas que hay en él.'
  },
  {
    'id_hymn': 393,
    'order': 2,
    'type': 'STROPHE',
    'content': 'El malhechor se convirtió\nmuriendo en una cruz,\nal ver la sangre que vertió\nsin culpa el buen Jesús,\nsin culpa el buen Jesús,\nsin culpa el buen Jesús;\nal ver la sangre que vertió\nsin culpa el buen Jesús.'
  },
  {
    'id_hymn': 393,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Y yo también, cuan malo soy,\nlavarme allí podré;\nen tanto que en el mundo estoy\nsu gloria cantaré,\nsu gloria cantaré,\nsu gloria cantaré;\nen tanto que en el mundo estoy\nsu gloria cantaré.'
  },
  {
    'id_hymn': 393,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Tu sangre nunca perderá,\noh, Cristo su poder,\ny sólo en ella así podrá\ntu iglesia salva ser,\ntu iglesia salva ser,\ntu iglesia salva ser;\ny sólo en ella así podrá\ntu iglesia salva ser.'
  },
  {
    'id_hymn': 393,
    'order': 5,
    'type': 'STROPHE',
    'content': 'Desde que aquella fuente vi,\nmi tema sólo fue\ntu compasivo amor, y así\ncantando moriré,\ncantando moriré,\ncantando moriré;\ntu compasivo amor, y así\ncantando moriré.'
  },
  {
    'id_hymn': 393,
    'order': 6,
    'type': 'STROPHE',
    'content': 'Y cuando del sepulcro ya\nResucitado esté,\ncanción más noble y dulce allá\nen gloria entonaré,\nen gloria entonaré,\nen gloria entonaré;\ncanción más noble y dulce allá\nen gloria entonaré.'
  },
  {
    'id_hymn': 394,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Anhelo ser limpio y completo, Jesús;\nque mores en mi alma en tu fúlgida luz.\nMis ídolos rompe, los que antes amé.\n¡Oh!, lávame y blanco cual nieve seré.'
  },
  {
    'id_hymn': 394,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Que sólo así\nser limpio podré\n¡Oh lávame tu,\ny cual nieve seré!'
  },
  {
    'id_hymn': 394,
    'order': 2,
    'type': 'STROPHE',
    'content': '¡Oh, mírame desde tu trono de amor!\nHaz mi sacrificio completo, Señor.\nTe quiero rendir cuanto soy cuanto sé.\nPues lávame y blanco cual nieve seré.'
  },
  {
    'id_hymn': 394,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Jesús, te suplico, postrado a tus pies,\ntu propia, perfecta justicia me des.\nTu sangre expiatoria, la veo por fe.\n¡Oh!, lávame y blanco cual nieve seré.'
  },
  {
    'id_hymn': 394,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Ve cómo paciente te espero aquí.\nUn corazón nuevo pon dentro de mí.\nJamás diste “No” al que a tu amparo fue.\nPues lávame y blanco cual nieve seré.'
  },
  {
    'id_hymn': 395,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Un hombre llegóse de noche a Jesús,\nbuscando la senda de vida y luz;\nmas Cristo le dijo: “Si a Dios quieres ver,\ntendrás que renacer”.'
  },
  {
    'id_hymn': 395,
    'order': 2,
    'type': 'CHORUS',
    'content': '“Tendrás que renacer,\ntendrás que renacer;\nde cierto, de cierto te digo a ti:\ntendrás que renacer”.'
  },
  {
    'id_hymn': 395,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Y tú, si en el cielo quisieres entrar\ny con los benditos allí descansar;\nsi vida eterna quisieres tener,\ntendrás que renacer.'
  },
  {
    'id_hymn': 395,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Amigo, no debes, jamás desechar\npalabras que Cristo dignóse hablar;\ny si tú no quieres el alma perder,\ntendrás que renacer.'
  },
  {
    'id_hymn': 395,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Hay quienes Jesús ha de resucitar,\nlos cuales querrás aquel día encontrar;\npues este mensaje hoy debes creer:\n“Tendrás que renacer”.'
  },
  {
    'id_hymn': 396,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Nada sabía del gratuito don,\nmas en su gracia llamóme el Señor;\nlibre de orgullo y presunción\nacudo a mi Cristo, el Salvador.'
  },
  {
    'id_hymn': 396,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Hoy por su sangre salvo soy,\nsalvo por gracia vivo hoy;\nesta es mi historia, a Dios sea gloria,\nque sólo por gracia salvo soy.'
  },
  {
    'id_hymn': 396,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Triste y dolido en mi corazón,\ncual pobre errante vagaba sin Dios,\nmas Él hallóme y guióme a Sión.\n¡Qué grato es seguir de Él en pos!'
  },
  {
    'id_hymn': 396,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Lejos del Padre en gran confusión\nincontenible mi llanto vertí,\nmas vino Cristo a mi corazón,\nlavóme en su sangre carmesí.'
  },
  {
    'id_hymn': 396,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Compadecióse de mí, pecador;\nhoy es mi gozo contar del Señor.\nObedeciendo a mi Salvador.\ncamino la senda de su amor.'
  },
  {
    'id_hymn': 397,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Una es, Señor, mi petición,\nPues en mi senda infiel erré:\nsea por agua o en crisol,\n¡oh límpiame!, ¡oh límpiame!'
  },
  {
    'id_hymn': 397,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Oh límpiame de mi maldad,\nen tu crisol, si he menester!\nNo importa el medio, oh Señor.\n¡oh, límpiame!, ¡oh, límpiame!'
  },
  {
    'id_hymn': 397,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Si al alma das más luz, tu don\nagradecido cantaré;\npero de un puro corazón\nmás gozaré, más gozaré.'
  },
  {
    'id_hymn': 397,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Sólo en el limpio corazón\npodrá tu faz resplandecer\ny ser completa la visión\nde tu poder, de tu poder.'
  },
  {
    'id_hymn': 397,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Quiero mi senda enderezar,\nlibre del mal ser quiero hoy;\nmás para mí vano es luchar,\nindigno soy, indigno soy.'
  },
  {
    'id_hymn': 398,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Te ruego, oh Dios: ¡Escúchame a mí! ,\n¡ven, gran Libertador!,\npues agobiado, anhelo ir a ti.\n¡Ven, gran Libertador!'
  },
  {
    'id_hymn': 398,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Por frígidas montañas yo vagué,\nmuy lejos de mi buen Pastor.\n¡oh, sálvame y llévame al redil,\nven, gran Libertador!'
  },
  {
    'id_hymn': 398,
    'order': 2,
    'type': 'STROPHE',
    'content': 'No puedo abrigo en\nnoche oscura hallar,\n¡ven, gran Libertador!,\nmas luz y vida tú me puedes dar,\n¡ven, gran Libertador!'
  },
  {
    'id_hymn': 398,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Atormentado, sin descanso y paz,\n¡ven, gran Libertador!,\nlos ojos alzo a tu benigna faz,\n¡ven, gran libertador!'
  },
  {
    'id_hymn': 398,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Mi voz contrita tú no desoirás,\n¡ven, gran Libertador!,\nmi humilde ruego pronto atenderás,\n¡ven, gran Libertador!'
  },
  {
    'id_hymn': 399,
    'order': 1,
    'type': 'STROPHE',
    'content': ' Oh, dulce Salvador,\nte ruego, ven a mí;\nmi eterno bienhechor,\nseguro estoy en ti.'
  },
  {
    'id_hymn': 399,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Oh, ven a mí mi Redentor\ny hazme ser un vencedor,\nlava en tu sangre mi ser\ny cual blanca nieve he de ser.\nMe lavarás, me limpiarás,\ncomo nieve me blanquearás;\nblanquísimo me dejarás.'
  },
  {
    'id_hymn': 399,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Gracias a tu poder\nborraste mi pecar;\ntransforma ya mi ser,\ncontigo pueda andar.'
  },
  {
    'id_hymn': 399,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Reina en mí, Jesús,\natráeme a ti;\nque tome yo mi cruz,\ntu senda siga, sí.'
  },
  {
    'id_hymn': 400,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Oh, Maestro y Salvador,\nno me dejas desmayar!,\nen tu gracia y en tu amor\nsólo fío sin cesar,\nsólo fío sin cesar.'
  },
  {
    'id_hymn': 400,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Pobre y débil sé que soy,\nlo confieso, mi Señor.\nA tus pies rendido estoy,\ndame fuerza y valor,\ndame fuerza y valor.'
  },
  {
    'id_hymn': 400,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Dime tú lo que he de ser,\nlas palabras que he de hablar,\nlo que siempre debo hacer\nmientras voy hacia el hogar,\nmientras voy hacia el hogar.'
  },
  {
    'id_hymn': 400,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Sólo así feliz seré\nen mi vida espiritual;\nsólo así morar podré\nen la patria celestial,\nen la patria celestial.'
  },
  {
    'id_hymn': 401,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Me levantaré e iré a mi Padre,\nfrío no tendré, me vestirá.\nLejos caminé, quemé lo que recibí;\nmi conciencia no tiene paz.'
  },
  {
    'id_hymn': 401,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Gozo, gozo siente mi corazón\nporque el Padre\nme otorga hoy su perdón.'
  },
  {
    'id_hymn': 401,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Me levantaré e iré a mi Padre\ny confesaré que yo pequé.\nNo quiero gastar, lo que con tanto dolor\nhas ganado tú para mí.'
  },
  {
    'id_hymn': 401,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Me levantaré e iré a mi Padre\ny regresaré hoy a mi hogar.\n¡Qué felicidad, estar en casa otra vez\ny su abrazo poder sentir!'
  },
  {
    'id_hymn': 402,
    'order': 1,
    'type': 'STROPHE',
    'content': ' ¡Oh mi Dios!, yo soy un vil,\nmiserable pecador,\nhe faltado veces mil\na tu santa ley, Señor;\nyo, tus sendas olvidé\ny tu amor no aprecié.'
  },
  {
    'id_hymn': 402,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En mi alma no hay verdad,\ny mi pobre corazón,\npor su grande iniquidad\nlleno está de confusión;\nhe perdido mi vigor,\ndesfallezco de dolor.'
  },
  {
    'id_hymn': 402,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Ten, oh Dios, piedad de mí,\nque debilitado estoy.\nDame, por amor de ti,\nla salud que busco hoy.\nNo me dejes perecer;\nven, mi cárcel a romper.'
  },
  {
    'id_hymn': 403,
    'order': 1,
    'type': 'STROPHE',
    'content': 'De Dios vagaba lejos yo,\nvuelvo hoy a ti;\npor sendas donde el mal reinó,\nvuelvo hoy a ti.'
  },
  {
    'id_hymn': 403,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Ya no más, oh Señor,\nvoy errando así;\na los brazos de tu amor,\nCristo, vuelvo, oh sí.'
  },
  {
    'id_hymn': 403,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Preciosos años malgasté,\nvuelvo hoy a ti;\narrepentido me humillé,\nvuelvo hoy a ti.'
  },
  {
    'id_hymn': 403,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cansado del pecar estoy,\nvuelvo hoy a ti;\nen ti espero desde hoy,\nvuelvo hoy a ti.'
  },
  {
    'id_hymn': 403,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Confío sólo en esto yo,\nvuelvo hoy a ti:\nEn que Jesús por mí murió;\nvuelvo hoy a ti.'
  },
  {
    'id_hymn': 403,
    'order': 5,
    'type': 'STROPHE',
    'content': 'Que puedes tú limpiarme sé,\nvuelvo hoy a ti;\npues en tu sangre, oh lávame,\nvuelvo hoy a ti.'
  },
  {
    'id_hymn': 404,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Años mi alma en vanidad vivió,\nignorando a quien por mí sufrió\ny que en el Calvario sucumbió:\nel Salvador.'
  },
  {
    'id_hymn': 404,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Mi alma allí divina gracia halló;\nDios allí perdón y paz me dio;\ndel pecado allí me libertó\nel Salvador.'
  },
  {
    'id_hymn': 404,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Por la Biblia miro que pequé,\ny su ley divina quebranté;\nmi alma entonces contempló con fe\nal Salvador.'
  },
  {
    'id_hymn': 404,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Toda mi alma a Cristo ya entregué;\nhoy le quiero y sirvo como a Rey;\npor los siglos siempre cantaré\nal Salvador.'
  },
  {
    'id_hymn': 404,
    'order': 4,
    'type': 'STROPHE',
    'content': 'En la cruz su amor Dios demostró,\ny de gracia al hombre revistió\ncuando por nosotros se entregó\nel Salvador.'
  },
  {
    'id_hymn': 405,
    'order': 1,
    'type': 'STROPHE',
    'content': 'En una cruz mi Salvador\npor mi maldad su vida dio;\ntan grande fue su amor por mí;\n¡por mí, que soy tan pobre y vil!'
  },
  {
    'id_hymn': 405,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Cuán grande amor, calvario, en ti\nmi Salvador mostró por mí!\nCon gratitud lo ensalzaré,\nque vida y luz de mi alma es Él.'
  },
  {
    'id_hymn': 405,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Perdón hallé gratuito en Él,\ny libertad mediante fe.\nMi posesión eterna es\nJesús, ¿qué más desear podré?'
  },
  {
    'id_hymn': 405,
    'order': 3,
    'type': 'STROPHE',
    'content': 'De mi canción tema será\nmientras vivir me deje acá,\nque me salvó de mi maldad\nen una cruz al expirar.'
  },
  {
    'id_hymn': 405,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Y cuando sin cuidados ya\nesté con Él en gloria y paz,\nemplearé la eternidad\nsu inmenso amor en alabar.'
  },
  {
    'id_hymn': 406,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cantaré de Jesucristo\nquien del cielo descendió.\nEn la cruz tomó mi puesto,\npor su amor me rescató.'
  },
  {
    'id_hymn': 406,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Su bondad, amor y gracia\nhoy me gozo en alabar;\ncon los santos en la gloria\na Jesús he de exaltar.'
  },
  {
    'id_hymn': 406,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Yo me hallaba errabundo\ncuando Cristo me encontró;\nrescatóme de este mundo,\ndel pecar me libertó.'
  },
  {
    'id_hymn': 406,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cuando triste y afligido,\nciego, lleno de temor\ndeambulaba ya perdido,\nÉl libróme por su amor.'
  },
  {
    'id_hymn': 406,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Aunque venga un día duro,\nnegro, lleno de dolor\ncon Jesús estoy seguro\npues protege y da valor.'
  },
  {
    'id_hymn': 407,
    'order': 1,
    'type': 'STROPHE',
    'content': 'En Jesús por fe confío,\ndel pecado me salvó;\ny su sangre generosa\nen la cruz por mí vertió.\nDe los hombres los pecados\nÉl cargó con sumisión,\nconsumando por los siglos\nnuestra eterna redención,\nconsumando por los siglos\nnuestra eterna redención.'
  },
  {
    'id_hymn': 407,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Salvación ofrece al hombre\nque abandone todo error,\ny en la fe de Jesucristo\nse encamine con fervor.\nÉl es Padre cariñoso,\nes amigo siempre fiel,\ny conforta nuestras penas\nsi llegámonos a Él,\ny conforta nuestras penas\nsi llegámonos a Él.'
  },
  {
    'id_hymn': 407,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Vida eterna nos ofrece\ny gratuita salvación,\nsi dejamos el pecado\nimplorando su perdón.\nNos absuelve y nos sostiene\ncuando asedia tentación;\nda consuelo al afligido\ny abrumado corazón,\nda consuelo al afligido\ny abrumado corazón.'
  },
  {
    'id_hymn': 408,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Oh!, salvo en la Roca más alta que yo,\nla Roca de vida que Cristo abrió,\nbrindando a su pueblo las aguas de paz.\nOh, Roca divina, serás mi solaz.'
  },
  {
    'id_hymn': 408,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Salvo en ti, salvo en ti,\n¡oh Roca bendita, me escondo en ti!'
  },
  {
    'id_hymn': 408,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Que vengan conflictos, tumultos, dolor:\na Cristo, mi Roca, iré sin temor;\nrecibo consuelo, consejos y luz:\nla Roca divina es mi amante Jesús.'
  },
  {
    'id_hymn': 408,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Y cuando mi vida se acerque a su fin\ny oiga por fe el divino clarín,\ntus límpidas aguas trayendo virtud,\noh Roca divina, serán mi salud.'
  },
  {
    'id_hymn': 408,
    'order': 4,
    'type': 'STROPHE',
    'content': 'El lóbrego valle no temo cruzar,\npues tú me guiarás y me harás descansar;\nseguro en tu guarda, con paz dormiré:\nJesús, el eterno, es mi Roca mi Rey.'
  },
  {
    'id_hymn': 409,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Al mismo Rey he escuchado!\nMúsica suave en\nmis oídos su voz fue.\nEl Rey a mí me ha hablado\nY a su llamado respondí: “A ti iré”.'
  },
  {
    'id_hymn': 409,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Él vino a mí, el mismo Rey del cielo;\nÉl vino a mí, de gozo me llenó\ny escuché su voz con gran anhelo;\nseguir yo quiero a quien así me amó.'
  },
  {
    'id_hymn': 409,
    'order': 2,
    'type': 'STROPHE',
    'content': ' ¡Al Rey de gloria he oído!\nSu invitación acataré de corazón;\ncon gran amor he acudido,\nme da consuelo,\nmucha paz también perdón.'
  },
  {
    'id_hymn': 409,
    'order': 3,
    'type': 'STROPHE',
    'content': ' ¡El mismo Rey me ha hablado!\nMi vida quiere Él\nsalvar y perdonar;\nde junto al Padre, el Hijo amado,\nvino del cielo\npara el hombre rescatar.'
  },
  {
    'id_hymn': 409,
    'order': 4,
    'type': 'STROPHE',
    'content': ' ¡Oído he al Rey de gloria!\nQue todo el mundo\nsepa de su gran amor.\nOír podrán la bella historia\nde nuestro amado\ny glorioso Redentor.'
  },
  {
    'id_hymn': 410,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Aleluya! Gloria a Cristo,\npoderoso Salvador.\n¡Aleluya! La victoria\npor sí solo conquistó.\nEscuchad las alabanzas\ndel gran coro celestial;\nJesucristo, con su sangre,\nredención al hombre da.'
  },
  {
    'id_hymn': 410,
    'order': 2,
    'type': 'STROPHE',
    'content': '¡Aleluya! No temamos,\ncon nosotros Cristo está.\n¡Aleluya! Su presencia\ngozo y confianza da.\nRecordemos la promesa\nque Jesús, al ascender,\nhizo a sus seguidores:\n“Con vosotros estaré”.'
  },
  {
    'id_hymn': 410,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Aleluya! Por su muerte\nÉl la muerte conquistó.\n¡Aleluya! Vive ahora,\ncon poder resucitó.\nNuestro Sumo Sacerdote\na los cielos ascendió;\nintercede por nosotros\nante el santo Padre Dios.'
  },
  {
    'id_hymn': 410,
    'order': 4,
    'type': 'STROPHE',
    'content': '¡Aleluya! Rey supremo,\nDios eterno, Gran Señor.\n¡Aleluya! Él es digno;\ndadle gloria y honor.\nCantan seres celestiales;\nhombres, levantad la voz;\ntodo lo creado cante\nalabanza a nuestro Dios.'
  },
  {
    'id_hymn': 411,
    'order': 1,
    'type': 'STROPHE',
    'content': ' Estrella matutina vi,\nrefulgente clara como el sol;\nsu luz reconocí.\nProviene del amor de Dios,\nde toda su benignidad,\nme deja oír su voz.\nJusto eres, mi bendito Salvador,\na ti me rindo. Mis loores a ti brindo.'
  },
  {
    'id_hymn': 411,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Libróme por su gracia Él,\nde muerte eterna me salvó,\nme llama a serle fiel.\nLa muerte Él por mí gustó,\nmi eterno Salvador y Rey,\ny a vida me llamó.\nGrande, fuerte y clemente, tú me amas\ny me entiendes.\nCreador, tú todo puedes.'
  },
  {
    'id_hymn': 411,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cadenas de mí apartó\nglorioso y santo Rey Jesús,\nsu amor me levantó.\nY vino Él y dióme luz,\ncon su justicia me cubrió,\nmuriendo allá en la cruz.\nSanto, bueno\ny paciente, sólo a ti daré la gloria.\nTuya siempre es la victoria.'
  },
  {
    'id_hymn': 411,
    'order': 4,
    'type': 'STROPHE',
    'content': 'A su mandato alegre voy,\natento estoy a oír su voz;\ncon Él feliz yo soy.\nMe levantó del polvo, sí,\ny con su sangre me lavó\ny así salvado fui.\nManso, tierno,bondadoso\ny piadoso, sólo tú eres.\nTú, perdón brindarme quieres.'
  },
  {
    'id_hymn': 412,
    'order': 1,
    'type': 'STROPHE',
    'content': '¿Qué me puede dar perdón?\nSólo de Jesús la sangre.\n¿Y un nuevo corazón?\nSólo de Jesús la sangre.'
  },
  {
    'id_hymn': 412,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Precioso es el raudal\nque limpia todo mal.\nNo hay otro manantial\nsino de Jesús la sangre.'
  },
  {
    'id_hymn': 412,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Fue rescate eficaz,\nsólo de Jesús la sangre.\nTrajo santidad y paz,\nsólo de Jesús la sangre.'
  },
  {
    'id_hymn': 412,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Veo para mi salud,\nsólo de Jesús la sangre.\nTiene de sanar virtud,\nsólo de Jesús la sangre.'
  },
  {
    'id_hymn': 412,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Cantaré junto a sus pies,\nsólo de Jesús la sangre.\nEl Cordero digno es.\nsólo de Jesús la sangre.'
  },
  {
    'id_hymn': 413,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Ni fama, ni ciencia, ni honor o riqueza\ndel negro pecado me pueden librar.\nLa sangre de Cristo es mi sola esperanza,\ntan sólo su muerte me puede salvar.'
  },
  {
    'id_hymn': 413,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Tan sólo pudo redimirme\nel amante Salvador;\nfue con su sangre tan preciosa\ncomo Cristo me salvó.'
  },
  {
    'id_hymn': 413,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Ni fama, ni ciencia, ni honor o riqueza\npodrían brindarme la paz del Señor.\nLa sangre de Cristo es mi sola esperanza,\ntan sólo su muerte\nme quita el temor.'
  },
  {
    'id_hymn': 413,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Ni fama, ni ciencia, ni honor o riqueza\nmi pena profunda me pueden quitar.\nLa sangre de Cristo es mi sola esperanza;\nel gozo divino disipa el pesar.'
  },
  {
    'id_hymn': 413,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Ni fama, ni ciencia, ni honor o riqueza\nmi entrada a los cielos podrían comprar.\nLa sangre de Cristo es mi sola esperanza;\ncon ella podré mi rescate pagar.'
  },
  {
    'id_hymn': 414,
    'order': 1,
    'type': 'STROPHE',
    'content': ' ¡Oh, qué Amigo que por mí murió!\nEn su eterno amor me gozaré\ny por su santa sangre que vertió\nvida sin fin tendré.'
  },
  {
    'id_hymn': 414,
    'order': 2,
    'type': 'CHORUS',
    'content': 'En verdad, en verdad\ngrato es saber;\nen verdad, que en Jesús,\ntodo nuevo es.\nQuien crea en Cristo\nél podrá tener\nvida hoy, y después.'
  },
  {
    'id_hymn': 414,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Con mis iniquidades Él cargó,\ntodas mis deudas sobre sí tomó;\nsu mano amiga Él me extendió,\nvida a mi alma dio.'
  },
  {
    'id_hymn': 414,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Pobre e indigno soy sin mi Jesús\nmas con su gracia Él me sostendrá;\nsu gran mensaje gozo es y luz,\nvida Él siempre da.'
  },
  {
    'id_hymn': 414,
    'order': 4,
    'type': 'STROPHE',
    'content': 'De su amor yo nunca dudaré,\nfiel acogida siempre me dará;\nmis ojos nunca de Él apartaré,\nsu luz me cubrirá.'
  },
  {
    'id_hymn': 415,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Vagué sediento en\nel pecado abrumador,\ny nada a mi alma dio satisfacción;\nmas cuando fui a la cruz\nde Cristo el Salvador,\nagua abundante halló mi corazón.'
  },
  {
    'id_hymn': 415,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Toma de la fuente de agua viva:\nfuente eternal, y agua del raudal.\nToma de la fuente de agua viva:\nla fuente de agua viva celestial.'
  },
  {
    'id_hymn': 415,
    'order': 2,
    'type': 'STROPHE',
    'content': '¡Oh, cuán dulce raudal\nde Dios brotando está!\nfelicidad y gozo me brindó;\nen gloria, gracia y\nbendición mi vida irá,\npor eso, ¡aleluya!, canto yo.'
  },
  {
    'id_hymn': 415,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Oh pecador, ¿por qué a\nJesús no vienes hoy\ny así su agua de vida aceptar?\nÉl dice: “Fuente de agua eterna y\nlibre soy,\nla sed de tu alma puedo aplacar”.'
  },
  {
    'id_hymn': 416,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Por fe en Cristo el Redentor\nse salva hoy el pecador;\naunque sin merecer perdón,\nrecibe plena salvación.'
  },
  {
    'id_hymn': 416,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Oh gracia excelsa del amor,\nque Dios perdone al pecador!\nSi quiere presto confesar\nsus culpas, y en Jesús confiar,\nencontrará la salvación,\npues Él obró la redención.'
  },
  {
    'id_hymn': 416,
    'order': 2,
    'type': 'STROPHE',
    'content': 'La vida antigua ya pasó\ny todo en nuevo se tornó,\ny aunque nada tenga aquí,\nherencia eterna tiene allí.'
  },
  {
    'id_hymn': 416,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Aquí cual peregrino es;\nmansión allá tendrá después,\narriba en gloria con Jesús,\nquien redimióle en la cruz.'
  },
  {
    'id_hymn': 417,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Bellas canciones perennes,\nvoces de gratitud\ndigan con suaves murmullos:\n“Dios ya nos da salud”.\nHasta los tiempos postreros,\ncantos de paz y amor\ny gloria a Dios en lo alto\ntributa la multitud.'
  },
  {
    'id_hymn': 417,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Célico alcázar construye\nde eterna majestad;\nbajo sus bóvedas reinan\nmisericordia y paz.\nPacto que mira a su electo\nsiervo David, el fiel,\nde cuya Posteridad santa\nel reino sin fin será.'
  },
  {
    'id_hymn': 417,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Pueblo feliz el que escucha\nde su venida el son;\ny que prepara su alma\npara encontrarse en Sión.\nEres, Señor, de los tuyos\nel refulgente sol,\nde fe, sacratísimo centro,\nel óptimo galardón.'
  },
  {
    'id_hymn': 418,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Moro yo en las alturas,\ndonde encuentro gozo y paz;\nen la tierra de bellezas,\ndonde tú vivir podrás.\nEs la tierra de hermosura,\ndo derrama toda flor\nsus riquísimos olores\nen el alma de dolor.'
  },
  {
    'id_hymn': 418,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Puedo ver de las alturas\ncómo anduve en el error,\nextraviado en las tinieblas\ny las sombras del terror.\nDudas, votos quebrantados\nmarcan mi sendero allí,\nmas Jesús me ha conducido\nhasta do me encuentro aquí.'
  },
  {
    'id_hymn': 418,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Bebo de la fuente viva;\nsus virtudes siento ya;\njunto al río de la vida,\nsatisfecha mi alma está.\nNo apetezco los placeres\nde este mundo en donde estoy,\nporque Cristo me ha llamado,\ny en camino al cielo voy.'
  },
  {
    'id_hymn': 419,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Día tan grande no puedo olvidar,\ndía de gloria sin par;\ncuando en tinieblas al verme andar,\nvino a salvarme el Señor.\nGran compasión tuvo Cristo de mí,\nde gozo y paz me llenó.\nQuitó las sombras,\n¡Oh, gloria a su nombre,\nla noche en día cambió!'
  },
  {
    'id_hymn': 419,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Dios descendió, de gloria me llenó,\ncuando Jesús por gracia me salvó;\nfui ciego, me hizo ver, y por gracia renacer;\nDios descendió, de gloria me llenó.'
  },
  {
    'id_hymn': 419,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Nací de nuevo, en virtud de Jesús,\na la familia de Dios.\nJustificado por Cristo el Señor,\ngozo la gran redención.\nbendito sea mi Padre y Dios,\nque cuando vine con fe,\nfui adoptado por Cristo el amado;\nloores por siempre daré.'
  },
  {
    'id_hymn': 419,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Tengo esperanza de gloria eternal,\nme regocijo en Jesús;\nme ha preparado un bello rincón\nen la mansión celestial.\nSiempre recuerdo con fe y gratitud,\nal contemplarle en la cruz,\nque sus heridas me dieron la vida;\n¡alabo al bendito Jesús!'
  },
  {
    'id_hymn': 420,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Tras la tormenta surge el arco,\ny tras la noche brota luz;\ntras el dolor y la tristeza\nesplende el rostro de Jesús.'
  },
  {
    'id_hymn': 420,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Elevo un himno de alabanza\ny adoración a Dios mi Rey;\npor fe en Él mi ser descansa,\ny cara a cara le veré.'
  },
  {
    'id_hymn': 420,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Vendrá la eterna primavera\ntras el invierno abrumador,\ny tras las sombras de la tierra\ndespertará perenne albor.'
  },
  {
    'id_hymn': 420,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Tras todo está Dios,\nnuestro Padre,\nsu amor jamás nos dejará;\ntras este mundo miro al cielo,\ndo mi alma siempre morará.'
  },
  {
    'id_hymn': 421,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Sentir más grande amor por ti, Señor;\nmi anhelo es, mi oración que elevo hoy.\nDame esta bendición: sentir por ti, Señor,\nmás grande amor, más grande amor.'
  },
  {
    'id_hymn': 421,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Busqué mundana paz y vil placer;\nno quiero hoy nada más que tuyo ser.\n¡Oh, qué felicidad!, sentir por ti, Señor,\ncreciente amor, creciente amor.'
  },
  {
    'id_hymn': 421,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Tú santo nombre yo alabaré,\ncontigo iré a morar, tu faz veré.\nY por la eternidad pensando en tu bondad,\nmás te amaré, más te amaré.'
  },
  {
    'id_hymn': 422,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Entonad un himno que alegre el corazón,\nvamos pronto a nuestro eterno hogar;\nporque pasará esta noche de aflicción,\nvamos pronto a nuestro eterno hogar.'
  },
  {
    'id_hymn': 422,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Vamos pronto, sí, vamos pronto, sí,\na cruzar el fiero mar; tras la tempestad,\nnos veremos más allá; vamos pronto a\nnuestro eterno hogar.'
  },
  {
    'id_hymn': 422,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cuanto pida Dios el fiel siervo cumplirá,\nvamos pronto a nuestro eterno hogar;\ny su Espíritu nuevas fuerzas nos dará,\nvamos pronto a nuestro eterno hogar.'
  },
  {
    'id_hymn': 422,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Id a encaminar a los extraviados pies,\nvamos pronto a nuestro eterno hogar;\nel amor de Cristo enseñad con sencillez,\nvamos pronto a nuestro eterno hogar.'
  },
  {
    'id_hymn': 422,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Hay perfecta paz y reposo más allá,\nvamos pronto a nuestro eterno hogar;\nen la tierra nueva ya lágrimas no habrá,\nvamos pronto a nuestro eterno hogar.'
  },
  {
    'id_hymn': 423,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Es Jehová mi buen pastor\nque todo me dará.\nDescanso brinda con amor;\nÉl me pastoreará.'
  },
  {
    'id_hymn': 423,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Mi alma Él confortará,\nsus sendas seguiré,\ny siempre me sustentará;\nyo fiel le serviré.'
  },
  {
    'id_hymn': 423,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Si en valle de pavor yo voy,\nel mal no temeré\nporque con Él seguro estoy;\nconfiado viviré.'
  },
  {
    'id_hymn': 423,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Aliento me infundirá\ny me dará canción.\nBanquete Él me suplirá\nen la persecución.'
  },
  {
    'id_hymn': 423,
    'order': 5,
    'type': 'STROPHE',
    'content': 'Ungísteme con buen olor,\nmi copa llena está.\nRodeado me has de bien y amor,\nSantísimo Jehová.'
  },
  {
    'id_hymn': 424,
    'order': 1,
    'type': 'STROPHE',
    'content': 'En el seguro puerto\ntu barco puede anclar;\nallí las tempestades\nno puédenle azotar.\n¡Qué grato al navegante\nrefugio en Él hallar,\ny al fin del rudo viaje, salvo estar!'
  },
  {
    'id_hymn': 424,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Hay sitio, hay sitio para ti,\nhay sitio, sí,\nallá en el puerto amado de salud.'
  },
  {
    'id_hymn': 424,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En el seguro puerto\nhay sitio para ti;\nde Dios el barco espera,\nllevarte quiere allí.\nSon fieles sus promesas\nal pobre pecador;\nfeliz serás si fías en su amor.'
  },
  {
    'id_hymn': 424,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Amigos bien amados\na nuestro lado irán;\nsus voces al oído\n¡cuán gratas sonarán!\nParad, pues, tempestades,\ncesad, tormentas, ya;\nla música divina oigo allá.'
  },
  {
    'id_hymn': 424,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Oleajes cadenciosos,\nllevadme a aquel hogar;\ndesde esta tierra triste\nlo veo allá brillar.\nMi espíritu cansado allí reposará,\ny allí mi frágil barco anclará.'
  },
  {
    'id_hymn': 425,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Las manos, Padre, extiendo a ti;\nmi fiel ayuda sé.\nSi tú no cuidas ya de mí,\n¿a quién y adónde iré?'
  },
  {
    'id_hymn': 425,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Yo creo que en el Gólgota\nJesús por mí murió,\ny con su sangre, del pecar\na mi alma libertó.'
  },
  {
    'id_hymn': 425,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En tu hijo amado creo yo,\nconozco tu poder.\n¡Oh!, suple mi necesidad,\nrenueva tú mi ser.'
  },
  {
    'id_hymn': 425,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Los ojos alzo a ti, Señor,\nautor tú de la fe.\n¡Oh!, dame el tan precioso don,\npues sin él yo moriré.'
  },
  {
    'id_hymn': 426,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Dios nos envió a su hijo Cristo;\nÉl es amor, paz y perdón.\nPor mí murió en el calvario,\nmas de la tumba con poder resucitó.'
  },
  {
    'id_hymn': 426,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Porque Él vive, no temo el mañana;\nporque Él vive, seguro estoy,\nporque yo sé, yo sé\nque el futuro es suyo,\ny que la vida vale,\nporque Él vive hoy.'
  },
  {
    'id_hymn': 426,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Grato es tener a un tierno niño,\nprecioso don que Dios nos da.\nCuánto mejor cuando él recibe\nal Salvador, y vida eterna gozará.'
  },
  {
    'id_hymn': 426,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Se acabará mi vida un día;\nenfrentaré muerte y dolor.\nMas a Jesús veré en la gloria,\ny reinaré con mi triunfante Salvador.'
  },
  {
    'id_hymn': 427,
    'order': 1,
    'type': 'STROPHE',
    'content': 'En mi débil condición\nbríndame tu comunión\ny podré ser vencedor\nal andar junto a ti, Salvador.'
  },
  {
    'id_hymn': 427,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Aún más cerca de tu luz\nande en pos de ti, Jesús,\ny rodeado de tu amor\ncada día te adore, Señor.'
  },
  {
    'id_hymn': 427,
    'order': 2,
    'type': 'STROPHE',
    'content': ' En el mundo tan falaz\nnadie me dará solaz;\nsólo en ti hay compasión,\ntú perdonas y das bendición.'
  },
  {
    'id_hymn': 427,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Al cerrar mi vida aquí\nmi confianza esté en ti,\ny al llamado de tu voz\nque ascienda a tu lado mi Dios.'
  },
  {
    'id_hymn': 428,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Oh Dios eterno, tu misericordia\nni una sombra de duda tendrá;\ntu compasión y bondad nunca fallan\ny por los siglos el mismo serás.'
  },
  {
    'id_hymn': 428,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Oh, tu fidelidad! ¡Oh, tu fidelidad!\nCada momento la veo en mí.\nNada me falta, pues todo provees,\n¡grande, Señor, es tu fidelidad!'
  },
  {
    'id_hymn': 428,
    'order': 2,
    'type': 'STROPHE',
    'content': 'La noche oscura, el sol y la luna,\nlas estaciones del año también,\nunen su canto cual fieles criaturas,\nporque eres bueno, por siempre eres fiel.'
  },
  {
    'id_hymn': 428,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Tú me perdonas, me impartes el gozo,\ntierno me guías por sendas de paz;\neres mi fuerza, mi fe, mi reposo,\ny por los siglos mi Padre serás.'
  },
  {
    'id_hymn': 429,
    'order': 1,
    'type': 'STROPHE',
    'content': 'En todo recio vendaval,\nen todo amenazante mal,\ninexpugnable asilo es Él,\npropiciatorio para el fiel.'
  },
  {
    'id_hymn': 429,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Jesús su bálsamo de paz\nen el que busque allí su faz\nderrama, y glorifícale:\npropiciatorio para el fiel.'
  },
  {
    'id_hymn': 429,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Para el humilde corazón\nque eleva al cielo su oración,\nson las bondades del Señor\npropiciatorio de su amor.'
  },
  {
    'id_hymn': 429,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Los fieles todos uno son\ny están en dulce comunión;\nes el santuario el que la da:\npropiciatorio de Jehová.'
  },
  {
    'id_hymn': 430,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Salvador, mi bien eterno,\nmás que vida para mí,\nen mi fatigosa senda\ntenme siempre junto a ti;\njunto a ti, junto a ti,\njunto a ti, junto a ti;\nen mi fatigosa senda\ntenme siempre junto a ti.'
  },
  {
    'id_hymn': 430,
    'order': 2,
    'type': 'STROPHE',
    'content': 'No me afano por placeres,\nni renombre busco aquí;\nvengan pruebas o desdenes,\ntenme siempre junto a ti,\njunto a ti, junto a ti,\njunto a ti, junto a ti;\nvengan pruebas o desdenes,\ntenme siempre junto a ti.'
  },
  {
    'id_hymn': 430,
    'order': 3,
    'type': 'STROPHE',
    'content': 'No te alejes en el valle\nde la muerte, sino allí,\nantes y después del trance,\ntenme siempre junto a ti;\njunto a ti, junto a ti,\njunto a ti, junto a ti;\nantes y después del trance,\ntenme siempre junto a ti.'
  },
  {
    'id_hymn': 431,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Siempre el Salvador conmigo!\nNada soy sin su poder.\nsu presencia necesito:\nvoy, sin Él, a perecer.'
  },
  {
    'id_hymn': 431,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Me guiará mi Salvador;\nhoy en Él confiaré.\nCon amor donde Él me lleve\nsus pisadas seguiré.'
  },
  {
    'id_hymn': 431,
    'order': 2,
    'type': 'STROPHE',
    'content': ' ¡Siempre el Salvador conmigo!\n¿Puédeme la fe faltar?\nSus palabras me consuelan;\ncual Él nadie puede hablar.'
  },
  {
    'id_hymn': 431,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Siempre el Salvador conmigo!\nIlumíneme su faz\nen la calma, en la tormenta,\nen la lucha y en la paz.'
  },
  {
    'id_hymn': 431,
    'order': 4,
    'type': 'STROPHE',
    'content': '¡Siempre el Salvador conmigo!\nSus consejos me guiarán\nhasta que esté en la orilla\nanhelada del Jordán.'
  },
  {
    'id_hymn': 432,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Mi Dios me envió del cielo un canto\nmelodioso, arrobador;\nlo cantaré con gozo y gratitud,\ncon muy dulce tierno amor.'
  },
  {
    'id_hymn': 432,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Suenan melodías en mi ser,\nde un canto celestial, sonoro, angelical;\nSuenan melodías en mi ser\nde un dulce canto celestial.'
  },
  {
    'id_hymn': 432,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Amo a Jesús que en el Calvario\nmis pecados ya borró;\nmi corazón se inflama en santo amor,\nque en mi ser Él derramó.'
  },
  {
    'id_hymn': 432,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Será mi tema allá en la gloria,\ndel gran trono en derredor,\ncantar por siempre con los ángeles\nalabanzas al Señor.'
  },
  {
    'id_hymn': 433,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cuando sopla airada la tempestad\ny tu barca en grave peligro está,\nno se puede andar con seguridad\nsin tener un ancla que apoyará.'
  },
  {
    'id_hymn': 433,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Ancla tenemos que nos dará\napoyo firme en la tempestad;\nen la Roca eterna fija está;\nsólo allí tendremos seguridad.'
  },
  {
    'id_hymn': 433,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Arrecifes hay que marcando van\nel sendero triste de muerte cruel,\ndonde vidas mil naufragando están\nsin tener un ancla ni timonel.'
  },
  {
    'id_hymn': 433,
    'order': 3,
    'type': 'STROPHE',
    'content': 'En las negras ondas de la ansiedad,\ncuando soplan vientos de destrucción,\nnuestra barca cruza la inmensidad,\ndel Señor llevando la protección.'
  },
  {
    'id_hymn': 434,
    'order': 1,
    'type': 'STROPHE',
    'content': 'La cruz no es mayor que la gracia\nque el Señor Jesús me da;\nsu rostro el nublado más negro\nesconder jamás podrá.'
  },
  {
    'id_hymn': 434,
    'order': 2,
    'type': 'CHORUS',
    'content': 'La cruz no es mayor que su bondad;\nno oculta su faz la tempestad;\nsatisfáceme saber\nque confiando en el poder\nde Jesús, podré vencer.'
  },
  {
    'id_hymn': 434,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Si espinas agudas me hieren\nde ellas Él se coronó;\nsi amarga es mi copa, en el huerto\ncáliz peor Él apuró.'
  },
  {
    'id_hymn': 434,
    'order': 3,
    'type': 'STROPHE',
    'content': 'La luz de su amor más reluce\nen la senda de aflicción;\nno siento el afán cuando llevo\nal perdido salvación.'
  },
  {
    'id_hymn': 434,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Andando a su vista me gozo\nen cumplir su voluntad;\nsu sangre mi vida ha limpiado\ny me guarda en la verdad.'
  },
  {
    'id_hymn': 435,
    'order': 1,
    'type': 'STROPHE',
    'content': 'En Roca viviente construirá\nquien quiera vivir seguro,\ny confiadamente habitará\nen este mundo oscuro.'
  },
  {
    'id_hymn': 435,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Sobre Roca eternal,\nque venció en la cruz,\ncreced en la fe, en lo espiritual;\nla Roca es Jesús.'
  },
  {
    'id_hymn': 435,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Y sobre la arena construirá\nquien anda tras los placeres;\nmantente tú fiel a Jehová\ny cumple tus deberes.'
  },
  {
    'id_hymn': 435,
    'order': 3,
    'type': 'STROPHE',
    'content': 'En sólida Roca construirá,\nen Él, firme fundamento,\naquel que por fe subsistirá\ny no por sentimiento.'
  },
  {
    'id_hymn': 436,
    'order': 1,
    'type': 'STROPHE',
    'content': 'En el hogar do nunca habrá\ntristeza muerte ni dolor,\neterno gozo existirá,\nes la promesa del Señor.'
  },
  {
    'id_hymn': 436,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Velad y esperad al Salvador;\nmuy pronto vendrá el Redentor.\n¡Velad y orad, vendrá el Salvador!'
  },
  {
    'id_hymn': 436,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Las cargas duras de llevar\nya las conoce el Redentor;\nhumilde has de perseverar\npidiendo ayuda del Señor.'
  },
  {
    'id_hymn': 436,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Si vuestra senda angosta es\n¡seguid!, no os desaniméis;\nfelicidad habrá después\nen el hogar donde estaréis.'
  },
  {
    'id_hymn': 436,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Es tiempo de ir a trabajar\ny dar las nuevas de salud\nde Aquel que a todos ha de dar\nhogar de eterna juventud.'
  },
  {
    'id_hymn': 437,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Meditar en Jesús ha de ser mi afán:\nme amó siendo yo un pecador;\nÉl ganó para mí la diadema celestial,\nen la cruz, do mostróme su amor.'
  },
  {
    'id_hymn': 437,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Ven, ven, buen Jesús.\nMora en mi corazón,\nlléname de santidad,\npues contigo deseo andar.'
  },
  {
    'id_hymn': 437,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Consultar a Jesús ha de ser mi afán,\nY Jesús me dará su clara luz.\nSin Jesús, y por mí\nnada quiero practicar;\nmis acciones inspire Jesús.'
  },
  {
    'id_hymn': 437,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Predicar a Jesús ha de ser mi afán,\ny Jesús me dará fuerza y poder\nSin Jesús y su amor,\nvano fuera trabajar;\nde Jesús en la cruz, hablaré.'
  },
  {
    'id_hymn': 437,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Imitar a Jesús ha de ser mi afán.\nEn Jesús quiero mi dechado ver.\nSin mirar a Jesús,\nnada bueno puedo hacer,\nmas fijándome en Él todo es bien.'
  },
  {
    'id_hymn': 438,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Al contemplarte, mi Salvador,\ny al meditar en tu gran amor,\nveo en mi vida mucho pecar.\nTómala, Cristo, quiero triunfar.'
  },
  {
    'id_hymn': 438,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Cubre mi vida, Cristo Jesús.\nBlanca cual nieve la hace tu luz.\nTuya es mi vida, soy pecador,\npero en tu nombre soy vencedor.'
  },
  {
    'id_hymn': 438,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Hondas heridas de transgresión\nmanchan mi vida sin tu perdón.\nCúbreme, Cristo, mora en mí,\nVive tu vida, vívela en mí.'
  },
  {
    'id_hymn': 438,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Dame la dicha de tu perdón,\ndame tu manto de salvación;\nCristo, lo acepto, dejo el pecar,\ndame las fuerzas para triunfar.'
  },
  {
    'id_hymn': 438,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Reconciliado por tu morir,\njustificado por tu vivir,\nsantificado al obedecer,\nglorificado al verte volver.'
  },
  {
    'id_hymn': 439,
    'order': 1,
    'type': 'STROPHE',
    'content': 'A la cruz de Cristo voy,\ndébil, pobre y ciego soy.\nMis riquezas nada son,\nnecesito salvación.'
  },
  {
    'id_hymn': 439,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Yo confío en ti, Señor,\nmi bendito Salvador,\ny me postro ante tu cruz.\n¡Salva, oh sálvame, Jesús!'
  },
  {
    'id_hymn': 439,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Suspirado he por ti,\nmas el mal reinaba en mí;\nhoy Jesús me dice fiel:\n“Tus pecados limpiaré”.'
  },
  {
    'id_hymn': 439,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cristo, a ti mi todo doy,\ntiempo, amigos, cuanto soy;\ncuerpo y alma, tuyos son,\nen eterna posesión.'
  },
  {
    'id_hymn': 439,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Tu promesa es mi salud.\nEn tu sangre hallé virtud.\npecador me siento hoy,\npero en Cristo salvo soy.'
  },
  {
    'id_hymn': 440,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Sabemos que el juicio ha comenzado\ncon los registros de verdad,\ny cada cual será examinado\nante la Ley de libertad.'
  },
  {
    'id_hymn': 440,
    'order': 2,
    'type': 'CHORUS',
    'content': 'El que pecare morirá;\nel justo herencia obtendrá.\nA cada alma Dios le invita\nque acepte a Cristo y vivirá.'
  },
  {
    'id_hymn': 440,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Ya ha comenzado con los que duermen\ny con los vivos seguirá.\nDiferenciando a quienes le temen\nque el buen Jesús los salvará.'
  },
  {
    'id_hymn': 440,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Y quienes sin Él se justificaron,\nhallados faltos quedarán;\nmas los que en Cristo sólo confiaron\na vida eterna llegarán.'
  },
  {
    'id_hymn': 441,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Día grande viene, un día grande;\ndía grande viene y cerca está,\ncuando justos y malos\nseparados quedarán.\n¡Oh!, hermano, ¿apercibido estás?'
  },
  {
    'id_hymn': 441,
    'order': 2,
    'type': 'CHORUS',
    'content': '¿Te hallas listo?, ¿te hallas listo\npara el fallo del gran tribunal?\n¿Te hallas listo?,\n¿te hallas listo para el día final?'
  },
  {
    'id_hymn': 441,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Día triste viene, un día triste;\ndía triste viene y cerca está,\ncuando: “Id, pecadores,\nno os conozco”, el Juez dirá.\n¡Oh!, hermano, ¿apercibido estás?'
  },
  {
    'id_hymn': 441,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Día alegre viene, un día alegre;\ndía alegre viene y cerca está;\nmas su luz brilla sólo en\nlos que aman al Señor.\n¡Oh!, hermano, ¿apercibido estás?'
  },
  {
    'id_hymn': 442,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Llamados somos hoy a santidad\nlos que formamos la iglesia de Dios.\nDel mundo nos rescató con bondad,\nde servidumbre y pecado atroz.'
  },
  {
    'id_hymn': 442,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Óyenos, súplenos\nconforme a tu gran bondad;\nguárdanos, líbranos\nde toda cruel tentación.\nDanos pues seguridad;\nTómanos, guíanos con cánticos a Sión.'
  },
  {
    'id_hymn': 442,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Llamados somos hoy a santidad\npor Cristo nuestro eternal Salvador.\nSu santo nombre por siempre exaltad,\nsólo Él es digno de todo loor.'
  },
  {
    'id_hymn': 442,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Llamados somos hoy a santidad\nfijó en nosotros su dulce atención.\n¡Gloria a Dios! ¡A Él sólo honrad!\nY nuestra fe entre siempre en acción.'
  },
  {
    'id_hymn': 442,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Llamados somos hoy a santidad;\npronto el Esposo a las bodas vendrá;\nsombras no habrá, ni más oscuridad;\nsu eterna luz a sus hijos dará.'
  },
  {
    'id_hymn': 442,
    'order': 5,
    'type': 'STROPHE',
    'content': 'Llamados somos hoy a santidad,\nnuestro destino es gozo y solaz;\nen las mansiones de gloria pensad\ndonde tendremos con Cristo la paz.'
  },
  {
    'id_hymn': 443,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Rey de mi vida tú eres ya:\ngloria te doy, Jesús;\nno me permitas olvidar\ntu obra en la cruenta cruz.'
  },
  {
    'id_hymn': 443,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Si olvido del Getsemaní,\ntu sufrimiento agudo allí,\ny tu divino amor por mí,\nCristo, hazme ver tu cruz.'
  },
  {
    'id_hymn': 443,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Por fe la tumba puedo ver\nque ya vacía está;\nángeles santos de poder\nfueron tu guardia allá.'
  },
  {
    'id_hymn': 443,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Yo, cual María, quien su amor\nte demostró, Jesús,\nquiero servirte fiel, Señor,\nal recordar tu cruz.'
  },
  {
    'id_hymn': 443,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Hazme dispuesto a llevar\nla dura cruz por ti;\ncon gozo sufriré, Señor;\nfuiste a la cruz por mí.'
  },
  {
    'id_hymn': 444,
    'order': 1,
    'type': 'STROPHE',
    'content': '¿Anhelaste la paz y crecer en la fe?\n¿Santo loor a Jesús ofrecer?\nMas podrás descansar, recibir bendición,\nofreciéndote a Dios en su altar.'
  },
  {
    'id_hymn': 444,
    'order': 2,
    'type': 'CHORUS',
    'content': '¿Colocaste tu ser en servicio a Dios?\n¿Le diste tu fiel corazón?\nÉl te bendecirá y te hará descansar,\ny su paz te dará una canción.'
  },
  {
    'id_hymn': 444,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Si caminas con Dios en la luz de verdad,\ntendrás paz y poder al andar;\nvivirás pues feliz, gozarás libertad,\nsi tu vida está en el altar.'
  },
  {
    'id_hymn': 444,
    'order': 3,
    'type': 'STROPHE',
    'content': ' ¿Quién podrá de su amor la grandeza contar?\n¡Cuán feliz con Jesús estarás!\npues te llama el Pastor con su voz celestial,\npon tu vida entera en su altar.'
  },
  {
    'id_hymn': 445,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Tuyo es mi ser, Señor,\ntómame así cual soy;\ncaminando en pos yo voy\nal impulso de tu amor,\nal impulso de tu amor.'
  },
  {
    'id_hymn': 445,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Guía mis pies en tu ley,\ncuanto soy me entrego a ti;\nquiero dar lo más de mí,\npoderoso Dios y Rey,\npoderoso Dios y Rey'
  },
  {
    'id_hymn': 445,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Que mis labios al hablar\nlo hagan siempre con bondad;\ncólmame de santidad,\nmuéveme a ofrendar,\nmuéveme a ofrendar.'
  },
  {
    'id_hymn': 445,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Tuya es mi voluntad,\nmía no sea jamás.\nSea tuya más y más\nmi razón, mi lealtad,\nmi razón, mi lealtad.'
  },
  {
    'id_hymn': 445,
    'order': 5,
    'type': 'STROPHE',
    'content': 'Mis tesoros, mi amor\ndeposito a tus pies;\ntómalos Señor, después,\nmultiplica mi fervor,\nmultiplica mi fervor.'
  },
  {
    'id_hymn': 446,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Que mi vida entera esté\nconsagrada a ti, Señor;\nque a mis manos pueda guiar\nel impulso de tu amor.'
  },
  {
    'id_hymn': 446,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Lávame en la sangre del Señor,\nlímpiame de toda mi maldad;\nríndote mi vida; hazla pues, Señor,\ntuya por la eternidad.'
  },
  {
    'id_hymn': 446,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Que mis pies tan sólo en pos\nde los santos puedan ir;\ny que a ti, Señor, mi voz\nse complazca en bendecir.'
  },
  {
    'id_hymn': 446,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Que mis labios, al hablar,\nhablen sólo de tu amor;\nque mis bienes ocultar\nno los pueda a ti, Señor'
  },
  {
    'id_hymn': 446,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Que mi tiempo todo esté\nconsagrado a tu loor,\ny mi mente y su poder\npueda emplearlos en tu honor.'
  },
  {
    'id_hymn': 446,
    'order': 5,
    'type': 'STROPHE',
    'content': 'Toma, oh Dios, mi voluntad,\ny hazla tuya, nada más,\ny este pobre corazón;\ny tu trono en él tendrás.'
  },
  {
    'id_hymn': 447,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Para mí, tan pecador,\n¿puede haber, oh Dios, perdón?\nEl consuelo de tu amor,\n¿puede hallar mi corazón?'
  },
  {
    'id_hymn': 447,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cuando miro en derredor\nen mi negra soledad,\nveo abismo aterrador\ndo me arroja mi maldad.'
  },
  {
    'id_hymn': 447,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Mucho tiempo resistí,\ny tu gracia desprecié.\n¿Aún podré hallar en ti\nese amor que rechacé?'
  },
  {
    'id_hymn': 447,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Mientras tenga que vivir,\nsea mi resolución\nsólo a ti, Señor, servir\ncon sincera devoción.'
  },
  {
    'id_hymn': 448,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Sé fiel, mi hermano querido, sé fiel\nque en las nubes le hemos de ver!\n¿Seremos leales o infieles a Aquel\nque vino acá a padecer?\n¡Sigamos hermano, luchemos por Él,\nsu ayuda hemos ya de tener!\nPrepárate hermano, por siempre sé fiel,\n¡con Cristo podemos vencer!'
  },
  {
    'id_hymn': 448,
    'order': 2,
    'type': 'STROPHE',
    'content': '¿Las calles de oro también quieres ver?\nEntonces prepárate fiel.\nY cuando aparezca con su gran poder,\nreunidos seremos con Él.\nCon todo su pueblo podrémosle ver,\ny el premio será para aquel,\nque luche cumpliendo con todo deber;\nyo en Cristo seré siempre fiel.'
  },
  {
    'id_hymn': 448,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Oh, hermano valiente, por siempre sé fiel,\nmuy pronto en las nubes vendrá!\nBrillante corona te espera con Él\ny gran galardón te dará.\nGloriosa mañana ya va a esclarecer\ny oiremos la voz de Emanuel;\nla voz que su pueblo va a reconocer\noírle decir: “Siervo fiel”.'
  },
  {
    'id_hymn': 448,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Bien vale la pena mi hermano ser fiel,\npromesa segura nos dio;\nque siempre a su lado estemos con Él,\nasí a su Padre pidió.\nTu amor y firmeza siguiendo a Jesús\nserá por la eternidad;\ntomemos ahora también nuestra cruz\nmostrándole fidelidad.'
  },
  {
    'id_hymn': 449,
    'order': 1,
    'type': 'STROPHE',
    'content': '¿Deberá Jesús la cruz llevar\ny el hombre en cambio no?\nNo, cada cual su cruz tendrá:\nla mía llevo yo.'
  },
  {
    'id_hymn': 449,
    'order': 2,
    'type': 'STROPHE',
    'content': 'La cruz sagrada llevaré\nsus huellas al seguir.\nDespués al cielo volaré\ncorona a recibir.'
  },
  {
    'id_hymn': 449,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Y sobre el cristalino mar,\ngozoso la echaré\na sus heridos pies, y allí\nsu nombre ensalzaré.'
  },
  {
    'id_hymn': 450,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Oh Jesús!, mi cruz levanto\ny en tus pasos quiero andar;\nabandono el falso encanto\npara tu merced gozar.\nDejo vanas ambiciones\ny la dicha mundanal;\ngozaré tus bendiciones\nmientras luche contra el mal.'
  },
  {
    'id_hymn': 450,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Que me deje el mundo entero\ncomo a Cristo abandonó;\ntodo aquí es pasajero;\nen Jesús confío yo.\nNo vendrá el asolamiento,\npues le sirvo desde hoy;\nno tendré contentamiento\nsi alejado de Él estoy.'
  },
  {
    'id_hymn': 450,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Alma mía, mira a Cristo\ncon los ojos de la fe;\nÉl la gloria te ha provisto;\nalma mía, ¡Firme sé!\nPronto acabará mi senda;\nya reposará mi pie;\nterminada la contienda\ncon Jesús yo viviré.'
  },
  {
    'id_hymn': 451,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Más santidad dame, más odio al mal,\nmás calma en las penas, más alto ideal;\nmás fe en el Maestro, más consagración,\nmás celo en servidle, más fe en la oración.'
  },
  {
    'id_hymn': 451,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Más prudente hazme, más sabio en Él,\nmás firme en su causa, más fuerte y más fiel;\nmás recto en la vida, más triste al pecar,\nmás humilde hijo, más pronto en amar.'
  },
  {
    'id_hymn': 451,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Más pureza dame, más fuerza en Jesús,\nmás de su dominio, más paz en la cruz;\nmás rica esperanza, más obras aquí,\nmás ansia del cielo, más gozo allí.'
  },
  {
    'id_hymn': 452,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Construyendo estamos, siempre, sin cesar,\nconstruyendo vamos para el más allá.\nNuestros pensamientos, todo nuestro obrar,\nforman el carácter que eterno será.'
  },
  {
    'id_hymn': 452,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Construimos sin cesar\nalgo que perdurará,\ncada día, cada instante;\ncada día que se va\nconstruyéndose está\nel carácter que es eternal.'
  },
  {
    'id_hymn': 452,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Elegir podemos nuestro material,\ntengamos cuidado, no escojamos mal.\nEn bien del Maestro hemos de bregar,\nÉl nos dará fuerza, nos hará triunfar.'
  },
  {
    'id_hymn': 452,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Que el Señor escuche nuestra petición\ny que Él dirija la edificación;\nque podamos siempre con Jesús andar\norando y confiando en su gran bondad.'
  },
  {
    'id_hymn': 453,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Tuyo soy, Jesús, pues oí tu voz\nque en amor llamóme a mí;\nmas anhelo en alas de fe subir,\ny más cerca estar de ti.'
  },
  {
    'id_hymn': 453,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Aún más cerca, cerca de la cruz,\nllévame, oh Salvador;\naún más cerca, cerca cerca de la luz\nviva yo, ¡oh, buen Pastor!'
  },
  {
    'id_hymn': 453,
    'order': 2,
    'type': 'STROPHE',
    'content': 'A seguirte a ti me consagro hoy,\nconstreñido por tu amor;\ny mi espíritu, alma y cuerpo doy\npor servirte, mi Señor.'
  },
  {
    'id_hymn': 453,
    'order': 3,
    'type': 'STROPHE',
    'content': '!Oh, cuán pura y santa delicia es\nde tu comunión gozar;\nconversar contigo y tu dulce voz\ncada día escuchar!'
  },
  {
    'id_hymn': 453,
    'order': 4,
    'type': 'STROPHE',
    'content': 'De tu grande amor no comprenderé\ncual es la profundidad,\nhasta que contigo, Jesús, esté\nen gloriosa eternidad.'
  },
  {
    'id_hymn': 454,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Dejo el mundo y sigo a Cristo,\npues el mundo pasará;\nmas el tierno amor divino\npor los siglos durará.'
  },
  {
    'id_hymn': 454,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Oh, qué amor inmensurable!\n¡Qué clemencia, qué bondad!\n¡Oh, la plenitud de gracia,\nprenda de inmortalidad!'
  },
  {
    'id_hymn': 454,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Dejo el mundo y sigo a Cristo.\nMi alma en Él consolaré.\nSé que Él vela mis pisadas;\nsu bondad ensalzaré.'
  },
  {
    'id_hymn': 454,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Dejo el mundo y sigo a Cristo,\nmi benigno Salvador;\nen mis peregrinaciones\nbrille en mí su resplandor.'
  },
  {
    'id_hymn': 454,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Dejo el mundo y sigo a Cristo.\nConfiaré yo en su cruz\nhasta que sin velo mire\ncara a cara a mi Jesús.'
  },
  {
    'id_hymn': 455,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Obra en mí Señor como en Pedro,\nJeremías o David.\ncámbiame Jesús, y no dejes\nque me aparte de la vid.\nObra en mí Señor, y que todos\npuedan ver tu libertad;\nobra en mí Señor,\npara cumplir tu voluntad.'
  },
  {
    'id_hymn': 455,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Quiero sentir tu mano en el camino,\nsiempre saber que diriges mi destino;\nen ti hallé a mi mejor amigo\nque jamás aquí podré encontrar.'
  },
  {
    'id_hymn': 455,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Háblame Señor como hablaste\na Moisés o a Abrahán.\nGuíame Jesús sólo mis fracasos\nyo te puedo dar.\nObra en mí Señor, sólo tú\nmi corazón puedes cambiar;\nháblame Señor,\nmi alma te anhela escuchar.'
  },
  {
    'id_hymn': 455,
    'order': 3,
    'type': 'STROPHE',
    'content': 'No dejes Señor que este mundo\nme aleje de tu amor.\nObra en mí Jesús, cámbiame el\ncarácter y mi corazón.\nNo dejes Señor que de tu verdad\nyo me pueda apartar;\nobra en mí Señor,\npara dar a los demás.'
  },
  {
    'id_hymn': 456,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Concédeme, Jesús, poder,\ny gracia para comprender\ncuan dulce es el amar;\ny haz que pueda en santidad,\ndel cielo la felicidad contigo aquí gozar.'
  },
  {
    'id_hymn': 456,
    'order': 2,
    'type': 'STROPHE',
    'content': 'La santa sed impárteme\nde conocerte a ti, y tendré\nentonces la virtud\nde tu perfecta salvación,\ny gozará mi corazón,\nde amor la plenitud.'
  },
  {
    'id_hymn': 456,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Oh, santifícame, Señor!\nMi alma llena de tu amor,\ny haz que pueda oír\ntu voz, tu rostro contemplar,\nen tu hermosura meditar,\ny en ti, por ti vivir.'
  },
  {
    'id_hymn': 457,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Consagraos, oh cristianos,\nal servicio del Señor,\ny armonice vuestra vida\nen acuerdos de amor.\nA sus atrios acercaos;\nvuestros votos renovad;\ny alejados del pecado,\nvuestra vida transformad.'
  },
  {
    'id_hymn': 457,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Vuestro tiempo y talentos,\ndones son de nuestro Dios:\npara usarlos libremente\ny anunciar su amor y voz.\nHoy servid a Jesucristo\ny ofrendas, diezmos dad;\ny Él bendiga vuestra obra,\ny os dé siempre su bondad.'
  },
  {
    'id_hymn': 457,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Dios nos manda amar a todos\nsin ninguna distinción.\nCompasión hacia el hermano\nes su plan de redención.\nJesucristo nos ha dado\nde su amor, que es divinal,\ny en la cruz perdón tuvimos,\npaz y gozo sin igual.'
  },
  {
    'id_hymn': 457,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Hoy venid con alabanzas\nlos que en Cristo ya creéis;\nadoradle, consagrados,\ny su amor recibiréis.\nDadle gloria por su gracia,\nsu palabra santa y fiel;\nrepetid del evangelio\nesta historia por doquier.'
  },
  {
    'id_hymn': 458,
    'order': 1,
    'type': 'STROPHE',
    'content': '¿Cuándo pese nuestros hechos\nnuestro juez con equidad,\nnos tendrá por oro puro\no escoria de maldad?'
  },
  {
    'id_hymn': 458,
    'order': 2,
    'type': 'CHORUS',
    'content': 'En la balanza del Señor\nfuiste pesado;\nde sus palabras a la luz,\nfalto hallado.'
  },
  {
    'id_hymn': 458,
    'order': 2,
    'type': 'STROPHE',
    'content': '¿Oiremos las palabras:\n“Bien has hecho, siervo fiel”;\no del fallo la sentencia:\n“Eres falto, fuiste infiel”?'
  },
  {
    'id_hymn': 458,
    'order': 3,
    'type': 'STROPHE',
    'content': '¿Al Espíritu oiremos\npor nosotros implorar\no, ya tarde, a Dios veremos\nnuestra perdición sellar?'
  },
  {
    'id_hymn': 459,
    'order': 1,
    'type': 'STROPHE',
    'content': 'De corazón te amo, Jesucristo,\npues tú por mí moriste en cruenta cruz;\nal advertir mi condición de injusto\ndejaste el cielo por traerme luz.\n¡Qué grande amor movió tu ser,\nno alcanzo yo a comprender!\nDe gratitud reboso\npues tú me das el gozo.'
  },
  {
    'id_hymn': 459,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Con devoción me inclino a adorarte,\noh Salvador, amigo en verdad.\nMi alma está deseando contemplarte\ny recibir más de tu claridad.\nTus dones son gran bendición,\ncuán dulce es tu comunión;\nsalud y paz concedes\na todos los que quieres.'
  },
  {
    'id_hymn': 459,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Ayúdame, querido Jesucristo,\na serte fiel y el triunfo alcanzar;\ncondúceme a tu hogar bendito\na donde habrá completo bienestar.\nRegálame de tu bondad\ny cólmame de santidad;\nque sea mensajero\ndel mundo venidero.'
  },
  {
    'id_hymn': 460,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Mi espíritu, alma y cuerpo,\nmi ser, mi vida entera,\ncual viva, santa ofrenda\nte entrego a ti, mi Dios.'
  },
  {
    'id_hymn': 460,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Mi todo a Dios consagro\nEn Cristo, el vivo altar.\n¡Descienda el fuego santo,\nsu sello celestial!'
  },
  {
    'id_hymn': 460,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Soy tuyo Jesucristo,\ncomprado con tu sangre;\nhaz que contigo ande\nen plena comunión.'
  },
  {
    'id_hymn': 460,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Espíritu divino,\ndel Padre la promesa,\nsedienta, mi alma anhela\nde ti la santa unción.'
  },
  {
    'id_hymn': 461,
    'order': 1,
    'type': 'STROPHE',
    'content': 'A los pies de Jesucristo,\n¡qué palabras me habla a mí!\n¡Sitio tan feliz, precioso,\ncada día encuentre aquí!\nContemplando lo pasado\nvuelvo a ver hoy la visión\ndel amor tan puro y santo\nque ganó mi corazón.'
  },
  {
    'id_hymn': 461,
    'order': 2,
    'type': 'STROPHE',
    'content': 'A los pies de Jesucristo,\n¡cuánto bien se puede hallar!\nDejo aquí mi mal, mis penas,\ny hallo grato descansar.\nA los pies de Cristo, humilde,\nlloro y gózome en orar,\ny anhelo gracia diaria\nde su plenitud sacar.'
  },
  {
    'id_hymn': 461,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Oh, Señor bendito, dame\ntu divina y santa paz!\nMira con amor a tu hijo,\nvea yo tu dulce faz.\nDame el ánimo de Cristo,\nhazme santo, justo y fiel;\nande yo con Cristo siempre,\nporque mi justicia es Él.'
  },
  {
    'id_hymn': 462,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Nunca esperes el momento\nde una grande acción,\nni que pueda lejos ir tu luz;\nde la vida a los pequeños actos\nda atención,\nbrilla en el sitio donde estés.'
  },
  {
    'id_hymn': 462,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Brilla en el sitio donde estés,\nbrilla en el sitio donde estés;\npuedes con tu luz algún perdido rescatar,\nbrilla en el sitio donde estés.'
  },
  {
    'id_hymn': 462,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Puedes en tu cielo alguna nube disipar,\nhaz a un lado tu egoísmo cruel;\naunque sólo un corazón\npudieres consolar,\nbrilla en el sitio donde estés.'
  },
  {
    'id_hymn': 462,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Puede tu talento alguna cosa descubrir\ndo tu luz podrá resplandecer;\nde tu mano el pan de vida puede aquí venir,\nbrilla en el sitio donde estés.'
  },
  {
    'id_hymn': 463,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Muy lejos, sí, del Salvador estaba\nmorando yo en densa oscuridad,\ncuando al oír aquella historia amada\nmi corazón obtuvo libertad.'
  },
  {
    'id_hymn': 463,
    'order': 2,
    'type': 'CHORUS',
    'content': '“Todo poder me ha dado a mí,\ntodo poder a mí me dio.\nId y predicad el Evangelio y\nestaré siempre en vuestro medio”.'
  },
  {
    'id_hymn': 463,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Las nuevas proclamad a todo el mundo,\nlas nuevas de la eterna salvación.\nÉl con amor acoge al errabundo\ny le ofrece plena redención.'
  },
  {
    'id_hymn': 463,
    'order': 3,
    'type': 'STROPHE',
    'content': '¿Por qué morir pudiendo ser salvados?\n¿por qué seguir por siempre en el pecar?\nHoy por mi Cristo somos invitados\nlibres de las cadenas a avanzar.'
  },
  {
    'id_hymn': 463,
    'order': 4,
    'type': 'STROPHE',
    'content': 'El día del Señor se apresura\ny ya resuena el eco de su voz.\nHacia Él corramos con grande premura;\n¡por siempre redimidos, gloria a Dios!'
  },
  {
    'id_hymn': 464,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Prende hoy tu fuego en mi corazón,\nque arda claro para tu honor.\nA todos mis ruegos\nprestas atención,\nservirte quiero siempre con fervor.'
  },
  {
    'id_hymn': 464,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Mi Redentor, mi Dios y mi Señor,\nFuente de vida y gozo eternal;\noyes mis ruegos, tierno Salvador,\ndas a mi alma luz celestial.'
  },
  {
    'id_hymn': 464,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Quieres ayudarme si en peligro estoy\ny darme fuerza en la tentación.\nSé que en la lucha de tu mano voy,\na la victoria, con tu bendición.'
  },
  {
    'id_hymn': 464,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Con tu luz eterna me iluminarás\ndando a mi vida luz para triunfar.\nSé que a tu regreso me coronarás\ny por los siglos yo te he de alabar.'
  },
  {
    'id_hymn': 465,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Lleva tu lumbrera con luz verdadera\nalumbrando entera al fiel servidor;\nsigue con paciencia y con diligencia\nayudando al pecador.'
  },
  {
    'id_hymn': 465,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Sé firme, brilla en el sendero\njusto y verdadero que conduce a Sión.\nAnda pues sincero en pos del Cordero\nque concede salvación.'
  },
  {
    'id_hymn': 465,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Que tu luz prendida arda sin medida,\nalma redimida por el buen Jesús;\nque así alumbre y dé certidumbre\ndel milagro de la cruz.'
  },
  {
    'id_hymn': 465,
    'order': 3,
    'type': 'STROPHE',
    'content': '¿Arde en ti el anhelo de impartir consuelo,\nde guiar al cielo a cada transgresor?\nMira más a Cristo tan amante y listo\na salvar al pecador.'
  },
  {
    'id_hymn': 466,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Cómo podremos hoy, ante tu amor,\ncual Magdalena ayer dar lo mejor!\nQue nuestro ofrendar puedas tú aceptar\nen honra a ti, en honra a ti.'
  },
  {
    'id_hymn': 466,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Quiero de corazón mi ofrenda dar;\nsincera devoción ante tu altar.\nNo es la cantidad,deseas voluntad;\na ti Señor, con todo amor.'
  },
  {
    'id_hymn': 466,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Quisiera consolar al triste aquí,\ncon nuevas de salud que ya viví.\nTraerlo a Jesús, fuente de vida y luz;\nque venga a ti, que venga a ti.'
  },
  {
    'id_hymn': 466,
    'order': 4,
    'type': 'STROPHE',
    'content': 'He de servirte, sí, mi Salvador;\ncon toda devoción darte mi amor.\nY que al terminar este peregrinar\ndescanse en ti, confiado en ti.'
  },
  {
    'id_hymn': 467,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Debemos oír y seguir al Maestro,\nÉl es nuestro ejemplo y fiel dirección.\nY al conducirnos el Único diestro,\nseguir siempre quiero su invitación.\nNos llama amoroso a este sendero,\nseguirle yo anhelo, por él quiero ir.\nSu tierno llamado me es placentero,\nen su compañía es dulce vivir.'
  },
  {
    'id_hymn': 467,
    'order': 2,
    'type': 'STROPHE',
    'content': 'El Maestro llama, la senda está oscura;\ntristezas, peligros, tendré que afrontar.\nIré adelante, la jornada es dura,\nmás sé que el maestro\nconmigo ha de estar.\nProsigo con gozo, mirando al cielo,\nsu ayuda divina no me ha de faltar.\nTambién mi trabajo haré con denuedo,\nasí el Maestro se ha de agradar.'
  },
  {
    'id_hymn': 467,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Y desde temprano el Maestro llama,\n¿a su dulce ruego querrás acudir?\nTu suerte hoy echa con su pueblo y clama:\nel tiempo se acaba, ¿por qué resistir?\nAcude a Él pronto, a Cristo apela,\ntu caso Él sólo podrá remediar.\nMuy tarde se hace,\n¿por qué tanta espera?,\nsi hoy tú te entregas, te ha de salvar.'
  },
  {
    'id_hymn': 468,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Mi querido riachuelo\nabundante y vivaz;\nsiempre yo de ti me acuerdo,\nya al verte siento paz.'
  },
  {
    'id_hymn': 468,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Riachuelo refrescante,\ncon tus aguas de cristal;\ndonde Dios gratificante,\nbrindas dicha celestial.'
  },
  {
    'id_hymn': 468,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Riachuelo transparente,\nsaludable manantial;\nson tus aguas permanentes,\ntraes gozo espiritual.'
  },
  {
    'id_hymn': 468,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cuán alegre el pajarillo\nque su sed ha de calmar;\nen sus alas cuánto brillo,\ny cuán dulce es su trinar.'
  },
  {
    'id_hymn': 468,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Avanzando tú desciendes\nhasta el anchuroso mar,\na las nubes luego asciendes\npara el ciclo comenzar.'
  },
  {
    'id_hymn': 469,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Dame un puro corazón\nlibre ya del pecar.\nQue renovado en tu perdón\nse goce en ayudar.'
  },
  {
    'id_hymn': 469,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Un corazón rendido a ti,\ntrono del Salvador;\nhumilde y sumiso, sí,\ndo reine tu amor.'
  },
  {
    'id_hymn': 469,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Que cada pensamiento esté\nguiado por tu amor,\nperfecto, justo y con fe\ny así te rinda honor.'
  },
  {
    'id_hymn': 469,
    'order': 4,
    'type': 'STROPHE',
    'content': 'De tu naturaleza, sí,\ndame participar;\ntu nuevo nombre escribe en mí,\ny a todos pueda amar.'
  },
  {
    'id_hymn': 470,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Feliz el día en que escogí\nservirte mi Señor y Dios!\nPreciso es que mi gozo en ti\nlo muestre hoy con obra y voz.'
  },
  {
    'id_hymn': 470,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Soy feliz! ¡soy feliz!\nY en su favor me gozaré.\nEn libertad y luz me vi\nCuando triunfó en mí la fe,\ny el raudal carmesí,\nsalud de mi alma enferma fue.'
  },
  {
    'id_hymn': 470,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Del mundo oscuro ya salí:\nde Cristo soy y mío es Él;\nsu senda con placer seguí,\nresuelto a serle siempre fiel.'
  },
  {
    'id_hymn': 470,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Reposa débil corazón,\na tus contiendas pon ya fin;\ntendrás más noble posesión\ny parte en superior festín.'
  },
  {
    'id_hymn': 471,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Si tú triste estás, y no tienes paz,\ncuéntaselo a Él todo en oración;\nÉl te escuchará, te responderá\ndándote consolación.'
  },
  {
    'id_hymn': 471,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Qué felicidad estar con Él!\n¡Qué felicidad vivir con Él!\nVive siempre fiel\npara el Salvador,\ny serás feliz así.'
  },
  {
    'id_hymn': 471,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Si en la lucha sientes tu fe flaquear,\ncuéntaselo a Él todo en oración;\nte dará valor y vencer podrás\nal maligno tentador.'
  },
  {
    'id_hymn': 471,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Si asechado estás por la tentación,\ncuéntaselo a Él todo en oración;\ny verás que al fin participarás\nde esa gran felicidad.'
  },
  {
    'id_hymn': 472,
    'order': 1,
    'type': 'STROPHE',
    'content': 'El amor de Dios siento en mi corazón,\nel amor de Dios, el amor de Dios;\nÉl me ha dado hoy también su salvación,\ngloria a Cristo por su amor.'
  },
  {
    'id_hymn': 472,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Cristo es mío, gloria sea a Él.\nÉl me ha dado paz y felicidad;\nCristo es mío, gloria sea a Él,\nmío por la eternidad.'
  },
  {
    'id_hymn': 472,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Él ha puesto en mi alma una dulce paz,\nes la santa paz, es la paz de Dios;\ny al momento Él me da la libertad,\nporque es mío en verdad.'
  },
  {
    'id_hymn': 472,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Él me ha dado gozo y también amor,\nyo lo siento en mí, yo lo siento en mí;\ny a Él yo quiero siempre serle fiel\ny servirle sólo a Él.'
  },
  {
    'id_hymn': 472,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Él me guarda siempre, me sostiene fiel,\npor que soy de Él, porque soy de Él;\nquiero yo también ser\nmuy brillante luz y alabar a mi Jesús.'
  },
  {
    'id_hymn': 473,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Por el camino, con sol radiante,\nvoy de la mano del Salvador.\n“Estoy contigo a cada instante”,\nha prometido el buen pastor.'
  },
  {
    'id_hymn': 473,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Luz celestial que alumbra el sendero,\nllena mi alma de bendición.\nMe regocijo en el Cordero,\nquiero alabarle de corazón.'
  },
  {
    'id_hymn': 473,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Sombras descienden sobre el sendero\nmas no me ocultan de ti Señor.\nEl ir contigo es placentero,\neres mi guía, mi Redentor.'
  },
  {
    'id_hymn': 473,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Sigo con cantos de alabanza,\nla senda angosta de mi Jesús;\niluminado con la esperanza\nque se difunde desde la cruz.'
  },
  {
    'id_hymn': 474,
    'order': 1,
    'type': 'STROPHE',
    'content': '¿Cómo podré estar triste?,\n¿cómo entre sombras ir?,\n¿cómo sentirme sólo? y en el dolor vivir,\nsi Cristo es mi consuelo,\nmi amigo siempre fiel,\nsi aun las aves tienen seguro asilo en Él,\nsi aun las aves tienen seguro asilo en Él.'
  },
  {
    'id_hymn': 474,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Feliz cantando alegre,\nyo vivo siempre aquí;\nsi Él cuida de las aves,\ncuidará también de mí!'
  },
  {
    'id_hymn': 474,
    'order': 2,
    'type': 'STROPHE',
    'content': '“Nunca te desalientes”,\noigo al Señor decir,\ny en su palabra fiado hago al dolor huir.\nA Cristo, paso a paso,\nyo sigo sin cesar,\ny todas sus bondades me da sin limitar,\ny todas sus bondades me da sin limitar.'
  },
  {
    'id_hymn': 474,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Siempre que soy tentado\no que en la sombra estoy,\nmás cerca de Él camino, y protegido voy;\nsi en mí la fe desmaya\ny caigo en la ansiedad,\ntan sólo Él me levanta, me da seguridad,\ntan sólo Él me levanta, me da seguridad.'
  },
  {
    'id_hymn': 475,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Perfecta paz en este mundo vil,\nJesús me dio al quitarme culpas mil.'
  },
  {
    'id_hymn': 475,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Perfecta paz aun en el dolor,\npues junto a mí está el Consolador.'
  },
  {
    'id_hymn': 475,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Perfecta paz si amados lejos van,\nya que los ángeles conmigo están.'
  },
  {
    'id_hymn': 475,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Perfecta paz: es la del Salvador.\nGocemos santa paz con el Señor.'
  },
  {
    'id_hymn': 476,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Tengo paz en mi ser que proviene de Dios\ny nadie me puede quitar;\naunque pruebas aquí dificulten mi andar\nesa paz nunca se ha de ausentar.'
  },
  {
    'id_hymn': 476,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Moro dulcemente, con mi Jesús,\ncada día gozo su santa luz;\nÉl nunca me abandona, dice con amor:\n“Yo te acompaño, ve sin temor”.'
  },
  {
    'id_hymn': 476,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Muchos cantan también de mi Dios y mi Rey\nque brinda su paz sin igual;\nlos problemas y el mal desvanece al llegar\nmi Jesús con su paz celestial.'
  },
  {
    'id_hymn': 476,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Templo debo de ser donde habite en verdad\nel Santo Espíritu hoy,\ny morada tendré en el reino de paz\ndo por gracia con Cristo yo voy.'
  },
  {
    'id_hymn': 477,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Shalom chaverim, shalom chaverim,\nShalom, Shalom;\nle hitraot, le hitraot, Shalom, Shalom.'
  },
  {
    'id_hymn': 477,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Hermanos Shalom, amigos Shalom,\nShalom, Shalom;\nloamos a Dios que ha sido con vos.\nShalom, Shalom.'
  },
  {
    'id_hymn': 477,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Os dio protección y su bendición,\nShalom, Shalom;\ncantad al Señor por todo su amor.\nShalom, Shalom.'
  },
  {
    'id_hymn': 477,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Volvernos a ver, cuán grato placer,\nShalom, Shalom;\nmuy pronto en Sión tendremos canción.\nShalom, Shalom.'
  },
  {
    'id_hymn': 478,
    'order': 1,
    'type': 'STROPHE',
    'content': 'El que habita al abrigo de Dios\nmorará bajo sombras de amor;\nsobre él no vendrá ningún mal\ny en sus alas feliz vivirá.'
  },
  {
    'id_hymn': 478,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Oh, yo quiero habitar al abrigo de Dios,\nsólo allí encontraré,paz y profundo amor.\nMi delicia es con Él comunión disfrutar\ny por siempre su nombre alabar.'
  },
  {
    'id_hymn': 478,
    'order': 2,
    'type': 'STROPHE',
    'content': 'El que habita al abrigo de Dios\nciertamente muy feliz será;\nángeles guardarán su salud\ny sus pies nunca resbalarán.'
  },
  {
    'id_hymn': 478,
    'order': 3,
    'type': 'STROPHE',
    'content': 'El que habita al abrigo de Dios\npara siempre seguro estará;\ncaerán mil y diez mil por doquier,\nmas a él no vendrá mortandad.'
  },
  {
    'id_hymn': 479,
    'order': 1,
    'type': 'STROPHE',
    'content': 'A ti mi Dios he de alzar mis ojos;\npostrado vengo a ti, Señor y Rey.\nMi vida toda entrego a ti, de hinojos;\nqué grato es guardar tu santa ley.'
  },
  {
    'id_hymn': 479,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Y tú, que has hecho cielos, mar y tierra,\nque todo gira a tu voluntad,\nsalvarnos puedes con tu gracia tierna\ny conducirnos a la eternidad.'
  },
  {
    'id_hymn': 479,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Contigo, sólo, estaré seguro,\na ti hoy rindo cuanto tengo y soy;\ntu protección es fuerte como un muro\nque me rodea donde quiera estoy.'
  },
  {
    'id_hymn': 480,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Dicha grande es la del hombre\ncuyas sendas rectas son,\nlejos de los pecadores,\nlejos de la tentación.\nA los malos consejeros\ndeja por temor al mal;\nhuye de la gente impía,\nburladora e inmoral.'
  },
  {
    'id_hymn': 480,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Antes en la ley divina\ncifra su mayor placer,\nmeditando día y noche\nen su divinal saber.\nÉste, como el árbol verde,\nbien regado, y en sazón,\nfrutos abundantes rinde,\ny hojas que perennes son.'
  },
  {
    'id_hymn': 480,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cuanto emprende es prosperado,\nduradero le es el bien.\nMuy diverso resultado\nsacan los que nada creen,\npues se pierden como el tamo\nque el ciclón arrebató,\nde pasiones remolino\nque a millones destruyó.'
  },
  {
    'id_hymn': 480,
    'order': 4,
    'type': 'STROPHE',
    'content': 'En el juicio ningún malo,\npor lo tanto, se alzará.\nEntre justos congregados,\ninsensatos nunca habrá,\nporque Dios la vía mira\npor la cual lo suyos van.\nOtra es la de los impíos:\na la nada volverán.'
  },
  {
    'id_hymn': 481,
    'order': 1,
    'type': 'STROPHE',
    'content': ' ¡Cuánta alegría, Señor, habrá\nal terminar mi lucha acá,\ny de los cielos vengas tú\na librarme de mi cruz!.'
  },
  {
    'id_hymn': 481,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Oh, ven, buen Jesús, mi Señor,\ncontigo yo quiero vivir!\nContigo por la eternidad,\nmi Señor, yo viviré.'
  },
  {
    'id_hymn': 481,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Salta de gozo mi corazón\ncuando medito en la mansión\nque mi Señor fue a preparar\nen la cual yo he de morar.'
  },
  {
    'id_hymn': 482,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Percibe mi alma un son\nde dulce y alegre canción\nque llevo en mi corazón:\n¡Oh, paz, el don de mi Dios!.'
  },
  {
    'id_hymn': 482,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Paz, paz, dulce paz,\ndon admirable de Dios!\n¡Oh, paz, maravilla de paz,\nel don de amor de mi Dios!'
  },
  {
    'id_hymn': 482,
    'order': 2,
    'type': 'STROPHE',
    'content': 'La paz que en la cruz Cristo dio,\ndo todas mis deudas pagó,\nen mí fiel cimiento echó.\n¡Oh, paz, el don de mi Dios!.'
  },
  {
    'id_hymn': 482,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Por rey al Señor coroné,\ny mi alma de paz se llenó,\ny halló el don más rico mi fe:\n¡La paz, el don de mi Dios!.'
  },
  {
    'id_hymn': 482,
    'order': 4,
    'type': 'STROPHE',
    'content': 'En paz con Jesús moraré,\ny cuando a su lado esté\nsu paz inefable tendré:\n¡La paz, el don de mi Dios!.'
  },
  {
    'id_hymn': 483,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Fluye el gozo como un río,\nviene del buen Salvador;\nen su amor sólo confío,\nes tan grande ese amor.'
  },
  {
    'id_hymn': 483,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Santa y dulce paz,\ntierna beatitud;\nregocijo al alma da.\nGozo hallaré, en Él hay salud,\nvida eterna nos dará.'
  },
  {
    'id_hymn': 483,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Ya con Él contemplaremos\nmás de su poder creador;\ninmortales ya seremos\ny no habrá engañador.'
  },
  {
    'id_hymn': 483,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Como lluvia que del cielo\nse derrama en bendición,\nes su Espíritu consuelo\nque da paz y protección.'
  },
  {
    'id_hymn': 483,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Fértil campo está creciendo,\nfruto de justicia es;\ncual torrente está fluyendo,\nvida imparte a la vez.'
  },
  {
    'id_hymn': 484,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Aprendí el gran secreto\nde morar en el Señor;\nmi descanso es completo,\nsin afán y sin dolor.\nVivo ya en su fortaleza,\nme sostiene el Salvador;\nya no siento mi flaqueza,\nfortaléceme su amor.'
  },
  {
    'id_hymn': 484,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Moro en Cristo el Salvador,\ny me gozo en el Señor;\nhoy mi vida se renueva\nen el seno de su amor.'
  },
  {
    'id_hymn': 484,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Este mundo ya no sigo;\nCristo vive en mí por fe.\nSu presencia está conmigo:\ndel pecado me aparté.\nEs Jesús mi fundamento,\nheredero soy con Él;\nde mi gozo es el aliento\nsu palabra es como miel.'
  },
  {
    'id_hymn': 484,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Su presencia es muy preciosa;\nmis pesares ya quitó;\nen la santidad gloriosa\npor su sangre vivo yo.\nEl Espíritu me ha dado\nque me guía al Redentor,\ny mi vida ha llenado\ncon su paz y puro amor.'
  },
  {
    'id_hymn': 485,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Toma tú mi voluntad,\nmi angustiado corazón;\nbrille en mí tu santidad,\ntenga yo tu comunión.'
  },
  {
    'id_hymn': 485,
    'order': 2,
    'type': 'STROPHE',
    'content': ' ¡Qué preciosa paz le das\na mi triste corazón!\n¡Cuánto anhelo ver tu faz,\nir contigo a tu mansión!'
  },
  {
    'id_hymn': 485,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Como quieras yo seré,\nno me dejes solo andar;\nvida sólo en ti tendré,\njunto a ti yo quiero estar.'
  },
  {
    'id_hymn': 486,
    'order': 1,
    'type': 'STROPHE',
    'content': '¿Has tratado de llevar tu carga\nsolo tú, solo tú,\nno sabiendo que tendrás ayuda\nsi acudieres al Señor Jesús?'
  },
  {
    'id_hymn': 486,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Si tengo cargas que solo debo llevar,\npaciente las alzo y acudo a mi Señor;\nsi tengo cruces\nque nadie puede cargar,\nsu ayuda siempre mi Señor\nme presta con amor.'
  },
  {
    'id_hymn': 486,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Nunca olvides que al Calvario solo\nfue Jesús, fue Jesús;\npara darte salvación y vida\ncuando solo sucumbió en la cruz.'
  },
  {
    'id_hymn': 486,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Sólo en Cristo protección y ayuda\nhallarás, hallarás;\nlleva siempre a Él tus cargas todas,.\nque a ninguno rechazó jamás.'
  },
  {
    'id_hymn': 487,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Las cuerdas de amor podrán\nsanar los corazones\nque por el mundo siempre van\ntransidos de dolores.'
  },
  {
    'id_hymn': 487,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Con cantos endulzar podrás\na muchos abatidos\ny de Jesús les hablarás\npodrán ser redimidos.'
  },
  {
    'id_hymn': 487,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cual cuerda de infinito amor\nes la palabra dulce\nque cual fragancia de una flor\na Cristo nos conduce.'
  },
  {
    'id_hymn': 487,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Un acto de genuino amor\nluz da e infunde vida,\ntransforma hasta el pecador\nen alma arrepentida.'
  },
  {
    'id_hymn': 488,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cuando abatido por la adversidad\ncreas ya perdida tu felicidad,\nmira lo que el cielo para ti guardó,\ncuenta las riquezas que el Señor te dio.'
  },
  {
    'id_hymn': 488,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Bendiciones, ¡cuántas tienes ya!\nBendiciones, Dios te manda más;\nbendiciones, te sorprenderás\ncuando veas lo que Dios por ti hará.'
  },
  {
    'id_hymn': 488,
    'order': 2,
    'type': 'STROPHE',
    'content': '¿Andas agobiado por algún pesar?\n¿Duro te parece esa cruz llevar?\nCuenta las promesas del Señor Jesús,\ny de las tinieblas nacerá la luz.'
  },
  {
    'id_hymn': 488,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cuando de otros veas la prosperidad\ny tus pies te lleven tras de su maldad,\ncuenta las riquezas que tendrás por fe,\ndonde el polvo es oro que hollará tu pie.'
  },
  {
    'id_hymn': 489,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Jesús por mí su vida dio.\n¡Cuánto amo al Maestro!\nDel vil pecado me limpió.\n¡Cuánto amo al Maestro!.'
  },
  {
    'id_hymn': 489,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Cuánto amo al Maestro,\na Cristo, el Señor!\n¡Cuánto amo al Maestro,\nmi buen Salvador!.'
  },
  {
    'id_hymn': 489,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Castigo cruel por mí sufrió.\n¡Cuánto amo al Maestro!\nEn cruenta cruz por mí murió.\n¡Cuánto amo al Maestro!.'
  },
  {
    'id_hymn': 489,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Victoria me concederá.\n¡Cuánto amo al Maestro!\nAl cielo al fin me llevará.\n¡Cuánto amo al Maestro!.'
  },
  {
    'id_hymn': 489,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Mi corazón le entrego a Él.\n¡Cuánto amo al Maestro!\nPrometo serle siempre fiel.\n¡Cuánto amo al Maestro!.'
  },
  {
    'id_hymn': 490,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Día a día y a cada instante\nfuerza hallo en mi Salvador.\nEn las pruebas fiel es, y constante,\ny me brinda todo lo mejor.\nAl mezclar trabajo, paz, reposo,\nsoy feliz y gracias yo le doy;\npor su amparo tierno y amoroso,\na su sombra muy seguro estoy.'
  },
  {
    'id_hymn': 490,
    'order': 2,
    'type': 'STROPHE',
    'content': 'A mi lado siempre yo le siento,\nmis afanes Él les da atención;\nda a mi ser solaz y nuevo aliento,\nme rodea con su protección.\nSobre sí mi carga Él ha puesto,\nmis problemas tienen solución;\nconsejero fiel y buen Maestro\nque me anima y guía a su mansión.'
  },
  {
    'id_hymn': 490,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Pueda yo en mis tribulaciones\ntus promesas siempre recordar,\nconservando todas las lecciones\nque tu espíritu me ha de enseñar.\nY al mirar en cada experiencia\nreconozca tu benignidad,\ncómo actúas con tu providencia\ny me ayudas a mostrar bondad.'
  },
  {
    'id_hymn': 491,
    'order': 1,
    'type': 'STROPHE',
    'content': 'La cruz excelsa al contemplar\ndo Cristo allí por mí murió,\nde todo cuanto estimo aquí,\nlo más precioso es su amor.'
  },
  {
    'id_hymn': 491,
    'order': 2,
    'type': 'STROPHE',
    'content': 'No busco gloria ni honor\nsino en la cruz de mi Señor.\nLas cosas que me encantan más\nlas sacrifico por su amor.'
  },
  {
    'id_hymn': 491,
    'order': 3,
    'type': 'STROPHE',
    'content': 'De su cabeza, manos, pies,\nbrotó la sangre carmesí.\nCorona de espinas fue\nla que Jesús llevó por mí.'
  },
  {
    'id_hymn': 491,
    'order': 4,
    'type': 'STROPHE',
    'content': 'El mundo entero no será\ndádiva digna de ofrecer.\nAmor tan grande y sin igual\nen cambio exige todo el ser.'
  },
  {
    'id_hymn': 492,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Lo que anima al corazón\nen Cristo cimentado está;\nacude a Él en oración\ny así tu senda brillará.\nUn fatigado hombre hallé\nluchando con dificultad;\n“¿y qué le anima?”, pregunté.\n“¡De Jesucristo su bondad!”.'
  },
  {
    'id_hymn': 492,
    'order': 2,
    'type': 'STROPHE',
    'content': 'A otro con espada vi,\nllevaba en alto su pendón;\nvaliente era, advertí,\nluchaba con gran decisión.\nDespués con Él me encontré,\nqué buena oportunidad;\n“¿y qué le anima?”, pregunté.\n“¡De Jesucristo su bondad!”.'
  },
  {
    'id_hymn': 492,
    'order': 3,
    'type': 'STROPHE',
    'content': 'También a otro encontré\ndesamparado de amistad,\nde su estoicismo me asombré,\ntan libre de la vanidad.\nCual el Maestro iba a pie,\nluchaba con tenacidad;\n“¿y qué le anima?”, pregunté.\n“¡De Jesucristo su bondad!”.'
  },
  {
    'id_hymn': 492,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Por esta vida al transitar\ncargados de conflictos mil\na Cristo hemos de imitar\nsiguiéndole a su redil.\nSegura su promesa es:\n“Contigo cada día estoy”.\nSin desmayar luchemos pues\ncual su venida fuera hoy.'
  },
  {
    'id_hymn': 493,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Señor, en ti confío\ny siempre confiaré;\npues brilla en mi alma\nla antorcha de la fe.\nAl cielo cuántas veces\nla vista en mi aflicción\nalcé, y consuelo dulce\nhalló mi corazón.'
  },
  {
    'id_hymn': 493,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Me es grato, si yo sufro,\nen horas de ansiedad,\nsaber que desde el cielo\nme miras con piedad;\nque sientes tú mis penas,\nconoces mi dolor,\nque escuchas tú mis ayes,\nme envías tu favor.'
  },
  {
    'id_hymn': 493,
    'order': 3,
    'type': 'STROPHE',
    'content': 'La fe que al hombre anima,\ntu más precioso don,\nes luz en las tinieblas,\nalivio en la aflicción,\namparo al desvalido,\nal náufrago, salud,\ntesoro de alegría,\ncimiento de virtud.'
  },
  {
    'id_hymn': 493,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Por eso te adoro,\npor eso creo en ti,\nde quien preciosos dones\nsin precio recibí.\nConfirma y acrecienta,\nSeñor, mi humilde fe;\ny siendo tuyo ahora,\npor siempre lo seré.'
  },
  {
    'id_hymn': 494,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Oh, Cristo mío, eres tu mi amigo fiel;\nseguro amparo sólo en ti tendré!\nEn mis aflicciones, buen Jesús, iré a ti,\ny consuelo y dicha me darás, ¡oh, sí!'
  },
  {
    'id_hymn': 494,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Cristo, ven más cerca\npaz perfecta en mi alma pon;\ncerca, sí, más cerca de mi corazón.'
  },
  {
    'id_hymn': 494,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cuando en la noche vea yo estrellas mil,\ntu voz gloriosa pueda mi alma oír.\nHaz que yo medite en tu tierno y dulce amor,\ny que así te alabe lleno de fervor.'
  },
  {
    'id_hymn': 494,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Aunque esta vida tenga yo que abandonar,\ncorona hermosa tú me ceñirás.\nY con dulce canto tu bondad ensalzaré,\ndo contigo en gloria siempre moraré.'
  },
  {
    'id_hymn': 495,
    'order': 1,
    'type': 'STROPHE',
    'content': 'No te dé temor hablar por Cristo,\nhaz que brille en ti su luz;\nal que te salvó confiesa siempre,\ntodo debes a Jesús.'
  },
  {
    'id_hymn': 495,
    'order': 2,
    'type': 'CHORUS',
    'content': 'No te dé temor, no te dé temor,\nnunca, nunca, nunca.\nEs tu Salvador amante;\nNunca, pues, te dé temor.'
  },
  {
    'id_hymn': 495,
    'order': 2,
    'type': 'STROPHE',
    'content': 'No te dé temor vivir por Cristo\ncuanto de tu parte está;\nobra con amor, con fe y constancia:\ntus trabajos premiará.'
  },
  {
    'id_hymn': 495,
    'order': 3,
    'type': 'STROPHE',
    'content': 'No te dé temor sufrir por Cristo\nlos reproches, o el dolor;\nsufre con amor tus pruebas todas,\ncual sufrió tu Salvador.'
  },
  {
    'id_hymn': 495,
    'order': 4,
    'type': 'STROPHE',
    'content': 'No te dé temor morir por Cristo:\nvida y verdad es Él;\nÉl te llevará con gran ternura\na su célico vergel.'
  },
  {
    'id_hymn': 496,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Nunca estéis desanimados:\ngracia divina obtendréis;\nCristo os sostiene en la lucha,\ny en su poder triunfaréis.'
  },
  {
    'id_hymn': 496,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Nunca os rindáis, nunca os rindáis,\nnunca os rindáis en las pruebas;\nCristo las desterrará;\nfiad en Jesús, fiad en Jesús;\ncuanto más duras las luchas,\ntanto más gracia os dará.'
  },
  {
    'id_hymn': 496,
    'order': 2,
    'type': 'STROPHE',
    'content': '¿Qué hay si os oprimen las cargas?\n¿qué hay si es sombrío el vivir?\nVed hacia el lado risueño,\nvuestro camino al seguir.'
  },
  {
    'id_hymn': 496,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Nunca estéis desanimados:\nsu brazo os apoyará;\nsiempre confiad en su gracia;\nvuestro luchar premiará.'
  },
  {
    'id_hymn': 497,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Por la justicia de Jesús,\nla sangre que por mí vertió,\nalcánzase perdón de Dios\ny cuanto bien nos prometió.\nQué sólo Él rescata sé;\nsegura base es de mi fe,\nsegura base es de mi fe.'
  },
  {
    'id_hymn': 497,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Así turbada no veré,\nmi paz, su incomparable don;\naun cuando un tiempo oculto esté\nme otorgará su bendición.\nEn mí no puedo hallar jamás\nla base firme de la paz,\nla base firme de la paz.'
  },
  {
    'id_hymn': 497,
    'order': 3,
    'type': 'STROPHE',
    'content': 'En la tormenta es mi sostén\nel pacto que juró y selló;\nsu amor es mí supremo bien,\nsu amor que mi alma redimió.\nJesús, la peña, me será\nbase de amor que durará,\nbase de amor que durará.'
  },
  {
    'id_hymn': 498,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cuando en la lucha me falte poder,\n¿alguien sabrá, alguien sabrá,\nquién a mis ayes fin puede poner?\nAlguien sabrá: es Cristo.'
  },
  {
    'id_hymn': 498,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Alguien sabrá, alguien sabrá;\naunque me oprima y me tiente Satán,\nhay quien me guardará siempre;\nalguien sabrá: es Cristo.'
  },
  {
    'id_hymn': 498,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Olas de pruebas no las temeré;\nalguien sabrá, alguien sabrá;\npues cuando mi alma en las sombras esté,\nalguien sabrá: es Cristo.'
  },
  {
    'id_hymn': 498,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Débil, herido, abrumado del mal,\nalguien sabrá, alguien sabrá;\nmiro con ansia al hogar celestial;\nalguien sabrá: es Cristo.'
  },
  {
    'id_hymn': 499,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Como Jesús no hay otro amigo,\nni uno hay, ni uno hay;\nque lleve nuestro dolor consigo,\nni uno hay, ni uno hay.'
  },
  {
    'id_hymn': 499,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Nuestras luchas conoce todas;\nnos guiará hasta el mismo fin.\nComo Jesús no hay otro amigo;\nni uno hay, ni uno hay.'
  },
  {
    'id_hymn': 499,
    'order': 2,
    'type': 'STROPHE',
    'content': 'No hay amigo tan noble y digno,\nni uno hay, ni uno hay;\nque es a la vez justo y benigno,\nni uno hay, ni uno hay.'
  },
  {
    'id_hymn': 499,
    'order': 3,
    'type': 'STROPHE',
    'content': '¿Hay santo que haya desamparado?\nNi uno hay, ni uno hay.\n¿O pecador que haya rechazado?\nNi uno hay, ni uno hay.'
  },
  {
    'id_hymn': 500,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cuando tentado, yo he deseado\nsaber por qué hay muchos aquí\nque andan sin pruebas y sin cuidado\nmientras el mal me asecha a mí.'
  },
  {
    'id_hymn': 500,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Entenderemos nuestras angustias,\nentenderemos nuestro pesar;\nhermano mío, nunca desmayes,\ntodo en el cielo se ha de aclarar.'
  },
  {
    'id_hymn': 500,
    'order': 2,
    'type': 'STROPHE',
    'content': '“Hasta la muerte”, dijo el Maestro,\n“serás tú fiel y trabajarás;\ntodo dolor habrá terminado\ncuando al celeste hogar entrarás”.'
  },
  {
    'id_hymn': 500,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Pronto Jesús vendrá en su gloria,\ny al cielo a todos nos llevará;\nluego de verle en aquel día,\nlo entenderemos, sí, más allá.'
  },
  {
    'id_hymn': 501,
    'order': 1,
    'type': 'STROPHE',
    'content': 'No sé por qué sucede así:\ndeshechos mis deseos son,\nel plan de Dios no puedo ver,\npero lo entenderé.'
  },
  {
    'id_hymn': 501,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Pronto, Él me lo hará entender,\npronto, cuando le pueda ver.\nDe llanto, sí, descansaré,\nPorque algún día lo entenderé.'
  },
  {
    'id_hymn': 501,
    'order': 2,
    'type': 'STROPHE',
    'content': 'No sé decir del gran amor\nque Cristo tiene para mí.\nProbados son mi amor y fe,\npero lo entenderé.'
  },
  {
    'id_hymn': 501,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Las pruebas vienen sin cesar\ny siempre quiérole alabar\nporque el Señor me guiará,\ny Él me lo hará entender.'
  },
  {
    'id_hymn': 502,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Habla, Señor, a mi alma;\nhable tu dulce voz;\nsusurre en tiernas notas:\n“Tú no estás solo no”.\nMi corazón prepara,\npresto a escuchar tu ley;\ncanciones mi alma llenen\nde gratitud y fe.'
  },
  {
    'id_hymn': 502,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Háblame en dulces notas,\nháblame con amor:\n“Ya la victoria es tuya,\nno tengas más temor”.\nHáblame cada día,\nhable tu tierna voz;\nsusurre en mis oídos:\n“Tú no estás solo, no”.'
  },
  {
    'id_hymn': 502,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Habla a tus hijos siempre,\ndales tu santidad,\nllénalos de tu gozo,\nenséñales a orar.\nA ti consagren todo,\nvivan tan sólo en ti,\ntraigan tu reino pronto,\nvean tu rostro aquí.'
  },
  {
    'id_hymn': 502,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Habla cual en lo antiguo\ndiste tu santa ley.\nTus testimonios siempre\nquiero guardar por fe.\nQuiero magnificarte,\nquiero a tu gloria dar\nel grato testimonio\nde obedecer y amar.'
  },
  {
    'id_hymn': 503,
    'order': 1,
    'type': 'STROPHE',
    'content': '¿Oyes cómo Jesucristo\nal cansado ofrece paz?\nPues segura, oh alma mía,\nla promesa a ti se da.\nBien alguno en mí no veo;\ncorrupción tan sólo hay;\nyo cansado y afligido,\nbusco alivio con afán.'
  },
  {
    'id_hymn': 503,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En el arca la paloma\nencontró do reposar;\npara mi alma atribulada\narca el Señor será.\nAbatido vengo, y crece\nel diluvio sin cesar;\nabre, Cristo, y en vano\nrugirá la tempestad.'
  },
  {
    'id_hymn': 503,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Amparada ya en tus brazos\npuede el alma respirar;\nel reposo que prometes\nsiempre da segura paz.\n¡Oh!, cuán dulce en mis oídos\nfue tu acento celestial:\n“Ven a mí, ven; que el descanso\nsólo en mí podrás hallar’’.'
  },
  {
    'id_hymn': 504,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cuando estoy solo, cerca Él está;\ncuando vacilo o tengo temor,\ncon su potencia me sostendrá\nen medio del dolor.'
  },
  {
    'id_hymn': 504,
    'order': 2,
    'type': 'CHORUS',
    'content': 'En mi necesidad, ante la tentación,\nCristo me anima con su bondad\ny me da salvación.'
  },
  {
    'id_hymn': 504,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Es Jesucristo fiel y veraz,\nconstantemente brinda valor;\nalza mis cargas y da solaz\ncon sin igual amor.'
  },
  {
    'id_hymn': 504,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cuando soy débil fuerza hay en Él\npara seguir la senda del bien;\nÉl me conduce como a Israel\nguiándome al Edén.'
  },
  {
    'id_hymn': 504,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Siempre responde a mi llamar,\ntierno vigila mi caminar;\nsu dulce voz yo puedo escuchar\ncuando me inclino a orar.'
  },
  {
    'id_hymn': 505,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Al andar con Jesús\nen su fúlgida luz,\nen mi senda su gloria veré;\ny su voz he de oír,\npues promete vivir\ncon aquel que obedece por fe.'
  },
  {
    'id_hymn': 505,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Su santa ley obedezco por fe,\ny feliz para siempre\ncon Jesús estaré.'
  },
  {
    'id_hymn': 505,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Si trabajo y penar\ntengo aquí que cargar,\nrico pago en Jesús obtendré;\npues alivia su amor\nmi afán, mi dolor,\ncuando ve que obedezco por fe.'
  },
  {
    'id_hymn': 505,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Nunca pude saber\nde su amor el placer\nhasta que todo a Cristo entregué.\nSu bondad, su favor,\nsu poder redentor\ngoza aquel que obedece por fe.'
  },
  {
    'id_hymn': 505,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Fiel amigo Él es;\nsentaréme a sus pies,\ny a su lado el camino andaré.\nSi algo hay que cumplir,\no si hay donde he de ir,\nsin temor obedezco por fe.'
  },
  {
    'id_hymn': 506,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cristo es el mejor amigo\ncuando triste o tentado estés;\ncolmará de bendición\ntu afligido corazón.\nCristo es el mejor amigo.'
  },
  {
    'id_hymn': 506,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Cristo es el mejor amigo,\nCristo es el mejor amigo.\nÉl tus súplicas oirá y tu carga llevará.\n¡Oh, es Cristo el mejor amigo!.'
  },
  {
    'id_hymn': 506,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En Jesús fiel amigo encuentro;\npaz perfecta y plena a mi alma da.\nApoyado en Él estoy,\nmi confianza a Él le doy.\nCristo es el mejor amigo.'
  },
  {
    'id_hymn': 506,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Aunque ande en algún peligro,\no en el valle de la muerte esté,\nningún mal me alcanzará,\npues Jesús me amparará.\nCristo es el mejor amigo.'
  },
  {
    'id_hymn': 506,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Cuando estemos al fin reunidos\ncon los redimidos más allá,\ncantaremos con fervor\nen presencia del Señor.\nCristo es el mejor amigo.'
  },
  {
    'id_hymn': 507,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Es Jesucristo la vida, la luz;\nnos trae del cielo la eterna verdad;\nmártir divino que muere en la cruz\npor darnos libertad.'
  },
  {
    'id_hymn': 507,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Cristo es Pastor, Enviado,\ndivino Emanuel.\nÉl me conduce por sendas de paz\ncomo a su oveja fiel.'
  },
  {
    'id_hymn': 507,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Quita del alma la negra maldad,\nlimpia benigno el infiel corazón;\nes su carácter de suma bondad,\nla misma compasión.'
  },
  {
    'id_hymn': 507,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Fuente preciosa de gracia y salud,\nagua que limpia de toda maldad.\nQuiere llenarnos de su plenitud\ny de su santidad.'
  },
  {
    'id_hymn': 508,
    'order': 1,
    'type': 'STROPHE',
    'content': 'En Cristo hallo amigo\ny amante Salvador;\ncontaré, pues,\ncuánto ha hecho Él por mí.\nHallándome perdido\ne indigno pecador,\nrescatóme y hoy me guarda para sí.\nMe salva del pecado,\nme guarda de Satán;\nÉl promete estar conmigo\nsiempre aquí;\nconsuela mi tristeza,\nme quita todo afán;\ngrandes cosas Cristo ha hecho\nya por mí.'
  },
  {
    'id_hymn': 508,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Jesús jamás me falta,\njamás me dejará;\nes mi fuerte y poderoso protector.\nDel mundo hoy me aparto,\nde toda vanidad,\npara consagrar la vida a mi Señor.\nSi el mundo me persigue,\nsi sufro tentación,\nyo confiando en Él podré vencer aquí;\nsegura es la victoria,\ny elevo mi canción:\ngrandes cosas Cristo ha hecho\nya por mí.'
  },
  {
    'id_hymn': 508,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Bien sé que Cristo en gloria\nmuy pronto volverá,\ny entretanto me prepara\nun bello hogar.\nEn casa de mi Padre,\nmansión de luz y paz,\nel creyente fiel con Él ha de morar.\nY entrado en su gloria,\npesar no sentiré,\npues contemplaré\nsu rostro siempre allí;\nal coro de los santos gozoso me uniré:\ngrandes cosas Cristo ha hecho\nya por mí.'
  },
  {
    'id_hymn': 509,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Es Cristo quien por mí murió,\nmis culpas Él borró.\n¡Cuán grandes penas Él sufrió,\ncuán grande es su amor!'
  },
  {
    'id_hymn': 509,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Oh, cuánto le alabo!\n¡Oh, cuánto le adoro!\ny siempre le sigo de\ntodo corazón.'
  },
  {
    'id_hymn': 509,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Jesús su sangre derramó,\nel Rey por mí murió;\npor mí, porque Él me amó,\nmi iniquidad limpió.'
  },
  {
    'id_hymn': 509,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Oh!, nunca puedo yo pagar\nla deuda de su amor;\nestoy aquí, mi Salvador,\nrecíbeme, Señor.'
  },
  {
    'id_hymn': 509,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Vivir con Él me trae paz,\ncon Cristo habitaré;\npues suyo soy, y de hoy en más,\na nadie temeré.'
  },
  {
    'id_hymn': 510,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Vivo por Cristo, confiando en su amor,\nvida me imparte, poder y valor;\ngrande es el gozo que tengo por Él,\nes de mi senda Jesús guía fiel.'
  },
  {
    'id_hymn': 510,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Oh, Salvador bendito!,\nme doy tan sólo a ti,\npor que tú en el Calvario\nte diste allí por mí;\nno tengo más Maestro,\nyo fiel te serviré;\na ti me doy pues tuyo soy,\nde mi alma eterno Rey.'
  },
  {
    'id_hymn': 510,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Vivo por Cristo, murió pues por mí;\nsiempre servirle yo quisiera aquí;\nporque me ha dado tal prueba de amor\nquiero rendirme por siempre al Señor.'
  },
  {
    'id_hymn': 510,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Vivo por Cristo, doquiera que esté;\nya por su ayuda sus obras haré;\npruebas hoy llevo con gozo y amor,\npues veo en ellas la cruz del Señor.'
  },
  {
    'id_hymn': 510,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Vivo sirviendo, siguiendo al Señor;\nquiero imitar a mi buen Salvador.\nBusco a las almas hablándoles de Él,\ny es mi deseo ser constante y fiel.'
  },
  {
    'id_hymn': 511,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Si la fe me abandonare,\nÉl me sostendrá;\nsi el mal me amenazare,\nÉl me sostendrá.'
  },
  {
    'id_hymn': 511,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Él me sostendrá, Él me sostendrá.\nPorque me ama el Salvador,\nÉl me sostendrá.'
  },
  {
    'id_hymn': 511,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Nunca yo podré afirmarme\ncon tan débil fe;\nmas Él puede dirigirme,\ny me sostendrá.'
  },
  {
    'id_hymn': 511,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Son su gozo y complacencia\ncuantos Él salvó,\ny al salvarme su clemencia,\nÉl me sostendrá.'
  },
  {
    'id_hymn': 511,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Él no quiso ver perdida\nmi alma en la maldad;\ndio su sangre por mi vida,\ny Él me sostendrá.'
  },
  {
    'id_hymn': 512,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Ando con Cristo, somos amigos,\ny mantenemos fiel comunión;\nya de su lado nunca me aparto;\n¡cuánto me alienta su comprensión!'
  },
  {
    'id_hymn': 512,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Ando con Cristo, somos amigos,\ntodas mis cuitas las llevo a Él.\nAndo con Cristo marcho a su lado,\noigo la suave voz de Emanuel.'
  },
  {
    'id_hymn': 512,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Los oropeles vanos del mundo\nabandonélos sin vacilar.\nSiendo su amor tan caro y profundo,\nllena de encanto nuestra amistad.'
  },
  {
    'id_hymn': 512,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Hasta las pruebas que en mi camino\nquieren quitarme todo valor,\nsólo son ayos que me conducen\na la presencia del Salvador.'
  },
  {
    'id_hymn': 513,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Ser cual mi Cristo, siempre es mi anhelo,\nese es mi ruego y mi oración;\ny que al servirle lo haga con celo,\ncon alegría y emoción.'
  },
  {
    'id_hymn': 513,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Mi aspiración es ser como Cristo,\nser como Él en toda ocasión;\na obedecerle siempre estar listo\npara servirle con devoción.'
  },
  {
    'id_hymn': 513,
    'order': 2,
    'type': 'STROPHE',
    'content': '¡Oh, como tú: paciente y amante,\nhumilde y bueno de corazón!\nSé que mis ruegos no han de cansarte,\ntú los escuchas con compasión.'
  },
  {
    'id_hymn': 513,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Oh, como tú: fiel e inocente,\namable, tierno y perdonador!\nEs mi deseo ser muy prudente,\nsiempre sereno, lleno de amor.'
  },
  {
    'id_hymn': 513,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Ser como tú, en todo imitarte,\nque nueva vida tú me darás;\ny tus pisadas siga constante\nque al cielo un día me llevarás.'
  },
  {
    'id_hymn': 514,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Jehová es mi Pastor,\nme apacienta con amor,\nes sus pastos delicados paceré;\ndescansando sin temor\nal abrigo del Señor,\nde las aguas de reposo beberé.'
  },
  {
    'id_hymn': 514,
    'order': 2,
    'type': 'CHORUS',
    'content': 'El Señor me pastorea,\nnada aquí me faltará;\njunto a Él caminaré,\nen su brazo confiaré,\nnada del amor de Dios me apartará.'
  },
  {
    'id_hymn': 514,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Mi Pastor me guardará,\nsiempre me confortará,\npor las sendas de justicia me guiará;\nen el tiempo de dolor\nme será consolador,\nen mi corazón su paz infundirá.'
  },
  {
    'id_hymn': 514,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Oh, tan fiel es mi Pastor!\n¡tan constante es en su amor\nque mi copa rebosando siempre está!\nCuando en valle oscuro esté,\nmal ninguno temeré;\na la casa de mi Dios iré a morar.'
  },
  {
    'id_hymn': 515,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Hay un lugar do quiero estar,\ncerca de ti, Señor;\nallí podré yo descansar\nen tu divino amor.\nOh, ven, Jesús bendito,\nlléname de tu amor;\nmanténme siempre firme\ncerca de ti, Señor.'
  },
  {
    'id_hymn': 515,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Hay un lugar de dulce paz,\ncerca de ti, Señor.\nVivir yo quiero donde estás,\nquerido Salvador.\nOh, ven, Jesús bendito,\nlléname de tu amor;\nmanténme siempre firme\ncerca de ti, Señor.'
  },
  {
    'id_hymn': 515,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Sólo hay segura salvación\ncerca de ti, Señor;\nhay gozo y luz y bendición\ncerca de ti, Señor.\nOh, Salvador bendito,\nrecibe a un pecador,\ny tómame en tus brazos\nde paternal amor.'
  },
  {
    'id_hymn': 516,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Oh!, yo quiero andar con Cristo,\nquiero oír su tierna voz,\nmeditar en su palabra\nsiempre andar de Él en pos.\nConsagrar a Él mi vida,\ncumplir fiel su voluntad;\ny algún día con mi Cristo,\ngozaré la claridad.'
  },
  {
    'id_hymn': 516,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Oh, sí, yo quiero andar con Cristo!\n¡Oh, sí, yo quiero vivir con Cristo!\n¡Oh, sí, yo quiero servir a Cristo!\nQuiero serle un testigo fiel.'
  },
  {
    'id_hymn': 516,
    'order': 2,
    'type': 'STROPHE',
    'content': '¡Oh!, yo quiero andar con Cristo,\nÉl vivió en santidad;\nen la Biblia yo lo leo,\ny yo sé que es la verdad.\nCristo era santo en todo,\nel Cordero de la cruz;\ny yo anhelo ser cristiano,\nseguidor de mi Jesús.'
  },
  {
    'id_hymn': 516,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Oh!, yo quiero andar con Cristo,\nde mi senda Él es la luz;\ndejaré el perverso mundo,\ncargaré aquí mi cruz.\nEste mundo nada ofrece,\nCristo ofrece salvación;\ny es mi única esperanza\ngozar vida eterna en Sión.'
  },
  {
    'id_hymn': 517,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Fuera de ti nada espero,\nmi buen Salvador;\nen la tierra nada quiero,\nsólo a ti, Señor.'
  },
  {
    'id_hymn': 517,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Sólo tú, sólo tú\nbrindas el eterno amor.\nSólo tú, sólo tú\neres mi Pastor.'
  },
  {
    'id_hymn': 517,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Si amigos mil tuviera,\nbienes y salud,\nnada me satisficiera\nen su plenitud.'
  },
  {
    'id_hymn': 517,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Nadie hay tan noble y digno,\nde buen corazón,\nque conmigo sea benigno,\ntenga compasión.'
  },
  {
    'id_hymn': 517,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Olvidarte no podría,\nte amo, mi Señor;\npues sin ti no existiría,\nfiel perdonador.'
  },
  {
    'id_hymn': 518,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Mi Redentor, el Rey de gloria,\nque vive yo seguro estoy;\ny da coronas de victoria;\na recibir la mía voy.'
  },
  {
    'id_hymn': 518,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Que permanezca, no pidáis,\nentre el bullicio y el vaivén;\nel mundo hoy dejar quisiera,\naun cuando fuese cual Edén.\nEl día, nada más, aguardo\nque el Rey me diga: “Hijo, ven”.'
  },
  {
    'id_hymn': 518,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En mi Señor Jesús confío,\nsu sangre clama a mi favor;\nes dueño Él de mi albedrío,\nestar con Él es lo mejor.'
  },
  {
    'id_hymn': 518,
    'order': 3,
    'type': 'STROPHE',
    'content': 'De tanto amor me maravillo,\ny no me canso de cantar;\nme libertó de mi peligro,\nsufriendo todo en mi lugar.'
  },
  {
    'id_hymn': 518,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Consuélome en su larga ausencia\npensando: pronto volverá;\nentonces su gloriosa herencia\na cada fiel Jesús dará.'
  },
  {
    'id_hymn': 519,
    'order': 1,
    'type': 'CHORUS',
    'content': 'Por redimirme Él murió por mí,\nvertió en la cruz\nsu sangre carmesí;\nno existe paz en el pecar\nni nada que buscar,\nmás en la cruz hay vida para mí.'
  },
  {
    'id_hymn': 519,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Desorientado sin Jesús viví;\ntodo giraba sólo en torno a mí;\nmas con su voz Él me llamó,\nmi vida así cambió\nal comprender que Él murió por mí.'
  },
  {
    'id_hymn': 519,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Me dio alegría, paz, consolación\npues su palabra de iluminación,\nseñala el camino a Dios,\nseguir de Cristo en pos;\nconsciente soy que Él murió por mí.'
  },
  {
    'id_hymn': 519,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Me falta mucho aún\npor comprender,\nmas sé que en Cristo\npuedo obedecer;\nmis culpas ya Él perdonó,\nsu amor me libertó\ny soy feliz pues Él murió por mí.'
  },
  {
    'id_hymn': 520,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Tú has venido a la orilla,\nno has buscado ni a sabios ni a ricos;\ntan sólo quieres que yo te siga.'
  },
  {
    'id_hymn': 520,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Señor, me has mirado a los ojos\ny sonriendo has dicho mi nombre;\nen la arena he dejado mi barca;\njunto a ti buscaré otro mar.'
  },
  {
    'id_hymn': 520,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Tú sabes bien lo que tengo;\nen mi barca no hay oro ni espadas,\ntan sólo redes y mi trabajo.'
  },
  {
    'id_hymn': 520,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Tú necesitas mis manos,\nmi cansancio que a otros descanse,\namor que quiera seguir amando.'
  },
  {
    'id_hymn': 520,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Tú, pescador de otros mares,\nansia eterna de almas que esperan,\namigo bueno que así me llamas.'
  },
  {
    'id_hymn': 521,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Yo sé que nada impuro\ntendrá tu aprobación,\ny sé que en tu presencia\ncontinuamente estoy.'
  },
  {
    'id_hymn': 521,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Me falta hacia el pecado\nsentir honda aversión;\nme falta ser perfecto:\n¿Me lo darás, Señor?'
  },
  {
    'id_hymn': 521,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Jesús del hombre Hijo,\n¡Bendito Salvador!\nya ves cuánto me falta,\nya ves cuán pobre soy.'
  },
  {
    'id_hymn': 521,
    'order': 4,
    'type': 'STROPHE',
    'content': 'A tu piedad me entrego,\nde mí ten compasión,\ntú puedes darme todo:\npues, dámelo, Señor.'
  },
  {
    'id_hymn': 522,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Muy cercano te hallas de tu hijo,\ntu presencia es grato galardón\ny mis preces siempre a ti dirijo;\nhaz que viva en tu comunión.'
  },
  {
    'id_hymn': 522,
    'order': 2,
    'type': 'CHORUS',
    'content': 'A tu lado alegre es la vida\ny sin ti, la vida es aflicción;\neres tú quien brindas acogida\nal mortal, contrito corazón.'
  },
  {
    'id_hymn': 522,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Al andar el áspero sendero,\neres faro en la tempestad\nque adviertes contra el peligro\ny conduces con seguridad.'
  },
  {
    'id_hymn': 522,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Si mis días han de terminarse\nsólo habrá un corto descansar,\npues muy pronto habrás\nde levantarme\npara ir contigo a tu hogar.'
  },
  {
    'id_hymn': 523,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Me acercaré a Jesucristo\ny junto a Él moraré;\npara servirle me alisto;\nsalvo y seguro estaré.'
  },
  {
    'id_hymn': 523,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Junto al Señor cada día,\nmás cerca, sí, yo estaré;\nme llenará de alegría,\na sus pies me rendiré.'
  },
  {
    'id_hymn': 523,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Con mi Jesús muy unido\npacto con Él yo haré.\nNo viviré confundido\npues yo en Él confiaré.'
  },
  {
    'id_hymn': 523,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Fuerza y amor me inspira,\ncómo podré yo dudar;\nÉl me sanó de mi herida,\nsólo amor sabe dar.'
  },
  {
    'id_hymn': 524,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Quiero yo contigo estar,\njunto a ti permanecer,\ny a ti sólo quiero amar\npues me brindas renacer.\nY al momento he de sentir\ntu presencia junto a mí;\ny tu dulce voz oír: “Hijo, ven a mí”.\nY al momento he de sentir\ntu presencia junto a mí\ny tu dulce voz oír: “Hijo, ven a mí”.'
  },
  {
    'id_hymn': 524,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Sé Señor que te ofendí\nporque mucho te falté,\nmas a ti yo me acogí, tu llamado acepté.\nPara darme libertad haz venido hasta mí\ny me hablaste con bondad:\n“Hijo, ven a mí”.\nPara darme libertad haz venido hasta mí\ny me hablaste con bondad:\n“Hijo, ven a mí”.'
  },
  {
    'id_hymn': 524,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cómo yo podré olvidar\ntus dolores y tu cruz;\ntodo fue por perdonar\nmis pecados buen Jesús.\nEres nuestro Mediador, todo de ti recibí,\ny hoy me dices con amor: “Hijo, ven a mí”.\nEres nuestro Mediador, todo de ti recibí,\ny hoy me dices con amor: “Hijo, ven a mí”.'
  },
  {
    'id_hymn': 525,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Hay un lugar do quiero estar\nmuy cerca de mi Redentor;\nallí podré yo descansar\nal fiel amparo de su amor.'
  },
  {
    'id_hymn': 525,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Muy cerca de mi Redentor\nseguro asilo encontraré;\nme guardará del tentador,\ny ya de nada temeré.'
  },
  {
    'id_hymn': 525,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Quitarme el mundo no podrá\nla paz que halló mi corazón;\nJesús amante me dará\nla más segura protección.'
  },
  {
    'id_hymn': 525,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Ni dudas ni temor tendré\nestando cerca de Jesús;\nrodeado siempre me veré\ncon los fulgores de su luz.'
  },
  {
    'id_hymn': 526,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cristo, tu voluntad hágase siempre en mí.\nConfiado en tu bondad,\nsiempre andaré aquí.\nEn medio del dolor, o en medio de la paz,\nme rodeará tu amor: la gloria de tu faz.'
  },
  {
    'id_hymn': 526,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cristo, tu voluntad hago sin vacilar.\n¡Oh!, quita mi maldad\ny en tu senda hazme andar.\nLloraste tú también: confiado a ti iré.\n¡Oh Salvador, mi bien, consuelo mío sé!.'
  },
  {
    'id_hymn': 526,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cristo, tu voluntad gustoso acataré.\nLo haré con lealtad y en ti yo viviré.\nMe gozo en recorrer tus sendas de bondad,\ntu ley obedecer, y hacer tu voluntad.'
  },
  {
    'id_hymn': 527,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Jesús me protege, me da en plenitud;\nen pastos muy tiernos me hará descansar;\nconduce mi alma con solicitud\nal agua de vida, al más bello hogar;\nal agua de vida, al más bello hogar.'
  },
  {
    'id_hymn': 527,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Si el valle sombrío me toca pasar\ncontigo a mi lado temor no tendré;\ntu vara me infunde valor a luchar,\nconfortas mi alma, sostienes mi fe;\nconfortas mi alma, sostienes mi fe.'
  },
  {
    'id_hymn': 527,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Aun en las luchas banquete me das,\nmi copa la llenas ya va a rebosar;\nperfumas mi vida con tu dulce paz,\nme das alegría y gran bienestar;\nme das alegría y gran bienestar.'
  },
  {
    'id_hymn': 527,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Tu misericordia prolongas en mí,\nde bien me rodeas, oh, tierno Pastor;\nconduce mis pasos a servirte aquí\ny encuentre lugar en tu reino de amor;\ny encuentre lugar en tu reino de amor.'
  },
  {
    'id_hymn': 528,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Hay quien vela mis pisadas\nen la sombra y en la luz;\npor las sendas escarpadas\nme acompañará Jesús.\nPor los valles, por los montes,\ndo me lleva su bondad,\nmiro yo los horizontes\nde una nueva claridad.'
  },
  {
    'id_hymn': 528,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Hay quien vela mis pisadas\ny mi senda trazará.\nA las célicas moradas\nes Jesús quien me guiará.'
  },
  {
    'id_hymn': 528,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Hay contacto que me explica\nla presencia del Señor;\nÉl mis penas santifica\ny me libra del temor.\nCristo con su mano herida\nprotección me puede dar\ncuando cruzo de la vida\nel inquieto y fiero mar.'
  },
  {
    'id_hymn': 528,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Un amigo hay, fiel y amante,\nde infinita compasión,\nque confiere paz constante\nal contrito corazón.\nEn su amor hay eficacia,\nes amigo siempre fiel,\nhay en Él verdad y gracia\nes mi escudo y mi broquel.'
  },
  {
    'id_hymn': 529,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Un eterno y grande amor\nhe podido conocer,\npor la gracia del Señor\nque me lo hace comprender.\n¡Oh, que sueño arrobador!\nSiento dulce calma y paz.\nPara siempre es su amor;\nmío es Él, no pido más.'
  },
  {
    'id_hymn': 529,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Más azul el cielo está,\ntiene el campo más verdor,\npero esto no verá\nel que no ama al Salvador .\nAves con más dulce voz,\nplantas bellas del vergel\nme hablan del amor de Dios:\nsuyo soy, y mío es Él.'
  },
  {
    'id_hymn': 529,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Las alarmas y el terror\nno me pueden ya alcanzar :\nen los brazos del Señor\npuedo ahora descansar.\nOjalá que siempre aquí,\nfiando en este amigo fiel,\nyo me acuerde que es así:\nsuyo soy, y mío es Él.'
  },
  {
    'id_hymn': 529,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Para siempre suyo soy;\nnada de Él me apartará.\nYa feliz con Él yo voy;\nde su amor me llenará.\nmás veré su dulce faz;\ngozo y luz se acabarán;\nsuyo soy, no pido más.'
  },
  {
    'id_hymn': 530,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Oh Jesús, Pastor divino!\nAcudimos a rogar\nque desciendas amoroso\ntus corderos a buscar.\n¡Oh Pastor!, ven, tu rebaño\nte reclama sin cesar,\nte reclama sin cesar.'
  },
  {
    'id_hymn': 530,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Al herido del pecado\nno le dejes sucumbir;\nal que va por otra senda\ndéjale tu voz oír.\n¡Ven, Pastor!, el lobo llega\ny nos quiere destruir,\ny nos quiere destruir.'
  },
  {
    'id_hymn': 530,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Guíanos por tus senderos\nal aprisco del amor;\nllévanos cual corderitos\nen tu seno bienhechor.\nGuía, sí, a tus corderos,\namantísimo Pastor,\namantísimo Pastor.'
  },
  {
    'id_hymn': 530,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Oye, Cristo, nuestro ruego,\noye nuestra petición;\nven, ampara tu rebaño\ncon tu santa protección.\nTe los piden tus corderos\ncon humilde corazón,\ncon humilde corazón.'
  },
  {
    'id_hymn': 531,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Es Jesucristo mi todo,\ngrato es cantar su loor,\n¡oh, cuán sublime e infinito\nes su divino amor!\nCuando me vio errabundo,\ncual hijo pródigo,\nvino a buscar y a salvarme,\ny a su redil me llevó.'
  },
  {
    'id_hymn': 531,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Cristo, Cristo, tú eres mi Salvador;\nCristo, Cristo, tuyo seré, Señor.\nTe seguiré donde quiera, si tú guiando vas,\ny al terminar mi carrera,\nen gloria veré tu faz.'
  },
  {
    'id_hymn': 531,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cristo es el lirio del valle,\nla rosa es de Sarón;\nCristo es el astro esplendente,\nla roca de salvación.\nÉl es la fuente de vida, y gozo eternal,\nya satisface mi alma con el maná celestial.'
  },
  {
    'id_hymn': 531,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cristo nació en un pesebre,\nla amarga copa bebió;\ncual inocente cordero,\nen el Calvario murió.\nResucitó de la tumba, y al cielo ascendió,\nmas pronto viene en gloria,\nesta promesa nos dio.'
  },
  {
    'id_hymn': 532,
    'order': 1,
    'type': 4,
    'content': 'Son los mismos pies y es la misma playa\ndonde me llevaste para darme calma,\nallí conocí lo que era gozar\nporque tú me hablaste de la eternidad.\nAl paso del tiempo, “¡qué casualidad!” ,\ndiría la gente, pero no es verdad;\namante guiado con tacto indecible,\nmi miseria humana tú la bendijiste.\nHoy yo te adoro con mente, alma y cuerpo,\npues tú lo mereces divino Maestro.\nYo te doy mi vida, mi Dios Redentor;\nme postro en la roca de mi salvación. '
  },
  {
    'id_hymn': 532,
    'order': 2,
    'type': 3,
    'content': 'Son los mismos pies por ti transformados,\n¡qué grande es tu amor, seguiré tus pasos!'
  },
  {
    'id_hymn': 533,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Gloria a ti Jesús amado,\ngloria al Santo de Israel,\na Aquel que fue humillado\npor la turba impía y cruel.\nGloria a ti, paciente Amigo,\nque nos brindas tu virtud;\ntú venciste al enemigo\npara darnos la salud.'
  },
  {
    'id_hymn': 533,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Tú, Cordero señalado\nque tomaste mi lugar,\npor tu amor no igualado\npuerta me abres a tu hogar.\nPor tu sangre derramada\ndas perdón al pecador;\npara todos hay entrada\nen tu reino acogedor.'
  },
  {
    'id_hymn': 533,
    'order': 3,
    'type': 'STROPHE',
    'content': 'A Jesús entronizado\ncanta el coro celestial,\na Aquel que está sentado\njunto al Padre Eternal.\nIntercede y nos da gracia,\nnos prepara un lugar,\nnos reviste de justicia\ny nos libra de pecar.'
  },
  {
    'id_hymn': 533,
    'order': 4,
    'type': 'STROPHE',
    'content': 'El honor y la alabanza\nÉl es digno de obtener.\nTe adoramos con confianza\npues tú tienes el poder\nde salvar completamente\na quien renunciando a sí\nse confía plenamente\nen tu sangre carmesí.'
  },
  {
    'id_hymn': 534,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Oh, qué amigo nos es Cristo!\nÉl sintió nuestra aflicción\ny nos manda que llevemos\ntodo a Dios en oración.\n¿Vive el hombre desprovisto\nde consuelo y protección?\nEs porque no tiene dicho\ntodo a Dios en oración.'
  },
  {
    'id_hymn': 534,
    'order': 2,
    'type': 'STROPHE',
    'content': '¿Vives débil y cargado\nde temor y tentación?\nA Jesús, tu amigo eterno,\ncuenta todo en oración.\n¿Te desprecian tus amigos?\nDilo a Él en oración:\nen sus brazos cariñosos\npaz tendrá tu corazón.'
  },
  {
    'id_hymn': 534,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Jesucristo es nuestro amigo;\nde esto pruebas mil mostró\nal sufrir el cruel castigo\nque el culpable mereció.\nY su pueblo redimido\nhallará seguridad\nfiando en este amigo eterno\ny esperando en su bondad.'
  },
  {
    'id_hymn': 535,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Hay una voz que habla\nmuy dentro de mi ser;\nel bien me lo señala,\nhacerlo da placer.\nProviene desde el cielo\nsu guía es veraz,\nseguirla siempre anhelo\nme trae dulce paz.'
  },
  {
    'id_hymn': 535,
    'order': 2,
    'type': 'CHORUS',
    'content': 'De dones y belleza\nel mundo lleno está;\nlugar a la tristeza\nen mi alma nunca habrá.'
  },
  {
    'id_hymn': 535,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Temprano en la mañana\ntus obras al mirar\nle dan vigor a mi alma,\nme invitan a orar.\nVer pájaros y flores\nme hacen anhelar,\ncon todos sus colores,\nel celestial hogar.'
  },
  {
    'id_hymn': 535,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Oh voz de Dios tan tierna,\ndivina voz de Dios;\nAquel que nunca yerra\nnos deja oír su voz!\nDe Él mis pensamientos,\nmi alma es también;\nigual mis sentimientos,\ncon Él me encuentro bien.'
  },
  {
    'id_hymn': 536,
    'order': 1,
    'type': 4,
    'content': 'Óyenos Señor, oye la oración;\ninclina tu oído. Danos tu paz. Amén.'
  },
  {
    'id_hymn': 537,
    'order': 1,
    'type': 'STROPHE',
    'content': 'En la hora de oración me allego a Jesús\nÉl me brinda su gracia, me colma de luz.\nAl venir a Él con fe atendido yo soy\ny así caminado, entregado a Él estoy.'
  },
  {
    'id_hymn': 537,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Medicina es Él, en dolor y aflicción,\nal cansado y sufrido\nsiempre presta su atención.'
  },
  {
    'id_hymn': 537,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En la hora de oración nos acepta el Señor\ncomo a niños nos mira,\nnos brinda su amor.\nNuestras cargas ya tomó, y feliz a Él voy,\ny así caminando, entregado a Él estoy.'
  },
  {
    'id_hymn': 537,
    'order': 3,
    'type': 'STROPHE',
    'content': 'En la hora de oración me entrego con fe\nante Él me confieso y paz yo tendré.\nSe conduele de mi ser y mil gracias le doy\ny así caminando, entregado a Él estoy.'
  },
  {
    'id_hymn': 537,
    'order': 4,
    'type': 'STROPHE',
    'content': 'A la hora de oración solicito poder,\nsu ayuda me presta, la puedo tener.\nNo hay duda que otra vez\nperdonado fui hoy,\ny así caminando, entregado a Él estoy.'
  },
  {
    'id_hymn': 538,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Aparte del mundo, Señor, me retiro,\nde lucha y tumultos ansioso de huir;\nde escenas horribles do el mal victorioso\nextiende sus redes y se hace servir.'
  },
  {
    'id_hymn': 538,
    'order': 2,
    'type': 'STROPHE',
    'content': 'El sitio apartado, la sombra tranquila,\nconvienen al culto de ruego y loor;\ntu mano divina los hizo, sin duda,\nen bien del que humilde te sigue, Señor.'
  },
  {
    'id_hymn': 538,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Allí, si tu aliento inspira a mi alma,\ny llega la gracia mi pecho a tocar,\nmis labios podrán, en tu altar encendidos,\ncantar alabanza a tu gloria sin par.'
  },
  {
    'id_hymn': 538,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Te debo tributos de amor y de gracia\npor este abundante y glorioso festín,\ny cantos que puedan oírse en los cielos\npor años sin cuento, por siglos sin fin.'
  },
  {
    'id_hymn': 539,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Es nuestro anhelo conocer\nmás de tu gracia y gran poder;\nlo terrenal no ha de llenar\na nuestra mente y su pensar.\nTu luz nos lleve a la verdad\ny haznos crecer en santidad.'
  },
  {
    'id_hymn': 539,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En nos Señor pon tu temor,\npon reverencia y gran fervor.\nQue al pensar o meditar\ntu luz nos guíe para actuar\ny obedecer tu santa Ley\ncual fieles miembros de tu grey.'
  },
  {
    'id_hymn': 539,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Hemos de amarte más, Señor;\nreconocer más del amor\nque tú nos brindas sin cesar,\ny tu presencia hemos de amar.\nDanos un puro corazón\nque experimente tu perdón.'
  },
  {
    'id_hymn': 539,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Haz que podamos ver tu faz\ncon santo amor, loor y paz;\nlibres al fin de todo mal,\nde pie en el mar que es de cristal,\niluminados por tu luz\nen compañía de Jesús.'
  },
  {
    'id_hymn': 540,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Nada puede ya faltarme,\nporque Dios mis pasos guía\na la tierra saludable,\nen divinos frutos rica.\nDulce néctar de reposo\nson sus aguas cristalinas;\nellas dan salud al alma\ny la llenan de delicias.'
  },
  {
    'id_hymn': 540,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Por la senda me conduce\nde su ley, con mano pía,\npor amor a su gran nombre,\nfuente viva de justicia.\nCuando el tenebroso valle\ncruce de la muerte fría,\nno tendré temor alguno\nsiendo Dios el que me guía.'
  },
  {
    'id_hymn': 540,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Con su vara y su cayado\nme dará consuelo y vida,\ny ante los que me persiguen\nmesa me pondrá, surtida.\nCon el bálsamo divino\nmi cabeza aromatiza,\ny rebosa ya la copa\nque me colma de alegría.'
  },
  {
    'id_hymn': 540,
    'order': 4,
    'type': 'STROPHE',
    'content': 'La misericordia santa\nseguirá la senda mía,\ny de Dios en las mansiones\nmoraré por largos días.\nNada puede ya faltarme\nporque Dios mis pasos guía\na la tierra saludable,\nen divinos frutos rica.'
  },
  {
    'id_hymn': 541,
    'order': 1,
    'type': 'STROPHE',
    'content': 'De mi amante Salvador\ncantaré el inmenso amor;\ngloriaréme en el favor de Jesús.\nDe tinieblas me llamó,\nde cadenas me libró,\nde la muerte me salvó, mi Jesús.'
  },
  {
    'id_hymn': 541,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Mi Jesús! ¡Mi Jesús!\n¡Cuán precioso es el nombre de Jesús!\nCon su sangre me limpió,\nde su gozo me llenó,\nde su vida me dotó, mi Jesús.'
  },
  {
    'id_hymn': 541,
    'order': 2,
    'type': 'STROPHE',
    'content': '¡Oh qué triste condición\nde mi impío corazón!\nLo salvó de perdición mi Jesús.\nMi pecado perdonó,\nde la ruina me salvó,\nde la angustia me sacó mi Jesús.'
  },
  {
    'id_hymn': 541,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Por el mundo al vagar,\nsolitario, sin hogar,\nignoraba el amor de Jesús.\nMas las lágrimas de ayer\nhan pasado, y hoy placer\nya comienzo a tener en Jesús.'
  },
  {
    'id_hymn': 541,
    'order': 4,
    'type': 'STROPHE',
    'content': 'De lo falso a la verdad,\nde lo impuro a santidad,\nya me trajo la bondad de Jesús\nY hecho fuerte en la virtud\nde su perennal salud,\nhimnos doy de gratitud a Jesús.'
  },
  {
    'id_hymn': 542,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Muéstrame tu voluntad\ncada día en tu bondad;\ndame ser humilde y fiel\naunque el mundo sea cruel.'
  },
  {
    'id_hymn': 542,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En peligro o tentación\nseas tú mi salvación;\namparado por tu amor\nsea siempre vencedor.'
  },
  {
    'id_hymn': 542,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Si me acecha el tentador,\nhazme firme, ¡oh Señor!\nMi confianza esté en ti,\nguárdame en tu mano, sí.'
  },
  {
    'id_hymn': 542,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Haga el bien que ya entendí,\ncual tu hijo obre aquí\ny comprenda el gran placer\nque me da el obedecer.'
  },
  {
    'id_hymn': 543,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Un momento siempre existe\npara cada decisión:\npor el bien y la justicia,\npor el mal y perdición.\nDos caminos siempre opuestos\nse disputan el control:\nel de luz que lleva al cielo,\nlas tinieblas al Seol.'
  },
  {
    'id_hymn': 543,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Es de nobles quien defiende\nla verdad impopular,\nsin que obtenga gloria y fama\nque le hagan destacar.\nCuán distinto es el cobarde,\nde las masas sigue en pos, \nsin principios ni carácter, \ntras el lucro va veloz.'
  },
  {
    'id_hymn': 543,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Por los mártires primero\nte ofreciste buen Jesús,\ntu llamado seguiremos,\ncargaremos nuestra cruz.\nAvanzando con denuedo\npor la senda del deber,\nla que a alturas nos conduce\ny ennoblece nuestro ser.'
  },
  {
    'id_hymn': 543,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Aunque el mal abunde mucho\ny prospere el error,\nla verdad es invencible,\nresplandece su fulgor.\nNo se arredra del cadalso,\nni le importa la aflicción;\npues en Dios está su auxilio\ny le presta su atención'
  },
  {
    'id_hymn': 544,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cristo, mi piloto sé\nen el tempestuoso mar.\nfieras ondas mi bajel\nvan a hacerlo zozobrar.\nMas si tú conmigo vas,\npronto al puerto llegaré.\nCarta y brújula hallo en ti.\n¡Cristo, mi piloto sé!'
  },
  {
    'id_hymn': 544,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Todo agita el huracán\ncon indómito furor;\nmas los vientos cesarán\nal mandato de tu voz.\nY al decir que haya paz,\ncederá sumiso el mar.\n¡De las aguas, tú, Señor,\neres mi piloto fiel!'
  },
  {
    'id_hymn': 544,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cuando al fin cercano esté\nde la playa celestial,\nsi el abismo ruge aún\nentre el puerto y mi bajel,\nen tu pecho al descansar\nquiero oír tu voz decir:\n“Nada temas ya del mar,\ntu piloto siempre soy”.'
  },
  {
    'id_hymn': 545,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Triste es vivir sin amor,\nsin el calor de otro ser.\nCuán amargo es el dolor\nsi no hay nadie a quien querer,\nsi no hay nadie a quien querer.\nLa vida se torna gris,\ncesa el canto melodioso,\nno existe un día feliz,\ntodo es oscuro y medroso,\ntodo es oscuro y medroso.'
  },
  {
    'id_hymn': 545,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Sólo el amor satisface,\nel odio y el rencor destruyen.\nSólo el amor deshace\nlas penas que al alma fluyen.\nEl amor es don de Dios,\nno se adquiere, se regala.\nSurge en nuestro corazón\ncuando con fe se demanda,\nsurge en nuestro corazón,\ncuando con fe se demanda.'
  },
  {
    'id_hymn': 545,
    'order': 2,
    'type': 'STROPHE',
    'content': '¡Cuán hermoso es el amor!,\ncrea nobles sentimientos,\ndestruye la sinrazón,\neleva los pensamientos,\neleva los pensamientos.\nAmor, amor verdadero,\nyo te anhelo poseer\ny te reclamo sincero\n¡Transforma todo mi ser!,\n¡transforma todo mi ser!.'
  },
  {
    'id_hymn': 546,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Prefiero a mi Cristo que al vano oropel;\nprefiero su gracia a riquezas sin fin.\nA casas y tierras prefiérole a Él;\nserá de mi alma fuerte paladín.'
  },
  {
    'id_hymn': 546,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Antes que ser rey de una gran nación\ny en pecado gobernar,\nprefiero a mi Cristo, sublime don\ncual el mundo no ha de dar.'
  },
  {
    'id_hymn': 546,
    'order': 2,
    'type': 'STROPHE',
    'content': 'No quiero el aplauso del mundo falaz;\nprefiero en las filas de Cristo servir.\nLa fama del mundo es liviana y fugaz;\nprefiero por siempre a Jesús seguir.'
  },
  {
    'id_hymn': 546,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Más bello que el lirio en su níveo blancor,\nmi Cristo es más dulce aun que la miel.\nSu paz a mi alma dará el Señor;\nyo quiero que Cristo me conserve fiel.'
  },
  {
    'id_hymn': 547,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Contendamos siempre por nuestra fe,\naunque ruga el mundo en derredor;\nnunca el tentador nos podrá vencer,\npues nos librará el Señor.'
  },
  {
    'id_hymn': 547,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Si sufrimos aquí, reinaremos allí,\nen la gloria celestial;\nsi llevamos la cruz por amor de Jesús,\nla corona Él nos dará.'
  },
  {
    'id_hymn': 547,
    'order': 2,
    'type': 'STROPHE',
    'content': 'No seamos tibios de corazón,\nni dejemos nunca el primer amor;\nmantengamos firme la profesión\nde la fe del Salvador.'
  },
  {
    'id_hymn': 547,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Procuremos todos la santidad,\nsin la cual ninguno verá al Señor;\ngozo, paz y eterna felicidad\nCristo da al vencedor.'
  },
  {
    'id_hymn': 548,
    'order': 1,
    'type': 'STROPHE',
    'content': '¿Qué me importan del mundo las penas\ny doblada tener la cerviz?\n¿Qué me importan sufrir en cadenas\nsi me espera una patria feliz?\nResignado, tranquilo y dichoso,\nde la aurora vislumbro la luz;\nmis prisiones las llevo gozoso\npor Jesús, quien venció en la cruz.'
  },
  {
    'id_hymn': 548,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Aunque preso, las horas se vuelan\nen gratísimo y santo solaz:\ncon la Biblia mis males se ausentan,\npues de darme la dicha es capaz.\n¡Libro santo, mi estancia ilumina;\nnunca, nunca te apartes de mí!,\ncontemplando tu bella doctrina,\nno hay males ni penas aquí.'
  },
  {
    'id_hymn': 548,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Evangelio sublime, preciado!\n¡bello pacto de amor sin igual!\nQuiero siempre tenerte a mi lado,\nrefulgiendo cual puro fanal.\nAun en valle de muerte, oscuro,\nel que acude a los pies del Señor\nhallará su consuelo seguro\nen el bello Evangelio de amor.'
  },
  {
    'id_hymn': 549,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Firmes y adelante, huestes de la fe,\nsin temor alguno, que Jesús nos ve!\nJefe soberano, Cristo al frente va\ny la regia enseña tremonlado está.'
  },
  {
    'id_hymn': 549,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Firmes y adelante, huestes de la fe,\nsin temor alguno, que Jesús nos ve!'
  },
  {
    'id_hymn': 549,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Al sagrado nombre de nuestro Adalid,\ntiembla el enemigo, y huye de la lid,\nNuestra es la victoria; dad a Dios loor,\ny oígalo el averno lleno de pavor.'
  },
  {
    'id_hymn': 549,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Muévese potente el pueblo del gran Dios,\npues de su gran Jefe marcha siempre en pos.\nEs un solo cuerpo y uno es el Señor,\nuna la esperanza y uno es el amor.'
  },
  {
    'id_hymn': 549,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Tronos y coronas pueden perecer;\nde Jesús la iglesia firme ha de ser.\nNada en contra de ella prevalecerá,\nporque la promesa nunca faltará.'
  },
  {
    'id_hymn': 550,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Es un tiempo tan terrible\nque hoy nos toca contemplar,\nuna angustia indescriptible\nya se está por desatar.\nGog, Magog van al combate,\nya preparan su arsenal,\nnadie habrá que los rescate\nde su lucha infernal.'
  },
  {
    'id_hymn': 550,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Para el conflicto hermanos\ndeberíais de velar,\ncon la Espada en vuestras manos,\nel poder Él ha de enviar.\nYelmo hay que os protege\nrecubriendo vuestra faz,\nsi seguís a vuestro Jefe,\nÉl os mantendrá en paz.'
  },
  {
    'id_hymn': 550,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Los espíritus malignos\nlos rodean con afán,\ncual legiones de enemigos\ncomo fieras ellos van.\nVienen ya a la batalla\ncon deseos de ganar\nmas Jesús pondráles valla,\nno los dejará avanzar.'
  },
  {
    'id_hymn': 550,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Líder es de los demonios\ny del mundo, engañador;\nen el cielo hay testimonio\nque él es el destructor.\nUsa sus mortales armas\ncon poder muy inusual,\npara descarriar las almas\nque salvó el Rey eternal.'
  },
  {
    'id_hymn': 550,
    'order': 5,
    'type': 'STROPHE',
    'content': 'No dejéis que vuestra mente\nse desvíe de la fe,\nmeditadlo claramente,\nque Jesús su gracia os dé.\nEl fin llega de la historia,\nen la lucha hay que pelear;\nes de Cristo la victoria,\ncon Él vamos a triunfar.'
  },
  {
    'id_hymn': 551,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Es orden del Rey: “¡No durmáis, despertad!\nValientes salid, al maligno venced;\nla espada y escudo ceñid y luchad,\ncon fe y voluntad la victoria obtened”.'
  },
  {
    'id_hymn': 551,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Con gran valor, fiel avanzad,\nde Cristo en pos, ¡adelante, luchad!'
  },
  {
    'id_hymn': 551,
    'order': 2,
    'type': 'STROPHE',
    'content': '“Vencidos no seáis, resistid y triunfad’’,\nos manda Aquel que os da protección.\n“El éxito es vuestro, seguid y ganad”.\nLa voz del Señor tome vuestra atención.'
  },
  {
    'id_hymn': 551,
    'order': 3,
    'type': 'STROPHE',
    'content': 'La causa es de Cristo, luchad con valor,\ngran celo mostrad hasta el día final;\ndoquiera que os mande acudid con amor,\nJesús os guiará a la gloria eternal.'
  },
  {
    'id_hymn': 551,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Confiados seguid que adelante Él va,\nsu gracia os da nuestro fiel capitán.\nCual fuente en desierto su amor brotará,\nvalientes seguid, hacia la Canaán.'
  },
  {
    'id_hymn': 552,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Vamos viajando por el ancho mar;\naunque el turbión, dé temor,\nnavegaremos con todo valor\nde Cristo en pos, al hogar.\nLejos de toda sutil vanidad,\ncon el precioso amor de Jesús,\nguiados somos con seguridad\nhasta el portal de su luz.'
  },
  {
    'id_hymn': 552,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Ruge salvaje la cruel tempestad,\nquiere anegar mi bajel;\nmas al pensar en mi hogar de Israel\nsigo por fe en verdad.\nA la distancia está nuestro hogar,\nde su fulgor divisamos la luz;\nsolos no estamos en nuestro luchar,\nquien va con nos es Jesús.'
  },
  {
    'id_hymn': 552,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Con su poder nuestro buen Salvador\nnos da valor vencedor,\nnueva esperanza y nuevo vigor\nal proseguir con amor.\n¡Oh, qué será ir por fin a su hogar\nacompañados de nuestro Señor,\nglorificados poder disfrutar\nmás de su amor bienhechor!'
  },
  {
    'id_hymn': 553,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Muy en alto peregrinos\nse halla el que os guiará;\nel que quiso elegiros,\nÉl también protegerá.\nAvanzada está la noche,\nya se ve el gran albor;\nno es tiempo de reproche,\nmas de actuar con gran valor.'
  },
  {
    'id_hymn': 553,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Muy en alto peregrinos\nvuestra vista levantad\ny seguid por los caminos\nde Jesús y su bondad.\nPronto el fin de este mundo\nnos ha de sobrevenir;\nque el poder del iracundo\nno os impida proseguir.'
  },
  {
    'id_hymn': 553,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Muy en alto peregrinos\nvuestro estandarte alzad;\nno os halle Dios indignos,\ncual guerreros, avanzad.\nNo temáis a los peligros\nni a las luchas que vendrán;\nenfrentad los enemigos,\nsiempre os perseguirán.'
  },
  {
    'id_hymn': 553,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Muy en alto peregrinos\nvuestra meta fijaréis;\natended a los designios\nde quien quiere que os améis.\nCompasión, perdón, descanso\nen Jesús podréis hallar;\nsoportad la cruz, sed mansos,\nos espera un bello hogar.'
  },
  {
    'id_hymn': 554,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Peregrinos en desierto,\nguíanos Señor Jehová;\nsomos débiles: tu diestra\nfuerte nos apoyará.\nPan del cielo, pan del cielo\na tu errante pueblo da,\na tu errante pueblo da, pueblo da\na tu errante pueblo da.'
  },
  {
    'id_hymn': 554,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Tú, la fuente misma, danos\nagua viva, espiritual;\nnuestra suerte está en tus manos,\ny la herencia del mortal.\nDios benigno, Dios benigno,\nlíbranos de todo error,\nlíbranos de todo error, todo error,\nlíbranos de todo error.'
  },
  {
    'id_hymn': 554,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Desvanece los terrores\nde la orilla del Jordán;\npor ti más que vencedores\nhaz que entremos en Canaán.\nTus bondades, tus bondades\ntema eterno nos serán,\ntema eterno nos serán, nos serán,\ntema eterno nos serán.'
  },
  {
    'id_hymn': 555,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Ten coraje, mi hermano,\nsi tu senda oscura está;\nuna estrella está a tu lado,\nCristo te protegerá.\nSólo en Dios por fe confía,\nfuerza en Él encontrarás;\nsea de noche o de día,\nhaz el bien, haz el bien,\nhaz el bien y triunfarás.'
  },
  {
    'id_hymn': 555,
    'order': 2,
    'type': 'STROPHE',
    'content': 'La política y la astucia,\nhan de perecer las dos;\nno te venza la codicia,\nhaz el bien, confía en Dios.\nFormas de placer evita,\nque no extingan ya tu voz;\namistades sacrifica,\nhaz el bien, haz el bien,\nhaz el bien, confía en Dios.'
  },
  {
    'id_hymn': 555,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Muy odiado o amado,\nesto te ha de pasar,\npuedes ser menospreciado,\nmas no dejes de luchar.\nPon tus ojos siempre en Cristo,\nver podrás brillar su luz;\npaz interna te ha provisto,\nhaz el bien, haz el bien,\nte confortará Jesús.'
  },
  {
    'id_hymn': 556,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Afirma mis pies en tu camino,\nque no titubeen,\nque al final yo pueda llegar.\nComo un niño soy que necesita\nde tus fuertes manos,\ntiernas manos, llenas de amor.'
  },
  {
    'id_hymn': 556,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Afirma mis pies en tu camino,\ny aunque esté cansado,\ninfúndeme aliento, Señor.\nPeligros habrán en mi sendero,\nsi estás a mi lado\nnada he de temer así yo.'
  },
  {
    'id_hymn': 556,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Acepta mi afán de superarme,\ncámbiame el carácter,\ntransforma mi vil condición.\nAfirma mi fe en la esperanza\nde que allá en el cielo\nme darás descanso, Señor.'
  },
  {
    'id_hymn': 557,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Primero oré por luz\npara la senda hallar,\ndonde pudiera con la cruz\nen pos de Cristo andar.'
  },
  {
    'id_hymn': 557,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Luego imploré valor\npara a la lucha ir\nsiempre resuelto y sin temor\nel mal a combatir.'
  },
  {
    'id_hymn': 557,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Siempre pedí más fe:\npues si confío en Dios,\nhasta montañas transpondré\nal ir al cielo en pos.'
  },
  {
    'id_hymn': 557,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Hoy le suplico amor\nhacia la humanidad:\nquiero en el nombre del Señor\ntratarla con bondad.'
  },
  {
    'id_hymn': 557,
    'order': 5,
    'type': 'STROPHE',
    'content': 'Luz de Dios, fe y valor\ntodo lo tengo aquí,\npues cuando oré por el amor,\nyo todo conseguí.'
  },
  {
    'id_hymn': 558,
    'order': 1,
    'type': 'STROPHE',
    'content': 'No hay quien nos diga el día,\nno hay quien la hora sabrá;\nverémosle con alegría,\na Él todo ojo verá.\nVelando y orando estaremos\ngozosos por verle llegar;\ngloriosa esperanza tenemos,\nqué grato es velar y esperar.'
  },
  {
    'id_hymn': 558,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Velando espero,\nvelando espero,\nvelando espero,\nvelando espero por ti.'
  },
  {
    'id_hymn': 558,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Jesús salvación es y vida,\nde maravillosa bondad,\nque da al pecador acogida,\nenséñale toda verdad.\nGozosa se encuentra mi alma\npor su pronta aparición;\nharemos sonar nuestras palmas\nen júbilo de adoración.'
  },
  {
    'id_hymn': 558,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Jesús, Redentor tan amante,\nque escuchas la humilde oración,\nservirte yo quiero al instante\nen todo lugar y ocasión.\nAbrigo en mi ser la esperanza\nde un día poderte mirar,\nformado ya a tu semejanza\ndespués de esperar y velar.'
  },
  {
    'id_hymn': 559,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡A la luz, a la luz,\nal encuentro de Jesús!\nPor Él arde mi deseo.\n¡Oh qué gozo cuando veo\nlos fulgores de la cruz!'
  },
  {
    'id_hymn': 559,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Pronto haz, pronto haz,\nsanto Príncipe de paz,\nque con todos los salvados,\npor tu sangre rescatados,\nyo contemple allí tu faz.'
  },
  {
    'id_hymn': 559,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Dulce son, dulce son,\nde los ángeles canción!\n¡Si sus alas yo tuviera\nvolaría a aquella esfera,\na los montes de Sión!'
  },
  {
    'id_hymn': 559,
    'order': 4,
    'type': 'STROPHE',
    'content': '¡Qué será, qué será,\nen Salem entrado ya,\ndo las calles brillan de oro\nY prorrumpe el santo coro!\n¡cuánto gozo espera allá!'
  },
  {
    'id_hymn': 560,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡A la batalla y a la victoria\nvamos con Dios nuestro Rey!,\nque con su brazo fuerte, robusto,\nsiempre defiende a su grey.\nPues sin temor avancemos\nentusiasmados por fe,\nsiempre alegres cantemos:\n¡Gloria a Dios, nuestro Rey!'
  },
  {
    'id_hymn': 560,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Ni es la carrera de los valientes\nni de los fuertes la paz,\nmas de los fieles en Cristo\nes el eterno solaz.'
  },
  {
    'id_hymn': 560,
    'order': 2,
    'type': 'STROPHE',
    'content': '¡A la batalla y a la victoria!\n¿Quién será este buen Rey?\n¿Quiénes las tropas, los que le siguen\nen esta lucha de fe?\nEs Jehová el poderoso\nde todos reyes el Rey,\nacompañados por todos\nlos que ya son de su grey.'
  },
  {
    'id_hymn': 560,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡A la batalla y a la victoria!\nBajo tan buen General,\nderrotaremos, sí, en seguida\ntodas las fuerzas del mal.\nReinos y tronos, aun mundos,\ntodos al fin pasarán,\npero los fieles en Cristo\nvida eterna tendrán.'
  },
  {
    'id_hymn': 561,
    'order': 1,
    'type': 'STROPHE',
    'content': 'La senda ancha dejaré,\nyo quiero por la angosta andar,\ny muchos no sabrán porqué,\nmas voy a mi celeste hogar.'
  },
  {
    'id_hymn': 561,
    'order': 2,
    'type': 'CHORUS',
    'content': 'No puede el mundo ser mi hogar,\nno puede el mundo ser mi hogar;\nen gloria tengo mi mansión,\nno puede el mundo ser mi hogar.'
  },
  {
    'id_hymn': 561,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Algunos quieren verme ir\npor el sendero del pecar;\noír no puedo su llamar,\npues voy a mi celeste hogar.'
  },
  {
    'id_hymn': 561,
    'order': 3,
    'type': 'STROPHE',
    'content': '¿Por qué no quieres tú buscar,\nsiguiendo en pos del Salvador,\nla hermosa tierra más allá?\n¡Oh!, ven conmigo, pecador.'
  },
  {
    'id_hymn': 562,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Despertad, despertad,\noh cristianos!\nvuestro sueño funesto dejad;\nque el cruel enemigo os acecha,\ny cautivos os quiere llevar.\n¡Despertad!, las tinieblas pasaron;\nde la noche no sois hijos ya,\nmas lo sois de la luz y del día,\ny tenéis el deber de luchar.'
  },
  {
    'id_hymn': 562,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Despertad y bruñid vuestras armas,\nvuestros lomos ceñid de verdad,\ny calzad vuestros pies, aprestados\ncon el grato evangelio de paz.\nBasta ya de profundas tinieblas,\nbasta ya de pereza mortal;\n¡revestid, revestid vuestro pecho\ncon la cota de fe y caridad!'
  },
  {
    'id_hymn': 562,
    'order': 3,
    'type': 'STROPHE',
    'content': 'La gloriosa armadura de Cristo\nacudid con valor a tomar,\nconfiando en que el dardo enemigo\nimpotente se ha de quebrar.\n¡Oh cristianos,\nantorchas del mundo!,\nde esperanza el yelmo tomad,\nembrazad de la fe el escudo,\ny sin miedo corred a luchar.'
  },
  {
    'id_hymn': 562,
    'order': 4,
    'type': 'STROPHE',
    'content': 'No temáis, pues de Dios revestidos,\n¿qué enemigo venceros podrá,\nsi tomáis por espada la Biblia,\nla Palabra del Dios de verdad?\nEn la cruz hallaréis la bandera,\nen Jesús hallaréis Capitán;\nen el cielo obtendréis la corona:\n¡A luchar! ¡A luchar! ¡A luchar!'
  },
  {
    'id_hymn': 563,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Soy peregrino aquí. Al cielo voy.\nEs, pues, mi canto así: Al cielo voy.\nTu muerte en la cruz me lleva a luz\ndo te veré, Jesús. Al cielo voy.'
  },
  {
    'id_hymn': 563,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Si penas tengo aquí, a l cielo voy;\nNo las veré allí, al cielo voy.\nContigo, mi Señor, en gloria y amor,\nno sentiré dolor. Al cielo voy.'
  },
  {
    'id_hymn': 563,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Del mundo de dolor, al cielo voy.\nCon calma y valor, al cielo voy.\n¡Que dicha al fin será ver a Jesús allá!\nÉl mi placer es ya. al cielo voy.'
  },
  {
    'id_hymn': 564,
    'order': 1,
    'type': 'STROPHE',
    'content': 'El camino es escabroso,\ny los pies sangrantes van.\n¿Cuánto dista Canaán?\n¿Cuánto dista Canaán?\nPor su amparo suspiramos\ncada día más y más.\n¿Cuánto aún, cuánto dista Canaán?'
  },
  {
    'id_hymn': 564,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Muy cansados, tan cansados,\nmuy cansados de vagar\npor el desierto estamos ya.\nMuy cansados, tan cansados.\n¿Cuánto aún, cuánto dista Canaán?'
  },
  {
    'id_hymn': 564,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Por el árido desierto\nes penoso el caminar.\n¿Dista mucho Canaán?\n¿Dista mucho Canaán?\nEn la arena están las huellas\nde los que pasaron ya.\n¿Cuánto aún, cuánto dista Canaán?'
  },
  {
    'id_hymn': 564,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Oh, cuán dulce el descanso\nha de ser en nuestro hogar!\n¡ya se acerca Canaán!\n¡ya se acerca Canaán\ndonde todas nuestras penas\nya no volverán jamás!\n¡Cerca ya, ya se acerca Canaán!'
  },
  {
    'id_hymn': 565,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Si la carga es pesada, mirad a Dios;\nsi vuestra alma está cansada, mirad a Dios.'
  },
  {
    'id_hymn': 565,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Levantad la vista al cielo, mirad a Dios;\nsi vuestra alma está cansada, mirad a Dios.'
  },
  {
    'id_hymn': 565,
    'order': 2,
    'type': 'STROPHE',
    'content': 'El deber os llama, hermanos, mirad a Dios;\npues dejad placeres vanos, mirad a Dios.'
  },
  {
    'id_hymn': 565,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cuando el mal parece fuerte, mirad a Dios;\nsi os espanta aun la muerte, mirad a Dios.'
  },
  {
    'id_hymn': 566,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Camino y verdad, tanto como la vida,\nse encuentran en Cristo mi buen Salvador.\nÉl brinda perdón y lo da sin medida\na todo el que acude cual vil pecador.\nNos da nueva vida que lleva al cielo;\nrevela la gloria del Padre eternal.\nConfados en Él proseguimos con celo\nsiguiendo su ejemplo de amor fraternal.'
  },
  {
    'id_hymn': 566,
    'order': 2,
    'type': 'STROPHE',
    'content': 'A finde mirar su santísima gloria\nrequiero el auxilio del Consolador,\nquien muestra el error y da luz y victoria,\ntriunfando del mundo y del tentador.\nRevela el sentido que se halla escondido\nen cada pasaje del libro de Dios;\ny Cristo Jesús mora en mí por su medio\nqueriendo que sea su fiel portavoz.'
  },
  {
    'id_hymn': 566,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Bendito Jesús, yo te pido me ayudes\na ir por la senda que lleva hasta Sión.\nQue pague, por fe, con amor y bondades\nla ofensa maligna y toda agresión.\nConcédeme más de aquel gozo que brindas,\nla paz inefable que da el perdón;\nque lleve a otros las muy gratas nuevas\ndel reino de gloria, tu bella mansión.'
  },
  {
    'id_hymn': 567,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Fiel yo seré, hay quien en mí fe tiene;\npuro seré, hay quien lo apreciará;\nfuerte seré, pues sé que tendré cargas;\nvalor tendré, hay mucho que afrontar;\nvalor tendré, hay mucho que afrontar.'
  },
  {
    'id_hymn': 567,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Siempre amaré al pobre desvalido;\ndaré mis dones sin mirar a quien;\nseré humilde, pues tengo defectos;\nsabré soñar, reír, amar y obrar;\nsabré soñar, reír, amar y obrar.'
  },
  {
    'id_hymn': 568,
    'order': 1,
    'type': 'STROPHE',
    'content': 'La patria amada muy cerca está\ny aún días penosos tendremos acá;\nmas nunca Jesús nos desamparará\ny pronto estaremos unidos allá.'
  },
  {
    'id_hymn': 568,
    'order': 2,
    'type': 'CHORUS',
    'content': 'La patria buscamos de gozo sin par;\nciudad de los santos, glorioso hogar.'
  },
  {
    'id_hymn': 568,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Si nubes oscuras rodean mi ser\no el mar tempestuoso me quiere ahogar,\naún la gran luz de Jesús he de ver\ny con los salvados en Sión he de entrar.'
  },
  {
    'id_hymn': 568,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Borrascas y marestendré que cruzar\nmas ya se vislumbra la playa eternal;\nse acerca la patria, edénico hogar,\ny allá entonaré una canción celestial.'
  },
  {
    'id_hymn': 569,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Solemne me es saber\ny meditar que hoy\nmás cerca de mi hogar estoy,\nmás cerca, sí, que ayer.'
  },
  {
    'id_hymn': 569,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Más cerca estoy, más cerca estoy.\nde mi celeste hogar estoy\nmás cerca hoy que ayer.'
  },
  {
    'id_hymn': 569,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Del cristalino mar, del trono celestial,\nde aquella casa paternal\ndo siempre he de morar:'
  },
  {
    'id_hymn': 569,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Del día de irme allá, dejando aquí mi cruz;\ndel Rey que en refulgente luz\ncorona me pondrá:'
  },
  {
    'id_hymn': 570,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Ruge y brama el mar salvaje,\nfuerte, con furor.\n¿Quién lo enfrenta con coraje?\nSólo el Salvador.'
  },
  {
    'id_hymn': 570,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Cantos de alegría: ¡Viene el Salvador!\nLlégará muy pronto el día\nque no tendremos más temor.\n¡Luchad por fe que Dios os guía,\nal Puerto id, mostrad valor!'
  },
  {
    'id_hymn': 570,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Débil y sin esperanza\nnavegando vas;\nsólo ten en Él confanza,\nfuerza obtendrás.'
  },
  {
    'id_hymn': 570,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Tu barquillo puede hundirse,\npresta atención;\nsi no quieres destruirte\nlucha con tesón.'
  },
  {
    'id_hymn': 570,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Si deseas hoy salvarte\nhas de oír su voz;\nno querrás pues condenarte,\nÉl te lleva a Dios.'
  },
  {
    'id_hymn': 571,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Busquemos la patria de justos y santos,\ndo mora la dicha, do reina el amor.\nDejad, pecadores, fugaces encantos,\nque os ciegan y os llevan a eterno dolor.'
  },
  {
    'id_hymn': 571,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Hermanos viajeros, felices marchemos,\ndelicias eternas allí Dios dará;\npues sobre collados de gloria andaremos,\ny herencia esa tierra de todos será.'
  },
  {
    'id_hymn': 571,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Deseamos, hermano, en camino llevarte.\nPor ti detenidos estamos; ¡oh, ven!\nEn Cristo confía que anhela salvarte\ny hacerte morar en su célico Edén'
  },
  {
    'id_hymn': 571,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Tal vez, desconfado, te estás preguntando:\n“¿Quién puede mi negra\nconciencia limpiar?”.\nJesús es el único; ven, pues, orando:\n“Señor, haz que pueda a tu reino llegar”.'
  },
  {
    'id_hymn': 572,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cual pendón hermoso despleguemos hoy\nla bandera de la cruz,\nla verdad del evangelio, el blasón\ndel soldado de Jesús.'
  },
  {
    'id_hymn': 572,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Adelante, adelante,\nen pos de nuestro Salvador!\nNos da gozo y fe nuestro Rey,\n¡adelante con valor!'
  },
  {
    'id_hymn': 572,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Prediquemos siempre lo que dice Dios,\nde la sangre de Jesús,\ncómo limpia del pecado al mortal\ny le compra la salud.'
  },
  {
    'id_hymn': 572,
    'order': 3,
    'type': 'STROPHE',
    'content': 'En el mundo proclamemos con fervor\nesta historia de la cruz;\nbendigamos sin cesar al Redentor,\nquien nos trajo paz y luz.'
  },
  {
    'id_hymn': 572,
    'order': 4,
    'type': 'STROPHE',
    'content': 'En el cielo nuestro cántico será\nalabanzas a Jesús;\nnuestro corazón allí rebosará\nde amor y gratitud'
  },
  {
    'id_hymn': 573,
    'order': 1,
    'type': 'STROPHE',
    'content': '¿Soy yo soldado de Jesús\ny siervo del Señor?\nNo temeré llevar mi cruz,\nsufriendo por su amor.'
  },
  {
    'id_hymn': 573,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Después de la batalla\nnos coronará,\nDios nos coronará;\nDios nos coronará;\ndespués de la batalla\nnos coronará;\nen aquella santa Sión.'
  },
  {
    'id_hymn': 573,
    'order': 2,
    'type': 'STROPHE',
    'content': ' Lucharon otros por la fe;\nvaliente anhelo ser.\nPor mi Señor yo pelearé,\nconfando en su poder.'
  },
  {
    'id_hymn': 573,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Es menester que sea fel,\nque nunca vuelva atrás,\nque siga siempre en pos de Él,\ny me guiará en paz.'
  },
  {
    'id_hymn': 574,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Los que aman al Señor\neleven su canción,\nque en dulces notas de loor,\nque en dulces notas de loor\nascienda a su mansión,\nascienda a su mansión.'
  },
  {
    'id_hymn': 574,
    'order': 2,
    'type': 'CHORUS',
    'content': 'A Sión caminamos,\nnuestra ciudad tan gloriosa;\nmarchando todos cantamos\nde Dios y la bella mansión'
  },
  {
    'id_hymn': 574,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Unida está, oh Dios,\ntu fiel y amada grey;\ny cantan todos a una voz,\ny cantan todos a una voz\nlos hijos del gran Rey,\nlos hijos del gran Rey.'
  },
  {
    'id_hymn': 574,
    'order': 3,
    'type': 'STROPHE',
    'content': 'En Sión disfrutaréis\nla gracia del Señor,\nque hoy os promete la tendréis,\nque hoy os promete la tendréis\ndel trono en derredor,\ndel trono en derredor.'
  },
  {
    'id_hymn': 574,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Cantemos con fervor,\ndejemos el pesar,\nmarchemos libres de temor,\nmarchemos libres de temor\nal más feliz hogar,\nal más feliz hogar.'
  },
  {
    'id_hymn': 575,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Voy al cielo, soy peregrino,\na vivir eternamente con Jesús;\npues Él abrió ya amplio camino,\nal expirar sobre amarga cruz.'
  },
  {
    'id_hymn': 575,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Voy al cielo, soy peregrino,\na vivir eternamente con Jesús.'
  },
  {
    'id_hymn': 575,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Duelo, muerte, amarga pena, nunca,\nnunca más se encontrarán allá;\npreciosa vida, de gozo llena,\nel alma mía disfrutará.'
  },
  {
    'id_hymn': 575,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Tierra santa, hermosa y pura!,\nentraré en ti, salvado por Jesús;\ny gozaré siempre la ventura,\niluminado con santa luz.'
  },
  {
    'id_hymn': 576,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡De pie, de pie, cristianos!,\nsoldados de la cruz.\nSeguid el estandarte de vuestro Rey, Jesús,\npues victoriosamente sus huestes mandará,\ny al fero enemigo, pujante, vencerá.'
  },
  {
    'id_hymn': 576,
    'order': 2,
    'type': 'STROPHE',
    'content': '. ¡De pie, de pie, cristianos!,\npues suena ya el clarín\nllamando al conﬂicto al bravo paladín.\nSoldados varoniles, henchíos de valor,\nportaos en la lucha con bríos y vigor.'
  },
  {
    'id_hymn': 576,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡De pie, de pie cristianos!,\nen Dios la fuerza está;\nel débil brazo humano bien pronto os faltará.\nTomando la armadura de Dios, con oración,\ndonde el deber os llame, id presto, con tesón.'
  },
  {
    'id_hymn': 576,
    'order': 4,
    'type': 'STROPHE',
    'content': '¡De pie, de pie, cristianos!,\nal finel galardón;\nsi hoy la lucha es recia\nmañana habrá canción.\nQuien salga victorioso corona obtendrá,\ny con el Rey de gloria por siempre vivirá.'
  },
  {
    'id_hymn': 577,
    'order': 1,
    'type': 'STROPHE',
    'content': ' Siervos de Jesús,hombres de verdad,\nguardas del deber, somos, sí.\nLibres de maldad, ricos en bondad,\nfeles en la lid seremos, sí.'
  },
  {
    'id_hymn': 577,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Firmes!, ¡Fuertes! Alcen la bandera\ngrande, noble: emblema del deber.\n¡Pronto!, ¡bravos!, pasen la consigna:\nmarchen, todos, vamos a vencer.'
  },
  {
    'id_hymn': 577,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Nuestro Capitán es ya vencedor,\nÉl nos redimió por su cruz\nGuardas del deber, el nos da poder,\nÉl nos guiará hasta la luz.'
  },
  {
    'id_hymn': 577,
    'order': 3,
    'type': 'STROPHE',
    'content': ' Invencibles son los que con afán\ncada día se dan al deber.\nGrande luz tendrán y recibirán\nmagno galardón del Redentor.'
  },
  {
    'id_hymn': 578,
    'order': 1,
    'type': 'STROPHE',
    'content': 'En sombras de la tarde\nel día ya declina,\ny el sábado se anuncia\ncon gloria vespertina.\nCual brisa refrescante\nen cálido camino,\ncual palma en el desierto,\nalivia al peregrino.'
  },
  {
    'id_hymn': 578,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Durante la jornada\nque ahora ha terminado,\ntrabajo honesto y arduo\nlas horas han llenado.\nAhora a tu reposo\nmi alma agradecida\nse entrega, y te suplica\nla colmes de tu vida.'
  },
  {
    'id_hymn': 578,
    'order': 3,
    'type': 'STROPHE',
    'content': 'En este santo día\nanhelo tu presencia,\npues quiero sin medida\ngozar de tu inﬂuencia.\nMi alma fatigada\nen ti hallará reposo,\ny el sábado bendito\ndaráme santo gozo.'
  },
  {
    'id_hymn': 579,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Dulce paz del cielo, nuestro Huésped ven,\nsábado divino, heraldo del Edén.\nTodos hoy unidos dámoste loor,\ny la bienvenida, caro Salvador'
  },
  {
    'id_hymn': 579,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Dulce paz del cielo, con tu gozo ven,\nsábado divino, brisa del Edén.'
  },
  {
    'id_hymn': 579,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Dulce paz del cielo, llene el corazón;\nalza nuestra vista,danos bendición.\nAbre nuestro oído a tu palabra hoy,\n¡sábado divino, cuán feliz estoy!'
  },
  {
    'id_hymn': 579,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Dulce paz del cielo, don que es del Señor,\nque para sus hijos da el Consolador.\nPuerto en tormenta eres para mí,\ncual refugio amado hay descanso en ti.'
  },
  {
    'id_hymn': 579,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Sábado bendito, sello del Creador,\nno serás borrado por nuestro Señor.\nHaz que nuestras almas en la tempestad,\nsigan adelante, a la eternidad.'
  },
  {
    'id_hymn': 580,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Día glorioso el sábado es,\namarlo quiero y guardarlo en verdad.\nSanto es tu día, con gozo a tus pies,\nculto rendimos a tu gran bondad.'
  },
  {
    'id_hymn': 580,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Sábado santo que dio el Señor,\nmuy bienvenido, en ti adoraré;\ndado al hombre con todo amor,\neres muy santo, yo fiel te honraré.'
  },
  {
    'id_hymn': 580,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Santifcado tú siempre has de ser,\npues eres centro de la misma ley.\nSordo está el mundo no quiere saber\nque eres mandato de nuestro buen Rey.'
  },
  {
    'id_hymn': 580,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Tú, santo día de consagración,\nhas de durar por la eternidad;\nhoy para todos es la invitación\nque ha de llegar a la humanidad.'
  },
  {
    'id_hymn': 580,
    'order': 4,
    'type': 'STROPHE',
    'content': ' ¡Oh, cuánto quiero poder disfrutar\nese descanso en la patria eternal!\nEs mi anhelo con Cristo estar\ncuando a este mundo le llegue el fnal.\nhoy para todos es la invitación\nque ha de llegar a la humanidad.'
  },
  {
    'id_hymn': 581,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Las faenas terminadas,\ncon el nocturnal telón\nque de los celestes atrios\nya desciende en bendición,\nviene el sábado glorioso,\nde lo alto el rico don.'
  },
  {
    'id_hymn': 581,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Depongamos toda carga,\ntoda cuita, todo afán;\ny pidamos ante el Padre,\ndo sus hijos hoy están,\nen el sábado glorioso,\nel divino y vivo pan.'
  },
  {
    'id_hymn': 581,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Padre, tu favor concede;\npor la noche guárdanos;\nque sintamos tu presencia;\ncon la luz despiértanos\nen el sábado bendito,\ntu preciado día, oh Dios.'
  },
  {
    'id_hymn': 582,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Sábado glorioso de santa alabanza\ny santo de reposo, es día del Señor;\nfjado por mi Cristo no tiene ya mudanza\ne invita que rindamos al Creador loor.'
  },
  {
    'id_hymn': 582,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Bienvenido, bienvenido, dado con amor;\nbienvenido, bienvenido, día del Señor.'
  },
  {
    'id_hymn': 582,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Sábado bendito, por Cristo escogido,\nen el que lo creadoda alabanza a Dios.\nQué placentero día tendrá el arrepentido\nque busca sin tardanza obedecer su voz.'
  },
  {
    'id_hymn': 582,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Dame que yo pueda tomar de esa fuente,\ndel agua de la vida que ofreces, Redentor.\nSed tengo de esa agua\nque brota eternamente:\nmi Salvador amante, dulcísimo Pastor.'
  },
  {
    'id_hymn': 583,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Otros seis días de labor\nse van, y viene el reposar.\nEn este día que Dios dio,\nVuelve, alma mía, a descansar.'
  },
  {
    'id_hymn': 583,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Bendice a Cristo, cuyo amor\nreposo dulce da al mortal;\nmayor que en días de labor\nes hoy su gracia celestial.'
  },
  {
    'id_hymn': 583,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Asciendan nuestras preces cual\nincienso grato a Cristo allá,\npues el reposo que Él nos da,\nde paz nuestra alma llenará.'
  },
  {
    'id_hymn': 583,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Y la dulzura de esta paz\nes prenda de la paz mejor\nque gozará el cristiano allá,\nestando junto a su Señor.'
  },
  {
    'id_hymn': 584,
    'order': 1,
    'type': 'STROPHE',
    'content': ' El sábado nuestra delicia\ny sello de su autoridad;\nya la creación da noticia\nque Cristo le dio santidad.\nSantifcación comunica\nsegún lo ha expresado el Señor;\nseñal por la cual certifca\nla obra del gran Hacedor.\nFue para el descanso apartado\ny como conmemoración;\nsabemos que ha sido olvidado\ny es día de meditación.'
  },
  {
    'id_hymn': 584,
    'order': 2,
    'type': 'STROPHE',
    'content': ' El sábado día importante\nbendito en la creación;\nde Dios una orden amante:\n‘‘Dedíquenlo a la adoración’’.\nÉl a descansar nos invita\npues día es de nuestro Señor\ny que olvidemos las cuitas\ngozándonos en su amor.\nDe todos el más delicioso\ny lleno de amor y bondad,\ntransmite del cielo el gozo,\nla dicha de la santidad.'
  },
  {
    'id_hymn': 584,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Por Cristo Jesús fue observado\ndurante su humano vivir,\naun en la tumba ocultado\nnos dio el ejemplo a seguir.\nEs símbolo de ese reposo\nque sólo lo encuentra en Jesús\naquel que le acepta gozoso\ny sigue en pos de su cruz.\nPor siglos, los sábados todos,\ndaremos honor y loor\na Cristo, el Rey de los Cielos,\npor su gran amor redentor.'
  },
  {
    'id_hymn': 585,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Hoy el sábado glorioso\nnos invita a descansar.\n¡Qué tranquilo es el reposo,\ntras el arduo trabajar!'
  },
  {
    'id_hymn': 585,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Dios que el día nos señala\ncon mil pruebas de su amor,\n“santo sábado” lo llama:\nes el día del Señor.'
  },
  {
    'id_hymn': 585,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Para el hombre fue apartado\nen la misma creación;\nfue por Cristo sancionado\ncon su ejemplo y bendición.'
  },
  {
    'id_hymn': 586,
    'order': 1,
    'type': 'STROPHE',
    'content': ' Señor, reposamos en tu santo día,\ncumpliendo el mandato legado por ti.\nReposo buscamos,\nDios nuestro, en tu seno;\nque así ordenaste en el Sinaí\nque así ordenaste en el Sinaí.'
  },
  {
    'id_hymn': 586,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Tus hijos venimos, oh Dios, a tu trono,\nen santa, ferviente, sincera oración;\npostrados pedimos\nque escuches el ruego\nde darnos constante tu fiel protección,\nde darnos constante tu fiel protección.'
  },
  {
    'id_hymn': 586,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Alienta a tus hijos que obtengan victoria,\nque puedan felmente tus leyes cumplir;\ny cuando vinieres,\nSeñor, en tu gloria,\npodamos por siempre contigo vivir,\npodamos por siempre contigo vivir.'
  },
  {
    'id_hymn': 587,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Sábado santo de Jehová\nes este día de solaz.\nEn él adoro al Hacedor,\ny halla mi alma así la paz,\ny halla mi alma así la paz.'
  },
  {
    'id_hymn': 587,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Todas sus horas santas son:\nnunca las vivo para mí,\ny nada vil perturba así\nmi comunión feliz con Dios,\nmi comunión feliz con Dios.'
  },
  {
    'id_hymn': 587,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Esta delicia semanal\nes anticipo aquí de Sión;\nme acerca al trono celestial\nal alentar mi devoción,\nal alentar mi devoción.'
  },
  {
    'id_hymn': 587,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Todo pesar olvido hoy;\ndejo también mi afán cruel.\nDel sábado es autor Jesús:\nríndole entonces culto a Él,\nríndole entonces culto a Él.'
  },
  {
    'id_hymn': 588,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Día santo de Jehová\ndado en la creación,\nmonumento él será,\npuesto como institución.'
  },
  {
    'id_hymn': 588,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Santo sábado día del Señor,\ndedicado a Jehová,\ndescansamos en su honor.'
  },
  {
    'id_hymn': 588,
    'order': 2,
    'type': 'STROPHE',
    'content': ' Pertenece a mi Señor,\npara Él apartado fue;\npacto del poder creador,\nlo honraremos pues por fe.'
  },
  {
    'id_hymn': 588,
    'order': 3,
    'type': 'STROPHE',
    'content': 'En seis días el Señor\nrealizó la creación\ny dispuso con amor\ndía de consagración.'
  },
  {
    'id_hymn': 588,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Muchos marchan sin control\nen pos de la tradición,\nguardan el día del sol\ncon muy poca bendición.'
  },
  {
    'id_hymn': 588,
    'order': 5,
    'type': 'STROPHE',
    'content': 'En la Biblia yo busqué\ndel domingo aprobación,\nsólo el sábado encontré:\nBrinda santifcación.'
  },
  {
    'id_hymn': 589,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Hoy es día de reposo,\ndía santo de solaz;\nes el día venturoso\nque nos trae dulce paz.\nEs el día señalado\ncon el sello del amor;\nnuestro Dios lo ha designado:\nes el día del Señor.'
  },
  {
    'id_hymn': 589,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Hoy cantamos de alegría\nal Autor del santo don,\nque nos da el festivo día\ny se goza en el perdón.\nAceptemos, pues, con gusto\nel descanso semanal,\nesperando el día augusto\ndel reposo celestial.'
  },
  {
    'id_hymn': 589,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Los que a ti nos acercamos\npor Jesús, Dios de verdad,\nhoy alegres proclamamos\ntu justicia y tu bondad.\nEn los fastos de la historia\nsiempre se celebrará\neste día, y su memoria\npor los siglos durará.'
  },
  {
    'id_hymn': 590,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Santo día que el Señor\nen Edén santifcó\ny lo dio como señal\ndel poder que nos creó.'
  },
  {
    'id_hymn': 590,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Santo sábado de paz,\nbendecido del Señor!\nSiempre el sábado será\nmonumento de su amor.'
  },
  {
    'id_hymn': 590,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Vano tráfago hallará\nquien del mundo siga en pos.\nEl perfecto gozo está\nen la paz que ofrece Dios.'
  },
  {
    'id_hymn': 590,
    'order': 3,
    'type': 'STROPHE',
    'content': 'En el día del Señor,\nsanta paz podrá gozar\nquien acuda, en la quietud,\nsus palabras a escuchar.'
  },
  {
    'id_hymn': 591,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Ya asoma el sol brillante,\nvertiendo luz, calor;\nnatura alegre canta: es día del Señor.'
  },
  {
    'id_hymn': 591,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Hoy, sábado, reunidos\nen culto a ti, Señor,\ntus hijos redimidos te rinden su loor.'
  },
  {
    'id_hymn': 591,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Perfume de las ﬂores\nse eleva hacia Dios.\nLos pajarillos trinan con melodiosa voz.'
  },
  {
    'id_hymn': 591,
    'order': 3,
    'type': 'STROPHE',
    'content': ' Si pájaros y ﬂores\nte alaban, oh Señor,\ntus hijos reverentes, te alabarán mejor.'
  },
  {
    'id_hymn': 592,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Día santo del Señor,\n¡oh, cuán pronto en pasar!\nSólo vino poco ha;\nya lo vemos terminar.\nY volando al cielo va,\nfiel testigo allí será;\ny volando al cielo va,\nfiel testigo allí será.'
  },
  {
    'id_hymn': 592,
    'order': 2,
    'type': 'STROPHE',
    'content': '¿Qué informe llevará\nal celeste tribunal?\n¿De maldades hablará?,\n¿de cuidado mundanal?\n¿O de santa adoración,\ncon Jesús en comunión?\n¿O de santa adoración,\ncon Jesús en comunión?'
  },
  {
    'id_hymn': 592,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Oh, perdónanos Señor,\nel mal uso de tu don!\nLos preceptos de tu ley\ngraba en nuestro corazón.\nEs tu sábado, Señor,\nsello santo de tu amor;\nes tu sábado, Señor,\nsello santo de tu amor'
  },
  {
    'id_hymn': 593,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Ya el fin se acerca de tu día santo;\nbenigno acoge la oración, Señor,\nque te ofrecemos en humilde canto,\ncual sacrificio de agradable olor.'
  },
  {
    'id_hymn': 593,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Por las mercedes\na tu amor debidas,\npor el descanso y plácido solaz,\nmil gracias sean sólo a ti rendidas,\nRey de los reyes, Príncipe de paz.'
  },
  {
    'id_hymn': 593,
    'order': 3,
    'type': 'STROPHE',
    'content': ' Haz que del mundo\nla escabrosa senda\ncorrer podamos con seguro pie;\ny en los conﬂictos\nque la duda tienda,\ntu luz alumbre nuestra débil fe.'
  },
  {
    'id_hymn': 593,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Este descanso de sagrada holgura\nes de las almas celestial festín;\nnos anticipa la sin par ventura\nde aquel reposo que será sin fin.'
  },
  {
    'id_hymn': 594,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Hoy contemplo maravillas\nque el Señor Jehová creó;\nveo las aves, veo los bosques\ny el sol en su arrebol.\nPor el sábado bendito\nreconozco el poder\nde su obra creadora\nculminada en el Edén;\nde su obra creadora\nculminada en el Edén.'
  },
  {
    'id_hymn': 594,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Terminada la gran obra\nel Señor lo consagro\ncomo día de reposo;\nsábado, así lo llamó.\nPara el hombre fue apartado\nen la misma creación,\nmonumento muy sagrado\ny señal de su amor;\nmonumento muy sagrado\ny señal de su amor.'
  },
  {
    'id_hymn': 595,
    'order': 1,
    'type': 4,
    'content': 'Ya se inicia la semana,\nqué alegría que nos da\nal estar en esta casa\ncompartiendo la amistad.\nCruzaremos nuestras manos\npara unirnos al cantar\nla bondad de Jesucristo,\nnuestro Amigo más leal.'
  },
  {
    'id_hymn': 596,
    'order': 1,
    'type': 'STROPHE',
    'content': ' Hogar de mis recuerdos,\na ti volver anhelo;\nno hay sitio bajo el cielo\nmás dulce que el hogar.\nPosara yo en palacios,\ncorriendo el mundo entero,\na todos yo prefiero,\nmi hogar, mi dulce hogar.'
  },
  {
    'id_hymn': 596,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Mi hogar, mi hogar!\nNo hay sitio bajo el cielo\nmás dulce que mi hogar.'
  },
  {
    'id_hymn': 596,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Allí la luz del cielo\ndesciende más serena;\nde mil delicias llena\nla dicha del hogar.\nAllí las horas corren\nmás breves y gozosas;\nmemorias muy dichosas\nnos hablan sin cesar.'
  },
  {
    'id_hymn': 596,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Más quiero que placeres\nque brinda tierra extraña,\nvolver a la cabaña\nde mi tranquilo hogar.\nAllí mis pajarillos\nme alegran con sus cantos;\nallí con mil encantos\nestá la dulce paz.'
  },
  {
    'id_hymn': 597,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Es un hogar feliz aquel,\nsi en él está Jesús;\ncuán grato es saber que Él\nlas sombras cambia en luz.'
  },
  {
    'id_hymn': 597,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Es un hogar feliz aquel\ndonde los niños son\nrápidos a servirle fel,\ncon tierno corazón.'
  },
  {
    'id_hymn': 597,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Puede un hogar sentir solaz\nsi pasa en oración;\nvive con Dios en dulce paz\ngracias a su perdón.'
  },
  {
    'id_hymn': 597,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Tu gracia danos, ¡oh, Señor!,\ndanos tu bendición;\nque reine siempre tu amor\nen nuestro corazón.'
  },
  {
    'id_hymn': 598,
    'order': 1,
    'type': 'STROPHE',
    'content': 'En este bello día de gozo, amor y luz,\ncantamos alabanzas\na nuestro Rey, Jesús.'
  },
  {
    'id_hymn': 598,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Cantad, cantad, a Cristo dad loor;\ncantad, cantad la gloria del Señor.'
  },
  {
    'id_hymn': 598,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Amólos a los niños estando aún aquí,\ny ahora en los cielos\nlos ama siempre así.'
  },
  {
    'id_hymn': 598,
    'order': 3,
    'type': 'STROPHE',
    'content': 'La historia de su vida\nnos gusta escuchar;\nsu amor y mansedumbre\nqueremos imitar.'
  },
  {
    'id_hymn': 598,
    'order': 4,
    'type': 'STROPHE',
    'content': '¡Oh, Salvador bendito, rogámoste a ti\nnos guardes del maligno\nen nuestra senda quí!'
  },
  {
    'id_hymn': 599,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Guía a ti Señor, guía a ti los hijos tiernos\nque me has dado a mí.\n¡Oh, por tu grande amor, guíalos, Dios, a ti!\nGuíalos, Dios, a ti, guíalos, sí.'
  },
  {
    'id_hymn': 599,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cuando del mundo vean el esplendor,\nentonces guárdalos del tentador,\nde sus engaños. ¡Oh, guíalos Dios, a ti!\nGuíalos, Dios, a ti, guíalos, sí.'
  },
  {
    'id_hymn': 599,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Los niños a salvar vino Jesús,\ny anduvo sin pecar hasta la cruz.\nSuplico por tu amor: ¡guíalos, Dios, a ti!\nGuíalos, Dios, a ti, guíalos, sí.'
  },
  {
    'id_hymn': 599,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Aunque me falte fe, quiero creer que en tu mansión, hogar han de tener.\nTiernos de corazón, hoy los devuelvo a ti.\nGuíalos, Dios, a ti, guíalos, sí.'
  },
  {
    'id_hymn': 600,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Que en nuestro hogar se manifeste gozo,\nse brinde paz, consuelo y protección;\nen donde Cristo sea el don precioso\ny cada niño una bendición,\nque tema a Dios portándose amoroso\ny anhele estar un día en su mansión.'
  },
  {
    'id_hymn': 600,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Que en cada hogar los padres te conozcan\ny su confanza esté arraigada en ti,\ndo la inquietud con calma lo soportan\npues el amor lo puede todo, sí;\ndo con gran gozo todos se ayudan,\nde corazón, en fiel servicio a ti.'
  },
  {
    'id_hymn': 600,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Hogar feliz, aquel do hay confianza,\ndo se estudia el Libro del Señor,\ny la oración asciende en alabanza,\ntambién con himnos gratos de loor;\ndo existe fe basada en la esperanza\nque da Jesús, el tierno Salvador.'
  },
  {
    'id_hymn': 600,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Señor mi Dios que nuestro hogar sea tuyo,\nque siempre tengas tu morada en él;\ndanos salud, destierra el orgullo,\nque cada uno pueda serte fel.\nSé tú el centro, danos tu apoyo\ny un día estemos junto a Emanuel.'
  },
  {
    'id_hymn': 601,
    'order': 1,
    'type': 'STROPHE',
    'content': ' ¡Oh, cuán feliz aquel hogar hermoso\ndonde se ama a Cristo el Salvador\ny se le da el puesto más honroso\npara que habite y sea el Señor!'
  },
  {
    'id_hymn': 601,
    'order': 2,
    'type': 'STROPHE',
    'content': ' Dicha especial hay donde cada uno\nhace su obra cual servicio a ti,\nsin comparar si otros hacen tanto\ny se esfuerza en dar lo más de sí.'
  },
  {
    'id_hymn': 601,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Qué hogar feliz donde Él es recordado\ny donde el gozo abunda por doquier,\ny mi Jesús, el Médico amado,\nes presentado a quien ha menester.'
  },
  {
    'id_hymn': 601,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Pronto vendrá rodeado de gran gloria\npara llevarnos al feliz hogar\nde paz y amor, de gozo y victoria,\ndo por los siglos le hemos de adorar.'
  },
  {
    'id_hymn': 602,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cuán hermoso el amor de Dios,\ncuán hermoso el amor de Dios,\ncuán hermoso el amor de Dios,\nes bello en verdad.'
  },
  {
    'id_hymn': 602,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Alto es, y no habrá igual;\nhondo es, mucho más que el mar;\nancho es, cual la inmensidad\nno hay que comparar.'
  },
  {
    'id_hymn': 602,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cuán hermosa la bondad de Dios,\ncuán hermosa la bondad de Dios,\ncuán hermosa la bondad de Dios,\nes bella en verdad.'
  },
  {
    'id_hymn': 602,
    'order': 3,
    'type': 'CHORUS',
    'content': 'Alta es, y no habrá igual;\nhonda es, mucho más que el mar;\nancha es, cual la inmensidad.\nNo hay que comparar.'
  },
  {
    'id_hymn': 602,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cuán hermosa la fdelidad,\nCuán hermosa la fdelidad,\nCuán hermosa la fdelidad,\nes bella en verdad.'
  },
  {
    'id_hymn': 602,
    'order': 4,
    'type': 'STROPHE',
    'content': ' Cuán sublime gracia de Jesús,\nCuán sublime gracia de Jesús,\nCuán sublime gracia de Jesús,\nes bella en verdad.'
  },
  {
    'id_hymn': 602,
    'order': 5,
    'type': 'STROPHE',
    'content': 'Asombrosa majestad de Dios,\nAsombrosa majestad de Dios,\nAsombrosa majestad de Dios,\nes bella en verdad.'
  },
  {
    'id_hymn': 603,
    'order': 1,
    'type': 'STROPHE',
    'content': '¿Sabes cuántos claros astros\ndan al cielo su fulgor?\n¿Sabes cuántas nubes bellas\nvan del mundo alrededor\nSólo Dios los ha contado\ny ninguno le ha faltado.\nEntre todos, ¿cuántos son?\nEntre todos, ¿cuántos son?.'
  },
  {
    'id_hymn': 603,
    'order': 2,
    'type': 'STROPHE',
    'content': '¿Sabes cuántas mariposas\njugueteando al sol están?\n¿Sabes cuántos pececitos\nen el agua saltos dan?\nDios a todos ha creado,\nde la vida el gozo ha dado,\npara disfrutar su don,\npara disfrutar su don.'
  },
  {
    'id_hymn': 603,
    'order': 3,
    'type': 'STROPHE',
    'content': '¿Sabes cuántos tiernos niños\ncon el sol, despertarán?\n¿Sabes cuántas son las madres\nque su sueño velarán?\nDios, que a todos ha otorgado\nsu placer y buen agrado,\nte conoce y te ama a ti,\nte conoce y te ama a ti.'
  },
  {
    'id_hymn': 604,
    'order': 1,
    'type': 'STROPHE',
    'content': 'En el bosque y los montes\ncantan tiernos pajaritos\ny a la orilla de los ríos de turquí;\npero el Padre en los cielos\nalimento da a las aves,\ny hay pan en su mano para mí.'
  },
  {
    'id_hymn': 604,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Todo el alfombrado prado\nsalpicado está de flores:\nmargaritas, amapolas y alhelí;\nvestidura hay para el lirio\nde preciosa hermosura,\ny hay vestido en su mano para mí.'
  },
  {
    'id_hymn': 604,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cuando el cielo está nublado,\nfuerte ruge el huracán,\nla tormenta vuela en loco frenesí;\nel gorrión halla refugio\ny el pequeño picaflor, y hay amparo\nen sus brazos para mí.'
  },
  {
    'id_hymn': 604,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Miles de alegres niños\npueblan todo el ancho mundo,\ntan risueños como flores de un pensil,\ny ampara a todos ellos\nel cuidado de mi Padre,\ny hay sitio en su amor para mí.'
  },
  {
    'id_hymn': 605,
    'order': 1,
    'type': 'STROPHE',
    'content': 'En la rama del peral\nque se mece más allá,\nalgo lindo hay que admirar,\nen la rama de allá\nun pequeño hogar feliz.\nDe puntillas, sí, venid\na ver este hogar feliz\nen la rama de allá.'
  },
  {
    'id_hymn': 605,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Pajaritos dos se ven\nen el nido que hay allí,\ny su madre va también\nel nidito a cubrir.\nNiños, niños, no espantéis,\nni un ruidito oír dejéis\na los pájaros que veis,\nen el viejo peral.'
  },
  {
    'id_hymn': 605,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Si soplara viento cruel\nen la negra oscuridad,\ndestruyendo mi vergel,\nsacudiendo el peral,\n¿Quién el nido cuidará,\ndel follaje donde está?\n¿Y a los tres quién guardará\nde tan cruel vendaval?'
  },
  {
    'id_hymn': 605,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Nuestro Padre arriba está\ncontemplando con piedad:\nsu amoroso corazón\nvelará sin cesar;\ncuidará de ti, de mí,\nde las aves que hay allí.\nLe amaremos pues así\nal Señor, nuestro Dios.'
  },
  {
    'id_hymn': 606,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Manos pequeñas tengo listas,\nuna lengüita sin saber,\ndos orejitas escuchando,\nvoz infantil para aprender'
  },
  {
    'id_hymn': 606,
    'order': 2,
    'type': 'CHORUS',
    'content': 'De Jesús todo soy\nen la aurora de mi vida;\na seguir pronto estoy,\n¿cuál es mi deber?'
  },
  {
    'id_hymn': 606,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Ojos pequeños tengo abiertos\npara mirar más de Jesús;\ntengo dos pies pequeños que andan\nrumbo al eterno hogar de Dios.'
  },
  {
    'id_hymn': 606,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Un corazón pequeño y débil,\nmi alma entera para Él;\ntoda mi vida a Él consagro\ncual pobre pequeñito fiel.'
  },
  {
    'id_hymn': 607,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Bellas las manitas son\nque obedecen a Jesús;\nbellos ojos los que están\nllenos de célica luz.'
  },
  {
    'id_hymn': 607,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Bellas, sí, bellas las manos son,\nque obedecen a Jesús;\nbellos los ojos que siempre están\nllenos de célica luz.'
  },
  {
    'id_hymn': 607,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Hizo las manitas Dios,\nporque a Él podrán servir;\nhizo el tierno corazón\nen su servicio a latir.'
  },
  {
    'id_hymn': 607,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Toda boca debe orar\ncada día al Salvador,\ny los pies habrán de andar\nsiempre siguiendo al Señor'
  },
  {
    'id_hymn': 607,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Cuanto puedas tú hacer,\nCristo te lo exigirá;\nhaz, pues, de ello tu placer\ncon el poder que Él te da.'
  },
  {
    'id_hymn': 608,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cuando empieza el sol\nlas nubes a teñir, su color de arrebol,\nya los bebés se recogen a dormir;\narrorró, arrorró.\nAl país de los ensueños volarán;\nsoñarán, soñarán.\nLas molestias de este día pasarán,\nnunca más volverán.'
  },
  {
    'id_hymn': 608,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Dulces ángeles tu cuna cuidarán;\nsin cesar velarán.\nCual inclina su corola toda flor,\nduerme amor, sin temor.\nComo el ave en su nidito dormirás;\ncalma y paz sentirás, hasta ver la luz\ndel alba en derredor, y del sol el fulgor.'
  },
  {
    'id_hymn': 608,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cristo fue también un bebé como tú,\ncomo tú fue Jesús;\ny en sus brazos a los niños acogió\ncon amor el Señor.\nEste Amigo de los niños volverá,\nde su hogar celestial;\nlos pequeños alabanzas le darán,\ncon amor cantarán.'
  },
  {
    'id_hymn': 609,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Jesús aquí hace mucho vivió\nsanando y haciendo bien.\nEl mar Galileo un día cruzó,\ndejando así el vaivén.'
  },
  {
    'id_hymn': 609,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Boga, sí, botecito en el quieto mar;\nboga, sí, pues Cristo en ti va;\nboga, sí, y las aguas al surcar,\nal buen Maestro conducirás\nseguro y en paz.'
  },
  {
    'id_hymn': 609,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cansado estaba de tanto enseñar\ny a muchos enfermos sanar;\nasí que pronto dormido quedó,\ndormido en el mar.'
  },
  {
    'id_hymn': 609,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Se encrespó el mar, hubo viento en redor;\nrugió la tempestad.\nLos discípulos todos tuvieron temor\nen la oscuridad.'
  },
  {
    'id_hymn': 609,
    'order': 4,
    'type': 'CHORUS',
    'content': 'Balancead, botecito en el fiero mar;\nbalancead, del viento a merced;\nbalancead, y las aguas al surcar,\nal buen Maestro conducirás\ncon regio vaivén.'
  },
  {
    'id_hymn': 609,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Despertóse Jesús, la tormenta Él vio\ny “paz, haya paz”, mandó;\nel viento en calma muy pronto tornó,\ny hubo claridad.'
  },
  {
    'id_hymn': 610,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Aunque soy pequeñuelo,\nme mira el santo Dios,\nÉl oye desde el cielo\nmi humilde y tierna voz.'
  },
  {
    'id_hymn': 610,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Me ve de su alto asiento,\nmi nombre sabe, sí,\ny cuanto pienso y siento\nconoce desde allí.'
  },
  {
    'id_hymn': 610,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Él mira a cada instante\nlo que hago, bien o mal,\npues todo está adelante\nde su ojo paternal.'
  },
  {
    'id_hymn': 611,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Como estrellas en la noche,\nque dan su esplendor,\nalegran nuestros niños\nque aman al Señor.\nSus cantos que elevan\nde tierno corazón,\ndan gloria y alabanzas,\nsincera expresión.'
  },
  {
    'id_hymn': 611,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cual perlas en corona\nde nuestro Salvador,\nadornan su iglesia\ncon cantos y loor.\nCon corazón humilde\nescuchan el sermón;\nestudian su Palabra\ncon toda devoción.'
  },
  {
    'id_hymn': 611,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Corderos del rebaño,\ntesoro del gran Dios.\nComprados por su sangre,\nlos niños van en pos\nde su Maestro, Cristo,\nque enseña la verdad.\nLos cuida cada día,\ncon paternal bondad.'
  },
  {
    'id_hymn': 611,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Muy pronto cuando vuelva,\nJesús el buen Pastor,\ncon ángeles del cielo\ny grande esplendor;\nlos niños cantaremos:\n¡Hosanna al Salvador!\nFelices subiremos,\na nuestro Creador.'
  },
  {
    'id_hymn': 612,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cuando leo en la Biblia\ncómo llama Jesús\ny bendice a los niños con amor,\nyo también quisiera estar,\ny con ellos descansar\nen los brazos del tierno Salvador.'
  },
  {
    'id_hymn': 612,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Ver quisiera sus manos\nsobre mí reposar,\ncariñosos abrazos de Él sentir;\nsu mirada disfrutar,\nlas palabras escuchar:\n“A los niños dejad a mí venir”.'
  },
  {
    'id_hymn': 612,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Cuántos hay que no saben\nde la bella mansión,\ny no quieren a Cristo recibir!\nLes quisiera yo mostrar\nque para ellos hay lugar\nen el cielo, do los convide ir.'
  },
  {
    'id_hymn': 612,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Yo espero aquel día\nventuroso, sin fin,\nel más grande, el más lúcido, el mejor,\ncuando de toda nación,\nniños mil sin distinción\na los brazos acudan del Señor.'
  },
  {
    'id_hymn': 613,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Los niños son de Cristo\nÉl es su Salvador,\nson joyas muy preciosas,\ncomprólas con su amor.'
  },
  {
    'id_hymn': 613,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Joyas, joyas, joyas,\njoyas del Salvador,\nestán en esta tierra,\ncual luz y dulce amor.'
  },
  {
    'id_hymn': 613,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Los niños son tesoros,\npues que del cielo son,\nluz refulgente esparcen\nen horas de aflicción.'
  },
  {
    'id_hymn': 613,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Los niños son estrellas\nde grata claridad,\nquiere Jesús que anuncien\nal mundo su verdad.'
  },
  {
    'id_hymn': 613,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Los niños son de Cristo,\npor ellos Él vendrá;\ny junto a Él por siempre\ndichosos vivirán.'
  },
  {
    'id_hymn': 614,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Nítido rayo, por Cristo,\nyo quiero siempre ser,\nen todo quiero agradarle,\ny hacerlo con placer.'
  },
  {
    'id_hymn': 614,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Un nítido rayo,\nnítido rayo por Cristo;\nun nítido rayo,\nnítido rayo seré.'
  },
  {
    'id_hymn': 614,
    'order': 2,
    'type': 'STROPHE',
    'content': 'A Cristo quiero acercarme\nen mi temprana edad,\npor siempre quiero amarle\ny hacer su voluntad.'
  },
  {
    'id_hymn': 614,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Nítido rayo en tinieblas,\ndeseo relucir,\nalmas perdidas a Cristo\nanhelo conducir.'
  },
  {
    'id_hymn': 614,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Una mansión en el cielo\nfue Cristo a preparar,\npara que el niño amante\nen ella pueda entrar.'
  },
  {
    'id_hymn': 615,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Yo temprano busco a Cristo,\ncada día aprendo de Él;\npor la senda angosta sigo\nsus pisadas, firme y fiel.'
  },
  {
    'id_hymn': 615,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Cristo me ama; Cristo me ama;\nCristo me ama, esto sé:\nÉl murió para salvarme;\nYo, ferviente, le amaré.'
  },
  {
    'id_hymn': 615,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Dondequiera que Él me mande,\nyo con gozo presto voy;\nsé su voluntad divina\naunque niño tierno soy.'
  },
  {
    'id_hymn': 615,
    'order': 3,
    'type': 'STROPHE',
    'content': 'A la puerta Cristo aguarda:\nÉl me quiere libertar;\nyo, confiando en su promesa,\nhoy invítole a entrar.'
  },
  {
    'id_hymn': 616,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cristo, yo te seguiré;\nóigote llamándome;\nvengo a ti con fe y amor,\ny a tu mansión, Señor.'
  },
  {
    'id_hymn': 616,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Yo te seguiré, yo te seguiré,\nyo te seguiré bendito Salvador.'
  },
  {
    'id_hymn': 616,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Mis ojuelos no verán;\nmis piecitos errarán;\ndébil me hallo en el vaivén;\nmas tú eres mi sostén.'
  },
  {
    'id_hymn': 616,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cuando solo y triste estoy\nsiempre a ti, Jesús, yo voy;\ny ¡qué gozo es para mí,\nseguirte siempre a ti!'
  },
  {
    'id_hymn': 617,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Oh juventud es tiempo de la siega\ny viene el Rey de reyes,\n¿qué cuenta le darás?\n¡Oh, juventud! los campos\nya maduros esperan que\ntus manos los vayan a segar.\nPocos son los obreros valientes\ny el mal predomina feroz.\n¡Oh, juventud! Jesús te llama\na su labor, ven a su labor.'
  },
  {
    'id_hymn': 617,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Ven, ven, ven. Los campos ya\nmaduros esperan que tus\nmanos los vayan a segar.\nVen, ven, ven. Los campos ya\nmaduros esperan que tus\nmanos los vayan a segar.'
  },
  {
    'id_hymn': 617,
    'order': 2,
    'type': 'STROPHE',
    'content': '¡Oh, juventud! ¿Por qué vacilas tanto?\nNo temas que el Maestro\nlas fuerzas te dará;\nÉl prometió su ayuda omnipotente,\nalístate en las filas\ncon celo y con valor.\nSon muy pocos los días que restan\ny gavillas perdiéndose están;\nsi tú no vas a rescatarlas\nse perderán, se perderán.'
  },
  {
    'id_hymn': 617,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Oh, juventud! El tiempo ya se acaba,\npronto vendrá la angustia\ny gracia ya no habrá.\nVen que la mies está para la siega;\npor cada alma que salves\nestrella obtendrás.\nEn el cielo tendrás los emblemas\nque el Rey de los reyes dará.\n¡Oh, juventud! Ven a los campos,\nno tardes más, no tardes más.'
  },
  {
    'id_hymn': 618,
    'order': 1,
    'type': 'STROPHE',
    'content': 'De prisa la vida pasará\ny a Dios hemos de buscar;\npronto muy tarde ya será,\nacude sin demorar.'
  },
  {
    'id_hymn': 618,
    'order': 2,
    'type': 'CHORUS',
    'content': 'De prisa la vida pasa,\nmuy breve es en verdad,\ny quien los setenta alcanza\nno es sin enfermedad.\nCorto, muy corto el tiempo,\nde cara a la eternidad.'
  },
  {
    'id_hymn': 618,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Hay muchos caminos hacia el mal\nmas uno el que al cielo va:\nangosto, duro, especial,\nnos lleva a Jehová.'
  },
  {
    'id_hymn': 618,
    'order': 3,
    'type': 'STROPHE',
    'content': 'El tiempo muy breve pasará,\ncamina y se va veloz.\nA Cristo ven, te amparará,\nÉl es el camino a Dios.'
  },
  {
    'id_hymn': 619,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Soy embajador de mi Jesús;\nsu amor proclamo pues por mí murió.\nPor salvar mi vida vino y se humanó\ny por eso canto su gran redención.'
  },
  {
    'id_hymn': 619,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Embajador yo soy, embajador del Rey.\nEmbajador del rey, hoy, tú puedes ser.'
  },
  {
    'id_hymn': 619,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Juventud, si quieres alcanzar\nel don ofrecido que pagado está,\na los pies de Cristo ven, no tardes más;\ntodos tus pecados puede Él perdonar.'
  },
  {
    'id_hymn': 619,
    'order': 3,
    'type': 'STROPHE',
    'content': 'La perenne alegre juventud,\nen la hermosura de su santidad,\nhas de disfrutarla por la eternidad.\nSi oyes el llamado, ven, y acude ya.'
  },
  {
    'id_hymn': 620,
    'order': 1,
    'type': 'STROPHE',
    'content': 'La palabra de Dios debes tu temer,\npor alto no podrá pasar;\nmira bien por doquier, busca su saber,\nseguro lo vas a encontrar.'
  },
  {
    'id_hymn': 620,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Puede ser que el sol\ndeje hoy de alumbrar,\npero no su verdad,\nque en el mundo ha de brillar.'
  },
  {
    'id_hymn': 620,
    'order': 2,
    'type': 'STROPHE',
    'content': 'El Señor habla, sí, a tu corazón,\npor su Palabra le oirás;\nsi haces caso a su voz,\ncon gran atención,\nla redención encontrarás.'
  },
  {
    'id_hymn': 620,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Salvaguardia será toda su verdad\nen cada prueba y tentación;\nnuestra senda, su luz,\nlleva a la ciudad\nde eterno gozo y salvación.'
  },
  {
    'id_hymn': 621,
    'order': 1,
    'type': 'CHORUS',
    'content': 'A Cristo alabe mi alma,\ny a su santísimo nombre,\nhaga saber de su fama,\noiga de Él cada hombre.\nCanta, canta al Señor,\ncanta al Señor alma mía;\nhonra, honra al Señor,\nhonra al Señor alma mía.'
  },
  {
    'id_hymn': 621,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Quien perdonó mis maldades, ya,\na enfermedad desterrado ha;\na Él me gozo en cantar de su gloria\nque obtuvo tan grande victoria.'
  },
  {
    'id_hymn': 621,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Consuelo en cada aflicción Él es,\nvuelve la paz tras el cruel revés;\na Él me gozo en cantar de su gloria\nque obtuvo tan grande victoria.'
  },
  {
    'id_hymn': 621,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Quien me protege de todo mal,\nde día y de noche, Él es leal;\na Él me gozo en cantar de su gloria\nque obtuvo tan grande victoria.'
  },
  {
    'id_hymn': 621,
    'order': 4,
    'type': 'STROPHE',
    'content': 'El que los mundos sustenta hoy\ny cuyo nombre es el Gran Yo soy,\na Él me gozo en cantar de su gloria\nque obtuvo tan grande victoria.'
  },
  {
    'id_hymn': 622,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Oh, jóvenes, venid! su brillante pabellón\nCristo ha desplegado ante la nación.\nA todos en sus filas os quiere recibir,\ny consigo a la pelea os hará salir.'
  },
  {
    'id_hymn': 622,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Vamos con Jesús, alistados sin temor!\n¡Vamos a la lid, inflamados de valor!\nJóvenes, luchemos todos contra el mal,\nque en Jesús tenemos nuestro General.'
  },
  {
    'id_hymn': 622,
    'order': 2,
    'type': 'STROPHE',
    'content': '¡Oh, jóvenes, venid! El caudillo Salvador\nquiere recibiros en su derredor;\ncon Él a la batalla salid sin vacilar.\n¡Vamos presto, compañeros, vamos a luchar!'
  },
  {
    'id_hymn': 622,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Las armas invencibles del Jefe guiador\nson el evangelio y su gran amor.\nCon ellos revestidos y llenos de poder,\n¡compañeros, acudamos, vamos a vencer!'
  },
  {
    'id_hymn': 622,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Quien venga a la pelea su voz escuchará;\nCristo la victoria le concederá;\nsalgamos, compañeros, luchemos bien por Él;\ncon Jesús conquistaremos inmortal laurel.'
  },
  {
    'id_hymn': 623,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Yo quiero siempre seguir a Cristo,\nir por la senda que Él ha provisto,\nobedeciendo a su mandato,\nandar con gozo a su mansión.'
  },
  {
    'id_hymn': 623,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Hoy abandono el placer del mundo\naunque millones lo estén buscando;\nvoy con mi Cristo y a Él me rindo,\nmi fiel Amigo, mi buen Jesús.'
  },
  {
    'id_hymn': 623,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Si otros huyen, igual prosigo,\nla senda angosta es mi camino\nla han transitado los que han ido\ntras el Maestro, el Redentor.'
  },
  {
    'id_hymn': 623,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Y tú mi amigo, sé bienvenido\na ser con gozo un elegido\nde los que aceptan su cometido\nde guiar a otros al Salvador.'
  },
  {
    'id_hymn': 624,
    'order': 1,
    'type': 'CHORUS',
    'content': 'Cristo, yo quiero honrarte,\ntuyo es todo mi ser,\ncual hijo he de imitarte\nal cumplir mi deber.\nMi vida te consagraré,\nya no querré ofenderte más,\nla honra te daré,\ntú, la gracia me otorgarás.'
  },
  {
    'id_hymn': 624,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Si en lo oscuro voy, tú me alumbrarás;\nsi solo yo estoy a mi lado irás.\nAunque la vida aquí llena es de pesar,\nsiendo obediente a ti puedo disfrutar.'
  },
  {
    'id_hymn': 624,
    'order': 2,
    'type': 'STROPHE',
    'content': 'La Biblia es verdad, siempre alumbrará;\ndonde haya oscuridad luz encenderá\ny al que quiere ver le dará saber\ny así podrá entender más de tu poder.'
  },
  {
    'id_hymn': 624,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Tu mensajero ser en cualquier lugar,\ny darte a conocer, quiero predicar.\nHablarles de tu amor y de tu perdón,\nmostrándoles, Señor, tu gran salvación.'
  },
  {
    'id_hymn': 625,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Yo tengo gozo, gozo en mi corazón;\nen mi corazón, en mi corazón;\nyo tengo gozo, gozo en mi corazón.\n¡Gloria sea a nuestro Dios!'
  },
  {
    'id_hymn': 625,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Yo tengo gozo, paz y alegría\nen mi corazón;\nen mi corazón, en mi corazón;\nyo tengo gozo, paz y alegría\nen mi corazón.\n¡Gloria sea a nuestro Dios!'
  },
  {
    'id_hymn': 625,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Yo tengo a Cristo, a Cristo\nen mi corazón;\nen mi corazón, en mi corazón;\nyo tengo a Cristo, a Cristo\nen mi corazón.\n¡Gloria sea a nuestro Dios!'
  },
  {
    'id_hymn': 626,
    'order': 1,
    'type': 4,
    'content': 'Oraré, clamaré\ny cantaré por siempre;\nsólo a ti cantaré.\nCantaré y alabaré\ntu santo nombre;\ncantaré, sólo en ti esperaré.\nTus misericordias siempre\ncantaré y contaré;\ntu fidelidad constante\nmostraré por siempre a la gente.\nCantaré y salmearé por siempre,\ntodo el día cantaré,\nsiempre fiel te alabaré.'
  },
  {
    'id_hymn': 627,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Tengo paz como un río,\ntengo paz como un río,\ntengo paz como un río en mi ser.\nTengo paz como un río,\ntengo paz como un río,\ntengo paz como un río en mi ser.'
  },
  {
    'id_hymn': 627,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Tengo amor rebosante,\ntengo amor rebosante,\ntengo amor rebosante en mi ser.\nTengo amor rebosante,\ntengo amor rebosante,\ntengo amor rebosante en mi ser.'
  },
  {
    'id_hymn': 627,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Tengo gran alegría,\ntengo gran alegría,\ntengo gran alegría en mi ser.\nTengo gran alegría,\ntengo gran alegría,\ntengo gran alegría en mi ser.'
  },
  {
    'id_hymn': 628,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Juventud, juventud,\njoven pueblo de Dios\nel Señor te llama hoy a servir.\nTu belleza, tu fuerza, tu valor quiere Él.\nMarcharemos animados por doquier.'
  },
  {
    'id_hymn': 628,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Jesucristo nuestro Jefe,\nRedentor y Capitán,\nva al frente en la lucha no temáis;\nla victoria ya es nuestra,\nved se acerca Canaán,\npasos firmes, pero nunca vaciléis.'
  },
  {
    'id_hymn': 628,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Juventud, fortaleza,\n¿oyes hoy el clamor\nde un mundo\nmoribundo de dolor?\nMarcharemos unidos\na la guerra del Señor\nrescatando almas del fatal error.'
  },
  {
    'id_hymn': 628,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Si hay luchas y pruebas\ntú avanza con fe;\nsi Satán intenta todo derrumbar,\nno olvides, Cristo vela\ny tus pasos siempre ve,\ngran victoria contra el mal has de ganar.'
  },
  {
    'id_hymn': 628,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Juventud, juventud,\npronto vuelve el Señor,\nproclamad este mensaje sin tardar;\nconsagra tu ser, alma,\ncuerpo y corazón,\npon tu vida entera sobre su altar.'
  },
  {
    'id_hymn': 629,
    'order': 1,
    'type': 'STROPHE',
    'content': 'No quiero la verdad a medias\nni las doctrinas incompletas\nque desfiguran las palabras\ndel Buen Jesús y sus profetas.'
  },
  {
    'id_hymn': 629,
    'order': 2,
    'type': 'STROPHE',
    'content': 'No quiero una fe enana\nque se acomode con el mundo,\ndeseo que arda como llama,\nque ilumine al errabundo.'
  },
  {
    'id_hymn': 629,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Quiero una vida consagrada\nsin vanidad y compromiso,\nque haga lo que a Dios agrada\ncual hijo bueno y sumiso.'
  },
  {
    'id_hymn': 629,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Si yo me doy, me doy entero;\na medias no podría darme;\nhazme Señor que sea sincero,\nsolo a ti he de confiarme.'
  },
  {
    'id_hymn': 629,
    'order': 5,
    'type': 'STROPHE',
    'content': 'Es en el horno de aflicciones\ndonde se abate el orgullo;\nsoberbia y ostentaciones\nyo nos las quiero, las rehuyo.'
  },
  {
    'id_hymn': 629,
    'order': 6,
    'type': 'STROPHE',
    'content': 'Por eso la verdad a medias\nnunca podrá ser aceptada,\ntampoco enseñada a medias\nque sólo sirve para nada.'
  },
  {
    'id_hymn': 630,
    'order': 1,
    'type': 'STROPHE',
    'content': 'La época primaveral\nes la más especial,\nen ella flores por doquier\nalegran nuestro ser.'
  },
  {
    'id_hymn': 630,
    'order': 2,
    'type': 'CHORUS',
    'content': 'En la juventud, llena de inquietud,\nse afirma el carácter en la rectitud.'
  },
  {
    'id_hymn': 630,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Si cada arbusto y cada flor\nnos hablan de su amor,\nla primavera es canción\nde su abundante don.'
  },
  {
    'id_hymn': 630,
    'order': 3,
    'type': 'STROPHE',
    'content': 'También a cada corazón\nle llega la ocasión\nde aceptar la clara luz\nque brilla de la cruz.'
  },
  {
    'id_hymn': 630,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Si empleas bien tu juventud\nadquirirás virtud,\ne irás con gozo sin igual\nal reino celestial.'
  },
  {
    'id_hymn': 631,
    'order': 1,
    'type': 'STROPHE',
    'content': 'A la Patria hoy marchemos,\nel camino duro es;\nen llegar perseveremos\nmás valientes cada vez.\nEl Señor es nuestro Guía,\nsiempre Él adelante va;\nnos protege cada día,\nnos anima y fuerzas da.'
  },
  {
    'id_hymn': 631,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Nuestro himno entonaremos\nde alabanzas al Señor\ny a la Patria llegaremos,\nnuestro Guía es el mejor.\nMuy animados avancemos\ncon la bandera de la cruz.\nY todos al hogar iremos\nque nuestro Héroe es Jesús;\ny todos al Hogar iremos\nque nuestro Héroe es Jesús.'
  },
  {
    'id_hymn': 631,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En redor hay enemigos\nque nos quieren lastimar;\nmas tenemos un Amigo,\nprotección nos puede dar.\nY por Él fortalecidos\ntriunfo hemos de alcanzar,\nno seremos confundidos\nya que Él nos va a cuidar.'
  },
  {
    'id_hymn': 631,
    'order': 3,
    'type': 'STROPHE',
    'content': 'A marchar Él nos invita,\nla bandera flotará;\ncon Jesús es nuestra cita\ny nos fortalecerá.\n¡Adelante, a la victoria!,\nella nos saludará;\nproclamemos pues su gloria\nque corona nos dará.'
  },
  {
    'id_hymn': 632,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Promesa dulce: “Yo vendré,\ny a los que sufren salvaré”.\nResponde mi alma: “Presto ven,\nansioso esperaré”.'
  },
  {
    'id_hymn': 632,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Ven, Señor, mi Redentor!\n¡Ven, Señor, mi Redentor!\nResponde mi alma: “¡Presto ven,\nSeñor, mi Redentor!”.'
  },
  {
    'id_hymn': 632,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Los santos vuelven a vivir,\nal cielo todos subirán;\ny en tierra atado años mil\nha de quedar Satán.'
  },
  {
    'id_hymn': 632,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Desciende entonces la ciudad,\nlos malos levantados son\na oír el fallo de su juez:\n‘‘Eterna perdición’’.'
  },
  {
    'id_hymn': 632,
    'order': 4,
    'type': 'STROPHE',
    'content': 'El nuevo Edén florecerá\nen hermosura celestial;\njamás la muerte turbará\nla playa inmortal'
  },
  {
    'id_hymn': 633,
    'order': 1,
    'type': 'STROPHE',
    'content': '“Tiempo es de que en gloria\nvenga Cristo”,\nse oye al pueblo decir;\nla oscuridad ya se disipa;\nmuy pronto el Maestro ha de venir.'
  },
  {
    'id_hymn': 633,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Muy pronto el día nacerá,\nmuy pronto el día nacerá.\nLa noche ya se va, el día viene ya;\nmuy pronto el día nacerá.'
  },
  {
    'id_hymn': 633,
    'order': 2,
    'type': 'STROPHE',
    'content': 'El sol, la luna y las estrellas,\na un mundo envuelto en la maldad,\nseñales fueron que anunciaron\nque pronto el Rey Jesús vendrá.'
  },
  {
    'id_hymn': 633,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Tiempo es de que la iglesia toda\ndespierte y salga a trabajar;\na los perdidos anunciando\nque pronto el día ha de rayar.'
  },
  {
    'id_hymn': 634,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Es dulce promesa para el que cree\nel pronto regreso\nde nuestro Señor.\n‘‘He aquí vengo presto y os tomaré’’,\nbendita palabra del fiel Salvador.'
  },
  {
    'id_hymn': 634,
    'order': 2,
    'type': 'CHORUS',
    'content': 'La dulce promesa dada nos fue:\n‘‘Voy a preparar\nun bello lugar;\nyo mismo vendré y os tomaré,\nconmigo al cielo iréis al hogar’’.'
  },
  {
    'id_hymn': 634,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Velando y orando en comunión\nlas lámparas nuestras\nardiendo estarán.\nPodremos seguir, con su bendición,\nunidos con Cristo, el buen Capitán.'
  },
  {
    'id_hymn': 634,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Nos dijo Jesús promesa muy fiel:\n“Vendré otra vez, pues,\nvelad y esperad”.\nEl día se acerca en que viene Él,\ntan bello mensaje id y proclamad.'
  },
  {
    'id_hymn': 635,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Jesús pronto volverá\nal mundo con gran poder.\nPromesa nos dio y la cumplirá;\nsu rostro podremos ver.\nEn gloria y majestad\nvendrá nuestro Salvador, pues señales por doquier anuncian al Señor.'
  },
  {
    'id_hymn': 635,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Muy pronto el Señor vendrá,\ny el pueblo que le espero, del vil tentador librado será\npor Cristo, quien lo salvó.\nSus hijos disfrutarán\nde Cristo la comunión,\ny por siempre gozarán\nsu eterna salvación.'
  },
  {
    'id_hymn': 635,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Del norte y del sur vendrán\ntrofeos del Redentor.\nLas islas del mar sus joyas darán\nque adornen al Salvador.\nLos santos con Él irán\nlas bodas a celebrar,\ny por siempre gozarán\nen su feliz hogar.'
  },
  {
    'id_hymn': 635,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Muy pronto Jesús vendrá\ny el mal llegará a su fin:\ncon gran majestad su voz sonará\ngloriosa por el confín.\nLos ángeles tocarán\ntrompeta de salvación\ny los santos vivirán\nsu eterna redención.'
  },
  {
    'id_hymn': 636,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Unidos y alegres loemos al Señor\npues Él nos ha salvado\ndel mundo engañador;\nde pruebas rodeados\nmarchemos con valor.'
  },
  {
    'id_hymn': 636,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Unidos y alegres loemos al Señor\npues Él nos ha salvado\ndel mundo engañador;\nde pruebas rodeados\nmarchemos con valor\nmirando a Jesucristo\nque infunde gran amor.'
  },
  {
    'id_hymn': 636,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Qué alegría Jesús nos brindará,\ny al cielo con Él nos llevará!\nUnidos por los siglos el gozo crecerá\nsiguiendo al Cordero\nque siempre nos guiará.'
  },
  {
    'id_hymn': 636,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Si el mundo nos desprecia\nnos toca soportar,\ny por los enemigos\ndebemos siempre orar;\npensemos en el premio\nque Cristo nos dará,\nsigamos adelante,\nmirando el más allá.'
  },
  {
    'id_hymn': 636,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Con ángeles del cielo\nJesús regresará,\nel premio en la mano,\ndispuesto traerá;\nel llanto de sus hijos\npaciente enjugará\ny libres de temores\ncon Él los llevará.'
  },
  {
    'id_hymn': 637,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Sobre la tierra señales se ven,\nde su venida advertencia ya es;\nsus peregrinos doquiera que estén\ndicen que Jesús regresa\npronto otra vez.'
  },
  {
    'id_hymn': 637,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Al mundo, alegres, las nuevas dad\nque el Señor en las nubes vendrá;\nmuy fuerte y con valor anunciad\nque a llevar los suyos\npronto Él volverá.'
  },
  {
    'id_hymn': 637,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Estrellas, luna y sol mostrarán\nla grata aparición de su luz,\ny las naciones también oirán\nque muy pronto\nen las nubes viene Jesús.'
  },
  {
    'id_hymn': 637,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cada señal que se cumple nos da\ngozo y certeza de su gran amor,\npues conocemos que Él volverá\ny de su venida estamos\nviendo el albor.'
  },
  {
    'id_hymn': 637,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Con alegría en el corazón\nla voz oiremos de nuestro Señor\ny ascenderemos a nuestra mansión\npara estar rodeados siempre de gran amor.'
  },
  {
    'id_hymn': 638,
    'order': 1,
    'type': 'STROPHE',
    'content': 'La Biblia nos habla de Cristo\ny de su muerte en la cruz.\nSu santa palabra ha dicho\nque Él pronto vuelve en luz.'
  },
  {
    'id_hymn': 638,
    'order': 2,
    'type': 'CHORUS',
    'content': '¿Te hallas listo a encontrar al Señor?\n¿Lo haces todo con fe, con amor?\n¿Has peleado por fe la batalla del bien?\n¿Pueden otros a Cristo en ti ver?\n¿Eres fiel por doquiera que vas?\n¿Puedes tú contemplarlo en su faz\ny triunfante decir: “Este es mi Dios”?\n¿Puedes tú encontrar al Señor?'
  },
  {
    'id_hymn': 638,
    'order': 2,
    'type': 'STROPHE',
    'content': 'No anheles el bien de esta vida,\npues ella se pasará.\nEntrégate a Él sin medida,\nque hoy llamando está.'
  },
  {
    'id_hymn': 638,
    'order': 3,
    'type': 'STROPHE',
    'content': 'No dejes que pase más tiempo\nsin entregarte a Jesús.\nAlístate, pues el Maestro\nmuy pronto vuelve en luz.'
  },
  {
    'id_hymn': 639,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Tu reino anhelan, oh Señor,\nlas almas de tu grey;\nsuplican siempre con fervor\nque vengas como Rey.'
  },
  {
    'id_hymn': 639,
    'order': 2,
    'type': 'STROPHE',
    'content': 'La noche con su oscuridad\nes fuente de temor,\nmas las estrellas con bondad\nnos hablan del Creador.'
  },
  {
    'id_hymn': 639,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Se ven señales del albor\nen montes por doquier;\nya pronto viene el Señor\nen gloria y con poder.'
  },
  {
    'id_hymn': 639,
    'order': 4,
    'type': 'STROPHE',
    'content': 'El día cuya clara luz\nrevela todo mal,\ntraerálo pronto el Rey Jesús\ny el pago a cada cual.'
  },
  {
    'id_hymn': 639,
    'order': 5,
    'type': 'STROPHE',
    'content': 'Sabiduría y mucha paz\nla tierra llenarán\nel día cuando formarás\nla nueva Canaán.'
  },
  {
    'id_hymn': 640,
    'order': 1,
    'type': 'STROPHE',
    'content': 'El amanecer del día\nsus albores va anunciando;\nviene el tiempo de alegría,\ny la eterna paz de Dios.'
  },
  {
    'id_hymn': 640,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Venga presto el día eterno!\n¡Que esta noche cese ya!\n¡Venga el reino sempiterno,\nde placer y eterna paz!'
  },
  {
    'id_hymn': 640,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Por los montes va brillando\nrefulgente luz del cielo;\nel clarín está anunciando\nla venida del Señor.'
  },
  {
    'id_hymn': 640,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Muerte y llanto olvidaremos\ncuando en gloria venga Cristo.\nPara siempre gozaremos\nla presencia del Señor.'
  },
  {
    'id_hymn': 641,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Nuevas de gran gozo doy,\nde ello cantando estoy;\na proclamarlo yo voy:\n“¡Cristo vendrá otra vez!”'
  },
  {
    'id_hymn': 641,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Viene otra vez, viene otra vez.\n¿En la noche? ¡puede ser!\nO tal vez al amanecer.\nViene otra vez, viene otra vez.\n¡Oh, cuán glorioso ese día será!\n¡Cristo vendrá otra vez!'
  },
  {
    'id_hymn': 641,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Bosques y ﬂores clamad,\nmontes y prados cantad,\ncielos y tierra anunciad:\nBosques y ﬂores clamad,\nmontes y prados cantad,\ncielos y tierra anunciad:\n“¡Cristo vendrá otra vez!”'
  },
  {
    'id_hymn': 641,
    'order': 3,
    'type': 'STROPHE',
    'content': 'En su presencia estaré,\nno más tristeza tendré;\na sus pies me postraré:\n“¡Cristo vendrá otra vez!”'
  },
  {
    'id_hymn': 642,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Del tiempo las señales\nnos muestran por doquier\nque Cristo con sus huestes\nregresa con poder.\nLa hora es avanzada,\nluchemos sin ﬂaquear\nque pronto su venida\nhemos de mirar.'
  },
  {
    'id_hymn': 642,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Mi Cristo es esa fuente,\nla fuente del amor;\nsu agua en torrente\nofrece el Redentor.\nCon gran misericordia\nla sed del pecador\napaga, y su gloria\nvemos en redor'
  },
  {
    'id_hymn': 642,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Yo pertenezco a Cristo,\nde Él yo quiero ser,\na su mandato listo\nestoy a obedecer.\nSu mano amorosa\nme libra con poder\ny en su mansión gloriosa,\nsé, me he de ver.'
  },
  {
    'id_hymn': 642,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Y con los redimidos\npodré participar\ndel gozo inmerecido\ny a Cristo contemplar.\nA Él pues sea gloria,\nimperio y poder\npues con su gran victoria\nsalva nuestro ser'
  },
  {
    'id_hymn': 643,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Que cada lámpara arda fiel\npues la noche se aproxima;\nmuy pronto en gloria viene Él,\nhoy tu fe ya determina.'
  },
  {
    'id_hymn': 643,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Mi hermano, hoy prepárate,\ntu lámpara hazla brillar.\nCristo viene, pues, alístate,\nque no vayas a faltar'
  },
  {
    'id_hymn': 643,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En calma miles duermen ya,\nen estado de tibieza;\nardiente nuestra fe será\npues se aferra a su promesa.'
  },
  {
    'id_hymn': 643,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Mas su palabra es verdad\ny su luz es nuestra guía,\nque brinda plena libertad\na aquel que en Él confía.'
  },
  {
    'id_hymn': 643,
    'order': 4,
    'type': 'STROPHE',
    'content': 'El fruto bueno de la fe\ndeja que se manifeste,\nsi esto haces yo bien sé\nque tu amor será ferviente.'
  },
  {
    'id_hymn': 644,
    'order': 1,
    'type': 'STROPHE',
    'content': '¿Cuándo he de ver a Cristo\nque en las nubes volverá,\nal sonido de trompetas, tal mañana?\nÉl me ha de transformar\ny el dolor terminará,\ncuando suene la trompeta, tal mañana.'
  },
  {
    'id_hymn': 644,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Aleluya, proclamad,\ncantad con gozo al Señor,\nque muy pronto llegará! ¡Feliz mañana!'
  },
  {
    'id_hymn': 644,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Colocaos la armadura del Espíritu con fe\ny oiréis a la trompeta, tal mañana.\nCuando acabe toda guerra\ny digamos: “Ya triunfé”;\noiremos la trompeta, tal mañana.'
  },
  {
    'id_hymn': 644,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Oirá el cantar de gozo del ejército del bien,\nquien escuche la trompeta, tal mañana.\nNuestras voces uniremos\na los cantos del Edén\njunto con los redimidos, tal mañana.'
  },
  {
    'id_hymn': 645,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cantan los ángeles con dulce voz,\ncanten los hombres con sonora voz;\nCristo vendrá, nuestro Rey vencedor;\nCristo vendrá otra vez.'
  },
  {
    'id_hymn': 645,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Viene otra vez viene otra vez,\nen gloria viene al mundo otra vez.\nViene otra vez, viene otra vez,\nÉl viene pronto a reinar.'
  },
  {
    'id_hymn': 645,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Ved en la tierra, los aires y el mar,\ngrandes señales cumpliéndose ya,\ntodo indicando que pronto vendrá\nnuestro glorioso Señor.'
  },
  {
    'id_hymn': 645,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Todos los muertos en Cristo saldrán\nde sus sepulcros y alegres irán,\npara encontrar a su Rey subirán.\nCristo vendrá otra vez.'
  },
  {
    'id_hymn': 645,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Ven en las nubes, ¡oh buen Salvador!\n¡ven a la tierra, te ruego, Señor!\n¡Ven que tu Iglesia te espera, Jesús!\nCristo vendrá otra vez.'
  },
  {
    'id_hymn': 646,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Oh!, cuán gratas las nuevas\nal peregrino aquí,\nen destierro obligado a vagar:\n‘‘He aquí, pronto en gloria\ntu Salvador vendrá,\ny podrás en su reino entrar’’.'
  },
  {
    'id_hymn': 646,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Sí, viene, viene, viene, esto sé;\na la tierra Jesús vendrá;\ny los peregrinos a la gloria irán,\na su reino el Señor los guiará.'
  },
  {
    'id_hymn': 646,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Los sepulcros de cuantos\nen Cristo duermen ya,\notra vez todos se han de abrir;\nlos millones también\nque en el mar profundo están\nvolverán otra vez a vivir.'
  },
  {
    'id_hymn': 646,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Nos veremos allá\nen el nuevo Edén feliz;\nel “adiós’ no diremos jamás;\npues del norte y del sur\nlos salvados llegarán,\na morar en el reino de paz.'
  },
  {
    'id_hymn': 647,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Amanece ya la mañana de oro,\npronto el Rey vendrá; y su pueblo a\nla mansión del cielo Cristo llevará.'
  },
  {
    'id_hymn': 647,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Amanece ya la mañana de oro\ntras la noche terrenal, cuando surgirá\ndel sepulcro abierto vida inmortal.'
  },
  {
    'id_hymn': 647,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En aquel gran día los separados\nse encontrarán, y las lágrimas\nde los aﬂigidos se enjugarán.'
  },
  {
    'id_hymn': 647,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Con sus ángeles de esplendente aspecto\nCristo, el Juez, vendrá, a llevar su iglesia\na donde en gloria siempre morará.'
  },
  {
    'id_hymn': 647,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Cuando llegue a todos el Evangelio\nanunciando el fn, cesará el tardar\ndel Esposo entonces sonará el clarín.'
  },
  {
    'id_hymn': 648,
    'order': 1,
    'type': 'STROPHE',
    'content': 'El Rey a los suyos llama,\nnuestro Rey, Señor Jesús;\ntodo labio le proclama:\n“Él es Rey de gloria y luz”.\nMás que el sol su rostro brilla\ny vendrá cual ascendió,\nes el Príncipe de vida,\nsu regreso Él prometió.'
  },
  {
    'id_hymn': 648,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Todo cubre con su gloria,\nmajestuoso, arrobador,\nPaladín de nuestra historia,\nsiempre digno de honor.\nCon radiante frmamento\nÉl vendrá en su esplendor;\ncuán sublime ese momento\na su pueblo vencedor.'
  },
  {
    'id_hymn': 648,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Todo caso está sellado,\na sus santos tomará,\nlos que le hemos esperado\nya con Él nos llevará.\nHa de levantar los justos,\na los vivos mudará;\ny en Jerusalén reunidos\nluego nos coronará.'
  },
  {
    'id_hymn': 648,
    'order': 4,
    'type': 'STROPHE',
    'content': 'El rey a los suyos llama\na una vida inmortal,\npor su sangre nos reclama\ncon su voz tan paternal.\nTrasladados nos veremos\nhacia aquella gran ciudad;\ncon Jesús habitaremos\nsiempre, por la eternidad.'
  },
  {
    'id_hymn': 649,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cristo viene, esto es cierto,\nporque lo ha dejado escrito;\nsiempre fiel a su promesa,\npor los suyos ya regresa.\n¡Vedle ya, ved al Señor!\nTráelos de la tumba triste,\nde inmortalidad los viste.\n¡Sí, vendrá! ¡oh, sí, vendrá!'
  },
  {
    'id_hymn': 649,
    'order': 2,
    'type': 'STROPHE',
    'content': 'El que en Gólgota muriendo\ndio su vida bendiciendo,\nviene ya resplandeciente,\nen las nubes, imponente.\n¡Vedle ya, ved al Señor!\nVedle ya venir en gloria,\ncoronado de victoria.\n¡Sí, vendrá! ¡oh, sí, vendrá!'
  },
  {
    'id_hymn': 649,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Las espinas, de despecho,\nrayos rojos se han hecho,\ny la caña se ha vuelto\nregio cetro de su imperio.\n¡Vedle ya, ved al Señor!\nSíguenle ángeles gloriosos,\nescuadrones majestuosos.\n¡Sí vendrá! ¡oh, sí, vendrá!'
  },
  {
    'id_hymn': 649,
    'order': 4,
    'type': 'STROPHE',
    'content': '¡Ay de aquel que no haya ido\na Jesús ni recibido\nropa santa, regalada,\npara bodas adornada!\n¡Vedle ya, ved al Señor!\n¡Al encuentro del Esposo!\nEs el día más dichoso.\n¡Sí, vendrá! ¡oh, sí, vendrá!'
  },
  {
    'id_hymn': 650,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Hemos de mirar la gloria\ndel regreso del Señor,\ncoronado de victoria,\nrodeado de esplendor;\ncon decenas de millares\nentonando su canción\nen santa adoración.'
  },
  {
    'id_hymn': 650,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Gloria, gloria, aleluya!\n¡Gloria, gloria, aleluya!\n¡Gloria, gloria, aleluya\na Cristo el Salvador!'
  },
  {
    'id_hymn': 650,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Las trompetas resonando\nnos advierten con amor;\ncada caso en el juicio\nse examina con fervor;\nlos malvados descuidados\nmarchan a la perdición\nen plena confusión.'
  },
  {
    'id_hymn': 650,
    'order': 3,
    'type': 'STROPHE',
    'content': ' Los salvados por su sangre\nrinden gloria al Salvador\nsiendo ya transfgurados\npor la fuerza de su amor,\nde inmortalidad vestidos\nle acompañan con canción\nen viaje a su mansión.'
  },
  {
    'id_hymn': 651,
    'order': 1,
    'type': 'STROPHE',
    'content': 'El Rey vendrá, no tardará,\nasí lo prometió;\nya el día muy cercano está.\nLa orden Él nos dio:'
  },
  {
    'id_hymn': 651,
    'order': 2,
    'type': 'STROPHE',
    'content': '“Os digo que habéis de velar,\nmuy pronto volveré;\nal mundo lo habéis de anunciar;\nvendré y os tomaré”.'
  },
  {
    'id_hymn': 651,
    'order': 3,
    'type': 'STROPHE',
    'content': 'No como niño esta vez,\nmas cual triunfante Rey;\npotente, y con rapidez,\ndesciende por su grey.'
  },
  {
    'id_hymn': 651,
    'order': 4,
    'type': 'STROPHE',
    'content': '¡Oh, cuán glorioso amanecer\ntan lleno de esplendor!\nEn el oriente se ha de ver\nla luz de mi Señor.'
  },
  {
    'id_hymn': 651,
    'order': 5,
    'type': 'STROPHE',
    'content': 'En blanca nube de fulgor,\nel arco sobre Él;\ncon ángeles rindiendo honor,\nvendrá Dios, Emanuel.'
  },
  {
    'id_hymn': 652,
    'order': 1,
    'type': 'STROPHE',
    'content': 'La segunda venida de Cristo\nun suceso imponente será,\ntan grandioso cual nunca fue visto;\nmás glorioso jamás se verá.\nDe los cielos el Hijo del hombre\nen la gloria del Padre vendrá;\n“Verdadero y fel” es su nombre,\ny el cetro del reino tendrá.\n“Verdadero y fel” es su nombre,\ny el cetro del reino tendrá.'
  },
  {
    'id_hymn': 652,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cual relámpago luce del este\nuna nube con luz de crisol,\ncuyo brillo, que alcanza al oeste,\nsobrepuja los rayos del sol;\nes la hueste de ángeles santos,\nrefulgentes de gloria y luz,\nque escoltan y loan con cantos\nal invicto y glorioso Jesús;\nque escoltan y loan con cantos\nal invicto y glorioso Jesús.'
  },
  {
    'id_hymn': 652,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Los impíos de miedo se espantan\ny perecen al ver al Señor;\nmas los justos las manos levantan\nhacia Cristo, su buen Redentor.\nContemplando sus gratos fulgores,\nle aclaman con férvida voz:\n“¡Rey de reyes, Señor de señores;\nmil hosannas al Hijo de Dios!”,\n“¡Rey de reyes, Señor de señores;\nmil hosannas al Hijo de Dios!”,'
  },
  {
    'id_hymn': 652,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Del sepulcro los lazos quebranta\nque ataban al pobre mortal;\na sus santos Jesús los levanta\nrevestidos de luz inmortal.\nY los lleva consigo al cielo,\nlos corona y palmas les da,\ny entonces disfrutan sin velo\nla presencia del Dios Jehová;\ny entonces disfrutan sin velo\nla presencia del Dios Jehová.'
  },
  {
    'id_hymn': 653,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Mirad cuán bella la señal\nque anuncia al Salvador,\ndel cielo viene con poder\ntrayendo galardón!\nEl mundo en conmoción,\nallá el resplandor,\ny los salvados por doquier\nprorrumpen en canción.'
  },
  {
    'id_hymn': 653,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Qué hermosa mañana,\nla de su venida!\n¡Cuán bello el día\ncuando venga el Salvador!\nReunidos al León\nde la tribu de Judá,\neterna dicha obtendrán\nlos benditos del Señor.'
  },
  {
    'id_hymn': 653,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Los ángeles cantando están\nsus himnos de loor;\ngozosamente elevan ya\nsu voz de adoración.\nEl Rey sentado está,\nmirad su gran fulgor,\ny desde el trono ordena ya\nla gran resurrección.'
  },
  {
    'id_hymn': 653,
    'order': 3,
    'type': 'STROPHE',
    'content': 'La muerte derrotada está\npor Cristo Emanuel\ny de la tumba salen ya\nmillones por doquier.\nSus manos limpiarán\nlas lágrimas de aquel\nque a su amor y su bondad\nllegó a corresponder.'
  },
  {
    'id_hymn': 653,
    'order': 4,
    'type': 'STROPHE',
    'content': 'En un instante nuestro ser\ncambiado ha de quedar,\nde vida eterna, inmortal,\nJesús nos dotará;\ny llenos de emoción\nsubimos al Hogar\nen donde a todos con amor\ncorona nos dará.'
  },
  {
    'id_hymn': 654,
    'order': 1,
    'type': 'STROPHE',
    'content': '¿Has oído el mensaje\ndel regreso del Señor?\nLa trompeta a medianoche sonará;\na sus feles todos llamará\nsin olvidarte a ti,\nsi con Cristo te alistas a vivir.'
  },
  {
    'id_hymn': 654,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Él viene, Él viene, mirad;\ncercano, cercano Él está.\nLas perlinas puertas ya\nábrense de par en par\ny los salvos entrarán en el Edén;\ny sus voces jubilosas\ncon los ángeles se oirán,\npues allí habitaremos con Jesús.'
  },
  {
    'id_hymn': 654,
    'order': 2,
    'type': 'STROPHE',
    'content': 'A los cielos subiremos\ncon los ángeles de luz;\nlos amados separados se unirán\ncon nosotros para siempre;\nnunca se apartarán,\ncuando allí habitaremos con Jesús.'
  },
  {
    'id_hymn': 654,
    'order': 3,
    'type': 'STROPHE',
    'content': ' Andaremos por los mundos\ndo el pecado no entró;\ndel amor les hablaremos de Jesús,\nque a buscarnos vino\npara darnos vida eternal,\npues allí habitaremos con Jesús.'
  },
  {
    'id_hymn': 654,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Pasarán los siglos\nuno tras el otro sin cesar,\ny el vigor perenne no se perderá\nde esa juventud eterna,\nprimavera sin menguar,\npues allí habitaremos con Jesús.'
  },
  {
    'id_hymn': 655,
    'order': 1,
    'type': 'STROPHE',
    'content': 'El Rey viene victorioso\nen glorioso amanecer;\ndesde el cielo majestuoso\nrodeado de poder.\nCon decenas de millares,\n¡todo es brillo, esplendor!\nVed los seres celestiales,\ntodos rinden su loor.\nFascinante es esta historia:\nEl Rey viene, Dios de amor.'
  },
  {
    'id_hymn': 655,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Muchas veces he pensado:\n“sus pisadas voy a oír”.\nLa esperanza he abrazado,\nse ilumina mi sentir.\nY las huestes celestiales\ndan a mi alma inspiración\ncon sus notas musicales\ndando hosannas al Señor.\nFascinante es esta historia:\nEl Rey viene, Dios de amor.'
  },
  {
    'id_hymn': 655,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Esperamos largamente\nal bendito Redentor;\nsu venida es inminente,\nviene pronto el Salvador.\nCual los cielos es su gloria,\ntodo llena de esplendor,\ncoronado de victoria\ntodos ríndenle loor.\nFascinante es esta historia:\nCristo viene, el Dios de amor.'
  },
  {
    'id_hymn': 656,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Pertenezco a mi Rey,\nhijo soy de su amor\ny a sus regias moradas iré;\nsus delicias sin fn\nrevelóme el Señor\ny un lugar con sus hijos tendré.'
  },
  {
    'id_hymn': 656,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Pertenezco a mi Rey,\nhijo soy de su amor,\ny a los suyos jamás olvidó;\nen su regia mansión\nhe de ver al Señor\ny a su lado feliz viviré.'
  },
  {
    'id_hymn': 656,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Pertenezco a mi Rey,\ny que me ama, lo sé;\ny sus dones de amor celestial\npor doquiera que voy\nsin cesar hallaré\ncomo pruebas de amor sin igual.'
  },
  {
    'id_hymn': 656,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Pertenezco a mi Rey,\ny no dudo jamás\nque reunidos los suyos serán\nen la Sión celestial,\nla morada de paz,\ndo pesares jamás se hallarán.'
  },
  {
    'id_hymn': 657,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Arrolladas las neblinas,\na la vista el esplendor\nde las sierras y las rías\na la luz y amor del sol;\ndel Señor el arco viendo,\nde promesas la señal,\ncon amigos verdaderos\ngozaremos claridad.'
  },
  {
    'id_hymn': 657,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Como nos conocerán,\nllegaremos a tener\npleno y recto entendimiento,\npaz tranquilidad, placer;\njustamente juzgaremos,\nsin las nieblas del ayer.'
  },
  {
    'id_hymn': 657,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Caminar atribulados\ncontemplando el porvenir,\nes sombrío, duro y largo\nen la soledad sufrir.\nMas la voz: ‘‘venid, benditos’’,\na las penas finpondrá;\nen la aurora allá reunidos,\ntras las nieblas, claridad.'
  },
  {
    'id_hymn': 657,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Todos, dicha rebosando,\ndel gran solio en derredor,\nentre amantes, entre amados,\ntendrán santa comprensión.\nDo los redimidos cantan\nsu rescate sin cesar,\nuna vez rasgado el velo\ngozaremos claridad.'
  },
  {
    'id_hymn': 658,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cuando aquí de la vida\nlos afanes cesen ya\ny amanezca bella aurora celestial;\nel Señor con trompeta\na los justos llamará\npara darles recompensa eternal.'
  },
  {
    'id_hymn': 658,
    'order': 2,
    'type': 'CHORUS',
    'content': 'He de conocerle entonces,\nredimido, a su lado cuando esté;\npor las señas de los clavos\nen sus manos a Jesús conoceré.'
  },
  {
    'id_hymn': 658,
    'order': 2,
    'type': 'STROPHE',
    'content': '¡Oh! Qué gozo supremo\ncuando pueda ver su faz\ny en eterna vida estar con mi Señor;\nde su lado ya nunca\nme podrán quitar jamás\nlos halagos de mi artero tentador.'
  },
  {
    'id_hymn': 658,
    'order': 3,
    'type': 'STROPHE',
    'content': 'He de ver a los míos\nque en la tierra ya perdí\ncuando en brazos de la muerte los dejé;\ny aunque de ellos entonces\ncon dolor me despedí,\njunto al trono de Jesús los hallaré.'
  },
  {
    'id_hymn': 658,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Al entrar por las puertas,\nen la célica ciudad,\nme uniré con los que allá triunfantes van;\ny del himno que alabé\nde mi Dios la majestad,\nlos acentos por los siglos sonarán.'
  },
  {
    'id_hymn': 659,
    'order': 1,
    'type': 'STROPHE',
    'content': ' Anhelo en las regias mansiones morar,\ndo reina mi Salvador;\nescucho los ecos de un dulce cantar\nde triunfo y de gran loor.'
  },
  {
    'id_hymn': 659,
    'order': 2,
    'type': 'CHORUS',
    'content': 'A mi supremo Rey, alegre cantaré,\nmis ojos han de ver la playa celestial;\nfeliz y salvo soy, y caminando voy\ncon júbilo a mi eterno Hogar.'
  },
  {
    'id_hymn': 659,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Gloriosa esperanza, inefable la paz\nque siento en mi corazón;\n¡Cuán dulce es tener comunión y solaz\ncon Dios en adoración!'
  },
  {
    'id_hymn': 659,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Eleva tu vista y contempla a Jesús,\nsé, fiel a tu Rey y Señor;\nlos nítidos rayos que emite la cruz\nte envuelvan en su esplendor.'
  },
  {
    'id_hymn': 660,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Al cielo vuelen los ecos santos\nque arranco alegre de mi laúd;\nal cielo vuelen mis dulces cantos,\nmis dulces cantos de gratitud.'
  },
  {
    'id_hymn': 660,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Alza tu canto, oh lengua mía!\n¡Alza tu canto mi corazón!\nLlénese el alma de alegría,\ncon alegría de devoción.'
  },
  {
    'id_hymn': 660,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Ya siento el fuego de los amores,\nde los amores del grato Edén;\nya no me acosan aquí dolores,\nporque contemplo a Jerusalén.'
  },
  {
    'id_hymn': 660,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Padre, en tu regia, santa morada,\ndonde la dicha no tiene fn;\nallí mi Patria miro esmaltada\nde bellas ﬂores de tu jardín.'
  },
  {
    'id_hymn': 660,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Oh Padre, impárteme tu consuelo;\nnada en la tierra yo espero ya;\ny haz que pueda entrar al cielo,\nque allí tan sólo mi dicha está.'
  },
  {
    'id_hymn': 661,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Mirando a la distancia\nla Patria puedo ver\ncon la feliz confanza\nde un claro amanecer.'
  },
  {
    'id_hymn': 661,
    'order': 2,
    'type': 'CHORUS',
    'content': 'A lo lejos puedo ya contemplar\nel hermoso y grande mar de cristal.\nOh Señor, que allí pueda entrar,\nen la Patria celestial do anhelo estar.'
  },
  {
    'id_hymn': 661,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Hoy Cristo nos invita\na su eterno hogar\ndo ﬂuye el agua viva\ny hay alegría sin par.'
  },
  {
    'id_hymn': 661,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Habla a los caminantes\nde la feliz mansión;\nhay tantos ignorantes,\nllévales la invitación.'
  },
  {
    'id_hymn': 662,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Hoy gozoso medito\nen la tierra mejor\na la cual Cristo me llevará.\nCuando me halle por gracia\ncon el Salvador\nbondadoso me coronará.'
  },
  {
    'id_hymn': 662,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Una bella corona\nde estrellas tendré\npor las almas que a Cristo llevé.\nCuando llegue al hogar\nde la dicha sin par,\nla corona de estrellas tendré.'
  },
  {
    'id_hymn': 662,
    'order': 2,
    'type': 'STROPHE',
    'content': 'De la fuerza de Dios\nesperando el poder,\ntrabajar quiero siempre y orar\npor las almas, y al fn,\ncual estrellas, saber\nque en mi sienes irán a brillar.'
  },
  {
    'id_hymn': 662,
    'order': 3,
    'type': 'STROPHE',
    'content': '¡Oh!, qué gozo en\nlos cielos será para mí\nvivas gemas poner a sus pies;\ny tener en mi frente\ncorona que allí\nornen joyas de tal brillantez.'
  },
  {
    'id_hymn': 663,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Con alegría y gran bendición\nvamos viajando al hogar celestial.\nLlévanos pronto a tu bella mansión\ndonde tendremos la vida inmortal.'
  },
  {
    'id_hymn': 663,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Es nuestro Líder, Jesús Redentor.\n“Gozo allí os espera sin fn”,\nfue la promesa de nuestro Señor;\ntodos oiremos alegre clarín.'
  },
  {
    'id_hymn': 663,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cantos gloriosos de ángeles mil\nllenan los cielos de felicidad.\nYa liberados de todo lo vil\nte alabaremos por tu gran bondad.'
  },
  {
    'id_hymn': 663,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Pronto amanece el día eternal,\ncuando Jesús por nosotros vendrá.\nClara, inefable, visión celestial,\ngloria por siempre tendremos allá.'
  },
  {
    'id_hymn': 664,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Allá sobre montes, en feliz país,\nla ciudad divina reposando está.\nNuestros pies, aquí cansados subirán:\nla mansión eterna divisamos ya.'
  },
  {
    'id_hymn': 664,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Vamos al hogar!, ¡Vamos al hogar!\n¡Ved sus torres brillan con gran esplendor!\n¡Ved la gloria como emana del Señor!\nEstaremos juntos por la eternidad\ncon los ángeles, cantando en la ciudad.\n¡Vamos al hogar!'
  },
  {
    'id_hymn': 664,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Los antiguos profetas nos hablaron ya\nde las calles de oro de esa gran ciudad.\nPor la fe hoy la podemos contemplar,\ncon sus muros de oro y jaspe, sin igual.'
  },
  {
    'id_hymn': 664,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Hermano, hermana ¿estarás allá,\nen aquella tierra do pesar no habrá?\nEl mensaje santo hoy acepta fel,\ny al venir el Salvador te llamará.'
  },
  {
    'id_hymn': 665,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Por mil arpas y mil voces\nse alcen notas de loor.\nCristo reina, el cielo goza,\nCristo reina, el Dios de amor.\nVed, su trono ocupa ya;\nsólo el mundo regirá.\n¡Aleluya!, ¡aleluya!, ¡aleluya! Amén.'
  },
  {
    'id_hymn': 665,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Rey de gloria, reine siempre\ntu divina potestad;\nnadie arranque de tu mano\nlos que son tu propiedad.\nDicha tiene aquel que está\ndestinado a ver tu faz\n¡Aleluya!, ¡aleluya!, ¡aleluya! Amén.'
  },
  {
    'id_hymn': 665,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Apresura tu venida\nen las nubes, ¡oh Señor!\nNuevos cielos, nueva tierra\ndanos Cristo por tu amor.\nÁureas arpas de tu grey,\n‘‘Gloria’’ entonen a su Rey.\n¡Aleluya!, ¡aleluya!, ¡aleluya! Amén.'
  },
  {
    'id_hymn': 666,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Dad gloria al Cordero Rey,\nsuprema potestad;\nde su divino amor la ley\npostrados aceptad,\nde su divino amor la ley\npostrados aceptad.'
  },
  {
    'id_hymn': 666,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Vosotros, hijos de Israel,\nresiduo de su grey,\nloores dad a Emanuel\ny proclamadle Rey,\nloores dad a Emanuel\ny proclamadle Rey.'
  },
  {
    'id_hymn': 666,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Naciones todas, escuchad\ny obedeced su ley\nde gracia, amor y santidad,\ny proclamadle Rey,\nde gracia, amor y santidad,\ny proclamadle Rey.'
  },
  {
    'id_hymn': 666,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Dios quiera que con los que están\ndel trono en derredor,\ncon cantos por la eternidad\na Cristo demos honor,\ncon cantos por la eternidad\na Cristo demos honor.'
  },
  {
    'id_hymn': 667,
    'order': 1,
    'type': 'STROPHE',
    'content': 'A veces oigo un himno cual yo jamás oí;\nes cántico divino, igual no conocí\nes santa melodía que expresa tierno amor;\nes célica armonía que exalta al Creador.'
  },
  {
    'id_hymn': 667,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Oh, música divina!, ¡Oh, canto del Edén!\nEs eco de la bella, feliz Jerusalén.'
  },
  {
    'id_hymn': 667,
    'order': 2,
    'type': 'STROPHE',
    'content': '¡Qué dulce paz yo gozo oyendo un canto tal!\nEl mundo tenebroso olvido y todo mal.\nMás dulce que las voces del viento y del mar\nes el cantar que llega del trono celestial.'
  },
  {
    'id_hymn': 667,
    'order': 3,
    'type': 'STROPHE',
    'content': 'El cántico sublime cual sueño llega a mí;\nparéceme su ritmo cual brisas del jardín.\n¡Dichoso pensamiento!: Salvado yo seré,\ny con los redimidos el himno entonaré.'
  },
  {
    'id_hymn': 668,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Qué música alegre me llega del mar!\nMe atrae con fuerza cual don celestial.\nEs coro de ángeles, dulce cantar,\nme invitan a unirme al canto triunfal.'
  },
  {
    'id_hymn': 668,
    'order': 2,
    'type': 'STROPHE',
    'content': ' Parado a la orilla del río Jordán\ncon ansias extiendo mi mano a Jesús,\nrogando me lleve a donde están,\npues quiero integrarme al coro de luz.'
  },
  {
    'id_hymn': 668,
    'order': 3,
    'type': 'STROPHE',
    'content': 'No importa si el agua profunda se ve,\nsi Dios lo permite me atreveré;\nel coro celeste me llama, lo sé,\ny a él he de unirme con toda mi fe.'
  },
  {
    'id_hymn': 669,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Jerusalén, mi amado hogar,\nanhelo en ti morar;\ntus calles de oro recorrer,\nlucientes como el sol;\ntu río cristalino ver,\nhermoso sin igual;\ny en sus verdes márgenes\ntranquilo reposar.'
  },
  {
    'id_hymn': 669,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Jerusalén!, ¡Jerusalén!\n¡Jerusalén, mi amado hogar!\nOh, cuándo te veré!'
  },
  {
    'id_hymn': 669,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Jerusalén, mi amado hogar,\nen ti no habrá dolor;\nel llanto no existirá,\nni muerte, ni clamor;\nallí no habrá enemistad,\npues reinará el amor,\ny sólo habrá felicidad\ncon nuestro Redentor.'
  },
  {
    'id_hymn': 669,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Ansío pronto a ti llegar,\nmi celestial hogar;\ncon mis amados que perdí,\nhallarme otra vez,\ny conocer a Abrahán,\na Eva y Adán,\ny contemplar el rostro de\nJesús, mi Salvador.'
  },
  {
    'id_hymn': 670,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Jerusalén, la excelsa,\nllegar anhelo a ti;\nmi sueño y mi esperanza\nal transitar aquí.\nLa grey, que ya tus glorias\nen lontananza ve,\ndepone sus afanes,\ny vive por la fe.'
  },
  {
    'id_hymn': 670,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Jesús te está alumbrando,\ny tú le das honor\na Aquel que fue inmolado,\ntu Esposo y Redentor.\n¡Qué gozo me es, tranquila,\neterna habitación,\nsaber que en ti termina\nmi peregrinación!'
  },
  {
    'id_hymn': 670,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Mi dulce patria amada,\n¿mi gozo tú serás?\nFeliz mansión soñada,\n¿contemplaré tu faz?\n¡ten gozo, tú que gimes\ny triste siempre estás,\npues con Jesús, sublime,\npor siempre reinarás!'
  },
  {
    'id_hymn': 671,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Más allá, en la excelsa patria\ndel cristiano, hay lugar,\ndonde el Salvador ha ido\nmi mansión a preparar.'
  },
  {
    'id_hymn': 671,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Más allá hay descanso,\nmás allá hay descanso,\nmás allá hay descanso,\nlibre del pesar,\ndo ﬂorece el bello árbol\nde la vida eterna,\nen los valles celestiales,\nvoy a reposar.'
  },
  {
    'id_hymn': 671,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Una casa me prepara\nque por siempre durará;\nmi tranquilidad perenne\nnadie la perturbará.'
  },
  {
    'id_hymn': 671,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Nunca sentiré las penas\nque sufría tanto aquí;\nterminadas mis faenas,\nme aguarda el premio allí.'
  },
  {
    'id_hymn': 671,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Herederos de la gloria\nvuestro triunfo pregonad;\nentraréis por los portales\nen la célica ciudad.'
  },
  {
    'id_hymn': 672,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Junto al río, nos veremos,\nde aguas vivas de cristal.\nPronto juntos tomaremos\nde su eterno manantial.'
  },
  {
    'id_hymn': 672,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Con Jesús, yo estaré\nen las márgenes del río.\nEn su gracia yo confío,\ncon su ayuda triunfaré.'
  },
  {
    'id_hymn': 672,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Y entrados en el puerto,\nen la playa celestial,\nya no es sueño, todo es cierto,\n¡tanta gloria eternal!'
  },
  {
    'id_hymn': 672,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Y en la gran ciudad gloriosa\nmoraremos con Jesús;\nreluciente, muy hermosa,\nalumbrada por su luz.'
  },
  {
    'id_hymn': 672,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Donde Cristo vaya iremos,\nno tendremos más dolor,\ny su faz contemplaremos,\ncara a cara, sin temor.'
  },
  {
    'id_hymn': 673,
    'order': 1,
    'type': 'STROPHE',
    'content': 'En la célica morada\nde las cumbres del Edén,\ndonde toda voz ensalza\nal Autor de todo bien,\n¿el pesar recordaremos,\ny la triste nublazón,\ntantas luchas del Espíritu\ncon el débil corazón?'
  },
  {
    'id_hymn': 673,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Sí, allí será gratísimo\nconocer y alabar\nal Pastor fiel y benéfco\nque nos ayudó a llegar.'
  },
  {
    'id_hymn': 673,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Oración, deberes, penas,\nvías que anduvimos ya,\nposeyendo las riquezas\nque Jesús nos guarda allá,\n¿la memoria retendremos\ndel pretérito dolor,\ndel camino largo, aspérrimo,\ncon sus luchas, su temor?'
  },
  {
    'id_hymn': 673,
    'order': 3,
    'type': 'STROPHE',
    'content': 'La bondad con que nos mira\nsin cansarse cuando ve\npoco fruto en nuestra vida,\ny tan débil nuestra fe,\n¿nos acordaremos de ella\nen aquel dichoso hogar,\nde eternal aurora espléndida\ne inefable bienestar?'
  },
  {
    'id_hymn': 674,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Reunidos en el cielo\nestaremos con Jesús,\nle veremos ya sin velo,\nrodeado de gran luz.'
  },
  {
    'id_hymn': 674,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Cuando al cielo lleguemos\ndía de regocijo nos será,\na Jesús veremos\ny acogida Él nos dará.'
  },
  {
    'id_hymn': 674,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Densas nubes nos cubrieron \nen el gran peregrinar,\nmas por Cristo se abrieron\npuertas del celeste hogar.'
  },
  {
    'id_hymn': 674,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cual viajeros rumbo al cielo\nhoy debemos continuar\nbatallando y con anhelo,\nmuchas almas rescatar.'
  },
  {
    'id_hymn': 674,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Galardón recibiremos\nen la celestial ciudad;\ncalles de oro pisaremos,\nesta es la gran verdad.'
  },
  {
    'id_hymn': 675,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Miles de ángeles del cielo\ncantan alabanza a Dios;\nal Cordero en su trono\ny al Padre eternal.\nLa dulzura de sus arpas\ny sus voces sin igual\nhoy los hombres todos deben\nimitar en su loor'
  },
  {
    'id_hymn': 675,
    'order': 2,
    'type': 'CHORUS',
    'content': '“Santo, Santo”, el coro angelical,\ndirá, y yo a él espero unir\nmi humilde voz;\nmas cuando cante yo la dicha\nde mi redención,\nde asombro mudo quedará\noyendo tal amor'
  },
  {
    'id_hymn': 675,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Tema eterno cantaremos:\n“Honra y gloria al Salvador\nque nos redimió y por su\nsacrifcio nos lavó,\npues en esta vida nos sostuvo en\nprueba y dolor,\ny a través de la tribulación\nal reino nos llevó”.'
  },
  {
    'id_hymn': 675,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Como el son de muchas aguas\nse oye aquella multitud;\ncanta de la gran victoria\nde Jesús y su virtud.\nMas los ángeles que escuchan\nno conocen el cantar\nde los triunfos y victorias\nalcanzados al luchar.'
  },
  {
    'id_hymn': 676,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Oh célica Jerusalén!,\n¡oh!, ¿cuándo te veré?\nTus glorias, que por fe se ven,\n¡oh!, ¿cuándo gozaré?'
  },
  {
    'id_hymn': 676,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Amada patria celestial,\najena de dolor,\na los que agobia aquí el mal\nconsolará tu amor.'
  },
  {
    'id_hymn': 676,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Sin sombra te contemplaré:\nhay vida y luz en ti;\ncual astro resplandeceré\neternamente allí.'
  },
  {
    'id_hymn': 676,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Del cristalino manantial\nde vida beberé;\ndel árbol de la eternidad\ngozoso comeré.'
  },
  {
    'id_hymn': 676,
    'order': 5,
    'type': 'STROPHE',
    'content': 'Al Rey de gloria, mi Jesús,\nallí veré reinar;\nmi alma llenará de luz\nen esa Sión sin par.'
  },
  {
    'id_hymn': 677,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Del bello país he leído,\ny su hermosa ciudad capital,\ncuyas calles gloriosas son de oro,\ny de jaspe su muro eternal;\npor el río las aguas de vida\nﬂuyen con perennal claridad;\nmas en cuanto a toda esta excelencia\nno se ha dicho aún la mitad.'
  },
  {
    'id_hymn': 677,
    'order': 2,
    'type': 'CHORUS',
    'content': 'No se ha dicho aún la mitad;\nno se ha dicho aún la mitad;\nde la santa ciudad tan gloriosa,\nno se ha dicho aún la mitad.'
  },
  {
    'id_hymn': 677,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Leído he de aquellas mansiones\nque el Maestro fue a preparar,\ndo los santos que aquí fueron feles\nvan por siempre jamás a gozar;\nno habrá muerte, dolor, ni pecado,\nsino reina la inmortalidad;\nmas en cuanto a su excelsa grandeza\nno se ha dicho aún la mitad.'
  },
  {
    'id_hymn': 677,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Leído he de níveos vestidos,\nde coronas que han de ostentar\nlos que sean del Padre llamados\nde su gloria eternal a gozar;\nandarán por las calles de oro,\npues han hecho justicia y verdad;\nmas de historia tan bella y sublime\nno se ha dicho aún la mitad.'
  },
  {
    'id_hymn': 677,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Leído he de Cristo el benigno,\nque al más vil pecador limpiará;\ncómo paz y perdón le confere\nal que humilde buscándolos va.\nHe leído cómo Él nos protege,\nque se apiada de nuestra orfandad;\nmas de tanta bondad pregonada\nno se ha dicho aún la mitad.'
  },
  {
    'id_hymn': 678,
    'order': 1,
    'type': 'STROPHE',
    'content': 'En lo profundo de la mar\nel vil pecado dejaré.\nTan sólo así podré morar\ncon el divino Rey.'
  },
  {
    'id_hymn': 678,
    'order': 2,
    'type': 'CHORUS',
    'content': 'En el mar dejaré\nmis pecados, dejaré, dejaré;\nnunca más se hallarán;\ny con Cristo viviré.'
  },
  {
    'id_hymn': 678,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Deseo ahora consagrar\nmi vida entera al Salvador,\ny mi pecado abandonar,\nconfando en el Señor.'
  },
  {
    'id_hymn': 678,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Mi enorme culpa al sepultar,\na vida nueva naceré;\ny para siempre iré a morar\ncon mi divino Rey.'
  },
  {
    'id_hymn': 679,
    'order': 1,
    'type': 'STROPHE',
    'content': 'En las aguas de la muerte\nsumergido fue Jesús;\nmas su amor no fue apagado\npor las penas de la cruz.\nLevantóse de la tumba,\nsus cadenas quebrantó,\ny triunfante y victorioso\na los cielos ascendió.'
  },
  {
    'id_hymn': 679,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En las aguas del bautismo\nhoy confeso yo mi fe:\nJesucristo me ha salvado\ny en su amor me gozaré.\nEn las aguas, humillado,\na Jesús siguiendo voy;\ndesde ahora, para el mundo\ny el pecado, muerto estoy.'
  },
  {
    'id_hymn': 679,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Ya que estoy crucifcado,\n¿cómo más podré pecar?\npor su gracia transformado,\nvida nueva he de llevar.\nA las aguas del bautismo\nme llevó la contrición;\ndesde ahora me consagro\nal que obró mi redención.'
  },
  {
    'id_hymn': 680,
    'order': 1,
    'type': 'STROPHE',
    'content': 'La fuente veo carmesí,\nel ancho manantial,\nque de Jesús, mi Salvador,\nemana perennal.'
  },
  {
    'id_hymn': 680,
    'order': 2,
    'type': 'CHORUS',
    'content': 'La fuente veo carmesí;\ncon su poder me limpia a mí,\n¡Oh, gloria a Dios!, me limpia a mí,\nme limpia, ¡oh sí!, me limpia a mí.'
  },
  {
    'id_hymn': 680,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Soy nueva criatura en Él;\nme hizo renacer,\ny el hombre viejo nunca más\nhabrá de contener.'
  },
  {
    'id_hymn': 680,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Gozoso espero ir con Jesús\na mi celeste hogar;\nallí, cual fuente, de la cruz\nsu amor ha de emanar'
  },
  {
    'id_hymn': 680,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Levantóme en la cruz a andar\nsobre el mundano error;\ndeseo un limpio corazón\nque agrade al Salvador'
  },
  {
    'id_hymn': 681,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Vengamos a las aguas vivas,\nla fuente de salud.\nJesús nos da la bienvenida\ncon gran solicitud.'
  },
  {
    'id_hymn': 681,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Vengamos a la fuente viva\nque nos da consuelo y guía,\nque renueva nuestra vida;\nvamos al Señor Jesús.'
  },
  {
    'id_hymn': 681,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cuán dulce es tener descanso\ntras arduo trabajar,\nes cual el agua del remanso\nque brinda bienestar.'
  },
  {
    'id_hymn': 681,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Acércate a Jesucristo,\nÉl te restaurará,\ntendrás un gozo nunca visto,\nde paz te colmará.'
  },
  {
    'id_hymn': 682,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Heme aquí, preséntome ante ti,\na celebrar la santa comunión;\na anunciar con fe al mundo, sí,\nque por tu muerte tú nos das perdón.'
  },
  {
    'id_hymn': 682,
    'order': 2,
    'type': 'STROPHE',
    'content': 'He de comer del pan que es celestial,\nque representa el cuerpo de Jesús,\nquien cual cordero, ofrenda sin igual,\npor mis pecados se ofreció en la cruz.'
  },
  {
    'id_hymn': 682,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Tú nos concedes fruto de la vid\nque simboliza sangre carmesí\nque derramó el Hijo de David,\npara limpiarnos de la lepra, sí.'
  },
  {
    'id_hymn': 682,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Hoy nos reiteras la invitación\nal matrimonio que tendrá lugar,\ncuando el Cordero,\nvictorioso en Sión,\ndé a su iglesia celestial hogar.'
  },
  {
    'id_hymn': 682,
    'order': 5,
    'type': 'STROPHE',
    'content': 'Es esta festa símbolo de amor\nque fortifca nuestra fe en ti,\nnos vivifca y llena de valor\npara triunfar en nuestra lucha aquí.'
  },
  {
    'id_hymn': 682,
    'order': 6,
    'type': 'STROPHE',
    'content': 'Nuestra asamblea llega a su fnal,\nse ha terminado el vino y el pan,\nmas permanece afecto fraternal,\ntu bendición y paz que no se irán.'
  },
  {
    'id_hymn': 683,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Reunidos en silencio,\nreverencia y humildad,\nrecordando el sacrifcio\nhecho por la humanidad,\nnos unimos en servicio\nque recuerda tu bondad.'
  },
  {
    'id_hymn': 683,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Desde el cielo descendiste,\nte humillaste por amor,\ntierno te compadeciste\ndel indigno pecador,\ny a la muerte padeciste,\nmi bendito Redentor.'
  },
  {
    'id_hymn': 683,
    'order': 3,
    'type': 'STROPHE',
    'content': ' A tu mesa congregados\nhemos de participar\nde este pan ya consagrado,\nsímbolo particular\nde tu cuerpo traspasado\npor llevarnos a tu hogar.'
  },
  {
    'id_hymn': 683,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Este vino representa\nesa sangre carmesí,\nderramada en cruz cruenta\nen rescate para mí.\n¡Oh, Señor, cuán grande afrenta\nhas sufrido tú por mí!'
  },
  {
    'id_hymn': 684,
    'order': 1,
    'type': 'STROPHE',
    'content': '“El pan de vida soy”, dice el Señor;\nven, alma hambrienta, ahora, al Salvador;\n“hambre jamás tendrá quien viene a mí,\nsed nunca sentirá quien cree en mí”.'
  },
  {
    'id_hymn': 684,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Vertiste tú por mí, buen Salvador,\ntu sangre, en prueba de tu amor.\nCristo, hazme recordar tu gran dolor;\ny aprecie yo tu amor y salvación.'
  },
  {
    'id_hymn': 684,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Hazme vivir, Señor, cerca de ti;\nla deuda de tu amor la siento en mí;\nte entrego a ti mi ser, mi corazón.\n¡Loor a ti, Señor, y bendición!'
  },
  {
    'id_hymn': 685,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Jesús invita hoy a todos a cenar,\ny el sacrifcio de la cruz\nasí conmemorar.'
  },
  {
    'id_hymn': 685,
    'order': 2,
    'type': 'STROPHE',
    'content': 'El vino y el pan, emblemas del dolor\ncruel sufrido por Jesús,\ndespierten nuestro amor'
  },
  {
    'id_hymn': 685,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Él dijo así: “Tomad del pan y de la vid,\ny mientras juntos me esperáis,\nmi muerte discernid”'
  },
  {
    'id_hymn': 685,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Muy pronto pasará la noche abismal,\ny a sus santos Cristo al fn\ndará otra cena igual.'
  },
  {
    'id_hymn': 686,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Espíritu de santidad,\ndivino y eternal,\npreciosa fuente de verdad,\nven, quita nuestro mal.'
  },
  {
    'id_hymn': 686,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Con este rito que el Señor\npor siempre instituyó,\ncelebraremos su amor,\npues Él por nos murió.'
  },
  {
    'id_hymn': 686,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Jesús, querido Salvador,\nen nuestro corazón\ninfunde gracia y fervor\nde celestial unción.'
  },
  {
    'id_hymn': 686,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Enciende el fuego efcaz\nde fe y caridad;\nconcédenos perdón y paz,\namor y santidad.'
  },
  {
    'id_hymn': 687,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Todo es bello en el hogar\ncuando hay amor;\nnada allí podrá dañar\ncuando hay amor.\nPaz y gozo se hallarán,\nfuerzas se restaurarán\ny el Señor será el Guardián\ncuando hay amor.'
  },
  {
    'id_hymn': 687,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Con amor, con amor,\ntodo es bello en derredor\ncuando hay amor.'
  },
  {
    'id_hymn': 687,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Hasta en chozas hay placer\ncuando hay amor;\nodio y mal no puede haber\ncuando hay amor.\nCada rosa en el jardín,\nlos claveles y el jazmín\na mis males pone fn\ncuando hay amor.'
  },
  {
    'id_hymn': 687,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Tiene el labio su canción\ncuando hay amor;\nllega el cielo al corazón\ncuando hay amor.\nEl riachuelo al murmurar\ny las aves al cantar\nnos inspiran sin cesar\ncuando hay amor.'
  },
  {
    'id_hymn': 687,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Mi Jesús, te ruego hoy\nmás de ese amor.\nYa que tuyo siempre soy,\ndame ese amor.\nLos que tienes en tu grey,\nsiempre andan en tu Ley\ny te honran como Rey\npor tu gran amor.'
  },
  {
    'id_hymn': 688,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Perfecto amor del cielo descendiendo,\npor ti, Señor, enviado a este hogar;\npor este don tan noble y venturoso\nlas gracias hoy venímoste a dar.'
  },
  {
    'id_hymn': 688,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Perfecto amor ¡oh Dios!, tu don gratuito\nsea abundante, y dé a este hogar solaz;\nsagrado amor que sea para siempre\nfuente de gozo, esperanza y paz.'
  },
  {
    'id_hymn': 688,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Perfecto amor ¿qué más desea el alma,\nde bendiciones rebosando ya?\nAmor que ensalce, de tu amor la gloria,\ny que perdure por la eternidad.'
  },
  {
    'id_hymn': 689,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Nos congregamos hoy en oración\nen ocasión del vínculo nupcial,\npara rogarte des tu bendición\na estos novios Padre Celestial.'
  },
  {
    'id_hymn': 689,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Al presentarse ante tu altar\nperpetuamente quiérense unir,\nque puedan siempre sólo en ti confar\ny con tu ayuda muy feliz vivir.'
  },
  {
    'id_hymn': 689,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Hazte presente en el nuevo hogar,\nreine en él amor y comprensión,\ny de su seno ascienda sin cesar\nfiel alabanza por tu bendición.'
  },
  {
    'id_hymn': 690,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Sin temores bajaré al valle oscuro\npues Jesús la llave tiene del lugar.\nHe de descansar en paz y bien seguro\nhasta cuando con su voz me ha de llamar.'
  },
  {
    'id_hymn': 690,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Gozo, glorioso gozo,\nal unirme a Cristo el Salvador.\nGozo, inmenso gozo,\ncuando Él regrese en esplendor.'
  },
  {
    'id_hymn': 690,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Hay consuelo al dejarnos los que amamos,\nque confaron en la sangre de Jesús,\npues seremos nuevamente congregados\nal regreso del gran Príncipe de luz.'
  },
  {
    'id_hymn': 690,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Ven, acepta el llamado de mi Cristo\nque anhela tu completo bienestar,\npara que a su regreso te halle listo\ny te lleve con los santos al hogar.'
  },
  {
    'id_hymn': 691,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Oh santo Dios!, tu tierno amor,\nes nuestro fiel consolador.\nCual Padre amante, tú nos das\nconsuelo, alivio y solaz.'
  },
  {
    'id_hymn': 691,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Tu hijo fel, que ya durmió,\nla copa amarga apuró.\nLa vida que le diste aquí\nde nuevo la ha devuelto a ti.'
  },
  {
    'id_hymn': 691,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Sus obras acabadas ya,\nel galardón le espera allá,\ny con la hueste angelical\ntendrá la vida eternal.'
  },
  {
    'id_hymn': 692,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Llegaremos al hogar que Jesús preparó,\ndonde irán a descansar\nlos que aquí redimió.\nLiberados del temor, del dolor y el pesar,\ngozaremos de su amor\nen la patria sin par.'
  },
  {
    'id_hymn': 692,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Un hogar Dios nos da,\ny con Cristo en su mansión,\ntodo fiel vivirá.'
  },
  {
    'id_hymn': 692,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Vuestro hogar aquí no está.\nCuanto veis en redor\na la nada volverá\na la voz del Señor.\nEste mundo de maldad,\ncon su fausto y su placer,\ncon su orgullo y vanidad,\nlo veréis perecer.'
  },
  {
    'id_hymn': 692,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Por el que a la tumba va\nno lloréis con dolor,\npues a vida volverá\ncuando venga el Señor.\nJunto al trono de Jesús\na los vuestros hallaréis,\ny viviendo en gracia y luz\nnunca ‘‘adiós’’ les diréis.'
  },
  {
    'id_hymn': 693,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Ven, alma que lloras, ven al Salvador;\nen tus tristes horas dile tu dolor.\nSí, dile tu duelo; ven tal como estás;\nhabla sin recelo, y no llores más.'
  },
  {
    'id_hymn': 693,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Penas y amarguras, dilas al Señor;\ncrueles desventuras, lágrimas y error;\nen su tierno seno tú descansarás;\nven, Cristo es bueno, y no llores más.'
  },
  {
    'id_hymn': 693,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Guía al extraviado, muéstrale tu luz.\nLleva al angustiado al manso Jesús.\nLa bendita nueva de celeste paz\nal triste, pues, lleva, y no llores más.'
  },
  {
    'id_hymn': 694,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Con gran gozo y placer\nnos volvemos hoy a ver;\nnuestras manos otra vez estrechamos.\nSe contenta el corazón\nensanchándose de amor;\ntodos a una voz a Dios gracias damos.'
  },
  {
    'id_hymn': 694,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Bienvenido! ¡Bienvenido!\nLos hermanos hoy aquí\nnos gozamos en decir:\n¡Bienvenido! ¡Bienvenido!\nAl volvernos a reunir, ¡bienvenido!'
  },
  {
    'id_hymn': 694,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Hasta aquí Dios te ayudó,\nni un momento te dejó\ny a nosotros te volvió. ¡Bienvenido!\nEl Señor te acompañó,\nSu presencia te amparó,\ndel peligro te guardó. ¡Bienvenido!'
  },
  {
    'id_hymn': 694,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Dios nos guarde en este amor,\npara que de corazón,\nconsagrados al Señor,\nle alabemos en la eterna reunión\ndo no habrá separación,\nni tristeza ni aﬂicción. ¡Bienvenido!'
  },
  {
    'id_hymn': 695,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cuán gozosos nos sentimos\nal reunirnos hoy aquí.\n¡Bienvenidos, bienvenidos,\ncuán felices somos, sí!\nQue la dulce paz del cielo\nhoy podamos recibir\ny nos una el mismo anhelo:\nReine Cristo aquí.'
  },
  {
    'id_hymn': 695,
    'order': 2,
    'type': 'STROPHE',
    'content': 'El amor hoy nos motiva\ny nos llena de emoción\npues el mismo amor nos une\npara estar en comunión.\nUn amor que es espontáneo,\nabnegado, fraternal,\nque proviene de Jesús,\nel Huésped Principal.'
  },
  {
    'id_hymn': 695,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Enlacemos nuestras manos\ny pidamos con fervor\nel poder estar, hermanos,\nen la festa del Señor\ndo no habrá separaciones,\nni tristeza, ni dolor;\n¡redimidos nos veremos\ndando a Dios loor!'
  },
  {
    'id_hymn': 696,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Hoy con amor, bienvenidos, sí,\nsois por la hermandad;\nDios os guardó y os trajo aquí\nen su fdelidad.'
  },
  {
    'id_hymn': 696,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Cuán grato es el compartir;\ncuán grato es juntos cantar, reír.'
  },
  {
    'id_hymn': 696,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cuán grata es nuestra reunión,\ncuánta felicidad;\ngozo especial llena el corazón\ngracias a la amistad.'
  },
  {
    'id_hymn': 696,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Pronto Jesús nos ha de llevar\nal reino celestial,\ndo la unidad ha de perdurar\nen santo amor flial.'
  },
  {
    'id_hymn': 697,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cuán grato es con amigos vernos\nen tiempo tan veloz;\nmas siempre llega el día triste\nen que se dice «adiós».'
  },
  {
    'id_hymn': 697,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Jamás se dice “adiós” allá,\njamás se dice “adiós”;\nen el país de gozo y paz\njamás se dice “adiós”.'
  },
  {
    'id_hymn': 697,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cuán dulce es el consuelo dado\npor ellos al partir:\nQue cuando venga Cristo en gloria,\nnos hemos de reunir.'
  },
  {
    'id_hymn': 697,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Jamás habrá la despedida\ntan dolorosa aquí;\nmas grata unión y paz eterna\nse gozarán allí.'
  },
  {
    'id_hymn': 698,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Hoy se clausura nuestra reunión\ny a casa nos hemos de ir;\nfue agradable estar en comunión\ny amor y amistad compartir.\nQue nos alumbre Dios con celestial saber\ny así sigamos la senda a Sión.\nCumplamos todos con nuestro deber\npues grande será el galardón.'
  },
  {
    'id_hymn': 698,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Para nosotros muy amado es\nel nombre de Cristo Jesús;\ncontemos pues con gran intrepidez\nla obra que hizo en la cruz.\nA nuestro lado está, su mano nos guiará,\npodemos su presencia sentir.\nHagamos pues la obra que nos da,\nsu voz hoy podemos oír.'
  },
  {
    'id_hymn': 698,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Doquier vayamos al salir de aquí\npresente debemos tener,\nque Dios demanda de ti y de mí,\nsus feles discípulos ser.\nDebemos alabar y honrar a nuestro Dios\na causa de su gran redención;\nalzar con gozo en alto nuestra voz\ncantando su amor y perdón.'
  },
  {
    'id_hymn': 698,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Adiós, adiós, salid con fe y valor,\nlas nuevas id y proclamad.\nVuestros afectos dad al Salvador,\nentera obediencia prestad.\nLimpiarnos del pecado es su voluntad\ny, ¡qué más le podemos pedir!\nSeremos libres por la eternidad,\ncon Él es tan dulce vivir.'
  },
  {
    'id_hymn': 699,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Muy placenteras fueron estas horas\nque Dios nos concedió feliz pasar;\npero los días corren sin demora,\nla despedida siempre ha de llegar,\nla despedida siempre ha de llegar.'
  },
  {
    'id_hymn': 699,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Mas no será adiós, sino hasta luego,\nsi es la voluntad del Salvador.\nEs nuestro anhelo, y a Jesús le ruego:\nsiempre nos una este mismo amor,\nsiempre nos una este mismo amor.'
  },
  {
    'id_hymn': 699,
    'order': 3,
    'type': 'STROPHE',
    'content': 'En esta vida todo es muy incierto,\nnunca sabemos lo que ha de pasar.\nEs Jesucristo el camino cierto\nque a vida eterna nos ha de llevar,\nque a vida eterna nos ha de llevar.'
  },
  {
    'id_hymn': 699,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Hasta muy pronto, nos veremos luego,\nsi no es aquí, será en la eternidad.\nNo dudes nunca, aviva pues tu fuego\nque siempre arda con seguridad,\nque siempre arda con seguridad.'
  },
  {
    'id_hymn': 700,
    'order': 1,
    'type': 'STROPHE',
    'content': ' En Jesús mi alma tiene\ntoda su seguridad,\ncon su brazo me sostiene\ny me da felicidad.\nSiempre con amor me cuida,\npor salvarme dio su vida;\na su lado seguiré\nmientras en el mundo esté'
  },
  {
    'id_hymn': 700,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Fiel amigo encuentro en Cristo,\nme consuela y da solaz;\na mis males ha provisto\nsolución, perdón y paz.\nEs mi sol y mi alegría,\nquien me da sabiduría;\nÉl me brinda redención\ny me lleva a su mansión.Fiel amigo encuentro en Cristo,\nme consuela y da solaz;\na mis males ha provisto\nsolución, perdón y paz.\nEs mi sol y mi alegría,\nquien me da sabiduría;\nÉl me brinda redención\ny me lleva a su mansión.'
  },
  {
    'id_hymn': 701,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Tiernas canciones alzad al Señor,\nhimnos que lleven del alma la fe,\ny hablen muy alto del férvido amor\nque hay en el pecho del hombre que cree.\nVengan trayendo ferviente canción,\nniños y ancianos, de Dios al altar;\ntraigan a Él su corazón,\núnico don que podrá aceptar.'
  },
  {
    'id_hymn': 701,
    'order': 2,
    'type': 'CHORUS',
    'content': '¡Cielo y tierra canten\nal Señor de las naciones!\n¡Cielo y tierra canten\nal Señor de las naciones,\ny los hombres todos,\ncon alegres corazones,\nsirvan al Señor que\nvida y paz siempre les da!'
  },
  {
    'id_hymn': 701,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Él es la fuente de toda bondad,\nÉl es la vida, la luz, y el calor,\nsólo Él nos libra de cruel ansiedad,\nsólo Él aleja del alma el dolor;\ndigno es por tanto, que el hombre le dé\ngloria y honor que resuenen doquier.\nVamos a Él llenos de fe,\nnos salvará con su gran poder.'
  },
  {
    'id_hymn': 702,
    'order': 1,
    'type': 'STROPHE',
    'content': ' Jehová es mi luz, y también\nmi salvación, no temeré.\nÉl es fortaleza, escudo y poder,\nde nadie tendré temor.\nAunque el malo me aceche a mí\nsólo en Dios confaré.\nSi hay guerra en derredor,\nprotección encuentro siempre en Él.\nSólo una cosa pido a Jehová\ny está buscaré:\n(Que habite yo en la casa de Dios,)\nQue habite yo en la casa de Dios,\nque habite yo en la casa de Dios\ncada día y contemple su faz.Amén.'
  },
  {
    'id_hymn': 703,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Salvador de mi alma eres\na tu pecho quiero huir;\nsé lo mucho que me quieres,\nno podré sin ti vivir.\nGuárdame de las tormentas\ny de toda tempestad;\nsin tu guía voy a tientas,\nten de mí, Señor, piedad.'
  },
  {
    'id_hymn': 703,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Eres mi único consuelo\nmi refugio hallo en ti;\nno me dejes te lo ruego,\ndesarraiga el mal de mí.\nFortalece mi confanza\nque el cielo he de alcanzar;\neres mi única esperanza,\nquiero yo contigo andar.'
  },
  {
    'id_hymn': 703,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Gracia sobre gracia dame,\ndame reconciliación.\nA tu sombra ampararme\nes mi gran aspiración.\nEres Fuente de la Vida,\nquiero apagar mi sed;\ny que mi alma escondida\npueda en ti permanecer.'
  },
  {
    'id_hymn': 703,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Que mi relación contigo\nmuy estrecha pueda ser;\nlíbrame del enemigo\nque no pueda en mí vencer.\nQue a la tentación resista\npor tu grande y buen poder;\nhaz que fje en ti mi vista\ny confíe en tu saber.'
  },
  {
    'id_hymn': 704,
    'order': 1,
    'type': 'STROPHE',
    'content': 'A Dios elevo el corazón\nen cada amanecer,\na solas en mi habitación\nle alabo con placer.\nImploro me dé bendición\nen mi salir y entrar\ny que me libre de aﬂicción,\ntambién de tropezar.\nCon su divina protección\ncuán grato es vivir.\nEs dulce estar en comunión,\nalivia mi existir.'
  },
  {
    'id_hymn': 704,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Llegando otro anochecer,\nme duermo sin temor;\nsé que me va a proteger\nbrindándome su amor.\n¿Qué habrá en otro amanecer?\n¡Jesús podrá llegar!\nQue no me vaya a sorprender,\nvelando he de estar.\nHa sido Él mi elección,\n¿por qué tener temor?\nY yo que espero redención\nle rendiré loor.'
  },
  {
    'id_hymn': 705,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Maravillosa gracia\nvino Jesús a dar,\nmás alta que los cielos,\nmás honda que la mar;\nmás grande que mis culpas\nclavadas en la cruz\nes la maravillosa gracia de Jesús.'
  },
  {
    'id_hymn': 705,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Inefable es la divina, la divina gracia,\nes inmensurable\ncual la más profunda mar;\nfuente preciosa\npara el pecador, el pecador.\nPerdonando todos mis pecados,\nCristo me limpió de mi maldad;\nalabaré su dulce\nnombre por la eternidad.'
  },
  {
    'id_hymn': 705,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Maravillosa gracia,\ngracia de compasión,\ngracia que sacia el alma\ncon plena salvación;\ngracia que lleva al cielo,\ngracia de paz y luz\nes la maravillosa gracia de Jesús.'
  },
  {
    'id_hymn': 705,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Maravillosa gracia\nllama con dulce voz,\nllámanos a ser hechos\nhijos de nuestro Dios;\ncolma de su consuelo,\nnos llena de virtud,\nes la maravillosa gracia de Jesús.'
  },
  {
    'id_hymn': 706,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Se va la luz dorada, el día declinó,\ny toda la manada en el redil entró;\nmas el Pastor no hallaba\na la que se extravió;\nla noche era entrada,\npor ella Él salió,\nllorando, pues la amaba,\ny bien que la encontró.'
  },
  {
    'id_hymn': 706,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Perdida tu alma puede ser\nal rehusar oír su voz;\nven, pronto va a anochecer,\ntu cuenta ajustarás con Dios.\nTe invita Él con tierno amor\ny sordo no podrás estar;\nescucha ya a tu Pastor,\nven pronto, sin tardar.'
  },
  {
    'id_hymn': 706,
    'order': 2,
    'type': 'STROPHE',
    'content': '“Yo cuento a mis amados\nlo dice el Buen Pastor,\na aquellos extraviados\nyo busco con amor.\nA los pequeños quiero\nen brazos acoger;\nque al enemigo fero\nresistan con poder;\nsalvarlos es mi anhelo,\nel triunfo han de obtener’’'
  },
  {
    'id_hymn': 706,
    'order': 3,
    'type': 'STROPHE',
    'content': '“Mirando cariñoso\ncontándolas estoy;\nmas la perdida ansioso\na recogerla voy.\nSé bien que lastimada\ny herida ha de estar,\nquizás perniquebrada,\nla tengo que encontrar,\ny con amor cargada\nla llevaré al hogar”.'
  },
  {
    'id_hymn': 706,
    'order': 4,
    'type': 'STROPHE',
    'content': '“Por peñas escarpadas\ngustoso he de ir,\nque en noches tan heladas\nquizás ha de morir.\nA mí ven, hijo mío,\ndescanso te daré;\nven pues que yo te fío,\ntus faltas supliré.\nA mí ven, hijo mío,\ntu voz yo oiré”.'
  },
  {
    'id_hymn': 707,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Ven a los pies de Jesús;\nven, no desprecies su cruz.\nven por la senda de luz,\npor la senda de luz\nque es tan sólo Jesús,\nquien tomando su cruz,\nte brindó salvación;\nmira al monte de Sión.'
  },
  {
    'id_hymn': 707,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Oye la voz del Señor;\nmira su inmenso dolor.\nPiensa en que Dios es amor,\nen que Dios es amor;\nsufrió intenso dolor\npor hacerte el favor\nde brindarte salud\nen su gran plenitud.'
  },
  {
    'id_hymn': 707,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Vuelve tus ojos a Dios;\nvuelve, y escucha su voz.\nY ya no más serán dos,\nuno solo con Dios,\nuno solo con Dios;\nven y busca veloz\naquel bello país\ndo serás más feliz.'
  },
  {
    'id_hymn': 707,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Ábrele tu corazón;\na quien te ofrece perdón,\nquien con su crucifxión\nconsumó redención,\nofreciendo el perdón\ny la consolación,\npues Él quiso morir\npara hacernos vivir.'
  },
  {
    'id_hymn': 708,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Aunque sean como grana,\ntus pecados lavaré.\nAunque sean como grana,\ncomo nieve los haré.\nSí, aunque sean como grana,\nyo los lavaré.\nAunque sean como grana,\naunque sean como grana,\ntus pecados lavaré,\ntus pecados lavaré.'
  },
  {
    'id_hymn': 708,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Oye voz que te suplica:\n“Vuelve, vuelve a tu Señor”.\nOye voz que te suplica:\n“Vuelve, vuelve a tu Señor”\nBueno es tu Dios, es compasivo\ny de tierno amor.\nOye voz que te suplica,\noye voz que te suplica:\n“Vuelve, vuelve a tu Señor,\nvuelve, vuelve a tu Señor”'
  },
  {
    'id_hymn': 708,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Él aleja tus pecados\ny su consecuencia atroz.\nÉl aleja tus pecados\ny su consecuencia atroz.\n“Venid a mí, pues, y sed salvos”,\ndice nuestro Dios.\nÉl aleja tus pecados,\nÉl aleja tus pecados\ny su consecuencia atroz,\ny su consecuencia atroz.'
  },
  {
    'id_hymn': 709,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Dona nobis pacem, pacem.\nDona nobis pacem.\nDona nobis pacem.\nDona nobis pacem.\nDona nobis pacem.\nDona nobis pacem.\nOh, Dios, danos dulce paz.\nOh, Dios, danos dulce paz.\nOh, Dios, danos paz.\nOh, Dios, danos dulce paz.\nOh, Dios, danos paz.\nOh, Dios, danos dulce paz.'
  },
  {
    'id_hymn': 710,
    'order': 1,
    'type': 'STROPHE',
    'content': '¡Oh, cuán grande es tu misericordia,\ninfnito Ser de gran bondad!,\n¿qué podré ofrendar\nal ver tu gran clemencia\npor tu gran amor y la verdad?\n¿Qué podré ofrendar\nal ver tu gran clemencia\npor tu gran amor y la verdad?'
  },
  {
    'id_hymn': 710,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Las constelaciones con sus astros\ngiran en la vasta infnitud;\ntu poder gobierna\ntodos sus senderos,\nobedecen con exactitud;\ntu poder gobierna\ntodos sus senderos\nobedecen con exactitud.'
  },
  {
    'id_hymn': 710,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Líbrame de todo mi tormento,\nque la cruz disipe mi dudar;\ntu dolor me lleve al arrepentimiento\ny al deseo de triunfar;\ntu dolor me lleve al arrepentimiento\ny al deseo de triunfar.'
  },
  {
    'id_hymn': 710,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Sálvame del foso del pecado,\ndame armonizar con tu pensar;\nllena tú mi vida\ncon tu amor sagrado,\ntu bondad yo pueda revelar;\nllena tu mi vida\ncon tu amor sagrado,\ntu bondad yo pueda revelar.'
  },
  {
    'id_hymn': 711,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Dios ha hecho todo lo que el ojo ve,\ncada cosa de este mundo terrenal.\nTodo árbol y las plantas son de Él,\nlas estrellas y el manto celestial.'
  },
  {
    'id_hymn': 711,
    'order': 2,
    'type': 'CHORUS',
    'content': '“¡Sea ya la luz!”, ordenó Jehová\ncon su fuerte voz, y la luz fue ya.\nHoy el buen Jesús, nuestro Redentor,\nbrinda al mundo luz con excelso amor'
  },
  {
    'id_hymn': 711,
    'order': 2,
    'type': 'STROPHE',
    'content': 'A su imagen Dios formó al hombre Adán;\nluego hizo una mujer tomada de él;\ny los colocó en el jardín de Edén,\ndonde habían de seguirle siempre fel.'
  },
  {
    'id_hymn': 711,
    'order': 3,
    'type': 'STROPHE',
    'content': 'El perfecto gozo había en el Edén;\nellos se gozaban al andar con Dios.\nComunión completa había allá también\nal oír de Jehová la tierna voz.'
  },
  {
    'id_hymn': 712,
    'order': 1,
    'type': 'STROPHE',
    'content': 'La luz del sol comienza a iluminar\nun día más y el fiel se inclina en oración.\nEl cielo ya se viste de arreboles, y la paz\nde Dios desciende a la creación.'
  },
  {
    'id_hymn': 712,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Proclamad y haced memoria\nde su misericordia y gran bondad.\nAlabadle, dadle gloria,\nsu amor es cual la eternidad.'
  },
  {
    'id_hymn': 712,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Qué hermosa es la obra realizada por Jesús,\na Él rendimos todo honor.\nCon su poder el universo trajo a la luz;\nload al santo Creador.'
  },
  {
    'id_hymn': 713,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Saludamos la mañana,\nnos recuerda al Salvador,\npor doquier su luz derrama\nimpartiendo su amor.\nEn la cima de los montes\nse destaca ya la luz\ndisipando los temores:\n¡Regocíjate en Jesús,\nregocíjate en Jesús!'
  },
  {
    'id_hymn': 713,
    'order': 2,
    'type': 'STROPHE',
    'content': '¿Por qué has de preocuparte\nsi aún vive el Redentor?\nÉl es un refugio amante\nen las penas y el dolor.\nEl pesar y la alegría\nte concede en su favor,\nbondadoso así te guía\nhasta el reino del amor,\nhasta el reino del amor.'
  },
  {
    'id_hymn': 713,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Anhelamos que concluya\nesta noche de maldad,\ny cantemos, ¡aleluya!,\nal que viene en majestad.\nNuestro sol es Jesucristo,\nsalvación hay en su amor,\nrecompensa ha provisto\nen la tierra de esplendor,\nen la tierra de esplendor.'
  },
  {
    'id_hymn': 714,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Más lejos que los soles\nque en noches veo brillar\nllegan las suaves preces\nde aquel que se postra a orar.\nUn hombre se arrodilla,\nsu ruego asciende a Dios;\nde todo el que se humilla\nescucha el Señor la voz.'
  },
  {
    'id_hymn': 714,
    'order': 2,
    'type': 'STROPHE',
    'content': 'En este estrecho mundo\nde débil amistad\nsólo hay un Refugio\nque ofrece seguridad;\ncubre a los que amamos,\nnos brinda protección;\ntodos a Él llegamos\nmediante la oración.'
  },
  {
    'id_hymn': 714,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Un niño que suplica\nllega a obtener valor,\nfuerza que santifca,\ny vence cualquier temor.\nHay que tener en cuenta\nque toda oración,\npor débil o imperfecta\nde Dios tiene la atención.'
  },
  {
    'id_hymn': 715,
    'order': 1,
    'type': 'STROPHE',
    'content': '¿Quién puede ayudarme en mi condición?\n¿A quién acudir que me brinde perdón?\nEn ti Jesucristo hallamos favor,\ntú limpias el alma de muerte y dolor;\ntu sangre preciosa vertiste en la cruz;\ntu vida entregaste por darnos la luz;\nnos guías al Padre de amor sin igual;\ninundas el alma de paz celestial.'
  },
  {
    'id_hymn': 715,
    'order': 2,
    'type': 'STROPHE',
    'content': '¿Señor Jesucristo, a quién puedo llamar\nsi hay penas que agobian mi ser y mi andar?\n¿Si aún los amigos su ayuda no dan\ny no hay quién alivie mi carga y afán?\nCuán grato es venir a tus brazos de amor\ny hallar el consuelo que infunde valor.\nIgual que en antaño tú puedes calmar\nlas grandes tormentas que agitan mi mar.'
  },
  {
    'id_hymn': 715,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Cumplido mi tiempo iré a descansar,\nmás pronto tu voz me ha de resucitar;\nsi oscuro es el valle, si hay lucha y fragor,\ncontigo a mi lado no siento temor;\ntú llenas mis labios de dulce canción\ny guías mis pasos a la hermosa Sión.\nAllí con los santos podré bendecir\ntu nombre glorioso que diome el vivir.'
  },
  {
    'id_hymn': 716,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Perdóname Padre, perdona en tu amor,\nque te haya buscado tan tarde Señor;\ncuán ciego me hallaba pues yo elegí\na otro como amigo y no a ti;\ncuán ciego me hallaba pues yo elegí\na otro como amigo y no a ti.'
  },
  {
    'id_hymn': 716,
    'order': 2,
    'type': 'STROPHE',
    'content': ' Perdona que aún yo deseo luchar,\ntu gran sacrifcio fue por mi pecar;\nperdón por causarte tan grande dolor,\ntu cruz demuestra siempre tu amor;\nperdón por causarte tu grande dolor,\ntu cruz demuestra siempre tu amor'
  },
  {
    'id_hymn': 716,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Señor, despertaste mi alma a vivir,\ntu mano amorosa calmó mi sufrir;\nsalvaste mi vida de la perdición,\nme has puesto en camino hacia Sión;\nsalvaste mi vida de la perdición,\nme has puesto en camino hacia Sión.'
  },
  {
    'id_hymn': 716,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Hoy arrepentido me postro a orar\nrogando me guíes, Señor, al andar;\ndeseo entregarte mi vida y mi ser,\nconcédeme el poder de vencer;\ndeseo entregarte mi vida y mi ser,\nconcédeme el poder de vencer.'
  },
  {
    'id_hymn': 716,
    'order': 5,
    'type': 'STROPHE',
    'content': 'Prometo alabarte con toda emoción\nponiendo a tus pies todo mi corazón;\nque otros al verme contemplen tu luz\ny puedan hoy rendirse a tu cruz;\nque otros al verme contemplen tu luz\ny puedan hoy rendirse a tu cruz.'
  },
  {
    'id_hymn': 717,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Ten piedad, conforme me amas\nten piedad de mí,\nde acuerdo a la grandeza que hay en ti.\n¡Oh, ten piedad, piedad de mí!\nLávame de mi maldad,\nde toda transgresión,\nque abandone toda rebelión;\nme des perdón, me des perdón.'
  },
  {
    'id_hymn': 717,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Mora en mí, mi lengua cante tu bondad,\nhazme fiel por tus caminos al andar;\ndame hablar de toda tu fdelidad.\n¡Cámbiame! Mi corazón te he de entregar\ncontrito, humilde y sin maldad,\ny mi ofrenda aceptarás en tu altar.'
  },
  {
    'id_hymn': 717,
    'order': 2,
    'type': 'STROPHE',
    'content': 'He aquí, tú amas la verdad en lo interior;\ntu ciencia me hace comprender mi error.\n¡Oh, cuánto amor! ¡Cuán grande amor!\nLímpiame, cual blanca nieve\nme has de transformar\ny mis pecados has de desterrar;\nme has de alegrar, me has de alegrar.'
  },
  {
    'id_hymn': 717,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Crea en mí un corazón conforme a tu piedad,\nque sea fiel y ande en santidad,\n¡Por tu bondad, tu gran bondad!\nVuélveme el gozo de la plena salvación,\ntu santo Espíritu, tu bendición;\ntu hermoso don, tu hermoso don.'
  },
  {
    'id_hymn': 718,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Mil gracias hoy te doy, mi Salvador,\npor despertar mi ser a tu amor.\nDel cielo enviaste luz a iluminar\nmi senda terrenal con tu brillar;\ndel cielo enviaste luz a iluminar\nmi senda terrenal con tu brillar.'
  },
  {
    'id_hymn': 718,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Por liberar esclavos del pecar\nsufriste cruel dolor tu vida al dar.\nEn deuda eterna estoy por tu perdón\nal recibir, por fe, la salvación;\nen deuda eterna estoy por tu perdón\nal recibir, por fe, la salvación.'
  },
  {
    'id_hymn': 718,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Mi gratitud, Señor, por tu bondad;\npor darnos lluvia, sol, tu gran verdad.\nPor la belleza de la creación\ny la grandeza de la redención;\npor la belleza de la creación\ny la grandeza de la redención.'
  },
  {
    'id_hymn': 718,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Con gozo elevo a ti mi oración\npues pronto me alzarás a tu mansión.\nEn ella cantaré con gran fervor\nlas glorias de tu amor transformador;\nen ella cantaré con gran fervor\nlas glorias de tu amor transformador.'
  },
  {
    'id_hymn': 719,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Vuestros cantos ríndanle alabanza;\nvuestra vida exprese su loor;\naunque el mal se oponga a la esperanza,\nalabad a quien mostró su amor.'
  },
  {
    'id_hymn': 719,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Dadle gloria, al Señor Jesús\nquien murió en la cruz; dadle honra,\nal que al cielo ascendió.'
  },
  {
    'id_hymn': 719,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cada instante mostraréis confanza\nen palabras, actos y emoción,\ndeclarando: “En Cristo no hay mudanza;\nhay certeza de la salvación”'
  },
  {
    'id_hymn': 719,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Celebrad hoy con el alma entera\nla grandeza de su tierno amor;\nÉl os salva de la muerte fera,\ndio su sangre por el pecador'
  },
  {
    'id_hymn': 719,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Adorad a Cristo en vuestros cantos;\npronto en gloria Él regresará\na llevaros do no habrá más llantos,\na su hogar, do os coronará.'
  },
  {
    'id_hymn': 720,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Cuando pienso en tu grandeza, oh Señor,\ncuántas maravillas de la creación,\ntu benignidad, bondad e inmenso amor\nhacen que me postre en adoración.'
  },
  {
    'id_hymn': 720,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Canto con emoción\nal Autor de la creación;\nrindo mi corazón\nante quien me da salvación.'
  },
  {
    'id_hymn': 720,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Me has examinado con gran atención,\nhasta mi pensar conoces tú, Señor;\nsiempre donde voy me das tu protección,\nme conduces por la senda del amor.'
  },
  {
    'id_hymn': 720,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Si subiere a los cielos te he de hallar,\nhasta en el Seol también te he de encontrar;\nen la oscura noche oigo tu llamar,\ntu presencia se halla más allá del mar.'
  },
  {
    'id_hymn': 720,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Tú formaste mis entrañas y mi ser\nen el vientre de mi madre, con poder;\nme compaginaste con tu gran saber,\ntanta maravilla escapa mi entender.'
  },
  {
    'id_hymn': 720,
    'order': 5,
    'type': 'STROPHE',
    'content': 'Cuán preciosa es tu palabra, mi Señor,\ntodo pensamiento de tu corazón;\ncuanto más la estudio me da más valor\na seguir la senda que me lleva a Sión.'
  },
  {
    'id_hymn': 721,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Voces de duda, de orgullo y poder\nno debieran oírse jamás;\nmas en los frutos podrá darse a conocer\nla bendición que Dios da.'
  },
  {
    'id_hymn': 721,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Tiernas palabras que expresan amor,\ncortesía y cordialidad\nllevan mensajes de Cristo y de gran valor,\nguían a la eternidad.'
  },
  {
    'id_hymn': 721,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Gratos sonidos de culto y loor\nque ascienden en adoración,\nmuestran el cambio\nque obró Cristo, el Salvador,\nal concedernos perdón.'
  },
  {
    'id_hymn': 722,
    'order': 1,
    'type': 'STROPHE',
    'content': 'A ti se da el honor de ser esposa,\nllegar a ser fiel madre en Israel;\nque sepa amar, que sepa ser piadosa;\ncumplir tu parte en el plan de Emanuel.'
  },
  {
    'id_hymn': 722,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Ayuda idónea a tu fiel esposo\nhas de prestarle en todo su afán,\ny compartir sus penas y su gozo\nen vuestro viaje hacia la Canaán.'
  },
  {
    'id_hymn': 722,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Tu rostro debe siempre estar contento,\nlo positivo has de cultivar;\ntu abnegación, paciencia y cumplimiento\ntraerán el cielo dentro del hogar.'
  },
  {
    'id_hymn': 722,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Hallaste el bien al encontrar esposa,\nella es un don, regalo del Señor,\na finde hacer tu vida más hermosa\ny que la cuides con perfecto amor.'
  },
  {
    'id_hymn': 722,
    'order': 5,
    'type': 'STROPHE',
    'content': 'Es tu deber vivir el Evangelio\nmostrando amor, del cielo bendición,\nsin exigir lo que es tu privilegio\nmas dando ejemplo de abnegación.'
  },
  {
    'id_hymn': 722,
    'order': 6,
    'type': 'STROPHE',
    'content': 'Mira a Jesús, ejemplo poderoso\npara guardarte en fdelidad;\nsé diligente, atento y amoroso\ny en tu hogar habrá felicidad.'
  },
  {
    'id_hymn': 723,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Seis días terminande afán y labor\ny llegan las horas de paz y loor.\nEn ellas te damos mil gracias Señor\npor todos los dones que das en tu amor,\nque das en tu amor.'
  },
  {
    'id_hymn': 723,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Perdona mis faltas y ayúdame a ver\nla gracia y el don que tú das a mi ser.\nQue pueda entender tu palabra y tu ley,\ny siempre haga parte de tu santa grey,\nde tu santa grey.'
  },
  {
    'id_hymn': 723,
    'order': 3,
    'type': 'STROPHE',
    'content': 'La Biblia es fuente de ciencia y luz,\ny ella nos guía a Cristo Jesús.\nDel sábado el Dueño, de mi alma la paz,\nsu santo mensaje nos brinda solaz,\nnos brinda solaz.'
  },
  {
    'id_hymn': 723,
    'order': 4,
    'type': 'STROPHE',
    'content': 'El sábado hemos de conmemorar\ny tus bendiciones experimentar.\nY cada semana nos ha de llevar\nmás cerca del cielo del más bello hogar,\ndel más bello hogar'
  },
  {
    'id_hymn': 724,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Mensajeros atalayas,\n¡adelante!, ¡avanzad!\nPasos frmes, portadores\nde la eterna gran verdad.\nPor los valles y los montes,\npor el campo y la ciudad,\npor las selvas y las islas,\nbuenas nuevas proclamad.'
  },
  {
    'id_hymn': 724,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Mensajeros, id con Cristo;\npresto ved y anunciad,\npor la tierra y los mares,\nredención que Cristo da.'
  },
  {
    'id_hymn': 724,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Pronto vuelve el Cordero,\n¡el camino preparad!\nMarcharemos sin demora,\nporque Él nos guiará.\nRescatemos los perdidos,\nlos que buscan salvación,\ninfundiendo esperanza\nal doliente corazón.'
  },
  {
    'id_hymn': 724,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Prosigamos en la lucha,\ncon Jesús, el Capitán,\ncon constancia y frmeza\nvenceremos a Satán.\nAunque duro el terreno,\npruebas hay y tentación;\nla victoria ganaremos\ncon ferviente oración.'
  },
  {
    'id_hymn': 724,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Mensajeros incansables,\n¡adelante!, ¡id con fe!\nSin temor seguid con gozo,\nque la aurora ya se ve.\nLa batalla pronto cesa,\ny Jesús nos premiará,\ncon corona de estrellas,\nque a los feles Él dará.'
  },
  {
    'id_hymn': 725,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Qué hermoso es a ti venir,\nescuela del Señor,\nestar aquí y aprender,\ny dar a Dios loor.\nCantemos hoy con júbilo\na nuestro Redentor,\nhoy sábado estando Él\npresente con su amor.'
  },
  {
    'id_hymn': 725,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Bondad y fe, benignidad\ny toda gran virtud,\nhonestidad valor y paz,\nprocura, oh juventud.\nTus fuerzas necesita Dios\nen su obra por doquier\nen esta escuela aprendes tú\ncómo has de obedecer.'
  },
  {
    'id_hymn': 725,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Señor Jesús, ayúdanos\na ser cual fuiste tú;\nen tu palabra guíenos\ntu santo Espíritu.\nTransforma nuestra alma y ser,\nsegún tu voluntad;\nque todo el mundo pueda ver\nen nos tu gran verdad.'
  },
  {
    'id_hymn': 725,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Y cuándo vengas, buen Jesús,\nen gloria eternal,\ntrasládanos por tu bondad\nal templo celestial.\nDe sábado en sábado\nqueremos aprender,\ny en tu escuela, más allá,\ntus maravillas ver.'
  },
  {
    'id_hymn': 726,
    'order': 1,
    'type': 'STROPHE',
    'content': '“Multitud de Israel,\nen nosotros no existe virtud\nque pudiera sanar\na este hombre de todo su mal;\nsólo Cristo Jesús\nes capaz de otorgar la salud,\nacudid pues a Él\ny obtened su favor sin igual.\nFue resucitado para bendición\nde arrepentimiento, sana contrición.\nÉl concede paz y reconciliación\na quien ruega por perdón”'
  },
  {
    'id_hymn': 726,
    'order': 2,
    'type': 'STROPHE',
    'content': 'La verdad molestó\na los jefes de Jerusalén\ny mandaron prender\nlos autores de la curación.\n“¿Quién os dio potestad\nde inquietar a este pueblo,\ny tambiénde acusar de maldad\nal gobierno de nuestra nación?\n¿Cómo os atrevisteis a curar a aquel\npecador indigno de gran atención?\nDesde hoy prohibimos que en Israel\nse hable de resurrección”.'
  },
  {
    'id_hymn': 726,
    'order': 3,
    'type': 'STROPHE',
    'content': 'El Espíritu guió\na Simón y el apóstol veloz,\na contar de Jesús, de su amor\ny su gran compasión:\n“pues que hoy demandáis\nquién sanó ese mal tan atroz,\nfue Jesús a quién Dios exaltó\ncon la resurrección.\nPues no hay otro nombre\ncual el de Jesús\nen quien pueda hallarse\nsalvación y luz;\nsólo Él muriendo\nen la cruenta cruz\nha comprado mi salud”.'
  },
  {
    'id_hymn': 727,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Al vagar sin rumbo,\npor el triste mundo,\nme abrumó con fuerza el peso\nde la soledad;\nme sentí turbado a\ncausa del pecado\nhasta cuando en Cristo obtuve\npaz y libertad.'
  },
  {
    'id_hymn': 727,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Con su amor llenó mi vida\nde canción y luz,\nperdonando mis pecados\ngracias a su cruz;\nme concede un lugar\nen su glorioso hogar,\na su lado quiero siempre caminar.'
  },
  {
    'id_hymn': 727,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Si estas cansado y decepcionado\ndel placer fugaz\nque ahonda la inseguridad;\nven a Jesucristo tan amante y listo\ndotará tu alma\nde bondad y santidad.'
  },
  {
    'id_hymn': 727,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Mirad cuán paciente,\ntierno y clemente\ncontinúa extendiéndote\nsu invitación;\nven cual penitente\ncon amor ferviente,\ny acepta te transforme\npara bendición.'
  },
  {
    'id_hymn': 728,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Hazme humilde, como puedas,\nmi Señor y Salvador,\nla confanza me concedas\nen tu cruz y gran amor.\nHaz que pueda apartarme\nde ambición y vanidad,\nque aprenda a negarme\ny a buscar la santidad.'
  },
  {
    'id_hymn': 728,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Que en tu escuela, oh mi Cristo,\npueda atento aprender;\nquede pronto desprovisto\ndel mundano proceder.\nHazme tierno, bondadoso,\nque la gloria dé a ti;\npueda hallar en ti reposo;\ncada día estés en mí.'
  },
  {
    'id_hymn': 728,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Jesucristo, hazme humilde,\nhazme manso y veraz;\nhaz que sea amigable\ny mi orgullo deje atrás.\nTu bondad incomparable\nse reﬂeje en mi pensar;\nhaz que sea siempre amable\ny me goce en ayudar.'
  },
  {
    'id_hymn': 728,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Dame no considerarme\ncomo de muy gran valor;\nlos talentos que haz de darme\npueda emplearlos en tu honor\ndirigiendo la alabanza\nsólo a ti, buen Dios de amor,\nque nos llenas de esperanza,\nde consuelo y de valor.'
  },
  {
    'id_hymn': 729,
    'order': 1,
    'type': 'STROPHE',
    'content': '¿Con valor a Cristo sigues\naunque sea impopular?\n¿O preferes como miles\nsu llamado ignorar?\n¿Cómo puedes despreciarlo\ncuando el Rey te invita hoy?\n¿Si no aceptas su llamado,\nqué dirás al Gran Yo Soy?'
  },
  {
    'id_hymn': 729,
    'order': 2,
    'type': 'STROPHE',
    'content': '¿Puedes tú seguir buscando\nsólo dicha terrenal,\ncuando sabes que su encanto\nes fugaz y temporal?\nLos placeres de este mundo\nson engaños nada más;\nno prosigas errabundo,\nven a Cristo y ten solaz.'
  },
  {
    'id_hymn': 729,
    'order': 3,
    'type': 'STROPHE',
    'content': '¿Es que osas atreverte\na avanzar hasta el Jordán,\nsin tener tu fe muy frme,\naferrada al Capitán?\n¿Cómo puedes despreciarlo\nsi te advierte con amor?\nÉl desea guiarte al cielo,\nsi es que aceptas su favor.'
  },
  {
    'id_hymn': 729,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Considera la paciencia\ncon que insiste en llamar;\nya no acalles tu conciencia,\nven a Él, te va a salvar.\nSu bondad incomparable\na tu alma saciará;\ngozarás paz inefable,\nsu perdón te otorgará.'
  },
  {
    'id_hymn': 730,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Que tu bendita gloria\ndescienda a este lugar\ny que la santa historia\nlas mentes pueda guiar.\nTu Espíritu hoy danos,\nalúmbrenos tu faz;\nque jóvenes y ancianos\nobtengan gracia y paz.'
  },
  {
    'id_hymn': 730,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Quien la palabra tome\npresente la verdad;\nel Evangelio anuncie\nde paz y santidad.\nQue siempre en nuestro canto\nla honra ascienda a ti\ny el Espíritu Santo\nse manifeste, sí.'
  },
  {
    'id_hymn': 730,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Tu gracia en abundancia\nregálanos, Señor;\nconcédenos paciencia,\ny el compartir tu amor.\nQue andemos cada día\nla senda a Canaán\ncon gozo y gallardía\nen pos del Capitán.'
  },
  {
    'id_hymn': 731,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Amigo tengo, me ama, sí,\nsu vida en Gólgota entregó,\ny allí su amor mostró por mí,\nhoy, ¡aleluya!, canto yo.'
  },
  {
    'id_hymn': 731,
    'order': 2,
    'type': 'CHORUS',
    'content': 'Jesús mi fiel Amigo es,\nmis pasos guía vez tras vez;\nal cielo Él me llevará\ny allí corona me dará.'
  },
  {
    'id_hymn': 731,
    'order': 2,
    'type': 'STROPHE',
    'content': 'El tierno amor de mi Jesús\nmi viaje alegra con su faz,\nme ilumina con su luz,\nmis penas borra y me da paz.'
  },
  {
    'id_hymn': 731,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Mi poderoso Amigo es Él,\nla fuente del saber y amar;\ngobierna en todo, siempre fel,\nen cielos, tierra y en el mar.'
  },
  {
    'id_hymn': 731,
    'order': 4,
    'type': 'STROPHE',
    'content': 'Si a veces siéntome ﬂaquear,\no nubes vienen a estorbar,\nJesús me vuelve a alegrar,\nsu nombre gózome en cantar.'
  },
  {
    'id_hymn': 732,
    'order': 1,
    'type': 'STROPHE',
    'content': 'La eternidad puedo mirar\ny a los salvados en santo gozar;\ncon nitidez puedo ya observar\nciudad de luz, de los santos hogar.'
  },
  {
    'id_hymn': 732,
    'order': 2,
    'type': 'CHORUS',
    'content': 'El cielo allí es sereno en verdad,\nlleno de estrellasque irradian bondad.\nDame, oh Señor, el viajar a ese hogar,\nque en tu mansión yo pueda estar.\n(Que en tu mansión yo pueda estar).'
  },
  {
    'id_hymn': 732,
    'order': 2,
    'type': 'STROPHE',
    'content': 'Cual extranjero soy aquí\nmas pronto has de llevarme hasta ti,\ny acabará el dolor y aﬂicción\ncomo en un sueño de consolación.'
  },
  {
    'id_hymn': 732,
    'order': 3,
    'type': 'STROPHE',
    'content': 'Por fe en ti, puedo triunfar,\ncon tu poder salvación me has de dar.\nOh mi Jesús, tú me transformarás\nguiando mis pies a la patria de paz.'
  },
  {
    'id_hymn': 733,
    'order': 1,
    'type': 'STROPHE',
    'content': 'Con las huestes de salvados\nante el trono del Señor,\na sus pies nos inclinamos\nadorando al Salvador.\nPor su sangre redimidos,\nrescatados del pecar,\nnos hallamos transformados,\nreunidos en su hogar.\n¡Oh, qué gozo indescriptible!\n¡Cuánta gloria, cuánta paz,\nen un mundo incorruptible,\nalumbrados por su faz!'
  }
];

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('details', items, {});
  },

  down (queryInterface, Sequelize) { }
};
