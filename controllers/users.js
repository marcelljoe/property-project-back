const jwt = require("jsonwebtoken");

const models = require("../models");
const rumahs = models.rumahs;
const users = models.users;
const { Op } = require("sequelize");

var startDate = new Date();
var endDate = new Date();
endDate.setDate(new Date().getDate() + 1);

exports.showAll = (req, res) => {
  users.findAll({}).then(users => res.send(users));
};

exports.showOne = (req, res) => {
  users
    .findOne({
      where: {
        id: req.params.id
      }
    })
    .then(users => res.send(users));
};

exports.editUser = (req, res) => {
    users
      .update(
        {
          nama: req.body.nama,
          email: req.body.email,
          notelp: req.body.phoneNumber,
          norek: req.body.norek
        }
        // req.body
        ,
        {
          where: { id: req.params.id }
        }
      )
      .then(users => {
        const token = jwt.sign({ id: users.id }, "ThisIsTheToken");
        const nama = req.body.nama;
        res.send({
          message: "success",
          nama,
          token
        });
      });
}