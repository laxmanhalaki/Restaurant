import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const Store=[]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App Store={Store}/>
  </React.StrictMode>
);


