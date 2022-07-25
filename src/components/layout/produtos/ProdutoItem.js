import React, { useContext, useState } from 'react'
import { CartContext } from '../../../context/CartContext';
import WrapperButton from '../../utilities/WrapperButton'
import classes from './ProdutoItem.module.css'

const ProdutoItem = ({ nome, img, preco }) => {

  const [quantidade, setQuantidade] = useState(1);

  const { addItem } = useContext(CartContext);

  const addItemToCartHandler = () => {
    addItem({
      nome: nome,
      preco: preco,
      quantidade: +quantidade,
      img: img
    })
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
        <WrapperButton className={classes.btn} onClick={addItemToCartHandler}>Adicionar ao carrinho</WrapperButton>
      </div>
    </li>
  )
}

export default ProdutoItem