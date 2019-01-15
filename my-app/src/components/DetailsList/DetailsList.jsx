import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ApiPokemon from './ApiPokemon'
import './DetailsList.css';

export class DetailsList extends Component {
  static propTypes = {
    pokeId: PropTypes.string,
    apiPokemon: PropTypes.object
  };

  constructor(props) {
    super(props)
    this.state = this.props.pokeId;

  }

  // getPokemonInfo = () => {
  //   const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${this.props.pokeId}`;
  //   fetch(pokeUrl)
  //     .then(response => response.json())
  // }

  // componentDidMount() {
  //   this.getPokemonInfo();
  // };

  render() {
    debugger;
    return (<div>{this.props.pokeId}</div>)
    
  };



};
export default DetailsList;
