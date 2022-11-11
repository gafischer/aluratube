import { useState } from "react";

function getYoutubeId(title) {
  const youtubeRegex =
    /^(?:(?:https|http):\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be).*?(?:\/|v\/|u\/|embed\/|shorts\/|watch\?v=|(?<username>user\/))(?<id>[\w\-]{11})(?:\?|&|$)/;
  const youtubeUrlData = youtubeRegex.exec(title);

  if (!youtubeUrlData?.groups?.id) {
    return null;
  }

  return youtubeUrlData.groups.id;
}

export function useForm({ initialValues, ...props }) {
  const [values, setValues] = useState(initialValues);
  const [thumbnail, setThumbnail] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    if (name === "url") {
      const youtubeId = getYoutubeId(value);
      setThumbnail(youtubeId);
    }

    setValues({
      ...values,
      [name]: value,
    });
  }

  function clearForm() {
    console.log("clear");
    setValues({});
    setThumbnail("");
  }

  return {
    values,
    handleChange,
    clearForm,
    thumbnail,
  };
}
