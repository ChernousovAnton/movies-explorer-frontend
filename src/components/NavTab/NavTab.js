import "./NavTab.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { ScreenMaxWidthContext } from "../../contexts/ScreenMaxWidthContext";
import React from "react";
import HeaderNavLink from "../HeaderNavLink/HeaderNavLink";

function NavTab() {
  const maxScreenWidth = React.useContext(ScreenMaxWidthContext);
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <>
      {currentUser?.email && (
        <nav className="navtab">
          {maxScreenWidth < 1280 && <HeaderNavLink text="Главная" path="/" />}
          <HeaderNavLink text="Фильмы" path="movies" />
          <HeaderNavLink text="Сохраненные фильмы" path="saved-movies" />
        </nav>
      )}
    </>
  );
}

export default NavTab;
