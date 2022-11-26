import React from "react";
import Filtro from "../../filtro/Filtro";
import classes from "./Produtos.module.css";
import ListaProdutos from "./ListaProdutos";

const Produtos = () => {
  return (
    <main className={classes.main}>
      <p className={classes.navCatalogo}>Home - Catálogo</p>
      <Filtro />
      <ListaProdutos />
    </main>
  );
};

export default Produtos;
