import React, { useState, useEffect } from "react";

import { getVideoTagAPI } from "../api/APIUtils";
import Videos from "../components/videoComponents/Videos";

const VideoSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    getVideoTagAPI()
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  return (
    <div className="video-section">
      <h2 className="video-title">ویدیوهای محبوب</h2>
      <div className="videos">
        <Videos videos={data.videobytag} />
      </div>
    </div>
  );
};

export default VideoSection;
