import React from 'react';
import {Card} from '../film-card/film-card';
import {FILMS_DATA_TYPES} from '../types';

export const FilmsList = ({filmsData}) => {
  return (
    <div className="catalog__movies-list">
      {
        filmsData.map((film) => <Card
          key = {film.id}
          film = {film}
        />)
      }
    </div>
  );
};

FilmsList.propTypes = FILMS_DATA_TYPES;
