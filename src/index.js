import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {createAPI} from './services/api';
import {ActionCreator} from './store/action';
import {checkAuth} from './store/api-actions';
import {reducer} from './store/reducer';
import {AuthorizationStatus} from './constants';

import {adaptFilmToClient} from './adapter';
import {films} from './mocks/films';

const api = createAPI(
    () => store.dispatch(ActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App
        filmsData = {films.map((film) => adaptFilmToClient(film))}
      />
    </Provider>,
    document.querySelector(`#root`)
);
