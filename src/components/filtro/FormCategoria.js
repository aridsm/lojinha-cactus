import React, { useEffect, useState } from 'react'
import WrapperFiltroSection from '../utilities/WrapperFiltroSection'
import classes from './FormCategoria.module.css'

const CheckboxCategoria = ({ id, option, lista, setLista }) => {
  const handleChange = (e) => {
    if (e.target.checked) {
      setLista([...lista, e.target.value])
    } else {
      setLista(lista.filter(item => item !== e.target.value))
    }
  }

  return (
    <label htmlFor={id}>
      {option}
      <input type='checkbox' name='categoria' id={id} value={option} onChange={handleChange} checked={lista.includes(option)} />
    </label>
  )
}

const FormCategoria = () => {
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState([])

  useEffect(() => {
    console.log(categoriasSelecionadas)

  }, [categoriasSelecionadas])


  return (
    <WrapperFiltroSection title='Categorias'>
      <form className={classes.form}>
        <CheckboxCategoria id='check1' option='flores' lista={categoriasSelecionadas} setLista={setCategoriasSelecionadas} />
        <CheckboxCategoria id='check2' option='cactos' lista={categoriasSelecionadas} setLista={setCategoriasSelecionadas} />
        <CheckboxCategoria id='check3' option='outros' lista={categoriasSelecionadas} setLista={setCategoriasSelecionadas} />
      </form>
    </WrapperFiltroSection>

  )
}

export default FormCategoria