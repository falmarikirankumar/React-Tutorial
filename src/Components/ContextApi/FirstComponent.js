import React from "react";
import SecondComponent from "./SecondComponent";
import { createContext } from "react";

const Data = createContext();

const FirstComponent = () => {
  const Name = "Kirankumar";
  return (
    <div>
      FirstComponent : {Name}
      <Data.Provider value={Name}>
        <SecondComponent />
      </Data.Provider>
    </div>
  );
};

export default FirstComponent;
export { Data };
