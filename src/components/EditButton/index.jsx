import React from "react";
import { MdEdit } from "react-icons/md";

import StyledEditButton from "./styles";

function EditButton({ onClick }) {
	return (
		<StyledEditButton type="button" onClick={onClick}>
			<MdEdit size={20} />
		</StyledEditButton>
	);
}

export default EditButton;
