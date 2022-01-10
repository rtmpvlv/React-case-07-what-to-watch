import React from 'react';
import {Card} from '../film-card/film-card';
import {FILMS_DATA_TYPES} from '../types';

export const FilmsList = ({filmsData, filmsRendered}) => {

  const renderFilms = () => {
    let filmCards = [];
    for (let i = 0; i < Math.min(filmsRendered, filmsData.length); i++) {
      filmCards.push(
          <Card
            key = {filmsData[i].id}
            film = {filmsData[i]}
          />
      );
    }
    return filmCards;
  };

  return (
    <div className="catalog__movies-list">
      {renderFilms()}
    </div>
  );
};

FilmsList.propTypes = FILMS_DATA_TYPES;
