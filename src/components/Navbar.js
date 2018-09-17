import React from 'react';
import Guess from './Guess'
import Scoreboard from './Scoreboard'

const Navbar = (props) => (

<nav className="navbar navbar-dark bg-primary fixed-top">
  <a className="navbar-brand" href="#">Clicky Game</a>
  <ul className="nav justify-content-center">
  {
    props.guess ? <Guess guess={props.guess}/> : <li className="navbar-text">Click an image to begin!</li>
  }
  </ul>
  <ul className="nav justify-content-end">
  <Scoreboard score={props.score} total={props.total}/>
  </ul>
</nav>
)

export default Navbar;
