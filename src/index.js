import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FilterContextProvider from "./context/FilterContext";
import CartContextProvider from "./context/CartContext";
import ColorModeContextProvider from "./context/ColorModeContext";
import SearchContextProvider from "./context/SearchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FilterContextProvider>
      <CartContextProvider>
        <ColorModeContextProvider>
          <SearchContextProvider>
            <App />
          </SearchContextProvider>
        </ColorModeContextProvider>
      </CartContextProvider>
    </FilterContextProvider>
  </React.StrictMode>
);
