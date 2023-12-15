import "./SearchForm.css";
import React from "react";

function SearchForm() {
  const [checked, setChecked] = React.useState(false);
  const [movie, setMovie] = React.useState('');

  function handleCheck() {
    setChecked(!checked);
  }
  function handleChange(e) {
    setMovie(e.target.value);
  }

  function handleSubmit() {
    console.log("submit");
  }
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__container">
        <i className="search-form__search-icon"></i>
        <input
          type="text"
          name="movie"
          onChange={handleChange}
          placeholder="Фильм"
          value={movie}
        />
        <button type="submit" className="search-form__submit"></button>
      </div>
      <label className="search-form__checkbox">
        <input
          type="checkbox"
          name="isShort"
          checked={checked}
          onChange={handleCheck}
          value={checked}
        />
        <span className= {`search-form__visible-checkbox ${checked && 'search-form__visible-checkbox_active'}`}></span>
        Короткометражки
      </label>

    </form>
  );
}

export default SearchForm;
