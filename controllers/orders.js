const models = require("../models");
const orders = models.orders;
const users = models.users;
const events = models.events;
const { Op } = require("sequelize");


exports.buy = (req, res) => {
  orders.create(req.body).then(users => {
    res.send({
      message: "success"
    });
  });
};

exports.showConfirmed = (req, res) => {
  const buyer_id = req.body.buyer_id;
  orders
    .findAll({
      include: [
        {
          model: events,
          as: "event"
        },
        {
          model: users,
          as: "user"
        }
      ],
      where: { buyer_id, status: "Confirmed" }
    })
    .then(orders => res.send(orders));
};


exports.showPending = (req, res) => {
  const buyer_id = req.body.buyer_id;
  orders
    .findAll({
      include: [
        {
          model: events,
          as: "event"
        },
        {
          model: users,
          as: "user"
        }
      ],
      where: { buyer_id, 
        status: {[Op.or]: ["Booked", "Pending"]} }
    })
    .then(orders => res.send(orders));
};


exports.pay = (req, res) => {
    orders.update(
        {
            status: req.body.status
        },
        {
        where: {id: req.params.id}
    }
    ).then(orders => {
        res.send({
            message: "success",
            orders
        })
    })
} 