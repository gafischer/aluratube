import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import supabase from "../../services/supabase";
import useForm from "../../hooks/useForm";

import StyledAddFavorites from "./styles";

function AddFavorites({ formVisible, closeForm }) {
	const handleFormSubmit = async (e) => {
		e.preventDefault();

		const data = new FormData(e.currentTarget);
		const values = Object.fromEntries(data.entries());

		const { error } = await supabase.from("favorite").insert({
			github: values.github
		});

		closeForm();

		if (error) {
			return toast.error(
				`Erro ao cadastrar favorito. ${error.details ?? ""} ${
					error.message ?? ""
				}`
			);
		}

		return toast.success("Favorito cadastrado com sucesso!");
	};

	const { values, errors, handleChange, handleSubmit, clearForm } =
		useForm(handleFormSubmit);

	const handleCloseModal = () => {
		clearForm();
		closeForm();
	};

	return (
		<StyledAddFavorites>
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
							className={errors.github ? "field-error" : undefined}
							placeholder="Github Favorito"
							name="github"
							value={values.github}
							onChange={handleChange}
							required
						/>
						{errors.github ? <span>{errors.github}</span> : false}
						<button type="submit">Cadastrar</button>
					</div>
				</form>
			) : (
				false
			)}
		</StyledAddFavorites>
	);
}

export default AddFavorites;
