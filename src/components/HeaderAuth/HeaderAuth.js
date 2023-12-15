import "./HeaderAuth.css";
import { Link, useLocation } from "react-router-dom";
import React from "react";

function HeaderAuth() {
  const location = useLocation();

  const headerAuthTextColorClass = `header-auth__link ${
    location.pathname === "/"
      ? "header-auth__link_color_white"
      : "header-auth__link_color_black"
  }`;
  return (
    <nav className="header-auth">
      <Link to="/signup" className={`${headerAuthTextColorClass} header-auth__signup`}>
        Регистрация
      </Link>
      <Link to="/signin" className="header-auth__link header-auth__signin">
        Войти
      </Link>
    </nav>
  );
}

export default HeaderAuth;
