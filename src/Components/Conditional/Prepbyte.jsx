import React from "react";

const Prepbyte = () => {
  const CodeMore = true;
  //   const CodeMore = false;
  return (
    <div>
      <div style={{ textAlign: "center", fontSize: "25px" }}>
        Hello!! We are here from Prepbytes
      </div>
      {/* <div>{CodeMore && <h5>We Will Placed in Company</h5>}</div> */}
      <div>
        {CodeMore ? (
          <h5 style={{ backgroundColor: "green" }}>
            We Will Placed in Company
          </h5>
        ) : (
          <h5 style={{ backgroundColor: "red" }}>We Not Placed in Company</h5>
        )}
      </div>
    </div>
  );
};

export default Prepbyte;
