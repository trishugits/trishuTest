import React, { useState } from 'react';
import img from './assets/Screenshot 2023-11-24 195129.png';

function ImageManipulation() {
  const [rotation, setRotation] = useState(0);
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(200);
  const [bgColor, setBgColor] = useState('white');

  const handleBackgroundColorChange = () => {
    const colors = ['white', 'lightblue', 'lightgreen', 'pink', 'yellow', 'orange'];
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(newColor);
  };

  const handleRotate = () => {
    setRotation(rotation + 90); 
  };

  const enhanceWidth = () => {
    setWidth(width + 50); 
  };

  const enhanceHeight = () => {
    setHeight(height + 50); 
  };

  const reduceWidth = () => {
    if (width > 50) setWidth(width - 50);
  };

  const reduceHeight = () => {
    if (height > 50) setHeight(height - 50); 
  };

  return (
    <div
      style={{
        textAlign: 'center',
        backgroundColor: bgColor,
        padding: '20px',
        transition: 'background-color 0.5s',
      }}
    >
      <div style={{ display: 'inline-block', transform: `rotate(${rotation}deg)` }}>
        <img src={img} alt="Manipulated" width={width} height={height} />
      </div>
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={handleBackgroundColorChange}
          style={{
            padding: '10px',
            margin: '5px',
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Change Background
        </button>
        <button
          onClick={handleRotate}
          style={{
            padding: '10px',
            margin: '5px',
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Rotate Image
        </button>
        <button
          onClick={enhanceWidth}
          style={{
            padding: '10px',
            margin: '5px',
            backgroundColor: 'orange',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Enhance Width
        </button>
        <button
          onClick={enhanceHeight}
          style={{
            padding: '10px',
            margin: '5px',
            backgroundColor: 'purple',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Enhance Height
        </button>
        <button
          onClick={reduceWidth}
          style={{
            padding: '10px',
            margin: '5px',
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Reduce Width
        </button>
        <button
          onClick={reduceHeight}
          style={{
            padding: '10px',
            margin: '5px',
            backgroundColor: 'brown',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Reduce Height
        </button>
      </div>
    </div>
  );
}

export default ImageManipulation;
