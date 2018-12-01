'use strict';

let items = [
  {
    number: 1,
    title: 'Santo, Santo, Santo',
    author: 'Reginald Heber',
    traductor: 'E. L. Maxwell.',
    tone: `Mi M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 2,
    title: 'Mirando al cielo',
    author: 'Christian Fürchtegott.',
    traductor: '',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 3,
    title: 'Señor mi Dios',
    author: 'Stuart K. Hine.',
    traductor: 'W. Pardo G.',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 4,
    title: 'Mi Creador, mi Rey',
    author: 'Anne Steele',
    traductor: 'W. Pardo G.',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 5,
    title: 'Los cielos proclaman',
    author: 'Joseph Addison.',
    traductor: 'Anita González.',
    tone: `La b M 2/2`,
    adapted: '',
    pages: 2
  },
  {
    number: 6,
    title: 'A Dios loores entonad',
    author: 'Nikolaus Herman',
    traductor: 'M. G. H. Schmidt',
    tone: `Mi M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 7,
    title: 'Se oye un canto en alta esfera',
    author: 'Charles Wesley.',
    traductor: '',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 8,
    title: 'Noche de paz',
    author: 'Joseph Mohr.',
    traductor: '',
    tone: `Do M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 9,
    title: '¡En dulce júbilo!',
    author: 'Anónimo',
    traductor: 'R. E. Ríos',
    tone: `Fa M 6/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 10,
    title: 'Venid, fieles todos',
    author: 'Adapt . por Frederick Oakeley',
    traductor: 'Juan Bautista Cabrera.',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 11,
    title: 'A medianoche resonó',
    author: 'Edmund H. Sears',
    traductor: 'Estr. 1: Tr. por José L. Santiago Cabrera.\nEstr 2,3 : Tr. por Arnfeld C. Morck',
    tone: `La b M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 12,
    title: 'Siempre tan floreciente',
    author: 'Anónimo Köln',
    traductor: 'Susana R. de Parra.',
    tone: `Fa M 6/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 13,
    title: 'Siente el alma puros goces',
    author: 'Paul Gerhardt',
    traductor: 'Federico Fliedner',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 14,
    title: 'Del alto cielo al descender',
    author: 'Martin Luther',
    traductor: '',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 15,
    title: 'Alzaos ya, portales de Sión',
    author: 'Georg Weissel',
    traductor: 'Susana R. de Parra.',
    tone: `Si b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 16,
    title: 'Oh ven, oh ven Emanuel',
    author: 'Himno del latín',
    traductor: 'Susana R. de Parra.',
    tone: `Mi m 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 17,
    title: 'Un día que el cielo',
    author: 'J. Wilbur Chapman',
    traductor: '',
    tone: `Do M 9/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 18,
    title: '¡Oh rostro ensangrentado!',
    author: 'Bernard de Clairvaux',
    traductor: '',
    tone: `La m 4/2`,
    adapted: 'Paul Gerhardt y James W. Alexander.',
    pages: 1
  },
  {
    number: 19,
    title: 'En el monte Calvario',
    author: 'George Bennard',
    traductor: 'Speros D. Athans.',
    tone: `Si b M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 20,
    title: 'Hubo Uno que quiso',
    author: 'Carrie E. Breck',
    traductor: 'Elisa Pérez.',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 21,
    title: 'Jesús amado',
    author: 'Basado en Jean de Fecamp',
    traductor: 'R. J. Carman.',
    tone: `Fa m 4/4`,
    adapted: 'Johann Heermann.',
    pages: 1
  },
  {
    number: 22,
    title: 'Cristo fue inmolado',
    author: 'Martin Luther',
    traductor: '',
    tone: `Re m 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 23,
    title: 'La tumba le encerró',
    author: 'Robert Lowry',
    traductor: 'George P. Simmonds.',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 24,
    title: 'Cristo ha resucitado',
    author: 'Charles Wesley.',
    traductor: '',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 25,
    title: 'Grande es tu gloria',
    author: 'Edmond Budry',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Mib M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 26,
    title: 'Junto a la cruz',
    author: 'Elisha A. Hoffman.',
    traductor: '',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 27,
    title: 'En Jesús seguro estoy',
    author: 'Luise Henriette',
    traductor: 'Susana R. de Parra',
    tone: `Do M 2/2`,
    adapted: 'Christian Fürchtegott Gellert',
    pages: 1
  },
  {
    number: 28,
    title: '¡Oh, qué Salvador!',
    author: 'Fanny J. Crosby.',
    traductor: '',
    tone: `Do M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 29,
    title: 'Jesús, bendito Salvador',
    author: 'Samuel Stennett.',
    traductor: '',
    tone: `La b M 6/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 30,
    title: 'El profundo amor de Cristo',
    author: 'Samuel T. Francis.',
    traductor: '',
    tone: `Mi m 4/2`,
    adapted: '',
    pages: 1
  },
  {
    number: 31,
    title: 'Canto el gran amor',
    author: 'Franklin E. Belden.',
    traductor: '',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 32,
    title: '¿Le importará a Jesús?',
    author: 'Frank E. Graeff',
    traductor: 'E. L. Maxwell.',
    tone: `Do M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 33,
    title: 'La tierna voz del Salvador',
    author: 'Basado en William Hunter\nPedro I. Castro.',
    traductor: '',
    tone: `Mi b M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 34,
    title: 'Cuando estés cansado y abatido',
    author: 'Jeremiah E. Rankin.',
    traductor: 'E. L. Maxwell.',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 35,
    title: 'Un buen Amigo tengo yo',
    author: 'James G. Small.',
    traductor: '',
    tone: `La M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 36,
    title: 'Me dice el Salvador',
    author: 'Elvina M. Hall.',
    traductor: 'E. L. Maxwell.',
    tone: `Mi b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 37,
    title: 'Que en lenguas mil tu gran bondad',
    author: 'Charles Wesley',
    traductor: 'Susana R. de Parra.',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 38,
    title: '¡Oh, si pudiera yo contar!',
    author: 'Samuel Medley',
    traductor: 'E. L. Maxwell',
    tone: `Re M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 39,
    title: 'A Cristo coronad',
    author: 'Matthew Bridges',
    traductor: 'E. A. Strange.',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 40,
    title: 'Del santo amor de Cristo',
    author: 'Lelia N. Morris',
    traductor: 'Vicente Mendoza.',
    tone: `Si b M 3/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 41,
    title: 'Grande es el amor divino',
    author: 'Frederick W. Faber',
    traductor: 'Juan Marrón',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 42,
    title: 'Oí la voz del Salvador',
    author: 'Horatius Bonar.',
    traductor: '',
    tone: `Re M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 43,
    title: 'Alumbrante Espíritu',
    author: 'Andrew Reed',
    traductor: 'E. L. Maxwell.',
    tone: `Si b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 44,
    title: 'Ven a nuestras almas',
    author: 'Roberto II de Francia.',
    traductor: '',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 45,
    title: 'Dios nos ha dado promesa',
    author: 'Daniel W. Whittle',
    traductor: '',
    tone: `Si b M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 46,
    title: 'De Dios Palabra Santa',
    author: 'William W. How',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 47,
    title: 'Dadme la Biblia',
    author: 'Priscilla J. Owens',
    traductor: 'E. L. Maxwell.',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 48,
    title: 'Cantad alegres al Señor',
    author: 'Isaac Watts.',
    traductor: '',
    tone: `Sol M 2/2`,
    adapted: '',
    pages: 1
  },
  {
    number: 49,
    title: 'Tu Palabra vida es',
    author: 'Tobias Clausnitzer',
    traductor: 'Susana R. de Parra.',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 50,
    title: '¡Dios está presente!',
    author: 'Gerhard Tersteegen',
    traductor: 'Marta Weihmüller.',
    tone: `Sol M 2/2`,
    adapted: '',
    pages: 1
  },
  {
    number: 51,
    title: 'Dios os guarde',
    author: 'Jeremiah E. Rankin.',
    traductor: '',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 52,
    title: 'La gracia del Señor Jesucristo',
    author: '2 Corintios 13:14.',
    traductor: '',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 53,
    title: 'Danos hoy tus bendiciones',
    author: 'John Fawcett',
    traductor: 'Susana R. de Parra.',
    tone: `Re b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 54,
    title: 'A Dios dad gracias, dad honor',
    author: 'Nicolaus Decius',
    traductor: 'Federico Fliedner.',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 55,
    title: 'En Sión Jesús hoy reina',
    author: 'Fanny J. Crosby',
    traductor: 'Mercedes P. de Bernal.',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 56,
    title: '¡Silencio! ¡Silencio!',
    author: 'Fanny J. Crosby.',
    traductor: '',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 57,
    title: '¿Cómo en su sangre pudo haber?',
    author: 'Charles Wesley.',
    traductor: '',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 58,
    title: 'Cristo divino, Hijo unigénito',
    author: 'Gesangbuch Münster',
    traductor: 'Maurilio Lopéz.',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 59,
    title: 'Cristo mi alegría',
    author: 'Johann Franck',
    traductor: 'R. E. Ríos.',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 60,
    title: '¡Tu nombre es dulce, buen Jesús!',
    author: 'W. C. Martin, Siglo XIX',
    traductor: 'Elisa Pérez.',
    tone: `Do M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 61,
    title: 'Engrandecido sea Dios',
    author: 'Edward Perronet',
    traductor: 'Elisa Pérez.',
    tone: `La b M 3/4`,
    adapted: 'John Rippon.',
    pages: 1
  },
  {
    number: 62,
    title: 'Honrámoste, oh Dios',
    author: 'William P. Mackay',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Fa M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 63,
    title: '¡Alabadle!',
    author: 'Fanny J. Crosby',
    traductor: 'E. L. Maxwell.',
    tone: `Sol M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 64,
    title: '¡En alto la bandera alzad!',
    author: 'George W. Doane.',
    traductor: 'Susana R. de Parra.',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 65,
    title: 'Santo Dios, te damos loor',
    author: 'Himno alemán, Siglo XVIII',
    traductor: 'Susana R. de Parra.',
    tone: `Fa M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 66,
    title: 'Alma, bendice al Señor',
    author: 'Joachim Neander',
    traductor: 'Federico Fliedner.',
    tone: `Fa M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 67,
    title: 'A ti, glorioso Dios',
    author: 'Martin Rinckart',
    traductor: 'W. Pardo G.',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 68,
    title: 'Honor, loor y gloria',
    author: 'Theodulph de Orleans',
    traductor: '',
    tone: `Do M 4/4`,
    adapted: 'John M. Neale.',
    pages: 1
  },
  {
    number: 69,
    title: 'Cuán gloriosas las noticias',
    author: 'John Newton',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 70,
    title: 'Sagrado es el amor',
    author: 'John Fawcett.',
    traductor: '',
    tone: `Fa M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 71,
    title: 'Soy peregrino aquí',
    author: 'E. Taylor Cassel.',
    traductor: 'Vicente Mendoza.',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 72,
    title: 'Tu reino amo',
    author: 'Timothy Dwight',
    traductor: 'Epigmenio Velasco.',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 73,
    title: 'Un día más por Cristo',
    author: 'Anna B. Warner',
    traductor: 'E. L. Maxwell.',
    tone: `Si b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 74,
    title: '¡Cuán firme es de tu iglesia!',
    author: 'Samuel J. Stone',
    traductor: 'W. Pardo G.',
    tone: `Mib M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 75,
    title: 'Siembra en la mañana',
    author: 'Knowles Shaw',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 76,
    title: 'Oh, ruégote, Señor Jesús,',
    author: 'Frances Ridley Havergal',
    traductor: 'Juanita R. de Balloch.',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 77,
    title: '¡Ve, ve oh Sión!',
    author: 'Mary A. Thomson',
    traductor: '',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 78,
    title: 'Centinelas del Maestro',
    author: 'Henry L. Gilmour.',
    traductor: '',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 79,
    title: 'Escuchad, Jesús nos dice',
    author: 'Daniel March',
    traductor: 'Thomas M. Westrup.',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 80,
    title: 'Pronto la noche viene',
    author: 'Anna L. Coghill',
    traductor: 'Epigmenio Velasco.',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 81,
    title: 'La historia de Cristo contemos',
    author: 'H. Ernest Nichol',
    traductor: 'Enrique Sánchez.',
    tone: `Mib M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 82,
    title: 'Oigo la voz del buen Pastor',
    author: 'Alexcenah Thomas, Siglo XIX',
    traductor: 'Pedro Grado.',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 83,
    title: 'Tierno y amante, Jesús nos invita',
    author: 'Will L. Thompson',
    traductor: 'E. L Maxwell.',
    tone: `Sol M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 84,
    title: 'En el mundo turbulento',
    author: 'Cecil F. Alexander',
    traductor: 'W. Pardo G.',
    tone: `Si b M 3/2`,
    adapted: '',
    pages: 1
  },
  {
    number: 85,
    title: 'Allá la puerta franca está',
    author: 'Lillian Baxter.',
    traductor: '',
    tone: `Do M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 86,
    title: '¿Te sientes casi resuelto ya?',
    author: 'Philip P. Bliss',
    traductor: 'E. L. Maxwell.',
    tone: `Sol M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 87,
    title: 'De esclavitud',
    author: 'William T. Sleeper',
    traductor: '',
    tone: `Sol M 6/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 88,
    title: 'Tal como soy',
    author: 'Charlotte Elliott.',
    traductor: '',
    tone: `Mi b M 6/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 89,
    title: 'Sólo anhelo, Cristo amado',
    author: 'Daniel Turner;',
    traductor: 'V. E. Thomann',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 90,
    title: 'Yo escucho, buen Jesús',
    author: 'Lewis Hartsough',
    traductor: 'Juan Bautista Cabrera.',
    tone: `Mi b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 91,
    title: 'Bendiciones ricas',
    author: 'Elizabeth Codner.',
    traductor: '',
    tone: `Sol M 6/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 92,
    title: 'Cautívame Señor',
    author: 'George Matheson',
    traductor: 'Susana R. de Parra',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 93,
    title: 'Comprado con sangre por Cristo',
    author: 'Fanny J. Crosby.',
    traductor: '',
    tone: `La M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 94,
    title: 'Me levantó',
    author: 'Charles H. Gabriel.',
    traductor: 'Vicente Mendoza.',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 95,
    title: 'Tú dejaste tu trono',
    author: 'Emily E. S. Elliott.',
    traductor: '',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 96,
    title: 'Sublime gracia',
    author: 'John Newton',
    traductor: 'Cristóbal E. Morales.',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 97,
    title: 'En la cruz',
    author: 'Isaac Watts.',
    traductor: '',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 98,
    title: 'Lejos de mi Padre Dios',
    author: 'Fanny J. Crosby.',
    traductor: '',
    tone: `Fa M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 99,
    title: 'Fuente de la vida eterna',
    author: 'Robert Robinson',
    traductor: 'Thomas M. Westrup.',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 100,
    title: 'En Jesucristo, mártir de paz',
    author: 'Fanny J. Crosby',
    traductor: 'E. A. M. Díaz.',
    tone: `Re M 9/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 101,
    title: 'Castillo fuerte es nuestro Dios',
    author: 'Martin Luther',
    traductor: 'Juan Bautista Cabrera.',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 102,
    title: 'Roca de la eternidad',
    author: 'Augustus M. Toplady',
    traductor: 'Thomas M. Westrup.',
    tone: `Si b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 103,
    title: 'Yo sé a quién he creído',
    author: 'Daniel Whittle',
    traductor: 'Pablo Sywulka.',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 104,
    title: 'Mi fe se afirma en Jesús',
    author: 'Lidie H. Edmunds',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Sol M 3/2`,
    adapted: '',
    pages: 1
  },
  {
    number: 105,
    title: 'Los tesoros del mundo',
    author: 'Mary A. Kidder',
    traductor: 'E. L. Maxwell.',
    tone: `La b M 3/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 106,
    title: 'Cristo, Salvador',
    author: 'Nicolaus L. von Zinzendorf',
    traductor: 'Federico Fliedner.',
    tone: `Sol M 3/2`,
    adapted: '',
    pages: 1
  },
  {
    number: 107,
    title: 'En la mansión de mi Señor',
    author: 'Johnson Oatman.',
    traductor: '',
    tone: `La b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 108,
    title: 'Bajo sus alas',
    author: 'William O. Cushing.',
    traductor: '',
    tone: `Do M 6/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 109,
    title: 'Omnipotente Padre Dios',
    author: 'Frederick W. Faber.',
    traductor: '',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 110,
    title: 'Si dejas tú que Dios te guíe',
    author: 'George Neumark',
    traductor: 'Adolfo Robleto.',
    tone: `Sol m 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 111,
    title: 'Eterna Roca es mi Jesús',
    author: 'Vernon J. Charlesworth.',
    traductor: '',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 112,
    title: '¡Oh, cuán dulce es fiar en Cristo!',
    author: 'Louisa M. R. Stead',
    traductor: '',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 113,
    title: 'Jesús es mi luz',
    author: 'James Nicholson',
    traductor: 'A. Cecotto.',
    tone: `La b M 2/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 114,
    title: '¡Oh!, tenga yo la ardiente fe',
    author: 'William H. Bathurst.',
    traductor: 'E. L. Maxwell.',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 115,
    title: 'Con gozo canto al Señor',
    author: 'Edwin O. Excell.',
    traductor: '',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 116,
    title: 'De ti he menester',
    author: 'Annie S. Hawks',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `La b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 117,
    title: 'Oh Dios, revélame tu voluntad',
    author: 'B. Mansell Ramsey',
    traductor: 'Estela Z. Sharpin.',
    tone: `Mi b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 118,
    title: 'Condúceme Maestro',
    author: 'Julie K. Hausmann',
    traductor: 'W. Pardo G.',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 119,
    title: 'Todas las promesas',
    author: 'R. Kelso Carter',
    traductor: 'Vicente Mendoza.',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 120,
    title: 'Mi fe contempla a ti',
    author: 'Ray Palmer.',
    traductor: '',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 121,
    title: 'Ciertamente',
    author: 'John W. Peterson y Alfred B. Smith',
    traductor: 'Magdalena S.Cantu.',
    tone: `Mi b M 3/4`,
    adapted: null,
    pages: 2
  },
  {
    number: 122,
    title: 'A ti Señor',
    author: 'Katharina von Schlegel',
    traductor: 'Jane L. Borthwick',
    tone: `Fa M 4/4`,
    adapted: null,
    pages: 1
  },
  {
    number: 123,
    title: 'Hoy me llama el mundo en vano',
    author: 'James Rowe',
    traductor: 'George P. Simmonds.',
    tone: `Sol M 6/4`,
    adapted: null,
    pages: 1
  },
  {
    number: 124,
    title: 'Da lo mejor al Maestro',
    author: 'Howard B. Grose',
    traductor: 'Speros D. Athans.',
    tone: `Mi b M 6/4`,
    adapted: null,
    pages: 2
  },
  {
    number: 125,
    title: 'Salvador, a ti me rindo',
    author: 'Judson W. Van DeVenter',
    traductor: 'A. R. Salas',
    tone: `Re M 4/4`,
    adapted: null,
    pages: 1
  },
  {
    number: 126,
    title: 'Cristo me ayuda por Él a vivir',
    author: 'Daniel W. Whittle',
    traductor: 'Modesto González.',
    tone: `Fa M 3/4`,
    adapted: null,
    pages: 2
  },
  {
    number: 127,
    title: 'Cúmplase, oh Cristo, tu voluntad',
    author: 'Adelaide Pollard.',
    traductor: 'V. E. Berry',
    tone: `Mi b M 9/4`,
    adapted: null,
    pages: 1
  },
  {
    number: 128,
    title: 'Padre, yo vengo a ti',
    author: 'Franklin E. Belden',
    traductor: 'Braulio Pérez Marcio.',
    tone: `Fa M 4/4`,
    adapted: null,
    pages: 1
  },
  {
    number: 129,
    title: 'Yo te seguiré',
    author: 'James L. Elginburg.',
    traductor: '',
    tone: `La b M 3/4`,
    adapted: null,
    pages: 1
  },
  {
    number: 130,
    title: 'Traían en silencio presentes al Señor',
    author: 'Fannie E. Bolton.',
    traductor: '',
    tone: `Fa M 6/8`,
    adapted: null,
    pages: 2
  },
  {
    number: 131,
    title: 'Mi amor y vida doy a ti',
    author: 'Ralph E. Hudson',
    traductor: 'Howard W. Cragin.',
    tone: `Fa M 3/4`,
    adapted: null,
    pages: 1
  },
  {
    number: 132,
    title: 'No yo, sino Él',
    author: 'Fannie E. Bolton.',
    traductor: '',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 133,
    title: 'A cualquiera parte',
    author: 'Jessie Brown Pounds',
    traductor: '',
    tone: `Re M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 134,
    title: 'A solas al huerto',
    author: 'C. Austin Miles',
    traductor: '',
    tone: `La b M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 135,
    title: 'Contigo quiero andar',
    author: 'L. D. Avery-Stuttle.',
    traductor: '',
    tone: `Mi b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 136,
    title: 'Tentado, no cedas',
    author: 'Horatio R. Palmer',
    traductor: '',
    tone: `Si b M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 137,
    title: 'Más cerca, oh Dios, de ti',
    author: 'Sarah F. Adams.',
    traductor: '',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 138,
    title: 'Esparcid la luz de Cristo',
    author: 'Philip P. Bliss',
    traductor: '',
    tone: `Si b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 139,
    title: '¡Oh Rey eterno, avanza!',
    author: 'Ernest W. Shurtleff',
    traductor: '',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 140,
    title: '¡Oh, buen Maestro, despierta!',
    author: 'Mary Ann Baker',
    traductor: '',
    tone: `Do M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 141,
    title: 'Más de Jesús',
    author: 'Eliza E. Hewitt.',
    traductor: '',
    tone: `Sol M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 142,
    title: 'Cristo es mi amante Salvador',
    author: 'Hill L. Thompsom',
    traductor: 'Speros D. Athans.',
    tone: `Sol M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 143,
    title: 'Más cual Jesús',
    author: 'Charles H. Gabriel',
    traductor: 'H. C. Ball.',
    tone: `Do M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 144,
    title: 'Alza tu canto',
    author: 'Harriet Beecher Stowe.',
    traductor: '',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 145,
    title: 'Las pisadas del Maestro',
    author: 'Eliza E. Hewitt',
    traductor: '',
    tone: `Re b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 146,
    title: 'Quiero, Jesús, contigo andar',
    author: 'Washington Gladden',
    traductor: '',
    tone: `Re b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 147,
    title: 'Cuán glorioso es el cambio',
    author: 'Rufus H. McDaniel',
    traductor: 'Vicente Mendoza.',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 148,
    title: '“¿Muy lejos el hogar está?”',
    author: 'Annie R. Smith',
    traductor: 'Ruth M. De Riffel.',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 149,
    title: 'A la lucha',
    author: 'C. Austin Miles.',
    traductor: '',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 150,
    title: 'Cuando lleguen pruebas',
    author: 'James Montgomery',
    traductor: 'Vicente Mendoza.',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 151,
    title: 'De su trono, mi Jesús',
    author: 'Anna B. Warner',
    traductor: '',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 152,
    title: 'Divina luz',
    author: 'John H. Newman',
    traductor: '',
    tone: `La b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 153,
    title: 'Si en valles de peligros',
    author: 'C. Austin Miles',
    traductor: '',
    tone: `Do M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 154,
    title: '¡Oh, quién pudiera andar con Dios!',
    author: 'William Cowper',
    traductor: '',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 155,
    title: 'Gran gozo hay en mi alma hoy',
    author: 'Eliza E. Hewitt',
    traductor: '',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 156,
    title: 'Del Padre los bienes',
    author: 'Harriett E. Buell',
    traductor: '',
    tone: `Mi M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 157,
    title: 'Dulce Comunión',
    author: 'P. Grado',
    traductor: '',
    tone: `Lab M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 158,
    title: 'Alcancé salvación',
    author: 'Horatio G. Spafford',
    traductor: '',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 159,
    title: 'En el seno de mi alma',
    author: 'W. D. Cornell',
    traductor: '',
    tone: `Sol M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 160,
    title: 'Andando en la luz de Dios',
    author: 'J. W. Van DeVenter',
    traductor: '',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 161,
    title: 'Salvo en los tiernos brazos',
    author: 'F. J. Crosby',
    traductor: 'Juan Bautista Cabrera',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 162,
    title: 'Con sin igual amor',
    author: 'Norman J. Clayton.',
    traductor: '',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 163,
    title: 'En brazos del Maestro',
    author: 'Anna L. Waring.',
    traductor: '',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 164,
    title: 'Confío en Jesucristo',
    author: 'Elizabeth C. Clephane',
    traductor: '',
    tone: `Re b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 165,
    title: 'Jesús, yo he prometido',
    author: 'John E. Bode',
    traductor: 'Juan Bautista Cabrera.',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 166,
    title: 'Jesús me guía',
    author: 'Joseph H. Gilmore',
    traductor: '',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 167,
    title: 'Guíame, ¡oh Salvador!',
    author: 'Frank M. Davis',
    traductor: '',
    tone: `Re b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 168,
    title: 'Cerca, más cerca',
    author: 'Lelia N. Morris',
    traductor: '',
    tone: `Reb M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 169,
    title: 'Nunca desmayes',
    author: 'Civilla D. Martin',
    traductor: '',
    tone: `Si b M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 170,
    title: 'Oh, Cristo te adoro',
    author: 'William R. Featherstone',
    traductor: '',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 171,
    title: 'Cariñoso Salvador',
    author: 'Charles Wesley',
    traductor: '',
    tone: `Fa M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 172,
    title: 'No me pases',
    author: 'Fanny J. Crosby',
    traductor: '',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 173,
    title: 'Dulce oración',
    author: 'William W. Walford',
    traductor: 'Juan Bautista Cabrera.',
    tone: `Re m 3/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 174,
    title: 'Sed puros y santos',
    author: 'William D. Longstaff',
    traductor: '',
    tone: `Fa M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 175,
    title: '¡Oh, día delicioso!',
    author: 'Christopher Wordsworth',
    traductor: '',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 176,
    title: 'Oh, día del Señor',
    author: 'Friedrich Schneider',
    traductor: '',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 177,
    title: 'Señor Jesús, el día ya se fue',
    author: 'William H. Monk',
    traductor: '',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 178,
    title: 'Nuestro sol se pone ya',
    author: 'Mary A. Lathbury',
    traductor: '',
    tone: `Sol M 6/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 179,
    title: 'Dime de Cristo la historia',
    author: 'Fanny J. Crosby',
    traductor: '',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 180,
    title: 'Mi Dios me ama',
    author: 'August D. Rische',
    traductor: 'E.W. Thomann',
    tone: `Do M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 181,
    title: '¡Cuánto me alegra!',
    author: 'Philip P. Bliss',
    traductor: '',
    tone: `Sol M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 182,
    title: 'Cuando venga Jesucristo',
    author: 'William O. Cushing',
    traductor: '',
    tone: `Re M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 183,
    title: 'Corazones siempre alegres',
    author: 'Fanny J. Crosby',
    traductor: '',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 184,
    title: 'Es el amor divino',
    author: 'Franklin E. Belden',
    traductor: '',
    tone: `Sib M 2/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 185,
    title: 'Grato es contar la historia',
    author: 'Katherine Hankey',
    traductor: '',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 186,
    title: 'Honra al hombre de valor',
    author: 'Philip P. Bliss',
    traductor: '',
    tone: `Lab M 2/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 187,
    title: 'Pronto Jesús regresará',
    author: 'Isaac Watts',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Re M 2/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 188,
    title: 'En presencia estar de Cristo',
    author: 'Carrie E. Breck',
    traductor: '',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 189,
    title: '¿Será al albor?',
    author: 'H. L. Turner',
    traductor: '',
    tone: `Do M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 190,
    title: 'El Rey que viene',
    author: 'Franklin E. Belden',
    traductor: 'E.L. Maxwell.',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 191,
    title: 'Cuando junte Jesús las naciones',
    author: 'Harriet B. McKeever',
    traductor: 'E.L. Maxwell',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 192,
    title: 'Siervos de Dios, la trompeta tocad',
    author: 'Jessie E. Strout',
    traductor: 'Henry Andrade Morales.',
    tone: `La M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 193,
    title: '¡Vendrá el Señor!',
    author: 'Franklin E. Belden',
    traductor: '',
    tone: `Si b M 3/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 194,
    title: 'Hijo del reino',
    author: 'Lowell Mason',
    traductor: '',
    tone: `Si b M 2/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 195,
    title: 'Viene otra vez nuestro Salvador',
    author: 'Lelia N. Morris',
    traductor: '',
    tone: `Do M 6/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 196,
    title: 'Cuando mi lucha toque a su final',
    author: 'Charles H. Gabriel',
    traductor: '',
    tone: `Sol M 6/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 197,
    title: 'Hay un mundo feliz más allá',
    author: 'Sanford F. Bennett',
    traductor: '',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 198,
    title: 'Cantaré, cantaré',
    author: 'Philip Phillips',
    traductor: '',
    tone: `Mi b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 199,
    title: 'Estando a orillas del Jordán',
    author: 'Samuel Stennett',
    traductor: '',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 200,
    title: '¿Quieres ser salvo de toda maldad?',
    author: 'Lewis E. Jones',
    traductor: '',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 201,
    title: '¿Nos veremos junto al río?',
    author: 'Robert Lowry',
    traductor: '',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 202,
    title: 'Un día yo he de faltar',
    author: 'Fanny J. Crosby',
    traductor: '',
    tone: `Fa M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 203,
    title: 'Tú eres Autor y Dios de nuestra Vida',
    author: 'M. A. von Lowenstern',
    traductor: '',
    tone: `Mi b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 204,
    title: '¡Oh amor de Dios!',
    author: 'Frederick M. Lehman',
    traductor: '',
    tone: `Mi b M 3/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 205,
    title: 'Load al Padre',
    author: 'Elizabeth Rundle Charles',
    traductor: '',
    tone: `Lab M 2/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 206,
    title: 'Estad en paz y conoced',
    author: 'Henry Carey',
    traductor: '',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 207,
    title: 'Dios de luz y gloria excelsa',
    author: 'E. L Maxwell',
    traductor: '',
    tone: `Do M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 208,
    title: 'Tu merced gratuita',
    author: 'William W. How',
    traductor: '',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 209,
    title: '¡Oh Dios Invisible, Sapiente, Inmortal!',
    author: 'Walter C. Smith',
    traductor: 'Nohema R. de González.',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 210,
    title: 'Al Dios de Abrahán',
    author: 'Thomas Olivers',
    traductor: 'Ángel Gabriel Cabrera',
    tone: `Fa m 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 211,
    title: '¡Señor, yo te conozco!',
    author: 'José Zorrilla',
    traductor: '',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 212,
    title: 'Al Rey adorad',
    author: 'Robert Grant',
    traductor: 'S.L. Hernández',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 213,
    title: 'Eterno Dios de gran poder',
    author: 'Henry H. Tweedy',
    traductor: 'Susana R. de Parra',
    tone: `Re m 2/2`,
    adapted: '',
    pages: 1
  },
  {
    number: 214,
    title: 'Yo canto el poder de Dios',
    author: 'Isaac Watts',
    traductor: 'Juan Marrón.',
    tone: `Re M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 215,
    title: 'El mundo es de mi Dios',
    author: 'Maltbie D. Babcock',
    traductor: 'J. Pablo Simon',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 216,
    title: 'Cielo y tierra ha creado',
    author: '',
    traductor: 'R. de Parra.',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 217,
    title: 'Señor Jehová, Omnipotente Dios',
    author: 'Daniel C. Roberts',
    traductor: '',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 218,
    title: '¡Suenen dulces himnos!',
    author: 'John Morrison',
    traductor: 'Susana R. de Parra',
    tone: `Sib M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 219,
    title: 'Como niño fue nacido en Belén',
    author: 'John Morrison',
    traductor: 'Susana R. de Parra',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 220,
    title: 'Los heraldos celestiales',
    author: 'T. Castro',
    traductor: '',
    tone: `Si b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 221,
    title: 'Ángeles, alzad el canto',
    author: 'James Montgomery',
    traductor: '',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 222,
    title: 'Se oye un canto angelical',
    author: 'Villancico francés',
    traductor: '',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 223,
    title: '¿Qué niño es éste?',
    author: 'William C. Dix.',
    traductor: 'Ángel Mergal.',
    tone: `Mi m 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 224,
    title: 'Llegó Jesús',
    author: 'Oswald J. Smith.',
    traductor: 'C.R. Taylor.',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 225,
    title: 'Tierra de la Palestina',
    author: 'Desconocido',
    traductor: '',
    tone: `Mi m 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 226,
    title: 'Desde el principio honrado ha sido el Hijo',
    author: 'William Y. Fullerton',
    traductor: 'Susana R. de Parra.',
    tone: `Sol M 4/2`,
    adapted: '',
    pages: 2
  },
  {
    number: 227,
    title: '¿Qué significa ese rumor?',
    author: 'Emma Campbell',
    traductor: 'Juan Bautista Cabrera.',
    tone: `Sol M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 228,
    title: 'Con júbilo tocad',
    author: 'Charles Wesley',
    traductor: '',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 229,
    title: 'Abrigadas y salvas en el redil',
    author: 'Elizabeth C. Clephane',
    traductor: '',
    tone: `La b M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 230,
    title: 'Ven a Cristo',
    author: 'Pedro I. Castro',
    traductor: '',
    tone: `Fa M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 231,
    title: '¡Qué bella historia!',
    author: 'William E. Booth',
    traductor: 'Speros D. Athans.',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 232,
    title: '¡Oh amor, profundo, inmenso amor!',
    author: 'Tomás de Kempis',
    traductor: '',
    tone: `Si b M 6/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 233,
    title: 'Muy ancho y grande es tu amor',
    author: '',
    traductor: 'Susana R. de Parra.',
    tone: `Dom 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 234,
    title: '¿Viste tú?',
    author: 'Canción afroamericana',
    traductor: '',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 235,
    title: '¡Alabado el gran manantial!',
    author: 'Thomas M. Westrup',
    traductor: '',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 236,
    title: 'Es medianoche',
    author: 'William B. Tappan',
    traductor: 'Ángel Gabriel Cabrera',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 237,
    title: 'Hasta el huerto Jesús llegó',
    author: 'Sydney Lanier',
    traductor: 'Susana R. de Parra.',
    tone: `Mi m 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 238,
    title: 'Afuera de la gran ciudad',
    author: 'Cecil F. Alexander',
    traductor: 'Susana R. de Parra.',
    tone: `Re M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 239,
    title: '¡Dulces momentos!',
    author: 'Juan Bautista Cabrera',
    traductor: '',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 240,
    title: 'Enclavado en cruenta cruz',
    author: 'John Ellerton',
    traductor: 'Susana R. de Parra.',
    tone: `Sol m 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 241,
    title: '¡Cordero es de Dios!',
    author: 'Matthew Bridges',
    traductor: 'Susana R. de Parra',
    tone: `Re m 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 242,
    title: 'Jamás podrá alguien separarnos',
    author: 'N. Samojluk',
    traductor: '',
    tone: `Mi m 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 243,
    title: 'Rostro divino',
    author: 'M. Mavallard',
    traductor: '',
    tone: `Do # m 2/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 244,
    title: 'Ved a Cristo',
    author: 'Tradicional',
    traductor: '',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 245,
    title: 'Jesús resucitado',
    author: 'Alfred H. Ackley',
    traductor: '',
    tone: `La b M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 246,
    title: 'Yo sé que Jesucristo vive',
    author: 'Jessie Brown Pounds',
    traductor: '',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 247,
    title: 'El Señor resucitó. ¡Aleluya!',
    author: 'Elisha A. Hoffman',
    traductor: 'Juan Bautista Cabrera.',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 248,
    title: 'Quiero cantar del buen Jesucristo',
    author: '',
    traductor: 'Philip P. Bliss',
    tone: `La b M 9/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 249,
    title: 'Ni en la tierra',
    author: 'Tradicional',
    traductor: '',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 250,
    title: 'Yo quisiera hablarte',
    author: 'Charles F. Weigle',
    traductor: 'Speros D. Athans',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 251,
    title: '¡Cuán grande amor!',
    author: 'Charles H. Gabriel',
    traductor: '',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 252,
    title: 'Dime la antigua historia',
    author: 'Katherine Hankey',
    traductor: '',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 253,
    title: 'Hay un canto nuevo en mi ser',
    author: 'Luther B. Bridgers',
    traductor: 'H. Cotto Reyes',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 254,
    title: 'A Dios sea gloria',
    author: 'Fanny J. Crosby',
    traductor: '',
    tone: `La b M 3/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 255,
    title: 'El buen Pastor',
    author: 'José V. Giner',
    traductor: '',
    tone: `Sol M 12/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 256,
    title: '¿Hay aquí quién nos ayude?',
    author: 'J. B. Mackay',
    traductor: 'Pedro Grado.',
    tone: `Re b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 257,
    title: 'Amor que no me dejarás',
    author: 'George Matheson',
    traductor: 'Vicente Mendoza',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 258,
    title: 'Tiene amor sublime',
    author: 'Alice Pugh',
    traductor: 'Susana R. de Parra.',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 259,
    title: 'Amigo fiel es Cristo',
    author: 'Mary Ann Shorey',
    traductor: 'D.J. Thomann',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 260,
    title: 'Cual ave escápate al monte',
    author: 'Mary S. B. Dana',
    traductor: 'Ángel Gabriel Cabrera',
    tone: `Mi M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 261,
    title: 'Ven, Espíritu eterno',
    author: 'Tradicional',
    traductor: '',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 262,
    title: 'Padre, a tus pies me postro',
    author: '',
    traductor: 'Johnson Oatman',
    tone: `Sib M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 263,
    title: 'Ven a mi alma, Espíritu de Dios',
    author: 'George Croly',
    traductor: 'Ángel G. Cabrera',
    tone: `Sib M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 264,
    title: 'Abre mis ojos a la luz',
    author: 'Clara H. Scott.',
    traductor: 'Speros D. AThans',
    tone: `Lab M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 265,
    title: 'Danos el fuego',
    author: 'William H. Bathurst.',
    traductor: 'Juan Marrón',
    tone: `Si b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 266,
    title: 'La nueva proclamad',
    author: 'Frank Bottome',
    traductor: '',
    tone: `Do M 3/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 267,
    title: 'Imploramos tu presencia',
    author: 'Juan B. Cabrera',
    traductor: '',
    tone: `Fa M 3/2`,
    adapted: '',
    pages: 1
  },
  {
    number: 268,
    title: 'Santo Espíritu de Cristo',
    author: 'Ellwood H. Stokes',
    traductor: '',
    tone: `Sol M 6/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 269,
    title: 'Oh, cantádmelas otra vez',
    author: 'Philip P. Bliss',
    traductor: '',
    tone: `Fa M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 270,
    title: '¡Cuán firme cimiento! ',
    author: 'John Rippon.',
    traductor: 'Jorge Keith',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 271,
    title: '¡Cuán firme cimiento! ',
    author: 'John Rippon.',
    traductor: 'Jorge Keith',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 272,
    title: 'No eres pobre',
    author: 'Gerhard A. Hunger',
    traductor: '',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 273,
    title: '¡Santa Biblia!',
    author: 'Pedro I. Castro',
    traductor: '',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 274,
    title: '¡Oh Pastor divino!, escucha',
    author: 'Tradicional',
    traductor: '',
    tone: `Do M 9/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 275,
    title: 'Oh, Padre de la humanidad',
    author: 'John G. Whittier',
    traductor: 'S. L. Hernández.',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 276,
    title: 'Ven, Jesús amado',
    author: 'E. R, Latta',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `La b M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 277,
    title: 'Del culto el tiempo llega',
    author: 'Tradicional',
    traductor: '',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 278,
    title: 'A Dios, el Padre celestial',
    author: 'Thomas Ken.',
    traductor: '',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 279,
    title: 'Despídenos con tu bendición',
    author: 'Leroy E. Froom',
    traductor: '',
    tone: `Re b M 6/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 280,
    title: 'Después, Señor',
    author: 'John Ellerton',
    traductor: 'Vicente Mendoza',
    tone: `Lab M  4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 281,
    title: 'La Escuela Sabática es mi gozo',
    author: 'Armando Hammerly',
    traductor: '',
    tone: `Sib M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 282,
    title: 'En tu nombre comenzamos',
    author: 'Juan Marrón',
    traductor: '',
    tone: `Fa m 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 283,
    title: 'Fija tu vista desde el cielo',
    author: 'Anónimo',
    traductor: '',
    tone: `La M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 284,
    title: '¡Oh, cuánto me eres cara!',
    author: 'Ramón Blanco',
    traductor: '',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 285,
    title: 'Suenen las palabras',
    author: 'Helen E. Rasmussen',
    traductor: '',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 286,
    title: 'Oigan las monedas',
    author: 'Fidelfia H. DeWitt',
    traductor: '',
    tone: `Do M 2/2`,
    adapted: '',
    pages: 1
  },
  {
    number: 287,
    title: 'Aquí reunidos',
    author: 'Anónimo',
    traductor: '',
    tone: `Re M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 288,
    title: 'Todos juntos tributemos',
    author: 'F. M. Fernández',
    traductor: '',
    tone: `La M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 289,
    title: 'A nuestro Padre Dios',
    author: 'Tradicional',
    traductor: '',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 290,
    title: 'Cristo, si gozo al pecho da',
    author: 'Bernard de Clairvaux',
    traductor: 'E. L. Maxwell',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 291,
    title: 'Oh Padre, eterno Dios',
    author: 'Anónimo',
    traductor: 'Vicente Mendoza',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 292,
    title: 'La gracia que me levantó',
    author: 'Haldor Lillenas',
    traductor: 'Honorato T. Reza.',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 293,
    title: 'Ni en la tierra ni en los mares',
    author: 'Margaret Moody',
    traductor: 'Susana R. de Parra',
    tone: `Fa M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 294,
    title: '¡Santo! ¡Santo! ¡Santo!',
    author: 'T. G. Valle',
    traductor: '',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 295,
    title: 'El Redentor',
    author: 'Lelia N. Morris',
    traductor: 'William R. Adell.',
    tone: `Sib M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 296,
    title: 'Alabad y exaltad al Señor',
    author: 'John Milton',
    traductor: '',
    tone: `Sib M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 297,
    title: 'La gloria de Cristo',
    author: 'Charles H. Gabriel',
    traductor: 'Vicente Mendoza',
    tone: `Sol M 6/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 298,
    title: 'Gozaos de corazón',
    author: 'Edward H. Plumptre',
    traductor: '',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 299,
    title: 'Con acentos de alegría',
    author: 'William F. Sherwin',
    traductor: 'Mercedes P. de Bernal.',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 300,
    title: 'Con cánticos, Señor',
    author: 'James J. Cummins',
    traductor: 'M.N. Hutchinson',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 301,
    title: 'Te reconozco',
    author: 'Honorato T. Reza',
    traductor: '',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 302,
    title: 'De Jesús el nombre invoca',
    author: 'Lillian Baxter',
    traductor: '',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 303,
    title: 'Gloria a Dios en las alturas',
    author: 'Juan Bautista Cabrera',
    traductor: '',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 304,
    title: 'Digno eres, oh Jesús',
    author: 'Anónimo',
    traductor: '',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 305,
    title: 'Suprema es tu majestad',
    author: 'William H. Clark',
    traductor: 'Susana R. de Parra',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 306,
    title: 'A Cristo doy mi canto',
    author: 'Tradicional',
    traductor: '',
    tone: `Fa M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 307,
    title: 'Con gran gozo te adoramos',
    author: 'Henry van Dyke',
    traductor: 'Susana de Parra',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 308,
    title: 'Alma, alaba al Rey del cielo',
    author: 'Henry F. Lyte',
    traductor: 'Susana R. de Parra',
    tone: `Re M 2/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 309,
    title: 'Te quiero, te quiero',
    author: 'Anónimo',
    traductor: '',
    tone: `Mi b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 310,
    title: 'Gracias dad a Jesucristo',
    author: 'August Storm',
    traductor: 'Juan N. de los Santos',
    tone: `Si b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 311,
    title: 'Amante, tierno y sabio Dios',
    author: 'Francis de Assisi',
    traductor: '',
    tone: `Re M 3/2`,
    adapted: '',
    pages: 1
  },
  {
    number: 312,
    title: 'Tan brillantes como el sol',
    author: 'Cecil F. Alexander',
    traductor: 'Susana R. de Parra',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 313,
    title: 'Da gloria al Señor',
    author: 'John S.B. Monsell',
    traductor: '',
    tone: `Re M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 314,
    title: 'Un himno a Cristo entonad',
    author: 'Isaac Watts',
    traductor: '',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 315,
    title: 'Yo no comprendo',
    author: 'José V. Giner',
    traductor: '',
    tone: `Si b M 12/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 316,
    title: 'Venid, cantad a nuestro Señor',
    author: 'Dimitri S. Bortniansky',
    traductor: '',
    tone: `Do M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 317,
    title: 'Quiero el día empezarlo contigo',
    author: 'Himno sueco',
    traductor: 'Susana R. de Parra',
    tone: `Sib M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 318,
    title: 'Dulce es la canción',
    author: 'Charles H. Spurgeon',
    traductor: '',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 319,
    title: 'Por la mañana',
    author: 'Isaac Watts',
    traductor: 'Francisco H. Westphal',
    tone: `Fa M  3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 320,
    title: 'Baja el sol',
    author: 'Tradicional',
    traductor: 'Juan Marrón',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 321,
    title: 'Guárdanos, oh Cristo',
    author: 'Sabine Baring-Gould',
    traductor: 'Juan Marrón',
    tone: `La M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 322,
    title: 'Protégeme te pido',
    author: 'Carolina Sandell Berg',
    traductor: 'Susana R. de Parra',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 323,
    title: 'Loor a ti',
    author: 'Juan Bautista Cabrera',
    traductor: '',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 324,
    title: 'Señor, si hoy un alma lastimé',
    author: 'C. Maud Battersby',
    traductor: '',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 325,
    title: 'Sol de mi ser',
    author: 'John Keble',
    traductor: '',
    tone: `Fa M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 326,
    title: 'Por este día que nos diste',
    author: 'John Ellerton',
    traductor: 'Susana R. de Parra',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 327,
    title: 'La iglesia sobre Roca está',
    author: 'Nicolai F.S. Grundtvig',
    traductor: 'Tr. por Susana R. de Parra.',
    tone: `Do m 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 328,
    title: 'Cuán hermosa y tierna es',
    author: 'Gustav F.L. Knak',
    traductor: 'Susana R. de Parra.',
    tone: `Mib M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 329,
    title: 'Iglesia de Cristo',
    author: 'Mateo Cosidó',
    traductor: '',
    tone: `Lab M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 330,
    title: 'De regiones más allá',
    author: 'Isaiah Baltzell',
    traductor: 'Angel Gabriel Cabrera.',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 331,
    title: '¡Trabajad! ¡Trabajad!',
    author: 'Fanny Crosby y William Doane',
    traductor: '',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 332,
    title: 'Yo quiero trabajar',
    author: 'Isaiah Baltzell',
    traductor: '',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 333,
    title: 'Oigo del Señor la voz llamando',
    author: 'George Bennard',
    traductor: 'D. García y A. H. Roth',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 334,
    title: '¡Oh!, cuánto necesita',
    author: 'Tradicional',
    traductor: '',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 335,
    title: 'Jesús está buscando voluntarios hoy',
    author: 'W. S. Brown',
    traductor: 'Vicente Mendoza.',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 336,
    title: 'Levántate, cristiano',
    author: 'Tradicional',
    traductor: '',
    tone: `Mi b M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 337,
    title: 'En la montaña podrá no ser',
    author: 'Mary Brown',
    traductor: 'Vicente Mendoza',
    tone: `Fa M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 338,
    title: 'De heladas cordilleras',
    author: 'Reginald Heber',
    traductor: '',
    tone: `Mib M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 339,
    title: 'Ve hoy a la viña',
    author: 'C. Röhl',
    traductor: 'Susana R. de Parra',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 340,
    title: '¿El guarda de mi hermano soy?',
    author: 'Franklin E. Belden',
    traductor: 'Susana R. de Parra.',
    tone: `Sol M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 341,
    title: 'Tocad trompeta ya ',
    author: 'G. H. Rule.',
    traductor: '',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 342,
    title: 'La obra es tuya, oh Jesús',
    author: 'Samuel Preiswerk\n y Felician M. Von Zaremba',
    traductor: '',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 343,
    title: 'Id, proclamad a todas las razas',
    author: 'Henry de Fluiter',
    traductor: '',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 344,
    title: '¿Os pusisteis a arar?',
    author: 'John P. Ellis',
    traductor: '',
    tone: `Sib M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 345,
    title: '¿Qué obra tienes para mí?',
    author: 'Jessie Brown Pounds',
    traductor: '',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 346,
    title: 'Los cosechadores, ¡oh!, ¿dónde están?',
    author: 'Eben E. Rexford.',
    traductor: 'Susana R. de Parra',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 347,
    title: '¡El salvavidas!',
    author: 'Edward S. Ufford',
    traductor: '',
    tone: `Fa M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 348,
    title: 'Da la luz',
    author: 'Charles H. Gabriel',
    traductor: '',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 349,
    title: 'Marcharé en la divina luz',
    author: 'Tradicional',
    traductor: '',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 350,
    title: 'A los perdidos hay que buscarlos',
    author: 'William A. Ogden',
    traductor: '',
    tone: `La b 9/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 351,
    title: 'Cristo está buscando obreros',
    author: 'J. O. Thompson.',
    traductor: 'Vicente Mendoza',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 352,
    title: 'Es el tiempo de la siega',
    author: 'Charles H. Gabriel.',
    traductor: '',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 353,
    title: 'Id y predicad el evangelio',
    author: 'Fanny J. Crosby.',
    traductor: '',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 354,
    title: 'Ama a tus prójimos',
    author: 'Fanny J. Crosby',
    traductor: 'Pedro H. Goldsmith.',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 355,
    title: '¿Quién está por Cristo?',
    author: 'Frances Ridley Havergal.',
    traductor: '',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 356,
    title: 'Hay lugar en la amplia viña',
    author: 'Neal A. McAulay',
    traductor: '',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 357,
    title: '¡Id a la mies!',
    author: 'J. H. Mary',
    traductor: 'Tr. por H. C. Ball.',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 358,
    title: 'Siembra temprano antes de amanecer',
    author: 'Emily S. Oakley',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `La b M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 359,
    title: 'No evadas tu deber',
    author: 'Franklin E. Belden.',
    traductor: 'Susana R. de Parra',
    tone: `Mib  M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 360,
    title: 'Puedo oír tu voz llamando',
    author: 'E. W. Blandy.',
    traductor: '',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 361,
    title: 'A tu puerta Cristo está',
    author: 'J. B. Atchinson.',
    traductor: '',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 362,
    title: 'Con voz benigna te llama Jesús',
    author: 'Fanny J. Crosby',
    traductor: 'Thomas M. Westrup.',
    tone: `Do M  6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 363,
    title: 'Hay vida en mirar',
    author: 'Franklin E. Belden.',
    traductor: 'E. L. Maxwell.',
    tone: `Mi b  M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 364,
    title: 'Tan triste y tan lejos de Dios',
    author: 'Tr. por Henry L. Gilmour.',
    traductor: '',
    tone: `La b M 6/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 365,
    title: 'Bienvenida da Jesús',
    author: 'Erdmann Neumeister.',
    traductor: 'Thomas M. Westrup.',
    tone: `Re  M 3/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 366,
    title: 'Busca salud en Cristo',
    author: 'E. L. Maxwell.',
    traductor: '',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 367,
    title: 'Preste oídos el humano',
    author: 'Juan Bautista Cabrera.',
    traductor: '',
    tone: `Fa M 9/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 368,
    title: 'Un lugar Jesús te pide',
    author: 'Daniel W. Whittle.',
    traductor: 'Susana R. de Parra.',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 369,
    title: 'Ven a Él, pecador',
    author: 'R. L. Blowers',
    traductor: 'Vicente Mendoza.',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 370,
    title: 'Venid a mí los tristes',
    author: 'Fanny J. Crosby .',
    traductor: '',
    tone: `Do M 6/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 371,
    title: 'Si feliz quieres ser',
    author: 'Abraham Fernández',
    traductor: '',
    tone: `Do  M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 372,
    title: 'Todos los que tengan sed',
    author: 'Thomas M. Westrup.',
    traductor: '',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 373,
    title: 'Cristo, el Pastor divino',
    author: 'William A. Ogden',
    traductor: '',
    tone: `Fa M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 374,
    title: 'En extraña tierra',
    author: 'Tradicional.',
    traductor: '',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 375,
    title: 'A aquel que quiera',
    author: 'Philip P. Bliss.',
    traductor: '',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 376,
    title: 'Por mí intercede',
    author: 'Samuel O’Malley Cluff',
    traductor: '',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 377,
    title: 'Oh alma transida y cargada',
    author: 'Helen H. Lemmel',
    traductor: '',
    tone: `Fa M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 378,
    title: 'Acepta el perdón de Jesús',
    author: 'Lelia N. Morris.',
    traductor: 'Vicente Mendoza.',
    tone: `La b  M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 379,
    title: '‘‘Dame tu corazón’’, dice el Señor',
    author: 'Eliza E. Hewitt.',
    traductor: '',
    tone: `Fa M 3/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 380,
    title: 'A Jesucristo ven sin tardar',
    author: 'George F. Root.',
    traductor: 'Juan Bautista Cabrera.',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 381,
    title: '¿Temes que en la lucha?',
    author: 'Charles H. Gabriel. Tr.',
    traductor: '',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 382,
    title: 'Francas las puertas encontrarán',
    author: 'Tradicional.',
    traductor: 'Thomas M. Westrup.',
    tone: `Fa M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 383,
    title: 'Dios al pródigo llama',
    author: 'Charles H. Gabriel',
    traductor: '',
    tone: `Si b  M 12/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 384,
    title: 'A tu puerta',
    author: 'F. A. Lorenz',
    traductor: 'Susana R. de Parra.',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 385,
    title: '¿Has contado el costo?',
    author: 'A. J. Hodge.',
    traductor: '',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 386,
    title: 'Llama hoy a mi corazón',
    author: 'Horatio R. Palmer.',
    traductor: 'Susana R. de Parra.',
    tone: `Fa M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 387,
    title: 'Busca a Dios',
    author: 'Fred Pratt Green.',
    traductor: 'Ángel Gabriel Cabrera',
    tone: `Fa m 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 388,
    title: 'Ven a la fuente de vida',
    author: 'Fanny J. Crosby.',
    traductor: '',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 389,
    title: 'A tu puerta Cristo vela',
    author: 'Arthur C. Coxe.',
    traductor: '',
    tone: `Mi  M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 390,
    title: 'Del trono celestial',
    author: 'Frances Ridley Havergal',
    traductor: 'Sebastián Cruellas.',
    tone: `Si b M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 391,
    title: '“Yo estoy a la puerta y llamo”',
    author: 'Daniel Hunger.',
    traductor: '',
    tone: `Re  M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 392,
    title: 'Mi mano ten ',
    author: 'Fanny J. Crosby',
    traductor: '',
    tone: `La b M 2/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 393,
    title: 'Hay una fuente sin igual',
    author: 'William Cowper.',
    traductor: '',
    tone: `Si b  M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 394,
    title: 'Anhelo ser limpio',
    author: 'James Nicholson.',
    traductor: 'E. L. Maxwell',
    tone: `La M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 395,
    title: 'Un hombre llegóse de noche a Jesús',
    author: 'William T. Sleeper',
    traductor: '',
    tone: `Mi b M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 396,
    title: 'Nada sabía del gratuito don',
    author: 'James M. Gray',
    traductor: 'Susana R. de Parra.',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 397,
    title: 'Una es, Señor, mi petición',
    author: 'Walter C. Smith',
    traductor: 'Elisa Pérez.',
    tone: `Si b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 398,
    title: 'Te ruego, oh Dios',
    author: 'Fanny J. Crosby. Tr.',
    traductor: '',
    tone: `Do M  4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 399,
    title: 'Oh, dulce Salvador',
    author: 'Tradicional.',
    traductor: '',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 400,
    title: '¡Oh, Maestro y Salvador!',
    author: 'H. B. Someillan.',
    traductor: '',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 401,
    title: 'Me levantaré',
    author: 'José Vicente Giner.',
    traductor: '',
    tone: `Mi M 12/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 402,
    title: '¡Oh mi Dios! ',
    author: 'Tradicional.',
    traductor: '',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 403,
    title: 'De Dios vagaba lejos yo',
    author: 'William J. Kirkpatrick.',
    traductor: '',
    tone: `La M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 404,
    title: 'Años mi alma en vanidad vivió',
    author: 'William R. Newell.',
    traductor: 'George P. Simmonds.',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 405,
    title: 'En una cruz mi Salvador',
    author: 'W. M. Darwood.',
    traductor: 'Ernesto Barocio.',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 406,
    title: 'Cantaré de Jesucristo',
    author: 'Francis H. Rowley',
    traductor: 'Ángel Gabriel Cabrera',
    tone: `Re M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 407,
    title: 'En Jesús por fe confío',
    author: 'E. G. de Marsico.',
    traductor: '',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 408,
    title: '¡Oh!, salvo en la Roca',
    author: 'William O. Cushing.',
    traductor: '',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 409,
    title: '¡Al mismo Rey he escuchado!',
    author: 'Grant Colfax Tullar.',
    traductor: 'Susana R. de Parra.',
    tone: `La b M 2/2`,
    adapted: '',
    pages: 1
  },
  {
    number: 410,
    title: '¡Aleluya! Gloria a Cristo',
    author: 'William C. Dix.',
    traductor: 'Esteban Sywulka B.',
    tone: `Fa M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 411,
    title: 'Estrella matutina vi',
    author: 'Philip Nicolai.',
    traductor: 'Susana R. de Parra.',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 412,
    title: '¿Qué me puede dar perdón?',
    author: 'Robert Lowry.',
    traductor: '',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 413,
    title: 'Ni fama, ni ciencia.',
    author: 'James M. Gray.',
    traductor: 'George P. Simmonds.',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 414,
    title: '¡Oh, qué Amigo que por mí murió!',
    author: 'James McGranahan.',
    traductor: 'susana R. de Parra.',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 415,
    title: 'Toma de la fuente de agua viva',
    author: 'John W. Peterson.',
    traductor: 'Aarón Espinosa.',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 416,
    title: 'Por fe en Cristo el Redentor',
    author: 'Tradicional.',
    traductor: '',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 417,
    title: 'Bellas canciones perennes',
    author: 'William O. Cushing.',
    traductor: 'Thomas M. Westrup.',
    tone: `Mi b M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 418,
    title: 'Moro yo en las alturas',
    author: 'Tradicional.',
    traductor: '',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 419,
    title: 'Dios descendió',
    author: 'John W. Peterson.',
    traductor: 'Roberto Dalke.',
    tone: `Fa M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 420,
    title: 'Tras la tormenta',
    author: 'Alfred H. Ackley.',
    traductor: 'Speros D. Athans.',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 421,
    title: 'Sentir más grande amor',
    author: 'Elizabeth P. Prentiss.',
    traductor: 'Ernesto Barocio.',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 422,
    title: 'Entonad un himno',
    author: 'Eliza E. Hewitt.',
    traductor: '',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 423,
    title: 'Es Jehová mi buen pastor',
    author: 'Basado en el Salmo 23',
    traductor: 'Susana R. de Parra.',
    tone: `Fa M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 424,
    title: 'En el seguro puerto',
    author: 'Franklin E. Belden.',
    traductor: 'Elisa Pérez.',
    tone: `Mi b M 6/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 425,
    title: 'Las manos, Padre',
    author: 'Charles Wesley.',
    traductor: 'E. L. Maxwell.',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 426,
    title: 'Porque Él vive',
    author: 'William J. Gaither y Gloria Gaither.',
    traductor: 'Comité de Celebremos su Gloria.',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 427,
    title: 'En mi débil condición',
    author: 'Anónimo.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 428,
    title: 'Grande es tu fidelidad',
    author: 'Thomas O. Chisholm.',
    traductor: 'Honorato T. Reza.',
    tone: `Re M 3/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 429,
    title: 'En todo recio vendaval',
    author: 'Hugh Stowell.',
    traductor: 'Thomas M. Westrup.',
    tone: `Do M 6/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 430,
    title: 'Salvador, mi bien eterno',
    author: 'Fanny J. Crosby.',
    traductor: '',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 431,
    title: '¡Siempre el Salvador conmigo!',
    author: 'Fanny J. Crosby.',
    traductor: '',
    tone: `Mi b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 432,
    title: 'Suenan melodías en mi ser',
    author: 'Elton M. Roth.',
    traductor: 'Speros D. Athans',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 433,
    title: 'Cuando sopla airada la tempestad',
    author: 'Priscilla J. Owens.',
    traductor: 'Vicente Mendoza.',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 434,
    title: 'La cruz no es mayor',
    author: 'Ballington Booth.',
    traductor: '',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 435,
    title: 'En Roca viviente construirá',
    author: 'Franklin E. Belden.',
    traductor: 'Susana R. de Parra.',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 436,
    title: 'En el hogar do nunca habrá',
    author: 'W. H. Bellamy',
    traductor: '',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 437,
    title: 'Meditar en Jesús',
    author: 'Tradicional.',
    traductor: '',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 438,
    title: 'Al contemplarte, mi Salvador',
    author: 'Franklin E. Belden.',
    traductor: 'Daniel Chávez',
    tone: `Re M 9/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 439,
    title: 'A la cruz de Cristo voy',
    author: 'William McDonald.',
    traductor: 'E. L. Maxwell.',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 440,
    title: 'Juicio ha comenzado',
    author: 'Franklin E. Belden.',
    traductor: 'Susana R. de Parra.',
    tone: `Mi b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 441,
    title: 'Día grande viene',
    author: 'Will L. Thompson.',
    traductor: 'E. L. Maxwell.',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 442,
    title: 'Llamados somos hoy a santidad',
    author: 'Lelia N. Morris.',
    traductor: 'Susana R. de Parra.',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 443,
    title: 'Rey de mi vida',
    author: 'Jennie E. Hussey',
    traductor: '',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 444,
    title: 'Todo en el altar',
    author: 'Elisha A. Hoffman.',
    traductor: 'O. G. de la Torre.',
    tone: `Fa M 3/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 445,
    title: 'Tuyo es mi ser',
    author: 'Frances Ridley Havergal.',
    traductor: 'Susana R. de Parra.',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 446,
    title: 'Que mi vida entera esté',
    author: 'Vicente Mendoza.',
    traductor: '',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 447,
    title: 'Para mí, tan pecador,',
    author: 'Charles Wesley.Tr.',
    traductor: '',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 448,
    title: '¡Sé fiel, mi hermano querido!',
    author: 'Uriah Smith.',
    traductor: '',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 449,
    title: '¿Deberá Jesús la cruz llevar?',
    author: 'Thomas Shepherd.',
    traductor: '',
    tone: `Sol M 6/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 450,
    title: '¡Oh Jesús!, mi cruz levanto',
    author: 'Henry F. Lyte.',
    traductor: 'Juan Marrón.',
    tone: `La M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 451,
    title: 'Más santidad dame',
    author: 'Franklin E. Belden. Tr.',
    traductor: '',
    tone: `Mi b M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 452,
    title: 'Nuestra edificación',
    author: 'Tradicional.',
    traductor: '',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 453,
    title: 'Tuyo soy Jesús',
    author: 'Fanny J. Crosby. Tr',
    traductor: '',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 454,
    title: 'Dejo el mundo',
    author: 'Fanny J. Crosby.',
    traductor: '',
    tone: `Fa M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 455,
    title: 'Obra en mí Señor',
    author: 'Yapci Trujillo Pérez.',
    traductor: '',
    tone: `Do M 2/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 456,
    title: 'Concédeme, Jesús, poder',
    author: 'Tradicional.',
    traductor: '',
    tone: `Mi b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 457,
    title: 'Consagraos, oh cristianos',
    author: 'Eva B. Lloyd.',
    traductor: 'Pablo Filós.',
    tone: `Sol M 3/2`,
    adapted: '',
    pages: 2
  },
  {
    number: 458,
    title: 'Cuando pese Nuestros hechos',
    author: 'Franklin E. Belden.',
    traductor: 'Elisa Pérez.',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 459,
    title: 'De corazón te amo',
    author: 'Martin Schalling',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Fa M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 460,
    title: 'Mi espíritu, alma y cuerpo',
    author: 'Tradicional.',
    traductor: '',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 461,
    title: 'A los pies de Jesucristo',
    author: 'Tradicional.',
    traductor: 'E. L. Maxwell.',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 462,
    title: 'Brilla en tu lugar',
    author: 'Ina Duley Ogdon.',
    traductor: 'Vicente Mendoza.',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 463,
    title: 'Muy lejos, sí, del Salvador',
    author: 'James McGranahan.',
    traductor: 'Susana R. de Parra.',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 464,
    title: 'Prende hoy tu fuego',
    author: 'Berta Schmidt – Eller.',
    traductor: 'Susana R. de Parra.',
    tone: `Re m 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 465,
    title: 'Lleva tu lumbrera',
    author: 'Priscilla J. Owens.',
    traductor: '',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 466,
    title: '¡Cómo podremos hoy!',
    author: 'Edwin P. Parker.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 467,
    title: 'Debemos oír y seguir al Maestro',
    author: 'Sarah Doudney.',
    traductor: '',
    tone: `Fa M 3/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 468,
    title: 'Mi querido riachuelo',
    author: 'Tradicional.',
    traductor: 'Susana R. de Parra.',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 469,
    title: 'Dame un puro corazón',
    author: 'Charles Wesley.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Sol  M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 470,
    title: '¡Feliz el día!',
    author: 'Philip Doddrige.',
    traductor: 'Thomas M. Westrup',
    tone: `Fa M 3/2`,
    adapted: '',
    pages: 1
  },
  {
    number: 471,
    title: '¡Qué felicidad!',
    author: 'Tradicional.',
    traductor: '',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 472,
    title: 'Cristo es mío',
    author: 'Elisha A. Hoffman.',
    traductor: '',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 473,
    title: 'Por el camino, con sol radiante',
    author: 'Henry J. Zelley.',
    traductor: 'Susana R. de Parra.',
    tone: `Fa M 9/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 474,
    title: '¿Cómo podré estar triste?',
    author: 'Civilla D. Martin.',
    traductor: 'Vicente Mendoza.',
    tone: `Do M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 475,
    title: 'Perfecta paz',
    author: 'Edward H. Bickersteth.',
    traductor: 'Juan Marrón.',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 476,
    title: 'Tengo paz en mi ser',
    author: 'Anne S. Murphy.',
    traductor: 'Ángel Gabriel Cabrera',
    tone: `Re M 3/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 477,
    title: 'Shalom Chaverim',
    author: 'Antigua bendición hebrea.',
    traductor: 'Estr. 2-4: Ángel Gabriel Cabrera.',
    tone: `Re m 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 478,
    title: 'El que habita al abrigo de Dios',
    author: 'Luz Ester Ríos de Cuna.',
    traductor: '',
    tone: `Fa m 3/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 479,
    title: 'A ti mi Dios',
    author: 'Nils Frykman.',
    traductor: 'Susana R. de Parra',
    tone: `La M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 480,
    title: 'Dicha grande',
    author: 'Thomas M. Westrup.',
    traductor: '',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 481,
    title: '¡Cuánta alegría!',
    author: 'Franklin E. Belden.',
    traductor: 'Braulio Pérez Marcio.',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 482,
    title: 'Percibe mi alma un son',
    author: 'Peter P. Bilhorn. Tr.',
    traductor: '',
    tone: `La M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 483,
    title: 'Fluye el gozo como un río',
    author: 'Manie P. Ferguson.',
    traductor: 'Susana R. de Parra.',
    tone: `La M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 484,
    title: 'Aprendí el gran secreto',
    author: 'Albert B. Simpson',
    traductor: 'William R. Adell.',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 485,
    title: 'Toma tú mi voluntad',
    author: 'Anónimo.',
    traductor: 'Susana R. de Parra.',
    tone: `M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 486,
    title: '¿Llevas solo tu carga?',
    author: 'Vicente Mendoza.',
    traductor: '',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 487,
    title: 'Las cuerdas de amor',
    author: 'Franklin E. Belden y otros.',
    traductor: 'Susana R. de Parra.',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 488,
    title: 'Cuando abatido por la adversidad',
    author: '',
    traductor: 'Jonson Oatman Jr. Tr.',
    tone: `Re M 2/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 489,
    title: 'Jesús por mí su vida dio',
    author: 'Elisha A. Hoffman.',
    traductor: 'por Juan Marrón.',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 490,
    title: 'Día a día y a cada instante',
    author: 'Carolina Sandell Berg.',
    traductor: 'Susana R, de Parra.',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 491,
    title: 'La cruz excelsa',
    author: 'Isaac Watts.',
    traductor: 'W. T. Millham.',
    tone: `Fa M 2/2`,
    adapted: '',
    pages: 1
  },
  {
    number: 492,
    title: 'Lo que anima al corazón',
    author: 'Annie R. Smith',
    traductor: 'Susana R. de Parra.',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 493,
    title: 'Señor, en ti confío',
    author: 'Juan Bautista Cabrera.',
    traductor: '',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 494,
    title: 'Cristo, ven más cerca',
    author: 'Isabel P. Balderas.',
    traductor: '',
    tone: `Re M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 495,
    title: 'No te dé temor',
    author: 'William B. Bradbury',
    traductor: 'Thomas M. Westrup.',
    tone: `Fa M 4/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 496,
    title: 'Nunca estéis desanimados',
    author: 'Fanny J. Crosby.',
    traductor: '',
    tone: `Si b M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 497,
    title: 'Por la justicia de Jesús',
    author: 'Edward Mote',
    traductor: 'Thomas M. Westrup.',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 498,
    title: 'Cuando en la lucha',
    author: '',
    traductor: 'Alfred H. Ackley. Tr.',
    tone: `Do M 6/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 499,
    title: 'Como Jesús no hay otro amigo',
    author: '',
    traductor: 'Johnson Oatman Jr. Tr.',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 500,
    title: 'Entenderemos nuestras angustias',
    author: 'W. B. Stevens.',
    traductor: 'Francisco S. Cook.',
    tone: `Fa M 9/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 501,
    title: 'Algún día lo entenderé',
    author: 'Lida Shivers Leech.',
    traductor: 'Winifred C. de Wild.',
    tone: `La b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 502,
    title: 'Habla, Señor, a mi alma',
    author: 'L. L. Pickett.',
    traductor: 'Elisa Pérez.',
    tone: `Mi b M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 503,
    title: '¿Oyes cómo Jesucristo?',
    author: 'Juan Bautista Cabrera.',
    traductor: '',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 504,
    title: 'Cuando estoy solo',
    author: 'William C. Poole.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Re b M 9/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 505,
    title: 'Al andar con Jesús',
    author: '',
    traductor: 'J. H. Sammis. Tr.',
    tone: `Fa M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 506,
    title: 'Cristo es el mejor amigo',
    author: '',
    traductor: 'Meter P. Bilhorn. Tr.',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 507,
    title: 'Es Jesucristo la vida, la luz ',
    author: 'Pedro Grado.',
    traductor: '',
    tone: `Sol M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 508,
    title: 'En Cristo hallo amigo',
    author: '',
    traductor: 'Charles W. Fry. Tr.',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 509,
    title: 'Es Cristo quien por mí murió',
    author: '',
    traductor: 'Frederick Whitfield. Tr.',
    tone: `Sol M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 510,
    title: 'Vivo por Cristo',
    author: 'Thomas O. Chisholm.',
    traductor: 'George P. Simmonds.',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 511,
    title: 'Si la fe me abandonare',
    author: 'Ada R. Habershon',
    traductor: 'Vicente Mendoza.',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 512,
    title: 'Ando con Cristo ',
    author: 'Charles A. Tindley.',
    traductor: 'Sara Ramos Chaij.',
    tone: `Fa M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 513,
    title: 'Ser cual mi Cristo',
    author: 'Thomas O. Chisholm.',
    traductor: 'Susana R. de Parra.',
    tone: `Fa M 9/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 514,
    title: 'Jehová es mi Pastor',
    author: 'Henry S. Turrall.',
    traductor: '',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 515,
    title: 'Hay un lugar',
    author: '',
    traductor: 'Cleland B. McAfee. Tr.',
    tone: `Re b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 516,
    title: '¡Oh!, yo quiero andar con Cristo',
    author: 'Charles F. Weigle.',
    traductor: 'H. C. Ball.',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 517,
    title: 'Fuera de ti nada espero',
    author: 'Corie F. Davis',
    traductor: 'Susana R. de Parra.',
    tone: `Si b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 518,
    title: 'Mi Redentor, el Rey de gloria',
    author: 'H. A. Merrill.',
    traductor: 'Tr. Thomas M. Westrup.',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 519,
    title: 'Por redimirme Él murió por mí',
    author: 'Keith White.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 520,
    title: 'Tú has venido a la orilla',
    author: 'Cesáreo Gabaráin.',
    traductor: '',
    tone: `Re M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 521,
    title: 'Yo sé que nada impuro',
    author: 'Juan Bautista Cabrera.',
    traductor: '',
    tone: `Reb M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 522,
    title: 'Muy cercano te hallas',
    author: 'V. Kushnir.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `La m  4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 523,
    title: 'Me acercaré a Jesucristo',
    author: 'Robert Harkness.',
    traductor: 'Susana R. de Parra.',
    tone: `Si b M 6/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 524,
    title: 'Quiero yo contigo estar',
    author: 'Himno Ruso.',
    traductor: 'Susana R. de Parra.',
    tone: `Sol m 9/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 525,
    title: 'Hay un lugar do quiero estar',
    author: 'Vicente Mendoza.',
    traductor: '',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 526,
    title: 'Cristo, tu voluntad',
    author: '',
    traductor: '',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 527,
    title: 'Jesús me protege',
    author: 'James Montgomery.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Fa M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 528,
    title: 'Hay quien vela',
    author: 'Juan N. de los santos.',
    traductor: '',
    tone: `Sol  M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 529,
    title: 'Un eterno y grande amor',
    author: 'George W. Robinson.',
    traductor: 'Marjorie J. de Caudill.',
    tone: `Re M 3/2`,
    adapted: '',
    pages: 1
  },
  {
    number: 530,
    title: '¡Oh Jesús, Pastor divino!',
    author: 'Tradicional.',
    traductor: '',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 531,
    title: 'Cristo es el todo',
    author: 'George Bennard.',
    traductor: 'Speros D. Athans.',
    tone: `Si b M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 532,
    title: 'Son los mismos pies',
    author: 'Carmen Dolores Pérez.',
    traductor: '',
    tone: `Do M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 533,
    title: 'Gloria a ti Jesús amado',
    author: 'John Bakewell.',
    traductor: 'Ángel Gabriel Cabrera',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 534,
    title: '¡Oh, qué amigo nos es Cristo!',
    author: 'Joseph M. Scriven.',
    traductor: 'José J. De Mora.',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 535,
    title: 'Hay una voz que habla',
    author: 'G. Massey',
    traductor: 'Susana R. de Parra.',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 536,
    title: 'Óyenos Señor',
    author: 'Tradicional',
    traductor: 'Ángel Gabriel Cabrera',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 537,
    title: 'En la hora de oración',
    author: 'Fanny J. Crosby.',
    traductor: 'Susana R. de Parra',
    tone: `Mi b M 3/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 538,
    title: 'Aparte del mundo',
    author: 'José J. de Mora.',
    traductor: '',
    tone: `Do  M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 539,
    title: 'Es nuestro anhelo',
    author: 'Thomas B. Pollock.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Mi b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 540,
    title: 'Nada puede ya faltarme',
    author: 'Tradicional.',
    traductor: '',
    tone: `Fa M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 541,
    title: 'De mi amante Salvador',
    author: 'Tradicional',
    traductor: '',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 542,
    title: 'Muéstrame tu voluntad',
    author: 'John P. Hopps.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 543,
    title: 'Un momento siempre existe',
    author: 'James R. Lowell.',
    traductor: 'Susana R. de Parra.',
    tone: `Fa m M 4/2`,
    adapted: '',
    pages: 1
  },
  {
    number: 544,
    title: 'Cristo, mi piloto sé',
    author: 'Edward Hopper.',
    traductor: 'Vicente Mendoza.',
    tone: `Si b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 545,
    title: 'Triste es vivir sin amor',
    author: 'José V. Giner.',
    traductor: '',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 546,
    title: 'Prefiero a mi Cristo',
    author: 'Rhea F. Millar.',
    traductor: 'G. Bustamante.',
    tone: `Do M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 547,
    title: 'Contendamos siempre por nuestra fe',
    author: 'C. R. Blackall',
    traductor: 'Henry S. Turrall.',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 548,
    title: '¿Qué me importan?',
    author: 'Tradicional.',
    traductor: '',
    tone: `Sol M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 549,
    title: '¡Firmes y adelante!',
    author: 'Sabine Baring-Gould.',
    traductor: 'Juan Bautista Cabrera.',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 550,
    title: 'Es un tiempo tan terrible',
    author: 'Arthur C. Coxe.',
    traductor: 'Susana R. de Parra.',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 551,
    title: 'Es orden del Rey',
    author: 'Fanny J. Crosby.',
    traductor: 'Susana R. de Parra.',
    tone: `La b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 552,
    title: 'Vamos viajando por el ancho mar',
    author: 'Anónimo',
    traductor: 'Susana R. de Parra.',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 553,
    title: 'Muy en alto peregrinos',
    author: 'Anónimo.',
    traductor: 'Susana R. de Parra.',
    tone: `Do M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 554,
    title: 'Peregrinos en desierto',
    author: 'William Williams.',
    traductor: 'Thomas M. Westrup',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 555,
    title: 'Ten coraje, mi hermano',
    author: 'Norman MacLeod.',
    traductor: 'Susana R. de Parra.',
    tone: `Sol  M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 556,
    title: 'Afirma mis pies',
    author: 'José V. Giner.',
    traductor: '',
    tone: `Sol M 12/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 557,
    title: 'Primero oré por luz',
    author: 'E. D. Cheney.',
    traductor: 'Juan Marrón.',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 558,
    title: 'No hay quien nos diga el día',
    author: 'Tradicional',
    traductor: 'Susana R. de Parra.',
    tone: `Mi b M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 559,
    title: '¡A la luz!',
    author: '',
    traductor: '',
    tone: `Do M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 560,
    title: '¡A la batalla!',
    author: 'Sallie Martin',
    traductor: 'Henry S. Turrall.',
    tone: `Si b M 9/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 561,
    title: 'La senda ancha dejaré',
    author: 'H. C. Ball.',
    traductor: '',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 562,
    title: '¡Despertad, despertad, oh cristianos!',
    author: 'Pedro I. Castro.',
    traductor: '',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 563,
    title: 'Soy peregrino',
    author: 'Thomas R. Taylor.',
    traductor: '',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 564,
    title: 'El camino es escabroso',
    author: '',
    traductor: 'George F. Root. Tr.',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 565,
    title: 'Si la carga es pesada',
    author: 'Franklin E. Belden.',
    traductor: 'W. Pardo G.',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 566,
    title: 'Camino y verdad',
    author: 'Condesa Egloffstein.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Sol  M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 567,
    title: 'Fiel yo seré',
    author: 'Howard A. Walter.',
    traductor: 'C. R. Taylor.',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 568,
    title: 'La patria amada muy cerca está',
    author: 'E. C. Magaret.',
    traductor: 'Susana R. de Parra.',
    tone: `Sol M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 569,
    title: 'Solemne me es saber',
    author: 'Phoebe Cary.',
    traductor: '',
    tone: `Si b M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 570,
    title: 'Ruge y brama el mar salvaje',
    author: 'Tradicional.',
    traductor: '',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 571,
    title: 'Busquemos la patria',
    author: 'Thomas M. Westrup.',
    traductor: '',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 572,
    title: 'Cual pendón hermoso',
    author: 'Daniel W. Whittle.',
    traductor: 'Henry S. Turrall',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 573,
    title: '¿Soy yo soldado de Jesús?',
    author: '',
    traductor: 'Isaac Watts. Tr.',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 574,
    title: 'Los que aman al Señor',
    author: 'Isaac Watts.',
    traductor: 'Vicente Mendoza.',
    tone: `Sol M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 575,
    title: 'Voy al cielo',
    author: '',
    traductor: 'Mary S. B. Dana. Tr.',
    tone: `Fa  M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 576,
    title: '¡De pie, de pie, cristianos!',
    author: 'George Duffield.',
    traductor: 'E. L.Maxwell.',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 577,
    title: 'Siervos de Jesús',
    author: '',
    traductor: 'William F. Sherwin. Tr.',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 578,
    title: 'En sombras de la tarde ',
    author: 'Ada Cross.',
    traductor: 'W. Pardo G.',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 579,
    title: 'Dulce paz del cielo',
    author: 'Daniel Hunger.',
    traductor: '',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 580,
    title: 'Día glorioso',
    author: 'Fanny J. Crosby.',
    traductor: 'Susana R. de Parra.',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 581,
    title: 'Las faenas terminadas',
    author: 'E. L. Maxwell.',
    traductor: '',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 582,
    title: 'Sábado glorioso',
    author: 'Fanny J. Crosby.',
    traductor: 'Susana R. de Parra.',
    tone: `Do M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 583,
    title: 'Otros seis días de labor',
    author: 'Samuel Stennett.',
    traductor: 'E. L. Maxwell.',
    tone: `Si b M 3/2`,
    adapted: '',
    pages: 1
  },
  {
    number: 584,
    title: 'El sábado nuestra delicia',
    author: 'S. Elsner',
    traductor: 'Susana R. de Parra.',
    tone: `Fa M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 585,
    title: 'Hoy el sábado glorioso',
    author: 'Felicita Castillo.',
    traductor: '',
    tone: `Mi b M 3/2`,
    adapted: '',
    pages: 1
  },
  {
    number: 586,
    title: 'Señor, reposamos',
    author: 'E. G. De Marisco, Adapt.',
    traductor: '',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 587,
    title: 'Sábado santo',
    author: 'Héctor Pereyra S.',
    traductor: '',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 588,
    title: 'Día santo de Jehová',
    author: 'Franklin E. Belden.',
    traductor: 'Susana R. de Parra.',
    tone: `Fa  M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 589,
    title: 'Hoy es día de reposo',
    author: 'Mateo Cosidó.',
    traductor: '',
    tone: `Fa M 3/2`,
    adapted: '',
    pages: 1
  },
  {
    number: 590,
    title: 'Santo día ',
    author: 'V. E. Berry. Adapt.',
    traductor: '',
    tone: `Mi M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 591,
    title: 'Ya asoma el sol brillante',
    author: '',
    traductor: 'Landa Wilson. H. L. Ross. Tr.',
    tone: `Do M 2/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 592,
    title: 'Día santo del Señor',
    author: 'E. L. Maxwell.',
    traductor: '',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 593,
    title: 'Ya el fin se acerca',
    author: 'Juan Bautista Cabrera.',
    traductor: '',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 594,
    title: 'La creación',
    author: 'Julián Guilarte.',
    traductor: '',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 595,
    title: 'Ya se inicia la semana',
    author: 'Tradicional.',
    traductor: '',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 596,
    title: 'Hogar de mis recuerdos',
    author: '',
    traductor: 'John H. Payne. Tr.',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 597,
    title: 'Es un hogar feliz aquel',
    author: 'Henry Ware Jr.',
    traductor: 'Susana R. de Parra.',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 598,
    title: 'En este bello día',
    author: 'Charles H. Gabriel.',
    traductor: 'E. L. Maxwell',
    tone: `Fa  M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 599,
    title: 'Guía a ti, Señor',
    author: 'Franklin E. Belden.',
    traductor: 'E. L. Maxwell.',
    tone: `Sol M 6/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 600,
    title: 'Que en nuestro hogar se manifieste gozo',
    author: 'Barbara B. Hart.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 601,
    title: '¡Oh, cuán feliz aquel hogar!',
    author: 'Kart Johann P. Spitta.',
    traductor: '',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 602,
    title: 'Cuán hermoso el amor de Dios',
    author: 'Espiritual.',
    traductor: 'Susana R. de Parra.',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 603,
    title: '¿Sabes cuántos?',
    author: '',
    traductor: 'Wilhelm Hey. Tr.',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 604,
    title: 'En el bosque',
    author: 'Edgar Brooks.',
    traductor: '',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 605,
    title: 'En la rama del peral',
    author: 'Tradicional.',
    traductor: 'H. V. Espino.',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 606,
    title: 'Manos pequeñas tengo listas',
    author: 'William A. Ogden.',
    traductor: 'Thomas M. Westrup.',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 607,
    title: 'Bellas las manitas son',
    author: '',
    traductor: 'T. Corben. Tr.',
    tone: `Do M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 608,
    title: 'La canción del ensueño',
    author: 'Tradicional.',
    traductor: 'H. V. Espino.',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 609,
    title: 'El bote en el mar de Galilea',
    author: 'C. M. de Striplin y Esther Peverini de Alberro.',
    traductor: '',
    tone: `Mi b M 2/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 610,
    title: 'Aunque soy pequeñuelo',
    author: 'Tradicional.',
    traductor: '',
    tone: `Sol M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 611,
    title: 'Como estrellas en la noche',
    author: 'Daniel Hunger.',
    traductor: '',
    tone: `Fa  M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 612,
    title: 'Cuando leo en la Biblia',
    author: 'Jemima Luke.',
    traductor: 'Sebastián Cruellas.',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 613,
    title: 'Niños, joyas de Cristo',
    author: 'J. S. Fearis.',
    traductor: 'H. C. Ball.',
    tone: `Fa M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 614,
    title: 'Nítido rayo, por Cristo',
    author: 'Nellie Talbot.',
    traductor: 'Speros D. Athans.',
    tone: `Sol M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 615,
    title: 'Yo temprano busco a Cristo',
    author: 'L. M. B. Bateman.',
    traductor: 'E. L. Maxwell.',
    tone: `La b M  3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 616,
    title: 'Cristo, yo te seguiré',
    author: '',
    traductor: 'Grace Glenn. Tr.',
    tone: `La b M 2/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 617,
    title: '¡Oh,  juventud!',
    author: 'Julián Guilarte.',
    traductor: '',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 618,
    title: 'De prisa la vida pasará',
    author: 'Himno Ruso.',
    traductor: 'Susana R. de Parra.',
    tone: `Re m 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 619,
    title: 'Embajador del Rey',
    author: 'Julián Guilarte.',
    traductor: '',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 620,
    title: 'La palabra de Dios',
    author: 'Himno Ruso.',
    traductor: 'Susana R. de Parra.',
    tone: `Re m 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 621,
    title: 'A Cristo alabe mi alma',
    author: 'Norbert Kissel. Basado en el Salmo 103',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Fa M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 622,
    title: '¡Oh, jóvenes, venid!',
    author: 'Catherine Hankey.',
    traductor: 'Ángel Gabriel Cabrera',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 623,
    title: 'Yo quiero siempre seguir a Cristo',
    author: 'Tradicional.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 624,
    title: 'Cristo, yo quiero honrarte ',
    author: 'Thomas Eger.',
    traductor: 'Susana R. de Parra.',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 625,
    title: 'Yo tengo gozo',
    author: 'Tradicional.',
    traductor: '',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 626,
    title: 'Oraré, clamaré y cantaré',
    author: 'Basado en el Salmo 89:1',
    traductor: 'Susana R. de Parra.',
    tone: `Re b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 627,
    title: 'Tengo paz',
    author: 'Himno Tradicional.',
    traductor: 'Espiritual americano. Tr.',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 628,
    title: 'Juventud, juventud',
    author: 'Daniel Hunger.',
    traductor: '',
    tone: `Mi M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 629,
    title: 'No quiero la verdad a medias',
    author: 'Himno Ruso.',
    traductor: '',
    tone: `Mi m 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 630,
    title: 'La época primaveral',
    author: 'Edmund S. Lorenz.',
    traductor: 'Susana R. de Parra.',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 631,
    title: 'A la Patria hoy marchemos',
    author: 'Kart Gallion.',
    traductor: 'Susana R. de Parra.',
    tone: `Re  M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 632,
    title: 'Promesa dulce',
    author: 'Franklin E. Belden.',
    traductor: 'E. L. Maxwell.',
    tone: `Fa  M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 633,
    title: 'Tiempo es de que en gloria venga Cristo',
    author: 'G. W. Sederquist.',
    traductor: 'W. Pardo G.',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 634,
    title: 'Es dulce promesa para el que cree',
    author: 'Franklin E. Belden.',
    traductor: 'Susana R. de Parra.',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 635,
    title: 'Jesús pronto volverá',
    author: 'Amanda Sandbergh.',
    traductor: '',
    tone: `Mi b M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 636,
    title: 'Unidos y alegres',
    author: 'Himno Italiano.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 637,
    title: 'Sobre la tierra señales se ven',
    author: 'W. C. Gage.',
    traductor: 'Susana R. de Parra.',
    tone: `Do M 2/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 638,
    title: 'La Biblia nos habla de Cristo',
    author: 'Roy Pendleton',
    traductor: '',
    tone: `Do M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 639,
    title: 'Tu reino anhelan',
    author: 'Frederick L. Hosmer',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Fa  M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 640,
    title: 'El amanecer del día',
    author: 'Franklin E. Belden,',
    traductor: 'Juán Marrón.',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 641,
    title: 'Viene otra vez',
    author: 'John W. Peterson.',
    traductor: 'Estr. 1-3: Tr. por Roberto Dalke.\nEstr. 2: Tr. por Ángel Gabriel Cabrera.',
    tone: `Si b M 6/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 642,
    title: 'Del tiempo las señales',
    author: 'Anne R. Cousin.',
    traductor: 'Susana R. de Parra.',
    tone: `Fa  M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 643,
    title: 'Que cada lámpara arda fiel',
    author: 'Franklin E. Belden.',
    traductor: 'Susana R. de Parra.',
    tone: `Mi b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 644,
    title: '¿Cuándo he de ver a Cristo?',
    author: 'John Leland.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Mi m 2/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 645,
    title: 'Él viene pronto a reinar',
    author: 'H. C. Ball.',
    traductor: '',
    tone: `Fa M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 646,
    title: '¡Oh!, cuán gratas las nuevas',
    author: 'Anónimo.',
    traductor: 'E. L. Maxwell.',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 647,
    title: 'Amanece ya la mañana de oro',
    author: 'S. J. Graham.',
    traductor: 'E. L. Maxwell.',
    tone: `Sol  M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 648,
    title: 'El Rey a los suyos llama',
    author: 'L. D. Santee',
    traductor: 'Susana R. de Parra.',
    tone: `La  M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 649,
    title: 'Cristo viene',
    author: '',
    traductor: 'Phoebe Palmer. Tr.',
    tone: `Do M 2/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 650,
    title: 'Hemos de mirar la gloria',
    author: 'Julia W. Howe.',
    traductor: 'Susana R. de Parra.',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 651,
    title: 'El Rey vendrá, no tardará',
    author: 'Antiguo Himno griego.',
    traductor: 'Susana R. de Parra.',
    tone: `Mi m 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 652,
    title: 'La segunda venida de Cristo',
    author: 'E. W. Thomann.',
    traductor: '',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 653,
    title: '¡Mirad cuán bella la señal!',
    author: 'Isaac Watts.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Sol M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 654,
    title: '¿Has oído el mensaje?',
    author: 'Enrique E. Baasch.',
    traductor: '',
    tone: `La b  M 2/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 655,
    title: 'El Rey viene victorioso',
    author: 'Winfield Macomber.',
    traductor: 'Susana R. de Parra',
    tone: `Mi b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 656,
    title: 'Pertenezco a mi Rey',
    author: 'Ida R. Smith.',
    traductor: 'Vicente Mendoza.',
    tone: `Sol  M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 657,
    title: 'Arrolladas las neblinas',
    author: 'Annie Herbert.',
    traductor: 'Thomas M. Westrup.',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 658,
    title: 'Cuando aquí de la vida',
    author: 'Fanny J. Crosby.',
    traductor: 'Vicente Mendoza.',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 659,
    title: 'Alégrate alma feliz',
    author: 'Tradicional.',
    traductor: 'Speros D. Athans.',
    tone: `Mi b M 6/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 660,
    title: '¡Alza tu canto, oh lengua mía!',
    author: 'Tradicional.',
    traductor: '',
    tone: `La b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 661,
    title: 'Mirando a la distancia',
    author: 'Henry de Fluiter.',
    traductor: 'Susana R. de Parra.',
    tone: `La b M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 662,
    title: 'Hoy gozoso medito',
    author: '',
    traductor: 'Eliza E. Hewitt. Tr.',
    tone: `La  M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 663,
    title: 'Con alegría y gran bendición',
    author: 'Himno Sueco.',
    traductor: 'Susana R. de Parra.',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 664,
    title: 'Allá sobre montes',
    author: 'C. P. Whitford.',
    traductor: 'G. Bustamante.',
    tone: `Re b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 665,
    title: 'Por mil arpas ',
    author: '',
    traductor: 'Thomas Nelly. Tr.',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 666,
    title: 'Dad gloria al Cordero Rey',
    author: 'Edward Perronet.',
    traductor: 'Thomas M. Westrup.',
    tone: `Sol  M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 667,
    title: 'A veces oigo un himno',
    author: 'Eben E. Rexford.',
    traductor: 'Juan Marrón.',
    tone: `Sol  M 3/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 668,
    title: '¡Qué música alegre!',
    author: 'James E. White.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Fa M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 669,
    title: 'Jerusalén, mi amado hogar',
    author: 'William A. Ogden.',
    traductor: 'N. Samojluk.',
    tone: `Re M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 670,
    title: 'Jerusalén, la excelsa',
    author: 'Bernard de Cluny.',
    traductor: '',
    tone: `Re b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 671,
    title: 'Más allá, en la excelsa patria',
    author: 'S. F. Harmer.',
    traductor: 'E. L. Maxwell.',
    tone: `Do M 2/2`,
    adapted: '',
    pages: 2
  },
  {
    number: 672,
    title: 'Junto al río nos veremos',
    author: 'Horace L. Hastings.',
    traductor: 'Susana R. de Parra.',
    tone: `La M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 673,
    title: 'En la célica morada',
    author: 'James McGranahan.',
    traductor: 'Thomas M. Westrup.',
    tone: `Sol M 3/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 674,
    title: 'Reunidos en el cielo',
    author: 'Eliza E. Hewitt.',
    traductor: 'Susana R. de Parra.',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 675,
    title: 'El canto de los ángeles',
    author: 'Jonson Oatman Jr.',
    traductor: 'Winifred C. de Wild. Adapt.',
    tone: `Re  M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 676,
    title: '¡Oh célica Jerusalén!',
    author: 'Thomas M. Westrup.',
    traductor: '',
    tone: `Si b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 677,
    title: 'Del bello país he leído',
    author: '',
    traductor: 'Franklin E. Belden. Tr.',
    tone: `La b M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 678,
    title: 'En lo profundo de la mar',
    author: 'W. Pardo G.',
    traductor: '',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 679,
    title: 'En las aguas de la muerte',
    author: 'V. E. Thomann.',
    traductor: '',
    tone: `Mi b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 680,
    title: 'La fuente veo',
    author: 'Phoebe Palmer.',
    traductor: 'E. L. Maxwell.',
    tone: `Mi b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 681,
    title: 'Vengamos a las aguas vivas',
    author: 'Franklin E. Belden.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 682,
    title: 'Heme aquí',
    author: 'Horatius Bonar.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Fa  M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 683,
    title: 'Reunidos en silencio',
    author: 'Liturgia de San Santiago Siglo IV.\nAdapt. por Gerad Moultrie.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Re m2/2`,
    adapted: '',
    pages: 1
  },
  {
    number: 684,
    title: '“El pan de vida soy”',
    author: 'Mary A. Lathbury.',
    traductor: 'Pablo Simon y L. M. Roberts.',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 685,
    title: 'Jesús invita hoy',
    author: '',
    traductor: 'Isaac Watts. Tr.',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 686,
    title: 'Espíritu de santidad',
    author: 'Tradicional.',
    traductor: '',
    tone: `La M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 687,
    title: 'Todo es bello',
    author: 'J. H. McNaughton.',
    traductor: 'W. Pardo G.',
    tone: `Sol M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 688,
    title: 'Perfecto amor',
    author: 'Dorothy Blomfield Gurney.',
    traductor: 'Mercedes P. De Bernal.',
    tone: `Re M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 689,
    title: 'Nos congregamos hoy',
    author: 'Ángel Gabriel Cabrera.',
    traductor: '',
    tone: `Mi b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 690,
    title: 'Sin temores',
    author: 'Ángel Gabriel Cabrera.',
    traductor: '',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 691,
    title: '¡Oh santo Dios!',
    author: 'W. John.',
    traductor: '',
    tone: `Do  M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 692,
    title: 'Llegaremos al hogar',
    author: 'Fanny J. Crosby.',
    traductor: 'Vicente Mendoza. Adapt.',
    tone: `Re  M 3/2`,
    adapted: '',
    pages: 2
  },
  {
    number: 693,
    title: 'Ven, alma que lloras',
    author: '',
    traductor: 'Mary A. Bachelor. Tr.',
    tone: `Si b M 12/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 694,
    title: 'Con gran gozo y placer',
    author: 'Henry S. Turral.',
    traductor: '',
    tone: `Mi M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 695,
    title: 'Cuán gozosos nos sentimos',
    author: 'Susana R. de Parra.',
    traductor: '',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 696,
    title: 'Hoy con amor',
    author: 'Susana R. de Parra.',
    traductor: '',
    tone: `Si b M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 697,
    title: 'Cuán grato es con amigos vernos',
    author: '',
    traductor: 'Sra. De E. W. Chapman. C. Tr.',
    tone: `Si b M 6/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 698,
    title: 'Hoy se clausura nuestra reunión',
    author: 'Susana R. de Parra.',
    traductor: '',
    tone: `La b M 3/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 699,
    title: 'Muy placenteras fueron estas horas',
    author: 'Susana R. de Parra.',
    traductor: '',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 700,
    title: 'En Jesús mi alma tiene',
    author: 'Martin Janus.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Fa M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 701,
    title: 'Tiernas canciones alzad al Señor',
    author: 'Vicente Mendoza.',
    traductor: '',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 702,
    title: 'Jehová es mi luz',
    author: 'Basado en el Salmo 27:1-4\nMartha P. de Cabrera.',
    traductor: '',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 703,
    title: 'Salvador de mi alma eres',
    author: 'Charles Wesley.',
    traductor: 'Susana R. de Parra.',
    tone: `Sol  M 2/2`,
    adapted: '',
    pages: 2
  },
  {
    number: 704,
    title: 'A Dios elevo el corazón',
    author: 'Himno Alemán.',
    traductor: 'Susana R. de Parra.',
    tone: `Mi M 3/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 705,
    title: 'Maravillosa gracia',
    author: 'Haldor Lillenas.',
    traductor: 'William R. Adell.',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 706,
    title: 'Se va la luz dorada',
    author: 'Tradicional.',
    traductor: 'Susana R. de Parra.',
    tone: `Mi b M 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 707,
    title: 'Ven a los pies de Jesús',
    author: 'Alfredo Colom M.',
    traductor: '',
    tone: `Mi m 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 708,
    title: 'Aunque sean como grana',
    author: '',
    traductor: 'Fanny J. Crosby. Tr.',
    tone: `La b M 3/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 709,
    title: 'Dona nobis pacem',
    author: 'Antiguo Himno cristiano\n‘‘Agnus dei’’.',
    traductor: '',
    tone: `Fa M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 710,
    title: '¡Oh, cuán grande es tu misericordia!',
    author: 'Slova N. Kraiova.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Sol m 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 711,
    title: 'Dios ha hecho todo',
    author: 'José Juan Naula Yupanqui\ny Robert C. Savage.',
    traductor: '',
    tone: `Mi m 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 712,
    title: 'La luz del sol',
    author: 'Himno ruso.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Mi m 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 713,
    title: 'Saludamos la mañana',
    author: 'Ernst Gebhardt.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Do M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 714,
    title: 'Más lejos que los soles',
    author: 'Augusta Lönborg.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `La M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 715,
    title: '¿Quién puede ayudarme?',
    author: 'Henry A. Tandberg.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Sol m 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 716,
    title: 'Perdóname Padre',
    author: 'Himno ruso.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Fa m 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 717,
    title: 'Ten piedad de mí',
    author: 'Basado en el Salmo 51.\nÁngel Gabriel Cabrera.',
    traductor: '',
    tone: `Mi m 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 718,
    title: 'Mil gracias hoy te doy',
    author: 'Himno ruso.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `La m  12/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 719,
    title: 'Vuestros cantos',
    author: 'Himno ruso.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `La m 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 720,
    title: 'Cuando pienso en tu grandeza',
    author: 'Basado en el Salmo 139.\nÁngel Gabriel Cabrera.',
    traductor: '',
    tone: `Mi m  4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 721,
    title: 'Voces de duda',
    author: 'Himno ruso.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Si m 12/8`,
    adapted: '',
    pages: 1
  },
  {
    number: 722,
    title: 'Himno matrimonial A la novia',
    author: 'Ángel Gabriel Cabrera.',
    traductor: '',
    tone: `Mi m 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 723,
    title: 'Seis días terminan',
    author: 'J. O. Wallin.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Re m 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 724,
    title: '¡Adelante! ¡Avanzad!',
    author: 'Daniel Hunger.',
    traductor: '',
    tone: `Fa  M 4/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 725,
    title: 'Canto a la escuela sabática',
    author: 'Daniel Hunger.',
    traductor: '',
    tone: `Fa M 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 726,
    title: '“Multitud de Israel”',
    author: 'Basado en Hechos 3:12 al 4:12\nÁngel Gabriel Cabrera.',
    traductor: '',
    tone: `La m 3/4`,
    adapted: '',
    pages: 2
  },
  {
    number: 727,
    title: 'Al vagar sin rumbo',
    author: 'Ángel Gabriel Cabrera.',
    traductor: '',
    tone: `La m 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 728,
    title: 'Hazme humilde',
    author: 'Himno sueco.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Re m 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 729,
    title: '¿Con valor a Cristo sigues?',
    author: 'Carolina Sandell Berg.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Si b M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 730,
    title: 'Que tu bendita gloria',
    author: 'Himno sueco',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Re m 4/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 731,
    title: 'Amigo tengo',
    author: 'Nils Frykman.',
    traductor: 'Susana R. de Parra.',
    tone: `Fa M 3/4`,
    adapted: '',
    pages: 1
  },
  {
    number: 732,
    title: 'La eternidad puedo mirar',
    author: 'Himno ruso.',
    traductor: 'Ángel Gabriel Cabrera.',
    tone: `Re m 6/8`,
    adapted: '',
    pages: 2
  },
  {
    number: 733,
    title: 'Con las huestes de salvados',
    author: 'Ángel Gabriel Cabrera.',
    traductor: 'E. L. Maxwell.',
    tone: `La b M 4/4`,
    adapted: '',
    pages: 2
  }
];

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('himnos', items, {});
  },

  down (queryInterface, Sequelize) { }
};
