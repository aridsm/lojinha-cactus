import { act } from '@testing-library/react';
import React, { createContext, useReducer } from 'react'

export const CartContext = createContext();

const initialState = {
  itens: [],
  quantidade: 0,
}

const reducerCart = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    let novaListaItens = [...state.itens, action.item]
    return { ...state, itens: novaListaItens }
  }
}

const CartContextProvider = ({ children }) => {

  const [itensCart, dispatchItensCart] = useReducer(reducerCart, initialState);

  const addItemToCart = (item) => {
    dispatchItensCart({ type: 'ADD_ITEM', item: item })
  }

  return (
    <CartContext.Provider value={{ itensCart, addItem: addItemToCart }}>{children}</CartContext.Provider>
  )
}

export default CartContextProvider