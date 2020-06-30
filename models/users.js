'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    ktp: DataTypes.INTEGER,
    norek: DataTypes.STRING,
    notelp: DataTypes.INTEGER
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};