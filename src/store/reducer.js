import {Genres} from '../constants';
import {ActionType} from './action';

const initialState = {
  selectedGenre: Genres.ALL_GENRES,
  filmsRendered: 8,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE: {
      return {
        ...state,
        selectedGenre: action.payload,
      };
    }
    case ActionType.INCREASE_FILMS_QUANTITY: {
      return {
        ...state,
        filmsRendered: action.payload,
      };
    }
    default: return state;
  }
};
