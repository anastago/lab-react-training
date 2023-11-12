import React from 'react';
import profiles from '../data/berlin.json';

function Facebook(props) {
  const row = {
    display: 'flex',
    border: 'solid 1px',
    margin: '1vh',
    height: '12rem',
  };

  return (
    <div>
      {profiles.map((prof, index) => (
        <div style={row} key={index}>
          <div>
            <img
              src={prof.img}
              alt="profile"
              style={{ height: '10rem', width: '10rem' }}
            />
          </div>
          <div>
            <h3>
              First name: <span className="light">{prof.firstName}</span>
            </h3>
            <h3>
              Last name: <span className="light">{prof.lastName}</span>
            </h3>
            <h3>
              Country: <span className="light">{prof.country}</span>
            </h3>
            <h3>
              Type:{' '}
              <span className="light">
                {prof.isStudent ? 'Student' : 'Teacher'}{' '}
              </span>
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Facebook;
