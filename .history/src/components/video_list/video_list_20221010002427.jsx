import React from "react";
import VideoItem from "../video_item/video_item";

const VideoList = (props) => {
  <ul>
    {props.videos.map((video) => (
      <VideoItem key={video.id} />
    ))}
  </ul>;
};

export default VideoList;
