import React from "react";
import './student.css';

function Student(props) {
  return (
    <div className="icard">
      <table>
        <tbody>
          <tr>
            <td colSpan={2}>
              <img src={props.pic} alt="Student" width="100" />
            </td>
          </tr>
          <tr><td>College: {props.college}</td></tr>
          <tr><td>Name: {props.name}</td></tr>
          <tr><td>Branch: {props.branch}</td></tr>
          <tr><td>Roll No: {props.roll}</td></tr>
          <tr><td>Section: {props.section}</td></tr>
        </tbody>    
      </table>
    </div>
  );
}

export default Student;
