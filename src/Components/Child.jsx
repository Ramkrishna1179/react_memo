import React from "react";





//Without using react memo in this child functional component it is calling again and again whenever parent function props or states is getting updating. we can confirm this by seeing the alert which we are giving inside child component. 
const Child = () => {
  return alert("Child is gettting called");
};
export default Child;
