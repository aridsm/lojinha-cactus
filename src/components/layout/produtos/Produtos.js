import React from 'react'
import Filtro from '../../filtro/Filtro'
import classes from './Produtos.module.css'
import ListaProdutos from './ListaProdutos'

const Produtos = () => {

  return (
    <main className={classes.main}>
      <Filtro />
      <ListaProdutos />
    </main>
  )
}

export default Produtos