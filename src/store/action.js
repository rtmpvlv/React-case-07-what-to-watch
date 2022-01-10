export const ActionType = {
  CHANGE_GENRE: `@genre/changeGenre`,
  INCREASE_FILMS_QUANTITY: `@films/increaseQuantity`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  increaseQuantity: (number) => ({
    type: ActionType.INCREASE_FILMS_QUANTITY,
    payload: number,
  }),
};
