import {Genres, AuthorizationStatus} from '../constants';
import {ActionType} from './action';
import {adaptFilmToClient} from '../adapter';

const initialState = {
  films: [],
  promo: {
    id: 0,
    name: ``,
    posterImage: ``,
    previewImage: ``,
    backgroundImage: ``,
    backgroundColor: ``,
    videoLink: ``,
    previewVideoLink: ``,
    description: ``,
    rating: 0,
    scoresCount: 0,
    director: ``,
    starring: [],
    runTime: 0,
    genre: ``,
    released: 0,
    isFavorite: false,
  },
  selectedGenre: Genres.ALL_GENRES,
  filmsRendered: 8,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
  isPromoLoaded: false,
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
    case ActionType.REQUIRED_AUTHORIZATION: {
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    }
    default: return state;
  }
};
