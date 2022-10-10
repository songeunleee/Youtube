import React from "react";

const VideoItem = (props) => (
  <>
    <div>
      <img src={props.video.snippet.thumbnails.default.url} alt="" />
      <div>{props.video.snippet.title}</div>
      <div>{props.video.snippet.channelTitle}</div>
    </div>
  </>
);
export default VideoItem;
