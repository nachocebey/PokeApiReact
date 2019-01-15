import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './containers/Root/Root';
import createHistory from 'history/createBrowserHistory';

const browserHistoryStore =  createHistory();

ReactDOM.render(<Root history={browserHistoryStore}/>, document.getElementById('root'));
