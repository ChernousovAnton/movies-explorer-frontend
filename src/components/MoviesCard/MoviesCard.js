import "./MoviesCard.css";
import React from "react";

function MoviesCard({ title, duration, image, isSavedMoviesPath }) {
  const [isSaved, setIsSaved] = React.useState(false);
  
  function handleSaveClick() {
    setIsSaved(!isSaved);
  }

  function handleUnsaveClick() {
    console.log('delete card');
  }

  return (
    <div className="movies-card">
      <div className="movies-card__container">
        <h2 className="movies-card__title">{title}</h2>
        <p className="movies-card__duration">{duration}</p>
        <button
          className={
            isSavedMoviesPath
              ?  "movies-card__save movies-card__save_type_close" :
            isSaved
              ? "movies-card__save movies-card__save_active"
              : "movies-card__save"
          }
          onClick={isSavedMoviesPath ? handleUnsaveClick : handleSaveClick}
        ></button>
      </div>
      <img className="movies-card__image" src={image} alt={title}></img>
    </div>
  );
}

export default MoviesCard;
