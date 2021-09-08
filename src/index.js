import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import CrudApp from './components/crud-main/CrudApp';

ReactDOM.render(
  <React.StrictMode>
    <CrudApp />
  </React.StrictMode>,
  document.getElementById('root')
);
