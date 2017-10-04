import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddStudent from './AddStudent';
import ViewStudents from './ViewStudents';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Student Rosters</h2>
        </div>
        <Router>
          <div>
        <Link to="/add">Add New Student</Link>
        <Link to="/view">View All Students</Link>
        <hr />
        <Route exact path="/add" component={AddStudent} />
        <Route  exact path="/view" component={ViewStudents}/> 
          </div> 


        </Router>
       
      </div>
    );
  }
}

export default App;
