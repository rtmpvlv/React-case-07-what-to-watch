import React from 'react';
import {useParams, useHistory} from 'react-router-dom/cjs/react-router-dom.min';
import {FILMS_DATA_TYPES} from '../types';


export const Player = ({filmsData}) => {
  const currentId = Number(useParams().id);
  const currentFilm = filmsData.find((film) => film.id === currentId);

  const {id, name, previewImage, videoLink} = currentFilm;

  const history = useHistory();

  const handleExitButton = () => {
    history.push(`../films/${id}`);
  };

  return (
    <>
      <div className="player">
        <video className="player__video" poster={previewImage} width="100%" heigth="100%" autoPlay>
          <source src={videoLink}></source>
        </video>
        <button
          type="button"
          className="player__exit"
          onClick={handleExitButton}
        >Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler" style={{
                left: `30%`
              }}>Toggler</div>
            </div>
            <div className="player__time-value">1:30:29</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">{name}</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Player.propTypes = FILMS_DATA_TYPES;
