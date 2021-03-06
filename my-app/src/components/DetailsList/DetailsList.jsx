import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DetailsList.css';
import getPokeInfo from '../../Services/getApiInfo';

export class DetailsList extends Component {
  static propTypes = {
    pokemon: PropTypes.object,
    pokeId: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
      pokeId: this.props.pokeId
    };
  }

  componentDidMount() {
    const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${this.state.pokeId}/`;

    getPokeInfo(pokeUrl)
      .then(myJson => this.setState({
      pokemon: myJson
    }))
  }

  render() {
    return (
      <div>
        <div> Id: {this.state.pokeId}</div >
        <div> Name: {this.state.pokemon.name}</div >
        <div> Height: {this.state.pokemon.height}</div >
        <div> Weight: {this.state.pokemon.weight}</div >
        <div> Base Experience: {this.state.pokemon.base_experience}</div >
        <img src={this.state.pokemon.sprites && this.state.pokemon.sprites.front_default} alt="Logo" />
      </div>
    )
  };

}
export default DetailsList;
