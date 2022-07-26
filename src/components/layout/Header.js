import React, { useContext, useRef } from 'react'
import classes from './Header.module.css'
import { ReactComponent as IconCart } from '../../assets/cart.svg'
import { ReactComponent as IconPerson } from '../../assets/person.svg'
import { ReactComponent as IconMenu } from '../../assets/menu.svg'
import WrapperButton from '../utilities/WrapperButton'
import { CartContext } from '../../context/CartContext'
import useVisibility from '../../customHook/useVisibility'

const Header = ({ onShow }) => {

  const { itensCart } = useContext(CartContext);
  const refBtnMenu = useRef();
  const { menuVisible, setMenuVisible } = useVisibility(refBtnMenu)

  const totalItensNoCarrinho = itensCart.itens.reduce((prev, curr) => {
    return prev + curr.quantidade;
  }, 0);

  const btnMenu = <button className={`${classes.btnMenu} ${menuVisible ? classes.menuVisible : ''}`} onClick={() => setMenuVisible(true)} ref={refBtnMenu} aria-label='abrir menu' type='button'><IconMenu /></button>;

  return (
    <header className={classes.header}>
      <span className={classes.logo}>Cactus</span>
      <form className={classes.form}>
        <label htmlFor='search'>Pesquise aqui</label>
        <input type='search' name='search' id='search' placeholder='O que voce procura?' />
        <WrapperButton>Procurar</WrapperButton>
      </form>
      {btnMenu}
      {menuVisible &&
        <div className={classes.menu}>
          <button className={classes.carrinho} onClick={onShow}>
            Seu carrinho <span className={classes.quantidade}>
              <IconCart />
              <span className={classes.valor}>{totalItensNoCarrinho}</span>
            </span>
          </button>
          <button className={classes.conta}>Sua conta <IconPerson /></button>
        </div>
      }
    </header>
  )
}

export default Header