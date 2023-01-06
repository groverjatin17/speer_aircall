import React from "react";
import ReactDOM from "react-dom/client";
import "./css/body.css";
import "./css/app.css";
import "./css/header.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("app")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
