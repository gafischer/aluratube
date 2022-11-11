import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "./hooks";

import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';

import { StyledRegisterVideo } from "./styles";

export default function RegisterVideo() {
  const registerForm = useForm({
    initialValues: { title: "", url: "" },
  });
  const [formVisible, setFormVisible] = useState(false);

  function handleCloseModal() {
    setFormVisible(false);
    registerForm.clearForm();
  }

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormVisible(true)}>
        <AiOutlinePlus />
      </button>
      {formVisible ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            registerForm.clearForm();
            setFormVisible(false);
          }}
        >
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
              name="titulo"
              value={registerForm.values.titulo}
              onChange={registerForm.handleChange}
            />
            <input
              placeholder="URL do Youtube"
              name="url"
              value={registerForm.values.url}
              onChange={registerForm.handleChange}
            />
            <button type="submit">Cadastrar</button>
            {console.log("thumb", registerForm.thumbnail)}

            {registerForm.thumbnail ? (
              <Image
                src={`https://img.youtube.com/vi/${registerForm.thumbnail}/hqdefault.jpg`}
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
