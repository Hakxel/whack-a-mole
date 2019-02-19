import React, { Component } from 'react';
import './Game.css';
import Board from './Board'

class Game extends Component {
  render() {
    return (
      <div className="game">
        Whack-a-mole
        <Board />
      </div>
    );
  }
}

export default Game;
