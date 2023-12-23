import "./MoviesCardList.css";
import React, { useContext } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { ScreenMaxWidthContext } from "../../contexts/ScreenMaxWidthContext";
import { getInitialCardCount, getMoreCardCount } from "../../utils/utils";
import MoviesMoreBtn from "../MoviesMoreBtn/MoviesMoreBtn";


function MoviesCardList({ movieCards, onSaveClick, onDeleteClick, searchMsg }) {

  const screenMaxWidth = useContext(ScreenMaxWidthContext);
  const [shownMovieCardsCount, setShownMovieCardsCount] = React.useState(getInitialCardCount(screenMaxWidth));

  function handleMoreBtnClick() {
    setShownMovieCardsCount(shownMovieCardsCount + getMoreCardCount(screenMaxWidth))
  }

  return (
    <div className="movies-card-list">
      <span className="movies-card-list__msg">{searchMsg}</span>
      <ul className="movies-card-list__container">
        {movieCards.slice(0, shownMovieCardsCount).map((movie) => (
          <MovieCard
            key={movie.id ?? movie._id}
            movie={movie}
            onSaveClick={onSaveClick}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </ul>
      {movieCards.length > shownMovieCardsCount ? (
        <MoviesMoreBtn onClick={handleMoreBtnClick} />
      ) : null}
    </div>
  );
}

export default MoviesCardList;
