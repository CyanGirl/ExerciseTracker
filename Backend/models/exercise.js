const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ExerSchema = new schema(
  {
    username: { type: String, required: true },
    desc: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

//creating a database named exercise and exporting it
const Exercise = mongoose.model("Exercise", ExerSchema);

module.exports = Exercise;
