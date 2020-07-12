const jwt = require("jsonwebtoken");
const models = require("../models");
const rumahs = models.rumahs;
const users = models.users;
const { Op } = require("sequelize");
const hash = require("password-hash");

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

exports.editUserAct = (req, res) => {
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

exports.editUser = (req, res) => {
  users
    .update(
      {
        nama: req.body.nama,
        alamat: req.body.alamat,
        email: req.body.email,
        password: hash.generate(req.body.password),
        ktp: req.body.ktp,
        norek: req.body.norek,
        notelp: req.body.notelp,
        updatedAt: Date.now()
       },
      {
      where: {
        id: req.params.id
      }
    })
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