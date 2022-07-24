import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FilterContextProvider from './context/FilterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
  </React.StrictMode>
);