import "./SearchForm.css";
import React from "react";
import { getSearchOptions } from "../../utils/localStorage";
import { useLocation } from "react-router-dom";

function SearchForm({onSubmit, onChange}) {

  const location = useLocation();
  const [searchText, setSearchText] = React.useState('');
  const [isShort, setIsShort] = React.useState(false);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    if (location.pathname === '/movies') {

      const searchOptions = getSearchOptions();
      if (searchOptions) {
        const {searchText, isShort} = JSON.parse(searchOptions);
        setSearchText(searchText);
        setIsShort(isShort);
      }
    }
  }, []);

  function handleCheck() {
    onChange(!isShort);
    setIsShort(!isShort);
  }
  function handleChange(e) {
    setSearchText(e.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    if (searchText === '') {
      return setError('Нужно ввести ключевое слово');
    }
    setError('');
    onSubmit(searchText, isShort);
  }
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__container">
        <i className="search-form__search-icon"></i>
        <input
          className="search-form__input"
          type="text"
          name="searchText"
          onChange={handleChange}
          placeholder="Фильм"
          value={searchText}
        />
        <button type="submit" className="search-form__submit"></button>
      </div>
      <span className="search-form__error">{error}</span>
      <label className="search-form__checkbox">
        <input
          type="checkbox"
          name="isShort"
          checked={isShort}
          onChange={handleCheck}
          value={isShort}
        />
        <span className= {`search-form__visible-checkbox ${isShort && 'search-form__visible-checkbox_active'}`}></span>
        Короткометражки
      </label>

    </form>
  );
}

export default SearchForm;
