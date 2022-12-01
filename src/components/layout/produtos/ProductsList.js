import React, { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../../context/FilterContext";
import HeaderProdutos from "./HeaderProdutos";
import classes from "./ProductsList.module.css";
import ProductItem from "./ProductItem";
import ProdutosPagination from "./ProdutosPagination";
import FilterTags from "./FilterTags";

const ProductsList = () => {
  const [pagAtual, setPagAtual] = useState(1);
  const itensPorPag = 12;
  const [shownProducts, setShownProducts] = useState([]);
  const { filteredProducts } = useContext(FilterContext);

  useEffect(() => {
    const indexPagAnterior = itensPorPag * (pagAtual - 1);
    const indexPagAtual = itensPorPag * pagAtual;
    setShownProducts(filteredProducts.slice(indexPagAnterior, indexPagAtual));
  }, [pagAtual, filteredProducts]);

  useEffect(() => {
    setPagAtual(1);
  }, [filteredProducts]);

  const productsList = shownProducts.map((produto) => (
    <ProductItem
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
      <FilterTags />
      {filteredProducts.length ? (
        <>
          <ul className={classes.productsList}>{productsList}</ul>
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

export default ProductsList;
