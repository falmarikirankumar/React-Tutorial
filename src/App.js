// import react from "react";
import "./App.css";
// import FirstComponent from "./Components/ContextApi/FirstComponent";
import { createContext } from "react";
// import ClickCounter from "./Components/HigherOrderComponent/ClickCounter";
// import MouseOverCounter from "./Components/HigherOrderComponent/MouseOverCounter";
// import ControlComponent from "./Components/Forms/ControlComponent";
// import UncontrolledComponent from "./Components/Forms/UncontrolledComponent";
// import FirstStyle from "./Components/FirstStyle";
// import { NamedExport1, NamedExport2 } from "./Components/NamedExport";
// import CheckStatus from "./Components/Conditional/CheckStatus";
// import Prepbyte from "./Components/Conditional/Prepbyte";
// import RouteFile from "./Components/Routings/RouteFile";
import FetchingData from "./Components/ApiCalling/FetchingData";

const Age = createContext();
const App = () => {
  // const Name = "Kirankumar";
  // const age = 22;

  return (
    // FirstStyle
    // <div>
    //   <FirstStyle name={Name} age={age} />
    //   <h1>Hello Kirankumar</h1>
    //   <div className="con-1">
    //     <div className="box-1">
    //       <button>. component Button</button>
    //     </div>
    //     <div className="box-1">
    //       <button>Class component Button</button>
    //     </div>
    //   </div>
    //   <NamedExport1 />
    //   <NamedExport2 />
    // </div>
    // <div>
    //   {/* <CheckStatus status={true} /> */}
    //   <Prepbyte />
    // </div>
    // <div>
    // {/* <RouteFile /> */}
    // {/* </div> */}

    // <div>
    //   <Age.Provider value={age}>
    //     <FirstComponent />
    //   </Age.Provider>
    // </div>
    // <>
    //   <ControlComponent />
    //   <UncontrolledComponent />
    // </>
    <>
      {/* <ClickCounter />
      <MouseOverCounter /> */}
      <FetchingData />
    </>
  );
};

export { Age };
export default App;
