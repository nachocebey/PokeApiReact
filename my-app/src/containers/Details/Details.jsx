import React, { Component, Fragment } from 'react';
import { Header } from '../../components/Header/Header';
import { DetailsList } from '../../components/DetailsList/DetailsList';
import PropTypes from 'prop-types';
import './Details.css';

class Details extends Component {
  static propTypes = {
    param: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = (props.match.params.pokeId);
  }

  render() {
    return (
      <div className="Details">
        <Fragment>
          <Header />
          <DetailsList pokeId={this.props.match.params.pokeId} />
        </Fragment>
      </div>
    );
  }
}

export default Details;
