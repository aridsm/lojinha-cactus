import React, { createContext, useCallback, useReducer, useState } from "react";

export const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const [filter, setFilter] = useState({});

  const saveFilter = useCallback(({ newFilter }) => {
    console.log(newFilter);
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
