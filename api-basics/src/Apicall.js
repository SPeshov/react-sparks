import React, { Component } from 'react';

import axios from 'axios';
// https://www.reddit.com/r/space.json

export default class Apicall extends Component {
  componentWillMount() {
    this.getReddit();
  }

  getReddit() {
    axios.get(`https://www.reddit.com/r/${this.state.subr}.json`).then(res => {
      const posts = res.data.data.children.map(obj => obj.data);

      this.setState({ posts });
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      subr: 'space'
    };

    this.getReddit = this.getReddit.bind(this);
  }

  render() {
    var postCount = 0;

    return (
      <div>
        <h1>
          {this.state.subr} | {postCount}
        </h1>
        <ul>
          {this.state.posts.map(post => {
            return <li key={post.id}>pp</li>;
            postCount = postCount++;
          })}
        </ul>
      </div>
    );
  }
}
