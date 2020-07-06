require("express-group-routes");

//instantiate express module
const express = require("express");

//use express in app variable
const app = express();
const cors = require('cors')
//init bodyparser
const bodyParser = require("body-parser");
//define the server port
const port = process.env.PORT || 7000;

// const CategoryController = require("./controllers/categories");
const UserController = require("./controllers/users");
// const EventController = require("./controllers/events");
// const OrderController = require("./controllers/orders");
const RumahController = require("./controllers/rumahs");
const LoginController = require("./controllers/login");
const RegistController = require("./controllers/register");


app.use(bodyParser.json());
app.use(cors())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Method", "*");
  next();
});

//create the homepage route
app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.group("/propertz/private/api/v1/", router => {
  //House Listing
  router.get("/rumah", RumahController.showAll);
  router.post("/rumah/:id", RumahController.detail);

  //Login
  router.post("/login", LoginController.login);
  
  //Regist
  router.post("/register", RegistController.register);

  //Add rumah
  router.post("/add", RumahController.insert);




  //get user
  router.get("/admins", UserController.showAll);
  router.post("/admin/:id", UserController.showOne);

  //edit user
  router.put("/change-user-level/:id", UserController.editUser);

  router.delete("/delete-user/:id", UserController.deleteUser);
});

//when the nodejs app exed, make it lesten the port
app.listen(port, () => console.log(`Listening on port ${port}!`));
