import MoviesCardList from "../MoviesCardList/MoviesCardList";
import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import mainApi from "../../utils/MainApi";
import {
  getFilteredMoviesBySearchText,
  getFilteredMoviesByIsShort
} from "../../utils/utils";
import { msg } from "../../utils/constants";

function SavedMovies() {
  const [savedMovies, setSavedMovies] = React.useState([]); // список всех сохраненных фильмов
  const [foundMovies, setFoundMovies] = React.useState([]); 
  const [resultMovies, setResultMovies] = React.useState([]); // список отображаемых фильмов
  const [searchMsg, setSearchMsg] = React.useState('');
  const [currentIsShort, setCurrentIsShort] = React.useState(false);
  const [currentSearchText, setCurrentSearchText] = React.useState('');


  React.useEffect(() => {
    mainApi.getMovies()
      .then(movies => {
        setSavedMovies(movies);
        // setResultMovies(movies)
      })
      .catch((err) => console.log(err))
  }, [])

  function handleCheckChange(isShort, movies=foundMovies) {
    const filteredMoviesByIsShort = getFilteredMoviesByIsShort(movies, isShort);
    if (filteredMoviesByIsShort.length === 0) {
      setSearchMsg(msg["nothing found"]);
    }
    setResultMovies(filteredMoviesByIsShort);
    
  }

  function handleSearchSubmit(searchText, isShort, movies=savedMovies) {
    setCurrentIsShort(isShort);
    setCurrentSearchText(searchText);
    const filteredMoviesBySearchText = getFilteredMoviesBySearchText(movies, searchText);
    setFoundMovies(filteredMoviesBySearchText);
    handleCheckChange(isShort, filteredMoviesBySearchText);
  }

  function handleDelete(id) {
    mainApi.deleteMovieById(id)
      .then(() => {
        mainApi.getMovies()
          .then(movies => {
            setSavedMovies(movies);
            handleSearchSubmit(currentSearchText, currentIsShort, movies)
          })
          .catch((err) => console.log(err))
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <SearchForm onSubmit={handleSearchSubmit} onChange={handleCheckChange} />
      <MoviesCardList movieCards={resultMovies} onDeleteClick={handleDelete} searchMsg={searchMsg} />
    </>
  );
}

export default SavedMovies;
