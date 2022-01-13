import {ActionCreator} from './action';
import {AuthorizationStatus, ApiRequestURLs} from '../constants';

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(ApiRequestURLs.FILMS)
    .then(({data}) => dispatch(ActionCreator.filmsListLoad(data)))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(ApiRequestURLs.PROMO_FILM)
    .then(({data}) => dispatch(ActionCreator.promoFilmLoad(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(ApiRequestURLs.LOGIN)
    .then(() => dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(ApiRequestURLs.LOGIN, {email, password})
    .then(() => dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH)))
);
