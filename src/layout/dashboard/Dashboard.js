import React from "react";

import * as S from "./Styled";

const Dashboard = ({ itemList }) => {
  return (
    <S.MainSidebar id="dashboard" style={{ right: 0 }}>
      <S.NavigationLink to="/">
        <li>
          <S.Icon className="fas fa-home"></S.Icon>
        </li>
      </S.NavigationLink>

      {itemList}
    </S.MainSidebar>
  );
};

export default Dashboard;
