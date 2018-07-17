import React, { Component } from 'react'

export default class Postpreview extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }   

  render() {
    return (
      <div>
        <div className="post-preview">
            <a href="post.html">
              <h2 className="post-title">
              {this.props.title}
              </h2>
              <h3 className="post-subtitle">
              {this.props.subtitle}
              </h3>
            </a>
            <p className="post-meta">Posted by
              <a href="#">{this.props.meta.author}</a>
              on {this.props.meta.date}</p>
          </div>
      </div>
    )
  }
}



Postpreview.defaultProps = {
    title: "Man must explore, and this is exploration at its greatest",
    subtitle: 'Problems look mighty small from 150 miles up',
    meta: {
      date: '24, 2018',
      author: 'Start Bootstrap2'      
    }
  };
