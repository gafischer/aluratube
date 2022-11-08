import React from "react";

import Logo from "../Logo"
import Search from "../Search";

import { StyledMenu } from "./styles";

function Menu({ searchValue, setSearchValue}) {
  return (
    <StyledMenu>
      <div>
      <Logo />
      </div>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
    </StyledMenu>
  );
}

export default Menu;
