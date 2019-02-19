import React from 'react'
import Timer from './Timer'

class Board extends React.Component {
  constructor() {
    super()
    this.state = {
      board: [],
      timer: 0,
      randomCell: 0,
    }
  }

  initializeCell = () => {
    // console.log(`board1: ` + this.state.board[0])
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
    // console.log(`cell row: ` + cell[0].row)
    // console.log(`cell column: ` + cell[0].column)
    // console.log(`cell value: ` + cell[0].value)
    this.setState({
      board: cell       
    })
  }
  
  componentDidMount() {
    this.initializeCell()
  }

  onTimeOut = () => {
    clearInterval(this.interval)
  }

  onTick = () => {
    if(this.state.timer < 15) {
      this.increaseTimer()
      this.getRandomCell()
      this.modifyCell()
    }
    else {
      console.log(`Time up...`)
    }
  }

  getRandomCell = () => {
    let randCell = 0
    randCell = Math.floor(Math.random() * 9)
    this.setState({
      randomCell: randCell
    })
  }

  increaseTimer = () => {
    this.setState({
      timer: this.state.timer +1,
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

  render() {
    const {board, randomCell, timer} = this.state
    return(
      <div className="Board">
        <div className="status">
        {randomCell}
        <div>{timer}</div>
          <Timer onTimeOut = {this.onTimeOut} onTick = {this.onTick}/>
            <div className="row">
              {board[0] && board[0].value === 1 ? <div>Mole</div> : <div>No mole</div>}
              {board[1] && board[1].value === 1 ? <div>Mole</div> : <div>No mole</div>}
              {board[2] && board[2].value === 1 ? <div>Mole</div> : <div>No mole</div>}
              </div>
              <div className="row">
              {board[3] && board[3].value === 1 ? <div>Mole</div> : <div>No mole</div>}
              {board[4] && board[4].value === 1 ? <div>Mole</div> : <div>No mole</div>}
              {board[5] && board[5].value === 1 ? <div>Mole</div> : <div>No mole</div>}
              </div>
              <div className="row">
              {board[6] && board[6].value === 1 ? <div>Mole</div> : <div>No mole</div>}
              {board[7] && board[7].value === 1 ? <div>Mole</div> : <div>No mole</div>}
              {board[8] && board[8].value === 1 ? <div>Mole</div> : <div>No mole</div>}
            </div>
        </div>
      </div>
    )
  }
}

export default Board