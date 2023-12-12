import './Header.css'
import Logo from '../Logo/Logo';
import { useLocation } from 'react-router-dom';
import React from 'react';
import NavTab from "../NavTab/NavTab";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import HeaderProfile from "../HeaderProfile/HeaderProfile";
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { ScreenMaxWidthContext } from '../../contexts/ScreenMaxWidthContext';

function Header( {onMenuClick} ) {

  const location = useLocation();
  const headerClass = `header ${location.pathname === "/" ? "header_background_blue" : "header_background_white"}`;

  const currentUser = React.useContext(CurrentUserContext);
  const screenMaxWidth = React.useContext(ScreenMaxWidthContext);

  const isMainPage = location.pathname === '/'

  const headerAuth = currentUser?.email ? <></> : <HeaderAuth/>
  const navTab = currentUser?.email && screenMaxWidth >= 1280 ? <NavTab/> : <></>
  const headerProfile = currentUser?.email && screenMaxWidth >= 1280 && isMainPage ? <HeaderProfile/> : <></>
  const headerMenu = currentUser?.email && screenMaxWidth < 1280 ? <HeaderMenu onMenuClick={onMenuClick}/> : <></>

  return (
    <header className={headerClass}>
      <div className='header__box'>
        <Logo/>
        {navTab}
        <div className='header__last-item'>
          {headerAuth}
          {headerProfile}
          {headerMenu}
        </div>
      </div>
    </header>
  )
}

export default Header;