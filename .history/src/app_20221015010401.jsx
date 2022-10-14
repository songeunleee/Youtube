import { useEffect, useState } from "react";
import styles from "./app.module.css";
import Loading from "./components/loading";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]); //useState, useEffect -> 리액트훅에서 설명해줌
  const [selectedVideo, setselectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  const selectVideo = (video) => {
    setselectedVideo(video);
  };

  const search = (query) => {
    setselectedVideo(null);
    youtube
      .search(query) //
      .then((items) => {
        setVideos(items);
        setLoading(false);
      });
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((items) => setVideos(items));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      {loading ? (
        <Loading />
      ) : (
        <section className={styles.content}>
          {selectedVideo && (
            <div className={styles.detail}>
              <VideoDetail video={selectedVideo} />
            </div>
          )}
          <div className={styles.list}>
            <VideoList
              videos={videos}
              onVideoClick={selectVideo}
              display={selectedVideo ? "list" : "grid"}
            />
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
