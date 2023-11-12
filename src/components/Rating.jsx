import React from 'react';

const Rating = ({ children }) => {
  const filledStars = Math.ceil(children);
  const emptyStars = 5 - filledStars;

  const filledStar = '★';
  const emptyStar = '☆';

  const starStyle = {
    fontSize: '40px',
  };

  const filled = [];
  const empty = [];

  for (let i = 0; i < filledStars; i++) {
    filled.push(
      <span key={`filled-${i}`} style={starStyle}>
        {filledStar}
      </span>
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    empty.push(
      <span key={`empty-${i}`} style={starStyle}>
        {emptyStar}
      </span>
    );
  }

  return (
    <div>
      {filled}
      {empty}
    </div>
  );
};

export default Rating;
