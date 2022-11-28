import React, { useContext, useEffect, useState } from "react";
import classes from "./Header.module.css";
import { ReactComponent as IconCart } from "../../assets/cart.svg";
import { ReactComponent as IconSearch } from "../../assets/search.svg";
import { ReactComponent as IconSun } from "../../assets/sun.svg";
import { ReactComponent as IconMoon } from "../../assets/moon.svg";
import { CartContext } from "../../context/CartContext";
import { ColorModeContext } from "../../context/ColorModeContext";
import { todos_produtos } from "../../lista_produtos";

const Header = ({ onShow }) => {
  const { itensCart } = useContext(CartContext);
  const { changeMode, isDarkMode } = useContext(ColorModeContext);
  const [pageScrolled, setPageScrolled] = useState(false);
  const [searchList, setSearchList] = useState([]);

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

  const searchHandler = ({ target }) => {
    const inputValue = target.value.toLowerCase();

    const searchedProds = todos_produtos.filter((prod) =>
      prod.nome.toLowerCase().startsWith(inputValue)
    );

    if (searchedProds.length === todos_produtos.length) setSearchList([]);
    else setSearchList(searchedProds);
  };

  return (
    <header
      className={`${classes.header} ${pageScrolled ? classes.scroll : ""}`}
    >
      <span className={classes.logo}>Cactus</span>
      <form className={classes.form}>
        <label htmlFor="search">Pesquise aqui</label>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="O que você procura?"
          onChange={searchHandler}
        />
        <IconSearch className={classes.iconSearch} />
      </form>

      <ul>
        {searchList.map((item) => (
          <li key={item.nome}>{item.nome}</li>
        ))}
      </ul>

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
    </header>
  );
};

export default Header;
