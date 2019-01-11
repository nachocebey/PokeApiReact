import React from 'react';

import './Row.css';

const Row = (pokemon) => (
  <tr className="Row">
    <th>{pokemon.name}</th>
    <th>{pokemon.id}</th>
  </tr>
);

export default Row;
