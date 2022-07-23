import React, { useReducer } from 'react'
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

  const [valores, dispatchValores] = useReducer(reducerValores, {
    min: 0,
    max: 1000
  })

  return (
    <WrapperFiltroSection title='Preço'>
      <form className={classes.form}>
        <label htmlFor='check1'>Min (R$)<input type='number' step='0.01' min='0' name='valor_min' id='min' value={valores.min} onChange={({ target }) => dispatchValores({ type: 'MIN', value: target.value })} /></label>
        <label htmlFor='check1'>Max (R$)<input type='number' step='0.01' name='valor_max' id='max' value={valores.max} onChange={({ target }) => dispatchValores({ type: 'MAX', value: target.value })} /></label>

      </form>
    </WrapperFiltroSection>
  )
}

export default FormPreco