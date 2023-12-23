import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import React from "react";
import SearchForm from '../SearchForm/SearchForm';
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import {
  getFilteredMoviesBySearchText,
  getFilteredMoviesByIsShort
} from "../../utils/utils";
import { setSearchOptions, getSearchOptions} from "../../utils/localStorage";
import { msg } from "../../utils/constants";


function Movies() {

  const [isLoading, setIsLoading] = React.useState(false);
  const [foundMovies, setFoundMovies] = React.useState([]);
  const [resultMovies, setResultMovies] = React.useState([]);   // проверенные картички на предмет saved
  const [searchMsg, setSearchMsg] = React.useState(null);

  React.useEffect(() => {
    const searchOptions = getSearchOptions();
    if (searchOptions) {
      const {foundMovies} = JSON.parse(searchOptions);
      setFoundMovies(foundMovies);
      setMovieSaved(foundMovies);
    }
  }, [])

  function handleSearchSubmit(searchText, isShort) {
    setIsLoading(true);
    setResultMovies([]);

    moviesApi.getMovies()
      .then(moviesData => {
        
        const filteredMoviesBySearchText = getFilteredMoviesBySearchText(moviesData, searchText);
        setFoundMovies(filteredMoviesBySearchText);
        setSearchOptions(searchText, isShort, filteredMoviesBySearchText);

        const filteredMoviesByIsShort = getFilteredMoviesByIsShort(filteredMoviesBySearchText, isShort);
        
        if (filteredMoviesByIsShort.length === 0) {
          setSearchMsg(msg["nothing found"]);
          return;
        }

        setMovieSaved(filteredMoviesByIsShort);
      })
      .catch(err => {
        console.log(err);
        setSearchMsg(msg["server problem"]);
      })
      .finally(() => setIsLoading(false))

  }

  function handleCheckChange(isShort) {
    const filteredMoviesByIsShort = getFilteredMoviesByIsShort(foundMovies, isShort);
    setMovieSaved(filteredMoviesByIsShort);
    const searchOptions = getSearchOptions();
    if (searchOptions) {
      const {searchText, foundMovies} = JSON.parse(searchOptions);
      setSearchOptions(searchText, isShort, foundMovies);
    }
  }

  function setMovieSaved(moviesData) {
    mainApi.getMovies()
      .then((savedMovies) => {
        const updatedMoviesResult = moviesData.map(resultMovie => {
          const movie = savedMovies.find(savedMovie => savedMovie.movieId === resultMovie.id);
          if (movie) {
            resultMovie.isSaved = true;
            resultMovie._id = movie._id;
          } else {
            resultMovie.isSaved = false;
            resultMovie._id = '';
          }
          return resultMovie;
          }
        )
        setResultMovies(updatedMoviesResult);
      })
      .catch((err) => console.log(err));
  }

  function handleSave(movie) {
    mainApi.addMovie(movie)
      .then(movie => {if (movie) setMovieSaved(resultMovies)})
      .catch((err) => console.log(err))
  }

  function handleDelete(id) {
    mainApi.deleteMovieById(id)
      .then(movie => {if (movie) setMovieSaved(resultMovies)})
      .catch((err) => console.log(err))
  }

  return (
    <>
      <SearchForm onSubmit={handleSearchSubmit} onChange={handleCheckChange} />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList movieCards={resultMovies} onSaveClick={handleSave} onDeleteClick={handleDelete} searchMsg={searchMsg}/>
      )}
    </>
  );
}

export default Movies;
