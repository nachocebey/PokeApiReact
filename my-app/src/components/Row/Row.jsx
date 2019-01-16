import React from 'react';
import { Button } from '../../components/Button/Button';
import './Row.css';

const Row = ({ pokemon }) => (
  <tr /*className="Row"*/>
    <th>{pokemon.name}</th>
    <th>
      <Button key={pokemon.name} url={`Details/${pokemon.name}`} />
    </th>

  </tr>
);

export default Row;
