'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert(
        "users",
        [
          {
            nama: "MasterDummy",
            alamat: "Planet ke3",
            email: "",
            password: "admin1234531",
            ktp: "12345",
            norek:"1029384756",
            notelp:"081234568"
          }
        ],
        {}
      );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
