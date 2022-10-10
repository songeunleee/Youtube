import React from "react";

const VideoItem = (props) => (
  <>
    <img src={props.video.snippet.thumbnails.default.url} alt="" />;
    <sapn>{props.video.snippet.title}</sapn>;
  </>
);
export default VideoItem;
