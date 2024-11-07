import closeIcon from "../images/CloseIcon.svg";
import successIcon from "../images/SuccesIcon.png";

function InfoTooltip() {
  return (
    <div className="infotooltip">
      <div className="infotooltip__container">
        <img src={closeIcon} className="infotooltip__close-icon" alt="Cerrar" />
        <img
          src={successIcon}
          className="infotooltip__success-icon"
          alt="Éxito"
        />
        <h3 className="infotooltip__message">¡Correcto! Ya estás registrado</h3>
      </div>
      <div className="infotooltip__overlay"></div>
    </div>
  );
}

export default InfoTooltip;
