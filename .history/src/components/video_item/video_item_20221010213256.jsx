import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video: { snippet } }) => (
  <>
    <li className={styles.}>
      <img
      className={styles.}
        src={snippet.thumbnails.medium.url}
        alt="video thimbnail"
      />
      <div>
        <p className={styles.} >{snippet.title}</p>
        <p className={styles.}> {snippet.channelTitle}</p>
      </div>
    </li>
  </>
);
export default VideoItem;
