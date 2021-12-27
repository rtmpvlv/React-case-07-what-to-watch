import React from 'react';
import {FILM_DATA_TYPES} from '../types';

export const Video = ({film}) => {
  const {videoLink, previewImage} = film;
  return (
    <video className="player__video" poster={previewImage} width="100%" heigth="100%" autoPlay>
      <source src={videoLink}></source>
    </video>
  );
};

Video.propTypes = FILM_DATA_TYPES;
