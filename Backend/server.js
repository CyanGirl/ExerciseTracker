const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//using middlewares
app.use(cors());
app.use(express.json());

//connecting DB
const uri = process.env.ATLAS_URI;
mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => {
    console.log("Connected to DB");
  }
);
const connection = mongoose.connect;

//importing routes
const exerciseRouter = require("./routes/exerciseRoute");
const userRouter = require("./routes/userRoutes");

//making the routes used and telling the routes appending
app.use("/exercise", exerciseRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server running at :${port}`);
});
