import React, { useState, useEffect } from "react";


import { getCategoriesListAPI } from "../../api/APIUtils";
import Dashboard from "./Dashboard";
import * as S from "./Styled";

const DashBoardContainer = () => {
  const [data, setData] = useState([]);

  function getData() {
    getCategoriesListAPI().then(res => {
      setData(res.data.categories);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  const itemList = data.map(item => {
    return (
      <S.NavigationLink to={`/category/${item.name}/${item.id}`}>
        <li key={item.id}>
          <img src={item.imgSrc} alt="list-icon" />
          {item.name}
        </li>
      </S.NavigationLink>
    );
  });

  if (data) {
    return <Dashboard itemList={itemList} />;
  }
};

export default DashBoardContainer;
