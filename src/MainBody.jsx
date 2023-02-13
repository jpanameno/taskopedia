import Student from './Components/Student/student';
import StudedntReview from './Components/Student/StudentReview';
import React from "react";

class MainBody extends React.Component{
    render(){
      const whatWeWillLearn = "React JS";
      const totalLecture = 3;
      return(
        <div style={{minHeight:"70vh"}}>
          <p>In this course, we will learn {whatWeWillLearn} by building TaskOpedia<br/>Total Lecture - {totalLecture}</p>
          <ul>
            <li>Basic Foundation</li>
            <li>Functional and Class Components</li>
          </ul>
          {/* <div>
            Enter Task: <input maxLength={5} readOnly={false} placeholder="Enter Task"></input>
          </div> */}
        <div className="row">Students Enrolled</div>
        <Student experience={2} name="Kris Walley" headshot="https://api.lorem.space/image/face?w=150&h=150"><StudedntReview/></Student>
        <Student experience={5} name="Angel Patrice" headshot="https://api.lorem.space/image/face?w=150&h=151"><StudedntReview/></Student>
        <Student experience={7} name="Rene parker" headshot="https://api.lorem.space/image/face?w=150&h=152" />
        </div>
      );
      }
  }

  export default  MainBody;