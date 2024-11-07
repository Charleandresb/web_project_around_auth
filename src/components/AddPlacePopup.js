import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const titleRef = useRef(null);
  const linkRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({ name: titleRef.current.value, link: linkRef.current.value });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Nuevo lugar"
      name="add"
      buttonText="Crear"
      textRequired="Ambos campos son requeridos (*)"
    >
      <input
        type="text"
        name="title"
        ref={titleRef}
        placeholder="Nombre *"
        maxLength="30"
        minLength="2"
        className="popup__input"
        id="add-input"
        required
      />
      <span className="popup__error add-input-error"></span>
      <input
        type="url"
        name="link"
        ref={linkRef}
        placeholder="Imagen URL *"
        className="popup__input"
        id="link-input"
        required
      />
      <span className="popup__error link-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
