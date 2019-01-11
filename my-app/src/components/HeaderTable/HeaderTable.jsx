import React, { Component } from 'react';

import './HeaderTable.css';

export class HeaderTable extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Types</th>
            <th>Pokedex ID</th>
          </tr>
        </table>
      </div>
    );
  }
}
export default HeaderTable;
