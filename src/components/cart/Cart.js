import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import Modal from '../utilities/Modal'
import CartItem from './CartItem';
import classes from './Cart.module.css';
import WrapperButton from '../utilities/WrapperButton';
import { ReactComponent as IconFechar } from '../../assets/x.svg'


const Cart = ({ onClose }) => {

  const { itensCart } = useContext(CartContext);

  useEffect(() => {
    console.log(itensCart)
  }, [itensCart])
  return (
    <Modal onClose={onClose}>
      <div className={classes.header}>
        <p>Seu carrinho</p>
        <button>Esvaziar carrinho</button>
      </div>
      <ul className={classes.cartLista}>
        {itensCart.itens.map(item => <CartItem key={item.nome} nome={item.nome} preco={item.preco} img={item.img} quantidade={item.quantidade} />)}
      </ul>
      <div className={classes.total}>
        <p>Subtotal: <span>R$ {Number(itensCart.total).toFixed(2)}</span></p>
        <WrapperButton>Finalizar compra</WrapperButton>
      </div>
      <button className={classes.btnFechar} onClick={onClose}><IconFechar /></button>
    </Modal>
  )
}

export default Cart