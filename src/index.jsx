import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode> Solo funciona en desarrollo. Al hacer el build lo elimina
  <App />
  // </React.StrictMode>
);
