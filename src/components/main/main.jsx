import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {FilmsList} from '../films-list/films-list';
import {FILMS_DATA_TYPES} from '../types';
import {UserBlock} from '../user-block/user-block';
import GenresList from './genres-list';
import withMainPage from './hocs/with-main-page.js';
import {sortedFilms} from '../../utils';
import {Genres, FILMS_PER_CLICK} from '../../constants';
import ShowMoreButton from './show-more-button';


export const Main = ({filmsData, onGenreChange, selectedGenre, filmsRendered, increaseRenderedFilmsQuantity}) => {

  const posterFilm = filmsData[0];
  const {id, name, genre, released, posterImage} = posterFilm;

  const availableGenres = Array.from(new Set(filmsData.map((point) => point.genre)));
  availableGenres.unshift(Genres.ALL_GENRES);

  const films = sortedFilms[selectedGenre](filmsData);

  const history = useHistory();

  const handlePlayFilm = () => {
    history.push(`/player/${id}`);
  };

  const handleOpenFilmPage = () => {
    history.push(`/films/${id}`);
  };

  useEffect(() => {
    increaseRenderedFilmsQuantity(FILMS_PER_CLICK);
  }, []);

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt={name}/>
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <UserBlock/>
        </header>
        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img
                src={posterImage}
                alt={name}
                width="218"
                height="327"
                onClick={handleOpenFilmPage}
              />
            </div>
            <div className="movie-card__desc">
              <h2
                className="movie-card__title"
                onClick={handleOpenFilmPage}
              >
                {name}
              </h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>
              <div className="movie-card__buttons">
                <button
                  className="btn btn--play movie-card__button"
                  type="button"
                  onClick={handlePlayFilm}
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList
            availableGenres={availableGenres}
            selectedGenre={selectedGenre}
            onGenreChange={onGenreChange}
          />
          <FilmsList
            filmsData={films}
            filmsRendered={filmsRendered}
          />
          {films.length > filmsRendered &&
          <ShowMoreButton
            filmsRendered={filmsRendered}
            increaseRenderedFilmsQuantity={increaseRenderedFilmsQuantity}
          />}
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

Main.propTypes = FILMS_DATA_TYPES;

export const MainWrapped = withMainPage(Main);
