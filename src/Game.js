import React, { Component } from 'react';
import './Game.css';
import Board from './Board'

class Game extends Component {
  render() {
    return (
      <div className="game">
        WELCOME TO WHACK-A-MOLE
        <Board />
      </div>
    );
  }
}

export default Game;
