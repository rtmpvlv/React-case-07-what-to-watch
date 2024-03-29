import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {FILM_DATA_TYPES} from "../types";
import {Video} from "../video/video";

export const Card = (props) => {
  const {film, onSetFilmId} = props;
  const {id, name, posterImage} = film;

  const history = useHistory();
  const [isPlaying, setIsPlaying] = useState(false);
  let timer;

  const handleOpenFilmCard = () => {
    clearTimeout(timer);
    setIsPlaying(false);
    onSetFilmId(id);
    history.push(`/films/${id}`);
  };

  const handleMouseEnter = () => {
    timer = setTimeout(() => setIsPlaying(true), 1000);
  };

  const handleMouseLeave = () => {
    clearTimeout(timer);
    setIsPlaying(false);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleOpenFilmCard}
    >
      <div className="small-movie-card__image">
        {isPlaying ? (
          <Video film={film} muted />
        ) : (
          <img src={posterImage} alt={name} width="280" height="175" />
        )}
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>
          {name}
        </Link>
      </h3>
    </article>
  );
};

Card.propTypes = FILM_DATA_TYPES;

const mapDispatchToProps = (dispatch) => {
  return {
    onSetFilmId(id) {
      dispatch(ActionCreator.setFilmId(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(Card);
