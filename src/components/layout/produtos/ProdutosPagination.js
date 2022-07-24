import React, { useEffect } from 'react'
import classes from './ProdutosPagination.module.css';

const ProdutosPagination = ({ produtos, itensPorPag, setPagAtual }) => {

  const paginas = []

  for (let i = 1; i <= Math.ceil(produtos.length / itensPorPag); i++) {
    paginas.push(i)
  }

  const handleClick = (e) => {
    setPagAtual(e.currentTarget.innerText)
  }


  return (
    <nav className={classes.nav}>
      <button>Anterior</button>
      {paginas.map(pag => <button key={pag} onClick={handleClick} className={classes.pagNumber}>{pag}</button>)}
      <button>Proximo</button>
    </nav>
  )
}

export default ProdutosPagination