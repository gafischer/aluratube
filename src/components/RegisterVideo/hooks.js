import { useState } from "react";

export const useForm = ({ initialValues, ...props }) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setValues({
      ...values,
      [name]: value,
    });
  }

  const clearForm = () => {
    setValues({});
  }

  return {
    values,
    handleChange,
    clearForm
  };
}
