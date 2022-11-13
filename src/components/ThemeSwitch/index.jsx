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
					<button
						type="button"
						className="close-menu"
						onClick={handleMenuState}
					>
						<ul>
							<ThemeItem theme="dark" />
							<ThemeItem theme="light" />
						</ul>
					</button>
				</div>
			</div>
		</StyledThemeSwitch>
	);
}

export default ThemeSwitch;
