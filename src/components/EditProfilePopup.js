import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import escapeHTML from "escape-html";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const profileSchema = yup.object({
  name: yup
    .string("Completa este campo")
    .required("Introduce un nombre")
    .min(2, "El nombre debe tener mínimo dos caracteres")
    .max(20, "El nombre debe tener máximo veinte caracteres"),
  about: yup
    .string("Completa este campo")
    .required("Introduce una descripción")
    .min(2, "La descipción debe tener mínimo dos caracteres")
    .max(40, "La descipción debe tener máximo cuarenta caracteres"),
});

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(profileSchema), mode: "onChange" });

  function handleSubmitProfile(data) {
    onUpdateUser({
      name: escapeHTML(data.name),
      about: escapeHTML(data.about),
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit(handleSubmitProfile)}
      title="Editar perfil"
      name="profile"
      buttonText="Guardar"
      textRequired="Ambos campos son requeridos (*)"
    >
      <input
        type="text"
        defaultValue={currentUser.name}
        placeholder="Nombre *"
        className="popup__input"
        id="name-input"
        {...register("name")}
      />
      <span className="popup__error name-input-error">
        {errors.name?.message}
      </span>
      <input
        type="text"
        defaultValue={currentUser.about}
        placeholder="Acerca de mi *"
        className="popup__input"
        id="about-input"
        {...register("about")}
      />
      <span className="popup__error about-input-error">
        {errors.about?.message}
      </span>
    </PopupWithForm>
  );
}
