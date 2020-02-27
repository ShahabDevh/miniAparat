import React from "react";
import { Link } from "react-router-dom";

import * as S from "./Styled";

const CategoryPagination = ({
  paginate,
  currentPage,
  decrement,
  increment,
  category_id,
  name
}) => {
  return (
    <S.Paginate>
      {paginate.pagingForward ? (
        <Link
          to={`/category/${name}/${category_id}`}
          onClick={() => increment()}
        >
          <li>
            <span>&laquo;</span>Next
          </li>
        </Link>
      ) : (
        ""
      )}

      <li>{Number(currentPage)}</li>

      {paginate.pagingBack === "" ? (
        ""
      ) : (
        <Link
          to={`/category/${name}/${category_id}`}
          onClick={() => decrement()}
        >
          <li>
            Prev<span>&raquo;</span>
          </li>
        </Link>
      )}
    </S.Paginate>
  );
};

export default CategoryPagination;
