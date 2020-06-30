const models = require("../models");
const rumah = models.rumah;
const users = models.users;
const { Op } = require("sequelize");

var startDate = new Date();
var endDate = new Date();
endDate.setDate(new Date().getDate() + 1);

exports.showAll = (req, res) => {
  rumah.findAll({}).then(rumah => res.send(rumah));
};


exports.insert = (req, res) => {
  rumah.create(req.body).then(rumah => {
    res.send({
      message: "success",
      rumah
    });
  });
};


exports.detail = (req, res) => {
  rumah
    .findOne({
      where: {
        id: req.params.id
      }
    })
    .then(rumah => res.send(rumah));
};