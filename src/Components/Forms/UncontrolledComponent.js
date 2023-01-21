import React, { useRef } from "react";

function UncontrolledComponent() {
  const nameRef = useRef();
  const emailRef = useRef();
  function onSubmit(e) {
    e.preventDefault();
    console.log(e);
    console.log(nameRef);
    console.log("Name value: " + nameRef.current.value);
    console.log("Email value: " + emailRef.current.value);
  }

  return (
    <div>
      <h1>Uncontrolled Component</h1>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" ref={nameRef} required />
        <input type="email" name="email" ref={emailRef} required />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default UncontrolledComponent;
