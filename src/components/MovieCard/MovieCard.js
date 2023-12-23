import "./MovieCard.css";
import React from "react";
import { apiUrl } from "../../utils/constants";
import { useLocation } from "react-router-dom";

function MovieCard({ movie, onDeleteClick, onSaveClick }) {
  const location = useLocation();
  const isSavedMoviesPath = location.pathname === "/saved-movies" ? true : false;
  const image = isSavedMoviesPath ? movie.image : `${apiUrl}${movie.image.url}`;
  const thumbnail = isSavedMoviesPath ? movie.thumbnail : `${apiUrl}${movie.image.formats.thumbnail.url}`;

  function handleSaveClick() {
    if (movie.isSaved) {
      console.log(movie)
      onDeleteClick(movie._id);
    } else {
      const newMovie = {
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        image: image,
        thumbnail: thumbnail,
        movieId: movie.id,
      };
      onSaveClick(newMovie);
    }
  }

  return (
    <li className="movie-card">
      <div className="movie-card__container">
        <h2 className="movie-card__title">{movie.nameRU}</h2>
        <p className="movie-card__duration">{`${(movie.duration - (movie.duration % 60)) / 60} h ${movie.duration % 60} min`}</p>
        {isSavedMoviesPath ? (
          <button
            className="movie-card__save movie-card__save_type_close"
            onClick={() => onDeleteClick(movie._id)}
          />
        ) : (
          <button
            className={`movie-card__save ${movie.isSaved && "movie-card__save_active"}`}
            onClick={handleSaveClick}
          />
        )}
      </div>
      <a href={movie.trailerLink} target="youtube"><img className="movie-card__image" src={image} alt={movie.nameRU} /></a>
      
    </li>
  );
}

export default MovieCard;
