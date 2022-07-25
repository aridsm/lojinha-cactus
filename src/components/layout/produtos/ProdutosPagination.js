import React, { useEffect, useRef } from 'react'
import classes from './ProdutosPagination.module.css';

const ProdutosPagination = ({ produtos, itensPorPag, setPagAtual, pagAtual }) => {

  const paginas = []
  const totalPaginas = Math.ceil(produtos.length / itensPorPag);

  for (let i = 1; i <= totalPaginas; i++) {
    paginas.push(i)
  }

  const handleClickNumber = (e) => {
    setPagAtual(e.currentTarget.innerText);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handleClickPage = (pageValue) => {
    if (pageValue < 1) {
      return;
    }
    if (pageValue > +totalPaginas) {
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setPagAtual(pageValue)
  }

  return (
    <nav className={classes.nav}>
      <button onClick={() => handleClickPage(+pagAtual - 1)}>Anterior</button>
      {paginas.map(pag => <button key={pag} onClick={handleClickNumber} className={classes.pagNumber}>{pag}</button>)}
      <button onClick={() => handleClickPage(+pagAtual + 1)}>Próximo</button>
    </nav>
  )
}

export default ProdutosPagination