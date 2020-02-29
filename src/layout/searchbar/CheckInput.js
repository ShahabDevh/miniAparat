import React from "react";
import { Link } from "react-router-dom";

import * as S from "./Styled"; // S = Style
import * as G from "../../asset/GlobalStyledComponents"; // G = GlobalStyle

export default ({ input }) => {
  if (!input.length) {
    return (
      <Link to={"/search"}>
        <S.SubmitButton type="submit">
          <G.Icon className="fas fa-search" />
        </S.SubmitButton>
      </Link>
    );
  } else {
    return (
      <Link to={`/search?q=${input}&page=1`}>
        <S.SubmitButton type="submit">
          <G.Icon className="fas fa-search" />
        </S.SubmitButton>
      </Link>
    );
  }
};
