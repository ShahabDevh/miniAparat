import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import MainPage from "./MainPage";
import "./style/index.css";

ReactDOM.render(
  <Router>
    <MainPage />
  </Router>,
  document.getElementById("root")
);

