import React from "react";
import { Link } from "react-router-dom";
import CalculateTime from "./CalculateTime";

const Videos = ({ videos }) => {
  if (videos) {
    return videos.map(item => {
      return (
        <div key={item.id} className="video">
          <Link to={`/v/${item.uid}`}>
            <div className="tooltip-container">
              <div className="tooltip">
                <CalculateTime time={item.duration} />
              </div>
              <video
                className="preview"
                style={{ backgroundImage: `url(${item.small_poster})` }}
              ></video>
            </div>
          </Link>
          <div className="video-info">
            <p className="videos-title">{item.title}</p>
            <p className="video-name">{item.sender_name}</p>
          </div>
        </div>
      );
    });
  } else {
    return (
      <div className="loading-container">
        <img
          className="loading-screen"
          src="https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif"
          alt="Loading..."
        />
      </div>
    );
  }
};

export default Videos;
