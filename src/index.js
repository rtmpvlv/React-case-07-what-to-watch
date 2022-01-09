import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {App} from './components/app/app';
import {adaptFilmToClient} from './adapter';
import {reducer} from './store/reducer';

import {films} from './mocks/films';

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
      <App
        filmsData = {films.map((film) => adaptFilmToClient(film))}
      />
    </Provider>,
    document.querySelector(`#root`)
);
