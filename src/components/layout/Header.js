import React, { useContext, useEffect, useState } from "react";
import classes from "./Header.module.css";
import { ReactComponent as IconCart } from "../../assets/cart.svg";
import { ReactComponent as IconSun } from "../../assets/sun.svg";
import { ReactComponent as IconMoon } from "../../assets/moon.svg";
import { ReactComponent as LogoSvg } from "../../assets/logo.svg";
import { CartContext } from "../../context/CartContext";
import { ColorModeContext } from "../../context/ColorModeContext";
import SearchField from "./SearchField";

const Header = ({ onShow }) => {
  const { itensCart } = useContext(CartContext);
  const { changeMode, isDarkMode } = useContext(ColorModeContext);
  const [pageScrolled, setPageScrolled] = useState(false);

  const totalItensNoCarrinho = itensCart.itens.reduce((prev, curr) => {
    return prev + curr.quantidade;
  }, 0);

  useEffect(() => {
    const scrollPage = () => {
      if (window.scrollY > 16) {
        setPageScrolled(true);
      } else {
        setPageScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollPage);

    return () => {
      window.removeEventListener("scroll", scrollPage);
    };
  }, []);

  return (
    <header
      className={`${classes.header} ${pageScrolled ? classes.scroll : ""}`}
    >
      <div className={`container ${classes.container}`}>
        <span className={classes.logo}>
          <LogoSvg />
          Cactus
        </span>
        <SearchField />

        <button className={classes.carrinho} onClick={onShow}>
          <span className={classes.cartTxt}>Seu carrinho</span>
          <span className={classes.quantidade}>
            <IconCart />
            <span className={classes.valor}>{totalItensNoCarrinho}</span>
          </span>
        </button>
        <button
          className={classes.btnColorMode}
          onClick={changeMode}
          title={isDarkMode ? "Ativar modo claro" : "Ativar modo escuro"}
        >
          {isDarkMode ? <IconSun /> : <IconMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
