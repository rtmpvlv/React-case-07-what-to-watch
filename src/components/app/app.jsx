import React, {useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
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
    <Switch>
      <Route exact path={AppRoute.MAIN} render={() => <Main filmsData={filmsData} promo={promo}/>} />
      <Route exact path={AppRoute.SIGN_IN} render={() => <SignIn />} />
      <Route exact path={AppRoute.MY_LIST} render={() => <MyList filmsData={filmsData}/>} />
      <Route exact path={AppRoute.FILM_PAGE} render={() => <FilmPage filmsData={filmsData}/>} />
      <Route exact path={AppRoute.REVIEW} render={() => <ReviewPage filmsData={filmsData}/>} />
      <Route exact path={AppRoute.PLAYER} render={() => <Player filmsData={filmsData}/>} />
      <Route render={() => <PageNotFound />} />
    </Switch>
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

