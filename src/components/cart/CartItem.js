import React, { useState } from 'react'
import classes from './CartItem.module.css';

const CarItem = ({ nome, preco, img, quantidade, updateQuantidade, removeItem }) => {

  const [novaQuantidade, setNovaQuantidade] = useState(quantidade);

  const updateQuantidadeHandler = (e) => {
    const value = +e.target.value;
    setNovaQuantidade(value);
    updateQuantidade(nome, value)
  }

  const removeItemFromCart = () => {
    removeItem(nome)
  }

  return (
    <li className={classes.item}>
      <div className={classes.imgDiv}>
        <img src={require(`../../assets/imgs-produtos/${img}`)} alt={nome} />
      </div>
      <div className={classes.infos}>
        <p>{nome}</p>
        <p className={classes.preco}>R$ {Number(preco * quantidade).toFixed(2)}</p>
        <p className={classes.unidade}>{quantidade} unidade(s) de R$ {Number(preco).toFixed(2)}</p>
        <button className={classes.btn} onClick={removeItemFromCart}>Excluir item</button>
      </div>
      <form>
        <label htmlFor='quantidade'>qt.</label>
        <input type='number' id='quantidade' name='quantidade' min='1' step='1' value={novaQuantidade} onChange={updateQuantidadeHandler} />
      </form>
    </li>
  )
}

export default CarItem