import { shortDuration } from "./constants";

export function getFilteredMoviesBySearchText(moviesData, searchText) {
  const searchTextFilter = moviesData.filter(
    (movie) =>
      movie?.nameRU.toLowerCase().includes(searchText.toLowerCase()) ||
      movie?.nameEN.toLowerCase().includes(searchText.toLowerCase())
  );
  return searchTextFilter;
}

export function getFilteredMoviesByIsShort(moviesData, isShort) {
  if (isShort) {
    return moviesData.filter((movie) => movie?.duration <= shortDuration);
  }
  return moviesData;
}


export function getInitialCardCount(screenMaxWidth) {
  return screenMaxWidth === 1280 ? 12 : screenMaxWidth >= 768 ? 8 : 5;
}

export function getMoreCardCount(screenMaxWidth) {
  return screenMaxWidth >= 1280 ? 3 : 2;
}

