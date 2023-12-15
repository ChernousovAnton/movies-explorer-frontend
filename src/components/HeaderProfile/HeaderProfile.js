import { Link, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { ScreenMaxWidthContext } from "../../contexts/ScreenMaxWidthContext";
import React from "react";
import "./HeaderProfile.css";

function HeaderProfile() {
  const location = useLocation();
  const currentUser = React.useContext(CurrentUserContext);
  const maxScreenWidth = React.useContext(ScreenMaxWidthContext);
  const headerProfileNameClass = `header-profile__name ${
    location.pathname === "/" && maxScreenWidth > 768
      ? "header-profile__name_color_white"
      : ""
  }`;

  const headerProfileIconClass = `header-profile__icon ${
    location.pathname === "/" && maxScreenWidth > 768
      ? "header-profile__icon_color_green"
      : ""
  }`;

  return (
    <div className="header-profile">
      <Link
        to="/profile"
        className={headerProfileNameClass}
      >
        {currentUser.email}
      </Link>
      <i className={headerProfileIconClass}></i>
    </div>
  );
}

export default HeaderProfile;
