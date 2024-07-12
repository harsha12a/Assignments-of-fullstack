import "./Parent.css";
import Child from "../Child/Child";
import { useState } from "react";
function Parent() {
  const [cnt, setCnt] = useState(10);
  return (
    <div className="cont">
      <h1>Parent</h1>
      <h3 className="box">Counter = {cnt}</h3>
      <Child x={{ cnt, setCnt }} />
    </div>
  );
}
export default Parent;
