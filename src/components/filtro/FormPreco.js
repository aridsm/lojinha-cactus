import React, { useContext, useEffect, useReducer } from 'react'
import { FilterContext } from '../../context/FilterContext';
import WrapperFiltroSection from '../utilities/WrapperFiltroSection';
import classes from './FormPreco.module.css';

function reducerValores(state, action) {
  if (action.type === 'MIN') {
    return { ...state, min: action.value }
  }
  if (action.type === 'MAX') {
    return { ...state, max: action.value }
  }
  return state
}

const FormPreco = () => {

  const { filtro, setValorMin, setValorMax } = useContext(FilterContext)

  return (
    <WrapperFiltroSection title='Preço'>
      <form className={classes.form}>
        <label htmlFor='check1'>Min (R$)<input type='number' step='0.01' min='0' name='valor_min' id='min' value={filtro.valores.min} onChange={({ target }) => setValorMin(target.value)} /></label>
        <label htmlFor='check1'>Max (R$)<input type='number' step='0.01' name='valor_max' id='max' value={filtro.valores.max} onChange={({ target }) => setValorMax(target.value)} /></label>

      </form>
    </WrapperFiltroSection>
  )
}

export default FormPreco