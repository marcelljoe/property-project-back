const models = require("../models");
const events = models.events;
const categories = models.categories;
const users = models.users;
const { Op } = require("sequelize");

var startDate = new Date();
var endDate = new Date();
endDate.setDate(new Date().getDate() + 1);

exports.showAll = (req, res) => {
  events.findAll({}).then(events => res.send(events));
};

exports.showById = (req, res) => {
  events
    .findAll({
      include: [
        {
          model: categories,
          as: "category"
        },
        {
          model: users,
          as: "user"
        }
      ],
      where: {
        category_id: req.params.id
      }
    })
    .then(events => res.send(events));
};



exports.insert = (req, res) => {
  events.create(req.body).then(events => {
    res.send({
      message: "success",
      events
    });
  });
};

exports.search = (req, res) => {
  events
    .findAll({
      include: [
        {
          model: categories,
          as: "category"
        },
        {
          model: users,
          as: "user"
        }
      ],
      where: {
        title: req.params.keyword,
        $or: [{ events: { like: "%" + keyword + "%" } }]
      }
    })
    .then(events => res.send(events));
};

exports.showByCurDate = (req, res) => {
  events
    .findAll({
      include: [
        {
          model: categories,
          as: "category"
        },
        {
          model: users,
          as: "user"
        }
      ],
      where: {
        [Op.or]: [
          {
            startTime: {
              [Op.between]: [startDate, endDate]
            }
          }
        ]
      }
    })
    .then(events => res.send(events));
};

exports.showUpcoming = (req, res) => {
  events
    .findAll({
      include: [
        {
          model: categories,
          as: "category"
        },
        {
          model: users,
          as: "user"
        }
      ],
      where: {
        endTime: {
          [Op.gt]: endDate
        }
      }
    })
    .then(events => res.send(events));
};

exports.detail = (req, res) => {
  events
    .findOne({
      include: [
        {
          model: categories,
          as: "category"
        },
        {
          model: users,
          as: "user"
        }
      ],
      where: {
        id: req.params.id
      }
    })
    .then(events => res.send(events));
};