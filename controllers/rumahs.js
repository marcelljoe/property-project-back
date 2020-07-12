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


exports.editRumahImg = (req, res) => {
  rumahs
    .update(
      {
        imgUrl: req.body.imgUrl
      },
      {
      where: {
        id: req.params.id
      }
    })
    .then(rumahs => res.send(rumahs));
};

exports.editRumah = (req, res) => {
  rumahs
    .update(
      {
        idlisting: req.body.idListing,
        lt: req.body.lt,
        lb: req.body.lb,
        lantai: req.body.lantai,
        interior: req.body.interior,
        harga: req.body.harga,
        parkir: req.body.parkir,
        alamat: req.body.alamat,
        sertifikat: req.body.sertifikat,
        tipe: req.body.tipe,
        imgUrl: req.body.imgUrl,
        tahunbuat: req.body.tahunbuat
      },
      {
      where: {
        id: req.params.id
      }
    })
    .then(rumahs => res.send(rumahs));
};