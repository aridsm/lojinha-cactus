import React, { useContext } from 'react'
import { FilterContext } from '../../context/FilterContext'
import WrapperFiltroSection from '../utilities/WrapperFiltroSection'
import classes from './FormCategoria.module.css'

const CheckboxCategoria = ({ nome, lista, setCategorias }) => {

  const handleChange = ({ target }) => {
    setCategorias(target)
  }

  return (
    <label htmlFor={nome}>
      {nome}
      <input type='checkbox' name='categoria' id={nome} value={nome} onChange={handleChange} checked={lista.includes(nome)} />
    </label>
  )
}

const categorias = ['flores', 'cactos', 'outros']

const FormCategoria = () => {

  const { filtro, setCategorias } = useContext(FilterContext)

  return (
    <WrapperFiltroSection title='Categorias'>
      <form className={classes.form}>
        {categorias.map(categoria =>
          <CheckboxCategoria key={categoria} nome={categoria} lista={filtro.categorias} setCategorias={setCategorias} />
        )}
      </form>
    </WrapperFiltroSection>

  )
}

export default FormCategoria