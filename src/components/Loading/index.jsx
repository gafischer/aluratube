import React from "react";
import { RiLoader4Line } from "react-icons/ri";

import StyledLoading from "./styles";

function Loading() {
	return (
		<StyledLoading>
			<RiLoader4Line size={50} />
		</StyledLoading>
	);
}

export default Loading;
