import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import supabase from "../../../services/supabase";
import useForm from "../hooks";

import StyledRegisterPlaylist from "./styles";

function RegisterPlaylist({ formVisible, closeForm }) {
	const handleFormSubmit = async (e) => {
		e.preventDefault();

		const data = new FormData(e.currentTarget);
		const values = Object.fromEntries(data.entries());

		const { error } = await supabase.from("playlist").insert({
			identification: values.identification
		});

		closeForm();

		if (error) {
			return toast.error(
				`Erro ao cadastrar playlist. ${error.details ?? ""} ${
					error.message ?? ""
				}`
			);
		}

		return toast.success("Playlist cadastrada com sucesso!");
	};

	const { values, errors, handleChange, handleSubmit, clearForm } =
		useForm(handleFormSubmit);

	const handleCloseModal = () => {
		clearForm();
		closeForm();
	};

	return (
		<StyledRegisterPlaylist>
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
							className={errors.identification ? "field-error" : undefined}
							placeholder="Nome da playlist"
							name="identification"
							value={values.identification}
							onChange={handleChange}
							required
						/>
						{errors.identification ? (
							<span>{errors.identification}</span>
						) : (
							false
						)}
						<button type="submit">Cadastrar</button>
					</div>
				</form>
			) : (
				false
			)}
		</StyledRegisterPlaylist>
	);
}

export default RegisterPlaylist;
