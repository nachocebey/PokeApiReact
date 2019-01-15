import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import ApiPokemon from './ApiPokemon';
import './DetailsList.css';

export class DetailsList extends Component {
  static propTypes = {
    pokeId: PropTypes.string,
    name: PropTypes.string,
    height: PropTypes.string,
    weight: PropTypes.string,
    base_experience: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      pokeId: this.props.pokeId,
      name: "",
      height: "",
      weight: "",
      base_experience: ""
    };

  }

  showPokemonInfo = () => {
    //const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;
    const pokeUrl = `venusaur.json`;
    fetch(pokeUrl)
      .then(response => response.json())
      .then(console.log("Entra"))
      .then(myJson => this.setState({ name: myJson.name }))
      .then(console.log("Sale"))
      .catch(() => {
        console.log("Error");
      })
  }

  componentDidMount() {
    this.showPokemonInfo();
  }

  render() {
    return (<div> {this.state.pokeId}</div >)

  };



}
export default DetailsList;
