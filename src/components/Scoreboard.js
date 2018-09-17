import React from 'react';

const Scoreboard = (props) => (
    <li className="navbar-text">Score: {props.score} Top Score: {props.total}</li>
)

export default Scoreboard;