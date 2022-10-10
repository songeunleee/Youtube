import React from "react";

const VideoItem = (props) => (
  <>
    <li>
      <img
        className="thumbnails"
        src={props.video.snippet.thumbnails.default.url}
        alt="video thimbnail"
      />
      <div>
        <div className="title">{props.video.snippet.title}</div>
        <div className="channel">{props.video.snippet.channelTitle}</div>
      </div>
    </li>
  </>
);
export default VideoItem;
