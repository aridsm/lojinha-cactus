import React from 'react'
import Modal from '../../utilities/Modal'
import WrapperButton from '../../utilities/WrapperButton'
import ButtonFechar from '../../utilities/ButtonFechar'
import classes from './CompraFinalizada.module.css'

const CompraFinalizada = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <div className={classes.modal}>
        <p className={classes.parabens}>Parabéns!</p>
        <p>Sua compra foi finalizada.</p>
        <p>Seu pedido chegará em breve.</p>
        <WrapperButton className={classes.button} onClick={onClose}>Comprar novamente</WrapperButton>
      </div>
      <ButtonFechar onClose={onClose} />
    </Modal>
  )
}

export default CompraFinalizada