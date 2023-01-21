import React, { useContext } from "react";
import FourthComponent from "./FourthComponent";
import { Data } from "./FirstComponent";

const ThirdComponent = () => {
  const name = useContext(Data);
  return (
    <div>
      ThirdComponent : {name}
      <FourthComponent />
    </div>
  );
};

export default ThirdComponent;
