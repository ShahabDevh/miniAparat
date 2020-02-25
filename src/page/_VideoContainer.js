import React, { Component } from "react";

import { getVideoHashAPI } from "../api/APIUtils";
import VideoSidebar from "../components/videoPage/VideoSidebarContainer";
import Video from "../components/videoPage/Video";

export default class VideoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      uid: ""
    };
  }

  componentDidUpdate() {
    if (this.props.match.params.uid !== this.state.uid) {
      this.setState({ uid: this.props.match.params.uid });
      this.getData(this.props.match.params.uid);
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData(uid = this.props.match.params.uid) {
    getVideoHashAPI(uid)
      .then(res => {
        this.setState({ data: res.data.video });
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  // kar mide loading vali kheyli maskhare dorosesh kardam
  render() {
    const { data } = this.state;

    if (data.length === undefined) {
      return (
        <div className="video-section">
          <div className="video-row-flex">
            <div className="video-col-r">
              <Video data={data} />
            </div>
            <div className="video-col-l">
              <VideoSidebar videoTag={data.tags} cat_name={data.cat_name} />
            </div>
          </div>
        </div>
      );
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
  }
}
