import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PropTypes from 'prop-types';

class App extends Component {
  render() {
    console.log(this.props);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Parent />
        <p>{this.props.porpString}</p>
      </div>
    );
  }
}

App.propTypes = {
  propObject: PropTypes.object,
  propString: PropTypes.string,
  propNumber: PropTypes.number
};

App.defaultProps = {
  propNumber: 3,
  porpString: 'This may be any string',
  propObject: {
    obj1: 'I am obj 1',
    obj2: 'I am obj 2',
    obj3: 'I am obj 3',
    obj4: 'I am obj 4'
  }
};

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: ['S_cccc', 'S_bbbbb', 'S_nnnnnn', 'S_fdsafdasf']
    };
  }

  handleClick() {
    this.state.cars.push('hohoho');
    this.setState({ cars: this.state.cars.reverse() });
  }

  render() {
    return (
      <div>
        <h2 onClick={this.handleClick.bind(this)}>Just some info</h2>
        <Cars msg="cars are cool" model="34568" coolCars={this.state.cars} />
      </div>
    );
  }
}

Parent.defaultProps = {
  cars: ['cccc', 'bbbbb', 'nnnnnn', 'fdsafdasf']
};

class Cars extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Im from cars component</h3>
        <p>{this.props.msg}</p>
        <p>{this.props.model}</p>
        <div>
          {this.props.coolCars.map((item, i) => {
            return <p key={i}>{item}</p>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
