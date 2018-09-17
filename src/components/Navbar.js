import React from 'react';
import Guess from './Guess'
import Scoreboard from './Scoreboard'

const Navbar = () => (

<nav className="navbar navbar-dark bg-primary fixed-top">
  <a className="navbar-brand" href="#">Clicky Game</a>
  <ul className="nav justify-content-center">
  <Guess/>
  </ul>
  <ul className="nav justify-content-end">
  <Scoreboard/>
  </ul>
</nav>
)

export default Navbar;
