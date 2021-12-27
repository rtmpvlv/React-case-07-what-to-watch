import React, {useState, useRef} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FILM_DATA_TYPES} from '../types';

export const Card = ({film}) => {
  const {id, name, posterImage, previewImage, videoLink} = film;

  const history = useHistory();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef();
  let timer;

  const handleOpenFilmCard = () => {
    history.push(`/films/${id}`);
  };

  const handleMouseEnter = () => {
    timer = setTimeout(() => {
      setIsPlaying(true);
      videoRef.current.volume = 0;
    }, 1000);
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
    clearTimeout(timer);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="small-movie-card__image"
        onClick={handleOpenFilmCard}

      >
        {isPlaying ?
          <video className="player__video" poster={previewImage} width="100%" heigth="100%" autoPlay ref={videoRef}>
            <source src={videoLink}></source>
          </video> :
          <img src={posterImage} alt={name} width="280" height="175"/>}
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
};

Card.propTypes = FILM_DATA_TYPES;
