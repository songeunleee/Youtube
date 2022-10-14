import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import Youtube from "./service/youtube";

const httpClient = (this.youtube = axios.create({
  baseURL: `https://youtube.googleapis.com/youtube/v3`,
  params: { key: key },
}));
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>
);
