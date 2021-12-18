import React from 'react';
import {useState} from 'react';
import {Card} from '../film-card/film-card';
import {FILMS_DATA_TYPES} from '../types';

export const FilmsList = ({filmsData}) => {
  const [, setHoveredElement] = useState(null);
  return (
    <div className="catalog__movies-list">
      {
        filmsData.map((film) => <Card
          key = {film.id}
          film = {film}
          onMouseHover = {setHoveredElement}
        />)
      }
    </div>
  );
};

FilmsList.propTypes = FILMS_DATA_TYPES;
