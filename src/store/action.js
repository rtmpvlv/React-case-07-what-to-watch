export const ActionType = {
  FILMS_LOAD: `@filmsList/Load`,
  FILM_LOAD: `@film/Load`,
  SET_FILM_ID: `@film/setFilmId`,
  RESET_FILM: `@film/resetFilm`,
  PROMO_FILM_LOAD: `@promo/Load`,
  LOAD_REVIEWS: `@reviews/loadReviews`,
  RESET_REVIEWS: `@reviews/resetReviews`,
  CHANGE_GENRE: `@genre/changeGenre`,
  INCREASE_FILMS_QUANTITY: `@films/increaseQuantity`,
  CHANGE_AUTHORIZATION_STATUS: `@user/changeAuthorizationStatus`,
  UPDATE_USER_DATA: `@user/updateUserData`,
};

export const ActionCreator = {
  loadFilms: (films) => ({
    type: ActionType.FILMS_LOAD,
    payload: films,
  }),
  loadFilm: (films) => ({
    type: ActionType.FILM_LOAD,
    payload: films,
  }),
  setFilmId: (id) => ({
    type: ActionType.SET_FILM_ID,
    payload: id,
  }),
  resetFilm: () => ({
    type: ActionType.RESET_FILM,
  }),
  promoFilmLoad: (promo) => ({
    type: ActionType.PROMO_FILM_LOAD,
    payload: promo,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  resetReviews: () => ({
    type: ActionType.RESET_REVIEWS,
  }),
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  increaseQuantity: (number) => ({
    type: ActionType.INCREASE_FILMS_QUANTITY,
    payload: number,
  }),
  changeAuthorizationStatus: (status) => ({
    type: ActionType.CHANGE_AUTHORIZATION_STATUS,
    payload: status,
  }),
  updateUserData: (data) => ({
    type: ActionType.UPDATE_USER_DATA,
    payload: data,
  }),
};
