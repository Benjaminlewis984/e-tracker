import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar.component.js";
import ExercisesList from "./components/exercises-list.component.js";
import CreateExercise from "./components/create-exercise.component.js";
import EditExercise from "./components/edit-exercise.component.js";
import CreateUser from './components/create-user.component.js';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
      </div>
      <br />
      <Route path="/" component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
