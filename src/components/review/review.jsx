import React, {useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import {connect} from "react-redux";
import {HeaderLink} from "../header-link/header-link";
import {FILMS_DATA_TYPES} from "../types";
import UserBlock from "../user-block/user-block";
import {ReviewForm} from "./review-form";
import {Spinner} from "../spinner/spinner";
import {fetchFilm, postReview} from "../../store/api-actions";
import {ActionCreator} from "../../store/action";

export const ReviewPage = (props) => {
  const {
    film,
    filmId: stateFilmId,
    isFilmLoaded,
    onLoadFilm,
    onPostReview,
  } = props;

  const filmId = stateFilmId || parseInt(useParams().id, 10);

  useEffect(() => {
    onLoadFilm(filmId);
  }, []);

  if (!isFilmLoaded) {
    return <Spinner />;
  }

  const {id, name, posterImage, backgroundImage, backgroundColor} = film;

  return (
    <section
      className="movie-card movie-card--full"
      style={{
        backgroundColor,
      }}
    >
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <div className="logo">
            <HeaderLink />
          </div>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`../../films/${id}`} className="breadcrumbs__link">
                  {name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <UserBlock />
        </header>
        <Link to={`../../films/${id}`} className="breadcrumbs__link">
          <div className="movie-card__poster movie-card__poster--small">
            <img
              src={posterImage}
              alt={`${name} poster`}
              width="218"
              height="327"
            />
          </div>
        </Link>
      </div>
      <div className="add-review">
        <ReviewForm
          backgroundColor={backgroundColor}
          onPostReview={onPostReview}
          filmId={filmId}
        />
      </div>
    </section>
  );
};

ReviewPage.propTypes = FILMS_DATA_TYPES;

function mapStateToProps(state) {
  return {
    film: state.film,
    filmId: state.filmId,
    isFilmLoaded: state.isFilmLoaded,
    authorizationStatus: state.authorizationStatus,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoadFilm: (id) => dispatch(fetchFilm(id)),
    onPostReview: (id, review) => dispatch(postReview(id, review)),
    onResetFilm: () => dispatch(ActionCreator.resetFilm()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewPage);
