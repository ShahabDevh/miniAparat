import styled from "styled-components";

export const VideoSection = styled.div`
  width: 80%;
  margin-top: 90px;
  padding: 0 16px;
  float: left;
  transition: width 0.5s ease-out;

  @media screen and (max-width: 1130px) {
    max-width: 75%;
    width: 73%;
  }

  &.active {
    width: 100%;
  }

  h2 {
    color: #484b62;
    min-height: 24px;
  }

  .videos {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
  }

  .video-row {
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    .col-r {
      flex-basis: 70%;
      margin-left: 24px;
    }

    .col-l {
      flex-basis: 30%;
    }
  }
`;


