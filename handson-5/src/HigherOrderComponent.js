import React, { useState } from "react";

const HigherOrder = (OriginalComp) => {
  const NewComp = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1);
    };
    return (
      <div className="flex">
        <OriginalComp count={count} increment={increment} />
      </div>
    );
  };
  return NewComp;
};

export default HigherOrder;
