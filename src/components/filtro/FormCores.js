import React, { useContext } from 'react'
import WrapperFiltroSection from '../utilities/WrapperFiltroSection'
import { ReactComponent as IconCheck } from '../../assets/check.svg'
import classes from './FormCores.module.css'
import { FilterContext } from '../../context/FilterContext'

const cores = [{
  cor: 'rosa',
  bg: '#FE96C2',
  color: '#570B2B'
}, {
  cor: 'verde',
  bg: '#7FD878',
  color: '#245320'

}, {
  cor: 'laranja',
  bg: '#F4B770',
  color: '#563309'
}, {
  cor: 'azul',
  bg: '#96C0FE',
  color: '#1F3556'
}, {
  cor: 'vermelho',
  bg: '#F56F6B',
  color: '#520F0F'
}, {
  cor: 'roxo',
  bg: '#B796FE',
  color: '#2A1B4A'
}, {
  cor: 'amarelo',
  bg: '#F1F371',
  color: '#4A4B0A'
}, {
  cor: 'preto',
  bg: '#5C5C5C',
  color: '#FFFFFF'
}, {
  cor: 'branco',
  bg: '#FFFFFF',
  color: '#2C2C2C'
}
]

const FormCores = () => {

  const { filtro, setCores } = useContext(FilterContext)

  const handleChange = ({ target }) => {
    setCores(target)
  }

  return (
    <WrapperFiltroSection title='Cores'>
      <form className={classes.listaCores}>
        {cores.map(item =>
          <div className={classes.corItem} key={item.cor}>
            <label htmlFor={item.cor} style={{ backgroundColor: item.bg, color: item.color }} className={classes.btnCor}>{item.cor}</label>
            <input type='checkbox' name='cores' id={item.cor} value={item.cor} onChange={handleChange} checked={filtro.cores.includes(item.cor)} />
            {filtro.cores.includes(item.cor) && <span className={classes.checked}><IconCheck /></span>}
          </div>
        )}
      </form>
    </WrapperFiltroSection>
  )
}

export default FormCores