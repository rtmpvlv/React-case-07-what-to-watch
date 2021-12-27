import React from 'react';
import {useHistory} from 'react-router-dom';
import {AppRoute} from '../../constants';

export const UserBlock = () => {
  const history = useHistory();
  const handleMyListOpen = () => {
    history.push(AppRoute.MY_LIST);
  };

  return (
    <div
      className="user-block"
      onClick={handleMyListOpen}
    >
      <div className="user-block__avatar">
        <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
      </div>
    </div>
  );
};
