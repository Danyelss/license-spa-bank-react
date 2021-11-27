import React from 'react';
import { Link } from 'react-router-dom';
import { default as TakenSVG } from '../svgs/undraw_Taken.svg';

const ErrorPage = () => {
  return (
    <div>
      <h1>Page Not Found.</h1>
      <img src={TakenSVG} alt="" />
      <Link to="/">go Home</Link>
    </div>
  );
};

export default ErrorPage;
