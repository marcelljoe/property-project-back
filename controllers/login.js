const jwt = require("jsonwebtoken");

const models = require("../models");
const users = models.users;
const hash = require("password-hash");


exports.login = (req, res) => {
  //check if email and pass match in db tbl user
  users.findOne({ where: { email: req.body.email } })
    .then(users => {
      if (users) {
        const password = users.password;
        const verify = hash.verify(req.body.password, password);
        if (verify === true) {
          const { activated } = users;
          if (activated == "0") {
            res.send({
              error: true,
              message: "Activate your account so you can log in. Please contact our admin for your account activation."
            })
          } else {
            const token = jwt.sign({ id: users.id, nama: users.nama, email: users.email, activated: users.activated }, "sihdfbasudfhbsdknasdcuasdcuidncaksducnkadsucnadsucnvkvlzkdncdl");
            res.send({
              message: "Login successfully.",
              token,
              error: false
            })
              .catch(err => res.send({
                err,
                message: "Error di verify."
              }));
          }
        } else {
          res.send({
            error: true,
            message: "Wrong Password. Please type your password correctly."
          });
        }
      } else {
        res.send({
          error: true,
          message: "Wrong Email or Password!"
        });
      }
    })
    .catch(err => {
      console.log(err)
      res.send({ err, message: "Got an error at findOne." })
    });
};
