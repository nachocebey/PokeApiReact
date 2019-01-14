import React, { Component, Fragment } from 'react';
import { Header } from '../../components/Header/Header';
import { HeaderTable } from '../../components/HeaderTable/HeaderTable';
import { List } from '../../components/List/List';
import { Table } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Fragment>
          <Header />
          <Table>
            <thead>
              <HeaderTable />
            </thead>
            <tbody>
              <List />
            </tbody>
          </Table>
        </Fragment>
      </div>
    );
  }
}

export default App;
