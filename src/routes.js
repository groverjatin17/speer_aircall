import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import CallDetails from "./components/CallDetails.js";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CallDetails />,
  },
  {
    path: "/callDetails",
    element: <App />,
  },
]);

export default router;
