// import react from "react";
import "./App.css";
// import FirstStyle from "./Components/FirstStyle";
// import { NamedExport1, NamedExport2 } from "./Components/NamedExport";
import CheckStatus from "./Components/Conditional/CheckStatus";
import Prepbyte from "./Components/Conditional/Prepbyte";

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
    <div>
      {/* <CheckStatus status={true} /> */}
      <Prepbyte />
    </div>
  );
};

export default App;
