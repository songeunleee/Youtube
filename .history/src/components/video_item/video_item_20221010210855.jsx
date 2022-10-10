import React from "react";

const VideoItem = (props) => (
  <>
    <div className="box">
      <img src={props.video.snippet.thumbnails.default.url} alt="" />
      <div className="title">{props.video.snippet.title}</div>
      <div className="channel">{props.video.snippet.channelTitle}</div>
    </div>
  </>
);
export default VideoItem;
