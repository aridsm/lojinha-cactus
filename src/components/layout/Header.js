import React from 'react'
import classes from './Header.module.css'
import { ReactComponent as IconCart } from '../../assets/cart.svg'
import { ReactComponent as IconPerson } from '../../assets/person.svg'
import WrapperButton from '../utilities/WrapperButton'

const Header = ({ onShow }) => {
  return (
    <header className={classes.header}>
      <span className={classes.logo}>Cactus</span>
      <form className={classes.form}>
        <label htmlFor='search'>Pesquise aqui</label>
        <input type='search' name='search' id='search' placeholder='O que voce procura?' />
        <WrapperButton>Procurar</WrapperButton>
      </form>
      <button className={classes.carrinho} onClick={onShow}>
        Seu carrinho <span className={classes.quantidade}>
          <IconCart />
          <span className={classes.valor}>1</span>
        </span>
      </button>
      <button className={classes.conta}>Sua conta <IconPerson /></button>
    </header>
  )
}

export default Header