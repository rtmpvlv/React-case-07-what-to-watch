import React from 'react';
import {useHistory} from 'react-router-dom';
import {AppRoute} from '../../constants';

export const HeaderLink = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push(AppRoute.MAIN);
  };

  return (
    <a onClick={handleClick} className="logo__link">
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </a>
  );
};
