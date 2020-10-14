import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.sass';
import App from './App';
import ProductProvider from './context/recipes.context';

ReactDOM.render(
  <ProductProvider>
    <App />
  </ProductProvider>,
  document.getElementById('root')
);
