import React from 'react'
import classes from './WrapperFiltroSection.module.css'
const WrapperFiltroSection = ({ title, children }) => {
  return (
    <section className={classes.section}>
      <p className={classes.title}>{title}</p>
      {children}
    </section>
  )
}

export default WrapperFiltroSection