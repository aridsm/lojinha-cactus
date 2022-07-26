import React, { useContext, useRef } from 'react'
import { FilterContext } from '../../context/FilterContext';
import WrapperButton from '../utilities/WrapperButton';
import classes from './Filtro.module.css'
import FormCategoria from './FormCategoria'
import FormCores from './FormCores';
import FormPreco from './FormPreco';
import useVisibility from '../../customHook/useVisibility'

const Filtro = () => {

  const { limparFiltro } = useContext(FilterContext);
  const refBtnFiltro = useRef();
  const { menuVisible, setMenuVisible } = useVisibility(refBtnFiltro);

  return (
    <>
      <button className={classes.btnAbrirFiltro} ref={refBtnFiltro} aria-label='Abrir filtro' type='button' onClick={() => setMenuVisible(true)}>Filtro</button>
      {menuVisible && <section className={`${classes.filtro} ${menuVisible ? classes.filtroVisible : ''}`}>
        <h2>Filtrar pesquisa</h2>
        <FormCategoria />
        <FormCores />
        <FormPreco />
        <WrapperButton className={classes.btn} onClick={limparFiltro}>Limpar filtro</WrapperButton>
      </section>}

    </>
  )
}

export default Filtro