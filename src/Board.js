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
    for ( let i = 0; i < 9; i++) {
      cell.push({
        row: i,
        column: i,
        value: 0,
      })
    }
    // console.log(`cell row: ` + cell[0].row)
    // console.log(`cell column: ` + cell[0].column)
    // console.log(`cell value: ` + cell[0].value)
    this.setState({
      board: cell       
    },
    function(){
      this.interval = setInterval(this.modifyCell, 2000)
    }
    )
  }
  
  componentDidMount() {
    this.initializeCell()
    // console.log(`board: ` + this.state.board[0].value)
  }

  onTimeOut = () => {
    clearInterval(this.interval)
  }

  increaseTimer = () => {
    this.setState({
      timer: this.state.timer +1
    })
  }
 
  modifyCell = () => {
    let newCellValue = []
    let randCell = 0
    if (this.state.timer < 15) {

      randCell = Math.floor(Math.random() * 10)
      this.setState({
        randomCell: randCell
      },
      function() {      
        let selectedCell = this.state.randomCell || 0
        // console.log(`cell value: ` + selectedCell)
        newCellValue = this.state.board.slice()
        let value = newCellValue[selectedCell].value
        // console.log(`new value1: ` + newCellValue[selectedCell].value)
        newCellValue[selectedCell].value = (value === 0) ? 1 : 0
        // console.log(`new cell value: ` + newCellValue[selectedCell].value)
        // console.log(`new cell row : ` + newCellValue[selectedCell].row)
        // console.log(`new cell column: ` + newCellValue[selectedCell].column)
        this.setState({
          board: [...newCellValue]
        })
      })
    } 
    else {
      clearInterval(this.interval)
      console.log(`Time up...`)
    }
  }

  render() {
    const {board, randomCell, timer} = this.state
    return(
      <div className="Board">
        <div className="status">
        {randomCell}
        <div>{timer}</div>
          {(timer < 15) && <Timer onTimeOut = {this.onTimeOut} increaseTimer = {this.increaseTimer}/>}
            {/* <div>
              {board[0] && board[randomCell].value === 1 ? <div>Mole</div> : <div>No mole</div>}
              {board[1] && board[randomCell].value === 1 ? <div>Mole</div> : <div>No mole</div>}
              {board[2] && board[randomCell].value === 1 ? <div>Mole</div> : <div>No mole</div>}
              </div>
              <div>
              {board[3] && board[randomCell].value === 1 ? <div>Mole</div> : <div>No mole</div>}
              {board[4] && board[randomCell].value === 1 ? <div>Mole</div> : <div>No mole</div>}
              {board[5] && board[randomCell].value === 1 ? <div>Mole</div> : <div>No mole</div>}
              </div>
              <div>
              {board[6] && board[randomCell].value === 1 ? <div>Mole</div> : <div>No mole</div>}
              {board[7] && board[randomCell].value === 1 ? <div>Mole</div> : <div>No mole</div>}
              {board[8] && board[randomCell].value === 1 ? <div>Mole</div> : <div>No mole</div>}
            </div> */}
            {board[0] && board[randomCell].value === 1 ? <div>Mole</div> : <div>No mole</div>}
        </div>
      </div>
    )
  }
}

export default Board