import React from "react";
import Card from "../film-card/film-card";
import {FILMS_DATA_TYPES} from "../types";

export const FilmsList = (props) => {
  const {films, filmsRendered} = props;

  const renderFilms = () => {
    let filmCards = [];
    for (let i = 0; i < Math.min(filmsRendered, films.length); i++) {
      filmCards.push(<Card key={films[i].id} film={films[i]} />);
    }
    return filmCards;
  };

  return <div className="catalog__movies-list">{renderFilms()}</div>;
};

FilmsList.propTypes = FILMS_DATA_TYPES;
