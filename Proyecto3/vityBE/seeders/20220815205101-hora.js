'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    for (let i = 1; i <11; i++) {  
      await queryInterface.bulkInsert('Hora', [{  
          idHora: i,  
          horaInicio: new Date(),
          horaLlegada: new Date()
      }], {});  
   } 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Hora', null, {});  
  }
};
