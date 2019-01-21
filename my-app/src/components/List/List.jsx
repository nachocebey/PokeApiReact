import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from '../../components/Row/Row';
import getPokeInfo from '../../Services/getApiInfo';
import { checkButtonState } from '../../Services/Services'
import { removeItemFromArray } from '../../Services/Services'
import { Button } from '../../components/Button/Button';
import { HeaderTable } from '../../components/HeaderTable/HeaderTable';

import './List.css';

export class List extends Component {
  static propTypes = {
    pokeList: PropTypes.array,
    checkedPokemons: PropTypes.array,
    maxSelection: PropTypes.number,
    totalSelections: PropTypes.number,
    history: PropTypes.object,
    buttonState: PropTypes.bool,

  };

  constructor(props) {
    super(props)
    this.state = {
      pokeList: [],
      checkedPokemons: [],
      maxSelection: 2,
      totalSelections: 0,
      buttonState: true
    };
  }

  handleInputChange = (sender) => {
    let actualSelections = this.state.checkedPokemons.length;
    let checkedPokemonsCopy = this.state.checkedPokemons;
    let totalSelectionsCopy = this.state.totalSelections;
    let actualSelectionsCopy = actualSelections;
    const checkState = sender.currentTarget.checked;
    const name = sender.currentTarget.attributes.name.value;

    if (checkState) {
      checkedPokemonsCopy = [...checkedPokemonsCopy, name];
      actualSelectionsCopy++;
    }
    else {
      checkedPokemonsCopy = removeItemFromArray(name, checkedPokemonsCopy);
      actualSelectionsCopy--;
    }
    totalSelectionsCopy = actualSelectionsCopy;
    let buttonStateCopy = checkButtonState(totalSelectionsCopy, this.state.maxSelection);


    this.setState({
      checkedPokemons: checkedPokemonsCopy,
      actualSelections: actualSelectionsCopy,
      buttonState: buttonStateCopy,
    })
  }

  render() {
    return (
      <div>
        <Button history={this.props.history} url={`Comparision/${this.state.checkedPokemons[0]}/${this.state.checkedPokemons[1]}`} name={"Compare"} buttonState={this.state.buttonState} />
        <table className="table table-bordered">
          <thead class="thead-dark">
            <HeaderTable />
          </thead>
          <tbody>
            {
              this.state.pokeList.slice(0, 30).map(pokemon => (
                <Row history={this.props.history} pokemon={pokemon} handleInputChange={this.handleInputChange} />
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }

  componentDidMount = () => {
    const pokeUrl = `https://pokeapi.co/api/v2/pokemon/`;
    getPokeInfo(pokeUrl)

      .then(data => this.setState({ pokeList: data.results }))

  }
}

export default List;
