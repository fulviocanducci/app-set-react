import React from "react";
import { useCountGetValue } from "../../context";

function Score() {
  const count = useCountGetValue();
  return <h3>{count}</h3>;
}

export default Score;
