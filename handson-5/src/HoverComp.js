import React from "react";
import HigherOrder from "./HigherOrderComponent";

const HoverComp = ({ count, increment }) => {
  return (
    <div className="flex">
      <h3>Hover Component Count :{count}</h3>
      <button onMouseOver={increment}>Hover </button>
    </div>
  );
};
export default HigherOrder(HoverComp);
