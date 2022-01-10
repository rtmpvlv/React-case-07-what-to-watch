import React from 'react';
import {SHOWMOREBUTTON_TYPES} from '../types';
import {FILMS_PER_CLICK} from '../../constants';


const ShowMoreButton = ({filmsRendered, increaseRenderedFilmsQuantity}) => {

  const handleFilmsRender = () => {
    increaseRenderedFilmsQuantity(filmsRendered + FILMS_PER_CLICK);
  };

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={handleFilmsRender}>
        Show more
      </button>
    </div>
  );
};

ShowMoreButton.propTypes = SHOWMOREBUTTON_TYPES;

export default ShowMoreButton;
