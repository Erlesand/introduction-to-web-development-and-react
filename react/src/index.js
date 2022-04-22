import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import reportWebVitals from "./reportWebVitals";

// ...
// // Uncomment an example to run it.
// import App from "./examples/01-sample/App";
// import App from "./examples/02-components/App";
// import App from "./examples/03-jsx-and-props/App";
// import { App } from "./feed";
// import { App } from "./todo";
// import App from "./examples/04-keys/App";
// import App from "./examples/05-use-state/App";
// import App from "./examples/06-use-effect/App";
import App from "./examples/07-error-boundary/App";
// import { App } from './useEffect';
// import { App } from './dependencyContext';
// import { App } from './auth';
// import { App } from './reduxCounter';
// import { App } from './authRedux';

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
