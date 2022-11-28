import React, { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../../context/FilterContext";
import HeaderProdutos from "./HeaderProdutos";
import classes from "./ListaProdutos.module.css";
import ProdutoItem from "./ProdutoItem";
import ProdutosPagination from "./ProdutosPagination";

const ListaProdutos = () => {
  const [pagAtual, setPagAtual] = useState(1);
  const itensPorPag = 12;
  const [produtosExibidos, setProdutosExibidos] = useState([]);
  const { filteredProducts, filter } = useContext(FilterContext);

  useEffect(() => {
    const indexPagAnterior = itensPorPag * (pagAtual - 1);
    const indexPagAtual = itensPorPag * pagAtual;
    setProdutosExibidos(
      filteredProducts.slice(indexPagAnterior, indexPagAtual)
    );
  }, [pagAtual, filteredProducts]);

  useEffect(() => {
    setPagAtual(1);
  }, [filteredProducts]);

  const listaProdutos = produtosExibidos.map((produto) => (
    <ProdutoItem
      key={produto.nome}
      nome={produto.nome}
      preco={produto.preco}
      img={produto.img}
      description={produto.description}
    />
  ));

  return (
    <section className={classes.produtos}>
      <HeaderProdutos
        produtos={filteredProducts}
        itensPorPag={itensPorPag}
        pagAtual={pagAtual}
        setPagAtual={setPagAtual}
      />
      {filteredProducts.length ? (
        <>
          {(filter.colors.length !== 0 || filter.categories.length !== 0) && (
            <ul className={classes.filterList}>
              {filter.colors.map((color) => (
                <li key={color}>{color}</li>
              ))}
              {filter.categories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          )}
          <ul className={classes.productsList}>{listaProdutos}</ul>
          <ProdutosPagination
            produtos={filteredProducts}
            itensPorPag={itensPorPag}
            setPagAtual={setPagAtual}
            pagAtual={pagAtual}
          />
        </>
      ) : (
        <p className={classes.erro}>
          Ops, não foi encontrado nenhum resultado para a sua pesquisa.
        </p>
      )}
    </section>
  );
};

export default ListaProdutos;
