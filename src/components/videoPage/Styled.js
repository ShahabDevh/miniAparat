import styled from "styled-components";

export const VideoSidebarWarper = styled.div`
  & > p {
    background: #f5f5f9;
    padding: 10px 8px;
    font-size: 15px;
  }

  & > div {
    height: 475px;
    overflow: hidden scroll;
  }

  .sc-fzozJi {
    display: flex;
    width: 100%;

    video {
      width: 160px;
    }
  }
`;

export const Video = styled.div`
  iframe {
    width: 100%;
    height: 400px;
  }

  .video-intro {
    display: flex;
    justify-content: space-between;

    & span {
      margin-left: 4px;
      font-weight: 400;
    }

    & h1 {
      font-size: 18px;
    }
  }

  .detail-row {
    margin-top: 10px;
    display: flex;
    padding-bottom: 10px;
    border-bottom: 1px solid #e5e5e5;

    .user-info {
      padding-right: 8px;
      font-size: 12.6px;
      font-weight: 400;
    }
  }

  .description p {
    margin-top: 20px;
    color: #5d5d5d;
    font-size: 14px;
  }
`;
