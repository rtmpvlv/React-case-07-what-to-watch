import React, {useEffect} from "react";
import {useParams, useHistory, Link} from "react-router-dom";
import {connect} from "react-redux";
import {FilmsList} from "../films-list/films-list";
import {Footer} from "../footer/footer";
import {PageHeader} from "../page-header/page-header";
import {FILMS_DATA_TYPES} from "../types";
import {Tabs} from "./tabs";
import {Spinner} from "../spinner/spinner";
import {PageNotFound} from "../404/404";
import {ActionCreator} from "../../store/action";
import {fetchFilm} from "../../store/api-actions";
import {AuthorizationStatus} from "../../constants";

const SIMILAR_LIST_LENGTH = 4;

const FilmPage = (props) => {
  const {
    films,
    film,
    filmId: stateFilmId,
    isFilmLoaded,
    authorizationStatus,
    onLoadFilm,
    onResetFilm,
  } = props;

  const history = useHistory();
  const filmId = stateFilmId || Number(useParams().id);

  if (!films.some((f) => f.id === filmId)) {
    return <PageNotFound />;
  }

  useEffect(() => {
    onLoadFilm(filmId);
    return () => onResetFilm();
  }, [stateFilmId]);

  if (!isFilmLoaded) {
    return <Spinner />;
  }

  const {
    id,
    name,
    posterImage,
    backgroundImage,
    backgroundColor,
    genre,
    released,
  } = film;

  const similarFilms = films.filter(
      (f) => film !== f && film.genre === f.genre
  );

  const handlePlayMovie = () => history.push(`/player/${id}`);

  return (
    <>
      <section
        className="movie-card movie-card--full"
        style={{
          backgroundColor,
        }}
      >
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>
          <PageHeader />
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
                <button
                  className="btn btn--list movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                {authorizationStatus === AuthorizationStatus.AUTH && (
                  <Link
                    to={`/films/${id}/review`}
                    className="btn movie-card__button"
                  >
                    Add review
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img
                src={posterImage}
                alt={`${name} poster`}
                width="218"
                height="327"
              />
            </div>
            <div className="movie-card__desc">
              <Tabs film={film} />
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList films={similarFilms} filmsRendered={SIMILAR_LIST_LENGTH} />
        </section>
        <Footer />
      </div>
    </>
  );
};

FilmPage.propTypes = FILMS_DATA_TYPES;

function mapStateToProps(state) {
  return {
    films: state.films,
    film: state.film,
    filmId: state.filmId,
    isFilmLoaded: state.isFilmLoaded,
    authorizationStatus: state.authorizationStatus,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoadFilm: (id) => dispatch(fetchFilm(id)),
    onResetFilm: () => dispatch(ActionCreator.resetFilm()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);
