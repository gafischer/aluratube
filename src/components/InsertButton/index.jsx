import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Dropdown from "../Dropdown";
import RegisterPlaylist from "./RegisterPlaylist";

import RegisterVideo from "./RegisterVideo";

import StyledInputButton from "./styles";

function InsertButton() {
	const [videoOpen, setVideoOpen] = useState(false);
	const [playlistOpen, setPlaylistOpen] = useState(false);

	const handleVideoClick = () => {
		setVideoOpen(true);
	};

	const handlePlaylistClick = () => {
		setPlaylistOpen(true);
	};

	return (
		<>
			<StyledInputButton>
				<Dropdown
					triggerText={<AiOutlinePlus />}
					items={[
						{
							text: "vídeo",
							onClick: handleVideoClick
						},
						{
							text: "playlist",
							onClick: handlePlaylistClick
						}
					]}
				/>
			</StyledInputButton>
			<RegisterVideo
				formVisible={videoOpen}
				closeForm={() => setVideoOpen(false)}
			/>
			<RegisterPlaylist
				formVisible={playlistOpen}
				closeForm={() => setPlaylistOpen(false)}
			/>
		</>
	);
}

export default InsertButton;
