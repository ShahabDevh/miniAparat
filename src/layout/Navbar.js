import React from "react";

import SearchBar from "./searchbar/Searchbar";
import DashboardContainer from "./dashboard/DashboardContainer";
import * as S from "./Styled"; // S = Style
import * as G from "../asset/GlobalStyledComponents" // G = GlobalStyle

const Navbar = () => {
  const handleClick = () => {
    const dashboard = document.querySelector("#dashboard");
    const videoSection = document.querySelector(".video-section");

    if (dashboard.style.right === "0px") {
      dashboard.style.right = "-265px";
      videoSection.classList.add("active");
    } else {
      dashboard.style.right = 0;
      videoSection.classList.remove("active");
    }
  };

  return (
    <S.Navigation>
      <S.NavigationBurgerBar>
        <G.Icon onClick={handleClick} className="fas fa-bars" />
        <DashboardContainer />
      </S.NavigationBurgerBar>
      <SearchBar />
    </S.Navigation>
  );
};
export default Navbar;
