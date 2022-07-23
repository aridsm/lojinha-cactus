import React from 'react'
import WrapperButton from '../../utilities/WrapperButton'
import classes from './ProdutoItem.module.css'

const ProdutoItem = ({ nome, img, preco }) => {

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
          <label>qt. <input type='number' name='quantidade' id='quantidade' value='1' step='1' min='1' /></label>
        </form>
        <WrapperButton className={classes.btn}>Adicionar ao carrinho</WrapperButton>
      </div>
    </li>
  )
}

export default ProdutoItem