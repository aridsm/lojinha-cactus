import React from 'react'
import WrapperButton from '../utilities/WrapperButton';
import classes from './Filtro.module.css'
import FormCategoria from './FormCategoria'
import FormCores from './FormCores';
import FormPreco from './FormPreco';

const Filtro = () => {

  return (
    <section className={classes.filtro}>
      <h2>Filtrar pesquisa</h2>
      <FormCategoria />
      <FormCores />
      <FormPreco />
      <WrapperButton className={classes.button}>Aplicar filtro</WrapperButton>
    </section>
  )
}

export default Filtro