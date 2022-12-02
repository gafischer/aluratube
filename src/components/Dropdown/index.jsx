import React, { useEffect, useRef, useState } from "react";

import StyledDropdown from "./styles";

function Dropdown({ triggerText, items }) {
	const [open, setOpen] = useState(false);
	const [menuHeight, setMenuHeight] = useState(null);

	const menuRef = useRef();
	const menuHeightRef = useRef();

	const handleMenuState = () => {
		setOpen(!open);
	};

	const handleKeyPress = (e) => {
		if (e?.code?.toLowerCase() === "enter") {
			handleKeyPress();
		}
	};

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
	}, []);

	useEffect(() => {
		setMenuHeight(menuHeightRef.current?.clientHeight);
	}, [menuHeightRef.current?.clientHeight, items]);

	return (
		<StyledDropdown ref={menuRef} menuHeight={menuHeight}>
			<button type="button" onClick={handleMenuState}>
				{triggerText}
			</button>
			<div
				ref={menuHeightRef}
				className={`dropdown-menu ${open ? "active" : "inactive"}`}
				onClick={handleMenuState}
				onKeyDown={handleKeyPress}
				role="button"
				tabIndex="0"
			>
				{items.map((item) => (
					<button
						key={item.text}
						type="button"
						onClick={item.onClick}
						className={item.icon ? "icon" : "no-icon"}
					>
						{item.icon ?? false}
						{item.text}
					</button>
				))}
			</div>
		</StyledDropdown>
	);
}

export default Dropdown;
