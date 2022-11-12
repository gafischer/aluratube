import React from "react";

import { StyledSearch } from "./styles";

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <StyledSearch>
      <input
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
    </StyledSearch>
  );
};

export default Search;
