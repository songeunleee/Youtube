import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import Youtube from "./service/youtube";
import axios from "axios";

const httpClient = (this.youtube = axios.create({
  baseURL: `https://youtube.googleapis.com/youtube/v3`,
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
}));
const root = ReactDOM.createRoot(document.getElementById("root"));
const youtube = new Youtube(httpClient);
root.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>
);
