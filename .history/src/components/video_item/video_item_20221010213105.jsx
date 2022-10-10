import React from "react";
import style from "./video_item.module.css";

const VideoItem = ({ video: { snippet } }) => (
  <>
    <li>
      <img
        className="thumbnails"
        src={snippet.thumbnails.medium.url}
        alt="video thimbnail"
      />
      <div>
        <p className="title">{snippet.title}</p>
        <p className="channel">{snippet.channelTitle}</p>
      </div>
    </li>
  </>
);
export default VideoItem;
