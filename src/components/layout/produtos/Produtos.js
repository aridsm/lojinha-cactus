import React from "react";
import Filtro from "../../filtro/Filtro";
import classes from "./Produtos.module.css";
import ProductsList from "./ProductsList";

const Produtos = () => {
  return (
    <div className="container">
      <main className={classes.main}>
        <p className={classes.navCatalogo}>Home / Catálogo</p>
        <Filtro />
        <ProductsList />
      </main>
    </div>
  );
};

export default Produtos;
