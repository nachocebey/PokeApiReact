import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

export const Button = ({ url, history, name }) => (
    <button
      type='button'
      onClick={() => history.push(url) }
    >
      {name}
    </button>
);

Button.propTypes = {
  url: PropTypes.string.isRequired,
  history: PropTypes.object,
  innerHtml: PropTypes.string,
  };


export default Button;
