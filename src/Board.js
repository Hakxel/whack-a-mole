import React from 'react'
import Timer from './Timer'

class Board extends React.Component {
  constructor() {
    super()
    this.state = {
      board: [],
      timer: 0,
    }
  }

  // addTimer = () => {
  //   this.setState({
  //     timer: this.state.timer + 1
  //   })
  // }
  
  // componentDidMount() {
  //   this.initializeCells()
  //   this.board = setInterval(this.randomCells, 1000)
  // }

  // componentWillUnmount() {
  //   clearInterval(this.board)
  // }

  // initializeCells = () => {
  //   let initialBoard = this.state.board.slice()
  //   for(let i = 0; i < 3; i++) {
  //     for(let j = 0; j < 3; j++) {
  //       initialBoard.push(
  //         {
  //         row: i,
  //         column: j,
  //         value: 0
  //         }
  //       )
  //     }
  //   }
  //   console.log(initialBoard)
  //   this.setState({
  //     board: [...initialBoard],
  //   })
  //   console.log(this.state.board)
  // }

  // randomCells = () => {

  //   // let times = 0
  //   let pos = -1

  //   pos = Math.floor(Math.random() * 9)
  //   let tmp = this.state.board[pos]
  //   this.setState(state => {
  //     const board = state.board.map((item, j) => {
  //       if (pos === j) //Si la posicion x que voy es la posicion a cambiar
  //         return {
  //           row: tmp.row,
  //           column: tmp.column,
  //           value: 1
  //         }
  //       else
  //         return item
  //     })
  //     return board;
  //   })
  //   console.log(this.state.board)
  // }

  initializeCell = () => {
    console.log(`board1: ` + this.state.board[0])
    let cell = []
    cell.push({
      row: 0,
      column: 0,
      value: 0,
    })
    console.log(`cell row: ` + cell[0].row)
    console.log(`cell column: ` + cell[0].column)
    console.log(`cell value: ` + cell[0].value)
    this.setState({
      board: cell       
    },
    function(){
      this.interval = setInterval(this.modifyCell, 1000)
    }
    )
  }
  
  componentDidMount() {
    this.initializeCell()
    // console.log(`board: ` + this.state.board[0].value)
  }

  handleClick = (e) => {
    e.preventDefault()
    clearInterval(this.interval)
    // this.modifyCell()
  }

  modifyCell = () => {
    let newCellValue = []
    newCellValue = this.state.board.slice()
    let value = newCellValue[0].value
    console.log(`new value1: ` + newCellValue[0].value)
    newCellValue[0].value = (value === 0) ? 1 : 0
    console.log(`new value2: ` + newCellValue[0].value)
    this.setState({
      board: [...newCellValue]
    }, function() {
      console.log(`new value3: ` + this.state.board[0].value)
      
    })

  }

  render() {
    // const {board} = this.state
    return(
      <div className="Board">
        <div className="status" onClick={this.handleClick}>
          {/* <Timer/> */}
          <div>Click here to stop</div>
          {this.state.board[0] && this.state.board[0].value == 1 ? <div>Mole</div> : <div>No mole</div>}
          <div>
          </div>
        </div>
      </div>
    )
  }
}

export default Board