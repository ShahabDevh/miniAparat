import React from "react";
import { Link } from "react-router-dom";
import * as S from "./Styled";

import CalculateTime from "./CalculateTime";

const Videos = ({ videos }) => {
  if (videos) {
    return videos.map(item => {
      return (
        <S.Videos key={item.id} bg={item.small_poster}>
          <Link to={`/v/${item.uid}`}>
            <div className="tooltip-container">
              <div>
                <CalculateTime time={item.duration} />
              </div>
              <video />
            </div>
          </Link>
          <div className="video-info">
            <Link to={`/v/${item.uid}`}>
             <h1>{item.title}</h1>
            </Link>
            <p>{item.sender_name}</p>
          </div>
        </S.Videos>
      );
    });
  } else {
    return (
      <S.LoadingScreen>
        <img
          src="https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif"
          alt="Loading..."
        />
      </S.LoadingScreen>
    );
  }
};

export default Videos;
