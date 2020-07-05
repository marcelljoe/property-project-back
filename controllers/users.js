const jwt = require("jsonwebtoken");

const models = require("../models");
const rumahs = models.rumahs;
const users = models.users;
const { Op } = require("sequelize");

var startDate = new Date();
var endDate = new Date();
endDate.setDate(new Date().getDate() + 1);

exports.showAll = (req, res) => {
  users.findAll().then(users => res.send({
    message: "success",
    users
  }));
};

exports.showOne = (req, res) => {
  users
    .findOne({
      where: {
        id: req.params.id
      }
    })
    .then(users => res.send(users))
    .catch(err => res.send(err));
};

exports.editUser = (req, res) => {
    users
      .update(
        {
          activated: req.body.activated
        },
        {
          where: { id: req.params.id }
        }
      )
      .then(users => {
        res.send({
          message: "success"  
        });
      });
}

exports.deleteUser = (req, res) => {
  users
  .destroy({
    where: {id: req.params.id}
  }).then(users => {
    res.send({
      message: "success"
    });
  })
}