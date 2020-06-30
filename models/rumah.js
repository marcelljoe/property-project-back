'use strict';
module.exports = (sequelize, DataTypes) => {
  const rumah = sequelize.define('rumah', {
    idlisting: DataTypes.INTEGER,
    lt: DataTypes.STRING,
    lb: DataTypes.STRING,
    lantai: DataTypes.STRING,
    interior: DataTypes.STRING,
    harga: DataTypes.STRING,
    parkir: DataTypes.STRING,
    alamat: DataTypes.TEXT,
    sertifikat: DataTypes.STRING,
    tipe: DataTypes.STRING,
    createdBy_id: DataTypes.INTEGER,
    tahunbuat:DataTypes.INTEGER,

  }, {});
  rumah.associate = function(models) {
    // associations can be defined here
    rumah.belongsTo(models.users, {
      foreignKey: "createdBy_id"
    })
  };
  return rumah;
};