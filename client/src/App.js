import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddBaby from './AddBaby';
import ViewWords from './ViewWords';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Baby's First Words</h2>
        </div>
        <Router>
          <div>
        <Link to="/add">Add New Baby</Link>
        <Link to="/view">View All Words</Link>
        <hr />
        <Route exact path="/add" component={AddBaby} />
        <Route  exact path="/view" component={ViewWords}/> 
          </div> 


        </Router>
       
      </div>
    );
  }
}

export default App;
