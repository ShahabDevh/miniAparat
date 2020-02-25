import React, { useState, useEffect } from "react";

import Videos from "../videoComponents/Videos";
import { getSidebarListAPI } from "../../api/APIUtils";

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
    <div>
      <p className="sidebar-title">
        ویدیوهای مشابه :<br />
        {props.videoTag.length === 0 ? props.cat_name : props.videoTag[0].name}
      </p>
      <div className="video-sidebar">
        <Videos videos={data.videobytag} />
      </div>
    </div>
  );
};

export default VideoSidebarContainer;
