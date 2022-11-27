import React, { createContext, useCallback, useState } from "react";

export const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const [filter, setFilter] = useState({
    colors: [],
    prices: {},
    categories: [],
  });

  const saveFilter = useCallback((newFilter) => {
    setFilter(newFilter);
  }, []);

  return (
    <FilterContext.Provider
      value={{
        filter,
        saveFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
