import React from 'react'
import Student from './Student';
function App() {
  const h1 = <h1>Hello World</h1>;
  const mystyle={
    color: "red",
    backgroundColor: "yellow"
  }
  return (
    <div style={{backgroundColor: 'cyan'}}>
      {h1}
      <div style={mystyle}>ABES Engineering College</div>
      <div>
        <Student college="ABES Engineering College"
          name="Ankit"
          pic={
            <img src="https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png"/>
          }
          branch="CSE"
          roll="12345678"
          section="A"/>
      </div>
    </div>
    
  );
}

export default App;