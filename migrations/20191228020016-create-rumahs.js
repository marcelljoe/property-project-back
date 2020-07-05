'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("rumahs", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    idlisting: {
      type: Sequelize.BIGINT(100),
      allowNull: false,
    },
    lt: {
      type: Sequelize.STRING,
    },
    lb: {
      type: Sequelize.STRING,
    },
    lantai: {
      type: Sequelize.STRING
    },
    interior: {
      type: Sequelize.STRING
    },
    harga: {
      type: Sequelize.STRING
    },
    parkir: {
      type: Sequelize.STRING
    },
    alamat: {
      type: Sequelize.TEXT
    },
    sertifikat: {
      type: Sequelize.STRING
    },
    tipe: {
      type: Sequelize.STRING
    },
    tahunbuat: {
      type: Sequelize.INTEGER
    },
    imgUrl: {
      type: Sequelize.TEXT
    },
    createdBy_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id"
      },
      onUpdate: "cascade",
      onDelete: "cascade"
    },
    createdAt: {
      allowNull: true,
      type: Sequelize.DATE,
      defaultValue: new Date()
    },
    updatedAt: {
      allowNull: true,
      type: Sequelize.DATE,
      defaultValue: new Date()
    }
  });





  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('rumahs');
  }
};