import { useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]); //useState, useEffect -> 리액트훅에서 설명해줌

  const search = (query) => {
    youtube
      .search(query) //
      .then((result = setVideos(items)));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(setVideos(items));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
