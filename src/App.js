import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Game from './Game'
import Board from './Board'
import Score from './Score'

const App = () => {
  return(
    <Router>
      <div>
        <Route exact path="/" component={Game}></Route>
        <Route path="/board" component={Board}></Route>
        <Route path="/score" component={Score}></Route>
      </div>
    </Router>
  )
}

export default App