import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from '../../components/Row/Row';
import getPokeInfo from '../../Services/Service'

import './List.css';

export class List extends Component {
  static propTypes = {
    pokeList: PropTypes.array,
    maxSelection: PropTypes.number,
    totalSelections: PropTypes.number
  };

  constructor(props) {
    super(props)
    this.state = {
      pokeList: [],
      maxSelection: 2,
      totalSelections: 0
    };
  }

  handleInputChange = (sender) => {
    const checkState = sender.currentTarget.checked;
    const total = this.state.totalSelections;
    const max = this.state.maxSelection;

    if (checkState) {
      if (total >= max) {
        sender.currentTarget.checked = false;
      }
      else {


      }
    }
  }

  render() {
    return (
      <tr>
        <tr>
        <button type="button" disabled={this.state.totalSelections === this.state.maxSelection}>Compare</button>
        </tr>
        {
          this.state.pokeList.slice(0, 30).map(pokemon => (
            <Row key={pokemon.name} pokemon={pokemon} handleInputChange={this.handleInputChange} />
          ))
        }
      </tr>
    );
  }

  componentDidMount = () => {
    const pokeUrl = `https://pokeapi.co/api/v2/pokemon/`;
    getPokeInfo(pokeUrl)
      .then(data => this.setState({ pokeList: data.results }))

  }
}

export default List;
