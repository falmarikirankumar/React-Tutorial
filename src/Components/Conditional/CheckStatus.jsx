import React from "react";
import UserLogin from "./UserLogin";
import UserLogOut from "./UserLogOut";

// const CheckStatus = (props) => {
const CheckStatus = ({ status }) => {
  //   return (<div>CheckStatus</div>);
  //   let status = props.status;
  //   if (status === true) {
  //     return <UserLogin />;
  //   } else {
  //     return <UserLogOut />;
  //   }
  status ? <UserLogin /> : <UserLogOut />;
};

export default CheckStatus;
