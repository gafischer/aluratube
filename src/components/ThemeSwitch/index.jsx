import React, { useContext, useEffect, useRef, useState } from "react";
import ColorModeContext from "../../context/ColorMode";
import getThemeIcon from "../../styles/themes/_icons";

import StyledThemeSwitch from "./styles";
import ThemeItem from "./ThemeItem";

function ThemeSwitch() {
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

	const handleKeyPress = (e) => {
		if (e?.code?.toLowerCase() === "enter") {
			handleKeyPress();
		}
	};

	return (
		<StyledThemeSwitch>
			<div ref={menuRef}>
				<button
					type="button"
					className="menu-trigger"
					onClick={handleMenuState}
				>
					{getThemeIcon(colorModeContext.mode)} Theme
				</button>

				<div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
					<div
						className="close-menu"
						onClick={handleMenuState}
						onKeyDown={handleKeyPress}
						role="button"
						tabIndex="0"
					>
						<ul>
							<ThemeItem theme="dark" />
							<ThemeItem theme="light" />
						</ul>
					</div>
				</div>
			</div>
		</StyledThemeSwitch>
	);
}

export default ThemeSwitch;
