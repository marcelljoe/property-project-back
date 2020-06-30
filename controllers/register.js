const jwt = require("jsonwebtoken");
const models = require("../models");
const users = models.users;
const { Op } = require("sequelize");
const hash = require("password-hash");



exports.register = (req, res) => {
  users
    .findOne({
      where: {email: req.body.email}
    })
    .then(users => {
      if (users) {
        res
          .send({
            error: true,
            message:
              "This email has been registered. Choose another email."
          })
          .catch(err => res.send(err));
      } else {
        models.users.create({
        nama: req.body.nama,
        notelp: req.body.phoneNumber,
        email:req.body.email,
        password: hash.generate(req.body.password),
        ktp: req.body.ktp,
        norek: req.body.norek,
        alamat: req.body.alamat,
        createdAt: Date.now(),
        updatedAt: Date.now()
        })
        .then(users => {
          const token = jwt.sign({ id: users.id }, "ThisIsTheToken");
          const email = users.email;
          const id = users.id;
          const nama = users.nama;
          res.send({
            message: "success",
            email,
            id,
            nama,
            token
          });
        }).catch(err => {console.log(err)});        
      }
    });
};
