import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import React from "react";
import useFormAndValidation from "../../hooks/useFormAndValidation";

function Profile({ handleSignOut, serverResponse, handleProfileChange }) {
  const currentUser = React.useContext(CurrentUserContext);
  const {
    values,
    handleChange,
    errors,
    isValid,
    setValues,
    setIsValid,
    setErrors,
  } = useFormAndValidation();

  React.useEffect(() => {
    setIsValid(false);
    setErrors({});
    setValues({name: currentUser.name, email: currentUser.email});
  }, [currentUser]);

  React.useEffect(() => {
    if (
      values?.name === currentUser.name &&
      values?.email === currentUser.email
    ) {
      setIsValid(false);
    }
  }, [values]);

  function onSignOut() {
    handleSignOut();
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleProfileChange(values);
    setIsValid(false);
  }

  return (
    <div className="profile">
      <h1 className="profile__title">
        Привет, {currentUser?.name || "Пользователь"}!
      </h1>
      <form className="profile__form" onSubmit={handleSubmit} noValidate>
        <div className="profile__input-container">
          <label className="profile__lable">Имя</label>
          <input
            className="profile__input"
            defaultValue={currentUser?.name}
            type="text"
            name="name"
            minLength="2"
            onChange={handleChange}
            required
          />
        </div>
        <span className="profile__input-error">{errors.name}</span>
        <div className="profile__input-container">
          <label className="profile__lable">E-mail</label>
          <input
            className="profile__input"
            defaultValue={currentUser?.email}
            type="email"
            name="email"
            onChange={handleChange}
            required
          />
        </div>
        <span className="profile__input-error">{errors.email}</span>
        <button
          className={`profile__submit ${isValid && "profile__submit_active"}`}
          type="submit"
        >
          Редактировать
        </button>
        <span className="profile__server-response">{serverResponse}</span>
      </form>
      <button className="profile__logout" onClick={onSignOut}>
        Выйти из аккаунта
      </button>
    </div>
  );
}

export default Profile;
