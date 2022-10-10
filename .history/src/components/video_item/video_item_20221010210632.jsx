import React from "react";

const VideoItem = (props) => (
  <>
    <h1>{props.video.snippet.title}</h1>;
    <img src={props.video.snippet.thumbnails.default.url} alt="" />;
  </>
);
export default VideoItem;
