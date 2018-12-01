'use strict';

let items = [
  { name: 'ALABANZA y AGRADECIMIENTO' },
  { name: 'ARREPENTIMIENTO' },
  { name: 'BAUTISMO' },
  { name: 'BIENVENIDA' },
  { name: 'CANTOS CORALES' },
  { name: 'CANTOS PARA JOVENES' },
  { name: 'CANTOS PARA NIÑOS' },
  { name: 'CENA DEL SEÑOR' },
  { name: 'COMUNIÓN CON CRISTO' },
  { name: 'CONSAGRACIÓN' },
  { name: 'CONSUELO Y ANIMACIÓN' },
  { name: 'CREACIÓN' },
  { name: 'DESPEDIDA' },
  { name: 'DEVOCIÓN MATUTINA' },
  { name: 'DEVOCIÓN VESPERTINA' },
  { name: 'DIEZMOS Y OFRENDAS' },
  { name: 'DIOS' },
  { name: 'DEPENDENCIA DE DIOS ' },
  { name: 'DIRECCIÓN DE DIOS' },
  { name: 'EL AMOR DE DIOS' },
  { name: 'EL CAMINO DE LA VIDA' },
  { name: 'EL CULTO - APERTURA' },
  { name: 'EL CULTO - CLAUSURA' },
  { name: 'EL HOGAR' },
  { name: 'EL ESPIRITU SANTO' },
  { name: 'EL JUICIO' },
  { name: 'EL SÁBADO' },
  { name: 'FE Y CONFIANZA' },
  { name: 'FUNERALES' },
  { name: 'GOZO Y PAZ' },
  { name: 'INVITACIÓN' },
  { name: 'JESUCRISTO' },
  { name: 'LA IGLESIA' },
  { name: 'LA LUCHA DE LA FE Y EL PEREGRINAJE' },
  { name: 'LA RESURRECCIÓN' },
  { name: 'LAS SAGRADAS ESCRITURAS' },
  { name: 'MISIÓN' },
  { name: 'MATRIMONIO' },
  { name: 'ORACIÓN' },
  { name: 'REINO CELESTIAL' },
  { name: 'REVERENCIA Y ADORACIÓN' },
  { name: 'SÁBADO - Escuela Sabática' },
  { name: 'SALVACIÓN' },
  { name: 'SEGUNDA VENIDA DE CRISTO' },
  { name: 'SIGUIENDO A JESÚS ' },
  { name: 'VIDA CRISTIANA' },
  { name: 'VIGILANCIA' },
  { name: 'VIRTUDES CRISTIANAS' }
];

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categories', items, {});
  },

  down (queryInterface, Sequelize) { }
};
