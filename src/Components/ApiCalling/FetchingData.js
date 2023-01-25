import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const FetchingData = () => {
  const [data, setDate] = useState([]);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((response) => setDate(response))
    //   .catch((error) => console.log(error));

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        setDate(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  // console.log(data);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Users Data</h1>
      <div className="div1">
        {data.map((element) => {
          return (
            <div key={element.id} className="div2">
              <span>Name : {element.name}</span>
              <br />
              <span>Username : {element.username}</span>
              <br />
              <span>Email : {element.email}</span>
              <br />
              <span>website :{element.website}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FetchingData;
