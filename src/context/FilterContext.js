import React, { createContext, useEffect, useState } from "react";
import { todos_produtos } from "../lista_produtos";

export const FilterContext = createContext();

const initialFilter = {
  colors: [],
  prices: { min: 0, max: 1000 },
  categories: [],
};

const FilterContextProvider = ({ children }) => {
  const [filter, setFilter] = useState(initialFilter);

  const [filteredProducts, setFilteredProducts] = useState(todos_produtos);

  const saveFilter = (newFilter) => {
    setFilter(newFilter);
  };

  //Filtragem
  useEffect(() => {
    let newFilter = {};

    //Filtrar por cor
    newFilter = todos_produtos.filter((prod) => {
      if (filter.colors.length === 0) return true;
      return filter.colors.indexOf(prod.cor) >= 0;
    });

    //Filtrar por categoria
    newFilter = newFilter.filter((prod) => {
      if (filter.categories.length === 0) return true;
      return filter.categories.indexOf(prod.categoria) >= 0;
    });

    //Filtrar por preço
    newFilter = newFilter.filter((prod) => {
      return (
        prod.preco >= +filter.prices?.min && prod.preco <= +filter.prices?.max
      );
    });

    setFilteredProducts(newFilter);
  }, [
    filter.categories,
    filter.colors,
    filter.prices.max,
    filter.prices.min,
    filter,
  ]);

  return (
    <FilterContext.Provider
      value={{
        saveFilter,
        filteredProducts,
        initialFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
