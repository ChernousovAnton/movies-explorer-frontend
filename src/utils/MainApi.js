import { mainApiOptions } from "./constants";
import { getToken } from "./token";

export class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
    this._methodsBodyRequired = options.methodsBodyRequired;
  }

  async _apiRequest(url, method, body) {
    const requestOptions = {
      method: method,
      headers: {
        ...this._headers,
        "Authorization": `Bearer ${getToken()}`
      }
    }
    if (this._methodsBodyRequired.includes(method)) {
      requestOptions.body = JSON.stringify(body);
    }

    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      const error = await response.json();
      // return Promise.reject(`Ошибка: ${response.status} ${response.statusText}`);
      return Promise.reject(error);
    }
    const json = await response.json();
    return json;
  }

  getMovies() {
    return this._apiRequest(`${this._baseUrl}/movies`, 'GET');
  }

  addMovie(movie) {
    return this._apiRequest(`${this._baseUrl}/movies`, 'POST', movie);
  }

  deleteMovieById(id) {
    return this._apiRequest(`${this._baseUrl}/movies/${id}`, 'DELETE');
  }

  register({email, password}) {
    const body = {email, password};
    return this._apiRequest(`${this._baseUrl}/signup`, 'POST', body);
  }

  authorise({email, password}) {
    const body = {email, password};
    return this._apiRequest(`${this._baseUrl}/signin`, 'POST', body);
  }

  getUserInfo() {
    return this._apiRequest(`${this._baseUrl}/users/me`, 'GET');
  }

  setUserInfo(data) {
    const body = {
      name: data.name,
      email: data.email
    };
    return this._apiRequest(`${this._baseUrl}/users/me`, 'PATCH', body);
  }

  getContent(token) {
    const initialHeaders = JSON.parse(JSON.stringify(this._headers));
    this._headers = {
      ...this._headers,
      "Authorization": `Bearer ${token}`
    }
    const response = this._apiRequest(`${this._baseUrl}/users/me`, 'GET');
    this._headers = initialHeaders;
    return response;
  }
}

const mainApi = new MainApi(mainApiOptions);

export default mainApi;