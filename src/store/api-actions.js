import {ActionCreator} from './action';
import {AuthorizationStatus, ApiRequestURLs} from '../constants';

export const loadFilms = () => (dispatch, _getState, api) => (
  api.get(ApiRequestURLs.FILMS)
    .then(({data}) => dispatch(ActionCreator.filmsListLoad(data)))
);

export const loadPromoFilm = () => (dispatch, _getState, api) => (
  api.get(ApiRequestURLs.PROMO_FILM)
    .then(({data}) => dispatch(ActionCreator.promoFilmLoad(data)))
);

export const checkLogin = () => (dispatch, _getState, api) => (
  api.get(ApiRequestURLs.LOGIN)
    .then(({data}) => dispatch(ActionCreator.updateUserData(data)))
    .then(() => dispatch(ActionCreator.changeAuthorizationStatus(AuthorizationStatus.AUTH)))
    .catch(() => {
      throw new Error(`Authorization failed.`);
    })
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(ApiRequestURLs.LOGIN, {email, password})
  .then(({data}) => dispatch(ActionCreator.updateUserData(data)))
  .then(() => dispatch(ActionCreator.changeAuthorizationStatus(AuthorizationStatus.AUTH)))
    .catch(() => {
      throw new Error(`Authorization failed.`);
    })
);
