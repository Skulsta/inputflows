import React from "react";
import ReactDOM from "react-dom";
import mixpanel from "mixpanel-browser";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const functions = require("firebase-functions");

const initiateMixpanel = () => {
  process.env.NODE_ENV === "production"
    ? mixpanel.init(functions.config().mixpanel.key)
    : mixpanel.init("3efa8020cfd68b36a8a850b6ff26fc95");
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
initiateMixpanel();
