import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from '../../components/Row/Row';
import getPokeInfo from '../../Services/getApiInfo';
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
    buttonState: PropTypes.boolean,
  };

  constructor(props) {
    super(props)
    this.state = {
      pokeList: [],
      checkedPokemons: [],
      maxSelection: 2,
      totalSelections: 0,
      buttonState: false
    };
  }

  handleInputChange = (sender) => {
    const checkState = sender.currentTarget.checked;
    const name = sender.currentTarget.attributes.name.value;
    let actualSelections = this.state.checkedPokemons.length;

    //unico set state
    if (checkState) {
      this.setState({
        checkedPokemons: [...this.state.checkedPokemons, name]
      })
      actualSelections++;
    }
    else {
      this.removeItemFromArray(name);
      actualSelections--;
    }

    this.setState({
      totalSelections: actualSelections
    })

  }

  //fuera de clase
  removeItemFromArray = (e) => {
    var array = [...this.state.checkedPokemons];
    var index = array.indexOf(e)
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ checkedPokemons: array });
    }
  }

  render() {
    return (
      <div>
        <Button history={this.props.history} url={`Comparision/${this.state.checkedPokemons[0]}/${this.state.checkedPokemons[1]}`} name={"Compare"} /*buttonDisable={}*/ />
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
