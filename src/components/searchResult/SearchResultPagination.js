import React from "react";
import { Link } from "react-router-dom";

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
    <ul className="paginate">
      {paginate.pagingForward ? (
        <Link
          to={`/search?q=${query}&page=${Number(currentPage) + 1}`}
          onClick={() => increment()}
        >
          <li className="list-item ">
            <span>&laquo;</span>Next
          </li>
        </Link>
      ) : (
        ""
      )}

      <li className="list-item">{Number(currentPage)}</li>

      {paginate.pagingBack === null ? (
        ""
      ) : (
        <Link
          to={`/search?q=${query}&page=${Number(currentPage) - 1}`}
          onClick={() => decrement()}
        >
          <li className="list-item ">
            Prev<span>&raquo;</span>
          </li>
        </Link>
      )}
    </ul>
  );
};

export default SearchResultPagination;
