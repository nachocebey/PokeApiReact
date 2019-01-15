import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import App from './containers/App/App';
import Details from './containers/Details/Details';

const getRoutes = () => (
  <Fragment>
    <Route exact path="/list" component={App} />
    <Route exact path="/Details/:pokeId" component={Details} />
  </Fragment>
);

export default getRoutes;
