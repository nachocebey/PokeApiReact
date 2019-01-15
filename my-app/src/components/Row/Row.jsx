import React from 'react';
import './Row.css';

const Row = ({pokemon}) => (
  <tr className="Row">
    <th>{pokemon.name}</th>
    <th>{pokemon.url}</th>
    <th><button type="button">Click Me!</button></th>
  </tr>
);

export default Row;
