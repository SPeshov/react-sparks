import React, { Component } from 'react'

export default class Timer extends Component {

    componentDidMount(){
        setInterval(this.ticker, 1000)
    }

    ticker(){
        this.setState({clock: new Date() - this.props.start});
    }

    constructor(props) {
      super(props)
    
      this.state = {
         clock: 0
      }

      this.ticker = this.ticker.bind(this);
    }    
    

  render() {
    //   console.log(this.props.start);

    var clock = Math.round(this.state.clock / 1000);

    return (
      <div>
          <div>
            You have been on this site for: <br />
            <span>{clock}</span>
            <div>Seconds.</div>
          </div>
      </div>
    )
  }
}
