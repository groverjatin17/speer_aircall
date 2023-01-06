import React from "react";
import ReactDOM from "react-dom/client";
import "./css/body.css";
import "./css/app.css";
import "./css/header.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import router from "./routes";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("app")).render(
  <Provider store={store}>
    {/* <RouterProvider router={router} /> */}
    <App />
  </Provider>
);
