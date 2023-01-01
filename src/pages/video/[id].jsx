import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import supabase from "../../services/supabase";
import { youtubeMatch } from "../../utils/youtube";

import Loading from "../../components/Loading";
import YoutubeEmbed from "../../components/YoutubeEmbed";

import Container from "./styles";

function Video() {
	const [video, setVideo] = useState(null);

	const router = useRouter();

	useEffect(() => {
		if (router.isReady) {
			const getVideoById = async () => {
				const { data } = await supabase
					.from("video")
					.select()
					.single()
					.eq("id", router.query.id);

				setVideo(data);
			};

			getVideoById();
		}
	}, [router.isReady, router.query.id]);

	return video ? (
		<Container>
			<YoutubeEmbed embedId={youtubeMatch(video.url)[2]} />
			<Link href="/"> Voltar </Link>
		</Container>
	) : (
		<Loading />
	);
}

export default Video;
