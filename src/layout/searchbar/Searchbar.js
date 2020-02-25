import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import CheckInput from "./CheckInput";
import * as S from "./styled";

const SearchBar = ({ history }) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeSearch = e => {
    setInputValue(e.target.value);
  };

  const onKeyPressSearch = e => {
    const input = inputValue;

    if (e.which === 13) {
      if (input.length) {
        history.push(`/search?q=${inputValue}&page=1`);
      } else {
        history.push("/search");
      }
    }
  };
  return (
    <S.InputWrapper tabIndex="0">
      <input
        type="text"
        placeholder="جستجوی ویدیوهای رویدادها، شخصیت‌ها و ..."
        onChange={onChangeSearch}
        onKeyPress={onKeyPressSearch}
      />
      <CheckInput input={inputValue} />
    </S.InputWrapper>
  );
};

export default withRouter(SearchBar);
//        className="search-input"
