import React, { useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";

import { AiOutlineClose } from "react-icons/ai";

import useForm from "../hooks";
import StyledRegisterVideo from "./styles";
import supabase, { subscribe } from "../../../services/supabase";

function RegisterVideo({ formVisible, closeForm }) {
	const [playlists, setPlaylists] = useState([]);
	const [thumbnail, setThumbnail] = useState("");

	const getYoutubeThumb = (url) => {
		const youtubeRegex =
			/^(?:(?:https|http):\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be).*?(?:\/|v\/|u\/|embed\/|shorts\/|watch\?v=|(?<username>user\/))(?<id>[\w-]{11})(?:\?|&|$)/;

		const youtubeUrlData = youtubeRegex.exec(url);

		if (!youtubeUrlData?.groups?.id) {
			return null;
		}

		return `https://img.youtube.com/vi/${youtubeUrlData.groups.id}/hqdefault.jpg`;
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		const data = new FormData(e.currentTarget);
		const values = Object.fromEntries(data.entries());

		const { error } = await supabase.from("video").insert({
			title: values.title,
			url: values.url,
			playlist_id: values["playlist-id"],
			thumbnail
		});

		closeForm();
		setThumbnail("");

		if (error) {
			return toast.error(
				`Erro ao cadastrar vídeo. ${error.details ?? ""} ${error.message ?? ""}`
			);
		}

		return toast.success("Vídeo cadastrado com sucesso!");
	};

	const { values, errors, handleChange, handleSubmit, clearForm } =
		useForm(handleFormSubmit);

	const handleCloseModal = () => {
		clearForm();
		closeForm();
		setThumbnail("");
	};

	useEffect(() => {
		const getAllPlaylists = async () => {
			const { data } = await supabase
				.from("playlist")
				.select("id,identification");

			setPlaylists(data);
		};

		getAllPlaylists();

		const playlistSubscription = subscribe(
			"playlist",
			async ({ id, identification }) =>
				setPlaylists((playlist) => [...playlist, { id, identification }]),
			"INSERT"
		);

		return () => {
			playlistSubscription.unsubscribe();
		};
	}, []);

	useEffect(() => {
		const youtubeThumb = getYoutubeThumb(values.url);

		if (youtubeThumb) {
			setThumbnail(youtubeThumb);
		} else {
			setThumbnail("");
		}
	}, [values.url]);

	return (
		<StyledRegisterVideo>
			{formVisible ? (
				<form onSubmit={handleSubmit}>
					<div>
						<button
							type="button"
							className="close-modal"
							onClick={handleCloseModal}
						>
							<AiOutlineClose />
						</button>
						<input
							className={errors.title ? "field-error" : undefined}
							placeholder="Título do Vídeo"
							name="title"
							value={values.title}
							onChange={handleChange}
							required
						/>
						{errors.title ? <span>{errors.title}</span> : false}
						<input
							className={errors.url ? "field-error" : undefined}
							placeholder="URL do Youtube"
							name="url"
							value={values.url}
							onChange={handleChange}
							required
						/>
						{errors.url ? <span>{errors.url}</span> : false}
						<select required defaultValue="" name="playlist-id">
							<option value="" disabled hidden>
								Playlist...
							</option>
							{playlists
								? playlists.map((playlist) => (
										<option key={playlist.id} value={playlist.id}>
											{playlist.identification}
										</option>
								  ))
								: false}
						</select>
						<button type="submit">Cadastrar</button>

						{thumbnail ? (
							<Image
								src={thumbnail}
								alt="Youtube Thumb"
								width="288"
								height="216"
							/>
						) : (
							false
						)}
					</div>
				</form>
			) : (
				false
			)}
		</StyledRegisterVideo>
	);
}

export default RegisterVideo;
