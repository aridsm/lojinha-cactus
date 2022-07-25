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
  if (action.type === 'UPDATE_ITEM') {
    const indexItem = state.itens.findIndex(item => item.nome === action.nomeItem);
    const itemAntigo = state.itens[indexItem];

    const totalAtualizado = state.total - itemAntigo.quantidade * itemAntigo.preco + action.quantidade * state.itens[indexItem].preco;

    const itemAtualizado = { ...itemAntigo, quantidade: action.quantidade };
    let novaListaItens = [...state.itens];
    novaListaItens[indexItem] = itemAtualizado;

    return { itens: novaListaItens, total: totalAtualizado }
  }
  if (action.type === 'REMOVE_ITEM') {
    const novaLista = state.itens.filter(item => item.nome !== action.nome);

    const indexItem = state.itens.findIndex(item => item.nome === action.nome);
    const item = state.itens[indexItem];
    const novaQuantidade = state.total - item.preco * item.quantidade;

    return { itens: novaLista, total: novaQuantidade }
  }
  if (action.type === 'REMOVE_ALL') {
    return initialState;
  }
}

const CartContextProvider = ({ children }) => {

  const [itensCart, dispatchItensCart] = useReducer(reducerCart, initialState);

  const addItemToCart = (item) => {
    dispatchItensCart({ type: 'ADD_ITEM', item })
  }
  const updateCartItem = (nomeItem, quantidade) => {
    dispatchItensCart({ type: 'UPDATE_ITEM', nomeItem, quantidade })
  }
  const removeCartItem = (nome) => {
    dispatchItensCart({ type: 'REMOVE_ITEM', nome })
  }
  const removeAllFromCart = () => {
    dispatchItensCart({ type: 'REMOVE_ALL' })
  }
  return (
    <CartContext.Provider value={{ itensCart, addItem: addItemToCart, updateQuantidade: updateCartItem, removeItem: removeCartItem, removeAll: removeAllFromCart }}>{children}</CartContext.Provider>
  )
}

export default CartContextProvider