import { useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]); //useState, useEffect -> 리액트훅에서 설명해줌
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAOYM6BsGM6PHnP_eKO7Cur7dBMG0u1ovU",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  const handleAdd = (name) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResult=25&q=${name}&key=AIzaSyAOYM6BsGM6PHnP_eKO7Cur7dBMG0u1ovU`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  };
  return (
    <div className={styles.app}>
      <SearchHeader onAdd={handleAdd} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
