import React from "react";

import { StyledSearch } from "./styles";

function Search({ searchValue, setSearchValue }) {
  return (
    <StyledSearch>
      <input
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      <button>🔎</button>
    </StyledSearch>
  );
}

export default Search;
