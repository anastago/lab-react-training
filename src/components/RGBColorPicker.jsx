import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

function RGBColorPicker(props) {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleRChange = (value) => {
    setRValue(value);
  };

  const handleGChange = (value) => {
    setGValue(value);
  };

  const handleBChange = (value) => {
    setBValue(value);
  };

  return (
    <div style={{}}>
      <SingleColorPicker color="R" value={rValue} onChange={handleRChange} />

      <SingleColorPicker color="G" value={gValue} onChange={handleGChange} />

      <SingleColorPicker color="B" value={bValue} onChange={handleBChange} />
      <div
        style={{
          width: '10rem',
          height: '10rem',
          backgroundColor: `rgb(${rValue},${gValue},${bValue})`,
        }}
      ></div>
    </div>
  );
}

export default RGBColorPicker;
