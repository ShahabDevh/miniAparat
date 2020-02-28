import React from "react";
import * as S from "./Styled";

const Video = ({ data }) => {
  return (
    <S.Video>
      <iframe
        allowFullScreen={true}
        title="video-frame"
        src={data.frame}
      ></iframe>

      <div className="video-intro">
        <h1>{data.title}</h1>
        <i className="fas fa-eye">
          <span>{data.visit_cnt}</span>
        </i>
      </div>

      <div className="detail-row">
        <img src={data.profilePhoto} alt="username-pic" />
        <div className="user-info">
          <p>{data.sender_name}</p>
        </div>
      </div>

      <div className="description">
        <p>{data.description}</p>
      </div>
    </S.Video>
  );
};

export default Video;
