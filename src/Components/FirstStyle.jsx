import React from "react";
import "./FirstStyle.css";

function FirstStyle(props) {
  //   const style = {
  //     color: "green",
  //     backgroundColor: "yellow",
  //   };
  console.log(props);
  const name = props.name;

  const Clicked = () => {
    alert("Button Clicked !");
  };

  const Over = () => {
    alert("Hover is Done !");
  };
  return (
    // <div style={{ backgroundColor: "yellow", color: "red" }}>
    //   FirstStyle
    //   <h2 style={{ backgroundColor: "purple" }}>Kirankumar</h2>
    // </div>

    // <div style={style}>
    //   FirstStyle
    //   <h2>Kirankumar</h2>
    // </div>

    <div className="fist">
      FirstStyle
      <h2>Falmari</h2>
      <button onClick={Clicked}>Click me</button>
      <div>
        <h1>
          Name : {name} and Age : {props.age}
        </h1>
        <h1>{props.name}</h1>
        <h5 onMouseOver={Over}>Hover ME!</h5>
      </div>
    </div>
  );
}

export default FirstStyle;
