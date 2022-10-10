import React from "react";

const VideoItem = (props) => (
  <>
    <img src={props.video.snippet.thumbnails.default.url} alt="" />;
    <div>{props.video.snippet.title}</div>;
    <div>{props.video.snippet.channelTitle}</div>;
  </>
);
export default VideoItem;
