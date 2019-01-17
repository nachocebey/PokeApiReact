import React from 'react';
import './Button.css';
import { Route } from 'react-router-dom'

export const Button = ({ url }) => (
  <Route render={({ history}) => (
    <button
      type='button'
      onClick={() => { history.push(url) }}
    >
      Get pokemon info
    </button>
  )} />
);

export default Button;
