import React from "react";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import PropTypes from 'prop-types';
import {AppRoute, AuthorizationStatus} from "../../constants";
import {USER} from "../types";

const UserBlock = ({authorizationStatus, user}) => {
  const history = useHistory();

  const handleMyListOpen = () => {
    history.push(AppRoute.MY_LIST);
  };

  const handleSignIn = () => {
    history.push(AppRoute.SIGN_IN);
  };

  return (
    <div className="user-block" onClick={handleMyListOpen}>
      { authorizationStatus === AuthorizationStatus.AUTH ?
        <div className="user-block__avatar">
          <img src={user.avatarUrl} alt="User avatar" width="63" height="63" />
        </div> :
        <a onClick={handleSignIn} className="user-block__link">Sign in</a>
      }
    </div>
  );
};

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  user: USER,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    authorizationStatus: state.authorizationStatus,
  };
};

export default connect(mapStateToProps, null)(UserBlock);
