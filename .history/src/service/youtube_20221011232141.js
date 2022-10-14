class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  mostPopular() {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAOYM6BsGM6PHnP_eKO7Cur7dBMG0u1ovU",
      this.getRequestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items));
  }
}
