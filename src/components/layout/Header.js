import React, { useContext, useEffect, useRef, useState } from 'react'
import classes from './Header.module.css'
import { ReactComponent as IconCart } from '../../assets/cart.svg'
import { ReactComponent as IconPerson } from '../../assets/person.svg'
import { ReactComponent as IconMenu } from '../../assets/menu.svg'
import WrapperButton from '../utilities/WrapperButton'
import { CartContext } from '../../context/CartContext'

const Header = ({ onShow }) => {

  const [menuVisible, setMenuVisible] = useState(true);
  const refBtnMenu = useRef();

  const { itensCart } = useContext(CartContext);

  const totalItensNoCarrinho = itensCart.itens.reduce((prev, curr) => {
    return prev + curr.quantidade;
  }, 0);

  const hideMenu = (e) => {
    if (e.target !== refBtnMenu.current && !refBtnMenu.current.contains(e.target)) {
      setMenuVisible(false)
    }
  }

  useEffect(() => {
    const resizeWindow = () => {
      if (window.innerWidth < 925) {
        setMenuVisible(false);

        document.addEventListener('click', hideMenu)
        return () => document.removeEventListener('click', hideMenu)
      }
    }
    resizeWindow();
  }, [])

  const btnMenu = <button className={`${classes.btnMenu} ${menuVisible ? classes.menuVisible : ''}`} onClick={() => setMenuVisible(true)} ref={refBtnMenu}><IconMenu /></button>;

  return (
    <header className={classes.header}>
      <span className={classes.logo}>Cactus</span>
      <form className={classes.form}>
        <label htmlFor='search'>Pesquise aqui</label>
        <input type='search' name='search' id='search' placeholder='O que voce procura?' />
        <WrapperButton>Procurar</WrapperButton>
      </form>
      {btnMenu}
      <div className={`${classes.menu} ${menuVisible ? classes.menuVisible : ''}`}>
        <button className={classes.carrinho} onClick={onShow}>
          Seu carrinho <span className={classes.quantidade}>
            <IconCart />
            <span className={classes.valor}>{totalItensNoCarrinho}</span>
          </span>
        </button>
        <button className={classes.conta}>Sua conta <IconPerson /></button>
      </div>
    </header>
  )
}

export default Header