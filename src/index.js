import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const title = '本の検索 with Google Books'

ReactDOM.render(
  <React.StrictMode>
    <App title={title} />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  title, document.getElementById('title')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
