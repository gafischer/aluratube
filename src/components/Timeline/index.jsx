import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import supabase, { subscribe } from "../../services/supabase";

import Loading from "../Loading";

import StyledTimeline from "./styles";

function Timeline({ searchValue }) {
	const [loading, setLoading] = useState(true);
	const [videos, setVideos] = useState([]);
	const [playlists, setPlaylists] = useState([]);

	useEffect(() => {
		const getPlaylistById = async (id) => {
			const { data } = await supabase
				.from("playlist")
				.select("id, identification")
				.eq("id", id)
				.single();

			return data;
		};

		const getAllVideos = async () => {
			const { data } = await supabase.from("video").select(
				`id, title, url, thumbnail,
       playlist (
        identification
        )`
			);

			setVideos(data);
			setLoading(false);
		};

		getAllVideos();

		const videoSubscription = subscribe(
			"video",
			async ({ id, title, url, thumbnail, playlist_id: playlistId }) => {
				const { identification } = await getPlaylistById(playlistId);

				setVideos((video) => [
					...video,
					{
						id,
						title,
						url,
						thumbnail,
						playlist: { identification }
					}
				]);
			}
		);

		return () => {
			videoSubscription.unsubscribe();
		};
	}, []);

	useEffect(() => {
		const getAllPlaylists = async () => {
			const { data } = await supabase
				.from("playlist")
				.select("id, identification");

			setPlaylists(data);
		};

		getAllPlaylists();
	}, [videos]);

	return loading ? (
		<Loading />
	) : (
		<StyledTimeline>
			{playlists.map((playlist) => {
				const sectionVideos = videos.filter((video) =>
					video.playlist.identification.includes(playlist.identification)
				);

				return sectionVideos.length > 0 ? (
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
									<Link
										key={video.id}
										href={`/video/${video.id}`}
										// target="_blank"
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
									</Link>
								))}
						</div>
					</section>
				) : (
					false
				);
			})}
		</StyledTimeline>
	);
}

export default Timeline;
