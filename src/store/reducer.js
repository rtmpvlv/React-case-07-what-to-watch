// import {films} from '../mocks/films';
// import {adaptFilmToClient} from '../adapter';
import {Genres} from '../constants';
import {ActionType} from './action';
// import {sortedFilms} from '../utils';

// const filmsData = films.map((film) => adaptFilmToClient(film));

const initialState = {
  selectedGenre: Genres.ALL_GENRES,
  // filmsData,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE: {
      return {
        ...state,
        selectedGenre: action.payload,
        // filmsData: sortedFilms[Genres[action.payload]](filmsData),
      };
    }
    default: return state;
  }
};
