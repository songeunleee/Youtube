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
        <p className="title">{props.video.snippet.title}</p>
        <p className="channel">{props.video.snippet.channelTitle}</p>
      </div>
    </li>
  </>
);
export default VideoItem;
