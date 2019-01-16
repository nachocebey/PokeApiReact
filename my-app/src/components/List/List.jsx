import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from '../../components/Row/Row';
import getPokeInfo from '../../Services/Service'

import './List.css';

export class List extends Component {
  static propTypes = {
    pokeList: PropTypes.array
  };

  constructor(props) {
    super(props)
    this.state = { pokeList: [] };

  }

  render() {
    return (
      this.state.pokeList.slice(0, 30).map(pokemon => (
        <Row key={pokemon.name} pokemon={pokemon} />
      ))
    );
  }

  componentDidMount = () => {
    const pokeUrl = `https://pokeapi.co/api/v2/pokemon/`;
    getPokeInfo(pokeUrl)
    .then(data => this.setState({ pokeList: data.results }))
  }
}

export default List;
