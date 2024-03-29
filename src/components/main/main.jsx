import React, {useEffect} from "react";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import {FilmsList} from "../films-list/films-list";
import GenresList from "./genres-list";
import ShowMoreButton from "./show-more-button";
import {Genres, FILMS_PER_CLICK} from "../../constants";
import {MAIN_TYPES} from "../types";
import {ActionCreator} from "../../store/action";
import {PageHeader} from "../page-header/page-header";

export const Main = (props) => {
  const {
    films,
    promoFilm,
    onGenreChange,
    selectedGenre,
    filmsRendered,
    showMoreFilms,
  } = props;

  const {id, name, genre, released, posterImage, backgroundImage} = promoFilm;
  const history = useHistory();

  useEffect(() => {
    return showMoreFilms(FILMS_PER_CLICK);
  }, []);

  const getFilms = () => {
    if (selectedGenre !== Genres.ALL_GENRES) {
      return films.filter((film) => film.genre === selectedGenre);
    }
    return films;
  };

  const handlePlayFilm = () => {
    history.push(`/player/${id}`);
  };

  const handleOpenFilmPage = () => {
    history.push(`/films/${id}`);
  };

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>
        <PageHeader/>
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
              <h2 className="movie-card__title" onClick={handleOpenFilmPage}>
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
                <button
                  className="btn btn--list movie-card__button"
                  type="button"
                >
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
            films={films}
            selectedGenre={selectedGenre}
            onGenreChange={onGenreChange}
          />
          <FilmsList films={getFilms()} filmsRendered={filmsRendered} />
          {getFilms().length > filmsRendered && (
            <ShowMoreButton
              filmsRendered={filmsRendered}
              showMoreFilms={showMoreFilms}
            />
          )}
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

Main.propTypes = MAIN_TYPES;

const mapStateToProps = (state) => {
  return {
    films: state.films,
    promoFilm: state.promo,
    selectedGenre: state.selectedGenre,
    filmsRendered: state.filmsRendered,
    authorizationStatus: state.authorizationStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGenreChange(item) {
      dispatch(ActionCreator.changeGenre(item));
    },
    showMoreFilms(number) {
      dispatch(ActionCreator.increaseQuantity(number));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
