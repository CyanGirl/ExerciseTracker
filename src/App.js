import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import EditExercise from "./components/editExer";
import CreateExercise from "./components/createExer";
import CreateUser from "./components/createUser";
import ExerciseList from "./components/ExerList";
import AddNote from "./components/addNote";

function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <br />
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
        <Route path="/notes" component={AddNote} />
      </div>
    </Router>
  );
}

export default App;
