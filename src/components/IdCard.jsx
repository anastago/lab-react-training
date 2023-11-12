import React from 'react';

function IdCard(props) {
  const row = {
    display: 'flex',
    border: 'solid 1px',
    margin: '1vh',
    alignItems: 'center',
    justifyContent: 'flex-Start',
  };
  return (
    <div style={row}>
      <div>
        <img src={props.picture} alt="profile"></img>
      </div>
      <div>
        <h3>
          First name: <span className="light">{props.firstName}</span>
        </h3>
        <h3>
          Last name: <span className="light">{props.lastName}</span>
        </h3>
        <h3>
          Gender: <span className="light">{props.gender}</span>
        </h3>
        <h3>
          Height: <span className="light">{props.height} m</span>
        </h3>
        <h3>
          Birth: <span className="light">{props.birth}</span>
        </h3>
      </div>
    </div>
  );
}

export default IdCard;
