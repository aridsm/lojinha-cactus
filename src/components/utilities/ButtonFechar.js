import React from 'react'
import classes from './ButtonFechar.module.css'
import { ReactComponent as IconFechar } from '../../assets/x.svg'

const ButtonFechar = ({ onClose, className }) => {
  const styles = classes.button + ' ' + className
  return (
    <button className={styles} onClick={onClose}><IconFechar /></button>
  )
}

export default ButtonFechar