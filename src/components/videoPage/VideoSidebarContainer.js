import React, { useState, useEffect } from "react";

import Videos from "../videoComponents/Videos";
import { getSidebarListAPI } from "../../api/APIUtils";
import * as S from "./Styled";

const VideoSidebarContainer = props => {
  // componentDidUpdate(){
  //   if(){
  //     console.log("updated")
  //   }
  // }

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    const name =
      props.videoTag.length === 0 ? props.cat_name : props.videoTag[0].name;

    getSidebarListAPI(name)
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  return (
    <S.VideoSidebarWarper>
      <p>
        ویدیوهای مشابه :<br />
        {props.videoTag.length === 0 ? props.cat_name : props.videoTag[0].name}
      </p>
      <div>
        <Videos videos={data.videobytag} />
      </div>
    </S.VideoSidebarWarper>
  );
};

export default VideoSidebarContainer;
