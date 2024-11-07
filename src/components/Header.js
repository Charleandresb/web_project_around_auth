import logo from "../images/Logo.svg";
import line from "../images/Line.png";
import { useNavigate, useMatch } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("jwt");
    navigate("/login");
  }

  function navRegister() {
    navigate("/register");
  }

  function navLogin() {
    navigate("/login");
  }

  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="Logo" className="header__logo" />
        {useMatch("/") && (
          <p className="header__logout" onClick={logout}>
            Cerrar sesión
          </p>
        )}
        {useMatch("/login") && (
          <p className="header__register" onClick={navRegister}>
            Regístrate
          </p>
        )}
        {useMatch("/register") && (
          <p className="header__login" onClick={navLogin}>
            Iniciar sesión
          </p>
        )}
      </div>
      <img src={line} alt="Line" className="header__line" />
    </header>
  );
}
