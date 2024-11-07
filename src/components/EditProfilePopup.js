import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import validator from "validator";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  //console.log(name);
  console.log(currentUser);

  useEffect(() => {
    if (currentUser.name !== undefined) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Editar perfil"
      name="profile"
      buttonText="Guardar"
      textRequired="Ambos campos son requeridos (*)"
    >
      <input
        type="text"
        name="name"
        onChange={handleChangeName}
        value={name}
        placeholder="Nombre *"
        maxLength="40"
        minLength="2"
        className="popup__input"
        id="name-input"
        validator={validator}
        required
      />
      <span className="popup__error name-input-error"></span>
      <input
        type="text"
        name="about"
        onChange={handleChangeDescription}
        value={description}
        placeholder="Acerca de mi *"
        maxLength="200"
        minLength="2"
        className="popup__input"
        id="about-input"
        validator={validator}
        required
      />
      <span className="popup__error about-input-error"></span>
    </PopupWithForm>
  );
}
