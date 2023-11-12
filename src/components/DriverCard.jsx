import React from 'react';
import Rating from './Rating';

function DriverCard(props) {
  const backgroundStyle = {
    backgroundColor: `blue`,
    border: 'solid 1px',
    margin: '1vh',
    height: '25vh',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
  };
  return (
    <div style={backgroundStyle}>
      <img
        src={props.img}
        alt="profile"
        style={{
          height: '10vh',
          width: '10vh',
          borderRadius: '50%',
          margin: 'auto 0',
        }}
      />
      <div>
        <h3> {props.name} </h3>
        <Rating>{props.rating}</Rating>

        <p>
          {' '}
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
