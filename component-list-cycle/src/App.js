import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Component life cycle</h1>
        </header>
        <Body />
      </div>
    );
  }
}

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      r: Math.random()
    };
  }
  getRandomNum() {
    this.state.r = Math.floor(Math.random() * 100, 2);
    this.setState(this.state);
  }

  render() {
    return (
      <div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and fdsfsdf.
        </p>
        <button onClick={this.getRandomNum.bind(this)}>Random Number</button>
        <Numbers myNumber={this.state.r} />
      </div>
    );
  }
}

class Numbers extends Component {
  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps(newProps) {
    newProps = 52;

    // if (newProps < 50) {
    //   this.state.r = 999;
    //   this.setState(this.state);
    // }

    console.log('componentWillReceiveProps: ', newProps);
  }

  shouldComponentUpdate(newProps, nextState) {
    console.log('shouldComponentUpdate: newProps->', newProps);
    console.log('shouldComponentUpdate: nextState->', nextState);
    if (newProps < 50) {
      newProps = 777;
      nextState = 999;
    }
    return true;
  }

  componentWillUpdate(newProps, nextState) {
    console.log('componentWillUpdate: ');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return <div>{this.props.myNumber}</div>;
  }
}

export default App;
