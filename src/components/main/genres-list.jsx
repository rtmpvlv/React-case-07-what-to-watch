import React from 'react';
import {Genres} from '../../constants';
import {GENRES_LIST_TYPES} from '../types';

const GenresList = ({films, selectedGenre, onGenreChange}) => {

  const handleClick = (genre) => {
    onGenreChange(genre);
  };

  const getAvailableGenres = () => {
    const availableGenres = Array.from(new Set(films.map((film) => film.genre)));
    availableGenres.unshift(Genres.ALL_GENRES);
    return availableGenres;
  };

  const getClassName = (genre) => (`catalog__genres-item ${selectedGenre === genre && `catalog__genres-item--active`}`);

  return (
    <ul className="catalog__genres-list">
      {getAvailableGenres().map((genre) => (
        <li
          key={genre}
          className={getClassName(genre)}
          onClick={() =>handleClick(genre)}>
          <a className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
};

GenresList.propTypes = GENRES_LIST_TYPES;

export default GenresList;
