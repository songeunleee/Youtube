import React from "react";

const VideoItem = ({ video: snippet }) => (
  <>
    <li>
      <img
        className="thumbnails"
        src={snippet.thumbnails.default.url}
        alt="video thimbnail"
      />
      <div>
        <p className="title">{snippet.title}</p>
        <p className="channel">{snippet.channelTitle}</p>
      </div>
    </li>
  </>
);
export default VideoItem;
