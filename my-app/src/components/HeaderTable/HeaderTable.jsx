import React, { Component } from 'react';

import './HeaderTable.css';

export class HeaderTable extends Component {
  render() {
    return (
      <tr>
        <th>Name</th>
        <th>Compare</th>
        <th>Get Pokemon Info</th>
      </tr>
    );
  }
}
export default HeaderTable;
