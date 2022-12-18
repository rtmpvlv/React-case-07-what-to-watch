import {Genres, AuthorizationStatus} from '../constants';
import {ActionType} from './action';
import {adaptFilmToClient} from '../adapter';
import {FILMS_PER_CLICK} from '../constants';

const initialState = {
  films: [],
  film: null,
  filmId: null,
  reviews: [],
  promo: null,
  selectedGenre: Genres.ALL_GENRES,
  filmsRendered: FILMS_PER_CLICK,
  isFilmsLoaded: false,
  isFilmLoaded: false,
  isPromoFilmLoaded: false,
  isReviewsLoaded: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILMS_LOAD: {
      return {
        ...state,
        films: action.payload.map((film) => adaptFilmToClient(film)),
        isFilmsLoaded: true,
      };
    }
    case ActionType.FILM_LOAD: {
      return {
        ...state,
        film: adaptFilmToClient(action.payload),
        isFilmLoaded: true,
      };
    }
    case ActionType.RESET_FILM: {
      return {
        ...state,
        film: null,
        isFilmLoaded: false,
      };
    }
    case ActionType.SET_FILM_ID: {
      return {
        ...state,
        filmId: action.payload,
      };
    }
    case ActionType.LOAD_REVIEWS: {
      return {
        ...state,
        reviews: action.payload,
        isReviewsLoaded: true,
      };
    }
    case ActionType.RESET_REVIEWS: {
      return {
        ...state,
        reviews: [],
        isReviewsLoaded: false,
      };
    }
    case ActionType.PROMO_FILM_LOAD: {
      return {
        ...state,
        promo: adaptFilmToClient(action.payload),
        isPromoFilmLoaded: true,
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
