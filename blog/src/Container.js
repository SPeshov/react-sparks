import React, { Component } from 'react'
import Postpreview from './Postpreview';

export default class Container extends Component {
  render() {
    return (
      <div>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                <Postpreview/>
                <Postpreview title={"How to tie a tie"} subtitle={"Lorem ispum jdfhaqer pokmak klouiets poerasd kd dqwe"} />
                <Postpreview/>        
                <div className="clearfix">
                    <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
                </div>
                </div>
            </div>
         </div>
    </div>
    )
  }
}
