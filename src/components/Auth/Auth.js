import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Auth.css";

function Auth({ onSubmit, type }) {
  const [userData, setUserData] = React.useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(userData);
  }

  return (
    <div className="auth">
      <Logo />
      <h1 className="auth__title">
        {type === "register" ? "Добро пожаловать!" : "Рады видеть!"}
      </h1>
      <form className="auth__form" onSubmit={handleSubmit}>
        <fieldset className="form__fieldset">
          {type === "register" ? (
            <>
              <label className="auth__label">Имя</label>
              <input
                className="auth__input"
                type="name"
                name="name"
                value={userData.name || ""}
                onChange={handleChange}
              />
            </>
          ) : (
            ""
          )}
          <label className="auth__label">E-mail</label>
          <input
            className="auth__input"
            type="email"
            name="email"
            value={userData.email || ""}
            onChange={handleChange}
          />
          <label className="auth__label">Пароль</label>
          <input
            className="auth__input"
            type="password"
            name="password"
            value={userData.password || ""}
            onChange={handleChange}
          />
          <span className="auth__input-error">{"some error"}</span>
        </fieldset>

        <button className="auth__submit" type="submit">
          {type === "register" ? "Зарегистрироваться" : "Войти"}
        </button>
        <p className="auth__text">
          {type === "register"
            ? "Уже зарегистрированы? "
            : "Еще не зарегистрировались? "}
          {type === "register" ? (
            <Link to="/signin" className="auth__link">
              Войти
            </Link>
          ) : (
            <Link to="/signup" className="auth__link">
              Регистрация
            </Link>
          )}
        </p>
      </form>
    </div>
  );
}

export default Auth;
