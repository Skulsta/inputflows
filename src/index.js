import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import mixpanel from "mixpanel-browser";
import { ThemePicker } from "./utilities/ThemePicker";

const { REACT_APP_MIXPANEL_DEV, REACT_APP_MIXPANEL_PROD } = process.env;

const initiateMixpanel = () => {
  process.env.NODE_ENV === "production"
    ? mixpanel.init(REACT_APP_MIXPANEL_PROD)
    : mixpanel.init("3efa8020cfd68b36a8a850b6ff26fc95");
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
ThemePicker();
initiateMixpanel();
