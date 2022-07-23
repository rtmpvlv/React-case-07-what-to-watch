import React from 'react';
import {useParams, Link} from 'react-router-dom/cjs/react-router-dom.min';
import {HeaderLink} from '../header-link/header-link';
import {FILMS_DATA_TYPES} from '../types';
import {UserBlock} from '../user-block/user-block';
import {ReviewForm} from './review-form';

export const ReviewPage = ({films}) => {
  const currentId = Number(useParams().id);
  const currentFilm = films.find((film) => film.id === currentId);

  const {id, name, posterImage, backgroundImage, backgroundColor} = currentFilm;
  return (
    <section className="movie-card movie-card--full" style={{
      backgroundColor,
    }}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <div className="logo">
            <HeaderLink/>
          </div>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`../../films/${id}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <UserBlock/>
        </header>
        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
        </div>
      </div>
      <div className="add-review">
        <ReviewForm backgroundColor={backgroundColor} />
      </div>
    </section>
  );
};

ReviewPage.propTypes = FILMS_DATA_TYPES;
