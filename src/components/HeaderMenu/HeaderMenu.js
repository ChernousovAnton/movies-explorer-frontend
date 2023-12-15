import './HeaderMenu.css';
import React from 'react';

function HeaderMenu({ onMenuClick }) {

  return (
    <i className='header__menu-icon' onClick={onMenuClick}></i>
  );
}

export default HeaderMenu;