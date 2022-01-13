export const ActionType = {
  FILMS_LIST_LOAD: `@filmsList/Load`,
  PROMO_FILMS_LOAD: `@promo/Load`,
  CHANGE_GENRE: `@genre/changeGenre`,
  INCREASE_FILMS_QUANTITY: `@films/increaseQuantity`,
  REQUIRED_AUTHORIZATION: `@user/requiredAuthorization`,
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
  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
};
