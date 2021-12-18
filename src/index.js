import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app';
import {adaptFilmToClient} from './adapter';

import {films} from './mocks/films';

ReactDOM.render(
    <App
      filmsData = {films.map((film) => adaptFilmToClient(film))}
    />,
    document.querySelector(`#root`)
);
