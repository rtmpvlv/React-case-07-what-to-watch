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

export const App = ({films, isDataLoaded, isPromoLoaded, onLoadData}) => {
  useEffect(() => {
    if (!isDataLoaded || !isPromoLoaded) {
      onLoadData();
    }
  }, [isDataLoaded, isPromoLoaded]);

  if (!isDataLoaded || !isPromoLoaded) {
    return (
      <div style={{
        width: `100vh`,
        height: `100vh`,
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
      <Route exact path={AppRoute.MAIN} render={() => <Main />} />
      <Route exact path={AppRoute.SIGN_IN} render={() => <SignIn />} />
      <Route exact path={AppRoute.MY_LIST} render={() => <MyList films={films}/>} />
      <Route exact path={AppRoute.FILM_PAGE} render={() => <FilmPage films={films}/>} />
      <Route exact path={AppRoute.REVIEW} render={() => <ReviewPage films={films}/>} />
      <Route exact path={AppRoute.PLAYER} render={() => <Player films={films}/>} />
      <Route render={() => <PageNotFound />} />
    </Switch>
  );
};

App.propTypes = APP_TYPES;

const mapStateToProps = (state) => {
  return {
    films: state.films,
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

