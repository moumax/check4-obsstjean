import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
      <ToastContainer autoClose={1000} />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
