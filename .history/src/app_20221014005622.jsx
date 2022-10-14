import { useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]); //useState, useEffect -> 리액트훅에서 설명해줌
  const [selectedVideo, setselectedVideo] = useState(null);

  const selectVideo = (video) => {
    setselectedVideo(video);
  };

  const search = (query) => {
    youtube
      .search(query) //
      .then((items) => setVideos(items));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((items) => setVideos(items));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      {selectedVideo && <VideoDetail video={selectedVideo} />}
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
