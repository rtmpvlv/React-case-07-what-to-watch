import React from 'react';
import {GENRES_LIST_TYPES} from '../types';

const GenresList = ({availableGenres, selectedGenre, onGenreChange}) => {

  const handleClick = (genre) => {
    onGenreChange(genre);
  };

  return (
    <ul className="catalog__genres-list">
      {availableGenres.map((item) => (
        <li
          key={item}
          className={selectedGenre === item ?
            `catalog__genres-item catalog__genres-item--active` :
            `catalog__genres-item`}
          onClick={() =>handleClick(item)}>
          <a href="#" className="catalog__genres-link">{item}</a>
        </li>
      ))}
    </ul>
  );
};

GenresList.propTypes = GENRES_LIST_TYPES;

export default GenresList;
