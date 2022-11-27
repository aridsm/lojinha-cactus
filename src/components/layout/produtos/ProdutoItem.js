import React, { useContext, useRef, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import classes from "./ProdutoItem.module.css";

const ProdutoItem = ({ nome, img, preco, description }) => {
  const [quantidade, setQuantidade] = useState(1);
  const animaTimeout = useRef();

  const { addItem } = useContext(CartContext);

  const addItemToCartHandler = (e) => {
    e.preventDefault();

    clearTimeout(animaTimeout.current);

    addItem({
      nome: nome,
      preco: preco,
      quantidade: +quantidade,
      img: img,
    });
  };

  return (
    <li className={classes.card}>
      <div className={classes.imgContainer}>
        <img src={require(`../../../assets/imgs-produtos/${img}`)} alt={nome} />
      </div>
      <div className={classes.infos}>
        <div className={classes.precoENome}>
          <p className={classes.name}>{nome}</p>
          <p className={classes.description} title={description}>
            {description}
          </p>
        </div>

        <div className={classes.flex}>
          <p className={classes.preco}>R$ {preco}</p>
          <form className={classes.quantidadeForm}>
            <label>
              <span>quantidade</span>
              <input
                type="number"
                name="quantidade"
                id="quantidade"
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
                step="1"
                min="1"
              />
            </label>
            <button
              className={classes.btnAdd}
              onClick={addItemToCartHandler}
              title="adicionar ao carrinho"
            >
              +
            </button>
          </form>
        </div>
      </div>
    </li>
  );
};

export default ProdutoItem;
