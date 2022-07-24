import React from 'react'
import classes from './WrapperButton.module.css'

const WrapperButton = ({ children, className, onClick }) => {
  const styles = classes.button + ' ' + className
  return (
    <button className={styles} onClick={onClick}>{children}</button>
  )
}

export default WrapperButton