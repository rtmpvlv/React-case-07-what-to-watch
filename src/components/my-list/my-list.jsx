import React from 'react';
import {HeaderLink} from '../header-link/header-link';
import {FilmsList} from '../films-list/films-list';
import {FILMS_DATA_TYPES} from '../types';
import {Footer} from '../footer/footer';
import {UserBlock} from '../user-block/user-block';

export const MyList = ({films}) => {
  const myFilmsList = films.filter((film) => film.isFavorite);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <HeaderLink/>
        </div>
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock/>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList
          films={myFilmsList}
        />
      </section>
      <Footer/>
    </div>
  );
};

MyList.propTypes = FILMS_DATA_TYPES;

