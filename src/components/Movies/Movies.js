import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import React from "react";

function Movies() {
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <>
      <SearchForm/>
      {isLoading ? 
      <Preloader /> : 
      <MoviesCardList/>
      }
    </>
  )
}

export default Movies;
