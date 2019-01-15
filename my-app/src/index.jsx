import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import createHistory from 'history/createBrowserHistory';
import Root from './containers/Root/Root';


const browserHistoryStore =  createHistory();

ReactDOM.render(<Root history={browserHistoryStore}/>, document.getElementById('root'));
