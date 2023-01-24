import React from "react";
import HOC from "./HOC";
const ClickCounter = (props) => {
  const { Counter, UpdateCounter } = props;
  console.log(props);
  return (
    <div>
      <h1> ClickCounter</h1>
      <h2>{Counter}</h2>
      <button onClick={UpdateCounter}>Click button</button>
    </div>
  );
};

export default HOC(ClickCounter);
