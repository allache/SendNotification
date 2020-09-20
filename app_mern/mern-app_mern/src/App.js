import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./component/navbar.component"
import {ExercisesList,Comp}  from "./component/exercises-list.component";
//import EditExercise from "./component/edit-exercise.component";
//import CreateExercise from "./component/create-exercise.component";
import CreateUser from "./component/create-user.component";
//import CreateDriver from "./component/create-driver.component"
import serch_create_file from "./component/serch_create_file.component"
//import CreateRader from "./component/create-rader.component"

////import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <Router>
    <div className="container">
      <Navbar />
      <br/>
  
      <Route path="/" exact component={ExercisesList} />
  
      <Route path="/a" exact component={Comp} />
      <Route path="/user" component={CreateUser} />
      <Route path="/drivers" component={serch_create_file} />
      

   

      </div>
    </Router>
  );
}

export default App;
