import React from 'react';
import {useParams, useHistory, Link} from 'react-router-dom/cjs/react-router-dom.min';
import {FilmsList} from '../films-list/films-list';
import {Footer} from '../footer/footer';
import {HeaderLink} from '../header-link/header-link';
import {FILMS_DATA_TYPES} from '../types';
import {UserBlock} from '../user-block/user-block';
import {Tabs} from './nav';

const SIMILAR_LIST_LENGTH = 4;

export const FilmPage = ({films}) => {
  const currentId = Number(useParams().id);
  const currentFilm = films.find((film) => film.id === currentId);
  const {id, name, posterImage, backgroundImage, backgroundColor, genre, released} = currentFilm;

  const history = useHistory();
  const handlePlayMovie = () => {
    history.push(`/player/${id}`);
  };

  let similarFilms = films.filter((film) => currentFilm !== film && currentFilm.genre === film.genre);

  return (
    <>
      <section className="movie-card movie-card--full" style={{
        backgroundColor
      }}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header movie-card__head">
            <div className="logo">
              <HeaderLink/>
            </div>
            <UserBlock/>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>
              <div className="movie-card__buttons">
                <button
                  className="btn btn--play movie-card__button"
                  type="button"
                  onClick={handlePlayMovie}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
            </div>
            <div className="movie-card__desc">
              <Tabs film={currentFilm}/>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList filmsData={similarFilms} filmsRendered={SIMILAR_LIST_LENGTH}/>
        </section>
        <Footer/>
      </div>
    </>
  );
};

FilmPage.propTypes = FILMS_DATA_TYPES;
