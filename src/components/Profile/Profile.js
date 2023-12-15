import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import React from 'react';

function Profile( {handleSignOut} ) {

  const currentUser = React.useContext(CurrentUserContext);

  function onSignOut() {
    handleSignOut();
    // removeToken();
  }
  return (
    <div className="profile">
      <h1 className="profile__title">Привет, {currentUser?.name || "Пользователь" }!</h1>
      <form className="profile__form">
        <div className='profile__input-container'>
          <label className="profile__lable">Имя</label>
          <input className="profile__input" defaultValue={ currentUser?.name || "Пользователь" }></input>
        </div>
        <div className='profile__input-container'>
          <label className="profile__lable">E-mail</label>
          <input className="profile__input" defaultValue={currentUser?.email}></input>
        </div>


        <button className="profile__submit" type="submit">
          Редактировать
        </button>
      </form>
      <button className="profile__logout" onClick={onSignOut}>Выйти из аккаунта</button>
    </div>
  )
}

export default Profile;