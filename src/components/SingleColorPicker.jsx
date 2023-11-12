import React from 'react';

function SingleColorPicker(props) {
  const handleValue = (event) => {
    props.onChange(event.target.value);
  };

  const style = {
    border: 'solid 1px',
    margin: '2rem',
    height: '5rem',
    width: '5rem',
    display: 'flex',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `rgb(${props.color === 'R' ? props.value : 0}, ${
      props.color === 'G' ? props.value : 0
    }, ${props.color === 'B' ? props.value : 0})`,
  };

  return (
    <div>
      <div style={style}>
        <label style={{ margin: '4rem' }}>{props.color}</label>

        <input
          style={{}}
          type="number"
          min={0}
          max={255}
          value={props.value}
          onChange={handleValue}
        />
      </div>
    </div>
  );
}

export default SingleColorPicker;
