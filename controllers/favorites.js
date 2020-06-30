const models = require("../models");
const events = models.events;
const favorites = models.favorites;
const users = models.users;


exports.showAll = (req, res) => {
  favorites
    .findAll({
      include: [
        {
          model: events,
          as: "event"
        }
      ],
      where: {
        user_id: req.params.id
      }
    })
    .then(favorites => res.send(favorites));
};


exports.ShowIsFavorited = (req, res) => {
  favorites.findOne({
    where: {
      user_id: req.body.user_id,
      event_id: req.body.event_id
    }
  })
  .then(favorites => {
    if (favorites === null) {
      res.send({
        isFav: false
      });

    } else {
    res.send({
      favorites,
      isFav: true
    });
    }
  })
}


exports.deleteFav = (req, res) => {
  favorites.destroy({
    where: {
      user_id: req.body.user_id,
      event_id: req.body.event_id
    }
  })
  .then(favorites => {
    if( favorites == 1){
    res.send({
      favorites,
    isDestroyed: true,
    isFav: false
  })  
    } else {
    res.send({
    isDestroyed: false
  })}
  });
}

exports.addFav = (req, res) => {
  favorites.create(req.body).then(favorites => {
    res.send({
      message: "success",
      isFav: true
    })
  })
}