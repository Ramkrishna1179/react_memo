import { useState } from "react";
import Child from "./Components/Child";
import ChildwithMemo from "./Components/Childwith_Memo";
function App() {
  const [Count, setCount] = useState(["parent data"]);
  const [childCount, setchildCount] = useState(["Child data"]);
  const AddParent = () => {
    setCount([...Count, "new parent data"]);
  };

  const AddChild = () => {
    setchildCount([...childCount, "new child data"]);
  };

 

  return (
    <div className="App">
    <ChildwithMemo />
      <Child sendData={childCount} />
      {Count.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}

      <button onClick={AddParent}>Add parent data</button>
      <button onClick={AddChild}>Add child data</button>
    </div>
  );
}
export default App;
// <button onClick={ChildMemo}>Check ChildwithMemo</button>
// const ChildMemo = ()=>{   
//   }