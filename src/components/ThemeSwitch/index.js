import React, { useContext, useEffect, useRef, useState } from "react";
import ColorModeContext from "../../context/ColorMode";
import { getThemeIcon } from "../../styles/themes/_icons";

import { StyledSwitch } from "./styles";
import ThemeItem from "./ThemeItem";

const ThemeSwitch = () => {
  const colorModeContext = useContext(ColorModeContext);
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleMenuState = () => {
    setOpen(!open);
  };

  return (
    <StyledSwitch>
      <div ref={menuRef}>
        <div className="menu-trigger" onClick={handleMenuState}>
          {getThemeIcon(colorModeContext.mode)} Theme
        </div>

        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <ul onClick={handleMenuState}>
            <ThemeItem theme="dark" />
            <ThemeItem theme="light" />
          </ul>
        </div>
      </div>
    </StyledSwitch>
  );
};

export default ThemeSwitch;
