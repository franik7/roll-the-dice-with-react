import React from 'react';
import Dice from './Dice';

function App() {
  function handleClick() {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    alert(`You rolled ${rollResult}!`);
  }

  return <Dice onClick={handleClick}/>;
}

export default App;
