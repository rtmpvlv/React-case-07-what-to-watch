import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {PageNotFound} from '../404/404';
import {FilmPage} from '../film-page/film-page';
import {MyList} from '../my-list/my-list';
import {Player} from '../player/player';
import {ReviewPage} from '../review/review';
import {SignIn} from '../sign-in/sign-in';
import {MainWrapped} from '../main/main';
import {FILMS_DATA_TYPES} from '../types';
import {AppRoute} from '../../constants';

export const App = ({filmsData}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainWrapped
            filmsData = {filmsData}
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

App.propTypes = FILMS_DATA_TYPES;
