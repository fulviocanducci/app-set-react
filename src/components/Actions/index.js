import React from "react";
import { useCountByDecrement, useCountByIncrement } from "../../context";

function Actions() {
  const increment = useCountByIncrement();
  const decrement = useCountByDecrement();
  return (
    <div>
      <button onClick={increment}>Increment</button>{" "}
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Actions;
