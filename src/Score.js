import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Score.css'

class Score extends Component {
  
  render(){
    let score = this.props.location.state.points
    return(
      <div className="score">
        <div className="score-wrapper">
          <div className="result">
            {score <= 25 && <div className="result-message one">
              <h3>Looks like you could still use some practice...</h3>
              <h2>{score} Points</h2>
              <h3>I'm sure you can do better next time!</h3>
            </div>}
            {score > 25 && score <= 50 && <div className="result-message two">
              <h3>Pretty good job there, rookie...</h3>
              <h2>{score} Points</h2>
              <h3>Keep it up and you can get very far!</h3>
            </div>}
            {score > 50 && <div className="result-message three">
              <h3>You are a superstar...</h3>
              <h2>{score} Points</h2>
              <h3>Show'em who's the boss!</h3>
            </div>}
          </div>
          <h4><Link to='/' className="game-text">Play again</Link></h4>
        
        </div>
      </div>
    )
  }
}

export default Score