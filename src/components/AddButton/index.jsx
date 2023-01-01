import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

import StyledAddButton from "./styles";

function AddButton({ onClick }) {
	return (
		<StyledAddButton type="button" onClick={onClick}>
			<AiOutlinePlus size={20} />
		</StyledAddButton>
	);
}

export default AddButton;
