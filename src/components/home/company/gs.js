import React from "react";
import Nav from "../../nav/nav";
import gs from "../../../images/gs.png";
import "./company.css";
import company from "../company";

function Gs() {
  return (
   
    <div>
     
      <Nav />
      <div className="header">
        <img className="header-img" src={gs} alt="Error" />
        <div className="company-name">
          <h1>Goldman Sachs</h1>
        </div>
      </div>
      <div className="info">
        <div className="info-heading">
          <h1> Internship and Full Time</h1>
        </div>
        <div className="info-text">
          The Goldman Sachs Group, Inc. is an American multinational investment
          bank and financial services company headquartered in New York City.<br></br>
          Goldman Sachs visits the campus in mid August.<br></br>
          <br></br>
          <span className="text-span"> ELIGIBILE COURSES :</span> CSE, IT,
          ECE, EE, EI Students <br></br>
          <span className="text-span">ELIGIBILITY CRITERIA : </span> 7 CGPA &
          Above in the current course only ( aggregate of all semesters till the
          last semester read ). <br></br>
          <span className="text-span"> NUMBER OF ROUNDS :</span> 3 ( 1 Coding
          Round and 2 Technical Rounds )<br></br>
          Coding Round was of 2hrs 15 mins and had 5 sections.<br></br>
          <span className="text-span"> Section 1 :</span> 2 Coding Questions ( 30
          mins ) <br></br>
          <span className="text-span"> Section 2 :</span> Quant Aptitude ( 20
          mins ) <br></br>
          <span className="text-span"> Section 3 :</span> 1 Hard Coding Question
          ( 45 mins )<br></br>
          <span className="text-span"> Section 4 :</span> 2 Subjective Questions
          ( 15 mins )<br></br>
          <span className="text-span"> Section 5 :</span> 8 CS Fundamentals MCQs
          ( 25 mins ) <br></br><br></br>
          Technical rounds were of 1 hour and had coding questions as well as
          questions based on resume.
        </div>
      </div>

      <div className="question-heading">
        <h1>Questions</h1>

      </div>
    </div>
  );
}

export default Gs;
