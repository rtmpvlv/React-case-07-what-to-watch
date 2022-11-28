import React, {useRef} from "react";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import {Footer} from "../footer/footer";
import {HeaderLink} from "../header-link/header-link";
import {AppRoute} from "../../constants";
import {login} from "../../store/api-actions";

const SignIn = ({onSubmit}) => {
  const history = useHistory();
  const loginRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      email: loginRef.current.value,
      password: passwordRef.current.value,
    });

    history.push(AppRoute.MAIN);
  };

  return (
    <>
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <HeaderLink />
          </div>
          <h1 className="page-title user-page__title">Sign in</h1>
        </header>
        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"
                  ref={loginRef}
                />
                <label
                  className="sign-in__label visually-hidden"
                  htmlFor="user-email"
                >
                  Email address
                </label>
              </div>
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                  ref={passwordRef}
                />
                <label
                  className="sign-in__label visually-hidden"
                  htmlFor="user-password"
                >
                  Password
                </label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">
                Sign in
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  },
});

export default connect(null, mapDispatchToProps)(SignIn);
