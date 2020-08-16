const express = require("express");
const router = express.Router();

//importing the exercise schema to be worked upon
const Exercise = require("../models/exercise");

//creating the API
router.route("/").get((req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error"));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const desc = req.body.desc;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  //creating the new execerice to the data base of exercise
  const newExercise = new Exercise({
    username,
    desc,
    duration,
    date,
  });

  //adding New exercise to database
  newExercise
    .save()
    .then(() => res.json("Exercise added!"))
    .catch((err) => res.status(400).json("Error"));
});

//finding by Id
router.get("/:id", (req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error"));
});

//find and delete by id
router.delete("/:id", (req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then((exercise) => res.json("Exercise Deleted"))
    .catch((err) => res.status(400).json("Error"));
});

//update
router.post("/update/:id", (req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      exercise.username = req.body.username;
      exercise.desc = req.body.desc;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise
        .save()
        .then(() => res.json("Exercise updated!"))
        .catch((err) => res.status(400).json("Error"));
    })

    .catch((err) => res.status(400).json("Error"));
});

module.exports = router;
