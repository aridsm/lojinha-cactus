import React, { useContext, useRef } from "react";
import classes from "./Header.module.css";
import { ReactComponent as IconCart } from "../../assets/cart.svg";
import { ReactComponent as IconMenu } from "../../assets/menu.svg";
import { ReactComponent as IconSearch } from "../../assets/search.svg";
import { ReactComponent as IconSun } from "../../assets/sun.svg";
import { ReactComponent as IconMoon } from "../../assets/moon.svg";
import { CartContext } from "../../context/CartContext";
import useVisibility from "../../customHook/useVisibility";
import { ColorModeContext } from "../../context/ColorModeContext";

const Header = ({ onShow }) => {
  const { itensCart } = useContext(CartContext);
  const { changeMode, isDarkMode } = useContext(ColorModeContext);
  const refBtnMenu = useRef();
  const { menuVisible, setMenuVisible } = useVisibility(refBtnMenu);

  const totalItensNoCarrinho = itensCart.itens.reduce((prev, curr) => {
    return prev + curr.quantidade;
  }, 0);

  const btnMenu = (
    <button
      className={`${classes.btnMenu} ${menuVisible ? classes.menuVisible : ""}`}
      onClick={() => setMenuVisible(true)}
      ref={refBtnMenu}
      aria-label="abrir menu"
      type="button"
    >
      <IconMenu />
    </button>
  );

  return (
    <header className={classes.header}>
      <span className={classes.logo}>Cactus</span>
      <form className={classes.form}>
        <label htmlFor="search">Pesquise aqui</label>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="O que você procura?"
        />
        <IconSearch className={classes.iconSearch} />
      </form>
      {btnMenu}
      {menuVisible && (
        <div className={classes.menu}>
          <button className={classes.carrinho} onClick={onShow}>
            Seu carrinho
            <span className={classes.quantidade}>
              <IconCart />
              <span className={classes.valor}>{totalItensNoCarrinho}</span>
            </span>
          </button>
        </div>
      )}
      <button className={classes.btnColorMode} onClick={changeMode}>
        {isDarkMode ? <IconSun /> : <IconMoon />}
      </button>
    </header>
  );
};

export default Header;
