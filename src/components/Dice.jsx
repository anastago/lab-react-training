import React, { useState } from 'react';
import emptyDice from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

const diceImages = [emptyDice, dice1, dice2, dice3, dice4, dice5, dice6];

function Dice() {
  const [currentImage, setCurrentImage] = useState(0);

  const handleClick = () => {
    setCurrentImage(0);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * 6) + 1;
      setCurrentImage(randomIndex);
    }, 1000);
  };

  return (
    <img
      style={{ height: '20vh' }}
      src={diceImages[currentImage]}
      alt="dice"
      onClick={handleClick}
    />
  );
}

export default Dice;
