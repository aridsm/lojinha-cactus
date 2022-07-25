import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Modal from '../utilities/Modal'
import CartItem from './CartItem';
import classes from './Cart.module.css';
import WrapperButton from '../utilities/WrapperButton';
import ButtonFechar from '../utilities/ButtonFechar';


const Cart = ({ onClose, onShowFinal }) => {

  const { itensCart, updateQuantidade, removeItem, removeAll } = useContext(CartContext);

  const listaItensCart = itensCart.itens.map(item => <CartItem key={item.nome} nome={item.nome} preco={item.preco} img={item.img} quantidade={item.quantidade} updateQuantidade={updateQuantidade} removeItem={removeItem} />);

  const showFinalModalHandler = () => {
    onClose();
    removeAll();
    onShowFinal();
  }

  return (
    <Modal onClose={onClose}>
      <div className={classes.header}>
        <p>Seu carrinho</p>
        <button onClick={removeAll}>Esvaziar carrinho</button>
      </div>
      <ul className={classes.cartLista}>
        {itensCart.itens.length ? listaItensCart : <p className={classes.semItens}>Não há itens no seu carrinho.</p>}
      </ul>{itensCart.itens.length ?
        <div className={classes.total}>
          <p>Subtotal: <span>R$ {Number(itensCart.total).toFixed(2)}</span></p>
          <WrapperButton onClick={showFinalModalHandler}>Finalizar compra</WrapperButton>
        </div>
        : ''}
      <ButtonFechar onClose={onClose} />
    </Modal>
  )
}

export default Cart