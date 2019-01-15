import React, { Component, Fragment } from 'react';
import { Header } from '../../components/Header/Header';
import { DetailsList } from '../../components/DetailsList/DetailsList';
import PropTypes from 'prop-types';
import '../App/App.css';

class Details extends Component {
  static propTypes = {
    params: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = { pokeId: props.match.params.pokeId };
    
  }

  render() {
    return (
      <div className="App">
        <Fragment>
          <Header />
          <DetailsList pokeId={this.state.pokeId} />
        </Fragment>
      </div>
    );
  }
}

export default Details;
