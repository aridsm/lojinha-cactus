import React, { useContext, useEffect, useState } from 'react'
import { FilterContext } from '../../../context/FilterContext';
import { todos_produtos } from '../../../lista_produtos';
import classes from './ListaProdutos.module.css';
import ProdutoItem from './ProdutoItem';
import ProdutosPagination from './ProdutosPagination';

const ListaProdutos = () => {
  const [pagAtual, setPagAtual] = useState(1);
  const itensPorPag = 12;
  const [produtos, setProdutos] = useState(todos_produtos);
  const [produtosExibidos, setProdutosExibidos] = useState(produtos)
  const { filtro } = useContext(FilterContext);

  const { categorias, cores, valores } = filtro;

  useEffect(() => {
    const filteredProdutos = todos_produtos.filter(produto => categorias.indexOf(produto.categoria) >= 0).filter(produto => cores.indexOf(produto.cor) >= 0).filter(produto => +produto.preco >= valores.min && +produto.preco <= valores.max);
    setProdutos(filteredProdutos)

  }, [categorias, cores, valores.min, valores.max])

  useEffect(() => {
    const indexPagAnterior = itensPorPag * (pagAtual - 1);
    const indexPagAtual = itensPorPag * pagAtual;
    setProdutosExibidos(produtos.slice(indexPagAnterior, indexPagAtual))
  }, [pagAtual, produtos])

  useEffect(() => {
    console.log(pagAtual)
  }, [pagAtual])

  const listaProdutos = produtosExibidos.map(produto =>
    <ProdutoItem key={produto.nome} nome={produto.nome} preco={produto.preco} img={produto.img} />
  );

  return (
    <section className={classes.produtos}>
      <p>{itensPorPag * pagAtual} - {produtos.length} resultados ERRADO REFAZER.</p>
      <h1>Todas as categorias</h1>
      {produtos.length ?
        <>
          <ProdutosPagination produtos={produtos} itensPorPag={itensPorPag} setPagAtual={setPagAtual} />
          <ul>{listaProdutos}</ul>
        </>
        :
        <p>Ops, não foi encontrado nenhum resultado para a sua pesquisa.</p>}
    </section>
  )
}

export default ListaProdutos