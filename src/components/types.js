import PropTypes from 'prop-types';

const filmDataType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string).isRequired,
  runTime: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
});

export const APP_TYPES = {
  films: PropTypes.arrayOf(filmDataType).isRequired,
  promo: filmDataType,
  isDataLoaded: PropTypes.bool.isRequired,
  isPromoLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

export const MAIN_TYPES = {
  films: PropTypes.arrayOf(filmDataType).isRequired,
  promo: filmDataType,
  onGenreChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  filmsRendered: PropTypes.number.isRequired,
  showMoreFilms: PropTypes.func.isRequired,
};

export const FILMS_DATA_TYPES = {
  films: PropTypes.arrayOf(filmDataType).isRequired,
};

export const FILM_DATA_TYPES = {
  film: filmDataType
};

export const GENRES_LIST_TYPES = {
  selectedGenre: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
};

export const SHOWMOREBUTTON_TYPES = {
  filmsRendered: PropTypes.number.isRequired,
  showMoreFilms: PropTypes.func.isRequired,
};

export const REVIEW_FORM_TYPES = {
  backgroundColor: PropTypes.string.isRequired,
};

export const PRIVATE_ROUTE_TYPES = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export const USER = {
  name: PropTypes.string,
  avatarUrl: PropTypes.string.isRequired,
  email: PropTypes.string,
  id: PropTypes.string,
};
