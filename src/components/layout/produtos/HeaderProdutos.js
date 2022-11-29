import React from "react";
import classes from "./HeaderProdutos.module.css";
import ProdutosPagination from "./ProdutosPagination";

const HeaderProdutos = ({ produtos, itensPorPag, pagAtual, setPagAtual }) => {
  const resultados = (
    <p className={classes.results}>
      Página {pagAtual} de {Math.ceil(produtos.length / itensPorPag)} |{" "}
      {produtos.length} resultados
    </p>
  );

  return (
    <>
      <div className={classes.divPaginas}>
        <div>{resultados}</div>
        <ProdutosPagination
          produtos={produtos}
          itensPorPag={itensPorPag}
          setPagAtual={setPagAtual}
          pagAtual={pagAtual}
        />
      </div>
    </>
  );
};

export default HeaderProdutos;
