import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Score.css'

class Score extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div className="scores">
        <div>Final score: {this.props.location.state.points}</div>
        <Link to='/'>Play again</Link>
      </div>
    )
  }
}

export default Score