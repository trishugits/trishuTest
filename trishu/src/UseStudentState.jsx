import React, { useState } from 'react';

function UseStudentState() {
  const [count, setCount] = useState(20);

  // Function to increment the count
  function doIncrement() {
    setCount(count + 1);
  }

  function doDecrement(){
    setCount(count - 1);
  }

  return (
    <div 
      style={{
        display: 'flex',             
        justifyContent: 'center',    
        alignItems: 'center',        
        height: '100vh'             
      }}
    >
      <div 
        style={{
          border: '2px solid blue', 
          padding: '10px', 
          height: '450px', 
          width: '350px', 
          textAlign: 'center',  
          fontSize: '45px',
          backgroundColor: 'pink', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center'
        }}
      >
        <div 
          style={{
            marginBottom: '20px' // Adds space between the number and the button
          }}
        >
          {count}
        </div>
        <button 
          onClick={doIncrement} // Calls the reusable increment function
          style={{
            padding: '10px 20px', 
            fontSize: '18px', 
            cursor: 'pointer', 
            backgroundColor: 'blue', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            marginBottom: '10px'
          }}
        >
          Increment
        </button>
        <button 
          onClick={doDecrement} // Example: Shows the current count
          style={{
            padding: '10px 20px', 
            fontSize: '18px', 
            cursor: 'pointer', 
            backgroundColor: 'green', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px'
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default UseStudentState;
