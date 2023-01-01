import React from "react";

import Container from "./styles";

function YoutubeEmbed({ embedId }) {
	return (
		<Container>
			<iframe
				width="860"
				height="480"
				src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				title="Embedded youtube"
			/>
		</Container>
	);
}

export default YoutubeEmbed;
