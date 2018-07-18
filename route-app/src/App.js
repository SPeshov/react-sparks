import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Router Class</h1>
        </header>
        <ul>
          <li>
            <Link to="/one">One</Link>
            <Link to="/two">Two</Link>
            <Link to="/three">Three</Link>
            <Link to="/Four">Four</Link>
          </li>
        </ul>

        {this.props.children}
      </div>
    );
  }
}

export default App;
