import React from "react";
import { Link } from "react-router-dom";

const CategoryPagination = ({
  paginate,
  currentPage,
  decrement,
  increment,
  category_id,
  name
}) => {
  return (
    <ul className="paginate">
      {paginate.pagingForward ? (
        <Link
          to={`/category/${name}/${category_id}`}
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

      {paginate.pagingBack === "" ? (
        ""
      ) : (
        <Link
          to={`/category/${name}/${category_id}`}
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

export default CategoryPagination;
