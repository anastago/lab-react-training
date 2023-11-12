import React, { useState } from 'react';

function Carousel(props) {
  const [imageIndex, setImageIndex] = useState(0);

  const handleLeftClick = () => {
    setImageIndex(imageIndex > 0 ? imageIndex - 1 : props.images.length - 1);
  };

  const handleRightClick = () => {
    setImageIndex(imageIndex < props.images.length - 1 ? imageIndex + 1 : 0);
  };

  return (
    <div>
      <button onClick={handleLeftClick}>Left</button>
      <img src={props.images[imageIndex]} alt="portrait" />
      <button onClick={handleRightClick}>Right</button>
    </div>
  );
}

export default Carousel;
