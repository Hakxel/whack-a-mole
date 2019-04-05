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
            <h1>Going outside to play?</h1>
            <h3>I have news for you...</h3>
            <h2>There is a mole in the backyard!</h2>
            <h4>Get out there and show me what you can do.</h4>
            <h4>5 points every time you hit it!</h4>
          </div>
          <div className="button-wrapper">
            <button onClick={this.handleButtonClick}>GO!</button>
          </div>        
        </div>
        {this.state.redirect && <Redirect to="/board" />}
      </div>
    );
  }
}

export default Game;
