import React, { useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";

import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";

import useForm from "./hooks";
import StyledRegisterVideo from "./styles";
import supabase from "../../services/supabase";

function RegisterVideo() {
	const registerForm = useForm({ initialValues: { title: "", url: "" } });

	const [formVisible, setFormVisible] = useState(false);
	const [playlists, setPlaylists] = useState([]);
	const [thumbnail, setThumbnail] = useState("");

	const getAllPlaylists = async () => {
		const { data } = await supabase
			.from("playlist")
			.select("id,identification");

		setPlaylists(data);
	};

	const getYoutubeThumb = (url) => {
		const youtubeRegex =
			/^(?:(?:https|http):\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be).*?(?:\/|v\/|u\/|embed\/|shorts\/|watch\?v=|(?<username>user\/))(?<id>[\w-]{11})(?:\?|&|$)/;

		const youtubeUrlData = youtubeRegex.exec(url);

		if (!youtubeUrlData?.groups?.id) {
			return null;
		}

		return `https://img.youtube.com/vi/${youtubeUrlData.groups.id}/hqdefault.jpg`;
	};

	const handleCloseModal = () => {
		registerForm.clearForm();
		setFormVisible(false);
		setThumbnail("");
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		const data = new FormData(e.currentTarget);
		const values = Object.fromEntries(data.entries());

		const { status, error } = await supabase.from("video").insert({
			title: values.title,
			url: values.url,
			playlist_id: values["playlist-id"],
			thumbnail
		});

		handleCloseModal();

		if (status !== 201) {
			return toast.error(`Erro ao cadastrar vídeo. ${error ?? ""}`);
		}

		return toast.success("Vídeo cadastrado com sucesso!");
	};

	useEffect(() => {
		getAllPlaylists();
	}, []);

	useEffect(() => {
		const youtubeThumb = getYoutubeThumb(registerForm.values.url);

		if (youtubeThumb) {
			setThumbnail(youtubeThumb);
		}
	}, [registerForm.values.url]);

	return (
		<StyledRegisterVideo>
			<button
				type="button"
				className="add-video"
				onClick={() => setFormVisible(true)}
			>
				<AiOutlinePlus />
			</button>
			{formVisible ? (
				<form onSubmit={handleFormSubmit}>
					<div>
						<button
							type="button"
							className="close-modal"
							onClick={handleCloseModal}
						>
							<AiOutlineClose />
						</button>
						<input
							placeholder="Título do Vídeo"
							name="title"
							value={registerForm.values.title}
							onChange={registerForm.handleChange}
							required
						/>
						<input
							placeholder="URL do Youtube"
							name="url"
							value={registerForm.values.url}
							onChange={registerForm.handleChange}
							required
						/>
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
