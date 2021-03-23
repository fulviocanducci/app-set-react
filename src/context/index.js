import React, { createContext, useContext, useState } from "react";

const CountContext = createContext();

function CountProvider({ children }) {
  const [value, setValue] = useState(0);
  return (
    <CountContext.Provider value={{ value, setValue }}>
      {children}
    </CountContext.Provider>
  );
}

export const useCountGetValue = () => {
  const { value } = useContext(CountContext);
  return value;
};

export const useCountSetValue = () => {
  const { setValue } = useContext(CountContext);
  return setValue;
};

export const useCountByIncrement = () => {
  const { setValue } = useContext(CountContext);
  return () => setValue((state) => state + 1);
};

export const useCountByDecrement = () => {
  const { setValue } = useContext(CountContext);
  return () => setValue((state) => state - 1);
};

export default CountProvider;
