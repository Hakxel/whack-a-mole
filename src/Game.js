import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import './Game.css'

class Game extends Component {
  constructor(){
    super()
    this.state = {
      redirect: false
    }
  }

  handleButtonClick = (e) => {
    e.preventDefault()
    this.setState({
      redirect: true
    })
  }

  render() {
    return (
      <div className="game">
        <div className="intro-wrapper">
          <div className="intro">
            <h1>Going out to play?</h1>
            <h3>Oh, I have news for you...</h3>
            <h2>There is a mole invasion in the yard!</h2>
            <h3>Grab a hammer and let's get them all...</h3>
          </div>
          <div className="button-wrapper">
            <button onClick={this.handleButtonClick}>Let's get'em!</button>
          </div>        
        </div>
        {this.state.redirect && <Redirect to="/board" />}
      </div>
    );
  }
}

export default Game;
