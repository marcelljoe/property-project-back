const models = require("../models");
const rumahs = models.rumahs;
const users = models.users;
const { Op } = require("sequelize");

var startDate = new Date();
var endDate = new Date();
endDate.setDate(new Date().getDate() + 1);

exports.showAll = (req, res) => {
  rumahs.findAll().then(rumahs => res.send(rumahs));
};


exports.insert = (req, res) => {
  rumahs.create(req.body).then(rumahs => {
    res.send({
      message: "success",
      rumahs
    });
  });
};


exports.detail = (req, res) => {
  rumahs
    .findOne({
      where: {
        id: req.params.id
      }
    })
    .then(rumahs => res.send(rumahs));
};