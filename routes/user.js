const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize } = require("sequelize");
const router = express.Router();


//Model
const models = require("../models");

//All users
router.get("/", (req, res) => {
  models.User.findAll()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => console.log(err));
});

//  Create User
router.post("/create-user", async (req, res) => {
  const result = req.body;
  console.log(result);

  const user_name = models.User.create({
    id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  })
    .then((user) => res.redirect("/"))
    .catch((err) => res.render("error", { error: err.message }));
});

module.exports = router;