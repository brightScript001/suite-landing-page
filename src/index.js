import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import "./style.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to measure performance, report the metrics to the analytics server
reportWebVitals();
