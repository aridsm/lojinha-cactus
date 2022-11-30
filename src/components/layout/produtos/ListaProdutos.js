import React, { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../../context/FilterContext";
import { ReactComponent as IconX } from "../../../assets/x.svg";
import HeaderProdutos from "./HeaderProdutos";
import classes from "./ListaProdutos.module.css";
import ProdutoItem from "./ProdutoItem";
import ProdutosPagination from "./ProdutosPagination";

const ListaProdutos = () => {
  const [pagAtual, setPagAtual] = useState(1);
  const itensPorPag = 12;
  const [shownProducts, setShownProducts] = useState([]);
  const {
    filteredProducts,
    filter,
    deleteInputSearchVal,
    deleteColor,
    deleteCategory,
  } = useContext(FilterContext);

  useEffect(() => {
    const indexPagAnterior = itensPorPag * (pagAtual - 1);
    const indexPagAtual = itensPorPag * pagAtual;
    setShownProducts(filteredProducts.slice(indexPagAnterior, indexPagAtual));
  }, [pagAtual, filteredProducts]);

  useEffect(() => {
    setPagAtual(1);
  }, [filteredProducts]);

  const listaProdutos = shownProducts.map((produto) => (
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
      {filter.name && (
        <p className={classes.searchName}>
          <button onClick={deleteInputSearchVal} title="excluir pesquisa">
            <IconX />
          </button>{" "}
          Resultados para "{filter.name}"
        </p>
      )}
      {(filter.colors.length !== 0 || filter.categories.length !== 0) && (
        <ul className={classes.filterList}>
          {filter.colors.map((color) => (
            <li key={color}>
              {color}{" "}
              <button
                title={`excluir filtro para a cor ${color}`}
                onClick={() => deleteColor(color)}
              >
                <IconX />
              </button>
            </li>
          ))}
          {filter.categories.map((category) => (
            <li key={category}>
              {category}{" "}
              <button
                title={`excluir filtro da categoria ${category}`}
                onClick={() => deleteCategory(category)}
              >
                <IconX />
              </button>
            </li>
          ))}
        </ul>
      )}
      {filteredProducts.length ? (
        <>
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
