import React, { Component } from 'react';

import './HeaderTable.css';

export class HeaderTable extends Component {
  render() {
    return (
      <tr>
        <th>Name</th>
        <th>Pokemon Id</th>
      </tr>
    );
  }
}
export default HeaderTable;
