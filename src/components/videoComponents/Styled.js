import styled from "styled-components";

export const Video = styled.div`
  margin: 8px;
  width: 23.7%;

  .tooltip-container {
    position: relative;

    & div {
      position: absolute;
      bottom: 16px;
      left: 10px;
      border-radius: 8px;
      padding: 0px 4px;
      min-width: 40px;
      background: #1a1919;
      color: #fff;
      font-size: 13px;
      text-align: center;
    }

    video {
      background-image: url(${props => props.bg});
      background-size: cover;
      width: 100%;
      height: auto;
    }
  }

  .video-info {
    h1 {
      font-weight: 300;
      font-size: 18px;
      color: #484b62;
      min-height: 24px;
    }

    p {
      font-size: 13px;
      padding-top: 8px;
      color: #858898;
    }
  }
`;

export const LoadingScreen = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;
