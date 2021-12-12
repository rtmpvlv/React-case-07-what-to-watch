import React from 'react';
import {FILM_DATA_TYPES} from '../types';
import Main from '../main/main';

const App = (props) => {
  const {title, genre, releaseYear} = props;

  return (
    <Main
      title = {title}
      genre = {genre}
      releaseYear = {releaseYear}
    />
  );
};

App.propTypes = FILM_DATA_TYPES;

export default App;
