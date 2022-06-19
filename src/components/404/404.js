import React from 'react';
import {useHistory} from 'react-router-dom';
import {AppRoute} from '../../constants';
import {Footer} from '../footer/footer';
import {HeaderLink} from '../header-link/header-link';

export const PageNotFound = () => {
  const history = useHistory();

  const handleGoToMain = () => {
    history.push(AppRoute.MAIN);
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <HeaderLink/>
        </div>
        <h1 className="page-title user-page__title">This page is not found.</h1>
      </header>
      <div className="sign-in user-page__content">
        <div
          className="sign-in__message"
          onClick={handleGoToMain}
        >
          <p>Error 404 - Page not found. </p>
          <p>Click here to return to the main page.</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
