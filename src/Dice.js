import React from 'react';
import './DiceButton.css';

function Dice(props) {
  return (
    <div>
     <button onClick={props.onClick} name="Roll_the_dice" className="dice-button">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        Roll the Dice
      </button>
    </div>
)
}

export default Dice;
