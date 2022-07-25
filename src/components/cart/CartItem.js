import React, { useEffect } from 'react'
import classes from './CartItem.module.css';

const CarItem = ({ nome, preco, img, quantidade }) => {

  useEffect(() => {
  }, [])

  return (
    <li className={classes.item}>
      <div className={classes.imgDiv}>
        <img src={require(`../../assets/imgs-produtos/${img}`)} alt={nome} />
      </div>
      <div className={classes.infos}>
        <p>{nome}</p>
        <p className={classes.preco}>R$ {Number(preco * quantidade).toFixed(2)}</p>
        <p className={classes.unidade}>{quantidade} unidade(s) de {Number(preco).toFixed(2)}</p>
        <button className={classes.btn}>Excluir item</button>
      </div>
      <form>
        <label htmlFor='quantidade'>qt.</label>
        <input type='number' id='quantidade' name='quantidade' value={+quantidade} />
      </form>
    </li>
  )
}

export default CarItem