import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.yourname = 'hfoadhsf';

    this.state = {};
  }

  render() {
    const myName = 'Sanny';

    return (
      <div className="App">
        <h2>Just some sample data: {this.yourname}</h2>
      </div>
    );
  }

  sayhello(name) {
    return 'Hello ' + name;
  }
}

export default App;
