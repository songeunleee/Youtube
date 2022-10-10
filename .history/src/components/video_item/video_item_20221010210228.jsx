import React from "react";

const VideoItem = (props) => (
  <>
    <h1>{props.video.snippet.title}</h1>;
    <img src="" alt="" props.video.snippet.thumbnails />;
  </>
);
export default VideoItem;
