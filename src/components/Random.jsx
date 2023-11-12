import React from 'react';

function Random(props) {
  const min = props.min;
  const max = props.max;

  const randomNumber = Math.floor(Math.random() * (max - min) + min);

  return (
    <div>
      <p>
        Random value between {min} and {max} => {randomNumber}
      </p>
    </div>
  );
}

export default Random;
