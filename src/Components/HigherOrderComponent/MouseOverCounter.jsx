import React from "react";
import HOC from "./HOC";
const MouseOverCounter = (props) => {
  // console.log(props);
  const { Counter, UpdateCounter } = props;

  return (
    <div>
      <h1>MouseOverCounter</h1>
      <h2>{Counter}</h2>
      <button onMouseOver={UpdateCounter}>Mouse Over</button>
    </div>
  );
};

export default HOC(MouseOverCounter);
