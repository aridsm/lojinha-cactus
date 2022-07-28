import React, { useContext, useRef, useState } from 'react'
import { CartContext } from '../../../context/CartContext';
import WrapperButton from '../../utilities/WrapperButton'
import classes from './ProdutoItem.module.css'

const ProdutoItem = ({ nome, img, preco }) => {

  const [quantidade, setQuantidade] = useState(1);
  const [isAlertShown, setIsAlertShown] = useState(false);
  const animaTimeout = useRef();

  const { addItem } = useContext(CartContext);

  const addItemToCartHandler = () => {

    clearTimeout(animaTimeout.current)

    addItem({
      nome: nome,
      preco: preco,
      quantidade: +quantidade,
      img: img
    })

    setIsAlertShown(true);
    const animationDuration = 1000;

    animaTimeout.current = setTimeout(() => {
      setIsAlertShown(false);
      console.log('1')
    }, animationDuration)
  }

  return (
    <li className={classes.card}>
      <div><img src={require(`../../../assets/imgs-produtos/${img}`)} alt={nome} /></div>
      <div className={classes.infos}>
        <p className={classes.nome}>{nome}</p>
        <p>
          <span className={classes.reais}>R$</span>
          <span className={classes.preco}>{preco}</span>
        </p>
        <form className={classes.quantidadeForm}>
          <label>qt. <input type='number' name='quantidade' id='quantidade' value={quantidade} onChange={(e) => setQuantidade(e.target.value)} step='1' min='1' /></label>
        </form>
        <div className={classes.btnAlert}>
          {isAlertShown && <span className={classes.alertAdd}>+</span>}
          <WrapperButton className={classes.btn} onClick={addItemToCartHandler}>Adicionar ao carrinho</WrapperButton>
        </div>

      </div>
    </li>
  )
}

export default ProdutoItem