import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import HeaderFooterLayout from "../HeaderFooterLayout/HeaderFooterLayout";
import HeaderLayout from "../HeaderLayout/HeaderLayout";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import PageNotFound from "../PageNotFound/PageNotFound";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Auth from "../Auth/Auth";
import Menu from "../Menu/Menu";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { ScreenMaxWidthContext } from "../../contexts/ScreenMaxWidthContext";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [screenMaxWidth, setScreenMaxWidth] = React.useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  React.useEffect(() => {
    function onEscKeyDown(evt) {
      if (evt.key === 'Escape') {
        closeMenu();
      }
    }
    if (
      isMenuOpen
    ) {
      document.addEventListener('keydown', onEscKeyDown);
    } else {
      document.removeEventListener('keydown', onEscKeyDown);
    }
  }, [isMenuOpen])

  function handleMenuClick() {
    setIsMenuOpen(true);
  }


  React.useEffect(() => {
    function getScreenMaxWidth () {
      if (window.innerWidth <= 768 && screenMaxWidth !== 768) {
        setScreenMaxWidth(768);
      } else if (window.innerWidth > 768 && screenMaxWidth !== 1280) {
        setScreenMaxWidth(1280);
      }
    }
    window.addEventListener('resize', getScreenMaxWidth, false)
  })

  function handleLogin(dataUser) {
    setCurrentUser(dataUser);
  }

  function handleRegister(dataUser) {
    console.log(dataUser);
  }

  function handleSignOut() {
    setCurrentUser({});
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <ScreenMaxWidthContext.Provider value={screenMaxWidth}>
      <div className="App">
        <Routes>
          <Route element={<HeaderFooterLayout onMenuClick={handleMenuClick}/>}>
            <Route path="/" element={<Main />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute>
                <Movies />
                 </ProtectedRoute>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute>
                <Movies />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route element={<HeaderLayout onMenuClick={handleMenuClick}/>}>
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile handleSignOut={handleSignOut} />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route
            path="/signin"
            element={
              <ProtectedRoute onlyUnAuth>
                <Auth onSubmit={handleLogin} type='login' />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectedRoute onlyUnAuth>
                <Auth onSubmit={handleRegister} type='register'/>
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Menu isOpen={isMenuOpen} onCloseMenu={closeMenu}/>
      </div>
      </ScreenMaxWidthContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
