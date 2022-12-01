import {Genres, AuthorizationStatus} from '../constants';
import {ActionType} from './action';
import {adaptFilmToClient} from '../adapter';
import {FILMS_PER_CLICK} from '../constants';

const initialState = {
  films: [],
  promo: {},
  selectedGenre: Genres.ALL_GENRES,
  filmsRendered: FILMS_PER_CLICK,
  isDataLoaded: false,
  isPromoLoaded: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILMS_LIST_LOAD: {
      return {
        ...state,
        films: action.payload.map((film) => adaptFilmToClient(film)),
        isDataLoaded: true,
      };
    }
    case ActionType.PROMO_FILMS_LOAD: {
      return {
        ...state,
        promo: adaptFilmToClient(action.payload),
        isPromoLoaded: true,
      };
    }
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
    case ActionType.CHANGE_AUTHORIZATION_STATUS: {
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    }
    case ActionType.UPDATE_USER_DATA: {
      const {name, avatar_url: avatarUrl, email, id} = action.payload;
      return {
        ...state,
        user: {
          ...state.user,
          name,
          avatarUrl,
          email,
          id,
        }
      };
    }
    default: return state;
  }
};
