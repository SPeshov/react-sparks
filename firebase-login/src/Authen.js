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
    const password = this.refs.password.value;
    console.log(email, password);

    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, password);

    //TODO: handle login promise

    promise.then(user => {
      console.log(user);

      var lout = document.getElementById('logout');
      lout.classList.remove('hide');
    });

    promise.catch(e => {
      var error = e.message;
      console.log(error);

      this.setState({ err: error });
    });
  }

  /**
   *Sign Up Method
   *
   * @memberof Authen
   */
  signUp() {
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    console.log(email, password);

    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, password);

    promise
      .then(user => {
        console.log(user);
        var err = 'Welcome  ' + user.email;
        firebase
          .database()
          .ref('user/' + user.uid)
          .set({
            email: user.email
          });

        this.setState({ err: err });
      })
      .catch(e => {
        var error = e.message;
        console.log(error);

        this.setState({ err: error });
      });
  }

  /**
   * Logout method
   *
   * @memberof Authen
   */
  logOut() {
    firebase.auth().signOut();
    var lout = document.getElementById('logout');
    this.setState({ err: '' });
    lout.classList.add('hide');

    var google = document.getElementById('google');
    google.classList.remove('hide');
  }

  /**
   *Log in and sign in with google
   *
   * @memberof Authen
   */
  google() {
    var provider = new firebase.auth.GoogleAuthProvider();
    var promise = firebase.auth().signInWithPopup(provider);

    promise.then(result => {
      var user = result.user;
      console.log(result);

      firebase
        .database()
        .ref('user/' + user.uid)
        .set({
          email: user.email,
          name: user.displayName
        });

      this.setState({ err: 'Welcome ' + user.displayName });

      var lout = document.getElementById('logout');
      lout.classList.remove('hide');

      var google = document.getElementById('google');
      google.classList.add('hide');
    });

    promise.catch(e => {
      var err = e.message;

      this.setState({ err: err });
    });

    /*
    * Sing in with redirect resoult
    * un-comment to test it out
    */

    // var provider = new firebase.auth.GoogleAuthProvider();
    // firebase.auth().signInWithRedirect(provider);

    // var promise = firebase.auth().getRedirectResult();

    // promise.then(function(result) {
    //   var user = result.user;
    //   console.log(result);

    //   firebase
    //     .database()
    //     .ref('user/' + user.uid)
    //     .set({
    //       email: user.email,
    //       name: user.displayName
    //     });
    //   this.setState({ err: 'Welcome ' + user.displayName });

    //   var lout = document.getElementById('logout');
    //   lout.classList.remove('hide');

    //   var google = document.getElementById('google');
    //   google.classList.add('hide');
    // });

    // promise.catch(e => {
    //   var err = e.message;

    //   this.setState({ err: err });
    // });
  }

  constructor(props) {
    super(props);

    this.state = {
      err: ''
    };

    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
    this.logOut = this.logOut.bind(this);
    this.google = this.google.bind(this);
  }

  render() {
    return (
      <div>
        <input id="email" ref="email" type="email" placeholder="enter your email" /> <br />
        <input id="password" ref="password" type="password" placeholder="enter your password" /> <br />
        <p>{this.state.err}</p>
        <button onClick={this.login}>Log In</button>
        <button onClick={this.signUp}>Sign Up</button>
        <button onClick={this.logOut} id="logout" className="hide">
          Log Out
        </button>
        <button onClick={this.google} id="google">
          Sign in with google
        </button>
      </div>
    );
  }
}
