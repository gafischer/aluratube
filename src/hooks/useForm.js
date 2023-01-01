import { useState } from "react";
import { toast } from "react-toastify";

const useForm = (callback) => {
	const [values, setValues] = useState({
		title: "",
		url: "",
		identification: "",
		"playlist-id": 0,
		thumbnail: ""
	});
	const [errors, setErrors] = useState({});

	const youtubeRegex =
		/^(?:(?:https|http):\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be).*?(?:\/|v\/|u\/|embed\/|shorts\/|watch\?v=|(?<username>user\/))(?<id>[\w-]{11})(?:\?|&|$)/;

	const omit = (obj, ...keys) => {
		const keysToRemove = new Set(keys.flat());

		return Object.fromEntries(
			Object.entries(obj).filter(([k]) => !keysToRemove.has(k))
		);
	};

	const validate = (name, value) => {
		switch (name) {
			case "title":
				if (value.length >= 1 && value.length <= 4) {
					setErrors({
						...errors,
						title: "*Insira pelo menos 5 caracteres."
					});
				} else {
					const newObj = omit(errors, "title");
					setErrors(newObj);
				}
				break;

			case "url":
				if (value.length >= 1 && !youtubeRegex.test(value)) {
					setErrors({
						...errors,
						url: "*Insira um vídeo do youtube válido."
					});
				} else {
					const newObj = omit(errors, "url");
					setErrors(newObj);
				}
				break;

			case "identification":
				if (value.length >= 1 && value.length <= 4) {
					setErrors({
						...errors,
						identification: "*Insira pelo menos 5 caracteres."
					});
				} else {
					const newObj = omit(errors, "identification");
					setErrors(newObj);
				}
				break;

			default:
				break;
		}
	};

	const handleChange = (e) => {
		e.persist();

		const { value, name } = e.target;

		validate(name, value);

		setValues({
			...values,
			[name]: value
		});
	};

	const clearForm = () => {
		setValues({
			title: "",
			url: "",
			identification: "",
			"playlist-id": 0,
			thumbnail: ""
		});
		setErrors({});
	};

	const handleSubmit = (e) => {
		if (e) {
			e.preventDefault();
		}

		if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
			callback(e);
			clearForm();
		} else {
			toast.error("Verifique dados informados.");
		}
	};

	return {
		values,
		errors,
		handleSubmit,
		handleChange,
		clearForm
	};
};

export default useForm;
