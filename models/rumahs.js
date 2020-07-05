'use strict';
module.exports = (sequelize, DataTypes) => {
  const rumahs = sequelize.define('rumahs', {
    idlisting: DataTypes.BIGINT(100),
    lt: DataTypes.STRING,
    lb: DataTypes.STRING,
    lantai: DataTypes.STRING,
    interior: DataTypes.STRING,
    harga: DataTypes.STRING,
    parkir: DataTypes.STRING,
    alamat: DataTypes.TEXT,
    sertifikat: DataTypes.STRING,
    tipe: DataTypes.STRING,
    imgUrl: DataTypes.TEXT,
    tahunbuat:DataTypes.INTEGER,
    createdBy_id: DataTypes.INTEGER,

  }, {});
  rumahs.associate = function(models) {
    // associations can be defined here
    rumahs.belongsTo(models.users, {
      foreignKey: "createdBy_id"
    })
  };
  return rumahs;
};