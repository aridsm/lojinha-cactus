import React from "react";
import classes from "./HeaderProdutos.module.css";
import ProductsPagination from "./ProductsPagination";

const HeaderProdutos = ({ products, itemsPerPage, currPage, setCurrPage }) => {
  const results = (
    <p className={classes.results}>
      Página {currPage} de {Math.ceil(products.length / itemsPerPage)} |{" "}
      {products.length} resultados
    </p>
  );

  return (
    <>
      <div className={classes.divPaginas}>
        <div>{results}</div>
        <ProductsPagination
          products={products}
          itemsPerPage={itemsPerPage}
          setCurrPage={setCurrPage}
          currPage={currPage}
        />
      </div>
    </>
  );
};

export default HeaderProdutos;
