import React, { Component } from "react";

import { getDefaultCategoryAPI, getNextPageCategoryAPI } from "../api/APIUtils";
import Videos from "../components/videoComponents/Videos";
import Pagination from "../components/paginations/CategoryPagintation";

export default class Category extends Component {
  // kar mide hame chi amaaa safe bandia hanoz doros neshon nemide
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      category_id: this.props.match.params.category_id,
      loading: true,
      currentPage: 1,
      offset: 1
    };
  }

  componentDidUpdate() {
    if (this.props.match.params.category_id !== this.state.category_id) {
      this.setState({
        category_id: this.props.match.params.category_id,
        currentPage: 1,
        offset: 1
      });
      this.getData(this.props.match.params.category_id);
    } else if (this.state.currentPage !== this.state.offset) {
      this.setState({ offset: this.state.currentPage });
      this.getNextPageData(this.state.data.ui.pagingForward);
    }
  }

  componentDidMount() {
    this.getData();
  }

  getNextPageData(url) {
    this.setState({ loading: true });

    getNextPageCategoryAPI(url)
      .then(res => {
        this.setState({ data: res.data, loading: false });
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  getData(category_id = this.props.match.params.category_id) {
    this.setState({ loading: true });

    getDefaultCategoryAPI(category_id)
      .then(res => {
        this.setState({ data: res.data, loading: false });
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  handleIncrease() {
    this.setState({ currentPage: this.state.currentPage + 1 });
  }

  handleDecrease() {
    this.setState({ currentPage: this.state.currentPage - 1 });
  }

  render() {
    const { loading, data, currentPage, category_id } = this.state;

    return (
      <div className="video-section">
        {loading ? (
          <div className="loading-container">
            <img
              className="loading-screen"
              src="https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif"
              alt="Loading..."
            />
          </div>
        ) : (
          <React.Fragment>
            <h2 className="video-title">{this.props.match.params.name}</h2>
            <div className="videos">
              <Videos videos={this.state.data.categoryvideos} />
            </div>
            <Pagination
              paginate={data.ui}
              currentPage={currentPage}
              increment={() => this.handleIncrease()}
              decrement={() => this.handleDecrease()}
              category_id={category_id}
              name={this.props.match.params.name}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}
