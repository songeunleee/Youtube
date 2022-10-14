import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import Youtube from "./service/youtube";

const root = ReactDOM.createRoot(document.getElementById("root"));
const youtube = new Youtube("sdf");
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
