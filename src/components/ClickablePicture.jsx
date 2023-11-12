import React, { useState } from 'react';

function ClickablePicture(props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const imgClicked = props.imgClicked;
  const img = props.img;
  return (
    <img
      style={{ height: '20vh' }}
      src={isClicked ? imgClicked : img}
      alt="portrait"
      onClick={handleClick}
    />
  );
}

export default ClickablePicture;
