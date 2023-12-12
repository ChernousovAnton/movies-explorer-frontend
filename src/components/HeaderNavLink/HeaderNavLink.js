import "./HeaderNavLink.css";
import { NavLink, useLocation } from "react-router-dom";
import { ScreenMaxWidthContext } from "../../contexts/ScreenMaxWidthContext";
import React from "react";

function HeaderNavLink({ text, path }) {
  const location = useLocation();
  const maxScreenWidth = React.useContext(ScreenMaxWidthContext);
  const navtabLinkColorClass = `${
    location.pathname === "/" && maxScreenWidth >= 1280
      ? "navlink_color_white"
      : ""
  }`;

  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `navlink ${
          isActive ? "navlink_active" : ""
        } ${navtabLinkColorClass}`
      }
    >
      {text}
    </NavLink>
  );
}

export default HeaderNavLink;
