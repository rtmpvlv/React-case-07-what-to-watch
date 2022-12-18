import {ActionCreator} from './action';
import {AuthorizationStatus, ApiRequestURLs} from '../constants';

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(ApiRequestURLs.FILMS)
    .then(({data}) => dispatch(ActionCreator.loadFilms(data)))
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(ApiRequestURLs.FILMS + id)
    .then(({data}) => dispatch(ActionCreator.loadFilm(data)))
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(ApiRequestURLs.REVIEWS + id)
    .then(({data}) => dispatch(ActionCreator.loadReviews(data)))
);

export const postReview = (id, comment) => (dispatch, _getState, api) =>
  api
    .post(ApiRequestURLs.REVIEWS + id, comment)
    .then(({data}) => dispatch(ActionCreator.loadReviews(data)));

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
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
