import "./MoviesMoreBtn.css";

function MoviesMoreBts({ onClick }) {
  function handleClick() {
    onClick();
  }
  return (
    <button className="movies-more-btn" onClick={handleClick}>
      Ещё
    </button>
  );
}

export default MoviesMoreBts;
