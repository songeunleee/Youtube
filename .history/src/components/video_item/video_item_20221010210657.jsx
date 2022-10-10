import React from "react";

const VideoItem = (props) => (
  <>
    <img src={props.video.snippet.thumbnails.default.url} alt="" />;
    <h1>{props.video.snippet.title}</h1>;
  </>
);
export default VideoItem;
