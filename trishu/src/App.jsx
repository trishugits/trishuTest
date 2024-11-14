import React from 'react';
import Student from './Student';
import './App.css';

function App() {
  const students = [
    {
      college: "ABES Engineering College",
      name: "Ankit",
      pic: "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png",
      branch: "CSE",
      roll: "12345678",
      section: "A"
    },
    {
      college: "ABES Engineering College",
      name: "Neha",
      pic: "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png",
      branch: "IT",
      roll: "87654321",
      section: "B"
    },
    {
      college: "ABES Engineering College",
      name: "Rohit",
      pic: "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png",
      branch: "ECE",
      roll: "12344321",
      section: "C"
    }
  ];

  return (
    <div className="app-container">
      <h1>Hello World</h1>
      <div className="college-name">ABES Engineering College</div>
      <div className="card-container">
        {students.map((student, index) => (
          <Student key={index} {...student} />
        ))}
      </div>
    </div>
  );
}

export default App;
