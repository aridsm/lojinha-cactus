import React, { createContext, useReducer } from 'react'

export const CartContext = createContext();

const initialState = {
  itens: [],
  total: 0,
}

const reducerCart = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const indiceItemNoCarrinho = state.itens.findIndex(item => item.nome === action.item.nome);
    const itemJaExiste = state.itens[indiceItemNoCarrinho];
    let novaListaItens;
    if (itemJaExiste) {
      const itemAtualizado = { ...itemJaExiste, quantidade: itemJaExiste.quantidade + action.item.quantidade };
      novaListaItens = [...state.itens];
      novaListaItens[indiceItemNoCarrinho] = itemAtualizado;
    } else {
      novaListaItens = [...state.itens, action.item];
    }
    const totalAtualizado = state.total + action.item.preco * action.item.quantidade;
    return { itens: novaListaItens, total: totalAtualizado }
  };
  if (action.type === 'DELETAR_ITEM') {

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