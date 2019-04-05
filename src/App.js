import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Game from './Game'
import Board from './Board'
import Score from './Score'
import './styles/Media.css'

const App = () => {
  return(
    <Router>
        <Route exact path="/" component={Game}></Route>
        <Route path="/board" component={Board}></Route>
        <Route path="/score" component={Score}></Route>
    </Router>
  )
}

export default App