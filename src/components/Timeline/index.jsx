import React, { useEffect, useState } from "react";
import Image from "next/image";
import supabase from "../../services/supabase";

import StyledTimeline from "./styles";

function Timeline({ searchValue }) {
	const [videos, setVideos] = useState([]);
	const [playlists, setPlaylists] = useState([
		{
			id: "",
			title: "",
			url: "",
			thumbnail: "",
			playlist: { identification: "" }
		}
	]);

	const getPlaylistById = async (id) => {
		const { data } = await supabase
			.from("playlist")
			.select("id, identification")
			.eq("id", id)
			.single();

		return data;
	};

	const getAllPlaylists = async () => {
		const { data } = await supabase
			.from("playlist")
			.select("id, identification");

		setPlaylists(data);
	};

	const getAllVideos = async () => {
		const { data } = await supabase.from("video").select(
			`id, title, url, thumbnail,
       playlist (
        identification
        )`
		);

		setVideos(data);
	};

	useEffect(() => {
		getAllVideos();
		getAllPlaylists();
	}, []);

	const videoSubscription = supabase
		.channel("public:video")
		.on(
			"postgres_changes",
			{ event: "INSERT", schema: "public", table: "video" },
			async (payload) => {
				const {
					id,
					title,
					url,
					thumbnail,
					playlist_id: playlistId
				} = payload.new;

				const { identification } = await getPlaylistById(playlistId);

				setVideos([
					...videos,
					{
						id,
						title,
						url,
						thumbnail,
						playlist: { identification }
					}
				]);

				supabase.removeChannel(videoSubscription);
			}
		)
		.subscribe();

	return (
		<StyledTimeline>
			{playlists.map((playlist) => {
				const sectionVideos = videos.filter((video) =>
					video.playlist.identification.includes(playlist.identification)
				);

				return (
					<section key={playlist.id}>
						<h2>{playlist.identification}</h2>
						<div>
							{sectionVideos
								.filter((video) => {
									const titleNormalized = video.title.toLowerCase();
									const searchValueNormalized = searchValue.toLowerCase();
									return titleNormalized.includes(searchValueNormalized);
								})
								.map((video) => (
									<a
										key={video.id}
										href={video.url}
										target="_blank"
										rel="noreferrer"
									>
										<Image
											src={video.thumbnail}
											alt="Video Thumbnail"
											width="0"
											height="0"
											sizes="100vw"
											style={{
												width: "100%",
												height: "auto"
											}}
										/>
										<span>{video.title}</span>
									</a>
								))}
						</div>
					</section>
				);
			})}
		</StyledTimeline>
	);
}

export default Timeline;
