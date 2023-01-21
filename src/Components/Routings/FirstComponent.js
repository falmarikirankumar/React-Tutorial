import React from "react";
// import "../../App.css";
// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const FirstComponent = () => {
  return (
    <div>
      FirstComponent
      {/* <h1>FirstComponent</h1> */}
      <Link to="/Second" state={{ Name: "Kiran", Age: 22 }}>
        <p>Click Here to Jump to Second Component !</p>
      </Link>
      <div>
        <Link to="/Third">
          <button>Click Here</button>
        </Link>
      </div>
      <div>
        <Link to="/Td">
          <button>Click Here</button>
        </Link>
        {/* <NavLink
          to="/Second"
          state={{ Name: "Kiran", Age: 22 }}
          activeClassName="active"
        >
          <p>Click Here to Jump to Second Component !</p>
        </NavLink> */}
      </div>
    </div>
  );
};

export default FirstComponent;
