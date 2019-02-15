import React from 'react'
import Timer from './Timer'

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: [],
      timer: 0,
    }
  }

  addTimer = () => {
    this.setState({
      timer: this.state.timer + 1
    })
  }
  
  componentDidMount() {
    this.initializeCells()
    this.board = setInterval(this.randomCells, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.board)
  }

  initializeCells = () => {
    let initialBoard = this.state.board.slice()
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        initialBoard.push(
          {
          row: i,
          column: j,
          value: 0
          }
        )
      }
    }
    console.log(initialBoard)
    this.setState({
      board: [...initialBoard],
    })
    console.log(this.state.board)
  }

  randomCells = () => {

    // let times = 0
    let pos = -1

    pos = Math.floor(Math.random() * 9)
    let tmp = this.state.board[pos]
    this.setState(state => {
      const board = state.board.map((item, j) => {
        if (pos === j) //Si la posicion x que voy es la posicion a cambiar
          return {
            row: tmp.row,
            column: tmp.column,
            value: 1
          }
        else
          return item
      })
      return board;
    })
    console.log(this.state.board)
  }

  render() {
    // const {board} = this.state
    return(
      <div className="Board">
        <div className="status">
          <Timer/>
        </div>
        <div className="row">
          {this.state.board[0].value}
          {this.state.board[1].value}
          {this.state.board[2].value}
        </div>
        <div className="row">
          {this.state.board[3].value}
          {this.state.board[4].value}
          {this.state.board[5].value}
        </div>
        <div className="row">
          {this.state.board[6].value}
          {this.state.board[7].value}
          {this.state.board[8].value}
        </div>
      </div>
    )
  }
}

export default Board