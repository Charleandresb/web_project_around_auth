import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({ avatar: inputRef.current.value });
  }
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Cambiar foto de perfil"
      name="avatar"
      buttonText="Guardar"
      textRequired="Único campo requerido (*)"
    >
      <input
        type="url"
        name="avatar"
        ref={inputRef}
        placeholder="Imagen de perfil URL *"
        className="popup__input"
        id="avatar-input"
        required
      />
      <span className="popup__error avatar-input-error"></span>
    </PopupWithForm>
  );
}
