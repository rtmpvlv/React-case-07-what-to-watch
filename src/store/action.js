export const ActionType = {
  FILMS_LIST_LOAD: `@filmsList/Load`,
  PROMO_FILMS_LOAD: `@promo/Load`,
  CHANGE_GENRE: `@genre/changeGenre`,
  INCREASE_FILMS_QUANTITY: `@films/increaseQuantity`,
  CHANGE_AUTHORIZATION_STATUS: `@user/changeAuthorizationStatus`,
  UPDATE_USER_DATA: `@user/updateUserData`,
};

export const ActionCreator = {
  filmsListLoad: (films) => ({
    type: ActionType.FILMS_LIST_LOAD,
    payload: films,
  }),
  promoFilmLoad: (promo) => ({
    type: ActionType.PROMO_FILMS_LOAD,
    payload: promo,
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
