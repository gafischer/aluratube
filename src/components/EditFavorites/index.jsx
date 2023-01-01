import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import supabase from "../../services/supabase";
import useForm from "../../hooks/useForm";

import StyledEditFavorites from "./styles";

function EditFavorites({ formVisible, closeForm, favorites }) {
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

	const { handleSubmit, clearForm } = useForm(handleFormSubmit);

	const handleDelete = async (id) => {
		const { error } = await supabase.from("favorite").delete().eq("id", id);

		closeForm();

		if (error) {
			return toast.error(
				`Erro ao excluir favorito. ${error.details ?? ""} ${
					error.message ?? ""
				}`
			);
		}

		return toast.success("Favorito excluído com sucesso!");
	};

	const handleCloseModal = () => {
		clearForm();
		closeForm();
	};

	return (
		<StyledEditFavorites>
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

						{favorites.map((fav) => (
							<div className="favorite-section" key={fav.id}>
								<input name="github" readOnly value={fav.github} />
								<button type="button" onClick={() => handleDelete(fav.id)}>
									<MdDelete size={20} />
								</button>
							</div>
						))}
					</div>
				</form>
			) : (
				false
			)}
		</StyledEditFavorites>
	);
}

export default EditFavorites;
