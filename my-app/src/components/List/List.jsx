import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from '../../components/Row/Row';
//import allPokemonsFromApi from '../List/Service';

import './List.css';

export class List extends Component {
  static propTypes = {
    pokeList: PropTypes.array
  };

  constructor(props) {
    super(props)
    this.state = { pokeList: [] };

  }

  getAllPokemonsNamesFromApi = () => {
    const pokeUrl = `https://pokeapi.co/api/v2/pokemon/`;
    fetch(pokeUrl)
      .then(response => response.json())
      .then(data => this.setState({ pokeList: data.results }))
  }

  render() {
    return (
      this.state.pokeList.slice(0, 30).map(pokemon => (
        <Row key={pokemon.name} pokemon={pokemon} />
      ))
    );
  }

  componentDidMount = () => {
    this.getAllPokemonsNamesFromApi();
  }
}

export default List;
