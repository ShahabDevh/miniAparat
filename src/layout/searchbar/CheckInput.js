import React from "react";
import { Link } from "react-router-dom";

import * as S from "./styled";

export default ({ input }) => {
  if (!input.length) {
    return (
      <Link to={"/search"}>
        <S.SubmitButton type="submit">
          <S.Icon className="fas fa-search" />
        </S.SubmitButton>
      </Link>
    );
  } else {
    return (
      <Link to={`/search?q=${input}&page=1`}>
        <S.SubmitButton type="submit">
          <S.Icon className="fas fa-search" />
        </S.SubmitButton>
      </Link>
    );
  }
};
