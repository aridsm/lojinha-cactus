import React, { createContext, useReducer } from 'react'
import { todos_produtos } from '../lista_produtos';

export const FilterContext = createContext();

const filtro_inicial = {
  categorias: ['flores', 'cactos', 'outros'],
  cores: ['rosa', 'verde', 'laranja', 'azul', 'vermelho', 'roxo', 'amarelo', 'preto', 'branco'],
  valores: {
    min: '0',
    max: '1000'
  },
}

const filtroReducer = (state, action) => {
  if (action.type === 'CHECKBOX_FIELD') {
    let updatedValue;
    if (action.target.checked) {
      updatedValue = [...state[action.kind], action.target.value]
    } else {
      updatedValue = state[action.kind].filter(item => item !== action.target.value)
    }
    return { ...state, [action.kind]: updatedValue }
  }
  if (action.type === 'VALOR_MIN') {
    const updatedValores = { ...state.valores, min: action.value }
    return { ...state, valores: updatedValores }
  }
  if (action.type === 'VALOR_MAX') {
    const updatedValores = { ...state.valores, max: action.value }
    return { ...state, valores: updatedValores }
  }
}
/*

*/
const FilterContextProvider = ({ children }) => {

  const [filtro, dispatchFiltro] = useReducer(filtroReducer, filtro_inicial);

  const updateFilterCategorias = (target) => {
    dispatchFiltro({ type: 'CHECKBOX_FIELD', target, kind: 'categorias' })
  }
  const updateFilterCores = (target) => {
    dispatchFiltro({ type: 'CHECKBOX_FIELD', target, kind: 'cores' })
  }
  const updateFilterValorMin = (value) => {
    dispatchFiltro({ type: 'VALOR_MIN', value })
  }
  const updateFilterValorMax = (value) => {
    dispatchFiltro({ type: 'VALOR_MAX', value })
  }
  return (
    <FilterContext.Provider value={{ filtro, setCategorias: updateFilterCategorias, setCores: updateFilterCores, setValorMin: updateFilterValorMin, setValorMax: updateFilterValorMax }}>
      {children}
    </FilterContext.Provider>
  )
}

export default FilterContextProvider