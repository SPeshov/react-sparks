import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Courseseales from './Courseseales'

class App extends Component {
  render() {

    var courses = [
      {name: 'Complete IOS dev course', price: 199},
      {name: 'Complete WIN dev course', price: 13},
      {name: 'Complete ANg dev course', price: 98},
      {name: 'Complete fas dev course', price: 65},
      {name: 'Complete Ifdas OS dev course', price: 77}
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Course Purchase Page</h1>
        </header>
       <Courseseales items={courses} />
      </div>
    );
  }
}

export default App;
