import {moviesApiOptions} from './constants.js';


class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }
  async _apiRequest(url, method) {
    const requestOptions = {
      method: method,
      headers: this._headers
    }

    const response = await fetch(url, requestOptions);
    if (!response.ok) return Promise.reject(`Ошибка: ${response.status} ${response.statusText}`);
    const json = await response.json();
    return json;
  }

  getMovies() {
    return this._apiRequest(`${this._baseUrl}`, 'GET');
  }
}

const moviesApi = new MoviesApi(moviesApiOptions);

export default moviesApi;
