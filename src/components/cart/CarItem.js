import React, { useEffect } from 'react'
import classes from './CartItem.module.css';

const CarItem = ({ nome, preco, img }) => {

  useEffect(() => {
    console.log(img)
  }, [img])

  return (
    <li className={classes.item}>
      <div className={classes.imgDiv}>
        <img src={require(`../../assets/imgs-produtos/${img}`)} alt={nome} />
      </div>
      <div className={classes.infos}>
        <p>{nome}</p>
        <p className={classes.preco}>R$ {preco}</p>
        <button className={classes.btn}>Excluir item</button>
      </div>
      <form>
        <label htmlFor='quantidade'>qt.</label>
        <input type='number' />
      </form>
    </li>
  )
}

export default CarItem