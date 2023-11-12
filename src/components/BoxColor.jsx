import React from 'react';

function BoxColor(props) {
  const backgroundStyle = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    border: 'solid 1px',
    margin: '1vh',
    height: '10vh',
  };

  return (
    <div style={backgroundStyle}>
      <p>
        rgb ({props.r}, {props.g}, {props.b})
      </p>
    </div>
  );
}

export default BoxColor;
