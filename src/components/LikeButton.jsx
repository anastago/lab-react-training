import React, { useState } from 'react';

function LikeButton(props) {
  const [like, setLikes] = useState(0);
  const handleClick = () => {
    setLikes((currentLikes) => currentLikes + 1);
  };
  return <button onClick={handleClick}>{like} Likes</button>;
}

export default LikeButton;
