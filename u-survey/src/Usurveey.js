import React, { Component } from 'react';
import { isNullOrUndefined } from 'util';
import { POINT_CONVERSION_UNCOMPRESSED } from 'constants';
var firebase = require('firebase');
var uuid = require('uuid');

var config = {
  apiKey: 'AIzaSyDcKNSSbm9HngYbDpqLq0FoNq4_EZlwlbI',
  authDomain: 'usurvey-1befe.firebaseapp.com',
  databaseURL: 'https://usurvey-1befe.firebaseio.com',
  projectId: 'usurvey-1befe',
  storageBucket: 'usurvey-1befe.appspot.com',
  messagingSenderId: '714221046420'
};
firebase.initializeApp(config);

export default class Usurveey extends Component {
  nameSubmit() {
    var studentName = this.refs.name.value;
    this.setState({ studentName: studentName }, function() {
      console.log('studentName: ', this.state);
    });
  }

  qustionsSubmit() {
    firebase
      .database()
      .ref('uSurvey/' + this.state.uid)
      .set({
        studentName: this.state.studentName,
        answers: this.state.answers
      });

    this.setState({ isSubmited: true });
  }
  answerSelected(event) {
    var answers = this.state.answers;

    if (event.target.name == 'answer1') {
      answers.answer1 = event.target.value;
    } else if (event.target.name == 'answer2') {
      answers.answer2 = event.target.value;
    }

    this.setState({ answers: answers }, () => {
      console.log(this.state);
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      uid: uuid.v1(),
      studentName: '',
      answers: {
        answer1: '',
        answer2: ''
      },
      isSubmited: false
    };

    this.nameSubmit = this.nameSubmit.bind(this);
    this.qustionsSubmit = this.qustionsSubmit.bind(this);
    this.answerSelected = this.answerSelected.bind(this);
  }

  render() {
    var studentName;
    var questions;

    if (this.state.studentName === '' && this.state.isSubmited === false) {
      studentName = (
        <div>
          <h1>Hey Student let us your name</h1>
          <form onSubmit={this.nameSubmit}>
            <input className="namy" type="text" placeholder="Enter your name" ref="name" />
          </form>
        </div>
      );
      questions = '';
    } else if (this.state.studentName !== '' && this.state.isSubmited === false) {
      studentName = <h1>Welcome to our survey, {this.state.studentName}</h1>;
      questions = (
        <div>
          <h2>Here are some questions: </h2>
          <form onSubmit={this.qustionsSubmit}>
            <div className="card">
              <label>What kind of courses you like most: </label> <br />
              <input type="radio" name="answer1" value="Technology" onChange={this.answerSelected} /> Technology
              <input type="radio" name="answer1" value="Design" onChange={this.answerSelected} /> Design
              <input type="radio" name="answer1" value="BIO" onChange={this.answerSelected} /> BIO
            </div>
            <div className="card">
              <label>You are a: </label> <br />
              <input type="radio" name="answer2" value="Student" onChange={this.answerSelected} /> Student
              <input type="radio" name="answer2" value="Developer" onChange={this.answerSelected} /> Developer
              <input type="radio" name="answer2" value="Random" onChange={this.answerSelected} /> Random
            </div>
            <input type="submit" className="feedback-button" value="Submit" />
          </form>
        </div>
      );
      console.log();
    } else if (this.state.isSubmited === true && this.state.studentName !== '') {
      studentName = <h3>Thanks for your submision {this.state.studentName}</h3>;
    }

    return (
      <div>
        {studentName}
        -----------------------------------------
        <br />
        {questions}
      </div>
    );
  }
}
