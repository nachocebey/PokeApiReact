import React, { Component} from 'react';
import PropTypes from 'prop-types';
import Row from '../../components/Row/Row';

import './List.css';

export class List extends Component {
  static propTypes = {
    pokeList : PropTypes.array
  };

  constructor(props){
    super(props)
    this.setState({pokeList:[]});

  }

  render() {
    return (
      <div>
        <Row />
      </div>
    );
  }
}

export default List;
