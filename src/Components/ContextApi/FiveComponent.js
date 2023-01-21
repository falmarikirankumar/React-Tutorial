import React, { useContext } from "react";
import { Data } from "./FirstComponent";
const FiveComponent = () => {
  const Name = useContext(Data);
  return <div>FiveComponent : {Name}</div>;
};

export default FiveComponent;
