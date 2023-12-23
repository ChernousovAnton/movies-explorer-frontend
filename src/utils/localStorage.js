export const setSearchOptions = (searchText, isShort, foundMovies) => {
  localStorage.setItem('searchOptions', JSON.stringify({
    searchText,
    isShort,
    foundMovies,
  }))
};

export const getSearchOptions = () => {
  const searchOptions = localStorage.getItem('searchOptions');
  return searchOptions;
};

export const removeSearchOptions = () => {
  localStorage.removeItem('searchOptions');
};
