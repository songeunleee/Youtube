import { useEffect, useState } from "react";
import "./app.css";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=25&key=AIzaSyAOYM6BsGM6PHnP_eKO7Cur7dBMG0u1ovU",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, []);
  return <h1>Hello</h1>;
}

export default App;
