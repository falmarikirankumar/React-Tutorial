import React from "react";
import { useLocation } from "react-router-dom";

const SecondComponent = () => {
  const data = useLocation();
  const name = data.state.Name;
  const age = data.state.Age;
  console.log(data);
  return (
    <div>
      SecondComponent
      <p>{name}</p>
      <p>{age}</p>
    </div>
  );
};

export default SecondComponent;
