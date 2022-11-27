import React, { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../../context/FilterContext";
import { todos_produtos } from "../../../lista_produtos";
import HeaderProdutos from "./HeaderProdutos";
import classes from "./ListaProdutos.module.css";
import ProdutoItem from "./ProdutoItem";
import ProdutosPagination from "./ProdutosPagination";

const ListaProdutos = () => {
  const [pagAtual, setPagAtual] = useState(1);
  const itensPorPag = 12;
  const [produtos, setProdutos] = useState(todos_produtos);
  const [produtosExibidos, setProdutosExibidos] = useState([]);
  const { filter } = useContext(FilterContext);

  const { categories, colors, prices } = filter;

  useEffect(() => {
    const filteredProdutos = todos_produtos
      .filter((produto) => categories.indexOf(produto.categoria) >= 0)
      .filter((produto) => colors.indexOf(produto.cor) >= 0)
      .filter(
        (produto) =>
          +produto.preco >= prices?.min && +produto.preco <= prices?.max
      );
    setPagAtual(1);
    setProdutos(filteredProdutos);
  }, [categories, colors, prices?.min, prices?.max]);

  useEffect(() => {
    const indexPagAnterior = itensPorPag * (pagAtual - 1);
    const indexPagAtual = itensPorPag * pagAtual;
    setProdutosExibidos(produtos.slice(indexPagAnterior, indexPagAtual));
  }, [pagAtual, produtos]);

  const listaProdutos = produtosExibidos.map((produto) => (
    <ProdutoItem
      key={produto.nome}
      nome={produto.nome}
      preco={produto.preco}
      img={produto.img}
    />
  ));

  return (
    <section className={classes.produtos}>
      <HeaderProdutos
        produtos={produtos}
        itensPorPag={itensPorPag}
        pagAtual={pagAtual}
        setPagAtual={setPagAtual}
      />
      {produtos.length ? (
        <>
          <ul>{listaProdutos}</ul>
          <ProdutosPagination
            produtos={produtos}
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
