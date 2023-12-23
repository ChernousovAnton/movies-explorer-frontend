export const apiUrl = 'https://api.nomoreparties.co';

export const moviesApiOptions = {
  baseUrl: `${apiUrl}/beatfilm-movies`,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const TOKEN_KEY = 'jwt';

const bodyMethods = ['POST', 'PATCH', 'PUT'];

export const mainApiOptions = {
  baseUrl: 'https://api.movies77.nomoredomainsmonster.ru',
  headers: {
    'Content-Type': 'application/json',
  },
  methodsBodyRequired: bodyMethods,
};

export const shortDuration = 40;

export const msg = {
  'nothing found': "Ничего не найдено",
  'server problem': "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",

}
