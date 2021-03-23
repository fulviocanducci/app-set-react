import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import CountProvider from "./context";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <CountProvider>
    <App />
  </CountProvider>,
  document.getElementById("root")
);

reportWebVitals();
