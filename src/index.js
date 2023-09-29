import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Parse from 'parse';
Parse.initialize('properties_app');
Parse.serverURL = 'https://zeegold.onrender.com/parse';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);