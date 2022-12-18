import React from "react";
import {MoonLoader} from 'react-spinners';

const spinnerStyle = {
  height: `100vh`,
  width: `100vw`,
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
};

export const Spinner = () => {
  return (
    <div style={spinnerStyle}>
      <MoonLoader color='#000'/>
    </div>
  );
};
