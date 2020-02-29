import React, { useState, useEffect } from "react";

import { getVideoTagAPI } from "../api/APIUtils";
import Videos from "../components/videoComponents/Videos";
import * as S from "./Styled"; // S = Style

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
    <S.VideoSection className="video-section">
      <h2>ویدیوهای محبوب</h2>
      <div className="videos">
        <Videos videos={data.videobytag} />
      </div>
    </S.VideoSection>
  );
};

export default VideoSection;
