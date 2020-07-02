'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    ktp: DataTypes.BIGINT(100),
    norek: DataTypes.STRING,
    notelp: DataTypes.BIGINT(100)
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};