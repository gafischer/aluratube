import { useState } from "react";

const useForm = ({ initialValues }) => {
	const [values, setValues] = useState(initialValues);

	const handleChange = (e) => {
		const { value } = e.target;
		const { name } = e.target;

		setValues({
			...values,
			[name]: value
		});
	};

	const clearForm = () => {
		setValues({});
	};

	return {
		values,
		handleChange,
		clearForm
	};
};

export default useForm;
