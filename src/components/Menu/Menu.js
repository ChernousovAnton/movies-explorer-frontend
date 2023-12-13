import "./Menu.css";
import NavTab from "../NavTab/NavTab";
import HeaderProfile from "../HeaderProfile/HeaderProfile";

function Menu( {isOpen, onCloseMenu} ) {

  return (
    <div className={`menu ${isOpen ? "menu_active" : ""}`}>
      <div className="menu__background"></div>
      <div className="menu__container">
        <div className="menu__navtab">
          <NavTab/>
        </div>
        <div className="menu__profile">
          <HeaderProfile/>
        </div>
        
        <i className="menu__close-btn" onClick={onCloseMenu}></i>
      </div>
    </div>
  )
}

export default Menu;
