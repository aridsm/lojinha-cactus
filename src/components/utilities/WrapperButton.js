import React from 'react'
import classes from './WrapperButton.module.css'

const WrapperButton = ({ children, className }) => {
  const styles = classes.button + ' ' + className
  return (
    <button className={styles}>{children}</button>
  )
}

export default WrapperButton