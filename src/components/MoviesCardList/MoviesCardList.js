import MoviesCard from "../MoviesCard/MoviesCard";
import image from "../../images/test.png";
import "./MoviesCardList.css";
import { useLocation } from "react-router-dom";

function MoviesCardList() {

  const location = useLocation();
  const isSavedMoviesPath = location.pathname === '/saved-movies' ? true : false
  let data = [];
  for (let i = 0; i < 5; i++) {
    data.push({
      id: i,
      title: "33 слова о дизайнере авпрваправпрап варп вапр пвар ",
      duration: "1ч 47м",
      image: image,
    });
  }
  return (
    <div className="movies-card-list__container">
      <ul className="movies-card-list">
        {data.map(movie => (
          <MoviesCard
            key={movie._id}
            title={movie.title}
            duration={movie.duration}
            image={movie.image}
            isSavedMoviesPath={isSavedMoviesPath}
          />
        ))}
      </ul>
      {!isSavedMoviesPath && <button className="movies-card-list__more">Ещё</button>
      }
    </div>
  );
}

export default MoviesCardList;
