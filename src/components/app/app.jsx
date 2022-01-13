import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {PageNotFound} from '../404/404';
import {FilmPage} from '../film-page/film-page';
import {MyList} from '../my-list/my-list';
import {Player} from '../player/player';
import {ReviewPage} from '../review/review';
import {SignIn} from '../sign-in/sign-in';
import Main from '../main/main';
import {MoonLoader} from 'react-spinners';
import {css} from "@emotion/react";

import {APP_TYPES} from '../types';
import {AppRoute} from '../../constants';

import {fetchFilmsList, fetchPromoFilm} from '../../store/api-actions';

const override = css`
  display: block;
  margin: auto;
`;

export const App = ({filmsData, promo, isDataLoaded, isPromoLoaded, onLoadData}) => {
  useEffect(() => {
    if (!isDataLoaded || !isPromoLoaded) {
      onLoadData();
    }
  }, [isDataLoaded, isPromoLoaded]);

  if (!isDataLoaded || !isPromoLoaded) {
    return (
      <div style={{
        minHeight: `640px`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }}>
        <MoonLoader color='#000' css={override}/>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main
            filmsData = {filmsData}
            promo={promo}
          />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.MY_LIST}>
          <MyList
            filmsData = {filmsData}
          />
        </Route>
        <Route exact path={AppRoute.FILM_PAGE}>
          <FilmPage
            filmsData = {filmsData}
          />
        </Route>
        <Route exact path={AppRoute.REVIEW}>
          <ReviewPage
            filmsData = {filmsData}
          />
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <Player
            filmsData = {filmsData}
          />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = APP_TYPES;

const mapStateToProps = (state) => {
  return {
    filmsData: state.films,
    promo: state.promo,
    isDataLoaded: state.isDataLoaded,
    isPromoLoaded: state.isPromoLoaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadData() {
      dispatch(fetchFilmsList());
      dispatch(fetchPromoFilm());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

