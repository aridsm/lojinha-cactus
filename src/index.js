import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FilterContextProvider from './context/FilterContext';
import CartContextProvider from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FilterContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </FilterContextProvider>
  </React.StrictMode>
);