import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Modal from '../utilities/Modal'
import CarItem from './CarItem';
import classes from './Cart.module.css';

const Cart = ({ onClose }) => {

  const { itensCart } = useContext(CartContext);

  return (
    <Modal onClose={onClose}>
      <ul className={classes.cart}>
        {itensCart.itens.map(item => <CarItem key={item.nome} nome={item.nome} preco={item.preco} img={item.img} />)}
      </ul>
    </Modal>
  )
}

export default Cart