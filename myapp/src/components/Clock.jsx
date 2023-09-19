import React from 'react';
import './App.css';

class Clock extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      date: new Date(),
      locale: 'bn-BD',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.interval = setInterval(() => {
     this.tick()
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  tick(){
    this.setState({
      date: new Date(),
    })
  }

  handleClick(){
    this.setState({
      locale: 'en-US',
    })
  }
  
  render(){

    const { date, locale } = this.state;

    return (
    <>
      <h1 className="text">
      {date.toLocaleTimeString(locale)}
      </h1>
      <button type="button" onClick={this.handleClick}>
        Click Here
      </button>
    </>
  )
  }
}


export default Clock
