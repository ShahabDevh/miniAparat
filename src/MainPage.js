import React from "react";
import { Switch, Route } from "react-router";

import Navbar from "./layout/Navbar";
import VideoSection from "./page/_VideoSection";
import VideoContainer from "./page/_VideoContainer";
import Category from "./page/_Category";
import SearchResult from "./page/_SearchResult";

const MainPage = () => {
  return (
    <div className="main-container">
      <Navbar />

      <Switch>
        <Route path="/v/:uid" component={VideoContainer} />
        <Route path="/search" component={SearchResult} />
        <Route path="/category/:name/:category_id" component={Category} />
        <Route path="/" component={VideoSection} />
      </Switch>
    </div>
  );
};

export default MainPage;

