import React from 'react'
import {Redirect} from 'react-router-dom'
import TimeUpNotice from './TimeUpNotice'
import './styles/Board.css'

class Board extends React.Component {
  constructor() {
    super()
    this.state = {
      board: [],
      timer: 0,
      randomCell: 0,
      points: 0,
      start: false,
      timeUp: false,
      redirect: false,
    }
  }

  initializeCell = () => {
    let cell = []
    let key = 0
    for ( let i = 1; i < 4; i++ ) {
      for ( let j = 1; j< 4; j++ ) {
        key += 1
        cell.push({
          key: key,
          row: i,
          column: j,
          value: 0,
        })
      }
    }
    this.setState({
      board: cell,
      start: true,       
    })
    this.interval = setInterval(() => this.onTick(), 1000);
  }
  
  onStart = () => {
    if (this.state.start === false) {
      this.resetBoard()
      this.initializeCell()
    }
  }

  componentDidMount(){
    this.onStart()
  }

  onTimeOut = () => {
    let finalValues = this.state.board.slice()
    for ( let i = 0; i < 9; i++) {
      finalValues[i].value = 0
    }
    this.setState({
      board: [...finalValues],
      start: false,
      timeUp: true,
    })
  }

  setRedirect = () => {
    clearInterval(this.interval)
    this.setState({
      redirect: true,
    })   
  }

  updateGame = () => {
    if(this.state.timer < 15) {
      this.getRandomCell()
      this.modifyCell()
    } else {
      this.onTimeOut()
    }
    if(this.state.timer > 18) {
      this.setRedirect()        
    }    
  }

  onTick = () => {
    this.setState({
      timer: this.state.timer +1,
    })
    this.updateGame()
  }  

  resetBoard() {
    this.setState({
      board: [],
      timer: 0,
      countDown: 15,
      randomCell: 0,
      points: 0,
      start: false,
      timeUp: false,
      redirect: false,
    })
  }

  getRandomCell = () => {
    let randCell = 0
    randCell = Math.floor(Math.random() * 9)
    this.setState({
      randomCell: randCell
    })
  }
 
  modifyCell = () => {
    let newCellValue = []
     
    let selectedCell = this.state.randomCell || 0
    newCellValue = this.state.board.slice()
    let value = newCellValue[selectedCell].value
    for (let i = 0; i < 9; i++) {
      if(i === selectedCell){
        newCellValue[selectedCell].value = (value === 0) ? 1 : 0
      }
      else {
        newCellValue[i].value = 0
      }
    }
    this.setState({
      board: [...newCellValue]
    })
  }

  onMoleClick = () => {
    if(this.state.timer < 15) {
      this.setState({
        points: this.state.points +5
      })
    }
    else {
      console.log(`Game over`)
    }
  }

  render() {
    const {board, timer} = this.state
    const countDown = 15 - timer
    return(
      <div className="game-area">
        <div className="status">
          <div className="game-text">TIME LEFT: {countDown >= 0 ? countDown : 0} s</div>
        </div>
        <div className="board">
          <div className="row">
            {board[0] && board[0].value === 1 ? 
            <div className="with-mole" onClick={this.onMoleClick}><img className="mole-img" src="cartoon-mole.png" alt="cartoon mole"/></div> : 
            <div className="no-mole"></div>}

            {board[1] && board[1].value === 1 ? 
            <div className="with-mole" onClick={this.onMoleClick}><img className="mole-img" src="cartoon-mole.png" alt="cartoon mole"/></div> : 
            <div className="no-mole"></div>}

            {board[2] && board[2].value === 1 ? 
            <div className="with-mole" onClick={this.onMoleClick}><img className="mole-img" src="cartoon-mole.png" alt="cartoon mole"/></div> : 
            <div className="no-mole"></div>}
          </div>
          <div className="row">
            {board[3] && board[3].value === 1 ? 
            <div className="with-mole" onClick={this.onMoleClick}><img className="mole-img" src="cartoon-mole.png" alt="cartoon mole"/></div> : 
            <div className="no-mole"></div>}

            {board[4] && board[4].value === 1 ? 
            <div className="with-mole" onClick={this.onMoleClick}><img className="mole-img" src="cartoon-mole.png" alt="cartoon mole"/></div> : 
            <div className="no-mole"></div>}

            {board[5] && board[5].value === 1 ? 
            <div className="with-mole" onClick={this.onMoleClick}><img className="mole-img" src="cartoon-mole.png" alt="cartoon mole"/></div> : 
            <div className="no-mole"></div>}
          </div>            
          <div className="row">
            {board[6] && board[6].value === 1 ? 
            <div className="with-mole" onClick={this.onMoleClick}><img className="mole-img" src="cartoon-mole.png" alt="cartoon mole"/></div> : 
            <div className="no-mole"></div>}

            {board[7] && board[7].value === 1 ? 
            <div className="with-mole" onClick={this.onMoleClick}><img className="mole-img" src="cartoon-mole.png" alt="cartoon mole"/></div> : 
            <div className="no-mole"></div>}

            {board[8] && board[8].value === 1 ? 
            <div className="with-mole" onClick={this.onMoleClick}><img className="mole-img" src="cartoon-mole.png" alt="cartoon mole"/></div> : 
            <div className="no-mole"></div>}
          </div>
        {this.state.timeUp && <TimeUpNotice />}
        </div>
        {this.state.redirect && <Redirect to={{ pathname: '/score', state: {points: `${this.state.points}`}}} />}
      </div>
    )
  }
}

export default Board