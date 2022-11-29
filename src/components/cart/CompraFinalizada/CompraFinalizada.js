import React, { useContext } from "react";
import Modal from "../../utilities/Modal";
import WrapperButton from "../../utilities/WrapperButton";
import ButtonFechar from "../../utilities/ButtonFechar";
import classes from "./CompraFinalizada.module.css";
import { ColorModeContext } from "../../../context/ColorModeContext";

const CompraFinalizada = ({ onClose }) => {
  const { isDarkMode } = useContext(ColorModeContext);
  return (
    <Modal onClose={onClose} isDarkMode={isDarkMode}>
      <div className={classes.modal}>
        <p className={classes.parabens}>Parabéns!</p>
        <p>Sua compra foi finalizada.</p>
        <p>Seu pedido chegará em breve.</p>
        <WrapperButton className={classes.button} onClick={onClose}>
          Comprar novamente
        </WrapperButton>
      </div>
      <ButtonFechar onClose={onClose} />
    </Modal>
  );
};

export default CompraFinalizada;
