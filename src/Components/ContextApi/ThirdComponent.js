import React, { useContext } from "react";
import FourthComponent from "./FourthComponent";
import { Data } from "./FirstComponent";
import { Age } from "../../App";
const ThirdComponent = () => {
  const name = useContext(Data);
  const age = useContext(Age);
  return (
    <div>
      ThirdComponent : Name : {name} Age : {age}
      <FourthComponent />
    </div>
  );
};

export default ThirdComponent;
