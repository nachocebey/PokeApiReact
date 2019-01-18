import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../components/Button/Button';
import './Row.css';

export class Row extends Component {
  static propTypes = {
    currentData: PropTypes.array,
    limit: PropTypes.number
  };

  constructor(props) {
    super(props);
    this.state = {
      checkState: 2
    };
  }

  render() {
    return (
      <tr>
        <td><h5>{this.props.pokemon.name}</h5></td>
        <td>
          <h6>Select: &nbsp; 
          <input
            name="isGoing"
            type="checkbox"
            onChange={this.props.handleInputChange}
          />
          </h6>
        </td>
        <td>
          <Button key={this.props.pokemon.name} url={`Details/${this.props.pokemon.name}`} />
        </td>
      </tr>


    )
  };
}


export default Row;
