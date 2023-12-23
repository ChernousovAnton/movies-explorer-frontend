import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HeaderFooterLayout from "../HeaderFooterLayout/HeaderFooterLayout";
import HeaderLayout from "../HeaderLayout/HeaderLayout";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import PageNotFound from "../PageNotFound/PageNotFound";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Auth from "../Auth/Auth";
import Menu from "../Menu/Menu";
import mainApi from "../../utils/MainApi";
import { removeSearchOptions } from "../../utils/localStorage";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { ScreenMaxWidthContext } from "../../contexts/ScreenMaxWidthContext";
import { getToken, setToken, removeToken } from "../../utils/token";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [screenMaxWidth, setScreenMaxWidth] = React.useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [serverError, setServerError] = React.useState("");
  const [serverResponse, setServerResponse] = React.useState(null);

  const token = getToken();

  React.useEffect(() => {
    if (token) {
      mainApi
        .getContent(token)
        .then((dataUser) => {
          if (dataUser?.email) {
            setCurrentUser(dataUser);
          }
        })
        .catch((err) => {
          console.error(err);
          removeSearchOptions();
        });
    }
  }, [token]);

  React.useEffect(() => {
    function onEscKeyDown(evt) {
      if (evt.key === "Escape") {
        closeMenu();
      }
    }
    if (isMenuOpen) {
      document.addEventListener("keydown", onEscKeyDown);
    } else {
      document.removeEventListener("keydown", onEscKeyDown);
    }
  }, [isMenuOpen]);

  React.useEffect(() => {
    window.addEventListener('resize', getScreenMaxWidth);
    return () => window.removeEventListener('resize', getScreenMaxWidth);
  });

  function getScreenMaxWidth() {
    if (window.innerWidth <= 480 && screenMaxWidth !== 480) {
      setScreenMaxWidth(480);
    } else if (window.innerWidth <= 768 && screenMaxWidth !== 768) {
      setScreenMaxWidth(768);
    } else if (window.innerWidth <= 1279 && screenMaxWidth !== 1279) {
      setScreenMaxWidth(1279);
    } else if (window.innerWidth >= 1280 && screenMaxWidth !== 1280) {
      setScreenMaxWidth(1280);
    }
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function handleMenuClick() {
    setIsMenuOpen(true);
  }

  function handleLogin(dataUser) {
    mainApi
      .authorise(dataUser)
      .then((data) => {
        if (data.token) {
          setCurrentUser(dataUser);
          setToken(data.token);
          setServerError("");
        }
      })
      .catch((err) => {
        console.error(err?.message);
        setServerError(err?.message);
        setTimeout(() => setServerError(null), 3000);
      });
  }

  function handleRegister(dataUser) {
    mainApi
      .register(dataUser)
      .then(() => {
        setCurrentUser(dataUser);
        setServerError("");
        handleLogin(dataUser);
      })
      .catch((err) => {
        console.error(err);
        setServerError(err?.message);
        setTimeout(() => setServerError(null), 3000);
      });
  }

  function handleProfileChange(userData) {
    mainApi
      .setUserInfo(userData)
      .then((resp) => {
        setServerResponse("OK");
      })
      .catch((err) => {
        console.log(err);
        setServerResponse(err.message);
      })
      .finally(() => {
        setTimeout(() => setServerResponse(null), 3000);
      });
  }

  function onSignOut() {
    setCurrentUser({});
    removeToken();
    removeSearchOptions();
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <ScreenMaxWidthContext.Provider value={screenMaxWidth}>
        <div className="App">
          <Routes>
            <Route
              element={<HeaderFooterLayout onMenuClick={handleMenuClick} />}
            >
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
                    <SavedMovies />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route element={<HeaderLayout onMenuClick={handleMenuClick} />}>
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile
                      handleSignOut={onSignOut}
                      serverResponse={serverResponse}
                      handleProfileChange={handleProfileChange}
                    />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route
              path="/signin"
              element={
                <ProtectedRoute onlyUnAuth>
                  <Auth
                    onSubmit={handleLogin}
                    type="login"
                    serverError={serverError}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <ProtectedRoute onlyUnAuth>
                  <Auth
                    onSubmit={handleRegister}
                    type="register"
                    serverError={serverError}
                  />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Menu isOpen={isMenuOpen} onCloseMenu={closeMenu} />
        </div>
      </ScreenMaxWidthContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
