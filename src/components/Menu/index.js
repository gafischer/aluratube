import React from "react";

import Logo from "./Logo"
import Search from "./Search";
import ThemeSwitch from "../ThemeSwitch";

import { StyledMenu } from "./styles";

const Menu = ({ searchValue, setSearchValue}) => {
  return (
    <StyledMenu>
      <div>
      <Logo />
      </div>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <ThemeSwitch />
    </StyledMenu>
  );
}

export default Menu;
