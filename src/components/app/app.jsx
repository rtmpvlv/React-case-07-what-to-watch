import React, {useEffect} from "react";
import {Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import {PageNotFound} from "../404/404";
import FilmPage from "../film-page/film-page";
import {MyList} from "../my-list/my-list";
import {Player} from "../player/player";
import ReviewPage from "../review/review";
import SignIn from "../sign-in/sign-in";
import Main from "../main/main";
import {Spinner} from "../spinner/spinner";
import {APP_TYPES} from "../types";
import PrivateRoute from "../private-route/private-route";
import {AppRoute} from "../../constants";
import {fetchFilms, fetchPromoFilm} from "../../store/api-actions";

export const App = ({films, isFilmsLoaded, isPromoFilmLoaded, onLoadData}) => {
  useEffect(() => {
    if (!isFilmsLoaded || !isPromoFilmLoaded) {
      onLoadData();
    }
  }, [isFilmsLoaded, isPromoFilmLoaded]);

  if (!isFilmsLoaded || !isPromoFilmLoaded) {
    return <Spinner />;
  }

  return (
    <Switch>
      <Route exact path={AppRoute.MAIN} render={() => <Main />} />
      <Route exact path={AppRoute.SIGN_IN} render={() => <SignIn />} />
      <PrivateRoute
        exact
        path={AppRoute.MY_LIST}
        render={() => <MyList films={films} />}
      />
      <Route exact path={AppRoute.FILM_PAGE} render={() => <FilmPage />} />
      <PrivateRoute
        exact
        path={AppRoute.REVIEW}
        render={() => <ReviewPage films={films} />}
      />
      <Route
        exact
        path={AppRoute.PLAYER}
        render={() => <Player films={films} />}
      />
      <Route render={() => <PageNotFound />} />
    </Switch>
  );
};

App.propTypes = APP_TYPES;

const mapStateToProps = (state) => {
  return {
    films: state.films,
    isFilmsLoaded: state.isFilmsLoaded,
    isPromoFilmLoaded: state.isPromoFilmLoaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadData() {
      dispatch(fetchFilms());
      dispatch(fetchPromoFilm());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
