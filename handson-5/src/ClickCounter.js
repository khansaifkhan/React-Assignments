import React from "react";
import HigherOrder from "./HigherOrderComponent";

const ClickCounter = ({ count, increment }) => {
  return (
    <div className="flex">
      <h3>Higher Order Component Count : {count}</h3>
      <button onClick={increment}> ➕</button>
    </div>
  );
};
export default HigherOrder(ClickCounter);
