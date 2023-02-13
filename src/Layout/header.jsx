import React from "react";
import logo from "../images/react.png";

function MainHeader(){
    return(
      <div className="pt-3 pl-2" style={{backgroundColor: "black"}}>
        <img src={logo} style={{height: "35px", verticalAlign: "top"}}></img> 
        <span className="h2 pt-4 text-white-50"> React Course - TaskOpedia</span>      
      </div>
    )
  }
  
  const subHeaderStyle={
    color: "blueviolet",
    backgroundColor:"lightgray"
  }
  
  function SubHeader(){
    return(
      <div>
        <p style={subHeaderStyle} className="text-center">This will be an exciting course</p>        
      </div>
    )
  }
  
 class Header extends React.Component {
    render(){
      return(
      <div>
        <div><MainHeader /></div>
        <div><SubHeader /></div>
      </div>);
    }
}

  export default Header;