import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PageNotFound from '../404/404';
import FilmPage from '../film-page/film-page';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import ReviewPage from '../review/review';
import SignIn from '../sign-in/sign-in';
import Main from '../main/main';
import {FILM_DATA_TYPES} from '../types';
import {AppRoute} from '../../constants';

const App = (props) => {
  const {title, genre, releaseYear} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main
            title = {title}
            genre = {genre}
            releaseYear = {releaseYear}
          />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.MY_LIST}>
          <MyList />
        </Route>
        <Route exact path={AppRoute.FILM_PAGE}>
          <FilmPage />
        </Route>
        <Route exact path={AppRoute.REVIEW}>
          <ReviewPage />
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <Player />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>

  );
};

App.propTypes = FILM_DATA_TYPES;

export default App;
