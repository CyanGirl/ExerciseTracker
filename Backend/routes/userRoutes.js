const express = require("express");
const router = express.Router();

//importing model schema of user
const User = require("../models/users");

//for normally showing all users
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error"));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;

  //making a instance of user object schema to be added
  const newUser = new User({ username });

  //saving it to Atlas
  newUser
    .save()
    .then(() => res.json("User Added!"))
    .catch((err) => res.status(400).json("Error"));
});

module.exports = router;
