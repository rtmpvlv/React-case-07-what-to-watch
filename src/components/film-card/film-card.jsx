import React from 'react';
import {Link} from 'react-router-dom';
import {FILM_DATA_TYPES} from '../types';

export const Card = ({film, onMouseHover}) => {
  const {id, name, posterImage} = film;

  const handleMouseEnter = () => {
    onMouseHover(id);
  };

  const handleMouseLeave = () => {
    onMouseHover(null);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-movie-card__image">
        <img src={posterImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
};

Card.propTypes = FILM_DATA_TYPES;
