import { createContext, useState } from "react";
import { todos_produtos } from "../lista_produtos";

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [matchedProducts, setMatchedProducts] = useState("");

  const searchForAName = (inputValue) => {
    const searchedProds = todos_produtos.filter((prod) =>
      prod.nome.toLowerCase().startsWith(inputValue)
    );

    if (searchedProds.length === todos_produtos.length) setMatchedProducts([]);
    else setMatchedProducts(searchedProds);
  };

  return <div value={{ searchForAName, matchedProducts }}>{children}</div>;
};

export default SearchContextProvider;
