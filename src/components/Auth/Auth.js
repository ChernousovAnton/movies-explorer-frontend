import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Auth.css";
import useFormAndValidation from '../../hooks/useFormAndValidation';

function Auth({ onSubmit, type, serverError}) {

  const {values, handleChange, errors, isValid, resetForm, setValues, setIsValid, setErrors} = useFormAndValidation();

  React.useEffect(() => {
    setIsValid(false);
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      onSubmit(values);
      setIsValid(false);
    }
  }

  return (
    <div className="auth">
      <Logo />
      <h1 className="auth__title">
        {type === "register" ? "Добро пожаловать!" : "Рады видеть!"}
      </h1>
      <form className="auth__form" onSubmit={handleSubmit} noValidate>
        <fieldset className="form__fieldset">
          {type === "register" ? (
            <>
              <label className="auth__label">Имя</label>
              <input
                className="auth__input"
                type="text"
                name="name"
                onChange={handleChange}
                minLength="2"
                required
              />
              <span className="auth__input-error">{errors.name}</span>
            </>
          ) : (
            ""
          )}
          <label className="auth__label">E-mail</label>
          <input
            className="auth__input"
            type="email"
            name="email"
            onChange={handleChange}
            required
          />
          <span className="auth__input-error">{errors.email}</span>
          <label className="auth__label">Пароль</label>
          <input
            className="auth__input"
            type="password"
            name="password"
            onChange={handleChange}
            minLength="2"
            required
          />
          <span className="auth__input-error">{errors.password}</span>
          
        </fieldset>
        <span className="auth__input-error">{serverError}</span>
        <button className={`auth__submit ${isValid ? "auth__submit_active" : ""}` } type="submit">
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
