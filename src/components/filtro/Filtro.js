import React, { useContext } from 'react'
import { FilterContext } from '../../context/FilterContext';
import WrapperButton from '../utilities/WrapperButton';
import classes from './Filtro.module.css'
import FormCategoria from './FormCategoria'
import FormCores from './FormCores';
import FormPreco from './FormPreco';

const Filtro = () => {

  const { limparFiltro } = useContext(FilterContext)

  return (
    <section className={classes.filtro}>
      <h2>Filtrar pesquisa</h2>
      <FormCategoria />
      <FormCores />
      <FormPreco />
      <WrapperButton className={classes.btn} onClick={limparFiltro}>Limpar filtro</WrapperButton>
    </section>
  )
}

export default Filtro