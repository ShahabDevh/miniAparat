import React from "react";
import { Link } from "react-router-dom";

import * as Style from "./Styled";

/* current page o ke zori sefresh gozashtam 1 dota safe 1 ijad kard
   to search okeye vali nemitonam jaye digei azash estefade konam mirize beham
   mizaramesh faghat vase search dige karish be zehnam nemirese bokonam
*/

const SearchResultPagination = ({
  paginate,
  currentPage,
  decrement,
  increment,
  query
}) => {
  return (
    <Style.Paginate>
      {paginate.pagingForward ? (
        <Link
          to={`/search?q=${query}&page=${Number(currentPage) + 1}`}
          onClick={() => increment()}
        >
          <li>
            <span>&laquo;</span>Next
          </li>
        </Link>
      ) : (
        ""
      )}

      <li> {Number(currentPage)}</li>

      {paginate.pagingBack === null ? (
        ""
      ) : (
        <Link
          to={`/search?q=${query}&page=${Number(currentPage) - 1}`}
          onClick={() => decrement()}
        >
          <li>
            Prev<span>&raquo;</span>
          </li>
        </Link>
      )}
    </Style.Paginate>
  );
};

export default SearchResultPagination;
