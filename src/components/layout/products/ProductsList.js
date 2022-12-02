import React, { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../../context/FilterContext";
import HeaderProdutos from "./HeaderProdutos";
import classes from "./ProductsList.module.css";
import ProductItem from "./ProductItem";
import ProductsPagination from "./ProductsPagination";
import FilterTags from "./FilterTags";

const ProductsList = () => {
  const [currPage, setCurrPage] = useState(1);
  const itemsPerPage = 12;
  const [shownProducts, setShownProducts] = useState([]);
  const { filteredProducts } = useContext(FilterContext);

  useEffect(() => {
    const indexPreviousPage = itemsPerPage * (currPage - 1);
    const indexCurrPage = itemsPerPage * currPage;
    setShownProducts(filteredProducts.slice(indexPreviousPage, indexCurrPage));
  }, [currPage, filteredProducts]);

  useEffect(() => {
    setCurrPage(1);
  }, [filteredProducts]);

  const productsList = shownProducts.map((prod) => (
    <ProductItem
      key={prod.name}
      name={prod.name}
      price={prod.price}
      img={prod.img}
      description={prod.description}
    />
  ));

  return (
    <section className={classes.products}>
      <HeaderProdutos
        products={filteredProducts}
        itemsPerPage={itemsPerPage}
        currPage={currPage}
        setCurrPage={setCurrPage}
      />
      <FilterTags />
      {filteredProducts.length ? (
        <>
          <ul className={classes.productsList}>{productsList}</ul>
          <ProductsPagination
            products={filteredProducts}
            itemsPerPage={itemsPerPage}
            setCurrPage={setCurrPage}
            currPage={currPage}
          />
        </>
      ) : (
        <p className={classes.error}>
          Ops, não foi encontrado nenhum resultado para a sua pesquisa.
        </p>
      )}
    </section>
  );
};

export default ProductsList;
