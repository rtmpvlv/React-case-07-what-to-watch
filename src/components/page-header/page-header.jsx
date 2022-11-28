import React from 'react';
import UserBlock from '../user-block/user-block';
import {HeaderLink} from '../header-link/header-link';

export const PageHeader = () => {
  return (
    <>
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header movie-card__head">
        <div className="logo">
          <HeaderLink/>
        </div>
        <UserBlock/>
      </header>
    </>
  );
};
