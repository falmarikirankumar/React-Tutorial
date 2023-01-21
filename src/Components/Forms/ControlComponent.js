// import React, { useState } from "react";

// const ControlComponent = () => {
//   const [name, setName] = useState("");
//   function onSubmit(e) {
//     e.preventDefault();
//     if (name.length < 6) {
//       alert("Please Enter More Than 6 Characters");
//     } else {
//       console.log("Name : ", name, " ", name.length);
//     }
//   }
//   return (
//     <div>
//       <h1>ControlComponent Form</h1>
//       <form action="">
//         <input
//           type="text"
//           name="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <button type="submit" onClick={onSubmit}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ControlComponent;

import React, { useState } from "react";

function ControlComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function onSubmit(e) {
    e.preventDefault();
    console.log("Name value: " + name);
    console.log("Email value: " + email);
  }

  return (
    <div>
      <h1>Controlled Component </h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />

        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ControlComponent;
