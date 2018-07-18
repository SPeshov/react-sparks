import React, { Component } from 'react';
var firebase = require('firebase');

var config = {
  apiKey: 'AIzaSyC_djauHbooIIiEBO172VfPjzvwmdRKbTM',
  authDomain: 'react-login-test-17b7e.firebaseapp.com',
  databaseURL: 'https://react-login-test-17b7e.firebaseio.com',
  projectId: 'react-login-test-17b7e',
  storageBucket: '',
  messagingSenderId: '614247920373'
};
firebase.initializeApp(config);

export default class Authen extends Component {
  login(event) {
    const email = this.refs.email.value;
    const password = this.refs.email.value;
    console.log(email, password);

    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, password);

    //TODO: handle login promise
    promise.catch(e => {
      var error = e.message;
      console.log(error);

      this.setState({ err: error });
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      err: ''
    };

    this.login = this.login.bind(this);
  }

  render() {
    return (
      <div>
        <input id="email" ref="email" type="email" placeholder="enter your email" /> <br />
        <input id="password" ref="password" type="password" placeholder="enter your password" /> <br />
        <p>{this.state.err}</p>
        <button onClick={this.login}>Log In</button>
        <button>Sign Up</button>
        <button>Log Out</button>
      </div>
    );
  }
}
