const models = require("../models");
const categories = models.categories;

exports.showAll = (req, res) => {
  categories.findAll().then(categories => res.send(categories));
};

exports.showOne = (req, res) => {
  categories
    .findOne({ where:{id: req.params.id}})
    .then(categories => res.send(categories));
};

exports.insert = (req, res) => {
  categories.create(req.body).then(categories => {
    res.send({
      message: "success",
      categories
    });
  });
};

exports.update = (req, res) => {
  categories.update(
      {
          name: req.body.name,
          img: req.body.img
      },
      {
      where: {id: req.params.id}
  }
  ).then(categories => {
      res.send({
          message: "success",
          categories
      })
  })
} 

exports.delete = (req, res) => {
  categories
    .destroy({
      where: {
        id: req.body.id
      }
    })
    .then(categories => {
      if (categories == 1) {
        res.send({
          categories,
          isDestroyed: true,
          isFav: false
        });
      } else {
        res.send({
          isDestroyed: false
        });
      }
    });
};
