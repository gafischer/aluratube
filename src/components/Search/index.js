import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { StyledSearch } from "./styles";

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <StyledSearch>
      <input
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      <button>
        <AiOutlineSearch />
      </button>
    </StyledSearch>
  );
};

export default Search;
