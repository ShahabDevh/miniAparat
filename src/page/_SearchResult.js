import React, { Component } from "react";
import queryString from "query-string";

import { getTagNameAPI } from "../api/APIUtils";
import Videos from "../components/videoComponents/Videos";
import Pagination from "../components/paginations/SearchResultPagination";
import * as S from "./Styled"; // S = Style
import * as G from "../asset/GlobalStyledComponents" // G = GlobalStyle


class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      query: queryString.parse(this.props.location.search),
      loading: true,
      currentPage: 0
    };
  }

  componentDidUpdate() {
    const { q, page } = this.state.query;
    const query = queryString.parse(this.props.location.search).q;

    if (q !== query || page !== this.state.currentPage) {
      this.setState({
        query: queryString.parse(this.props.location.search),
        currentPage: page
      });
      this.getData(query, page);
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData(query = this.state.query.q, offset = 0) {
    this.setState({ loading: true });

    getTagNameAPI(offset, query)
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
    const { query, data, loading, currentPage } = this.state;

    if (loading) {
      return (
        <G.LoadingScreen>
          <img
            src="https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif"
            alt="Loading..."
          />
        </G.LoadingScreen>
      );
    } else if (query.q === undefined) {
      return (
        <S.VideoSection className="video-section">
          <h2>Search for something</h2>
        </S.VideoSection>
      );
    } else if (data.videobysearch === null) {
      return (
        <S.VideoSection className="video-section">
          <h2>nothing has been found</h2>
        </S.VideoSection>
      );
    } else {
      return (
        <S.VideoSection className="video-section">
          <h2>نتیحه جست و جو : {query.q}</h2>
          <div className="videos">
            <Videos videos={data.videobysearch} />
          </div>
          <Pagination
            paginate={data.ui}
            currentPage={currentPage}
            query={query.q}
            increment={() => this.handleIncrease()}
            decrement={() => this.handleDecrease()}
          />
        </S.VideoSection>
      );
    }
  }
}

export default SearchResult;
