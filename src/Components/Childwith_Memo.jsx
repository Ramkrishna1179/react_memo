import React from "react";
import { memo } from "react";

// In app component child and childwithmemo both the components are imported now whenever app components state or props changes then child component is also getting called by itsel which be can confirm by seeing the alert which is present inside child component but the childwithmemo components is not getting called every time whenever App component is getting called because we have prevented the cause of getting called with its parents automatically  with the help of the memo function if we will not take the childwithmemo function inside memo function then the child and childwithmemo both the functions will get called automatically and both the alerts will visible.

const ChildwithMemo = () => {
  return alert("ChildwithMemo is getting called");
};
export default memo(ChildwithMemo);
