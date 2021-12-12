import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  FILM_TITLE: `The Grand Budapest Hotel`,
  FILM_GENRE: `Drama`,
  FILM_RELEASE_YEAR: 2014,
};

ReactDOM.render(
    <App
      title = {Setting.FILM_TITLE}
      genre = {Setting.FILM_GENRE}
      releaseYear = {Setting.FILM_RELEASE_YEAR}
    />,
    document.querySelector(`#root`)
);
