import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ApiPokemon from './ApiPokemon';

import './DetailsList.css';

export class DetailsList extends Component {
  static propTypes = {
    pokeId: PropTypes.string
  };

  constructor(props) {
    super(props)
    this.state = this.props.pokeId;
    this.state = {p}
    debugger;
  }

  getPokemonInfo = () => {
    const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${this.props.pokeId}`;
    fetch(pokeUrl)
      .then(response => response.json())
      .then(data => {
        const apiPokemon = new ApiPokemon(data.id, data.name, data.weigh, data.height, data.base_experience)
      })
  }

  componentDidMount() {
    this.getPokemonInfo();
  };

  render() {
    return (<div>{apiPokemon.name}</div>)
  };



};
export default DetailsList;
