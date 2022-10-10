import React from "react";

const VideoItem = (props) => (
  <>
    <h1>{props.video.snippet.title}</h1>;
    <img src="{props.video.snippet.thumbnails.default}" alt="" />;
  </>
);
export default VideoItem;
