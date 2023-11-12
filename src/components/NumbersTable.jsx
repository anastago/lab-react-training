import React from 'react';

function NumbersTable(props) {
  const numbers = [];
  for (let i = 1; i <= props.limit; i++) {
    // Checking if the number is even to determine the CSS class
    const isEven = i % 2 === 0;
    const style = {
      backgroundColor: isEven ? 'red' : 'white',
      border: 'solid 1px',
      margin: '1vh',
      height: '5vh',
      width: '5vh',
      display: 'flex',
      color: 'black',
      justifyContent: 'center',
      alignItems: 'center',
    };

    numbers.push(
      <div key={i} style={style}>
        {i}
      </div>
    );
  }

  return (
    <div className="numbers-table" style={{ display: 'flex' }}>
      {numbers}
    </div>
  );
}
export default NumbersTable;
